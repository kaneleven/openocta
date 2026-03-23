package wework

import (
	"github.com/go-sphere/wecom-aibot-go-sdk/aibot"
	"github.com/openocta/openocta/pkg/logging"
)

// sdkLogger adapts openocta logging to the wecom aibot SDK Logger interface.
type sdkLogger struct {
	inner *logging.GlobalLogger
}

func newSDKLogger(name string) aibot.Logger {
	return &sdkLogger{inner: logging.Sub(name)}
}

func (s *sdkLogger) Debug(format string, v ...interface{}) {
	if s.inner != nil {
		s.inner.Debug(format, v...)
	}
}

func (s *sdkLogger) Info(format string, v ...interface{}) {
	if s.inner != nil {
		s.inner.Info(format, v...)
	}
}

func (s *sdkLogger) Warn(format string, v ...interface{}) {
	if s.inner != nil {
		s.inner.Warn(format, v...)
	}
}

func (s *sdkLogger) Error(format string, v ...interface{}) {
	if s.inner != nil {
		s.inner.Error(format, v...)
	}
}
