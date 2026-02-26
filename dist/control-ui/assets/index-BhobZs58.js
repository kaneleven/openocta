(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const Dn=globalThis,wa=Dn.ShadowRoot&&(Dn.ShadyCSS===void 0||Dn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$a=Symbol(),Eo=new WeakMap;let sl=class{constructor(t,n,s){if(this._$cssResult$=!0,s!==$a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(wa&&t===void 0){const s=n!==void 0&&n.length===1;s&&(t=Eo.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Eo.set(n,t))}return t}toString(){return this.cssText}};const Xr=e=>new sl(typeof e=="string"?e:e+"",void 0,$a),ec=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((s,a,o)=>s+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[o+1],e[0]);return new sl(n,e,$a)},tc=(e,t)=>{if(wa)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const s=document.createElement("style"),a=Dn.litNonce;a!==void 0&&s.setAttribute("nonce",a),s.textContent=n.cssText,e.appendChild(s)}},Lo=wa?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const s of t.cssRules)n+=s.cssText;return Xr(n)})(e):e;const{is:nc,defineProperty:sc,getOwnPropertyDescriptor:ac,getOwnPropertyNames:oc,getOwnPropertySymbols:ic,getPrototypeOf:lc}=Object,Yn=globalThis,Io=Yn.trustedTypes,rc=Io?Io.emptyScript:"",cc=Yn.reactiveElementPolyfillSupport,Jt=(e,t)=>e,On={toAttribute(e,t){switch(t){case Boolean:e=e?rc:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Sa=(e,t)=>!nc(e,t),_o={attribute:!0,type:String,converter:On,reflect:!1,useDefault:!1,hasChanged:Sa};Symbol.metadata??=Symbol("metadata"),Yn.litPropertyMetadata??=new WeakMap;let Lt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=_o){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const s=Symbol(),a=this.getPropertyDescriptor(t,s,n);a!==void 0&&sc(this.prototype,t,a)}}static getPropertyDescriptor(t,n,s){const{get:a,set:o}=ac(this.prototype,t)??{get(){return this[n]},set(l){this[n]=l}};return{get:a,set(l){const c=a?.call(this);o?.call(this,l),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_o}static _$Ei(){if(this.hasOwnProperty(Jt("elementProperties")))return;const t=lc(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Jt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Jt("properties"))){const n=this.properties,s=[...oc(n),...ic(n)];for(const a of s)this.createProperty(a,n[a])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[s,a]of n)this.elementProperties.set(s,a)}this._$Eh=new Map;for(const[n,s]of this.elementProperties){const a=this._$Eu(n,s);a!==void 0&&this._$Eh.set(a,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const a of s)n.unshift(Lo(a))}else t!==void 0&&n.push(Lo(t));return n}static _$Eu(t,n){const s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const s of n.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return tc(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,s){this._$AK(t,s)}_$ET(t,n){const s=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,s);if(a!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:On).toAttribute(n,s.type);this._$Em=t,o==null?this.removeAttribute(a):this.setAttribute(a,o),this._$Em=null}}_$AK(t,n){const s=this.constructor,a=s._$Eh.get(t);if(a!==void 0&&this._$Em!==a){const o=s.getPropertyOptions(a),l=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:On;this._$Em=a;const c=l.fromAttribute(n,o.type);this[a]=c??this._$Ej?.get(a)??c,this._$Em=null}}requestUpdate(t,n,s,a=!1,o){if(t!==void 0){const l=this.constructor;if(a===!1&&(o=this[t]),s??=l.getPropertyOptions(t),!((s.hasChanged??Sa)(o,n)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(l._$Eu(t,s))))return;this.C(t,n,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:s,reflect:a,wrapped:o},l){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,l??n??this[t]),o!==!0||l!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(n=void 0),this._$AL.set(t,n)),a===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[a,o]of this._$Ep)this[a]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,o]of s){const{wrapped:l}=o,c=this[a];l!==!0||this._$AL.has(a)||c===void 0||this.C(a,void 0,o,c)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(n)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};Lt.elementStyles=[],Lt.shadowRootOptions={mode:"open"},Lt[Jt("elementProperties")]=new Map,Lt[Jt("finalized")]=new Map,cc?.({ReactiveElement:Lt}),(Yn.reactiveElementVersions??=[]).push("2.1.2");const ka=globalThis,Do=e=>e,Un=ka.trustedTypes,Ro=Un?Un.createPolicy("lit-html",{createHTML:e=>e}):void 0,al="$lit$",Ve=`lit$${Math.random().toFixed(9).slice(2)}$`,ol="?"+Ve,dc=`<${ol}>`,mt=document,nn=()=>mt.createComment(""),sn=e=>e===null||typeof e!="object"&&typeof e!="function",Aa=Array.isArray,uc=e=>Aa(e)||typeof e?.[Symbol.iterator]=="function",Ss=`[ 	
\f\r]`,Bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Po=/-->/g,No=/>/g,at=RegExp(`>|${Ss}(?:([^\\s"'>=/]+)(${Ss}*=${Ss}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Fo=/'/g,Oo=/"/g,il=/^(?:script|style|textarea|title)$/i,ll=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),r=ll(1),$n=ll(2),Ye=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Uo=new WeakMap,pt=mt.createTreeWalker(mt,129);function rl(e,t){if(!Aa(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ro!==void 0?Ro.createHTML(t):t}const gc=(e,t)=>{const n=e.length-1,s=[];let a,o=t===2?"<svg>":t===3?"<math>":"",l=Bt;for(let c=0;c<n;c++){const d=e[c];let g,h,p=-1,f=0;for(;f<d.length&&(l.lastIndex=f,h=l.exec(d),h!==null);)f=l.lastIndex,l===Bt?h[1]==="!--"?l=Po:h[1]!==void 0?l=No:h[2]!==void 0?(il.test(h[2])&&(a=RegExp("</"+h[2],"g")),l=at):h[3]!==void 0&&(l=at):l===at?h[0]===">"?(l=a??Bt,p=-1):h[1]===void 0?p=-2:(p=l.lastIndex-h[2].length,g=h[1],l=h[3]===void 0?at:h[3]==='"'?Oo:Fo):l===Oo||l===Fo?l=at:l===Po||l===No?l=Bt:(l=at,a=void 0);const u=l===at&&e[c+1].startsWith("/>")?" ":"";o+=l===Bt?d+dc:p>=0?(s.push(g),d.slice(0,p)+al+d.slice(p)+Ve+u):d+Ve+(p===-2?c:u)}return[rl(e,o+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class an{constructor({strings:t,_$litType$:n},s){let a;this.parts=[];let o=0,l=0;const c=t.length-1,d=this.parts,[g,h]=gc(t,n);if(this.el=an.createElement(g,s),pt.currentNode=this.el.content,n===2||n===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(a=pt.nextNode())!==null&&d.length<c;){if(a.nodeType===1){if(a.hasAttributes())for(const p of a.getAttributeNames())if(p.endsWith(al)){const f=h[l++],u=a.getAttribute(p).split(Ve),m=/([.?@])?(.*)/.exec(f);d.push({type:1,index:o,name:m[2],strings:u,ctor:m[1]==="."?hc:m[1]==="?"?mc:m[1]==="@"?fc:Zn}),a.removeAttribute(p)}else p.startsWith(Ve)&&(d.push({type:6,index:o}),a.removeAttribute(p));if(il.test(a.tagName)){const p=a.textContent.split(Ve),f=p.length-1;if(f>0){a.textContent=Un?Un.emptyScript:"";for(let u=0;u<f;u++)a.append(p[u],nn()),pt.nextNode(),d.push({type:2,index:++o});a.append(p[f],nn())}}}else if(a.nodeType===8)if(a.data===ol)d.push({type:2,index:o});else{let p=-1;for(;(p=a.data.indexOf(Ve,p+1))!==-1;)d.push({type:7,index:o}),p+=Ve.length-1}o++}}static createElement(t,n){const s=mt.createElement("template");return s.innerHTML=t,s}}function Dt(e,t,n=e,s){if(t===Ye)return t;let a=s!==void 0?n._$Co?.[s]:n._$Cl;const o=sn(t)?void 0:t._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),o===void 0?a=void 0:(a=new o(e),a._$AT(e,n,s)),s!==void 0?(n._$Co??=[])[s]=a:n._$Cl=a),a!==void 0&&(t=Dt(e,a._$AS(e,t.values),a,s)),t}class pc{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:s}=this._$AD,a=(t?.creationScope??mt).importNode(n,!0);pt.currentNode=a;let o=pt.nextNode(),l=0,c=0,d=s[0];for(;d!==void 0;){if(l===d.index){let g;d.type===2?g=new Jn(o,o.nextSibling,this,t):d.type===1?g=new d.ctor(o,d.name,d.strings,this,t):d.type===6&&(g=new vc(o,this,t)),this._$AV.push(g),d=s[++c]}l!==d?.index&&(o=pt.nextNode(),l++)}return pt.currentNode=mt,a}p(t){let n=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,n),n+=s.strings.length-2):s._$AI(t[n])),n++}}let Jn=class cl{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,s,a){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=s,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Dt(this,t,n),sn(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==Ye&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):uc(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==v&&sn(this._$AH)?this._$AA.nextSibling.data=t:this.T(mt.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:s}=t,a=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=an.createElement(rl(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===a)this._$AH.p(n);else{const o=new pc(a,this),l=o.u(this.options);o.p(n),this.T(l),this._$AH=o}}_$AC(t){let n=Uo.get(t.strings);return n===void 0&&Uo.set(t.strings,n=new an(t)),n}k(t){Aa(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,a=0;for(const o of t)a===n.length?n.push(s=new cl(this.O(nn()),this.O(nn()),this,this.options)):s=n[a],s._$AI(o),a++;a<n.length&&(this._$AR(s&&s._$AB.nextSibling,a),n.length=a)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const s=Do(t).nextSibling;Do(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Zn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,s,a,o){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=n,this._$AM=a,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=v}_$AI(t,n=this,s,a){const o=this.strings;let l=!1;if(o===void 0)t=Dt(this,t,n,0),l=!sn(t)||t!==this._$AH&&t!==Ye,l&&(this._$AH=t);else{const c=t;let d,g;for(t=o[0],d=0;d<o.length-1;d++)g=Dt(this,c[s+d],n,d),g===Ye&&(g=this._$AH[d]),l||=!sn(g)||g!==this._$AH[d],g===v?t=v:t!==v&&(t+=(g??"")+o[d+1]),this._$AH[d]=g}l&&!a&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},hc=class extends Zn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}},mc=class extends Zn{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}},fc=class extends Zn{constructor(t,n,s,a,o){super(t,n,s,a,o),this.type=5}_$AI(t,n=this){if((t=Dt(this,t,n,0)??v)===Ye)return;const s=this._$AH,a=t===v&&s!==v||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==v&&(s===v||a);a&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},vc=class{constructor(t,n,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Dt(this,t)}};const bc={I:Jn},yc=ka.litHtmlPolyfillSupport;yc?.(an,Jn),(ka.litHtmlVersions??=[]).push("3.3.2");const xc=(e,t,n)=>{const s=n?.renderBefore??t;let a=s._$litPart$;if(a===void 0){const o=n?.renderBefore??null;s._$litPart$=a=new Jn(t.insertBefore(nn(),o),o,void 0,n??{})}return a._$AI(e),a};const Ca=globalThis;let _t=class extends Lt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xc(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ye}};_t._$litElement$=!0,_t.finalized=!0,Ca.litElementHydrateSupport?.({LitElement:_t});const wc=Ca.litElementPolyfillSupport;wc?.({LitElement:_t});(Ca.litElementVersions??=[]).push("4.2.2");const dl=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const $c={attribute:!0,type:String,converter:On,reflect:!1,hasChanged:Sa},Sc=(e=$c,t,n)=>{const{kind:s,metadata:a}=n;let o=globalThis.litPropertyMetadata.get(a);if(o===void 0&&globalThis.litPropertyMetadata.set(a,o=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(n.name,e),s==="accessor"){const{name:l}=n;return{set(c){const d=t.get.call(this);t.set.call(this,c),this.requestUpdate(l,d,e,!0,c)},init(c){return c!==void 0&&this.C(l,void 0,e,c),c}}}if(s==="setter"){const{name:l}=n;return function(c){const d=this[l];t.call(this,c),this.requestUpdate(l,d,e,!0,c)}}throw Error("Unsupported decorator location: "+s)};function Xn(e){return(t,n)=>typeof n=="object"?Sc(e,t,n):((s,a,o)=>{const l=a.hasOwnProperty(o);return a.constructor.createProperty(o,s),l?Object.getOwnPropertyDescriptor(a,o):void 0})(e,t,n)}function S(e){return Xn({...e,state:!0,attribute:!1})}async function xe(e,t){if(!(!e.client||!e.connected)&&!e.channelsLoading){e.channelsLoading=!0,e.channelsError=null;try{const n=await e.client.request("channels.status",{probe:t,timeoutMs:8e3});e.channelsSnapshot=n,e.channelsLastSuccess=Date.now()}catch(n){e.channelsError=String(n)}finally{e.channelsLoading=!1}}}async function kc(e,t){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const n=await e.client.request("web.login.start",{force:t,timeoutMs:3e4});e.whatsappLoginMessage=n.message??null,e.whatsappLoginQrDataUrl=n.qrDataUrl??null,e.whatsappLoginConnected=null}catch(n){e.whatsappLoginMessage=String(n),e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function Ac(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const t=await e.client.request("web.login.wait",{timeoutMs:12e4});e.whatsappLoginMessage=t.message??null,e.whatsappLoginConnected=t.connected??null,t.connected&&(e.whatsappLoginQrDataUrl=null)}catch(t){e.whatsappLoginMessage=String(t),e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function Cc(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{await e.client.request("channels.logout",{channel:"whatsapp"}),e.whatsappLoginMessage="Logged out.",e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}catch(t){e.whatsappLoginMessage=String(t)}finally{e.whatsappBusy=!1}}}function ft(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function Rt(e){return`${JSON.stringify(e,null,2).trimEnd()}
`}function ul(e,t,n){if(t.length===0)return;let s=e;for(let o=0;o<t.length-1;o+=1){const l=t[o],c=t[o+1];if(typeof l=="number"){if(!Array.isArray(s))return;s[l]==null&&(s[l]=typeof c=="number"?[]:{}),s=s[l]}else{if(typeof s!="object"||s==null)return;const d=s;d[l]==null&&(d[l]=typeof c=="number"?[]:{}),s=d[l]}}const a=t[t.length-1];if(typeof a=="number"){Array.isArray(s)&&(s[a]=n);return}typeof s=="object"&&s!=null&&(s[a]=n)}function gl(e,t){if(t.length===0)return;let n=e;for(let a=0;a<t.length-1;a+=1){const o=t[a];if(typeof o=="number"){if(!Array.isArray(n))return;n=n[o]}else{if(typeof n!="object"||n==null)return;n=n[o]}if(n==null)return}const s=t[t.length-1];if(typeof s=="number"){Array.isArray(n)&&n.splice(s,1);return}typeof n=="object"&&n!=null&&delete n[s]}async function Le(e){if(!(!e.client||!e.connected)){e.configLoading=!0,e.lastError=null;try{const t=await e.client.request("config.get",{});Mc(e,t)}catch(t){e.lastError=String(t)}finally{e.configLoading=!1}}}async function pl(e){if(!(!e.client||!e.connected)&&!e.configSchemaLoading){e.configSchemaLoading=!0;try{const t=await e.client.request("config.schema",{});Tc(e,t)}catch(t){e.lastError=String(t)}finally{e.configSchemaLoading=!1}}}function Tc(e,t){e.configSchema=t.schema??null,e.configUiHints=t.uiHints??{},e.configSchemaVersion=t.version??null}function Mc(e,t){e.configSnapshot=t;const n=typeof t.raw=="string"?t.raw:t.config&&typeof t.config=="object"?Rt(t.config):e.configRaw;!e.configFormDirty||e.configFormMode==="raw"?e.configRaw=n:e.configForm?e.configRaw=Rt(e.configForm):e.configRaw=n,e.configValid=typeof t.valid=="boolean"?t.valid:null,e.configIssues=Array.isArray(t.issues)?t.issues:[],e.configFormDirty||(e.configForm=ft(t.config??{}),e.configFormOriginal=ft(t.config??{}),e.configRawOriginal=n)}async function Rn(e){if(!(!e.client||!e.connected)){e.configSaving=!0,e.lastError=null;try{const t=e.configFormMode==="form"&&e.configForm?Rt(e.configForm):e.configRaw,n=e.configSnapshot?.hash;if(!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.set",{raw:t,baseHash:n}),e.configFormDirty=!1,await Le(e)}catch(t){e.lastError=String(t)}finally{e.configSaving=!1}}}async function Ec(e){if(!(!e.client||!e.connected)){e.configApplying=!0,e.lastError=null;try{const t=e.configFormMode==="form"&&e.configForm?Rt(e.configForm):e.configRaw,n=e.configSnapshot?.hash;if(!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.apply",{raw:t,baseHash:n,sessionKey:e.applySessionKey}),e.configFormDirty=!1,await Le(e)}catch(t){e.lastError=String(t)}finally{e.configApplying=!1}}}async function Lc(e){if(!(!e.client||!e.connected)){e.updateRunning=!0,e.lastError=null;try{await e.client.request("update.run",{sessionKey:e.applySessionKey})}catch(t){e.lastError=String(t)}finally{e.updateRunning=!1}}}function $e(e,t,n){const s=ft(e.configForm??e.configSnapshot?.config??{});ul(s,t,n),e.configForm=s,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=Rt(s))}function We(e,t){const n=ft(e.configForm??e.configSnapshot?.config??{});gl(n,t),e.configForm=n,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=Rt(n))}function Ta(){return typeof document>"u"?"en":(document.documentElement?.lang?.toLowerCase()??"").startsWith("zh")?"zh":"en"}const Ic={tabGroupChat:"Chat",tabGroupControl:"Control",tabGroupAgent:"Agent",tabGroupSettings:"Settings",subtitleAgents:"Manage agent workspaces, tools, and identities.",subtitleOverview:"Gateway status, entry points, and a fast health read.",subtitleChannels:"Manage channels and settings.",subtitleInstances:"Presence beacons from connected clients and nodes.",subtitleSessions:"Inspect active sessions and adjust per-session defaults.",subtitleUsage:"",subtitleCron:"Schedule wakeups and recurring agent runs.",subtitleSkills:"Manage skill availability and API key injection.",subtitleNodes:"Paired devices, capabilities, and command exposure.",subtitleChat:"Direct gateway chat session for quick interventions.",subtitleConfig:"Edit ~/.openclaw/openclaw.json safely.",subtitleDebug:"Gateway snapshots, events, and manual RPC calls.",subtitleLogs:"Live tail of the gateway file logs.",navTitleAgents:"Agents",navTitleOverview:"Overview",navTitleChannels:"Channels",navTitleInstances:"Instances",navTitleSessions:"Sessions",navTitleUsage:"Usage",navTitleCron:"Cron Jobs",navTitleSkills:"Skills",navTitleNodes:"Nodes",navTitleChat:"Chat",navTitleConfig:"Config",navTitleDebug:"Debug",navTitleLogs:"Logs",navTitleControl:"Control",overviewGatewayAccess:"Gateway Access",overviewGatewayAccessSub:"Where the dashboard connects and how it authenticates.",overviewWebSocketUrl:"WebSocket URL",overviewGatewayToken:"Gateway Token",overviewPassword:"Password (not stored)",overviewDefaultSessionKey:"Default Session Key",overviewConnect:"Connect",overviewRefresh:"Refresh",overviewConnectHint:"Click Connect to apply connection changes.",overviewSnapshot:"Snapshot",overviewSnapshotSub:"Latest gateway handshake information.",overviewStatus:"Status",overviewConnected:"Connected",overviewDisconnected:"Disconnected",overviewUptime:"Uptime",overviewTickInterval:"Tick Interval",overviewLastChannelsRefresh:"Last Channels Refresh",overviewChannelsHint:"Use Channels to link WhatsApp, Telegram, Discord, Signal, or iMessage.",overviewInstances:"Instances",overviewInstancesSub:"Presence beacons in the last 5 minutes.",overviewSessions:"Sessions",overviewSessionsSub:"Recent session keys tracked by the gateway.",overviewCron:"Cron",overviewCronNext:"Next wake",overviewCronEnabled:"Enabled",overviewCronDisabled:"Disabled",overviewNotes:"Notes",overviewNotesSub:"Quick reminders for remote control setups.",overviewNoteTailscale:"Tailscale serve",overviewNoteTailscaleSub:"Prefer serve mode to keep the gateway on loopback with tailnet auth.",overviewNoteSessionHygiene:"Session hygiene",overviewNoteSessionHygieneSub:"Use /new or sessions.patch to reset context.",overviewNoteCron:"Cron reminders",overviewNoteCronSub:"Use isolated sessions for recurring runs.",commonLoading:"Loading…",commonRefresh:"Refresh",commonRefreshing:"Refreshing…",commonSaving:"Saving…",commonDelete:"Delete",commonFilter:"Filter",commonOptional:"(optional)",commonInherit:"inherit",commonOffExplicit:"off (explicit)",commonNA:"n/a",commonYes:"Yes",commonNo:"No",channelsHealth:"Channel health",channelsHealthSub:"Channel status snapshots from the gateway.",channelsNoSnapshot:"No snapshot yet.",channelsSchemaUnavailable:"Schema unavailable. Use Raw.",channelsConfigSchemaUnavailable:"Channel config schema unavailable.",channelsLoadingConfigSchema:"Loading config schema…",commonSave:"Save",commonReload:"Reload",commonCancel:"Cancel",channelConfigured:"Configured",channelRunning:"Running",channelLastStart:"Last start",channelLastProbe:"Last probe",channelProbe:"Probe",channelProbeOk:"ok",channelProbeFailed:"failed",channelLinked:"Linked",channelConnected:"Connected",channelLastConnect:"Last connect",channelLastMessage:"Last message",channelAuthAge:"Auth age",channelBaseUrl:"Base URL",channelCredential:"Credential",channelAudience:"Audience",channelMode:"Mode",channelPublicKey:"Public Key",channelLastInbound:"Last inbound",channelAccounts:"Accounts",channelWhatsApp:"WhatsApp",channelWhatsAppSub:"Link WhatsApp Web and monitor connection health.",channelTelegram:"Telegram",channelTelegramSub:"Bot status and channel configuration.",channelDiscord:"Discord",channelDiscordSub:"Bot status and channel configuration.",channelGoogleChat:"Google Chat",channelGoogleChatSub:"Chat API webhook status and channel configuration.",channelIMessage:"iMessage",channelIMessageSub:"macOS bridge status and channel configuration.",channelSignal:"Signal",channelSignalSub:"signal-cli status and channel configuration.",channelSlack:"Slack",channelSlackSub:"Socket mode status and channel configuration.",channelNostr:"Nostr",channelNostrSub:"Decentralized DMs via Nostr relays (NIP-04).",channelWhatsAppWorking:"Working…",channelShowQr:"Show QR",channelRelink:"Relink",channelWaitForScan:"Wait for scan",channelLogout:"Logout",nostrEditProfile:"Edit Profile",nostrAccount:"Account",nostrUsername:"Username",nostrDisplayName:"Display Name",nostrBio:"Bio",nostrAvatarUrl:"Avatar URL",nostrBannerUrl:"Banner URL",nostrWebsite:"Website",nostrNip05:"NIP-05 Identifier",nostrLud16:"Lightning Address",nostrSavePublish:"Save & Publish",nostrImportRelays:"Import from Relays",nostrHideAdvanced:"Hide Advanced",nostrShowAdvanced:"Show Advanced",nostrUnsavedChanges:"You have unsaved changes",nostrProfilePreview:"Profile picture preview",nostrAdvanced:"Advanced",nostrImporting:"Importing…",nostrNoProfileSet:'No profile set. Click "Edit Profile" to add your name, bio, and avatar.',nostrProfile:"Profile",nostrAbout:"About",nostrName:"Name",instancesTitle:"Connected Instances",instancesSub:"Presence beacons from the gateway and clients.",instancesNoReported:"No instances reported yet.",instancesUnknownHost:"unknown host",instancesLastInput:"Last input",instancesReason:"Reason",instancesScopes:"scopes",sessionsTitle:"Sessions",sessionsSub:"Active session keys and per-session overrides.",sessionsActiveWithin:"Active within (minutes)",sessionsLimit:"Limit",sessionsIncludeGlobal:"Include global",sessionsIncludeUnknown:"Include unknown",sessionsStore:"Store",sessionsKey:"Key",sessionsLabel:"Label",sessionsKind:"Kind",sessionsUpdated:"Updated",sessionsTokens:"Tokens",sessionsThinking:"Thinking",sessionsVerbose:"Verbose",sessionsReasoning:"Reasoning",sessionsActions:"Actions",sessionsNoFound:"No sessions found.",usageNoTimeline:"No timeline data yet.",usageNoData:"No data",usageHours:"Hours",usageMidnight:"Midnight",usage4am:"4am",usage8am:"8am",usageNoon:"Noon",usage4pm:"4pm",usage8pm:"8pm",usageDailyToken:"Daily Token Usage",usageDailyCost:"Daily Cost Usage",usageOutput:"Output",usageInput:"Input",usageCacheWrite:"Cache Write",usageCacheRead:"Cache Read",usageClearFilters:"Clear filters",usageRemoveFilter:"Remove filter",usageDays:"Days",usageHoursLabel:"Hours",usageSession:"Session",usageFiltered:"filtered",usageVisible:"visible",usageExport:"Export",usageActivityByTime:"Activity by Time",usageMosaicSubNoData:"Estimates require session timestamps.",usageTokensUnit:"tokens",usageTimeZoneLocal:"Local",usageTimeZoneUtc:"UTC",usageDayOfWeek:"Day of Week",usageDailyUsage:"Daily Usage",usageTotal:"Total",usageByType:"By Type",usageTokensByType:"Tokens by Type",usageCostByType:"Cost by Type",usageTotalLabel:"Total",usageOverview:"Usage Overview",usageMessages:"Messages",usageToolCalls:"Tool Calls",usageErrors:"Errors",usageAvgTokensMsg:"Avg Tokens / Msg",usageAvgCostMsg:"Avg Cost / Msg",usageSessionsCard:"Sessions",usageThroughput:"Throughput",usageErrorRate:"Error Rate",usageCacheHitRate:"Cache Hit Rate",usageMessagesHint:"Total user + assistant messages in range.",usageToolCallsHint:"Total tool call count across sessions.",usageErrorsHint:"Total message/tool errors in range.",usageAvgTokensMsgHint:"Average tokens per message in this range.",usageSessionsHint:"Distinct sessions in the range.",usageThroughputHint:"Throughput shows tokens per minute over active time. Higher is better.",usageErrorRateHint:"Error rate = errors / total messages. Lower is better.",usageCacheHitRateHint:"Cache hit rate = cache read / (input + cache read). Higher is better.",usageTopModels:"Top Models",usageTopProviders:"Top Providers",usageTopTools:"Top Tools",usageTopAgents:"Top Agents",usageTopChannels:"Top Channels",usagePeakErrorDays:"Peak Error Days",usagePeakErrorHours:"Peak Error Hours",usageNoModelData:"No model data",usageNoProviderData:"No provider data",usageNoToolCalls:"No tool calls",usageNoAgentData:"No agent data",usageNoChannelData:"No channel data",usageNoErrorData:"No error data",usageShown:"shown",usageTotalSessions:"total",usageAvg:"avg",usageAll:"All",usageRecentlyViewed:"Recently viewed",usageSort:"Sort",usageCost:"Cost",usageErrorsCol:"Errors",usageMessagesCol:"Messages",usageRecent:"Recent",usageTokensCol:"Tokens",usageDescending:"Descending",usageAscending:"Ascending",usageClearSelection:"Clear Selection",usageNoRecentSessions:"No recent sessions",usageNoSessionsInRange:"No sessions in range",usageCopy:"Copy",usageCopySessionName:"Copy session name",usageSelectedCount:"Selected",usageMoreSessions:"more",usageUserAssistant:"user · assistant",usageToolsUsed:"tools used",usageToolResults:"tool results",usageAcrossMessages:"Across messages",usageInRange:"in range",usageCached:"cached",usagePrompt:"prompt",usageCacheHint:"Cache hit rate = cache read / (input + cache read). Higher is better.",usageErrorHint:"Error rate = errors / total messages. Lower is better.",usageTokensHint:"Average tokens per message in this range.",usageCostHint:"Average cost per message when providers report costs.",usageCostHintMissing:"Average cost per message when providers report costs. Cost data is missing for some or all sessions in this range.",usageModelMix:"Model Mix",usageDuration:"Duration",usageCloseSessionDetails:"Close session details",usageLoading:"Loading…",usageNoTimelineData:"No timeline data",usageNoDataInRange:"No data in range",usageUsageOverTime:"Usage Over Time",usagePerTurn:"Per Turn",usageCumulative:"Cumulative",usageNoContextData:"No context data",usageSystemPromptBreakdown:"System Prompt Breakdown",usageExpandAll:"Expand all",usageCollapseAll:"Collapse All",usageBaseContextPerMessage:"Base context per message",usageSys:"Sys",usageSkills:"Skills",usageToolsLabel:"Tools",usageFiles:"Files",usageConversation:"Conversation",usageNoMessages:"No messages",usageSearchConversation:"Search conversation",usageClear:"Clear",usageHasTools:"Has tools",usageUser:"User",usageAssistant:"Assistant",usageTool:"Tool",usageToolResult:"Tool result",usageMessagesCount:"messages",usageNoMessagesMatchFilters:"No messages match the filters.",usageTokenUsage:"Token Usage",usageToday:"Today",usage7d:"7d",usage30d:"30d",usageExportSessionsCsv:"Sessions (CSV)",usageExportDailyCsv:"Daily (CSV)",usageSessionsCount:"sessions",usageQueryHintMatch:"{count} of {total} sessions match",usageQueryHintInRange:"{total} sessions in range",usagePageSubtitle:"See where tokens go, when sessions spike, and what drives cost.",usageCalls:"calls",cronScheduler:"Scheduler",cronSchedulerSub:"Gateway-owned cron scheduler status.",cronEnabled:"Enabled",cronJobs:"Jobs",cronNewJob:"New Job",cronNewJobSub:"Create a scheduled wakeup or agent run.",cronName:"Name",cronDescription:"Description",cronAgentId:"Agent ID",cronSchedule:"Schedule",cronEvery:"Every",cronAt:"At",cronCron:"Cron",cronSession:"Session",cronMain:"Main",cronIsolated:"Isolated",cronWakeMode:"Wake mode",cronNextHeartbeat:"Next heartbeat",cronNow:"Now",cronPayload:"Payload",cronSystemEvent:"System event",cronAgentTurn:"Agent turn",cronSystemText:"System text",cronAgentMessage:"Agent message",cronDelivery:"Delivery",cronAnnounceSummary:"Announce summary (default)",cronNoneInternal:"None (internal)",cronChannel:"Channel",cronTo:"To",cronAddJob:"Add job",cronJobsTitle:"Jobs",cronJobsSub:"All scheduled jobs stored in the gateway.",cronNoJobsYet:"No jobs yet.",cronRunHistory:"Run history",cronRunHistorySub:"Latest runs for",cronSelectJob:"(select a job)",cronNoRunsYet:"No runs yet.",cronSelectJobToInspect:"Select a job to inspect run history.",cronRunAt:"Run at",cronUnit:"Unit",cronMinutes:"Minutes",cronHours:"Hours",cronDays:"Days",cronExpression:"Expression",cronTimeoutSeconds:"Timeout (seconds)",cronLast:"last",agentsFiles:"Files",agentsRuntime:"Runtime",agentsWeb:"Web",agentsMemory:"Memory",agentsSessions:"Sessions",agentsUi:"UI",agentsMessaging:"Messaging",agentsAutomation:"Automation",agentsReadFile:"Read file contents",agentsWriteFile:"Create or overwrite files",agentsEdit:"Make precise edits",agentsApplyPatch:"Patch files (OpenAI)",agentsExec:"Run shell commands",agentsProcess:"Manage background processes",agentsWebSearch:"Search the web",agentsWebFetch:"Fetch web content",agentsMemorySearch:"Semantic search",agentsMemoryGet:"Read memory files",agentsSessionsList:"List sessions",agentsSessionsHistory:"Session history",agentsSessionsSend:"Send to session",agentsSessionsSpawn:"Spawn sub-agent",agentsSessionStatus:"Session status",agentsBrowser:"Control web browser",agentsCanvas:"Control canvases",agentsMessage:"Send messages",agentsScheduleTasks:"Schedule tasks",agentsGatewayControl:"Gateway control",agentsNodesDevices:"Nodes + devices",agentsListAgents:"List agents",agentsImageUnderstanding:"Image understanding",agentsNodes:"Nodes",agentsAgents:"Agents",agentsMedia:"Media",agentsTitle:"Agents",agentsConfigured:"configured.",agentsNoFound:"No agents found.",agentsSelectAgent:"Select an agent",agentsSelectAgentSub:"Pick an agent to inspect its workspace and tools.",agentsWorkspaceRouting:"Agent workspace and routing.",agentsProfileMinimal:"Minimal",agentsProfileCoding:"Coding",agentsProfileMessaging:"Messaging",agentsProfileFull:"Full",agentsDefault:"default",agentsSelected:"selected",agentsAllSkills:"all skills",agentsCurrentModel:"Current",agentsInheritDefault:"Inherit default",agentsOverview:"Overview",agentsOverviewSub:"Workspace paths and identity metadata.",agentsWorkspace:"Workspace",agentsPrimaryModel:"Primary Model",agentsIdentityName:"Identity Name",agentsDefaultLabel:"Default",agentsIdentityEmoji:"Identity Emoji",agentsSkillsFilter:"Skills Filter",agentsModelSelection:"Model Selection",agentsPrimaryModelLabel:"Primary model",agentsPrimaryModelDefault:"(default)",agentsFallbacksLabel:"Fallbacks (comma-separated)",agentsReloadConfig:"Reload Config",agentsAgentContext:"Agent Context",agentsContextWorkspaceIdentity:"Workspace, identity, and model configuration.",agentsContextWorkspaceScheduling:"Workspace and scheduling targets.",agentsChannels:"Channels",agentsChannelsSub:"Gateway-wide channel status snapshot.",agentsLoadChannels:"Load channels to see live status.",agentsNoChannels:"No channels found.",agentsConnected:"connected",agentsConfiguredLabel:"configured",agentsEnabled:"enabled",agentsDisabled:"disabled",agentsNoAccounts:"no accounts",agentsNotConfigured:"not configured",agentsScheduler:"Scheduler",agentsSchedulerSub:"Gateway cron status.",agentsNextWake:"Next wake",agentsCronJobs:"Agent Cron Jobs",agentsCronJobsSub:"Scheduled jobs targeting this agent.",agentsNoJobsAssigned:"No jobs assigned.",agentsCoreFiles:"Core Files",agentsCoreFilesSub:"Bootstrap persona, identity, and tool guidance.",agentsLoadWorkspaceFiles:"Load the agent workspace files to edit core instructions.",agentsNoFilesFound:"No files found.",agentsSelectFileToEdit:"Select a file to edit.",agentsReset:"Reset",agentsFileMissingCreate:"This file is missing. Saving will create it in the agent workspace.",agentsUnavailable:"Unavailable",agentsTabOverview:"Overview",agentsTabFiles:"Files",agentsTabTools:"Tools",agentsTabSkills:"Skills",agentsTabChannels:"Channels",agentsTabCron:"Cron Jobs",agentsFallback:"fallback",agentsNever:"never",agentsLastRefresh:"Last refresh",agentsSkillsPanelSub:"Per-agent skill allowlist and workspace skills.",agentsUseAll:"Use All",agentsDisableAll:"Disable All",agentsLoadConfigForSkills:"Load the gateway config to set per-agent skills.",agentsCustomAllowlist:"This agent uses a custom skill allowlist.",agentsAllSkillsEnabled:"All skills are enabled. Disabling any skill will create a per-agent allowlist.",agentsLoadSkillsForAgent:"Load skills for this agent to view workspace-specific entries.",agentsFilter:"Filter",agentsNoSkillsFound:"No skills found.",agentsToolsGlobalAllow:"Global tools.allow is set. Agent overrides cannot enable tools that are globally blocked.",agentsProfile:"Profile",agentsSource:"Source",agentsStatus:"Status",agentsUnsaved:"unsaved",agentsQuickPresets:"Quick Presets",agentsInherit:"Inherit",agentsToolsTitle:"Tools",agentsToolsSub:"Per-agent tool profile and overrides.",agentsToolAccess:"Tool Access",agentsToolsSubText:"Profile + per-tool overrides for this agent.",agentsLoadConfigForTools:"Load the gateway config to adjust tool profiles.",agentsExplicitAllowlist:"This agent is using an explicit allowlist in config. Tool overrides are managed in the Config tab.",agentsEnableAll:"Enable All",agentsEnabledCount:"enabled.",skillsTitle:"Skills",skillsSub:"Bundled, managed, and workspace skills.",skillsSearchPlaceholder:"Search skills",skillsShown:"shown",skillsWorkspace:"Workspace Skills",skillsBuiltIn:"Built-in Skills",skillsInstalled:"Installed Skills",skillsExtra:"Extra Skills",skillsOther:"Other Skills",nodesTitle:"Nodes",nodesSub:"Paired devices and live links.",nodesNoFound:"No nodes found.",nodesDevices:"Devices",nodesDevicesSub:"Pairing requests + role tokens.",nodesPending:"Pending",nodesPaired:"Paired",nodesNoPairedDevices:"No paired devices.",nodesRoleLabel:"role: ",nodesRoleNone:"role: -",nodesRepairSuffix:" · repair",nodesRequested:"requested ",nodesApprove:"Approve",nodesReject:"Reject",nodesRolesLabel:"roles: ",nodesScopesLabel:"scopes: ",nodesTokensNone:"Tokens: none",nodesTokens:"Tokens",nodesTokenRevoked:"revoked",nodesTokenActive:"active",nodesRotate:"Rotate",nodesRevoke:"Revoke",nodesBindingTitle:"Exec node binding",nodesBindingSub:"Pin agents to a specific node when using ",nodesBindingFormModeHint:"Switch the Config tab to Form mode to edit bindings here.",nodesLoadConfigHint:"Load config to edit bindings.",nodesLoadConfig:"Load config",nodesDefaultBinding:"Default binding",nodesDefaultBindingSub:"Used when agents do not override a node binding.",nodesNodeLabel:"Node",nodesAnyNode:"Any node",nodesNoNodesSystemRun:"No nodes with system.run available.",nodesNoAgentsFound:"No agents found.",nodesExecApprovalsTitle:"Exec approvals",nodesExecApprovalsSub:"Allowlist and approval policy for exec host=gateway/node.",nodesLoadExecApprovalsHint:"Load exec approvals to edit allowlists.",nodesLoadApprovals:"Load approvals",nodesTarget:"Target",nodesTargetSub:"Gateway edits local approvals; node edits the selected node.",nodesHost:"Host",nodesHostGateway:"Gateway",nodesHostNode:"Node",nodesSelectNode:"Select node",nodesNoNodesExecApprovals:"No nodes advertise exec approvals yet.",nodesScope:"Scope",nodesDefaults:"Defaults",nodesSecurity:"Security",nodesSecurityDefaultSub:"Default security mode.",nodesSecurityAgentSubPrefix:"Default: ",nodesMode:"Mode",nodesUseDefaultPrefix:"Use default (",nodesUseDefaultButton:"Use default",nodesSecurityDeny:"Deny",nodesSecurityAllowlist:"Allowlist",nodesSecurityFull:"Full",nodesAsk:"Ask",nodesAskDefaultSub:"Default prompt policy.",nodesAskAgentSubPrefix:"Default: ",nodesAskOff:"Off",nodesAskOnMiss:"On miss",nodesAskAlways:"Always",nodesAskFallback:"Ask fallback",nodesAskFallbackDefaultSub:"Applied when the UI prompt is unavailable.",nodesAskFallbackAgentSubPrefix:"Default: ",nodesFallback:"Fallback",nodesAutoAllowSkills:"Auto-allow skill CLIs",nodesAutoAllowSkillsDefaultSub:"Allow skill executables listed by the Gateway.",nodesAutoAllowSkillsUsingDefault:"Using default (",nodesAutoAllowSkillsOverride:"Override (",nodesEnabled:"Enabled",nodesAllowlist:"Allowlist",nodesAllowlistSub:"Case-insensitive glob patterns.",nodesAddPattern:"Add pattern",nodesNoAllowlistEntries:"No allowlist entries yet.",nodesNewPattern:"New pattern",nodesLastUsedPrefix:"Last used: ",nodesPattern:"Pattern",nodesRemove:"Remove",nodesDefaultAgent:"default agent",nodesAgent:"agent",nodesUsesDefault:"uses default (",nodesOverride:"override: ",nodesBinding:"Binding",nodesChipPaired:"paired",nodesChipUnpaired:"unpaired",nodesConnected:"connected",nodesOffline:"offline",nodesNever:"never",configEnv:"Environment",configUpdate:"Updates",configAgents:"Agents",configAuth:"Authentication",configChannels:"Channels",configMessages:"Messages",configCommands:"Commands",configHooks:"Hooks",configSkills:"Skills",configTools:"Tools",configGateway:"Gateway",configWizard:"Setup Wizard",configMeta:"Metadata",configLogging:"Logging",configBrowser:"Browser",configUi:"UI",configModels:"Models",configBindings:"Bindings",configBroadcast:"Broadcast",configAudio:"Audio",configSession:"Session",configCron:"Cron",configWeb:"Web",configDiscovery:"Discovery",configCanvasHost:"Canvas Host",configTalk:"Talk",configPlugins:"Plugins",configEnvVars:"Environment Variables",configEnvVarsDesc:"Environment variables passed to the gateway process",configUpdatesDesc:"Auto-update settings and release channel",configAgentsDesc:"Agent configurations, models, and identities",configAuthDesc:"API keys and authentication profiles",configChannelsDesc:"Messaging channels (Telegram, Discord, Slack, etc.)",configMessagesDesc:"Message handling and routing settings",configCommandsDesc:"Custom slash commands",configHooksDesc:"Webhooks and event hooks",configSkillsDesc:"Skill packs and capabilities",configToolsDesc:"Tool configurations (browser, search, etc.)",configGatewayDesc:"Gateway server settings (port, auth, binding)",configWizardDesc:"Setup wizard state and history",configMetaDesc:"Gateway metadata and version information",configLoggingDesc:"Log levels and output configuration",configBrowserDesc:"Browser automation settings",configUiDesc:"User interface preferences",configModelsDesc:"AI model configurations and providers",configBindingsDesc:"Key bindings and shortcuts",configBroadcastDesc:"Broadcast and notification settings",configAudioDesc:"Audio input/output settings",configSessionDesc:"Session management and persistence",configCronDesc:"Scheduled tasks and automation",configWebDesc:"Web server and API settings",configDiscoveryDesc:"Service discovery and networking",configCanvasHostDesc:"Canvas rendering and display",configTalkDesc:"Voice and speech settings",configPluginsDesc:"Plugin management and extensions",configSettingsTitle:"Settings",configSearchPlaceholder:"Search settings…",configAllSettings:"All Settings",configForm:"Form",configRaw:"Raw",configUnsavedChanges:"Unsaved changes",configUnsavedChangesLabel:"unsaved changes",configOneUnsavedChange:"1 unsaved change",configNoChanges:"No changes",configApplying:"Applying…",configApply:"Apply",configUpdating:"Updating…",configUpdateButton:"Update",configViewPrefix:"View ",configPendingChange:"pending change",configPendingChanges:"pending changes",configLoadingSchema:"Loading schema…",configFormUnsafeWarning:"Form view can't safely edit some fields. Use Raw to avoid losing config entries.",configRawJson5:"Raw JSON5",configValidityValid:"valid",configValidityInvalid:"invalid",configValidityUnknown:"unknown",configSchemaUnavailable:"Schema unavailable.",configUnsupportedSchema:"Unsupported schema. Use Raw.",configNoSettingsMatchPrefix:'No settings match "',configNoSettingsMatchSuffix:'"',configNoSettingsInSection:"No settings in this section",configUnsupportedSchemaNode:"Unsupported schema node. Use Raw mode.",configSubnavAll:"All",debugSnapshots:"Snapshots",debugSnapshotsSub:"Status, health, and heartbeat data.",debugStatus:"Status",debugHealth:"Health",debugLastHeartbeat:"Last heartbeat",debugSecurityAudit:"Security audit",debugManualRpc:"Manual RPC",debugManualRpcSub:"Send a raw gateway method with JSON params.",debugMethod:"Method",debugParams:"Params",debugCall:"Call",debugCritical:"critical",debugWarnings:"warnings",debugNoCritical:"No critical issues",debugInfo:"info",debugSecurityAuditDetails:"Run openclaw security audit --deep for details.",debugModels:"Models",debugModelsSub:"Catalog from models.list.",debugEventLog:"Event Log",debugEventLogSub:"Latest gateway events.",debugNoEvents:"No events yet.",logsTitle:"Logs",logsSub:"Gateway file logs (JSONL).",logsExportFiltered:"Export filtered",logsExportVisible:"Export visible"},_c={tabGroupChat:"聊天",tabGroupControl:"控制",tabGroupAgent:"代理",tabGroupSettings:"设置",subtitleAgents:"管理代理工作区、工具与身份。",subtitleOverview:"网关状态、入口与健康概览。",subtitleChannels:"管理通道与设置。",subtitleInstances:"已连接客户端与节点的在线状态。",subtitleSessions:"查看活跃会话并调整每会话默认值。",subtitleUsage:"",subtitleCron:"安排唤醒与定时代理任务。",subtitleSkills:"管理技能可用性与 API 密钥注入。",subtitleNodes:"已配对设备、能力与命令。",subtitleChat:"直接与网关聊天进行快速操作。",subtitleConfig:"安全编辑 ~/.openclaw/openclaw.json。",subtitleDebug:"网关快照、事件与手动 RPC 调用。",subtitleLogs:"网关日志实时查看。",navTitleAgents:"代理",navTitleOverview:"概览",navTitleChannels:"通道",navTitleInstances:"实例",navTitleSessions:"会话",navTitleUsage:"用量",navTitleCron:"定时任务",navTitleSkills:"技能",navTitleNodes:"节点",navTitleChat:"Chat",navTitleConfig:"配置",navTitleDebug:"测试",navTitleLogs:"日志",navTitleControl:"控制",overviewGatewayAccess:"网关访问",overviewGatewayAccessSub:"控制台连接地址与认证方式。",overviewWebSocketUrl:"WebSocket 地址",overviewGatewayToken:"网关令牌",overviewPassword:"密码（不保存）",overviewDefaultSessionKey:"默认会话 Key",overviewConnect:"连接",overviewRefresh:"刷新",overviewConnectHint:"点击连接以应用连接变更。",overviewSnapshot:"快照",overviewSnapshotSub:"最近一次网关握手信息。",overviewStatus:"状态",overviewConnected:"已连接",overviewDisconnected:"未连接",overviewUptime:"运行时长",overviewTickInterval:"心跳间隔",overviewLastChannelsRefresh:"最近通道刷新",overviewChannelsHint:"在通道中关联 WhatsApp、Telegram、Discord、Signal 或 iMessage。",overviewInstances:"实例",overviewInstancesSub:"过去 5 分钟内的在线实例数。",overviewSessions:"会话",overviewSessionsSub:"网关跟踪的最近会话 Key。",overviewCron:"定时任务",overviewCronNext:"下次执行",overviewCronEnabled:"已启用",overviewCronDisabled:"已禁用",overviewNotes:"说明",overviewNotesSub:"远程控制相关简要提示。",overviewNoteTailscale:"Tailscale serve",overviewNoteTailscaleSub:"建议使用 serve 模式，使网关仅监听本机并由 tailnet 认证。",overviewNoteSessionHygiene:"会话清理",overviewNoteSessionHygieneSub:"使用 /new 或 sessions.patch 重置上下文。",overviewNoteCron:"定时提醒",overviewNoteCronSub:"定时任务请使用独立会话。",commonLoading:"加载中…",commonRefresh:"刷新",commonRefreshing:"刷新中…",commonSaving:"保存中…",commonDelete:"删除",commonFilter:"筛选",commonOptional:"（可选）",commonInherit:"继承",commonOffExplicit:"关闭（显式）",commonNA:"无",commonYes:"是",commonNo:"否",channelsHealth:"通道健康",channelsHealthSub:"网关返回的通道状态快照。",channelsNoSnapshot:"暂无快照。",channelsSchemaUnavailable:"Schema 不可用，请使用 Raw。",channelsConfigSchemaUnavailable:"通道配置 Schema 不可用。",channelsLoadingConfigSchema:"正在加载配置 Schema…",commonSave:"保存",commonReload:"重新加载",commonCancel:"取消",channelConfigured:"已配置",channelRunning:"运行中",channelLastStart:"最近启动",channelLastProbe:"最近探测",channelProbe:"探测",channelProbeOk:"正常",channelProbeFailed:"失败",channelLinked:"已链接",channelConnected:"已连接",channelLastConnect:"最近连接",channelLastMessage:"最近消息",channelAuthAge:"认证时长",channelBaseUrl:"Base URL",channelCredential:"凭证",channelAudience:"受众",channelMode:"模式",channelPublicKey:"公钥",channelLastInbound:"最近入站",channelAccounts:"账号",channelWhatsApp:"WhatsApp",channelWhatsAppSub:"链接 WhatsApp Web 并监控连接状态。",channelTelegram:"Telegram",channelTelegramSub:"机器人状态与通道配置。",channelDiscord:"Discord",channelDiscordSub:"机器人状态与通道配置。",channelGoogleChat:"Google Chat",channelGoogleChatSub:"Chat API Webhook 状态与通道配置。",channelIMessage:"iMessage",channelIMessageSub:"macOS 桥接状态与通道配置。",channelSignal:"Signal",channelSignalSub:"signal-cli 状态与通道配置。",channelSlack:"Slack",channelSlackSub:"Socket 模式状态与通道配置。",channelNostr:"Nostr",channelNostrSub:"通过 Nostr 中继的分布式私信（NIP-04）。",channelWhatsAppWorking:"处理中…",channelShowQr:"显示二维码",channelRelink:"重新链接",channelWaitForScan:"等待扫码",channelLogout:"登出",nostrEditProfile:"编辑资料",nostrAccount:"账号",nostrUsername:"用户名",nostrDisplayName:"显示名称",nostrBio:"简介",nostrAvatarUrl:"头像 URL",nostrBannerUrl:"横幅 URL",nostrWebsite:"网站",nostrNip05:"NIP-05 标识",nostrLud16:"Lightning 地址",nostrSavePublish:"保存并发布",nostrImportRelays:"从中继导入",nostrHideAdvanced:"隐藏高级",nostrShowAdvanced:"显示高级",nostrUnsavedChanges:"您有未保存的更改",nostrProfilePreview:"头像预览",nostrAdvanced:"高级",nostrImporting:"导入中…",nostrNoProfileSet:"未设置资料。点击「编辑资料」添加姓名、简介与头像。",nostrProfile:"资料",nostrAbout:"关于",nostrName:"名称",instancesTitle:"已连接实例",instancesSub:"网关与客户端的在线状态。",instancesNoReported:"暂无实例上报。",instancesUnknownHost:"未知主机",instancesLastInput:"最近输入",instancesReason:"原因",instancesScopes:"范围",sessionsTitle:"会话",sessionsSub:"活跃会话 Key 及每会话覆盖项。",sessionsActiveWithin:"活跃时间（分钟）",sessionsLimit:"数量上限",sessionsIncludeGlobal:"包含全局",sessionsIncludeUnknown:"包含未知",sessionsStore:"存储",sessionsKey:"Key",sessionsLabel:"标签",sessionsKind:"类型",sessionsUpdated:"更新时间",sessionsTokens:"Token",sessionsThinking:"思考",sessionsVerbose:"详细",sessionsReasoning:"推理",sessionsActions:"操作",sessionsNoFound:"未找到会话。",usageNoTimeline:"暂无时间线数据。",usageNoData:"暂无数据",usageHours:"小时",usageMidnight:"0 点",usage4am:"4 点",usage8am:"8 点",usageNoon:"12 点",usage4pm:"16 点",usage8pm:"20 点",usageDailyToken:"每日 Token 用量",usageDailyCost:"每日费用",usageOutput:"输出",usageInput:"输入",usageCacheWrite:"缓存写入",usageCacheRead:"缓存读取",usageClearFilters:"清除筛选",usageRemoveFilter:"移除筛选",usageDays:"天",usageHoursLabel:"小时",usageSession:"会话",usageFiltered:"已筛选",usageVisible:"当前可见",usageExport:"导出",usageActivityByTime:"按时间活动",usageMosaicSubNoData:"估算需要会话时间戳。",usageTokensUnit:"tokens",usageTimeZoneLocal:"本地",usageTimeZoneUtc:"UTC",usageDayOfWeek:"星期",usageDailyUsage:"每日用量",usageTotal:"合计",usageByType:"按类型",usageTokensByType:"按类型 Token",usageCostByType:"按类型费用",usageTotalLabel:"合计",usageOverview:"用量概览",usageMessages:"消息数",usageToolCalls:"工具调用",usageErrors:"错误数",usageAvgTokensMsg:"平均 Token/条",usageAvgCostMsg:"平均费用/条",usageSessionsCard:"会话",usageThroughput:"吞吐",usageErrorRate:"错误率",usageCacheHitRate:"缓存命中率",usageMessagesHint:"范围内用户+助手消息总数。",usageToolCallsHint:"会话中工具调用总次数。",usageErrorsHint:"范围内消息/工具错误总数。",usageAvgTokensMsgHint:"该范围内每条消息平均 token 数。",usageSessionsHint:"范围内的不同会话数。",usageThroughputHint:"吞吐为活跃时间内每分钟 token 数，越高越好。",usageErrorRateHint:"错误率 = 错误数/总消息数，越低越好。",usageCacheHitRateHint:"缓存命中率 = 缓存读取/(输入+缓存读取)，越高越好。",usageTopModels:"Top 模型",usageTopProviders:"Top 提供商",usageTopTools:"Top 工具",usageTopAgents:"Top 代理",usageTopChannels:"Top 渠道",usagePeakErrorDays:"错误高峰日",usagePeakErrorHours:"错误高峰时",usageNoModelData:"无模型数据",usageNoProviderData:"无提供商数据",usageNoToolCalls:"无工具调用",usageNoAgentData:"无代理数据",usageNoChannelData:"无渠道数据",usageNoErrorData:"无错误数据",usageShown:"显示",usageTotalSessions:"总计",usageAvg:"平均",usageAll:"全部",usageRecentlyViewed:"最近查看",usageSort:"排序",usageCost:"费用",usageErrorsCol:"错误",usageMessagesCol:"消息",usageRecent:"最近",usageTokensCol:"Token",usageDescending:"降序",usageAscending:"升序",usageClearSelection:"清除选择",usageNoRecentSessions:"无最近会话",usageNoSessionsInRange:"范围内无会话",usageCopy:"复制",usageCopySessionName:"复制会话名",usageSelectedCount:"已选",usageMoreSessions:"更多",usageUserAssistant:"用户 · 助手",usageToolsUsed:"使用工具数",usageToolResults:"工具结果",usageAcrossMessages:"跨消息",usageInRange:"范围内",usageCached:"缓存",usagePrompt:"提示",usageCacheHint:"缓存命中率 = 缓存读取/(输入+缓存读取)，越高越好。",usageErrorHint:"错误率 = 错误数/总消息数，越低越好。",usageTokensHint:"该范围内每条消息平均 token 数。",usageCostHint:"提供商上报费用时每条消息平均费用。",usageCostHintMissing:"提供商上报费用时每条消息平均费用。部分或全部会话缺少费用数据。",usageModelMix:"模型组合",usageDuration:"时长",usageCloseSessionDetails:"关闭会话详情",usageLoading:"加载中…",usageNoTimelineData:"无时间线数据",usageNoDataInRange:"范围内无数据",usageUsageOverTime:"用量随时间",usagePerTurn:"每轮",usageCumulative:"累计",usageNoContextData:"无上下文数据",usageSystemPromptBreakdown:"系统提示分解",usageExpandAll:"全部展开",usageCollapseAll:"全部折叠",usageBaseContextPerMessage:"每条消息的基础上下文",usageSys:"系统",usageSkills:"技能",usageToolsLabel:"工具",usageFiles:"文件",usageConversation:"对话",usageNoMessages:"无消息",usageSearchConversation:"搜索对话",usageClear:"清除",usageHasTools:"含工具",usageUser:"用户",usageAssistant:"助手",usageTool:"工具",usageToolResult:"工具结果",usageMessagesCount:"条消息",usageNoMessagesMatchFilters:"没有消息符合筛选条件。",usageTokenUsage:"Token 用量",usageToday:"今天",usage7d:"7 天",usage30d:"30 天",usageExportSessionsCsv:"会话 (CSV)",usageExportDailyCsv:"每日 (CSV)",usageSessionsCount:"会话",usageQueryHintMatch:"{count} / {total} 个会话匹配",usageQueryHintInRange:"{total} 个会话在范围内",usagePageSubtitle:"查看 token 消耗、会话高峰与费用驱动因素。",usageCalls:"次",cronScheduler:"调度器",cronSchedulerSub:"网关内置定时调度状态。",cronEnabled:"已启用",cronJobs:"任务数",cronNewJob:"新建任务",cronNewJobSub:"创建定时唤醒或代理运行任务。",cronName:"名称",cronDescription:"描述",cronAgentId:"代理 ID",cronSchedule:"调度",cronEvery:"每",cronAt:"在",cronCron:"Cron",cronSession:"会话",cronMain:"主会话",cronIsolated:"独立会话",cronWakeMode:"唤醒方式",cronNextHeartbeat:"下次心跳",cronNow:"立即",cronPayload:"负载",cronSystemEvent:"系统事件",cronAgentTurn:"代理轮次",cronSystemText:"系统文本",cronAgentMessage:"代理消息",cronDelivery:"投递",cronAnnounceSummary:"公布摘要（默认）",cronNoneInternal:"无（内部）",cronChannel:"通道",cronTo:"发送至",cronAddJob:"添加任务",cronJobsTitle:"任务列表",cronJobsSub:"网关中所有已调度任务。",cronNoJobsYet:"暂无任务。",cronRunHistory:"运行历史",cronRunHistorySub:"最近运行：",cronSelectJob:"（选择任务）",cronNoRunsYet:"暂无运行记录。",cronSelectJobToInspect:"选择任务以查看运行历史。",cronRunAt:"运行时间",cronUnit:"单位",cronMinutes:"分钟",cronHours:"小时",cronDays:"天",cronExpression:"表达式",cronTimeoutSeconds:"超时（秒）",cronLast:"上次",agentsFiles:"文件",agentsRuntime:"运行时",agentsWeb:"网页",agentsMemory:"记忆",agentsSessions:"会话",agentsUi:"界面",agentsMessaging:"消息",agentsAutomation:"自动化",agentsReadFile:"读取文件内容",agentsWriteFile:"创建或覆盖文件",agentsEdit:"精确编辑",agentsApplyPatch:"应用补丁（OpenAI）",agentsExec:"执行 shell 命令",agentsProcess:"管理后台进程",agentsWebSearch:"网页搜索",agentsWebFetch:"抓取网页内容",agentsMemorySearch:"语义搜索",agentsMemoryGet:"读取记忆文件",agentsSessionsList:"列出会话",agentsSessionsHistory:"会话历史",agentsSessionsSend:"发送到会话",agentsSessionsSpawn:"派生子代理",agentsSessionStatus:"会话状态",agentsBrowser:"控制浏览器",agentsCanvas:"控制画布",agentsMessage:"发送消息",agentsScheduleTasks:"安排任务",agentsGatewayControl:"网关控制",agentsNodesDevices:"节点与设备",agentsListAgents:"列出代理",agentsImageUnderstanding:"图像理解",agentsNodes:"节点",agentsAgents:"代理",agentsMedia:"媒体",agentsTitle:"代理",agentsConfigured:"已配置。",agentsNoFound:"未找到代理。",agentsSelectAgent:"选择代理",agentsSelectAgentSub:"选择一个代理以查看其工作区与工具。",agentsWorkspaceRouting:"代理工作区与路由。",agentsProfileMinimal:"最小",agentsProfileCoding:"编程",agentsProfileMessaging:"消息",agentsProfileFull:"完整",agentsDefault:"默认",agentsSelected:"已选",agentsAllSkills:"全部技能",agentsCurrentModel:"当前",agentsInheritDefault:"继承默认",agentsOverview:"概览",agentsOverviewSub:"工作区路径与身份元数据。",agentsWorkspace:"工作区",agentsPrimaryModel:"主模型",agentsIdentityName:"身份名称",agentsDefaultLabel:"默认",agentsIdentityEmoji:"身份表情",agentsSkillsFilter:"技能筛选",agentsModelSelection:"模型选择",agentsPrimaryModelLabel:"主模型",agentsPrimaryModelDefault:"（默认）",agentsFallbacksLabel:"备选（逗号分隔）",agentsReloadConfig:"重新加载配置",agentsAgentContext:"代理上下文",agentsContextWorkspaceIdentity:"工作区、身份与模型配置。",agentsContextWorkspaceScheduling:"工作区与调度目标。",agentsChannels:"渠道",agentsChannelsSub:"网关渠道状态快照。",agentsLoadChannels:"加载渠道以查看实时状态。",agentsNoChannels:"未找到渠道。",agentsConnected:"已连接",agentsConfiguredLabel:"已配置",agentsEnabled:"已启用",agentsDisabled:"已禁用",agentsNoAccounts:"无账号",agentsNotConfigured:"未配置",agentsScheduler:"调度器",agentsSchedulerSub:"网关定时状态。",agentsNextWake:"下次唤醒",agentsCronJobs:"代理定时任务",agentsCronJobsSub:"针对此代理的定时任务。",agentsNoJobsAssigned:"未分配任务。",agentsCoreFiles:"核心文件",agentsCoreFilesSub:"引导人设、身份与工具指引。",agentsLoadWorkspaceFiles:"加载代理工作区文件以编辑核心说明。",agentsNoFilesFound:"未找到文件。",agentsSelectFileToEdit:"选择要编辑的文件。",agentsReset:"重置",agentsFileMissingCreate:"该文件不存在。保存将在代理工作区中创建。",agentsUnavailable:"不可用",agentsTabOverview:"概览",agentsTabFiles:"文件",agentsTabTools:"工具",agentsTabSkills:"技能",agentsTabChannels:"渠道",agentsTabCron:"定时任务",agentsFallback:"备选",agentsNever:"从未",agentsLastRefresh:"上次刷新",agentsSkillsPanelSub:"每代理技能允许列表与工作区技能。",agentsUseAll:"全部启用",agentsDisableAll:"全部禁用",agentsLoadConfigForSkills:"加载网关配置以设置每代理技能。",agentsCustomAllowlist:"此代理使用自定义技能允许列表。",agentsAllSkillsEnabled:"所有技能已启用。禁用任意技能将创建每代理允许列表。",agentsLoadSkillsForAgent:"加载此代理的技能以查看工作区相关条目。",agentsFilter:"筛选",agentsNoSkillsFound:"未找到技能。",agentsToolsGlobalAllow:"已设置全局 tools.allow。代理覆盖无法启用被全局禁止的工具。",agentsProfile:"配置集",agentsSource:"来源",agentsStatus:"状态",agentsUnsaved:"未保存",agentsQuickPresets:"快捷预设",agentsInherit:"继承",agentsToolsTitle:"工具",agentsToolsSub:"每代理工具配置集与覆盖。",agentsToolAccess:"工具访问",agentsToolsSubText:"此代理的配置集与每工具覆盖。",agentsLoadConfigForTools:"加载网关配置以调整工具配置集。",agentsExplicitAllowlist:"此代理在配置中使用显式允许列表。工具覆盖在配置页管理。",agentsEnableAll:"全部启用",agentsEnabledCount:"已启用。",skillsTitle:"技能",skillsSub:"内置、托管与工作区技能。",skillsSearchPlaceholder:"搜索技能",skillsShown:"条显示",skillsWorkspace:"工作区技能",skillsBuiltIn:"内置技能",skillsInstalled:"已安装技能",skillsExtra:"额外技能",skillsOther:"其他技能",nodesTitle:"节点",nodesSub:"已配对设备与在线连接。",nodesNoFound:"未找到节点。",nodesDevices:"设备",nodesDevicesSub:"配对请求与角色令牌。",nodesPending:"待处理",nodesPaired:"已配对",nodesNoPairedDevices:"暂无已配对设备。",nodesRoleLabel:"角色：",nodesRoleNone:"角色：-",nodesRepairSuffix:" · 修复",nodesRequested:"请求于 ",nodesApprove:"批准",nodesReject:"拒绝",nodesRolesLabel:"角色：",nodesScopesLabel:"范围：",nodesTokensNone:"令牌：无",nodesTokens:"令牌",nodesTokenRevoked:"已撤销",nodesTokenActive:"有效",nodesRotate:"轮换",nodesRevoke:"撤销",nodesBindingTitle:"Exec 节点绑定",nodesBindingSub:"在使用 ",nodesBindingFormModeHint:"请在 Config 选项卡中切换到表单模式以在此编辑绑定。",nodesLoadConfigHint:"加载配置以编辑绑定。",nodesLoadConfig:"加载配置",nodesDefaultBinding:"默认绑定",nodesDefaultBindingSub:"当代理未覆盖节点绑定时使用。",nodesNodeLabel:"节点",nodesAnyNode:"任意节点",nodesNoNodesSystemRun:"没有支持 system.run 的节点。",nodesNoAgentsFound:"未找到代理。",nodesExecApprovalsTitle:"Exec 审批",nodesExecApprovalsSub:"exec host=gateway/node 的允许列表与审批策略。",nodesLoadExecApprovalsHint:"加载 exec 审批以编辑允许列表。",nodesLoadApprovals:"加载审批",nodesTarget:"目标",nodesTargetSub:"网关编辑本地审批；节点编辑所选节点。",nodesHost:"主机",nodesHostGateway:"网关",nodesHostNode:"节点",nodesSelectNode:"选择节点",nodesNoNodesExecApprovals:"尚无节点提供 exec 审批。",nodesScope:"范围",nodesDefaults:"默认",nodesSecurity:"安全",nodesSecurityDefaultSub:"默认安全模式。",nodesSecurityAgentSubPrefix:"默认：",nodesMode:"模式",nodesUseDefaultPrefix:"使用默认（",nodesUseDefaultButton:"使用默认",nodesSecurityDeny:"拒绝",nodesSecurityAllowlist:"允许列表",nodesSecurityFull:"完全",nodesAsk:"询问",nodesAskDefaultSub:"默认提示策略。",nodesAskAgentSubPrefix:"默认：",nodesAskOff:"关",nodesAskOnMiss:"缺失时",nodesAskAlways:"始终",nodesAskFallback:"询问回退",nodesAskFallbackDefaultSub:"当 UI 提示不可用时应用。",nodesAskFallbackAgentSubPrefix:"默认：",nodesFallback:"回退",nodesAutoAllowSkills:"自动允许技能 CLI",nodesAutoAllowSkillsDefaultSub:"允许网关列出的技能可执行文件。",nodesAutoAllowSkillsUsingDefault:"使用默认（",nodesAutoAllowSkillsOverride:"覆盖（",nodesEnabled:"启用",nodesAllowlist:"允许列表",nodesAllowlistSub:"不区分大小写的 glob 模式。",nodesAddPattern:"添加模式",nodesNoAllowlistEntries:"尚无允许列表条目。",nodesNewPattern:"新模式",nodesLastUsedPrefix:"上次使用：",nodesPattern:"模式",nodesRemove:"移除",nodesDefaultAgent:"默认代理",nodesAgent:"代理",nodesUsesDefault:"使用默认（",nodesOverride:"覆盖：",nodesBinding:"绑定",nodesChipPaired:"已配对",nodesChipUnpaired:"未配对",nodesConnected:"已连接",nodesOffline:"离线",nodesNever:"从未",configEnv:"环境",configUpdate:"更新",configAgents:"代理",configAuth:"认证",configChannels:"通道",configMessages:"消息",configCommands:"命令",configHooks:"钩子",configSkills:"技能",configTools:"工具",configGateway:"网关",configWizard:"设置向导",configMeta:"元数据",configLogging:"日志",configBrowser:"浏览器",configUi:"界面",configModels:"模型",configBindings:"绑定",configBroadcast:"广播",configAudio:"音频",configSession:"会话",configCron:"定时",configWeb:"Web",configDiscovery:"发现",configCanvasHost:"画布主机",configTalk:"语音",configPlugins:"插件",configEnvVars:"环境变量",configEnvVarsDesc:"传入网关进程的环境变量",configUpdatesDesc:"自动更新与发布渠道",configAgentsDesc:"代理配置、模型与身份",configAuthDesc:"API 密钥与认证配置",configChannelsDesc:"消息通道（Telegram、Discord、Slack 等）",configMessagesDesc:"消息处理与路由",configCommandsDesc:"自定义斜杠命令",configHooksDesc:"Webhook 与事件钩子",configSkillsDesc:"技能包与能力",configToolsDesc:"工具配置（浏览器、搜索等）",configGatewayDesc:"网关服务（端口、认证、绑定）",configWizardDesc:"设置向导状态与历史",configMetaDesc:"网关元数据与版本",configLoggingDesc:"日志级别与输出",configBrowserDesc:"浏览器自动化",configUiDesc:"界面偏好",configModelsDesc:"AI 模型与提供商",configBindingsDesc:"快捷键绑定",configBroadcastDesc:"广播与通知",configAudioDesc:"音频输入/输出",configSessionDesc:"会话管理与持久化",configCronDesc:"定时任务与自动化",configWebDesc:"Web 服务与 API",configDiscoveryDesc:"服务发现与网络",configCanvasHostDesc:"画布渲染与显示",configTalkDesc:"语音与朗读",configPluginsDesc:"插件管理",configSettingsTitle:"设置",configSearchPlaceholder:"搜索设置…",configAllSettings:"全部设置",configForm:"表单",configRaw:"原始",configUnsavedChanges:"未保存的更改",configUnsavedChangesLabel:"未保存的更改",configOneUnsavedChange:"1 项未保存的更改",configNoChanges:"无更改",configApplying:"应用中…",configApply:"应用",configUpdating:"更新中…",configUpdateButton:"更新",configViewPrefix:"查看 ",configPendingChange:"项待处理更改",configPendingChanges:"项待处理更改",configLoadingSchema:"正在加载架构…",configFormUnsafeWarning:"表单视图无法安全编辑部分字段，请使用原始模式以免丢失配置项。",configRawJson5:"原始 JSON5",configValidityValid:"有效",configValidityInvalid:"无效",configValidityUnknown:"未知",configSchemaUnavailable:"架构不可用。",configUnsupportedSchema:"不支持的架构，请使用原始模式。",configNoSettingsMatchPrefix:"没有匹配「",configNoSettingsMatchSuffix:"」的设置",configNoSettingsInSection:"本部分暂无设置",configUnsupportedSchemaNode:"不支持的架构节点，请使用原始模式。",configSubnavAll:"全部",debugSnapshots:"快照",debugSnapshotsSub:"状态、健康与心跳数据。",debugStatus:"状态",debugHealth:"健康",debugLastHeartbeat:"最近心跳",debugSecurityAudit:"安全审计",debugManualRpc:"手动 RPC",debugManualRpcSub:"使用 JSON 参数发送原始网关方法。",debugMethod:"方法",debugParams:"参数",debugCall:"调用",debugCritical:"严重",debugWarnings:"警告",debugNoCritical:"无严重问题",debugInfo:"信息",debugSecurityAuditDetails:"运行 openclaw security audit --deep 查看详细信息。",debugModels:"模型",debugModelsSub:"来自 models.list 的目录。",debugEventLog:"事件日志",debugEventLogSub:"最新的网关事件。",debugNoEvents:"暂无事件。",logsTitle:"日志",logsSub:"网关文件日志（JSONL）。",logsExportFiltered:"导出已筛选",logsExportVisible:"导出可见"},Dc={en:Ic,zh:_c};function i(e){return Dc[Ta()][e]}const Rc={env:{label:"configEnvVars",desc:"configEnvVarsDesc"},update:{label:"configUpdate",desc:"configUpdatesDesc"},agents:{label:"configAgents",desc:"configAgentsDesc"},auth:{label:"configAuth",desc:"configAuthDesc"},channels:{label:"configChannels",desc:"configChannelsDesc"},messages:{label:"configMessages",desc:"configMessagesDesc"},commands:{label:"configCommands",desc:"configCommandsDesc"},hooks:{label:"configHooks",desc:"configHooksDesc"},skills:{label:"configSkills",desc:"configSkillsDesc"},tools:{label:"configTools",desc:"configToolsDesc"},gateway:{label:"configGateway",desc:"configGatewayDesc"},wizard:{label:"configWizard",desc:"configWizardDesc"},meta:{label:"configMeta",desc:"configMetaDesc"},logging:{label:"configLogging",desc:"configLoggingDesc"},browser:{label:"configBrowser",desc:"configBrowserDesc"},ui:{label:"configUi",desc:"configUiDesc"},models:{label:"configModels",desc:"configModelsDesc"},bindings:{label:"configBindings",desc:"configBindingsDesc"},broadcast:{label:"configBroadcast",desc:"configBroadcastDesc"},audio:{label:"configAudio",desc:"configAudioDesc"},session:{label:"configSession",desc:"configSessionDesc"},cron:{label:"configCron",desc:"configCronDesc"},web:{label:"configWeb",desc:"configWebDesc"},discovery:{label:"configDiscovery",desc:"configDiscoveryDesc"},canvasHost:{label:"configCanvasHost",desc:"configCanvasHostDesc"},talk:{label:"configTalk",desc:"configTalkDesc"},plugins:{label:"configPlugins",desc:"configPluginsDesc"}};function Ma(e){const t=Rc[e];return t?{label:i(t.label),description:i(t.desc)}:{label:e,description:""}}function Pc(e){const{values:t,original:n}=e;return t.name!==n.name||t.displayName!==n.displayName||t.about!==n.about||t.picture!==n.picture||t.banner!==n.banner||t.website!==n.website||t.nip05!==n.nip05||t.lud16!==n.lud16}function Nc(e){const{state:t,callbacks:n,accountId:s}=e,a=Pc(t),o=(c,d,g={})=>{const{type:h="text",placeholder:p,maxLength:f,help:u}=g,m=t.values[c]??"",b=t.fieldErrors[c],w=`nostr-profile-${c}`;return h==="textarea"?r`
        <div class="form-field" style="margin-bottom: 12px;">
          <label for="${w}" style="display: block; margin-bottom: 4px; font-weight: 500;">
            ${d}
          </label>
          <textarea
            id="${w}"
            .value=${m}
            placeholder=${p??""}
            maxlength=${f??2e3}
            rows="3"
            style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; resize: vertical; font-family: inherit;"
            @input=${k=>{const A=k.target;n.onFieldChange(c,A.value)}}
            ?disabled=${t.saving}
          ></textarea>
          ${u?r`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${u}</div>`:v}
          ${b?r`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${b}</div>`:v}
        </div>
      `:r`
      <div class="form-field" style="margin-bottom: 12px;">
        <label for="${w}" style="display: block; margin-bottom: 4px; font-weight: 500;">
          ${d}
        </label>
        <input
          id="${w}"
          type=${h}
          .value=${m}
          placeholder=${p??""}
          maxlength=${f??256}
          style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px;"
          @input=${k=>{const A=k.target;n.onFieldChange(c,A.value)}}
          ?disabled=${t.saving}
        />
        ${u?r`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${u}</div>`:v}
        ${b?r`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${b}</div>`:v}
      </div>
    `},l=()=>{const c=t.values.picture;return c?r`
      <div style="margin-bottom: 12px;">
        <img
          src=${c}
          alt=${i("nostrProfilePreview")}
          style="max-width: 80px; max-height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
          @error=${d=>{const g=d.target;g.style.display="none"}}
          @load=${d=>{const g=d.target;g.style.display="block"}}
        />
      </div>
    `:v};return r`
    <div class="nostr-profile-form" style="padding: 16px; background: var(--bg-secondary); border-radius: 8px; margin-top: 12px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <div style="font-weight: 600; font-size: 16px;">${i("nostrEditProfile")}</div>
        <div style="font-size: 12px; color: var(--text-muted);">${i("nostrAccount")}: ${s}</div>
      </div>

      ${t.error?r`<div class="callout danger" style="margin-bottom: 12px;">${t.error}</div>`:v}

      ${t.success?r`<div class="callout success" style="margin-bottom: 12px;">${t.success}</div>`:v}

      ${l()}

      ${o("name",i("nostrUsername"),{placeholder:"satoshi",maxLength:256,help:"Short username (e.g., satoshi)"})}

      ${o("displayName",i("nostrDisplayName"),{placeholder:"Satoshi Nakamoto",maxLength:256,help:"Your full display name"})}

      ${o("about",i("nostrBio"),{type:"textarea",placeholder:"Tell people about yourself...",maxLength:2e3,help:"A brief bio or description"})}

      ${o("picture",i("nostrAvatarUrl"),{type:"url",placeholder:"https://example.com/avatar.jpg",help:"HTTPS URL to your profile picture"})}

      ${t.showAdvanced?r`
            <div style="border-top: 1px solid var(--border-color); padding-top: 12px; margin-top: 12px;">
              <div style="font-weight: 500; margin-bottom: 12px; color: var(--text-muted);">${i("nostrAdvanced")}</div>

              ${o("banner",i("nostrBannerUrl"),{type:"url",placeholder:"https://example.com/banner.jpg",help:"HTTPS URL to a banner image"})}

              ${o("website",i("nostrWebsite"),{type:"url",placeholder:"https://example.com",help:"Your personal website"})}

              ${o("nip05",i("nostrNip05"),{placeholder:"you@example.com",help:"Verifiable identifier (e.g., you@domain.com)"})}

              ${o("lud16",i("nostrLud16"),{placeholder:"you@getalby.com",help:"Lightning address for tips (LUD-16)"})}
            </div>
          `:v}

      <div style="display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap;">
        <button
          class="btn primary"
          @click=${n.onSave}
          ?disabled=${t.saving||!a}
        >
          ${t.saving?i("commonSaving"):i("nostrSavePublish")}
        </button>

        <button
          class="btn"
          @click=${n.onImport}
          ?disabled=${t.importing||t.saving}
        >
          ${t.importing?i("nostrImporting"):i("nostrImportRelays")}
        </button>

        <button
          class="btn"
          @click=${n.onToggleAdvanced}
        >
          ${t.showAdvanced?i("nostrHideAdvanced"):i("nostrShowAdvanced")}
        </button>

        <button
          class="btn"
          @click=${n.onCancel}
          ?disabled=${t.saving}
        >
          ${i("commonCancel")}
        </button>
      </div>

      ${a?r`
              <div style="font-size: 12px; color: var(--warning-color); margin-top: 8px">
                ${i("nostrUnsavedChanges")}
              </div>
            `:v}
    </div>
  `}function Fc(e){const t={name:e?.name??"",displayName:e?.displayName??"",about:e?.about??"",picture:e?.picture??"",banner:e?.banner??"",website:e?.website??"",nip05:e?.nip05??"",lud16:e?.lud16??""};return{values:t,original:{...t},saving:!1,importing:!1,error:null,success:null,fieldErrors:{},showAdvanced:!!(e?.banner||e?.website||e?.nip05||e?.lud16)}}async function Oc(e,t){await kc(e,t),await xe(e,!0)}async function Uc(e){await Ac(e),await xe(e,!0)}async function Bc(e){await Cc(e),await xe(e,!0)}async function Hc(e){await Rn(e),await Le(e),await xe(e,!0)}async function zc(e){await Le(e),await xe(e,!0)}function Wc(e){if(!Array.isArray(e))return{};const t={};for(const n of e){if(typeof n!="string")continue;const[s,...a]=n.split(":");if(!s||a.length===0)continue;const o=s.trim(),l=a.join(":").trim();o&&l&&(t[o]=l)}return t}function hl(e){return(e.channelsSnapshot?.channelAccounts?.nostr??[])[0]?.accountId??e.nostrProfileAccountId??"default"}function ml(e,t=""){return`/api/channels/nostr/${encodeURIComponent(e)}/profile${t}`}function Kc(e,t,n){e.nostrProfileAccountId=t,e.nostrProfileFormState=Fc(n??void 0)}function jc(e){e.nostrProfileFormState=null,e.nostrProfileAccountId=null}function qc(e,t,n){const s=e.nostrProfileFormState;s&&(e.nostrProfileFormState={...s,values:{...s.values,[t]:n},fieldErrors:{...s.fieldErrors,[t]:""}})}function Gc(e){const t=e.nostrProfileFormState;t&&(e.nostrProfileFormState={...t,showAdvanced:!t.showAdvanced})}async function Vc(e){const t=e.nostrProfileFormState;if(!t||t.saving)return;const n=hl(e);e.nostrProfileFormState={...t,saving:!0,error:null,success:null,fieldErrors:{}};try{const s=await fetch(ml(n),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.values)}),a=await s.json().catch(()=>null);if(!s.ok||a?.ok===!1||!a){const o=a?.error??`Profile update failed (${s.status})`;e.nostrProfileFormState={...t,saving:!1,error:o,success:null,fieldErrors:Wc(a?.details)};return}if(!a.persisted){e.nostrProfileFormState={...t,saving:!1,error:"Profile publish failed on all relays.",success:null};return}e.nostrProfileFormState={...t,saving:!1,error:null,success:"Profile published to relays.",fieldErrors:{},original:{...t.values}},await xe(e,!0)}catch(s){e.nostrProfileFormState={...t,saving:!1,error:`Profile update failed: ${String(s)}`,success:null}}}async function Qc(e){const t=e.nostrProfileFormState;if(!t||t.importing)return;const n=hl(e);e.nostrProfileFormState={...t,importing:!0,error:null,success:null};try{const s=await fetch(ml(n,"/import"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({autoMerge:!0})}),a=await s.json().catch(()=>null);if(!s.ok||a?.ok===!1||!a){const d=a?.error??`Profile import failed (${s.status})`;e.nostrProfileFormState={...t,importing:!1,error:d,success:null};return}const o=a.merged??a.imported??null,l=o?{...t.values,...o}:t.values,c=!!(l.banner||l.website||l.nip05||l.lud16);e.nostrProfileFormState={...t,importing:!1,values:l,error:null,success:a.saved?"Profile imported from relays. Review and publish.":"Profile imported. Review and publish.",showAdvanced:c},a.saved&&await xe(e,!0)}catch(s){e.nostrProfileFormState={...t,importing:!1,error:`Profile import failed: ${String(s)}`,success:null}}}function fl(e){const t=(e??"").trim();if(!t)return null;const n=t.split(":").filter(Boolean);if(n.length<3||n[0]!=="agent")return null;const s=n[1]?.trim(),a=n.slice(2).join(":");return!s||!a?null:{agentId:s,rest:a}}const Vs=450;function dn(e,t=!1){e.chatScrollFrame&&cancelAnimationFrame(e.chatScrollFrame),e.chatScrollTimeout!=null&&(clearTimeout(e.chatScrollTimeout),e.chatScrollTimeout=null);const n=()=>{const s=e.querySelector(".chat-thread");if(s){const a=getComputedStyle(s).overflowY;if(a==="auto"||a==="scroll"||s.scrollHeight-s.clientHeight>1)return s}return document.scrollingElement??document.documentElement};e.updateComplete.then(()=>{e.chatScrollFrame=requestAnimationFrame(()=>{e.chatScrollFrame=null;const s=n();if(!s)return;const a=s.scrollHeight-s.scrollTop-s.clientHeight,o=t&&!e.chatHasAutoScrolled;if(!(o||e.chatUserNearBottom||a<Vs)){e.chatNewMessagesBelow=!0;return}o&&(e.chatHasAutoScrolled=!0),s.scrollTop=s.scrollHeight,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1;const c=o?150:120;e.chatScrollTimeout=window.setTimeout(()=>{e.chatScrollTimeout=null;const d=n();if(!d)return;const g=d.scrollHeight-d.scrollTop-d.clientHeight;(o||e.chatUserNearBottom||g<Vs)&&(d.scrollTop=d.scrollHeight,e.chatUserNearBottom=!0)},c)})})}function vl(e,t=!1){e.logsScrollFrame&&cancelAnimationFrame(e.logsScrollFrame),e.updateComplete.then(()=>{e.logsScrollFrame=requestAnimationFrame(()=>{e.logsScrollFrame=null;const n=e.querySelector(".log-stream");if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;(t||s<80)&&(n.scrollTop=n.scrollHeight)})})}function Yc(e,t){const n=t.currentTarget;if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;e.chatUserNearBottom=s<Vs,e.chatUserNearBottom&&(e.chatNewMessagesBelow=!1)}function Jc(e,t){const n=t.currentTarget;if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;e.logsAtBottom=s<80}function Bo(e){e.chatHasAutoScrolled=!1,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1}function Zc(e,t){if(e.length===0)return;const n=new Blob([`${e.join(`
`)}
`],{type:"text/plain"}),s=URL.createObjectURL(n),a=document.createElement("a"),o=new Date().toISOString().slice(0,19).replace(/[:T]/g,"-");a.href=s,a.download=`openclaw-logs-${t}-${o}.log`,a.click(),URL.revokeObjectURL(s)}function Xc(e){if(typeof ResizeObserver>"u")return;const t=e.querySelector(".topbar");if(!t)return;const n=()=>{const{height:s}=t.getBoundingClientRect();e.style.setProperty("--topbar-height",`${s}px`)};n(),e.topbarObserver=new ResizeObserver(()=>n()),e.topbarObserver.observe(t)}async function es(e){if(!(!e.client||!e.connected)&&!e.debugLoading){e.debugLoading=!0;try{const[t,n,s,a]=await Promise.all([e.client.request("status",{}),e.client.request("health",{}),e.client.request("models.list",{}),e.client.request("last-heartbeat",{})]);e.debugStatus=t,e.debugHealth=n;const o=s;e.debugModels=Array.isArray(o?.models)?o?.models:[],e.debugHeartbeat=a}catch(t){e.debugCallError=String(t)}finally{e.debugLoading=!1}}}async function ed(e){if(!(!e.client||!e.connected)){e.debugCallError=null,e.debugCallResult=null;try{const t=e.debugCallParams.trim()?JSON.parse(e.debugCallParams):{},n=await e.client.request(e.debugCallMethod.trim(),t);e.debugCallResult=JSON.stringify(n,null,2)}catch(t){e.debugCallError=String(t)}}}const td=2e3,nd=new Set(["trace","debug","info","warn","error","fatal"]);function sd(e){if(typeof e!="string")return null;const t=e.trim();if(!t.startsWith("{")||!t.endsWith("}"))return null;try{const n=JSON.parse(t);return!n||typeof n!="object"?null:n}catch{return null}}function ad(e){if(typeof e!="string")return null;const t=e.toLowerCase();return nd.has(t)?t:null}function od(e){if(!e.trim())return{raw:e,message:e};try{const t=JSON.parse(e),n=t&&typeof t._meta=="object"&&t._meta!==null?t._meta:null,s=typeof t.time=="string"?t.time:typeof n?.date=="string"?n?.date:null,a=ad(n?.logLevelName??n?.level),o=typeof t[0]=="string"?t[0]:typeof n?.name=="string"?n?.name:null,l=sd(o);let c=null;l&&(typeof l.subsystem=="string"?c=l.subsystem:typeof l.module=="string"&&(c=l.module)),!c&&o&&o.length<120&&(c=o);let d=null;return typeof t[1]=="string"?d=t[1]:!l&&typeof t[0]=="string"?d=t[0]:typeof t.message=="string"&&(d=t.message),{raw:e,time:s,level:a,subsystem:c,message:d??e,meta:n??void 0}}catch{return{raw:e,message:e}}}async function Ea(e,t){if(!(!e.client||!e.connected)&&!(e.logsLoading&&!t?.quiet)){t?.quiet||(e.logsLoading=!0),e.logsError=null;try{const s=await e.client.request("logs.tail",{cursor:t?.reset?void 0:e.logsCursor??void 0,limit:e.logsLimit,maxBytes:e.logsMaxBytes}),o=(Array.isArray(s.lines)?s.lines.filter(c=>typeof c=="string"):[]).map(od),l=!!(t?.reset||s.reset||e.logsCursor==null);e.logsEntries=l?o:[...e.logsEntries,...o].slice(-td),typeof s.cursor=="number"&&(e.logsCursor=s.cursor),typeof s.file=="string"&&(e.logsFile=s.file),e.logsTruncated=!!s.truncated,e.logsLastFetchAt=Date.now()}catch(n){e.logsError=String(n)}finally{t?.quiet||(e.logsLoading=!1)}}}async function ts(e,t){if(!(!e.client||!e.connected)&&!e.nodesLoading){e.nodesLoading=!0,t?.quiet||(e.lastError=null);try{const n=await e.client.request("node.list",{});e.nodes=Array.isArray(n.nodes)?n.nodes:[]}catch(n){t?.quiet||(e.lastError=String(n))}finally{e.nodesLoading=!1}}}function id(e){e.nodesPollInterval==null&&(e.nodesPollInterval=window.setInterval(()=>{ts(e,{quiet:!0})},5e3))}function ld(e){e.nodesPollInterval!=null&&(clearInterval(e.nodesPollInterval),e.nodesPollInterval=null)}function La(e){e.logsPollInterval==null&&(e.logsPollInterval=window.setInterval(()=>{e.tab==="logs"&&Ea(e,{quiet:!0})},2e3))}function Ia(e){e.logsPollInterval!=null&&(clearInterval(e.logsPollInterval),e.logsPollInterval=null)}function _a(e){e.debugPollInterval==null&&(e.debugPollInterval=window.setInterval(()=>{e.tab==="debug"&&es(e)},3e3))}function Da(e){e.debugPollInterval!=null&&(clearInterval(e.debugPollInterval),e.debugPollInterval=null)}async function bl(e,t){if(!(!e.client||!e.connected||e.agentIdentityLoading)&&!e.agentIdentityById[t]){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{const n=await e.client.request("agent.identity.get",{agentId:t});n&&(e.agentIdentityById={...e.agentIdentityById,[t]:n})}catch(n){e.agentIdentityError=String(n)}finally{e.agentIdentityLoading=!1}}}async function yl(e,t){if(!e.client||!e.connected||e.agentIdentityLoading)return;const n=t.filter(s=>!e.agentIdentityById[s]);if(n.length!==0){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{for(const s of n){const a=await e.client.request("agent.identity.get",{agentId:s});a&&(e.agentIdentityById={...e.agentIdentityById,[s]:a})}}catch(s){e.agentIdentityError=String(s)}finally{e.agentIdentityLoading=!1}}}async function Pn(e,t){if(!(!e.client||!e.connected)&&!e.agentSkillsLoading){e.agentSkillsLoading=!0,e.agentSkillsError=null;try{const n=await e.client.request("skills.status",{agentId:t});n&&(e.agentSkillsReport=n,e.agentSkillsAgentId=t)}catch(n){e.agentSkillsError=String(n)}finally{e.agentSkillsLoading=!1}}}async function Ra(e){if(!(!e.client||!e.connected)&&!e.agentsLoading){e.agentsLoading=!0,e.agentsError=null;try{const t=await e.client.request("agents.list",{});if(t){e.agentsList=t;const n=e.agentsSelectedId,s=t.agents.some(a=>a.id===n);(!n||!s)&&(e.agentsSelectedId=t.defaultId??t.agents[0]?.id??null)}}catch(t){e.agentsError=String(t)}finally{e.agentsLoading=!1}}}const rd=/<\s*\/?\s*(?:think(?:ing)?|thought|antthinking|final)\b/i,Sn=/<\s*\/?\s*final\b[^<>]*>/gi,Ho=/<\s*(\/?)\s*(?:think(?:ing)?|thought|antthinking)\b[^<>]*>/gi;function zo(e){const t=[],n=/(^|\n)(```|~~~)[^\n]*\n[\s\S]*?(?:\n\2(?:\n|$)|$)/g;for(const a of e.matchAll(n)){const o=(a.index??0)+a[1].length;t.push({start:o,end:o+a[0].length-a[1].length})}const s=/`+[^`]+`+/g;for(const a of e.matchAll(s)){const o=a.index??0,l=o+a[0].length;t.some(d=>o>=d.start&&l<=d.end)||t.push({start:o,end:l})}return t.sort((a,o)=>a.start-o.start),t}function Wo(e,t){return t.some(n=>e>=n.start&&e<n.end)}function cd(e,t){return e.trimStart()}function dd(e,t){if(!e||!rd.test(e))return e;let n=e;if(Sn.test(n)){Sn.lastIndex=0;const c=[],d=zo(n);for(const g of n.matchAll(Sn)){const h=g.index??0;c.push({start:h,length:g[0].length,inCode:Wo(h,d)})}for(let g=c.length-1;g>=0;g--){const h=c[g];h.inCode||(n=n.slice(0,h.start)+n.slice(h.start+h.length))}}else Sn.lastIndex=0;const s=zo(n);Ho.lastIndex=0;let a="",o=0,l=!1;for(const c of n.matchAll(Ho)){const d=c.index??0,g=c[1]==="/";Wo(d,s)||(l?g&&(l=!1):(a+=n.slice(o,d),g||(l=!0)),o=d+c[0].length)}return a+=n.slice(o),cd(a)}function vt(e){return!e&&e!==0?"n/a":new Date(e).toLocaleString()}function Q(e){if(!e&&e!==0)return"n/a";const t=Date.now()-e,n=Math.abs(t),s=t<0?"from now":"ago",a=Math.round(n/1e3);if(a<60)return t<0?"in <1m":`${a}s ago`;const o=Math.round(a/60);if(o<60)return`${o}m ${s}`;const l=Math.round(o/60);return l<48?`${l}h ${s}`:`${Math.round(l/24)}d ${s}`}function xl(e){if(!e&&e!==0)return"n/a";if(e<1e3)return`${e}ms`;const t=Math.round(e/1e3);if(t<60)return`${t}s`;const n=Math.round(t/60);if(n<60)return`${n}m`;const s=Math.round(n/60);return s<48?`${s}h`:`${Math.round(s/24)}d`}function Qs(e){return!e||e.length===0?"none":e.filter(t=>!!(t&&t.trim())).join(", ")}function Ys(e,t=120){return e.length<=t?e:`${e.slice(0,Math.max(0,t-1))}…`}function wl(e,t){return e.length<=t?{text:e,truncated:!1,total:e.length}:{text:e.slice(0,Math.max(0,t)),truncated:!0,total:e.length}}function Bn(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function ks(e){return dd(e)}async function un(e){if(!(!e.client||!e.connected))try{const t=await e.client.request("cron.status",{});e.cronStatus=t}catch(t){e.cronError=String(t)}}async function ns(e){if(!(!e.client||!e.connected)&&!e.cronLoading){e.cronLoading=!0,e.cronError=null;try{const t=await e.client.request("cron.list",{includeDisabled:!0});e.cronJobs=Array.isArray(t.jobs)?t.jobs:[]}catch(t){e.cronError=String(t)}finally{e.cronLoading=!1}}}function ud(e){if(e.scheduleKind==="at"){const n=Date.parse(e.scheduleAt);if(!Number.isFinite(n))throw new Error("Invalid run time.");return{kind:"at",at:new Date(n).toISOString()}}if(e.scheduleKind==="every"){const n=Bn(e.everyAmount,0);if(n<=0)throw new Error("Invalid interval amount.");const s=e.everyUnit;return{kind:"every",everyMs:n*(s==="minutes"?6e4:s==="hours"?36e5:864e5)}}const t=e.cronExpr.trim();if(!t)throw new Error("Cron expression required.");return{kind:"cron",expr:t,tz:e.cronTz.trim()||void 0}}function gd(e){if(e.payloadKind==="systemEvent"){const a=e.payloadText.trim();if(!a)throw new Error("System event text required.");return{kind:"systemEvent",text:a}}const t=e.payloadText.trim();if(!t)throw new Error("Agent message required.");const n={kind:"agentTurn",message:t},s=Bn(e.timeoutSeconds,0);return s>0&&(n.timeoutSeconds=s),n}async function pd(e){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{const t=ud(e.cronForm),n=gd(e.cronForm),s=e.cronForm.sessionTarget==="isolated"&&e.cronForm.payloadKind==="agentTurn"&&e.cronForm.deliveryMode?{mode:e.cronForm.deliveryMode==="announce"?"announce":"none",channel:e.cronForm.deliveryChannel.trim()||"last",to:e.cronForm.deliveryTo.trim()||void 0}:void 0,a=e.cronForm.agentId.trim(),o={name:e.cronForm.name.trim(),description:e.cronForm.description.trim()||void 0,agentId:a||void 0,enabled:e.cronForm.enabled,schedule:t,sessionTarget:e.cronForm.sessionTarget,wakeMode:e.cronForm.wakeMode,payload:n,delivery:s};if(!o.name)throw new Error("Name required.");await e.client.request("cron.add",o),e.cronForm={...e.cronForm,name:"",description:"",payloadText:""},await ns(e),await un(e)}catch(t){e.cronError=String(t)}finally{e.cronBusy=!1}}}async function hd(e,t,n){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.update",{id:t.id,patch:{enabled:n}}),await ns(e),await un(e)}catch(s){e.cronError=String(s)}finally{e.cronBusy=!1}}}async function md(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.run",{id:t.id,mode:"force"}),await $l(e,t.id)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function fd(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.remove",{id:t.id}),e.cronRunsJobId===t.id&&(e.cronRunsJobId=null,e.cronRuns=[]),await ns(e),await un(e)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function $l(e,t){if(!(!e.client||!e.connected))try{const n=await e.client.request("cron.runs",{id:t,limit:50});e.cronRunsJobId=t,e.cronRuns=Array.isArray(n.entries)?n.entries:[]}catch(n){e.cronError=String(n)}}const Sl="openclaw.device.auth.v1";function Pa(e){return e.trim()}function vd(e){if(!Array.isArray(e))return[];const t=new Set;for(const n of e){const s=n.trim();s&&t.add(s)}return[...t].toSorted()}function Na(){try{const e=window.localStorage.getItem(Sl);if(!e)return null;const t=JSON.parse(e);return!t||t.version!==1||!t.deviceId||typeof t.deviceId!="string"||!t.tokens||typeof t.tokens!="object"?null:t}catch{return null}}function kl(e){try{window.localStorage.setItem(Sl,JSON.stringify(e))}catch{}}function bd(e){const t=Na();if(!t||t.deviceId!==e.deviceId)return null;const n=Pa(e.role),s=t.tokens[n];return!s||typeof s.token!="string"?null:s}function Al(e){const t=Pa(e.role),n={version:1,deviceId:e.deviceId,tokens:{}},s=Na();s&&s.deviceId===e.deviceId&&(n.tokens={...s.tokens});const a={token:e.token,role:t,scopes:vd(e.scopes),updatedAtMs:Date.now()};return n.tokens[t]=a,kl(n),a}function Cl(e){const t=Na();if(!t||t.deviceId!==e.deviceId)return;const n=Pa(e.role);if(!t.tokens[n])return;const s={...t,tokens:{...t.tokens}};delete s.tokens[n],kl(s)}const Tl={p:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,n:0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,h:8n,a:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,d:0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,Gx:0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,Gy:0x6666666666666666666666666666666666666666666666666666666666666658n},{p:ge,n:Nn,Gx:Ko,Gy:jo,a:As,d:Cs,h:yd}=Tl,bt=32,Fa=64,xd=(...e)=>{"captureStackTrace"in Error&&typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(...e)},le=(e="")=>{const t=new Error(e);throw xd(t,le),t},wd=e=>typeof e=="bigint",$d=e=>typeof e=="string",Sd=e=>e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array",Je=(e,t,n="")=>{const s=Sd(e),a=e?.length,o=t!==void 0;if(!s||o&&a!==t){const l=n&&`"${n}" `,c=o?` of length ${t}`:"",d=s?`length=${a}`:`type=${typeof e}`;le(l+"expected Uint8Array"+c+", got "+d)}return e},ss=e=>new Uint8Array(e),Ml=e=>Uint8Array.from(e),El=(e,t)=>e.toString(16).padStart(t,"0"),Ll=e=>Array.from(Je(e)).map(t=>El(t,2)).join(""),Ke={_0:48,_9:57,A:65,F:70,a:97,f:102},qo=e=>{if(e>=Ke._0&&e<=Ke._9)return e-Ke._0;if(e>=Ke.A&&e<=Ke.F)return e-(Ke.A-10);if(e>=Ke.a&&e<=Ke.f)return e-(Ke.a-10)},Il=e=>{const t="hex invalid";if(!$d(e))return le(t);const n=e.length,s=n/2;if(n%2)return le(t);const a=ss(s);for(let o=0,l=0;o<s;o++,l+=2){const c=qo(e.charCodeAt(l)),d=qo(e.charCodeAt(l+1));if(c===void 0||d===void 0)return le(t);a[o]=c*16+d}return a},_l=()=>globalThis?.crypto,kd=()=>_l()?.subtle??le("crypto.subtle must be defined, consider polyfill"),on=(...e)=>{const t=ss(e.reduce((s,a)=>s+Je(a).length,0));let n=0;return e.forEach(s=>{t.set(s,n),n+=s.length}),t},Ad=(e=bt)=>_l().getRandomValues(ss(e)),Hn=BigInt,rt=(e,t,n,s="bad number: out of range")=>wd(e)&&t<=e&&e<n?e:le(s),N=(e,t=ge)=>{const n=e%t;return n>=0n?n:t+n},Dl=e=>N(e,Nn),Cd=(e,t)=>{(e===0n||t<=0n)&&le("no inverse n="+e+" mod="+t);let n=N(e,t),s=t,a=0n,o=1n;for(;n!==0n;){const l=s/n,c=s%n,d=a-o*l;s=n,n=c,a=o,o=d}return s===1n?N(a,t):le("no inverse")},Td=e=>{const t=Fl[e];return typeof t!="function"&&le("hashes."+e+" not set"),t},Ts=e=>e instanceof ke?e:le("Point expected"),Js=2n**256n;class ke{static BASE;static ZERO;X;Y;Z;T;constructor(t,n,s,a){const o=Js;this.X=rt(t,0n,o),this.Y=rt(n,0n,o),this.Z=rt(s,1n,o),this.T=rt(a,0n,o),Object.freeze(this)}static CURVE(){return Tl}static fromAffine(t){return new ke(t.x,t.y,1n,N(t.x*t.y))}static fromBytes(t,n=!1){const s=Cs,a=Ml(Je(t,bt)),o=t[31];a[31]=o&-129;const l=Pl(a);rt(l,0n,n?Js:ge);const d=N(l*l),g=N(d-1n),h=N(s*d+1n);let{isValid:p,value:f}=Ed(g,h);p||le("bad point: y not sqrt");const u=(f&1n)===1n,m=(o&128)!==0;return!n&&f===0n&&m&&le("bad point: x==0, isLastByteOdd"),m!==u&&(f=N(-f)),new ke(f,l,1n,N(f*l))}static fromHex(t,n){return ke.fromBytes(Il(t),n)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}assertValidity(){const t=As,n=Cs,s=this;if(s.is0())return le("bad point: ZERO");const{X:a,Y:o,Z:l,T:c}=s,d=N(a*a),g=N(o*o),h=N(l*l),p=N(h*h),f=N(d*t),u=N(h*N(f+g)),m=N(p+N(n*N(d*g)));if(u!==m)return le("bad point: equation left != right (1)");const b=N(a*o),w=N(l*c);return b!==w?le("bad point: equation left != right (2)"):this}equals(t){const{X:n,Y:s,Z:a}=this,{X:o,Y:l,Z:c}=Ts(t),d=N(n*c),g=N(o*a),h=N(s*c),p=N(l*a);return d===g&&h===p}is0(){return this.equals(It)}negate(){return new ke(N(-this.X),this.Y,this.Z,N(-this.T))}double(){const{X:t,Y:n,Z:s}=this,a=As,o=N(t*t),l=N(n*n),c=N(2n*N(s*s)),d=N(a*o),g=t+n,h=N(N(g*g)-o-l),p=d+l,f=p-c,u=d-l,m=N(h*f),b=N(p*u),w=N(h*u),k=N(f*p);return new ke(m,b,k,w)}add(t){const{X:n,Y:s,Z:a,T:o}=this,{X:l,Y:c,Z:d,T:g}=Ts(t),h=As,p=Cs,f=N(n*l),u=N(s*c),m=N(o*p*g),b=N(a*d),w=N((n+s)*(l+c)-f-u),k=N(b-m),A=N(b+m),T=N(u-h*f),C=N(w*k),E=N(A*T),M=N(w*T),D=N(k*A);return new ke(C,E,D,M)}subtract(t){return this.add(Ts(t).negate())}multiply(t,n=!0){if(!n&&(t===0n||this.is0()))return It;if(rt(t,1n,Nn),t===1n)return this;if(this.equals(yt))return Bd(t).p;let s=It,a=yt;for(let o=this;t>0n;o=o.double(),t>>=1n)t&1n?s=s.add(o):n&&(a=a.add(o));return s}multiplyUnsafe(t){return this.multiply(t,!1)}toAffine(){const{X:t,Y:n,Z:s}=this;if(this.equals(It))return{x:0n,y:1n};const a=Cd(s,ge);N(s*a)!==1n&&le("invalid inverse");const o=N(t*a),l=N(n*a);return{x:o,y:l}}toBytes(){const{x:t,y:n}=this.assertValidity().toAffine(),s=Rl(n);return s[31]|=t&1n?128:0,s}toHex(){return Ll(this.toBytes())}clearCofactor(){return this.multiply(Hn(yd),!1)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){let t=this.multiply(Nn/2n,!1).double();return Nn%2n&&(t=t.add(this)),t.is0()}}const yt=new ke(Ko,jo,1n,N(Ko*jo)),It=new ke(0n,1n,1n,0n);ke.BASE=yt;ke.ZERO=It;const Rl=e=>Il(El(rt(e,0n,Js),Fa)).reverse(),Pl=e=>Hn("0x"+Ll(Ml(Je(e)).reverse())),De=(e,t)=>{let n=e;for(;t-- >0n;)n*=n,n%=ge;return n},Md=e=>{const n=e*e%ge*e%ge,s=De(n,2n)*n%ge,a=De(s,1n)*e%ge,o=De(a,5n)*a%ge,l=De(o,10n)*o%ge,c=De(l,20n)*l%ge,d=De(c,40n)*c%ge,g=De(d,80n)*d%ge,h=De(g,80n)*d%ge,p=De(h,10n)*o%ge;return{pow_p_5_8:De(p,2n)*e%ge,b2:n}},Go=0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n,Ed=(e,t)=>{const n=N(t*t*t),s=N(n*n*t),a=Md(e*s).pow_p_5_8;let o=N(e*n*a);const l=N(t*o*o),c=o,d=N(o*Go),g=l===e,h=l===N(-e),p=l===N(-e*Go);return g&&(o=c),(h||p)&&(o=d),(N(o)&1n)===1n&&(o=N(-o)),{isValid:g||h,value:o}},Zs=e=>Dl(Pl(e)),Oa=(...e)=>Fl.sha512Async(on(...e)),Ld=(...e)=>Td("sha512")(on(...e)),Nl=e=>{const t=e.slice(0,bt);t[0]&=248,t[31]&=127,t[31]|=64;const n=e.slice(bt,Fa),s=Zs(t),a=yt.multiply(s),o=a.toBytes();return{head:t,prefix:n,scalar:s,point:a,pointBytes:o}},Ua=e=>Oa(Je(e,bt)).then(Nl),Id=e=>Nl(Ld(Je(e,bt))),_d=e=>Ua(e).then(t=>t.pointBytes),Dd=e=>Oa(e.hashable).then(e.finish),Rd=(e,t,n)=>{const{pointBytes:s,scalar:a}=e,o=Zs(t),l=yt.multiply(o).toBytes();return{hashable:on(l,s,n),finish:g=>{const h=Dl(o+Zs(g)*a);return Je(on(l,Rl(h)),Fa)}}},Pd=async(e,t)=>{const n=Je(e),s=await Ua(t),a=await Oa(s.prefix,n);return Dd(Rd(s,a,n))},Fl={sha512Async:async e=>{const t=kd(),n=on(e);return ss(await t.digest("SHA-512",n.buffer))},sha512:void 0},Nd=(e=Ad(bt))=>e,Fd={getExtendedPublicKeyAsync:Ua,getExtendedPublicKey:Id,randomSecretKey:Nd},zn=8,Od=256,Ol=Math.ceil(Od/zn)+1,Xs=2**(zn-1),Ud=()=>{const e=[];let t=yt,n=t;for(let s=0;s<Ol;s++){n=t,e.push(n);for(let a=1;a<Xs;a++)n=n.add(t),e.push(n);t=n.double()}return e};let Vo;const Qo=(e,t)=>{const n=t.negate();return e?n:t},Bd=e=>{const t=Vo||(Vo=Ud());let n=It,s=yt;const a=2**zn,o=a,l=Hn(a-1),c=Hn(zn);for(let d=0;d<Ol;d++){let g=Number(e&l);e>>=c,g>Xs&&(g-=o,e+=1n);const h=d*Xs,p=h,f=h+Math.abs(g)-1,u=d%2!==0,m=g<0;g===0?s=s.add(Qo(u,t[p])):n=n.add(Qo(m,t[f]))}return e!==0n&&le("invalid wnaf"),{p:n,f:s}},Ms="openclaw-device-identity-v1";function ea(e){let t="";for(const n of e)t+=String.fromCharCode(n);return btoa(t).replaceAll("+","-").replaceAll("/","_").replace(/=+$/g,"")}function Ul(e){const t=e.replaceAll("-","+").replaceAll("_","/"),n=t+"=".repeat((4-t.length%4)%4),s=atob(n),a=new Uint8Array(s.length);for(let o=0;o<s.length;o+=1)a[o]=s.charCodeAt(o);return a}function Hd(e){return Array.from(e).map(t=>t.toString(16).padStart(2,"0")).join("")}async function Bl(e){const t=await crypto.subtle.digest("SHA-256",e.slice().buffer);return Hd(new Uint8Array(t))}async function zd(){const e=Fd.randomSecretKey(),t=await _d(e);return{deviceId:await Bl(t),publicKey:ea(t),privateKey:ea(e)}}async function Ba(){try{const n=localStorage.getItem(Ms);if(n){const s=JSON.parse(n);if(s?.version===1&&typeof s.deviceId=="string"&&typeof s.publicKey=="string"&&typeof s.privateKey=="string"){const a=await Bl(Ul(s.publicKey));if(a!==s.deviceId){const o={...s,deviceId:a};return localStorage.setItem(Ms,JSON.stringify(o)),{deviceId:a,publicKey:s.publicKey,privateKey:s.privateKey}}return{deviceId:s.deviceId,publicKey:s.publicKey,privateKey:s.privateKey}}}}catch{}const e=await zd(),t={version:1,deviceId:e.deviceId,publicKey:e.publicKey,privateKey:e.privateKey,createdAtMs:Date.now()};return localStorage.setItem(Ms,JSON.stringify(t)),e}async function Wd(e,t){const n=Ul(e),s=new TextEncoder().encode(t),a=await Pd(s,n);return ea(a)}async function Ze(e,t){if(!(!e.client||!e.connected)&&!e.devicesLoading){e.devicesLoading=!0,t?.quiet||(e.devicesError=null);try{const n=await e.client.request("device.pair.list",{});e.devicesList={pending:Array.isArray(n?.pending)?n.pending:[],paired:Array.isArray(n?.paired)?n.paired:[]}}catch(n){t?.quiet||(e.devicesError=String(n))}finally{e.devicesLoading=!1}}}async function Kd(e,t){if(!(!e.client||!e.connected))try{await e.client.request("device.pair.approve",{requestId:t}),await Ze(e)}catch(n){e.devicesError=String(n)}}async function jd(e,t){if(!(!e.client||!e.connected||!window.confirm("Reject this device pairing request?")))try{await e.client.request("device.pair.reject",{requestId:t}),await Ze(e)}catch(s){e.devicesError=String(s)}}async function qd(e,t){if(!(!e.client||!e.connected))try{const n=await e.client.request("device.token.rotate",t);if(n?.token){const s=await Ba(),a=n.role??t.role;(n.deviceId===s.deviceId||t.deviceId===s.deviceId)&&Al({deviceId:s.deviceId,role:a,token:n.token,scopes:n.scopes??t.scopes??[]}),window.prompt("New device token (copy and store securely):",n.token)}await Ze(e)}catch(n){e.devicesError=String(n)}}async function Gd(e,t){if(!(!e.client||!e.connected||!window.confirm(`Revoke token for ${t.deviceId} (${t.role})?`)))try{await e.client.request("device.token.revoke",t);const s=await Ba();t.deviceId===s.deviceId&&Cl({deviceId:s.deviceId,role:t.role}),await Ze(e)}catch(s){e.devicesError=String(s)}}function Vd(e){if(!e||e.kind==="gateway")return{method:"exec.approvals.get",params:{}};const t=e.nodeId.trim();return t?{method:"exec.approvals.node.get",params:{nodeId:t}}:null}function Qd(e,t){if(!e||e.kind==="gateway")return{method:"exec.approvals.set",params:t};const n=e.nodeId.trim();return n?{method:"exec.approvals.node.set",params:{...t,nodeId:n}}:null}async function Ha(e,t){if(!(!e.client||!e.connected)&&!e.execApprovalsLoading){e.execApprovalsLoading=!0,e.lastError=null;try{const n=Vd(t);if(!n){e.lastError="Select a node before loading exec approvals.";return}const s=await e.client.request(n.method,n.params);Yd(e,s)}catch(n){e.lastError=String(n)}finally{e.execApprovalsLoading=!1}}}function Yd(e,t){e.execApprovalsSnapshot=t,e.execApprovalsDirty||(e.execApprovalsForm=ft(t.file??{}))}async function Jd(e,t){if(!(!e.client||!e.connected)){e.execApprovalsSaving=!0,e.lastError=null;try{const n=e.execApprovalsSnapshot?.hash;if(!n){e.lastError="Exec approvals hash missing; reload and retry.";return}const s=e.execApprovalsForm??e.execApprovalsSnapshot?.file??{},a=Qd(t,{file:s,baseHash:n});if(!a){e.lastError="Select a node before saving exec approvals.";return}await e.client.request(a.method,a.params),e.execApprovalsDirty=!1,await Ha(e,t)}catch(n){e.lastError=String(n)}finally{e.execApprovalsSaving=!1}}}function Zd(e,t,n){const s=ft(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});ul(s,t,n),e.execApprovalsForm=s,e.execApprovalsDirty=!0}function Xd(e,t){const n=ft(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});gl(n,t),e.execApprovalsForm=n,e.execApprovalsDirty=!0}async function za(e){if(!(!e.client||!e.connected)&&!e.presenceLoading){e.presenceLoading=!0,e.presenceError=null,e.presenceStatus=null;try{const t=await e.client.request("system-presence",{});Array.isArray(t)?(e.presenceEntries=t,e.presenceStatus=t.length===0?"No instances yet.":null):(e.presenceEntries=[],e.presenceStatus="No presence payload.")}catch(t){e.presenceError=String(t)}finally{e.presenceLoading=!1}}}async function $t(e,t){if(!(!e.client||!e.connected)&&!e.sessionsLoading){e.sessionsLoading=!0,e.sessionsError=null;try{const n=t?.includeGlobal??e.sessionsIncludeGlobal,s=t?.includeUnknown??e.sessionsIncludeUnknown,a=t?.activeMinutes??Bn(e.sessionsFilterActive,0),o=t?.limit??Bn(e.sessionsFilterLimit,0),l={includeGlobal:n,includeUnknown:s};a>0&&(l.activeMinutes=a),o>0&&(l.limit=o);const c=await e.client.request("sessions.list",l);c&&(e.sessionsResult=c)}catch(n){e.sessionsError=String(n)}finally{e.sessionsLoading=!1}}}async function eu(e,t,n){if(!e.client||!e.connected)return;const s={key:t};"label"in n&&(s.label=n.label),"thinkingLevel"in n&&(s.thinkingLevel=n.thinkingLevel),"verboseLevel"in n&&(s.verboseLevel=n.verboseLevel),"reasoningLevel"in n&&(s.reasoningLevel=n.reasoningLevel);try{await e.client.request("sessions.patch",s),await $t(e)}catch(a){e.sessionsError=String(a)}}async function tu(e,t){if(!(!e.client||!e.connected||e.sessionsLoading||!window.confirm(`Delete session "${t}"?

Deletes the session entry and archives its transcript.`))){e.sessionsLoading=!0,e.sessionsError=null;try{await e.client.request("sessions.delete",{key:t,deleteTranscript:!0}),await $t(e)}catch(s){e.sessionsError=String(s)}finally{e.sessionsLoading=!1}}}function Pt(e,t,n){if(!t.trim())return;const s={...e.skillMessages};n?s[t]=n:delete s[t],e.skillMessages=s}function as(e){return e instanceof Error?e.message:String(e)}async function gn(e,t){if(t?.clearMessages&&Object.keys(e.skillMessages).length>0&&(e.skillMessages={}),!(!e.client||!e.connected)&&!e.skillsLoading){e.skillsLoading=!0,e.skillsError=null;try{const n=await e.client.request("skills.status",{});n&&(e.skillsReport=n)}catch(n){e.skillsError=as(n)}finally{e.skillsLoading=!1}}}function nu(e,t,n){e.skillEdits={...e.skillEdits,[t]:n}}async function su(e,t,n){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{await e.client.request("skills.update",{skillKey:t,enabled:n}),await gn(e),Pt(e,t,{kind:"success",message:n?"Skill enabled":"Skill disabled"})}catch(s){const a=as(s);e.skillsError=a,Pt(e,t,{kind:"error",message:a})}finally{e.skillsBusyKey=null}}}async function au(e,t){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{const n=e.skillEdits[t]??"";await e.client.request("skills.update",{skillKey:t,apiKey:n}),await gn(e),Pt(e,t,{kind:"success",message:"API key saved"})}catch(n){const s=as(n);e.skillsError=s,Pt(e,t,{kind:"error",message:s})}finally{e.skillsBusyKey=null}}}async function ou(e,t,n,s){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{const a=await e.client.request("skills.install",{name:n,installId:s,timeoutMs:12e4});await gn(e),Pt(e,t,{kind:"success",message:a?.message??"Installed"})}catch(a){const o=as(a);e.skillsError=o,Pt(e,t,{kind:"error",message:o})}finally{e.skillsBusyKey=null}}}function iu(){return[{label:i("tabGroupChat"),tabs:["chat"]},{label:i("tabGroupControl"),tabs:["overview","channels","instances","sessions","usage","cron"]},{label:i("tabGroupAgent"),tabs:["agents","skills","nodes"]},{label:i("tabGroupSettings"),tabs:["config","debug","logs"]}]}const Hl={agents:"/agents",overview:"/overview",channels:"/channels",instances:"/instances",sessions:"/sessions",usage:"/usage",cron:"/cron",skills:"/skills",nodes:"/nodes",chat:"/chat",config:"/config",debug:"/debug",logs:"/logs"},zl=new Map(Object.entries(Hl).map(([e,t])=>[t,e]));function pn(e){if(!e)return"";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t==="/"?"":(t.endsWith("/")&&(t=t.slice(0,-1)),t)}function ln(e){if(!e)return"/";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t.length>1&&t.endsWith("/")&&(t=t.slice(0,-1)),t}function os(e,t=""){const n=pn(t),s=Hl[e];return n?`${n}${s}`:s}function Wl(e,t=""){const n=pn(t);let s=e||"/";n&&(s===n?s="/":s.startsWith(`${n}/`)&&(s=s.slice(n.length)));let a=ln(s).toLowerCase();return a.endsWith("/index.html")&&(a="/"),a==="/"?"chat":zl.get(a)??null}function lu(e){let t=ln(e);if(t.endsWith("/index.html")&&(t=ln(t.slice(0,-11))),t==="/")return"";const n=t.split("/").filter(Boolean);if(n.length===0)return"";for(let s=0;s<n.length;s++){const a=`/${n.slice(s).join("/")}`.toLowerCase();if(zl.has(a)){const o=n.slice(0,s);return o.length?`/${o.join("/")}`:""}}return`/${n.join("/")}`}function ru(e){switch(e){case"agents":return"folder";case"chat":return"messageSquare";case"overview":return"barChart";case"channels":return"link";case"instances":return"radio";case"sessions":return"fileText";case"usage":return"barChart";case"cron":return"loader";case"skills":return"zap";case"nodes":return"monitor";case"config":return"settings";case"debug":return"bug";case"logs":return"scrollText";default:return"folder"}}function ta(e){switch(e){case"agents":return i("navTitleAgents");case"overview":return i("navTitleOverview");case"channels":return i("navTitleChannels");case"instances":return i("navTitleInstances");case"sessions":return i("navTitleSessions");case"usage":return i("navTitleUsage");case"cron":return i("navTitleCron");case"skills":return i("navTitleSkills");case"nodes":return i("navTitleNodes");case"chat":return i("navTitleChat");case"config":return i("navTitleConfig");case"debug":return i("navTitleDebug");case"logs":return i("navTitleLogs");default:return i("navTitleControl")}}function cu(e){switch(e){case"agents":return i("subtitleAgents");case"overview":return i("subtitleOverview");case"channels":return i("subtitleChannels");case"instances":return i("subtitleInstances");case"sessions":return i("subtitleSessions");case"usage":return i("subtitleUsage");case"cron":return i("subtitleCron");case"skills":return i("subtitleSkills");case"nodes":return i("subtitleNodes");case"chat":return i("subtitleChat");case"config":return i("subtitleConfig");case"debug":return i("subtitleDebug");case"logs":return i("subtitleLogs");default:return""}}const Kl="openclaw.control.settings.v1";function du(){const t={gatewayUrl:`${location.protocol==="https:"?"wss":"ws"}://${location.host}`,token:"",sessionKey:"main",lastActiveSessionKey:"main",theme:"system",chatFocusMode:!1,chatShowThinking:!0,splitRatio:.6,navCollapsed:!1,navGroupsCollapsed:{}};try{const n=localStorage.getItem(Kl);if(!n)return t;const s=JSON.parse(n);return{gatewayUrl:typeof s.gatewayUrl=="string"&&s.gatewayUrl.trim()?s.gatewayUrl.trim():t.gatewayUrl,token:typeof s.token=="string"?s.token:t.token,sessionKey:typeof s.sessionKey=="string"&&s.sessionKey.trim()?s.sessionKey.trim():t.sessionKey,lastActiveSessionKey:typeof s.lastActiveSessionKey=="string"&&s.lastActiveSessionKey.trim()?s.lastActiveSessionKey.trim():typeof s.sessionKey=="string"&&s.sessionKey.trim()||t.lastActiveSessionKey,theme:s.theme==="light"||s.theme==="dark"||s.theme==="system"?s.theme:t.theme,chatFocusMode:typeof s.chatFocusMode=="boolean"?s.chatFocusMode:t.chatFocusMode,chatShowThinking:typeof s.chatShowThinking=="boolean"?s.chatShowThinking:t.chatShowThinking,splitRatio:typeof s.splitRatio=="number"&&s.splitRatio>=.4&&s.splitRatio<=.7?s.splitRatio:t.splitRatio,navCollapsed:typeof s.navCollapsed=="boolean"?s.navCollapsed:t.navCollapsed,navGroupsCollapsed:typeof s.navGroupsCollapsed=="object"&&s.navGroupsCollapsed!==null?s.navGroupsCollapsed:t.navGroupsCollapsed}}catch{return t}}function uu(e){localStorage.setItem(Kl,JSON.stringify(e))}const kn=e=>Number.isNaN(e)?.5:e<=0?0:e>=1?1:e,gu=()=>typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches??!1,An=e=>{e.classList.remove("theme-transition"),e.style.removeProperty("--theme-switch-x"),e.style.removeProperty("--theme-switch-y")},pu=({nextTheme:e,applyTheme:t,context:n,currentTheme:s})=>{if(s===e)return;const a=globalThis.document??null;if(!a){t();return}const o=a.documentElement,l=a,c=gu();if(!!l.startViewTransition&&!c){let g=.5,h=.5;if(n?.pointerClientX!==void 0&&n?.pointerClientY!==void 0&&typeof window<"u")g=kn(n.pointerClientX/window.innerWidth),h=kn(n.pointerClientY/window.innerHeight);else if(n?.element){const p=n.element.getBoundingClientRect();p.width>0&&p.height>0&&typeof window<"u"&&(g=kn((p.left+p.width/2)/window.innerWidth),h=kn((p.top+p.height/2)/window.innerHeight))}o.style.setProperty("--theme-switch-x",`${g*100}%`),o.style.setProperty("--theme-switch-y",`${h*100}%`),o.classList.add("theme-transition");try{const p=l.startViewTransition?.(()=>{t()});p?.finished?p.finished.finally(()=>An(o)):An(o)}catch{An(o),t()}return}t(),An(o)};function hu(){return typeof window>"u"||typeof window.matchMedia!="function"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Wa(e){return e==="system"?hu():e}function xt(e,t){const n={...t,lastActiveSessionKey:t.lastActiveSessionKey?.trim()||t.sessionKey.trim()||"main"};e.settings=n,uu(n),t.theme!==e.theme&&(e.theme=t.theme,is(e,Wa(t.theme))),e.applySessionKey=e.settings.lastActiveSessionKey}function jl(e,t){const n=t.trim();n&&e.settings.lastActiveSessionKey!==n&&xt(e,{...e.settings,lastActiveSessionKey:n})}function mu(e){if(!window.location.search)return;const t=new URLSearchParams(window.location.search),n=t.get("token"),s=t.get("password"),a=t.get("session"),o=t.get("gatewayUrl");let l=!1;if(n!=null&&(t.delete("token"),l=!0),s!=null){const d=s.trim();d&&(e.password=d),t.delete("password"),l=!0}if(a!=null){const d=a.trim();d&&(e.sessionKey=d,xt(e,{...e.settings,sessionKey:d,lastActiveSessionKey:d}))}if(o!=null){const d=o.trim();d&&d!==e.settings.gatewayUrl&&(e.pendingGatewayUrl=d),t.delete("gatewayUrl"),l=!0}if(!l)return;const c=new URL(window.location.href);c.search=t.toString(),window.history.replaceState({},"",c.toString())}function fu(e,t){e.tab!==t&&(e.tab=t),t==="chat"&&(e.chatHasAutoScrolled=!1),t==="logs"?La(e):Ia(e),t==="debug"?_a(e):Da(e),Ka(e),Gl(e,t,!1)}function vu(e,t,n){pu({nextTheme:t,applyTheme:()=>{e.theme=t,xt(e,{...e.settings,theme:t}),is(e,Wa(t))},context:n,currentTheme:e.theme})}async function Ka(e){if(e.tab==="overview"&&await Vl(e),e.tab==="channels"&&await Au(e),e.tab==="instances"&&await za(e),e.tab==="sessions"&&await $t(e),e.tab==="cron"&&await Wn(e),e.tab==="skills"&&await gn(e),e.tab==="agents"){await Ra(e),await Le(e);const t=e.agentsList?.agents?.map(s=>s.id)??[];t.length>0&&yl(e,t);const n=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id;n&&(bl(e,n),e.agentsPanel==="skills"&&Pn(e,n),e.agentsPanel==="channels"&&xe(e,!1),e.agentsPanel==="cron"&&Wn(e))}e.tab==="nodes"&&(await ts(e),await Ze(e),await Le(e),await Ha(e)),e.tab==="chat"&&(await tr(e),dn(e,!e.chatHasAutoScrolled)),e.tab==="config"&&(await pl(e),await Le(e)),e.tab==="debug"&&(await es(e),e.eventLog=e.eventLogBuffer),e.tab==="logs"&&(e.logsAtBottom=!0,await Ea(e,{reset:!0}),vl(e,!0))}function bu(){if(typeof window>"u")return"";const e=window.__OPENCLAW_CONTROL_UI_BASE_PATH__;return typeof e=="string"&&e.trim()?pn(e):lu(window.location.pathname)}function yu(e){e.theme=e.settings.theme??"system",is(e,Wa(e.theme))}function is(e,t){if(e.themeResolved=t,typeof document>"u")return;const n=document.documentElement;n.dataset.theme=t,n.style.colorScheme=t}function xu(e){if(typeof window>"u"||typeof window.matchMedia!="function")return;if(e.themeMedia=window.matchMedia("(prefers-color-scheme: dark)"),e.themeMediaHandler=n=>{e.theme==="system"&&is(e,n.matches?"dark":"light")},typeof e.themeMedia.addEventListener=="function"){e.themeMedia.addEventListener("change",e.themeMediaHandler);return}e.themeMedia.addListener(e.themeMediaHandler)}function wu(e){if(!e.themeMedia||!e.themeMediaHandler)return;if(typeof e.themeMedia.removeEventListener=="function"){e.themeMedia.removeEventListener("change",e.themeMediaHandler);return}e.themeMedia.removeListener(e.themeMediaHandler),e.themeMedia=null,e.themeMediaHandler=null}function $u(e,t){if(typeof window>"u")return;const n=Wl(window.location.pathname,e.basePath)??"chat";ql(e,n),Gl(e,n,t)}function Su(e){if(typeof window>"u")return;const t=Wl(window.location.pathname,e.basePath);if(!t)return;const s=new URL(window.location.href).searchParams.get("session")?.trim();s&&(e.sessionKey=s,xt(e,{...e.settings,sessionKey:s,lastActiveSessionKey:s})),ql(e,t)}function ql(e,t){e.tab!==t&&(e.tab=t),t==="chat"&&(e.chatHasAutoScrolled=!1),t==="logs"?La(e):Ia(e),t==="debug"?_a(e):Da(e),e.connected&&Ka(e)}function Gl(e,t,n){if(typeof window>"u")return;const s=ln(os(t,e.basePath)),a=ln(window.location.pathname),o=new URL(window.location.href);t==="chat"&&e.sessionKey?o.searchParams.set("session",e.sessionKey):o.searchParams.delete("session"),a!==s&&(o.pathname=s),n?window.history.replaceState({},"",o.toString()):window.history.pushState({},"",o.toString())}function ku(e,t,n){if(typeof window>"u")return;const s=new URL(window.location.href);s.searchParams.set("session",t),window.history.replaceState({},"",s.toString())}async function Vl(e){await Promise.all([xe(e,!1),za(e),$t(e),un(e),es(e)])}async function Au(e){await Promise.all([xe(e,!0),pl(e),Le(e)])}async function Wn(e){await Promise.all([xe(e,!1),un(e),ns(e)])}const Yo=50,Cu=80,Tu=12e4;function Mu(e){if(!e||typeof e!="object")return null;const t=e;if(typeof t.text=="string")return t.text;const n=t.content;if(!Array.isArray(n))return null;const s=n.map(a=>{if(!a||typeof a!="object")return null;const o=a;return o.type==="text"&&typeof o.text=="string"?o.text:null}).filter(a=>!!a);return s.length===0?null:s.join(`
`)}function Jo(e){if(e==null)return null;if(typeof e=="number"||typeof e=="boolean")return String(e);const t=Mu(e);let n;if(typeof e=="string")n=e;else if(t)n=t;else try{n=JSON.stringify(e,null,2)}catch{n=String(e)}const s=wl(n,Tu);return s.truncated?`${s.text}

… truncated (${s.total} chars, showing first ${s.text.length}).`:s.text}function Eu(e){const t=[];return t.push({type:"toolcall",name:e.name,arguments:e.args??{}}),e.output&&t.push({type:"toolresult",name:e.name,text:e.output}),{role:"assistant",toolCallId:e.toolCallId,runId:e.runId,content:t,timestamp:e.startedAt}}function Lu(e){if(e.toolStreamOrder.length<=Yo)return;const t=e.toolStreamOrder.length-Yo,n=e.toolStreamOrder.splice(0,t);for(const s of n)e.toolStreamById.delete(s)}function Iu(e){e.chatToolMessages=e.toolStreamOrder.map(t=>e.toolStreamById.get(t)?.message).filter(t=>!!t)}function na(e){e.toolStreamSyncTimer!=null&&(clearTimeout(e.toolStreamSyncTimer),e.toolStreamSyncTimer=null),Iu(e)}function _u(e,t=!1){if(t){na(e);return}e.toolStreamSyncTimer==null&&(e.toolStreamSyncTimer=window.setTimeout(()=>na(e),Cu))}function ls(e){e.toolStreamById.clear(),e.toolStreamOrder=[],e.chatToolMessages=[],na(e)}const Du=5e3;function Ru(e,t){const n=t.data??{},s=typeof n.phase=="string"?n.phase:"";e.compactionClearTimer!=null&&(window.clearTimeout(e.compactionClearTimer),e.compactionClearTimer=null),s==="start"?e.compactionStatus={active:!0,startedAt:Date.now(),completedAt:null}:s==="end"&&(e.compactionStatus={active:!1,startedAt:e.compactionStatus?.startedAt??null,completedAt:Date.now()},e.compactionClearTimer=window.setTimeout(()=>{e.compactionStatus=null,e.compactionClearTimer=null},Du))}function Pu(e,t){if(!t)return;if(t.stream==="compaction"){Ru(e,t);return}if(t.stream!=="tool")return;const n=typeof t.sessionKey=="string"?t.sessionKey:void 0;if(n&&n!==e.sessionKey||!n&&e.chatRunId&&t.runId!==e.chatRunId||e.chatRunId&&t.runId!==e.chatRunId||!e.chatRunId)return;const s=t.data??{},a=typeof s.toolCallId=="string"?s.toolCallId:"";if(!a)return;const o=typeof s.name=="string"?s.name:"tool",l=typeof s.phase=="string"?s.phase:"",c=l==="start"?s.args:void 0,d=l==="update"?Jo(s.partialResult):l==="result"?Jo(s.result):void 0,g=Date.now();let h=e.toolStreamById.get(a);h?(h.name=o,c!==void 0&&(h.args=c),d!==void 0&&(h.output=d||void 0),h.updatedAt=g):(h={toolCallId:a,runId:t.runId,sessionKey:n,name:o,args:c,output:d||void 0,startedAt:typeof t.ts=="number"?t.ts:g,updatedAt:g,message:{}},e.toolStreamById.set(a,h),e.toolStreamOrder.push(a)),h.message=Eu(h),Lu(e),_u(e,l==="result")}const Nu=/^\[([^\]]+)\]\s*/,Fu=["WebChat","WhatsApp","Telegram","Signal","Slack","Discord","iMessage","Teams","Matrix","Zalo","Zalo Personal","BlueBubbles"],Es=new WeakMap,Ls=new WeakMap;function Ou(e){return/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}Z\b/.test(e)||/\d{4}-\d{2}-\d{2} \d{2}:\d{2}\b/.test(e)?!0:Fu.some(t=>e.startsWith(`${t} `))}function Is(e){const t=e.match(Nu);if(!t)return e;const n=t[1]??"";return Ou(n)?e.slice(t[0].length):e}function sa(e){const t=e,n=typeof t.role=="string"?t.role:"",s=t.content;if(typeof s=="string")return n==="assistant"?ks(s):Is(s);if(Array.isArray(s)){const a=s.map(o=>{const l=o;return l.type==="text"&&typeof l.text=="string"?l.text:null}).filter(o=>typeof o=="string");if(a.length>0){const o=a.join(`
`);return n==="assistant"?ks(o):Is(o)}}return typeof t.text=="string"?n==="assistant"?ks(t.text):Is(t.text):null}function Ql(e){if(!e||typeof e!="object")return sa(e);const t=e;if(Es.has(t))return Es.get(t)??null;const n=sa(e);return Es.set(t,n),n}function Zo(e){const n=e.content,s=[];if(Array.isArray(n))for(const c of n){const d=c;if(d.type==="thinking"&&typeof d.thinking=="string"){const g=d.thinking.trim();g&&s.push(g)}}if(s.length>0)return s.join(`
`);const a=Bu(e);if(!a)return null;const l=[...a.matchAll(/<\s*think(?:ing)?\s*>([\s\S]*?)<\s*\/\s*think(?:ing)?\s*>/gi)].map(c=>(c[1]??"").trim()).filter(Boolean);return l.length>0?l.join(`
`):null}function Uu(e){if(!e||typeof e!="object")return Zo(e);const t=e;if(Ls.has(t))return Ls.get(t)??null;const n=Zo(e);return Ls.set(t,n),n}function Bu(e){const t=e,n=t.content;if(typeof n=="string")return n;if(Array.isArray(n)){const s=n.map(a=>{const o=a;return o.type==="text"&&typeof o.text=="string"?o.text:null}).filter(a=>typeof a=="string");if(s.length>0)return s.join(`
`)}return typeof t.text=="string"?t.text:null}function Hu(e){const t=e.trim();if(!t)return"";const n=t.split(/\r?\n/).map(s=>s.trim()).filter(Boolean).map(s=>`_${s}_`);return n.length?["_Reasoning:_",...n].join(`
`):""}let Xo=!1;function ei(e){e[6]=e[6]&15|64,e[8]=e[8]&63|128;let t="";for(let n=0;n<e.length;n++)t+=e[n].toString(16).padStart(2,"0");return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}function zu(){const e=new Uint8Array(16),t=Date.now();for(let n=0;n<e.length;n++)e[n]=Math.floor(Math.random()*256);return e[0]^=t&255,e[1]^=t>>>8&255,e[2]^=t>>>16&255,e[3]^=t>>>24&255,e}function Wu(){Xo||(Xo=!0,console.warn("[uuid] crypto API missing; falling back to weak randomness"))}function ja(e=globalThis.crypto){if(e&&typeof e.randomUUID=="function")return e.randomUUID();if(e&&typeof e.getRandomValues=="function"){const t=new Uint8Array(16);return e.getRandomValues(t),ei(t)}return Wu(),ei(zu())}async function rn(e){if(!(!e.client||!e.connected)){e.chatLoading=!0,e.lastError=null;try{const t=await e.client.request("chat.history",{sessionKey:e.sessionKey,limit:200});e.chatMessages=Array.isArray(t.messages)?t.messages:[],e.chatThinkingLevel=t.thinkingLevel??null}catch(t){e.lastError=String(t)}finally{e.chatLoading=!1}}}function Ku(e){const t=/^data:([^;]+);base64,(.+)$/.exec(e);return t?{mimeType:t[1],content:t[2]}:null}async function ju(e,t,n){if(!e.client||!e.connected)return null;const s=t.trim(),a=n&&n.length>0;if(!s&&!a)return null;const o=Date.now(),l=[];if(s&&l.push({type:"text",text:s}),a)for(const g of n)l.push({type:"image",source:{type:"base64",media_type:g.mimeType,data:g.dataUrl}});e.chatMessages=[...e.chatMessages,{role:"user",content:l,timestamp:o}],e.chatSending=!0,e.lastError=null;const c=ja();e.chatRunId=c,e.chatStream="",e.chatStreamStartedAt=o;const d=a?n.map(g=>{const h=Ku(g.dataUrl);return h?{type:"image",mimeType:h.mimeType,content:h.content}:null}).filter(g=>g!==null):void 0;try{return await e.client.request("chat.send",{sessionKey:e.sessionKey,message:s,deliver:!1,idempotencyKey:c,attachments:d}),c}catch(g){const h=String(g);return e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,e.lastError=h,e.chatMessages=[...e.chatMessages,{role:"assistant",content:[{type:"text",text:"Error: "+h}],timestamp:Date.now()}],null}finally{e.chatSending=!1}}async function qu(e){if(!e.client||!e.connected)return!1;const t=e.chatRunId;try{return await e.client.request("chat.abort",t?{sessionKey:e.sessionKey,runId:t}:{sessionKey:e.sessionKey}),!0}catch(n){return e.lastError=String(n),!1}}function Gu(e,t){if(!t||t.sessionKey!==e.sessionKey)return null;if(t.runId&&e.chatRunId&&t.runId!==e.chatRunId)return t.state==="final"?"final":null;if(t.state==="delta"){const n=sa(t.message);if(typeof n=="string"){const s=e.chatStream??"";(!s||n.length>=s.length)&&(e.chatStream=n)}}else t.state==="final"||t.state==="aborted"?(e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null):t.state==="error"&&(e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null,e.lastError=t.errorMessage??"chat error");return t.state}const Yl=120;function Jl(e){return e.chatSending||!!e.chatRunId}function Vu(e){const t=e.trim();if(!t)return!1;const n=t.toLowerCase();return n==="/stop"?!0:n==="stop"||n==="esc"||n==="abort"||n==="wait"||n==="exit"}function Qu(e){const t=e.trim();if(!t)return!1;const n=t.toLowerCase();return n==="/new"||n==="/reset"?!0:n.startsWith("/new ")||n.startsWith("/reset ")}async function Zl(e){e.connected&&(e.chatMessage="",await qu(e))}function Yu(e,t,n,s){const a=t.trim(),o=!!(n&&n.length>0);!a&&!o||(e.chatQueue=[...e.chatQueue,{id:ja(),text:a,createdAt:Date.now(),attachments:o?n?.map(l=>({...l})):void 0,refreshSessions:s}])}async function Xl(e,t,n){ls(e);const s=await ju(e,t,n?.attachments),a=!!s;return!a&&n?.previousDraft!=null&&(e.chatMessage=n.previousDraft),!a&&n?.previousAttachments&&(e.chatAttachments=n.previousAttachments),a&&jl(e,e.sessionKey),a&&n?.restoreDraft&&n.previousDraft?.trim()&&(e.chatMessage=n.previousDraft),a&&n?.restoreAttachments&&n.previousAttachments?.length&&(e.chatAttachments=n.previousAttachments),dn(e),a&&!e.chatRunId&&er(e),a&&n?.refreshSessions&&s&&e.refreshSessionsAfterChat.add(s),a}async function er(e){if(!e.connected||Jl(e))return;const[t,...n]=e.chatQueue;if(!t)return;e.chatQueue=n,await Xl(e,t.text,{attachments:t.attachments,refreshSessions:t.refreshSessions})||(e.chatQueue=[t,...e.chatQueue])}function Ju(e,t){e.chatQueue=e.chatQueue.filter(n=>n.id!==t)}async function Zu(e,t,n){if(!e.connected)return;const s=e.chatMessage,a=(t??e.chatMessage).trim(),o=e.chatAttachments??[],l=t==null?o:[],c=l.length>0;if(!a&&!c)return;if(Vu(a)){await Zl(e);return}const d=Qu(a);if(t==null&&(e.chatMessage="",e.chatAttachments=[]),Jl(e)){Yu(e,a,l,d);return}await Xl(e,a,{previousDraft:t==null?s:void 0,restoreDraft:!!(t&&n?.restoreDraft),attachments:c?l:void 0,previousAttachments:t==null?o:void 0,restoreAttachments:!!(t&&n?.restoreDraft),refreshSessions:d})}async function tr(e){await Promise.all([rn(e),$t(e,{activeMinutes:Yl}),aa(e)]),dn(e)}const Xu=er;function eg(e){const t=fl(e.sessionKey);return t?.agentId?t.agentId:e.hello?.snapshot?.sessionDefaults?.defaultAgentId?.trim()||"main"}function tg(e,t){const n=pn(e),s=encodeURIComponent(t);return n?`${n}/avatar/${s}?meta=1`:`/avatar/${s}?meta=1`}async function aa(e){if(!e.connected){e.chatAvatarUrl=null;return}const t=eg(e);if(!t){e.chatAvatarUrl=null;return}e.chatAvatarUrl=null;const n=tg(e.basePath,t);try{const s=await fetch(n,{method:"GET"});if(!s.ok){e.chatAvatarUrl=null;return}const a=await s.json(),o=typeof a.avatarUrl=="string"?a.avatarUrl.trim():"";e.chatAvatarUrl=o||null}catch{e.chatAvatarUrl=null}}const ng={trace:!0,debug:!0,info:!0,warn:!0,error:!0,fatal:!0},sg={name:"",description:"",agentId:"",enabled:!0,scheduleKind:"every",scheduleAt:"",everyAmount:"30",everyUnit:"minutes",cronExpr:"0 7 * * *",cronTz:"",sessionTarget:"isolated",wakeMode:"now",payloadKind:"agentTurn",payloadText:"",deliveryMode:"announce",deliveryChannel:"last",deliveryTo:"",timeoutSeconds:""},ag=50,og=200,ig="Assistant";function ti(e,t){if(typeof e!="string")return;const n=e.trim();if(n)return n.length<=t?n:n.slice(0,t)}function oa(e){const t=ti(e?.name,ag)??ig,n=ti(e?.avatar??void 0,og)??null;return{agentId:typeof e?.agentId=="string"&&e.agentId.trim()?e.agentId.trim():null,name:t,avatar:n}}function lg(){return oa(typeof window>"u"?{}:{name:window.__OPENCLAW_ASSISTANT_NAME__,avatar:window.__OPENCLAW_ASSISTANT_AVATAR__})}async function nr(e,t){if(!e.client||!e.connected)return;const n=e.sessionKey.trim(),s=n?{sessionKey:n}:{};try{const a=await e.client.request("agent.identity.get",s);if(!a)return;const o=oa(a);e.assistantName=o.name,e.assistantAvatar=o.avatar,e.assistantAgentId=o.agentId??null}catch{}}function ia(e){return typeof e=="object"&&e!==null}function rg(e){if(!ia(e))return null;const t=typeof e.id=="string"?e.id.trim():"",n=e.request;if(!t||!ia(n))return null;const s=typeof n.command=="string"?n.command.trim():"";if(!s)return null;const a=typeof e.createdAtMs=="number"?e.createdAtMs:0,o=typeof e.expiresAtMs=="number"?e.expiresAtMs:0;return!a||!o?null:{id:t,request:{command:s,cwd:typeof n.cwd=="string"?n.cwd:null,host:typeof n.host=="string"?n.host:null,security:typeof n.security=="string"?n.security:null,ask:typeof n.ask=="string"?n.ask:null,agentId:typeof n.agentId=="string"?n.agentId:null,resolvedPath:typeof n.resolvedPath=="string"?n.resolvedPath:null,sessionKey:typeof n.sessionKey=="string"?n.sessionKey:null},createdAtMs:a,expiresAtMs:o}}function cg(e){if(!ia(e))return null;const t=typeof e.id=="string"?e.id.trim():"";return t?{id:t,decision:typeof e.decision=="string"?e.decision:null,resolvedBy:typeof e.resolvedBy=="string"?e.resolvedBy:null,ts:typeof e.ts=="number"?e.ts:null}:null}function sr(e){const t=Date.now();return e.filter(n=>n.expiresAtMs>t)}function dg(e,t){const n=sr(e).filter(s=>s.id!==t.id);return n.push(t),n}function ni(e,t){return sr(e).filter(n=>n.id!==t)}function ug(e){const t=e.version??(e.nonce?"v2":"v1"),n=e.scopes.join(","),s=e.token??"",a=[t,e.deviceId,e.clientId,e.clientMode,e.role,n,String(e.signedAtMs),s];return t==="v2"&&a.push(e.nonce??""),a.join("|")}const ar={WEBCHAT_UI:"webchat-ui",CONTROL_UI:"openclaw-control-ui",WEBCHAT:"webchat",CLI:"cli",GATEWAY_CLIENT:"gateway-client",MACOS_APP:"openclaw-macos",IOS_APP:"openclaw-ios",ANDROID_APP:"openclaw-android",NODE_HOST:"node-host",TEST:"test",FINGERPRINT:"fingerprint",PROBE:"openclaw-probe"},si=ar,la={WEBCHAT:"webchat",CLI:"cli",UI:"ui",BACKEND:"backend",NODE:"node",PROBE:"probe",TEST:"test"};new Set(Object.values(ar));new Set(Object.values(la));const gg=4008;class pg{constructor(t){this.opts=t,this.ws=null,this.pending=new Map,this.closed=!1,this.lastSeq=null,this.connectNonce=null,this.connectSent=!1,this.connectTimer=null,this.backoffMs=800}start(){this.closed=!1,this.connect()}stop(){this.closed=!0,this.ws?.close(),this.ws=null,this.flushPending(new Error("gateway client stopped"))}get connected(){return this.ws?.readyState===WebSocket.OPEN}connect(){this.closed||(this.ws=new WebSocket(this.opts.url),this.ws.addEventListener("open",()=>this.queueConnect()),this.ws.addEventListener("message",t=>this.handleMessage(String(t.data??""))),this.ws.addEventListener("close",t=>{const n=String(t.reason??"");this.ws=null,this.flushPending(new Error(`gateway closed (${t.code}): ${n}`)),this.opts.onClose?.({code:t.code,reason:n}),this.scheduleReconnect()}),this.ws.addEventListener("error",()=>{}))}scheduleReconnect(){if(this.closed)return;const t=this.backoffMs;this.backoffMs=Math.min(this.backoffMs*1.7,15e3),window.setTimeout(()=>this.connect(),t)}flushPending(t){for(const[,n]of this.pending)n.reject(t);this.pending.clear()}async sendConnect(){if(this.connectSent)return;this.connectSent=!0,this.connectTimer!==null&&(window.clearTimeout(this.connectTimer),this.connectTimer=null);const t=typeof crypto<"u"&&!!crypto.subtle,n=["operator.admin","operator.approvals","operator.pairing"],s="operator";let a=null,o=!1,l=this.opts.token;if(t){a=await Ba();const h=bd({deviceId:a.deviceId,role:s})?.token;l=h??this.opts.token,o=!!(h&&this.opts.token)}const c=l||this.opts.password?{token:l,password:this.opts.password}:void 0;let d;if(t&&a){const h=Date.now(),p=this.connectNonce??void 0,f=ug({deviceId:a.deviceId,clientId:this.opts.clientName??si.CONTROL_UI,clientMode:this.opts.mode??la.WEBCHAT,role:s,scopes:n,signedAtMs:h,token:l??null,nonce:p}),u=await Wd(a.privateKey,f);d={id:a.deviceId,publicKey:a.publicKey,signature:u,signedAt:h,nonce:p}}const g={minProtocol:3,maxProtocol:3,client:{id:this.opts.clientName??si.CONTROL_UI,version:this.opts.clientVersion??"dev",platform:this.opts.platform??navigator.platform??"web",mode:this.opts.mode??la.WEBCHAT,instanceId:this.opts.instanceId},role:s,scopes:n,device:d,caps:[],auth:c,userAgent:navigator.userAgent,locale:navigator.language};this.request("connect",g).then(h=>{h?.auth?.deviceToken&&a&&Al({deviceId:a.deviceId,role:h.auth.role??s,token:h.auth.deviceToken,scopes:h.auth.scopes??[]}),this.backoffMs=800,this.opts.onHello?.(h)}).catch(()=>{o&&a&&Cl({deviceId:a.deviceId,role:s}),this.ws?.close(gg,"connect failed")})}handleMessage(t){let n;try{n=JSON.parse(t)}catch{return}const s=n;if(s.type==="event"){const a=n;if(a.event==="connect.challenge"){const l=a.payload,c=l&&typeof l.nonce=="string"?l.nonce:null;c&&(this.connectNonce=c,this.sendConnect());return}const o=typeof a.seq=="number"?a.seq:null;o!==null&&(this.lastSeq!==null&&o>this.lastSeq+1&&this.opts.onGap?.({expected:this.lastSeq+1,received:o}),this.lastSeq=o);try{this.opts.onEvent?.(a)}catch(l){console.error("[gateway] event handler error:",l)}return}if(s.type==="res"){const a=n,o=this.pending.get(a.id);if(!o)return;this.pending.delete(a.id),a.ok?o.resolve(a.payload):o.reject(new Error(a.error?.message??"request failed"));return}}request(t,n){if(!this.ws||this.ws.readyState!==WebSocket.OPEN)return Promise.reject(new Error("gateway not connected"));const s=ja(),a={type:"req",id:s,method:t,params:n},o=new Promise((l,c)=>{this.pending.set(s,{resolve:d=>l(d),reject:c})});return this.ws.send(JSON.stringify(a)),o}queueConnect(){this.connectNonce=null,this.connectSent=!1,this.connectTimer!==null&&window.clearTimeout(this.connectTimer),this.connectTimer=window.setTimeout(()=>{this.sendConnect()},750)}}function _s(e,t){const n=(e??"").trim(),s=t.mainSessionKey?.trim();if(!s)return n;if(!n)return s;const a=t.mainKey?.trim()||"main",o=t.defaultAgentId?.trim();return n==="main"||n===a||o&&(n===`agent:${o}:main`||n===`agent:${o}:${a}`)?s:n}function hg(e,t){if(!t?.mainSessionKey)return;const n=_s(e.sessionKey,t),s=_s(e.settings.sessionKey,t),a=_s(e.settings.lastActiveSessionKey,t),o=n||s||e.sessionKey,l={...e.settings,sessionKey:s||o,lastActiveSessionKey:a||o},c=l.sessionKey!==e.settings.sessionKey||l.lastActiveSessionKey!==e.settings.lastActiveSessionKey;o!==e.sessionKey&&(e.sessionKey=o),c&&xt(e,l)}function or(e){e.lastError=null,e.hello=null,e.connected=!1,e.execApprovalQueue=[],e.execApprovalError=null,e.client?.stop(),e.client=new pg({url:e.settings.gatewayUrl,token:e.settings.token.trim()?e.settings.token:void 0,password:e.password.trim()?e.password:void 0,clientName:"openclaw-control-ui",mode:"webchat",onHello:t=>{e.connected=!0,e.lastError=null,e.hello=t,vg(e,t),e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,ls(e),nr(e),Ra(e),ts(e,{quiet:!0}),Ze(e,{quiet:!0}),Ka(e)},onClose:({code:t,reason:n})=>{e.connected=!1,t!==1012&&(e.lastError=`disconnected (${t}): ${n||"no reason"}`)},onEvent:t=>mg(e,t),onGap:({expected:t,received:n})=>{e.lastError=`event gap detected (expected seq ${t}, got ${n}); refresh recommended`}}),e.client.start()}function mg(e,t){try{fg(e,t)}catch(n){console.error("[gateway] handleGatewayEvent error:",t.event,n)}}function fg(e,t){if(e.eventLogBuffer=[{ts:Date.now(),event:t.event,payload:t.payload},...e.eventLogBuffer].slice(0,250),e.tab==="debug"&&(e.eventLog=e.eventLogBuffer),t.event==="agent"){if(e.onboarding)return;Pu(e,t.payload);return}if(t.event==="chat"){const n=t.payload;n?.sessionKey&&jl(e,n.sessionKey);const s=Gu(e,n);if(s==="final"||s==="error"||s==="aborted"){ls(e),Xu(e);const a=n?.runId;a&&e.refreshSessionsAfterChat.has(a)&&(e.refreshSessionsAfterChat.delete(a),s==="final"&&$t(e,{activeMinutes:Yl}))}s==="final"&&rn(e);return}if(t.event==="presence"){const n=t.payload;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence,e.presenceError=null,e.presenceStatus=null);return}if(t.event==="cron"&&e.tab==="cron"&&Wn(e),(t.event==="device.pair.requested"||t.event==="device.pair.resolved")&&Ze(e,{quiet:!0}),t.event==="exec.approval.requested"){const n=rg(t.payload);if(n){e.execApprovalQueue=dg(e.execApprovalQueue,n),e.execApprovalError=null;const s=Math.max(0,n.expiresAtMs-Date.now()+500);window.setTimeout(()=>{e.execApprovalQueue=ni(e.execApprovalQueue,n.id)},s)}return}if(t.event==="exec.approval.resolved"){const n=cg(t.payload);n&&(e.execApprovalQueue=ni(e.execApprovalQueue,n.id))}}function vg(e,t){const n=t.snapshot;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence),n?.health&&(e.debugHealth=n.health),n?.sessionDefaults&&hg(e,n.sessionDefaults)}function bg(e){e.basePath=bu(),mu(e),$u(e,!0),yu(e),xu(e),window.addEventListener("popstate",e.popStateHandler),or(e),id(e),e.tab==="logs"&&La(e),e.tab==="debug"&&_a(e)}function yg(e){Xc(e)}function xg(e){window.removeEventListener("popstate",e.popStateHandler),ld(e),Ia(e),Da(e),wu(e),e.topbarObserver?.disconnect(),e.topbarObserver=null}function wg(e,t){if(e.tab==="chat"&&(t.has("chatMessages")||t.has("chatToolMessages")||t.has("chatStream")||t.has("chatLoading")||t.has("tab"))){const n=t.has("tab"),s=t.has("chatLoading")&&t.get("chatLoading")===!0&&!e.chatLoading;dn(e,n||s||!e.chatHasAutoScrolled)}e.tab==="logs"&&(t.has("logsEntries")||t.has("logsAutoFollow")||t.has("tab"))&&e.logsAutoFollow&&e.logsAtBottom&&vl(e,t.has("tab")||t.has("logsAutoFollow"))}const qa={CHILD:2},Ga=e=>(...t)=>({_$litDirective$:e,values:t});let Va=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,s){this._$Ct=t,this._$AM=n,this._$Ci=s}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};const{I:$g}=bc,ai=e=>e,Sg=e=>e.strings===void 0,oi=()=>document.createComment(""),Ht=(e,t,n)=>{const s=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(n===void 0){const o=s.insertBefore(oi(),a),l=s.insertBefore(oi(),a);n=new $g(o,l,e,e.options)}else{const o=n._$AB.nextSibling,l=n._$AM,c=l!==e;if(c){let d;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(d=e._$AU)!==l._$AU&&n._$AP(d)}if(o!==a||c){let d=n._$AA;for(;d!==o;){const g=ai(d).nextSibling;ai(s).insertBefore(d,a),d=g}}}return n},ot=(e,t,n=e)=>(e._$AI(t,n),e),kg={},Ag=(e,t=kg)=>e._$AH=t,Cg=e=>e._$AH,Ds=e=>{e._$AR(),e._$AA.remove()};const ii=(e,t,n)=>{const s=new Map;for(let a=t;a<=n;a++)s.set(e[a],a);return s},ir=Ga(class extends Va{constructor(e){if(super(e),e.type!==qa.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let s;n===void 0?n=t:t!==void 0&&(s=t);const a=[],o=[];let l=0;for(const c of e)a[l]=s?s(c,l):l,o[l]=n(c,l),l++;return{values:o,keys:a}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,s]){const a=Cg(e),{values:o,keys:l}=this.dt(t,n,s);if(!Array.isArray(a))return this.ut=l,o;const c=this.ut??=[],d=[];let g,h,p=0,f=a.length-1,u=0,m=o.length-1;for(;p<=f&&u<=m;)if(a[p]===null)p++;else if(a[f]===null)f--;else if(c[p]===l[u])d[u]=ot(a[p],o[u]),p++,u++;else if(c[f]===l[m])d[m]=ot(a[f],o[m]),f--,m--;else if(c[p]===l[m])d[m]=ot(a[p],o[m]),Ht(e,d[m+1],a[p]),p++,m--;else if(c[f]===l[u])d[u]=ot(a[f],o[u]),Ht(e,a[p],a[f]),f--,u++;else if(g===void 0&&(g=ii(l,u,m),h=ii(c,p,f)),g.has(c[p]))if(g.has(c[f])){const b=h.get(l[u]),w=b!==void 0?a[b]:null;if(w===null){const k=Ht(e,a[p]);ot(k,o[u]),d[u]=k}else d[u]=ot(w,o[u]),Ht(e,a[p],w),a[b]=null;u++}else Ds(a[f]),f--;else Ds(a[p]),p++;for(;u<=m;){const b=Ht(e,d[m+1]);ot(b,o[u]),d[u++]=b}for(;p<=f;){const b=a[p++];b!==null&&Ds(b)}return this.ut=l,Ag(e,d),Ye}}),ce={messageSquare:r`
    <svg viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  `,barChart:r`
    <svg viewBox="0 0 24 24">
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  `,link:r`
    <svg viewBox="0 0 24 24">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  `,radio:r`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2" />
      <path
        d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
      />
    </svg>
  `,fileText:r`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  `,zap:r`
    <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
  `,monitor:r`
    <svg viewBox="0 0 24 24">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  `,settings:r`
    <svg viewBox="0 0 24 24">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  `,bug:r`
    <svg viewBox="0 0 24 24">
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  `,scrollText:r`
    <svg viewBox="0 0 24 24">
      <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
      <path d="M15 8h-5" />
      <path d="M15 12h-5" />
    </svg>
  `,folder:r`
    <svg viewBox="0 0 24 24">
      <path
        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      />
    </svg>
  `,menu:r`
    <svg viewBox="0 0 24 24">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  `,x:r`
    <svg viewBox="0 0 24 24">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  `,check:r`
    <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
  `,arrowDown:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  `,copy:r`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  `,search:r`
    <svg viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  `,brain:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  `,book:r`
    <svg viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  `,loader:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  `,wrench:r`
    <svg viewBox="0 0 24 24">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      />
    </svg>
  `,fileCode:r`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m10 13-2 2 2 2" />
      <path d="m14 17 2-2-2-2" />
    </svg>
  `,edit:r`
    <svg viewBox="0 0 24 24">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  `,penLine:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  `,paperclip:r`
    <svg viewBox="0 0 24 24">
      <path
        d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
      />
    </svg>
  `,globe:r`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  `,image:r`
    <svg viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  `,smartphone:r`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  `,plug:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  `,circle:r`
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
  `,puzzle:r`
    <svg viewBox="0 0 24 24">
      <path
        d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.076.874.54 1.02 1.02a2.5 2.5 0 1 0 3.237-3.237c-.48-.146-.944-.505-1.02-1.02a.98.98 0 0 1 .303-.917l1.526-1.526A2.402 2.402 0 0 1 11.998 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.236 3.236c-.464.18-.894.527-.967 1.02Z"
      />
    </svg>
  `};function Tg(e,t){const n=os(t,e.basePath);return r`
    <a
      href=${n}
      class="nav-item ${e.tab===t?"active":""}"
      @click=${s=>{s.defaultPrevented||s.button!==0||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||(s.preventDefault(),e.setTab(t))}}
      title=${ta(t)}
    >
      <span class="nav-item__icon" aria-hidden="true">${ce[ru(t)]}</span>
      <span class="nav-item__text">${ta(t)}</span>
    </a>
  `}function Mg(e){const t=Eg(e.hello,e.sessionsResult),n=Lg(e.sessionKey,e.sessionsResult,t),s=e.onboarding,a=e.onboarding,o=e.onboarding?!1:e.settings.chatShowThinking,l=e.onboarding?!0:e.settings.chatFocusMode,c=r`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
      <path d="M21 3v5h-5"></path>
    </svg>
  `,d=r`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4 7V4h3"></path>
      <path d="M20 7V4h-3"></path>
      <path d="M4 17v3h3"></path>
      <path d="M20 17v3h-3"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  `;return r`
    <div class="chat-controls">
      <label class="field chat-controls__session">
        <select
          .value=${e.sessionKey}
          ?disabled=${!e.connected}
          @change=${g=>{const h=g.target.value;e.sessionKey=h,e.chatMessage="",e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:h,lastActiveSessionKey:h}),e.loadAssistantIdentity(),ku(e,h),rn(e)}}
        >
          ${ir(n,g=>g.key,g=>r`<option value=${g.key}>
                ${g.displayName??g.key}
              </option>`)}
        </select>
      </label>
      <button
        class="btn btn--sm btn--icon"
        ?disabled=${e.chatLoading||!e.connected}
        @click=${()=>{e.resetToolStream(),tr(e)}}
        title="Refresh chat data"
      >
        ${c}
      </button>
      <span class="chat-controls__separator">|</span>
      <button
        class="btn btn--sm btn--icon ${o?"active":""}"
        ?disabled=${s}
        @click=${()=>{s||e.applySettings({...e.settings,chatShowThinking:!e.settings.chatShowThinking})}}
        aria-pressed=${o}
        title=${s?"Disabled during onboarding":"Toggle assistant thinking/working output"}
      >
        ${ce.brain}
      </button>
      <button
        class="btn btn--sm btn--icon ${l?"active":""}"
        ?disabled=${a}
        @click=${()=>{a||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})}}
        aria-pressed=${l}
        title=${a?"Disabled during onboarding":"Toggle focus mode (hide sidebar + page header)"}
      >
        ${d}
      </button>
    </div>
  `}function Eg(e,t){const n=e?.snapshot,s=n?.sessionDefaults?.mainSessionKey?.trim();if(s)return s;const a=n?.sessionDefaults?.mainKey?.trim();return a||(t?.sessions?.some(o=>o.key==="main")?"main":null)}function Rs(e,t){const n=t?.label?.trim()||"",s=t?.displayName?.trim()||"";return n&&n!==e?`${n} (${e})`:s&&s!==e?`${e} (${s})`:e}function Lg(e,t,n){const s=new Set,a=[],o=n&&t?.sessions?.find(c=>c.key===n),l=t?.sessions?.find(c=>c.key===e);if(n&&(s.add(n),a.push({key:n,displayName:Rs(n,o||void 0)})),s.has(e)||(s.add(e),a.push({key:e,displayName:Rs(e,l)})),t?.sessions)for(const c of t.sessions)s.has(c.key)||(s.add(c.key),a.push({key:c.key,displayName:Rs(c.key,c)}));return a}const Ig=["system","light","dark"];function _g(e){const t=Math.max(0,Ig.indexOf(e.theme)),n=s=>a=>{const l={element:a.currentTarget};(a.clientX||a.clientY)&&(l.pointerClientX=a.clientX,l.pointerClientY=a.clientY),e.setTheme(s,l)};return r`
    <div class="theme-toggle" style="--theme-index: ${t};">
      <div class="theme-toggle__track" role="group" aria-label="Theme">
        <span class="theme-toggle__indicator"></span>
        <button
          class="theme-toggle__button ${e.theme==="system"?"active":""}"
          @click=${n("system")}
          aria-pressed=${e.theme==="system"}
          aria-label="System theme"
          title="System"
        >
          ${Pg()}
        </button>
        <button
          class="theme-toggle__button ${e.theme==="light"?"active":""}"
          @click=${n("light")}
          aria-pressed=${e.theme==="light"}
          aria-label="Light theme"
          title="Light"
        >
          ${Dg()}
        </button>
        <button
          class="theme-toggle__button ${e.theme==="dark"?"active":""}"
          @click=${n("dark")}
          aria-pressed=${e.theme==="dark"}
          aria-label="Dark theme"
          title="Dark"
        >
          ${Rg()}
        </button>
      </div>
    </div>
  `}function Dg(){return r`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="m4.93 4.93 1.41 1.41"></path>
      <path d="m17.66 17.66 1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="m6.34 17.66-1.41 1.41"></path>
      <path d="m19.07 4.93-1.41 1.41"></path>
    </svg>
  `}function Rg(){return r`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
      ></path>
    </svg>
  `}function Pg(){return r`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="20" height="14" x="2" y="3" rx="2"></rect>
      <line x1="8" x2="16" y1="21" y2="21"></line>
      <line x1="12" x2="12" y1="17" y2="21"></line>
    </svg>
  `}function lr(e,t){if(!e)return e;const s=e.files.some(a=>a.name===t.name)?e.files.map(a=>a.name===t.name?t:a):[...e.files,t];return{...e,files:s}}async function Ps(e,t){if(!(!e.client||!e.connected||e.agentFilesLoading)){e.agentFilesLoading=!0,e.agentFilesError=null;try{const n=await e.client.request("agents.files.list",{agentId:t});n&&(e.agentFilesList=n,e.agentFileActive&&!n.files.some(s=>s.name===e.agentFileActive)&&(e.agentFileActive=null))}catch(n){e.agentFilesError=String(n)}finally{e.agentFilesLoading=!1}}}async function Ng(e,t,n,s){if(!(!e.client||!e.connected||e.agentFilesLoading)&&!Object.hasOwn(e.agentFileContents,n)){e.agentFilesLoading=!0,e.agentFilesError=null;try{const a=await e.client.request("agents.files.get",{agentId:t,name:n});if(a?.file){const o=a.file.content??"",l=e.agentFileContents[n]??"",c=e.agentFileDrafts[n],d=s?.preserveDraft??!0;e.agentFilesList=lr(e.agentFilesList,a.file),e.agentFileContents={...e.agentFileContents,[n]:o},(!d||!Object.hasOwn(e.agentFileDrafts,n)||c===l)&&(e.agentFileDrafts={...e.agentFileDrafts,[n]:o})}}catch(a){e.agentFilesError=String(a)}finally{e.agentFilesLoading=!1}}}async function Fg(e,t,n,s){if(!(!e.client||!e.connected||e.agentFileSaving)){e.agentFileSaving=!0,e.agentFilesError=null;try{const a=await e.client.request("agents.files.set",{agentId:t,name:n,content:s});a?.file&&(e.agentFilesList=lr(e.agentFilesList,a.file),e.agentFileContents={...e.agentFileContents,[n]:s},e.agentFileDrafts={...e.agentFileDrafts,[n]:s})}catch(a){e.agentFilesError=String(a)}finally{e.agentFileSaving=!1}}}async function rr(e,t){if(!(!e.client||!e.connected)&&!e.usageLoading){e.usageLoading=!0,e.usageError=null;try{const n=t?.startDate??e.usageStartDate,s=t?.endDate??e.usageEndDate,[a,o]=await Promise.all([e.client.request("sessions.usage",{startDate:n,endDate:s,limit:1e3,includeContextWeight:!0}),e.client.request("usage.cost",{startDate:n,endDate:s})]);a&&(e.usageResult=a),o&&(e.usageCostSummary=o)}catch(n){e.usageError=String(n)}finally{e.usageLoading=!1}}}async function Og(e,t){if(!(!e.client||!e.connected)&&!e.usageTimeSeriesLoading){e.usageTimeSeriesLoading=!0,e.usageTimeSeries=null;try{const n=await e.client.request("sessions.usage.timeseries",{key:t});n&&(e.usageTimeSeries=n)}catch{e.usageTimeSeries=null}finally{e.usageTimeSeriesLoading=!1}}}async function Ug(e,t){if(!(!e.client||!e.connected)&&!e.usageSessionLogsLoading){e.usageSessionLogsLoading=!0,e.usageSessionLogs=null;try{const n=await e.client.request("sessions.usage.logs",{key:t,limit:500});n&&Array.isArray(n.logs)&&(e.usageSessionLogs=n.logs)}catch{e.usageSessionLogs=null}finally{e.usageSessionLogsLoading=!1}}}const Bg={bash:"exec","apply-patch":"apply_patch"},Hg={"group:memory":["memory_search","memory_get"],"group:web":["web_search","web_fetch"],"group:fs":["read","write","edit","apply_patch"],"group:runtime":["exec","process"],"group:sessions":["sessions_list","sessions_history","sessions_send","sessions_spawn","session_status"],"group:ui":["browser","canvas"],"group:automation":["cron","gateway"],"group:messaging":["message"],"group:nodes":["nodes"],"group:openclaw":["browser","canvas","nodes","cron","message","gateway","agents_list","sessions_list","sessions_history","sessions_send","sessions_spawn","session_status","memory_search","memory_get","web_search","web_fetch","image"]},zg={minimal:{allow:["session_status"]},coding:{allow:["group:fs","group:runtime","group:sessions","group:memory","image"]},messaging:{allow:["group:messaging","sessions_list","sessions_history","sessions_send","session_status"]},full:{}};function Ne(e){const t=e.trim().toLowerCase();return Bg[t]??t}function Wg(e){return e?e.map(Ne).filter(Boolean):[]}function Kg(e){const t=Wg(e),n=[];for(const s of t){const a=Hg[s];if(a){n.push(...a);continue}n.push(s)}return Array.from(new Set(n))}function jg(e){if(!e)return;const t=zg[e];if(t&&!(!t.allow&&!t.deny))return{allow:t.allow?[...t.allow]:void 0,deny:t.deny?[...t.deny]:void 0}}function qg(e){const t=e.host??"unknown",n=e.ip?`(${e.ip})`:"",s=e.mode??"",a=e.version??"";return`${t} ${n} ${s} ${a}`.trim()}function Gg(e){const t=e.ts??null;return t?Q(t):"n/a"}function Qa(e){return e?`${vt(e)} (${Q(e)})`:"n/a"}function Vg(e){if(e.totalTokens==null)return"n/a";const t=e.totalTokens??0,n=e.contextTokens??0;return n?`${t} / ${n}`:String(t)}function Qg(e){if(e==null)return"";try{return JSON.stringify(e,null,2)}catch{return String(e)}}function Yg(e){const t=e.state??{},n=t.nextRunAtMs?vt(t.nextRunAtMs):"n/a",s=t.lastRunAtMs?vt(t.lastRunAtMs):"n/a";return`${t.lastStatus??"n/a"} · next ${n} · last ${s}`}function cr(e){const t=e.schedule;if(t.kind==="at"){const n=Date.parse(t.at);return Number.isFinite(n)?`At ${vt(n)}`:`At ${t.at}`}return t.kind==="every"?`Every ${xl(t.everyMs)}`:`Cron ${t.expr}${t.tz?` (${t.tz})`:""}`}function Jg(e){const t=e.payload;if(t.kind==="systemEvent")return`System: ${t.text}`;const n=`Agent: ${t.message}`,s=e.delivery;if(s&&s.mode!=="none"){const a=s.channel||s.to?` (${s.channel??"last"}${s.to?` -> ${s.to}`:""})`:"";return`${n} · ${s.mode}${a}`}return n}function li(){return[{id:"fs",label:i("agentsFiles"),tools:[{id:"read",label:"read",description:i("agentsReadFile")},{id:"write",label:"write",description:i("agentsWriteFile")},{id:"edit",label:"edit",description:i("agentsEdit")},{id:"apply_patch",label:"apply_patch",description:i("agentsApplyPatch")}]},{id:"runtime",label:i("agentsRuntime"),tools:[{id:"exec",label:"exec",description:i("agentsExec")},{id:"process",label:"process",description:i("agentsProcess")}]},{id:"web",label:i("agentsWeb"),tools:[{id:"web_search",label:"web_search",description:i("agentsWebSearch")},{id:"web_fetch",label:"web_fetch",description:i("agentsWebFetch")}]},{id:"memory",label:i("agentsMemory"),tools:[{id:"memory_search",label:"memory_search",description:i("agentsMemorySearch")},{id:"memory_get",label:"memory_get",description:i("agentsMemoryGet")}]},{id:"sessions",label:i("agentsSessions"),tools:[{id:"sessions_list",label:"sessions_list",description:i("agentsSessionsList")},{id:"sessions_history",label:"sessions_history",description:i("agentsSessionsHistory")},{id:"sessions_send",label:"sessions_send",description:i("agentsSessionsSend")},{id:"sessions_spawn",label:"sessions_spawn",description:i("agentsSessionsSpawn")},{id:"session_status",label:"session_status",description:i("agentsSessionStatus")}]},{id:"ui",label:i("agentsUi"),tools:[{id:"browser",label:"browser",description:i("agentsBrowser")},{id:"canvas",label:"canvas",description:i("agentsCanvas")}]},{id:"messaging",label:i("agentsMessaging"),tools:[{id:"message",label:"message",description:i("agentsMessage")}]},{id:"automation",label:i("agentsAutomation"),tools:[{id:"cron",label:"cron",description:i("agentsScheduleTasks")},{id:"gateway",label:"gateway",description:i("agentsGatewayControl")}]},{id:"nodes",label:i("agentsNodes"),tools:[{id:"nodes",label:"nodes",description:i("agentsNodesDevices")}]},{id:"agents",label:i("agentsAgents"),tools:[{id:"agents_list",label:"agents_list",description:i("agentsListAgents")}]},{id:"media",label:i("agentsMedia"),tools:[{id:"image",label:"image",description:i("agentsImageUnderstanding")}]}]}function Zg(){return[{id:"minimal",label:i("agentsProfileMinimal")},{id:"coding",label:i("agentsProfileCoding")},{id:"messaging",label:i("agentsProfileMessaging")},{id:"full",label:i("agentsProfileFull")}]}function ra(e){return e.name?.trim()||e.identity?.name?.trim()||e.id}function Cn(e){const t=e.trim();if(!t||t.length>16)return!1;let n=!1;for(let s=0;s<t.length;s+=1)if(t.charCodeAt(s)>127){n=!0;break}return!(!n||t.includes("://")||t.includes("/")||t.includes("."))}function rs(e,t){const n=t?.emoji?.trim();if(n&&Cn(n))return n;const s=e.identity?.emoji?.trim();if(s&&Cn(s))return s;const a=t?.avatar?.trim();if(a&&Cn(a))return a;const o=e.identity?.avatar?.trim();return o&&Cn(o)?o:""}function dr(e,t){return t&&e===t?i("agentsDefault"):null}function Xg(e){if(e==null||!Number.isFinite(e))return"-";if(e<1024)return`${e} B`;const t=["KB","MB","GB","TB"];let n=e/1024,s=0;for(;n>=1024&&s<t.length-1;)n/=1024,s+=1;return`${n.toFixed(n<10?1:0)} ${t[s]}`}function cs(e,t){const n=e;return{entry:(n?.agents?.list??[]).find(o=>o?.id===t),defaults:n?.agents?.defaults,globalTools:n?.tools}}function ur(e,t,n,s,a){const o=cs(t,e.id),c=(n&&n.agentId===e.id?n.workspace:null)||o.entry?.workspace||o.defaults?.workspace||"default",d=o.entry?.model?Zt(o.entry?.model):Zt(o.defaults?.model),g=a?.name?.trim()||e.identity?.name?.trim()||e.name?.trim()||o.entry?.name||e.id,h=rs(e,a)||"-",p=Array.isArray(o.entry?.skills)?o.entry?.skills:null,f=p?.length??null;return{workspace:c,model:d,identityName:g,identityEmoji:h,skillsLabel:p?`${f} ${i("agentsSelected")}`:i("agentsAllSkills"),isDefault:!!(s&&e.id===s)}}function Zt(e){if(!e)return"-";if(typeof e=="string")return e.trim()||"-";if(typeof e=="object"&&e){const t=e,n=t.primary?.trim();if(n){const s=Array.isArray(t.fallbacks)?t.fallbacks.length:0;return s>0?`${n} (+${s} ${i("agentsFallback")})`:n}}return"-"}function ri(e){const t=e.match(/^(.+) \(\+\d+ fallback\)$/);return t?t[1]:e}function ci(e){if(!e)return null;if(typeof e=="string")return e.trim()||null;if(typeof e=="object"&&e){const t=e;return(typeof t.primary=="string"?t.primary:typeof t.model=="string"?t.model:typeof t.id=="string"?t.id:typeof t.value=="string"?t.value:null)?.trim()||null}return null}function ep(e){if(!e||typeof e=="string")return null;if(typeof e=="object"&&e){const t=e,n=Array.isArray(t.fallbacks)?t.fallbacks:Array.isArray(t.fallback)?t.fallback:null;return n?n.filter(s=>typeof s=="string"):null}return null}function tp(e){return e.split(",").map(t=>t.trim()).filter(Boolean)}function np(e){const n=e?.agents?.defaults?.models;if(!n||typeof n!="object")return[];const s=[];for(const[a,o]of Object.entries(n)){const l=a.trim();if(!l)continue;const c=o&&typeof o=="object"&&"alias"in o&&typeof o.alias=="string"?o.alias?.trim():void 0,d=c&&c!==l?`${c} (${l})`:l;s.push({value:l,label:d})}return s}function sp(e,t){const n=np(e),s=t?n.some(a=>a.value===t):!1;return t&&!s&&n.unshift({value:t,label:`${i("agentsCurrentModel")} (${t})`}),n.length===0?r`
            <option value="" disabled>No configured models</option>
        `:n.map(a=>r`
        <option value=${a.value}>${a.label}</option>`)}function ap(e){const t=Ne(e);if(!t)return{kind:"exact",value:""};if(t==="*")return{kind:"all"};if(!t.includes("*"))return{kind:"exact",value:t};const n=t.replace(/[.*+?^${}()|[\\]\\]/g,"\\$&");return{kind:"regex",value:new RegExp(`^${n.replaceAll("\\*",".*")}$`)}}function ca(e){return Array.isArray(e)?Kg(e).map(ap).filter(t=>t.kind!=="exact"||t.value.length>0):[]}function Xt(e,t){for(const n of t)if(n.kind==="all"||n.kind==="exact"&&e===n.value||n.kind==="regex"&&n.value.test(e))return!0;return!1}function op(e,t){if(!t)return!0;const n=Ne(e),s=ca(t.deny);if(Xt(n,s))return!1;const a=ca(t.allow);return!!(a.length===0||Xt(n,a)||n==="apply_patch"&&Xt("exec",a))}function di(e,t){if(!Array.isArray(t)||t.length===0)return!1;const n=Ne(e),s=ca(t);return!!(Xt(n,s)||n==="apply_patch"&&Xt("exec",s))}function ip(e){const t=e.agentsList?.agents??[],n=e.agentsList?.defaultId??null,s=e.selectedAgentId??n??t[0]?.id??null,a=s?t.find(o=>o.id===s)??null:null;return r`
        <div class="agents-layout">
            <section class="card agents-sidebar">
                <div class="row" style="justify-content: space-between;">
                    <div>
                        <div class="card-title">${i("agentsTitle")}</div>
                        <div class="card-sub">${t.length} ${i("agentsConfigured")}</div>
                    </div>
                    <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
                        ${e.loading?i("commonLoading"):i("commonRefresh")}
                    </button>
                </div>
                ${e.error?r`
                                    <div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}
                <div class="agent-list" style="margin-top: 12px;">
                    ${t.length===0?r`
                                        <div class="muted">${i("agentsNoFound")}</div>
                                    `:t.map(o=>{const l=dr(o.id,n),c=rs(o,e.agentIdentityById[o.id]??null);return r`
                                            <button
                                                    type="button"
                                                    class="agent-row ${s===o.id?"active":""}"
                                                    @click=${()=>e.onSelectAgent(o.id)}
                                            >
                                                <div class="agent-avatar">
                                                    ${c||ra(o).slice(0,1)}
                                                </div>
                                                <div class="agent-info">
                                                    <div class="agent-title">${ra(o)}</div>
                                                    <div class="agent-sub mono">${o.id}</div>
                                                </div>
                                                ${l?r`<span class="agent-pill">${l}</span>`:v}
                                            </button>
                                        `})}
                </div>
            </section>
            <section class="agents-main">
                ${a?r`
                                    ${lp(a,n,e.agentIdentityById[a.id]??null)}
                                    ${rp(e.activePanel,o=>e.onSelectPanel(o))}
                                    ${e.activePanel==="overview"?cp({agent:a,defaultId:n,configForm:e.configForm,agentFilesList:e.agentFilesList,agentIdentity:e.agentIdentityById[a.id]??null,agentIdentityError:e.agentIdentityError,agentIdentityLoading:e.agentIdentityLoading,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave,onModelChange:e.onModelChange,onModelFallbacksChange:e.onModelFallbacksChange}):v}
                                    ${e.activePanel==="files"?yp({agentId:a.id,agentFilesList:e.agentFilesList,agentFilesLoading:e.agentFilesLoading,agentFilesError:e.agentFilesError,agentFileActive:e.agentFileActive,agentFileContents:e.agentFileContents,agentFileDrafts:e.agentFileDrafts,agentFileSaving:e.agentFileSaving,onLoadFiles:e.onLoadFiles,onSelectFile:e.onSelectFile,onFileDraftChange:e.onFileDraftChange,onFileReset:e.onFileReset,onFileSave:e.onFileSave}):v}
                                    ${e.activePanel==="tools"?wp({agentId:a.id,configForm:e.configForm,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,onProfileChange:e.onToolsProfileChange,onOverridesChange:e.onToolsOverridesChange,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave}):v}
                                    ${e.activePanel==="skills"?kp({agentId:a.id,report:e.agentSkillsReport,loading:e.agentSkillsLoading,error:e.agentSkillsError,activeAgentId:e.agentSkillsAgentId,configForm:e.configForm,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,filter:e.skillsFilter,onFilterChange:e.onSkillsFilterChange,onRefresh:e.onSkillsRefresh,onToggle:e.onAgentSkillToggle,onClear:e.onAgentSkillsClear,onDisableAll:e.onAgentSkillsDisableAll,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave}):v}
                                    ${e.activePanel==="channels"?vp({agent:a,defaultId:n,configForm:e.configForm,agentFilesList:e.agentFilesList,agentIdentity:e.agentIdentityById[a.id]??null,snapshot:e.channelsSnapshot,loading:e.channelsLoading,error:e.channelsError,lastSuccess:e.channelsLastSuccess,onRefresh:e.onChannelsRefresh}):v}
                                    ${e.activePanel==="cron"?bp({agent:a,defaultId:n,configForm:e.configForm,agentFilesList:e.agentFilesList,agentIdentity:e.agentIdentityById[a.id]??null,jobs:e.cronJobs,status:e.cronStatus,loading:e.cronLoading,error:e.cronError,onRefresh:e.onCronRefresh}):v}
                                `:r`
                                    <div class="card">
                                        <div class="card-title">${i("agentsSelectAgent")}</div>
                                        <div class="card-sub">${i("agentsSelectAgentSub")}</div>
                                    </div>
                                `}
            </section>
        </div>
    `}function lp(e,t,n){const s=dr(e.id,t),a=ra(e),o=e.identity?.theme?.trim()||i("agentsWorkspaceRouting"),l=rs(e,n);return r`
        <section class="card agent-header">
            <div class="agent-header-main">
                <div class="agent-avatar agent-avatar--lg">
                    ${l||a.slice(0,1)}
                </div>
                <div>
                    <div class="card-title">${a}</div>
                    <div class="card-sub">${o}</div>
                </div>
            </div>
            <div class="agent-header-meta">
                <div class="mono">${e.id}</div>
                ${s?r`<span class="agent-pill">${s}</span>`:v}
            </div>
        </section>
    `}function rp(e,t){const n=[{id:"overview",label:i("agentsTabOverview")},{id:"files",label:i("agentsTabFiles")},{id:"tools",label:i("agentsTabTools")},{id:"skills",label:i("agentsTabSkills")},{id:"channels",label:i("agentsTabChannels")},{id:"cron",label:i("agentsTabCron")}];return r`
        <div class="agent-tabs">
            ${n.map(s=>r`
                        <button
                                class="agent-tab ${e===s.id?"active":""}"
                                type="button"
                                @click=${()=>t(s.id)}
                        >
                            ${s.label}
                        </button>
                    `)}
        </div>
    `}function cp(e){const{agent:t,configForm:n,agentFilesList:s,agentIdentity:a,agentIdentityLoading:o,agentIdentityError:l,configLoading:c,configSaving:d,configDirty:g,onConfigReload:h,onConfigSave:p,onModelChange:f,onModelFallbacksChange:u}=e,m=cs(n,t.id),w=(s&&s.agentId===t.id?s.workspace:null)||m.entry?.workspace||m.defaults?.workspace||"default",k=m.entry?.model?Zt(m.entry?.model):Zt(m.defaults?.model),A=Zt(m.defaults?.model),T=ci(m.entry?.model)||(k!=="-"?ri(k):null),C=ci(m.defaults?.model)||(A!=="-"?ri(A):null),E=T??C??null,M=ep(m.entry?.model),D=M?M.join(", "):"",z=a?.name?.trim()||t.identity?.name?.trim()||t.name?.trim()||m.entry?.name||"-",ae=rs(t,a)||"-",F=Array.isArray(m.entry?.skills)?m.entry?.skills:null,W=F?.length??null,de=o?i("commonLoading"):l?i("agentsUnavailable"):"",L=!!(e.defaultId&&t.id===e.defaultId);return r`
        <section class="card">
            <div class="card-title">${i("agentsOverview")}</div>
            <div class="card-sub">${i("agentsOverviewSub")}</div>
            <div class="agents-overview-grid" style="margin-top: 16px;">
                <div class="agent-kv">
                    <div class="label">${i("agentsWorkspace")}</div>
                    <div class="mono">${w}</div>
                </div>
                <div class="agent-kv">
                    <div class="label">${i("agentsPrimaryModel")}</div>
                    <div class="mono">${k}</div>
                </div>
                <div class="agent-kv">
                    <div class="label">${i("agentsIdentityName")}</div>
                    <div>${z}</div>
                    ${de?r`
                        <div class="agent-kv-sub muted">${de}</div>`:v}
                </div>
                <div class="agent-kv">
                    <div class="label">${i("agentsDefaultLabel")}</div>
                    <div>${i(L?"commonYes":"commonNo")}</div>
                </div>
                <div class="agent-kv">
                    <div class="label">${i("agentsIdentityEmoji")}</div>
                    <div>${ae}</div>
                </div>
                <div class="agent-kv">
                    <div class="label">${i("agentsSkillsFilter")}</div>
                    <div>${F?`${W} ${i("agentsSelected")}`:i("agentsAllSkills")}</div>
                </div>
            </div>

            <div class="agent-model-select" style="margin-top: 20px;">
                <div class="label">${i("agentsModelSelection")}</div>
                <div class="row" style="gap: 12px; flex-wrap: wrap;">
                    <label class="field" style="min-width: 260px; flex: 1;">
                        <span>${i("agentsPrimaryModelLabel")}${L?` ${i("agentsPrimaryModelDefault")}`:""}</span>
                        <select
                                .value=${E??""}
                                ?disabled=${!n||c||d}
                                @change=${B=>f(t.id,B.target.value||null)}
                        >
                            ${L?v:r`
                                                <option value="">
                                                    ${C?`${i("agentsInheritDefault")} (${C})`:i("agentsInheritDefault")}
                                                </option>
                                            `}
                            ${sp(n,E??void 0)}
                        </select>
                    </label>
                    <label class="field" style="min-width: 260px; flex: 1;">
                        <span>${i("agentsFallbacksLabel")}</span>
                        <input
                                .value=${D}
                                ?disabled=${!n||c||d}
                                placeholder="provider/model, provider/model"
                                @input=${B=>u(t.id,tp(B.target.value))}
                        />
                    </label>
                </div>
                <div class="row" style="justify-content: flex-end; gap: 8px;">
                    <button
                            class="btn btn--sm"
                            ?disabled=${c}
                            @click=${h}
                    >
                        ${i("agentsReloadConfig")}
                    </button>
                    <button
                            class="btn btn--sm primary"
                            ?disabled=${d||!g}
                            @click=${p}
                    >
                        ${i(d?"commonSaving":"commonSave")}
                    </button>
                </div>
            </div>
        </section>
    `}function gr(e,t){return r`
        <section class="card">
            <div class="card-title">${i("agentsAgentContext")}</div>
            <div class="card-sub">${t}</div>
            <div class="agents-overview-grid" style="margin-top: 16px;">
                <div class="agent-kv">
                    <div class="label">${i("agentsWorkspace")}</div>
                    <div class="mono">${e.workspace}</div>
                </div>
                <div class="agent-kv">
                    <div class="label">${i("agentsPrimaryModel")}</div>
                    <div class="mono">${e.model}</div>
                </div>
                <div class="agent-kv">
                    <div class="label">${i("agentsIdentityName")}</div>
                    <div>${e.identityName}</div>
                </div>
                <div class="agent-kv">
                    <div class="label">${i("agentsIdentityEmoji")}</div>
                    <div>${e.identityEmoji}</div>
                </div>
                <div class="agent-kv">
                    <div class="label">${i("agentsSkillsFilter")}</div>
                    <div>${e.skillsLabel}</div>
                </div>
                <div class="agent-kv">
                    <div class="label">${i("agentsDefaultLabel")}</div>
                    <div>${e.isDefault?i("commonYes"):i("commonNo")}</div>
                </div>
            </div>
        </section>
    `}function dp(e,t){const n=e.channelMeta?.find(s=>s.id===t);return n?.label?n.label:e.channelLabels?.[t]??t}function up(e){if(!e)return[];const t=new Set;for(const a of e.channelOrder??[])t.add(a);for(const a of e.channelMeta??[])t.add(a.id);for(const a of Object.keys(e.channelAccounts??{}))t.add(a);const n=[],s=e.channelOrder?.length?e.channelOrder:Array.from(t);for(const a of s)t.has(a)&&(n.push(a),t.delete(a));for(const a of t)n.push(a);return n.map(a=>({id:a,label:dp(e,a),accounts:e.channelAccounts?.[a]??[]}))}const gp=["groupPolicy","streamMode","dmPolicy"];function pp(e,t){if(!e)return null;const s=(e.channels??{})[t];if(s&&typeof s=="object")return s;const a=e[t];return a&&typeof a=="object"?a:null}function hp(e){if(e==null)return i("commonNA");if(typeof e=="string"||typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)}catch{return i("commonNA")}}function mp(e,t){const n=pp(e,t);return n?gp.flatMap(s=>s in n?[{label:s,value:hp(n[s])}]:[]):[]}function fp(e){let t=0,n=0,s=0;for(const a of e){const o=a.probe&&typeof a.probe=="object"&&"ok"in a.probe?!!a.probe.ok:!1;(a.connected===!0||a.running===!0||o)&&(t+=1),a.configured&&(n+=1),a.enabled&&(s+=1)}return{total:e.length,connected:t,configured:n,enabled:s}}function vp(e){const t=ur(e.agent,e.configForm,e.agentFilesList,e.defaultId,e.agentIdentity),n=up(e.snapshot),s=e.lastSuccess?Q(e.lastSuccess):i("agentsNever");return r`
        <section class="grid grid-cols-2">
            ${gr(t,i("agentsContextWorkspaceIdentity"))}
            <section class="card">
                <div class="row" style="justify-content: space-between;">
                    <div>
                        <div class="card-title">${i("agentsChannels")}</div>
                        <div class="card-sub">${i("agentsChannelsSub")}</div>
                    </div>
                    <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
                        ${e.loading?i("commonRefreshing"):i("commonRefresh")}
                    </button>
                </div>
                <div class="muted" style="margin-top: 8px;">
                    ${i("agentsLastRefresh")}: ${s}
                </div>
                ${e.error?r`
                                    <div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}
                ${e.snapshot?v:r`
                                    <div class="callout info" style="margin-top: 12px">${i("agentsLoadChannels")}</div>
                                `}
                ${n.length===0?r`
                                    <div class="muted" style="margin-top: 16px">${i("agentsNoChannels")}</div>
                                `:r`
                                    <div class="list" style="margin-top: 16px;">
                                        ${n.map(a=>{const o=fp(a.accounts),l=o.total?`${o.connected}/${o.total} ${i("agentsConnected")}`:i("agentsNoAccounts"),c=o.configured?`${o.configured} ${i("agentsConfiguredLabel")}`:i("agentsNotConfigured"),d=o.total?`${o.enabled} ${i("agentsEnabled")}`:i("agentsDisabled"),g=mp(e.configForm,a.id);return r`
                                                <div class="list-item">
                                                    <div class="list-main">
                                                        <div class="list-title">${a.label}</div>
                                                        <div class="list-sub mono">${a.id}</div>
                                                    </div>
                                                    <div class="list-meta">
                                                        <div>${l}</div>
                                                        <div>${c}</div>
                                                        <div>${d}</div>
                                                        ${g.length>0?g.map(h=>r`
                                                                            <div>${h.label}: ${h.value}</div>`):v}
                                                    </div>
                                                </div>
                                            `})}
                                    </div>
                                `}
            </section>
        </section>
    `}function bp(e){const t=ur(e.agent,e.configForm,e.agentFilesList,e.defaultId,e.agentIdentity),n=e.jobs.filter(s=>s.agentId===e.agent.id);return r`
        <section class="grid grid-cols-2">
            ${gr(t,i("agentsContextWorkspaceScheduling"))}
            <section class="card">
                <div class="row" style="justify-content: space-between;">
                    <div>
                        <div class="card-title">${i("agentsScheduler")}</div>
                        <div class="card-sub">${i("agentsSchedulerSub")}</div>
                    </div>
                    <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
                        ${e.loading?i("commonRefreshing"):i("commonRefresh")}
                    </button>
                </div>
                <div class="stat-grid" style="margin-top: 16px;">
                    <div class="stat">
                        <div class="stat-label">${i("agentsEnabled")}</div>
                        <div class="stat-value">
                            ${e.status?e.status.enabled?i("commonYes"):i("commonNo"):i("commonNA")}
                        </div>
                    </div>
                    <div class="stat">
                        <div class="stat-label">${i("cronJobs")}</div>
                        <div class="stat-value">${e.status?.jobs??i("commonNA")}</div>
                    </div>
                    <div class="stat">
                        <div class="stat-label">${i("agentsNextWake")}</div>
                        <div class="stat-value">${Qa(e.status?.nextWakeAtMs??null)}</div>
                    </div>
                </div>
                ${e.error?r`
                                    <div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}
            </section>
        </section>
        <section class="card">
            <div class="card-title">${i("agentsCronJobs")}</div>
            <div class="card-sub">${i("agentsCronJobsSub")}</div>
            ${n.length===0?r`
                                <div class="muted" style="margin-top: 16px">${i("agentsNoJobsAssigned")}</div>
                            `:r`
                                <div class="list" style="margin-top: 16px;">
                                    ${n.map(s=>r`
                                                <div class="list-item">
                                                    <div class="list-main">
                                                        <div class="list-title">${s.name}</div>
                                                        ${s.description?r`
                                                            <div class="list-sub">${s.description}</div>`:v}
                                                        <div class="chip-row" style="margin-top: 6px;">
                                                            <span class="chip">${cr(s)}</span>
                                                            <span class="chip ${s.enabled?"chip-ok":"chip-warn"}">
                          ${s.enabled?i("agentsEnabled"):i("agentsDisabled")}
                        </span>
                                                            <span class="chip">${s.sessionTarget}</span>
                                                        </div>
                                                    </div>
                                                    <div class="list-meta">
                                                        <div class="mono">${Yg(s)}</div>
                                                        <div class="muted">${Jg(s)}</div>
                                                    </div>
                                                </div>
                                            `)}
                                </div>
                            `}
        </section>
    `}function yp(e){const t=e.agentFilesList?.agentId===e.agentId?e.agentFilesList:null,n=t?.files??[],s=e.agentFileActive??null,a=s?n.find(d=>d.name===s)??null:null,o=s?e.agentFileContents[s]??"":"",l=s?e.agentFileDrafts[s]??o:"",c=s?l!==o:!1;return r`
        <section class="card">
            <div class="row" style="justify-content: space-between;">
                <div>
                    <div class="card-title">${i("agentsCoreFiles")}</div>
                    <div class="card-sub">${i("agentsCoreFilesSub")}</div>
                </div>
                <button
                        class="btn btn--sm"
                        ?disabled=${e.agentFilesLoading}
                        @click=${()=>e.onLoadFiles(e.agentId)}
                >
                    ${e.agentFilesLoading?i("commonLoading"):i("commonRefresh")}
                </button>
            </div>
            ${t?r`
                <div class="muted mono" style="margin-top: 8px;">${i("agentsWorkspace")}: ${t.workspace}
                </div>`:v}
            ${e.agentFilesError?r`
                                <div class="callout danger" style="margin-top: 12px;">${e.agentFilesError}
                                </div>`:v}
            ${t?r`
                                <div class="agent-files-grid" style="margin-top: 16px;">
                                    <div class="agent-files-list">
                                        ${n.length===0?r`
                                                            <div class="muted">${i("agentsNoFilesFound")}</div>
                                                        `:n.map(d=>xp(d,s,()=>e.onSelectFile(d.name)))}
                                    </div>
                                    <div class="agent-files-editor">
                                        ${a?r`
                                                            <div class="agent-file-header">
                                                                <div>
                                                                    <div class="agent-file-title mono">${a.name}</div>
                                                                    <div class="agent-file-sub mono">${a.path}</div>
                                                                </div>
                                                                <div class="agent-file-actions">
                                                                    <button
                                                                            class="btn btn--sm"
                                                                            ?disabled=${!c}
                                                                            @click=${()=>e.onFileReset(a.name)}
                                                                    >
                                                                        ${i("agentsReset")}
                                                                    </button>
                                                                    <button
                                                                            class="btn btn--sm primary"
                                                                            ?disabled=${e.agentFileSaving||!c}
                                                                            @click=${()=>e.onFileSave(a.name)}
                                                                    >
                                                                        ${e.agentFileSaving?i("commonSaving"):i("commonSave")}
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            ${a.missing?r`
                                                                                <div class="callout info" style="margin-top: 10px">
                                                                                    ${i("agentsFileMissingCreate")}
                                                                                </div>
                                                                            `:v}
                                                            <label class="field" style="margin-top: 12px;">
                                                                <span>Content</span>
                                                                <textarea
                                                                        .value=${l}
                                                                        @input=${d=>e.onFileDraftChange(a.name,d.target.value)}
                                                                ></textarea>
                                                            </label>
                                                        `:r`
                                                            <div class="muted">${i("agentsSelectFileToEdit")}</div>
                                                        `}
                                    </div>
                                </div>
                            `:r`
                                <div class="callout info" style="margin-top: 12px">
                                    ${i("agentsLoadWorkspaceFiles")}
                                </div>
                            `}
        </section>
    `}function xp(e,t,n){const s=e.missing?"Missing":`${Xg(e.size)} · ${Q(e.updatedAtMs??null)}`;return r`
        <button
                type="button"
                class="agent-file-row ${t===e.name?"active":""}"
                @click=${n}
        >
            <div>
                <div class="agent-file-name mono">${e.name}</div>
                <div class="agent-file-meta">${s}</div>
            </div>
            ${e.missing?r`
                                <span class="agent-pill warn">missing</span>
                            `:v}
        </button>
    `}function wp(e){const t=cs(e.configForm,e.agentId),n=t.entry?.tools??{},s=t.globalTools??{},a=n.profile??s.profile??"full",o=n.profile?"agent override":s.profile?"global default":"default",l=Array.isArray(n.allow)&&n.allow.length>0,c=Array.isArray(s.allow)&&s.allow.length>0,d=!!e.configForm&&!e.configLoading&&!e.configSaving&&!l,g=l?[]:Array.isArray(n.alsoAllow)?n.alsoAllow:[],h=l?[]:Array.isArray(n.deny)?n.deny:[],p=l?{allow:n.allow??[],deny:n.deny??[]}:jg(a)??void 0,f=li().flatMap(k=>k.tools.map(A=>A.id)),u=k=>{const A=op(k,p),T=di(k,g),C=di(k,h);return{allowed:(A||T)&&!C,baseAllowed:A,denied:C}},m=f.filter(k=>u(k).allowed).length,b=(k,A)=>{const T=new Set(g.map(D=>Ne(D)).filter(D=>D.length>0)),C=new Set(h.map(D=>Ne(D)).filter(D=>D.length>0)),E=u(k).baseAllowed,M=Ne(k);A?(C.delete(M),E||T.add(M)):(T.delete(M),C.add(M)),e.onOverridesChange(e.agentId,[...T],[...C])},w=k=>{const A=new Set(g.map(C=>Ne(C)).filter(C=>C.length>0)),T=new Set(h.map(C=>Ne(C)).filter(C=>C.length>0));for(const C of f){const E=u(C).baseAllowed,M=Ne(C);k?(T.delete(M),E||A.add(M)):(A.delete(M),T.add(M))}e.onOverridesChange(e.agentId,[...A],[...T])};return r`
        <section class="card">
            <div class="row" style="justify-content: space-between;">
                <div>
                    <div class="card-title">${i("agentsToolAccess")}</div>
                    <div class="card-sub">
                        ${i("agentsToolsSubText")}
                        <span class="mono">${m}/${f.length}</span> ${i("agentsEnabledCount")}
                    </div>
                </div>
                <div class="row" style="gap: 8px;">
                    <button
                            class="btn btn--sm"
                            ?disabled=${!d}
                            @click=${()=>w(!0)}
                    >
                        ${i("agentsEnableAll")}
                    </button>
                    <button
                            class="btn btn--sm"
                            ?disabled=${!d}
                            @click=${()=>w(!1)}
                    >
                        ${i("agentsDisableAll")}
                    </button>
                    <button
                            class="btn btn--sm"
                            ?disabled=${e.configLoading}
                            @click=${e.onConfigReload}
                    >
                        ${i("agentsReloadConfig")}
                    </button>
                    <button
                            class="btn btn--sm primary"
                            ?disabled=${e.configSaving||!e.configDirty}
                            @click=${e.onConfigSave}
                    >
                        ${e.configSaving?i("commonSaving"):i("commonSave")}
                    </button>
                </div>
            </div>

            ${e.configForm?v:r`
                                <div class="callout info" style="margin-top: 12px">
                                    ${i("agentsLoadConfigForTools")}
                                </div>
                            `}
            ${l?r`
                                <div class="callout info" style="margin-top: 12px">
                                    ${i("agentsExplicitAllowlist")}
                                </div>
                            `:v}
            ${c?r`
                                <div class="callout info" style="margin-top: 12px">
                                    ${i("agentsToolsGlobalAllow")}
                                </div>
                            `:v}

            <div class="agent-tools-meta" style="margin-top: 16px;">
                <div class="agent-kv">
                    <div class="label">${i("agentsProfile")}</div>
                    <div class="mono">${a}</div>
                </div>
                <div class="agent-kv">
                    <div class="label">${i("agentsSource")}</div>
                    <div>${o}</div>
                </div>
                ${e.configDirty?r`
                                    <div class="agent-kv">
                                        <div class="label">${i("agentsStatus")}</div>
                                        <div class="mono">${i("agentsUnsaved")}</div>
                                    </div>
                                `:v}
            </div>

            <div class="agent-tools-presets" style="margin-top: 16px;">
                <div class="label">${i("agentsQuickPresets")}</div>
                <div class="agent-tools-buttons">
                    ${Zg().map(k=>r`
                                <button
                                        class="btn btn--sm ${a===k.id?"active":""}"
                                        ?disabled=${!d}
                                        @click=${()=>e.onProfileChange(e.agentId,k.id,!0)}
                                >
                                    ${k.label}
                                </button>
                            `)}
                    <button
                            class="btn btn--sm"
                            ?disabled=${!d}
                            @click=${()=>e.onProfileChange(e.agentId,null,!1)}
                    >
                        ${i("agentsInherit")}
                    </button>
                </div>
            </div>

            <div class="agent-tools-grid" style="margin-top: 20px;">
                ${li().map(k=>r`
                                    <div class="agent-tools-section">
                                        <div class="agent-tools-header">${k.label}</div>
                                        <div class="agent-tools-list">
                                            ${k.tools.map(A=>{const{allowed:T}=u(A.id);return r`
                                                    <div class="agent-tool-row">
                                                        <div>
                                                            <div class="agent-tool-title mono">${A.label}</div>
                                                            <div class="agent-tool-sub">${A.description}</div>
                                                        </div>
                                                        <label class="cfg-toggle">
                                                            <input
                                                                    type="checkbox"
                                                                    .checked=${T}
                                                                    ?disabled=${!d}
                                                                    @change=${C=>b(A.id,C.target.checked)}
                                                            />
                                                            <span class="cfg-toggle__track"></span>
                                                        </label>
                                                    </div>
                                                `})}
                                        </div>
                                    </div>
                                `)}
            </div>
        </section>
    `}function $p(){return[{id:"workspace",label:i("skillsWorkspace"),sources:["openclaw-workspace"]},{id:"built-in",label:i("skillsBuiltIn"),sources:["openclaw-bundled"]},{id:"installed",label:i("skillsInstalled"),sources:["openclaw-managed"]},{id:"extra",label:i("skillsExtra"),sources:["openclaw-extra"]}]}function Sp(e){const t=$p(),n=new Map;for(const l of t)n.set(l.id,{id:l.id,label:l.label,skills:[]});const s=t.find(l=>l.id==="built-in"),a={id:"other",label:i("skillsOther"),skills:[]};for(const l of e){const c=l.bundled?s:t.find(d=>d.sources.includes(l.source));c?n.get(c.id)?.skills.push(l):a.skills.push(l)}const o=t.map(l=>n.get(l.id)).filter(l=>!!(l&&l.skills.length>0));return a.skills.length>0&&o.push(a),o}function kp(e){const t=!!e.configForm&&!e.configLoading&&!e.configSaving,n=cs(e.configForm,e.agentId),s=Array.isArray(n.entry?.skills)?n.entry?.skills:void 0,a=new Set((s??[]).map(u=>u.trim()).filter(Boolean)),o=s!==void 0,l=!!(e.report&&e.activeAgentId===e.agentId),c=l?e.report?.skills??[]:[],d=e.filter.trim().toLowerCase(),g=d?c.filter(u=>[u.name,u.description,u.source].join(" ").toLowerCase().includes(d)):c,h=Sp(g),p=o?c.filter(u=>a.has(u.name)).length:c.length,f=c.length;return r`
        <section class="card">
            <div class="row" style="justify-content: space-between;">
                <div>
                    <div class="card-title">${i("skillsTitle")}</div>
                    <div class="card-sub">
                        ${i("agentsSkillsPanelSub")}
                        ${f>0?r`<span class="mono">${p}/${f}</span>`:v}
                    </div>
                </div>
                <div class="row" style="gap: 8px;">
                    <button class="btn btn--sm" ?disabled=${!t} @click=${()=>e.onClear(e.agentId)}>
                        ${i("agentsUseAll")}
                    </button>
                    <button class="btn btn--sm" ?disabled=${!t}
                            @click=${()=>e.onDisableAll(e.agentId)}>
                        ${i("agentsDisableAll")}
                    </button>
                    <button
                            class="btn btn--sm"
                            ?disabled=${e.configLoading}
                            @click=${e.onConfigReload}
                    >
                        ${i("agentsReloadConfig")}
                    </button>
                    <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
                        ${e.loading?i("commonLoading"):i("commonRefresh")}
                    </button>
                    <button
                            class="btn btn--sm primary"
                            ?disabled=${e.configSaving||!e.configDirty}
                            @click=${e.onConfigSave}
                    >
                        ${e.configSaving?i("commonSaving"):i("commonSave")}
                    </button>
                </div>
            </div>

            ${e.configForm?v:r`
                                <div class="callout info" style="margin-top: 12px">
                                    ${i("agentsLoadConfigForSkills")}
                                </div>
                            `}
            ${o?r`
                                <div class="callout info" style="margin-top: 12px">${i("agentsCustomAllowlist")}</div>
                            `:r`
                                <div class="callout info" style="margin-top: 12px">
                                    ${i("agentsAllSkillsEnabled")}
                                </div>
                            `}
            ${!l&&!e.loading?r`
                                <div class="callout info" style="margin-top: 12px">
                                    ${i("agentsLoadSkillsForAgent")}
                                </div>
                            `:v}
            ${e.error?r`
                                <div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}

            <div class="filters" style="margin-top: 14px;">
                <label class="field" style="flex: 1;">
                    <span>${i("agentsFilter")}</span>
                    <input
                            .value=${e.filter}
                            @input=${u=>e.onFilterChange(u.target.value)}
                            placeholder=${i("skillsSearchPlaceholder")}
                    />
                </label>
                <div class="muted">${g.length} ${i("skillsShown")}</div>
            </div>

            ${g.length===0?r`
                                <div class="muted" style="margin-top: 16px">${i("agentsNoSkillsFound")}</div>
                            `:r`
                                <div class="agent-skills-groups" style="margin-top: 16px;">
                                    ${h.map(u=>Ap(u,{agentId:e.agentId,allowSet:a,usingAllowlist:o,editable:t,onToggle:e.onToggle}))}
                                </div>
                            `}
        </section>
    `}function Ap(e,t){const n=e.id==="workspace"||e.id==="built-in";return r`
        <details class="agent-skills-group" ?open=${!n}>
            <summary class="agent-skills-header">
                <span>${e.label}</span>
                <span class="muted">${e.skills.length}</span>
            </summary>
            <div class="list skills-grid">
                ${e.skills.map(s=>Cp(s,{agentId:t.agentId,allowSet:t.allowSet,usingAllowlist:t.usingAllowlist,editable:t.editable,onToggle:t.onToggle}))}
            </div>
        </details>
    `}function Cp(e,t){const n=t.usingAllowlist?t.allowSet.has(e.name):!0,s=[...e.missing.bins.map(o=>`bin:${o}`),...e.missing.env.map(o=>`env:${o}`),...e.missing.config.map(o=>`config:${o}`),...e.missing.os.map(o=>`os:${o}`)],a=[];return e.disabled&&a.push("disabled"),e.blockedByAllowlist&&a.push("blocked by allowlist"),r`
        <div class="list-item agent-skill-row">
            <div class="list-main">
                <div class="list-title">
                    ${e.emoji?`${e.emoji} `:""}${e.name}
                </div>
                <div class="list-sub">${e.description}</div>
                <div class="chip-row" style="margin-top: 6px;">
                    <span class="chip">${e.source}</span>
                    <span class="chip ${e.eligible?"chip-ok":"chip-warn"}">
            ${e.eligible?"eligible":"blocked"}
          </span>
                    ${e.disabled?r`
                                        <span class="chip chip-warn">disabled</span>
                                    `:v}
                </div>
                ${s.length>0?r`
                                    <div class="muted" style="margin-top: 6px;">Missing: ${s.join(", ")}</div>`:v}
                ${a.length>0?r`
                                    <div class="muted" style="margin-top: 6px;">Reason: ${a.join(", ")}</div>`:v}
            </div>
            <div class="list-meta">
                <label class="cfg-toggle">
                    <input
                            type="checkbox"
                            .checked=${n}
                            ?disabled=${!t.editable}
                            @change=${o=>t.onToggle(t.agentId,e.name,o.target.checked)}
                    />
                    <span class="cfg-toggle__track"></span>
                </label>
            </div>
        </div>
    `}function Fe(e){if(e)return Array.isArray(e.type)?e.type.filter(n=>n!=="null")[0]??e.type[0]:e.type}function pr(e){if(!e)return"";if(e.default!==void 0)return e.default;switch(Fe(e)){case"object":return{};case"array":return[];case"boolean":return!1;case"number":case"integer":return 0;case"string":return"";default:return""}}function Ft(e){return e.filter(t=>typeof t=="string").join(".")}function Ae(e,t){const n=Ft(e),s=t[n];if(s)return s;const a=n.split(".");for(const[o,l]of Object.entries(t)){if(!o.includes("*"))continue;const c=o.split(".");if(c.length!==a.length)continue;let d=!0;for(let g=0;g<a.length;g+=1)if(c[g]!=="*"&&c[g]!==a[g]){d=!1;break}if(d)return l}}function qe(e){return e.replace(/_/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/\s+/g," ").replace(/^./,t=>t.toUpperCase())}function Tp(e){const t=Ft(e).toLowerCase();return t.includes("token")||t.includes("password")||t.includes("secret")||t.includes("apikey")||t.endsWith("key")}function Mp(e){const t=Ft(e),n=e.map(a=>typeof a=="number"?"*":a).join("."),s=n.replace(/\.\*/g,"[]");return[t,n,s]}const Ep={en:{"meta.lastTouchedVersion":"Auto-set when OpenClaw writes the config.","meta.lastTouchedAt":"ISO timestamp of the last config write (auto-set).","update.channel":'Update channel for git + npm installs ("stable", "beta", or "dev").',"update.checkOnStart":"Check for npm updates when the gateway starts (default: true).","gateway.remote.url":"Remote Gateway WebSocket URL (ws:// or wss://).","gateway.remote.tlsFingerprint":"Expected sha256 TLS fingerprint for the remote gateway (pin to avoid MITM).","gateway.remote.sshTarget":"Remote gateway over SSH (tunnels the gateway port to localhost). Format: user@host or user@host:port.","gateway.remote.sshIdentity":"Optional SSH identity file path (passed to ssh -i).","agents.list.*.skills":"Optional allowlist of skills for this agent (omit = all skills; empty = no skills).","agents.list[].skills":"Optional allowlist of skills for this agent (omit = all skills; empty = no skills).","agents.list[].identity.avatar":"Avatar image path (relative to the agent workspace only) or a remote URL/data URL.","discovery.mdns.mode":'mDNS broadcast mode ("minimal" default, "full" includes cliPath/sshPort, "off" disables mDNS).',"gateway.auth.token":"Required by default for gateway access (unless using Tailscale Serve identity); required for non-loopback binds.","gateway.auth.password":"Required for Tailscale funnel.","gateway.controlUi.basePath":"Optional URL prefix where the Control UI is served (e.g. /openclaw).","gateway.controlUi.root":"Optional filesystem root for Control UI assets (defaults to dist/control-ui).","gateway.controlUi.allowedOrigins":"Allowed browser origins for Control UI/WebChat websocket connections (full origins only, e.g. https://control.example.com).","gateway.controlUi.allowInsecureAuth":"Allow Control UI auth over insecure HTTP (token-only; not recommended).","gateway.controlUi.dangerouslyDisableDeviceAuth":"DANGEROUS. Disable Control UI device identity checks (token/password only).","gateway.http.endpoints.chatCompletions.enabled":"Enable the OpenAI-compatible `POST /v1/chat/completions` endpoint (default: false).","gateway.reload.mode":'Hot reload strategy for config changes ("hybrid" recommended).',"gateway.reload.debounceMs":"Debounce window (ms) before applying config changes.","gateway.nodes.browser.mode":'Node browser routing ("auto" = pick single connected browser node, "manual" = require node param, "off" = disable).',"gateway.nodes.browser.node":"Pin browser routing to a specific node id or name (optional).","gateway.nodes.allowCommands":"Extra node.invoke commands to allow beyond the gateway defaults (array of command strings).","gateway.nodes.denyCommands":"Commands to block even if present in node claims or default allowlist.","nodeHost.browserProxy.enabled":"Expose the local browser control server via node proxy.","nodeHost.browserProxy.allowProfiles":"Optional allowlist of browser profile names exposed via the node proxy.","diagnostics.flags":'Enable targeted diagnostics logs by flag (e.g. ["telegram.http"]). Supports wildcards like "telegram.*" or "*".',"diagnostics.cacheTrace.enabled":"Log cache trace snapshots for embedded agent runs (default: false).","diagnostics.cacheTrace.filePath":"JSONL output path for cache trace logs (default: $OPENCLAW_STATE_DIR/logs/cache-trace.jsonl).","diagnostics.cacheTrace.includeMessages":"Include full message payloads in trace output (default: true).","diagnostics.cacheTrace.includePrompt":"Include prompt text in trace output (default: true).","diagnostics.cacheTrace.includeSystem":"Include system prompt in trace output (default: true).","tools.exec.applyPatch.enabled":"Experimental. Enables apply_patch for OpenAI models when allowed by tool policy.","tools.exec.applyPatch.allowModels":'Optional allowlist of model ids (e.g. "gpt-5.2" or "openai/gpt-5.2").',"tools.exec.notifyOnExit":"When true (default), backgrounded exec sessions enqueue a system event and request a heartbeat on exit.","tools.exec.pathPrepend":"Directories to prepend to PATH for exec runs (gateway/sandbox).","tools.exec.safeBins":"Allow stdin-only safe binaries to run without explicit allowlist entries.","tools.message.allowCrossContextSend":"Legacy override: allow cross-context sends across all providers.","tools.message.crossContext.allowWithinProvider":"Allow sends to other channels within the same provider (default: true).","tools.message.crossContext.allowAcrossProviders":"Allow sends across different providers (default: false).","tools.message.crossContext.marker.enabled":"Add a visible origin marker when sending cross-context (default: true).","tools.message.crossContext.marker.prefix":'Text prefix for cross-context markers (supports "{channel}").',"tools.message.crossContext.marker.suffix":'Text suffix for cross-context markers (supports "{channel}").',"tools.message.broadcast.enabled":"Enable broadcast action (default: true).","tools.web.search.enabled":"Enable the web_search tool (requires a provider API key).","tools.web.search.provider":'Search provider ("brave" or "perplexity").',"tools.web.search.apiKey":"Brave Search API key (fallback: BRAVE_API_KEY env var).","tools.web.search.maxResults":"Default number of results to return (1-10).","tools.web.search.timeoutSeconds":"Timeout in seconds for web_search requests.","tools.web.search.cacheTtlMinutes":"Cache TTL in minutes for web_search results.","tools.web.search.perplexity.apiKey":"Perplexity or OpenRouter API key (fallback: PERPLEXITY_API_KEY or OPENROUTER_API_KEY env var).","tools.web.search.perplexity.baseUrl":"Perplexity base URL override (default: https://openrouter.ai/api/v1 or https://api.perplexity.ai).","tools.web.search.perplexity.model":'Perplexity model override (default: "perplexity/sonar-pro").',"tools.web.fetch.enabled":"Enable the web_fetch tool (lightweight HTTP fetch).","tools.web.fetch.maxChars":"Max characters returned by web_fetch (truncated).","tools.web.fetch.maxCharsCap":"Hard cap for web_fetch maxChars (applies to config and tool calls).","tools.web.fetch.timeoutSeconds":"Timeout in seconds for web_fetch requests.","tools.web.fetch.cacheTtlMinutes":"Cache TTL in minutes for web_fetch results.","tools.web.fetch.maxRedirects":"Maximum redirects allowed for web_fetch (default: 3).","tools.web.fetch.userAgent":"Override User-Agent header for web_fetch requests.","tools.web.fetch.readability":"Use Readability to extract main content from HTML (fallbacks to basic HTML cleanup).","tools.web.fetch.firecrawl.enabled":"Enable Firecrawl fallback for web_fetch (if configured).","tools.web.fetch.firecrawl.apiKey":"Firecrawl API key (fallback: FIRECRAWL_API_KEY env var).","tools.web.fetch.firecrawl.baseUrl":"Firecrawl base URL (e.g. https://api.firecrawl.dev or custom endpoint).","tools.web.fetch.firecrawl.onlyMainContent":"When true, Firecrawl returns only the main content (default: true).","tools.web.fetch.firecrawl.maxAgeMs":"Firecrawl maxAge (ms) for cached results when supported by the API.","tools.web.fetch.firecrawl.timeoutSeconds":"Timeout in seconds for Firecrawl requests.","channels.slack.allowBots":"Allow bot-authored messages to trigger Slack replies (default: false).","channels.slack.thread.historyScope":'Scope for Slack thread history context ("thread" isolates per thread; "channel" reuses channel history).',"channels.slack.thread.inheritParent":"If true, Slack thread sessions inherit the parent channel transcript (default: false).","channels.mattermost.botToken":"Bot token from Mattermost System Console -> Integrations -> Bot Accounts.","channels.mattermost.baseUrl":"Base URL for your Mattermost server (e.g., https://chat.example.com).","channels.mattermost.chatmode":'Reply to channel messages on mention ("oncall"), on trigger chars (">" or "!") ("onchar"), or on every message ("onmessage").',"channels.mattermost.oncharPrefixes":'Trigger prefixes for onchar mode (default: [">", "!"]).',"channels.mattermost.requireMention":"Require @mention in channels before responding (default: true).","auth.profiles":"Named auth profiles (provider + mode + optional email).","auth.order":"Ordered auth profile IDs per provider (used for automatic failover).","auth.cooldowns.billingBackoffHours":"Base backoff (hours) when a profile fails due to billing/insufficient credits (default: 5).","auth.cooldowns.billingBackoffHoursByProvider":"Optional per-provider overrides for billing backoff (hours).","auth.cooldowns.billingMaxHours":"Cap (hours) for billing backoff (default: 24).","auth.cooldowns.failureWindowHours":"Failure window (hours) for backoff counters (default: 24).","agents.defaults.bootstrapMaxChars":"Max characters of each workspace bootstrap file injected into the system prompt before truncation (default: 20000).","agents.defaults.repoRoot":"Optional repository root shown in the system prompt runtime line (overrides auto-detect).","agents.defaults.envelopeTimezone":'Timezone for message envelopes ("utc", "local", "user", or an IANA timezone string).',"agents.defaults.envelopeTimestamp":'Include absolute timestamps in message envelopes ("on" or "off").',"agents.defaults.envelopeElapsed":'Include elapsed time in message envelopes ("on" or "off").',"agents.defaults.models":"Configured model catalog (keys are full provider/model IDs).","agents.defaults.memorySearch":"Vector search over MEMORY.md and memory/*.md (per-agent overrides supported).","agents.defaults.memorySearch.sources":'Sources to index for memory search (default: ["memory"]; add "sessions" to include session transcripts).',"agents.defaults.memorySearch.extraPaths":"Extra paths to include in memory search (directories or .md files; relative paths resolved from workspace).","agents.defaults.memorySearch.experimental.sessionMemory":"Enable experimental session transcript indexing for memory search (default: false).","agents.defaults.memorySearch.provider":'Embedding provider ("openai", "gemini", "voyage", or "local").',"agents.defaults.memorySearch.remote.baseUrl":"Custom base URL for remote embeddings (OpenAI-compatible proxies or Gemini overrides).","agents.defaults.memorySearch.remote.apiKey":"Custom API key for the remote embedding provider.","agents.defaults.memorySearch.remote.headers":"Extra headers for remote embeddings (merged; remote overrides OpenAI headers).","agents.defaults.memorySearch.remote.batch.enabled":"Enable batch API for memory embeddings (OpenAI/Gemini; default: true).","agents.defaults.memorySearch.remote.batch.wait":"Wait for batch completion when indexing (default: true).","agents.defaults.memorySearch.remote.batch.concurrency":"Max concurrent embedding batch jobs for memory indexing (default: 2).","agents.defaults.memorySearch.remote.batch.pollIntervalMs":"Polling interval in ms for batch status (default: 2000).","agents.defaults.memorySearch.remote.batch.timeoutMinutes":"Timeout in minutes for batch indexing (default: 60).","agents.defaults.memorySearch.local.modelPath":"Local GGUF model path or hf: URI (node-llama-cpp).","agents.defaults.memorySearch.fallback":'Fallback provider when embeddings fail ("openai", "gemini", "local", or "none").',"agents.defaults.memorySearch.store.path":"SQLite index path (default: ~/.openclaw/memory/{agentId}.sqlite).","agents.defaults.memorySearch.store.vector.enabled":"Enable sqlite-vec extension for vector search (default: true).","agents.defaults.memorySearch.store.vector.extensionPath":"Optional override path to sqlite-vec extension library (.dylib/.so/.dll).","agents.defaults.memorySearch.query.hybrid.enabled":"Enable hybrid BM25 + vector search for memory (default: true).","agents.defaults.memorySearch.query.hybrid.vectorWeight":"Weight for vector similarity when merging results (0-1).","agents.defaults.memorySearch.query.hybrid.textWeight":"Weight for BM25 text relevance when merging results (0-1).","agents.defaults.memorySearch.query.hybrid.candidateMultiplier":"Multiplier for candidate pool size (default: 4).","agents.defaults.memorySearch.cache.enabled":"Cache chunk embeddings in SQLite to speed up reindexing and frequent updates (default: true).",memory:"Memory backend configuration (global).","memory.backend":'Memory backend ("builtin" for OpenClaw embeddings, "qmd" for QMD sidecar).',"memory.citations":'Default citation behavior ("auto", "on", or "off").',"memory.qmd.command":"Path to the qmd binary (default: resolves from PATH).","memory.qmd.includeDefaultMemory":"Whether to automatically index MEMORY.md + memory/**/*.md (default: true).","memory.qmd.paths":"Additional directories/files to index with QMD (path + optional glob pattern).","memory.qmd.paths.path":"Absolute or ~-relative path to index via QMD.","memory.qmd.paths.pattern":"Glob pattern relative to the path root (default: **/*.md).","memory.qmd.paths.name":"Optional stable name for the QMD collection (default derived from path).","memory.qmd.sessions.enabled":"Enable QMD session transcript indexing (experimental, default: false).","memory.qmd.sessions.exportDir":"Override directory for sanitized session exports before indexing.","memory.qmd.sessions.retentionDays":"Retention window for exported sessions before pruning (default: unlimited).","memory.qmd.update.interval":"How often the QMD sidecar refreshes indexes (duration string, default: 5m).","memory.qmd.update.debounceMs":"Minimum delay between successive QMD refresh runs (default: 15000).","memory.qmd.update.onBoot":"Run QMD update once on gateway startup (default: true).","memory.qmd.update.embedInterval":"How often QMD embeddings are refreshed (duration string, default: 60m). Set to 0 to disable periodic embed.","memory.qmd.limits.maxResults":"Max QMD results returned to the agent loop (default: 6).","memory.qmd.limits.maxSnippetChars":"Max characters per snippet pulled from QMD (default: 700).","memory.qmd.limits.maxInjectedChars":"Max total characters injected from QMD hits per turn.","memory.qmd.limits.timeoutMs":"Per-query timeout for QMD searches (default: 4000).","memory.qmd.scope":"Session/channel scope for QMD recall (same syntax as session.sendPolicy; default: direct-only).","agents.defaults.memorySearch.cache.maxEntries":"Optional cap on cached embeddings (best-effort).","agents.defaults.memorySearch.sync.onSearch":"Lazy sync: schedule a reindex on search after changes.","agents.defaults.memorySearch.sync.watch":"Watch memory files for changes (chokidar).","agents.defaults.memorySearch.sync.sessions.deltaBytes":"Minimum appended bytes before session transcripts trigger reindex (default: 100000).","agents.defaults.memorySearch.sync.sessions.deltaMessages":"Minimum appended JSONL lines before session transcripts trigger reindex (default: 50).","plugins.enabled":"Enable plugin/extension loading (default: true).","plugins.allow":"Optional allowlist of plugin ids; when set, only listed plugins load.","plugins.deny":"Optional denylist of plugin ids; deny wins over allowlist.","plugins.load.paths":"Additional plugin files or directories to load.","plugins.slots":"Select which plugins own exclusive slots (memory, etc.).","plugins.slots.memory":'Select the active memory plugin by id, or "none" to disable memory plugins.',"plugins.entries":"Per-plugin settings keyed by plugin id (enable/disable + config payloads).","plugins.entries.*.enabled":"Overrides plugin enable/disable for this entry (restart required).","plugins.entries.*.config":"Plugin-defined config payload (schema is provided by the plugin).","plugins.installs":"CLI-managed install metadata (used by `openclaw plugins update` to locate install sources).","plugins.installs.*.source":'Install source ("npm", "archive", or "path").',"plugins.installs.*.spec":"Original npm spec used for install (if source is npm).","plugins.installs.*.sourcePath":"Original archive/path used for install (if any).","plugins.installs.*.installPath":"Resolved install directory (usually ~/.openclaw/extensions/<id>).","plugins.installs.*.version":"Version recorded at install time (if available).","plugins.installs.*.installedAt":"ISO timestamp of last install/update.","agents.list.*.identity.avatar":"Agent avatar (workspace-relative path, http(s) URL, or data URI).","agents.defaults.model.primary":"Primary model (provider/model).","agents.defaults.model.fallbacks":"Ordered fallback models (provider/model). Used when the primary model fails.","agents.defaults.imageModel.primary":"Optional image model (provider/model) used when the primary model lacks image input.","agents.defaults.imageModel.fallbacks":"Ordered fallback image models (provider/model).","agents.defaults.cliBackends":"Optional CLI backends for text-only fallback (claude-cli, etc.).","agents.defaults.humanDelay.mode":'Delay style for block replies ("off", "natural", "custom").',"agents.defaults.humanDelay.minMs":"Minimum delay in ms for custom humanDelay (default: 800).","agents.defaults.humanDelay.maxMs":"Maximum delay in ms for custom humanDelay (default: 2500).","commands.native":"Register native commands with channels that support it (Discord/Slack/Telegram).","commands.nativeSkills":"Register native skill commands (user-invocable skills) with channels that support it.","commands.text":"Allow text command parsing (slash commands only).","commands.bash":"Allow bash chat command (`!`; `/bash` alias) to run host shell commands (default: false; requires tools.elevated).","commands.bashForegroundMs":"How long bash waits before backgrounding (default: 2000; 0 backgrounds immediately).","commands.config":"Allow /config chat command to read/write config on disk (default: false).","commands.debug":"Allow /debug chat command for runtime-only overrides (default: false).","commands.restart":"Allow /restart and gateway restart tool actions (default: false).","commands.useAccessGroups":"Enforce access-group allowlists/policies for commands.","commands.ownerAllowFrom":`Explicit owner allowlist for owner-only tools/commands. Use channel-native IDs (optionally prefixed like "whatsapp:+15551234567"). '*' is ignored.`,"session.dmScope":'DM session scoping: "main" keeps continuity; "per-peer", "per-channel-peer", or "per-account-channel-peer" isolates DM history (recommended for shared inboxes/multi-account).',"session.identityLinks":"Map canonical identities to provider-prefixed peer IDs for DM session linking (example: telegram:123456).","channels.telegram.configWrites":"Allow Telegram to write config in response to channel events/commands (default: true).","channels.slack.configWrites":"Allow Slack to write config in response to channel events/commands (default: true).","channels.mattermost.configWrites":"Allow Mattermost to write config in response to channel events/commands (default: true).","channels.discord.configWrites":"Allow Discord to write config in response to channel events/commands (default: true).","channels.whatsapp.configWrites":"Allow WhatsApp to write config in response to channel events/commands (default: true).","channels.signal.configWrites":"Allow Signal to write config in response to channel events/commands (default: true).","channels.imessage.configWrites":"Allow iMessage to write config in response to channel events/commands (default: true).","channels.msteams.configWrites":"Allow Microsoft Teams to write config in response to channel events/commands (default: true).","channels.discord.commands.native":'Override native commands for Discord (bool or "auto").',"channels.discord.commands.nativeSkills":'Override native skill commands for Discord (bool or "auto").',"channels.telegram.commands.native":'Override native commands for Telegram (bool or "auto").',"channels.telegram.commands.nativeSkills":'Override native skill commands for Telegram (bool or "auto").',"channels.slack.commands.native":'Override native commands for Slack (bool or "auto").',"channels.slack.commands.nativeSkills":'Override native skill commands for Slack (bool or "auto").',"session.agentToAgent.maxPingPongTurns":"Max reply-back turns between requester and target (0–5).","channels.telegram.customCommands":"Additional Telegram bot menu commands (merged with native; conflicts ignored).","messages.ackReaction":"Emoji reaction used to acknowledge inbound messages (empty disables).","messages.ackReactionScope":'When to send ack reactions ("group-mentions", "group-all", "direct", "all").',"messages.inbound.debounceMs":"Debounce window (ms) for batching rapid inbound messages from the same sender (0 to disable).","channels.telegram.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.telegram.allowFrom=["*"].',"channels.telegram.streamMode":"Draft streaming mode for Telegram replies (off | partial | block). Separate from block streaming; requires private topics + sendMessageDraft.","channels.telegram.draftChunk.minChars":'Minimum chars before emitting a Telegram draft update when channels.telegram.streamMode="block" (default: 200).',"channels.telegram.draftChunk.maxChars":'Target max size for a Telegram draft update chunk when channels.telegram.streamMode="block" (default: 800; clamped to channels.telegram.textChunkLimit).',"channels.telegram.draftChunk.breakPreference":"Preferred breakpoints for Telegram draft chunks (paragraph | newline | sentence). Default: paragraph.","channels.telegram.retry.attempts":"Max retry attempts for outbound Telegram API calls (default: 3).","channels.telegram.retry.minDelayMs":"Minimum retry delay in ms for Telegram outbound calls.","channels.telegram.retry.maxDelayMs":"Maximum retry delay cap in ms for Telegram outbound calls.","channels.telegram.retry.jitter":"Jitter factor (0-1) applied to Telegram retry delays.","channels.telegram.network.autoSelectFamily":"Override Node autoSelectFamily for Telegram (true=enable, false=disable).","channels.telegram.timeoutSeconds":"Max seconds before Telegram API requests are aborted (default: 500 per grammY).","channels.whatsapp.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.whatsapp.allowFrom=["*"].',"channels.whatsapp.selfChatMode":"Same-phone setup (bot uses your personal WhatsApp number).","channels.whatsapp.debounceMs":"Debounce window (ms) for batching rapid consecutive messages from the same sender (0 to disable).","channels.signal.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.signal.allowFrom=["*"].',"channels.imessage.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.imessage.allowFrom=["*"].',"channels.bluebubbles.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.bluebubbles.allowFrom=["*"].',"channels.discord.dm.policy":'Direct message access control ("pairing" recommended). "open" requires channels.discord.dm.allowFrom=["*"].',"channels.discord.retry.attempts":"Max retry attempts for outbound Discord API calls (default: 3).","channels.discord.retry.minDelayMs":"Minimum retry delay in ms for Discord outbound calls.","channels.discord.retry.maxDelayMs":"Maximum retry delay cap in ms for Discord outbound calls.","channels.discord.retry.jitter":"Jitter factor (0-1) applied to Discord retry delays.","channels.discord.maxLinesPerMessage":"Soft max line count per Discord message (default: 17).","channels.discord.intents.presence":"Enable the Guild Presences privileged intent. Must also be enabled in the Discord Developer Portal. Allows tracking user activities (e.g. Spotify). Default: false.","channels.discord.intents.guildMembers":"Enable the Guild Members privileged intent. Must also be enabled in the Discord Developer Portal. Default: false.","channels.discord.pluralkit.enabled":"Resolve PluralKit proxied messages and treat system members as distinct senders.","channels.discord.pluralkit.token":"Optional PluralKit token for resolving private systems or members.","channels.slack.dm.policy":'Direct message access control ("pairing" recommended). "open" requires channels.slack.dm.allowFrom=["*"].'},zh:{"meta.lastTouchedVersion":"OpenClaw 写入配置时自动设置。","meta.lastTouchedAt":"最后一次配置写入的 ISO 时间戳（自动设置）。","update.channel":'git + npm 安装的更新渠道（"stable"、"beta" 或 "dev"）。',"update.checkOnStart":"网关启动时检查 npm 更新（默认：true）。","gateway.remote.url":"远程网关 WebSocket URL（ws:// 或 wss://）。","gateway.remote.tlsFingerprint":"远程网关的预期 sha256 TLS 指纹（固定以避免中间人攻击）。","gateway.remote.sshTarget":"通过 SSH 的远程网关（将网关端口隧道到 localhost）。格式：user@host 或 user@host:port。","gateway.remote.sshIdentity":"可选的 SSH 身份文件路径（传递给 ssh -i）。","agents.list.*.skills":"此代理的可选技能允许列表（省略 = 所有技能；空 = 无技能）。","agents.list[].skills":"此代理的可选技能允许列表（省略 = 所有技能；空 = 无技能）。","agents.list[].identity.avatar":"头像图片路径（仅相对于代理工作区）或远程 URL/data URL。","discovery.mdns.mode":'mDNS 广播模式（"minimal" 默认，"full" 包含 cliPath/sshPort，"off" 禁用 mDNS）。',"gateway.auth.token":"默认情况下网关访问所需（除非使用 Tailscale Serve 身份）；非回环绑定需要。","gateway.auth.password":"Tailscale funnel 需要。","gateway.controlUi.basePath":"控制台 UI 服务的可选 URL 前缀（例如 /openclaw）。","gateway.controlUi.root":"控制台 UI 资源的可选文件系统根目录（默认为 dist/control-ui）。","gateway.controlUi.allowedOrigins":"控制台 UI/WebChat websocket 连接允许的浏览器来源（仅完整来源，例如 https://control.example.com）。","gateway.controlUi.allowInsecureAuth":"允许通过不安全 HTTP 进行控制台 UI 认证（仅令牌；不推荐）。","gateway.controlUi.dangerouslyDisableDeviceAuth":"危险。禁用控制台 UI 设备身份检查（仅令牌/密码）。","gateway.http.endpoints.chatCompletions.enabled":"启用 OpenAI 兼容的 `POST /v1/chat/completions` 端点（默认：false）。","gateway.reload.mode":'配置更改的热重载策略（推荐 "hybrid"）。',"gateway.reload.debounceMs":"应用配置更改前的防抖窗口（毫秒）。","gateway.nodes.browser.mode":'节点浏览器路由（"auto" = 选择单个连接的浏览器节点，"manual" = 需要节点参数，"off" = 禁用）。',"gateway.nodes.browser.node":"将浏览器路由固定到特定节点 id 或名称（可选）。","gateway.nodes.allowCommands":"允许的额外 node.invoke 命令，超出网关默认值（命令字符串数组）。","gateway.nodes.denyCommands":"即使存在于节点声明或默认允许列表中也要阻止的命令。","nodeHost.browserProxy.enabled":"通过节点代理暴露本地浏览器控制服务器。","nodeHost.browserProxy.allowProfiles":"通过节点代理暴露的浏览器配置集名称的可选允许列表。","diagnostics.flags":'按标志启用目标诊断日志（例如 ["telegram.http"]）。支持通配符，如 "telegram.*" 或 "*"。',"diagnostics.cacheTrace.enabled":"记录嵌入代理运行的缓存跟踪快照（默认：false）。","diagnostics.cacheTrace.filePath":"缓存跟踪日志的 JSONL 输出路径（默认：$OPENCLAW_STATE_DIR/logs/cache-trace.jsonl）。","diagnostics.cacheTrace.includeMessages":"在跟踪输出中包含完整消息负载（默认：true）。","diagnostics.cacheTrace.includePrompt":"在跟踪输出中包含提示文本（默认：true）。","diagnostics.cacheTrace.includeSystem":"在跟踪输出中包含系统提示（默认：true）。","tools.exec.applyPatch.enabled":"实验性。在工具策略允许时，为 OpenAI 模型启用 apply_patch。","tools.exec.applyPatch.allowModels":'模型 id 的可选允许列表（例如 "gpt-5.2" 或 "openai/gpt-5.2"）。',"tools.exec.notifyOnExit":"当为 true（默认）时，后台 exec 会话在退出时排队系统事件并请求心跳。","tools.exec.pathPrepend":"为 exec 运行前置到 PATH 的目录（网关/沙箱）。","tools.exec.safeBins":"允许仅 stdin 的安全二进制文件在没有显式允许列表条目的情况下运行。","tools.message.allowCrossContextSend":"遗留覆盖：允许跨所有提供方的跨上下文发送。","tools.message.crossContext.allowWithinProvider":"允许发送到同一提供方内的其他通道（默认：true）。","tools.message.crossContext.allowAcrossProviders":"允许跨不同提供方发送（默认：false）。","tools.message.crossContext.marker.enabled":"发送跨上下文时添加可见的来源标记（默认：true）。","tools.message.crossContext.marker.prefix":'跨上下文标记的文本前缀（支持 "{channel}"）。',"tools.message.crossContext.marker.suffix":'跨上下文标记的文本后缀（支持 "{channel}"）。',"tools.message.broadcast.enabled":"启用广播操作（默认：true）。","tools.web.search.enabled":"启用 web_search 工具（需要提供方 API 密钥）。","tools.web.search.provider":'搜索提供方（"brave" 或 "perplexity"）。',"tools.web.search.apiKey":"Brave Search API 密钥（回退：BRAVE_API_KEY 环境变量）。","tools.web.search.maxResults":"默认返回的结果数（1-10）。","tools.web.search.timeoutSeconds":"web_search 请求的超时（秒）。","tools.web.search.cacheTtlMinutes":"web_search 结果的缓存 TTL（分钟）。","tools.web.search.perplexity.apiKey":"Perplexity 或 OpenRouter API 密钥（回退：PERPLEXITY_API_KEY 或 OPENROUTER_API_KEY 环境变量）。","tools.web.search.perplexity.baseUrl":"Perplexity base URL 覆盖（默认：https://openrouter.ai/api/v1 或 https://api.perplexity.ai）。","tools.web.search.perplexity.model":'Perplexity 模型覆盖（默认："perplexity/sonar-pro"）。',"tools.web.fetch.enabled":"启用 web_fetch 工具（轻量级 HTTP 获取）。","tools.web.fetch.maxChars":"web_fetch 返回的最大字符数（截断）。","tools.web.fetch.maxCharsCap":"web_fetch maxChars 的硬上限（适用于配置和工具调用）。","tools.web.fetch.timeoutSeconds":"web_fetch 请求的超时（秒）。","tools.web.fetch.cacheTtlMinutes":"web_fetch 结果的缓存 TTL（分钟）。","tools.web.fetch.maxRedirects":"web_fetch 允许的最大重定向数（默认：3）。","tools.web.fetch.userAgent":"覆盖 web_fetch 请求的 User-Agent 头。","tools.web.fetch.readability":"使用 Readability 从 HTML 中提取主要内容（回退到基本 HTML 清理）。","tools.web.fetch.firecrawl.enabled":"启用 Firecrawl 回退用于 web_fetch（如果已配置）。","tools.web.fetch.firecrawl.apiKey":"Firecrawl API 密钥（回退：FIRECRAWL_API_KEY 环境变量）。","tools.web.fetch.firecrawl.baseUrl":"Firecrawl base URL（例如 https://api.firecrawl.dev 或自定义端点）。","tools.web.fetch.firecrawl.onlyMainContent":"当为 true 时，Firecrawl 仅返回主要内容（默认：true）。","tools.web.fetch.firecrawl.maxAgeMs":"Firecrawl maxAge（毫秒），用于 API 支持时的缓存结果。","tools.web.fetch.firecrawl.timeoutSeconds":"Firecrawl 请求的超时（秒）。","channels.slack.allowBots":"允许机器人撰写的消息触发 Slack 回复（默认：false）。","channels.slack.thread.historyScope":'Slack 线程历史上下文的范围（"thread" 隔离每个线程；"channel" 重用通道历史）。',"channels.slack.thread.inheritParent":"如果为 true，Slack 线程会话继承父通道转录（默认：false）。","channels.mattermost.botToken":"来自 Mattermost 系统控制台 -> 集成 -> 机器人账户的机器人令牌。","channels.mattermost.baseUrl":"您的 Mattermost 服务器的 Base URL（例如，https://chat.example.com）。","channels.mattermost.chatmode":'在提及（"oncall"）、触发字符（">" 或 "!"）（"onchar"）或每条消息（"onmessage"）时回复通道消息。',"channels.mattermost.oncharPrefixes":'onchar 模式的触发前缀（默认：[">", "!"]）。',"channels.mattermost.requireMention":"在回复前要求在通道中 @提及（默认：true）。","auth.profiles":"命名的认证配置集（提供方 + 模式 + 可选电子邮件）。","auth.order":"每个提供方的有序认证配置集 ID（用于自动故障转移）。","auth.cooldowns.billingBackoffHours":"当配置集因计费/积分不足而失败时的基本退避（小时）（默认：5）。","auth.cooldowns.billingBackoffHoursByProvider":"每个提供方的计费退避可选覆盖（小时）。","auth.cooldowns.billingMaxHours":"计费退避的上限（小时）（默认：24）。","auth.cooldowns.failureWindowHours":"退避计数器的故障窗口（小时）（默认：24）。","agents.defaults.bootstrapMaxChars":"在截断前注入系统提示的每个工作区引导文件的最大字符数（默认：20000）。","agents.defaults.repoRoot":"在系统提示运行时行中显示的可选仓库根目录（覆盖自动检测）。","agents.defaults.envelopeTimezone":'消息信封的时区（"utc"、"local"、"user" 或 IANA 时区字符串）。',"agents.defaults.envelopeTimestamp":'在消息信封中包含绝对时间戳（"on" 或 "off"）。',"agents.defaults.envelopeElapsed":'在消息信封中包含经过时间（"on" 或 "off"）。',"agents.defaults.models":"配置的模型目录（键是完整的提供方/模型 ID）。","agents.defaults.memorySearch":"对 MEMORY.md 和 memory/*.md 的向量搜索（支持每个代理的覆盖）。","agents.defaults.memorySearch.sources":'记忆搜索的索引来源（默认：["memory"]；添加 "sessions" 以包含会话转录）。',"agents.defaults.memorySearch.extraPaths":"记忆搜索中包含的额外路径（目录或 .md 文件；相对路径从工作区解析）。","agents.defaults.memorySearch.experimental.sessionMemory":"启用实验性会话转录索引用于记忆搜索（默认：false）。","agents.defaults.memorySearch.provider":'嵌入提供方（"openai"、"gemini"、"voyage" 或 "local"）。',"agents.defaults.memorySearch.remote.baseUrl":"远程嵌入的自定义 base URL（OpenAI 兼容代理或 Gemini 覆盖）。","agents.defaults.memorySearch.remote.apiKey":"远程嵌入提供方的自定义 API 密钥。","agents.defaults.memorySearch.remote.headers":"远程嵌入的额外请求头（合并；远程覆盖 OpenAI 请求头）。","agents.defaults.memorySearch.remote.batch.enabled":"启用记忆嵌入的批处理 API（OpenAI/Gemini；默认：true）。","agents.defaults.memorySearch.remote.batch.wait":"索引时等待批处理完成（默认：true）。","agents.defaults.memorySearch.remote.batch.concurrency":"记忆索引的最大并发嵌入批处理作业数（默认：2）。","agents.defaults.memorySearch.remote.batch.pollIntervalMs":"批处理状态轮询间隔（毫秒）（默认：2000）。","agents.defaults.memorySearch.remote.batch.timeoutMinutes":"批处理索引的超时（分钟）（默认：60）。","agents.defaults.memorySearch.local.modelPath":"本地 GGUF 模型路径或 hf: URI（node-llama-cpp）。","agents.defaults.memorySearch.fallback":'嵌入失败时的回退提供方（"openai"、"gemini"、"local" 或 "none"）。',"agents.defaults.memorySearch.store.path":"SQLite 索引路径（默认：~/.openclaw/memory/{agentId}.sqlite）。","agents.defaults.memorySearch.store.vector.enabled":"启用 sqlite-vec 扩展用于向量搜索（默认：true）。","agents.defaults.memorySearch.store.vector.extensionPath":"sqlite-vec 扩展库的可选覆盖路径（.dylib/.so/.dll）。","agents.defaults.memorySearch.query.hybrid.enabled":"启用混合 BM25 + 向量搜索用于记忆（默认：true）。","agents.defaults.memorySearch.query.hybrid.vectorWeight":"合并结果时向量相似度的权重（0-1）。","agents.defaults.memorySearch.query.hybrid.textWeight":"合并结果时 BM25 文本相关性的权重（0-1）。","agents.defaults.memorySearch.query.hybrid.candidateMultiplier":"候选池大小的倍数（默认：4）。","agents.defaults.memorySearch.cache.enabled":"在 SQLite 中缓存块嵌入以加速重新索引和频繁更新（默认：true）。",memory:"记忆后端配置（全局）。","memory.backend":'记忆后端（"builtin" 用于 OpenClaw 嵌入，"qmd" 用于 QMD 侧车）。',"memory.citations":'默认引用行为（"auto"、"on" 或 "off"）。',"memory.qmd.command":"qmd 可执行文件的路径（默认：从 PATH 解析）。","memory.qmd.includeDefaultMemory":"是否自动索引 MEMORY.md + memory/**/*.md（默认：true）。","memory.qmd.paths":"使用 QMD 索引的额外目录/文件（路径 + 可选 glob 模式）。","memory.qmd.paths.path":"通过 QMD 索引的绝对或 ~ 相对路径。","memory.qmd.paths.pattern":"相对于路径根的 Glob 模式（默认：**/*.md）。","memory.qmd.paths.name":"QMD 集合的可选稳定名称（默认从路径派生）。","memory.qmd.sessions.enabled":"启用 QMD 会话转录索引（实验性，默认：false）。","memory.qmd.sessions.exportDir":"索引前清理会话导出的覆盖目录。","memory.qmd.sessions.retentionDays":"修剪前导出会话的保留窗口（默认：无限制）。","memory.qmd.update.interval":"QMD 侧车刷新索引的频率（持续时间字符串，默认：5m）。","memory.qmd.update.debounceMs":"连续 QMD 刷新运行之间的最小延迟（默认：15000）。","memory.qmd.update.onBoot":"在网关启动时运行一次 QMD 更新（默认：true）。","memory.qmd.update.embedInterval":"QMD 嵌入刷新的频率（持续时间字符串，默认：60m）。设置为 0 以禁用定期嵌入。","memory.qmd.limits.maxResults":"返回到代理循环的最大 QMD 结果数（默认：6）。","memory.qmd.limits.maxSnippetChars":"从 QMD 拉取的每个片段的最大字符数（默认：700）。","memory.qmd.limits.maxInjectedChars":"每轮从 QMD 命中注入的最大总字符数。","memory.qmd.limits.timeoutMs":"QMD 搜索的每次查询超时（默认：4000）。","memory.qmd.scope":"QMD 召回会话/通道范围（与 session.sendPolicy 相同的语法；默认：仅直接）。","agents.defaults.memorySearch.cache.maxEntries":"缓存嵌入的可选上限（尽力而为）。","agents.defaults.memorySearch.sync.onSearch":"懒同步：在更改后搜索时安排重新索引。","agents.defaults.memorySearch.sync.watch":"监听记忆文件的更改（chokidar）。","agents.defaults.memorySearch.sync.sessions.deltaBytes":"会话转录触发重新索引前的最小追加字节数（默认：100000）。","agents.defaults.memorySearch.sync.sessions.deltaMessages":"会话转录触发重新索引前的最小追加 JSONL 行数（默认：50）。","plugins.enabled":"启用插件/扩展加载（默认：true）。","plugins.allow":"插件 id 的可选允许列表；设置时，仅加载列出的插件。","plugins.deny":"插件 id 的可选拒绝列表；拒绝优先于允许列表。","plugins.load.paths":"要加载的额外插件文件或目录。","plugins.slots":"选择哪些插件拥有独占槽位（记忆等）。","plugins.slots.memory":'按 id 选择活动记忆插件，或 "none" 以禁用记忆插件。',"plugins.entries":"按插件 id 键控的每个插件设置（启用/禁用 + 配置负载）。","plugins.entries.*.enabled":"覆盖此条目的插件启用/禁用（需要重启）。","plugins.entries.*.config":"插件定义的配置负载（模式由插件提供）。","plugins.installs":"CLI 管理的安装元数据（由 `openclaw plugins update` 用于定位安装来源）。","plugins.installs.*.source":'安装来源（"npm"、"archive" 或 "path"）。',"plugins.installs.*.spec":"用于安装的原始 npm 规格（如果来源是 npm）。","plugins.installs.*.sourcePath":"用于安装的原始存档/路径（如果有）。","plugins.installs.*.installPath":"解析的安装目录（通常是 ~/.openclaw/extensions/<id>）。","plugins.installs.*.version":"安装时记录的版本（如果可用）。","plugins.installs.*.installedAt":"最后一次安装/更新的 ISO 时间戳。","agents.list.*.identity.avatar":"代理头像（工作区相对路径、http(s) URL 或 data URI）。","agents.defaults.model.primary":"主模型（提供方/模型）。","agents.defaults.model.fallbacks":"有序回退模型（提供方/模型）。当主模型失败时使用。","agents.defaults.imageModel.primary":"当主模型缺少图像输入时使用的可选图像模型（提供方/模型）。","agents.defaults.imageModel.fallbacks":"有序回退图像模型（提供方/模型）。","agents.defaults.cliBackends":"用于仅文本回退的可选 CLI 后端（claude-cli 等）。","agents.defaults.humanDelay.mode":'块回复的延迟样式（"off"、"natural"、"custom"）。',"agents.defaults.humanDelay.minMs":"自定义 humanDelay 的最小延迟（毫秒）（默认：800）。","agents.defaults.humanDelay.maxMs":"自定义 humanDelay 的最大延迟（毫秒）（默认：2500）。","commands.native":"向支持它的通道注册原生命令（Discord/Slack/Telegram）。","commands.nativeSkills":"向支持它的通道注册原生技能命令（用户可调用的技能）。","commands.text":"允许文本命令解析（仅斜杠命令）。","commands.bash":"允许 bash 聊天命令（`!`；`/bash` 别名）运行主机 shell 命令（默认：false；需要 tools.elevated）。","commands.bashForegroundMs":"bash 在后台化之前等待的时间（默认：2000；0 立即后台化）。","commands.config":"允许 /config 聊天命令在磁盘上读取/写入配置（默认：false）。","commands.debug":"允许 /debug 聊天命令进行仅运行时覆盖（默认：false）。","commands.restart":"允许 /restart 和网关重启工具操作（默认：false）。","commands.useAccessGroups":"强制执行访问组允许列表/策略用于命令。","commands.ownerAllowFrom":`仅所有者工具/命令的显式所有者允许列表。使用通道原生 ID（可选前缀，如 "whatsapp:+15551234567"）。'*' 被忽略。`,"session.dmScope":'私信会话范围："main" 保持连续性；"per-peer"、"per-channel-peer" 或 "per-account-channel-peer" 隔离私信历史（推荐用于共享收件箱/多账户）。',"session.identityLinks":"将规范身份映射到提供方前缀的对等 ID 用于私信会话链接（示例：telegram:123456）。","channels.telegram.configWrites":"允许 Telegram 响应通道事件/命令写入配置（默认：true）。","channels.slack.configWrites":"允许 Slack 响应通道事件/命令写入配置（默认：true）。","channels.mattermost.configWrites":"允许 Mattermost 响应通道事件/命令写入配置（默认：true）。","channels.discord.configWrites":"允许 Discord 响应通道事件/命令写入配置（默认：true）。","channels.whatsapp.configWrites":"允许 WhatsApp 响应通道事件/命令写入配置（默认：true）。","channels.signal.configWrites":"允许 Signal 响应通道事件/命令写入配置（默认：true）。","channels.imessage.configWrites":"允许 iMessage 响应通道事件/命令写入配置（默认：true）。","channels.msteams.configWrites":"允许 Microsoft Teams 响应通道事件/命令写入配置（默认：true）。","channels.discord.commands.native":'覆盖 Discord 的原生命令（bool 或 "auto"）。',"channels.discord.commands.nativeSkills":'覆盖 Discord 的原生技能命令（bool 或 "auto"）。',"channels.telegram.commands.native":'覆盖 Telegram 的原生命令（bool 或 "auto"）。',"channels.telegram.commands.nativeSkills":'覆盖 Telegram 的原生技能命令（bool 或 "auto"）。',"channels.slack.commands.native":'覆盖 Slack 的原生命令（bool 或 "auto"）。',"channels.slack.commands.nativeSkills":'覆盖 Slack 的原生技能命令（bool 或 "auto"）。',"session.agentToAgent.maxPingPongTurns":"请求者和目标之间的最大回复轮数（0–5）。","channels.telegram.customCommands":"额外的 Telegram 机器人菜单命令（与原生命令合并；冲突被忽略）。","messages.ackReaction":"用于确认入站消息的表情符号反应（空则禁用）。","messages.ackReactionScope":'何时发送确认反应（"group-mentions"、"group-all"、"direct"、"all"）。',"messages.inbound.debounceMs":"批处理来自同一发送者的快速入站消息的防抖窗口（毫秒）（0 以禁用）。","channels.telegram.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.telegram.allowFrom=["*"]。',"channels.telegram.streamMode":"Telegram 回复的草稿流模式（off | partial | block）。与块流分离；需要私有主题 + sendMessageDraft。","channels.telegram.draftChunk.minChars":'当 channels.telegram.streamMode="block" 时，发出 Telegram 草稿更新前的最小字符数（默认：200）。',"channels.telegram.draftChunk.maxChars":'当 channels.telegram.streamMode="block" 时，Telegram 草稿更新块的目标最大大小（默认：800；限制为 channels.telegram.textChunkLimit）。',"channels.telegram.draftChunk.breakPreference":"Telegram 草稿块的首选断点（paragraph | newline | sentence）。默认：paragraph。","channels.telegram.retry.attempts":"出站 Telegram API 调用的最大重试次数（默认：3）。","channels.telegram.retry.minDelayMs":"Telegram 出站调用的最小重试延迟（毫秒）。","channels.telegram.retry.maxDelayMs":"Telegram 出站调用的最大重试延迟上限（毫秒）。","channels.telegram.retry.jitter":"应用于 Telegram 重试延迟的抖动因子（0-1）。","channels.telegram.network.autoSelectFamily":"覆盖 Telegram 的 Node autoSelectFamily（true=启用，false=禁用）。","channels.telegram.timeoutSeconds":"Telegram API 请求中止前的最大秒数（默认：500 per grammY）。","channels.whatsapp.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.whatsapp.allowFrom=["*"]。',"channels.whatsapp.selfChatMode":"同手机设置（机器人使用您的个人 WhatsApp 号码）。","channels.whatsapp.debounceMs":"批处理来自同一发送者的快速连续消息的防抖窗口（毫秒）（0 以禁用）。","channels.signal.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.signal.allowFrom=["*"]。',"channels.imessage.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.imessage.allowFrom=["*"]。',"channels.bluebubbles.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.bluebubbles.allowFrom=["*"]。',"channels.discord.dm.policy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.discord.dm.allowFrom=["*"]。',"channels.discord.retry.attempts":"出站 Discord API 调用的最大重试次数（默认：3）。","channels.discord.retry.minDelayMs":"Discord 出站调用的最小重试延迟（毫秒）。","channels.discord.retry.maxDelayMs":"Discord 出站调用的最大重试延迟上限（毫秒）。","channels.discord.retry.jitter":"应用于 Discord 重试延迟的抖动因子（0-1）。","channels.discord.maxLinesPerMessage":"每个 Discord 消息的软最大行数（默认：17）。","channels.discord.intents.presence":"启用 Guild Presences 特权意图。还必须在 Discord 开发者门户中启用。允许跟踪用户活动（例如 Spotify）。默认：false。","channels.discord.intents.guildMembers":"启用 Guild Members 特权意图。还必须在 Discord 开发者门户中启用。默认：false。","channels.discord.pluralkit.enabled":"解析 PluralKit 代理消息并将系统成员视为不同的发送者。","channels.discord.pluralkit.token":"用于解析私有系统或成员的可选 PluralKit 令牌。","channels.slack.dm.policy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.slack.dm.allowFrom=["*"]。'}};function Xe(e,t){const n=Ta(),s=Ep[n];for(const a of Mp(e)){const o=s[a];if(o)return o}return t}function Lp(e){const t=Ft(e),n=e.map(a=>typeof a=="number"?"*":a).join("."),s=n.replace(/\.\*/g,"[]");return[t,n,s]}const Ip={en:{"meta.lastTouchedVersion":"Config Last Touched Version","meta.lastTouchedAt":"Config Last Touched At","update.channel":"Update Channel","update.checkOnStart":"Update Check on Start","diagnostics.enabled":"Diagnostics Enabled","diagnostics.flags":"Diagnostics Flags","diagnostics.otel.enabled":"OpenTelemetry Enabled","diagnostics.otel.endpoint":"OpenTelemetry Endpoint","diagnostics.otel.protocol":"OpenTelemetry Protocol","diagnostics.otel.headers":"OpenTelemetry Headers","diagnostics.otel.serviceName":"OpenTelemetry Service Name","diagnostics.otel.traces":"OpenTelemetry Traces Enabled","diagnostics.otel.metrics":"OpenTelemetry Metrics Enabled","diagnostics.otel.logs":"OpenTelemetry Logs Enabled","diagnostics.otel.sampleRate":"OpenTelemetry Trace Sample Rate","diagnostics.otel.flushIntervalMs":"OpenTelemetry Flush Interval (ms)","diagnostics.cacheTrace.enabled":"Cache Trace Enabled","diagnostics.cacheTrace.filePath":"Cache Trace File Path","diagnostics.cacheTrace.includeMessages":"Cache Trace Include Messages","diagnostics.cacheTrace.includePrompt":"Cache Trace Include Prompt","diagnostics.cacheTrace.includeSystem":"Cache Trace Include System","agents.list.*.identity.avatar":"Identity Avatar","agents.list.*.skills":"Agent Skill Filter","gateway.remote.url":"Remote Gateway URL","gateway.remote.sshTarget":"Remote Gateway SSH Target","gateway.remote.sshIdentity":"Remote Gateway SSH Identity","gateway.remote.token":"Remote Gateway Token","gateway.remote.password":"Remote Gateway Password","gateway.remote.tlsFingerprint":"Remote Gateway TLS Fingerprint","gateway.auth.token":"Gateway Token","gateway.auth.password":"Gateway Password","tools.media.image.enabled":"Enable Image Understanding","tools.media.image.maxBytes":"Image Understanding Max Bytes","tools.media.image.maxChars":"Image Understanding Max Chars","tools.media.image.prompt":"Image Understanding Prompt","tools.media.image.timeoutSeconds":"Image Understanding Timeout (sec)","tools.media.image.attachments":"Image Understanding Attachment Policy","tools.media.image.models":"Image Understanding Models","tools.media.image.scope":"Image Understanding Scope","tools.media.models":"Media Understanding Shared Models","tools.media.concurrency":"Media Understanding Concurrency","tools.media.audio.enabled":"Enable Audio Understanding","tools.media.audio.maxBytes":"Audio Understanding Max Bytes","tools.media.audio.maxChars":"Audio Understanding Max Chars","tools.media.audio.prompt":"Audio Understanding Prompt","tools.media.audio.timeoutSeconds":"Audio Understanding Timeout (sec)","tools.media.audio.language":"Audio Understanding Language","tools.media.audio.attachments":"Audio Understanding Attachment Policy","tools.media.audio.models":"Audio Understanding Models","tools.media.audio.scope":"Audio Understanding Scope","tools.media.video.enabled":"Enable Video Understanding","tools.media.video.maxBytes":"Video Understanding Max Bytes","tools.media.video.maxChars":"Video Understanding Max Chars","tools.media.video.prompt":"Video Understanding Prompt","tools.media.video.timeoutSeconds":"Video Understanding Timeout (sec)","tools.media.video.attachments":"Video Understanding Attachment Policy","tools.media.video.models":"Video Understanding Models","tools.media.video.scope":"Video Understanding Scope","tools.links.enabled":"Enable Link Understanding","tools.links.maxLinks":"Link Understanding Max Links","tools.links.timeoutSeconds":"Link Understanding Timeout (sec)","tools.links.models":"Link Understanding Models","tools.links.scope":"Link Understanding Scope","tools.profile":"Tool Profile","tools.alsoAllow":"Tool Allowlist Additions","agents.list[].tools.profile":"Agent Tool Profile","agents.list[].tools.alsoAllow":"Agent Tool Allowlist Additions","tools.byProvider":"Tool Policy by Provider","agents.list[].tools.byProvider":"Agent Tool Policy by Provider","tools.exec.applyPatch.enabled":"Enable apply_patch","tools.exec.applyPatch.allowModels":"apply_patch Model Allowlist","tools.exec.notifyOnExit":"Exec Notify On Exit","tools.exec.approvalRunningNoticeMs":"Exec Approval Running Notice (ms)","tools.exec.host":"Exec Host","tools.exec.security":"Exec Security","tools.exec.ask":"Exec Ask","tools.exec.node":"Exec Node Binding","tools.exec.pathPrepend":"Exec PATH Prepend","tools.exec.safeBins":"Exec Safe Bins","tools.message.allowCrossContextSend":"Allow Cross-Context Messaging","tools.message.crossContext.allowWithinProvider":"Allow Cross-Context (Same Provider)","tools.message.crossContext.allowAcrossProviders":"Allow Cross-Context (Across Providers)","tools.message.crossContext.marker.enabled":"Cross-Context Marker","tools.message.crossContext.marker.prefix":"Cross-Context Marker Prefix","tools.message.crossContext.marker.suffix":"Cross-Context Marker Suffix","tools.message.broadcast.enabled":"Enable Message Broadcast","tools.web.search.enabled":"Enable Web Search Tool","tools.web.search.provider":"Web Search Provider","tools.web.search.apiKey":"Brave Search API Key","tools.web.search.maxResults":"Web Search Max Results","tools.web.search.timeoutSeconds":"Web Search Timeout (sec)","tools.web.search.cacheTtlMinutes":"Web Search Cache TTL (min)","tools.web.fetch.enabled":"Enable Web Fetch Tool","tools.web.fetch.maxChars":"Web Fetch Max Chars","tools.web.fetch.timeoutSeconds":"Web Fetch Timeout (sec)","tools.web.fetch.cacheTtlMinutes":"Web Fetch Cache TTL (min)","tools.web.fetch.maxRedirects":"Web Fetch Max Redirects","tools.web.fetch.userAgent":"Web Fetch User-Agent","gateway.controlUi.basePath":"Control UI Base Path","gateway.controlUi.root":"Control UI Assets Root","gateway.controlUi.allowedOrigins":"Control UI Allowed Origins","gateway.controlUi.allowInsecureAuth":"Allow Insecure Control UI Auth","gateway.controlUi.dangerouslyDisableDeviceAuth":"Dangerously Disable Control UI Device Auth","gateway.http.endpoints.chatCompletions.enabled":"OpenAI Chat Completions Endpoint","gateway.reload.mode":"Config Reload Mode","gateway.reload.debounceMs":"Config Reload Debounce (ms)","gateway.nodes.browser.mode":"Gateway Node Browser Mode","gateway.nodes.browser.node":"Gateway Node Browser Pin","gateway.nodes.allowCommands":"Gateway Node Allowlist (Extra Commands)","gateway.nodes.denyCommands":"Gateway Node Denylist","nodeHost.browserProxy.enabled":"Node Browser Proxy Enabled","nodeHost.browserProxy.allowProfiles":"Node Browser Proxy Allowed Profiles","skills.load.watch":"Watch Skills","skills.load.watchDebounceMs":"Skills Watch Debounce (ms)","agents.defaults.workspace":"Workspace","agents.defaults.repoRoot":"Repo Root","agents.defaults.bootstrapMaxChars":"Bootstrap Max Chars","agents.defaults.envelopeTimezone":"Envelope Timezone","agents.defaults.envelopeTimestamp":"Envelope Timestamp","agents.defaults.envelopeElapsed":"Envelope Elapsed","agents.defaults.memorySearch":"Memory Search","agents.defaults.memorySearch.enabled":"Enable Memory Search","agents.defaults.memorySearch.sources":"Memory Search Sources","agents.defaults.memorySearch.extraPaths":"Extra Memory Paths","agents.defaults.memorySearch.experimental.sessionMemory":"Memory Search Session Index (Experimental)","agents.defaults.memorySearch.provider":"Memory Search Provider","agents.defaults.memorySearch.remote.baseUrl":"Remote Embedding Base URL","agents.defaults.memorySearch.remote.apiKey":"Remote Embedding API Key","agents.defaults.memorySearch.remote.headers":"Remote Embedding Headers","agents.defaults.memorySearch.remote.batch.concurrency":"Remote Batch Concurrency","agents.defaults.memorySearch.model":"Memory Search Model","agents.defaults.memorySearch.fallback":"Memory Search Fallback","agents.defaults.memorySearch.local.modelPath":"Local Embedding Model Path","agents.defaults.memorySearch.store.path":"Memory Search Index Path","agents.defaults.memorySearch.store.vector.enabled":"Memory Search Vector Index","agents.defaults.memorySearch.store.vector.extensionPath":"Memory Search Vector Extension Path","agents.defaults.memorySearch.chunking.tokens":"Memory Chunk Tokens","agents.defaults.memorySearch.chunking.overlap":"Memory Chunk Overlap Tokens","agents.defaults.memorySearch.sync.onSessionStart":"Index on Session Start","agents.defaults.memorySearch.sync.onSearch":"Index on Search (Lazy)","agents.defaults.memorySearch.sync.watch":"Watch Memory Files","agents.defaults.memorySearch.sync.watchDebounceMs":"Memory Watch Debounce (ms)","agents.defaults.memorySearch.sync.sessions.deltaBytes":"Session Delta Bytes","agents.defaults.memorySearch.sync.sessions.deltaMessages":"Session Delta Messages","agents.defaults.memorySearch.query.maxResults":"Memory Search Max Results","agents.defaults.memorySearch.query.minScore":"Memory Search Min Score","agents.defaults.memorySearch.query.hybrid.enabled":"Memory Search Hybrid","agents.defaults.memorySearch.query.hybrid.vectorWeight":"Memory Search Vector Weight","agents.defaults.memorySearch.query.hybrid.textWeight":"Memory Search Text Weight","agents.defaults.memorySearch.query.hybrid.candidateMultiplier":"Memory Search Hybrid Candidate Multiplier","agents.defaults.memorySearch.cache.enabled":"Memory Search Embedding Cache","agents.defaults.memorySearch.cache.maxEntries":"Memory Search Embedding Cache Max Entries",memory:"Memory","memory.backend":"Memory Backend","memory.citations":"Memory Citations Mode","memory.qmd.command":"QMD Binary","memory.qmd.includeDefaultMemory":"QMD Include Default Memory","memory.qmd.paths":"QMD Extra Paths","memory.qmd.paths.path":"QMD Path","memory.qmd.paths.pattern":"QMD Path Pattern","memory.qmd.paths.name":"QMD Path Name","memory.qmd.sessions.enabled":"QMD Session Indexing","memory.qmd.sessions.exportDir":"QMD Session Export Directory","memory.qmd.sessions.retentionDays":"QMD Session Retention (days)","memory.qmd.update.interval":"QMD Update Interval","memory.qmd.update.debounceMs":"QMD Update Debounce (ms)","memory.qmd.update.onBoot":"QMD Update on Startup","memory.qmd.update.embedInterval":"QMD Embed Interval","memory.qmd.limits.maxResults":"QMD Max Results","memory.qmd.limits.maxSnippetChars":"QMD Max Snippet Chars","memory.qmd.limits.maxInjectedChars":"QMD Max Injected Chars","memory.qmd.limits.timeoutMs":"QMD Search Timeout (ms)","memory.qmd.scope":"QMD Surface Scope","auth.profiles":"Auth Profiles","auth.order":"Auth Profile Order","auth.cooldowns.billingBackoffHours":"Billing Backoff (hours)","auth.cooldowns.billingBackoffHoursByProvider":"Billing Backoff Overrides","auth.cooldowns.billingMaxHours":"Billing Backoff Cap (hours)","auth.cooldowns.failureWindowHours":"Failover Window (hours)","agents.defaults.models":"Models","agents.defaults.model.primary":"Primary Model","agents.defaults.model.fallbacks":"Model Fallbacks","agents.defaults.imageModel.primary":"Image Model","agents.defaults.imageModel.fallbacks":"Image Model Fallbacks","agents.defaults.humanDelay.mode":"Human Delay Mode","agents.defaults.humanDelay.minMs":"Human Delay Min (ms)","agents.defaults.humanDelay.maxMs":"Human Delay Max (ms)","agents.defaults.cliBackends":"CLI Backends","commands.native":"Native Commands","commands.nativeSkills":"Native Skill Commands","commands.text":"Text Commands","commands.bash":"Allow Bash Chat Command","commands.bashForegroundMs":"Bash Foreground Window (ms)","commands.config":"Allow /config","commands.debug":"Allow /debug","commands.restart":"Allow Restart","commands.useAccessGroups":"Use Access Groups","commands.ownerAllowFrom":"Command Owners","ui.seamColor":"Accent Color","ui.assistant.name":"Assistant Name","ui.assistant.avatar":"Assistant Avatar","browser.evaluateEnabled":"Browser Evaluate Enabled","browser.snapshotDefaults":"Browser Snapshot Defaults","browser.snapshotDefaults.mode":"Browser Snapshot Mode","browser.remoteCdpTimeoutMs":"Remote CDP Timeout (ms)","browser.remoteCdpHandshakeTimeoutMs":"Remote CDP Handshake Timeout (ms)","session.dmScope":"DM Session Scope","session.agentToAgent.maxPingPongTurns":"Agent-to-Agent Ping-Pong Turns","messages.ackReaction":"Ack Reaction Emoji","messages.ackReactionScope":"Ack Reaction Scope","messages.inbound.debounceMs":"Inbound Message Debounce (ms)","talk.apiKey":"Talk API Key","channels.whatsapp":"WhatsApp","channels.telegram":"Telegram","channels.telegram.customCommands":"Telegram Custom Commands","channels.discord":"Discord","channels.slack":"Slack","channels.mattermost":"Mattermost","channels.signal":"Signal","channels.imessage":"iMessage","channels.bluebubbles":"BlueBubbles","channels.msteams":"MS Teams","channels.telegram.botToken":"Telegram Bot Token","channels.telegram.dmPolicy":"Telegram DM Policy","channels.telegram.streamMode":"Telegram Draft Stream Mode","channels.telegram.draftChunk.minChars":"Telegram Draft Chunk Min Chars","channels.telegram.draftChunk.maxChars":"Telegram Draft Chunk Max Chars","channels.telegram.draftChunk.breakPreference":"Telegram Draft Chunk Break Preference","channels.telegram.retry.attempts":"Telegram Retry Attempts","channels.telegram.retry.minDelayMs":"Telegram Retry Min Delay (ms)","channels.telegram.retry.maxDelayMs":"Telegram Retry Max Delay (ms)","channels.telegram.retry.jitter":"Telegram Retry Jitter","channels.telegram.network.autoSelectFamily":"Telegram autoSelectFamily","channels.telegram.timeoutSeconds":"Telegram API Timeout (seconds)","channels.telegram.capabilities.inlineButtons":"Telegram Inline Buttons","channels.whatsapp.dmPolicy":"WhatsApp DM Policy","channels.whatsapp.selfChatMode":"WhatsApp Self-Phone Mode","channels.whatsapp.debounceMs":"WhatsApp Message Debounce (ms)","channels.signal.dmPolicy":"Signal DM Policy","channels.imessage.dmPolicy":"iMessage DM Policy","channels.bluebubbles.dmPolicy":"BlueBubbles DM Policy","channels.discord.dm.policy":"Discord DM Policy","channels.discord.retry.attempts":"Discord Retry Attempts","channels.discord.retry.minDelayMs":"Discord Retry Min Delay (ms)","channels.discord.retry.maxDelayMs":"Discord Retry Max Delay (ms)","channels.discord.retry.jitter":"Discord Retry Jitter","channels.discord.maxLinesPerMessage":"Discord Max Lines Per Message","channels.discord.intents.presence":"Discord Presence Intent","channels.discord.intents.guildMembers":"Discord Guild Members Intent","channels.discord.pluralkit.enabled":"Discord PluralKit Enabled","channels.discord.pluralkit.token":"Discord PluralKit Token","channels.slack.dm.policy":"Slack DM Policy","channels.slack.allowBots":"Slack Allow Bot Messages","channels.discord.token":"Discord Bot Token","channels.slack.botToken":"Slack Bot Token","channels.slack.appToken":"Slack App Token","channels.slack.userToken":"Slack User Token","channels.slack.userTokenReadOnly":"Slack User Token Read Only","channels.slack.thread.historyScope":"Slack Thread History Scope","channels.slack.thread.inheritParent":"Slack Thread Parent Inheritance","channels.mattermost.botToken":"Mattermost Bot Token","channels.mattermost.baseUrl":"Mattermost Base URL","channels.mattermost.chatmode":"Mattermost Chat Mode","channels.mattermost.oncharPrefixes":"Mattermost Onchar Prefixes","channels.mattermost.requireMention":"Mattermost Require Mention","channels.signal.account":"Signal Account","channels.imessage.cliPath":"iMessage CLI Path","agents.list[].skills":"Agent Skill Filter","agents.list[].identity.avatar":"Agent Avatar","discovery.mdns.mode":"mDNS Discovery Mode","plugins.enabled":"Enable Plugins","plugins.allow":"Plugin Allowlist","plugins.deny":"Plugin Denylist","plugins.load.paths":"Plugin Load Paths","plugins.slots":"Plugin Slots","plugins.slots.memory":"Memory Plugin","plugins.entries":"Plugin Entries","plugins.entries.*.enabled":"Plugin Enabled","plugins.entries.*.config":"Plugin Config","plugins.installs":"Plugin Install Records","plugins.installs.*.source":"Plugin Install Source","plugins.installs.*.spec":"Plugin Install Spec","plugins.installs.*.sourcePath":"Plugin Install Source Path","plugins.installs.*.installPath":"Plugin Install Path","plugins.installs.*.version":"Plugin Install Version","plugins.installs.*.installedAt":"Plugin Install Time"},zh:{"meta.lastTouchedVersion":"配置最后触及版本","meta.lastTouchedAt":"配置最后触及时间","update.channel":"更新渠道","update.checkOnStart":"启动时检查更新","diagnostics.enabled":"诊断已启用","diagnostics.flags":"诊断标志","diagnostics.otel.enabled":"OpenTelemetry 已启用","diagnostics.otel.endpoint":"OpenTelemetry 端点","diagnostics.otel.protocol":"OpenTelemetry 协议","diagnostics.otel.headers":"OpenTelemetry 请求头","diagnostics.otel.serviceName":"OpenTelemetry 服务名","diagnostics.otel.traces":"OpenTelemetry 链路已启用","diagnostics.otel.metrics":"OpenTelemetry 指标已启用","diagnostics.otel.logs":"OpenTelemetry 日志已启用","diagnostics.otel.sampleRate":"OpenTelemetry 采样率","diagnostics.otel.flushIntervalMs":"OpenTelemetry 刷新间隔（毫秒）","diagnostics.cacheTrace.enabled":"缓存追踪已启用","diagnostics.cacheTrace.filePath":"缓存追踪文件路径","diagnostics.cacheTrace.includeMessages":"缓存追踪包含消息","diagnostics.cacheTrace.includePrompt":"缓存追踪包含提示","diagnostics.cacheTrace.includeSystem":"缓存追踪包含系统","agents.list.*.identity.avatar":"身份头像","agents.list.*.skills":"代理技能筛选","gateway.remote.url":"远程网关 URL","gateway.remote.sshTarget":"远程网关 SSH 目标","gateway.remote.sshIdentity":"远程网关 SSH 身份","gateway.remote.token":"远程网关令牌","gateway.remote.password":"远程网关密码","gateway.remote.tlsFingerprint":"远程网关 TLS 指纹","gateway.auth.token":"网关令牌","gateway.auth.password":"网关密码","tools.media.image.enabled":"启用图像理解","tools.media.image.maxBytes":"图像理解最大字节","tools.media.image.maxChars":"图像理解最大字符","tools.media.image.prompt":"图像理解提示","tools.media.image.timeoutSeconds":"图像理解超时（秒）","tools.media.image.attachments":"图像理解附件策略","tools.media.image.models":"图像理解模型","tools.media.image.scope":"图像理解范围","tools.media.models":"媒体理解共享模型","tools.media.concurrency":"媒体理解并发数","tools.media.audio.enabled":"启用音频理解","tools.media.audio.maxBytes":"音频理解最大字节","tools.media.audio.maxChars":"音频理解最大字符","tools.media.audio.prompt":"音频理解提示","tools.media.audio.timeoutSeconds":"音频理解超时（秒）","tools.media.audio.language":"音频理解语言","tools.media.audio.attachments":"音频理解附件策略","tools.media.audio.models":"音频理解模型","tools.media.audio.scope":"音频理解范围","tools.media.video.enabled":"启用视频理解","tools.media.video.maxBytes":"视频理解最大字节","tools.media.video.maxChars":"视频理解最大字符","tools.media.video.prompt":"视频理解提示","tools.media.video.timeoutSeconds":"视频理解超时（秒）","tools.media.video.attachments":"视频理解附件策略","tools.media.video.models":"视频理解模型","tools.media.video.scope":"视频理解范围","tools.links.enabled":"启用链接理解","tools.links.maxLinks":"链接理解最大数量","tools.links.timeoutSeconds":"链接理解超时（秒）","tools.links.models":"链接理解模型","tools.links.scope":"链接理解范围","tools.profile":"工具配置集","tools.alsoAllow":"工具允许列表附加","agents.list[].tools.profile":"代理工具配置集","agents.list[].tools.alsoAllow":"代理工具允许列表附加","tools.byProvider":"按提供方的工具策略","agents.list[].tools.byProvider":"代理按提供方的工具策略","tools.exec.applyPatch.enabled":"启用 apply_patch","tools.exec.applyPatch.allowModels":"apply_patch 模型允许列表","tools.exec.notifyOnExit":"Exec 退出时通知","tools.exec.approvalRunningNoticeMs":"Exec 审批运行提示（毫秒）","tools.exec.host":"Exec 主机","tools.exec.security":"Exec 安全","tools.exec.ask":"Exec 询问","tools.exec.node":"Exec 节点绑定","tools.exec.pathPrepend":"Exec PATH 前置","tools.exec.safeBins":"Exec 安全二进制","tools.message.allowCrossContextSend":"允许跨上下文发送","tools.message.crossContext.allowWithinProvider":"允许跨上下文（同提供方）","tools.message.crossContext.allowAcrossProviders":"允许跨上下文（跨提供方）","tools.message.crossContext.marker.enabled":"跨上下文标记","tools.message.crossContext.marker.prefix":"跨上下文标记前缀","tools.message.crossContext.marker.suffix":"跨上下文标记后缀","tools.message.broadcast.enabled":"启用消息广播","tools.web.search.enabled":"启用网页搜索工具","tools.web.search.provider":"网页搜索提供方","tools.web.search.apiKey":"Brave 搜索 API 密钥","tools.web.search.maxResults":"网页搜索最大结果数","tools.web.search.timeoutSeconds":"网页搜索超时（秒）","tools.web.search.cacheTtlMinutes":"网页搜索缓存 TTL（分钟）","tools.web.fetch.enabled":"启用网页抓取工具","tools.web.fetch.maxChars":"网页抓取最大字符","tools.web.fetch.timeoutSeconds":"网页抓取超时（秒）","tools.web.fetch.cacheTtlMinutes":"网页抓取缓存 TTL（分钟）","tools.web.fetch.maxRedirects":"网页抓取最大重定向","tools.web.fetch.userAgent":"网页抓取 User-Agent","gateway.controlUi.basePath":"控制台 UI 基础路径","gateway.controlUi.root":"控制台 UI 资源根目录","gateway.controlUi.allowedOrigins":"控制台 UI 允许来源","gateway.controlUi.allowInsecureAuth":"允许控制台 UI 非安全认证","gateway.controlUi.dangerouslyDisableDeviceAuth":"危险：禁用控制台 UI 设备认证","gateway.http.endpoints.chatCompletions.enabled":"OpenAI 对话补全端点","gateway.reload.mode":"配置重载模式","gateway.reload.debounceMs":"配置重载防抖（毫秒）","gateway.nodes.browser.mode":"网关节点浏览器模式","gateway.nodes.browser.node":"网关节点浏览器固定","gateway.nodes.allowCommands":"网关节点允许列表（额外命令）","gateway.nodes.denyCommands":"网关节点拒绝列表","nodeHost.browserProxy.enabled":"节点浏览器代理已启用","nodeHost.browserProxy.allowProfiles":"节点浏览器代理允许配置集","skills.load.watch":"监听技能","skills.load.watchDebounceMs":"技能监听防抖（毫秒）","agents.defaults.workspace":"工作区","agents.defaults.repoRoot":"仓库根目录","agents.defaults.bootstrapMaxChars":"引导最大字符","agents.defaults.envelopeTimezone":"信封时区","agents.defaults.envelopeTimestamp":"信封时间戳","agents.defaults.envelopeElapsed":"信封耗时","agents.defaults.memorySearch":"记忆搜索","agents.defaults.memorySearch.enabled":"启用记忆搜索","agents.defaults.memorySearch.sources":"记忆搜索来源","agents.defaults.memorySearch.extraPaths":"记忆搜索额外路径","agents.defaults.memorySearch.experimental.sessionMemory":"记忆搜索会话索引（实验）","agents.defaults.memorySearch.provider":"记忆搜索提供方","agents.defaults.memorySearch.remote.baseUrl":"远程嵌入 Base URL","agents.defaults.memorySearch.remote.apiKey":"远程嵌入 API 密钥","agents.defaults.memorySearch.remote.headers":"远程嵌入请求头","agents.defaults.memorySearch.remote.batch.concurrency":"远程批处理并发数","agents.defaults.memorySearch.model":"记忆搜索模型","agents.defaults.memorySearch.fallback":"记忆搜索回退","agents.defaults.memorySearch.local.modelPath":"本地嵌入模型路径","agents.defaults.memorySearch.store.path":"记忆搜索索引路径","agents.defaults.memorySearch.store.vector.enabled":"记忆搜索向量索引","agents.defaults.memorySearch.store.vector.extensionPath":"记忆搜索向量扩展路径","agents.defaults.memorySearch.chunking.tokens":"记忆分块词数","agents.defaults.memorySearch.chunking.overlap":"记忆分块重叠词数","agents.defaults.memorySearch.sync.onSessionStart":"会话开始时建索引","agents.defaults.memorySearch.sync.onSearch":"搜索时建索引（懒加载）","agents.defaults.memorySearch.sync.watch":"监听记忆文件","agents.defaults.memorySearch.sync.watchDebounceMs":"记忆监听防抖（毫秒）","agents.defaults.memorySearch.sync.sessions.deltaBytes":"会话增量字节","agents.defaults.memorySearch.sync.sessions.deltaMessages":"会话增量消息","agents.defaults.memorySearch.query.maxResults":"记忆搜索最大结果数","agents.defaults.memorySearch.query.minScore":"记忆搜索最低分","agents.defaults.memorySearch.query.hybrid.enabled":"记忆搜索混合模式","agents.defaults.memorySearch.query.hybrid.vectorWeight":"记忆搜索向量权重","agents.defaults.memorySearch.query.hybrid.textWeight":"记忆搜索文本权重","agents.defaults.memorySearch.query.hybrid.candidateMultiplier":"记忆搜索混合候选倍数","agents.defaults.memorySearch.cache.enabled":"记忆搜索嵌入缓存","agents.defaults.memorySearch.cache.maxEntries":"记忆搜索嵌入缓存最大条数",memory:"记忆","memory.backend":"记忆后端","memory.citations":"记忆引用模式","memory.qmd.command":"QMD 可执行文件","memory.qmd.includeDefaultMemory":"QMD 包含默认记忆","memory.qmd.paths":"QMD 额外路径","memory.qmd.paths.path":"QMD 路径","memory.qmd.paths.pattern":"QMD 路径模式","memory.qmd.paths.name":"QMD 路径名称","memory.qmd.sessions.enabled":"QMD 会话索引","memory.qmd.sessions.exportDir":"QMD 会话导出目录","memory.qmd.sessions.retentionDays":"QMD 会话保留（天）","memory.qmd.update.interval":"QMD 更新间隔","memory.qmd.update.debounceMs":"QMD 更新防抖（毫秒）","memory.qmd.update.onBoot":"QMD 启动时更新","memory.qmd.update.embedInterval":"QMD 嵌入间隔","memory.qmd.limits.maxResults":"QMD 最大结果数","memory.qmd.limits.maxSnippetChars":"QMD 最大片段字符","memory.qmd.limits.maxInjectedChars":"QMD 最大注入字符","memory.qmd.limits.timeoutMs":"QMD 搜索超时（毫秒）","memory.qmd.scope":"QMD 作用范围","auth.profiles":"认证配置集","auth.order":"认证配置顺序","auth.cooldowns.billingBackoffHours":"计费退避（小时）","auth.cooldowns.billingBackoffHoursByProvider":"计费退避覆盖","auth.cooldowns.billingMaxHours":"计费退避上限（小时）","auth.cooldowns.failureWindowHours":"故障窗口（小时）","agents.defaults.models":"模型","agents.defaults.model.primary":"主模型","agents.defaults.model.fallbacks":"模型回退","agents.defaults.imageModel.primary":"图像模型","agents.defaults.imageModel.fallbacks":"图像模型回退","agents.defaults.humanDelay.mode":"人工延迟模式","agents.defaults.humanDelay.minMs":"人工延迟最小（毫秒）","agents.defaults.humanDelay.maxMs":"人工延迟最大（毫秒）","agents.defaults.cliBackends":"CLI 后端","commands.native":"原生命令","commands.nativeSkills":"原生技能命令","commands.text":"文本命令","commands.bash":"允许 Bash 聊天命令","commands.bashForegroundMs":"Bash 前台窗口（毫秒）","commands.config":"允许 /config","commands.debug":"允许 /debug","commands.restart":"允许重启","commands.useAccessGroups":"使用访问组","commands.ownerAllowFrom":"命令所有者","ui.seamColor":"强调色","ui.assistant.name":"助手名称","ui.assistant.avatar":"助手头像","browser.evaluateEnabled":"浏览器执行已启用","browser.snapshotDefaults":"浏览器快照默认","browser.snapshotDefaults.mode":"浏览器快照模式","browser.remoteCdpTimeoutMs":"远程 CDP 超时（毫秒）","browser.remoteCdpHandshakeTimeoutMs":"远程 CDP 握手超时（毫秒）","session.dmScope":"私信会话范围","session.agentToAgent.maxPingPongTurns":"代理间乒乓轮数","messages.ackReaction":"确认反应表情","messages.ackReactionScope":"确认反应范围","messages.inbound.debounceMs":"入站消息防抖（毫秒）","talk.apiKey":"语音 API 密钥","channels.whatsapp":"WhatsApp","channels.telegram":"Telegram","channels.telegram.customCommands":"Telegram 自定义命令","channels.discord":"Discord","channels.slack":"Slack","channels.mattermost":"Mattermost","channels.signal":"Signal","channels.imessage":"iMessage","channels.bluebubbles":"BlueBubbles","channels.msteams":"MS Teams","channels.telegram.botToken":"Telegram 机器人令牌","channels.telegram.dmPolicy":"Telegram 私信策略","channels.telegram.streamMode":"Telegram 草稿流模式","channels.telegram.draftChunk.minChars":"Telegram 草稿块最小字符","channels.telegram.draftChunk.maxChars":"Telegram 草稿块最大字符","channels.telegram.draftChunk.breakPreference":"Telegram 草稿块断行偏好","channels.telegram.retry.attempts":"Telegram 重试次数","channels.telegram.retry.minDelayMs":"Telegram 重试最小延迟（毫秒）","channels.telegram.retry.maxDelayMs":"Telegram 重试最大延迟（毫秒）","channels.telegram.retry.jitter":"Telegram 重试抖动","channels.telegram.network.autoSelectFamily":"Telegram autoSelectFamily","channels.telegram.timeoutSeconds":"Telegram API 超时（秒）","channels.telegram.capabilities.inlineButtons":"Telegram 内联按钮","channels.whatsapp.dmPolicy":"WhatsApp 私信策略","channels.whatsapp.selfChatMode":"WhatsApp 自聊模式","channels.whatsapp.debounceMs":"WhatsApp 消息防抖（毫秒）","channels.signal.dmPolicy":"Signal 私信策略","channels.imessage.dmPolicy":"iMessage 私信策略","channels.bluebubbles.dmPolicy":"BlueBubbles 私信策略","channels.discord.dm.policy":"Discord 私信策略","channels.discord.retry.attempts":"Discord 重试次数","channels.discord.retry.minDelayMs":"Discord 重试最小延迟（毫秒）","channels.discord.retry.maxDelayMs":"Discord 重试最大延迟（毫秒）","channels.discord.retry.jitter":"Discord 重试抖动","channels.discord.maxLinesPerMessage":"Discord 每消息最大行数","channels.discord.intents.presence":"Discord 在线状态意图","channels.discord.intents.guildMembers":"Discord 频道成员意图","channels.discord.pluralkit.enabled":"Discord PluralKit 已启用","channels.discord.pluralkit.token":"Discord PluralKit 令牌","channels.slack.dm.policy":"Slack 私信策略","channels.slack.allowBots":"Slack 允许机器人消息","channels.discord.token":"Discord 机器人令牌","channels.slack.botToken":"Slack 机器人令牌","channels.slack.appToken":"Slack 应用令牌","channels.slack.userToken":"Slack 用户令牌","channels.slack.userTokenReadOnly":"Slack 用户令牌只读","channels.slack.thread.historyScope":"Slack 线程历史范围","channels.slack.thread.inheritParent":"Slack 线程继承父级","channels.mattermost.botToken":"Mattermost 机器人令牌","channels.mattermost.baseUrl":"Mattermost Base URL","channels.mattermost.chatmode":"Mattermost 聊天模式","channels.mattermost.oncharPrefixes":"Mattermost 触发前缀","channels.mattermost.requireMention":"Mattermost 需要 @ 提及","channels.signal.account":"Signal 账号","channels.imessage.cliPath":"iMessage CLI 路径","agents.list[].skills":"代理技能筛选","agents.list[].identity.avatar":"代理头像","discovery.mdns.mode":"mDNS 发现模式","plugins.enabled":"启用插件","plugins.allow":"插件允许列表","plugins.deny":"插件拒绝列表","plugins.load.paths":"插件加载路径","plugins.slots":"插件槽位","plugins.slots.memory":"记忆插件","plugins.entries":"插件条目","plugins.entries.*.enabled":"插件已启用","plugins.entries.*.config":"插件配置","plugins.installs":"插件安装记录","plugins.installs.*.source":"插件安装来源","plugins.installs.*.spec":"插件安装规格","plugins.installs.*.sourcePath":"插件安装源路径","plugins.installs.*.installPath":"插件安装路径","plugins.installs.*.version":"插件安装版本","plugins.installs.*.installedAt":"插件安装时间"}};function et(e,t){const n=Ta(),s=Ip[n];for(const a of Lp(e)){const o=s[a];if(o)return o}return t}const _p=new Set(["title","description","default","nullable"]);function Dp(e){return Object.keys(e??{}).filter(n=>!_p.has(n)).length===0}function Rp(e){if(e===void 0)return"";try{return JSON.stringify(e,null,2)??""}catch{return""}}const cn={chevronDown:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,plus:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `,minus:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `,trash:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
  `,edit:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  `};function je(e){const{schema:t,value:n,path:s,hints:a,unsupported:o,disabled:l,onPatch:c}=e,d=e.showLabel??!0,g=Fe(t),h=Ae(s,a),p=et(s,h?.label??t.title??qe(String(s.at(-1)))),f=Xe(s,h?.help??t.description??""),u=Ft(s);if(o.has(u))return r`<div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${p}</div>
      <div class="cfg-field__error">${i("configUnsupportedSchemaNode")}</div>
    </div>`;if(t.anyOf||t.oneOf){const b=(t.anyOf??t.oneOf??[]).filter(E=>!(E.type==="null"||Array.isArray(E.type)&&E.type.includes("null")));if(b.length===1)return je({...e,schema:b[0]});const w=E=>{if(E.const!==void 0)return E.const;if(E.enum&&E.enum.length===1)return E.enum[0]},k=b.map(w),A=k.every(E=>E!==void 0);if(A&&k.length>0&&k.length<=5){const E=n??t.default;return r`
        <div class="cfg-field">
          ${d?r`<label class="cfg-field__label">${p}</label>`:v}
          ${f?r`<div class="cfg-field__help">${f}</div>`:v}
          <div class="cfg-segmented">
            ${k.map(M=>r`
              <button
                type="button"
                class="cfg-segmented__btn ${M===E||String(M)===String(E)?"active":""}"
                ?disabled=${l}
                @click=${()=>c(s,M)}
              >
                ${String(M)}
              </button>
            `)}
          </div>
        </div>
      `}if(A&&k.length>5)return gi({...e,options:k,value:n??t.default});const T=new Set(b.map(E=>Fe(E)).filter(Boolean)),C=new Set([...T].map(E=>E==="integer"?"number":E));if([...C].every(E=>["string","number","boolean"].includes(E))){const E=C.has("string"),M=C.has("number");if(C.has("boolean")&&C.size===1)return je({...e,schema:{...t,type:"boolean",anyOf:void 0,oneOf:void 0}});if(E||M)return ui({...e,inputType:M&&!E?"number":"text"})}}if(t.enum){const m=t.enum;if(m.length<=5){const b=n??t.default;return r`
        <div class="cfg-field">
          ${d?r`<label class="cfg-field__label">${p}</label>`:v}
          ${f?r`<div class="cfg-field__help">${f}</div>`:v}
          <div class="cfg-segmented">
            ${m.map(w=>r`
              <button
                type="button"
                class="cfg-segmented__btn ${w===b||String(w)===String(b)?"active":""}"
                ?disabled=${l}
                @click=${()=>c(s,w)}
              >
                ${String(w)}
              </button>
            `)}
          </div>
        </div>
      `}return gi({...e,options:m,value:n??t.default})}if(g==="object")return Np(e);if(g==="array")return Fp(e);if(g==="boolean"){const m=typeof n=="boolean"?n:typeof t.default=="boolean"?t.default:!1;return r`
      <label class="cfg-toggle-row ${l?"disabled":""}">
        <div class="cfg-toggle-row__content">
          <span class="cfg-toggle-row__label">${p}</span>
          ${f?r`<span class="cfg-toggle-row__help">${f}</span>`:v}
        </div>
        <div class="cfg-toggle">
          <input
            type="checkbox"
            .checked=${m}
            ?disabled=${l}
            @change=${b=>c(s,b.target.checked)}
          />
          <span class="cfg-toggle__track"></span>
        </div>
      </label>
    `}return g==="number"||g==="integer"?Pp(e):g==="string"?ui({...e,inputType:"text"}):r`
    <div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${p}</div>
      <div class="cfg-field__error">Unsupported type: ${g}. Use Raw mode.</div>
    </div>
  `}function ui(e){const{schema:t,value:n,path:s,hints:a,disabled:o,onPatch:l,inputType:c}=e,d=e.showLabel??!0,g=Ae(s,a),h=et(s,g?.label??t.title??qe(String(s.at(-1)))),p=Xe(s,g?.help??t.description??""),f=g?.sensitive??Tp(s),u=g?.placeholder??(f?"••••":t.default!==void 0?`Default: ${String(t.default)}`:""),m=n??"";return r`
    <div class="cfg-field">
      ${d?r`<label class="cfg-field__label">${h}</label>`:v}
      ${p?r`<div class="cfg-field__help">${p}</div>`:v}
      <div class="cfg-input-wrap">
        <input
          type=${f?"password":c}
          class="cfg-input"
          placeholder=${u}
          .value=${m==null?"":String(m)}
          ?disabled=${o}
          @input=${b=>{const w=b.target.value;if(c==="number"){if(w.trim()===""){l(s,void 0);return}const k=Number(w);l(s,Number.isNaN(k)?w:k);return}l(s,w)}}
          @change=${b=>{if(c==="number")return;const w=b.target.value;l(s,w.trim())}}
        />
        ${t.default!==void 0?r`
          <button
            type="button"
            class="cfg-input__reset"
            title="Reset to default"
            ?disabled=${o}
            @click=${()=>l(s,t.default)}
          >↺</button>
        `:v}
      </div>
    </div>
  `}function Pp(e){const{schema:t,value:n,path:s,hints:a,disabled:o,onPatch:l}=e,c=e.showLabel??!0,d=Ae(s,a),g=et(s,d?.label??t.title??qe(String(s.at(-1)))),h=Xe(s,d?.help??t.description??""),p=n??t.default??"",f=typeof p=="number"?p:0;return r`
    <div class="cfg-field">
      ${c?r`<label class="cfg-field__label">${g}</label>`:v}
      ${h?r`<div class="cfg-field__help">${h}</div>`:v}
      <div class="cfg-number">
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${o}
          @click=${()=>l(s,f-1)}
        >−</button>
        <input
          type="number"
          class="cfg-number__input"
          .value=${p==null?"":String(p)}
          ?disabled=${o}
          @input=${u=>{const m=u.target.value,b=m===""?void 0:Number(m);l(s,b)}}
        />
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${o}
          @click=${()=>l(s,f+1)}
        >+</button>
      </div>
    </div>
  `}function gi(e){const{schema:t,value:n,path:s,hints:a,disabled:o,options:l,onPatch:c}=e,d=e.showLabel??!0,g=Ae(s,a),h=et(s,g?.label??t.title??qe(String(s.at(-1)))),p=Xe(s,g?.help??t.description??""),f=n??t.default,u=l.findIndex(b=>b===f||String(b)===String(f)),m="__unset__";return r`
    <div class="cfg-field">
      ${d?r`<label class="cfg-field__label">${h}</label>`:v}
      ${p?r`<div class="cfg-field__help">${p}</div>`:v}
      <select
        class="cfg-select"
        ?disabled=${o}
        .value=${u>=0?String(u):m}
        @change=${b=>{const w=b.target.value;c(s,w===m?void 0:l[Number(w)])}}
      >
        <option value=${m}>Select...</option>
        ${l.map((b,w)=>r`
          <option value=${String(w)}>${String(b)}</option>
        `)}
      </select>
    </div>
  `}function Np(e){const{schema:t,value:n,path:s,hints:a,unsupported:o,disabled:l,onPatch:c}=e,d=Ae(s,a),g=et(s,d?.label??t.title??qe(String(s.at(-1)))),h=Xe(s,d?.help??t.description??""),p=n??t.default,f=p&&typeof p=="object"&&!Array.isArray(p)?p:{},u=t.properties??{},b=Object.entries(u).toSorted((T,C)=>{const E=Ae([...s,T[0]],a)?.order??0,M=Ae([...s,C[0]],a)?.order??0;return E!==M?E-M:T[0].localeCompare(C[0])}),w=new Set(Object.keys(u)),k=t.additionalProperties,A=!!k&&typeof k=="object";return s.length===1?r`
      <div class="cfg-fields">
        ${b.map(([T,C])=>je({schema:C,value:f[T],path:[...s,T],hints:a,unsupported:o,disabled:l,onPatch:c}))}
        ${A?pi({schema:k,value:f,path:s,hints:a,unsupported:o,disabled:l,reservedKeys:w,onPatch:c}):v}
      </div>
    `:r`
    <details class="cfg-object" open>
      <summary class="cfg-object__header">
        <span class="cfg-object__title">${g}</span>
        <span class="cfg-object__chevron">${cn.chevronDown}</span>
      </summary>
      ${h?r`<div class="cfg-object__help">${h}</div>`:v}
      <div class="cfg-object__content">
        ${b.map(([T,C])=>je({schema:C,value:f[T],path:[...s,T],hints:a,unsupported:o,disabled:l,onPatch:c}))}
        ${A?pi({schema:k,value:f,path:s,hints:a,unsupported:o,disabled:l,reservedKeys:w,onPatch:c}):v}
      </div>
    </details>
  `}function Fp(e){const{schema:t,value:n,path:s,hints:a,unsupported:o,disabled:l,onPatch:c}=e,d=e.showLabel??!0,g=Ae(s,a),h=et(s,g?.label??t.title??qe(String(s.at(-1)))),p=Xe(s,g?.help??t.description??""),f=Array.isArray(t.items)?t.items[0]:t.items;if(!f)return r`
      <div class="cfg-field cfg-field--error">
        <div class="cfg-field__label">${h}</div>
        <div class="cfg-field__error">Unsupported array schema. Use Raw mode.</div>
      </div>
    `;const u=Array.isArray(n)?n:Array.isArray(t.default)?t.default:[];return r`
    <div class="cfg-array">
      <div class="cfg-array__header">
        ${d?r`<span class="cfg-array__label">${h}</span>`:v}
        <span class="cfg-array__count">${u.length} item${u.length!==1?"s":""}</span>
        <button
          type="button"
          class="cfg-array__add"
          ?disabled=${l}
          @click=${()=>{const m=[...u,pr(f)];c(s,m)}}
        >
          <span class="cfg-array__add-icon">${cn.plus}</span>
          Add
        </button>
      </div>
      ${p?r`<div class="cfg-array__help">${p}</div>`:v}

      ${u.length===0?r`
              <div class="cfg-array__empty">No items yet. Click "Add" to create one.</div>
            `:r`
        <div class="cfg-array__items">
          ${u.map((m,b)=>r`
            <div class="cfg-array__item">
              <div class="cfg-array__item-header">
                <span class="cfg-array__item-index">#${b+1}</span>
                <button
                  type="button"
                  class="cfg-array__item-remove"
                  title="Remove item"
                  ?disabled=${l}
                  @click=${()=>{const w=[...u];w.splice(b,1),c(s,w)}}
                >
                  ${cn.trash}
                </button>
              </div>
              <div class="cfg-array__item-content">
                ${je({schema:f,value:m,path:[...s,b],hints:a,unsupported:o,disabled:l,showLabel:!1,onPatch:c})}
              </div>
            </div>
          `)}
        </div>
      `}
    </div>
  `}function pi(e){const{schema:t,value:n,path:s,hints:a,unsupported:o,disabled:l,reservedKeys:c,onPatch:d}=e,g=Dp(t),h=Object.entries(n??{}).filter(([p])=>!c.has(p));return r`
    <div class="cfg-map">
      <div class="cfg-map__header">
        <span class="cfg-map__label">Custom entries</span>
        <button
          type="button"
          class="cfg-map__add"
          ?disabled=${l}
          @click=${()=>{const p={...n};let f=1,u=`custom-${f}`;for(;u in p;)f+=1,u=`custom-${f}`;p[u]=g?{}:pr(t),d(s,p)}}
        >
          <span class="cfg-map__add-icon">${cn.plus}</span>
          Add Entry
        </button>
      </div>

      ${h.length===0?r`
              <div class="cfg-map__empty">No custom entries.</div>
            `:r`
        <div class="cfg-map__items">
          ${h.map(([p,f])=>{const u=[...s,p],m=Rp(f);return r`
              <div class="cfg-map__item">
                <div class="cfg-map__item-key">
                  <input
                    type="text"
                    class="cfg-input cfg-input--sm"
                    placeholder="Key"
                    .value=${p}
                    ?disabled=${l}
                    @change=${b=>{const w=b.target.value.trim();if(!w||w===p)return;const k={...n};w in k||(k[w]=k[p],delete k[p],d(s,k))}}
                  />
                </div>
                <div class="cfg-map__item-value">
                  ${g?r`
                        <textarea
                          class="cfg-textarea cfg-textarea--sm"
                          placeholder="JSON value"
                          rows="2"
                          .value=${m}
                          ?disabled=${l}
                          @change=${b=>{const w=b.target,k=w.value.trim();if(!k){d(u,void 0);return}try{d(u,JSON.parse(k))}catch{w.value=m}}}
                        ></textarea>
                      `:je({schema:t,value:f,path:u,hints:a,unsupported:o,disabled:l,showLabel:!1,onPatch:d})}
                </div>
                <button
                  type="button"
                  class="cfg-map__item-remove"
                  title="Remove entry"
                  ?disabled=${l}
                  @click=${()=>{const b={...n};delete b[p],d(s,b)}}
                >
                  ${cn.trash}
                </button>
              </div>
            `})}
        </div>
      `}
    </div>
  `}const hi={env:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,default:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `};function mi(e){return hi[e]??hi.default}function Op(e,t,n){if(!n)return!0;const s=n.toLowerCase(),a=Ma(e);return e.toLowerCase().includes(s)||a&&(a.label.toLowerCase().includes(s)||a.description.toLowerCase().includes(s))?!0:Qt(t,s)}function Qt(e,t){if(e.title?.toLowerCase().includes(t)||e.description?.toLowerCase().includes(t)||e.enum?.some(s=>String(s).toLowerCase().includes(t)))return!0;if(e.properties){for(const[s,a]of Object.entries(e.properties))if(s.toLowerCase().includes(t)||Qt(a,t))return!0}if(e.items){const s=Array.isArray(e.items)?e.items:[e.items];for(const a of s)if(a&&Qt(a,t))return!0}if(e.additionalProperties&&typeof e.additionalProperties=="object"&&Qt(e.additionalProperties,t))return!0;const n=e.anyOf??e.oneOf??e.allOf;if(n){for(const s of n)if(s&&Qt(s,t))return!0}return!1}function Up(e){if(!e.schema)return r`
      <div class="muted">${i("configSchemaUnavailable")}</div>
    `;const t=e.schema,n=e.value??{};if(Fe(t)!=="object"||!t.properties)return r`
      <div class="callout danger">${i("configUnsupportedSchema")}</div>
    `;const s=new Set(e.unsupportedPaths??[]),a=t.properties,o=e.searchQuery??"",l=e.activeSection,c=e.activeSubsection??null,g=Object.entries(a).toSorted((p,f)=>{const u=Ae([p[0]],e.uiHints)?.order??50,m=Ae([f[0]],e.uiHints)?.order??50;return u!==m?u-m:p[0].localeCompare(f[0])}).filter(([p,f])=>!(l&&p!==l||o&&!Op(p,f,o)));let h=null;if(l&&c&&g.length===1){const p=g[0]?.[1];p&&Fe(p)==="object"&&p.properties&&p.properties[c]&&(h={sectionKey:l,subsectionKey:c,schema:p.properties[c]})}return g.length===0?r`
      <div class="config-empty">
        <div class="config-empty__icon">${ce.search}</div>
        <div class="config-empty__text">
          ${o?`${i("configNoSettingsMatchPrefix")}${o}${i("configNoSettingsMatchSuffix")}`:i("configNoSettingsInSection")}
        </div>
      </div>
    `:r`
    <div class="config-form config-form--modern">
      ${h?(()=>{const{sectionKey:p,subsectionKey:f,schema:u}=h,m=Ae([p,f],e.uiHints),b=et([p,f],m?.label??u.title??qe(f)),w=Xe([p,f],m?.help??u.description??""),k=n[p],A=k&&typeof k=="object"?k[f]:void 0,T=`config-section-${p}-${f}`;return r`
              <section class="config-section-card" id=${T}>
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${mi(p)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${b}</h3>
                    ${w?r`<p class="config-section-card__desc">${w}</p>`:v}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${je({schema:u,value:A,path:[p,f],hints:e.uiHints,unsupported:s,disabled:e.disabled??!1,showLabel:!1,onPatch:e.onPatch})}
                </div>
              </section>
            `})():g.map(([p,f])=>{const u=Ma(p),m=u.label||u.description?u:{label:p.charAt(0).toUpperCase()+p.slice(1),description:f.description??""};return r`
              <section class="config-section-card" id="config-section-${p}">
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${mi(p)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${m.label}</h3>
                    ${m.description?r`<p class="config-section-card__desc">${m.description}</p>`:v}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${je({schema:f,value:n[p],path:[p],hints:e.uiHints,unsupported:s,disabled:e.disabled??!1,showLabel:!1,onPatch:e.onPatch})}
                </div>
              </section>
            `})}
    </div>
  `}const Bp=new Set(["title","description","default","nullable"]);function Hp(e){return Object.keys(e??{}).filter(n=>!Bp.has(n)).length===0}function hr(e){const t=e.filter(a=>a!=null),n=t.length!==e.length,s=[];for(const a of t)s.some(o=>Object.is(o,a))||s.push(a);return{enumValues:s,nullable:n}}function mr(e){return!e||typeof e!="object"?{schema:null,unsupportedPaths:["<root>"]}:en(e,[])}function en(e,t){const n=new Set,s={...e},a=Ft(t)||"<root>";if(e.anyOf||e.oneOf||e.allOf){const c=zp(e,t);return c||{schema:e,unsupportedPaths:[a]}}const o=Array.isArray(e.type)&&e.type.includes("null"),l=Fe(e)??(e.properties||e.additionalProperties?"object":void 0);if(s.type=l??e.type,s.nullable=o||e.nullable,s.enum){const{enumValues:c,nullable:d}=hr(s.enum);s.enum=c,d&&(s.nullable=!0),c.length===0&&n.add(a)}if(l==="object"){const c=e.properties??{},d={};for(const[g,h]of Object.entries(c)){const p=en(h,[...t,g]);p.schema&&(d[g]=p.schema);for(const f of p.unsupportedPaths)n.add(f)}if(s.properties=d,e.additionalProperties===!0)n.add(a);else if(e.additionalProperties===!1)s.additionalProperties=!1;else if(e.additionalProperties&&typeof e.additionalProperties=="object"&&!Hp(e.additionalProperties)){const g=en(e.additionalProperties,[...t,"*"]);s.additionalProperties=g.schema??e.additionalProperties,g.unsupportedPaths.length>0&&n.add(a)}}else if(l==="array"){const c=Array.isArray(e.items)?e.items[0]:e.items;if(!c)n.add(a);else{const d=en(c,[...t,"*"]);s.items=d.schema??c,d.unsupportedPaths.length>0&&n.add(a)}}else l!=="string"&&l!=="number"&&l!=="integer"&&l!=="boolean"&&!s.enum&&n.add(a);return{schema:s,unsupportedPaths:Array.from(n)}}function zp(e,t){if(e.allOf)return null;const n=e.anyOf??e.oneOf;if(!n)return null;const s=[],a=[];let o=!1;for(const c of n){if(!c||typeof c!="object")return null;if(Array.isArray(c.enum)){const{enumValues:d,nullable:g}=hr(c.enum);s.push(...d),g&&(o=!0);continue}if("const"in c){if(c.const==null){o=!0;continue}s.push(c.const);continue}if(Fe(c)==="null"){o=!0;continue}a.push(c)}if(s.length>0&&a.length===0){const c=[];for(const d of s)c.some(g=>Object.is(g,d))||c.push(d);return{schema:{...e,enum:c,nullable:o,anyOf:void 0,oneOf:void 0,allOf:void 0},unsupportedPaths:[]}}if(a.length===1){const c=en(a[0],t);return c.schema&&(c.schema.nullable=o||c.schema.nullable),c}const l=new Set(["string","number","integer","boolean"]);return a.length>0&&s.length===0&&a.every(c=>c.type&&l.has(String(c.type)))?{schema:{...e,nullable:o},unsupportedPaths:[]}:null}function Wp(e,t){let n=e;for(const s of t){if(!n)return null;const a=Fe(n);if(a==="object"){const o=n.properties??{};if(typeof s=="string"&&o[s]){n=o[s];continue}const l=n.additionalProperties;if(typeof s=="string"&&l&&typeof l=="object"){n=l;continue}return null}if(a==="array"){if(typeof s!="number")return null;n=(Array.isArray(n.items)?n.items[0]:n.items)??null;continue}return null}return n}function Kp(e,t){const s=(e.channels??{})[t],a=e[t];return(s&&typeof s=="object"?s:null)??(a&&typeof a=="object"?a:null)??{}}const jp=["groupPolicy","streamMode","dmPolicy"];function qp(e){if(e==null)return i("commonNA");if(typeof e=="string"||typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)}catch{return i("commonNA")}}function Gp(e){const t=jp.flatMap(n=>n in e?[[n,e[n]]]:[]);return t.length===0?null:r`
    <div class="status-list" style="margin-top: 12px;">
      ${t.map(([n,s])=>r`
          <div>
            <span class="label">${n}</span>
            <span>${qp(s)}</span>
          </div>
        `)}
    </div>
  `}function Vp(e){const t=mr(e.schema),n=t.schema;if(!n)return r`
      <div class="callout danger">${i("channelsSchemaUnavailable")}</div>
    `;const s=Wp(n,["channels",e.channelId]);if(!s)return r`
      <div class="callout danger">${i("channelsConfigSchemaUnavailable")}</div>
    `;const a=e.configValue??{},o=Kp(a,e.channelId);return r`
    <div class="config-form">
      ${je({schema:s,value:o,path:["channels",e.channelId],hints:e.uiHints,unsupported:new Set(t.unsupportedPaths),disabled:e.disabled,showLabel:!1,onPatch:e.onPatch})}
    </div>
    ${Gp(o)}
  `}function Ge(e){const{channelId:t,props:n}=e,s=n.configSaving||n.configSchemaLoading;return r`
    <div style="margin-top: 16px;">
      ${n.configSchemaLoading?r`
              <div class="muted">${i("channelsLoadingConfigSchema")}</div>
            `:Vp({channelId:t,configValue:n.configForm,schema:n.configSchema,uiHints:n.configUiHints,disabled:s,onPatch:n.onConfigPatch})}
      <div class="row" style="margin-top: 12px;">
        <button
          class="btn primary"
          ?disabled=${s||!n.configFormDirty}
          @click=${()=>n.onConfigSave()}
        >
          ${n.configSaving?i("commonSaving"):i("commonSave")}
        </button>
        <button
          class="btn"
          ?disabled=${s}
          @click=${()=>n.onConfigReload()}
        >
          ${i("commonReload")}
        </button>
      </div>
    </div>
  `}function Qp(e){const{props:t,discord:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">${i("channelDiscord")}</div>
      <div class="card-sub">${i("channelDiscordSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${i("channelConfigured")}</span>
          <span>${n?.configured?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelRunning")}</span>
          <span>${n?.running?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastStart")}</span>
          <span>${n?.lastStartAt?Q(n.lastStartAt):i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastProbe")}</span>
          <span>${n?.lastProbeAt?Q(n.lastProbeAt):i("commonNA")}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            ${i("channelProbe")} ${n.probe.ok?i("channelProbeOk"):i("channelProbeFailed")} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      ${Ge({channelId:"discord",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("channelProbe")}
        </button>
      </div>
    </div>
  `}function Yp(e){const{props:t,googleChat:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">${i("channelGoogleChat")}</div>
      <div class="card-sub">${i("channelGoogleChatSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${i("channelConfigured")}</span>
          <span>${n?n.configured?i("commonYes"):i("commonNo"):i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelRunning")}</span>
          <span>${n?n.running?i("commonYes"):i("commonNo"):i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelCredential")}</span>
          <span>${n?.credentialSource??i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelAudience")}</span>
          <span>
            ${n?.audienceType?`${n.audienceType}${n.audience?` · ${n.audience}`:""}`:i("commonNA")}
          </span>
        </div>
        <div>
          <span class="label">${i("channelLastStart")}</span>
          <span>${n?.lastStartAt?Q(n.lastStartAt):i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastProbe")}</span>
          <span>${n?.lastProbeAt?Q(n.lastProbeAt):i("commonNA")}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            ${i("channelProbe")} ${n.probe.ok?i("channelProbeOk"):i("channelProbeFailed")} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      ${Ge({channelId:"googlechat",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("channelProbe")}
        </button>
      </div>
    </div>
  `}function Jp(e){const{props:t,imessage:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">${i("channelIMessage")}</div>
      <div class="card-sub">${i("channelIMessageSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${i("channelConfigured")}</span>
          <span>${n?.configured?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelRunning")}</span>
          <span>${n?.running?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastStart")}</span>
          <span>${n?.lastStartAt?Q(n.lastStartAt):i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastProbe")}</span>
          <span>${n?.lastProbeAt?Q(n.lastProbeAt):i("commonNA")}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            ${i("channelProbe")} ${n.probe.ok?i("channelProbeOk"):i("channelProbeFailed")} ·
            ${n.probe.error??""}
          </div>`:v}

      ${Ge({channelId:"imessage",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("channelProbe")}
        </button>
      </div>
    </div>
  `}function fi(e){return e?e.length<=20?e:`${e.slice(0,8)}...${e.slice(-8)}`:i("commonNA")}function Zp(e){const{props:t,nostr:n,nostrAccounts:s,accountCountLabel:a,profileFormState:o,profileFormCallbacks:l,onEditProfile:c}=e,d=s[0],g=n?.configured??d?.configured??!1,h=n?.running??d?.running??!1,p=n?.publicKey??d?.publicKey,f=n?.lastStartAt??d?.lastStartAt??null,u=n?.lastError??d?.lastError??null,m=s.length>1,b=o!=null,w=A=>{const T=A.publicKey,C=A.profile,E=C?.displayName??C?.name??A.name??A.accountId;return r`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">${E}</div>
          <div class="account-card-id">${A.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">${i("channelRunning")}</span>
            <span>${A.running?i("commonYes"):i("commonNo")}</span>
          </div>
          <div>
            <span class="label">${i("channelConfigured")}</span>
            <span>${A.configured?i("commonYes"):i("commonNo")}</span>
          </div>
          <div>
            <span class="label">${i("channelPublicKey")}</span>
            <span class="monospace" title="${T??""}">${fi(T)}</span>
          </div>
          <div>
            <span class="label">${i("channelLastInbound")}</span>
            <span>${A.lastInboundAt?Q(A.lastInboundAt):i("commonNA")}</span>
          </div>
          ${A.lastError?r`
                <div class="account-card-error">${A.lastError}</div>
              `:v}
        </div>
      </div>
    `},k=()=>{if(b&&l)return Nc({state:o,callbacks:l,accountId:s[0]?.accountId??"default"});const A=d?.profile??n?.profile,{name:T,displayName:C,about:E,picture:M,nip05:D}=A??{},z=T||C||E||M||D;return r`
      <div style="margin-top: 16px; padding: 12px; background: var(--bg-secondary); border-radius: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div style="font-weight: 500;">${i("nostrProfile")}</div>
          ${g?r`
                <button
                  class="btn btn-sm"
                  @click=${c}
                  style="font-size: 12px; padding: 4px 8px;"
                >
                  ${i("nostrEditProfile")}
                </button>
              `:v}
        </div>
        ${z?r`
              <div class="status-list">
                ${M?r`
                      <div style="margin-bottom: 8px;">
                        <img
                          src=${M}
                          alt=${i("nostrProfilePreview")}
                          style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
                          @error=${J=>{J.target.style.display="none"}}
                        />
                      </div>
                    `:v}
                ${T?r`<div><span class="label">${i("nostrName")}</span><span>${T}</span></div>`:v}
                ${C?r`<div><span class="label">${i("nostrDisplayName")}</span><span>${C}</span></div>`:v}
                ${E?r`<div><span class="label">${i("nostrAbout")}</span><span style="max-width: 300px; overflow: hidden; text-overflow: ellipsis;">${E}</span></div>`:v}
                ${D?r`<div><span class="label">${i("nostrNip05")}</span><span>${D}</span></div>`:v}
              </div>
            `:r`
                <div style="color: var(--text-muted); font-size: 13px">
                  ${i("nostrNoProfileSet")}
                </div>
              `}
      </div>
    `};return r`
    <div class="card">
      <div class="card-title">${i("channelNostr")}</div>
      <div class="card-sub">${i("channelNostrSub")}</div>
      ${a}

      ${m?r`
            <div class="account-card-list">
              ${s.map(A=>w(A))}
            </div>
          `:r`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">${i("channelConfigured")}</span>
                <span>${i(g?"commonYes":"commonNo")}</span>
              </div>
              <div>
                <span class="label">${i("channelRunning")}</span>
                <span>${i(h?"commonYes":"commonNo")}</span>
              </div>
              <div>
                <span class="label">${i("channelPublicKey")}</span>
                <span class="monospace" title="${p??""}"
                  >${fi(p)}</span
                >
              </div>
              <div>
                <span class="label">${i("channelLastStart")}</span>
                <span>${f?Q(f):i("commonNA")}</span>
              </div>
            </div>
          `}

      ${u?r`<div class="callout danger" style="margin-top: 12px;">${u}</div>`:v}

      ${k()}

      ${Ge({channelId:"nostr",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!1)}>${i("commonRefresh")}</button>
      </div>
    </div>
  `}function Xp(e){if(!e&&e!==0)return i("commonNA");const t=Math.round(e/1e3);if(t<60)return`${t}s`;const n=Math.round(t/60);return n<60?`${n}m`:`${Math.round(n/60)}h`}function eh(e,t){const n=t.snapshot,s=n?.channels;if(!n||!s)return!1;const a=s[e],o=typeof a?.configured=="boolean"&&a.configured,l=typeof a?.running=="boolean"&&a.running,c=typeof a?.connected=="boolean"&&a.connected,g=(n.channelAccounts?.[e]??[]).some(h=>h.configured||h.running||h.connected);return o||l||c||g}function th(e,t){return t?.[e]?.length??0}function fr(e,t){const n=th(e,t);return n<2?v:r`<div class="account-count">${i("channelAccounts")} (${n})</div>`}function nh(e){const{props:t,signal:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">${i("channelSignal")}</div>
      <div class="card-sub">${i("channelSignalSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${i("channelConfigured")}</span>
          <span>${n?.configured?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelRunning")}</span>
          <span>${n?.running?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelBaseUrl")}</span>
          <span>${n?.baseUrl??i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastStart")}</span>
          <span>${n?.lastStartAt?Q(n.lastStartAt):i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastProbe")}</span>
          <span>${n?.lastProbeAt?Q(n.lastProbeAt):i("commonNA")}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            ${i("channelProbe")} ${n.probe.ok?i("channelProbeOk"):i("channelProbeFailed")} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      ${Ge({channelId:"signal",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("channelProbe")}
        </button>
      </div>
    </div>
  `}function sh(e){const{props:t,slack:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">${i("channelSlack")}</div>
      <div class="card-sub">${i("channelSlackSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${i("channelConfigured")}</span>
          <span>${n?.configured?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelRunning")}</span>
          <span>${n?.running?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastStart")}</span>
          <span>${n?.lastStartAt?Q(n.lastStartAt):i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastProbe")}</span>
          <span>${n?.lastProbeAt?Q(n.lastProbeAt):i("commonNA")}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            ${i("channelProbe")} ${n.probe.ok?i("channelProbeOk"):i("channelProbeFailed")} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      ${Ge({channelId:"slack",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("channelProbe")}
        </button>
      </div>
    </div>
  `}function ah(e){const{props:t,telegram:n,telegramAccounts:s,accountCountLabel:a}=e,o=s.length>1,l=c=>{const g=c.probe?.bot?.username,h=c.name||c.accountId;return r`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">
            ${g?`@${g}`:h}
          </div>
          <div class="account-card-id">${c.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">${i("channelRunning")}</span>
            <span>${c.running?i("commonYes"):i("commonNo")}</span>
          </div>
          <div>
            <span class="label">${i("channelConfigured")}</span>
            <span>${c.configured?i("commonYes"):i("commonNo")}</span>
          </div>
          <div>
            <span class="label">${i("channelLastInbound")}</span>
            <span>${c.lastInboundAt?Q(c.lastInboundAt):i("commonNA")}</span>
          </div>
          ${c.lastError?r`
                <div class="account-card-error">
                  ${c.lastError}
                </div>
              `:v}
        </div>
      </div>
    `};return r`
    <div class="card">
      <div class="card-title">${i("channelTelegram")}</div>
      <div class="card-sub">${i("channelTelegramSub")}</div>
      ${a}

      ${o?r`
            <div class="account-card-list">
              ${s.map(c=>l(c))}
            </div>
          `:r`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">${i("channelConfigured")}</span>
                <span>${n?.configured?i("commonYes"):i("commonNo")}</span>
              </div>
              <div>
                <span class="label">${i("channelRunning")}</span>
                <span>${n?.running?i("commonYes"):i("commonNo")}</span>
              </div>
              <div>
                <span class="label">${i("channelMode")}</span>
                <span>${n?.mode??i("commonNA")}</span>
              </div>
              <div>
                <span class="label">${i("channelLastStart")}</span>
                <span>${n?.lastStartAt?Q(n.lastStartAt):i("commonNA")}</span>
              </div>
              <div>
                <span class="label">${i("channelLastProbe")}</span>
                <span>${n?.lastProbeAt?Q(n.lastProbeAt):i("commonNA")}</span>
              </div>
            </div>
          `}

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            ${i("channelProbe")} ${n.probe.ok?i("channelProbeOk"):i("channelProbeFailed")} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      ${Ge({channelId:"telegram",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("channelProbe")}
        </button>
      </div>
    </div>
  `}function oh(e){const{props:t,whatsapp:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">${i("channelWhatsApp")}</div>
      <div class="card-sub">${i("channelWhatsAppSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${i("channelConfigured")}</span>
          <span>${n?.configured?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelLinked")}</span>
          <span>${n?.linked?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelRunning")}</span>
          <span>${n?.running?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelConnected")}</span>
          <span>${n?.connected?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastConnect")}</span>
          <span>
            ${n?.lastConnectedAt?Q(n.lastConnectedAt):i("commonNA")}
          </span>
        </div>
        <div>
          <span class="label">${i("channelLastMessage")}</span>
          <span>
            ${n?.lastMessageAt?Q(n.lastMessageAt):i("commonNA")}
          </span>
        </div>
        <div>
          <span class="label">${i("channelAuthAge")}</span>
          <span>
            ${n?.authAgeMs!=null?Xp(n.authAgeMs):i("commonNA")}
          </span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${t.whatsappMessage?r`<div class="callout" style="margin-top: 12px;">
            ${t.whatsappMessage}
          </div>`:v}

      ${t.whatsappQrDataUrl?r`<div class="qr-wrap">
            <img src=${t.whatsappQrDataUrl} alt="WhatsApp QR" />
          </div>`:v}

      <div class="row" style="margin-top: 14px; flex-wrap: wrap;">
        <button
          class="btn primary"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppStart(!1)}
        >
          ${t.whatsappBusy?i("channelWhatsAppWorking"):i("channelShowQr")}
        </button>
        <button
          class="btn"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppStart(!0)}
        >
          ${i("channelRelink")}
        </button>
        <button
          class="btn"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppWait()}
        >
          ${i("channelWaitForScan")}
        </button>
        <button
          class="btn danger"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppLogout()}
        >
          ${i("channelLogout")}
        </button>
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("commonRefresh")}
        </button>
      </div>

      ${Ge({channelId:"whatsapp",props:t})}
    </div>
  `}function ih(e){const t=e.snapshot?.channels,n=t?.whatsapp??void 0,s=t?.telegram??void 0,a=t?.discord??null,o=t?.googlechat??null,l=t?.slack??null,c=t?.signal??null,d=t?.imessage??null,g=t?.nostr??null,p=lh(e.snapshot).map((f,u)=>({key:f,enabled:eh(f,e),order:u})).toSorted((f,u)=>f.enabled!==u.enabled?f.enabled?-1:1:f.order-u.order);return r`
    <section class="grid grid-cols-2">
      ${p.map(f=>rh(f.key,e,{whatsapp:n,telegram:s,discord:a,googlechat:o,slack:l,signal:c,imessage:d,nostr:g,channelAccounts:e.snapshot?.channelAccounts??null}))}
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${i("channelsHealth")}</div>
          <div class="card-sub">${i("channelsHealthSub")}</div>
        </div>
        <div class="muted">${e.lastSuccessAt?Q(e.lastSuccessAt):i("commonNA")}</div>
      </div>
      ${e.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${e.lastError}
          </div>`:v}
      <pre class="code-block" style="margin-top: 12px;">
${e.snapshot?JSON.stringify(e.snapshot,null,2):i("channelsNoSnapshot")}
      </pre>
    </section>
  `}function lh(e){return e?.channelMeta?.length?e.channelMeta.map(t=>t.id):e?.channelOrder?.length?e.channelOrder:["whatsapp","telegram","discord","googlechat","slack","signal","imessage","nostr"]}function rh(e,t,n){const s=fr(e,n.channelAccounts);switch(e){case"whatsapp":return oh({props:t,whatsapp:n.whatsapp,accountCountLabel:s});case"telegram":return ah({props:t,telegram:n.telegram,telegramAccounts:n.channelAccounts?.telegram??[],accountCountLabel:s});case"discord":return Qp({props:t,discord:n.discord,accountCountLabel:s});case"googlechat":return Yp({props:t,googleChat:n.googlechat,accountCountLabel:s});case"slack":return sh({props:t,slack:n.slack,accountCountLabel:s});case"signal":return nh({props:t,signal:n.signal,accountCountLabel:s});case"imessage":return Jp({props:t,imessage:n.imessage,accountCountLabel:s});case"nostr":{const a=n.channelAccounts?.nostr??[],o=a[0],l=o?.accountId??"default",c=o?.profile??null,d=t.nostrProfileAccountId===l?t.nostrProfileFormState:null,g=d?{onFieldChange:t.onNostrProfileFieldChange,onSave:t.onNostrProfileSave,onImport:t.onNostrProfileImport,onCancel:t.onNostrProfileCancel,onToggleAdvanced:t.onNostrProfileToggleAdvanced}:null;return Zp({props:t,nostr:n.nostr,nostrAccounts:a,accountCountLabel:s,profileFormState:d,profileFormCallbacks:g,onEditProfile:()=>t.onNostrProfileEdit(l,c)})}default:return ch(e,t,n.channelAccounts??{})}}function ch(e,t,n){const s=uh(t.snapshot,e),a=t.snapshot?.channels?.[e],o=typeof a?.configured=="boolean"?a.configured:void 0,l=typeof a?.running=="boolean"?a.running:void 0,c=typeof a?.connected=="boolean"?a.connected:void 0,d=typeof a?.lastError=="string"?a.lastError:void 0,g=n[e]??[],h=fr(e,n);return r`
    <div class="card">
      <div class="card-title">${s}</div>
      <div class="card-sub">Channel status and configuration.</div>
      ${h}

      ${g.length>0?r`
            <div class="account-card-list">
              ${g.map(p=>mh(p))}
            </div>
          `:r`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">Configured</span>
                <span>${o==null?"n/a":o?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Running</span>
                <span>${l==null?"n/a":l?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Connected</span>
                <span>${c==null?"n/a":c?"Yes":"No"}</span>
              </div>
            </div>
          `}

      ${d?r`<div class="callout danger" style="margin-top: 12px;">
            ${d}
          </div>`:v}

      ${Ge({channelId:e,props:t})}
    </div>
  `}function dh(e){return e?.channelMeta?.length?Object.fromEntries(e.channelMeta.map(t=>[t.id,t])):{}}function uh(e,t){return dh(e)[t]?.label??e?.channelLabels?.[t]??t}const gh=600*1e3;function vr(e){return e.lastInboundAt?Date.now()-e.lastInboundAt<gh:!1}function ph(e){return e.running?"Yes":vr(e)?"Active":"No"}function hh(e){return e.connected===!0?"Yes":e.connected===!1?"No":vr(e)?"Active":"n/a"}function mh(e){const t=ph(e),n=hh(e);return r`
    <div class="account-card">
      <div class="account-card-header">
        <div class="account-card-title">${e.name||e.accountId}</div>
        <div class="account-card-id">${e.accountId}</div>
      </div>
      <div class="status-list account-card-status">
        <div>
          <span class="label">Running</span>
          <span>${t}</span>
        </div>
        <div>
          <span class="label">Configured</span>
          <span>${e.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Connected</span>
          <span>${n}</span>
        </div>
        <div>
          <span class="label">Last inbound</span>
          <span>${e.lastInboundAt?Q(e.lastInboundAt):"n/a"}</span>
        </div>
        ${e.lastError?r`
              <div class="account-card-error">
                ${e.lastError}
              </div>
            `:v}
      </div>
    </div>
  `}const tn=(e,t)=>{const n=e._$AN;if(n===void 0)return!1;for(const s of n)s._$AO?.(t,!1),tn(s,t);return!0},Kn=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},br=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),bh(t)}};function fh(e){this._$AN!==void 0?(Kn(this),this._$AM=e,br(this)):this._$AM=e}function vh(e,t=!1,n=0){const s=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(s))for(let o=n;o<s.length;o++)tn(s[o],!1),Kn(s[o]);else s!=null&&(tn(s,!1),Kn(s));else tn(this,e)}const bh=e=>{e.type==qa.CHILD&&(e._$AP??=vh,e._$AQ??=fh)};class yh extends Va{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,s){super._$AT(t,n,s),br(this),this.isConnected=t._$AU}_$AO(t,n=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),n&&(tn(this,t),Kn(this))}setValue(t){if(Sg(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const Ns=new WeakMap,xh=Ga(class extends yh{render(e){return v}update(e,[t]){const n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),v}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=Ns.get(t);n===void 0&&(n=new WeakMap,Ns.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Ns.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class da extends Va{constructor(t){if(super(t),this.it=v,t.type!==qa.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===v||t==null)return this._t=void 0,this.it=t;if(t===Ye)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}da.directiveName="unsafeHTML",da.resultType=1;const ua=Ga(da);const{entries:yr,setPrototypeOf:vi,isFrozen:wh,getPrototypeOf:$h,getOwnPropertyDescriptor:Sh}=Object;let{freeze:ve,seal:Ce,create:ga}=Object,{apply:pa,construct:ha}=typeof Reflect<"u"&&Reflect;ve||(ve=function(t){return t});Ce||(Ce=function(t){return t});pa||(pa=function(t,n){for(var s=arguments.length,a=new Array(s>2?s-2:0),o=2;o<s;o++)a[o-2]=arguments[o];return t.apply(n,a)});ha||(ha=function(t){for(var n=arguments.length,s=new Array(n>1?n-1:0),a=1;a<n;a++)s[a-1]=arguments[a];return new t(...s)});const Tn=be(Array.prototype.forEach),kh=be(Array.prototype.lastIndexOf),bi=be(Array.prototype.pop),zt=be(Array.prototype.push),Ah=be(Array.prototype.splice),Fn=be(String.prototype.toLowerCase),Fs=be(String.prototype.toString),Os=be(String.prototype.match),Wt=be(String.prototype.replace),Ch=be(String.prototype.indexOf),Th=be(String.prototype.trim),Te=be(Object.prototype.hasOwnProperty),me=be(RegExp.prototype.test),Kt=Mh(TypeError);function be(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,s=new Array(n>1?n-1:0),a=1;a<n;a++)s[a-1]=arguments[a];return pa(e,t,s)}}function Mh(e){return function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return ha(e,n)}}function j(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Fn;vi&&vi(e,null);let s=t.length;for(;s--;){let a=t[s];if(typeof a=="string"){const o=n(a);o!==a&&(wh(t)||(t[s]=o),a=o)}e[a]=!0}return e}function Eh(e){for(let t=0;t<e.length;t++)Te(e,t)||(e[t]=null);return e}function Re(e){const t=ga(null);for(const[n,s]of yr(e))Te(e,n)&&(Array.isArray(s)?t[n]=Eh(s):s&&typeof s=="object"&&s.constructor===Object?t[n]=Re(s):t[n]=s);return t}function jt(e,t){for(;e!==null;){const s=Sh(e,t);if(s){if(s.get)return be(s.get);if(typeof s.value=="function")return be(s.value)}e=$h(e)}function n(){return null}return n}const yi=ve(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Us=ve(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Bs=ve(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Lh=ve(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Hs=ve(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Ih=ve(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),xi=ve(["#text"]),wi=ve(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),zs=ve(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),$i=ve(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Mn=ve(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),_h=Ce(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Dh=Ce(/<%[\w\W]*|[\w\W]*%>/gm),Rh=Ce(/\$\{[\w\W]*/gm),Ph=Ce(/^data-[\-\w.\u00B7-\uFFFF]+$/),Nh=Ce(/^aria-[\-\w]+$/),xr=Ce(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Fh=Ce(/^(?:\w+script|data):/i),Oh=Ce(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),wr=Ce(/^html$/i),Uh=Ce(/^[a-z][.\w]*(-[.\w]+)+$/i);var Si=Object.freeze({__proto__:null,ARIA_ATTR:Nh,ATTR_WHITESPACE:Oh,CUSTOM_ELEMENT:Uh,DATA_ATTR:Ph,DOCTYPE_NAME:wr,ERB_EXPR:Dh,IS_ALLOWED_URI:xr,IS_SCRIPT_OR_DATA:Fh,MUSTACHE_EXPR:_h,TMPLIT_EXPR:Rh});const qt={element:1,text:3,progressingInstruction:7,comment:8,document:9},Bh=function(){return typeof window>"u"?null:window},Hh=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let s=null;const a="data-tt-policy-suffix";n&&n.hasAttribute(a)&&(s=n.getAttribute(a));const o="dompurify"+(s?"#"+s:"");try{return t.createPolicy(o,{createHTML(l){return l},createScriptURL(l){return l}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},ki=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function $r(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Bh();const t=H=>$r(H);if(t.version="3.3.1",t.removed=[],!e||!e.document||e.document.nodeType!==qt.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const s=n,a=s.currentScript,{DocumentFragment:o,HTMLTemplateElement:l,Node:c,Element:d,NodeFilter:g,NamedNodeMap:h=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:p,DOMParser:f,trustedTypes:u}=e,m=d.prototype,b=jt(m,"cloneNode"),w=jt(m,"remove"),k=jt(m,"nextSibling"),A=jt(m,"childNodes"),T=jt(m,"parentNode");if(typeof l=="function"){const H=n.createElement("template");H.content&&H.content.ownerDocument&&(n=H.content.ownerDocument)}let C,E="";const{implementation:M,createNodeIterator:D,createDocumentFragment:z,getElementsByTagName:J}=n,{importNode:ae}=s;let F=ki();t.isSupported=typeof yr=="function"&&typeof T=="function"&&M&&M.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:W,ERB_EXPR:de,TMPLIT_EXPR:L,DATA_ATTR:B,ARIA_ATTR:oe,IS_SCRIPT_OR_DATA:ie,ATTR_WHITESPACE:X,CUSTOM_ELEMENT:ne}=Si;let{IS_ALLOWED_URI:_}=Si,R=null;const P=j({},[...yi,...Us,...Bs,...Hs,...xi]);let K=null;const we=j({},[...wi,...zs,...$i,...Mn]);let Y=Object.seal(ga(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Se=null,ee=null;const he=Object.seal(ga(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Oe=!0,Ue=!0,tt=!1,uo=!0,kt=!1,mn=!0,nt=!1,ps=!1,hs=!1,At=!1,fn=!1,vn=!1,go=!0,po=!1;const jr="user-content-";let ms=!0,Ot=!1,Ct={},Ie=null;const fs=j({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let ho=null;const mo=j({},["audio","video","img","source","image","track"]);let vs=null;const fo=j({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),bn="http://www.w3.org/1998/Math/MathML",yn="http://www.w3.org/2000/svg",Be="http://www.w3.org/1999/xhtml";let Tt=Be,bs=!1,ys=null;const qr=j({},[bn,yn,Be],Fs);let xn=j({},["mi","mo","mn","ms","mtext"]),wn=j({},["annotation-xml"]);const Gr=j({},["title","style","font","a","script"]);let Ut=null;const Vr=["application/xhtml+xml","text/html"],Qr="text/html";let se=null,Mt=null;const Yr=n.createElement("form"),vo=function(y){return y instanceof RegExp||y instanceof Function},xs=function(){let y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Mt&&Mt===y)){if((!y||typeof y!="object")&&(y={}),y=Re(y),Ut=Vr.indexOf(y.PARSER_MEDIA_TYPE)===-1?Qr:y.PARSER_MEDIA_TYPE,se=Ut==="application/xhtml+xml"?Fs:Fn,R=Te(y,"ALLOWED_TAGS")?j({},y.ALLOWED_TAGS,se):P,K=Te(y,"ALLOWED_ATTR")?j({},y.ALLOWED_ATTR,se):we,ys=Te(y,"ALLOWED_NAMESPACES")?j({},y.ALLOWED_NAMESPACES,Fs):qr,vs=Te(y,"ADD_URI_SAFE_ATTR")?j(Re(fo),y.ADD_URI_SAFE_ATTR,se):fo,ho=Te(y,"ADD_DATA_URI_TAGS")?j(Re(mo),y.ADD_DATA_URI_TAGS,se):mo,Ie=Te(y,"FORBID_CONTENTS")?j({},y.FORBID_CONTENTS,se):fs,Se=Te(y,"FORBID_TAGS")?j({},y.FORBID_TAGS,se):Re({}),ee=Te(y,"FORBID_ATTR")?j({},y.FORBID_ATTR,se):Re({}),Ct=Te(y,"USE_PROFILES")?y.USE_PROFILES:!1,Oe=y.ALLOW_ARIA_ATTR!==!1,Ue=y.ALLOW_DATA_ATTR!==!1,tt=y.ALLOW_UNKNOWN_PROTOCOLS||!1,uo=y.ALLOW_SELF_CLOSE_IN_ATTR!==!1,kt=y.SAFE_FOR_TEMPLATES||!1,mn=y.SAFE_FOR_XML!==!1,nt=y.WHOLE_DOCUMENT||!1,At=y.RETURN_DOM||!1,fn=y.RETURN_DOM_FRAGMENT||!1,vn=y.RETURN_TRUSTED_TYPE||!1,hs=y.FORCE_BODY||!1,go=y.SANITIZE_DOM!==!1,po=y.SANITIZE_NAMED_PROPS||!1,ms=y.KEEP_CONTENT!==!1,Ot=y.IN_PLACE||!1,_=y.ALLOWED_URI_REGEXP||xr,Tt=y.NAMESPACE||Be,xn=y.MATHML_TEXT_INTEGRATION_POINTS||xn,wn=y.HTML_INTEGRATION_POINTS||wn,Y=y.CUSTOM_ELEMENT_HANDLING||{},y.CUSTOM_ELEMENT_HANDLING&&vo(y.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Y.tagNameCheck=y.CUSTOM_ELEMENT_HANDLING.tagNameCheck),y.CUSTOM_ELEMENT_HANDLING&&vo(y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Y.attributeNameCheck=y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),y.CUSTOM_ELEMENT_HANDLING&&typeof y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(Y.allowCustomizedBuiltInElements=y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),kt&&(Ue=!1),fn&&(At=!0),Ct&&(R=j({},xi),K=[],Ct.html===!0&&(j(R,yi),j(K,wi)),Ct.svg===!0&&(j(R,Us),j(K,zs),j(K,Mn)),Ct.svgFilters===!0&&(j(R,Bs),j(K,zs),j(K,Mn)),Ct.mathMl===!0&&(j(R,Hs),j(K,$i),j(K,Mn))),y.ADD_TAGS&&(typeof y.ADD_TAGS=="function"?he.tagCheck=y.ADD_TAGS:(R===P&&(R=Re(R)),j(R,y.ADD_TAGS,se))),y.ADD_ATTR&&(typeof y.ADD_ATTR=="function"?he.attributeCheck=y.ADD_ATTR:(K===we&&(K=Re(K)),j(K,y.ADD_ATTR,se))),y.ADD_URI_SAFE_ATTR&&j(vs,y.ADD_URI_SAFE_ATTR,se),y.FORBID_CONTENTS&&(Ie===fs&&(Ie=Re(Ie)),j(Ie,y.FORBID_CONTENTS,se)),y.ADD_FORBID_CONTENTS&&(Ie===fs&&(Ie=Re(Ie)),j(Ie,y.ADD_FORBID_CONTENTS,se)),ms&&(R["#text"]=!0),nt&&j(R,["html","head","body"]),R.table&&(j(R,["tbody"]),delete Se.tbody),y.TRUSTED_TYPES_POLICY){if(typeof y.TRUSTED_TYPES_POLICY.createHTML!="function")throw Kt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof y.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Kt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');C=y.TRUSTED_TYPES_POLICY,E=C.createHTML("")}else C===void 0&&(C=Hh(u,a)),C!==null&&typeof E=="string"&&(E=C.createHTML(""));ve&&ve(y),Mt=y}},bo=j({},[...Us,...Bs,...Lh]),yo=j({},[...Hs,...Ih]),Jr=function(y){let I=T(y);(!I||!I.tagName)&&(I={namespaceURI:Tt,tagName:"template"});const O=Fn(y.tagName),Z=Fn(I.tagName);return ys[y.namespaceURI]?y.namespaceURI===yn?I.namespaceURI===Be?O==="svg":I.namespaceURI===bn?O==="svg"&&(Z==="annotation-xml"||xn[Z]):!!bo[O]:y.namespaceURI===bn?I.namespaceURI===Be?O==="math":I.namespaceURI===yn?O==="math"&&wn[Z]:!!yo[O]:y.namespaceURI===Be?I.namespaceURI===yn&&!wn[Z]||I.namespaceURI===bn&&!xn[Z]?!1:!yo[O]&&(Gr[O]||!bo[O]):!!(Ut==="application/xhtml+xml"&&ys[y.namespaceURI]):!1},_e=function(y){zt(t.removed,{element:y});try{T(y).removeChild(y)}catch{w(y)}},st=function(y,I){try{zt(t.removed,{attribute:I.getAttributeNode(y),from:I})}catch{zt(t.removed,{attribute:null,from:I})}if(I.removeAttribute(y),y==="is")if(At||fn)try{_e(I)}catch{}else try{I.setAttribute(y,"")}catch{}},xo=function(y){let I=null,O=null;if(hs)y="<remove></remove>"+y;else{const te=Os(y,/^[\r\n\t ]+/);O=te&&te[0]}Ut==="application/xhtml+xml"&&Tt===Be&&(y='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+y+"</body></html>");const Z=C?C.createHTML(y):y;if(Tt===Be)try{I=new f().parseFromString(Z,Ut)}catch{}if(!I||!I.documentElement){I=M.createDocument(Tt,"template",null);try{I.documentElement.innerHTML=bs?E:Z}catch{}}const ue=I.body||I.documentElement;return y&&O&&ue.insertBefore(n.createTextNode(O),ue.childNodes[0]||null),Tt===Be?J.call(I,nt?"html":"body")[0]:nt?I.documentElement:ue},wo=function(y){return D.call(y.ownerDocument||y,y,g.SHOW_ELEMENT|g.SHOW_COMMENT|g.SHOW_TEXT|g.SHOW_PROCESSING_INSTRUCTION|g.SHOW_CDATA_SECTION,null)},ws=function(y){return y instanceof p&&(typeof y.nodeName!="string"||typeof y.textContent!="string"||typeof y.removeChild!="function"||!(y.attributes instanceof h)||typeof y.removeAttribute!="function"||typeof y.setAttribute!="function"||typeof y.namespaceURI!="string"||typeof y.insertBefore!="function"||typeof y.hasChildNodes!="function")},$o=function(y){return typeof c=="function"&&y instanceof c};function He(H,y,I){Tn(H,O=>{O.call(t,y,I,Mt)})}const So=function(y){let I=null;if(He(F.beforeSanitizeElements,y,null),ws(y))return _e(y),!0;const O=se(y.nodeName);if(He(F.uponSanitizeElement,y,{tagName:O,allowedTags:R}),mn&&y.hasChildNodes()&&!$o(y.firstElementChild)&&me(/<[/\w!]/g,y.innerHTML)&&me(/<[/\w!]/g,y.textContent)||y.nodeType===qt.progressingInstruction||mn&&y.nodeType===qt.comment&&me(/<[/\w]/g,y.data))return _e(y),!0;if(!(he.tagCheck instanceof Function&&he.tagCheck(O))&&(!R[O]||Se[O])){if(!Se[O]&&Ao(O)&&(Y.tagNameCheck instanceof RegExp&&me(Y.tagNameCheck,O)||Y.tagNameCheck instanceof Function&&Y.tagNameCheck(O)))return!1;if(ms&&!Ie[O]){const Z=T(y)||y.parentNode,ue=A(y)||y.childNodes;if(ue&&Z){const te=ue.length;for(let ye=te-1;ye>=0;--ye){const ze=b(ue[ye],!0);ze.__removalCount=(y.__removalCount||0)+1,Z.insertBefore(ze,k(y))}}}return _e(y),!0}return y instanceof d&&!Jr(y)||(O==="noscript"||O==="noembed"||O==="noframes")&&me(/<\/no(script|embed|frames)/i,y.innerHTML)?(_e(y),!0):(kt&&y.nodeType===qt.text&&(I=y.textContent,Tn([W,de,L],Z=>{I=Wt(I,Z," ")}),y.textContent!==I&&(zt(t.removed,{element:y.cloneNode()}),y.textContent=I)),He(F.afterSanitizeElements,y,null),!1)},ko=function(y,I,O){if(go&&(I==="id"||I==="name")&&(O in n||O in Yr))return!1;if(!(Ue&&!ee[I]&&me(B,I))){if(!(Oe&&me(oe,I))){if(!(he.attributeCheck instanceof Function&&he.attributeCheck(I,y))){if(!K[I]||ee[I]){if(!(Ao(y)&&(Y.tagNameCheck instanceof RegExp&&me(Y.tagNameCheck,y)||Y.tagNameCheck instanceof Function&&Y.tagNameCheck(y))&&(Y.attributeNameCheck instanceof RegExp&&me(Y.attributeNameCheck,I)||Y.attributeNameCheck instanceof Function&&Y.attributeNameCheck(I,y))||I==="is"&&Y.allowCustomizedBuiltInElements&&(Y.tagNameCheck instanceof RegExp&&me(Y.tagNameCheck,O)||Y.tagNameCheck instanceof Function&&Y.tagNameCheck(O))))return!1}else if(!vs[I]){if(!me(_,Wt(O,X,""))){if(!((I==="src"||I==="xlink:href"||I==="href")&&y!=="script"&&Ch(O,"data:")===0&&ho[y])){if(!(tt&&!me(ie,Wt(O,X,"")))){if(O)return!1}}}}}}}return!0},Ao=function(y){return y!=="annotation-xml"&&Os(y,ne)},Co=function(y){He(F.beforeSanitizeAttributes,y,null);const{attributes:I}=y;if(!I||ws(y))return;const O={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:K,forceKeepAttr:void 0};let Z=I.length;for(;Z--;){const ue=I[Z],{name:te,namespaceURI:ye,value:ze}=ue,Et=se(te),$s=ze;let re=te==="value"?$s:Th($s);if(O.attrName=Et,O.attrValue=re,O.keepAttr=!0,O.forceKeepAttr=void 0,He(F.uponSanitizeAttribute,y,O),re=O.attrValue,po&&(Et==="id"||Et==="name")&&(st(te,y),re=jr+re),mn&&me(/((--!?|])>)|<\/(style|title|textarea)/i,re)){st(te,y);continue}if(Et==="attributename"&&Os(re,"href")){st(te,y);continue}if(O.forceKeepAttr)continue;if(!O.keepAttr){st(te,y);continue}if(!uo&&me(/\/>/i,re)){st(te,y);continue}kt&&Tn([W,de,L],Mo=>{re=Wt(re,Mo," ")});const To=se(y.nodeName);if(!ko(To,Et,re)){st(te,y);continue}if(C&&typeof u=="object"&&typeof u.getAttributeType=="function"&&!ye)switch(u.getAttributeType(To,Et)){case"TrustedHTML":{re=C.createHTML(re);break}case"TrustedScriptURL":{re=C.createScriptURL(re);break}}if(re!==$s)try{ye?y.setAttributeNS(ye,te,re):y.setAttribute(te,re),ws(y)?_e(y):bi(t.removed)}catch{st(te,y)}}He(F.afterSanitizeAttributes,y,null)},Zr=function H(y){let I=null;const O=wo(y);for(He(F.beforeSanitizeShadowDOM,y,null);I=O.nextNode();)He(F.uponSanitizeShadowNode,I,null),So(I),Co(I),I.content instanceof o&&H(I.content);He(F.afterSanitizeShadowDOM,y,null)};return t.sanitize=function(H){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},I=null,O=null,Z=null,ue=null;if(bs=!H,bs&&(H="<!-->"),typeof H!="string"&&!$o(H))if(typeof H.toString=="function"){if(H=H.toString(),typeof H!="string")throw Kt("dirty is not a string, aborting")}else throw Kt("toString is not a function");if(!t.isSupported)return H;if(ps||xs(y),t.removed=[],typeof H=="string"&&(Ot=!1),Ot){if(H.nodeName){const ze=se(H.nodeName);if(!R[ze]||Se[ze])throw Kt("root node is forbidden and cannot be sanitized in-place")}}else if(H instanceof c)I=xo("<!---->"),O=I.ownerDocument.importNode(H,!0),O.nodeType===qt.element&&O.nodeName==="BODY"||O.nodeName==="HTML"?I=O:I.appendChild(O);else{if(!At&&!kt&&!nt&&H.indexOf("<")===-1)return C&&vn?C.createHTML(H):H;if(I=xo(H),!I)return At?null:vn?E:""}I&&hs&&_e(I.firstChild);const te=wo(Ot?H:I);for(;Z=te.nextNode();)So(Z),Co(Z),Z.content instanceof o&&Zr(Z.content);if(Ot)return H;if(At){if(fn)for(ue=z.call(I.ownerDocument);I.firstChild;)ue.appendChild(I.firstChild);else ue=I;return(K.shadowroot||K.shadowrootmode)&&(ue=ae.call(s,ue,!0)),ue}let ye=nt?I.outerHTML:I.innerHTML;return nt&&R["!doctype"]&&I.ownerDocument&&I.ownerDocument.doctype&&I.ownerDocument.doctype.name&&me(wr,I.ownerDocument.doctype.name)&&(ye="<!DOCTYPE "+I.ownerDocument.doctype.name+`>
`+ye),kt&&Tn([W,de,L],ze=>{ye=Wt(ye,ze," ")}),C&&vn?C.createHTML(ye):ye},t.setConfig=function(){let H=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};xs(H),ps=!0},t.clearConfig=function(){Mt=null,ps=!1},t.isValidAttribute=function(H,y,I){Mt||xs({});const O=se(H),Z=se(y);return ko(O,Z,I)},t.addHook=function(H,y){typeof y=="function"&&zt(F[H],y)},t.removeHook=function(H,y){if(y!==void 0){const I=kh(F[H],y);return I===-1?void 0:Ah(F[H],I,1)[0]}return bi(F[H])},t.removeHooks=function(H){F[H]=[]},t.removeAllHooks=function(){F=ki()},t}var ma=$r();function Ya(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var St=Ya();function Sr(e){St=e}var dt={exec:()=>null};function q(e,t=""){let n=typeof e=="string"?e:e.source,s={replace:(a,o)=>{let l=typeof o=="string"?o:o.source;return l=l.replace(fe.caret,"$1"),n=n.replace(a,l),s},getRegex:()=>new RegExp(n,t)};return s}var zh=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),fe={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}>`)},Wh=/^(?:[ \t]*(?:\n|$))+/,Kh=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,jh=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,qh=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ja=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,kr=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Ar=q(kr).replace(/bull/g,Ja).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Gh=q(kr).replace(/bull/g,Ja).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Za=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Vh=/^[^\n]+/,Xa=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Qh=q(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Xa).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Yh=q(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ja).getRegex(),ds="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",eo=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Jh=q("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",eo).replace("tag",ds).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Cr=q(Za).replace("hr",hn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ds).getRegex(),Zh=q(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Cr).getRegex(),to={blockquote:Zh,code:Kh,def:Qh,fences:jh,heading:qh,hr:hn,html:Jh,lheading:Ar,list:Yh,newline:Wh,paragraph:Cr,table:dt,text:Vh},Ai=q("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",hn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ds).getRegex(),Xh={...to,lheading:Gh,table:Ai,paragraph:q(Za).replace("hr",hn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ai).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ds).getRegex()},em={...to,html:q(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",eo).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:dt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:q(Za).replace("hr",hn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ar).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},tm=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,nm=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Tr=/^( {2,}|\\)\n(?!\s*$)/,sm=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,us=/[\p{P}\p{S}]/u,no=/[\s\p{P}\p{S}]/u,Mr=/[^\s\p{P}\p{S}]/u,am=q(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,no).getRegex(),Er=/(?!~)[\p{P}\p{S}]/u,om=/(?!~)[\s\p{P}\p{S}]/u,im=/(?:[^\s\p{P}\p{S}]|~)/u,Lr=/(?![*_])[\p{P}\p{S}]/u,lm=/(?![*_])[\s\p{P}\p{S}]/u,rm=/(?:[^\s\p{P}\p{S}]|[*_])/u,cm=q(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",zh?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Ir=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,dm=q(Ir,"u").replace(/punct/g,us).getRegex(),um=q(Ir,"u").replace(/punct/g,Er).getRegex(),_r="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",gm=q(_r,"gu").replace(/notPunctSpace/g,Mr).replace(/punctSpace/g,no).replace(/punct/g,us).getRegex(),pm=q(_r,"gu").replace(/notPunctSpace/g,im).replace(/punctSpace/g,om).replace(/punct/g,Er).getRegex(),hm=q("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Mr).replace(/punctSpace/g,no).replace(/punct/g,us).getRegex(),mm=q(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Lr).getRegex(),fm="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",vm=q(fm,"gu").replace(/notPunctSpace/g,rm).replace(/punctSpace/g,lm).replace(/punct/g,Lr).getRegex(),bm=q(/\\(punct)/,"gu").replace(/punct/g,us).getRegex(),ym=q(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),xm=q(eo).replace("(?:-->|$)","-->").getRegex(),wm=q("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",xm).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),jn=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,$m=q(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",jn).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Dr=q(/^!?\[(label)\]\[(ref)\]/).replace("label",jn).replace("ref",Xa).getRegex(),Rr=q(/^!?\[(ref)\](?:\[\])?/).replace("ref",Xa).getRegex(),Sm=q("reflink|nolink(?!\\()","g").replace("reflink",Dr).replace("nolink",Rr).getRegex(),Ci=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,so={_backpedal:dt,anyPunctuation:bm,autolink:ym,blockSkip:cm,br:Tr,code:nm,del:dt,delLDelim:dt,delRDelim:dt,emStrongLDelim:dm,emStrongRDelimAst:gm,emStrongRDelimUnd:hm,escape:tm,link:$m,nolink:Rr,punctuation:am,reflink:Dr,reflinkSearch:Sm,tag:wm,text:sm,url:dt},km={...so,link:q(/^!?\[(label)\]\((.*?)\)/).replace("label",jn).getRegex(),reflink:q(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",jn).getRegex()},fa={...so,emStrongRDelimAst:pm,emStrongLDelim:um,delLDelim:mm,delRDelim:vm,url:q(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Ci).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:q(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Ci).getRegex()},Am={...fa,br:q(Tr).replace("{2,}","*").getRegex(),text:q(fa.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},En={normal:to,gfm:Xh,pedantic:em},Gt={normal:so,gfm:fa,breaks:Am,pedantic:km},Cm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ti=e=>Cm[e];function Pe(e,t){if(t){if(fe.escapeTest.test(e))return e.replace(fe.escapeReplace,Ti)}else if(fe.escapeTestNoEncode.test(e))return e.replace(fe.escapeReplaceNoEncode,Ti);return e}function Mi(e){try{e=encodeURI(e).replace(fe.percentDecode,"%")}catch{return null}return e}function Ei(e,t){let n=e.replace(fe.findPipe,(o,l,c)=>{let d=!1,g=l;for(;--g>=0&&c[g]==="\\";)d=!d;return d?"|":" |"}),s=n.split(fe.splitPipe),a=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;a<s.length;a++)s[a]=s[a].trim().replace(fe.slashPipe,"|");return s}function Vt(e,t,n){let s=e.length;if(s===0)return"";let a=0;for(;a<s&&e.charAt(s-a-1)===t;)a++;return e.slice(0,s-a)}function Tm(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return n>0?-2:-1}function Mm(e,t=0){let n=t,s="";for(let a of e)if(a==="	"){let o=4-n%4;s+=" ".repeat(o),n+=o}else s+=a,n++;return s}function Li(e,t,n,s,a){let o=t.href,l=t.title||null,c=e[1].replace(a.other.outputLinkReplace,"$1");s.state.inLink=!0;let d={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:o,title:l,text:c,tokens:s.inlineTokens(c)};return s.state.inLink=!1,d}function Em(e,t,n){let s=e.match(n.other.indentCodeCompensation);if(s===null)return t;let a=s[1];return t.split(`
`).map(o=>{let l=o.match(n.other.beginningSpace);if(l===null)return o;let[c]=l;return c.length>=a.length?o.slice(a.length):o}).join(`
`)}var qn=class{options;rules;lexer;constructor(e){this.options=e||St}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Vt(n,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],s=Em(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let s=Vt(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Vt(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=Vt(t[0],`
`).split(`
`),s="",a="",o=[];for(;n.length>0;){let l=!1,c=[],d;for(d=0;d<n.length;d++)if(this.rules.other.blockquoteStart.test(n[d]))c.push(n[d]),l=!0;else if(!l)c.push(n[d]);else break;n=n.slice(d);let g=c.join(`
`),h=g.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${g}`:g,a=a?`${a}
${h}`:h;let p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,o,!0),this.lexer.state.top=p,n.length===0)break;let f=o.at(-1);if(f?.type==="code")break;if(f?.type==="blockquote"){let u=f,m=u.raw+`
`+n.join(`
`),b=this.blockquote(m);o[o.length-1]=b,s=s.substring(0,s.length-u.raw.length)+b.raw,a=a.substring(0,a.length-u.text.length)+b.text;break}else if(f?.type==="list"){let u=f,m=u.raw+`
`+n.join(`
`),b=this.list(m);o[o.length-1]=b,s=s.substring(0,s.length-f.raw.length)+b.raw,a=a.substring(0,a.length-u.raw.length)+b.raw,n=m.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:o,text:a}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),s=n.length>1,a={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");let o=this.rules.other.listItemRegex(n),l=!1;for(;e;){let d=!1,g="",h="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;g=t[0],e=e.substring(g.length);let p=Mm(t[2].split(`
`,1)[0],t[1].length),f=e.split(`
`,1)[0],u=!p.trim(),m=0;if(this.options.pedantic?(m=2,h=p.trimStart()):u?m=t[1].length+1:(m=p.search(this.rules.other.nonSpaceChar),m=m>4?1:m,h=p.slice(m),m+=t[1].length),u&&this.rules.other.blankLine.test(f)&&(g+=f+`
`,e=e.substring(f.length+1),d=!0),!d){let b=this.rules.other.nextBulletRegex(m),w=this.rules.other.hrRegex(m),k=this.rules.other.fencesBeginRegex(m),A=this.rules.other.headingBeginRegex(m),T=this.rules.other.htmlBeginRegex(m),C=this.rules.other.blockquoteBeginRegex(m);for(;e;){let E=e.split(`
`,1)[0],M;if(f=E,this.options.pedantic?(f=f.replace(this.rules.other.listReplaceNesting,"  "),M=f):M=f.replace(this.rules.other.tabCharGlobal,"    "),k.test(f)||A.test(f)||T.test(f)||C.test(f)||b.test(f)||w.test(f))break;if(M.search(this.rules.other.nonSpaceChar)>=m||!f.trim())h+=`
`+M.slice(m);else{if(u||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||k.test(p)||A.test(p)||w.test(p))break;h+=`
`+f}u=!f.trim(),g+=E+`
`,e=e.substring(E.length+1),p=M.slice(m)}}a.loose||(l?a.loose=!0:this.rules.other.doubleBlankLine.test(g)&&(l=!0)),a.items.push({type:"list_item",raw:g,task:!!this.options.gfm&&this.rules.other.listIsTask.test(h),loose:!1,text:h,tokens:[]}),a.raw+=g}let c=a.items.at(-1);if(c)c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd();else return;a.raw=a.raw.trimEnd();for(let d of a.items){if(this.lexer.state.top=!1,d.tokens=this.lexer.blockTokens(d.text,[]),d.task){if(d.text=d.text.replace(this.rules.other.listReplaceTask,""),d.tokens[0]?.type==="text"||d.tokens[0]?.type==="paragraph"){d.tokens[0].raw=d.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),d.tokens[0].text=d.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let h=this.lexer.inlineQueue.length-1;h>=0;h--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[h].src)){this.lexer.inlineQueue[h].src=this.lexer.inlineQueue[h].src.replace(this.rules.other.listReplaceTask,"");break}}let g=this.rules.other.listTaskCheckbox.exec(d.raw);if(g){let h={type:"checkbox",raw:g[0]+" ",checked:g[0]!=="[ ]"};d.checked=h.checked,a.loose?d.tokens[0]&&["paragraph","text"].includes(d.tokens[0].type)&&"tokens"in d.tokens[0]&&d.tokens[0].tokens?(d.tokens[0].raw=h.raw+d.tokens[0].raw,d.tokens[0].text=h.raw+d.tokens[0].text,d.tokens[0].tokens.unshift(h)):d.tokens.unshift({type:"paragraph",raw:h.raw,text:h.raw,tokens:[h]}):d.tokens.unshift(h)}}if(!a.loose){let g=d.tokens.filter(p=>p.type==="space"),h=g.length>0&&g.some(p=>this.rules.other.anyLine.test(p.raw));a.loose=h}}if(a.loose)for(let d of a.items){d.loose=!0;for(let g of d.tokens)g.type==="text"&&(g.type="paragraph")}return a}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:a}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Ei(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),a=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(let l of s)this.rules.other.tableAlignRight.test(l)?o.align.push("right"):this.rules.other.tableAlignCenter.test(l)?o.align.push("center"):this.rules.other.tableAlignLeft.test(l)?o.align.push("left"):o.align.push(null);for(let l=0;l<n.length;l++)o.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:o.align[l]});for(let l of a)o.rows.push(Ei(l,o.header.length).map((c,d)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:o.align[d]})));return o}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let o=Vt(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{let o=Tm(t[2],"()");if(o===-2)return;if(o>-1){let l=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let s=t[2],a="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(s);o&&(s=o[1],a=o[3])}else a=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),Li(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),a=t[s.toLowerCase()];if(!a){let o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return Li(n,a,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!n||this.rules.inline.punctuation.exec(n))){let a=[...s[0]].length-1,o,l,c=a,d=0,g=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(g.lastIndex=0,t=t.slice(-1*e.length+a);(s=g.exec(t))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(l=[...o].length,s[3]||s[4]){c+=l;continue}else if((s[5]||s[6])&&a%3&&!((a+l)%3)){d+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+d);let h=[...s[0]][0].length,p=e.slice(0,a+s.index+h+l);if(Math.min(a,l)%2){let u=p.slice(1,-1);return{type:"em",raw:p,text:u,tokens:this.lexer.inlineTokens(u)}}let f=p.slice(2,-2);return{type:"strong",raw:p,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(n),a=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&a&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e,t,n=""){let s=this.rules.inline.delLDelim.exec(e);if(s&&(!s[1]||!n||this.rules.inline.punctuation.exec(n))){let a=[...s[0]].length-1,o,l,c=a,d=this.rules.inline.delRDelim;for(d.lastIndex=0,t=t.slice(-1*e.length+a);(s=d.exec(t))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o||(l=[...o].length,l!==a))continue;if(s[3]||s[4]){c+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c);let g=[...s[0]][0].length,h=e.slice(0,a+s.index+g+l),p=h.slice(a,-a);return{type:"del",raw:h,text:p,tokens:this.lexer.inlineTokens(p)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,s;if(t[2]==="@")n=t[0],s="mailto:"+n;else{let a;do a=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(a!==t[0]);n=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},Me=class va{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||St,this.options.tokenizer=this.options.tokenizer||new qn,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:fe,block:En.normal,inline:Gt.normal};this.options.pedantic?(n.block=En.pedantic,n.inline=Gt.pedantic):this.options.gfm&&(n.block=En.gfm,this.options.breaks?n.inline=Gt.breaks:n.inline=Gt.gfm),this.tokenizer.rules=n}static get rules(){return{block:En,inline:Gt}}static lex(t,n){return new va(n).lex(t)}static lexInline(t,n){return new va(n).inlineTokens(t)}lex(t){t=t.replace(fe.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],s=!1){for(this.options.pedantic&&(t=t.replace(fe.tabCharGlobal,"    ").replace(fe.spaceLine,""));t;){let a;if(this.options.extensions?.block?.some(l=>(a=l.call({lexer:this},t,n))?(t=t.substring(a.raw.length),n.push(a),!0):!1))continue;if(a=this.tokenizer.space(t)){t=t.substring(a.raw.length);let l=n.at(-1);a.raw.length===1&&l!==void 0?l.raw+=`
`:n.push(a);continue}if(a=this.tokenizer.code(t)){t=t.substring(a.raw.length);let l=n.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.text,this.inlineQueue.at(-1).src=l.text):n.push(a);continue}if(a=this.tokenizer.fences(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.heading(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.hr(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.blockquote(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.list(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.html(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.def(t)){t=t.substring(a.raw.length);let l=n.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.raw,this.inlineQueue.at(-1).src=l.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title},n.push(a));continue}if(a=this.tokenizer.table(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.lheading(t)){t=t.substring(a.raw.length),n.push(a);continue}let o=t;if(this.options.extensions?.startBlock){let l=1/0,c=t.slice(1),d;this.options.extensions.startBlock.forEach(g=>{d=g.call({lexer:this},c),typeof d=="number"&&d>=0&&(l=Math.min(l,d))}),l<1/0&&l>=0&&(o=t.substring(0,l+1))}if(this.state.top&&(a=this.tokenizer.paragraph(o))){let l=n.at(-1);s&&l?.type==="paragraph"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):n.push(a),s=o.length!==t.length,t=t.substring(a.raw.length);continue}if(a=this.tokenizer.text(t)){t=t.substring(a.raw.length);let l=n.at(-1);l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):n.push(a);continue}if(t){let l="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let s=t,a=null;if(this.tokens.links){let d=Object.keys(this.tokens.links);if(d.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)d.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,a.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(a=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)o=a[2]?a[2].length:0,s=s.slice(0,a.index+o)+"["+"a".repeat(a[0].length-o-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let l=!1,c="";for(;t;){l||(c=""),l=!1;let d;if(this.options.extensions?.inline?.some(h=>(d=h.call({lexer:this},t,n))?(t=t.substring(d.raw.length),n.push(d),!0):!1))continue;if(d=this.tokenizer.escape(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.tag(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.link(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(d.raw.length);let h=n.at(-1);d.type==="text"&&h?.type==="text"?(h.raw+=d.raw,h.text+=d.text):n.push(d);continue}if(d=this.tokenizer.emStrong(t,s,c)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.codespan(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.br(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.del(t,s,c)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.autolink(t)){t=t.substring(d.raw.length),n.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(t))){t=t.substring(d.raw.length),n.push(d);continue}let g=t;if(this.options.extensions?.startInline){let h=1/0,p=t.slice(1),f;this.options.extensions.startInline.forEach(u=>{f=u.call({lexer:this},p),typeof f=="number"&&f>=0&&(h=Math.min(h,f))}),h<1/0&&h>=0&&(g=t.substring(0,h+1))}if(d=this.tokenizer.inlineText(g)){t=t.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(c=d.raw.slice(-1)),l=!0;let h=n.at(-1);h?.type==="text"?(h.raw+=d.raw,h.text+=d.text):n.push(d);continue}if(t){let h="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return n}},Gn=class{options;parser;constructor(e){this.options=e||St}space(e){return""}code({text:e,lang:t,escaped:n}){let s=(t||"").match(fe.notSpaceStart)?.[0],a=e.replace(fe.endingNewline,"")+`
`;return s?'<pre><code class="language-'+Pe(s)+'">'+(n?a:Pe(a,!0))+`</code></pre>
`:"<pre><code>"+(n?a:Pe(a,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,s="";for(let l=0;l<e.items.length;l++){let c=e.items[l];s+=this.listitem(c)}let a=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+a+o+`>
`+s+"</"+a+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let a=0;a<e.header.length;a++)n+=this.tablecell(e.header[a]);t+=this.tablerow({text:n});let s="";for(let a=0;a<e.rows.length;a++){let o=e.rows[a];n="";for(let l=0;l<o.length;l++)n+=this.tablecell(o[l]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Pe(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let s=this.parser.parseInline(n),a=Mi(e);if(a===null)return s;e=a;let o='<a href="'+e+'"';return t&&(o+=' title="'+Pe(t)+'"'),o+=">"+s+"</a>",o}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));let a=Mi(e);if(a===null)return Pe(n);e=a;let o=`<img src="${e}" alt="${Pe(n)}"`;return t&&(o+=` title="${Pe(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Pe(e.text)}},ao=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},Ee=class ba{options;renderer;textRenderer;constructor(t){this.options=t||St,this.options.renderer=this.options.renderer||new Gn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ao}static parse(t,n){return new ba(n).parse(t)}static parseInline(t,n){return new ba(n).parseInline(t)}parse(t){let n="";for(let s=0;s<t.length;s++){let a=t[s];if(this.options.extensions?.renderers?.[a.type]){let l=a,c=this.options.extensions.renderers[l.type].call({parser:this},l);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(l.type)){n+=c||"";continue}}let o=a;switch(o.type){case"space":{n+=this.renderer.space(o);break}case"hr":{n+=this.renderer.hr(o);break}case"heading":{n+=this.renderer.heading(o);break}case"code":{n+=this.renderer.code(o);break}case"table":{n+=this.renderer.table(o);break}case"blockquote":{n+=this.renderer.blockquote(o);break}case"list":{n+=this.renderer.list(o);break}case"checkbox":{n+=this.renderer.checkbox(o);break}case"html":{n+=this.renderer.html(o);break}case"def":{n+=this.renderer.def(o);break}case"paragraph":{n+=this.renderer.paragraph(o);break}case"text":{n+=this.renderer.text(o);break}default:{let l='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return n}parseInline(t,n=this.renderer){let s="";for(let a=0;a<t.length;a++){let o=t[a];if(this.options.extensions?.renderers?.[o.type]){let c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){s+=c||"";continue}}let l=o;switch(l.type){case"escape":{s+=n.text(l);break}case"html":{s+=n.html(l);break}case"link":{s+=n.link(l);break}case"image":{s+=n.image(l);break}case"checkbox":{s+=n.checkbox(l);break}case"strong":{s+=n.strong(l);break}case"em":{s+=n.em(l);break}case"codespan":{s+=n.codespan(l);break}case"br":{s+=n.br(l);break}case"del":{s+=n.del(l);break}case"text":{s+=n.text(l);break}default:{let c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return s}},Yt=class{options;block;constructor(e){this.options=e||St}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?Me.lex:Me.lexInline}provideParser(){return this.block?Ee.parse:Ee.parseInline}},Lm=class{defaults=Ya();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Ee;Renderer=Gn;TextRenderer=ao;Lexer=Me;Tokenizer=qn;Hooks=Yt;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{let a=s;for(let o of a.header)n=n.concat(this.walkTokens(o.tokens,t));for(let o of a.rows)for(let l of o)n=n.concat(this.walkTokens(l.tokens,t));break}case"list":{let a=s;n=n.concat(this.walkTokens(a.items,t));break}default:{let a=s;this.defaults.extensions?.childTokens?.[a.type]?this.defaults.extensions.childTokens[a.type].forEach(o=>{let l=a[o].flat(1/0);n=n.concat(this.walkTokens(l,t))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){let o=t.renderers[a.name];o?t.renderers[a.name]=function(...l){let c=a.renderer.apply(this,l);return c===!1&&(c=o.apply(this,l)),c}:t.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=t[a.level];o?o.unshift(a.tokenizer):t[a.level]=[a.tokenizer],a.start&&(a.level==="block"?t.startBlock?t.startBlock.push(a.start):t.startBlock=[a.start]:a.level==="inline"&&(t.startInline?t.startInline.push(a.start):t.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(t.childTokens[a.name]=a.childTokens)}),s.extensions=t),n.renderer){let a=this.defaults.renderer||new Gn(this.defaults);for(let o in n.renderer){if(!(o in a))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let l=o,c=n.renderer[l],d=a[l];a[l]=(...g)=>{let h=c.apply(a,g);return h===!1&&(h=d.apply(a,g)),h||""}}s.renderer=a}if(n.tokenizer){let a=this.defaults.tokenizer||new qn(this.defaults);for(let o in n.tokenizer){if(!(o in a))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let l=o,c=n.tokenizer[l],d=a[l];a[l]=(...g)=>{let h=c.apply(a,g);return h===!1&&(h=d.apply(a,g)),h}}s.tokenizer=a}if(n.hooks){let a=this.defaults.hooks||new Yt;for(let o in n.hooks){if(!(o in a))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let l=o,c=n.hooks[l],d=a[l];Yt.passThroughHooks.has(o)?a[l]=g=>{if(this.defaults.async&&Yt.passThroughHooksRespectAsync.has(o))return(async()=>{let p=await c.call(a,g);return d.call(a,p)})();let h=c.call(a,g);return d.call(a,h)}:a[l]=(...g)=>{if(this.defaults.async)return(async()=>{let p=await c.apply(a,g);return p===!1&&(p=await d.apply(a,g)),p})();let h=c.apply(a,g);return h===!1&&(h=d.apply(a,g)),h}}s.hooks=a}if(n.walkTokens){let a=this.defaults.walkTokens,o=n.walkTokens;s.walkTokens=function(l){let c=[];return c.push(o.call(this,l)),a&&(c=c.concat(a.call(this,l))),c}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Me.lex(e,t??this.defaults)}parser(e,t){return Ee.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let s={...n},a={...this.defaults,...s},o=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&s.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(a.hooks&&(a.hooks.options=a,a.hooks.block=e),a.async)return(async()=>{let l=a.hooks?await a.hooks.preprocess(t):t,c=await(a.hooks?await a.hooks.provideLexer():e?Me.lex:Me.lexInline)(l,a),d=a.hooks?await a.hooks.processAllTokens(c):c;a.walkTokens&&await Promise.all(this.walkTokens(d,a.walkTokens));let g=await(a.hooks?await a.hooks.provideParser():e?Ee.parse:Ee.parseInline)(d,a);return a.hooks?await a.hooks.postprocess(g):g})().catch(o);try{a.hooks&&(t=a.hooks.preprocess(t));let l=(a.hooks?a.hooks.provideLexer():e?Me.lex:Me.lexInline)(t,a);a.hooks&&(l=a.hooks.processAllTokens(l)),a.walkTokens&&this.walkTokens(l,a.walkTokens);let c=(a.hooks?a.hooks.provideParser():e?Ee.parse:Ee.parseInline)(l,a);return a.hooks&&(c=a.hooks.postprocess(c)),c}catch(l){return o(l)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let s="<p>An error occurred:</p><pre>"+Pe(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}},wt=new Lm;function V(e,t){return wt.parse(e,t)}V.options=V.setOptions=function(e){return wt.setOptions(e),V.defaults=wt.defaults,Sr(V.defaults),V};V.getDefaults=Ya;V.defaults=St;V.use=function(...e){return wt.use(...e),V.defaults=wt.defaults,Sr(V.defaults),V};V.walkTokens=function(e,t){return wt.walkTokens(e,t)};V.parseInline=wt.parseInline;V.Parser=Ee;V.parser=Ee.parse;V.Renderer=Gn;V.TextRenderer=ao;V.Lexer=Me;V.lexer=Me.lex;V.Tokenizer=qn;V.Hooks=Yt;V.parse=V;V.options;V.setOptions;V.use;V.walkTokens;V.parseInline;Ee.parse;Me.lex;V.setOptions({gfm:!0,breaks:!0});const Ii=["a","b","blockquote","br","code","del","em","h1","h2","h3","h4","hr","i","li","ol","p","pre","strong","table","tbody","td","th","thead","tr","ul"],_i=["class","href","rel","target","title","start"];let Di=!1;const Im=14e4,_m=4e4,Dm=200,Ws=5e4,ht=new Map;function Rm(e){const t=ht.get(e);return t===void 0?null:(ht.delete(e),ht.set(e,t),t)}function Ri(e,t){if(ht.set(e,t),ht.size<=Dm)return;const n=ht.keys().next().value;n&&ht.delete(n)}function Pm(){Di||(Di=!0,ma.addHook("afterSanitizeAttributes",e=>{!(e instanceof HTMLAnchorElement)||!e.getAttribute("href")||(e.setAttribute("rel","noreferrer noopener"),e.setAttribute("target","_blank"))}))}function ya(e){const t=e.trim();if(!t)return"";if(Pm(),t.length<=Ws){const l=Rm(t);if(l!==null)return l}const n=wl(t,Im),s=n.truncated?`

… truncated (${n.total} chars, showing first ${n.text.length}).`:"";if(n.text.length>_m){const c=`<pre class="code-block">${Nm(`${n.text}${s}`)}</pre>`,d=ma.sanitize(c,{ALLOWED_TAGS:Ii,ALLOWED_ATTR:_i});return t.length<=Ws&&Ri(t,d),d}const a=V.parse(`${n.text}${s}`),o=ma.sanitize(a,{ALLOWED_TAGS:Ii,ALLOWED_ATTR:_i});return t.length<=Ws&&Ri(t,o),o}function Nm(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const Fm=1500,Om=2e3,Pr="Copy as markdown",Um="Copied",Bm="Copy failed";async function Hm(e){if(!e)return!1;try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}function Ln(e,t){e.title=t,e.setAttribute("aria-label",t)}function zm(e){const t=e.label??Pr;return r`
    <button
      class="chat-copy-btn"
      type="button"
      title=${t}
      aria-label=${t}
      @click=${async n=>{const s=n.currentTarget;if(!s||s.dataset.copying==="1")return;s.dataset.copying="1",s.setAttribute("aria-busy","true"),s.disabled=!0;const a=await Hm(e.text());if(s.isConnected){if(delete s.dataset.copying,s.removeAttribute("aria-busy"),s.disabled=!1,!a){s.dataset.error="1",Ln(s,Bm),window.setTimeout(()=>{s.isConnected&&(delete s.dataset.error,Ln(s,t))},Om);return}s.dataset.copied="1",Ln(s,Um),window.setTimeout(()=>{s.isConnected&&(delete s.dataset.copied,Ln(s,t))},Fm)}}}
    >
      <span class="chat-copy-btn__icon" aria-hidden="true">
        <span class="chat-copy-btn__icon-copy">${ce.copy}</span>
        <span class="chat-copy-btn__icon-check">${ce.check}</span>
      </span>
    </button>
  `}function Wm(e){return zm({text:()=>e,label:Pr})}function Nr(e){const t=e;let n=typeof t.role=="string"?t.role:"unknown";const s=typeof t.toolCallId=="string"||typeof t.tool_call_id=="string",a=t.content,o=Array.isArray(a)?a:null,l=Array.isArray(o)&&o.some(p=>{const f=p,u=(typeof f.type=="string"?f.type:"").toLowerCase();return u==="toolresult"||u==="tool_result"}),c=typeof t.toolName=="string"||typeof t.tool_name=="string";(s||l||c)&&(n="toolResult");let d=[];typeof t.content=="string"?d=[{type:"text",text:t.content}]:Array.isArray(t.content)?d=t.content.map(p=>({type:p.type||"text",text:p.text,name:p.name,args:p.args||p.arguments})):typeof t.text=="string"&&(d=[{type:"text",text:t.text}]);const g=typeof t.timestamp=="number"?t.timestamp:Date.now(),h=typeof t.id=="string"?t.id:void 0;return{role:n,content:d,timestamp:g,id:h}}function oo(e){const t=e.toLowerCase();return e==="user"||e==="User"?e:e==="assistant"?"assistant":e==="system"?"system":t==="toolresult"||t==="tool_result"||t==="tool"||t==="function"?"tool":e}function Fr(e){const t=e,n=typeof t.role=="string"?t.role.toLowerCase():"";return n==="toolresult"||n==="tool_result"}const Km={icon:"puzzle",detailKeys:["command","path","url","targetUrl","targetId","ref","element","node","nodeId","id","requestId","to","channelId","guildId","userId","name","query","pattern","messageId"]},jm={bash:{icon:"wrench",title:"Bash",detailKeys:["command"]},process:{icon:"wrench",title:"Process",detailKeys:["sessionId"]},read:{icon:"fileText",title:"Read",detailKeys:["path"]},write:{icon:"edit",title:"Write",detailKeys:["path"]},edit:{icon:"penLine",title:"Edit",detailKeys:["path"]},attach:{icon:"paperclip",title:"Attach",detailKeys:["path","url","fileName"]},browser:{icon:"globe",title:"Browser",actions:{status:{label:"status"},start:{label:"start"},stop:{label:"stop"},tabs:{label:"tabs"},open:{label:"open",detailKeys:["targetUrl"]},focus:{label:"focus",detailKeys:["targetId"]},close:{label:"close",detailKeys:["targetId"]},snapshot:{label:"snapshot",detailKeys:["targetUrl","targetId","ref","element","format"]},screenshot:{label:"screenshot",detailKeys:["targetUrl","targetId","ref","element"]},navigate:{label:"navigate",detailKeys:["targetUrl","targetId"]},console:{label:"console",detailKeys:["level","targetId"]},pdf:{label:"pdf",detailKeys:["targetId"]},upload:{label:"upload",detailKeys:["paths","ref","inputRef","element","targetId"]},dialog:{label:"dialog",detailKeys:["accept","promptText","targetId"]},act:{label:"act",detailKeys:["request.kind","request.ref","request.selector","request.text","request.value"]}}},canvas:{icon:"image",title:"Canvas",actions:{present:{label:"present",detailKeys:["target","node","nodeId"]},hide:{label:"hide",detailKeys:["node","nodeId"]},navigate:{label:"navigate",detailKeys:["url","node","nodeId"]},eval:{label:"eval",detailKeys:["javaScript","node","nodeId"]},snapshot:{label:"snapshot",detailKeys:["format","node","nodeId"]},a2ui_push:{label:"A2UI push",detailKeys:["jsonlPath","node","nodeId"]},a2ui_reset:{label:"A2UI reset",detailKeys:["node","nodeId"]}}},nodes:{icon:"smartphone",title:"Nodes",actions:{status:{label:"status"},describe:{label:"describe",detailKeys:["node","nodeId"]},pending:{label:"pending"},approve:{label:"approve",detailKeys:["requestId"]},reject:{label:"reject",detailKeys:["requestId"]},notify:{label:"notify",detailKeys:["node","nodeId","title","body"]},camera_snap:{label:"camera snap",detailKeys:["node","nodeId","facing","deviceId"]},camera_list:{label:"camera list",detailKeys:["node","nodeId"]},camera_clip:{label:"camera clip",detailKeys:["node","nodeId","facing","duration","durationMs"]},screen_record:{label:"screen record",detailKeys:["node","nodeId","duration","durationMs","fps","screenIndex"]}}},cron:{icon:"loader",title:"Cron",actions:{status:{label:"status"},list:{label:"list"},add:{label:"add",detailKeys:["job.name","job.id","job.schedule","job.cron"]},update:{label:"update",detailKeys:["id"]},remove:{label:"remove",detailKeys:["id"]},run:{label:"run",detailKeys:["id"]},runs:{label:"runs",detailKeys:["id"]},wake:{label:"wake",detailKeys:["text","mode"]}}},gateway:{icon:"plug",title:"Gateway",actions:{restart:{label:"restart",detailKeys:["reason","delayMs"]},"config.get":{label:"config get"},"config.schema":{label:"config schema"},"config.apply":{label:"config apply",detailKeys:["restartDelayMs"]},"update.run":{label:"update run",detailKeys:["restartDelayMs"]}}},whatsapp_login:{icon:"circle",title:"WhatsApp Login",actions:{start:{label:"start"},wait:{label:"wait"}}},discord:{icon:"messageSquare",title:"Discord",actions:{react:{label:"react",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"reactions",detailKeys:["channelId","messageId"]},sticker:{label:"sticker",detailKeys:["to","stickerIds"]},poll:{label:"poll",detailKeys:["question","to"]},permissions:{label:"permissions",detailKeys:["channelId"]},readMessages:{label:"read messages",detailKeys:["channelId","limit"]},sendMessage:{label:"send",detailKeys:["to","content"]},editMessage:{label:"edit",detailKeys:["channelId","messageId"]},deleteMessage:{label:"delete",detailKeys:["channelId","messageId"]},threadCreate:{label:"thread create",detailKeys:["channelId","name"]},threadList:{label:"thread list",detailKeys:["guildId","channelId"]},threadReply:{label:"thread reply",detailKeys:["channelId","content"]},pinMessage:{label:"pin",detailKeys:["channelId","messageId"]},unpinMessage:{label:"unpin",detailKeys:["channelId","messageId"]},listPins:{label:"list pins",detailKeys:["channelId"]},searchMessages:{label:"search",detailKeys:["guildId","content"]},memberInfo:{label:"member",detailKeys:["guildId","userId"]},roleInfo:{label:"roles",detailKeys:["guildId"]},emojiList:{label:"emoji list",detailKeys:["guildId"]},roleAdd:{label:"role add",detailKeys:["guildId","userId","roleId"]},roleRemove:{label:"role remove",detailKeys:["guildId","userId","roleId"]},channelInfo:{label:"channel",detailKeys:["channelId"]},channelList:{label:"channels",detailKeys:["guildId"]},voiceStatus:{label:"voice",detailKeys:["guildId","userId"]},eventList:{label:"events",detailKeys:["guildId"]},eventCreate:{label:"event create",detailKeys:["guildId","name"]},timeout:{label:"timeout",detailKeys:["guildId","userId"]},kick:{label:"kick",detailKeys:["guildId","userId"]},ban:{label:"ban",detailKeys:["guildId","userId"]}}},slack:{icon:"messageSquare",title:"Slack",actions:{react:{label:"react",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"reactions",detailKeys:["channelId","messageId"]},sendMessage:{label:"send",detailKeys:["to","content"]},editMessage:{label:"edit",detailKeys:["channelId","messageId"]},deleteMessage:{label:"delete",detailKeys:["channelId","messageId"]},readMessages:{label:"read messages",detailKeys:["channelId","limit"]},pinMessage:{label:"pin",detailKeys:["channelId","messageId"]},unpinMessage:{label:"unpin",detailKeys:["channelId","messageId"]},listPins:{label:"list pins",detailKeys:["channelId"]},memberInfo:{label:"member",detailKeys:["userId"]},emojiList:{label:"emoji list"}}}},qm={fallback:Km,tools:jm},Or=qm,Pi=Or.fallback??{icon:"puzzle"},Gm=Or.tools??{};function Vm(e){return(e??"tool").trim()}function Qm(e){const t=e.replace(/_/g," ").trim();return t?t.split(/\s+/).map(n=>n.length<=2&&n.toUpperCase()===n?n:`${n.at(0)?.toUpperCase()??""}${n.slice(1)}`).join(" "):"Tool"}function Ym(e){const t=e?.trim();if(t)return t.replace(/_/g," ")}function Ur(e){if(e!=null){if(typeof e=="string"){const t=e.trim();if(!t)return;const n=t.split(/\r?\n/)[0]?.trim()??"";return n?n.length>160?`${n.slice(0,157)}…`:n:void 0}if(typeof e=="number"||typeof e=="boolean")return String(e);if(Array.isArray(e)){const t=e.map(s=>Ur(s)).filter(s=>!!s);if(t.length===0)return;const n=t.slice(0,3).join(", ");return t.length>3?`${n}…`:n}}}function Jm(e,t){if(!e||typeof e!="object")return;let n=e;for(const s of t.split(".")){if(!s||!n||typeof n!="object")return;n=n[s]}return n}function Zm(e,t){for(const n of t){const s=Jm(e,n),a=Ur(s);if(a)return a}}function Xm(e){if(!e||typeof e!="object")return;const t=e,n=typeof t.path=="string"?t.path:void 0;if(!n)return;const s=typeof t.offset=="number"?t.offset:void 0,a=typeof t.limit=="number"?t.limit:void 0;return s!==void 0&&a!==void 0?`${n}:${s}-${s+a}`:n}function ef(e){if(!e||typeof e!="object")return;const t=e;return typeof t.path=="string"?t.path:void 0}function tf(e,t){if(!(!e||!t))return e.actions?.[t]??void 0}function nf(e){const t=Vm(e.name),n=t.toLowerCase(),s=Gm[n],a=s?.icon??Pi.icon??"puzzle",o=s?.title??Qm(t),l=s?.label??t,c=e.args&&typeof e.args=="object"?e.args.action:void 0,d=typeof c=="string"?c.trim():void 0,g=tf(s,d),h=Ym(g?.label??d);let p;n==="read"&&(p=Xm(e.args)),!p&&(n==="write"||n==="edit"||n==="attach")&&(p=ef(e.args));const f=g?.detailKeys??s?.detailKeys??Pi.detailKeys??[];return!p&&f.length>0&&(p=Zm(e.args,f)),!p&&e.meta&&(p=e.meta),p&&(p=af(p)),{name:t,icon:a,title:o,label:l,verb:h,detail:p}}function sf(e){const t=[];if(e.verb&&t.push(e.verb),e.detail&&t.push(e.detail),t.length!==0)return t.join(" · ")}function af(e){return e&&e.replace(/\/Users\/[^/]+/g,"~").replace(/\/home\/[^/]+/g,"~")}const of=80,lf=2,Ni=100;function rf(e){const t=e.trim();if(t.startsWith("{")||t.startsWith("["))try{const n=JSON.parse(t);return"```json\n"+JSON.stringify(n,null,2)+"\n```"}catch{}return e}function cf(e){const t=e.split(`
`),n=t.slice(0,lf),s=n.join(`
`);return s.length>Ni?s.slice(0,Ni)+"…":n.length<t.length?s+"…":s}function df(e){const t=e,n=uf(t.content),s=[];for(const a of n){const o=(typeof a.type=="string"?a.type:"").toLowerCase();(["toolcall","tool_call","tooluse","tool_use"].includes(o)||typeof a.name=="string"&&a.arguments!=null)&&s.push({kind:"call",name:a.name??"tool",args:gf(a.arguments??a.args)})}for(const a of n){const o=(typeof a.type=="string"?a.type:"").toLowerCase();if(o!=="toolresult"&&o!=="tool_result")continue;const l=pf(a),c=typeof a.name=="string"?a.name:"tool";s.push({kind:"result",name:c,text:l})}if(Fr(e)&&!s.some(a=>a.kind==="result")){const a=typeof t.toolName=="string"&&t.toolName||typeof t.tool_name=="string"&&t.tool_name||"tool",o=Ql(e)??void 0;s.push({kind:"result",name:a,text:o})}return s}function Fi(e,t){const n=nf({name:e.name,args:e.args}),s=sf(n),a=!!e.text?.trim(),o=!!t,l=o?()=>{if(a){t(rf(e.text));return}const p=`## ${n.label}

${s?`**Command:** \`${s}\`

`:""}*No output — tool completed successfully.*`;t(p)}:void 0,c=a&&(e.text?.length??0)<=of,d=a&&!c,g=a&&c,h=!a;return r`
    <div
      class="chat-tool-card ${o?"chat-tool-card--clickable":""}"
      @click=${l}
      role=${o?"button":v}
      tabindex=${o?"0":v}
      @keydown=${o?p=>{p.key!=="Enter"&&p.key!==" "||(p.preventDefault(),l?.())}:v}
    >
      <div class="chat-tool-card__header">
        <div class="chat-tool-card__title">
          <span class="chat-tool-card__icon">${ce[n.icon]}</span>
          <span>${n.label}</span>
        </div>
        ${o?r`<span class="chat-tool-card__action">${a?"View":""} ${ce.check}</span>`:v}
        ${h&&!o?r`<span class="chat-tool-card__status">${ce.check}</span>`:v}
      </div>
      ${s?r`<div class="chat-tool-card__detail">${s}</div>`:v}
      ${h?r`
              <div class="chat-tool-card__status-text muted">Completed</div>
            `:v}
      ${d?r`<div class="chat-tool-card__preview mono">${cf(e.text)}</div>`:v}
      ${g?r`<div class="chat-tool-card__inline mono">${e.text}</div>`:v}
    </div>
  `}function uf(e){return Array.isArray(e)?e.filter(Boolean):[]}function gf(e){if(typeof e!="string")return e;const t=e.trim();if(!t||!t.startsWith("{")&&!t.startsWith("["))return e;try{return JSON.parse(t)}catch{return e}}function pf(e){if(typeof e.text=="string")return e.text;if(typeof e.content=="string")return e.content}function hf(e){const n=e.content,s=[];if(Array.isArray(n))for(const a of n){if(typeof a!="object"||a===null)continue;const o=a;if(o.type==="image"){const l=o.source;if(l?.type==="base64"&&typeof l.data=="string"){const c=l.data,d=l.media_type||"image/png",g=c.startsWith("data:")?c:`data:${d};base64,${c}`;s.push({url:g})}else typeof o.url=="string"&&s.push({url:o.url})}else if(o.type==="image_url"){const l=o.image_url;typeof l?.url=="string"&&s.push({url:l.url})}}return s}function mf(e){return r`
    <div class="chat-group assistant">
      ${io("assistant",e)}
      <div class="chat-group-messages">
        <div class="chat-bubble chat-reading-indicator" aria-hidden="true">
          <span class="chat-reading-indicator__dots">
            <span></span><span></span><span></span>
          </span>
        </div>
      </div>
    </div>
  `}function ff(e,t,n,s){const a=new Date(t).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),o=s?.name??"Assistant";return r`
    <div class="chat-group assistant">
      ${io("assistant",s)}
      <div class="chat-group-messages">
        ${Br({role:"assistant",content:[{type:"text",text:e}],timestamp:t},{isStreaming:!0,showReasoning:!1},n)}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${o}</span>
          <span class="chat-group-timestamp">${a}</span>
        </div>
      </div>
    </div>
  `}function vf(e,t){const n=oo(e.role),s=t.assistantName??"Assistant",a=n==="user"?"You":n==="assistant"?s:n,o=n==="user"?"user":n==="assistant"?"assistant":"other",l=new Date(e.timestamp).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return r`
    <div class="chat-group ${o}">
      ${io(e.role,{name:s,avatar:t.assistantAvatar??null})}
      <div class="chat-group-messages">
        ${e.messages.map((c,d)=>Br(c.message,{isStreaming:e.isStreaming&&d===e.messages.length-1,showReasoning:t.showReasoning},t.onOpenSidebar))}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${a}</span>
          <span class="chat-group-timestamp">${l}</span>
        </div>
      </div>
    </div>
  `}function io(e,t){const n=oo(e),s=t?.name?.trim()||"Assistant",a=t?.avatar?.trim()||"",o=n==="user"?"U":n==="assistant"?s.charAt(0).toUpperCase()||"A":n==="tool"?"⚙":"?",l=n==="user"?"user":n==="assistant"?"assistant":n==="tool"?"tool":"other";return a&&n==="assistant"?bf(a)?r`<img
        class="chat-avatar ${l}"
        src="${a}"
        alt="${s}"
      />`:r`<div class="chat-avatar ${l}">${a}</div>`:r`<div class="chat-avatar ${l}">${o}</div>`}function bf(e){return/^https?:\/\//i.test(e)||/^data:image\//i.test(e)||e.startsWith("/")}function yf(e){return e.length===0?v:r`
    <div class="chat-message-images">
      ${e.map(t=>r`
          <img
            src=${t.url}
            alt=${t.alt??"Attached image"}
            class="chat-message-image"
            @click=${()=>window.open(t.url,"_blank")}
          />
        `)}
    </div>
  `}function Br(e,t,n){const s=e,a=typeof s.role=="string"?s.role:"unknown",o=Fr(e)||a.toLowerCase()==="toolresult"||a.toLowerCase()==="tool_result"||typeof s.toolCallId=="string"||typeof s.tool_call_id=="string",l=df(e),c=l.length>0,d=hf(e),g=d.length>0,h=Ql(e),p=t.showReasoning&&a==="assistant"?Uu(e):null,f=h?.trim()?h:null,u=p?Hu(p):null,m=f,b=a==="assistant"&&!!m?.trim(),w=["chat-bubble",b?"has-copy":"",t.isStreaming?"streaming":"","fade-in"].filter(Boolean).join(" ");return!m&&c&&o?r`${l.map(k=>Fi(k,n))}`:!m&&!c&&!g?v:r`
    <div class="${w}">
      ${b?Wm(m):v}
      ${yf(d)}
      ${u?r`<div class="chat-thinking">${ua(ya(u))}</div>`:v}
      ${m?r`<div class="chat-text">${ua(ya(m))}</div>`:v}
      ${l.map(k=>Fi(k,n))}
    </div>
  `}function xf(e){return r`
    <div class="sidebar-panel">
      <div class="sidebar-header">
        <div class="sidebar-title">Tool Output</div>
        <button @click=${e.onClose} class="btn" title="Close sidebar">
          ${ce.x}
        </button>
      </div>
      <div class="sidebar-content">
        ${e.error?r`
              <div class="callout danger">${e.error}</div>
              <button @click=${e.onViewRawText} class="btn" style="margin-top: 12px;">
                View Raw Text
              </button>
            `:e.content?r`<div class="sidebar-markdown">${ua(ya(e.content))}</div>`:r`
                  <div class="muted">No content available</div>
                `}
      </div>
    </div>
  `}var wf=Object.defineProperty,$f=Object.getOwnPropertyDescriptor,gs=(e,t,n,s)=>{for(var a=s>1?void 0:s?$f(t,n):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(a=(s?l(t,n,a):l(a))||a);return s&&a&&wf(t,n,a),a};let Nt=class extends _t{constructor(){super(...arguments),this.splitRatio=.6,this.minRatio=.4,this.maxRatio=.7,this.isDragging=!1,this.startX=0,this.startRatio=0,this.handleMouseDown=e=>{this.isDragging=!0,this.startX=e.clientX,this.startRatio=this.splitRatio,this.classList.add("dragging"),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp),e.preventDefault()},this.handleMouseMove=e=>{if(!this.isDragging)return;const t=this.parentElement;if(!t)return;const n=t.getBoundingClientRect().width,a=(e.clientX-this.startX)/n;let o=this.startRatio+a;o=Math.max(this.minRatio,Math.min(this.maxRatio,o)),this.dispatchEvent(new CustomEvent("resize",{detail:{splitRatio:o},bubbles:!0,composed:!0}))},this.handleMouseUp=()=>{this.isDragging=!1,this.classList.remove("dragging"),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}}render(){return v}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this.handleMouseDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}};Nt.styles=ec`
    :host {
      width: 4px;
      cursor: col-resize;
      background: var(--border, #333);
      transition: background 150ms ease-out;
      flex-shrink: 0;
      position: relative;
    }
    :host::before {
      content: "";
      position: absolute;
      top: 0;
      left: -4px;
      right: -4px;
      bottom: 0;
    }
    :host(:hover) {
      background: var(--accent, #007bff);
    }
    :host(.dragging) {
      background: var(--accent, #007bff);
    }
  `;gs([Xn({type:Number})],Nt.prototype,"splitRatio",2);gs([Xn({type:Number})],Nt.prototype,"minRatio",2);gs([Xn({type:Number})],Nt.prototype,"maxRatio",2);Nt=gs([dl("resizable-divider")],Nt);const Sf=5e3;function Oi(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}function kf(e){return e?e.active?r`
      <div class="callout info compaction-indicator compaction-indicator--active">
        ${ce.loader} Compacting context...
      </div>
    `:e.completedAt&&Date.now()-e.completedAt<Sf?r`
        <div class="callout success compaction-indicator compaction-indicator--complete">
          ${ce.check} Context compacted
        </div>
      `:v:v}function Af(){return`att-${Date.now()}-${Math.random().toString(36).slice(2,9)}`}function Cf(e,t){const n=e.clipboardData?.items;if(!n||!t.onAttachmentsChange)return;const s=[];for(let a=0;a<n.length;a++){const o=n[a];o.type.startsWith("image/")&&s.push(o)}if(s.length!==0){e.preventDefault();for(const a of s){const o=a.getAsFile();if(!o)continue;const l=new FileReader;l.addEventListener("load",()=>{const c=l.result,d={id:Af(),dataUrl:c,mimeType:o.type},g=t.attachments??[];t.onAttachmentsChange?.([...g,d])}),l.readAsDataURL(o)}}}function Tf(e){const t=e.attachments??[];return t.length===0?v:r`
    <div class="chat-attachments">
      ${t.map(n=>r`
          <div class="chat-attachment">
            <img
              src=${n.dataUrl}
              alt="Attachment preview"
              class="chat-attachment__img"
            />
            <button
              class="chat-attachment__remove"
              type="button"
              aria-label="Remove attachment"
              @click=${()=>{const s=(e.attachments??[]).filter(a=>a.id!==n.id);e.onAttachmentsChange?.(s)}}
            >
              ${ce.x}
            </button>
          </div>
        `)}
    </div>
  `}function Mf(e){const t=e.connected,n=e.sending||e.stream!==null,s=!!(e.canAbort&&e.onAbort),o=e.sessions?.sessions?.find(u=>u.key===e.sessionKey)?.reasoningLevel??"off",l=e.showThinking&&o!=="off",c={name:e.assistantName,avatar:e.assistantAvatar??e.assistantAvatarUrl??null},d=(e.attachments?.length??0)>0,g=e.connected?d?"Add a message or paste more images...":"Message (↩ to send, Shift+↩ for line breaks, paste images)":"Connect to the gateway to start chatting…",h=e.splitRatio??.6,p=!!(e.sidebarOpen&&e.onCloseSidebar),f=r`
    <div
      class="chat-thread"
      role="log"
      aria-live="polite"
      @scroll=${e.onChatScroll}
    >
      ${e.loading?r`
              <div class="muted">Loading chat…</div>
            `:v}
      ${ir(Lf(e),u=>u.key,u=>u.kind==="reading-indicator"?mf(c):u.kind==="stream"?ff(u.text,u.startedAt,e.onOpenSidebar,c):u.kind==="group"?vf(u,{onOpenSidebar:e.onOpenSidebar,showReasoning:l,assistantName:e.assistantName,assistantAvatar:c.avatar}):v)}
    </div>
  `;return r`
    <section class="card chat">
      ${e.disabledReason?r`<div class="callout">${e.disabledReason}</div>`:v}

      ${e.error?r`<div class="callout danger">${e.error}</div>`:v}

      ${kf(e.compactionStatus)}

      ${e.focusMode?r`
            <button
              class="chat-focus-exit"
              type="button"
              @click=${e.onToggleFocusMode}
              aria-label="Exit focus mode"
              title="Exit focus mode"
            >
              ${ce.x}
            </button>
          `:v}

      <div
        class="chat-split-container ${p?"chat-split-container--open":""}"
      >
        <div
          class="chat-main"
          style="flex: ${p?`0 0 ${h*100}%`:"1 1 100%"}"
        >
          ${f}
        </div>

        ${p?r`
              <resizable-divider
                .splitRatio=${h}
                @resize=${u=>e.onSplitRatioChange?.(u.detail.splitRatio)}
              ></resizable-divider>
              <div class="chat-sidebar">
                ${xf({content:e.sidebarContent??null,error:e.sidebarError??null,onClose:e.onCloseSidebar,onViewRawText:()=>{!e.sidebarContent||!e.onOpenSidebar||e.onOpenSidebar(`\`\`\`
${e.sidebarContent}
\`\`\``)}})}
              </div>
            `:v}
      </div>

      ${e.queue.length?r`
            <div class="chat-queue" role="status" aria-live="polite">
              <div class="chat-queue__title">Queued (${e.queue.length})</div>
              <div class="chat-queue__list">
                ${e.queue.map(u=>r`
                    <div class="chat-queue__item">
                      <div class="chat-queue__text">
                        ${u.text||(u.attachments?.length?`Image (${u.attachments.length})`:"")}
                      </div>
                      <button
                        class="btn chat-queue__remove"
                        type="button"
                        aria-label="Remove queued message"
                        @click=${()=>e.onQueueRemove(u.id)}
                      >
                        ${ce.x}
                      </button>
                    </div>
                  `)}
              </div>
            </div>
          `:v}

      ${e.showNewMessages?r`
            <button
              class="btn chat-new-messages"
              type="button"
              @click=${e.onScrollToBottom}
            >
              New messages ${ce.arrowDown}
            </button>
          `:v}

      <div class="chat-compose">
        ${Tf(e)}
        <div class="chat-compose__row">
          <label class="field chat-compose__field">
            <span>Message</span>
            <textarea
              ${xh(u=>u&&Oi(u))}
              .value=${e.draft}
              ?disabled=${!e.connected}
              @keydown=${u=>{u.key==="Enter"&&(u.isComposing||u.keyCode===229||u.shiftKey||e.connected&&(u.preventDefault(),t&&e.onSend()))}}
              @input=${u=>{const m=u.target;Oi(m),e.onDraftChange(m.value)}}
              @paste=${u=>Cf(u,e)}
              placeholder=${g}
            ></textarea>
          </label>
          <div class="chat-compose__actions">
            <button
              class="btn"
              ?disabled=${!e.connected||!s&&e.sending}
              @click=${s?e.onAbort:e.onNewSession}
            >
              ${s?"Stop":"New session"}
            </button>
            <button
              class="btn primary"
              ?disabled=${!e.connected}
              @click=${e.onSend}
            >
              ${n?"Queue":"Send"}<kbd class="btn-kbd">↵</kbd>
            </button>
          </div>
        </div>
      </div>
    </section>
  `}const Ui=200;function Ef(e){const t=[];let n=null;for(const s of e){if(s.kind!=="message"){n&&(t.push(n),n=null),t.push(s);continue}const a=Nr(s.message),o=oo(a.role),l=a.timestamp||Date.now();!n||n.role!==o?(n&&t.push(n),n={kind:"group",key:`group:${o}:${s.key}`,role:o,messages:[{message:s.message,key:s.key}],timestamp:l,isStreaming:!1}):n.messages.push({message:s.message,key:s.key})}return n&&t.push(n),t}function Lf(e){const t=[],n=Array.isArray(e.messages)?e.messages:[],s=Array.isArray(e.toolMessages)?e.toolMessages:[],a=Math.max(0,n.length-Ui);a>0&&t.push({kind:"message",key:"chat:history:notice",message:{role:"system",content:`Showing last ${Ui} messages (${a} hidden).`,timestamp:Date.now()}});for(let o=a;o<n.length;o++){const l=n[o],c=Nr(l);!e.showThinking&&c.role.toLowerCase()==="toolresult"||t.push({kind:"message",key:Bi(l,o),message:l})}if(e.showThinking)for(let o=0;o<s.length;o++)t.push({kind:"message",key:Bi(s[o],o+n.length),message:s[o]});if(e.stream!==null){const o=`stream:${e.sessionKey}:${e.streamStartedAt??"live"}`;e.stream.trim().length>0?t.push({kind:"stream",key:o,text:e.stream,startedAt:e.streamStartedAt??Date.now()}):t.push({kind:"reading-indicator",key:o})}return Ef(t)}function Bi(e,t){const n=e,s=typeof n.toolCallId=="string"?n.toolCallId:"";if(s)return`tool:${s}`;const a=typeof n.id=="string"?n.id:"";if(a)return`msg:${a}`;const o=typeof n.messageId=="string"?n.messageId:"";if(o)return`msg:${o}`;const l=typeof n.timestamp=="number"?n.timestamp:null,c=typeof n.role=="string"?n.role:"unknown";return l!=null?`msg:${c}:${l}:${t}`:`msg:${c}:${t}`}const xa={all:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  `,env:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,default:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `};function Hi(){return[{key:"env",label:i("configEnv")},{key:"update",label:i("configUpdate")},{key:"agents",label:i("configAgents")},{key:"auth",label:i("configAuth")},{key:"channels",label:i("configChannels")},{key:"messages",label:i("configMessages")},{key:"commands",label:i("configCommands")},{key:"hooks",label:i("configHooks")},{key:"skills",label:i("configSkills")},{key:"tools",label:i("configTools")},{key:"gateway",label:i("configGateway")},{key:"wizard",label:i("configWizard")},{key:"meta",label:i("configMeta")},{key:"logging",label:i("configLogging")},{key:"browser",label:i("configBrowser")},{key:"ui",label:i("configUi")},{key:"models",label:i("configModels")},{key:"bindings",label:i("configBindings")},{key:"broadcast",label:i("configBroadcast")},{key:"audio",label:i("configAudio")},{key:"session",label:i("configSession")},{key:"cron",label:i("configCron")},{key:"web",label:i("configWeb")},{key:"discovery",label:i("configDiscovery")},{key:"canvasHost",label:i("configCanvasHost")},{key:"talk",label:i("configTalk")},{key:"plugins",label:i("configPlugins")}]}const zi="__all__";function Wi(e){return xa[e]??xa.default}function If(e,t){const n=Ma(e);return n||{label:t?.title??qe(e),description:t?.description??""}}function _f(e){const{key:t,schema:n,uiHints:s}=e;if(!n||Fe(n)!=="object"||!n.properties)return[];const a=Object.entries(n.properties).map(([o,l])=>{const c=Ae([t,o],s),d=et([t,o],c?.label??l.title??qe(o)),g=Xe([t,o],c?.help??l.description??""),h=c?.order??50;return{key:o,label:d,description:g,order:h}});return a.sort((o,l)=>o.order!==l.order?o.order-l.order:o.key.localeCompare(l.key)),a}function Df(e,t){if(!e||!t)return[];const n=[];function s(a,o,l){if(a===o)return;if(typeof a!=typeof o){n.push({path:l,from:a,to:o});return}if(typeof a!="object"||a===null||o===null){a!==o&&n.push({path:l,from:a,to:o});return}if(Array.isArray(a)&&Array.isArray(o)){JSON.stringify(a)!==JSON.stringify(o)&&n.push({path:l,from:a,to:o});return}const c=a,d=o,g=new Set([...Object.keys(c),...Object.keys(d)]);for(const h of g)s(c[h],d[h],l?`${l}.${h}`:h)}return s(e,t,""),n}function Ki(e,t=40){let n;try{n=JSON.stringify(e)??String(e)}catch{n=String(e)}return n.length<=t?n:n.slice(0,t-3)+"..."}function Rf(e){const t=e.valid==null?"unknown":e.valid?"valid":"invalid",n=mr(e.schema),s=n.schema?n.unsupportedPaths.length>0:!1,a=n.schema?.properties??{},o=Hi().filter(M=>M.key in a),l=new Set(Hi().map(M=>M.key)),c=Object.keys(a).filter(M=>!l.has(M)).map(M=>({key:M,label:M.charAt(0).toUpperCase()+M.slice(1)})),d=[...o,...c],g=e.activeSection&&n.schema&&Fe(n.schema)==="object"?n.schema.properties?.[e.activeSection]:void 0,h=e.activeSection?If(e.activeSection,g):null,p=e.activeSection?_f({key:e.activeSection,schema:g,uiHints:e.uiHints}):[],f=e.formMode==="form"&&!!e.activeSection&&p.length>0,u=e.activeSubsection===zi,m=e.searchQuery||u?null:e.activeSubsection??p[0]?.key??null,b=e.formMode==="form"?Df(e.originalValue,e.formValue):[],w=e.formMode==="raw"&&e.raw!==e.originalRaw,k=e.formMode==="form"?b.length>0:w,A=!!e.formValue&&!e.loading&&!!n.schema,T=e.connected&&!e.saving&&k&&(e.formMode==="raw"?!0:A),C=e.connected&&!e.applying&&!e.updating&&k&&(e.formMode==="raw"?!0:A),E=e.connected&&!e.applying&&!e.updating;return r`
    <div class="config-layout">
      <!-- Sidebar -->
      <aside class="config-sidebar">
        <div class="config-sidebar__header">
          <div class="config-sidebar__title">${i("configSettingsTitle")}</div>
          <span
            class="pill pill--sm ${t==="valid"?"pill--ok":t==="invalid"?"pill--danger":""}"
            >${i(t==="valid"?"configValidityValid":t==="invalid"?"configValidityInvalid":"configValidityUnknown")}</span
          >
        </div>

        <!-- Search -->
        <div class="config-search">
          <svg
            class="config-search__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            class="config-search__input"
            placeholder=${i("configSearchPlaceholder")}
            .value=${e.searchQuery}
            @input=${M=>e.onSearchChange(M.target.value)}
          />
          ${e.searchQuery?r`
                <button
                  class="config-search__clear"
                  @click=${()=>e.onSearchChange("")}
                >
                  ×
                </button>
              `:v}
        </div>

        <!-- Section nav -->
        <nav class="config-nav">
          <button
            class="config-nav__item ${e.activeSection===null?"active":""}"
            @click=${()=>e.onSectionChange(null)}
          >
            <span class="config-nav__icon">${xa.all}</span>
            <span class="config-nav__label">${i("configAllSettings")}</span>
          </button>
          ${d.map(M=>r`
              <button
                class="config-nav__item ${e.activeSection===M.key?"active":""}"
                @click=${()=>e.onSectionChange(M.key)}
              >
                <span class="config-nav__icon"
                  >${Wi(M.key)}</span
                >
                <span class="config-nav__label">${M.label}</span>
              </button>
            `)}
        </nav>

        <!-- Mode toggle at bottom -->
        <div class="config-sidebar__footer">
          <div class="config-mode-toggle">
            <button
              class="config-mode-toggle__btn ${e.formMode==="form"?"active":""}"
              ?disabled=${e.schemaLoading||!e.schema}
              @click=${()=>e.onFormModeChange("form")}
            >
              ${i("configForm")}
            </button>
            <button
              class="config-mode-toggle__btn ${e.formMode==="raw"?"active":""}"
              @click=${()=>e.onFormModeChange("raw")}
            >
              ${i("configRaw")}
            </button>
          </div>
        </div>
      </aside>

      <!-- Main content -->
      <main class="config-main">
        <!-- Action bar -->
        <div class="config-actions">
          <div class="config-actions__left">
            ${k?r`
                  <span class="config-changes-badge"
                    >${e.formMode==="raw"?i("configUnsavedChanges"):b.length===1?i("configOneUnsavedChange"):`${b.length} ${i("configUnsavedChangesLabel")}`}</span
                  >
                `:r`
                    <span class="config-status muted">${i("configNoChanges")}</span>
                  `}
          </div>
          <div class="config-actions__right">
            <button
              class="btn btn--sm"
              ?disabled=${e.loading}
              @click=${e.onReload}
            >
              ${e.loading?i("commonLoading"):i("commonReload")}
            </button>
            <button
              class="btn btn--sm primary"
              ?disabled=${!T}
              @click=${e.onSave}
            >
              ${e.saving?i("commonSaving"):i("commonSave")}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!C}
              @click=${e.onApply}
            >
              ${e.applying?i("configApplying"):i("configApply")}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!E}
              @click=${e.onUpdate}
            >
              ${e.updating?i("configUpdating"):i("configUpdateButton")}
            </button>
          </div>
        </div>

        <!-- Diff panel (form mode only - raw mode doesn't have granular diff) -->
        ${k&&e.formMode==="form"?r`
              <details class="config-diff">
                <summary class="config-diff__summary">
                  <span
                    >${i("configViewPrefix")}${b.length}
                    ${b.length===1?i("configPendingChange"):i("configPendingChanges")}</span
                  >
                  <svg
                    class="config-diff__chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div class="config-diff__content">
                  ${b.map(M=>r`
                      <div class="config-diff__item">
                        <div class="config-diff__path">${M.path}</div>
                        <div class="config-diff__values">
                          <span class="config-diff__from"
                            >${Ki(M.from)}</span
                          >
                          <span class="config-diff__arrow">→</span>
                          <span class="config-diff__to"
                            >${Ki(M.to)}</span
                          >
                        </div>
                      </div>
                    `)}
                </div>
              </details>
            `:v}
        ${h&&e.formMode==="form"?r`
              <div class="config-section-hero">
                <div class="config-section-hero__icon">
                  ${Wi(e.activeSection??"")}
                </div>
                <div class="config-section-hero__text">
                  <div class="config-section-hero__title">
                    ${h.label}
                  </div>
                  ${h.description?r`<div class="config-section-hero__desc">
                        ${h.description}
                      </div>`:v}
                </div>
              </div>
            `:v}
        ${f?r`
              <div class="config-subnav">
                <button
                  class="config-subnav__item ${m===null?"active":""}"
                  @click=${()=>e.onSubsectionChange(zi)}
                >
                  ${i("configSubnavAll")}
                </button>
                ${p.map(M=>r`
                    <button
                      class="config-subnav__item ${m===M.key?"active":""}"
                      title=${M.description||M.label}
                      @click=${()=>e.onSubsectionChange(M.key)}
                    >
                      ${M.label}
                    </button>
                  `)}
              </div>
            `:v}

        <!-- Form content -->
        <div class="config-content">
          ${e.formMode==="form"?r`
                ${e.schemaLoading?r`
                        <div class="config-loading">
                          <div class="config-loading__spinner"></div>
                          <span>${i("configLoadingSchema")}</span>
                        </div>
                      `:Up({schema:n.schema,uiHints:e.uiHints,value:e.formValue,disabled:e.loading||!e.formValue,unsupportedPaths:n.unsupportedPaths,onPatch:e.onFormPatch,searchQuery:e.searchQuery,activeSection:e.activeSection,activeSubsection:m})}
                ${s?r`
                        <div class="callout danger" style="margin-top: 12px">
                          ${i("configFormUnsafeWarning")}
                        </div>
                      `:v}
              `:r`
                <label class="field config-raw-field">
                  <span>${i("configRawJson5")}</span>
                  <textarea
                    .value=${e.raw}
                    @input=${M=>e.onRawChange(M.target.value)}
                  ></textarea>
                </label>
              `}
        </div>

        ${e.issues.length>0?r`<div class="callout danger" style="margin-top: 12px;">
              <pre class="code-block">
${JSON.stringify(e.issues,null,2)}</pre
              >
            </div>`:v}
      </main>
    </div>
  `}function Pf(e){const t=["last",...e.channels.filter(Boolean)],n=e.form.deliveryChannel?.trim();n&&!t.includes(n)&&t.push(n);const s=new Set;return t.filter(a=>s.has(a)?!1:(s.add(a),!0))}function Nf(e,t){if(t==="last")return i("cronLast");const n=e.channelMeta?.find(s=>s.id===t);return n?.label?n.label:e.channelLabels?.[t]??t}function Ff(e){const t=Pf(e);(e.runsJobId==null?void 0:e.jobs.find(a=>a.id===e.runsJobId))?.name??e.runsJobId;const s=e.runs.toSorted((a,o)=>o.ts-a.ts);return r`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">${i("cronScheduler")}</div>
        <div class="card-sub">${i("cronSchedulerSub")}</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">${i("cronEnabled")}</div>
            <div class="stat-value">
              ${e.status?e.status.enabled?i("commonYes"):i("commonNo"):i("commonNA")}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">${i("cronJobs")}</div>
            <div class="stat-value">${e.status?.jobs??i("commonNA")}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${i("overviewCronNext")}</div>
            <div class="stat-value">${Qa(e.status?.nextWakeAtMs??null)}</div>
          </div>
        </div>
        <div class="row" style="margin-top: 12px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?i("commonRefreshing"):i("commonRefresh")}
          </button>
          ${e.error?r`<span class="muted">${e.error}</span>`:v}
        </div>
      </div>

      <div class="card">
        <div class="card-title">${i("cronNewJob")}</div>
        <div class="card-sub">${i("cronNewJobSub")}</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>${i("cronName")}</span>
            <input
              .value=${e.form.name}
              @input=${a=>e.onFormChange({name:a.target.value})}
            />
          </label>
          <label class="field">
            <span>${i("cronDescription")}</span>
            <input
              .value=${e.form.description}
              @input=${a=>e.onFormChange({description:a.target.value})}
            />
          </label>
          <label class="field">
            <span>${i("cronAgentId")}</span>
            <input
              .value=${e.form.agentId}
              @input=${a=>e.onFormChange({agentId:a.target.value})}
              placeholder="default"
            />
          </label>
          <label class="field checkbox">
            <span>${i("cronEnabled")}</span>
            <input
              type="checkbox"
              .checked=${e.form.enabled}
              @change=${a=>e.onFormChange({enabled:a.target.checked})}
            />
          </label>
          <label class="field">
            <span>${i("cronSchedule")}</span>
            <select
              .value=${e.form.scheduleKind}
              @change=${a=>e.onFormChange({scheduleKind:a.target.value})}
            >
              <option value="every">${i("cronEvery")}</option>
              <option value="at">${i("cronAt")}</option>
              <option value="cron">${i("cronCron")}</option>
            </select>
          </label>
        </div>
        ${Of(e)}
        <div class="form-grid" style="margin-top: 12px;">
          <label class="field">
            <span>${i("cronSession")}</span>
            <select
              .value=${e.form.sessionTarget}
              @change=${a=>e.onFormChange({sessionTarget:a.target.value})}
            >
              <option value="main">${i("cronMain")}</option>
              <option value="isolated">${i("cronIsolated")}</option>
            </select>
          </label>
          <label class="field">
            <span>${i("cronWakeMode")}</span>
            <select
              .value=${e.form.wakeMode}
              @change=${a=>e.onFormChange({wakeMode:a.target.value})}
            >
              <option value="next-heartbeat">${i("cronNextHeartbeat")}</option>
              <option value="now">${i("cronNow")}</option>
            </select>
          </label>
          <label class="field">
            <span>${i("cronPayload")}</span>
            <select
              .value=${e.form.payloadKind}
              @change=${a=>e.onFormChange({payloadKind:a.target.value})}
            >
              <option value="systemEvent">${i("cronSystemEvent")}</option>
              <option value="agentTurn">${i("cronAgentTurn")}</option>
            </select>
          </label>
        </div>
        <label class="field" style="margin-top: 12px;">
          <span>${e.form.payloadKind==="systemEvent"?i("cronSystemText"):i("cronAgentMessage")}</span>
          <textarea
            .value=${e.form.payloadText}
            @input=${a=>e.onFormChange({payloadText:a.target.value})}
            rows="4"
          ></textarea>
        </label>
        ${e.form.payloadKind==="agentTurn"?r`
                <div class="form-grid" style="margin-top: 12px;">
                  <label class="field">
                    <span>${i("cronDelivery")}</span>
                    <select
                      .value=${e.form.deliveryMode}
                      @change=${a=>e.onFormChange({deliveryMode:a.target.value})}
                    >
                      <option value="announce">${i("cronAnnounceSummary")}</option>
                      <option value="none">${i("cronNoneInternal")}</option>
                    </select>
                  </label>
                  <label class="field">
                    <span>${i("cronTimeoutSeconds")}</span>
                    <input
                      .value=${e.form.timeoutSeconds}
                      @input=${a=>e.onFormChange({timeoutSeconds:a.target.value})}
                    />
                  </label>
                  ${e.form.deliveryMode==="announce"?r`
                          <label class="field">
                            <span>${i("cronChannel")}</span>
                            <select
                              .value=${e.form.deliveryChannel||"last"}
                              @change=${a=>e.onFormChange({deliveryChannel:a.target.value})}
                            >
                              ${t.map(a=>r`<option value=${a}>
                                    ${Nf(e,a)}
                                  </option>`)}
                            </select>
                          </label>
                          <label class="field">
                            <span>${i("cronTo")}</span>
                            <input
                              .value=${e.form.deliveryTo}
                              @input=${a=>e.onFormChange({deliveryTo:a.target.value})}
                              placeholder="+1555… or chat id"
                            />
                          </label>
                        `:v}
                </div>
              `:v}
        <div class="row" style="margin-top: 14px;">
          <button class="btn primary" ?disabled=${e.busy} @click=${e.onAdd}>
            ${e.busy?i("commonSaving"):i("cronAddJob")}
          </button>
        </div>
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${i("cronJobsTitle")}</div>
      <div class="card-sub">${i("cronJobsSub")}</div>
      ${e.jobs.length===0?r`
              <div class="muted" style="margin-top: 12px">${i("cronNoJobsYet")}</div>
            `:r`
            <div class="list" style="margin-top: 12px;">
              ${e.jobs.map(a=>Uf(a,e))}
            </div>
          `}
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${i("cronRunHistory")}</div>
      <div class="card-sub">${i("cronRunHistorySub")} ${e.runsJobId??i("cronSelectJob")}.</div>
      ${e.runsJobId==null?r`
              <div class="muted" style="margin-top: 12px">${i("cronSelectJobToInspect")}</div>
            `:s.length===0?r`
                <div class="muted" style="margin-top: 12px">${i("cronNoRunsYet")}</div>
              `:r`
              <div class="list" style="margin-top: 12px;">
                ${s.map(a=>zf(a,e.basePath))}
              </div>
            `}
    </section>
  `}function Of(e){const t=e.form;return t.scheduleKind==="at"?r`
      <label class="field" style="margin-top: 12px;">
        <span>${i("cronRunAt")}</span>
        <input
          type="datetime-local"
          .value=${t.scheduleAt}
          @input=${n=>e.onFormChange({scheduleAt:n.target.value})}
        />
      </label>
    `:t.scheduleKind==="every"?r`
      <div class="form-grid" style="margin-top: 12px;">
        <label class="field">
          <span>${i("cronEvery")}</span>
          <input
            .value=${t.everyAmount}
            @input=${n=>e.onFormChange({everyAmount:n.target.value})}
          />
        </label>
        <label class="field">
          <span>${i("cronUnit")}</span>
          <select
            .value=${t.everyUnit}
            @change=${n=>e.onFormChange({everyUnit:n.target.value})}
          >
            <option value="minutes">${i("cronMinutes")}</option>
            <option value="hours">${i("cronHours")}</option>
            <option value="days">${i("cronDays")}</option>
          </select>
        </label>
      </div>
    `:r`
    <div class="form-grid" style="margin-top: 12px;">
      <label class="field">
        <span>${i("cronExpression")}</span>
        <input
          .value=${t.cronExpr}
          @input=${n=>e.onFormChange({cronExpr:n.target.value})}
        />
      </label>
      <label class="field">
        <span>Timezone (optional)</span>
        <input
          .value=${t.cronTz}
          @input=${n=>e.onFormChange({cronTz:n.target.value})}
        />
      </label>
    </div>
  `}function Uf(e,t){const s=`list-item list-item-clickable cron-job${t.runsJobId===e.id?" list-item-selected":""}`;return r`
    <div class=${s} @click=${()=>t.onLoadRuns(e.id)}>
      <div class="list-main">
        <div class="list-title">${e.name}</div>
        <div class="list-sub">${cr(e)}</div>
        ${Bf(e)}
        ${e.agentId?r`<div class="muted cron-job-agent">Agent: ${e.agentId}</div>`:v}
      </div>
      <div class="list-meta">
        ${Hf(e)}
      </div>
      <div class="cron-job-footer">
        <div class="chip-row cron-job-chips">
          <span class=${`chip ${e.enabled?"chip-ok":"chip-danger"}`}>
            ${e.enabled?"enabled":"disabled"}
          </span>
          <span class="chip">${e.sessionTarget}</span>
          <span class="chip">${e.wakeMode}</span>
        </div>
        <div class="row cron-job-actions">
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${a=>{a.stopPropagation(),t.onToggle(e,!e.enabled)}}
          >
            ${e.enabled?"Disable":"Enable"}
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${a=>{a.stopPropagation(),t.onRun(e)}}
          >
            Run
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${a=>{a.stopPropagation(),t.onLoadRuns(e.id)}}
          >
            History
          </button>
          <button
            class="btn danger"
            ?disabled=${t.busy}
            @click=${a=>{a.stopPropagation(),t.onRemove(e)}}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  `}function Bf(e){if(e.payload.kind==="systemEvent")return r`<div class="cron-job-detail">
      <span class="cron-job-detail-label">System</span>
      <span class="muted cron-job-detail-value">${e.payload.text}</span>
    </div>`;const t=e.delivery,n=t?.channel||t?.to?` (${t.channel??"last"}${t.to?` -> ${t.to}`:""})`:"";return r`
    <div class="cron-job-detail">
      <span class="cron-job-detail-label">Prompt</span>
      <span class="muted cron-job-detail-value">${e.payload.message}</span>
    </div>
    ${t?r`<div class="cron-job-detail">
            <span class="cron-job-detail-label">Delivery</span>
            <span class="muted cron-job-detail-value">${t.mode}${n}</span>
          </div>`:v}
  `}function ji(e){return typeof e!="number"||!Number.isFinite(e)?"n/a":Q(e)}function Hf(e){const t=e.state?.lastStatus??"n/a",n=t==="ok"?"cron-job-status-ok":t==="error"?"cron-job-status-error":t==="skipped"?"cron-job-status-skipped":"cron-job-status-na",s=e.state?.nextRunAtMs,a=e.state?.lastRunAtMs;return r`
    <div class="cron-job-state">
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">Status</span>
        <span class=${`cron-job-status-pill ${n}`}>${t}</span>
      </div>
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">Next</span>
        <span class="cron-job-state-value" title=${vt(s)}>
          ${ji(s)}
        </span>
      </div>
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">Last</span>
        <span class="cron-job-state-value" title=${vt(a)}>
          ${ji(a)}
        </span>
      </div>
    </div>
  `}function zf(e,t){const n=typeof e.sessionKey=="string"&&e.sessionKey.trim().length>0?`${os("chat",t)}?session=${encodeURIComponent(e.sessionKey)}`:null;return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${e.status}</div>
        <div class="list-sub">${e.summary??""}</div>
      </div>
      <div class="list-meta">
        <div>${vt(e.ts)}</div>
        <div class="muted">${e.durationMs??0}ms</div>
        ${n?r`<div><a class="session-link" href=${n}>Open run chat</a></div>`:v}
        ${e.error?r`<div class="muted">${e.error}</div>`:v}
      </div>
    </div>
  `}function Wf(e){const n=(e.status&&typeof e.status=="object"?e.status.securityAudit:null)?.summary??null,s=n?.critical??0,a=n?.warn??0,o=n?.info??0,l=s>0?"danger":a>0?"warn":"success",c=s>0?`${s} ${i("debugCritical")}`:a>0?`${a} ${i("debugWarnings")}`:i("debugNoCritical");return r`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">${i("debugSnapshots")}</div>
            <div class="card-sub">${i("debugSnapshotsSub")}</div>
          </div>
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?i("commonRefreshing"):i("commonRefresh")}
          </button>
        </div>
        <div class="stack" style="margin-top: 12px;">
          <div>
            <div class="muted">${i("debugStatus")}</div>
            ${n?r`<div class="callout ${l}" style="margin-top: 8px;">
                  ${i("debugSecurityAudit")}: ${c}${o>0?` · ${o} ${i("debugInfo")}`:""}. ${i("debugSecurityAuditDetails")}
                </div>`:v}
            <pre class="code-block">${JSON.stringify(e.status??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">${i("debugHealth")}</div>
            <pre class="code-block">${JSON.stringify(e.health??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">${i("debugLastHeartbeat")}</div>
            <pre class="code-block">${JSON.stringify(e.heartbeat??{},null,2)}</pre>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">${i("debugManualRpc")}</div>
        <div class="card-sub">${i("debugManualRpcSub")}</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>${i("debugMethod")}</span>
            <input
              .value=${e.callMethod}
              @input=${d=>e.onCallMethodChange(d.target.value)}
              placeholder="system-presence"
            />
          </label>
          <label class="field">
            <span>${i("debugParams")} (JSON)</span>
            <textarea
              .value=${e.callParams}
              @input=${d=>e.onCallParamsChange(d.target.value)}
              rows="6"
            ></textarea>
          </label>
        </div>
        <div class="row" style="margin-top: 12px;">
          <button class="btn primary" @click=${e.onCall}>${i("debugCall")}</button>
        </div>
        ${e.callError?r`<div class="callout danger" style="margin-top: 12px;">
              ${e.callError}
            </div>`:v}
        ${e.callResult?r`<pre class="code-block" style="margin-top: 12px;">${e.callResult}</pre>`:v}
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${i("debugModels")}</div>
      <div class="card-sub">${i("debugModelsSub")}</div>
      <pre class="code-block" style="margin-top: 12px;">${JSON.stringify(e.models??[],null,2)}</pre>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${i("debugEventLog")}</div>
      <div class="card-sub">${i("debugEventLogSub")}</div>
      ${e.eventLog.length===0?r`
              <div class="muted" style="margin-top: 12px">${i("debugNoEvents")}</div>
            `:r`
            <div class="list" style="margin-top: 12px;">
              ${e.eventLog.map(d=>r`
                  <div class="list-item">
                    <div class="list-main">
                      <div class="list-title">${d.event}</div>
                      <div class="list-sub">${new Date(d.ts).toLocaleTimeString()}</div>
                    </div>
                    <div class="list-meta">
                      <pre class="code-block">${Qg(d.payload)}</pre>
                    </div>
                  </div>
                `)}
            </div>
          `}
    </section>
  `}function Kf(e){const t=Math.max(0,e),n=Math.floor(t/1e3);if(n<60)return`${n}s`;const s=Math.floor(n/60);return s<60?`${s}m`:`${Math.floor(s/60)}h`}function it(e,t){return t?r`<div class="exec-approval-meta-row"><span>${e}</span><span>${t}</span></div>`:v}function jf(e){const t=e.execApprovalQueue[0];if(!t)return v;const n=t.request,s=t.expiresAtMs-Date.now(),a=s>0?`expires in ${Kf(s)}`:"expired",o=e.execApprovalQueue.length;return r`
    <div class="exec-approval-overlay" role="dialog" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Exec approval needed</div>
            <div class="exec-approval-sub">${a}</div>
          </div>
          ${o>1?r`<div class="exec-approval-queue">${o} pending</div>`:v}
        </div>
        <div class="exec-approval-command mono">${n.command}</div>
        <div class="exec-approval-meta">
          ${it("Host",n.host)}
          ${it("Agent",n.agentId)}
          ${it("Session",n.sessionKey)}
          ${it("CWD",n.cwd)}
          ${it("Resolved",n.resolvedPath)}
          ${it("Security",n.security)}
          ${it("Ask",n.ask)}
        </div>
        ${e.execApprovalError?r`<div class="exec-approval-error">${e.execApprovalError}</div>`:v}
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-once")}
          >
            Allow once
          </button>
          <button
            class="btn"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-always")}
          >
            Always allow
          </button>
          <button
            class="btn danger"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("deny")}
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  `}function qf(e){const{pendingGatewayUrl:t}=e;return t?r`
    <div class="exec-approval-overlay" role="dialog" aria-modal="true" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Change Gateway URL</div>
            <div class="exec-approval-sub">This will reconnect to a different gateway server</div>
          </div>
        </div>
        <div class="exec-approval-command mono">${t}</div>
        <div class="callout danger" style="margin-top: 12px;">
          Only confirm if you trust this URL. Malicious URLs can compromise your system.
        </div>
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            @click=${()=>e.handleGatewayUrlConfirm()}
          >
            Confirm
          </button>
          <button
            class="btn"
            @click=${()=>e.handleGatewayUrlCancel()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  `:v}function Gf(e){return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${i("instancesTitle")}</div>
          <div class="card-sub">${i("instancesSub")}</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?i("commonLoading"):i("commonRefresh")}
        </button>
      </div>
      ${e.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${e.lastError}
          </div>`:v}
      ${e.statusMessage?r`<div class="callout" style="margin-top: 12px;">
            ${e.statusMessage}
          </div>`:v}
      <div class="list" style="margin-top: 16px;">
        ${e.entries.length===0?r`
                <div class="muted">${i("instancesNoReported")}</div>
              `:e.entries.map(t=>Vf(t))}
      </div>
    </section>
  `}function Vf(e){const t=e.lastInputSeconds!=null?`${e.lastInputSeconds}s ago`:"n/a",n=e.mode??"unknown",s=Array.isArray(e.roles)?e.roles.filter(Boolean):[],a=Array.isArray(e.scopes)?e.scopes.filter(Boolean):[],o=a.length>0?a.length>3?`${a.length} scopes`:`scopes: ${a.join(", ")}`:null;return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${e.host??i("instancesUnknownHost")}</div>
        <div class="list-sub">${qg(e)}</div>
        <div class="chip-row">
          <span class="chip">${n}</span>
          ${s.map(l=>r`<span class="chip">${l}</span>`)}
          ${o?r`<span class="chip">${o}</span>`:v}
          ${e.platform?r`<span class="chip">${e.platform}</span>`:v}
          ${e.deviceFamily?r`<span class="chip">${e.deviceFamily}</span>`:v}
          ${e.modelIdentifier?r`<span class="chip">${e.modelIdentifier}</span>`:v}
          ${e.version?r`<span class="chip">${e.version}</span>`:v}
        </div>
      </div>
      <div class="list-meta">
        <div>${Gg(e)}</div>
        <div class="muted">${i("instancesLastInput")} ${t}</div>
        <div class="muted">${i("instancesReason")} ${e.reason??""}</div>
      </div>
    </div>
  `}const qi=["trace","debug","info","warn","error","fatal"];function Qf(e){if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?e:t.toLocaleTimeString()}function Yf(e,t){return t?[e.message,e.subsystem,e.raw].filter(Boolean).join(" ").toLowerCase().includes(t):!0}function Jf(e){const t=e.filterText.trim().toLowerCase(),n=qi.some(o=>!e.levelFilters[o]),s=e.entries.filter(o=>o.level&&!e.levelFilters[o.level]?!1:Yf(o,t)),a=t||n?"filtered":"visible";return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${i("logsTitle")}</div>
          <div class="card-sub">${i("logsSub")}</div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?i("commonLoading"):i("commonRefresh")}
          </button>
          <button
            class="btn"
            ?disabled=${s.length===0}
            @click=${()=>e.onExport(s.map(o=>o.raw),a)}
          >
            ${i(a==="filtered"?"logsExportFiltered":"logsExportVisible")}
          </button>
        </div>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="min-width: 220px;">
          <span>Filter</span>
          <input
            .value=${e.filterText}
            @input=${o=>e.onFilterTextChange(o.target.value)}
            placeholder="Search logs"
          />
        </label>
        <label class="field checkbox">
          <span>Auto-follow</span>
          <input
            type="checkbox"
            .checked=${e.autoFollow}
            @change=${o=>e.onToggleAutoFollow(o.target.checked)}
          />
        </label>
      </div>

      <div class="chip-row" style="margin-top: 12px;">
        ${qi.map(o=>r`
            <label class="chip log-chip ${o}">
              <input
                type="checkbox"
                .checked=${e.levelFilters[o]}
                @change=${l=>e.onLevelToggle(o,l.target.checked)}
              />
              <span>${o}</span>
            </label>
          `)}
      </div>

      ${e.file?r`<div class="muted" style="margin-top: 10px;">File: ${e.file}</div>`:v}
      ${e.truncated?r`
              <div class="callout" style="margin-top: 10px">Log output truncated; showing latest chunk.</div>
            `:v}
      ${e.error?r`<div class="callout danger" style="margin-top: 10px;">${e.error}</div>`:v}

      <div class="log-stream" style="margin-top: 12px;" @scroll=${e.onScroll}>
        ${s.length===0?r`
                <div class="muted" style="padding: 12px">No log entries.</div>
              `:s.map(o=>r`
                <div class="log-row">
                  <div class="log-time mono">${Qf(o.time)}</div>
                  <div class="log-level ${o.level??""}">${o.level??""}</div>
                  <div class="log-subsystem mono">${o.subsystem??""}</div>
                  <div class="log-message mono">${o.message??o.raw}</div>
                </div>
              `)}
      </div>
    </section>
  `}function Zf(e){const t=av(e),n=dv(e);return r`
    ${gv(n)}
    ${uv(t)}
    ${Xf(e)}
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${i("nodesTitle")}</div>
          <div class="card-sub">${i("nodesSub")}</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?i("commonLoading"):i("commonRefresh")}
        </button>
      </div>
      <div class="list" style="margin-top: 16px;">
        ${e.nodes.length===0?r`
                <div class="muted">${i("nodesNoFound")}</div>
              `:e.nodes.map(s=>$v(s))}
      </div>
    </section>
  `}function Xf(e){const t=e.devicesList??{pending:[],paired:[]},n=Array.isArray(t.pending)?t.pending:[],s=Array.isArray(t.paired)?t.paired:[];return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${i("nodesDevices")}</div>
          <div class="card-sub">${i("nodesDevicesSub")}</div>
        </div>
        <button class="btn" ?disabled=${e.devicesLoading} @click=${e.onDevicesRefresh}>
          ${e.devicesLoading?i("commonLoading"):i("commonRefresh")}
        </button>
      </div>
      ${e.devicesError?r`<div class="callout danger" style="margin-top: 12px;">${e.devicesError}</div>`:v}
      <div class="list" style="margin-top: 16px;">
        ${n.length>0?r`
              <div class="muted" style="margin-bottom: 8px;">${i("nodesPending")}</div>
              ${n.map(a=>ev(a,e))}
            `:v}
        ${s.length>0?r`
              <div class="muted" style="margin-top: 12px; margin-bottom: 8px;">${i("nodesPaired")}</div>
              ${s.map(a=>tv(a,e))}
            `:v}
        ${n.length===0&&s.length===0?r`
                <div class="muted">${i("nodesNoPairedDevices")}</div>
              `:v}
      </div>
    </section>
  `}function ev(e,t){const n=e.displayName?.trim()||e.deviceId,s=typeof e.ts=="number"?Q(e.ts):i("commonNA"),a=e.role?.trim()?`${i("nodesRoleLabel")}${e.role}`:i("nodesRoleNone"),o=e.isRepair?i("nodesRepairSuffix"):"",l=e.remoteIp?` · ${e.remoteIp}`:"";return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${l}</div>
        <div class="muted" style="margin-top: 6px;">
          ${a} · ${i("nodesRequested")}${s}${o}
        </div>
      </div>
      <div class="list-meta">
        <div class="row" style="justify-content: flex-end; gap: 8px; flex-wrap: wrap;">
          <button class="btn btn--sm primary" @click=${()=>t.onDeviceApprove(e.requestId)}>
            ${i("nodesApprove")}
          </button>
          <button class="btn btn--sm" @click=${()=>t.onDeviceReject(e.requestId)}>
            ${i("nodesReject")}
          </button>
        </div>
      </div>
    </div>
  `}function tv(e,t){const n=e.displayName?.trim()||e.deviceId,s=e.remoteIp?` · ${e.remoteIp}`:"",a=`${i("nodesRolesLabel")}${Qs(e.roles)}`,o=`${i("nodesScopesLabel")}${Qs(e.scopes)}`,l=Array.isArray(e.tokens)?e.tokens:[];return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${s}</div>
        <div class="muted" style="margin-top: 6px;">${a} · ${o}</div>
        ${l.length===0?r`
                <div class="muted" style="margin-top: 6px">${i("nodesTokensNone")}</div>
              `:r`
              <div class="muted" style="margin-top: 10px;">${i("nodesTokens")}</div>
              <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 6px;">
                ${l.map(c=>nv(e.deviceId,c,t))}
              </div>
            `}
      </div>
    </div>
  `}function nv(e,t,n){const s=t.revokedAtMs?i("nodesTokenRevoked"):i("nodesTokenActive"),a=`${i("nodesScopesLabel")}${Qs(t.scopes)}`,o=Q(t.rotatedAtMs??t.createdAtMs??t.lastUsedAtMs??null);return r`
    <div class="row" style="justify-content: space-between; gap: 8px;">
      <div class="list-sub">${t.role} · ${s} · ${a} · ${o}</div>
      <div class="row" style="justify-content: flex-end; gap: 6px; flex-wrap: wrap;">
        <button
          class="btn btn--sm"
          @click=${()=>n.onDeviceRotate(e,t.role,t.scopes)}
        >
          ${i("nodesRotate")}
        </button>
        ${t.revokedAtMs?v:r`
              <button
                class="btn btn--sm danger"
                @click=${()=>n.onDeviceRevoke(e,t.role)}
              >
                ${i("nodesRevoke")}
              </button>
            `}
      </div>
    </div>
  `}const Qe="__defaults__",Gi=[{value:"deny",labelKey:"nodesSecurityDeny"},{value:"allowlist",labelKey:"nodesSecurityAllowlist"},{value:"full",labelKey:"nodesSecurityFull"}],sv=[{value:"off",labelKey:"nodesAskOff"},{value:"on-miss",labelKey:"nodesAskOnMiss"},{value:"always",labelKey:"nodesAskAlways"}];function av(e){const t=e.configForm,n=yv(e.nodes),{defaultBinding:s,agents:a}=wv(t),o=!!t,l=e.configSaving||e.configFormMode==="raw";return{ready:o,disabled:l,configDirty:e.configDirty,configLoading:e.configLoading,configSaving:e.configSaving,defaultBinding:s,agents:a,nodes:n,onBindDefault:e.onBindDefault,onBindAgent:e.onBindAgent,onSave:e.onSaveBindings,onLoadConfig:e.onLoadConfig,formMode:e.configFormMode}}function Vi(e){return e==="allowlist"||e==="full"||e==="deny"?e:"deny"}function ov(e){return e==="always"||e==="off"||e==="on-miss"?e:"on-miss"}function iv(e){const t=e?.defaults??{};return{security:Vi(t.security),ask:ov(t.ask),askFallback:Vi(t.askFallback??"deny"),autoAllowSkills:!!(t.autoAllowSkills??!1)}}function lv(e){const t=e?.agents??{},n=Array.isArray(t.list)?t.list:[],s=[];return n.forEach(a=>{if(!a||typeof a!="object")return;const o=a,l=typeof o.id=="string"?o.id.trim():"";if(!l)return;const c=typeof o.name=="string"?o.name.trim():void 0,d=o.default===!0;s.push({id:l,name:c||void 0,isDefault:d})}),s}function rv(e,t){const n=lv(e),s=Object.keys(t?.agents??{}),a=new Map;n.forEach(l=>a.set(l.id,l)),s.forEach(l=>{a.has(l)||a.set(l,{id:l})});const o=Array.from(a.values());return o.length===0&&o.push({id:"main",isDefault:!0}),o.sort((l,c)=>{if(l.isDefault&&!c.isDefault)return-1;if(!l.isDefault&&c.isDefault)return 1;const d=l.name?.trim()?l.name:l.id,g=c.name?.trim()?c.name:c.id;return d.localeCompare(g)}),o}function cv(e,t){return e===Qe?Qe:e&&t.some(n=>n.id===e)?e:Qe}function dv(e){const t=e.execApprovalsForm??e.execApprovalsSnapshot?.file??null,n=!!t,s=iv(t),a=rv(e.configForm,t),o=xv(e.nodes),l=e.execApprovalsTarget;let c=l==="node"&&e.execApprovalsTargetNodeId?e.execApprovalsTargetNodeId:null;l==="node"&&c&&!o.some(p=>p.id===c)&&(c=null);const d=cv(e.execApprovalsSelectedAgent,a),g=d!==Qe?(t?.agents??{})[d]??null:null,h=Array.isArray(g?.allowlist)?g.allowlist??[]:[];return{ready:n,disabled:e.execApprovalsSaving||e.execApprovalsLoading,dirty:e.execApprovalsDirty,loading:e.execApprovalsLoading,saving:e.execApprovalsSaving,form:t,defaults:s,selectedScope:d,selectedAgent:g,agents:a,allowlist:h,target:l,targetNodeId:c,targetNodes:o,onSelectScope:e.onExecApprovalsSelectAgent,onSelectTarget:e.onExecApprovalsTargetChange,onPatch:e.onExecApprovalsPatch,onRemove:e.onExecApprovalsRemove,onLoad:e.onLoadExecApprovals,onSave:e.onSaveExecApprovals}}function uv(e){const t=e.nodes.length>0,n=e.defaultBinding??"";return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">${i("nodesBindingTitle")}</div>
          <div class="card-sub">
            ${i("nodesBindingSub")}<span class="mono">exec host=node</span>.
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.configDirty}
          @click=${e.onSave}
        >
          ${e.configSaving?i("commonSaving"):i("commonSave")}
        </button>
      </div>

      ${e.formMode==="raw"?r`
              <div class="callout warn" style="margin-top: 12px">
                ${i("nodesBindingFormModeHint")}
              </div>
            `:v}

      ${e.ready?r`
            <div class="list" style="margin-top: 16px;">
              <div class="list-item">
                <div class="list-main">
                  <div class="list-title">${i("nodesDefaultBinding")}</div>
                  <div class="list-sub">${i("nodesDefaultBindingSub")}</div>
                </div>
                <div class="list-meta">
                  <label class="field">
                    <span>${i("nodesNodeLabel")}</span>
                    <select
                      ?disabled=${e.disabled||!t}
                      @change=${s=>{const o=s.target.value.trim();e.onBindDefault(o||null)}}
                    >
                      <option value="" ?selected=${n===""}>${i("nodesAnyNode")}</option>
                      ${e.nodes.map(s=>r`<option
                            value=${s.id}
                            ?selected=${n===s.id}
                          >
                            ${s.label}
                          </option>`)}
                    </select>
                  </label>
                  ${t?v:r`
                          <div class="muted">${i("nodesNoNodesSystemRun")}</div>
                        `}
                </div>
              </div>

              ${e.agents.length===0?r`
                      <div class="muted">${i("nodesNoAgentsFound")}</div>
                    `:e.agents.map(s=>bv(s,e))}
            </div>
          `:r`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">${i("nodesLoadConfigHint")}</div>
            <button class="btn" ?disabled=${e.configLoading} @click=${e.onLoadConfig}>
              ${e.configLoading?i("commonLoading"):i("nodesLoadConfig")}
            </button>
          </div>`}
    </section>
  `}function gv(e){const t=e.ready,n=e.target!=="node"||!!e.targetNodeId;return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">${i("nodesExecApprovalsTitle")}</div>
          <div class="card-sub">
            ${i("nodesExecApprovalsSub")}
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.dirty||!n}
          @click=${e.onSave}
        >
          ${e.saving?i("commonSaving"):i("commonSave")}
        </button>
      </div>

      ${pv(e)}

      ${t?r`
            ${hv(e)}
            ${mv(e)}
            ${e.selectedScope===Qe?v:fv(e)}
          `:r`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">${i("nodesLoadExecApprovalsHint")}</div>
            <button class="btn" ?disabled=${e.loading||!n} @click=${e.onLoad}>
              ${e.loading?i("commonLoading"):i("nodesLoadApprovals")}
            </button>
          </div>`}
    </section>
  `}function pv(e){const t=e.targetNodes.length>0,n=e.targetNodeId??"";return r`
    <div class="list" style="margin-top: 12px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${i("nodesTarget")}</div>
          <div class="list-sub">
            ${i("nodesTargetSub")}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${i("nodesHost")}</span>
            <select
              ?disabled=${e.disabled}
              @change=${s=>{if(s.target.value==="node"){const l=e.targetNodes[0]?.id??null;e.onSelectTarget("node",n||l)}else e.onSelectTarget("gateway",null)}}
            >
              <option value="gateway" ?selected=${e.target==="gateway"}>${i("nodesHostGateway")}</option>
              <option value="node" ?selected=${e.target==="node"}>${i("nodesHostNode")}</option>
            </select>
          </label>
          ${e.target==="node"?r`
                <label class="field">
                  <span>${i("nodesNodeLabel")}</span>
                  <select
                    ?disabled=${e.disabled||!t}
                    @change=${s=>{const o=s.target.value.trim();e.onSelectTarget("node",o||null)}}
                  >
                    <option value="" ?selected=${n===""}>${i("nodesSelectNode")}</option>
                    ${e.targetNodes.map(s=>r`<option
                          value=${s.id}
                          ?selected=${n===s.id}
                        >
                          ${s.label}
                        </option>`)}
                  </select>
                </label>
              `:v}
        </div>
      </div>
      ${e.target==="node"&&!t?r`
              <div class="muted">${i("nodesNoNodesExecApprovals")}</div>
            `:v}
    </div>
  `}function hv(e){return r`
    <div class="row" style="margin-top: 12px; gap: 8px; flex-wrap: wrap;">
      <span class="label">${i("nodesScope")}</span>
      <div class="row" style="gap: 8px; flex-wrap: wrap;">
        <button
          class="btn btn--sm ${e.selectedScope===Qe?"active":""}"
          @click=${()=>e.onSelectScope(Qe)}
        >
          ${i("nodesDefaults")}
        </button>
        ${e.agents.map(t=>{const n=t.name?.trim()?`${t.name} (${t.id})`:t.id;return r`
            <button
              class="btn btn--sm ${e.selectedScope===t.id?"active":""}"
              @click=${()=>e.onSelectScope(t.id)}
            >
              ${n}
            </button>
          `})}
      </div>
    </div>
  `}function mv(e){const t=e.selectedScope===Qe,n=e.defaults,s=e.selectedAgent??{},a=t?["defaults"]:["agents",e.selectedScope],o=typeof s.security=="string"?s.security:void 0,l=typeof s.ask=="string"?s.ask:void 0,c=typeof s.askFallback=="string"?s.askFallback:void 0,d=t?n.security:o??"__default__",g=t?n.ask:l??"__default__",h=t?n.askFallback:c??"__default__",p=typeof s.autoAllowSkills=="boolean"?s.autoAllowSkills:void 0,f=p??n.autoAllowSkills,u=p==null;return r`
    <div class="list" style="margin-top: 16px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${i("nodesSecurity")}</div>
          <div class="list-sub">
            ${t?i("nodesSecurityDefaultSub"):`${i("nodesSecurityAgentSubPrefix")}${n.security}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${i("nodesMode")}</span>
            <select
              ?disabled=${e.disabled}
              @change=${m=>{const w=m.target.value;!t&&w==="__default__"?e.onRemove([...a,"security"]):e.onPatch([...a,"security"],w)}}
            >
              ${t?v:r`<option value="__default__" ?selected=${d==="__default__"}>
                    ${i("nodesUseDefaultPrefix")}${n.security})
                  </option>`}
              ${Gi.map(m=>r`<option
                    value=${m.value}
                    ?selected=${d===m.value}
                  >
                    ${i(m.labelKey)}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${i("nodesAsk")}</div>
          <div class="list-sub">
            ${t?i("nodesAskDefaultSub"):`${i("nodesAskAgentSubPrefix")}${n.ask}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${i("nodesMode")}</span>
            <select
              ?disabled=${e.disabled}
              @change=${m=>{const w=m.target.value;!t&&w==="__default__"?e.onRemove([...a,"ask"]):e.onPatch([...a,"ask"],w)}}
            >
              ${t?v:r`<option value="__default__" ?selected=${g==="__default__"}>
                    ${i("nodesUseDefaultPrefix")}${n.ask})
                  </option>`}
              ${sv.map(m=>r`<option
                    value=${m.value}
                    ?selected=${g===m.value}
                  >
                    ${i(m.labelKey)}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${i("nodesAskFallback")}</div>
          <div class="list-sub">
            ${t?i("nodesAskFallbackDefaultSub"):`${i("nodesAskFallbackAgentSubPrefix")}${n.askFallback}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${i("nodesFallback")}</span>
            <select
              ?disabled=${e.disabled}
              @change=${m=>{const w=m.target.value;!t&&w==="__default__"?e.onRemove([...a,"askFallback"]):e.onPatch([...a,"askFallback"],w)}}
            >
              ${t?v:r`<option value="__default__" ?selected=${h==="__default__"}>
                    ${i("nodesUseDefaultPrefix")}${n.askFallback})
                  </option>`}
              ${Gi.map(m=>r`<option
                    value=${m.value}
                    ?selected=${h===m.value}
                  >
                    ${i(m.labelKey)}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${i("nodesAutoAllowSkills")}</div>
          <div class="list-sub">
            ${t?i("nodesAutoAllowSkillsDefaultSub"):u?`${i("nodesAutoAllowSkillsUsingDefault")}${n.autoAllowSkills?"on":"off"}).`:`${i("nodesAutoAllowSkillsOverride")}${f?"on":"off"}).`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${i("nodesEnabled")}</span>
            <input
              type="checkbox"
              ?disabled=${e.disabled}
              .checked=${f}
              @change=${m=>{const b=m.target;e.onPatch([...a,"autoAllowSkills"],b.checked)}}
            />
          </label>
          ${!t&&!u?r`<button
                class="btn btn--sm"
                ?disabled=${e.disabled}
                @click=${()=>e.onRemove([...a,"autoAllowSkills"])}
              >
                ${i("nodesUseDefaultButton")}
              </button>`:v}
        </div>
      </div>
    </div>
  `}function fv(e){const t=["agents",e.selectedScope,"allowlist"],n=e.allowlist;return r`
    <div class="row" style="margin-top: 18px; justify-content: space-between;">
      <div>
        <div class="card-title">${i("nodesAllowlist")}</div>
        <div class="card-sub">${i("nodesAllowlistSub")}</div>
      </div>
      <button
        class="btn btn--sm"
        ?disabled=${e.disabled}
        @click=${()=>{const s=[...n,{pattern:""}];e.onPatch(t,s)}}
      >
        ${i("nodesAddPattern")}
      </button>
    </div>
    <div class="list" style="margin-top: 12px;">
      ${n.length===0?r`
              <div class="muted">${i("nodesNoAllowlistEntries")}</div>
            `:n.map((s,a)=>vv(e,s,a))}
    </div>
  `}function vv(e,t,n){const s=t.lastUsedAt?Q(t.lastUsedAt):i("nodesNever"),a=t.lastUsedCommand?Ys(t.lastUsedCommand,120):null,o=t.lastResolvedPath?Ys(t.lastResolvedPath,120):null;return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${t.pattern?.trim()?t.pattern:i("nodesNewPattern")}</div>
        <div class="list-sub">${i("nodesLastUsedPrefix")}${s}</div>
        ${a?r`<div class="list-sub mono">${a}</div>`:v}
        ${o?r`<div class="list-sub mono">${o}</div>`:v}
      </div>
      <div class="list-meta">
        <label class="field">
          <span>${i("nodesPattern")}</span>
          <input
            type="text"
            .value=${t.pattern??""}
            ?disabled=${e.disabled}
            @input=${l=>{const c=l.target;e.onPatch(["agents",e.selectedScope,"allowlist",n,"pattern"],c.value)}}
          />
        </label>
        <button
          class="btn btn--sm danger"
          ?disabled=${e.disabled}
          @click=${()=>{if(e.allowlist.length<=1){e.onRemove(["agents",e.selectedScope,"allowlist"]);return}e.onRemove(["agents",e.selectedScope,"allowlist",n])}}
        >
          ${i("nodesRemove")}
        </button>
      </div>
    </div>
  `}function bv(e,t){const n=e.binding??"__default__",s=e.name?.trim()?`${e.name} (${e.id})`:e.id,a=t.nodes.length>0;return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${s}</div>
        <div class="list-sub">
          ${e.isDefault?i("nodesDefaultAgent"):i("nodesAgent")} ·
          ${n==="__default__"?`${i("nodesUsesDefault")}${t.defaultBinding??"any"})`:`${i("nodesOverride")}${e.binding}`}
        </div>
      </div>
      <div class="list-meta">
        <label class="field">
          <span>${i("nodesBinding")}</span>
          <select
            ?disabled=${t.disabled||!a}
            @change=${o=>{const c=o.target.value.trim();t.onBindAgent(e.index,c==="__default__"?null:c)}}
          >
            <option value="__default__" ?selected=${n==="__default__"}>
              ${i("nodesUseDefaultButton")}
            </option>
            ${t.nodes.map(o=>r`<option
                  value=${o.id}
                  ?selected=${n===o.id}
                >
                  ${o.label}
                </option>`)}
          </select>
        </label>
      </div>
    </div>
  `}function yv(e){const t=[];for(const n of e){if(!(Array.isArray(n.commands)?n.commands:[]).some(c=>String(c)==="system.run"))continue;const o=typeof n.nodeId=="string"?n.nodeId.trim():"";if(!o)continue;const l=typeof n.displayName=="string"&&n.displayName.trim()?n.displayName.trim():o;t.push({id:o,label:l===o?o:`${l} · ${o}`})}return t.sort((n,s)=>n.label.localeCompare(s.label)),t}function xv(e){const t=[];for(const n of e){if(!(Array.isArray(n.commands)?n.commands:[]).some(c=>String(c)==="system.execApprovals.get"||String(c)==="system.execApprovals.set"))continue;const o=typeof n.nodeId=="string"?n.nodeId.trim():"";if(!o)continue;const l=typeof n.displayName=="string"&&n.displayName.trim()?n.displayName.trim():o;t.push({id:o,label:l===o?o:`${l} · ${o}`})}return t.sort((n,s)=>n.label.localeCompare(s.label)),t}function wv(e){const t={id:"main",name:void 0,index:0,isDefault:!0,binding:null};if(!e||typeof e!="object")return{defaultBinding:null,agents:[t]};const s=(e.tools??{}).exec??{},a=typeof s.node=="string"&&s.node.trim()?s.node.trim():null,o=e.agents??{},l=Array.isArray(o.list)?o.list:[];if(l.length===0)return{defaultBinding:a,agents:[t]};const c=[];return l.forEach((d,g)=>{if(!d||typeof d!="object")return;const h=d,p=typeof h.id=="string"?h.id.trim():"";if(!p)return;const f=typeof h.name=="string"?h.name.trim():void 0,u=h.default===!0,b=(h.tools??{}).exec??{},w=typeof b.node=="string"&&b.node.trim()?b.node.trim():null;c.push({id:p,name:f||void 0,index:g,isDefault:u,binding:w})}),c.length===0&&c.push(t),{defaultBinding:a,agents:c}}function $v(e){const t=!!e.connected,n=!!e.paired,s=typeof e.displayName=="string"&&e.displayName.trim()||(typeof e.nodeId=="string"?e.nodeId:"unknown"),a=Array.isArray(e.caps)?e.caps:[],o=Array.isArray(e.commands)?e.commands:[];return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${s}</div>
        <div class="list-sub">
          ${typeof e.nodeId=="string"?e.nodeId:""}
          ${typeof e.remoteIp=="string"?` · ${e.remoteIp}`:""}
          ${typeof e.version=="string"?` · ${e.version}`:""}
        </div>
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${i(n?"nodesChipPaired":"nodesChipUnpaired")}</span>
          <span class="chip ${t?"chip-ok":"chip-warn"}">
            ${i(t?"nodesConnected":"nodesOffline")}
          </span>
          ${a.slice(0,12).map(l=>r`<span class="chip">${String(l)}</span>`)}
          ${o.slice(0,8).map(l=>r`<span class="chip">${String(l)}</span>`)}
        </div>
      </div>
    </div>
  `}function Sv(e){const t=e.hello?.snapshot,n=t?.uptimeMs?xl(t.uptimeMs):"n/a",s=t?.policy?.tickIntervalMs?`${t.policy.tickIntervalMs}ms`:"n/a",a=(()=>{if(e.connected||!e.lastError)return null;const l=e.lastError.toLowerCase();if(!(l.includes("unauthorized")||l.includes("connect failed")))return null;const d=!!e.settings.token.trim(),g=!!e.password.trim();return!d&&!g?r`
        <div class="muted" style="margin-top: 8px">
          This gateway requires auth. Add a token or password, then click Connect.
          <div style="margin-top: 6px">
            <span class="mono">openclaw dashboard --no-open</span> → open the Control UI<br />
            <span class="mono">openclaw doctor --generate-gateway-token</span> → set token
          </div>
          <div style="margin-top: 6px">
            <a
              class="session-link"
              href="https://docs.openclaw.ai/web/dashboard"
              target="_blank"
              rel="noreferrer"
              title="Control UI auth docs (opens in new tab)"
              >Docs: Control UI auth</a
            >
          </div>
        </div>
      `:r`
      <div class="muted" style="margin-top: 8px">
        Auth failed. Update the token or password in Control UI settings, then click Connect.
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/dashboard"
            target="_blank"
            rel="noreferrer"
            title="Control UI auth docs (opens in new tab)"
            >Docs: Control UI auth</a
          >
        </div>
      </div>
    `})(),o=(()=>{if(e.connected||!e.lastError||(typeof window<"u"?window.isSecureContext:!0))return null;const c=e.lastError.toLowerCase();return!c.includes("secure context")&&!c.includes("device identity required")?null:r`
      <div class="muted" style="margin-top: 8px">
        This page is HTTP, so the browser blocks device identity. Use HTTPS (Tailscale Serve) or open
        <span class="mono">http://127.0.0.1:18789</span> on the gateway host.
        <div style="margin-top: 6px">
          If you must stay on HTTP, set
          <span class="mono">gateway.controlUi.allowInsecureAuth: true</span> (token-only).
        </div>
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/gateway/tailscale"
            target="_blank"
            rel="noreferrer"
            title="Tailscale Serve docs (opens in new tab)"
            >Docs: Tailscale Serve</a
          >
          <span class="muted"> · </span>
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/control-ui#insecure-http"
            target="_blank"
            rel="noreferrer"
            title="Insecure HTTP docs (opens in new tab)"
            >Docs: Insecure HTTP</a
          >
        </div>
      </div>
    `})();return r`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">${i("overviewGatewayAccess")}</div>
        <div class="card-sub">${i("overviewGatewayAccessSub")}</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>${i("overviewWebSocketUrl")}</span>
            <input
              .value=${e.settings.gatewayUrl}
              @input=${l=>{const c=l.target.value;e.onSettingsChange({...e.settings,gatewayUrl:c})}}
              placeholder="ws://100.x.y.z:18789"
            />
          </label>
          <label class="field">
            <span>${i("overviewGatewayToken")}</span>
            <input
              .value=${e.settings.token}
              @input=${l=>{const c=l.target.value;e.onSettingsChange({...e.settings,token:c})}}
              placeholder="OPENCLAW_GATEWAY_TOKEN"
            />
          </label>
          <label class="field">
            <span>${i("overviewPassword")}</span>
            <input
              type="password"
              .value=${e.password}
              @input=${l=>{const c=l.target.value;e.onPasswordChange(c)}}
              placeholder="system or shared password"
            />
          </label>
          <label class="field">
            <span>${i("overviewDefaultSessionKey")}</span>
            <input
              .value=${e.settings.sessionKey}
              @input=${l=>{const c=l.target.value;e.onSessionKeyChange(c)}}
            />
          </label>
        </div>
        <div class="row" style="margin-top: 14px;">
          <button class="btn" @click=${()=>e.onConnect()}>${i("overviewConnect")}</button>
          <button class="btn" @click=${()=>e.onRefresh()}>${i("overviewRefresh")}</button>
          <span class="muted">${i("overviewConnectHint")}</span>
        </div>
      </div>

      <div class="card">
        <div class="card-title">${i("overviewSnapshot")}</div>
        <div class="card-sub">${i("overviewSnapshotSub")}</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">${i("overviewStatus")}</div>
            <div class="stat-value ${e.connected?"ok":"warn"}">
              ${e.connected?i("overviewConnected"):i("overviewDisconnected")}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">${i("overviewUptime")}</div>
            <div class="stat-value">${n}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${i("overviewTickInterval")}</div>
            <div class="stat-value">${s}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${i("overviewLastChannelsRefresh")}</div>
            <div class="stat-value">
              ${e.lastChannelsRefresh?Q(e.lastChannelsRefresh):"n/a"}
            </div>
          </div>
        </div>
        ${e.lastError?r`<div class="callout danger" style="margin-top: 14px;">
              <div>${e.lastError}</div>
              ${a??""}
              ${o??""}
            </div>`:r`
                <div class="callout" style="margin-top: 14px">
                  ${i("overviewChannelsHint")}
                </div>
              `}
      </div>
    </section>

    <section class="grid grid-cols-3" style="margin-top: 18px;">
      <div class="card stat-card">
        <div class="stat-label">${i("overviewInstances")}</div>
        <div class="stat-value">${e.presenceCount}</div>
        <div class="muted">${i("overviewInstancesSub")}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">${i("overviewSessions")}</div>
        <div class="stat-value">${e.sessionsCount??"n/a"}</div>
        <div class="muted">${i("overviewSessionsSub")}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">${i("overviewCron")}</div>
        <div class="stat-value">
          ${e.cronEnabled==null?"n/a":e.cronEnabled?i("overviewCronEnabled"):i("overviewCronDisabled")}
        </div>
        <div class="muted">${i("overviewCronNext")} ${Qa(e.cronNext)}</div>
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${i("overviewNotes")}</div>
      <div class="card-sub">${i("overviewNotesSub")}</div>
      <div class="note-grid" style="margin-top: 14px;">
        <div>
          <div class="note-title">${i("overviewNoteTailscale")}</div>
          <div class="muted">${i("overviewNoteTailscaleSub")}</div>
        </div>
        <div>
          <div class="note-title">${i("overviewNoteSessionHygiene")}</div>
          <div class="muted">${i("overviewNoteSessionHygieneSub")}</div>
        </div>
        <div>
          <div class="note-title">${i("overviewNoteCron")}</div>
          <div class="muted">${i("overviewNoteCronSub")}</div>
        </div>
      </div>
    </section>
  `}const kv=["","off","minimal","low","medium","high","xhigh"],Av=["","off","on"];function Cv(){return[{value:"",label:i("commonInherit")},{value:"off",label:i("commonOffExplicit")},{value:"on",label:"on"}]}const Qi=["","off","on","stream"];function Tv(e){if(!e)return"";const t=e.trim().toLowerCase();return t==="z.ai"||t==="z-ai"?"zai":t}function Hr(e){return Tv(e)==="zai"}function Mv(e){return Hr(e)?Av:kv}function Yi(e,t){return t?e.includes(t)?[...e]:[...e,t]:[...e]}function Ev(e,t){return!t||!e||e==="off"?e:"on"}function Lv(e,t){return e?t&&e==="on"?"low":e:null}function Iv(e){const t=e.result?.sessions??[];return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${i("sessionsTitle")}</div>
          <div class="card-sub">${i("sessionsSub")}</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?i("commonLoading"):i("commonRefresh")}
        </button>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field">
          <span>${i("sessionsActiveWithin")}</span>
          <input
            .value=${e.activeMinutes}
            @input=${n=>e.onFiltersChange({activeMinutes:n.target.value,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field">
          <span>${i("sessionsLimit")}</span>
          <input
            .value=${e.limit}
            @input=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:n.target.value,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field checkbox">
          <span>${i("sessionsIncludeGlobal")}</span>
          <input
            type="checkbox"
            .checked=${e.includeGlobal}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:n.target.checked,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field checkbox">
          <span>${i("sessionsIncludeUnknown")}</span>
          <input
            type="checkbox"
            .checked=${e.includeUnknown}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:n.target.checked})}
          />
        </label>
      </div>

      ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}

      <div class="muted" style="margin-top: 12px;">
        ${e.result?`${i("sessionsStore")}: ${e.result.path}`:""}
      </div>

      <div class="table" style="margin-top: 16px;">
        <div class="table-head">
          <div>${i("sessionsKey")}</div>
          <div>${i("sessionsLabel")}</div>
          <div>${i("sessionsKind")}</div>
          <div>${i("sessionsUpdated")}</div>
          <div>${i("sessionsTokens")}</div>
          <div>${i("sessionsThinking")}</div>
          <div>${i("sessionsVerbose")}</div>
          <div>${i("sessionsReasoning")}</div>
          <div>${i("sessionsActions")}</div>
        </div>
        ${t.length===0?r`
                <div class="muted">${i("sessionsNoFound")}</div>
              `:t.map(n=>_v(n,e.basePath,e.onPatch,e.onDelete,e.loading))}
      </div>
    </section>
  `}function _v(e,t,n,s,a){const o=e.updatedAt?Q(e.updatedAt):"n/a",l=e.thinkingLevel??"",c=Hr(e.modelProvider),d=Ev(l,c),g=Yi(Mv(e.modelProvider),d);e.verboseLevel;const h=e.reasoningLevel??"";Yi(Qi,h);const p=typeof e.displayName=="string"&&e.displayName.trim().length>0?e.displayName.trim():null,f=typeof e.label=="string"?e.label.trim():"",u=!!(p&&p!==e.key&&p!==f),m=e.kind!=="global",b=m?`${os("chat",t)}?session=${encodeURIComponent(e.key)}`:null;return r`
    <div class="table-row">
      <div class="mono session-key-cell">
        ${m?r`<a href=${b} class="session-link">${e.key}</a>`:e.key}
        ${u?r`<span class="muted session-key-display-name">${p}</span>`:v}
      </div>
      <div>
        <input
          .value=${e.label??""}
          ?disabled=${a}
          placeholder=${i("commonOptional")}
          @change=${w=>{const k=w.target.value.trim();n(e.key,{label:k||null})}}
        />
      </div>
      <div>${e.kind}</div>
      <div>${o}</div>
      <div>${Vg(e)}</div>
      <div>
        <select
          ?disabled=${a}
          @change=${w=>{const k=w.target.value;n(e.key,{thinkingLevel:Lv(k,c)})}}
        >
          ${g.map(w=>r`<option value=${w}>${w||i("commonInherit")}</option>`)}
        </select>
      </div>
      <div>
        <select
          ?disabled=${a}
          @change=${w=>{const k=w.target.value;n(e.key,{verboseLevel:k||null})}}
        >
          ${Cv().map(w=>r`<option value=${w.value}>${w.label}</option>`)}
        </select>
      </div>
      <div>
        <select
          ?disabled=${a}
          @change=${w=>{const k=w.target.value;n(e.key,{reasoningLevel:k||null})}}
        >
          ${Qi.map(w=>r`<option value=${w}>${w||i("commonInherit")}</option>`)}
        </select>
      </div>
      <div>
        <button class="btn danger" ?disabled=${a} @click=${()=>s(e.key)}>
          ${i("commonDelete")}
        </button>
      </div>
    </div>
  `}function Dv(){return[{id:"workspace",label:i("skillsWorkspace"),sources:["openclaw-workspace"]},{id:"built-in",label:i("skillsBuiltIn"),sources:["openclaw-bundled"]},{id:"installed",label:i("skillsInstalled"),sources:["openclaw-managed"]},{id:"extra",label:i("skillsExtra"),sources:["openclaw-extra"]}]}function Rv(e){const t=Dv(),n=new Map;for(const l of t)n.set(l.id,{id:l.id,label:l.label,skills:[]});const s=t.find(l=>l.id==="built-in"),a={id:"other",label:i("skillsOther"),skills:[]};for(const l of e){const c=l.bundled?s:t.find(d=>d.sources.includes(l.source));c?n.get(c.id)?.skills.push(l):a.skills.push(l)}const o=t.map(l=>n.get(l.id)).filter(l=>!!(l&&l.skills.length>0));return a.skills.length>0&&o.push(a),o}function Pv(e){const t=e.report?.skills??[],n=e.filter.trim().toLowerCase(),s=n?t.filter(o=>[o.name,o.description,o.source].join(" ").toLowerCase().includes(n)):t,a=Rv(s);return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${i("skillsTitle")}</div>
          <div class="card-sub">${i("skillsSub")}</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?i("commonLoading"):i("commonRefresh")}
        </button>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="flex: 1;">
          <span>${i("commonFilter")}</span>
          <input
            .value=${e.filter}
            @input=${o=>e.onFilterChange(o.target.value)}
            placeholder=${i("skillsSearchPlaceholder")}
          />
        </label>
        <div class="muted">${s.length} ${i("skillsShown")}</div>
      </div>

      ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}

      ${s.length===0?r`
              <div class="muted" style="margin-top: 16px">No skills found.</div>
            `:r`
            <div class="agent-skills-groups" style="margin-top: 16px;">
              ${a.map(o=>{const l=o.id==="workspace"||o.id==="built-in";return r`
                  <details class="agent-skills-group" ?open=${!l}>
                    <summary class="agent-skills-header">
                      <span>${o.label}</span>
                      <span class="muted">${o.skills.length}</span>
                    </summary>
                    <div class="list skills-grid">
                      ${o.skills.map(c=>Nv(c,e))}
                    </div>
                  </details>
                `})}
            </div>
          `}
    </section>
  `}function Nv(e,t){const n=t.busyKey===e.skillKey,s=t.edits[e.skillKey]??"",a=t.messages[e.skillKey]??null,o=e.install.length>0&&e.missing.bins.length>0,l=!!(e.bundled&&e.source!=="openclaw-bundled"),c=[...e.missing.bins.map(g=>`bin:${g}`),...e.missing.env.map(g=>`env:${g}`),...e.missing.config.map(g=>`config:${g}`),...e.missing.os.map(g=>`os:${g}`)],d=[];return e.disabled&&d.push("disabled"),e.blockedByAllowlist&&d.push("blocked by allowlist"),r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">
          ${e.emoji?`${e.emoji} `:""}${e.name}
        </div>
        <div class="list-sub">${Ys(e.description,140)}</div>
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${e.source}</span>
          ${l?r`
                  <span class="chip">bundled</span>
                `:v}
          <span class="chip ${e.eligible?"chip-ok":"chip-warn"}">
            ${e.eligible?"eligible":"blocked"}
          </span>
          ${e.disabled?r`
                  <span class="chip chip-warn">disabled</span>
                `:v}
        </div>
        ${c.length>0?r`
              <div class="muted" style="margin-top: 6px;">
                Missing: ${c.join(", ")}
              </div>
            `:v}
        ${d.length>0?r`
              <div class="muted" style="margin-top: 6px;">
                Reason: ${d.join(", ")}
              </div>
            `:v}
      </div>
      <div class="list-meta">
        <div class="row" style="justify-content: flex-end; flex-wrap: wrap;">
          <button
            class="btn"
            ?disabled=${n}
            @click=${()=>t.onToggle(e.skillKey,e.disabled)}
          >
            ${e.disabled?"Enable":"Disable"}
          </button>
          ${o?r`<button
                class="btn"
                ?disabled=${n}
                @click=${()=>t.onInstall(e.skillKey,e.name,e.install[0].id)}
              >
                ${n?"Installing…":e.install[0].label}
              </button>`:v}
        </div>
        ${a?r`<div
              class="muted"
              style="margin-top: 8px; color: ${a.kind==="error"?"var(--danger-color, #d14343)":"var(--success-color, #0a7f5a)"};"
            >
              ${a.message}
            </div>`:v}
        ${e.primaryEnv?r`
              <div class="field" style="margin-top: 10px;">
                <span>API key</span>
                <input
                  type="password"
                  .value=${s}
                  @input=${g=>t.onEdit(e.skillKey,g.target.value)}
                />
              </div>
              <button
                class="btn primary"
                style="margin-top: 8px;"
                ?disabled=${n}
                @click=${()=>t.onSaveKey(e.skillKey)}
              >
                Save key
              </button>
            `:v}
      </div>
    </div>
  `}const Fv=new Set(["agent","channel","chat","provider","model","tool","label","key","session","id","has","mintokens","maxtokens","mincost","maxcost","minmessages","maxmessages"]),Vn=e=>e.trim().toLowerCase(),Ov=e=>{const t=e.replace(/[.+^${}()|[\]\\]/g,"\\$&").replace(/\*/g,".*").replace(/\?/g,".");return new RegExp(`^${t}$`,"i")},ct=e=>{let t=e.trim().toLowerCase();if(!t)return null;t.startsWith("$")&&(t=t.slice(1));let n=1;t.endsWith("k")?(n=1e3,t=t.slice(0,-1)):t.endsWith("m")&&(n=1e6,t=t.slice(0,-1));const s=Number(t);return Number.isFinite(s)?s*n:null},lo=e=>(e.match(/"[^"]+"|\S+/g)??[]).map(n=>{const s=n.replace(/^"|"$/g,""),a=s.indexOf(":");if(a>0){const o=s.slice(0,a),l=s.slice(a+1);return{key:o,value:l,raw:s}}return{value:s,raw:s}}),Uv=e=>[e.label,e.key,e.sessionId].filter(n=>!!n).map(n=>n.toLowerCase()),Ji=e=>{const t=new Set;e.modelProvider&&t.add(e.modelProvider.toLowerCase()),e.providerOverride&&t.add(e.providerOverride.toLowerCase()),e.origin?.provider&&t.add(e.origin.provider.toLowerCase());for(const n of e.usage?.modelUsage??[])n.provider&&t.add(n.provider.toLowerCase());return Array.from(t)},Zi=e=>{const t=new Set;e.model&&t.add(e.model.toLowerCase());for(const n of e.usage?.modelUsage??[])n.model&&t.add(n.model.toLowerCase());return Array.from(t)},Bv=e=>(e.usage?.toolUsage?.tools??[]).map(t=>t.name.toLowerCase()),Hv=(e,t)=>{const n=Vn(t.value??"");if(!n)return!0;if(!t.key)return Uv(e).some(a=>a.includes(n));switch(Vn(t.key)){case"agent":return e.agentId?.toLowerCase().includes(n)??!1;case"channel":return e.channel?.toLowerCase().includes(n)??!1;case"chat":return e.chatType?.toLowerCase().includes(n)??!1;case"provider":return Ji(e).some(a=>a.includes(n));case"model":return Zi(e).some(a=>a.includes(n));case"tool":return Bv(e).some(a=>a.includes(n));case"label":return e.label?.toLowerCase().includes(n)??!1;case"key":case"session":case"id":if(n.includes("*")||n.includes("?")){const a=Ov(n);return a.test(e.key)||(e.sessionId?a.test(e.sessionId):!1)}return e.key.toLowerCase().includes(n)||(e.sessionId?.toLowerCase().includes(n)??!1);case"has":switch(n){case"tools":return(e.usage?.toolUsage?.totalCalls??0)>0;case"errors":return(e.usage?.messageCounts?.errors??0)>0;case"context":return!!e.contextWeight;case"usage":return!!e.usage;case"model":return Zi(e).length>0;case"provider":return Ji(e).length>0;default:return!0}case"mintokens":{const a=ct(n);return a===null?!0:(e.usage?.totalTokens??0)>=a}case"maxtokens":{const a=ct(n);return a===null?!0:(e.usage?.totalTokens??0)<=a}case"mincost":{const a=ct(n);return a===null?!0:(e.usage?.totalCost??0)>=a}case"maxcost":{const a=ct(n);return a===null?!0:(e.usage?.totalCost??0)<=a}case"minmessages":{const a=ct(n);return a===null?!0:(e.usage?.messageCounts?.total??0)>=a}case"maxmessages":{const a=ct(n);return a===null?!0:(e.usage?.messageCounts?.total??0)<=a}default:return!0}},zv=(e,t)=>{const n=lo(t);if(n.length===0)return{sessions:e,warnings:[]};const s=[];for(const o of n){if(!o.key)continue;const l=Vn(o.key);if(!Fv.has(l)){s.push(`Unknown filter: ${o.key}`);continue}if(o.value===""&&s.push(`Missing value for ${o.key}`),l==="has"){const c=new Set(["tools","errors","context","usage","model","provider"]);o.value&&!c.has(Vn(o.value))&&s.push(`Unknown has:${o.value}`)}["mintokens","maxtokens","mincost","maxcost","minmessages","maxmessages"].includes(l)&&o.value&&ct(o.value)===null&&s.push(`Invalid number for ${o.key}`)}return{sessions:e.filter(o=>n.every(l=>Hv(o,l))),warnings:s}};function Wv(e){const t=e.split(`
`),n=new Map,s=[];for(const c of t){const d=/^\[Tool:\s*([^\]]+)\]/.exec(c.trim());if(d){const g=d[1];n.set(g,(n.get(g)??0)+1);continue}c.trim().startsWith("[Tool Result]")||s.push(c)}const a=Array.from(n.entries()).toSorted((c,d)=>d[1]-c[1]),o=a.reduce((c,[,d])=>c+d,0),l=a.length>0?`Tools: ${a.map(([c,d])=>`${c}×${d}`).join(", ")} (${o} calls)`:"";return{tools:a,summary:l,cleanContent:s.join(`
`).trim()}}const Kv=`
  .usage-page-header {
    margin: 4px 0 12px;
  }
  .usage-page-title {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 4px;
  }
  .usage-page-subtitle {
    font-size: 13px;
    color: var(--text-muted);
    margin: 0 0 12px;
  }
  /* ===== FILTERS & HEADER ===== */
  .usage-filters-inline {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .usage-filters-inline select {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-filters-inline input[type="date"] {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-filters-inline input[type="text"] {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
    min-width: 180px;
  }
  .usage-filters-inline .btn-sm {
    padding: 6px 12px;
    font-size: 14px;
  }
  .usage-refresh-indicator {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: rgba(255, 77, 77, 0.1);
    border-radius: 4px;
    font-size: 12px;
    color: #ff4d4d;
  }
  .usage-refresh-indicator::before {
    content: "";
    width: 10px;
    height: 10px;
    border: 2px solid #ff4d4d;
    border-top-color: transparent;
    border-radius: 50%;
    animation: usage-spin 0.6s linear infinite;
  }
  @keyframes usage-spin {
    to { transform: rotate(360deg); }
  }
  .active-filters {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .filter-chip {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px 4px 12px;
    background: var(--accent-subtle);
    border: 1px solid var(--accent);
    border-radius: 16px;
    font-size: 12px;
  }
  .filter-chip-label {
    color: var(--accent);
    font-weight: 500;
  }
  .filter-chip-remove {
    background: none;
    border: none;
    color: var(--accent);
    cursor: pointer;
    padding: 2px 4px;
    font-size: 14px;
    line-height: 1;
    opacity: 0.7;
    transition: opacity 0.15s;
  }
  .filter-chip-remove:hover {
    opacity: 1;
  }
  .filter-clear-btn {
    padding: 4px 10px !important;
    font-size: 12px !important;
    line-height: 1 !important;
    margin-left: 8px;
  }
  .usage-query-bar {
    display: grid;
    grid-template-columns: minmax(220px, 1fr) auto;
    gap: 10px;
    align-items: center;
    /* Keep the dropdown filter row from visually touching the query row. */
    margin-bottom: 10px;
  }
  .usage-query-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: nowrap;
    justify-self: end;
  }
  .usage-query-actions .btn {
    height: 34px;
    padding: 0 14px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 13px;
    line-height: 1;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text);
    box-shadow: none;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .usage-query-actions .btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
  }
  .usage-action-btn {
    height: 34px;
    padding: 0 14px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 13px;
    line-height: 1;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text);
    box-shadow: none;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .usage-action-btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
  }
  .usage-primary-btn {
    background: #ff4d4d;
    color: #fff;
    border-color: #ff4d4d;
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.12);
  }
  .btn.usage-primary-btn {
    background: #ff4d4d !important;
    border-color: #ff4d4d !important;
    color: #fff !important;
  }
  .usage-primary-btn:hover {
    background: #e64545;
    border-color: #e64545;
  }
  .btn.usage-primary-btn:hover {
    background: #e64545 !important;
    border-color: #e64545 !important;
  }
  .usage-primary-btn:disabled {
    background: rgba(255, 77, 77, 0.18);
    border-color: rgba(255, 77, 77, 0.3);
    color: #ff4d4d;
    box-shadow: none;
    cursor: default;
    opacity: 1;
  }
  .usage-primary-btn[disabled] {
    background: rgba(255, 77, 77, 0.18) !important;
    border-color: rgba(255, 77, 77, 0.3) !important;
    color: #ff4d4d !important;
    opacity: 1 !important;
  }
  .usage-secondary-btn {
    background: var(--bg-secondary);
    color: var(--text);
    border-color: var(--border);
  }
  .usage-query-input {
    width: 100%;
    min-width: 220px;
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-query-suggestions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
  }
  .usage-query-suggestion {
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    color: var(--text);
    cursor: pointer;
    transition: background 0.15s;
  }
  .usage-query-suggestion:hover {
    background: var(--bg-hover);
  }
  .usage-filter-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    margin-top: 14px;
  }
  details.usage-filter-select {
    position: relative;
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 6px 10px;
    background: var(--bg);
    font-size: 12px;
    min-width: 140px;
  }
  details.usage-filter-select summary {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    font-weight: 500;
  }
  details.usage-filter-select summary::-webkit-details-marker {
    display: none;
  }
  .usage-filter-badge {
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-filter-popover {
    position: absolute;
    left: 0;
    top: calc(100% + 6px);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    min-width: 220px;
    z-index: 20;
  }
  .usage-filter-actions {
    display: flex;
    gap: 6px;
    margin-bottom: 8px;
  }
  .usage-filter-actions button {
    border-radius: 999px;
    padding: 4px 10px;
    font-size: 11px;
  }
  .usage-filter-options {
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-height: 200px;
    overflow: auto;
  }
  .usage-filter-option {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
  }
  .usage-query-hint {
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-query-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
  }
  .usage-query-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
  }
  .usage-query-chip button {
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 0;
    line-height: 1;
  }
  .usage-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: var(--bg);
  }
  .usage-header.pinned {
    position: sticky;
    top: 12px;
    z-index: 6;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  }
  .usage-pin-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    color: var(--text);
    cursor: pointer;
  }
  .usage-pin-btn.active {
    background: var(--accent-subtle);
    border-color: var(--accent);
    color: var(--accent);
  }
  .usage-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }
  .usage-header-title {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .usage-header-metrics {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  .usage-metric-badge {
    display: inline-flex;
    align-items: baseline;
    gap: 6px;
    padding: 2px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: transparent;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-metric-badge strong {
    font-size: 12px;
    color: var(--text);
  }
  .usage-controls {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  .usage-controls .active-filters {
    flex: 1 1 100%;
  }
  .usage-controls input[type="date"] {
    min-width: 140px;
  }
  .usage-presets {
    display: inline-flex;
    gap: 6px;
    flex-wrap: wrap;
  }
  .usage-presets .btn {
    padding: 4px 8px;
    font-size: 11px;
  }
  .usage-quick-filters {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .usage-select {
    min-width: 120px;
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 12px;
  }
  .usage-export-menu summary {
    cursor: pointer;
    font-weight: 500;
    color: var(--text);
    list-style: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .usage-export-menu summary::-webkit-details-marker {
    display: none;
  }
  .usage-export-menu {
    position: relative;
  }
  .usage-export-button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--bg);
    font-size: 12px;
  }
  .usage-export-popover {
    position: absolute;
    right: 0;
    top: calc(100% + 6px);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    min-width: 160px;
    z-index: 10;
  }
  .usage-export-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .usage-export-item {
    text-align: left;
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 12px;
  }
  .usage-summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
    margin-top: 12px;
  }
  .usage-summary-card {
    padding: 12px;
    border-radius: 8px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
  }
  .usage-mosaic {
    margin-top: 16px;
    padding: 16px;
  }
  .usage-mosaic-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 12px;
  }
  .usage-mosaic-title {
    font-weight: 600;
  }
  .usage-mosaic-sub {
    font-size: 12px;
    color: var(--text-muted);
  }
  .usage-mosaic-grid {
    display: grid;
    grid-template-columns: minmax(200px, 1fr) minmax(260px, 2fr);
    gap: 16px;
    align-items: start;
  }
  .usage-mosaic-section {
    background: var(--bg-subtle);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 12px;
  }
  .usage-mosaic-section-title {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .usage-mosaic-total {
    font-size: 20px;
    font-weight: 700;
  }
  .usage-daypart-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: 8px;
  }
  .usage-daypart-cell {
    border-radius: 8px;
    padding: 10px;
    color: var(--text);
    background: rgba(255, 77, 77, 0.08);
    border: 1px solid rgba(255, 77, 77, 0.2);
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .usage-daypart-label {
    font-size: 12px;
    font-weight: 600;
  }
  .usage-daypart-value {
    font-size: 14px;
  }
  .usage-hour-grid {
    display: grid;
    grid-template-columns: repeat(24, minmax(6px, 1fr));
    gap: 4px;
  }
  .usage-hour-cell {
    height: 28px;
    border-radius: 6px;
    background: rgba(255, 77, 77, 0.1);
    border: 1px solid rgba(255, 77, 77, 0.2);
    cursor: pointer;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .usage-hour-cell.selected {
    border-color: rgba(255, 77, 77, 0.8);
    box-shadow: 0 0 0 2px rgba(255, 77, 77, 0.2);
  }
  .usage-hour-labels {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 6px;
    margin-top: 8px;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-hour-legend {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 10px;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-hour-legend span {
    display: inline-block;
    width: 14px;
    height: 10px;
    border-radius: 4px;
    background: rgba(255, 77, 77, 0.15);
    border: 1px solid rgba(255, 77, 77, 0.2);
  }
  .usage-calendar-labels {
    display: grid;
    grid-template-columns: repeat(7, minmax(10px, 1fr));
    gap: 6px;
    font-size: 10px;
    color: var(--text-muted);
    margin-bottom: 6px;
  }
  .usage-calendar {
    display: grid;
    grid-template-columns: repeat(7, minmax(10px, 1fr));
    gap: 6px;
  }
  .usage-calendar-cell {
    height: 18px;
    border-radius: 4px;
    border: 1px solid rgba(255, 77, 77, 0.2);
    background: rgba(255, 77, 77, 0.08);
  }
  .usage-calendar-cell.empty {
    background: transparent;
    border-color: transparent;
  }
  .usage-summary-title {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 6px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .usage-info {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    margin-left: 6px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg);
    font-size: 10px;
    color: var(--text-muted);
    cursor: help;
  }
  .usage-summary-value {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-strong);
  }
  .usage-summary-value.good {
    color: #1f8f4e;
  }
  .usage-summary-value.warn {
    color: #c57a00;
  }
  .usage-summary-value.bad {
    color: #c9372c;
  }
  .usage-summary-hint {
    font-size: 10px;
    color: var(--text-muted);
    cursor: help;
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 0 6px;
    line-height: 16px;
    height: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .usage-summary-sub {
    font-size: 11px;
    color: var(--text-muted);
    margin-top: 4px;
  }
  .usage-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .usage-list-item {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    font-size: 12px;
    color: var(--text);
    align-items: flex-start;
  }
  .usage-list-value {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    text-align: right;
  }
  .usage-list-sub {
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-list-item.button {
    border: none;
    background: transparent;
    padding: 0;
    text-align: left;
    cursor: pointer;
  }
  .usage-list-item.button:hover {
    color: var(--text-strong);
  }
  .usage-list-item .muted {
    font-size: 11px;
  }
  .usage-error-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .usage-error-row {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
    align-items: center;
    font-size: 12px;
  }
  .usage-error-date {
    font-weight: 600;
  }
  .usage-error-rate {
    font-variant-numeric: tabular-nums;
  }
  .usage-error-sub {
    grid-column: 1 / -1;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 8px;
  }
  .usage-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 2px 8px;
    border: 1px solid var(--border);
    border-radius: 999px;
    font-size: 11px;
    background: var(--bg);
    color: var(--text);
  }
  .usage-meta-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
  }
  .usage-meta-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 12px;
  }
  .usage-meta-item span {
    color: var(--text-muted);
    font-size: 11px;
  }
  .usage-insights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-top: 12px;
  }
  .usage-insight-card {
    padding: 14px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
  }
  .usage-insight-title {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .usage-insight-subtitle {
    font-size: 11px;
    color: var(--text-muted);
    margin-top: 6px;
  }
  /* ===== CHART TOGGLE ===== */
  .chart-toggle {
    display: flex;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--border);
  }
  .chart-toggle .toggle-btn {
    padding: 6px 14px;
    font-size: 13px;
    background: transparent;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    transition: all 0.15s;
  }
  .chart-toggle .toggle-btn:hover {
    color: var(--text);
  }
  .chart-toggle .toggle-btn.active {
    background: #ff4d4d;
    color: white;
  }
  .chart-toggle.small .toggle-btn {
    padding: 4px 8px;
    font-size: 11px;
  }
  .sessions-toggle {
    border-radius: 4px;
  }
  .sessions-toggle .toggle-btn {
    border-radius: 4px;
  }
  .daily-chart-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    margin-bottom: 6px;
  }

  /* ===== DAILY BAR CHART ===== */
  .daily-chart {
    margin-top: 12px;
  }
  .daily-chart-bars {
    display: flex;
    align-items: flex-end;
    height: 200px;
    gap: 4px;
    padding: 8px 4px 36px;
  }
  .daily-bar-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: flex-end;
    cursor: pointer;
    position: relative;
    border-radius: 4px 4px 0 0;
    transition: background 0.15s;
    min-width: 0;
  }
  .daily-bar-wrapper:hover {
    background: var(--bg-hover);
  }
  .daily-bar-wrapper.selected {
    background: var(--accent-subtle);
  }
  .daily-bar-wrapper.selected .daily-bar {
    background: var(--accent);
  }
  .daily-bar {
    width: 100%;
    max-width: var(--bar-max-width, 32px);
    background: #ff4d4d;
    border-radius: 3px 3px 0 0;
    min-height: 2px;
    transition: all 0.15s;
    overflow: hidden;
  }
  .daily-bar-wrapper:hover .daily-bar {
    background: #cc3d3d;
  }
  .daily-bar-label {
    position: absolute;
    bottom: -28px;
    font-size: 10px;
    color: var(--text-muted);
    white-space: nowrap;
    text-align: center;
    transform: rotate(-35deg);
    transform-origin: top center;
  }
  .daily-bar-total {
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
    color: var(--text-muted);
    white-space: nowrap;
  }
  .daily-bar-tooltip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 12px;
    white-space: nowrap;
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s;
  }
  .daily-bar-wrapper:hover .daily-bar-tooltip {
    opacity: 1;
  }

  /* ===== COST/TOKEN BREAKDOWN BAR ===== */
  .cost-breakdown {
    margin-top: 18px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .cost-breakdown-header {
    font-weight: 600;
    font-size: 15px;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
    color: var(--text-strong);
  }
  .cost-breakdown-bar {
    height: 28px;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    display: flex;
  }
  .cost-segment {
    height: 100%;
    transition: width 0.3s ease;
    position: relative;
  }
  .cost-segment.output {
    background: #ef4444;
  }
  .cost-segment.input {
    background: #f59e0b;
  }
  .cost-segment.cache-write {
    background: #10b981;
  }
  .cost-segment.cache-read {
    background: #06b6d4;
  }
  .cost-breakdown-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 12px;
  }
  .cost-breakdown-total {
    margin-top: 10px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text);
    cursor: help;
  }
  .legend-dot {
    width: 10px;
    height: 10px;
    border-radius: 2px;
    flex-shrink: 0;
  }
  .legend-dot.output {
    background: #ef4444;
  }
  .legend-dot.input {
    background: #f59e0b;
  }
  .legend-dot.cache-write {
    background: #10b981;
  }
  .legend-dot.cache-read {
    background: #06b6d4;
  }
  .legend-dot.system {
    background: #ff4d4d;
  }
  .legend-dot.skills {
    background: #8b5cf6;
  }
  .legend-dot.tools {
    background: #ec4899;
  }
  .legend-dot.files {
    background: #f59e0b;
  }
  .cost-breakdown-note {
    margin-top: 10px;
    font-size: 11px;
    color: var(--text-muted);
    line-height: 1.4;
  }

  /* ===== SESSION BARS (scrollable list) ===== */
  .session-bars {
    margin-top: 16px;
    max-height: 400px;
    overflow-y: auto;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--bg);
  }
  .session-bar-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
    transition: background 0.15s;
  }
  .session-bar-row:last-child {
    border-bottom: none;
  }
  .session-bar-row:hover {
    background: var(--bg-hover);
  }
  .session-bar-row.selected {
    background: var(--accent-subtle);
  }
  .session-bar-label {
    flex: 1 1 auto;
    min-width: 0;
    font-size: 13px;
    color: var(--text);
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .session-bar-title {
    /* Prefer showing the full name; wrap instead of truncating. */
    white-space: normal;
    overflow-wrap: anywhere;
    word-break: break-word;
  }
  .session-bar-meta {
    font-size: 10px;
    color: var(--text-muted);
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .session-bar-track {
    flex: 0 0 90px;
    height: 6px;
    background: var(--bg-secondary);
    border-radius: 4px;
    overflow: hidden;
    opacity: 0.6;
  }
  .session-bar-fill {
    height: 100%;
    background: rgba(255, 77, 77, 0.7);
    border-radius: 4px;
    transition: width 0.3s ease;
  }
  .session-bar-value {
    flex: 0 0 70px;
    text-align: right;
    font-size: 12px;
    font-family: var(--font-mono);
    color: var(--text-muted);
  }
  .session-bar-actions {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    flex: 0 0 auto;
  }
  .session-copy-btn {
    height: 26px;
    padding: 0 10px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    font-weight: 600;
    color: var(--text-muted);
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .session-copy-btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
    color: var(--text);
  }

  /* ===== TIME SERIES CHART ===== */
  .session-timeseries {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .timeseries-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
  .timeseries-controls {
    display: flex;
    gap: 6px;
    align-items: center;
  }
  .timeseries-header {
    font-weight: 600;
    color: var(--text);
  }
  .timeseries-chart {
    width: 100%;
    overflow: hidden;
  }
  .timeseries-svg {
    width: 100%;
    height: auto;
    display: block;
  }
  .timeseries-svg .axis-label {
    font-size: 10px;
    fill: var(--text-muted);
  }
  .timeseries-svg .ts-area {
    fill: #ff4d4d;
    fill-opacity: 0.1;
  }
  .timeseries-svg .ts-line {
    fill: none;
    stroke: #ff4d4d;
    stroke-width: 2;
  }
  .timeseries-svg .ts-dot {
    fill: #ff4d4d;
    transition: r 0.15s, fill 0.15s;
  }
  .timeseries-svg .ts-dot:hover {
    r: 5;
  }
  .timeseries-svg .ts-bar {
    fill: #ff4d4d;
    transition: fill 0.15s;
  }
  .timeseries-svg .ts-bar:hover {
    fill: #cc3d3d;
  }
  .timeseries-svg .ts-bar.output { fill: #ef4444; }
  .timeseries-svg .ts-bar.input { fill: #f59e0b; }
  .timeseries-svg .ts-bar.cache-write { fill: #10b981; }
  .timeseries-svg .ts-bar.cache-read { fill: #06b6d4; }
  .timeseries-summary {
    margin-top: 12px;
    font-size: 13px;
    color: var(--text-muted);
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .timeseries-loading {
    padding: 24px;
    text-align: center;
    color: var(--text-muted);
  }

  /* ===== SESSION LOGS ===== */
  .session-logs {
    margin-top: 24px;
    background: var(--bg-secondary);
    border-radius: 8px;
    overflow: hidden;
  }
  .session-logs-header {
    padding: 10px 14px;
    font-weight: 600;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    background: var(--bg-secondary);
  }
  .session-logs-loading {
    padding: 24px;
    text-align: center;
    color: var(--text-muted);
  }
  .session-logs-list {
    max-height: 400px;
    overflow-y: auto;
  }
  .session-log-entry {
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    gap: 6px;
    background: var(--bg);
  }
  .session-log-entry:last-child {
    border-bottom: none;
  }
  .session-log-entry.user {
    border-left: 3px solid var(--accent);
  }
  .session-log-entry.assistant {
    border-left: 3px solid var(--border-strong);
  }
  .session-log-meta {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 11px;
    color: var(--text-muted);
    flex-wrap: wrap;
  }
  .session-log-role {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 999px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
  }
  .session-log-entry.user .session-log-role {
    color: var(--accent);
  }
  .session-log-entry.assistant .session-log-role {
    color: var(--text-muted);
  }
  .session-log-content {
    font-size: 13px;
    line-height: 1.5;
    color: var(--text);
    white-space: pre-wrap;
    word-break: break-word;
    background: var(--bg-secondary);
    border-radius: 8px;
    padding: 8px 10px;
    border: 1px solid var(--border);
    max-height: 220px;
    overflow-y: auto;
  }

  /* ===== CONTEXT WEIGHT BREAKDOWN ===== */
  .context-weight-breakdown {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .context-weight-breakdown .context-weight-header {
    font-weight: 600;
    font-size: 13px;
    margin-bottom: 4px;
    color: var(--text);
  }
  .context-weight-desc {
    font-size: 12px;
    color: var(--text-muted);
    margin: 0 0 12px 0;
  }
  .context-stacked-bar {
    height: 24px;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    display: flex;
  }
  .context-segment {
    height: 100%;
    transition: width 0.3s ease;
  }
  .context-segment.system {
    background: #ff4d4d;
  }
  .context-segment.skills {
    background: #8b5cf6;
  }
  .context-segment.tools {
    background: #ec4899;
  }
  .context-segment.files {
    background: #f59e0b;
  }
  .context-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 12px;
  }
  .context-total {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 600;
    color: var(--text-muted);
  }
  .context-details {
    margin-top: 12px;
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
  }
  .context-details summary {
    padding: 10px 14px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
  }
  .context-details[open] summary {
    border-bottom: 1px solid var(--border);
  }
  .context-list {
    max-height: 200px;
    overflow-y: auto;
  }
  .context-list-header {
    display: flex;
    justify-content: space-between;
    padding: 8px 14px;
    font-size: 11px;
    text-transform: uppercase;
    color: var(--text-muted);
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border);
  }
  .context-list-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 14px;
    font-size: 12px;
    border-bottom: 1px solid var(--border);
  }
  .context-list-item:last-child {
    border-bottom: none;
  }
  .context-list-item .mono {
    font-family: var(--font-mono);
    color: var(--text);
  }
  .context-list-item .muted {
    color: var(--text-muted);
    font-family: var(--font-mono);
  }

  /* ===== NO CONTEXT NOTE ===== */
  .no-context-note {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.5;
  }

  /* ===== TWO COLUMN LAYOUT ===== */
  .usage-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    margin-top: 18px;
    align-items: stretch;
  }
  .usage-grid-left {
    display: flex;
    flex-direction: column;
  }
  .usage-grid-right {
    display: flex;
    flex-direction: column;
  }
  
  /* ===== LEFT CARD (Daily + Breakdown) ===== */
  .usage-left-card {
    /* inherits background, border, shadow from .card */
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .usage-left-card .daily-chart-bars {
    flex: 1;
    min-height: 200px;
  }
  .usage-left-card .sessions-panel-title {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 12px;
  }
  
  /* ===== COMPACT DAILY CHART ===== */
  .daily-chart-compact {
    margin-bottom: 16px;
  }
  .daily-chart-compact .sessions-panel-title {
    margin-bottom: 8px;
  }
  .daily-chart-compact .daily-chart-bars {
    height: 100px;
    padding-bottom: 20px;
  }
  
  /* ===== COMPACT COST BREAKDOWN ===== */
  .cost-breakdown-compact {
    padding: 0;
    margin: 0;
    background: transparent;
    border-top: 1px solid var(--border);
    padding-top: 12px;
  }
  .cost-breakdown-compact .cost-breakdown-header {
    margin-bottom: 8px;
  }
  .cost-breakdown-compact .cost-breakdown-legend {
    gap: 12px;
  }
  .cost-breakdown-compact .cost-breakdown-note {
    display: none;
  }
  
  /* ===== SESSIONS CARD ===== */
  .sessions-card {
    /* inherits background, border, shadow from .card */
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .sessions-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .sessions-card-title {
    font-weight: 600;
    font-size: 14px;
  }
  .sessions-card-count {
    font-size: 12px;
    color: var(--text-muted);
  }
  .sessions-card-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin: 8px 0 10px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .sessions-card-stats {
    display: inline-flex;
    gap: 12px;
  }
  .sessions-sort {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .sessions-sort select {
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--text);
    font-size: 12px;
  }
  .sessions-action-btn {
    height: 28px;
    padding: 0 10px;
    border-radius: 8px;
    font-size: 12px;
    line-height: 1;
  }
  .sessions-action-btn.icon {
    width: 32px;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .sessions-card-hint {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 8px;
  }
  .sessions-card .session-bars {
    max-height: 280px;
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    margin: 0;
    overflow-y: auto;
    padding: 8px;
  }
  .sessions-card .session-bar-row {
    padding: 6px 8px;
    border-radius: 6px;
    margin-bottom: 3px;
    border: 1px solid transparent;
    transition: all 0.15s;
  }
  .sessions-card .session-bar-row:hover {
    border-color: var(--border);
    background: var(--bg-hover);
  }
  .sessions-card .session-bar-row.selected {
    border-color: var(--accent);
    background: var(--accent-subtle);
    box-shadow: inset 0 0 0 1px rgba(255, 77, 77, 0.15);
  }
  .sessions-card .session-bar-label {
    flex: 1 1 auto;
    min-width: 140px;
    font-size: 12px;
  }
  .sessions-card .session-bar-value {
    flex: 0 0 60px;
    font-size: 11px;
    font-weight: 600;
  }
  .sessions-card .session-bar-track {
    flex: 0 0 70px;
    height: 5px;
    opacity: 0.5;
  }
  .sessions-card .session-bar-fill {
    background: rgba(255, 77, 77, 0.55);
  }
  .sessions-clear-btn {
    margin-left: auto;
  }
  
  /* ===== EMPTY DETAIL STATE ===== */
  .session-detail-empty {
    margin-top: 18px;
    background: var(--bg-secondary);
    border-radius: 8px;
    border: 2px dashed var(--border);
    padding: 32px;
    text-align: center;
  }
  .session-detail-empty-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 8px;
  }
  .session-detail-empty-desc {
    font-size: 13px;
    color: var(--text-muted);
    margin-bottom: 16px;
    line-height: 1.5;
  }
  .session-detail-empty-features {
    display: flex;
    justify-content: center;
    gap: 24px;
    flex-wrap: wrap;
  }
  .session-detail-empty-feature {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .session-detail-empty-feature .icon {
    font-size: 16px;
  }
  
  /* ===== SESSION DETAIL PANEL ===== */
  .session-detail-panel {
    margin-top: 12px;
    /* inherits background, border-radius, shadow from .card */
    border: 2px solid var(--accent) !important;
  }
  .session-detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
  }
  .session-detail-header:hover {
    background: var(--bg-hover);
  }
  .session-detail-title {
    font-weight: 600;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .session-detail-header-left {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .session-close-btn {
    background: var(--bg);
    border: 1px solid var(--border);
    color: var(--text);
    cursor: pointer;
    padding: 2px 8px;
    font-size: 16px;
    line-height: 1;
    border-radius: 4px;
    transition: background 0.15s, color 0.15s;
  }
  .session-close-btn:hover {
    background: var(--bg-hover);
    color: var(--text);
    border-color: var(--accent);
  }
  .session-detail-stats {
    display: flex;
    gap: 10px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .session-detail-stats strong {
    color: var(--text);
    font-family: var(--font-mono);
  }
  .session-detail-content {
    padding: 12px;
  }
  .session-summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 8px;
    margin-bottom: 12px;
  }
  .session-summary-card {
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px;
    background: var(--bg-secondary);
  }
  .session-summary-title {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 4px;
  }
  .session-summary-value {
    font-size: 14px;
    font-weight: 600;
  }
  .session-summary-meta {
    font-size: 11px;
    color: var(--text-muted);
    margin-top: 4px;
  }
  .session-detail-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    /* Separate "Usage Over Time" from the summary + Top Tools/Model Mix cards above. */
    margin-top: 12px;
    margin-bottom: 10px;
  }
  .session-detail-bottom {
    display: grid;
    grid-template-columns: minmax(0, 1.8fr) minmax(0, 1fr);
    gap: 10px;
    align-items: stretch;
  }
  .session-detail-bottom .session-logs-compact {
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .session-detail-bottom .session-logs-compact .session-logs-list {
    flex: 1 1 auto;
    max-height: none;
  }
  .context-details-panel {
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
  }
  .context-breakdown-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 10px;
    margin-top: 8px;
  }
  .context-breakdown-card {
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px;
    background: var(--bg-secondary);
  }
  .context-breakdown-title {
    font-size: 11px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .context-breakdown-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 11px;
  }
  .context-breakdown-item {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
  .context-breakdown-more {
    font-size: 10px;
    color: var(--text-muted);
    margin-top: 4px;
  }
  .context-breakdown-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .context-expand-btn {
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text-muted);
    font-size: 11px;
    padding: 4px 8px;
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.15s;
  }
  .context-expand-btn:hover {
    color: var(--text);
    border-color: var(--border-strong);
    background: var(--bg);
  }
  
  /* ===== COMPACT TIMESERIES ===== */
  .session-timeseries-compact {
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
    margin: 0;
  }
  .session-timeseries-compact .timeseries-header-row {
    margin-bottom: 8px;
  }
  .session-timeseries-compact .timeseries-header {
    font-size: 12px;
  }
  .session-timeseries-compact .timeseries-summary {
    font-size: 11px;
    margin-top: 8px;
  }
  
  /* ===== COMPACT CONTEXT ===== */
  .context-weight-compact {
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
    margin: 0;
  }
  .context-weight-compact .context-weight-header {
    font-size: 12px;
    margin-bottom: 4px;
  }
  .context-weight-compact .context-weight-desc {
    font-size: 11px;
    margin-bottom: 8px;
  }
  .context-weight-compact .context-stacked-bar {
    height: 16px;
  }
  .context-weight-compact .context-legend {
    font-size: 11px;
    gap: 10px;
    margin-top: 8px;
  }
  .context-weight-compact .context-total {
    font-size: 11px;
    margin-top: 6px;
  }
  .context-weight-compact .context-details {
    margin-top: 8px;
  }
  .context-weight-compact .context-details summary {
    font-size: 12px;
    padding: 6px 10px;
  }
  
  /* ===== COMPACT LOGS ===== */
  .session-logs-compact {
    background: var(--bg);
    border-radius: 10px;
    border: 1px solid var(--border);
    overflow: hidden;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .session-logs-compact .session-logs-header {
    padding: 10px 12px;
    font-size: 12px;
  }
  .session-logs-compact .session-logs-list {
    max-height: none;
    flex: 1 1 auto;
    overflow: auto;
  }
  .session-logs-compact .session-log-entry {
    padding: 8px 12px;
  }
  .session-logs-compact .session-log-content {
    font-size: 12px;
    max-height: 160px;
  }
  .session-log-tools {
    margin-top: 6px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--bg-secondary);
    padding: 6px 8px;
    font-size: 11px;
    color: var(--text);
  }
  .session-log-tools summary {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
  }
  .session-log-tools summary::-webkit-details-marker {
    display: none;
  }
  .session-log-tools-list {
    margin-top: 6px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .session-log-tools-pill {
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 2px 8px;
    font-size: 10px;
    background: var(--bg);
    color: var(--text);
  }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 900px) {
    .usage-grid {
      grid-template-columns: 1fr;
    }
    .session-detail-row {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 600px) {
    .session-bar-label {
      flex: 0 0 100px;
    }
    .cost-breakdown-legend {
      gap: 10px;
    }
    .legend-item {
      font-size: 11px;
    }
    .daily-chart-bars {
      height: 170px;
      gap: 6px;
      padding-bottom: 40px;
    }
    .daily-bar-label {
      font-size: 8px;
      bottom: -30px;
      transform: rotate(-45deg);
    }
    .usage-mosaic-grid {
      grid-template-columns: 1fr;
    }
    .usage-hour-grid {
      grid-template-columns: repeat(12, minmax(10px, 1fr));
    }
    .usage-hour-cell {
      height: 22px;
    }
  }
`,jv=4;function lt(e){return Math.round(e/jv)}function U(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e)}function qv(e){const t=new Date;return t.setHours(e,0,0,0),t.toLocaleTimeString(void 0,{hour:"numeric"})}function Gv(e,t){const n=Array.from({length:24},()=>0),s=Array.from({length:24},()=>0);for(const a of e){const o=a.usage;if(!o?.messageCounts||o.messageCounts.total===0)continue;const l=o.firstActivity??a.updatedAt,c=o.lastActivity??a.updatedAt;if(!l||!c)continue;const d=Math.min(l,c),g=Math.max(l,c),p=Math.max(g-d,1)/6e4;let f=d;for(;f<g;){const u=new Date(f),m=ro(u,t),b=co(u,t),w=Math.min(b.getTime(),g),A=Math.max((w-f)/6e4,0)/p;n[m]+=o.messageCounts.errors*A,s[m]+=o.messageCounts.total*A,f=w+1}}return s.map((a,o)=>{const l=n[o],c=a>0?l/a:0;return{hour:o,rate:c,errors:l,msgs:a}}).filter(a=>a.msgs>0&&a.errors>0).toSorted((a,o)=>o.rate-a.rate).slice(0,5).map(a=>({label:qv(a.hour),value:`${(a.rate*100).toFixed(2)}%`,sub:`${Math.round(a.errors)} ${i("usageErrors").toLowerCase()} · ${Math.round(a.msgs)} ${i("usageMessagesCount")}`}))}const Vv=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function ro(e,t){return t==="utc"?e.getUTCHours():e.getHours()}function Qv(e,t){return t==="utc"?e.getUTCDay():e.getDay()}function co(e,t){const n=new Date(e);return t==="utc"?n.setUTCMinutes(59,59,999):n.setMinutes(59,59,999),n}function Yv(e,t){const n=Array.from({length:24},()=>0),s=Array.from({length:7},()=>0);let a=0,o=!1;for(const c of e){const d=c.usage;if(!d||!d.totalTokens||d.totalTokens<=0)continue;a+=d.totalTokens;const g=d.firstActivity??c.updatedAt,h=d.lastActivity??c.updatedAt;if(!g||!h)continue;o=!0;const p=Math.min(g,h),f=Math.max(g,h),m=Math.max(f-p,1)/6e4;let b=p;for(;b<f;){const w=new Date(b),k=ro(w,t),A=Qv(w,t),T=co(w,t),C=Math.min(T.getTime(),f),M=Math.max((C-b)/6e4,0)/m;n[k]+=d.totalTokens*M,s[A]+=d.totalTokens*M,b=C+1}}const l=Vv.map((c,d)=>({label:c,tokens:s[d]}));return{hasData:o,totalTokens:a,hourTotals:n,weekdayTotals:l}}function Jv(e,t,n,s){const a=Yv(e,t);if(!a.hasData)return r`
      <div class="card usage-mosaic">
        <div class="usage-mosaic-header">
          <div>
            <div class="usage-mosaic-title">${i("usageActivityByTime")}</div>
            <div class="usage-mosaic-sub">${i("usageMosaicSubNoData")}</div>
          </div>
          <div class="usage-mosaic-total">${U(0)} ${i("usageTokensUnit")}</div>
        </div>
        <div class="muted" style="padding: 12px; text-align: center;">${i("usageNoTimeline")}</div>
      </div>
    `;const o=Math.max(...a.hourTotals,1),l=Math.max(...a.weekdayTotals.map(c=>c.tokens),1);return r`
    <div class="card usage-mosaic">
      <div class="usage-mosaic-header">
        <div>
          <div class="usage-mosaic-title">${i("usageActivityByTime")}</div>
          <div class="usage-mosaic-sub">
            Estimated from session spans (first/last activity). Time zone: ${i(t==="utc"?"usageTimeZoneUtc":"usageTimeZoneLocal")}.
          </div>
        </div>
        <div class="usage-mosaic-total">${U(a.totalTokens)} ${i("usageTokensUnit")}</div>
      </div>
      <div class="usage-mosaic-grid">
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">${i("usageDayOfWeek")}</div>
          <div class="usage-daypart-grid">
            ${a.weekdayTotals.map(c=>{const d=Math.min(c.tokens/l,1),g=c.tokens>0?`rgba(255, 77, 77, ${.12+d*.6})`:"transparent";return r`
                <div class="usage-daypart-cell" style="background: ${g};">
                  <div class="usage-daypart-label">${c.label}</div>
                  <div class="usage-daypart-value">${U(c.tokens)}</div>
                </div>
              `})}
          </div>
        </div>
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">
            <span>${i("usageHours")}</span>
            <span class="usage-mosaic-sub">0 → 23</span>
          </div>
          <div class="usage-hour-grid">
            ${a.hourTotals.map((c,d)=>{const g=Math.min(c/o,1),h=c>0?`rgba(255, 77, 77, ${.08+g*.7})`:"transparent",p=`${d}:00 · ${U(c)} ${i("usageTokensUnit")}`,f=g>.7?"rgba(255, 77, 77, 0.6)":"rgba(255, 77, 77, 0.2)",u=n.includes(d);return r`
                <div
                  class="usage-hour-cell ${u?"selected":""}"
                  style="background: ${h}; border-color: ${f};"
                  title="${p}"
                  @click=${m=>s(d,m.shiftKey)}
                ></div>
              `})}
          </div>
          <div class="usage-hour-labels">
            <span>${i("usageMidnight")}</span>
            <span>${i("usage4am")}</span>
            <span>${i("usage8am")}</span>
            <span>${i("usageNoon")}</span>
            <span>${i("usage4pm")}</span>
            <span>${i("usage8pm")}</span>
          </div>
          <div class="usage-hour-legend">
            <span></span>
            Low → High token density
          </div>
        </div>
      </div>
    </div>
  `}function G(e,t=2){return`$${e.toFixed(t)}`}function Ks(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Zv(e){return!e||e<=0?"0s":e>=6e4?`${Math.round(e/6e4)}m`:e>=1e3?`${Math.round(e/1e3)}s`:`${Math.round(e)}ms`}function zr(e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!t)return null;const[,n,s,a]=t,o=new Date(Date.UTC(Number(n),Number(s)-1,Number(a)));return Number.isNaN(o.valueOf())?null:o}function Wr(e){const t=zr(e);return t?t.toLocaleDateString(void 0,{month:"short",day:"numeric"}):e}function Xv(e){const t=zr(e);return t?t.toLocaleDateString(void 0,{month:"long",day:"numeric",year:"numeric"}):e}function Kr(e){if(!e||e<=0)return"—";const t=Math.round(e/1e3),n=t%60,s=Math.floor(t/60)%60,a=Math.floor(t/3600);return a>0?`${a}h ${s}m`:s>0?`${s}m ${n}s`:`${n}s`}function js(e,t,n="text/plain"){const s=new Blob([t],{type:n}),a=URL.createObjectURL(s),o=document.createElement("a");o.href=a,o.download=e,o.click(),URL.revokeObjectURL(a)}function eb(e){return e.includes('"')||e.includes(",")||e.includes(`
`)?`"${e.replace(/"/g,'""')}"`:e}function Qn(e){return e.map(t=>t==null?"":eb(String(t))).join(",")}const In=()=>({input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}),_n=(e,t)=>{e.input+=t.input??0,e.output+=t.output??0,e.cacheRead+=t.cacheRead??0,e.cacheWrite+=t.cacheWrite??0,e.totalTokens+=t.totalTokens??0,e.totalCost+=t.totalCost??0,e.inputCost+=t.inputCost??0,e.outputCost+=t.outputCost??0,e.cacheReadCost+=t.cacheReadCost??0,e.cacheWriteCost+=t.cacheWriteCost??0,e.missingCostEntries+=t.missingCostEntries??0},tb=(e,t)=>{if(e.length===0)return t??{messages:{total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},tools:{totalCalls:0,uniqueTools:0,tools:[]},byModel:[],byProvider:[],byAgent:[],byChannel:[],daily:[]};const n={total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},s=new Map,a=new Map,o=new Map,l=new Map,c=new Map,d=new Map,g=new Map,h=new Map,p={count:0,sum:0,min:Number.POSITIVE_INFINITY,max:0,p95Max:0};for(const f of e){const u=f.usage;if(u){if(u.messageCounts&&(n.total+=u.messageCounts.total,n.user+=u.messageCounts.user,n.assistant+=u.messageCounts.assistant,n.toolCalls+=u.messageCounts.toolCalls,n.toolResults+=u.messageCounts.toolResults,n.errors+=u.messageCounts.errors),u.toolUsage)for(const m of u.toolUsage.tools)s.set(m.name,(s.get(m.name)??0)+m.count);if(u.modelUsage)for(const m of u.modelUsage){const b=`${m.provider??"unknown"}::${m.model??"unknown"}`,w=a.get(b)??{provider:m.provider,model:m.model,count:0,totals:In()};w.count+=m.count,_n(w.totals,m.totals),a.set(b,w);const k=m.provider??"unknown",A=o.get(k)??{provider:m.provider,model:void 0,count:0,totals:In()};A.count+=m.count,_n(A.totals,m.totals),o.set(k,A)}if(u.latency){const{count:m,avgMs:b,minMs:w,maxMs:k,p95Ms:A}=u.latency;m>0&&(p.count+=m,p.sum+=b*m,p.min=Math.min(p.min,w),p.max=Math.max(p.max,k),p.p95Max=Math.max(p.p95Max,A))}if(f.agentId){const m=l.get(f.agentId)??In();_n(m,u),l.set(f.agentId,m)}if(f.channel){const m=c.get(f.channel)??In();_n(m,u),c.set(f.channel,m)}for(const m of u.dailyBreakdown??[]){const b=d.get(m.date)??{date:m.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};b.tokens+=m.tokens,b.cost+=m.cost,d.set(m.date,b)}for(const m of u.dailyMessageCounts??[]){const b=d.get(m.date)??{date:m.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};b.messages+=m.total,b.toolCalls+=m.toolCalls,b.errors+=m.errors,d.set(m.date,b)}for(const m of u.dailyLatency??[]){const b=g.get(m.date)??{date:m.date,count:0,sum:0,min:Number.POSITIVE_INFINITY,max:0,p95Max:0};b.count+=m.count,b.sum+=m.avgMs*m.count,b.min=Math.min(b.min,m.minMs),b.max=Math.max(b.max,m.maxMs),b.p95Max=Math.max(b.p95Max,m.p95Ms),g.set(m.date,b)}for(const m of u.dailyModelUsage??[]){const b=`${m.date}::${m.provider??"unknown"}::${m.model??"unknown"}`,w=h.get(b)??{date:m.date,provider:m.provider,model:m.model,tokens:0,cost:0,count:0};w.tokens+=m.tokens,w.cost+=m.cost,w.count+=m.count,h.set(b,w)}}}return{messages:n,tools:{totalCalls:Array.from(s.values()).reduce((f,u)=>f+u,0),uniqueTools:s.size,tools:Array.from(s.entries()).map(([f,u])=>({name:f,count:u})).toSorted((f,u)=>u.count-f.count)},byModel:Array.from(a.values()).toSorted((f,u)=>u.totals.totalCost-f.totals.totalCost),byProvider:Array.from(o.values()).toSorted((f,u)=>u.totals.totalCost-f.totals.totalCost),byAgent:Array.from(l.entries()).map(([f,u])=>({agentId:f,totals:u})).toSorted((f,u)=>u.totals.totalCost-f.totals.totalCost),byChannel:Array.from(c.entries()).map(([f,u])=>({channel:f,totals:u})).toSorted((f,u)=>u.totals.totalCost-f.totals.totalCost),latency:p.count>0?{count:p.count,avgMs:p.sum/p.count,minMs:p.min===Number.POSITIVE_INFINITY?0:p.min,maxMs:p.max,p95Ms:p.p95Max}:void 0,dailyLatency:Array.from(g.values()).map(f=>({date:f.date,count:f.count,avgMs:f.count?f.sum/f.count:0,minMs:f.min===Number.POSITIVE_INFINITY?0:f.min,maxMs:f.max,p95Ms:f.p95Max})).toSorted((f,u)=>f.date.localeCompare(u.date)),modelDaily:Array.from(h.values()).toSorted((f,u)=>f.date.localeCompare(u.date)||u.cost-f.cost),daily:Array.from(d.values()).toSorted((f,u)=>f.date.localeCompare(u.date))}},nb=(e,t,n)=>{let s=0,a=0;for(const h of e){const p=h.usage?.durationMs??0;p>0&&(s+=p,a+=1)}const o=a?s/a:0,l=t&&s>0?t.totalTokens/(s/6e4):void 0,c=t&&s>0?t.totalCost/(s/6e4):void 0,d=n.messages.total?n.messages.errors/n.messages.total:0,g=n.daily.filter(h=>h.messages>0&&h.errors>0).map(h=>({date:h.date,errors:h.errors,messages:h.messages,rate:h.errors/h.messages})).toSorted((h,p)=>p.rate-h.rate||p.errors-h.errors)[0];return{durationSumMs:s,durationCount:a,avgDurationMs:o,throughputTokensPerMin:l,throughputCostPerMin:c,errorRate:d,peakErrorDay:g}},sb=e=>{const t=[Qn(["key","label","agentId","channel","provider","model","updatedAt","durationMs","messages","errors","toolCalls","inputTokens","outputTokens","cacheReadTokens","cacheWriteTokens","totalTokens","totalCost"])];for(const n of e){const s=n.usage;t.push(Qn([n.key,n.label??"",n.agentId??"",n.channel??"",n.modelProvider??n.providerOverride??"",n.model??n.modelOverride??"",n.updatedAt?new Date(n.updatedAt).toISOString():"",s?.durationMs??"",s?.messageCounts?.total??"",s?.messageCounts?.errors??"",s?.messageCounts?.toolCalls??"",s?.input??"",s?.output??"",s?.cacheRead??"",s?.cacheWrite??"",s?.totalTokens??"",s?.totalCost??""]))}return t.join(`
`)},ab=e=>{const t=[Qn(["date","inputTokens","outputTokens","cacheReadTokens","cacheWriteTokens","totalTokens","inputCost","outputCost","cacheReadCost","cacheWriteCost","totalCost"])];for(const n of e)t.push(Qn([n.date,n.input,n.output,n.cacheRead,n.cacheWrite,n.totalTokens,n.inputCost??"",n.outputCost??"",n.cacheReadCost??"",n.cacheWriteCost??"",n.totalCost]));return t.join(`
`)},ob=(e,t,n)=>{const s=e.trim();if(!s)return[];const a=s.length?s.split(/\s+/):[],o=a.length?a[a.length-1]:"",[l,c]=o.includes(":")?[o.slice(0,o.indexOf(":")),o.slice(o.indexOf(":")+1)]:["",""],d=l.toLowerCase(),g=c.toLowerCase(),h=A=>{const T=new Set;for(const C of A)C&&T.add(C);return Array.from(T)},p=h(t.map(A=>A.agentId)).slice(0,6),f=h(t.map(A=>A.channel)).slice(0,6),u=h([...t.map(A=>A.modelProvider),...t.map(A=>A.providerOverride),...n?.byProvider.map(A=>A.provider)??[]]).slice(0,6),m=h([...t.map(A=>A.model),...n?.byModel.map(A=>A.model)??[]]).slice(0,6),b=h(n?.tools.tools.map(A=>A.name)??[]).slice(0,6);if(!d)return[{label:"agent:",value:"agent:"},{label:"channel:",value:"channel:"},{label:"provider:",value:"provider:"},{label:"model:",value:"model:"},{label:"tool:",value:"tool:"},{label:"has:errors",value:"has:errors"},{label:"has:tools",value:"has:tools"},{label:"minTokens:",value:"minTokens:"},{label:"maxCost:",value:"maxCost:"}];const w=[],k=(A,T)=>{for(const C of T)(!g||C.toLowerCase().includes(g))&&w.push({label:`${A}:${C}`,value:`${A}:${C}`})};switch(d){case"agent":k("agent",p);break;case"channel":k("channel",f);break;case"provider":k("provider",u);break;case"model":k("model",m);break;case"tool":k("tool",b);break;case"has":["errors","tools","context","usage","model","provider"].forEach(A=>{(!g||A.includes(g))&&w.push({label:`has:${A}`,value:`has:${A}`})});break}return w},ib=(e,t)=>{const n=e.trim();if(!n)return`${t} `;const s=n.split(/\s+/);return s[s.length-1]=t,`${s.join(" ")} `},ut=e=>e.trim().toLowerCase(),lb=(e,t)=>{const n=e.trim();if(!n)return`${t} `;const s=n.split(/\s+/),a=s[s.length-1]??"",o=t.includes(":")?t.split(":")[0]:null,l=a.includes(":")?a.split(":")[0]:null;return a.endsWith(":")&&o&&l===o?(s[s.length-1]=t,`${s.join(" ")} `):s.includes(t)?`${s.join(" ")} `:`${s.join(" ")} ${t} `},Xi=(e,t)=>{const s=e.trim().split(/\s+/).filter(Boolean).filter(a=>a!==t);return s.length?`${s.join(" ")} `:""},el=(e,t,n)=>{const s=ut(t),o=[...lo(e).filter(l=>ut(l.key??"")!==s).map(l=>l.raw),...n.map(l=>`${t}:${l}`)];return o.length?`${o.join(" ")} `:""};function pe(e,t){return t===0?0:e/t*100}function rb(e){const t=e.totalCost||0;return{input:{tokens:e.input,cost:e.inputCost||0,pct:pe(e.inputCost||0,t)},output:{tokens:e.output,cost:e.outputCost||0,pct:pe(e.outputCost||0,t)},cacheRead:{tokens:e.cacheRead,cost:e.cacheReadCost||0,pct:pe(e.cacheReadCost||0,t)},cacheWrite:{tokens:e.cacheWrite,cost:e.cacheWriteCost||0,pct:pe(e.cacheWriteCost||0,t)},totalCost:t}}function cb(e,t,n,s,a,o,l,c){if(!(e.length>0||t.length>0||n.length>0))return v;const g=n.length===1?s.find(m=>m.key===n[0]):null,h=g?(g.label||g.key).slice(0,20)+((g.label||g.key).length>20?"…":""):n.length===1?n[0].slice(0,8)+"…":`${n.length} ${i("usageSessionsCount")}`,p=g?g.label||g.key:n.length===1?n[0]:n.join(", "),f=e.length===1?e[0]:`${e.length} days`,u=t.length===1?`${t[0]}:00`:`${t.length} hours`;return r`
    <div class="active-filters">
      ${e.length>0?r`
            <div class="filter-chip">
              <span class="filter-chip-label">${i("usageDays")}: ${f}</span>
              <button class="filter-chip-remove" @click=${a} title=${i("usageRemoveFilter")}>×</button>
            </div>
          `:v}
      ${t.length>0?r`
            <div class="filter-chip">
              <span class="filter-chip-label">${i("usageHoursLabel")}: ${u}</span>
              <button class="filter-chip-remove" @click=${o} title=${i("usageRemoveFilter")}>×</button>
            </div>
          `:v}
      ${n.length>0?r`
            <div class="filter-chip" title="${p}">
              <span class="filter-chip-label">${i("usageSession")}: ${h}</span>
              <button class="filter-chip-remove" @click=${l} title=${i("usageRemoveFilter")}>×</button>
            </div>
          `:v}
      ${(e.length>0||t.length>0)&&n.length>0?r`
            <button class="btn btn-sm filter-clear-btn" @click=${c}>
              ${i("usageClearFilters")}
            </button>
          `:v}
    </div>
  `}function db(e,t,n,s,a,o){if(!e.length)return r`
      <div class="daily-chart-compact">
        <div class="sessions-panel-title">${i("usageDailyUsage")}</div>
        <div class="muted" style="padding: 20px; text-align: center">${i("usageNoData")}</div>
      </div>
    `;const l=n==="tokens",c=e.map(p=>l?p.totalTokens:p.totalCost),d=Math.max(...c,l?1:1e-4),g=e.length>30?12:e.length>20?18:e.length>14?24:32,h=e.length<=14;return r`
    <div class="daily-chart-compact">
      <div class="daily-chart-header">
        <div class="chart-toggle small sessions-toggle">
          <button
            class="toggle-btn ${s==="total"?"active":""}"
            @click=${()=>a("total")}
          >
            ${i("usageTotal")}
          </button>
          <button
            class="toggle-btn ${s==="by-type"?"active":""}"
            @click=${()=>a("by-type")}
          >
            ${i("usageByType")}
          </button>
        </div>
        <div class="card-title">${i(l?"usageDailyToken":"usageDailyCost")}</div>
      </div>
      <div class="daily-chart">
        <div class="daily-chart-bars" style="--bar-max-width: ${g}px">
          ${e.map((p,f)=>{const m=c[f]/d*100,b=t.includes(p.date),w=Wr(p.date),k=e.length>20?String(parseInt(p.date.slice(8),10)):w,A=e.length>20?"font-size: 8px":"",T=s==="by-type"?l?[{value:p.output,class:"output"},{value:p.input,class:"input"},{value:p.cacheWrite,class:"cache-write"},{value:p.cacheRead,class:"cache-read"}]:[{value:p.outputCost??0,class:"output"},{value:p.inputCost??0,class:"input"},{value:p.cacheWriteCost??0,class:"cache-write"},{value:p.cacheReadCost??0,class:"cache-read"}]:[],C=s==="by-type"?l?[`Output ${U(p.output)}`,`Input ${U(p.input)}`,`Cache write ${U(p.cacheWrite)}`,`Cache read ${U(p.cacheRead)}`]:[`Output ${G(p.outputCost??0)}`,`Input ${G(p.inputCost??0)}`,`Cache write ${G(p.cacheWriteCost??0)}`,`Cache read ${G(p.cacheReadCost??0)}`]:[],E=l?U(p.totalTokens):G(p.totalCost);return r`
              <div
                class="daily-bar-wrapper ${b?"selected":""}"
                @click=${M=>o(p.date,M.shiftKey)}
              >
                ${s==="by-type"?r`
                        <div
                          class="daily-bar"
                          style="height: ${m.toFixed(1)}%; display: flex; flex-direction: column;"
                        >
                          ${(()=>{const M=T.reduce((D,z)=>D+z.value,0)||1;return T.map(D=>r`
                                <div
                                  class="cost-segment ${D.class}"
                                  style="height: ${D.value/M*100}%"
                                ></div>
                              `)})()}
                        </div>
                      `:r`
                        <div class="daily-bar" style="height: ${m.toFixed(1)}%"></div>
                      `}
                ${h?r`<div class="daily-bar-total">${E}</div>`:v}
                <div class="daily-bar-label" style="${A}">${k}</div>
                <div class="daily-bar-tooltip">
                  <strong>${Xv(p.date)}</strong><br />
                  ${U(p.totalTokens)} ${i("usageTokensUnit")}<br />
                  ${G(p.totalCost)}
                  ${C.length?r`${C.map(M=>r`<div>${M}</div>`)}`:v}
                </div>
              </div>
            `})}
        </div>
      </div>
    </div>
  `}function ub(e,t){const n=rb(e),s=t==="tokens",a=e.totalTokens||1,o={output:pe(e.output,a),input:pe(e.input,a),cacheWrite:pe(e.cacheWrite,a),cacheRead:pe(e.cacheRead,a)};return r`
    <div class="cost-breakdown cost-breakdown-compact">
      <div class="cost-breakdown-header">${i(s?"usageTokensByType":"usageCostByType")}</div>
      <div class="cost-breakdown-bar">
        <div class="cost-segment output" style="width: ${(s?o.output:n.output.pct).toFixed(1)}%"
          title="Output: ${s?U(e.output):G(n.output.cost)}"></div>
        <div class="cost-segment input" style="width: ${(s?o.input:n.input.pct).toFixed(1)}%"
          title="Input: ${s?U(e.input):G(n.input.cost)}"></div>
        <div class="cost-segment cache-write" style="width: ${(s?o.cacheWrite:n.cacheWrite.pct).toFixed(1)}%"
          title="Cache Write: ${s?U(e.cacheWrite):G(n.cacheWrite.cost)}"></div>
        <div class="cost-segment cache-read" style="width: ${(s?o.cacheRead:n.cacheRead.pct).toFixed(1)}%"
          title="Cache Read: ${s?U(e.cacheRead):G(n.cacheRead.cost)}"></div>
      </div>
      <div class="cost-breakdown-legend">
        <span class="legend-item"><span class="legend-dot output"></span>${i("usageOutput")} ${s?U(e.output):G(n.output.cost)}</span>
        <span class="legend-item"><span class="legend-dot input"></span>${i("usageInput")} ${s?U(e.input):G(n.input.cost)}</span>
        <span class="legend-item"><span class="legend-dot cache-write"></span>${i("usageCacheWrite")} ${s?U(e.cacheWrite):G(n.cacheWrite.cost)}</span>
        <span class="legend-item"><span class="legend-dot cache-read"></span>${i("usageCacheRead")} ${s?U(e.cacheRead):G(n.cacheRead.cost)}</span>
      </div>
      <div class="cost-breakdown-total">
        ${i("usageTotalLabel")}: ${s?U(e.totalTokens):G(e.totalCost)}
      </div>
    </div>
  `}function gt(e,t,n){return r`
    <div class="usage-insight-card">
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?r`<div class="muted">${n}</div>`:r`
              <div class="usage-list">
                ${t.map(s=>r`
                    <div class="usage-list-item">
                      <span>${s.label}</span>
                      <span class="usage-list-value">
                        <span>${s.value}</span>
                        ${s.sub?r`<span class="usage-list-sub">${s.sub}</span>`:v}
                      </span>
                    </div>
                  `)}
              </div>
            `}
    </div>
  `}function tl(e,t,n){return r`
    <div class="usage-insight-card">
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?r`<div class="muted">${n}</div>`:r`
              <div class="usage-error-list">
                ${t.map(s=>r`
                    <div class="usage-error-row">
                      <div class="usage-error-date">${s.label}</div>
                      <div class="usage-error-rate">${s.value}</div>
                      ${s.sub?r`<div class="usage-error-sub">${s.sub}</div>`:v}
                    </div>
                  `)}
              </div>
            `}
    </div>
  `}function gb(e,t,n,s,a,o,l){if(!e)return v;const c=t.messages.total?Math.round(e.totalTokens/t.messages.total):0,d=t.messages.total?e.totalCost/t.messages.total:0,g=e.input+e.cacheRead,h=g>0?e.cacheRead/g:0,p=g>0?`${(h*100).toFixed(1)}%`:"—",f=n.errorRate*100,u=n.throughputTokensPerMin!==void 0?`${U(Math.round(n.throughputTokensPerMin))} tok/min`:"—",m=n.throughputCostPerMin!==void 0?`${G(n.throughputCostPerMin,4)} / min`:"—",b=n.durationCount>0?Zv(n.avgDurationMs):"—",w=i("usageCacheHitRateHint"),k=i("usageErrorRateHint"),A=i("usageThroughputHint"),T=i("usageTokensHint"),C=i(s?"usageCostHintMissing":"usageCostHint"),E=t.daily.filter(F=>F.messages>0&&F.errors>0).map(F=>{const W=F.errors/F.messages;return{label:Wr(F.date),value:`${(W*100).toFixed(2)}%`,sub:`${F.errors} ${i("usageErrors").toLowerCase()} · ${F.messages} ${i("usageMessagesCount")} · ${U(F.tokens)}`,rate:W}}).toSorted((F,W)=>W.rate-F.rate).slice(0,5).map(({rate:F,...W})=>W),M=t.byModel.slice(0,5).map(F=>({label:F.model??"unknown",value:G(F.totals.totalCost),sub:`${U(F.totals.totalTokens)} · ${F.count} ${i("usageMessagesCount")}`})),D=t.byProvider.slice(0,5).map(F=>({label:F.provider??"unknown",value:G(F.totals.totalCost),sub:`${U(F.totals.totalTokens)} · ${F.count} ${i("usageMessagesCount")}`})),z=t.tools.tools.slice(0,6).map(F=>({label:F.name,value:`${F.count}`,sub:i("usageCalls")})),J=t.byAgent.slice(0,5).map(F=>({label:F.agentId,value:G(F.totals.totalCost),sub:U(F.totals.totalTokens)})),ae=t.byChannel.slice(0,5).map(F=>({label:F.channel,value:G(F.totals.totalCost),sub:U(F.totals.totalTokens)}));return r`
    <section class="card" style="margin-top: 16px;">
      <div class="card-title">${i("usageOverview")}</div>
      <div class="usage-summary-grid">
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageMessages")}
            <span class="usage-summary-hint" title=${i("usageMessagesHint")}>?</span>
          </div>
          <div class="usage-summary-value">${t.messages.total}</div>
          <div class="usage-summary-sub">
            ${t.messages.user} ${i("usageUser").toLowerCase()} · ${t.messages.assistant} ${i("usageAssistant").toLowerCase()}
          </div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageToolCalls")}
            <span class="usage-summary-hint" title=${i("usageToolCallsHint")}>?</span>
          </div>
          <div class="usage-summary-value">${t.tools.totalCalls}</div>
          <div class="usage-summary-sub">${t.tools.uniqueTools} ${i("usageToolsUsed")}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageErrors")}
            <span class="usage-summary-hint" title=${i("usageErrorsHint")}>?</span>
          </div>
          <div class="usage-summary-value">${t.messages.errors}</div>
          <div class="usage-summary-sub">${t.messages.toolResults} ${i("usageToolResults")}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageAvgTokensMsg")}
            <span class="usage-summary-hint" title=${T}>?</span>
          </div>
          <div class="usage-summary-value">${U(c)}</div>
          <div class="usage-summary-sub">${i("usageAcrossMessages")} ${t.messages.total||0} ${i("usageMessagesCount")}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageAvgCostMsg")}
            <span class="usage-summary-hint" title=${C}>?</span>
          </div>
          <div class="usage-summary-value">${G(d,4)}</div>
          <div class="usage-summary-sub">${G(e.totalCost)} ${i("usageTotalLabel").toLowerCase()}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageSessionsCard")}
            <span class="usage-summary-hint" title=${i("usageSessionsHint")}>?</span>
          </div>
          <div class="usage-summary-value">${o}</div>
          <div class="usage-summary-sub">${i("usageInRange")} ${l}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageThroughput")}
            <span class="usage-summary-hint" title=${A}>?</span>
          </div>
          <div class="usage-summary-value">${u}</div>
          <div class="usage-summary-sub">${m}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageErrorRate")}
            <span class="usage-summary-hint" title=${k}>?</span>
          </div>
          <div class="usage-summary-value ${f>5?"bad":f>1?"warn":"good"}">${f.toFixed(2)}%</div>
          <div class="usage-summary-sub">
            ${t.messages.errors} ${i("usageErrors").toLowerCase()} · ${b} ${i("usageAvg")} ${i("usageSession").toLowerCase()}
          </div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageCacheHitRate")}
            <span class="usage-summary-hint" title=${w}>?</span>
          </div>
          <div class="usage-summary-value ${h>.6?"good":h>.3?"warn":"bad"}">${p}</div>
          <div class="usage-summary-sub">
            ${U(e.cacheRead)} ${i("usageCached")} · ${U(g)} ${i("usagePrompt")}
          </div>
        </div>
      </div>
      <div class="usage-insights-grid">
        ${gt(i("usageTopModels"),M,i("usageNoModelData"))}
        ${gt(i("usageTopProviders"),D,i("usageNoProviderData"))}
        ${gt(i("usageTopTools"),z,i("usageNoToolCalls"))}
        ${gt(i("usageTopAgents"),J,i("usageNoAgentData"))}
        ${gt(i("usageTopChannels"),ae,i("usageNoChannelData"))}
        ${tl(i("usagePeakErrorDays"),E,i("usageNoErrorData"))}
        ${tl(i("usagePeakErrorHours"),a,i("usageNoErrorData"))}
      </div>
    </section>
  `}function pb(e,t,n,s,a,o,l,c,d,g,h,p,f,u,m){const b=L=>f.includes(L),w=L=>{const B=L.label||L.key;return B.startsWith("agent:")&&B.includes("?token=")?B.slice(0,B.indexOf("?token=")):B},k=async L=>{const B=w(L);try{await navigator.clipboard.writeText(B)}catch{}},A=L=>{const B=[];return b("channel")&&L.channel&&B.push(`channel:${L.channel}`),b("agent")&&L.agentId&&B.push(`agent:${L.agentId}`),b("provider")&&(L.modelProvider||L.providerOverride)&&B.push(`provider:${L.modelProvider??L.providerOverride}`),b("model")&&L.model&&B.push(`model:${L.model}`),b("messages")&&L.usage?.messageCounts&&B.push(`msgs:${L.usage.messageCounts.total}`),b("tools")&&L.usage?.toolUsage&&B.push(`tools:${L.usage.toolUsage.totalCalls}`),b("errors")&&L.usage?.messageCounts&&B.push(`errors:${L.usage.messageCounts.errors}`),b("duration")&&L.usage?.durationMs&&B.push(`dur:${Kr(L.usage.durationMs)}`),B},T=L=>{const B=L.usage;if(!B)return 0;if(n.length>0&&B.dailyBreakdown&&B.dailyBreakdown.length>0){const oe=B.dailyBreakdown.filter(ie=>n.includes(ie.date));return s?oe.reduce((ie,X)=>ie+X.tokens,0):oe.reduce((ie,X)=>ie+X.cost,0)}return s?B.totalTokens??0:B.totalCost??0},C=[...e].toSorted((L,B)=>{switch(a){case"recent":return(B.updatedAt??0)-(L.updatedAt??0);case"messages":return(B.usage?.messageCounts?.total??0)-(L.usage?.messageCounts?.total??0);case"errors":return(B.usage?.messageCounts?.errors??0)-(L.usage?.messageCounts?.errors??0);case"cost":return T(B)-T(L);default:return T(B)-T(L)}}),E=o==="asc"?C.toReversed():C,M=E.reduce((L,B)=>L+T(B),0),D=E.length?M/E.length:0,z=E.reduce((L,B)=>L+(B.usage?.messageCounts?.errors??0),0),J=new Set(t),ae=E.filter(L=>J.has(L.key)),F=ae.length,W=new Map(E.map(L=>[L.key,L])),de=l.map(L=>W.get(L)).filter(L=>!!L);return r`
    <div class="card sessions-card">
      <div class="sessions-card-header">
        <div class="card-title">${i("usageSessionsCard")}</div>
        <div class="sessions-card-count">
          ${e.length} ${i("usageShown")}${u!==e.length?` · ${u} ${i("usageTotalSessions")}`:""}
        </div>
      </div>
      <div class="sessions-card-meta">
        <div class="sessions-card-stats">
          <span>${s?U(D):G(D)} ${i("usageAvg")}</span>
          <span>${z} ${i("usageErrors").toLowerCase()}</span>
        </div>
        <div class="chart-toggle small">
          <button
            class="toggle-btn ${c==="all"?"active":""}"
            @click=${()=>p("all")}
          >
            ${i("usageAll")}
          </button>
          <button
            class="toggle-btn ${c==="recent"?"active":""}"
            @click=${()=>p("recent")}
          >
            ${i("usageRecentlyViewed")}
          </button>
        </div>
        <label class="sessions-sort">
          <span>${i("usageSort")}</span>
          <select
            @change=${L=>g(L.target.value)}
          >
            <option value="cost" ?selected=${a==="cost"}>${i("usageCost")}</option>
            <option value="errors" ?selected=${a==="errors"}>${i("usageErrorsCol")}</option>
            <option value="messages" ?selected=${a==="messages"}>${i("usageMessagesCol")}</option>
            <option value="recent" ?selected=${a==="recent"}>${i("usageRecent")}</option>
            <option value="tokens" ?selected=${a==="tokens"}>${i("usageTokensCol")}</option>
          </select>
        </label>
        <button
          class="btn btn-sm sessions-action-btn icon"
          @click=${()=>h(o==="desc"?"asc":"desc")}
          title=${i(o==="desc"?"usageDescending":"usageAscending")}
        >
          ${o==="desc"?"↓":"↑"}
        </button>
        ${F>0?r`
                <button class="btn btn-sm sessions-action-btn sessions-clear-btn" @click=${m}>
                  ${i("usageClearSelection")}
                </button>
              `:v}
      </div>
      ${c==="recent"?de.length===0?r`
                <div class="muted" style="padding: 20px; text-align: center">${i("usageNoRecentSessions")}</div>
              `:r`
                <div class="session-bars" style="max-height: 220px; margin-top: 6px;">
                  ${de.map(L=>{const B=T(L),oe=J.has(L.key),ie=w(L),X=A(L);return r`
                      <div
                        class="session-bar-row ${oe?"selected":""}"
                        @click=${ne=>d(L.key,ne.shiftKey)}
                        title="${L.key}"
                      >
                        <div class="session-bar-label">
                          <div class="session-bar-title">${ie}</div>
                          ${X.length>0?r`<div class="session-bar-meta">${X.join(" · ")}</div>`:v}
                        </div>
                        <div class="session-bar-track" style="display: none;"></div>
                        <div class="session-bar-actions">
                          <button
                            class="session-copy-btn"
                            title=${i("usageCopySessionName")}
                            @click=${ne=>{ne.stopPropagation(),k(L)}}
                          >
                            ${i("usageCopy")}
                          </button>
                          <div class="session-bar-value">${s?U(B):G(B)}</div>
                        </div>
                      </div>
                    `})}
                </div>
              `:e.length===0?r`
                <div class="muted" style="padding: 20px; text-align: center">${i("usageNoSessionsInRange")}</div>
              `:r`
                <div class="session-bars">
                  ${E.slice(0,50).map(L=>{const B=T(L),oe=t.includes(L.key),ie=w(L),X=A(L);return r`
                      <div
                        class="session-bar-row ${oe?"selected":""}"
                        @click=${ne=>d(L.key,ne.shiftKey)}
                        title="${L.key}"
                      >
                        <div class="session-bar-label">
                          <div class="session-bar-title">${ie}</div>
                          ${X.length>0?r`<div class="session-bar-meta">${X.join(" · ")}</div>`:v}
                        </div>
                        <div class="session-bar-track" style="display: none;"></div>
                        <div class="session-bar-actions">
                          <button
                            class="session-copy-btn"
                            title=${i("usageCopySessionName")}
                            @click=${ne=>{ne.stopPropagation(),k(L)}}
                          >
                            ${i("usageCopy")}
                          </button>
                          <div class="session-bar-value">${s?U(B):G(B)}</div>
                        </div>
                      </div>
                    `})}
                  ${e.length>50?r`<div class="muted" style="padding: 8px; text-align: center; font-size: 11px;">+${e.length-50} ${i("usageMoreSessions")}</div>`:v}
                </div>
              `}
      ${F>1?r`
              <div style="margin-top: 10px;">
                <div class="sessions-card-count">${i("usageSelectedCount")} (${F})</div>
                <div class="session-bars" style="max-height: 160px; margin-top: 6px;">
                  ${ae.map(L=>{const B=T(L),oe=w(L),ie=A(L);return r`
                      <div
                        class="session-bar-row selected"
                        @click=${X=>d(L.key,X.shiftKey)}
                        title="${L.key}"
                      >
                        <div class="session-bar-label">
                          <div class="session-bar-title">${oe}</div>
                          ${ie.length>0?r`<div class="session-bar-meta">${ie.join(" · ")}</div>`:v}
                        </div>
                  <div class="session-bar-track" style="display: none;"></div>
                        <div class="session-bar-actions">
                          <button
                            class="session-copy-btn"
                            title=${i("usageCopySessionName")}
                            @click=${X=>{X.stopPropagation(),k(L)}}
                          >
                            ${i("usageCopy")}
                          </button>
                          <div class="session-bar-value">${s?U(B):G(B)}</div>
                        </div>
                      </div>
                    `})}
                </div>
              </div>
            `:v}
    </div>
  `}function hb(){return v}function mb(e){const t=e.usage;if(!t)return r`
      <div class="muted">No usage data for this session.</div>
    `;const n=l=>l?new Date(l).toLocaleString():"—",s=[];e.channel&&s.push(`channel:${e.channel}`),e.agentId&&s.push(`agent:${e.agentId}`),(e.modelProvider||e.providerOverride)&&s.push(`provider:${e.modelProvider??e.providerOverride}`),e.model&&s.push(`model:${e.model}`);const a=t.toolUsage?.tools.slice(0,6).map(l=>({label:l.name,value:`${l.count}`,sub:i("usageCalls")}))??[],o=t.modelUsage?.slice(0,6).map(l=>({label:l.model??"unknown",value:G(l.totals.totalCost),sub:U(l.totals.totalTokens)}))??[];return r`
    ${s.length>0?r`<div class="usage-badges">${s.map(l=>r`<span class="usage-badge">${l}</span>`)}</div>`:v}
    <div class="session-summary-grid">
      <div class="session-summary-card">
        <div class="session-summary-title">${i("usageMessages")}</div>
        <div class="session-summary-value">${t.messageCounts?.total??0}</div>
        <div class="session-summary-meta">${t.messageCounts?.user??0} ${i("usageUser").toLowerCase()} · ${t.messageCounts?.assistant??0} ${i("usageAssistant").toLowerCase()}</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">${i("usageToolCalls")}</div>
        <div class="session-summary-value">${t.toolUsage?.totalCalls??0}</div>
        <div class="session-summary-meta">${t.toolUsage?.uniqueTools??0} ${i("usageToolsLabel").toLowerCase()}</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">${i("usageErrors")}</div>
        <div class="session-summary-value">${t.messageCounts?.errors??0}</div>
        <div class="session-summary-meta">${t.messageCounts?.toolResults??0} ${i("usageToolResults")}</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">${i("usageDuration")}</div>
        <div class="session-summary-value">${Kr(t.durationMs)}</div>
        <div class="session-summary-meta">${n(t.firstActivity)} → ${n(t.lastActivity)}</div>
      </div>
    </div>
    <div class="usage-insights-grid" style="margin-top: 12px;">
      ${gt(i("usageTopTools"),a,i("usageNoToolCalls"))}
      ${gt(i("usageModelMix"),o,i("usageNoModelData"))}
    </div>
  `}function fb(e,t,n,s,a,o,l,c,d,g,h,p,f,u,m,b,w,k,A,T,C,E,M){const D=e.label||e.key,z=D.length>50?D.slice(0,50)+"…":D,J=e.usage;return r`
    <div class="card session-detail-panel">
      <div class="session-detail-header">
        <div class="session-detail-header-left">
          <div class="session-detail-title">${z}</div>
        </div>
        <div class="session-detail-stats">
          ${J?r`
            <span><strong>${U(J.totalTokens)}</strong> ${i("usageTokensUnit")}</span>
            <span><strong>${G(J.totalCost)}</strong></span>
          `:v}
        </div>
        <button class="session-close-btn" @click=${M} title=${i("usageCloseSessionDetails")}>×</button>
      </div>
      <div class="session-detail-content">
        ${mb(e)}
        <div class="session-detail-row">
          ${vb(t,n,s,a,o,l,c,d,g)}
        </div>
        <div class="session-detail-bottom">
          ${yb(h,p,f,u,m,b,w,k,A,T)}
          ${bb(e.contextWeight,J,C,E)}
        </div>
      </div>
    </div>
  `}function vb(e,t,n,s,a,o,l,c,d){if(t)return r`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">${i("usageLoading")}</div>
      </div>
    `;if(!e||e.points.length<2)return r`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">${i("usageNoTimelineData")}</div>
      </div>
    `;let g=e.points;if(l||c||d&&d.length>0){const W=l?new Date(l+"T00:00:00").getTime():0,de=c?new Date(c+"T23:59:59").getTime():1/0;g=e.points.filter(L=>{if(L.timestamp<W||L.timestamp>de)return!1;if(d&&d.length>0){const B=new Date(L.timestamp),oe=`${B.getFullYear()}-${String(B.getMonth()+1).padStart(2,"0")}-${String(B.getDate()).padStart(2,"0")}`;return d.includes(oe)}return!0})}if(g.length<2)return r`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">${i("usageNoDataInRange")}</div>
      </div>
    `;let h=0,p=0,f=0,u=0,m=0,b=0;g=g.map(W=>(h+=W.totalTokens,p+=W.cost,f+=W.output,u+=W.input,m+=W.cacheRead,b+=W.cacheWrite,{...W,cumulativeTokens:h,cumulativeCost:p}));const w=400,k=80,A={top:16,right:10,bottom:20,left:40},T=w-A.left-A.right,C=k-A.top-A.bottom,E=n==="cumulative",M=n==="per-turn"&&a==="by-type",D=f+u+m+b,z=g.map(W=>E?W.cumulativeTokens:M?W.input+W.output+W.cacheRead+W.cacheWrite:W.totalTokens),J=Math.max(...z,1),ae=Math.max(2,Math.min(8,T/g.length*.7)),F=Math.max(1,(T-ae*g.length)/(g.length-1||1));return r`
    <div class="session-timeseries-compact">
      <div class="timeseries-header-row">
        <div class="card-title" style="font-size: 13px;">${i("usageUsageOverTime")}</div>
        <div class="timeseries-controls">
          <div class="chart-toggle small">
            <button
              class="toggle-btn ${E?"":"active"}"
              @click=${()=>s("per-turn")}
            >
              ${i("usagePerTurn")}
            </button>
            <button
              class="toggle-btn ${E?"active":""}"
              @click=${()=>s("cumulative")}
            >
              ${i("usageCumulative")}
            </button>
          </div>
          ${E?v:r`
                  <div class="chart-toggle small">
                    <button
                      class="toggle-btn ${a==="total"?"active":""}"
                      @click=${()=>o("total")}
                    >
                      ${i("usageTotal")}
                    </button>
                    <button
                      class="toggle-btn ${a==="by-type"?"active":""}"
                      @click=${()=>o("by-type")}
                    >
                      ${i("usageByType")}
                    </button>
                  </div>
                `}
        </div>
      </div>
      <svg viewBox="0 0 ${w} ${k+15}" class="timeseries-svg" style="width: 100%; height: auto;">
        <!-- Y axis -->
        <line x1="${A.left}" y1="${A.top}" x2="${A.left}" y2="${A.top+C}" stroke="var(--border)" />
        <!-- X axis -->
        <line x1="${A.left}" y1="${A.top+C}" x2="${w-A.right}" y2="${A.top+C}" stroke="var(--border)" />
        <!-- Y axis labels -->
        <text x="${A.left-4}" y="${A.top+4}" text-anchor="end" class="axis-label" style="font-size: 9px; fill: var(--text-muted)">${U(J)}</text>
        <text x="${A.left-4}" y="${A.top+C}" text-anchor="end" class="axis-label" style="font-size: 9px; fill: var(--text-muted)">0</text>
        <!-- X axis labels (first and last) -->
        ${g.length>0?$n`
          <text x="${A.left}" y="${A.top+C+12}" text-anchor="start" style="font-size: 8px; fill: var(--text-muted)">${new Date(g[0].timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</text>
          <text x="${w-A.right}" y="${A.top+C+12}" text-anchor="end" style="font-size: 8px; fill: var(--text-muted)">${new Date(g[g.length-1].timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</text>
        `:v}
        <!-- Bars -->
        ${g.map((W,de)=>{const L=z[de],B=A.left+de*(ae+F),oe=L/J*C,ie=A.top+C-oe,ne=[new Date(W.timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),`${U(L)} ${i("usageTokensUnit")}`];M&&(ne.push(`Output ${U(W.output)}`),ne.push(`Input ${U(W.input)}`),ne.push(`Cache write ${U(W.cacheWrite)}`),ne.push(`Cache read ${U(W.cacheRead)}`));const _=ne.join(" · ");if(!M)return $n`<rect x="${B}" y="${ie}" width="${ae}" height="${oe}" class="ts-bar" rx="1" style="cursor: pointer;"><title>${_}</title></rect>`;const R=[{value:W.output,class:"output"},{value:W.input,class:"input"},{value:W.cacheWrite,class:"cache-write"},{value:W.cacheRead,class:"cache-read"}];let P=A.top+C;return $n`
            ${R.map(K=>{if(K.value<=0||L<=0)return v;const we=oe*(K.value/L);return P-=we,$n`<rect x="${B}" y="${P}" width="${ae}" height="${we}" class="ts-bar ${K.class}" rx="1"><title>${_}</title></rect>`})}
          `})}
      </svg>
      <div class="timeseries-summary">${g.length} ${i("usageMessagesCount")} · ${U(h)} ${i("usageTokensUnit")} · ${G(p)}</div>
      ${M?r`
              <div style="margin-top: 8px;">
                <div class="card-title" style="font-size: 12px; margin-bottom: 6px;">${i("usageTokensByType")}</div>
                <div class="cost-breakdown-bar" style="height: 18px;">
                  <div class="cost-segment output" style="width: ${pe(f,D).toFixed(1)}%"></div>
                  <div class="cost-segment input" style="width: ${pe(u,D).toFixed(1)}%"></div>
                  <div class="cost-segment cache-write" style="width: ${pe(b,D).toFixed(1)}%"></div>
                  <div class="cost-segment cache-read" style="width: ${pe(m,D).toFixed(1)}%"></div>
                </div>
                <div class="cost-breakdown-legend">
                  <div class="legend-item" title="Assistant output tokens">
                    <span class="legend-dot output"></span>Output ${U(f)}
                  </div>
                  <div class="legend-item" title="User + tool input tokens">
                    <span class="legend-dot input"></span>Input ${U(u)}
                  </div>
                  <div class="legend-item" title="Tokens written to cache">
                    <span class="legend-dot cache-write"></span>Cache Write ${U(b)}
                  </div>
                  <div class="legend-item" title="Tokens read from cache">
                    <span class="legend-dot cache-read"></span>Cache Read ${U(m)}
                  </div>
                </div>
                <div class="cost-breakdown-total">${i("usageTotalLabel")}: ${U(D)}</div>
              </div>
            `:v}
    </div>
  `}function bb(e,t,n,s){if(!e)return r`
      <div class="context-details-panel">
        <div class="muted" style="padding: 20px; text-align: center">${i("usageNoContextData")}</div>
      </div>
    `;const a=lt(e.systemPrompt.chars),o=lt(e.skills.promptChars),l=lt(e.tools.listChars+e.tools.schemaChars),c=lt(e.injectedWorkspaceFiles.reduce((T,C)=>T+C.injectedChars,0)),d=a+o+l+c;let g="";if(t&&t.totalTokens>0){const T=t.input+t.cacheRead;T>0&&(g=`~${Math.min(d/T*100,100).toFixed(0)}% of input`)}const h=e.skills.entries.toSorted((T,C)=>C.blockChars-T.blockChars),p=e.tools.entries.toSorted((T,C)=>C.summaryChars+C.schemaChars-(T.summaryChars+T.schemaChars)),f=e.injectedWorkspaceFiles.toSorted((T,C)=>C.injectedChars-T.injectedChars),u=4,m=n,b=m?h:h.slice(0,u),w=m?p:p.slice(0,u),k=m?f:f.slice(0,u),A=h.length>u||p.length>u||f.length>u;return r`
    <div class="context-details-panel">
      <div class="context-breakdown-header">
        <div class="card-title" style="font-size: 13px;">${i("usageSystemPromptBreakdown")}</div>
        ${A?r`<button class="context-expand-btn" @click=${s}>
                ${i(m?"usageCollapseAll":"usageExpandAll")}
              </button>`:v}
      </div>
      <p class="context-weight-desc">${g||i("usageBaseContextPerMessage")}</p>
      <div class="context-stacked-bar">
        <div class="context-segment system" style="width: ${pe(a,d).toFixed(1)}%" title="System: ~${U(a)}"></div>
        <div class="context-segment skills" style="width: ${pe(o,d).toFixed(1)}%" title="Skills: ~${U(o)}"></div>
        <div class="context-segment tools" style="width: ${pe(l,d).toFixed(1)}%" title="Tools: ~${U(l)}"></div>
        <div class="context-segment files" style="width: ${pe(c,d).toFixed(1)}%" title="Files: ~${U(c)}"></div>
      </div>
      <div class="context-legend">
        <span class="legend-item"><span class="legend-dot system"></span>Sys ~${U(a)}</span>
        <span class="legend-item"><span class="legend-dot skills"></span>Skills ~${U(o)}</span>
        <span class="legend-item"><span class="legend-dot tools"></span>Tools ~${U(l)}</span>
        <span class="legend-item"><span class="legend-dot files"></span>Files ~${U(c)}</span>
      </div>
      <div class="context-total">${i("usageTotalLabel")}: ~${U(d)}</div>
      <div class="context-breakdown-grid">
        ${h.length>0?(()=>{const T=h.length-b.length;return r`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">${i("usageSkills")} (${h.length})</div>
                    <div class="context-breakdown-list">
                      ${b.map(C=>r`
                          <div class="context-breakdown-item">
                            <span class="mono">${C.name}</span>
                            <span class="muted">~${U(lt(C.blockChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${T>0?r`<div class="context-breakdown-more">+${T} ${i("usageMoreSessions")}</div>`:v}
                  </div>
                `})():v}
        ${p.length>0?(()=>{const T=p.length-w.length;return r`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">${i("usageToolsLabel")} (${p.length})</div>
                    <div class="context-breakdown-list">
                      ${w.map(C=>r`
                          <div class="context-breakdown-item">
                            <span class="mono">${C.name}</span>
                            <span class="muted">~${U(lt(C.summaryChars+C.schemaChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${T>0?r`<div class="context-breakdown-more">+${T} ${i("usageMoreSessions")}</div>`:v}
                  </div>
                `})():v}
        ${f.length>0?(()=>{const T=f.length-k.length;return r`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">${i("usageFiles")} (${f.length})</div>
                    <div class="context-breakdown-list">
                      ${k.map(C=>r`
                          <div class="context-breakdown-item">
                            <span class="mono">${C.name}</span>
                            <span class="muted">~${U(lt(C.injectedChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${T>0?r`<div class="context-breakdown-more">+${T} ${i("usageMoreSessions")}</div>`:v}
                  </div>
                `})():v}
      </div>
    </div>
  `}function yb(e,t,n,s,a,o,l,c,d,g){if(t)return r`
      <div class="session-logs-compact">
        <div class="session-logs-header">${i("usageConversation")}</div>
        <div class="muted" style="padding: 20px; text-align: center">${i("usageLoading")}</div>
      </div>
    `;if(!e||e.length===0)return r`
      <div class="session-logs-compact">
        <div class="session-logs-header">${i("usageConversation")}</div>
        <div class="muted" style="padding: 20px; text-align: center">${i("usageNoMessages")}</div>
      </div>
    `;const h=a.query.trim().toLowerCase(),p=e.map(k=>{const A=Wv(k.content),T=A.cleanContent||k.content;return{log:k,toolInfo:A,cleanContent:T}}),f=Array.from(new Set(p.flatMap(k=>k.toolInfo.tools.map(([A])=>A)))).toSorted((k,A)=>k.localeCompare(A)),u=p.filter(k=>!(a.roles.length>0&&!a.roles.includes(k.log.role)||a.hasTools&&k.toolInfo.tools.length===0||a.tools.length>0&&!k.toolInfo.tools.some(([T])=>a.tools.includes(T))||h&&!k.cleanContent.toLowerCase().includes(h))),m=a.roles.length>0||a.tools.length>0||a.hasTools||h?`${u.length} of ${e.length}`:`${e.length}`,b=new Set(a.roles),w=new Set(a.tools);return r`
    <div class="session-logs-compact">
      <div class="session-logs-header">
        <span>${i("usageConversation")} <span style="font-weight: normal; color: var(--text-muted);">(${m} ${i("usageMessagesCount")})</span></span>
        <button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${s}>
          ${i(n?"usageCollapseAll":"usageExpandAll")}
        </button>
      </div>
      <div class="usage-filters-inline" style="margin: 10px 12px;">
        <select
          multiple
          size="4"
          @change=${k=>o(Array.from(k.target.selectedOptions).map(A=>A.value))}
        >
          <option value="user" ?selected=${b.has("user")}>${i("usageUser")}</option>
          <option value="assistant" ?selected=${b.has("assistant")}>${i("usageAssistant")}</option>
          <option value="tool" ?selected=${b.has("tool")}>${i("usageTool")}</option>
          <option value="toolResult" ?selected=${b.has("toolResult")}>${i("usageToolResult")}</option>
        </select>
        <select
          multiple
          size="4"
          @change=${k=>l(Array.from(k.target.selectedOptions).map(A=>A.value))}
        >
          ${f.map(k=>r`<option value=${k} ?selected=${w.has(k)}>${k}</option>`)}
        </select>
        <label class="usage-filters-inline" style="gap: 6px;">
          <input
            type="checkbox"
            .checked=${a.hasTools}
            @change=${k=>c(k.target.checked)}
          />
          ${i("usageHasTools")}
        </label>
        <input
          type="text"
          placeholder=${i("usageSearchConversation")}
          .value=${a.query}
          @input=${k=>d(k.target.value)}
        />
        <button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${g}>
          ${i("usageClear")}
        </button>
      </div>
      <div class="session-logs-list">
        ${u.map(k=>{const{log:A,toolInfo:T,cleanContent:C}=k,E=A.role==="user"?"user":"assistant",M=A.role==="user"?i("usageUser"):A.role==="assistant"?i("usageAssistant"):i("usageTool");return r`
          <div class="session-log-entry ${E}">
            <div class="session-log-meta">
              <span class="session-log-role">${M}</span>
              <span>${new Date(A.timestamp).toLocaleString()}</span>
              ${A.tokens?r`<span>${U(A.tokens)}</span>`:v}
            </div>
            <div class="session-log-content">${C}</div>
            ${T.tools.length>0?r`
                    <details class="session-log-tools" ?open=${n}>
                      <summary>${T.summary}</summary>
                      <div class="session-log-tools-list">
                        ${T.tools.map(([D,z])=>r`
                            <span class="session-log-tools-pill">${D} × ${z}</span>
                          `)}
                      </div>
                    </details>
                  `:v}
          </div>
        `})}
        ${u.length===0?r`
                <div class="muted" style="padding: 12px">${i("usageNoMessagesMatchFilters")}</div>
              `:v}
      </div>
    </div>
  `}function xb(e){if(e.loading&&!e.totals)return r`
      <style>
        @keyframes initial-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes initial-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      </style>
      <section class="card">
        <div class="row" style="justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;">
          <div style="flex: 1; min-width: 250px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 2px;">
              <div class="card-title" style="margin: 0;">${i("usageTokenUsage")}</div>
              <span style="
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 4px 10px;
                background: rgba(255, 77, 77, 0.1);
                border-radius: 4px;
                font-size: 12px;
                color: #ff4d4d;
              ">
                <span style="
                  width: 10px;
                  height: 10px;
                  border: 2px solid #ff4d4d;
                  border-top-color: transparent;
                  border-radius: 50%;
                  animation: initial-spin 0.6s linear infinite;
                "></span>
                ${i("usageLoading")}
              </span>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
            <div style="display: flex; gap: 8px; align-items: center;">
              <input type="date" .value=${e.startDate} disabled style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px; background: var(--bg); color: var(--text); font-size: 13px; opacity: 0.6;" />
              <span style="color: var(--text-muted);">to</span>
              <input type="date" .value=${e.endDate} disabled style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px; background: var(--bg); color: var(--text); font-size: 13px; opacity: 0.6;" />
            </div>
          </div>
        </div>
      </section>
    `;const t=e.chartMode==="tokens",n=e.query.trim().length>0,s=e.queryDraft.trim().length>0,a=[...e.sessions].toSorted((_,R)=>{const P=t?_.usage?.totalTokens??0:_.usage?.totalCost??0;return(t?R.usage?.totalTokens??0:R.usage?.totalCost??0)-P}),o=e.selectedDays.length>0?a.filter(_=>{if(_.usage?.activityDates?.length)return _.usage.activityDates.some(K=>e.selectedDays.includes(K));if(!_.updatedAt)return!1;const R=new Date(_.updatedAt),P=`${R.getFullYear()}-${String(R.getMonth()+1).padStart(2,"0")}-${String(R.getDate()).padStart(2,"0")}`;return e.selectedDays.includes(P)}):a,l=(_,R)=>{if(R.length===0)return!0;const P=_.usage,K=P?.firstActivity??_.updatedAt,we=P?.lastActivity??_.updatedAt;if(!K||!we)return!1;const Y=Math.min(K,we),Se=Math.max(K,we);let ee=Y;for(;ee<=Se;){const he=new Date(ee),Oe=ro(he,e.timeZone);if(R.includes(Oe))return!0;const Ue=co(he,e.timeZone);ee=Math.min(Ue.getTime(),Se)+1}return!1},c=e.selectedHours.length>0?o.filter(_=>l(_,e.selectedHours)):o,d=zv(c,e.query),g=d.sessions,h=d.warnings,p=ob(e.queryDraft,a,e.aggregates),f=lo(e.query),u=_=>{const R=ut(_);return f.filter(P=>ut(P.key??"")===R).map(P=>P.value).filter(Boolean)},m=_=>{const R=new Set;for(const P of _)P&&R.add(P);return Array.from(R)},b=m(a.map(_=>_.agentId)).slice(0,12),w=m(a.map(_=>_.channel)).slice(0,12),k=m([...a.map(_=>_.modelProvider),...a.map(_=>_.providerOverride),...e.aggregates?.byProvider.map(_=>_.provider)??[]]).slice(0,12),A=m([...a.map(_=>_.model),...e.aggregates?.byModel.map(_=>_.model)??[]]).slice(0,12),T=m(e.aggregates?.tools.tools.map(_=>_.name)??[]).slice(0,12),C=e.selectedSessions.length===1?e.sessions.find(_=>_.key===e.selectedSessions[0])??g.find(_=>_.key===e.selectedSessions[0]):null,E=_=>_.reduce((R,P)=>(P.usage&&(R.input+=P.usage.input,R.output+=P.usage.output,R.cacheRead+=P.usage.cacheRead,R.cacheWrite+=P.usage.cacheWrite,R.totalTokens+=P.usage.totalTokens,R.totalCost+=P.usage.totalCost,R.inputCost+=P.usage.inputCost??0,R.outputCost+=P.usage.outputCost??0,R.cacheReadCost+=P.usage.cacheReadCost??0,R.cacheWriteCost+=P.usage.cacheWriteCost??0,R.missingCostEntries+=P.usage.missingCostEntries??0),R),{input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}),M=_=>e.costDaily.filter(P=>_.includes(P.date)).reduce((P,K)=>(P.input+=K.input,P.output+=K.output,P.cacheRead+=K.cacheRead,P.cacheWrite+=K.cacheWrite,P.totalTokens+=K.totalTokens,P.totalCost+=K.totalCost,P.inputCost+=K.inputCost??0,P.outputCost+=K.outputCost??0,P.cacheReadCost+=K.cacheReadCost??0,P.cacheWriteCost+=K.cacheWriteCost??0,P),{input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0});let D,z;const J=a.length;if(e.selectedSessions.length>0){const _=g.filter(R=>e.selectedSessions.includes(R.key));D=E(_),z=_.length}else e.selectedDays.length>0&&e.selectedHours.length===0?(D=M(e.selectedDays),z=g.length):e.selectedHours.length>0||n?(D=E(g),z=g.length):(D=e.totals,z=J);const ae=e.selectedSessions.length>0?g.filter(_=>e.selectedSessions.includes(_.key)):n||e.selectedHours.length>0?g:e.selectedDays.length>0?o:a,F=tb(ae,e.aggregates),W=e.selectedSessions.length>0?(()=>{const _=g.filter(P=>e.selectedSessions.includes(P.key)),R=new Set;for(const P of _)for(const K of P.usage?.activityDates??[])R.add(K);return R.size>0?e.costDaily.filter(P=>R.has(P.date)):e.costDaily})():e.costDaily,de=nb(ae,D,F),L=!e.loading&&!e.totals&&e.sessions.length===0,B=(D?.missingCostEntries??0)>0||(D?D.totalTokens>0&&D.totalCost===0&&D.input+D.output+D.cacheRead+D.cacheWrite>0:!1),oe=[{label:i("usageToday"),days:1},{label:i("usage7d"),days:7},{label:i("usage30d"),days:30}],ie=_=>{const R=new Date,P=new Date;P.setDate(P.getDate()-(_-1)),e.onStartDateChange(Ks(P)),e.onEndDateChange(Ks(R))},X=(_,R,P)=>{if(P.length===0)return v;const K=u(_),we=new Set(K.map(ee=>ut(ee))),Y=P.length>0&&P.every(ee=>we.has(ut(ee))),Se=K.length;return r`
      <details
        class="usage-filter-select"
        @toggle=${ee=>{const he=ee.currentTarget;if(!he.open)return;const Oe=Ue=>{Ue.composedPath().includes(he)||(he.open=!1,window.removeEventListener("click",Oe,!0))};window.addEventListener("click",Oe,!0)}}
      >
        <summary>
          <span>${R}</span>
          ${Se>0?r`<span class="usage-filter-badge">${Se}</span>`:r`
                  <span class="usage-filter-badge">All</span>
                `}
        </summary>
        <div class="usage-filter-popover">
          <div class="usage-filter-actions">
            <button
              class="btn btn-sm"
              @click=${ee=>{ee.preventDefault(),ee.stopPropagation(),e.onQueryDraftChange(el(e.queryDraft,_,P))}}
              ?disabled=${Y}
            >
              Select All
            </button>
            <button
              class="btn btn-sm"
              @click=${ee=>{ee.preventDefault(),ee.stopPropagation(),e.onQueryDraftChange(el(e.queryDraft,_,[]))}}
              ?disabled=${Se===0}
            >
              Clear
            </button>
          </div>
          <div class="usage-filter-options">
            ${P.map(ee=>{const he=we.has(ut(ee));return r`
                <label class="usage-filter-option">
                  <input
                    type="checkbox"
                    .checked=${he}
                    @change=${Oe=>{const Ue=Oe.target,tt=`${_}:${ee}`;e.onQueryDraftChange(Ue.checked?lb(e.queryDraft,tt):Xi(e.queryDraft,tt))}}
                  />
                  <span>${ee}</span>
                </label>
              `})}
          </div>
        </div>
      </details>
    `},ne=Ks(new Date);return r`
    <style>${Kv}</style>

    <section class="usage-page-header">
      <div class="usage-page-title">Usage</div>
      <div class="usage-page-subtitle">${i("usagePageSubtitle")}</div>
    </section>

    <section class="card usage-header ${e.headerPinned?"pinned":""}">
      <div class="usage-header-row">
        <div class="usage-header-title">
          <div class="card-title" style="margin: 0;">Filters</div>
          ${e.loading?r`
                  <span class="usage-refresh-indicator">Loading</span>
                `:v}
          ${L?r`
                  <span class="usage-query-hint">Select a date range and click Refresh to load usage.</span>
                `:v}
        </div>
        <div class="usage-header-metrics">
          ${D?r`
                <span class="usage-metric-badge">
                  <strong>${U(D.totalTokens)}</strong> ${i("usageTokensUnit")}
                </span>
                <span class="usage-metric-badge">
                  <strong>${G(D.totalCost)}</strong> cost
                </span>
                <span class="usage-metric-badge">
                  <strong>${z}</strong>
                  session${z!==1?"s":""}
                </span>
              `:v}
          <button
            class="usage-pin-btn ${e.headerPinned?"active":""}"
            title=${e.headerPinned?"Unpin filters":"Pin filters"}
            @click=${e.onToggleHeaderPinned}
          >
            ${e.headerPinned?"Pinned":"Pin"}
          </button>
          <details
            class="usage-export-menu"
            @toggle=${_=>{const R=_.currentTarget;if(!R.open)return;const P=K=>{K.composedPath().includes(R)||(R.open=!1,window.removeEventListener("click",P,!0))};window.addEventListener("click",P,!0)}}
          >
            <summary class="usage-export-button">${i("usageExport")} ▾</summary>
            <div class="usage-export-popover">
              <div class="usage-export-list">
                <button
                  class="usage-export-item"
                  @click=${()=>js(`openclaw-usage-sessions-${ne}.csv`,sb(g),"text/csv")}
                  ?disabled=${g.length===0}
                >
                  ${i("usageExportSessionsCsv")}
                </button>
                <button
                  class="usage-export-item"
                  @click=${()=>js(`openclaw-usage-daily-${ne}.csv`,ab(W),"text/csv")}
                  ?disabled=${W.length===0}
                >
                  ${i("usageExportDailyCsv")}
                </button>
                <button
                  class="usage-export-item"
                  @click=${()=>js(`openclaw-usage-${ne}.json`,JSON.stringify({totals:D,sessions:g,daily:W,aggregates:F},null,2),"application/json")}
                  ?disabled=${g.length===0&&W.length===0}
                >
                  JSON
                </button>
              </div>
            </div>
          </details>
        </div>
      </div>
      <div class="usage-header-row">
        <div class="usage-controls">
          ${cb(e.selectedDays,e.selectedHours,e.selectedSessions,e.sessions,e.onClearDays,e.onClearHours,e.onClearSessions,e.onClearFilters)}
          <div class="usage-presets">
            ${oe.map(_=>r`
                <button class="btn btn-sm" @click=${()=>ie(_.days)}>
                  ${_.label}
                </button>
              `)}
          </div>
          <input
            type="date"
            .value=${e.startDate}
            title="Start Date"
            @change=${_=>e.onStartDateChange(_.target.value)}
          />
          <span style="color: var(--text-muted);">to</span>
          <input
            type="date"
            .value=${e.endDate}
            title="End Date"
            @change=${_=>e.onEndDateChange(_.target.value)}
          />
          <select
            title="Time zone"
            .value=${e.timeZone}
            @change=${_=>e.onTimeZoneChange(_.target.value)}
          >
            <option value="local">Local</option>
            <option value="utc">UTC</option>
          </select>
          <div class="chart-toggle">
            <button
              class="toggle-btn ${t?"active":""}"
              @click=${()=>e.onChartModeChange("tokens")}
            >
              Tokens
            </button>
            <button
              class="toggle-btn ${t?"":"active"}"
              @click=${()=>e.onChartModeChange("cost")}
            >
              Cost
            </button>
          </div>
          <button
            class="btn btn-sm usage-action-btn usage-primary-btn"
            @click=${e.onRefresh}
            ?disabled=${e.loading}
          >
            Refresh
          </button>
        </div>
        
      </div>

      <div style="margin-top: 12px;">
          <div class="usage-query-bar">
          <input
            class="usage-query-input"
            type="text"
            .value=${e.queryDraft}
            placeholder="Filter sessions (e.g. key:agent:main:cron* model:gpt-4o has:errors minTokens:2000)"
            @input=${_=>e.onQueryDraftChange(_.target.value)}
            @keydown=${_=>{_.key==="Enter"&&(_.preventDefault(),e.onApplyQuery())}}
          />
          <div class="usage-query-actions">
            <button
              class="btn btn-sm usage-action-btn usage-secondary-btn"
              @click=${e.onApplyQuery}
              ?disabled=${e.loading||!s&&!n}
            >
              Filter (client-side)
            </button>
            ${s||n?r`<button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${e.onClearQuery}>${i("usageClear")}</button>`:v}
            <span class="usage-query-hint">
              ${n?i("usageQueryHintMatch").replace("{count}",String(g.length)).replace("{total}",String(J)):i("usageQueryHintInRange").replace("{total}",String(J))}
            </span>
          </div>
        </div>
        <div class="usage-filter-row">
          ${X("agent","Agent",b)}
          ${X("channel","Channel",w)}
          ${X("provider","Provider",k)}
          ${X("model","Model",A)}
          ${X("tool","Tool",T)}
          <span class="usage-query-hint">
            Tip: use filters or click bars to filter days.
          </span>
        </div>
        ${f.length>0?r`
                <div class="usage-query-chips">
                  ${f.map(_=>{const R=_.raw;return r`
                      <span class="usage-query-chip">
                        ${R}
                        <button
                          title="Remove filter"
                          @click=${()=>e.onQueryDraftChange(Xi(e.queryDraft,R))}
                        >
                          ×
                        </button>
                      </span>
                    `})}
                </div>
              `:v}
        ${p.length>0?r`
                <div class="usage-query-suggestions">
                  ${p.map(_=>r`
                      <button
                        class="usage-query-suggestion"
                        @click=${()=>e.onQueryDraftChange(ib(e.queryDraft,_.value))}
                      >
                        ${_.label}
                      </button>
                    `)}
                </div>
              `:v}
        ${h.length>0?r`
                <div class="callout warning" style="margin-top: 8px;">
                  ${h.join(" · ")}
                </div>
              `:v}
      </div>

      ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}

      ${e.sessionsLimitReached?r`
              <div class="callout warning" style="margin-top: 12px">
                Showing first 1,000 sessions. Narrow date range for complete results.
              </div>
            `:v}
    </section>

    ${gb(D,F,de,B,Gv(ae,e.timeZone),z,J)}

    ${Jv(ae,e.timeZone,e.selectedHours,e.onSelectHour)}

    <!-- Two-column layout: Daily+Breakdown on left, Sessions on right -->
    <div class="usage-grid">
      <div class="usage-grid-left">
        <div class="card usage-left-card">
          ${db(W,e.selectedDays,e.chartMode,e.dailyChartMode,e.onDailyChartModeChange,e.onSelectDay)}
          ${D?ub(D,e.chartMode):v}
        </div>
      </div>
      <div class="usage-grid-right">
        ${pb(g,e.selectedSessions,e.selectedDays,t,e.sessionSort,e.sessionSortDir,e.recentSessions,e.sessionsTab,e.onSelectSession,e.onSessionSortChange,e.onSessionSortDirChange,e.onSessionsTabChange,e.visibleColumns,J,e.onClearSessions)}
      </div>
    </div>

    <!-- Session Detail Panel (when selected) or Empty State -->
    ${C?fb(C,e.timeSeries,e.timeSeriesLoading,e.timeSeriesMode,e.onTimeSeriesModeChange,e.timeSeriesBreakdownMode,e.onTimeSeriesBreakdownChange,e.startDate,e.endDate,e.selectedDays,e.sessionLogs,e.sessionLogsLoading,e.sessionLogsExpanded,e.onToggleSessionLogsExpanded,{roles:e.logFilterRoles,tools:e.logFilterTools,hasTools:e.logFilterHasTools,query:e.logFilterQuery},e.onLogFilterRolesChange,e.onLogFilterToolsChange,e.onLogFilterHasToolsChange,e.onLogFilterQueryChange,e.onLogFilterClear,e.contextExpanded,e.onToggleContextExpanded,e.onClearSessions):hb()}
  `}let qs=null;const nl=e=>{qs&&clearTimeout(qs),qs=window.setTimeout(()=>{rr(e)},400)},wb=/^data:/i,$b=/^https?:\/\//i;function Sb(e){const t=e.agentsList?.agents??[],s=fl(e.sessionKey)?.agentId??e.agentsList?.defaultId??"main",o=t.find(c=>c.id===s)?.identity,l=o?.avatarUrl??o?.avatar;if(l)return wb.test(l)||$b.test(l)?l:o?.avatarUrl}function kb(e){const t=e.presenceEntries.length,n=e.sessionsResult?.count??null,s=e.cronStatus?.nextWakeAtMs??null,a=e.connected?null:"Disconnected from gateway.",o=e.tab==="chat",l=o&&(e.settings.chatFocusMode||e.onboarding),c=e.onboarding?!1:e.settings.chatShowThinking,d=Sb(e),g=e.chatAvatarUrl??d??null,h=e.configForm??e.configSnapshot?.config,p=pn(e.basePath??""),f=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id??null;return r`
    <div class="shell ${o?"shell--chat":""} ${l?"shell--chat-focus":""} ${e.settings.navCollapsed?"shell--nav-collapsed":""} ${e.onboarding?"shell--onboarding":""}">
      <header class="topbar">
        <div class="topbar-left">
          <button
            class="nav-collapse-toggle"
            @click=${()=>e.applySettings({...e.settings,navCollapsed:!e.settings.navCollapsed})}
            title="${e.settings.navCollapsed?"Expand sidebar":"Collapse sidebar"}"
            aria-label="${e.settings.navCollapsed?"Expand sidebar":"Collapse sidebar"}"
          >
            <span class="nav-collapse-toggle__icon">${ce.menu}</span>
          </button>
          <div class="brand">
            <div class="brand-logo">
              <img src=${p?`${p}/favicon.svg`:"/favicon.svg"} alt="OpenClaw" />
            </div>
            <div class="brand-text">
              <div class="brand-title">OPENCLAW</div>
              <div class="brand-sub">Gateway Dashboard</div>
            </div>
          </div>
        </div>
        <div class="topbar-status">
          <div class="pill">
            <span class="statusDot ${e.connected?"ok":""}"></span>
            <span>Health</span>
            <span class="mono">${e.connected?"OK":"Offline"}</span>
          </div>
          ${_g(e)}
        </div>
      </header>
      <aside class="nav ${e.settings.navCollapsed?"nav--collapsed":""}">
        ${iu().map(u=>{const m=e.settings.navGroupsCollapsed[u.label]??!1,b=u.tabs.some(w=>w===e.tab);return r`
            <div class="nav-group ${m&&!b?"nav-group--collapsed":""}">
              <button
                class="nav-label"
                @click=${()=>{const w={...e.settings.navGroupsCollapsed};w[u.label]=!m,e.applySettings({...e.settings,navGroupsCollapsed:w})}}
                aria-expanded=${!m}
              >
                <span class="nav-label__text">${u.label}</span>
                <span class="nav-label__chevron">${m?"+":"−"}</span>
              </button>
              <div class="nav-group__items">
                ${u.tabs.map(w=>Tg(e,w))}
              </div>
            </div>
          `})}
        <div class="nav-group nav-group--links">
          <div class="nav-label nav-label--static">
            <span class="nav-label__text">Resources</span>
          </div>
          <div class="nav-group__items">
            <a
              class="nav-item nav-item--external"
              href="https://docs.openclaw.ai"
              target="_blank"
              rel="noreferrer"
              title="Docs (opens in new tab)"
            >
              <span class="nav-item__icon" aria-hidden="true">${ce.book}</span>
              <span class="nav-item__text">Docs</span>
            </a>
          </div>
        </div>
      </aside>
      <main class="content ${o?"content--chat":""}">
        <section class="content-header">
          <div>
            ${e.tab==="usage"?v:r`<div class="page-title">${ta(e.tab)}</div>`}
            ${e.tab==="usage"?v:r`<div class="page-sub">${cu(e.tab)}</div>`}
          </div>
          <div class="page-meta">
            ${e.lastError?r`<div class="pill danger">${e.lastError}</div>`:v}
            ${o?Mg(e):v}
          </div>
        </section>

        ${e.tab==="overview"?Sv({connected:e.connected,hello:e.hello,settings:e.settings,password:e.password,lastError:e.lastError,presenceCount:t,sessionsCount:n,cronEnabled:e.cronStatus?.enabled??null,cronNext:s,lastChannelsRefresh:e.channelsLastSuccess,onSettingsChange:u=>e.applySettings(u),onPasswordChange:u=>e.password=u,onSessionKeyChange:u=>{e.sessionKey=u,e.chatMessage="",e.resetToolStream(),e.applySettings({...e.settings,sessionKey:u,lastActiveSessionKey:u}),e.loadAssistantIdentity()},onConnect:()=>e.connect(),onRefresh:()=>e.loadOverview()}):v}

        ${e.tab==="channels"?ih({connected:e.connected,loading:e.channelsLoading,snapshot:e.channelsSnapshot,lastError:e.channelsError,lastSuccessAt:e.channelsLastSuccess,whatsappMessage:e.whatsappLoginMessage,whatsappQrDataUrl:e.whatsappLoginQrDataUrl,whatsappConnected:e.whatsappLoginConnected,whatsappBusy:e.whatsappBusy,configSchema:e.configSchema,configSchemaLoading:e.configSchemaLoading,configForm:e.configForm,configUiHints:e.configUiHints,configSaving:e.configSaving,configFormDirty:e.configFormDirty,nostrProfileFormState:e.nostrProfileFormState,nostrProfileAccountId:e.nostrProfileAccountId,onRefresh:u=>xe(e,u),onWhatsAppStart:u=>e.handleWhatsAppStart(u),onWhatsAppWait:()=>e.handleWhatsAppWait(),onWhatsAppLogout:()=>e.handleWhatsAppLogout(),onConfigPatch:(u,m)=>$e(e,u,m),onConfigSave:()=>e.handleChannelConfigSave(),onConfigReload:()=>e.handleChannelConfigReload(),onNostrProfileEdit:(u,m)=>e.handleNostrProfileEdit(u,m),onNostrProfileCancel:()=>e.handleNostrProfileCancel(),onNostrProfileFieldChange:(u,m)=>e.handleNostrProfileFieldChange(u,m),onNostrProfileSave:()=>e.handleNostrProfileSave(),onNostrProfileImport:()=>e.handleNostrProfileImport(),onNostrProfileToggleAdvanced:()=>e.handleNostrProfileToggleAdvanced()}):v}

        ${e.tab==="instances"?Gf({loading:e.presenceLoading,entries:e.presenceEntries,lastError:e.presenceError,statusMessage:e.presenceStatus,onRefresh:()=>za(e)}):v}

        ${e.tab==="sessions"?Iv({loading:e.sessionsLoading,result:e.sessionsResult,error:e.sessionsError,activeMinutes:e.sessionsFilterActive,limit:e.sessionsFilterLimit,includeGlobal:e.sessionsIncludeGlobal,includeUnknown:e.sessionsIncludeUnknown,basePath:e.basePath,onFiltersChange:u=>{e.sessionsFilterActive=u.activeMinutes,e.sessionsFilterLimit=u.limit,e.sessionsIncludeGlobal=u.includeGlobal,e.sessionsIncludeUnknown=u.includeUnknown},onRefresh:()=>$t(e),onPatch:(u,m)=>eu(e,u,m),onDelete:u=>tu(e,u)}):v}

        ${e.tab==="usage"?xb({loading:e.usageLoading,error:e.usageError,startDate:e.usageStartDate,endDate:e.usageEndDate,sessions:e.usageResult?.sessions??[],sessionsLimitReached:(e.usageResult?.sessions?.length??0)>=1e3,totals:e.usageResult?.totals??null,aggregates:e.usageResult?.aggregates??null,costDaily:e.usageCostSummary?.daily??[],selectedSessions:e.usageSelectedSessions,selectedDays:e.usageSelectedDays,selectedHours:e.usageSelectedHours,chartMode:e.usageChartMode,dailyChartMode:e.usageDailyChartMode,timeSeriesMode:e.usageTimeSeriesMode,timeSeriesBreakdownMode:e.usageTimeSeriesBreakdownMode,timeSeries:e.usageTimeSeries,timeSeriesLoading:e.usageTimeSeriesLoading,sessionLogs:e.usageSessionLogs,sessionLogsLoading:e.usageSessionLogsLoading,sessionLogsExpanded:e.usageSessionLogsExpanded,logFilterRoles:e.usageLogFilterRoles,logFilterTools:e.usageLogFilterTools,logFilterHasTools:e.usageLogFilterHasTools,logFilterQuery:e.usageLogFilterQuery,query:e.usageQuery,queryDraft:e.usageQueryDraft,sessionSort:e.usageSessionSort,sessionSortDir:e.usageSessionSortDir,recentSessions:e.usageRecentSessions,sessionsTab:e.usageSessionsTab,visibleColumns:e.usageVisibleColumns,timeZone:e.usageTimeZone,contextExpanded:e.usageContextExpanded,headerPinned:e.usageHeaderPinned,onStartDateChange:u=>{e.usageStartDate=u,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],nl(e)},onEndDateChange:u=>{e.usageEndDate=u,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],nl(e)},onRefresh:()=>rr(e),onTimeZoneChange:u=>{e.usageTimeZone=u},onToggleContextExpanded:()=>{e.usageContextExpanded=!e.usageContextExpanded},onToggleSessionLogsExpanded:()=>{e.usageSessionLogsExpanded=!e.usageSessionLogsExpanded},onLogFilterRolesChange:u=>{e.usageLogFilterRoles=u},onLogFilterToolsChange:u=>{e.usageLogFilterTools=u},onLogFilterHasToolsChange:u=>{e.usageLogFilterHasTools=u},onLogFilterQueryChange:u=>{e.usageLogFilterQuery=u},onLogFilterClear:()=>{e.usageLogFilterRoles=[],e.usageLogFilterTools=[],e.usageLogFilterHasTools=!1,e.usageLogFilterQuery=""},onToggleHeaderPinned:()=>{e.usageHeaderPinned=!e.usageHeaderPinned},onSelectHour:(u,m)=>{if(m&&e.usageSelectedHours.length>0){const b=Array.from({length:24},(T,C)=>C),w=e.usageSelectedHours[e.usageSelectedHours.length-1],k=b.indexOf(w),A=b.indexOf(u);if(k!==-1&&A!==-1){const[T,C]=k<A?[k,A]:[A,k],E=b.slice(T,C+1);e.usageSelectedHours=[...new Set([...e.usageSelectedHours,...E])]}}else e.usageSelectedHours.includes(u)?e.usageSelectedHours=e.usageSelectedHours.filter(b=>b!==u):e.usageSelectedHours=[...e.usageSelectedHours,u]},onQueryDraftChange:u=>{e.usageQueryDraft=u,e.usageQueryDebounceTimer&&window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=window.setTimeout(()=>{e.usageQuery=e.usageQueryDraft,e.usageQueryDebounceTimer=null},250)},onApplyQuery:()=>{e.usageQueryDebounceTimer&&(window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=null),e.usageQuery=e.usageQueryDraft},onClearQuery:()=>{e.usageQueryDebounceTimer&&(window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=null),e.usageQueryDraft="",e.usageQuery=""},onSessionSortChange:u=>{e.usageSessionSort=u},onSessionSortDirChange:u=>{e.usageSessionSortDir=u},onSessionsTabChange:u=>{e.usageSessionsTab=u},onToggleColumn:u=>{e.usageVisibleColumns.includes(u)?e.usageVisibleColumns=e.usageVisibleColumns.filter(m=>m!==u):e.usageVisibleColumns=[...e.usageVisibleColumns,u]},onSelectSession:(u,m)=>{if(e.usageTimeSeries=null,e.usageSessionLogs=null,e.usageRecentSessions=[u,...e.usageRecentSessions.filter(b=>b!==u)].slice(0,8),m&&e.usageSelectedSessions.length>0){const b=e.usageChartMode==="tokens",k=[...e.usageResult?.sessions??[]].toSorted((E,M)=>{const D=b?E.usage?.totalTokens??0:E.usage?.totalCost??0;return(b?M.usage?.totalTokens??0:M.usage?.totalCost??0)-D}).map(E=>E.key),A=e.usageSelectedSessions[e.usageSelectedSessions.length-1],T=k.indexOf(A),C=k.indexOf(u);if(T!==-1&&C!==-1){const[E,M]=T<C?[T,C]:[C,T],D=k.slice(E,M+1),z=[...new Set([...e.usageSelectedSessions,...D])];e.usageSelectedSessions=z}}else e.usageSelectedSessions.length===1&&e.usageSelectedSessions[0]===u?e.usageSelectedSessions=[]:e.usageSelectedSessions=[u];e.usageSelectedSessions.length===1&&(Og(e,e.usageSelectedSessions[0]),Ug(e,e.usageSelectedSessions[0]))},onSelectDay:(u,m)=>{if(m&&e.usageSelectedDays.length>0){const b=(e.usageCostSummary?.daily??[]).map(T=>T.date),w=e.usageSelectedDays[e.usageSelectedDays.length-1],k=b.indexOf(w),A=b.indexOf(u);if(k!==-1&&A!==-1){const[T,C]=k<A?[k,A]:[A,k],E=b.slice(T,C+1),M=[...new Set([...e.usageSelectedDays,...E])];e.usageSelectedDays=M}}else e.usageSelectedDays.includes(u)?e.usageSelectedDays=e.usageSelectedDays.filter(b=>b!==u):e.usageSelectedDays=[u]},onChartModeChange:u=>{e.usageChartMode=u},onDailyChartModeChange:u=>{e.usageDailyChartMode=u},onTimeSeriesModeChange:u=>{e.usageTimeSeriesMode=u},onTimeSeriesBreakdownChange:u=>{e.usageTimeSeriesBreakdownMode=u},onClearDays:()=>{e.usageSelectedDays=[]},onClearHours:()=>{e.usageSelectedHours=[]},onClearSessions:()=>{e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null},onClearFilters:()=>{e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null}}):v}

        ${e.tab==="cron"?Ff({basePath:e.basePath,loading:e.cronLoading,status:e.cronStatus,jobs:e.cronJobs,error:e.cronError,busy:e.cronBusy,form:e.cronForm,channels:e.channelsSnapshot?.channelMeta?.length?e.channelsSnapshot.channelMeta.map(u=>u.id):e.channelsSnapshot?.channelOrder??[],channelLabels:e.channelsSnapshot?.channelLabels??{},channelMeta:e.channelsSnapshot?.channelMeta??[],runsJobId:e.cronRunsJobId,runs:e.cronRuns,onFormChange:u=>e.cronForm={...e.cronForm,...u},onRefresh:()=>e.loadCron(),onAdd:()=>pd(e),onToggle:(u,m)=>hd(e,u,m),onRun:u=>md(e,u),onRemove:u=>fd(e,u),onLoadRuns:u=>$l(e,u)}):v}

        ${e.tab==="agents"?ip({loading:e.agentsLoading,error:e.agentsError,agentsList:e.agentsList,selectedAgentId:f,activePanel:e.agentsPanel,configForm:h,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configFormDirty,channelsLoading:e.channelsLoading,channelsError:e.channelsError,channelsSnapshot:e.channelsSnapshot,channelsLastSuccess:e.channelsLastSuccess,cronLoading:e.cronLoading,cronStatus:e.cronStatus,cronJobs:e.cronJobs,cronError:e.cronError,agentFilesLoading:e.agentFilesLoading,agentFilesError:e.agentFilesError,agentFilesList:e.agentFilesList,agentFileActive:e.agentFileActive,agentFileContents:e.agentFileContents,agentFileDrafts:e.agentFileDrafts,agentFileSaving:e.agentFileSaving,agentIdentityLoading:e.agentIdentityLoading,agentIdentityError:e.agentIdentityError,agentIdentityById:e.agentIdentityById,agentSkillsLoading:e.agentSkillsLoading,agentSkillsReport:e.agentSkillsReport,agentSkillsError:e.agentSkillsError,agentSkillsAgentId:e.agentSkillsAgentId,skillsFilter:e.skillsFilter,onRefresh:async()=>{await Ra(e);const u=e.agentsList?.agents?.map(m=>m.id)??[];u.length>0&&yl(e,u)},onSelectAgent:u=>{e.agentsSelectedId!==u&&(e.agentsSelectedId=u,e.agentFilesList=null,e.agentFilesError=null,e.agentFilesLoading=!1,e.agentFileActive=null,e.agentFileContents={},e.agentFileDrafts={},e.agentSkillsReport=null,e.agentSkillsError=null,e.agentSkillsAgentId=null,bl(e,u),e.agentsPanel==="files"&&Ps(e,u),e.agentsPanel==="skills"&&Pn(e,u))},onSelectPanel:u=>{e.agentsPanel=u,u==="files"&&f&&e.agentFilesList?.agentId!==f&&(e.agentFilesList=null,e.agentFilesError=null,e.agentFileActive=null,e.agentFileContents={},e.agentFileDrafts={},Ps(e,f)),u==="skills"&&f&&Pn(e,f),u==="channels"&&xe(e,!1),u==="cron"&&e.loadCron()},onLoadFiles:u=>Ps(e,u),onSelectFile:u=>{e.agentFileActive=u,f&&Ng(e,f,u)},onFileDraftChange:(u,m)=>{e.agentFileDrafts={...e.agentFileDrafts,[u]:m}},onFileReset:u=>{const m=e.agentFileContents[u]??"";e.agentFileDrafts={...e.agentFileDrafts,[u]:m}},onFileSave:u=>{if(!f)return;const m=e.agentFileDrafts[u]??e.agentFileContents[u]??"";Fg(e,f,u,m)},onToolsProfileChange:(u,m,b)=>{if(!h)return;const w=h.agents?.list;if(!Array.isArray(w))return;const k=w.findIndex(T=>T&&typeof T=="object"&&"id"in T&&T.id===u);if(k<0)return;const A=["agents","list",k,"tools"];m?$e(e,[...A,"profile"],m):We(e,[...A,"profile"]),b&&We(e,[...A,"allow"])},onToolsOverridesChange:(u,m,b)=>{if(!h)return;const w=h.agents?.list;if(!Array.isArray(w))return;const k=w.findIndex(T=>T&&typeof T=="object"&&"id"in T&&T.id===u);if(k<0)return;const A=["agents","list",k,"tools"];m.length>0?$e(e,[...A,"alsoAllow"],m):We(e,[...A,"alsoAllow"]),b.length>0?$e(e,[...A,"deny"],b):We(e,[...A,"deny"])},onConfigReload:()=>Le(e),onConfigSave:()=>Rn(e),onChannelsRefresh:()=>xe(e,!1),onCronRefresh:()=>e.loadCron(),onSkillsFilterChange:u=>e.skillsFilter=u,onSkillsRefresh:()=>{f&&Pn(e,f)},onAgentSkillToggle:(u,m,b)=>{if(!h)return;const w=h.agents?.list;if(!Array.isArray(w))return;const k=w.findIndex(z=>z&&typeof z=="object"&&"id"in z&&z.id===u);if(k<0)return;const A=w[k],T=m.trim();if(!T)return;const C=e.agentSkillsReport?.skills?.map(z=>z.name).filter(Boolean)??[],M=(Array.isArray(A.skills)?A.skills.map(z=>String(z).trim()).filter(Boolean):void 0)??C,D=new Set(M);b?D.add(T):D.delete(T),$e(e,["agents","list",k,"skills"],[...D])},onAgentSkillsClear:u=>{if(!h)return;const m=h.agents?.list;if(!Array.isArray(m))return;const b=m.findIndex(w=>w&&typeof w=="object"&&"id"in w&&w.id===u);b<0||We(e,["agents","list",b,"skills"])},onAgentSkillsDisableAll:u=>{if(!h)return;const m=h.agents?.list;if(!Array.isArray(m))return;const b=m.findIndex(w=>w&&typeof w=="object"&&"id"in w&&w.id===u);b<0||$e(e,["agents","list",b,"skills"],[])},onModelChange:(u,m)=>{if(!h)return;const b=h.agents?.list;if(!Array.isArray(b))return;const w=b.findIndex(C=>C&&typeof C=="object"&&"id"in C&&C.id===u);if(w<0)return;const k=["agents","list",w,"model"];if(!m){We(e,k);return}const T=b[w]?.model;if(T&&typeof T=="object"&&!Array.isArray(T)){const C=T.fallbacks,E={primary:m,...Array.isArray(C)?{fallbacks:C}:{}};$e(e,k,E)}else $e(e,k,m)},onModelFallbacksChange:(u,m)=>{if(!h)return;const b=h.agents?.list;if(!Array.isArray(b))return;const w=b.findIndex(z=>z&&typeof z=="object"&&"id"in z&&z.id===u);if(w<0)return;const k=["agents","list",w,"model"],A=b[w],T=m.map(z=>z.trim()).filter(Boolean),C=A.model,M=(()=>{if(typeof C=="string")return C.trim()||null;if(C&&typeof C=="object"&&!Array.isArray(C)){const z=C.primary;if(typeof z=="string")return z.trim()||null}return null})();if(T.length===0){M?$e(e,k,M):We(e,k);return}$e(e,k,M?{primary:M,fallbacks:T}:{fallbacks:T})}}):v}

        ${e.tab==="skills"?Pv({loading:e.skillsLoading,report:e.skillsReport,error:e.skillsError,filter:e.skillsFilter,edits:e.skillEdits,messages:e.skillMessages,busyKey:e.skillsBusyKey,onFilterChange:u=>e.skillsFilter=u,onRefresh:()=>gn(e,{clearMessages:!0}),onToggle:(u,m)=>su(e,u,m),onEdit:(u,m)=>nu(e,u,m),onSaveKey:u=>au(e,u),onInstall:(u,m,b)=>ou(e,u,m,b)}):v}

        ${e.tab==="nodes"?Zf({loading:e.nodesLoading,nodes:e.nodes,devicesLoading:e.devicesLoading,devicesError:e.devicesError,devicesList:e.devicesList,configForm:e.configForm??e.configSnapshot?.config,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configFormDirty,configFormMode:e.configFormMode,execApprovalsLoading:e.execApprovalsLoading,execApprovalsSaving:e.execApprovalsSaving,execApprovalsDirty:e.execApprovalsDirty,execApprovalsSnapshot:e.execApprovalsSnapshot,execApprovalsForm:e.execApprovalsForm,execApprovalsSelectedAgent:e.execApprovalsSelectedAgent,execApprovalsTarget:e.execApprovalsTarget,execApprovalsTargetNodeId:e.execApprovalsTargetNodeId,onRefresh:()=>ts(e),onDevicesRefresh:()=>Ze(e),onDeviceApprove:u=>Kd(e,u),onDeviceReject:u=>jd(e,u),onDeviceRotate:(u,m,b)=>qd(e,{deviceId:u,role:m,scopes:b}),onDeviceRevoke:(u,m)=>Gd(e,{deviceId:u,role:m}),onLoadConfig:()=>Le(e),onLoadExecApprovals:()=>{const u=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return Ha(e,u)},onBindDefault:u=>{u?$e(e,["tools","exec","node"],u):We(e,["tools","exec","node"])},onBindAgent:(u,m)=>{const b=["agents","list",u,"tools","exec","node"];m?$e(e,b,m):We(e,b)},onSaveBindings:()=>Rn(e),onExecApprovalsTargetChange:(u,m)=>{e.execApprovalsTarget=u,e.execApprovalsTargetNodeId=m,e.execApprovalsSnapshot=null,e.execApprovalsForm=null,e.execApprovalsDirty=!1,e.execApprovalsSelectedAgent=null},onExecApprovalsSelectAgent:u=>{e.execApprovalsSelectedAgent=u},onExecApprovalsPatch:(u,m)=>Zd(e,u,m),onExecApprovalsRemove:u=>Xd(e,u),onSaveExecApprovals:()=>{const u=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return Jd(e,u)}}):v}

        ${e.tab==="chat"?Mf({sessionKey:e.sessionKey,onSessionKeyChange:u=>{e.sessionKey=u,e.chatMessage="",e.chatAttachments=[],e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.chatQueue=[],e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:u,lastActiveSessionKey:u}),e.loadAssistantIdentity(),rn(e),aa(e)},thinkingLevel:e.chatThinkingLevel,showThinking:c,loading:e.chatLoading,sending:e.chatSending,compactionStatus:e.compactionStatus,assistantAvatarUrl:g,messages:e.chatMessages,toolMessages:e.chatToolMessages,stream:e.chatStream,streamStartedAt:e.chatStreamStartedAt,draft:e.chatMessage,queue:e.chatQueue,connected:e.connected,canSend:e.connected,disabledReason:a,error:e.lastError,sessions:e.sessionsResult,focusMode:l,onRefresh:()=>(e.resetToolStream(),Promise.all([rn(e),aa(e)])),onToggleFocusMode:()=>{e.onboarding||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})},onChatScroll:u=>e.handleChatScroll(u),onDraftChange:u=>e.chatMessage=u,attachments:e.chatAttachments,onAttachmentsChange:u=>e.chatAttachments=u,onSend:()=>e.handleSendChat(),canAbort:!!e.chatRunId,onAbort:()=>{e.handleAbortChat()},onQueueRemove:u=>e.removeQueuedMessage(u),onNewSession:()=>e.handleSendChat("/new",{restoreDraft:!0}),showNewMessages:e.chatNewMessagesBelow,onScrollToBottom:()=>e.scrollToBottom(),sidebarOpen:e.sidebarOpen,sidebarContent:e.sidebarContent,sidebarError:e.sidebarError,splitRatio:e.splitRatio,onOpenSidebar:u=>e.handleOpenSidebar(u),onCloseSidebar:()=>e.handleCloseSidebar(),onSplitRatioChange:u=>e.handleSplitRatioChange(u),assistantName:e.assistantName,assistantAvatar:e.assistantAvatar}):v}

        ${e.tab==="config"?Rf({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.configFormMode,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.configSearchQuery,activeSection:e.configActiveSection,activeSubsection:e.configActiveSubsection,onRawChange:u=>{e.configRaw=u},onFormModeChange:u=>e.configFormMode=u,onFormPatch:(u,m)=>$e(e,u,m),onSearchChange:u=>e.configSearchQuery=u,onSectionChange:u=>{e.configActiveSection=u,e.configActiveSubsection=null},onSubsectionChange:u=>e.configActiveSubsection=u,onReload:()=>Le(e),onSave:()=>Rn(e),onApply:()=>Ec(e),onUpdate:()=>Lc(e)}):v}

        ${e.tab==="debug"?Wf({loading:e.debugLoading,status:e.debugStatus,health:e.debugHealth,models:e.debugModels,heartbeat:e.debugHeartbeat,eventLog:e.eventLog,callMethod:e.debugCallMethod,callParams:e.debugCallParams,callResult:e.debugCallResult,callError:e.debugCallError,onCallMethodChange:u=>e.debugCallMethod=u,onCallParamsChange:u=>e.debugCallParams=u,onRefresh:()=>es(e),onCall:()=>ed(e)}):v}

        ${e.tab==="logs"?Jf({loading:e.logsLoading,error:e.logsError,file:e.logsFile,entries:e.logsEntries,filterText:e.logsFilterText,levelFilters:e.logsLevelFilters,autoFollow:e.logsAutoFollow,truncated:e.logsTruncated,onFilterTextChange:u=>e.logsFilterText=u,onLevelToggle:(u,m)=>{e.logsLevelFilters={...e.logsLevelFilters,[u]:m}},onToggleAutoFollow:u=>e.logsAutoFollow=u,onRefresh:()=>Ea(e,{reset:!0}),onExport:(u,m)=>e.exportLogs(u,m),onScroll:u=>e.handleLogsScroll(u)}):v}
      </main>
      ${jf(e)}
      ${qf(e)}
    </div>
  `}var Ab=Object.defineProperty,Cb=Object.getOwnPropertyDescriptor,$=(e,t,n,s)=>{for(var a=s>1?void 0:s?Cb(t,n):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(a=(s?l(t,n,a):l(a))||a);return s&&a&&Ab(t,n,a),a};const Gs=lg();function Tb(){if(!window.location.search)return!1;const t=new URLSearchParams(window.location.search).get("onboarding");if(!t)return!1;const n=t.trim().toLowerCase();return n==="1"||n==="true"||n==="yes"||n==="on"}let x=class extends _t{constructor(){super(...arguments),this.settings=du(),this.password="",this.tab="chat",this.onboarding=Tb(),this.connected=!1,this.theme=this.settings.theme??"system",this.themeResolved="dark",this.hello=null,this.lastError=null,this.eventLog=[],this.eventLogBuffer=[],this.toolStreamSyncTimer=null,this.sidebarCloseTimer=null,this.assistantName=Gs.name,this.assistantAvatar=Gs.avatar,this.assistantAgentId=Gs.agentId??null,this.sessionKey=this.settings.sessionKey,this.chatLoading=!1,this.chatSending=!1,this.chatMessage="",this.chatMessages=[],this.chatToolMessages=[],this.chatStream=null,this.chatStreamStartedAt=null,this.chatRunId=null,this.compactionStatus=null,this.chatAvatarUrl=null,this.chatThinkingLevel=null,this.chatQueue=[],this.chatAttachments=[],this.sidebarOpen=!1,this.sidebarContent=null,this.sidebarError=null,this.splitRatio=this.settings.splitRatio,this.nodesLoading=!1,this.nodes=[],this.devicesLoading=!1,this.devicesError=null,this.devicesList=null,this.execApprovalsLoading=!1,this.execApprovalsSaving=!1,this.execApprovalsDirty=!1,this.execApprovalsSnapshot=null,this.execApprovalsForm=null,this.execApprovalsSelectedAgent=null,this.execApprovalsTarget="gateway",this.execApprovalsTargetNodeId=null,this.execApprovalQueue=[],this.execApprovalBusy=!1,this.execApprovalError=null,this.pendingGatewayUrl=null,this.configLoading=!1,this.configRaw=`{
}
`,this.configRawOriginal="",this.configValid=null,this.configIssues=[],this.configSaving=!1,this.configApplying=!1,this.updateRunning=!1,this.applySessionKey=this.settings.lastActiveSessionKey,this.configSnapshot=null,this.configSchema=null,this.configSchemaVersion=null,this.configSchemaLoading=!1,this.configUiHints={},this.configForm=null,this.configFormOriginal=null,this.configFormDirty=!1,this.configFormMode="form",this.configSearchQuery="",this.configActiveSection=null,this.configActiveSubsection=null,this.channelsLoading=!1,this.channelsSnapshot=null,this.channelsError=null,this.channelsLastSuccess=null,this.whatsappLoginMessage=null,this.whatsappLoginQrDataUrl=null,this.whatsappLoginConnected=null,this.whatsappBusy=!1,this.nostrProfileFormState=null,this.nostrProfileAccountId=null,this.presenceLoading=!1,this.presenceEntries=[],this.presenceError=null,this.presenceStatus=null,this.agentsLoading=!1,this.agentsList=null,this.agentsError=null,this.agentsSelectedId=null,this.agentsPanel="overview",this.agentFilesLoading=!1,this.agentFilesError=null,this.agentFilesList=null,this.agentFileContents={},this.agentFileDrafts={},this.agentFileActive=null,this.agentFileSaving=!1,this.agentIdentityLoading=!1,this.agentIdentityError=null,this.agentIdentityById={},this.agentSkillsLoading=!1,this.agentSkillsError=null,this.agentSkillsReport=null,this.agentSkillsAgentId=null,this.sessionsLoading=!1,this.sessionsResult=null,this.sessionsError=null,this.sessionsFilterActive="",this.sessionsFilterLimit="120",this.sessionsIncludeGlobal=!0,this.sessionsIncludeUnknown=!1,this.usageLoading=!1,this.usageResult=null,this.usageCostSummary=null,this.usageError=null,this.usageStartDate=(()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`})(),this.usageEndDate=(()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`})(),this.usageSelectedSessions=[],this.usageSelectedDays=[],this.usageSelectedHours=[],this.usageChartMode="tokens",this.usageDailyChartMode="by-type",this.usageTimeSeriesMode="per-turn",this.usageTimeSeriesBreakdownMode="by-type",this.usageTimeSeries=null,this.usageTimeSeriesLoading=!1,this.usageSessionLogs=null,this.usageSessionLogsLoading=!1,this.usageSessionLogsExpanded=!1,this.usageQuery="",this.usageQueryDraft="",this.usageSessionSort="recent",this.usageSessionSortDir="desc",this.usageRecentSessions=[],this.usageTimeZone="local",this.usageContextExpanded=!1,this.usageHeaderPinned=!1,this.usageSessionsTab="all",this.usageVisibleColumns=["channel","agent","provider","model","messages","tools","errors","duration"],this.usageLogFilterRoles=[],this.usageLogFilterTools=[],this.usageLogFilterHasTools=!1,this.usageLogFilterQuery="",this.usageQueryDebounceTimer=null,this.cronLoading=!1,this.cronJobs=[],this.cronStatus=null,this.cronError=null,this.cronForm={...sg},this.cronRunsJobId=null,this.cronRuns=[],this.cronBusy=!1,this.skillsLoading=!1,this.skillsReport=null,this.skillsError=null,this.skillsFilter="",this.skillEdits={},this.skillsBusyKey=null,this.skillMessages={},this.debugLoading=!1,this.debugStatus=null,this.debugHealth=null,this.debugModels=[],this.debugHeartbeat=null,this.debugCallMethod="",this.debugCallParams="{}",this.debugCallResult=null,this.debugCallError=null,this.logsLoading=!1,this.logsError=null,this.logsFile=null,this.logsEntries=[],this.logsFilterText="",this.logsLevelFilters={...ng},this.logsAutoFollow=!0,this.logsTruncated=!1,this.logsCursor=null,this.logsLastFetchAt=null,this.logsLimit=500,this.logsMaxBytes=25e4,this.logsAtBottom=!0,this.client=null,this.chatScrollFrame=null,this.chatScrollTimeout=null,this.chatHasAutoScrolled=!1,this.chatUserNearBottom=!0,this.chatNewMessagesBelow=!1,this.nodesPollInterval=null,this.logsPollInterval=null,this.debugPollInterval=null,this.logsScrollFrame=null,this.toolStreamById=new Map,this.toolStreamOrder=[],this.refreshSessionsAfterChat=new Set,this.basePath="",this.popStateHandler=()=>Su(this),this.themeMedia=null,this.themeMediaHandler=null,this.topbarObserver=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),bg(this)}firstUpdated(){yg(this)}disconnectedCallback(){xg(this),super.disconnectedCallback()}updated(e){wg(this,e)}connect(){or(this)}handleChatScroll(e){Yc(this,e)}handleLogsScroll(e){Jc(this,e)}exportLogs(e,t){Zc(e,t)}resetToolStream(){ls(this)}resetChatScroll(){Bo(this)}scrollToBottom(){Bo(this),dn(this,!0)}async loadAssistantIdentity(){await nr(this)}applySettings(e){xt(this,e)}setTab(e){fu(this,e)}setTheme(e,t){vu(this,e,t)}async loadOverview(){await Vl(this)}async loadCron(){await Wn(this)}async handleAbortChat(){await Zl(this)}removeQueuedMessage(e){Ju(this,e)}async handleSendChat(e,t){await Zu(this,e,t)}async handleWhatsAppStart(e){await Oc(this,e)}async handleWhatsAppWait(){await Uc(this)}async handleWhatsAppLogout(){await Bc(this)}async handleChannelConfigSave(){await Hc(this)}async handleChannelConfigReload(){await zc(this)}handleNostrProfileEdit(e,t){Kc(this,e,t)}handleNostrProfileCancel(){jc(this)}handleNostrProfileFieldChange(e,t){qc(this,e,t)}async handleNostrProfileSave(){await Vc(this)}async handleNostrProfileImport(){await Qc(this)}handleNostrProfileToggleAdvanced(){Gc(this)}async handleExecApprovalDecision(e){const t=this.execApprovalQueue[0];if(!(!t||!this.client||this.execApprovalBusy)){this.execApprovalBusy=!0,this.execApprovalError=null;try{await this.client.request("exec.approval.resolve",{id:t.id,decision:e}),this.execApprovalQueue=this.execApprovalQueue.filter(n=>n.id!==t.id)}catch(n){this.execApprovalError=`Exec approval failed: ${String(n)}`}finally{this.execApprovalBusy=!1}}}handleGatewayUrlConfirm(){const e=this.pendingGatewayUrl;e&&(this.pendingGatewayUrl=null,xt(this,{...this.settings,gatewayUrl:e}),this.connect())}handleGatewayUrlCancel(){this.pendingGatewayUrl=null}handleOpenSidebar(e){this.sidebarCloseTimer!=null&&(window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=null),this.sidebarContent=e,this.sidebarError=null,this.sidebarOpen=!0}handleCloseSidebar(){this.sidebarOpen=!1,this.sidebarCloseTimer!=null&&window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=window.setTimeout(()=>{this.sidebarOpen||(this.sidebarContent=null,this.sidebarError=null,this.sidebarCloseTimer=null)},200)}handleSplitRatioChange(e){const t=Math.max(.4,Math.min(.7,e));this.splitRatio=t,this.applySettings({...this.settings,splitRatio:t})}render(){return kb(this)}};$([S()],x.prototype,"settings",2);$([S()],x.prototype,"password",2);$([S()],x.prototype,"tab",2);$([S()],x.prototype,"onboarding",2);$([S()],x.prototype,"connected",2);$([S()],x.prototype,"theme",2);$([S()],x.prototype,"themeResolved",2);$([S()],x.prototype,"hello",2);$([S()],x.prototype,"lastError",2);$([S()],x.prototype,"eventLog",2);$([S()],x.prototype,"assistantName",2);$([S()],x.prototype,"assistantAvatar",2);$([S()],x.prototype,"assistantAgentId",2);$([S()],x.prototype,"sessionKey",2);$([S()],x.prototype,"chatLoading",2);$([S()],x.prototype,"chatSending",2);$([S()],x.prototype,"chatMessage",2);$([S()],x.prototype,"chatMessages",2);$([S()],x.prototype,"chatToolMessages",2);$([S()],x.prototype,"chatStream",2);$([S()],x.prototype,"chatStreamStartedAt",2);$([S()],x.prototype,"chatRunId",2);$([S()],x.prototype,"compactionStatus",2);$([S()],x.prototype,"chatAvatarUrl",2);$([S()],x.prototype,"chatThinkingLevel",2);$([S()],x.prototype,"chatQueue",2);$([S()],x.prototype,"chatAttachments",2);$([S()],x.prototype,"sidebarOpen",2);$([S()],x.prototype,"sidebarContent",2);$([S()],x.prototype,"sidebarError",2);$([S()],x.prototype,"splitRatio",2);$([S()],x.prototype,"nodesLoading",2);$([S()],x.prototype,"nodes",2);$([S()],x.prototype,"devicesLoading",2);$([S()],x.prototype,"devicesError",2);$([S()],x.prototype,"devicesList",2);$([S()],x.prototype,"execApprovalsLoading",2);$([S()],x.prototype,"execApprovalsSaving",2);$([S()],x.prototype,"execApprovalsDirty",2);$([S()],x.prototype,"execApprovalsSnapshot",2);$([S()],x.prototype,"execApprovalsForm",2);$([S()],x.prototype,"execApprovalsSelectedAgent",2);$([S()],x.prototype,"execApprovalsTarget",2);$([S()],x.prototype,"execApprovalsTargetNodeId",2);$([S()],x.prototype,"execApprovalQueue",2);$([S()],x.prototype,"execApprovalBusy",2);$([S()],x.prototype,"execApprovalError",2);$([S()],x.prototype,"pendingGatewayUrl",2);$([S()],x.prototype,"configLoading",2);$([S()],x.prototype,"configRaw",2);$([S()],x.prototype,"configRawOriginal",2);$([S()],x.prototype,"configValid",2);$([S()],x.prototype,"configIssues",2);$([S()],x.prototype,"configSaving",2);$([S()],x.prototype,"configApplying",2);$([S()],x.prototype,"updateRunning",2);$([S()],x.prototype,"applySessionKey",2);$([S()],x.prototype,"configSnapshot",2);$([S()],x.prototype,"configSchema",2);$([S()],x.prototype,"configSchemaVersion",2);$([S()],x.prototype,"configSchemaLoading",2);$([S()],x.prototype,"configUiHints",2);$([S()],x.prototype,"configForm",2);$([S()],x.prototype,"configFormOriginal",2);$([S()],x.prototype,"configFormDirty",2);$([S()],x.prototype,"configFormMode",2);$([S()],x.prototype,"configSearchQuery",2);$([S()],x.prototype,"configActiveSection",2);$([S()],x.prototype,"configActiveSubsection",2);$([S()],x.prototype,"channelsLoading",2);$([S()],x.prototype,"channelsSnapshot",2);$([S()],x.prototype,"channelsError",2);$([S()],x.prototype,"channelsLastSuccess",2);$([S()],x.prototype,"whatsappLoginMessage",2);$([S()],x.prototype,"whatsappLoginQrDataUrl",2);$([S()],x.prototype,"whatsappLoginConnected",2);$([S()],x.prototype,"whatsappBusy",2);$([S()],x.prototype,"nostrProfileFormState",2);$([S()],x.prototype,"nostrProfileAccountId",2);$([S()],x.prototype,"presenceLoading",2);$([S()],x.prototype,"presenceEntries",2);$([S()],x.prototype,"presenceError",2);$([S()],x.prototype,"presenceStatus",2);$([S()],x.prototype,"agentsLoading",2);$([S()],x.prototype,"agentsList",2);$([S()],x.prototype,"agentsError",2);$([S()],x.prototype,"agentsSelectedId",2);$([S()],x.prototype,"agentsPanel",2);$([S()],x.prototype,"agentFilesLoading",2);$([S()],x.prototype,"agentFilesError",2);$([S()],x.prototype,"agentFilesList",2);$([S()],x.prototype,"agentFileContents",2);$([S()],x.prototype,"agentFileDrafts",2);$([S()],x.prototype,"agentFileActive",2);$([S()],x.prototype,"agentFileSaving",2);$([S()],x.prototype,"agentIdentityLoading",2);$([S()],x.prototype,"agentIdentityError",2);$([S()],x.prototype,"agentIdentityById",2);$([S()],x.prototype,"agentSkillsLoading",2);$([S()],x.prototype,"agentSkillsError",2);$([S()],x.prototype,"agentSkillsReport",2);$([S()],x.prototype,"agentSkillsAgentId",2);$([S()],x.prototype,"sessionsLoading",2);$([S()],x.prototype,"sessionsResult",2);$([S()],x.prototype,"sessionsError",2);$([S()],x.prototype,"sessionsFilterActive",2);$([S()],x.prototype,"sessionsFilterLimit",2);$([S()],x.prototype,"sessionsIncludeGlobal",2);$([S()],x.prototype,"sessionsIncludeUnknown",2);$([S()],x.prototype,"usageLoading",2);$([S()],x.prototype,"usageResult",2);$([S()],x.prototype,"usageCostSummary",2);$([S()],x.prototype,"usageError",2);$([S()],x.prototype,"usageStartDate",2);$([S()],x.prototype,"usageEndDate",2);$([S()],x.prototype,"usageSelectedSessions",2);$([S()],x.prototype,"usageSelectedDays",2);$([S()],x.prototype,"usageSelectedHours",2);$([S()],x.prototype,"usageChartMode",2);$([S()],x.prototype,"usageDailyChartMode",2);$([S()],x.prototype,"usageTimeSeriesMode",2);$([S()],x.prototype,"usageTimeSeriesBreakdownMode",2);$([S()],x.prototype,"usageTimeSeries",2);$([S()],x.prototype,"usageTimeSeriesLoading",2);$([S()],x.prototype,"usageSessionLogs",2);$([S()],x.prototype,"usageSessionLogsLoading",2);$([S()],x.prototype,"usageSessionLogsExpanded",2);$([S()],x.prototype,"usageQuery",2);$([S()],x.prototype,"usageQueryDraft",2);$([S()],x.prototype,"usageSessionSort",2);$([S()],x.prototype,"usageSessionSortDir",2);$([S()],x.prototype,"usageRecentSessions",2);$([S()],x.prototype,"usageTimeZone",2);$([S()],x.prototype,"usageContextExpanded",2);$([S()],x.prototype,"usageHeaderPinned",2);$([S()],x.prototype,"usageSessionsTab",2);$([S()],x.prototype,"usageVisibleColumns",2);$([S()],x.prototype,"usageLogFilterRoles",2);$([S()],x.prototype,"usageLogFilterTools",2);$([S()],x.prototype,"usageLogFilterHasTools",2);$([S()],x.prototype,"usageLogFilterQuery",2);$([S()],x.prototype,"cronLoading",2);$([S()],x.prototype,"cronJobs",2);$([S()],x.prototype,"cronStatus",2);$([S()],x.prototype,"cronError",2);$([S()],x.prototype,"cronForm",2);$([S()],x.prototype,"cronRunsJobId",2);$([S()],x.prototype,"cronRuns",2);$([S()],x.prototype,"cronBusy",2);$([S()],x.prototype,"skillsLoading",2);$([S()],x.prototype,"skillsReport",2);$([S()],x.prototype,"skillsError",2);$([S()],x.prototype,"skillsFilter",2);$([S()],x.prototype,"skillEdits",2);$([S()],x.prototype,"skillsBusyKey",2);$([S()],x.prototype,"skillMessages",2);$([S()],x.prototype,"debugLoading",2);$([S()],x.prototype,"debugStatus",2);$([S()],x.prototype,"debugHealth",2);$([S()],x.prototype,"debugModels",2);$([S()],x.prototype,"debugHeartbeat",2);$([S()],x.prototype,"debugCallMethod",2);$([S()],x.prototype,"debugCallParams",2);$([S()],x.prototype,"debugCallResult",2);$([S()],x.prototype,"debugCallError",2);$([S()],x.prototype,"logsLoading",2);$([S()],x.prototype,"logsError",2);$([S()],x.prototype,"logsFile",2);$([S()],x.prototype,"logsEntries",2);$([S()],x.prototype,"logsFilterText",2);$([S()],x.prototype,"logsLevelFilters",2);$([S()],x.prototype,"logsAutoFollow",2);$([S()],x.prototype,"logsTruncated",2);$([S()],x.prototype,"logsCursor",2);$([S()],x.prototype,"logsLastFetchAt",2);$([S()],x.prototype,"logsLimit",2);$([S()],x.prototype,"logsMaxBytes",2);$([S()],x.prototype,"logsAtBottom",2);$([S()],x.prototype,"chatNewMessagesBelow",2);x=$([dl("openclaw-app")],x);
//# sourceMappingURL=index-BhobZs58.js.map
