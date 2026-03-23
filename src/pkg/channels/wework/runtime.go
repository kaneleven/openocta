package wework

import (
	"context"
	"fmt"
	"strings"
	"sync"
	"sync/atomic"
	"time"

	"github.com/go-sphere/wecom-aibot-go-sdk/aibot"
	"github.com/openocta/openocta/pkg/channels"
	"github.com/openocta/openocta/pkg/logging"
)

// Runtime 使用企业微信智能机器人 WebSocket 长连接（aibot SDK）收发消息。
// 参考：https://developer.work.weixin.qq.com/document/path/101463
type Runtime struct {
	*channels.BaseRuntimeImpl

	botID     string
	botSecret string
	wsURL     string

	mu            sync.Mutex
	client        *aibot.WSClient
	authenticated bool
	lastInboundMs int64
	logger        *logging.GlobalLogger
}

// NewRuntime 使用 BotID + Secret 创建企业微信智能机器人运行时。
func NewRuntime(botID, botSecret, wsURL string, cfg channels.BaseRuntimeConfig, sink channels.InboundSink) *Runtime {
	base := channels.NewBaseRuntimeImpl(channelID, cfg.AccountID, cfg, sink)
	return &Runtime{
		BaseRuntimeImpl: base,
		botID:           strings.TrimSpace(botID),
		botSecret:       strings.TrimSpace(botSecret),
		wsURL:           strings.TrimSpace(wsURL),
		logger:          logging.Sub("wework-runtime"),
	}
}

// Start 启动长连接客户端。
func (r *Runtime) Start(ctx context.Context) error {
	if err := r.BaseRuntimeImpl.Start(ctx); err != nil {
		return err
	}
	if !r.BaseRuntimeImpl.IsRunning() {
		return nil
	}
	// 在 WebSocket 认证完成前不把通道标为 running
	r.BaseRuntimeImpl.MarkConnectionFailed(nil)
	if r.botID == "" || r.botSecret == "" {
		r.SetLastError(fmt.Errorf("wework: botId and botSecret are required when enabled"))
		return nil
	}
	go r.runClient(ctx)
	return nil
}

func (r *Runtime) runClient(ctx context.Context) {
	opts := aibot.WSClientOptions{
		BotID:  r.botID,
		Secret: r.botSecret,
		Logger: newSDKLogger("wework-aibot-sdk"),
	}
	if r.wsURL != "" {
		opts.WSURL = r.wsURL
	}
	client := aibot.NewWSClient(opts)

	client.OnAuthenticated(func() {
		r.mu.Lock()
		r.authenticated = true
		r.mu.Unlock()
		r.SetLastError(nil)
		r.BaseRuntimeImpl.MarkConnectionRestored()
		if r.logger != nil {
			r.logger.Info("[wework-runtime] aibot websocket authenticated")
		}
	})

	client.OnDisconnected(func(reason string) {
		r.mu.Lock()
		r.authenticated = false
		r.mu.Unlock()
		r.BaseRuntimeImpl.MarkConnectionFailed(fmt.Errorf("wework ws disconnected: %s", reason))
	})

	client.OnError(func(err error) {
		if err != nil && r.logger != nil {
			r.logger.Warn("[wework-runtime] aibot error: %v", err)
		}
	})

	client.OnMessageText(func(frame *aibot.WsFrame) {
		var msg aibot.TextMessage
		if err := aibot.ParseMessageBody(frame, &msg); err != nil {
			return
		}
		chatID := strings.TrimSpace(msg.ChatID)
		if chatID == "" {
			chatID = strings.TrimSpace(msg.From.UserID)
		}
		sender := strings.TrimSpace(msg.From.UserID)
		if sender == "" {
			sender = chatID
		}
		if !r.IsAllowed(sender) {
			return
		}
		var ts time.Time
		if msg.CreateTime > 0 {
			ts = time.Unix(msg.CreateTime, 0)
		} else {
			ts = time.Now()
		}
		atomic.StoreInt64(&r.lastInboundMs, time.Now().UnixMilli())
		content := ""
		if msg.Text.Content != "" {
			content = msg.Text.Content
		}
		rawChatType := strings.TrimSpace(msg.ChatType)
		normalizedChatType := "dm"
		switch strings.ToLower(rawChatType) {
		case "group":
			normalizedChatType = "group"
		case "single", "":
			normalizedChatType = "dm"
		default:
			normalizedChatType = rawChatType
		}
		in := &channels.InboundMessage{
			ID:       msg.MsgID,
			SenderID: sender,
			ChatID:   chatID,
			ChatType: normalizedChatType,
			Content:  content,
			Time:     ts,
			Meta: map[string]interface{}{
				"msgtype":    "text",
				"chattype":   msg.ChatType,
				"aibot_mode": "wecom_ws",
			},
		}
		_ = r.PublishInbound(context.Background(), in)
	})

	r.mu.Lock()
	r.client = client
	r.mu.Unlock()

	client.Connect()

	select {
	case <-ctx.Done():
	case <-r.WaitForStop():
	}

	client.Disconnect()
	r.mu.Lock()
	r.client = nil
	r.authenticated = false
	r.mu.Unlock()
}

// Stop 断开 WebSocket 并停止基础运行时。
func (r *Runtime) Stop() error {
	r.mu.Lock()
	c := r.client
	r.mu.Unlock()
	if c != nil {
		c.Disconnect()
	}
	return r.BaseRuntimeImpl.Stop()
}

// Send 通过长连接主动发送 Markdown（或作为普通文本通道使用）。
func (r *Runtime) Send(msg *channels.RuntimeOutboundMessage) error {
	if msg == nil {
		return nil
	}
	r.mu.Lock()
	cl := r.client
	r.mu.Unlock()
	if cl == nil || !cl.IsConnected() {
		return fmt.Errorf("wework runtime: websocket not connected")
	}
	chatID := strings.TrimSpace(msg.ChatID)
	if chatID == "" {
		chatID = strings.TrimSpace(msg.MetadataString("chat_id"))
	}
	if chatID == "" {
		return fmt.Errorf("wework runtime: chatID is required for Send")
	}
	_, err := cl.SendMarkdown(chatID, msg.Content)
	if err != nil {
		return fmt.Errorf("wework runtime: send markdown: %w", err)
	}
	if r.logger != nil {
		r.logger.Info("[wework-runtime] sent markdown, chat_id=%s, len=%d", chatID, len(msg.Content))
	}
	return nil
}

// SendStream 聚合流式片段后一次性发送。
func (r *Runtime) SendStream(chatID string, stream <-chan *channels.RuntimeStreamChunk) error {
	var buf strings.Builder
	for chunk := range stream {
		if chunk == nil {
			continue
		}
		if chunk.Error != "" {
			return fmt.Errorf("wework runtime stream error: %s", chunk.Error)
		}
		if !chunk.IsThinking {
			buf.WriteString(chunk.Content)
		}
		if chunk.IsComplete {
			break
		}
	}
	return r.Send(&channels.RuntimeOutboundMessage{
		ChatID:  chatID,
		Content: buf.String(),
	})
}

// RuntimeStatus 反映 WebSocket 认证与连接状态。
func (r *Runtime) RuntimeStatus() channels.RuntimeStatus {
	s := r.BaseRuntimeImpl.RuntimeStatus()
	r.mu.Lock()
	auth := r.authenticated
	cl := r.client
	r.mu.Unlock()
	connected := cl != nil && cl.IsConnected()
	s.Running = auth && connected
	if s.Extra == nil {
		s.Extra = map[string]interface{}{}
	}
	s.Extra["transport"] = "wecom_aibot_ws"
	s.Extra["botIdMasked"] = maskBotID(r.botID)
	if ts := atomic.LoadInt64(&r.lastInboundMs); ts > 0 {
		s.Extra["lastInboundAt"] = ts
	}
	return s
}

func maskBotID(id string) string {
	id = strings.TrimSpace(id)
	if len(id) <= 6 {
		if id == "" {
			return ""
		}
		return "****"
	}
	return id[:3] + "…" + id[len(id)-3:]
}
