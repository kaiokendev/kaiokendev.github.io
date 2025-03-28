(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Hp(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Xc={exports:{}},ga={},qc={exports:{}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf;function i0(){if(mf)return ct;mf=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(R){return R===null||typeof R!="object"?null:(R=v&&R[v]||R["@@iterator"],typeof R=="function"?R:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function x(R,F,Q){this.props=R,this.context=F,this.refs=w,this.updater=Q||S}x.prototype.isReactComponent={},x.prototype.setState=function(R,F){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,F,"setState")},x.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function y(){}y.prototype=x.prototype;function I(R,F,Q){this.props=R,this.context=F,this.refs=w,this.updater=Q||S}var P=I.prototype=new y;P.constructor=I,T(P,x.prototype),P.isPureReactComponent=!0;var L=Array.isArray,k=Object.prototype.hasOwnProperty,z={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function ae(R,F,Q){var de,ge={},Me=null,Le=null;if(F!=null)for(de in F.ref!==void 0&&(Le=F.ref),F.key!==void 0&&(Me=""+F.key),F)k.call(F,de)&&!O.hasOwnProperty(de)&&(ge[de]=F[de]);var we=arguments.length-2;if(we===1)ge.children=Q;else if(1<we){for(var Ve=Array(we),mt=0;mt<we;mt++)Ve[mt]=arguments[mt+2];ge.children=Ve}if(R&&R.defaultProps)for(de in we=R.defaultProps,we)ge[de]===void 0&&(ge[de]=we[de]);return{$$typeof:s,type:R,key:Me,ref:Le,props:ge,_owner:z.current}}function C(R,F){return{$$typeof:s,type:R.type,key:F,ref:R.ref,props:R.props,_owner:R._owner}}function D(R){return typeof R=="object"&&R!==null&&R.$$typeof===s}function fe(R){var F={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(Q){return F[Q]})}var pe=/\/+/g;function Y(R,F){return typeof R=="object"&&R!==null&&R.key!=null?fe(""+R.key):F.toString(36)}function ne(R,F,Q,de,ge){var Me=typeof R;(Me==="undefined"||Me==="boolean")&&(R=null);var Le=!1;if(R===null)Le=!0;else switch(Me){case"string":case"number":Le=!0;break;case"object":switch(R.$$typeof){case s:case e:Le=!0}}if(Le)return Le=R,ge=ge(Le),R=de===""?"."+Y(Le,0):de,L(ge)?(Q="",R!=null&&(Q=R.replace(pe,"$&/")+"/"),ne(ge,F,Q,"",function(mt){return mt})):ge!=null&&(D(ge)&&(ge=C(ge,Q+(!ge.key||Le&&Le.key===ge.key?"":(""+ge.key).replace(pe,"$&/")+"/")+R)),F.push(ge)),1;if(Le=0,de=de===""?".":de+":",L(R))for(var we=0;we<R.length;we++){Me=R[we];var Ve=de+Y(Me,we);Le+=ne(Me,F,Q,Ve,ge)}else if(Ve=_(R),typeof Ve=="function")for(R=Ve.call(R),we=0;!(Me=R.next()).done;)Me=Me.value,Ve=de+Y(Me,we++),Le+=ne(Me,F,Q,Ve,ge);else if(Me==="object")throw F=String(R),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return Le}function re(R,F,Q){if(R==null)return R;var de=[],ge=0;return ne(R,de,"","",function(Me){return F.call(Q,Me,ge++)}),de}function he(R){if(R._status===-1){var F=R._result;F=F(),F.then(function(Q){(R._status===0||R._status===-1)&&(R._status=1,R._result=Q)},function(Q){(R._status===0||R._status===-1)&&(R._status=2,R._result=Q)}),R._status===-1&&(R._status=0,R._result=F)}if(R._status===1)return R._result.default;throw R._result}var J={current:null},G={transition:null},te={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:G,ReactCurrentOwner:z};function W(){throw Error("act(...) is not supported in production builds of React.")}return ct.Children={map:re,forEach:function(R,F,Q){re(R,function(){F.apply(this,arguments)},Q)},count:function(R){var F=0;return re(R,function(){F++}),F},toArray:function(R){return re(R,function(F){return F})||[]},only:function(R){if(!D(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},ct.Component=x,ct.Fragment=t,ct.Profiler=o,ct.PureComponent=I,ct.StrictMode=r,ct.Suspense=f,ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,ct.act=W,ct.cloneElement=function(R,F,Q){if(R==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+R+".");var de=T({},R.props),ge=R.key,Me=R.ref,Le=R._owner;if(F!=null){if(F.ref!==void 0&&(Me=F.ref,Le=z.current),F.key!==void 0&&(ge=""+F.key),R.type&&R.type.defaultProps)var we=R.type.defaultProps;for(Ve in F)k.call(F,Ve)&&!O.hasOwnProperty(Ve)&&(de[Ve]=F[Ve]===void 0&&we!==void 0?we[Ve]:F[Ve])}var Ve=arguments.length-2;if(Ve===1)de.children=Q;else if(1<Ve){we=Array(Ve);for(var mt=0;mt<Ve;mt++)we[mt]=arguments[mt+2];de.children=we}return{$$typeof:s,type:R.type,key:ge,ref:Me,props:de,_owner:Le}},ct.createContext=function(R){return R={$$typeof:u,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},R.Provider={$$typeof:l,_context:R},R.Consumer=R},ct.createElement=ae,ct.createFactory=function(R){var F=ae.bind(null,R);return F.type=R,F},ct.createRef=function(){return{current:null}},ct.forwardRef=function(R){return{$$typeof:h,render:R}},ct.isValidElement=D,ct.lazy=function(R){return{$$typeof:g,_payload:{_status:-1,_result:R},_init:he}},ct.memo=function(R,F){return{$$typeof:p,type:R,compare:F===void 0?null:F}},ct.startTransition=function(R){var F=G.transition;G.transition={};try{R()}finally{G.transition=F}},ct.unstable_act=W,ct.useCallback=function(R,F){return J.current.useCallback(R,F)},ct.useContext=function(R){return J.current.useContext(R)},ct.useDebugValue=function(){},ct.useDeferredValue=function(R){return J.current.useDeferredValue(R)},ct.useEffect=function(R,F){return J.current.useEffect(R,F)},ct.useId=function(){return J.current.useId()},ct.useImperativeHandle=function(R,F,Q){return J.current.useImperativeHandle(R,F,Q)},ct.useInsertionEffect=function(R,F){return J.current.useInsertionEffect(R,F)},ct.useLayoutEffect=function(R,F){return J.current.useLayoutEffect(R,F)},ct.useMemo=function(R,F){return J.current.useMemo(R,F)},ct.useReducer=function(R,F,Q){return J.current.useReducer(R,F,Q)},ct.useRef=function(R){return J.current.useRef(R)},ct.useState=function(R){return J.current.useState(R)},ct.useSyncExternalStore=function(R,F,Q){return J.current.useSyncExternalStore(R,F,Q)},ct.useTransition=function(){return J.current.useTransition()},ct.version="18.3.1",ct}var gf;function Bu(){return gf||(gf=1,qc.exports=i0()),qc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vf;function r0(){if(vf)return ga;vf=1;var s=Bu(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(h,f,p){var g,v={},_=null,S=null;p!==void 0&&(_=""+p),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(S=f.ref);for(g in f)r.call(f,g)&&!l.hasOwnProperty(g)&&(v[g]=f[g]);if(h&&h.defaultProps)for(g in f=h.defaultProps,f)v[g]===void 0&&(v[g]=f[g]);return{$$typeof:e,type:h,key:_,ref:S,props:v,_owner:o.current}}return ga.Fragment=t,ga.jsx=u,ga.jsxs=u,ga}var _f;function s0(){return _f||(_f=1,Xc.exports=r0()),Xc.exports}var A=s0(),be=Bu();const Vp=Hp(be);var No={},Yc={exports:{}},Sn={},$c={exports:{}},Kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf;function a0(){return yf||(yf=1,function(s){function e(G,te){var W=G.length;G.push(te);e:for(;0<W;){var R=W-1>>>1,F=G[R];if(0<o(F,te))G[R]=te,G[W]=F,W=R;else break e}}function t(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var te=G[0],W=G.pop();if(W!==te){G[0]=W;e:for(var R=0,F=G.length,Q=F>>>1;R<Q;){var de=2*(R+1)-1,ge=G[de],Me=de+1,Le=G[Me];if(0>o(ge,W))Me<F&&0>o(Le,ge)?(G[R]=Le,G[Me]=W,R=Me):(G[R]=ge,G[de]=W,R=de);else if(Me<F&&0>o(Le,W))G[R]=Le,G[Me]=W,R=Me;else break e}}return te}function o(G,te){var W=G.sortIndex-te.sortIndex;return W!==0?W:G.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var f=[],p=[],g=1,v=null,_=3,S=!1,T=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(G){for(var te=t(p);te!==null;){if(te.callback===null)r(p);else if(te.startTime<=G)r(p),te.sortIndex=te.expirationTime,e(f,te);else break;te=t(p)}}function L(G){if(w=!1,P(G),!T)if(t(f)!==null)T=!0,he(k);else{var te=t(p);te!==null&&J(L,te.startTime-G)}}function k(G,te){T=!1,w&&(w=!1,y(ae),ae=-1),S=!0;var W=_;try{for(P(te),v=t(f);v!==null&&(!(v.expirationTime>te)||G&&!fe());){var R=v.callback;if(typeof R=="function"){v.callback=null,_=v.priorityLevel;var F=R(v.expirationTime<=te);te=s.unstable_now(),typeof F=="function"?v.callback=F:v===t(f)&&r(f),P(te)}else r(f);v=t(f)}if(v!==null)var Q=!0;else{var de=t(p);de!==null&&J(L,de.startTime-te),Q=!1}return Q}finally{v=null,_=W,S=!1}}var z=!1,O=null,ae=-1,C=5,D=-1;function fe(){return!(s.unstable_now()-D<C)}function pe(){if(O!==null){var G=s.unstable_now();D=G;var te=!0;try{te=O(!0,G)}finally{te?Y():(z=!1,O=null)}}else z=!1}var Y;if(typeof I=="function")Y=function(){I(pe)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=pe,Y=function(){re.postMessage(null)}}else Y=function(){x(pe,0)};function he(G){O=G,z||(z=!0,Y())}function J(G,te){ae=x(function(){G(s.unstable_now())},te)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,he(k))},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(G){switch(_){case 1:case 2:case 3:var te=3;break;default:te=_}var W=_;_=te;try{return G()}finally{_=W}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(G,te){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var W=_;_=G;try{return te()}finally{_=W}},s.unstable_scheduleCallback=function(G,te,W){var R=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?R+W:R):W=R,G){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=W+F,G={id:g++,callback:te,priorityLevel:G,startTime:W,expirationTime:F,sortIndex:-1},W>R?(G.sortIndex=W,e(p,G),t(f)===null&&G===t(p)&&(w?(y(ae),ae=-1):w=!0,J(L,W-R))):(G.sortIndex=F,e(f,G),T||S||(T=!0,he(k))),G},s.unstable_shouldYield=fe,s.unstable_wrapCallback=function(G){var te=_;return function(){var W=_;_=te;try{return G.apply(this,arguments)}finally{_=W}}}}(Kc)),Kc}var xf;function o0(){return xf||(xf=1,$c.exports=a0()),$c.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf;function l0(){if(Sf)return Sn;Sf=1;var s=Bu(),e=o0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function _(n){return f.call(v,n)?!0:f.call(g,n)?!1:p.test(n)?v[n]=!0:(g[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,a,c,d,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,I);x[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,I);x[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,I);x[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,c){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,d,c)&&(a=null),c||d===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),z=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),ae=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),fe=Symbol.for("react.context"),pe=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),G=Symbol.iterator;function te(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var W=Object.assign,R;function F(n){if(R===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);R=i&&i[1]||""}return`
`+R+n}var Q=!1;function de(n,i){if(!n||Q)return"";Q=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Z){var c=Z}Reflect.construct(n,[],i)}else{try{i.call()}catch(Z){c=Z}n.call(i.prototype)}else{try{throw Error()}catch(Z){c=Z}n()}}catch(Z){if(Z&&c&&typeof Z.stack=="string"){for(var d=Z.stack.split(`
`),m=c.stack.split(`
`),M=d.length-1,U=m.length-1;1<=M&&0<=U&&d[M]!==m[U];)U--;for(;1<=M&&0<=U;M--,U--)if(d[M]!==m[U]){if(M!==1||U!==1)do if(M--,U--,0>U||d[M]!==m[U]){var B=`
`+d[M].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=M&&0<=U);break}}}finally{Q=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?F(n):""}function ge(n){switch(n.tag){case 5:return F(n.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return n=de(n.type,!1),n;case 11:return n=de(n.type.render,!1),n;case 1:return n=de(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case z:return"Portal";case C:return"Profiler";case ae:return"StrictMode";case Y:return"Suspense";case ne:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case fe:return(n.displayName||"Context")+".Consumer";case D:return(n._context.displayName||"Context")+".Provider";case pe:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case re:return i=n.displayName||null,i!==null?i:Me(n.type)||"Memo";case he:i=n._payload,n=n._init;try{return Me(n(i))}catch{}}return null}function Le(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===ae?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ve(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function mt(n){var i=Ve(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){c=""+M,m.call(this,M)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(M){c=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function tt(n){n._valueTracker||(n._valueTracker=mt(n))}function $(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ve(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function je(n,i){var a=i.checked;return W({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Je(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=we(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function $e(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function vt(n,i){$e(n,i);var a=we(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?et(n,i.type,a):i.hasOwnProperty("defaultValue")&&et(n,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function rt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function et(n,i,a){(i!=="number"||Pt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ht=Array.isArray;function xt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+we(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Dt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return W({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function N(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(ht(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:we(a)}}function E(n,i){var a=we(i.value),c=we(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function se(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ue(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ye(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ue(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Te,Be=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Te=Te||document.createElement("div"),Te.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Te.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ee(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var oe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ge=["Webkit","ms","Moz","O"];Object.keys(oe).forEach(function(n){Ge.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),oe[i]=oe[n]})});function He(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||oe.hasOwnProperty(n)&&oe[n]?(""+i).trim():i+"px"}function We(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=He(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var ke=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function De(n,i){if(i){if(ke[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function it(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gt=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,ee=null,Se=null;function Ce(n){if(n=ta(n)){if(typeof Re!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Xa(i),Re(n.stateNode,n.type,i))}}function dt(n){ee?Se?Se.push(n):Se=[n]:ee=n}function St(){if(ee){var n=ee,i=Se;if(Se=ee=null,Ce(n),i)for(n=0;n<i.length;n++)Ce(i[n])}}function Ft(n,i){return n(i)}function wn(){}var Mt=!1;function Rn(n,i,a){if(Mt)return n(i,a);Mt=!0;try{return Ft(n,i,a)}finally{Mt=!1,(ee!==null||Se!==null)&&(wn(),St())}}function kt(n,i){var a=n.stateNode;if(a===null)return null;var c=Xa(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Br=!1;if(h)try{var Ii={};Object.defineProperty(Ii,"passive",{get:function(){Br=!0}}),window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{Br=!1}function cl(n,i,a,c,d,m,M,U,B){var Z=Array.prototype.slice.call(arguments,3);try{i.apply(a,Z)}catch(ve){this.onError(ve)}}var si=!1,ur=null,pi=!1,zr=null,ul={onError:function(n){si=!0,ur=n}};function hl(n,i,a,c,d,m,M,U,B){si=!1,ur=null,cl.apply(ul,arguments)}function dl(n,i,a,c,d,m,M,U,B){if(hl.apply(this,arguments),si){if(si){var Z=ur;si=!1,ur=null}else throw Error(t(198));pi||(pi=!0,zr=Z)}}function b(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function K(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function le(n){if(b(n)!==n)throw Error(t(188))}function X(n){var i=n.alternate;if(!i){if(i=b(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return le(d),n;if(m===c)return le(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var M=!1,U=d.child;U;){if(U===a){M=!0,a=d,c=m;break}if(U===c){M=!0,c=d,a=m;break}U=U.sibling}if(!M){for(U=m.child;U;){if(U===a){M=!0,a=m,c=d;break}if(U===c){M=!0,c=m,a=d;break}U=U.sibling}if(!M)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ce(n){return n=X(n),n!==null?Ne(n):null}function Ne(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ne(n);if(i!==null)return i;n=n.sibling}return null}var Xe=e.unstable_scheduleCallback,Ke=e.unstable_cancelCallback,Ze=e.unstable_shouldYield,ot=e.unstable_requestPaint,Ie=e.unstable_now,nt=e.unstable_getCurrentPriorityLevel,Et=e.unstable_ImmediatePriority,Ct=e.unstable_UserBlockingPriority,sn=e.unstable_NormalPriority,jn=e.unstable_LowPriority,Lt=e.unstable_IdlePriority,lt=null,mn=null;function Bt(n){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(lt,n,void 0,(n.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:Fs,Pa=Math.log,hr=Math.LN2;function Fs(n){return n>>>=0,n===0?32:31-(Pa(n)/hr|0)|0}var zt=64,In=4194304;function mi(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function $t(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,M=a&268435455;if(M!==0){var U=M&~d;U!==0?c=mi(U):(m&=M,m!==0&&(c=mi(m)))}else M=a&~d,M!==0?c=mi(M):m!==0&&(c=mi(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Gt(i),d=1<<a,c|=n[a],i&=~d;return c}function ks(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fl(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var M=31-Gt(m),U=1<<M,B=d[M];B===-1?((U&a)===0||(U&c)!==0)&&(d[M]=ks(U,i)):B<=i&&(n.expiredLanes|=U),m&=~U}}function Hr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ju(){var n=zt;return zt<<=1,(zt&4194240)===0&&(zt=64),n}function pl(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Os(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Gt(i),n[i]=a}function Tm(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Gt(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function ml(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Gt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var _t=0;function Xu(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var qu,gl,Yu,$u,Ku,vl=!1,La=[],Fi=null,ki=null,Oi=null,Bs=new Map,zs=new Map,Bi=[],wm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qu(n,i){switch(n){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":ki=null;break;case"mouseover":case"mouseout":Oi=null;break;case"pointerover":case"pointerout":Bs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":zs.delete(i.pointerId)}}function Hs(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=ta(i),i!==null&&gl(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Rm(n,i,a,c,d){switch(i){case"focusin":return Fi=Hs(Fi,n,i,a,c,d),!0;case"dragenter":return ki=Hs(ki,n,i,a,c,d),!0;case"mouseover":return Oi=Hs(Oi,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Bs.set(m,Hs(Bs.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,zs.set(m,Hs(zs.get(m)||null,n,i,a,c,d)),!0}return!1}function Zu(n){var i=dr(n.target);if(i!==null){var a=b(i);if(a!==null){if(i=a.tag,i===13){if(i=K(a),i!==null){n.blockedOn=i,Ku(n.priority,function(){Yu(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Na(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=yl(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);gt=c,a.target.dispatchEvent(c),gt=null}else return i=ta(a),i!==null&&gl(i),n.blockedOn=a,!1;i.shift()}return!0}function Ju(n,i,a){Na(n)&&a.delete(i)}function Am(){vl=!1,Fi!==null&&Na(Fi)&&(Fi=null),ki!==null&&Na(ki)&&(ki=null),Oi!==null&&Na(Oi)&&(Oi=null),Bs.forEach(Ju),zs.forEach(Ju)}function Vs(n,i){n.blockedOn===i&&(n.blockedOn=null,vl||(vl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Am)))}function Gs(n){function i(d){return Vs(d,n)}if(0<La.length){Vs(La[0],n);for(var a=1;a<La.length;a++){var c=La[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Fi!==null&&Vs(Fi,n),ki!==null&&Vs(ki,n),Oi!==null&&Vs(Oi,n),Bs.forEach(i),zs.forEach(i),a=0;a<Bi.length;a++)c=Bi[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Bi.length&&(a=Bi[0],a.blockedOn===null);)Zu(a),a.blockedOn===null&&Bi.shift()}var Vr=L.ReactCurrentBatchConfig,Ua=!0;function Cm(n,i,a,c){var d=_t,m=Vr.transition;Vr.transition=null;try{_t=1,_l(n,i,a,c)}finally{_t=d,Vr.transition=m}}function bm(n,i,a,c){var d=_t,m=Vr.transition;Vr.transition=null;try{_t=4,_l(n,i,a,c)}finally{_t=d,Vr.transition=m}}function _l(n,i,a,c){if(Ua){var d=yl(n,i,a,c);if(d===null)Fl(n,i,c,Da,a),Qu(n,c);else if(Rm(d,n,i,a,c))c.stopPropagation();else if(Qu(n,c),i&4&&-1<wm.indexOf(n)){for(;d!==null;){var m=ta(d);if(m!==null&&qu(m),m=yl(n,i,a,c),m===null&&Fl(n,i,c,Da,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Fl(n,i,c,null,a)}}var Da=null;function yl(n,i,a,c){if(Da=null,n=H(c),n=dr(n),n!==null)if(i=b(n),i===null)n=null;else if(a=i.tag,a===13){if(n=K(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Da=n,null}function eh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nt()){case Et:return 1;case Ct:return 4;case sn:case jn:return 16;case Lt:return 536870912;default:return 16}default:return 16}}var zi=null,xl=null,Ia=null;function th(){if(Ia)return Ia;var n,i=xl,a=i.length,c,d="value"in zi?zi.value:zi.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var M=a-n;for(c=1;c<=M&&i[a-c]===d[m-c];c++);return Ia=d.slice(n,1<c?1-c:void 0)}function Fa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ka(){return!0}function nh(){return!1}function An(n){function i(a,c,d,m,M){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ka:nh,this.isPropagationStopped=nh,this}return W(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ka)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ka)},persist:function(){},isPersistent:ka}),i}var Gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=An(Gr),Ws=W({},Gr,{view:0,detail:0}),Pm=An(Ws),Ml,El,js,Oa=W({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wl,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==js&&(js&&n.type==="mousemove"?(Ml=n.screenX-js.screenX,El=n.screenY-js.screenY):El=Ml=0,js=n),Ml)},movementY:function(n){return"movementY"in n?n.movementY:El}}),ih=An(Oa),Lm=W({},Oa,{dataTransfer:0}),Nm=An(Lm),Um=W({},Ws,{relatedTarget:0}),Tl=An(Um),Dm=W({},Gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Im=An(Dm),Fm=W({},Gr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),km=An(Fm),Om=W({},Gr,{data:0}),rh=An(Om),Bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vm(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Hm[n])?!!i[n]:!1}function wl(){return Vm}var Gm=W({},Ws,{key:function(n){if(n.key){var i=Bm[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Fa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zm[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wl,charCode:function(n){return n.type==="keypress"?Fa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Fa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Wm=An(Gm),jm=W({},Oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sh=An(jm),Xm=W({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wl}),qm=An(Xm),Ym=W({},Gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),$m=An(Ym),Km=W({},Oa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Qm=An(Km),Zm=[9,13,27,32],Rl=h&&"CompositionEvent"in window,Xs=null;h&&"documentMode"in document&&(Xs=document.documentMode);var Jm=h&&"TextEvent"in window&&!Xs,ah=h&&(!Rl||Xs&&8<Xs&&11>=Xs),oh=" ",lh=!1;function ch(n,i){switch(n){case"keyup":return Zm.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Wr=!1;function eg(n,i){switch(n){case"compositionend":return uh(i);case"keypress":return i.which!==32?null:(lh=!0,oh);case"textInput":return n=i.data,n===oh&&lh?null:n;default:return null}}function tg(n,i){if(Wr)return n==="compositionend"||!Rl&&ch(n,i)?(n=th(),Ia=xl=zi=null,Wr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ah&&i.locale!=="ko"?null:i.data;default:return null}}var ng={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!ng[n.type]:i==="textarea"}function dh(n,i,a,c){dt(c),i=Ga(i,"onChange"),0<i.length&&(a=new Sl("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var qs=null,Ys=null;function ig(n){Ph(n,0)}function Ba(n){var i=$r(n);if($(i))return n}function rg(n,i){if(n==="change")return i}var fh=!1;if(h){var Al;if(h){var Cl="oninput"in document;if(!Cl){var ph=document.createElement("div");ph.setAttribute("oninput","return;"),Cl=typeof ph.oninput=="function"}Al=Cl}else Al=!1;fh=Al&&(!document.documentMode||9<document.documentMode)}function mh(){qs&&(qs.detachEvent("onpropertychange",gh),Ys=qs=null)}function gh(n){if(n.propertyName==="value"&&Ba(Ys)){var i=[];dh(i,Ys,n,H(n)),Rn(ig,i)}}function sg(n,i,a){n==="focusin"?(mh(),qs=i,Ys=a,qs.attachEvent("onpropertychange",gh)):n==="focusout"&&mh()}function ag(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ba(Ys)}function og(n,i){if(n==="click")return Ba(i)}function lg(n,i){if(n==="input"||n==="change")return Ba(i)}function cg(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Xn=typeof Object.is=="function"?Object.is:cg;function $s(n,i){if(Xn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!f.call(i,d)||!Xn(n[d],i[d]))return!1}return!0}function vh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function _h(n,i){var a=vh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vh(a)}}function yh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?yh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function xh(){for(var n=window,i=Pt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Pt(n.document)}return i}function bl(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function ug(n){var i=xh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&yh(a.ownerDocument.documentElement,a)){if(c!==null&&bl(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=_h(a,m);var M=_h(a,c);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var hg=h&&"documentMode"in document&&11>=document.documentMode,jr=null,Pl=null,Ks=null,Ll=!1;function Sh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ll||jr==null||jr!==Pt(c)||(c=jr,"selectionStart"in c&&bl(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ks&&$s(Ks,c)||(Ks=c,c=Ga(Pl,"onSelect"),0<c.length&&(i=new Sl("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=jr)))}function za(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Xr={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionend:za("Transition","TransitionEnd")},Nl={},Mh={};h&&(Mh=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function Ha(n){if(Nl[n])return Nl[n];if(!Xr[n])return n;var i=Xr[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Mh)return Nl[n]=i[a];return n}var Eh=Ha("animationend"),Th=Ha("animationiteration"),wh=Ha("animationstart"),Rh=Ha("transitionend"),Ah=new Map,Ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hi(n,i){Ah.set(n,i),l(i,[n])}for(var Ul=0;Ul<Ch.length;Ul++){var Dl=Ch[Ul],dg=Dl.toLowerCase(),fg=Dl[0].toUpperCase()+Dl.slice(1);Hi(dg,"on"+fg)}Hi(Eh,"onAnimationEnd"),Hi(Th,"onAnimationIteration"),Hi(wh,"onAnimationStart"),Hi("dblclick","onDoubleClick"),Hi("focusin","onFocus"),Hi("focusout","onBlur"),Hi(Rh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qs));function bh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,dl(c,i,void 0,n),n.currentTarget=null}function Ph(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var M=c.length-1;0<=M;M--){var U=c[M],B=U.instance,Z=U.currentTarget;if(U=U.listener,B!==m&&d.isPropagationStopped())break e;bh(d,U,Z),m=B}else for(M=0;M<c.length;M++){if(U=c[M],B=U.instance,Z=U.currentTarget,U=U.listener,B!==m&&d.isPropagationStopped())break e;bh(d,U,Z),m=B}}}if(pi)throw n=zr,pi=!1,zr=null,n}function wt(n,i){var a=i[Vl];a===void 0&&(a=i[Vl]=new Set);var c=n+"__bubble";a.has(c)||(Lh(i,n,2,!1),a.add(c))}function Il(n,i,a){var c=0;i&&(c|=4),Lh(a,n,c,i)}var Va="_reactListening"+Math.random().toString(36).slice(2);function Zs(n){if(!n[Va]){n[Va]=!0,r.forEach(function(a){a!=="selectionchange"&&(pg.has(a)||Il(a,!1,n),Il(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Va]||(i[Va]=!0,Il("selectionchange",!1,i))}}function Lh(n,i,a,c){switch(eh(i)){case 1:var d=Cm;break;case 4:d=bm;break;default:d=_l}a=d.bind(null,i,a,n),d=void 0,!Br||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Fl(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var M=c.tag;if(M===3||M===4){var U=c.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(M===4)for(M=c.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;M=M.return}for(;U!==null;){if(M=dr(U),M===null)return;if(B=M.tag,B===5||B===6){c=m=M;continue e}U=U.parentNode}}c=c.return}Rn(function(){var Z=m,ve=H(a),_e=[];e:{var me=Ah.get(n);if(me!==void 0){var Pe=Sl,Fe=n;switch(n){case"keypress":if(Fa(a)===0)break e;case"keydown":case"keyup":Pe=Wm;break;case"focusin":Fe="focus",Pe=Tl;break;case"focusout":Fe="blur",Pe=Tl;break;case"beforeblur":case"afterblur":Pe=Tl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Pe=ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Pe=Nm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Pe=qm;break;case Eh:case Th:case wh:Pe=Im;break;case Rh:Pe=$m;break;case"scroll":Pe=Pm;break;case"wheel":Pe=Qm;break;case"copy":case"cut":case"paste":Pe=km;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Pe=sh}var Oe=(i&4)!==0,Ot=!Oe&&n==="scroll",j=Oe?me!==null?me+"Capture":null:me;Oe=[];for(var V=Z,q;V!==null;){q=V;var xe=q.stateNode;if(q.tag===5&&xe!==null&&(q=xe,j!==null&&(xe=kt(V,j),xe!=null&&Oe.push(Js(V,xe,q)))),Ot)break;V=V.return}0<Oe.length&&(me=new Pe(me,Fe,null,a,ve),_e.push({event:me,listeners:Oe}))}}if((i&7)===0){e:{if(me=n==="mouseover"||n==="pointerover",Pe=n==="mouseout"||n==="pointerout",me&&a!==gt&&(Fe=a.relatedTarget||a.fromElement)&&(dr(Fe)||Fe[gi]))break e;if((Pe||me)&&(me=ve.window===ve?ve:(me=ve.ownerDocument)?me.defaultView||me.parentWindow:window,Pe?(Fe=a.relatedTarget||a.toElement,Pe=Z,Fe=Fe?dr(Fe):null,Fe!==null&&(Ot=b(Fe),Fe!==Ot||Fe.tag!==5&&Fe.tag!==6)&&(Fe=null)):(Pe=null,Fe=Z),Pe!==Fe)){if(Oe=ih,xe="onMouseLeave",j="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(Oe=sh,xe="onPointerLeave",j="onPointerEnter",V="pointer"),Ot=Pe==null?me:$r(Pe),q=Fe==null?me:$r(Fe),me=new Oe(xe,V+"leave",Pe,a,ve),me.target=Ot,me.relatedTarget=q,xe=null,dr(ve)===Z&&(Oe=new Oe(j,V+"enter",Fe,a,ve),Oe.target=q,Oe.relatedTarget=Ot,xe=Oe),Ot=xe,Pe&&Fe)t:{for(Oe=Pe,j=Fe,V=0,q=Oe;q;q=qr(q))V++;for(q=0,xe=j;xe;xe=qr(xe))q++;for(;0<V-q;)Oe=qr(Oe),V--;for(;0<q-V;)j=qr(j),q--;for(;V--;){if(Oe===j||j!==null&&Oe===j.alternate)break t;Oe=qr(Oe),j=qr(j)}Oe=null}else Oe=null;Pe!==null&&Nh(_e,me,Pe,Oe,!1),Fe!==null&&Ot!==null&&Nh(_e,Ot,Fe,Oe,!0)}}e:{if(me=Z?$r(Z):window,Pe=me.nodeName&&me.nodeName.toLowerCase(),Pe==="select"||Pe==="input"&&me.type==="file")var ze=rg;else if(hh(me))if(fh)ze=lg;else{ze=ag;var qe=sg}else(Pe=me.nodeName)&&Pe.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(ze=og);if(ze&&(ze=ze(n,Z))){dh(_e,ze,a,ve);break e}qe&&qe(n,me,Z),n==="focusout"&&(qe=me._wrapperState)&&qe.controlled&&me.type==="number"&&et(me,"number",me.value)}switch(qe=Z?$r(Z):window,n){case"focusin":(hh(qe)||qe.contentEditable==="true")&&(jr=qe,Pl=Z,Ks=null);break;case"focusout":Ks=Pl=jr=null;break;case"mousedown":Ll=!0;break;case"contextmenu":case"mouseup":case"dragend":Ll=!1,Sh(_e,a,ve);break;case"selectionchange":if(hg)break;case"keydown":case"keyup":Sh(_e,a,ve)}var Ye;if(Rl)e:{switch(n){case"compositionstart":var Qe="onCompositionStart";break e;case"compositionend":Qe="onCompositionEnd";break e;case"compositionupdate":Qe="onCompositionUpdate";break e}Qe=void 0}else Wr?ch(n,a)&&(Qe="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Qe="onCompositionStart");Qe&&(ah&&a.locale!=="ko"&&(Wr||Qe!=="onCompositionStart"?Qe==="onCompositionEnd"&&Wr&&(Ye=th()):(zi=ve,xl="value"in zi?zi.value:zi.textContent,Wr=!0)),qe=Ga(Z,Qe),0<qe.length&&(Qe=new rh(Qe,n,null,a,ve),_e.push({event:Qe,listeners:qe}),Ye?Qe.data=Ye:(Ye=uh(a),Ye!==null&&(Qe.data=Ye)))),(Ye=Jm?eg(n,a):tg(n,a))&&(Z=Ga(Z,"onBeforeInput"),0<Z.length&&(ve=new rh("onBeforeInput","beforeinput",null,a,ve),_e.push({event:ve,listeners:Z}),ve.data=Ye))}Ph(_e,i)})}function Js(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ga(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=kt(n,a),m!=null&&c.unshift(Js(n,m,d)),m=kt(n,i),m!=null&&c.push(Js(n,m,d))),n=n.return}return c}function qr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Nh(n,i,a,c,d){for(var m=i._reactName,M=[];a!==null&&a!==c;){var U=a,B=U.alternate,Z=U.stateNode;if(B!==null&&B===c)break;U.tag===5&&Z!==null&&(U=Z,d?(B=kt(a,m),B!=null&&M.unshift(Js(a,B,U))):d||(B=kt(a,m),B!=null&&M.push(Js(a,B,U)))),a=a.return}M.length!==0&&n.push({event:i,listeners:M})}var mg=/\r\n?/g,gg=/\u0000|\uFFFD/g;function Uh(n){return(typeof n=="string"?n:""+n).replace(mg,`
`).replace(gg,"")}function Wa(n,i,a){if(i=Uh(i),Uh(n)!==i&&a)throw Error(t(425))}function ja(){}var kl=null,Ol=null;function Bl(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var zl=typeof setTimeout=="function"?setTimeout:void 0,vg=typeof clearTimeout=="function"?clearTimeout:void 0,Dh=typeof Promise=="function"?Promise:void 0,_g=typeof queueMicrotask=="function"?queueMicrotask:typeof Dh<"u"?function(n){return Dh.resolve(null).then(n).catch(yg)}:zl;function yg(n){setTimeout(function(){throw n})}function Hl(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Gs(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Gs(i)}function Vi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ih(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),ai="__reactFiber$"+Yr,ea="__reactProps$"+Yr,gi="__reactContainer$"+Yr,Vl="__reactEvents$"+Yr,xg="__reactListeners$"+Yr,Sg="__reactHandles$"+Yr;function dr(n){var i=n[ai];if(i)return i;for(var a=n.parentNode;a;){if(i=a[gi]||a[ai]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Ih(n);n!==null;){if(a=n[ai])return a;n=Ih(n)}return i}n=a,a=n.parentNode}return null}function ta(n){return n=n[ai]||n[gi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function $r(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Xa(n){return n[ea]||null}var Gl=[],Kr=-1;function Gi(n){return{current:n}}function Rt(n){0>Kr||(n.current=Gl[Kr],Gl[Kr]=null,Kr--)}function Tt(n,i){Kr++,Gl[Kr]=n.current,n.current=i}var Wi={},an=Gi(Wi),gn=Gi(!1),fr=Wi;function Qr(n,i){var a=n.type.contextTypes;if(!a)return Wi;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function vn(n){return n=n.childContextTypes,n!=null}function qa(){Rt(gn),Rt(an)}function Fh(n,i,a){if(an.current!==Wi)throw Error(t(168));Tt(an,i),Tt(gn,a)}function kh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Le(n)||"Unknown",d));return W({},a,c)}function Ya(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Wi,fr=an.current,Tt(an,n),Tt(gn,gn.current),!0}function Oh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=kh(n,i,fr),c.__reactInternalMemoizedMergedChildContext=n,Rt(gn),Rt(an),Tt(an,n)):Rt(gn),Tt(gn,a)}var vi=null,$a=!1,Wl=!1;function Bh(n){vi===null?vi=[n]:vi.push(n)}function Mg(n){$a=!0,Bh(n)}function ji(){if(!Wl&&vi!==null){Wl=!0;var n=0,i=_t;try{var a=vi;for(_t=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}vi=null,$a=!1}catch(d){throw vi!==null&&(vi=vi.slice(n+1)),Xe(Et,ji),d}finally{_t=i,Wl=!1}}return null}var Zr=[],Jr=0,Ka=null,Qa=0,Fn=[],kn=0,pr=null,_i=1,yi="";function mr(n,i){Zr[Jr++]=Qa,Zr[Jr++]=Ka,Ka=n,Qa=i}function zh(n,i,a){Fn[kn++]=_i,Fn[kn++]=yi,Fn[kn++]=pr,pr=n;var c=_i;n=yi;var d=32-Gt(c)-1;c&=~(1<<d),a+=1;var m=32-Gt(i)+d;if(30<m){var M=d-d%5;m=(c&(1<<M)-1).toString(32),c>>=M,d-=M,_i=1<<32-Gt(i)+d|a<<d|c,yi=m+n}else _i=1<<m|a<<d|c,yi=n}function jl(n){n.return!==null&&(mr(n,1),zh(n,1,0))}function Xl(n){for(;n===Ka;)Ka=Zr[--Jr],Zr[Jr]=null,Qa=Zr[--Jr],Zr[Jr]=null;for(;n===pr;)pr=Fn[--kn],Fn[kn]=null,yi=Fn[--kn],Fn[kn]=null,_i=Fn[--kn],Fn[kn]=null}var Cn=null,bn=null,bt=!1,qn=null;function Hh(n,i){var a=Hn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Vh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Cn=n,bn=Vi(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Cn=n,bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=pr!==null?{id:_i,overflow:yi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Hn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Cn=n,bn=null,!0):!1;default:return!1}}function ql(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Yl(n){if(bt){var i=bn;if(i){var a=i;if(!Vh(n,i)){if(ql(n))throw Error(t(418));i=Vi(a.nextSibling);var c=Cn;i&&Vh(n,i)?Hh(c,a):(n.flags=n.flags&-4097|2,bt=!1,Cn=n)}}else{if(ql(n))throw Error(t(418));n.flags=n.flags&-4097|2,bt=!1,Cn=n}}}function Gh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Cn=n}function Za(n){if(n!==Cn)return!1;if(!bt)return Gh(n),bt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Bl(n.type,n.memoizedProps)),i&&(i=bn)){if(ql(n))throw Wh(),Error(t(418));for(;i;)Hh(n,i),i=Vi(i.nextSibling)}if(Gh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){bn=Vi(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}bn=null}}else bn=Cn?Vi(n.stateNode.nextSibling):null;return!0}function Wh(){for(var n=bn;n;)n=Vi(n.nextSibling)}function es(){bn=Cn=null,bt=!1}function $l(n){qn===null?qn=[n]:qn.push(n)}var Eg=L.ReactCurrentBatchConfig;function na(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var U=d.refs;M===null?delete U[m]:U[m]=M},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ja(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function jh(n){var i=n._init;return i(n._payload)}function Xh(n){function i(j,V){if(n){var q=j.deletions;q===null?(j.deletions=[V],j.flags|=16):q.push(V)}}function a(j,V){if(!n)return null;for(;V!==null;)i(j,V),V=V.sibling;return null}function c(j,V){for(j=new Map;V!==null;)V.key!==null?j.set(V.key,V):j.set(V.index,V),V=V.sibling;return j}function d(j,V){return j=Ji(j,V),j.index=0,j.sibling=null,j}function m(j,V,q){return j.index=q,n?(q=j.alternate,q!==null?(q=q.index,q<V?(j.flags|=2,V):q):(j.flags|=2,V)):(j.flags|=1048576,V)}function M(j){return n&&j.alternate===null&&(j.flags|=2),j}function U(j,V,q,xe){return V===null||V.tag!==6?(V=zc(q,j.mode,xe),V.return=j,V):(V=d(V,q),V.return=j,V)}function B(j,V,q,xe){var ze=q.type;return ze===O?ve(j,V,q.props.children,xe,q.key):V!==null&&(V.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===he&&jh(ze)===V.type)?(xe=d(V,q.props),xe.ref=na(j,V,q),xe.return=j,xe):(xe=To(q.type,q.key,q.props,null,j.mode,xe),xe.ref=na(j,V,q),xe.return=j,xe)}function Z(j,V,q,xe){return V===null||V.tag!==4||V.stateNode.containerInfo!==q.containerInfo||V.stateNode.implementation!==q.implementation?(V=Hc(q,j.mode,xe),V.return=j,V):(V=d(V,q.children||[]),V.return=j,V)}function ve(j,V,q,xe,ze){return V===null||V.tag!==7?(V=Er(q,j.mode,xe,ze),V.return=j,V):(V=d(V,q),V.return=j,V)}function _e(j,V,q){if(typeof V=="string"&&V!==""||typeof V=="number")return V=zc(""+V,j.mode,q),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case k:return q=To(V.type,V.key,V.props,null,j.mode,q),q.ref=na(j,null,V),q.return=j,q;case z:return V=Hc(V,j.mode,q),V.return=j,V;case he:var xe=V._init;return _e(j,xe(V._payload),q)}if(ht(V)||te(V))return V=Er(V,j.mode,q,null),V.return=j,V;Ja(j,V)}return null}function me(j,V,q,xe){var ze=V!==null?V.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return ze!==null?null:U(j,V,""+q,xe);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case k:return q.key===ze?B(j,V,q,xe):null;case z:return q.key===ze?Z(j,V,q,xe):null;case he:return ze=q._init,me(j,V,ze(q._payload),xe)}if(ht(q)||te(q))return ze!==null?null:ve(j,V,q,xe,null);Ja(j,q)}return null}function Pe(j,V,q,xe,ze){if(typeof xe=="string"&&xe!==""||typeof xe=="number")return j=j.get(q)||null,U(V,j,""+xe,ze);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case k:return j=j.get(xe.key===null?q:xe.key)||null,B(V,j,xe,ze);case z:return j=j.get(xe.key===null?q:xe.key)||null,Z(V,j,xe,ze);case he:var qe=xe._init;return Pe(j,V,q,qe(xe._payload),ze)}if(ht(xe)||te(xe))return j=j.get(q)||null,ve(V,j,xe,ze,null);Ja(V,xe)}return null}function Fe(j,V,q,xe){for(var ze=null,qe=null,Ye=V,Qe=V=0,Zt=null;Ye!==null&&Qe<q.length;Qe++){Ye.index>Qe?(Zt=Ye,Ye=null):Zt=Ye.sibling;var pt=me(j,Ye,q[Qe],xe);if(pt===null){Ye===null&&(Ye=Zt);break}n&&Ye&&pt.alternate===null&&i(j,Ye),V=m(pt,V,Qe),qe===null?ze=pt:qe.sibling=pt,qe=pt,Ye=Zt}if(Qe===q.length)return a(j,Ye),bt&&mr(j,Qe),ze;if(Ye===null){for(;Qe<q.length;Qe++)Ye=_e(j,q[Qe],xe),Ye!==null&&(V=m(Ye,V,Qe),qe===null?ze=Ye:qe.sibling=Ye,qe=Ye);return bt&&mr(j,Qe),ze}for(Ye=c(j,Ye);Qe<q.length;Qe++)Zt=Pe(Ye,j,Qe,q[Qe],xe),Zt!==null&&(n&&Zt.alternate!==null&&Ye.delete(Zt.key===null?Qe:Zt.key),V=m(Zt,V,Qe),qe===null?ze=Zt:qe.sibling=Zt,qe=Zt);return n&&Ye.forEach(function(er){return i(j,er)}),bt&&mr(j,Qe),ze}function Oe(j,V,q,xe){var ze=te(q);if(typeof ze!="function")throw Error(t(150));if(q=ze.call(q),q==null)throw Error(t(151));for(var qe=ze=null,Ye=V,Qe=V=0,Zt=null,pt=q.next();Ye!==null&&!pt.done;Qe++,pt=q.next()){Ye.index>Qe?(Zt=Ye,Ye=null):Zt=Ye.sibling;var er=me(j,Ye,pt.value,xe);if(er===null){Ye===null&&(Ye=Zt);break}n&&Ye&&er.alternate===null&&i(j,Ye),V=m(er,V,Qe),qe===null?ze=er:qe.sibling=er,qe=er,Ye=Zt}if(pt.done)return a(j,Ye),bt&&mr(j,Qe),ze;if(Ye===null){for(;!pt.done;Qe++,pt=q.next())pt=_e(j,pt.value,xe),pt!==null&&(V=m(pt,V,Qe),qe===null?ze=pt:qe.sibling=pt,qe=pt);return bt&&mr(j,Qe),ze}for(Ye=c(j,Ye);!pt.done;Qe++,pt=q.next())pt=Pe(Ye,j,Qe,pt.value,xe),pt!==null&&(n&&pt.alternate!==null&&Ye.delete(pt.key===null?Qe:pt.key),V=m(pt,V,Qe),qe===null?ze=pt:qe.sibling=pt,qe=pt);return n&&Ye.forEach(function(n0){return i(j,n0)}),bt&&mr(j,Qe),ze}function Ot(j,V,q,xe){if(typeof q=="object"&&q!==null&&q.type===O&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case k:e:{for(var ze=q.key,qe=V;qe!==null;){if(qe.key===ze){if(ze=q.type,ze===O){if(qe.tag===7){a(j,qe.sibling),V=d(qe,q.props.children),V.return=j,j=V;break e}}else if(qe.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===he&&jh(ze)===qe.type){a(j,qe.sibling),V=d(qe,q.props),V.ref=na(j,qe,q),V.return=j,j=V;break e}a(j,qe);break}else i(j,qe);qe=qe.sibling}q.type===O?(V=Er(q.props.children,j.mode,xe,q.key),V.return=j,j=V):(xe=To(q.type,q.key,q.props,null,j.mode,xe),xe.ref=na(j,V,q),xe.return=j,j=xe)}return M(j);case z:e:{for(qe=q.key;V!==null;){if(V.key===qe)if(V.tag===4&&V.stateNode.containerInfo===q.containerInfo&&V.stateNode.implementation===q.implementation){a(j,V.sibling),V=d(V,q.children||[]),V.return=j,j=V;break e}else{a(j,V);break}else i(j,V);V=V.sibling}V=Hc(q,j.mode,xe),V.return=j,j=V}return M(j);case he:return qe=q._init,Ot(j,V,qe(q._payload),xe)}if(ht(q))return Fe(j,V,q,xe);if(te(q))return Oe(j,V,q,xe);Ja(j,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,V!==null&&V.tag===6?(a(j,V.sibling),V=d(V,q),V.return=j,j=V):(a(j,V),V=zc(q,j.mode,xe),V.return=j,j=V),M(j)):a(j,V)}return Ot}var ts=Xh(!0),qh=Xh(!1),eo=Gi(null),to=null,ns=null,Kl=null;function Ql(){Kl=ns=to=null}function Zl(n){var i=eo.current;Rt(eo),n._currentValue=i}function Jl(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function is(n,i){to=n,Kl=ns=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(_n=!0),n.firstContext=null)}function On(n){var i=n._currentValue;if(Kl!==n)if(n={context:n,memoizedValue:i,next:null},ns===null){if(to===null)throw Error(t(308));ns=n,to.dependencies={lanes:0,firstContext:n}}else ns=ns.next=n;return i}var gr=null;function ec(n){gr===null?gr=[n]:gr.push(n)}function Yh(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,ec(i)):(a.next=d.next,d.next=a),i.interleaved=a,xi(n,c)}function xi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Xi=!1;function tc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $h(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Si(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function qi(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(ft&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,xi(n,a)}return d=c.interleaved,d===null?(i.next=i,ec(c)):(i.next=d.next,d.next=i),c.interleaved=i,xi(n,a)}function no(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ml(n,a)}}function Kh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=M:m=m.next=M,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function io(n,i,a,c){var d=n.updateQueue;Xi=!1;var m=d.firstBaseUpdate,M=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var B=U,Z=B.next;B.next=null,M===null?m=Z:M.next=Z,M=B;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,U=ve.lastBaseUpdate,U!==M&&(U===null?ve.firstBaseUpdate=Z:U.next=Z,ve.lastBaseUpdate=B))}if(m!==null){var _e=d.baseState;M=0,ve=Z=B=null,U=m;do{var me=U.lane,Pe=U.eventTime;if((c&me)===me){ve!==null&&(ve=ve.next={eventTime:Pe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Fe=n,Oe=U;switch(me=i,Pe=a,Oe.tag){case 1:if(Fe=Oe.payload,typeof Fe=="function"){_e=Fe.call(Pe,_e,me);break e}_e=Fe;break e;case 3:Fe.flags=Fe.flags&-65537|128;case 0:if(Fe=Oe.payload,me=typeof Fe=="function"?Fe.call(Pe,_e,me):Fe,me==null)break e;_e=W({},_e,me);break e;case 2:Xi=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,me=d.effects,me===null?d.effects=[U]:me.push(U))}else Pe={eventTime:Pe,lane:me,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ve===null?(Z=ve=Pe,B=_e):ve=ve.next=Pe,M|=me;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;me=U,U=me.next,me.next=null,d.lastBaseUpdate=me,d.shared.pending=null}}while(!0);if(ve===null&&(B=_e),d.baseState=B,d.firstBaseUpdate=Z,d.lastBaseUpdate=ve,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);yr|=M,n.lanes=M,n.memoizedState=_e}}function Qh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ia={},oi=Gi(ia),ra=Gi(ia),sa=Gi(ia);function vr(n){if(n===ia)throw Error(t(174));return n}function nc(n,i){switch(Tt(sa,i),Tt(ra,n),Tt(oi,ia),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ye(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ye(i,n)}Rt(oi),Tt(oi,i)}function rs(){Rt(oi),Rt(ra),Rt(sa)}function Zh(n){vr(sa.current);var i=vr(oi.current),a=ye(i,n.type);i!==a&&(Tt(ra,n),Tt(oi,a))}function ic(n){ra.current===n&&(Rt(oi),Rt(ra))}var Nt=Gi(0);function ro(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var rc=[];function sc(){for(var n=0;n<rc.length;n++)rc[n]._workInProgressVersionPrimary=null;rc.length=0}var so=L.ReactCurrentDispatcher,ac=L.ReactCurrentBatchConfig,_r=0,Ut=null,Wt=null,Kt=null,ao=!1,aa=!1,oa=0,Tg=0;function on(){throw Error(t(321))}function oc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Xn(n[a],i[a]))return!1;return!0}function lc(n,i,a,c,d,m){if(_r=m,Ut=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,so.current=n===null||n.memoizedState===null?Cg:bg,n=a(c,d),aa){m=0;do{if(aa=!1,oa=0,25<=m)throw Error(t(301));m+=1,Kt=Wt=null,i.updateQueue=null,so.current=Pg,n=a(c,d)}while(aa)}if(so.current=co,i=Wt!==null&&Wt.next!==null,_r=0,Kt=Wt=Ut=null,ao=!1,i)throw Error(t(300));return n}function cc(){var n=oa!==0;return oa=0,n}function li(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?Ut.memoizedState=Kt=n:Kt=Kt.next=n,Kt}function Bn(){if(Wt===null){var n=Ut.alternate;n=n!==null?n.memoizedState:null}else n=Wt.next;var i=Kt===null?Ut.memoizedState:Kt.next;if(i!==null)Kt=i,Wt=n;else{if(n===null)throw Error(t(310));Wt=n,n={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},Kt===null?Ut.memoizedState=Kt=n:Kt=Kt.next=n}return Kt}function la(n,i){return typeof i=="function"?i(n):i}function uc(n){var i=Bn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Wt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var M=d.next;d.next=m.next,m.next=M}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var U=M=null,B=null,Z=m;do{var ve=Z.lane;if((_r&ve)===ve)B!==null&&(B=B.next={lane:0,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),c=Z.hasEagerState?Z.eagerState:n(c,Z.action);else{var _e={lane:ve,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null};B===null?(U=B=_e,M=c):B=B.next=_e,Ut.lanes|=ve,yr|=ve}Z=Z.next}while(Z!==null&&Z!==m);B===null?M=c:B.next=U,Xn(c,i.memoizedState)||(_n=!0),i.memoizedState=c,i.baseState=M,i.baseQueue=B,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Ut.lanes|=m,yr|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function hc(n){var i=Bn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var M=d=d.next;do m=n(m,M.action),M=M.next;while(M!==d);Xn(m,i.memoizedState)||(_n=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Jh(){}function ed(n,i){var a=Ut,c=Bn(),d=i(),m=!Xn(c.memoizedState,d);if(m&&(c.memoizedState=d,_n=!0),c=c.queue,dc(id.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||Kt!==null&&Kt.memoizedState.tag&1){if(a.flags|=2048,ca(9,nd.bind(null,a,c,d,i),void 0,null),Qt===null)throw Error(t(349));(_r&30)!==0||td(a,i,d)}return d}function td(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ut.updateQueue,i===null?(i={lastEffect:null,stores:null},Ut.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function nd(n,i,a,c){i.value=a,i.getSnapshot=c,rd(i)&&sd(n)}function id(n,i,a){return a(function(){rd(i)&&sd(n)})}function rd(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Xn(n,a)}catch{return!0}}function sd(n){var i=xi(n,1);i!==null&&Qn(i,n,1,-1)}function ad(n){var i=li();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:n},i.queue=n,n=n.dispatch=Ag.bind(null,Ut,n),[i.memoizedState,n]}function ca(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Ut.updateQueue,i===null?(i={lastEffect:null,stores:null},Ut.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function od(){return Bn().memoizedState}function oo(n,i,a,c){var d=li();Ut.flags|=n,d.memoizedState=ca(1|i,a,void 0,c===void 0?null:c)}function lo(n,i,a,c){var d=Bn();c=c===void 0?null:c;var m=void 0;if(Wt!==null){var M=Wt.memoizedState;if(m=M.destroy,c!==null&&oc(c,M.deps)){d.memoizedState=ca(i,a,m,c);return}}Ut.flags|=n,d.memoizedState=ca(1|i,a,m,c)}function ld(n,i){return oo(8390656,8,n,i)}function dc(n,i){return lo(2048,8,n,i)}function cd(n,i){return lo(4,2,n,i)}function ud(n,i){return lo(4,4,n,i)}function hd(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function dd(n,i,a){return a=a!=null?a.concat([n]):null,lo(4,4,hd.bind(null,i,n),a)}function fc(){}function fd(n,i){var a=Bn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&oc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function pd(n,i){var a=Bn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&oc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function md(n,i,a){return(_r&21)===0?(n.baseState&&(n.baseState=!1,_n=!0),n.memoizedState=a):(Xn(a,i)||(a=ju(),Ut.lanes|=a,yr|=a,n.baseState=!0),i)}function wg(n,i){var a=_t;_t=a!==0&&4>a?a:4,n(!0);var c=ac.transition;ac.transition={};try{n(!1),i()}finally{_t=a,ac.transition=c}}function gd(){return Bn().memoizedState}function Rg(n,i,a){var c=Qi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},vd(n))_d(i,a);else if(a=Yh(n,i,a,c),a!==null){var d=fn();Qn(a,n,c,d),yd(a,i,c)}}function Ag(n,i,a){var c=Qi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(vd(n))_d(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,U=m(M,a);if(d.hasEagerState=!0,d.eagerState=U,Xn(U,M)){var B=i.interleaved;B===null?(d.next=d,ec(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}a=Yh(n,i,d,c),a!==null&&(d=fn(),Qn(a,n,c,d),yd(a,i,c))}}function vd(n){var i=n.alternate;return n===Ut||i!==null&&i===Ut}function _d(n,i){aa=ao=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function yd(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ml(n,a)}}var co={readContext:On,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},Cg={readContext:On,useCallback:function(n,i){return li().memoizedState=[n,i===void 0?null:i],n},useContext:On,useEffect:ld,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,oo(4194308,4,hd.bind(null,i,n),a)},useLayoutEffect:function(n,i){return oo(4194308,4,n,i)},useInsertionEffect:function(n,i){return oo(4,2,n,i)},useMemo:function(n,i){var a=li();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=li();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Rg.bind(null,Ut,n),[c.memoizedState,n]},useRef:function(n){var i=li();return n={current:n},i.memoizedState=n},useState:ad,useDebugValue:fc,useDeferredValue:function(n){return li().memoizedState=n},useTransition:function(){var n=ad(!1),i=n[0];return n=wg.bind(null,n[1]),li().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Ut,d=li();if(bt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Qt===null)throw Error(t(349));(_r&30)!==0||td(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,ld(id.bind(null,c,m,n),[n]),c.flags|=2048,ca(9,nd.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=li(),i=Qt.identifierPrefix;if(bt){var a=yi,c=_i;a=(c&~(1<<32-Gt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=oa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Tg++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},bg={readContext:On,useCallback:fd,useContext:On,useEffect:dc,useImperativeHandle:dd,useInsertionEffect:cd,useLayoutEffect:ud,useMemo:pd,useReducer:uc,useRef:od,useState:function(){return uc(la)},useDebugValue:fc,useDeferredValue:function(n){var i=Bn();return md(i,Wt.memoizedState,n)},useTransition:function(){var n=uc(la)[0],i=Bn().memoizedState;return[n,i]},useMutableSource:Jh,useSyncExternalStore:ed,useId:gd,unstable_isNewReconciler:!1},Pg={readContext:On,useCallback:fd,useContext:On,useEffect:dc,useImperativeHandle:dd,useInsertionEffect:cd,useLayoutEffect:ud,useMemo:pd,useReducer:hc,useRef:od,useState:function(){return hc(la)},useDebugValue:fc,useDeferredValue:function(n){var i=Bn();return Wt===null?i.memoizedState=n:md(i,Wt.memoizedState,n)},useTransition:function(){var n=hc(la)[0],i=Bn().memoizedState;return[n,i]},useMutableSource:Jh,useSyncExternalStore:ed,useId:gd,unstable_isNewReconciler:!1};function Yn(n,i){if(n&&n.defaultProps){i=W({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function pc(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:W({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var uo={isMounted:function(n){return(n=n._reactInternals)?b(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=fn(),d=Qi(n),m=Si(c,d);m.payload=i,a!=null&&(m.callback=a),i=qi(n,m,d),i!==null&&(Qn(i,n,d,c),no(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=fn(),d=Qi(n),m=Si(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=qi(n,m,d),i!==null&&(Qn(i,n,d,c),no(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=fn(),c=Qi(n),d=Si(a,c);d.tag=2,i!=null&&(d.callback=i),i=qi(n,d,c),i!==null&&(Qn(i,n,c,a),no(i,n,c))}};function xd(n,i,a,c,d,m,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,M):i.prototype&&i.prototype.isPureReactComponent?!$s(a,c)||!$s(d,m):!0}function Sd(n,i,a){var c=!1,d=Wi,m=i.contextType;return typeof m=="object"&&m!==null?m=On(m):(d=vn(i)?fr:an.current,c=i.contextTypes,m=(c=c!=null)?Qr(n,d):Wi),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=uo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Md(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&uo.enqueueReplaceState(i,i.state,null)}function mc(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},tc(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=On(m):(m=vn(i)?fr:an.current,d.context=Qr(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(pc(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&uo.enqueueReplaceState(d,d.state,null),io(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ss(n,i){try{var a="",c=i;do a+=ge(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function gc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function vc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Lg=typeof WeakMap=="function"?WeakMap:Map;function Ed(n,i,a){a=Si(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){_o||(_o=!0,Nc=c),vc(n,i)},a}function Td(n,i,a){a=Si(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){vc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){vc(n,i),typeof c!="function"&&($i===null?$i=new Set([this]):$i.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),a}function wd(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Lg;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=jg.bind(null,n,i,a),i.then(n,n))}function Rd(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Ad(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Si(-1,1),i.tag=2,qi(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Ng=L.ReactCurrentOwner,_n=!1;function dn(n,i,a,c){i.child=n===null?qh(i,null,a,c):ts(i,n.child,a,c)}function Cd(n,i,a,c,d){a=a.render;var m=i.ref;return is(i,d),c=lc(n,i,a,c,m,d),a=cc(),n!==null&&!_n?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Mi(n,i,d)):(bt&&a&&jl(i),i.flags|=1,dn(n,i,c,d),i.child)}function bd(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Bc(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Pd(n,i,m,c,d)):(n=To(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var M=m.memoizedProps;if(a=a.compare,a=a!==null?a:$s,a(M,c)&&n.ref===i.ref)return Mi(n,i,d)}return i.flags|=1,n=Ji(m,c),n.ref=i.ref,n.return=i,i.child=n}function Pd(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if($s(m,c)&&n.ref===i.ref)if(_n=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(_n=!0);else return i.lanes=n.lanes,Mi(n,i,d)}return _c(n,i,a,c,d)}function Ld(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Tt(os,Pn),Pn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Tt(os,Pn),Pn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Tt(os,Pn),Pn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Tt(os,Pn),Pn|=c;return dn(n,i,d,a),i.child}function Nd(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function _c(n,i,a,c,d){var m=vn(a)?fr:an.current;return m=Qr(i,m),is(i,d),a=lc(n,i,a,c,m,d),c=cc(),n!==null&&!_n?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Mi(n,i,d)):(bt&&c&&jl(i),i.flags|=1,dn(n,i,a,d),i.child)}function Ud(n,i,a,c,d){if(vn(a)){var m=!0;Ya(i)}else m=!1;if(is(i,d),i.stateNode===null)fo(n,i),Sd(i,a,c),mc(i,a,c,d),c=!0;else if(n===null){var M=i.stateNode,U=i.memoizedProps;M.props=U;var B=M.context,Z=a.contextType;typeof Z=="object"&&Z!==null?Z=On(Z):(Z=vn(a)?fr:an.current,Z=Qr(i,Z));var ve=a.getDerivedStateFromProps,_e=typeof ve=="function"||typeof M.getSnapshotBeforeUpdate=="function";_e||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==c||B!==Z)&&Md(i,M,c,Z),Xi=!1;var me=i.memoizedState;M.state=me,io(i,c,M,d),B=i.memoizedState,U!==c||me!==B||gn.current||Xi?(typeof ve=="function"&&(pc(i,a,ve,c),B=i.memoizedState),(U=Xi||xd(i,a,U,c,me,B,Z))?(_e||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),M.props=c,M.state=B,M.context=Z,c=U):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{M=i.stateNode,$h(n,i),U=i.memoizedProps,Z=i.type===i.elementType?U:Yn(i.type,U),M.props=Z,_e=i.pendingProps,me=M.context,B=a.contextType,typeof B=="object"&&B!==null?B=On(B):(B=vn(a)?fr:an.current,B=Qr(i,B));var Pe=a.getDerivedStateFromProps;(ve=typeof Pe=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==_e||me!==B)&&Md(i,M,c,B),Xi=!1,me=i.memoizedState,M.state=me,io(i,c,M,d);var Fe=i.memoizedState;U!==_e||me!==Fe||gn.current||Xi?(typeof Pe=="function"&&(pc(i,a,Pe,c),Fe=i.memoizedState),(Z=Xi||xd(i,a,Z,c,me,Fe,B)||!1)?(ve||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(c,Fe,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(c,Fe,B)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Fe),M.props=c,M.state=Fe,M.context=B,c=Z):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),c=!1)}return yc(n,i,a,c,m,d)}function yc(n,i,a,c,d,m){Nd(n,i);var M=(i.flags&128)!==0;if(!c&&!M)return d&&Oh(i,a,!1),Mi(n,i,m);c=i.stateNode,Ng.current=i;var U=M&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&M?(i.child=ts(i,n.child,null,m),i.child=ts(i,null,U,m)):dn(n,i,U,m),i.memoizedState=c.state,d&&Oh(i,a,!0),i.child}function Dd(n){var i=n.stateNode;i.pendingContext?Fh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Fh(n,i.context,!1),nc(n,i.containerInfo)}function Id(n,i,a,c,d){return es(),$l(d),i.flags|=256,dn(n,i,a,c),i.child}var xc={dehydrated:null,treeContext:null,retryLane:0};function Sc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Fd(n,i,a){var c=i.pendingProps,d=Nt.current,m=!1,M=(i.flags&128)!==0,U;if((U=M)||(U=n!==null&&n.memoizedState===null?!1:(d&2)!==0),U?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Tt(Nt,d&1),n===null)return Yl(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=c.children,n=c.fallback,m?(c=i.mode,m=i.child,M={mode:"hidden",children:M},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=M):m=wo(M,c,0,null),n=Er(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Sc(a),i.memoizedState=xc,n):Mc(i,M));if(d=n.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return Ug(n,i,M,c,U,d,a);if(m){m=c.fallback,M=i.mode,d=n.child,U=d.sibling;var B={mode:"hidden",children:c.children};return(M&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=Ji(d,B),c.subtreeFlags=d.subtreeFlags&14680064),U!==null?m=Ji(U,m):(m=Er(m,M,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,M=n.child.memoizedState,M=M===null?Sc(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=n.childLanes&~a,i.memoizedState=xc,c}return m=n.child,n=m.sibling,c=Ji(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Mc(n,i){return i=wo({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ho(n,i,a,c){return c!==null&&$l(c),ts(i,n.child,null,a),n=Mc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Ug(n,i,a,c,d,m,M){if(a)return i.flags&256?(i.flags&=-257,c=gc(Error(t(422))),ho(n,i,M,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=wo({mode:"visible",children:c.children},d,0,null),m=Er(m,d,M,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&ts(i,n.child,null,M),i.child.memoizedState=Sc(M),i.memoizedState=xc,m);if((i.mode&1)===0)return ho(n,i,M,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var U=c.dgst;return c=U,m=Error(t(419)),c=gc(m,c,void 0),ho(n,i,M,c)}if(U=(M&n.childLanes)!==0,_n||U){if(c=Qt,c!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|M))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,xi(n,d),Qn(c,n,d,-1))}return Oc(),c=gc(Error(t(421))),ho(n,i,M,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Xg.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,bn=Vi(d.nextSibling),Cn=i,bt=!0,qn=null,n!==null&&(Fn[kn++]=_i,Fn[kn++]=yi,Fn[kn++]=pr,_i=n.id,yi=n.overflow,pr=i),i=Mc(i,c.children),i.flags|=4096,i)}function kd(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Jl(n.return,i,a)}function Ec(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Od(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(dn(n,i,c.children,a),c=Nt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&kd(n,a,i);else if(n.tag===19)kd(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Tt(Nt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&ro(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Ec(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&ro(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Ec(i,!0,a,null,m);break;case"together":Ec(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function fo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Mi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),yr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Ji(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Ji(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Dg(n,i,a){switch(i.tag){case 3:Dd(i),es();break;case 5:Zh(i);break;case 1:vn(i.type)&&Ya(i);break;case 4:nc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Tt(eo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Tt(Nt,Nt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Fd(n,i,a):(Tt(Nt,Nt.current&1),n=Mi(n,i,a),n!==null?n.sibling:null);Tt(Nt,Nt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Od(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Tt(Nt,Nt.current),c)break;return null;case 22:case 23:return i.lanes=0,Ld(n,i,a)}return Mi(n,i,a)}var Bd,Tc,zd,Hd;Bd=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Tc=function(){},zd=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,vr(oi.current);var m=null;switch(a){case"input":d=je(n,d),c=je(n,c),m=[];break;case"select":d=W({},d,{value:void 0}),c=W({},c,{value:void 0}),m=[];break;case"textarea":d=Dt(n,d),c=Dt(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=ja)}De(a,c);var M;a=null;for(Z in d)if(!c.hasOwnProperty(Z)&&d.hasOwnProperty(Z)&&d[Z]!=null)if(Z==="style"){var U=d[Z];for(M in U)U.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else Z!=="dangerouslySetInnerHTML"&&Z!=="children"&&Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&Z!=="autoFocus"&&(o.hasOwnProperty(Z)?m||(m=[]):(m=m||[]).push(Z,null));for(Z in c){var B=c[Z];if(U=d!=null?d[Z]:void 0,c.hasOwnProperty(Z)&&B!==U&&(B!=null||U!=null))if(Z==="style")if(U){for(M in U)!U.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in B)B.hasOwnProperty(M)&&U[M]!==B[M]&&(a||(a={}),a[M]=B[M])}else a||(m||(m=[]),m.push(Z,a)),a=B;else Z==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(m=m||[]).push(Z,B)):Z==="children"?typeof B!="string"&&typeof B!="number"||(m=m||[]).push(Z,""+B):Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&(o.hasOwnProperty(Z)?(B!=null&&Z==="onScroll"&&wt("scroll",n),m||U===B||(m=[])):(m=m||[]).push(Z,B))}a&&(m=m||[]).push("style",a);var Z=m;(i.updateQueue=Z)&&(i.flags|=4)}},Hd=function(n,i,a,c){a!==c&&(i.flags|=4)};function ua(n,i){if(!bt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function ln(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Ig(n,i,a){var c=i.pendingProps;switch(Xl(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(i),null;case 1:return vn(i.type)&&qa(),ln(i),null;case 3:return c=i.stateNode,rs(),Rt(gn),Rt(an),sc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Za(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,qn!==null&&(Ic(qn),qn=null))),Tc(n,i),ln(i),null;case 5:ic(i);var d=vr(sa.current);if(a=i.type,n!==null&&i.stateNode!=null)zd(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return ln(i),null}if(n=vr(oi.current),Za(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[ai]=i,c[ea]=m,n=(i.mode&1)!==0,a){case"dialog":wt("cancel",c),wt("close",c);break;case"iframe":case"object":case"embed":wt("load",c);break;case"video":case"audio":for(d=0;d<Qs.length;d++)wt(Qs[d],c);break;case"source":wt("error",c);break;case"img":case"image":case"link":wt("error",c),wt("load",c);break;case"details":wt("toggle",c);break;case"input":Je(c,m),wt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},wt("invalid",c);break;case"textarea":N(c,m),wt("invalid",c)}De(a,m),d=null;for(var M in m)if(m.hasOwnProperty(M)){var U=m[M];M==="children"?typeof U=="string"?c.textContent!==U&&(m.suppressHydrationWarning!==!0&&Wa(c.textContent,U,n),d=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(m.suppressHydrationWarning!==!0&&Wa(c.textContent,U,n),d=["children",""+U]):o.hasOwnProperty(M)&&U!=null&&M==="onScroll"&&wt("scroll",c)}switch(a){case"input":tt(c),rt(c,m,!0);break;case"textarea":tt(c),se(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=ja)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ue(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=M.createElement(a,{is:c.is}):(n=M.createElement(a),a==="select"&&(M=n,c.multiple?M.multiple=!0:c.size&&(M.size=c.size))):n=M.createElementNS(n,a),n[ai]=i,n[ea]=c,Bd(n,i,!1,!1),i.stateNode=n;e:{switch(M=it(a,c),a){case"dialog":wt("cancel",n),wt("close",n),d=c;break;case"iframe":case"object":case"embed":wt("load",n),d=c;break;case"video":case"audio":for(d=0;d<Qs.length;d++)wt(Qs[d],n);d=c;break;case"source":wt("error",n),d=c;break;case"img":case"image":case"link":wt("error",n),wt("load",n),d=c;break;case"details":wt("toggle",n),d=c;break;case"input":Je(n,c),d=je(n,c),wt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=W({},c,{value:void 0}),wt("invalid",n);break;case"textarea":N(n,c),d=Dt(n,c),wt("invalid",n);break;default:d=c}De(a,d),U=d;for(m in U)if(U.hasOwnProperty(m)){var B=U[m];m==="style"?We(n,B):m==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Be(n,B)):m==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&Ee(n,B):typeof B=="number"&&Ee(n,""+B):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?B!=null&&m==="onScroll"&&wt("scroll",n):B!=null&&P(n,m,B,M))}switch(a){case"input":tt(n),rt(n,c,!1);break;case"textarea":tt(n),se(n);break;case"option":c.value!=null&&n.setAttribute("value",""+we(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?xt(n,!!c.multiple,m,!1):c.defaultValue!=null&&xt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=ja)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return ln(i),null;case 6:if(n&&i.stateNode!=null)Hd(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=vr(sa.current),vr(oi.current),Za(i)){if(c=i.stateNode,a=i.memoizedProps,c[ai]=i,(m=c.nodeValue!==a)&&(n=Cn,n!==null))switch(n.tag){case 3:Wa(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Wa(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[ai]=i,i.stateNode=c}return ln(i),null;case 13:if(Rt(Nt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(bt&&bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Wh(),es(),i.flags|=98560,m=!1;else if(m=Za(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[ai]=i}else es(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ln(i),m=!1}else qn!==null&&(Ic(qn),qn=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Nt.current&1)!==0?jt===0&&(jt=3):Oc())),i.updateQueue!==null&&(i.flags|=4),ln(i),null);case 4:return rs(),Tc(n,i),n===null&&Zs(i.stateNode.containerInfo),ln(i),null;case 10:return Zl(i.type._context),ln(i),null;case 17:return vn(i.type)&&qa(),ln(i),null;case 19:if(Rt(Nt),m=i.memoizedState,m===null)return ln(i),null;if(c=(i.flags&128)!==0,M=m.rendering,M===null)if(c)ua(m,!1);else{if(jt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(M=ro(n),M!==null){for(i.flags|=128,ua(m,!1),c=M.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,n=M.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Tt(Nt,Nt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Ie()>ls&&(i.flags|=128,c=!0,ua(m,!1),i.lanes=4194304)}else{if(!c)if(n=ro(M),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ua(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!bt)return ln(i),null}else 2*Ie()-m.renderingStartTime>ls&&a!==1073741824&&(i.flags|=128,c=!0,ua(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(a=m.last,a!==null?a.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Ie(),i.sibling=null,a=Nt.current,Tt(Nt,c?a&1|2:a&1),i):(ln(i),null);case 22:case 23:return kc(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Pn&1073741824)!==0&&(ln(i),i.subtreeFlags&6&&(i.flags|=8192)):ln(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Fg(n,i){switch(Xl(i),i.tag){case 1:return vn(i.type)&&qa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return rs(),Rt(gn),Rt(an),sc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return ic(i),null;case 13:if(Rt(Nt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));es()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Rt(Nt),null;case 4:return rs(),null;case 10:return Zl(i.type._context),null;case 22:case 23:return kc(),null;case 24:return null;default:return null}}var po=!1,cn=!1,kg=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function as(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){It(n,i,c)}else a.current=null}function wc(n,i,a){try{a()}catch(c){It(n,i,c)}}var Vd=!1;function Og(n,i){if(kl=Ua,n=xh(),bl(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var M=0,U=-1,B=-1,Z=0,ve=0,_e=n,me=null;t:for(;;){for(var Pe;_e!==a||d!==0&&_e.nodeType!==3||(U=M+d),_e!==m||c!==0&&_e.nodeType!==3||(B=M+c),_e.nodeType===3&&(M+=_e.nodeValue.length),(Pe=_e.firstChild)!==null;)me=_e,_e=Pe;for(;;){if(_e===n)break t;if(me===a&&++Z===d&&(U=M),me===m&&++ve===c&&(B=M),(Pe=_e.nextSibling)!==null)break;_e=me,me=_e.parentNode}_e=Pe}a=U===-1||B===-1?null:{start:U,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ol={focusedElem:n,selectionRange:a},Ua=!1,Ue=i;Ue!==null;)if(i=Ue,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ue=n;else for(;Ue!==null;){i=Ue;try{var Fe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Fe!==null){var Oe=Fe.memoizedProps,Ot=Fe.memoizedState,j=i.stateNode,V=j.getSnapshotBeforeUpdate(i.elementType===i.type?Oe:Yn(i.type,Oe),Ot);j.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var q=i.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(xe){It(i,i.return,xe)}if(n=i.sibling,n!==null){n.return=i.return,Ue=n;break}Ue=i.return}return Fe=Vd,Vd=!1,Fe}function ha(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&wc(i,a,m)}d=d.next}while(d!==c)}}function mo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Rc(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Gd(n){var i=n.alternate;i!==null&&(n.alternate=null,Gd(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[ai],delete i[ea],delete i[Vl],delete i[xg],delete i[Sg])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Wd(n){return n.tag===5||n.tag===3||n.tag===4}function jd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Wd(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ac(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ja));else if(c!==4&&(n=n.child,n!==null))for(Ac(n,i,a),n=n.sibling;n!==null;)Ac(n,i,a),n=n.sibling}function Cc(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Cc(n,i,a),n=n.sibling;n!==null;)Cc(n,i,a),n=n.sibling}var en=null,$n=!1;function Yi(n,i,a){for(a=a.child;a!==null;)Xd(n,i,a),a=a.sibling}function Xd(n,i,a){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(lt,a)}catch{}switch(a.tag){case 5:cn||as(a,i);case 6:var c=en,d=$n;en=null,Yi(n,i,a),en=c,$n=d,en!==null&&($n?(n=en,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):en.removeChild(a.stateNode));break;case 18:en!==null&&($n?(n=en,a=a.stateNode,n.nodeType===8?Hl(n.parentNode,a):n.nodeType===1&&Hl(n,a),Gs(n)):Hl(en,a.stateNode));break;case 4:c=en,d=$n,en=a.stateNode.containerInfo,$n=!0,Yi(n,i,a),en=c,$n=d;break;case 0:case 11:case 14:case 15:if(!cn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,M=m.destroy;m=m.tag,M!==void 0&&((m&2)!==0||(m&4)!==0)&&wc(a,i,M),d=d.next}while(d!==c)}Yi(n,i,a);break;case 1:if(!cn&&(as(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(U){It(a,i,U)}Yi(n,i,a);break;case 21:Yi(n,i,a);break;case 22:a.mode&1?(cn=(c=cn)||a.memoizedState!==null,Yi(n,i,a),cn=c):Yi(n,i,a);break;default:Yi(n,i,a)}}function qd(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new kg),i.forEach(function(c){var d=qg.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Kn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,M=i,U=M;e:for(;U!==null;){switch(U.tag){case 5:en=U.stateNode,$n=!1;break e;case 3:en=U.stateNode.containerInfo,$n=!0;break e;case 4:en=U.stateNode.containerInfo,$n=!0;break e}U=U.return}if(en===null)throw Error(t(160));Xd(m,M,d),en=null,$n=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(Z){It(d,i,Z)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Yd(i,n),i=i.sibling}function Yd(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Kn(i,n),ci(n),c&4){try{ha(3,n,n.return),mo(3,n)}catch(Oe){It(n,n.return,Oe)}try{ha(5,n,n.return)}catch(Oe){It(n,n.return,Oe)}}break;case 1:Kn(i,n),ci(n),c&512&&a!==null&&as(a,a.return);break;case 5:if(Kn(i,n),ci(n),c&512&&a!==null&&as(a,a.return),n.flags&32){var d=n.stateNode;try{Ee(d,"")}catch(Oe){It(n,n.return,Oe)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,M=a!==null?a.memoizedProps:m,U=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{U==="input"&&m.type==="radio"&&m.name!=null&&$e(d,m),it(U,M);var Z=it(U,m);for(M=0;M<B.length;M+=2){var ve=B[M],_e=B[M+1];ve==="style"?We(d,_e):ve==="dangerouslySetInnerHTML"?Be(d,_e):ve==="children"?Ee(d,_e):P(d,ve,_e,Z)}switch(U){case"input":vt(d,m);break;case"textarea":E(d,m);break;case"select":var me=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Pe=m.value;Pe!=null?xt(d,!!m.multiple,Pe,!1):me!==!!m.multiple&&(m.defaultValue!=null?xt(d,!!m.multiple,m.defaultValue,!0):xt(d,!!m.multiple,m.multiple?[]:"",!1))}d[ea]=m}catch(Oe){It(n,n.return,Oe)}}break;case 6:if(Kn(i,n),ci(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Oe){It(n,n.return,Oe)}}break;case 3:if(Kn(i,n),ci(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Gs(i.containerInfo)}catch(Oe){It(n,n.return,Oe)}break;case 4:Kn(i,n),ci(n);break;case 13:Kn(i,n),ci(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Lc=Ie())),c&4&&qd(n);break;case 22:if(ve=a!==null&&a.memoizedState!==null,n.mode&1?(cn=(Z=cn)||ve,Kn(i,n),cn=Z):Kn(i,n),ci(n),c&8192){if(Z=n.memoizedState!==null,(n.stateNode.isHidden=Z)&&!ve&&(n.mode&1)!==0)for(Ue=n,ve=n.child;ve!==null;){for(_e=Ue=ve;Ue!==null;){switch(me=Ue,Pe=me.child,me.tag){case 0:case 11:case 14:case 15:ha(4,me,me.return);break;case 1:as(me,me.return);var Fe=me.stateNode;if(typeof Fe.componentWillUnmount=="function"){c=me,a=me.return;try{i=c,Fe.props=i.memoizedProps,Fe.state=i.memoizedState,Fe.componentWillUnmount()}catch(Oe){It(c,a,Oe)}}break;case 5:as(me,me.return);break;case 22:if(me.memoizedState!==null){Qd(_e);continue}}Pe!==null?(Pe.return=me,Ue=Pe):Qd(_e)}ve=ve.sibling}e:for(ve=null,_e=n;;){if(_e.tag===5){if(ve===null){ve=_e;try{d=_e.stateNode,Z?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(U=_e.stateNode,B=_e.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=He("display",M))}catch(Oe){It(n,n.return,Oe)}}}else if(_e.tag===6){if(ve===null)try{_e.stateNode.nodeValue=Z?"":_e.memoizedProps}catch(Oe){It(n,n.return,Oe)}}else if((_e.tag!==22&&_e.tag!==23||_e.memoizedState===null||_e===n)&&_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===n)break e;for(;_e.sibling===null;){if(_e.return===null||_e.return===n)break e;ve===_e&&(ve=null),_e=_e.return}ve===_e&&(ve=null),_e.sibling.return=_e.return,_e=_e.sibling}}break;case 19:Kn(i,n),ci(n),c&4&&qd(n);break;case 21:break;default:Kn(i,n),ci(n)}}function ci(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Wd(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ee(d,""),c.flags&=-33);var m=jd(n);Cc(n,m,d);break;case 3:case 4:var M=c.stateNode.containerInfo,U=jd(n);Ac(n,U,M);break;default:throw Error(t(161))}}catch(B){It(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Bg(n,i,a){Ue=n,$d(n)}function $d(n,i,a){for(var c=(n.mode&1)!==0;Ue!==null;){var d=Ue,m=d.child;if(d.tag===22&&c){var M=d.memoizedState!==null||po;if(!M){var U=d.alternate,B=U!==null&&U.memoizedState!==null||cn;U=po;var Z=cn;if(po=M,(cn=B)&&!Z)for(Ue=d;Ue!==null;)M=Ue,B=M.child,M.tag===22&&M.memoizedState!==null?Zd(d):B!==null?(B.return=M,Ue=B):Zd(d);for(;m!==null;)Ue=m,$d(m),m=m.sibling;Ue=d,po=U,cn=Z}Kd(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ue=m):Kd(n)}}function Kd(n){for(;Ue!==null;){var i=Ue;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:cn||mo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!cn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Yn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Qh(i,m,c);break;case 3:var M=i.updateQueue;if(M!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Qh(i,M,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Z=i.alternate;if(Z!==null){var ve=Z.memoizedState;if(ve!==null){var _e=ve.dehydrated;_e!==null&&Gs(_e)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}cn||i.flags&512&&Rc(i)}catch(me){It(i,i.return,me)}}if(i===n){Ue=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ue=a;break}Ue=i.return}}function Qd(n){for(;Ue!==null;){var i=Ue;if(i===n){Ue=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ue=a;break}Ue=i.return}}function Zd(n){for(;Ue!==null;){var i=Ue;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{mo(4,i)}catch(B){It(i,a,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(B){It(i,d,B)}}var m=i.return;try{Rc(i)}catch(B){It(i,m,B)}break;case 5:var M=i.return;try{Rc(i)}catch(B){It(i,M,B)}}}catch(B){It(i,i.return,B)}if(i===n){Ue=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Ue=U;break}Ue=i.return}}var zg=Math.ceil,go=L.ReactCurrentDispatcher,bc=L.ReactCurrentOwner,zn=L.ReactCurrentBatchConfig,ft=0,Qt=null,Ht=null,tn=0,Pn=0,os=Gi(0),jt=0,da=null,yr=0,vo=0,Pc=0,fa=null,yn=null,Lc=0,ls=1/0,Ei=null,_o=!1,Nc=null,$i=null,yo=!1,Ki=null,xo=0,pa=0,Uc=null,So=-1,Mo=0;function fn(){return(ft&6)!==0?Ie():So!==-1?So:So=Ie()}function Qi(n){return(n.mode&1)===0?1:(ft&2)!==0&&tn!==0?tn&-tn:Eg.transition!==null?(Mo===0&&(Mo=ju()),Mo):(n=_t,n!==0||(n=window.event,n=n===void 0?16:eh(n.type)),n)}function Qn(n,i,a,c){if(50<pa)throw pa=0,Uc=null,Error(t(185));Os(n,a,c),((ft&2)===0||n!==Qt)&&(n===Qt&&((ft&2)===0&&(vo|=a),jt===4&&Zi(n,tn)),xn(n,c),a===1&&ft===0&&(i.mode&1)===0&&(ls=Ie()+500,$a&&ji()))}function xn(n,i){var a=n.callbackNode;fl(n,i);var c=$t(n,n===Qt?tn:0);if(c===0)a!==null&&Ke(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Ke(a),i===1)n.tag===0?Mg(ef.bind(null,n)):Bh(ef.bind(null,n)),_g(function(){(ft&6)===0&&ji()}),a=null;else{switch(Xu(c)){case 1:a=Et;break;case 4:a=Ct;break;case 16:a=sn;break;case 536870912:a=Lt;break;default:a=sn}a=cf(a,Jd.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Jd(n,i){if(So=-1,Mo=0,(ft&6)!==0)throw Error(t(327));var a=n.callbackNode;if(cs()&&n.callbackNode!==a)return null;var c=$t(n,n===Qt?tn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Eo(n,c);else{i=c;var d=ft;ft|=2;var m=nf();(Qt!==n||tn!==i)&&(Ei=null,ls=Ie()+500,Sr(n,i));do try{Gg();break}catch(U){tf(n,U)}while(!0);Ql(),go.current=m,ft=d,Ht!==null?i=0:(Qt=null,tn=0,i=jt)}if(i!==0){if(i===2&&(d=Hr(n),d!==0&&(c=d,i=Dc(n,d))),i===1)throw a=da,Sr(n,0),Zi(n,c),xn(n,Ie()),a;if(i===6)Zi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Hg(d)&&(i=Eo(n,c),i===2&&(m=Hr(n),m!==0&&(c=m,i=Dc(n,m))),i===1))throw a=da,Sr(n,0),Zi(n,c),xn(n,Ie()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Mr(n,yn,Ei);break;case 3:if(Zi(n,c),(c&130023424)===c&&(i=Lc+500-Ie(),10<i)){if($t(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){fn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=zl(Mr.bind(null,n,yn,Ei),i);break}Mr(n,yn,Ei);break;case 4:if(Zi(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var M=31-Gt(c);m=1<<M,M=i[M],M>d&&(d=M),c&=~m}if(c=d,c=Ie()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*zg(c/1960))-c,10<c){n.timeoutHandle=zl(Mr.bind(null,n,yn,Ei),c);break}Mr(n,yn,Ei);break;case 5:Mr(n,yn,Ei);break;default:throw Error(t(329))}}}return xn(n,Ie()),n.callbackNode===a?Jd.bind(null,n):null}function Dc(n,i){var a=fa;return n.current.memoizedState.isDehydrated&&(Sr(n,i).flags|=256),n=Eo(n,i),n!==2&&(i=yn,yn=a,i!==null&&Ic(i)),n}function Ic(n){yn===null?yn=n:yn.push.apply(yn,n)}function Hg(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Xn(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Zi(n,i){for(i&=~Pc,i&=~vo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Gt(i),c=1<<a;n[a]=-1,i&=~c}}function ef(n){if((ft&6)!==0)throw Error(t(327));cs();var i=$t(n,0);if((i&1)===0)return xn(n,Ie()),null;var a=Eo(n,i);if(n.tag!==0&&a===2){var c=Hr(n);c!==0&&(i=c,a=Dc(n,c))}if(a===1)throw a=da,Sr(n,0),Zi(n,i),xn(n,Ie()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Mr(n,yn,Ei),xn(n,Ie()),null}function Fc(n,i){var a=ft;ft|=1;try{return n(i)}finally{ft=a,ft===0&&(ls=Ie()+500,$a&&ji())}}function xr(n){Ki!==null&&Ki.tag===0&&(ft&6)===0&&cs();var i=ft;ft|=1;var a=zn.transition,c=_t;try{if(zn.transition=null,_t=1,n)return n()}finally{_t=c,zn.transition=a,ft=i,(ft&6)===0&&ji()}}function kc(){Pn=os.current,Rt(os)}function Sr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,vg(a)),Ht!==null)for(a=Ht.return;a!==null;){var c=a;switch(Xl(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&qa();break;case 3:rs(),Rt(gn),Rt(an),sc();break;case 5:ic(c);break;case 4:rs();break;case 13:Rt(Nt);break;case 19:Rt(Nt);break;case 10:Zl(c.type._context);break;case 22:case 23:kc()}a=a.return}if(Qt=n,Ht=n=Ji(n.current,null),tn=Pn=i,jt=0,da=null,Pc=vo=yr=0,yn=fa=null,gr!==null){for(i=0;i<gr.length;i++)if(a=gr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var M=m.next;m.next=d,c.next=M}a.pending=c}gr=null}return n}function tf(n,i){do{var a=Ht;try{if(Ql(),so.current=co,ao){for(var c=Ut.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}ao=!1}if(_r=0,Kt=Wt=Ut=null,aa=!1,oa=0,bc.current=null,a===null||a.return===null){jt=1,da=i,Ht=null;break}e:{var m=n,M=a.return,U=a,B=i;if(i=tn,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var Z=B,ve=U,_e=ve.tag;if((ve.mode&1)===0&&(_e===0||_e===11||_e===15)){var me=ve.alternate;me?(ve.updateQueue=me.updateQueue,ve.memoizedState=me.memoizedState,ve.lanes=me.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Pe=Rd(M);if(Pe!==null){Pe.flags&=-257,Ad(Pe,M,U,m,i),Pe.mode&1&&wd(m,Z,i),i=Pe,B=Z;var Fe=i.updateQueue;if(Fe===null){var Oe=new Set;Oe.add(B),i.updateQueue=Oe}else Fe.add(B);break e}else{if((i&1)===0){wd(m,Z,i),Oc();break e}B=Error(t(426))}}else if(bt&&U.mode&1){var Ot=Rd(M);if(Ot!==null){(Ot.flags&65536)===0&&(Ot.flags|=256),Ad(Ot,M,U,m,i),$l(ss(B,U));break e}}m=B=ss(B,U),jt!==4&&(jt=2),fa===null?fa=[m]:fa.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var j=Ed(m,B,i);Kh(m,j);break e;case 1:U=B;var V=m.type,q=m.stateNode;if((m.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&($i===null||!$i.has(q)))){m.flags|=65536,i&=-i,m.lanes|=i;var xe=Td(m,U,i);Kh(m,xe);break e}}m=m.return}while(m!==null)}sf(a)}catch(ze){i=ze,Ht===a&&a!==null&&(Ht=a=a.return);continue}break}while(!0)}function nf(){var n=go.current;return go.current=co,n===null?co:n}function Oc(){(jt===0||jt===3||jt===2)&&(jt=4),Qt===null||(yr&268435455)===0&&(vo&268435455)===0||Zi(Qt,tn)}function Eo(n,i){var a=ft;ft|=2;var c=nf();(Qt!==n||tn!==i)&&(Ei=null,Sr(n,i));do try{Vg();break}catch(d){tf(n,d)}while(!0);if(Ql(),ft=a,go.current=c,Ht!==null)throw Error(t(261));return Qt=null,tn=0,jt}function Vg(){for(;Ht!==null;)rf(Ht)}function Gg(){for(;Ht!==null&&!Ze();)rf(Ht)}function rf(n){var i=lf(n.alternate,n,Pn);n.memoizedProps=n.pendingProps,i===null?sf(n):Ht=i,bc.current=null}function sf(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Ig(a,i,Pn),a!==null){Ht=a;return}}else{if(a=Fg(a,i),a!==null){a.flags&=32767,Ht=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{jt=6,Ht=null;return}}if(i=i.sibling,i!==null){Ht=i;return}Ht=i=n}while(i!==null);jt===0&&(jt=5)}function Mr(n,i,a){var c=_t,d=zn.transition;try{zn.transition=null,_t=1,Wg(n,i,a,c)}finally{zn.transition=d,_t=c}return null}function Wg(n,i,a,c){do cs();while(Ki!==null);if((ft&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Tm(n,m),n===Qt&&(Ht=Qt=null,tn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||yo||(yo=!0,cf(sn,function(){return cs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=zn.transition,zn.transition=null;var M=_t;_t=1;var U=ft;ft|=4,bc.current=null,Og(n,a),Yd(a,n),ug(Ol),Ua=!!kl,Ol=kl=null,n.current=a,Bg(a),ot(),ft=U,_t=M,zn.transition=m}else n.current=a;if(yo&&(yo=!1,Ki=n,xo=d),m=n.pendingLanes,m===0&&($i=null),Bt(a.stateNode),xn(n,Ie()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(_o)throw _o=!1,n=Nc,Nc=null,n;return(xo&1)!==0&&n.tag!==0&&cs(),m=n.pendingLanes,(m&1)!==0?n===Uc?pa++:(pa=0,Uc=n):pa=0,ji(),null}function cs(){if(Ki!==null){var n=Xu(xo),i=zn.transition,a=_t;try{if(zn.transition=null,_t=16>n?16:n,Ki===null)var c=!1;else{if(n=Ki,Ki=null,xo=0,(ft&6)!==0)throw Error(t(331));var d=ft;for(ft|=4,Ue=n.current;Ue!==null;){var m=Ue,M=m.child;if((Ue.flags&16)!==0){var U=m.deletions;if(U!==null){for(var B=0;B<U.length;B++){var Z=U[B];for(Ue=Z;Ue!==null;){var ve=Ue;switch(ve.tag){case 0:case 11:case 15:ha(8,ve,m)}var _e=ve.child;if(_e!==null)_e.return=ve,Ue=_e;else for(;Ue!==null;){ve=Ue;var me=ve.sibling,Pe=ve.return;if(Gd(ve),ve===Z){Ue=null;break}if(me!==null){me.return=Pe,Ue=me;break}Ue=Pe}}}var Fe=m.alternate;if(Fe!==null){var Oe=Fe.child;if(Oe!==null){Fe.child=null;do{var Ot=Oe.sibling;Oe.sibling=null,Oe=Ot}while(Oe!==null)}}Ue=m}}if((m.subtreeFlags&2064)!==0&&M!==null)M.return=m,Ue=M;else e:for(;Ue!==null;){if(m=Ue,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ha(9,m,m.return)}var j=m.sibling;if(j!==null){j.return=m.return,Ue=j;break e}Ue=m.return}}var V=n.current;for(Ue=V;Ue!==null;){M=Ue;var q=M.child;if((M.subtreeFlags&2064)!==0&&q!==null)q.return=M,Ue=q;else e:for(M=V;Ue!==null;){if(U=Ue,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:mo(9,U)}}catch(ze){It(U,U.return,ze)}if(U===M){Ue=null;break e}var xe=U.sibling;if(xe!==null){xe.return=U.return,Ue=xe;break e}Ue=U.return}}if(ft=d,ji(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(lt,n)}catch{}c=!0}return c}finally{_t=a,zn.transition=i}}return!1}function af(n,i,a){i=ss(a,i),i=Ed(n,i,1),n=qi(n,i,1),i=fn(),n!==null&&(Os(n,1,i),xn(n,i))}function It(n,i,a){if(n.tag===3)af(n,n,a);else for(;i!==null;){if(i.tag===3){af(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&($i===null||!$i.has(c))){n=ss(a,n),n=Td(i,n,1),i=qi(i,n,1),n=fn(),i!==null&&(Os(i,1,n),xn(i,n));break}}i=i.return}}function jg(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=fn(),n.pingedLanes|=n.suspendedLanes&a,Qt===n&&(tn&a)===a&&(jt===4||jt===3&&(tn&130023424)===tn&&500>Ie()-Lc?Sr(n,0):Pc|=a),xn(n,i)}function of(n,i){i===0&&((n.mode&1)===0?i=1:(i=In,In<<=1,(In&130023424)===0&&(In=4194304)));var a=fn();n=xi(n,i),n!==null&&(Os(n,i,a),xn(n,a))}function Xg(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),of(n,a)}function qg(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),of(n,a)}var lf;lf=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||gn.current)_n=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return _n=!1,Dg(n,i,a);_n=(n.flags&131072)!==0}else _n=!1,bt&&(i.flags&1048576)!==0&&zh(i,Qa,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;fo(n,i),n=i.pendingProps;var d=Qr(i,an.current);is(i,a),d=lc(null,i,c,n,d,a);var m=cc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,vn(c)?(m=!0,Ya(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,tc(i),d.updater=uo,i.stateNode=d,d._reactInternals=i,mc(i,c,n,a),i=yc(null,i,c,!0,m,a)):(i.tag=0,bt&&m&&jl(i),dn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(fo(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=$g(c),n=Yn(c,n),d){case 0:i=_c(null,i,c,n,a);break e;case 1:i=Ud(null,i,c,n,a);break e;case 11:i=Cd(null,i,c,n,a);break e;case 14:i=bd(null,i,c,Yn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Yn(c,d),_c(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Yn(c,d),Ud(n,i,c,d,a);case 3:e:{if(Dd(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,$h(n,i),io(i,c,null,a);var M=i.memoizedState;if(c=M.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=ss(Error(t(423)),i),i=Id(n,i,c,a,d);break e}else if(c!==d){d=ss(Error(t(424)),i),i=Id(n,i,c,a,d);break e}else for(bn=Vi(i.stateNode.containerInfo.firstChild),Cn=i,bt=!0,qn=null,a=qh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(es(),c===d){i=Mi(n,i,a);break e}dn(n,i,c,a)}i=i.child}return i;case 5:return Zh(i),n===null&&Yl(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,M=d.children,Bl(c,d)?M=null:m!==null&&Bl(c,m)&&(i.flags|=32),Nd(n,i),dn(n,i,M,a),i.child;case 6:return n===null&&Yl(i),null;case 13:return Fd(n,i,a);case 4:return nc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=ts(i,null,c,a):dn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Yn(c,d),Cd(n,i,c,d,a);case 7:return dn(n,i,i.pendingProps,a),i.child;case 8:return dn(n,i,i.pendingProps.children,a),i.child;case 12:return dn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,M=d.value,Tt(eo,c._currentValue),c._currentValue=M,m!==null)if(Xn(m.value,M)){if(m.children===d.children&&!gn.current){i=Mi(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var U=m.dependencies;if(U!==null){M=m.child;for(var B=U.firstContext;B!==null;){if(B.context===c){if(m.tag===1){B=Si(-1,a&-a),B.tag=2;var Z=m.updateQueue;if(Z!==null){Z=Z.shared;var ve=Z.pending;ve===null?B.next=B:(B.next=ve.next,ve.next=B),Z.pending=B}}m.lanes|=a,B=m.alternate,B!==null&&(B.lanes|=a),Jl(m.return,a,i),U.lanes|=a;break}B=B.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(t(341));M.lanes|=a,U=M.alternate,U!==null&&(U.lanes|=a),Jl(M,a,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}dn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,is(i,a),d=On(d),c=c(d),i.flags|=1,dn(n,i,c,a),i.child;case 14:return c=i.type,d=Yn(c,i.pendingProps),d=Yn(c.type,d),bd(n,i,c,d,a);case 15:return Pd(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Yn(c,d),fo(n,i),i.tag=1,vn(c)?(n=!0,Ya(i)):n=!1,is(i,a),Sd(i,c,d),mc(i,c,d,a),yc(null,i,c,!0,n,a);case 19:return Od(n,i,a);case 22:return Ld(n,i,a)}throw Error(t(156,i.tag))};function cf(n,i){return Xe(n,i)}function Yg(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(n,i,a,c){return new Yg(n,i,a,c)}function Bc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function $g(n){if(typeof n=="function")return Bc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===pe)return 11;if(n===re)return 14}return 2}function Ji(n,i){var a=n.alternate;return a===null?(a=Hn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function To(n,i,a,c,d,m){var M=2;if(c=n,typeof n=="function")Bc(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case O:return Er(a.children,d,m,i);case ae:M=8,d|=8;break;case C:return n=Hn(12,a,i,d|2),n.elementType=C,n.lanes=m,n;case Y:return n=Hn(13,a,i,d),n.elementType=Y,n.lanes=m,n;case ne:return n=Hn(19,a,i,d),n.elementType=ne,n.lanes=m,n;case J:return wo(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case D:M=10;break e;case fe:M=9;break e;case pe:M=11;break e;case re:M=14;break e;case he:M=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Hn(M,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function Er(n,i,a,c){return n=Hn(7,n,c,i),n.lanes=a,n}function wo(n,i,a,c){return n=Hn(22,n,c,i),n.elementType=J,n.lanes=a,n.stateNode={isHidden:!1},n}function zc(n,i,a){return n=Hn(6,n,null,i),n.lanes=a,n}function Hc(n,i,a){return i=Hn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Kg(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pl(0),this.expirationTimes=pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pl(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Vc(n,i,a,c,d,m,M,U,B){return n=new Kg(n,i,a,U,B),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Hn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},tc(m),n}function Qg(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function uf(n){if(!n)return Wi;n=n._reactInternals;e:{if(b(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(vn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(vn(a))return kh(n,a,i)}return i}function hf(n,i,a,c,d,m,M,U,B){return n=Vc(a,c,!0,n,d,m,M,U,B),n.context=uf(null),a=n.current,c=fn(),d=Qi(a),m=Si(c,d),m.callback=i??null,qi(a,m,d),n.current.lanes=d,Os(n,d,c),xn(n,c),n}function Ro(n,i,a,c){var d=i.current,m=fn(),M=Qi(d);return a=uf(a),i.context===null?i.context=a:i.pendingContext=a,i=Si(m,M),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=qi(d,i,M),n!==null&&(Qn(n,d,M,m),no(n,d,M)),M}function Ao(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function df(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Gc(n,i){df(n,i),(n=n.alternate)&&df(n,i)}function Zg(){return null}var ff=typeof reportError=="function"?reportError:function(n){console.error(n)};function Wc(n){this._internalRoot=n}Co.prototype.render=Wc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ro(n,i,null,null)},Co.prototype.unmount=Wc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;xr(function(){Ro(null,n,null,null)}),i[gi]=null}};function Co(n){this._internalRoot=n}Co.prototype.unstable_scheduleHydration=function(n){if(n){var i=$u();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Bi.length&&i!==0&&i<Bi[a].priority;a++);Bi.splice(a,0,n),a===0&&Zu(n)}};function jc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function bo(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function pf(){}function Jg(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var Z=Ao(M);m.call(Z)}}var M=hf(i,c,n,0,null,!1,!1,"",pf);return n._reactRootContainer=M,n[gi]=M.current,Zs(n.nodeType===8?n.parentNode:n),xr(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var U=c;c=function(){var Z=Ao(B);U.call(Z)}}var B=Vc(n,0,!1,null,null,!1,!1,"",pf);return n._reactRootContainer=B,n[gi]=B.current,Zs(n.nodeType===8?n.parentNode:n),xr(function(){Ro(i,B,a,c)}),B}function Po(n,i,a,c,d){var m=a._reactRootContainer;if(m){var M=m;if(typeof d=="function"){var U=d;d=function(){var B=Ao(M);U.call(B)}}Ro(i,M,n,d)}else M=Jg(a,i,n,d,c);return Ao(M)}qu=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=mi(i.pendingLanes);a!==0&&(ml(i,a|1),xn(i,Ie()),(ft&6)===0&&(ls=Ie()+500,ji()))}break;case 13:xr(function(){var c=xi(n,1);if(c!==null){var d=fn();Qn(c,n,1,d)}}),Gc(n,1)}},gl=function(n){if(n.tag===13){var i=xi(n,134217728);if(i!==null){var a=fn();Qn(i,n,134217728,a)}Gc(n,134217728)}},Yu=function(n){if(n.tag===13){var i=Qi(n),a=xi(n,i);if(a!==null){var c=fn();Qn(a,n,i,c)}Gc(n,i)}},$u=function(){return _t},Ku=function(n,i){var a=_t;try{return _t=n,i()}finally{_t=a}},Re=function(n,i,a){switch(i){case"input":if(vt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Xa(c);if(!d)throw Error(t(90));$(c),vt(c,d)}}}break;case"textarea":E(n,a);break;case"select":i=a.value,i!=null&&xt(n,!!a.multiple,i,!1)}},Ft=Fc,wn=xr;var e0={usingClientEntryPoint:!1,Events:[ta,$r,Xa,dt,St,Fc]},ma={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t0={bundleType:ma.bundleType,version:ma.version,rendererPackageName:ma.rendererPackageName,rendererConfig:ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ce(n),n===null?null:n.stateNode},findFiberByHostInstance:ma.findFiberByHostInstance||Zg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lo.isDisabled&&Lo.supportsFiber)try{lt=Lo.inject(t0),mn=Lo}catch{}}return Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e0,Sn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jc(i))throw Error(t(200));return Qg(n,i,null,a)},Sn.createRoot=function(n,i){if(!jc(n))throw Error(t(299));var a=!1,c="",d=ff;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Vc(n,1,!1,null,null,a,!1,c,d),n[gi]=i.current,Zs(n.nodeType===8?n.parentNode:n),new Wc(i)},Sn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ce(i),n=n===null?null:n.stateNode,n},Sn.flushSync=function(n){return xr(n)},Sn.hydrate=function(n,i,a){if(!bo(i))throw Error(t(200));return Po(null,n,i,!0,a)},Sn.hydrateRoot=function(n,i,a){if(!jc(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",M=ff;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),i=hf(i,null,n,1,a??null,d,!1,m,M),n[gi]=i.current,Zs(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Co(i)},Sn.render=function(n,i,a){if(!bo(i))throw Error(t(200));return Po(null,n,i,!1,a)},Sn.unmountComponentAtNode=function(n){if(!bo(n))throw Error(t(40));return n._reactRootContainer?(xr(function(){Po(null,null,n,!1,function(){n._reactRootContainer=null,n[gi]=null})}),!0):!1},Sn.unstable_batchedUpdates=Fc,Sn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!bo(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Po(n,i,a,!1,c)},Sn.version="18.3.1-next-f1338f8080-20240426",Sn}var Mf;function c0(){if(Mf)return Yc.exports;Mf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Yc.exports=l0(),Yc.exports}var Ef;function u0(){if(Ef)return No;Ef=1;var s=c0();return No.createRoot=s.createRoot,No.hydrateRoot=s.hydrateRoot,No}var h0=u0();const d0=Hp(h0);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zu="154",f0=0,Tf=1,p0=2,Gp=1,m0=2,Pi=3,cr=0,En=1,Li=2,or=0,Cs=1,wf=2,Rf=3,Af=4,g0=5,Rs=100,v0=101,_0=102,Cf=103,bf=104,y0=200,x0=201,S0=202,M0=203,Wp=204,jp=205,E0=206,T0=207,w0=208,R0=209,A0=210,C0=0,b0=1,P0=2,Au=3,L0=4,N0=5,U0=6,D0=7,Xp=0,I0=1,F0=2,Di=0,k0=1,O0=2,B0=3,z0=4,H0=5,qp=300,Ps=301,Ls=302,Cu=303,bu=304,rl=306,Pu=1e3,ri=1001,Lu=1002,Xt=1003,Pf=1004,Qc=1005,Gn=1006,V0=1007,Ea=1008,lr=1009,G0=1010,W0=1011,Hu=1012,Yp=1013,sr=1014,ar=1015,Ta=1016,$p=1017,Kp=1018,Lr=1020,j0=1021,Wn=1023,X0=1024,q0=1025,Nr=1026,Ns=1027,Y0=1028,Qp=1029,$0=1030,Zp=1031,Jp=1033,Zc=33776,Jc=33777,eu=33778,tu=33779,Lf=35840,Nf=35841,Uf=35842,Df=35843,K0=36196,If=37492,Ff=37496,kf=37808,Of=37809,Bf=37810,zf=37811,Hf=37812,Vf=37813,Gf=37814,Wf=37815,jf=37816,Xf=37817,qf=37818,Yf=37819,$f=37820,Kf=37821,nu=36492,Q0=36283,Qf=36284,Zf=36285,Jf=36286,em=3e3,Ur=3001,Z0=3200,J0=3201,ev=0,tv=1,Dr="",at="srgb",fi="srgb-linear",tm="display-p3",iu=7680,nv=519,iv=512,rv=513,sv=514,av=515,ov=516,lv=517,cv=518,uv=519,ep=35044,tp="300 es",Nu=1035,Ni=2e3,nl=2001;class Ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ru=Math.PI/180,Uu=180/Math.PI;function wa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(un[s&255]+un[s>>8&255]+un[s>>16&255]+un[s>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[r&255]+un[r>>8&255]+un[r>>16&255]+un[r>>24&255]).toLowerCase()}function Mn(s,e,t){return Math.max(e,Math.min(t,s))}function hv(s,e){return(s%e+e)%e}function su(s,e,t){return(1-t)*s+t*e}function np(s){return(s&s-1)===0&&s!==0}function Du(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Uo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,t=0){yt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,r,o,l,u,h,f,p){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,h,f,p)}set(e,t,r,o,l,u,h,f,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=t,g[4]=l,g[5]=f,g[6]=r,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],h=r[3],f=r[6],p=r[1],g=r[4],v=r[7],_=r[2],S=r[5],T=r[8],w=o[0],x=o[3],y=o[6],I=o[1],P=o[4],L=o[7],k=o[2],z=o[5],O=o[8];return l[0]=u*w+h*I+f*k,l[3]=u*x+h*P+f*z,l[6]=u*y+h*L+f*O,l[1]=p*w+g*I+v*k,l[4]=p*x+g*P+v*z,l[7]=p*y+g*L+v*O,l[2]=_*w+S*I+T*k,l[5]=_*x+S*P+T*z,l[8]=_*y+S*L+T*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],f=e[6],p=e[7],g=e[8];return t*u*g-t*h*p-r*l*g+r*h*f+o*l*p-o*u*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],f=e[6],p=e[7],g=e[8],v=g*u-h*p,_=h*f-g*l,S=p*l-u*f,T=t*v+r*_+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=v*w,e[1]=(o*p-g*r)*w,e[2]=(h*r-o*u)*w,e[3]=_*w,e[4]=(g*t-o*f)*w,e[5]=(o*l-h*t)*w,e[6]=S*w,e[7]=(r*f-p*t)*w,e[8]=(u*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,h){const f=Math.cos(l),p=Math.sin(l);return this.set(r*f,r*p,-r*(f*u+p*h)+u+e,-o*p,o*f,-o*(-p*u+f*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(au.makeScale(e,t)),this}rotate(e){return this.premultiply(au.makeRotation(-e)),this}translate(e,t){return this.premultiply(au.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const au=new ut;function nm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function il(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const ip={};function Ma(s){s in ip||(ip[s]=!0,console.warn(s))}function bs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ou(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const dv=new ut().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),fv=new ut().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function pv(s){return s.convertSRGBToLinear().applyMatrix3(fv)}function mv(s){return s.applyMatrix3(dv).convertLinearToSRGB()}const gv={[fi]:s=>s,[at]:s=>s.convertSRGBToLinear(),[tm]:pv},vv={[fi]:s=>s,[at]:s=>s.convertLinearToSRGB(),[tm]:mv},Zn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return fi},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const r=gv[e],o=vv[t];if(r===void 0||o===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return o(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let us;class im{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{us===void 0&&(us=il("canvas")),us.width=e.width,us.height=e.height;const r=us.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=il("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=bs(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(bs(t[r]/255)*255):t[r]=bs(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _v=0;class rm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=wa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?l.push(lu(o[u].image)):l.push(lu(o[u]))}else l=lu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function lu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?im.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yv=0;class Tn extends Ds{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,r=ri,o=ri,l=Gn,u=Ea,h=Wn,f=lr,p=Tn.DEFAULT_ANISOTROPY,g=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=wa(),this.name="",this.source=new rm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=f,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===Ur?at:Dr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pu:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Lu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pu:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Lu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===at?Ur:em}set encoding(e){Ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ur?at:Dr}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=qp;Tn.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,t=0,r=0,o=1){nn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const f=e.elements,p=f[0],g=f[4],v=f[8],_=f[1],S=f[5],T=f[9],w=f[2],x=f[6],y=f[10];if(Math.abs(g-_)<.01&&Math.abs(v-w)<.01&&Math.abs(T-x)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+w)<.1&&Math.abs(T+x)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,L=(S+1)/2,k=(y+1)/2,z=(g+_)/4,O=(v+w)/4,ae=(T+x)/4;return P>L&&P>k?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=z/r,l=O/r):L>k?L<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(L),r=z/o,l=ae/o):k<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(k),r=O/l,o=ae/l),this.set(r,o,l,t),this}let I=Math.sqrt((x-T)*(x-T)+(v-w)*(v-w)+(_-g)*(_-g));return Math.abs(I)<.001&&(I=1),this.x=(x-T)/I,this.y=(v-w)/I,this.z=(_-g)/I,this.w=Math.acos((p+S+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fr extends Ds{constructor(e=1,t=1,r={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t);const o={width:e,height:t,depth:1};r.encoding!==void 0&&(Ma("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Ur?at:Dr),this.texture=new Tn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Gn,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sm extends Tn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xv extends Tn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ra{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,h){let f=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];const _=l[u+0],S=l[u+1],T=l[u+2],w=l[u+3];if(h===0){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h===1){e[t+0]=_,e[t+1]=S,e[t+2]=T,e[t+3]=w;return}if(v!==w||f!==_||p!==S||g!==T){let x=1-h;const y=f*_+p*S+g*T+v*w,I=y>=0?1:-1,P=1-y*y;if(P>Number.EPSILON){const k=Math.sqrt(P),z=Math.atan2(k,y*I);x=Math.sin(x*z)/k,h=Math.sin(h*z)/k}const L=h*I;if(f=f*x+_*L,p=p*x+S*L,g=g*x+T*L,v=v*x+w*L,x===1-h){const k=1/Math.sqrt(f*f+p*p+g*g+v*v);f*=k,p*=k,g*=k,v*=k}}e[t]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,u){const h=r[o],f=r[o+1],p=r[o+2],g=r[o+3],v=l[u],_=l[u+1],S=l[u+2],T=l[u+3];return e[t]=h*T+g*v+f*S-p*_,e[t+1]=f*T+g*_+p*v-h*S,e[t+2]=p*T+g*S+h*_-f*v,e[t+3]=g*T-h*v-f*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const r=e._x,o=e._y,l=e._z,u=e._order,h=Math.cos,f=Math.sin,p=h(r/2),g=h(o/2),v=h(l/2),_=f(r/2),S=f(o/2),T=f(l/2);switch(u){case"XYZ":this._x=_*g*v+p*S*T,this._y=p*S*v-_*g*T,this._z=p*g*T+_*S*v,this._w=p*g*v-_*S*T;break;case"YXZ":this._x=_*g*v+p*S*T,this._y=p*S*v-_*g*T,this._z=p*g*T-_*S*v,this._w=p*g*v+_*S*T;break;case"ZXY":this._x=_*g*v-p*S*T,this._y=p*S*v+_*g*T,this._z=p*g*T+_*S*v,this._w=p*g*v-_*S*T;break;case"ZYX":this._x=_*g*v-p*S*T,this._y=p*S*v+_*g*T,this._z=p*g*T-_*S*v,this._w=p*g*v+_*S*T;break;case"YZX":this._x=_*g*v+p*S*T,this._y=p*S*v+_*g*T,this._z=p*g*T-_*S*v,this._w=p*g*v-_*S*T;break;case"XZY":this._x=_*g*v-p*S*T,this._y=p*S*v-_*g*T,this._z=p*g*T+_*S*v,this._w=p*g*v+_*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],h=t[5],f=t[9],p=t[2],g=t[6],v=t[10],_=r+h+v;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-f)*S,this._y=(l-p)*S,this._z=(u-o)*S}else if(r>h&&r>v){const S=2*Math.sqrt(1+r-h-v);this._w=(g-f)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-r-v);this._w=(l-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(f+g)/S}else{const S=2*Math.sqrt(1+v-r-h);this._w=(u-o)/S,this._x=(l+p)/S,this._y=(f+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,h=t._x,f=t._y,p=t._z,g=t._w;return this._x=r*g+u*h+o*p-l*f,this._y=o*g+u*f+l*h-r*p,this._z=l*g+u*p+r*f-o*h,this._w=u*g-r*h-o*f-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let h=u*e._w+r*e._x+o*e._y+l*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const f=1-h*h;if(f<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*r+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(f),g=Math.atan2(p,h),v=Math.sin((1-t)*g)/p,_=Math.sin(t*g)/p;return this._w=u*v+this._w*_,this._x=r*v+this._x*_,this._y=o*v+this._y*_,this._z=l*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),o=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(t*Math.cos(o),r*Math.sin(l),r*Math.cos(l),t*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,r=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,h=e.z,f=e.w,p=f*t+u*o-h*r,g=f*r+h*t-l*o,v=f*o+l*r-u*t,_=-l*t-u*r-h*o;return this.x=p*f+_*-l+g*-h-v*-u,this.y=g*f+_*-u+v*-l-p*-h,this.z=v*f+_*-h+p*-u-g*-l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,h=t.y,f=t.z;return this.x=o*f-l*h,this.y=l*u-r*f,this.z=r*h-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return cu.copy(this).projectOnVector(e),this.sub(cu)}reflect(e){return this.sub(cu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cu=new ie,rp=new Ra;class Aa{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),hs.copy(e.boundingBox),hs.applyMatrix4(e.matrixWorld),this.union(hs);else{const o=e.geometry;if(o!==void 0)if(t&&o.attributes!==void 0&&o.attributes.position!==void 0){const l=o.attributes.position;for(let u=0,h=l.count;u<h;u++)wi.fromBufferAttribute(l,u).applyMatrix4(e.matrixWorld),this.expandByPoint(wi)}else o.boundingBox===null&&o.computeBoundingBox(),hs.copy(o.boundingBox),hs.applyMatrix4(e.matrixWorld),this.union(hs)}const r=e.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),Do.subVectors(this.max,va),ds.subVectors(e.a,va),fs.subVectors(e.b,va),ps.subVectors(e.c,va),tr.subVectors(fs,ds),nr.subVectors(ps,fs),Tr.subVectors(ds,ps);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Tr.z,Tr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Tr.z,0,-Tr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Tr.y,Tr.x,0];return!uu(t,ds,fs,ps,Do)||(t=[1,0,0,0,1,0,0,0,1],!uu(t,ds,fs,ps,Do))?!1:(Io.crossVectors(tr,nr),t=[Io.x,Io.y,Io.z],uu(t,ds,fs,ps,Do))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],wi=new ie,hs=new Aa,ds=new ie,fs=new ie,ps=new ie,tr=new ie,nr=new ie,Tr=new ie,va=new ie,Do=new ie,Io=new ie,wr=new ie;function uu(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){wr.fromArray(s,l);const h=o.x*Math.abs(wr.x)+o.y*Math.abs(wr.y)+o.z*Math.abs(wr.z),f=e.dot(wr),p=t.dot(wr),g=r.dot(wr);if(Math.max(-Math.max(f,p,g),Math.min(f,p,g))>h)return!1}return!0}const Sv=new Aa,_a=new ie,hu=new ie;class Vu{constructor(e=new ie,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Sv.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);const t=_a.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(_a,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(hu)),this.expandByPoint(_a.copy(e.center).sub(hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new ie,du=new ie,Fo=new ie,ir=new ie,fu=new ie,ko=new ie,pu=new ie;class Mv{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){du.copy(e).add(t).multiplyScalar(.5),Fo.copy(t).sub(e).normalize(),ir.copy(this.origin).sub(du);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Fo),h=ir.dot(this.direction),f=-ir.dot(Fo),p=ir.lengthSq(),g=Math.abs(1-u*u);let v,_,S,T;if(g>0)if(v=u*f-h,_=u*h-f,T=l*g,v>=0)if(_>=-T)if(_<=T){const w=1/g;v*=w,_*=w,S=v*(v+u*_+2*h)+_*(u*v+_+2*f)+p}else _=l,v=Math.max(0,-(u*_+h)),S=-v*v+_*(_+2*f)+p;else _=-l,v=Math.max(0,-(u*_+h)),S=-v*v+_*(_+2*f)+p;else _<=-T?(v=Math.max(0,-(-u*l+h)),_=v>0?-l:Math.min(Math.max(-l,-f),l),S=-v*v+_*(_+2*f)+p):_<=T?(v=0,_=Math.min(Math.max(-l,-f),l),S=_*(_+2*f)+p):(v=Math.max(0,-(u*l+h)),_=v>0?l:Math.min(Math.max(-l,-f),l),S=-v*v+_*(_+2*f)+p);else _=u>0?-l:l,v=Math.max(0,-(u*_+h)),S=-v*v+_*(_+2*f)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(du).addScaledVector(Fo,_),S}intersectSphere(e,t){Ri.subVectors(e.center,this.origin);const r=Ri.dot(this.direction),o=Ri.dot(Ri)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),h=r-u,f=r+u;return f<0?null:h<0?this.at(f,t):this.at(h,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,h,f;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),g>=0?(l=(e.min.y-_.y)*g,u=(e.max.y-_.y)*g):(l=(e.max.y-_.y)*g,u=(e.min.y-_.y)*g),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),v>=0?(h=(e.min.z-_.z)*v,f=(e.max.z-_.z)*v):(h=(e.max.z-_.z)*v,f=(e.min.z-_.z)*v),r>f||h>o)||((h>r||r!==r)&&(r=h),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,r,o,l){fu.subVectors(t,e),ko.subVectors(r,e),pu.crossVectors(fu,ko);let u=this.direction.dot(pu),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;ir.subVectors(this.origin,e);const f=h*this.direction.dot(ko.crossVectors(ir,ko));if(f<0)return null;const p=h*this.direction.dot(fu.cross(ir));if(p<0||f+p>u)return null;const g=-h*ir.dot(pu);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,t,r,o,l,u,h,f,p,g,v,_,S,T,w,x){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,h,f,p,g,v,_,S,T,w,x)}set(e,t,r,o,l,u,h,f,p,g,v,_,S,T,w,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=h,y[13]=f,y[2]=p,y[6]=g,y[10]=v,y[14]=_,y[3]=S,y[7]=T,y[11]=w,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/ms.setFromMatrixColumn(e,0).length(),l=1/ms.setFromMatrixColumn(e,1).length(),u=1/ms.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),h=Math.sin(r),f=Math.cos(o),p=Math.sin(o),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=u*g,S=u*v,T=h*g,w=h*v;t[0]=f*g,t[4]=-f*v,t[8]=p,t[1]=S+T*p,t[5]=_-w*p,t[9]=-h*f,t[2]=w-_*p,t[6]=T+S*p,t[10]=u*f}else if(e.order==="YXZ"){const _=f*g,S=f*v,T=p*g,w=p*v;t[0]=_+w*h,t[4]=T*h-S,t[8]=u*p,t[1]=u*v,t[5]=u*g,t[9]=-h,t[2]=S*h-T,t[6]=w+_*h,t[10]=u*f}else if(e.order==="ZXY"){const _=f*g,S=f*v,T=p*g,w=p*v;t[0]=_-w*h,t[4]=-u*v,t[8]=T+S*h,t[1]=S+T*h,t[5]=u*g,t[9]=w-_*h,t[2]=-u*p,t[6]=h,t[10]=u*f}else if(e.order==="ZYX"){const _=u*g,S=u*v,T=h*g,w=h*v;t[0]=f*g,t[4]=T*p-S,t[8]=_*p+w,t[1]=f*v,t[5]=w*p+_,t[9]=S*p-T,t[2]=-p,t[6]=h*f,t[10]=u*f}else if(e.order==="YZX"){const _=u*f,S=u*p,T=h*f,w=h*p;t[0]=f*g,t[4]=w-_*v,t[8]=T*v+S,t[1]=v,t[5]=u*g,t[9]=-h*g,t[2]=-p*g,t[6]=S*v+T,t[10]=_-w*v}else if(e.order==="XZY"){const _=u*f,S=u*p,T=h*f,w=h*p;t[0]=f*g,t[4]=-v,t[8]=p*g,t[1]=_*v+w,t[5]=u*g,t[9]=S*v-T,t[2]=T*v-S,t[6]=h*g,t[10]=w*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ev,e,Tv)}lookAt(e,t,r){const o=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),rr.crossVectors(r,Nn),rr.lengthSq()===0&&(Math.abs(r.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),rr.crossVectors(r,Nn)),rr.normalize(),Oo.crossVectors(Nn,rr),o[0]=rr.x,o[4]=Oo.x,o[8]=Nn.x,o[1]=rr.y,o[5]=Oo.y,o[9]=Nn.y,o[2]=rr.z,o[6]=Oo.z,o[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],h=r[4],f=r[8],p=r[12],g=r[1],v=r[5],_=r[9],S=r[13],T=r[2],w=r[6],x=r[10],y=r[14],I=r[3],P=r[7],L=r[11],k=r[15],z=o[0],O=o[4],ae=o[8],C=o[12],D=o[1],fe=o[5],pe=o[9],Y=o[13],ne=o[2],re=o[6],he=o[10],J=o[14],G=o[3],te=o[7],W=o[11],R=o[15];return l[0]=u*z+h*D+f*ne+p*G,l[4]=u*O+h*fe+f*re+p*te,l[8]=u*ae+h*pe+f*he+p*W,l[12]=u*C+h*Y+f*J+p*R,l[1]=g*z+v*D+_*ne+S*G,l[5]=g*O+v*fe+_*re+S*te,l[9]=g*ae+v*pe+_*he+S*W,l[13]=g*C+v*Y+_*J+S*R,l[2]=T*z+w*D+x*ne+y*G,l[6]=T*O+w*fe+x*re+y*te,l[10]=T*ae+w*pe+x*he+y*W,l[14]=T*C+w*Y+x*J+y*R,l[3]=I*z+P*D+L*ne+k*G,l[7]=I*O+P*fe+L*re+k*te,l[11]=I*ae+P*pe+L*he+k*W,l[15]=I*C+P*Y+L*J+k*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],h=e[5],f=e[9],p=e[13],g=e[2],v=e[6],_=e[10],S=e[14],T=e[3],w=e[7],x=e[11],y=e[15];return T*(+l*f*v-o*p*v-l*h*_+r*p*_+o*h*S-r*f*S)+w*(+t*f*S-t*p*_+l*u*_-o*u*S+o*p*g-l*f*g)+x*(+t*p*v-t*h*S-l*u*v+r*u*S+l*h*g-r*p*g)+y*(-o*h*g-t*f*v+t*h*_+o*u*v-r*u*_+r*f*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],f=e[6],p=e[7],g=e[8],v=e[9],_=e[10],S=e[11],T=e[12],w=e[13],x=e[14],y=e[15],I=v*x*p-w*_*p+w*f*S-h*x*S-v*f*y+h*_*y,P=T*_*p-g*x*p-T*f*S+u*x*S+g*f*y-u*_*y,L=g*w*p-T*v*p+T*h*S-u*w*S-g*h*y+u*v*y,k=T*v*f-g*w*f-T*h*_+u*w*_+g*h*x-u*v*x,z=t*I+r*P+o*L+l*k;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/z;return e[0]=I*O,e[1]=(w*_*l-v*x*l-w*o*S+r*x*S+v*o*y-r*_*y)*O,e[2]=(h*x*l-w*f*l+w*o*p-r*x*p-h*o*y+r*f*y)*O,e[3]=(v*f*l-h*_*l-v*o*p+r*_*p+h*o*S-r*f*S)*O,e[4]=P*O,e[5]=(g*x*l-T*_*l+T*o*S-t*x*S-g*o*y+t*_*y)*O,e[6]=(T*f*l-u*x*l-T*o*p+t*x*p+u*o*y-t*f*y)*O,e[7]=(u*_*l-g*f*l+g*o*p-t*_*p-u*o*S+t*f*S)*O,e[8]=L*O,e[9]=(T*v*l-g*w*l-T*r*S+t*w*S+g*r*y-t*v*y)*O,e[10]=(u*w*l-T*h*l+T*r*p-t*w*p-u*r*y+t*h*y)*O,e[11]=(g*h*l-u*v*l-g*r*p+t*v*p+u*r*S-t*h*S)*O,e[12]=k*O,e[13]=(g*w*o-T*v*o+T*r*_-t*w*_-g*r*x+t*v*x)*O,e[14]=(T*h*o-u*w*o-T*r*f+t*w*f+u*r*x-t*h*x)*O,e[15]=(u*v*o-g*h*o+g*r*f-t*v*f-u*r*_+t*h*_)*O,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,h=e.y,f=e.z,p=l*u,g=l*h;return this.set(p*u+r,p*h-o*f,p*f+o*h,0,p*h+o*f,g*h+r,g*f-o*u,0,p*f-o*h,g*f+o*u,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,h=t._z,f=t._w,p=l+l,g=u+u,v=h+h,_=l*p,S=l*g,T=l*v,w=u*g,x=u*v,y=h*v,I=f*p,P=f*g,L=f*v,k=r.x,z=r.y,O=r.z;return o[0]=(1-(w+y))*k,o[1]=(S+L)*k,o[2]=(T-P)*k,o[3]=0,o[4]=(S-L)*z,o[5]=(1-(_+y))*z,o[6]=(x+I)*z,o[7]=0,o[8]=(T+P)*O,o[9]=(x-I)*O,o[10]=(1-(_+w))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=ms.set(o[0],o[1],o[2]).length();const u=ms.set(o[4],o[5],o[6]).length(),h=ms.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],Jn.copy(this);const p=1/l,g=1/u,v=1/h;return Jn.elements[0]*=p,Jn.elements[1]*=p,Jn.elements[2]*=p,Jn.elements[4]*=g,Jn.elements[5]*=g,Jn.elements[6]*=g,Jn.elements[8]*=v,Jn.elements[9]*=v,Jn.elements[10]*=v,t.setFromRotationMatrix(Jn),r.x=l,r.y=u,r.z=h,this}makePerspective(e,t,r,o,l,u,h=Ni){const f=this.elements,p=2*l/(t-e),g=2*l/(r-o),v=(t+e)/(t-e),_=(r+o)/(r-o);let S,T;if(h===Ni)S=-(u+l)/(u-l),T=-2*u*l/(u-l);else if(h===nl)S=-u/(u-l),T=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return f[0]=p,f[4]=0,f[8]=v,f[12]=0,f[1]=0,f[5]=g,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=S,f[14]=T,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,r,o,l,u,h=Ni){const f=this.elements,p=1/(t-e),g=1/(r-o),v=1/(u-l),_=(t+e)*p,S=(r+o)*g;let T,w;if(h===Ni)T=(u+l)*v,w=-2*v;else if(h===nl)T=l*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-_,f[1]=0,f[5]=2*g,f[9]=0,f[13]=-S,f[2]=0,f[6]=0,f[10]=w,f[14]=-T,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ms=new ie,Jn=new rn,Ev=new ie(0,0,0),Tv=new ie(1,1,1),rr=new ie,Oo=new ie,Nn=new ie,sp=new rn,ap=new Ra;class sl{constructor(e=0,t=0,r=0,o=sl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],h=o[8],f=o[1],p=o[5],g=o[9],v=o[2],_=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Mn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-Mn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Mn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return sp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sp,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ap.setFromEuler(this),this.setFromQuaternion(ap,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sl.DEFAULT_ORDER="XYZ";class am{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wv=0;const op=new ie,gs=new Ra,Ai=new rn,Bo=new ie,ya=new ie,Rv=new ie,Av=new Ra,lp=new ie(1,0,0),cp=new ie(0,1,0),up=new ie(0,0,1),Cv={type:"added"},hp={type:"removed"};class Dn extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new ie,t=new sl,r=new Ra,o=new ie(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new rn},normalMatrix:{value:new ut}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new am,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(lp,e)}rotateY(e){return this.rotateOnAxis(cp,e)}rotateZ(e){return this.rotateOnAxis(up,e)}translateOnAxis(e,t){return op.copy(e).applyQuaternion(this.quaternion),this.position.add(op.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lp,e)}translateY(e){return this.translateOnAxis(cp,e)}translateZ(e){return this.translateOnAxis(up,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Bo.copy(e):Bo.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(ya,Bo,this.up):Ai.lookAt(Bo,ya,this.up),this.quaternion.setFromRotationMatrix(Ai),o&&(Ai.extractRotation(o.matrixWorld),gs.setFromRotationMatrix(Ai),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Cv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(hp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t){let r=[];this[e]===t&&r.push(this);for(let o=0,l=this.children.length;o<l;o++){const u=this.children[o].getObjectsByProperty(e,t);u.length>0&&(r=r.concat(u))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,e,Rv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,Av,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++){const l=t[r];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++){const h=o[l];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function l(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const f=h.shapes;if(Array.isArray(f))for(let p=0,g=f.length;p<g;p++){const v=f[p];l(e.shapes,v)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let f=0,p=this.material.length;f<p;f++)h.push(l(e.materials,this.material[f]));o.material=h}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const f=this.animations[h];o.animations.push(l(e.animations,f))}}if(t){const h=u(e.geometries),f=u(e.materials),p=u(e.textures),g=u(e.images),v=u(e.shapes),_=u(e.skeletons),S=u(e.animations),T=u(e.nodes);h.length>0&&(r.geometries=h),f.length>0&&(r.materials=f),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(h){const f=[];for(const p in h){const g=h[p];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Dn.DEFAULT_UP=new ie(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new ie,Ci=new ie,mu=new ie,bi=new ie,vs=new ie,_s=new ie,dp=new ie,gu=new ie,vu=new ie,_u=new ie;let zo=!1;class ni{constructor(e=new ie,t=new ie,r=new ie){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),ei.subVectors(e,t),o.cross(ei);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){ei.subVectors(o,t),Ci.subVectors(r,t),mu.subVectors(e,t);const u=ei.dot(ei),h=ei.dot(Ci),f=ei.dot(mu),p=Ci.dot(Ci),g=Ci.dot(mu),v=u*p-h*h;if(v===0)return l.set(-2,-1,-1);const _=1/v,S=(p*f-h*g)*_,T=(u*g-h*f)*_;return l.set(1-S-T,T,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,bi),bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getUV(e,t,r,o,l,u,h,f){return zo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zo=!0),this.getInterpolation(e,t,r,o,l,u,h,f)}static getInterpolation(e,t,r,o,l,u,h,f){return this.getBarycoord(e,t,r,o,bi),f.setScalar(0),f.addScaledVector(l,bi.x),f.addScaledVector(u,bi.y),f.addScaledVector(h,bi.z),f}static isFrontFacing(e,t,r,o){return ei.subVectors(r,t),Ci.subVectors(e,t),ei.cross(Ci).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ei.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,o,l){return zo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zo=!0),ni.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}getInterpolation(e,t,r,o,l){return ni.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,h;vs.subVectors(o,r),_s.subVectors(l,r),gu.subVectors(e,r);const f=vs.dot(gu),p=_s.dot(gu);if(f<=0&&p<=0)return t.copy(r);vu.subVectors(e,o);const g=vs.dot(vu),v=_s.dot(vu);if(g>=0&&v<=g)return t.copy(o);const _=f*v-g*p;if(_<=0&&f>=0&&g<=0)return u=f/(f-g),t.copy(r).addScaledVector(vs,u);_u.subVectors(e,l);const S=vs.dot(_u),T=_s.dot(_u);if(T>=0&&S<=T)return t.copy(l);const w=S*p-f*T;if(w<=0&&p>=0&&T<=0)return h=p/(p-T),t.copy(r).addScaledVector(_s,h);const x=g*T-S*v;if(x<=0&&v-g>=0&&S-T>=0)return dp.subVectors(l,o),h=(v-g)/(v-g+(S-T)),t.copy(o).addScaledVector(dp,h);const y=1/(x+w+_);return u=w*y,h=_*y,t.copy(r).addScaledVector(vs,u).addScaledVector(_s,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let bv=0;class al extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=wa(),this.name="",this.type="Material",this.blending=Cs,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wp,this.blendDst=jp,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Au,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=iu,this.stencilZFail=iu,this.stencilZPass=iu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(r.blending=this.blending),this.side!==cr&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(r.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const h in l){const f=l[h];delete f.metadata,u.push(f)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const om={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function yu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class At{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zn.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Zn.workingColorSpace){return this.r=e,this.g=t,this.b=r,Zn.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Zn.workingColorSpace){if(e=hv(e,1),t=Mn(t,0,1),r=Mn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=yu(u,l,e+1/3),this.g=yu(u,l,e),this.b=yu(u,l,e-1/3)}return Zn.toWorkingColorSpace(this,o),this}setStyle(e,t=at){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){const r=om[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=ou(e.r),this.g=ou(e.g),this.b=ou(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return Zn.fromWorkingColorSpace(hn.copy(this),e),Math.round(Mn(hn.r*255,0,255))*65536+Math.round(Mn(hn.g*255,0,255))*256+Math.round(Mn(hn.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zn.workingColorSpace){Zn.fromWorkingColorSpace(hn.copy(this),t);const r=hn.r,o=hn.g,l=hn.b,u=Math.max(r,o,l),h=Math.min(r,o,l);let f,p;const g=(h+u)/2;if(h===u)f=0,p=0;else{const v=u-h;switch(p=g<=.5?v/(u+h):v/(2-u-h),u){case r:f=(o-l)/v+(o<l?6:0);break;case o:f=(l-r)/v+2;break;case l:f=(r-o)/v+4;break}f/=6}return e.h=f,e.s=p,e.l=g,e}getRGB(e,t=Zn.workingColorSpace){return Zn.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=at){Zn.fromWorkingColorSpace(hn.copy(this),e);const t=hn.r,r=hn.g,o=hn.b;return e!==at?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(ti),ti.h+=e,ti.s+=t,ti.l+=r,this.setHSL(ti.h,ti.s,ti.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(Ho);const r=su(ti.h,Ho.h,t),o=su(ti.s,Ho.s,t),l=su(ti.l,Ho.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new At;At.NAMES=om;class Gu extends al{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new ie,Vo=new yt;class di{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=ep,this.updateRange={offset:0,count:-1},this.gpuType=ar,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Vo.fromBufferAttribute(this,t),Vo.applyMatrix3(e),this.setXY(t,Vo.x,Vo.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Uo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Uo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Uo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Uo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array),o=Ln(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array),o=Ln(o,this.array),l=Ln(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ep&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class lm extends di{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class cm extends di{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ir extends di{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Pv=0;const Vn=new rn,xu=new Dn,ys=new ie,Un=new Aa,xa=new Aa,Jt=new ie;class Or extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=wa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nm(e)?cm:lm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ut().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,r){return Vn.makeTranslation(e,t,r),this.applyMatrix4(Vn),this}scale(e,t,r){return Vn.makeScale(e,t,r),this.applyMatrix4(Vn),this}lookAt(e){return xu.lookAt(e),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const t=[];for(let r=0,o=e.length;r<o;r++){const l=e[r];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Ir(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Un.setFromBufferAttribute(l),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const h=t[l];xa.setFromBufferAttribute(h),this.morphTargetsRelative?(Jt.addVectors(Un.min,xa.min),Un.expandByPoint(Jt),Jt.addVectors(Un.max,xa.max),Un.expandByPoint(Jt)):(Un.expandByPoint(xa.min),Un.expandByPoint(xa.max))}Un.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)Jt.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Jt));if(t)for(let l=0,u=t.length;l<u;l++){const h=t[l],f=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Jt.fromBufferAttribute(h,p),f&&(ys.fromBufferAttribute(e,p),Jt.add(ys)),o=Math.max(o,r.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,o=t.position.array,l=t.normal.array,u=t.uv.array,h=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*h),4));const f=this.getAttribute("tangent").array,p=[],g=[];for(let D=0;D<h;D++)p[D]=new ie,g[D]=new ie;const v=new ie,_=new ie,S=new ie,T=new yt,w=new yt,x=new yt,y=new ie,I=new ie;function P(D,fe,pe){v.fromArray(o,D*3),_.fromArray(o,fe*3),S.fromArray(o,pe*3),T.fromArray(u,D*2),w.fromArray(u,fe*2),x.fromArray(u,pe*2),_.sub(v),S.sub(v),w.sub(T),x.sub(T);const Y=1/(w.x*x.y-x.x*w.y);isFinite(Y)&&(y.copy(_).multiplyScalar(x.y).addScaledVector(S,-w.y).multiplyScalar(Y),I.copy(S).multiplyScalar(w.x).addScaledVector(_,-x.x).multiplyScalar(Y),p[D].add(y),p[fe].add(y),p[pe].add(y),g[D].add(I),g[fe].add(I),g[pe].add(I))}let L=this.groups;L.length===0&&(L=[{start:0,count:r.length}]);for(let D=0,fe=L.length;D<fe;++D){const pe=L[D],Y=pe.start,ne=pe.count;for(let re=Y,he=Y+ne;re<he;re+=3)P(r[re+0],r[re+1],r[re+2])}const k=new ie,z=new ie,O=new ie,ae=new ie;function C(D){O.fromArray(l,D*3),ae.copy(O);const fe=p[D];k.copy(fe),k.sub(O.multiplyScalar(O.dot(fe))).normalize(),z.crossVectors(ae,fe);const Y=z.dot(g[D])<0?-1:1;f[D*4]=k.x,f[D*4+1]=k.y,f[D*4+2]=k.z,f[D*4+3]=Y}for(let D=0,fe=L.length;D<fe;++D){const pe=L[D],Y=pe.start,ne=pe.count;for(let re=Y,he=Y+ne;re<he;re+=3)C(r[re+0]),C(r[re+1]),C(r[re+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new di(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const o=new ie,l=new ie,u=new ie,h=new ie,f=new ie,p=new ie,g=new ie,v=new ie;if(e)for(let _=0,S=e.count;_<S;_+=3){const T=e.getX(_+0),w=e.getX(_+1),x=e.getX(_+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,w),u.fromBufferAttribute(t,x),g.subVectors(u,l),v.subVectors(o,l),g.cross(v),h.fromBufferAttribute(r,T),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,x),h.add(g),f.add(g),p.add(g),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let _=0,S=t.count;_<S;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),g.subVectors(u,l),v.subVectors(o,l),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(h,f){const p=h.array,g=h.itemSize,v=h.normalized,_=new p.constructor(f.length*g);let S=0,T=0;for(let w=0,x=f.length;w<x;w++){h.isInterleavedBufferAttribute?S=f[w]*h.data.stride+h.offset:S=f[w]*g;for(let y=0;y<g;y++)_[T++]=p[S++]}return new di(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Or,r=this.index.array,o=this.attributes;for(const h in o){const f=o[h],p=e(f,r);t.setAttribute(h,p)}const l=this.morphAttributes;for(const h in l){const f=[],p=l[h];for(let g=0,v=p.length;g<v;g++){const _=p[g],S=e(_,r);f.push(S)}t.morphAttributes[h]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,f=u.length;h<f;h++){const p=u[h];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const p=r[f];e.data.attributes[f]=p.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],g=[];for(let v=0,_=p.length;v<_;v++){const S=p[v];g.push(S.toJSON(e.data))}g.length>0&&(o[f]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],v=l[p];for(let _=0,S=v.length;_<S;_++)g.push(v[_].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fp=new rn,Rr=new Mv,Go=new Vu,pp=new ie,xs=new ie,Ss=new ie,Ms=new ie,Su=new ie,Wo=new ie,jo=new yt,Xo=new yt,qo=new yt,mp=new ie,gp=new ie,vp=new ie,Yo=new ie,$o=new ie;class Ui extends Dn{constructor(e=new Or,t=new Gu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(l&&h){Wo.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const g=h[f],v=l[f];g!==0&&(Su.fromBufferAttribute(v,e),u?Wo.addScaledVector(Su,g):Wo.addScaledVector(Su.sub(t),g))}t.add(Wo)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Go.copy(r.boundingSphere),Go.applyMatrix4(l),Rr.copy(e.ray).recast(e.near),!(Go.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Go,pp)===null||Rr.origin.distanceToSquared(pp)>(e.far-e.near)**2))&&(fp.copy(l).invert(),Rr.copy(e.ray).applyMatrix4(fp),!(r.boundingBox!==null&&Rr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,h=l.index,f=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,_=l.groups,S=l.drawRange;if(h!==null)if(Array.isArray(u))for(let T=0,w=_.length;T<w;T++){const x=_[T],y=u[x.materialIndex],I=Math.max(x.start,S.start),P=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let L=I,k=P;L<k;L+=3){const z=h.getX(L),O=h.getX(L+1),ae=h.getX(L+2);o=Ko(this,y,e,r,p,g,v,z,O,ae),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const T=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let x=T,y=w;x<y;x+=3){const I=h.getX(x),P=h.getX(x+1),L=h.getX(x+2);o=Ko(this,u,e,r,p,g,v,I,P,L),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let T=0,w=_.length;T<w;T++){const x=_[T],y=u[x.materialIndex],I=Math.max(x.start,S.start),P=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let L=I,k=P;L<k;L+=3){const z=L,O=L+1,ae=L+2;o=Ko(this,y,e,r,p,g,v,z,O,ae),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const T=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let x=T,y=w;x<y;x+=3){const I=x,P=x+1,L=x+2;o=Ko(this,u,e,r,p,g,v,I,P,L),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function Lv(s,e,t,r,o,l,u,h){let f;if(e.side===En?f=r.intersectTriangle(u,l,o,!0,h):f=r.intersectTriangle(o,l,u,e.side===cr,h),f===null)return null;$o.copy(h),$o.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo($o);return p<t.near||p>t.far?null:{distance:p,point:$o.clone(),object:s}}function Ko(s,e,t,r,o,l,u,h,f,p){s.getVertexPosition(h,xs),s.getVertexPosition(f,Ss),s.getVertexPosition(p,Ms);const g=Lv(s,e,t,r,xs,Ss,Ms,Yo);if(g){o&&(jo.fromBufferAttribute(o,h),Xo.fromBufferAttribute(o,f),qo.fromBufferAttribute(o,p),g.uv=ni.getInterpolation(Yo,xs,Ss,Ms,jo,Xo,qo,new yt)),l&&(jo.fromBufferAttribute(l,h),Xo.fromBufferAttribute(l,f),qo.fromBufferAttribute(l,p),g.uv1=ni.getInterpolation(Yo,xs,Ss,Ms,jo,Xo,qo,new yt),g.uv2=g.uv1),u&&(mp.fromBufferAttribute(u,h),gp.fromBufferAttribute(u,f),vp.fromBufferAttribute(u,p),g.normal=ni.getInterpolation(Yo,xs,Ss,Ms,mp,gp,vp,new ie),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:f,c:p,normal:new ie,materialIndex:0};ni.getNormal(xs,Ss,Ms,v.normal),g.face=v}return g}class Ca extends Or{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const h=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const f=[],p=[],g=[],v=[];let _=0,S=0;T("z","y","x",-1,-1,r,t,e,u,l,0),T("z","y","x",1,-1,r,t,-e,u,l,1),T("x","z","y",1,1,e,r,t,o,u,2),T("x","z","y",1,-1,e,r,-t,o,u,3),T("x","y","z",1,-1,e,t,r,o,l,4),T("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(f),this.setAttribute("position",new Ir(p,3)),this.setAttribute("normal",new Ir(g,3)),this.setAttribute("uv",new Ir(v,2));function T(w,x,y,I,P,L,k,z,O,ae,C){const D=L/O,fe=k/ae,pe=L/2,Y=k/2,ne=z/2,re=O+1,he=ae+1;let J=0,G=0;const te=new ie;for(let W=0;W<he;W++){const R=W*fe-Y;for(let F=0;F<re;F++){const Q=F*D-pe;te[w]=Q*I,te[x]=R*P,te[y]=ne,p.push(te.x,te.y,te.z),te[w]=0,te[x]=0,te[y]=z>0?1:-1,g.push(te.x,te.y,te.z),v.push(F/O),v.push(1-W/ae),J+=1}}for(let W=0;W<ae;W++)for(let R=0;R<O;R++){const F=_+R+re*W,Q=_+R+re*(W+1),de=_+(R+1)+re*(W+1),ge=_+(R+1)+re*W;f.push(F,Q,ge),f.push(Q,de,ge),G+=6}h.addGroup(S,G,C),S+=G,_+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Us(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function pn(s){const e={};for(let t=0;t<s.length;t++){const r=Us(s[t]);for(const o in r)e[o]=r[o]}return e}function Nv(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function um(s){return s.getRenderTarget()===null?s.outputColorSpace:fi}const Uv={clone:Us,merge:pn};var Dv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kr extends al{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dv,this.fragmentShader=Iv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=Nv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class hm extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ii extends hm{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Uu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ru*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uu*2*Math.atan(Math.tan(ru*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ru*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/f,t-=u.offsetY*r/p,o*=u.width/f,r*=u.height/p}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Es=-90,Ts=1;class Fv extends Dn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null;const o=new ii(Es,Ts,e,t);o.layers=this.layers,this.add(o);const l=new ii(Es,Ts,e,t);l.layers=this.layers,this.add(l);const u=new ii(Es,Ts,e,t);u.layers=this.layers,this.add(u);const h=new ii(Es,Ts,e,t);h.layers=this.layers,this.add(h);const f=new ii(Es,Ts,e,t);f.layers=this.layers,this.add(f);const p=new ii(Es,Ts,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,h,f]=t;for(const p of t)this.remove(p);if(e===Ni)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===nl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,u,h,f,p]=this.children,g=e.getRenderTarget(),v=e.toneMapping,_=e.xr.enabled;e.toneMapping=Di,e.xr.enabled=!1;const S=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(t,o),e.setRenderTarget(r,1),e.render(t,l),e.setRenderTarget(r,2),e.render(t,u),e.setRenderTarget(r,3),e.render(t,h),e.setRenderTarget(r,4),e.render(t,f),r.texture.generateMipmaps=S,e.setRenderTarget(r,5),e.render(t,p),e.setRenderTarget(g),e.toneMapping=v,e.xr.enabled=_,r.texture.needsPMREMUpdate=!0}}class dm extends Tn{constructor(e,t,r,o,l,u,h,f,p,g){e=e!==void 0?e:[],t=t!==void 0?t:Ps,super(e,t,r,o,l,u,h,f,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kv extends Fr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];t.encoding!==void 0&&(Ma("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ur?at:Dr),this.texture=new dm(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ca(5,5,5),l=new kr({name:"CubemapFromEquirect",uniforms:Us(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:En,blending:or});l.uniforms.tEquirect.value=t;const u=new Ui(o,l),h=t.minFilter;return t.minFilter===Ea&&(t.minFilter=Gn),new Fv(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const Mu=new ie,Ov=new ie,Bv=new ut;class Cr{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Mu.subVectors(r,t).cross(Ov.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Mu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Bv.getNormalMatrix(e),o=this.coplanarPoint(Mu).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new Vu,Qo=new ie;class fm{constructor(e=new Cr,t=new Cr,r=new Cr,o=new Cr,l=new Cr,u=new Cr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(r),h[3].copy(o),h[4].copy(l),h[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ni){const r=this.planes,o=e.elements,l=o[0],u=o[1],h=o[2],f=o[3],p=o[4],g=o[5],v=o[6],_=o[7],S=o[8],T=o[9],w=o[10],x=o[11],y=o[12],I=o[13],P=o[14],L=o[15];if(r[0].setComponents(f-l,_-p,x-S,L-y).normalize(),r[1].setComponents(f+l,_+p,x+S,L+y).normalize(),r[2].setComponents(f+u,_+g,x+T,L+I).normalize(),r[3].setComponents(f-u,_-g,x-T,L-I).normalize(),r[4].setComponents(f-h,_-v,x-w,L-P).normalize(),t===Ni)r[5].setComponents(f+h,_+v,x+w,L+P).normalize();else if(t===nl)r[5].setComponents(h,v,w,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Qo.x=o.normal.x>0?e.max.x:e.min.x,Qo.y=o.normal.y>0?e.max.y:e.min.y,Qo.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pm(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function zv(s,e){const t=e.isWebGL2,r=new WeakMap;function o(p,g){const v=p.array,_=p.usage,S=s.createBuffer();s.bindBuffer(g,S),s.bufferData(g,v,_),p.onUploadCallback();let T;if(v instanceof Float32Array)T=s.FLOAT;else if(v instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)T=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=s.UNSIGNED_SHORT;else if(v instanceof Int16Array)T=s.SHORT;else if(v instanceof Uint32Array)T=s.UNSIGNED_INT;else if(v instanceof Int32Array)T=s.INT;else if(v instanceof Int8Array)T=s.BYTE;else if(v instanceof Uint8Array)T=s.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)T=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:S,type:T,bytesPerElement:v.BYTES_PER_ELEMENT,version:p.version}}function l(p,g,v){const _=g.array,S=g.updateRange;s.bindBuffer(v,p),S.count===-1?s.bufferSubData(v,0,_):(t?s.bufferSubData(v,S.offset*_.BYTES_PER_ELEMENT,_,S.offset,S.count):s.bufferSubData(v,S.offset*_.BYTES_PER_ELEMENT,_.subarray(S.offset,S.offset+S.count)),S.count=-1),g.onUploadCallback()}function u(p){return p.isInterleavedBufferAttribute&&(p=p.data),r.get(p)}function h(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=r.get(p);g&&(s.deleteBuffer(g.buffer),r.delete(p))}function f(p,g){if(p.isGLBufferAttribute){const _=r.get(p);(!_||_.version<p.version)&&r.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const v=r.get(p);v===void 0?r.set(p,o(p,g)):v.version<p.version&&(l(v.buffer,p,g),v.version=p.version)}return{get:u,remove:h,update:f}}class ol extends Or{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,h=Math.floor(r),f=Math.floor(o),p=h+1,g=f+1,v=e/h,_=t/f,S=[],T=[],w=[],x=[];for(let y=0;y<g;y++){const I=y*_-u;for(let P=0;P<p;P++){const L=P*v-l;T.push(L,-I,0),w.push(0,0,1),x.push(P/h),x.push(1-y/f)}}for(let y=0;y<f;y++)for(let I=0;I<h;I++){const P=I+p*y,L=I+p*(y+1),k=I+1+p*(y+1),z=I+1+p*y;S.push(P,L,z),S.push(L,k,z)}this.setIndex(S),this.setAttribute("position",new Ir(T,3)),this.setAttribute("normal",new Ir(w,3)),this.setAttribute("uv",new Ir(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$v=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,l_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,c_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,u_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,h_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m_="gl_FragColor = linearToOutputTexel( gl_FragColor );",g_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,__=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,x_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,M_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,A_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,C_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,N_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,U_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,O_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,B_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,z_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,H_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,V_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,j_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,X_=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,q_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ey=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ty=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ny=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,iy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ay=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ly=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,cy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,py=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,my=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_y=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Sy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,My=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ey=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ty=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ry=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ay=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,by=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ly=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ny=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Uy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ky=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Oy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,By=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Xy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$y=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zy=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ix=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ax=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ox=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,px=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:Hv,alphahash_pars_fragment:Vv,alphamap_fragment:Gv,alphamap_pars_fragment:Wv,alphatest_fragment:jv,alphatest_pars_fragment:Xv,aomap_fragment:qv,aomap_pars_fragment:Yv,begin_vertex:$v,beginnormal_vertex:Kv,bsdfs:Qv,iridescence_fragment:Zv,bumpmap_pars_fragment:Jv,clipping_planes_fragment:e_,clipping_planes_pars_fragment:t_,clipping_planes_pars_vertex:n_,clipping_planes_vertex:i_,color_fragment:r_,color_pars_fragment:s_,color_pars_vertex:a_,color_vertex:o_,common:l_,cube_uv_reflection_fragment:c_,defaultnormal_vertex:u_,displacementmap_pars_vertex:h_,displacementmap_vertex:d_,emissivemap_fragment:f_,emissivemap_pars_fragment:p_,colorspace_fragment:m_,colorspace_pars_fragment:g_,envmap_fragment:v_,envmap_common_pars_fragment:__,envmap_pars_fragment:y_,envmap_pars_vertex:x_,envmap_physical_pars_fragment:N_,envmap_vertex:S_,fog_vertex:M_,fog_pars_vertex:E_,fog_fragment:T_,fog_pars_fragment:w_,gradientmap_pars_fragment:R_,lightmap_fragment:A_,lightmap_pars_fragment:C_,lights_lambert_fragment:b_,lights_lambert_pars_fragment:P_,lights_pars_begin:L_,lights_toon_fragment:U_,lights_toon_pars_fragment:D_,lights_phong_fragment:I_,lights_phong_pars_fragment:F_,lights_physical_fragment:k_,lights_physical_pars_fragment:O_,lights_fragment_begin:B_,lights_fragment_maps:z_,lights_fragment_end:H_,logdepthbuf_fragment:V_,logdepthbuf_pars_fragment:G_,logdepthbuf_pars_vertex:W_,logdepthbuf_vertex:j_,map_fragment:X_,map_pars_fragment:q_,map_particle_fragment:Y_,map_particle_pars_fragment:$_,metalnessmap_fragment:K_,metalnessmap_pars_fragment:Q_,morphcolor_vertex:Z_,morphnormal_vertex:J_,morphtarget_pars_vertex:ey,morphtarget_vertex:ty,normal_fragment_begin:ny,normal_fragment_maps:iy,normal_pars_fragment:ry,normal_pars_vertex:sy,normal_vertex:ay,normalmap_pars_fragment:oy,clearcoat_normal_fragment_begin:ly,clearcoat_normal_fragment_maps:cy,clearcoat_pars_fragment:uy,iridescence_pars_fragment:hy,opaque_fragment:dy,packing:fy,premultiplied_alpha_fragment:py,project_vertex:my,dithering_fragment:gy,dithering_pars_fragment:vy,roughnessmap_fragment:_y,roughnessmap_pars_fragment:yy,shadowmap_pars_fragment:xy,shadowmap_pars_vertex:Sy,shadowmap_vertex:My,shadowmask_pars_fragment:Ey,skinbase_vertex:Ty,skinning_pars_vertex:wy,skinning_vertex:Ry,skinnormal_vertex:Ay,specularmap_fragment:Cy,specularmap_pars_fragment:by,tonemapping_fragment:Py,tonemapping_pars_fragment:Ly,transmission_fragment:Ny,transmission_pars_fragment:Uy,uv_pars_fragment:Dy,uv_pars_vertex:Iy,uv_vertex:Fy,worldpos_vertex:ky,background_vert:Oy,background_frag:By,backgroundCube_vert:zy,backgroundCube_frag:Hy,cube_vert:Vy,cube_frag:Gy,depth_vert:Wy,depth_frag:jy,distanceRGBA_vert:Xy,distanceRGBA_frag:qy,equirect_vert:Yy,equirect_frag:$y,linedashed_vert:Ky,linedashed_frag:Qy,meshbasic_vert:Zy,meshbasic_frag:Jy,meshlambert_vert:ex,meshlambert_frag:tx,meshmatcap_vert:nx,meshmatcap_frag:ix,meshnormal_vert:rx,meshnormal_frag:sx,meshphong_vert:ax,meshphong_frag:ox,meshphysical_vert:lx,meshphysical_frag:cx,meshtoon_vert:ux,meshtoon_frag:hx,points_vert:dx,points_frag:fx,shadow_vert:px,shadow_frag:mx,sprite_vert:gx,sprite_frag:vx},Ae={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},hi={basic:{uniforms:pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new At(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:pn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:pn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new At(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:pn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:pn([Ae.points,Ae.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:pn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:pn([Ae.common,Ae.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:pn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:pn([Ae.sprite,Ae.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:pn([Ae.common,Ae.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:pn([Ae.lights,Ae.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};hi.physical={uniforms:pn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Zo={r:0,b:0,g:0};function _x(s,e,t,r,o,l,u){const h=new At(0);let f=l===!0?0:1,p,g,v=null,_=0,S=null;function T(x,y){let I=!1,P=y.isScene===!0?y.background:null;switch(P&&P.isTexture&&(P=(y.backgroundBlurriness>0?t:e).get(P)),P===null?w(h,f):P&&P.isColor&&(w(P,1),I=!0),s.xr.getEnvironmentBlendMode()){case"opaque":I=!0;break;case"additive":r.buffers.color.setClear(0,0,0,1,u),I=!0;break;case"alpha-blend":r.buffers.color.setClear(0,0,0,0,u),I=!0;break}(s.autoClear||I)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),P&&(P.isCubeTexture||P.mapping===rl)?(g===void 0&&(g=new Ui(new Ca(1,1,1),new kr({name:"BackgroundCubeMaterial",uniforms:Us(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,O,ae){this.matrixWorld.copyPosition(ae.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,g.material.toneMapped=P.colorSpace!==at,(v!==P||_!==P.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,v=P,_=P.version,S=s.toneMapping),g.layers.enableAll(),x.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Ui(new ol(2,2),new kr({name:"BackgroundMaterial",uniforms:Us(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,p.material.toneMapped=P.colorSpace!==at,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||_!==P.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,v=P,_=P.version,S=s.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null))}function w(x,y){x.getRGB(Zo,um(s)),r.buffers.color.setClear(Zo.r,Zo.g,Zo.b,y,u)}return{getClearColor:function(){return h},setClearColor:function(x,y=1){h.set(x),f=y,w(h,f)},getClearAlpha:function(){return f},setClearAlpha:function(x){f=x,w(h,f)},render:T}}function yx(s,e,t,r){const o=s.getParameter(s.MAX_VERTEX_ATTRIBS),l=r.isWebGL2?null:e.get("OES_vertex_array_object"),u=r.isWebGL2||l!==null,h={},f=x(null);let p=f,g=!1;function v(ne,re,he,J,G){let te=!1;if(u){const W=w(J,he,re);p!==W&&(p=W,S(p.object)),te=y(ne,J,he,G),te&&I(ne,J,he,G)}else{const W=re.wireframe===!0;(p.geometry!==J.id||p.program!==he.id||p.wireframe!==W)&&(p.geometry=J.id,p.program=he.id,p.wireframe=W,te=!0)}G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(te||g)&&(g=!1,ae(ne,re,he,J),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function _(){return r.isWebGL2?s.createVertexArray():l.createVertexArrayOES()}function S(ne){return r.isWebGL2?s.bindVertexArray(ne):l.bindVertexArrayOES(ne)}function T(ne){return r.isWebGL2?s.deleteVertexArray(ne):l.deleteVertexArrayOES(ne)}function w(ne,re,he){const J=he.wireframe===!0;let G=h[ne.id];G===void 0&&(G={},h[ne.id]=G);let te=G[re.id];te===void 0&&(te={},G[re.id]=te);let W=te[J];return W===void 0&&(W=x(_()),te[J]=W),W}function x(ne){const re=[],he=[],J=[];for(let G=0;G<o;G++)re[G]=0,he[G]=0,J[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:re,enabledAttributes:he,attributeDivisors:J,object:ne,attributes:{},index:null}}function y(ne,re,he,J){const G=p.attributes,te=re.attributes;let W=0;const R=he.getAttributes();for(const F in R)if(R[F].location>=0){const de=G[F];let ge=te[F];if(ge===void 0&&(F==="instanceMatrix"&&ne.instanceMatrix&&(ge=ne.instanceMatrix),F==="instanceColor"&&ne.instanceColor&&(ge=ne.instanceColor)),de===void 0||de.attribute!==ge||ge&&de.data!==ge.data)return!0;W++}return p.attributesNum!==W||p.index!==J}function I(ne,re,he,J){const G={},te=re.attributes;let W=0;const R=he.getAttributes();for(const F in R)if(R[F].location>=0){let de=te[F];de===void 0&&(F==="instanceMatrix"&&ne.instanceMatrix&&(de=ne.instanceMatrix),F==="instanceColor"&&ne.instanceColor&&(de=ne.instanceColor));const ge={};ge.attribute=de,de&&de.data&&(ge.data=de.data),G[F]=ge,W++}p.attributes=G,p.attributesNum=W,p.index=J}function P(){const ne=p.newAttributes;for(let re=0,he=ne.length;re<he;re++)ne[re]=0}function L(ne){k(ne,0)}function k(ne,re){const he=p.newAttributes,J=p.enabledAttributes,G=p.attributeDivisors;he[ne]=1,J[ne]===0&&(s.enableVertexAttribArray(ne),J[ne]=1),G[ne]!==re&&((r.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](ne,re),G[ne]=re)}function z(){const ne=p.newAttributes,re=p.enabledAttributes;for(let he=0,J=re.length;he<J;he++)re[he]!==ne[he]&&(s.disableVertexAttribArray(he),re[he]=0)}function O(ne,re,he,J,G,te,W){W===!0?s.vertexAttribIPointer(ne,re,he,G,te):s.vertexAttribPointer(ne,re,he,J,G,te)}function ae(ne,re,he,J){if(r.isWebGL2===!1&&(ne.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;P();const G=J.attributes,te=he.getAttributes(),W=re.defaultAttributeValues;for(const R in te){const F=te[R];if(F.location>=0){let Q=G[R];if(Q===void 0&&(R==="instanceMatrix"&&ne.instanceMatrix&&(Q=ne.instanceMatrix),R==="instanceColor"&&ne.instanceColor&&(Q=ne.instanceColor)),Q!==void 0){const de=Q.normalized,ge=Q.itemSize,Me=t.get(Q);if(Me===void 0)continue;const Le=Me.buffer,we=Me.type,Ve=Me.bytesPerElement,mt=r.isWebGL2===!0&&(we===s.INT||we===s.UNSIGNED_INT||Q.gpuType===Yp);if(Q.isInterleavedBufferAttribute){const tt=Q.data,$=tt.stride,Pt=Q.offset;if(tt.isInstancedInterleavedBuffer){for(let je=0;je<F.locationSize;je++)k(F.location+je,tt.meshPerAttribute);ne.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let je=0;je<F.locationSize;je++)L(F.location+je);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let je=0;je<F.locationSize;je++)O(F.location+je,ge/F.locationSize,we,de,$*Ve,(Pt+ge/F.locationSize*je)*Ve,mt)}else{if(Q.isInstancedBufferAttribute){for(let tt=0;tt<F.locationSize;tt++)k(F.location+tt,Q.meshPerAttribute);ne.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let tt=0;tt<F.locationSize;tt++)L(F.location+tt);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let tt=0;tt<F.locationSize;tt++)O(F.location+tt,ge/F.locationSize,we,de,ge*Ve,ge/F.locationSize*tt*Ve,mt)}}else if(W!==void 0){const de=W[R];if(de!==void 0)switch(de.length){case 2:s.vertexAttrib2fv(F.location,de);break;case 3:s.vertexAttrib3fv(F.location,de);break;case 4:s.vertexAttrib4fv(F.location,de);break;default:s.vertexAttrib1fv(F.location,de)}}}}z()}function C(){pe();for(const ne in h){const re=h[ne];for(const he in re){const J=re[he];for(const G in J)T(J[G].object),delete J[G];delete re[he]}delete h[ne]}}function D(ne){if(h[ne.id]===void 0)return;const re=h[ne.id];for(const he in re){const J=re[he];for(const G in J)T(J[G].object),delete J[G];delete re[he]}delete h[ne.id]}function fe(ne){for(const re in h){const he=h[re];if(he[ne.id]===void 0)continue;const J=he[ne.id];for(const G in J)T(J[G].object),delete J[G];delete he[ne.id]}}function pe(){Y(),g=!0,p!==f&&(p=f,S(p.object))}function Y(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:v,reset:pe,resetDefaultState:Y,dispose:C,releaseStatesOfGeometry:D,releaseStatesOfProgram:fe,initAttributes:P,enableAttribute:L,disableUnusedAttributes:z}}function xx(s,e,t,r){const o=r.isWebGL2;let l;function u(p){l=p}function h(p,g){s.drawArrays(l,p,g),t.update(g,l,1)}function f(p,g,v){if(v===0)return;let _,S;if(o)_=s,S="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[S](l,p,g,v),t.update(g,l,v)}this.setMode=u,this.render=h,this.renderInstances=f}function Sx(s,e,t){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let h=t.precision!==void 0?t.precision:"highp";const f=l(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const p=u||e.has("WEBGL_draw_buffers"),g=t.logarithmicDepthBuffer===!0,v=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),T=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),w=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),I=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,L=u||e.has("OES_texture_float"),k=P&&L,z=u?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:u,drawBuffers:p,getMaxAnisotropy:o,getMaxPrecision:l,precision:h,logarithmicDepthBuffer:g,maxTextures:v,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:T,maxAttributes:w,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:I,vertexTextures:P,floatFragmentTextures:L,floatVertexTextures:k,maxSamples:z}}function Mx(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Cr,h=new ut,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const S=v.length!==0||_||r!==0||o;return o=_,r=v.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){t=g(v,_,0)},this.setState=function(v,_,S){const T=v.clippingPlanes,w=v.clipIntersection,x=v.clipShadows,y=s.get(v);if(!o||T===null||T.length===0||l&&!x)l?g(null):p();else{const I=l?0:r,P=I*4;let L=y.clippingState||null;f.value=L,L=g(T,_,P,S);for(let k=0;k!==P;++k)L[k]=t[k];y.clippingState=L,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,_,S,T){const w=v!==null?v.length:0;let x=null;if(w!==0){if(x=f.value,T!==!0||x===null){const y=S+w*4,I=_.matrixWorldInverse;h.getNormalMatrix(I),(x===null||x.length<y)&&(x=new Float32Array(y));for(let P=0,L=S;P!==w;++P,L+=4)u.copy(v[P]).applyMatrix4(I,h),u.normal.toArray(x,L),x[L+3]=u.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function Ex(s){let e=new WeakMap;function t(u,h){return h===Cu?u.mapping=Ps:h===bu&&(u.mapping=Ls),u}function r(u){if(u&&u.isTexture&&u.isRenderTargetTexture===!1){const h=u.mapping;if(h===Cu||h===bu)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const p=new kv(f.height/2);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const h=u.target;h.removeEventListener("dispose",o);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class mm extends hm{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,h=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,h-=g*this.view.offsetY,f=h-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,h,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const As=4,_p=[.125,.215,.35,.446,.526,.582],Pr=20,Eu=new mm,yp=new At;let Tu=null;const br=(1+Math.sqrt(5))/2,ws=1/br,xp=[new ie(1,1,1),new ie(-1,1,1),new ie(1,1,-1),new ie(-1,1,-1),new ie(0,br,ws),new ie(0,br,-ws),new ie(ws,0,br),new ie(-ws,0,br),new ie(br,ws,0),new ie(-br,ws,0)];class Sp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){Tu=this._renderer.getRenderTarget(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tu),e.scissorTest=!1,Jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ps||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tu=this._renderer.getRenderTarget();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Ta,format:Wn,colorSpace:fi,depthBuffer:!1},o=Mp(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mp(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tx(l)),this._blurMaterial=wx(l,e,t)}return o}_compileMaterial(e){const t=new Ui(this._lodPlanes[0],e);this._renderer.compile(t,Eu)}_sceneToCubeUV(e,t,r,o){const h=new ii(90,1,t,r),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,_=g.toneMapping;g.getClearColor(yp),g.toneMapping=Di,g.autoClear=!1;const S=new Gu({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),T=new Ui(new Ca,S);let w=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,w=!0):(S.color.copy(yp),w=!0);for(let y=0;y<6;y++){const I=y%3;I===0?(h.up.set(0,f[y],0),h.lookAt(p[y],0,0)):I===1?(h.up.set(0,0,f[y]),h.lookAt(0,p[y],0)):(h.up.set(0,f[y],0),h.lookAt(0,0,p[y]));const P=this._cubeSize;Jo(o,I*P,y>2?P:0,P,P),g.setRenderTarget(o),w&&g.render(T,h),g.render(e,h)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=_,g.autoClear=v,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ps||e.mapping===Ls;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ep());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Ui(this._lodPlanes[0],l),h=l.uniforms;h.envMap.value=e;const f=this._cubeSize;Jo(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(u,Eu)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=xp[(o-1)%xp.length];this._blur(e,o-1,o,l,u)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,h){const f=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Ui(this._lodPlanes[o],p),_=p.uniforms,S=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Pr-1),w=l/T,x=isFinite(l)?1+Math.floor(g*w):Pr;x>Pr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Pr}`);const y=[];let I=0;for(let O=0;O<Pr;++O){const ae=O/w,C=Math.exp(-ae*ae/2);y.push(C),O===0?I+=C:O<x&&(I+=2*C)}for(let O=0;O<y.length;O++)y[O]=y[O]/I;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=y,_.latitudinal.value=u==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:P}=this;_.dTheta.value=T,_.mipInt.value=P-r;const L=this._sizeLods[o],k=3*L*(o>P-As?o-P+As:0),z=4*(this._cubeSize-L);Jo(t,k,z,3*L,2*L),f.setRenderTarget(t),f.render(v,Eu)}}function Tx(s){const e=[],t=[],r=[];let o=s;const l=s-As+1+_p.length;for(let u=0;u<l;u++){const h=Math.pow(2,o);t.push(h);let f=1/h;u>s-As?f=_p[u-s+As-1]:u===0&&(f=0),r.push(f);const p=1/(h-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,T=6,w=3,x=2,y=1,I=new Float32Array(w*T*S),P=new Float32Array(x*T*S),L=new Float32Array(y*T*S);for(let z=0;z<S;z++){const O=z%3*2/3-1,ae=z>2?0:-1,C=[O,ae,0,O+2/3,ae,0,O+2/3,ae+1,0,O,ae,0,O+2/3,ae+1,0,O,ae+1,0];I.set(C,w*T*z),P.set(_,x*T*z);const D=[z,z,z,z,z,z];L.set(D,y*T*z)}const k=new Or;k.setAttribute("position",new di(I,w)),k.setAttribute("uv",new di(P,x)),k.setAttribute("faceIndex",new di(L,y)),e.push(k),o>As&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Mp(s,e,t){const r=new Fr(s,e,t);return r.texture.mapping=rl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Jo(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function wx(s,e,t){const r=new Float32Array(Pr),o=new ie(0,1,0);return new kr({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Ep(){return new kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Tp(){return new kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Wu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rx(s){let e=new WeakMap,t=null;function r(h){if(h&&h.isTexture){const f=h.mapping,p=f===Cu||f===bu,g=f===Ps||f===Ls;if(p||g)if(h.isRenderTargetTexture&&h.needsPMREMUpdate===!0){h.needsPMREMUpdate=!1;let v=e.get(h);return t===null&&(t=new Sp(s)),v=p?t.fromEquirectangular(h,v):t.fromCubemap(h,v),e.set(h,v),v.texture}else{if(e.has(h))return e.get(h).texture;{const v=h.image;if(p&&v&&v.height>0||g&&v&&o(v)){t===null&&(t=new Sp(s));const _=p?t.fromEquirectangular(h):t.fromCubemap(h);return e.set(h,_),h.addEventListener("dispose",l),_.texture}else return null}}}return h}function o(h){let f=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&f++;return f===p}function l(h){const f=h.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function Ax(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const o=t(r);return o===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function Cx(s,e,t,r){const o={},l=new WeakMap;function u(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const T in _.attributes)e.remove(_.attributes[T]);for(const T in _.morphAttributes){const w=_.morphAttributes[T];for(let x=0,y=w.length;x<y;x++)e.remove(w[x])}_.removeEventListener("dispose",u),delete o[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function h(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,t.memory.geometries++),_}function f(v){const _=v.attributes;for(const T in _)e.update(_[T],s.ARRAY_BUFFER);const S=v.morphAttributes;for(const T in S){const w=S[T];for(let x=0,y=w.length;x<y;x++)e.update(w[x],s.ARRAY_BUFFER)}}function p(v){const _=[],S=v.index,T=v.attributes.position;let w=0;if(S!==null){const I=S.array;w=S.version;for(let P=0,L=I.length;P<L;P+=3){const k=I[P+0],z=I[P+1],O=I[P+2];_.push(k,z,z,O,O,k)}}else{const I=T.array;w=T.version;for(let P=0,L=I.length/3-1;P<L;P+=3){const k=P+0,z=P+1,O=P+2;_.push(k,z,z,O,O,k)}}const x=new(nm(_)?cm:lm)(_,1);x.version=w;const y=l.get(v);y&&e.remove(y),l.set(v,x)}function g(v){const _=l.get(v);if(_){const S=v.index;S!==null&&_.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:h,update:f,getWireframeAttribute:g}}function bx(s,e,t,r){const o=r.isWebGL2;let l;function u(_){l=_}let h,f;function p(_){h=_.type,f=_.bytesPerElement}function g(_,S){s.drawElements(l,S,h,_*f),t.update(S,l,1)}function v(_,S,T){if(T===0)return;let w,x;if(o)w=s,x="drawElementsInstanced";else if(w=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",w===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}w[x](l,S,h,_*f,T),t.update(S,l,T)}this.setMode=u,this.setIndex=p,this.render=g,this.renderInstances=v}function Px(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,h){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=h*(l/3);break;case s.LINES:t.lines+=h*(l/2);break;case s.LINE_STRIP:t.lines+=h*(l-1);break;case s.LINE_LOOP:t.lines+=h*l;break;case s.POINTS:t.points+=h*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function Lx(s,e){return s[0]-e[0]}function Nx(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Ux(s,e,t){const r={},o=new Float32Array(8),l=new WeakMap,u=new nn,h=[];for(let p=0;p<8;p++)h[p]=[p,0];function f(p,g,v){const _=p.morphTargetInfluences;if(e.isWebGL2===!0){const T=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,w=T!==void 0?T.length:0;let x=l.get(g);if(x===void 0||x.count!==w){let re=function(){Y.dispose(),l.delete(g),g.removeEventListener("dispose",re)};var S=re;x!==void 0&&x.texture.dispose();const P=g.morphAttributes.position!==void 0,L=g.morphAttributes.normal!==void 0,k=g.morphAttributes.color!==void 0,z=g.morphAttributes.position||[],O=g.morphAttributes.normal||[],ae=g.morphAttributes.color||[];let C=0;P===!0&&(C=1),L===!0&&(C=2),k===!0&&(C=3);let D=g.attributes.position.count*C,fe=1;D>e.maxTextureSize&&(fe=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const pe=new Float32Array(D*fe*4*w),Y=new sm(pe,D,fe,w);Y.type=ar,Y.needsUpdate=!0;const ne=C*4;for(let he=0;he<w;he++){const J=z[he],G=O[he],te=ae[he],W=D*fe*4*he;for(let R=0;R<J.count;R++){const F=R*ne;P===!0&&(u.fromBufferAttribute(J,R),pe[W+F+0]=u.x,pe[W+F+1]=u.y,pe[W+F+2]=u.z,pe[W+F+3]=0),L===!0&&(u.fromBufferAttribute(G,R),pe[W+F+4]=u.x,pe[W+F+5]=u.y,pe[W+F+6]=u.z,pe[W+F+7]=0),k===!0&&(u.fromBufferAttribute(te,R),pe[W+F+8]=u.x,pe[W+F+9]=u.y,pe[W+F+10]=u.z,pe[W+F+11]=te.itemSize===4?u.w:1)}}x={count:w,texture:Y,size:new yt(D,fe)},l.set(g,x),g.addEventListener("dispose",re)}let y=0;for(let P=0;P<_.length;P++)y+=_[P];const I=g.morphTargetsRelative?1:1-y;v.getUniforms().setValue(s,"morphTargetBaseInfluence",I),v.getUniforms().setValue(s,"morphTargetInfluences",_),v.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),v.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const T=_===void 0?0:_.length;let w=r[g.id];if(w===void 0||w.length!==T){w=[];for(let L=0;L<T;L++)w[L]=[L,0];r[g.id]=w}for(let L=0;L<T;L++){const k=w[L];k[0]=L,k[1]=_[L]}w.sort(Nx);for(let L=0;L<8;L++)L<T&&w[L][1]?(h[L][0]=w[L][0],h[L][1]=w[L][1]):(h[L][0]=Number.MAX_SAFE_INTEGER,h[L][1]=0);h.sort(Lx);const x=g.morphAttributes.position,y=g.morphAttributes.normal;let I=0;for(let L=0;L<8;L++){const k=h[L],z=k[0],O=k[1];z!==Number.MAX_SAFE_INTEGER&&O?(x&&g.getAttribute("morphTarget"+L)!==x[z]&&g.setAttribute("morphTarget"+L,x[z]),y&&g.getAttribute("morphNormal"+L)!==y[z]&&g.setAttribute("morphNormal"+L,y[z]),o[L]=O,I+=O):(x&&g.hasAttribute("morphTarget"+L)===!0&&g.deleteAttribute("morphTarget"+L),y&&g.hasAttribute("morphNormal"+L)===!0&&g.deleteAttribute("morphNormal"+L),o[L]=0)}const P=g.morphTargetsRelative?1:1-I;v.getUniforms().setValue(s,"morphTargetBaseInfluence",P),v.getUniforms().setValue(s,"morphTargetInfluences",o)}}return{update:f}}function Dx(s,e,t,r){let o=new WeakMap;function l(f){const p=r.render.frame,g=f.geometry,v=e.get(f,g);if(o.get(v)!==p&&(e.update(v),o.set(v,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),o.get(f)!==p&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const _=f.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return v}function u(){o=new WeakMap}function h(f){const p=f.target;p.removeEventListener("dispose",h),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}const gm=new Tn,vm=new sm,_m=new xv,ym=new dm,wp=[],Rp=[],Ap=new Float32Array(16),Cp=new Float32Array(9),bp=new Float32Array(4);function Is(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=wp[o];if(l===void 0&&(l=new Float32Array(o),wp[o]=l),e!==0){r.toArray(l,0);for(let u=1,h=0;u!==e;++u)h+=t,s[u].toArray(l,h)}return l}function qt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Yt(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function ll(s,e){let t=Rp[e];t===void 0&&(t=new Int32Array(e),Rp[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function Ix(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Fx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2fv(this.addr,e),Yt(t,e)}}function kx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;s.uniform3fv(this.addr,e),Yt(t,e)}}function Ox(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4fv(this.addr,e),Yt(t,e)}}function Bx(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,r))return;bp.set(r),s.uniformMatrix2fv(this.addr,!1,bp),Yt(t,r)}}function zx(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,r))return;Cp.set(r),s.uniformMatrix3fv(this.addr,!1,Cp),Yt(t,r)}}function Hx(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,r))return;Ap.set(r),s.uniformMatrix4fv(this.addr,!1,Ap),Yt(t,r)}}function Vx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Gx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2iv(this.addr,e),Yt(t,e)}}function Wx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;s.uniform3iv(this.addr,e),Yt(t,e)}}function jx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4iv(this.addr,e),Yt(t,e)}}function Xx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function qx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2uiv(this.addr,e),Yt(t,e)}}function Yx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;s.uniform3uiv(this.addr,e),Yt(t,e)}}function $x(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4uiv(this.addr,e),Yt(t,e)}}function Kx(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2D(e||gm,o)}function Qx(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||_m,o)}function Zx(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||ym,o)}function Jx(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||vm,o)}function eS(s){switch(s){case 5126:return Ix;case 35664:return Fx;case 35665:return kx;case 35666:return Ox;case 35674:return Bx;case 35675:return zx;case 35676:return Hx;case 5124:case 35670:return Vx;case 35667:case 35671:return Gx;case 35668:case 35672:return Wx;case 35669:case 35673:return jx;case 5125:return Xx;case 36294:return qx;case 36295:return Yx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return Kx;case 35679:case 36299:case 36307:return Qx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return Jx}}function tS(s,e){s.uniform1fv(this.addr,e)}function nS(s,e){const t=Is(e,this.size,2);s.uniform2fv(this.addr,t)}function iS(s,e){const t=Is(e,this.size,3);s.uniform3fv(this.addr,t)}function rS(s,e){const t=Is(e,this.size,4);s.uniform4fv(this.addr,t)}function sS(s,e){const t=Is(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function aS(s,e){const t=Is(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function oS(s,e){const t=Is(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function lS(s,e){s.uniform1iv(this.addr,e)}function cS(s,e){s.uniform2iv(this.addr,e)}function uS(s,e){s.uniform3iv(this.addr,e)}function hS(s,e){s.uniform4iv(this.addr,e)}function dS(s,e){s.uniform1uiv(this.addr,e)}function fS(s,e){s.uniform2uiv(this.addr,e)}function pS(s,e){s.uniform3uiv(this.addr,e)}function mS(s,e){s.uniform4uiv(this.addr,e)}function gS(s,e,t){const r=this.cache,o=e.length,l=ll(t,o);qt(r,l)||(s.uniform1iv(this.addr,l),Yt(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||gm,l[u])}function vS(s,e,t){const r=this.cache,o=e.length,l=ll(t,o);qt(r,l)||(s.uniform1iv(this.addr,l),Yt(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||_m,l[u])}function _S(s,e,t){const r=this.cache,o=e.length,l=ll(t,o);qt(r,l)||(s.uniform1iv(this.addr,l),Yt(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||ym,l[u])}function yS(s,e,t){const r=this.cache,o=e.length,l=ll(t,o);qt(r,l)||(s.uniform1iv(this.addr,l),Yt(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||vm,l[u])}function xS(s){switch(s){case 5126:return tS;case 35664:return nS;case 35665:return iS;case 35666:return rS;case 35674:return sS;case 35675:return aS;case 35676:return oS;case 5124:case 35670:return lS;case 35667:case 35671:return cS;case 35668:case 35672:return uS;case 35669:case 35673:return hS;case 5125:return dS;case 36294:return fS;case 36295:return pS;case 36296:return mS;case 35678:case 36198:case 36298:case 36306:case 35682:return gS;case 35679:case 36299:case 36307:return vS;case 35680:case 36300:case 36308:case 36293:return _S;case 36289:case 36303:case 36311:case 36292:return yS}}class SS{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.setValue=eS(t.type)}}class MS{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.size=t.size,this.setValue=xS(t.type)}}class ES{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const h=o[l];h.setValue(e,t[h.id],r)}}}const wu=/(\w+)(\])?(\[|\.)?/g;function Pp(s,e){s.seq.push(e),s.map[e.id]=e}function TS(s,e,t){const r=s.name,o=r.length;for(wu.lastIndex=0;;){const l=wu.exec(r),u=wu.lastIndex;let h=l[1];const f=l[2]==="]",p=l[3];if(f&&(h=h|0),p===void 0||p==="["&&u+2===o){Pp(t,p===void 0?new SS(h,s,e):new MS(h,s,e));break}else{let v=t.map[h];v===void 0&&(v=new ES(h),Pp(t,v)),t=v}}}class tl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);TS(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const h=t[l],f=r[h.id];f.needsUpdate!==!1&&h.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Lp(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}let wS=0;function RS(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return r.join(`
`)}function AS(s){switch(s){case fi:return["Linear","( value )"];case at:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function Np(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+RS(s.getShaderSource(e),u)}else return o}function CS(s,e){const t=AS(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function bS(s,e){let t;switch(e){case k0:t="Linear";break;case O0:t="Reinhard";break;case B0:t="OptimizedCineon";break;case z0:t="ACESFilmic";break;case H0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function PS(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sa).join(`
`)}function LS(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function NS(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let h=1;l.type===s.FLOAT_MAT2&&(h=2),l.type===s.FLOAT_MAT3&&(h=3),l.type===s.FLOAT_MAT4&&(h=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:h}}return t}function Sa(s){return s!==""}function Up(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const US=/^[ \t]*#include +<([\w\d./]+)>/gm;function Iu(s){return s.replace(US,IS)}const DS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function IS(s,e){let t=st[e];if(t===void 0){const r=DS.get(e);if(r!==void 0)t=st[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Iu(t)}const FS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ip(s){return s.replace(FS,kS)}function kS(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Fp(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function OS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===m0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function BS(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ps:case Ls:e="ENVMAP_TYPE_CUBE";break;case rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function HS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xp:e="ENVMAP_BLENDING_MULTIPLY";break;case I0:e="ENVMAP_BLENDING_MIX";break;case F0:e="ENVMAP_BLENDING_ADD";break}return e}function VS(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function GS(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,h=t.fragmentShader;const f=OS(t),p=BS(t),g=zS(t),v=HS(t),_=VS(t),S=t.isWebGL2?"":PS(t),T=LS(l),w=o.createProgram();let x,y,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Sa).join(`
`),x.length>0&&(x+=`
`),y=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Sa).join(`
`),y.length>0&&(y+=`
`)):(x=[Fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),y=[S,Fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?st.tonemapping_pars_fragment:"",t.toneMapping!==Di?bS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,CS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sa).join(`
`)),u=Iu(u),u=Up(u,t),u=Dp(u,t),h=Iu(h),h=Up(h,t),h=Dp(h,t),u=Ip(u),h=Ip(h),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=I+x+u,L=I+y+h,k=Lp(o,o.VERTEX_SHADER,P),z=Lp(o,o.FRAGMENT_SHADER,L);if(o.attachShader(w,k),o.attachShader(w,z),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w),s.debug.checkShaderErrors){const C=o.getProgramInfoLog(w).trim(),D=o.getShaderInfoLog(k).trim(),fe=o.getShaderInfoLog(z).trim();let pe=!0,Y=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(pe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,k,z);else{const ne=Np(o,k,"vertex"),re=Np(o,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Program Info Log: `+C+`
`+ne+`
`+re)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(D===""||fe==="")&&(Y=!1);Y&&(this.diagnostics={runnable:pe,programLog:C,vertexShader:{log:D,prefix:x},fragmentShader:{log:fe,prefix:y}})}o.deleteShader(k),o.deleteShader(z);let O;this.getUniforms=function(){return O===void 0&&(O=new tl(o,w)),O};let ae;return this.getAttributes=function(){return ae===void 0&&(ae=NS(o,w)),ae},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wS++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=k,this.fragmentShader=z,this}let WS=0;class jS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new XS(e),t.set(e,r)),r}}class XS{constructor(e){this.id=WS++,this.code=e,this.usedTimes=0}}function qS(s,e,t,r,o,l,u){const h=new am,f=new jS,p=[],g=o.isWebGL2,v=o.logarithmicDepthBuffer,_=o.vertexTextures;let S=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return C===0?"uv":`uv${C}`}function x(C,D,fe,pe,Y){const ne=pe.fog,re=Y.geometry,he=C.isMeshStandardMaterial?pe.environment:null,J=(C.isMeshStandardMaterial?t:e).get(C.envMap||he),G=J&&J.mapping===rl?J.image.height:null,te=T[C.type];C.precision!==null&&(S=o.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const W=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,R=W!==void 0?W.length:0;let F=0;re.morphAttributes.position!==void 0&&(F=1),re.morphAttributes.normal!==void 0&&(F=2),re.morphAttributes.color!==void 0&&(F=3);let Q,de,ge,Me;if(te){const wn=hi[te];Q=wn.vertexShader,de=wn.fragmentShader}else Q=C.vertexShader,de=C.fragmentShader,f.update(C),ge=f.getVertexShaderID(C),Me=f.getFragmentShaderID(C);const Le=s.getRenderTarget(),we=Y.isInstancedMesh===!0,Ve=!!C.map,mt=!!C.matcap,tt=!!J,$=!!C.aoMap,Pt=!!C.lightMap,je=!!C.bumpMap,Je=!!C.normalMap,$e=!!C.displacementMap,vt=!!C.emissiveMap,rt=!!C.metalnessMap,et=!!C.roughnessMap,ht=C.anisotropy>0,xt=C.clearcoat>0,Dt=C.iridescence>0,N=C.sheen>0,E=C.transmission>0,se=ht&&!!C.anisotropyMap,ue=xt&&!!C.clearcoatMap,ye=xt&&!!C.clearcoatNormalMap,Te=xt&&!!C.clearcoatRoughnessMap,Be=Dt&&!!C.iridescenceMap,Ee=Dt&&!!C.iridescenceThicknessMap,oe=N&&!!C.sheenColorMap,Ge=N&&!!C.sheenRoughnessMap,He=!!C.specularMap,We=!!C.specularColorMap,ke=!!C.specularIntensityMap,De=E&&!!C.transmissionMap,it=E&&!!C.thicknessMap,gt=!!C.gradientMap,H=!!C.alphaMap,Re=C.alphaTest>0,ee=!!C.alphaHash,Se=!!C.extensions,Ce=!!re.attributes.uv1,dt=!!re.attributes.uv2,St=!!re.attributes.uv3;return{isWebGL2:g,shaderID:te,shaderType:C.type,shaderName:C.name,vertexShader:Q,fragmentShader:de,defines:C.defines,customVertexShaderID:ge,customFragmentShaderID:Me,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,instancing:we,instancingColor:we&&Y.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:Le===null?s.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:fi,map:Ve,matcap:mt,envMap:tt,envMapMode:tt&&J.mapping,envMapCubeUVHeight:G,aoMap:$,lightMap:Pt,bumpMap:je,normalMap:Je,displacementMap:_&&$e,emissiveMap:vt,normalMapObjectSpace:Je&&C.normalMapType===tv,normalMapTangentSpace:Je&&C.normalMapType===ev,metalnessMap:rt,roughnessMap:et,anisotropy:ht,anisotropyMap:se,clearcoat:xt,clearcoatMap:ue,clearcoatNormalMap:ye,clearcoatRoughnessMap:Te,iridescence:Dt,iridescenceMap:Be,iridescenceThicknessMap:Ee,sheen:N,sheenColorMap:oe,sheenRoughnessMap:Ge,specularMap:He,specularColorMap:We,specularIntensityMap:ke,transmission:E,transmissionMap:De,thicknessMap:it,gradientMap:gt,opaque:C.transparent===!1&&C.blending===Cs,alphaMap:H,alphaTest:Re,alphaHash:ee,combine:C.combine,mapUv:Ve&&w(C.map.channel),aoMapUv:$&&w(C.aoMap.channel),lightMapUv:Pt&&w(C.lightMap.channel),bumpMapUv:je&&w(C.bumpMap.channel),normalMapUv:Je&&w(C.normalMap.channel),displacementMapUv:$e&&w(C.displacementMap.channel),emissiveMapUv:vt&&w(C.emissiveMap.channel),metalnessMapUv:rt&&w(C.metalnessMap.channel),roughnessMapUv:et&&w(C.roughnessMap.channel),anisotropyMapUv:se&&w(C.anisotropyMap.channel),clearcoatMapUv:ue&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:ye&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&w(C.sheenRoughnessMap.channel),specularMapUv:He&&w(C.specularMap.channel),specularColorMapUv:We&&w(C.specularColorMap.channel),specularIntensityMapUv:ke&&w(C.specularIntensityMap.channel),transmissionMapUv:De&&w(C.transmissionMap.channel),thicknessMapUv:it&&w(C.thicknessMap.channel),alphaMapUv:H&&w(C.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Je||ht),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:dt,vertexUv3s:St,pointsUvs:Y.isPoints===!0&&!!re.attributes.uv&&(Ve||H),fog:!!ne,useFog:C.fog===!0,fogExp2:ne&&ne.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:Y.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:F,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&fe.length>0,shadowMapType:s.shadowMap.type,toneMapping:C.toneMapped?s.toneMapping:Di,useLegacyLights:s.useLegacyLights,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Li,flipSided:C.side===En,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:Se&&C.extensions.derivatives===!0,extensionFragDepth:Se&&C.extensions.fragDepth===!0,extensionDrawBuffers:Se&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&C.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:g||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||r.has("EXT_shader_texture_lod"),customProgramCacheKey:C.customProgramCacheKey()}}function y(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const fe in C.defines)D.push(fe),D.push(C.defines[fe]);return C.isRawShaderMaterial===!1&&(I(D,C),P(D,C),D.push(s.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function I(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function P(C,D){h.disableAll(),D.isWebGL2&&h.enable(0),D.supportsVertexTextures&&h.enable(1),D.instancing&&h.enable(2),D.instancingColor&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),C.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.skinning&&h.enable(4),D.morphTargets&&h.enable(5),D.morphNormals&&h.enable(6),D.morphColors&&h.enable(7),D.premultipliedAlpha&&h.enable(8),D.shadowMapEnabled&&h.enable(9),D.useLegacyLights&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),C.push(h.mask)}function L(C){const D=T[C.type];let fe;if(D){const pe=hi[D];fe=Uv.clone(pe.uniforms)}else fe=C.uniforms;return fe}function k(C,D){let fe;for(let pe=0,Y=p.length;pe<Y;pe++){const ne=p[pe];if(ne.cacheKey===D){fe=ne,++fe.usedTimes;break}}return fe===void 0&&(fe=new GS(s,D,C,l),p.push(fe)),fe}function z(C){if(--C.usedTimes===0){const D=p.indexOf(C);p[D]=p[p.length-1],p.pop(),C.destroy()}}function O(C){f.remove(C)}function ae(){f.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:L,acquireProgram:k,releaseProgram:z,releaseShaderCache:O,programs:p,dispose:ae}}function YS(){let s=new WeakMap;function e(l){let u=s.get(l);return u===void 0&&(u={},s.set(l,u)),u}function t(l){s.delete(l)}function r(l,u,h){s.get(l)[u]=h}function o(){s=new WeakMap}return{get:e,remove:t,update:r,dispose:o}}function $S(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function kp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Op(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(v,_,S,T,w,x){let y=s[e];return y===void 0?(y={id:v.id,object:v,geometry:_,material:S,groupOrder:T,renderOrder:v.renderOrder,z:w,group:x},s[e]=y):(y.id=v.id,y.object=v,y.geometry=_,y.material=S,y.groupOrder=T,y.renderOrder=v.renderOrder,y.z=w,y.group=x),e++,y}function h(v,_,S,T,w,x){const y=u(v,_,S,T,w,x);S.transmission>0?r.push(y):S.transparent===!0?o.push(y):t.push(y)}function f(v,_,S,T,w,x){const y=u(v,_,S,T,w,x);S.transmission>0?r.unshift(y):S.transparent===!0?o.unshift(y):t.unshift(y)}function p(v,_){t.length>1&&t.sort(v||$S),r.length>1&&r.sort(_||kp),o.length>1&&o.sort(_||kp)}function g(){for(let v=e,_=s.length;v<_;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:f,finish:g,sort:p}}function KS(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Op,s.set(r,[u])):o>=l.length?(u=new Op,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function QS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new At};break;case"SpotLight":t={position:new ie,direction:new ie,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=t,t}}}function ZS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let JS=0;function eM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function tM(s,e){const t=new QS,r=ZS(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let g=0;g<9;g++)o.probe.push(new ie);const l=new ie,u=new rn,h=new rn;function f(g,v){let _=0,S=0,T=0;for(let fe=0;fe<9;fe++)o.probe[fe].set(0,0,0);let w=0,x=0,y=0,I=0,P=0,L=0,k=0,z=0,O=0,ae=0;g.sort(eM);const C=v===!0?Math.PI:1;for(let fe=0,pe=g.length;fe<pe;fe++){const Y=g[fe],ne=Y.color,re=Y.intensity,he=Y.distance,J=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)_+=ne.r*re*C,S+=ne.g*re*C,T+=ne.b*re*C;else if(Y.isLightProbe)for(let G=0;G<9;G++)o.probe[G].addScaledVector(Y.sh.coefficients[G],re);else if(Y.isDirectionalLight){const G=t.get(Y);if(G.color.copy(Y.color).multiplyScalar(Y.intensity*C),Y.castShadow){const te=Y.shadow,W=r.get(Y);W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,o.directionalShadow[w]=W,o.directionalShadowMap[w]=J,o.directionalShadowMatrix[w]=Y.shadow.matrix,L++}o.directional[w]=G,w++}else if(Y.isSpotLight){const G=t.get(Y);G.position.setFromMatrixPosition(Y.matrixWorld),G.color.copy(ne).multiplyScalar(re*C),G.distance=he,G.coneCos=Math.cos(Y.angle),G.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),G.decay=Y.decay,o.spot[y]=G;const te=Y.shadow;if(Y.map&&(o.spotLightMap[O]=Y.map,O++,te.updateMatrices(Y),Y.castShadow&&ae++),o.spotLightMatrix[y]=te.matrix,Y.castShadow){const W=r.get(Y);W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,o.spotShadow[y]=W,o.spotShadowMap[y]=J,z++}y++}else if(Y.isRectAreaLight){const G=t.get(Y);G.color.copy(ne).multiplyScalar(re),G.halfWidth.set(Y.width*.5,0,0),G.halfHeight.set(0,Y.height*.5,0),o.rectArea[I]=G,I++}else if(Y.isPointLight){const G=t.get(Y);if(G.color.copy(Y.color).multiplyScalar(Y.intensity*C),G.distance=Y.distance,G.decay=Y.decay,Y.castShadow){const te=Y.shadow,W=r.get(Y);W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,W.shadowCameraNear=te.camera.near,W.shadowCameraFar=te.camera.far,o.pointShadow[x]=W,o.pointShadowMap[x]=J,o.pointShadowMatrix[x]=Y.shadow.matrix,k++}o.point[x]=G,x++}else if(Y.isHemisphereLight){const G=t.get(Y);G.skyColor.copy(Y.color).multiplyScalar(re*C),G.groundColor.copy(Y.groundColor).multiplyScalar(re*C),o.hemi[P]=G,P++}}I>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Ae.LTC_FLOAT_1,o.rectAreaLTC2=Ae.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Ae.LTC_HALF_1,o.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=_,o.ambient[1]=S,o.ambient[2]=T;const D=o.hash;(D.directionalLength!==w||D.pointLength!==x||D.spotLength!==y||D.rectAreaLength!==I||D.hemiLength!==P||D.numDirectionalShadows!==L||D.numPointShadows!==k||D.numSpotShadows!==z||D.numSpotMaps!==O)&&(o.directional.length=w,o.spot.length=y,o.rectArea.length=I,o.point.length=x,o.hemi.length=P,o.directionalShadow.length=L,o.directionalShadowMap.length=L,o.pointShadow.length=k,o.pointShadowMap.length=k,o.spotShadow.length=z,o.spotShadowMap.length=z,o.directionalShadowMatrix.length=L,o.pointShadowMatrix.length=k,o.spotLightMatrix.length=z+O-ae,o.spotLightMap.length=O,o.numSpotLightShadowsWithMaps=ae,D.directionalLength=w,D.pointLength=x,D.spotLength=y,D.rectAreaLength=I,D.hemiLength=P,D.numDirectionalShadows=L,D.numPointShadows=k,D.numSpotShadows=z,D.numSpotMaps=O,o.version=JS++)}function p(g,v){let _=0,S=0,T=0,w=0,x=0;const y=v.matrixWorldInverse;for(let I=0,P=g.length;I<P;I++){const L=g[I];if(L.isDirectionalLight){const k=o.directional[_];k.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),k.direction.sub(l),k.direction.transformDirection(y),_++}else if(L.isSpotLight){const k=o.spot[T];k.position.setFromMatrixPosition(L.matrixWorld),k.position.applyMatrix4(y),k.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),k.direction.sub(l),k.direction.transformDirection(y),T++}else if(L.isRectAreaLight){const k=o.rectArea[w];k.position.setFromMatrixPosition(L.matrixWorld),k.position.applyMatrix4(y),h.identity(),u.copy(L.matrixWorld),u.premultiply(y),h.extractRotation(u),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),k.halfWidth.applyMatrix4(h),k.halfHeight.applyMatrix4(h),w++}else if(L.isPointLight){const k=o.point[S];k.position.setFromMatrixPosition(L.matrixWorld),k.position.applyMatrix4(y),S++}else if(L.isHemisphereLight){const k=o.hemi[x];k.direction.setFromMatrixPosition(L.matrixWorld),k.direction.transformDirection(y),x++}}}return{setup:f,setupView:p,state:o}}function Bp(s,e){const t=new tM(s,e),r=[],o=[];function l(){r.length=0,o.length=0}function u(v){r.push(v)}function h(v){o.push(v)}function f(v){t.setup(r,v)}function p(v){t.setupView(r,v)}return{init:l,state:{lightsArray:r,shadowsArray:o,lights:t},setupLights:f,setupLightsView:p,pushLight:u,pushShadow:h}}function nM(s,e){let t=new WeakMap;function r(l,u=0){const h=t.get(l);let f;return h===void 0?(f=new Bp(s,e),t.set(l,[f])):u>=h.length?(f=new Bp(s,e),h.push(f)):f=h[u],f}function o(){t=new WeakMap}return{get:r,dispose:o}}class iM extends al{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rM extends al{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function oM(s,e,t){let r=new fm;const o=new yt,l=new yt,u=new nn,h=new iM({depthPacking:J0}),f=new rM,p={},g=t.maxTextureSize,v={[cr]:En,[En]:cr,[Li]:Li},_=new kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:sM,fragmentShader:aM}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const T=new Or;T.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ui(T,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gp;let y=this.type;this.render=function(k,z,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||k.length===0)return;const ae=s.getRenderTarget(),C=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),fe=s.state;fe.setBlending(or),fe.buffers.color.setClear(1,1,1,1),fe.buffers.depth.setTest(!0),fe.setScissorTest(!1);const pe=y!==Pi&&this.type===Pi,Y=y===Pi&&this.type!==Pi;for(let ne=0,re=k.length;ne<re;ne++){const he=k[ne],J=he.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;o.copy(J.mapSize);const G=J.getFrameExtents();if(o.multiply(G),l.copy(J.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/G.x),o.x=l.x*G.x,J.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/G.y),o.y=l.y*G.y,J.mapSize.y=l.y)),J.map===null||pe===!0||Y===!0){const W=this.type!==Pi?{minFilter:Xt,magFilter:Xt}:{};J.map!==null&&J.map.dispose(),J.map=new Fr(o.x,o.y,W),J.map.texture.name=he.name+".shadowMap",J.camera.updateProjectionMatrix()}s.setRenderTarget(J.map),s.clear();const te=J.getViewportCount();for(let W=0;W<te;W++){const R=J.getViewport(W);u.set(l.x*R.x,l.y*R.y,l.x*R.z,l.y*R.w),fe.viewport(u),J.updateMatrices(he,W),r=J.getFrustum(),L(z,O,J.camera,he,this.type)}J.isPointLightShadow!==!0&&this.type===Pi&&I(J,O),J.needsUpdate=!1}y=this.type,x.needsUpdate=!1,s.setRenderTarget(ae,C,D)};function I(k,z){const O=e.update(w);_.defines.VSM_SAMPLES!==k.blurSamples&&(_.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Fr(o.x,o.y)),_.uniforms.shadow_pass.value=k.map.texture,_.uniforms.resolution.value=k.mapSize,_.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(z,null,O,_,w,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(z,null,O,S,w,null)}function P(k,z,O,ae){let C=null;const D=O.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(D!==void 0)C=D;else if(C=O.isPointLight===!0?f:h,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const fe=C.uuid,pe=z.uuid;let Y=p[fe];Y===void 0&&(Y={},p[fe]=Y);let ne=Y[pe];ne===void 0&&(ne=C.clone(),Y[pe]=ne),C=ne}if(C.visible=z.visible,C.wireframe=z.wireframe,ae===Pi?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:v[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,O.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const fe=s.properties.get(C);fe.light=O}return C}function L(k,z,O,ae,C){if(k.visible===!1)return;if(k.layers.test(z.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&C===Pi)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,k.matrixWorld);const pe=e.update(k),Y=k.material;if(Array.isArray(Y)){const ne=pe.groups;for(let re=0,he=ne.length;re<he;re++){const J=ne[re],G=Y[J.materialIndex];if(G&&G.visible){const te=P(k,G,ae,C);s.renderBufferDirect(O,null,pe,te,k,J)}}}else if(Y.visible){const ne=P(k,Y,ae,C);s.renderBufferDirect(O,null,pe,ne,k,null)}}const fe=k.children;for(let pe=0,Y=fe.length;pe<Y;pe++)L(fe[pe],z,O,ae,C)}}function lM(s,e,t){const r=t.isWebGL2;function o(){let H=!1;const Re=new nn;let ee=null;const Se=new nn(0,0,0,0);return{setMask:function(Ce){ee!==Ce&&!H&&(s.colorMask(Ce,Ce,Ce,Ce),ee=Ce)},setLocked:function(Ce){H=Ce},setClear:function(Ce,dt,St,Ft,wn){wn===!0&&(Ce*=Ft,dt*=Ft,St*=Ft),Re.set(Ce,dt,St,Ft),Se.equals(Re)===!1&&(s.clearColor(Ce,dt,St,Ft),Se.copy(Re))},reset:function(){H=!1,ee=null,Se.set(-1,0,0,0)}}}function l(){let H=!1,Re=null,ee=null,Se=null;return{setTest:function(Ce){Ce?Le(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(Ce){Re!==Ce&&!H&&(s.depthMask(Ce),Re=Ce)},setFunc:function(Ce){if(ee!==Ce){switch(Ce){case C0:s.depthFunc(s.NEVER);break;case b0:s.depthFunc(s.ALWAYS);break;case P0:s.depthFunc(s.LESS);break;case Au:s.depthFunc(s.LEQUAL);break;case L0:s.depthFunc(s.EQUAL);break;case N0:s.depthFunc(s.GEQUAL);break;case U0:s.depthFunc(s.GREATER);break;case D0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ee=Ce}},setLocked:function(Ce){H=Ce},setClear:function(Ce){Se!==Ce&&(s.clearDepth(Ce),Se=Ce)},reset:function(){H=!1,Re=null,ee=null,Se=null}}}function u(){let H=!1,Re=null,ee=null,Se=null,Ce=null,dt=null,St=null,Ft=null,wn=null;return{setTest:function(Mt){H||(Mt?Le(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(Mt){Re!==Mt&&!H&&(s.stencilMask(Mt),Re=Mt)},setFunc:function(Mt,Rn,kt){(ee!==Mt||Se!==Rn||Ce!==kt)&&(s.stencilFunc(Mt,Rn,kt),ee=Mt,Se=Rn,Ce=kt)},setOp:function(Mt,Rn,kt){(dt!==Mt||St!==Rn||Ft!==kt)&&(s.stencilOp(Mt,Rn,kt),dt=Mt,St=Rn,Ft=kt)},setLocked:function(Mt){H=Mt},setClear:function(Mt){wn!==Mt&&(s.clearStencil(Mt),wn=Mt)},reset:function(){H=!1,Re=null,ee=null,Se=null,Ce=null,dt=null,St=null,Ft=null,wn=null}}}const h=new o,f=new l,p=new u,g=new WeakMap,v=new WeakMap;let _={},S={},T=new WeakMap,w=[],x=null,y=!1,I=null,P=null,L=null,k=null,z=null,O=null,ae=null,C=!1,D=null,fe=null,pe=null,Y=null,ne=null;const re=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let he=!1,J=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),he=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),he=J>=2);let te=null,W={};const R=s.getParameter(s.SCISSOR_BOX),F=s.getParameter(s.VIEWPORT),Q=new nn().fromArray(R),de=new nn().fromArray(F);function ge(H,Re,ee,Se){const Ce=new Uint8Array(4),dt=s.createTexture();s.bindTexture(H,dt),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let St=0;St<ee;St++)r&&(H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY)?s.texImage3D(Re,0,s.RGBA,1,1,Se,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(Re+St,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return dt}const Me={};Me[s.TEXTURE_2D]=ge(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Me[s.TEXTURE_2D_ARRAY]=ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),h.setClear(0,0,0,1),f.setClear(1),p.setClear(0),Le(s.DEPTH_TEST),f.setFunc(Au),$e(!1),vt(Tf),Le(s.CULL_FACE),je(or);function Le(H){_[H]!==!0&&(s.enable(H),_[H]=!0)}function we(H){_[H]!==!1&&(s.disable(H),_[H]=!1)}function Ve(H,Re){return S[H]!==Re?(s.bindFramebuffer(H,Re),S[H]=Re,r&&(H===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=Re),H===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=Re)),!0):!1}function mt(H,Re){let ee=w,Se=!1;if(H)if(ee=T.get(Re),ee===void 0&&(ee=[],T.set(Re,ee)),H.isWebGLMultipleRenderTargets){const Ce=H.texture;if(ee.length!==Ce.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,St=Ce.length;dt<St;dt++)ee[dt]=s.COLOR_ATTACHMENT0+dt;ee.length=Ce.length,Se=!0}}else ee[0]!==s.COLOR_ATTACHMENT0&&(ee[0]=s.COLOR_ATTACHMENT0,Se=!0);else ee[0]!==s.BACK&&(ee[0]=s.BACK,Se=!0);Se&&(t.isWebGL2?s.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function tt(H){return x!==H?(s.useProgram(H),x=H,!0):!1}const $={[Rs]:s.FUNC_ADD,[v0]:s.FUNC_SUBTRACT,[_0]:s.FUNC_REVERSE_SUBTRACT};if(r)$[Cf]=s.MIN,$[bf]=s.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&($[Cf]=H.MIN_EXT,$[bf]=H.MAX_EXT)}const Pt={[y0]:s.ZERO,[x0]:s.ONE,[S0]:s.SRC_COLOR,[Wp]:s.SRC_ALPHA,[A0]:s.SRC_ALPHA_SATURATE,[w0]:s.DST_COLOR,[E0]:s.DST_ALPHA,[M0]:s.ONE_MINUS_SRC_COLOR,[jp]:s.ONE_MINUS_SRC_ALPHA,[R0]:s.ONE_MINUS_DST_COLOR,[T0]:s.ONE_MINUS_DST_ALPHA};function je(H,Re,ee,Se,Ce,dt,St,Ft){if(H===or){y===!0&&(we(s.BLEND),y=!1);return}if(y===!1&&(Le(s.BLEND),y=!0),H!==g0){if(H!==I||Ft!==C){if((P!==Rs||z!==Rs)&&(s.blendEquation(s.FUNC_ADD),P=Rs,z=Rs),Ft)switch(H){case Cs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wf:s.blendFunc(s.ONE,s.ONE);break;case Rf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Af:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wf:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Rf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Af:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}L=null,k=null,O=null,ae=null,I=H,C=Ft}return}Ce=Ce||Re,dt=dt||ee,St=St||Se,(Re!==P||Ce!==z)&&(s.blendEquationSeparate($[Re],$[Ce]),P=Re,z=Ce),(ee!==L||Se!==k||dt!==O||St!==ae)&&(s.blendFuncSeparate(Pt[ee],Pt[Se],Pt[dt],Pt[St]),L=ee,k=Se,O=dt,ae=St),I=H,C=!1}function Je(H,Re){H.side===Li?we(s.CULL_FACE):Le(s.CULL_FACE);let ee=H.side===En;Re&&(ee=!ee),$e(ee),H.blending===Cs&&H.transparent===!1?je(or):je(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),f.setFunc(H.depthFunc),f.setTest(H.depthTest),f.setMask(H.depthWrite),h.setMask(H.colorWrite);const Se=H.stencilWrite;p.setTest(Se),Se&&(p.setMask(H.stencilWriteMask),p.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),p.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),et(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Le(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function $e(H){D!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),D=H)}function vt(H){H!==f0?(Le(s.CULL_FACE),H!==fe&&(H===Tf?s.cullFace(s.BACK):H===p0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),fe=H}function rt(H){H!==pe&&(he&&s.lineWidth(H),pe=H)}function et(H,Re,ee){H?(Le(s.POLYGON_OFFSET_FILL),(Y!==Re||ne!==ee)&&(s.polygonOffset(Re,ee),Y=Re,ne=ee)):we(s.POLYGON_OFFSET_FILL)}function ht(H){H?Le(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function xt(H){H===void 0&&(H=s.TEXTURE0+re-1),te!==H&&(s.activeTexture(H),te=H)}function Dt(H,Re,ee){ee===void 0&&(te===null?ee=s.TEXTURE0+re-1:ee=te);let Se=W[ee];Se===void 0&&(Se={type:void 0,texture:void 0},W[ee]=Se),(Se.type!==H||Se.texture!==Re)&&(te!==ee&&(s.activeTexture(ee),te=ee),s.bindTexture(H,Re||Me[H]),Se.type=H,Se.texture=Re)}function N(){const H=W[te];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function se(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Te(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Be(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function oe(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ge(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function He(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function We(H){Q.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Q.copy(H))}function ke(H){de.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),de.copy(H))}function De(H,Re){let ee=v.get(Re);ee===void 0&&(ee=new WeakMap,v.set(Re,ee));let Se=ee.get(H);Se===void 0&&(Se=s.getUniformBlockIndex(Re,H.name),ee.set(H,Se))}function it(H,Re){const Se=v.get(Re).get(H);g.get(Re)!==Se&&(s.uniformBlockBinding(Re,Se,H.__bindingPointIndex),g.set(Re,Se))}function gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),r===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},te=null,W={},S={},T=new WeakMap,w=[],x=null,y=!1,I=null,P=null,L=null,k=null,z=null,O=null,ae=null,C=!1,D=null,fe=null,pe=null,Y=null,ne=null,Q.set(0,0,s.canvas.width,s.canvas.height),de.set(0,0,s.canvas.width,s.canvas.height),h.reset(),f.reset(),p.reset()}return{buffers:{color:h,depth:f,stencil:p},enable:Le,disable:we,bindFramebuffer:Ve,drawBuffers:mt,useProgram:tt,setBlending:je,setMaterial:Je,setFlipSided:$e,setCullFace:vt,setLineWidth:rt,setPolygonOffset:et,setScissorTest:ht,activeTexture:xt,bindTexture:Dt,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:se,texImage2D:Ge,texImage3D:He,updateUBOMapping:De,uniformBlockBinding:it,texStorage2D:Ee,texStorage3D:oe,texSubImage2D:ue,texSubImage3D:ye,compressedTexSubImage2D:Te,compressedTexSubImage3D:Be,scissor:We,viewport:ke,reset:gt}}function cM(s,e,t,r,o,l,u){const h=o.isWebGL2,f=o.maxTextures,p=o.maxCubemapSize,g=o.maxTextureSize,v=o.maxSamples,_=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),T=new WeakMap;let w;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(N,E){return y?new OffscreenCanvas(N,E):il("canvas")}function P(N,E,se,ue){let ye=1;if((N.width>ue||N.height>ue)&&(ye=ue/Math.max(N.width,N.height)),ye<1||E===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const Te=E?Du:Math.floor,Be=Te(ye*N.width),Ee=Te(ye*N.height);w===void 0&&(w=I(Be,Ee));const oe=se?I(Be,Ee):w;return oe.width=Be,oe.height=Ee,oe.getContext("2d").drawImage(N,0,0,Be,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+Be+"x"+Ee+")."),oe}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function L(N){return np(N.width)&&np(N.height)}function k(N){return h?!1:N.wrapS!==ri||N.wrapT!==ri||N.minFilter!==Xt&&N.minFilter!==Gn}function z(N,E){return N.generateMipmaps&&E&&N.minFilter!==Xt&&N.minFilter!==Gn}function O(N){s.generateMipmap(N)}function ae(N,E,se,ue,ye=!1){if(h===!1)return E;if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Te=E;return E===s.RED&&(se===s.FLOAT&&(Te=s.R32F),se===s.HALF_FLOAT&&(Te=s.R16F),se===s.UNSIGNED_BYTE&&(Te=s.R8)),E===s.RG&&(se===s.FLOAT&&(Te=s.RG32F),se===s.HALF_FLOAT&&(Te=s.RG16F),se===s.UNSIGNED_BYTE&&(Te=s.RG8)),E===s.RGBA&&(se===s.FLOAT&&(Te=s.RGBA32F),se===s.HALF_FLOAT&&(Te=s.RGBA16F),se===s.UNSIGNED_BYTE&&(Te=ue===at&&ye===!1?s.SRGB8_ALPHA8:s.RGBA8),se===s.UNSIGNED_SHORT_4_4_4_4&&(Te=s.RGBA4),se===s.UNSIGNED_SHORT_5_5_5_1&&(Te=s.RGB5_A1)),(Te===s.R16F||Te===s.R32F||Te===s.RG16F||Te===s.RG32F||Te===s.RGBA16F||Te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Te}function C(N,E,se){return z(N,se)===!0||N.isFramebufferTexture&&N.minFilter!==Xt&&N.minFilter!==Gn?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function D(N){return N===Xt||N===Pf||N===Qc?s.NEAREST:s.LINEAR}function fe(N){const E=N.target;E.removeEventListener("dispose",fe),Y(E),E.isVideoTexture&&T.delete(E)}function pe(N){const E=N.target;E.removeEventListener("dispose",pe),re(E)}function Y(N){const E=r.get(N);if(E.__webglInit===void 0)return;const se=N.source,ue=x.get(se);if(ue){const ye=ue[E.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&ne(N),Object.keys(ue).length===0&&x.delete(se)}r.remove(N)}function ne(N){const E=r.get(N);s.deleteTexture(E.__webglTexture);const se=N.source,ue=x.get(se);delete ue[E.__cacheKey],u.memory.textures--}function re(N){const E=N.texture,se=r.get(N),ue=r.get(E);if(ue.__webglTexture!==void 0&&(s.deleteTexture(ue.__webglTexture),u.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++)s.deleteFramebuffer(se.__webglFramebuffer[ye]),se.__webglDepthbuffer&&s.deleteRenderbuffer(se.__webglDepthbuffer[ye]);else{if(s.deleteFramebuffer(se.__webglFramebuffer),se.__webglDepthbuffer&&s.deleteRenderbuffer(se.__webglDepthbuffer),se.__webglMultisampledFramebuffer&&s.deleteFramebuffer(se.__webglMultisampledFramebuffer),se.__webglColorRenderbuffer)for(let ye=0;ye<se.__webglColorRenderbuffer.length;ye++)se.__webglColorRenderbuffer[ye]&&s.deleteRenderbuffer(se.__webglColorRenderbuffer[ye]);se.__webglDepthRenderbuffer&&s.deleteRenderbuffer(se.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let ye=0,Te=E.length;ye<Te;ye++){const Be=r.get(E[ye]);Be.__webglTexture&&(s.deleteTexture(Be.__webglTexture),u.memory.textures--),r.remove(E[ye])}r.remove(E),r.remove(N)}let he=0;function J(){he=0}function G(){const N=he;return N>=f&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+f),he+=1,N}function te(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function W(N,E){const se=r.get(N);if(N.isVideoTexture&&xt(N),N.isRenderTargetTexture===!1&&N.version>0&&se.__version!==N.version){const ue=N.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(se,N,E);return}}t.bindTexture(s.TEXTURE_2D,se.__webglTexture,s.TEXTURE0+E)}function R(N,E){const se=r.get(N);if(N.version>0&&se.__version!==N.version){Ve(se,N,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,se.__webglTexture,s.TEXTURE0+E)}function F(N,E){const se=r.get(N);if(N.version>0&&se.__version!==N.version){Ve(se,N,E);return}t.bindTexture(s.TEXTURE_3D,se.__webglTexture,s.TEXTURE0+E)}function Q(N,E){const se=r.get(N);if(N.version>0&&se.__version!==N.version){mt(se,N,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture,s.TEXTURE0+E)}const de={[Pu]:s.REPEAT,[ri]:s.CLAMP_TO_EDGE,[Lu]:s.MIRRORED_REPEAT},ge={[Xt]:s.NEAREST,[Pf]:s.NEAREST_MIPMAP_NEAREST,[Qc]:s.NEAREST_MIPMAP_LINEAR,[Gn]:s.LINEAR,[V0]:s.LINEAR_MIPMAP_NEAREST,[Ea]:s.LINEAR_MIPMAP_LINEAR},Me={[iv]:s.NEVER,[uv]:s.ALWAYS,[rv]:s.LESS,[av]:s.LEQUAL,[sv]:s.EQUAL,[cv]:s.GEQUAL,[ov]:s.GREATER,[lv]:s.NOTEQUAL};function Le(N,E,se){if(se?(s.texParameteri(N,s.TEXTURE_WRAP_S,de[E.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,de[E.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,de[E.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,ge[E.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,ge[E.minFilter])):(s.texParameteri(N,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(N,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==ri||E.wrapT!==ri)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(N,s.TEXTURE_MAG_FILTER,D(E.magFilter)),s.texParameteri(N,s.TEXTURE_MIN_FILTER,D(E.minFilter)),E.minFilter!==Xt&&E.minFilter!==Gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,Me[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Xt||E.minFilter!==Qc&&E.minFilter!==Ea||E.type===ar&&e.has("OES_texture_float_linear")===!1||h===!1&&E.type===Ta&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||r.get(E).__currentAnisotropy)&&(s.texParameterf(N,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy)}}function we(N,E){let se=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",fe));const ue=E.source;let ye=x.get(ue);ye===void 0&&(ye={},x.set(ue,ye));const Te=te(E);if(Te!==N.__cacheKey){ye[Te]===void 0&&(ye[Te]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,se=!0),ye[Te].usedTimes++;const Be=ye[N.__cacheKey];Be!==void 0&&(ye[N.__cacheKey].usedTimes--,Be.usedTimes===0&&ne(E)),N.__cacheKey=Te,N.__webglTexture=ye[Te].texture}return se}function Ve(N,E,se){let ue=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ue=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ue=s.TEXTURE_3D);const ye=we(N,E),Te=E.source;t.bindTexture(ue,N.__webglTexture,s.TEXTURE0+se);const Be=r.get(Te);if(Te.version!==Be.__version||ye===!0){t.activeTexture(s.TEXTURE0+se),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Ee=k(E)&&L(E.image)===!1;let oe=P(E.image,Ee,!1,g);oe=Dt(E,oe);const Ge=L(oe)||h,He=l.convert(E.format,E.colorSpace);let We=l.convert(E.type),ke=ae(E.internalFormat,He,We,E.colorSpace);Le(ue,E,Ge);let De;const it=E.mipmaps,gt=h&&E.isVideoTexture!==!0,H=Be.__version===void 0||ye===!0,Re=C(E,oe,Ge);if(E.isDepthTexture)ke=s.DEPTH_COMPONENT,h?E.type===ar?ke=s.DEPTH_COMPONENT32F:E.type===sr?ke=s.DEPTH_COMPONENT24:E.type===Lr?ke=s.DEPTH24_STENCIL8:ke=s.DEPTH_COMPONENT16:E.type===ar&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Nr&&ke===s.DEPTH_COMPONENT&&E.type!==Hu&&E.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=sr,We=l.convert(E.type)),E.format===Ns&&ke===s.DEPTH_COMPONENT&&(ke=s.DEPTH_STENCIL,E.type!==Lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Lr,We=l.convert(E.type))),H&&(gt?t.texStorage2D(s.TEXTURE_2D,1,ke,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,ke,oe.width,oe.height,0,He,We,null));else if(E.isDataTexture)if(it.length>0&&Ge){gt&&H&&t.texStorage2D(s.TEXTURE_2D,Re,ke,it[0].width,it[0].height);for(let ee=0,Se=it.length;ee<Se;ee++)De=it[ee],gt?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,De.width,De.height,He,We,De.data):t.texImage2D(s.TEXTURE_2D,ee,ke,De.width,De.height,0,He,We,De.data);E.generateMipmaps=!1}else gt?(H&&t.texStorage2D(s.TEXTURE_2D,Re,ke,oe.width,oe.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe.width,oe.height,He,We,oe.data)):t.texImage2D(s.TEXTURE_2D,0,ke,oe.width,oe.height,0,He,We,oe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){gt&&H&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,ke,it[0].width,it[0].height,oe.depth);for(let ee=0,Se=it.length;ee<Se;ee++)De=it[ee],E.format!==Wn?He!==null?gt?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,De.width,De.height,oe.depth,He,De.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,ke,De.width,De.height,oe.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,De.width,De.height,oe.depth,He,We,De.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,ke,De.width,De.height,oe.depth,0,He,We,De.data)}else{gt&&H&&t.texStorage2D(s.TEXTURE_2D,Re,ke,it[0].width,it[0].height);for(let ee=0,Se=it.length;ee<Se;ee++)De=it[ee],E.format!==Wn?He!==null?gt?t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,De.width,De.height,He,De.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,ke,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,De.width,De.height,He,We,De.data):t.texImage2D(s.TEXTURE_2D,ee,ke,De.width,De.height,0,He,We,De.data)}else if(E.isDataArrayTexture)gt?(H&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,ke,oe.width,oe.height,oe.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,He,We,oe.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,oe.width,oe.height,oe.depth,0,He,We,oe.data);else if(E.isData3DTexture)gt?(H&&t.texStorage3D(s.TEXTURE_3D,Re,ke,oe.width,oe.height,oe.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,He,We,oe.data)):t.texImage3D(s.TEXTURE_3D,0,ke,oe.width,oe.height,oe.depth,0,He,We,oe.data);else if(E.isFramebufferTexture){if(H)if(gt)t.texStorage2D(s.TEXTURE_2D,Re,ke,oe.width,oe.height);else{let ee=oe.width,Se=oe.height;for(let Ce=0;Ce<Re;Ce++)t.texImage2D(s.TEXTURE_2D,Ce,ke,ee,Se,0,He,We,null),ee>>=1,Se>>=1}}else if(it.length>0&&Ge){gt&&H&&t.texStorage2D(s.TEXTURE_2D,Re,ke,it[0].width,it[0].height);for(let ee=0,Se=it.length;ee<Se;ee++)De=it[ee],gt?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,He,We,De):t.texImage2D(s.TEXTURE_2D,ee,ke,He,We,De);E.generateMipmaps=!1}else gt?(H&&t.texStorage2D(s.TEXTURE_2D,Re,ke,oe.width,oe.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,He,We,oe)):t.texImage2D(s.TEXTURE_2D,0,ke,He,We,oe);z(E,Ge)&&O(ue),Be.__version=Te.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function mt(N,E,se){if(E.image.length!==6)return;const ue=we(N,E),ye=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+se);const Te=r.get(ye);if(ye.version!==Te.__version||ue===!0){t.activeTexture(s.TEXTURE0+se),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Be=E.isCompressedTexture||E.image[0].isCompressedTexture,Ee=E.image[0]&&E.image[0].isDataTexture,oe=[];for(let ee=0;ee<6;ee++)!Be&&!Ee?oe[ee]=P(E.image[ee],!1,!0,p):oe[ee]=Ee?E.image[ee].image:E.image[ee],oe[ee]=Dt(E,oe[ee]);const Ge=oe[0],He=L(Ge)||h,We=l.convert(E.format,E.colorSpace),ke=l.convert(E.type),De=ae(E.internalFormat,We,ke,E.colorSpace),it=h&&E.isVideoTexture!==!0,gt=Te.__version===void 0||ue===!0;let H=C(E,Ge,He);Le(s.TEXTURE_CUBE_MAP,E,He);let Re;if(Be){it&&gt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,H,De,Ge.width,Ge.height);for(let ee=0;ee<6;ee++){Re=oe[ee].mipmaps;for(let Se=0;Se<Re.length;Se++){const Ce=Re[Se];E.format!==Wn?We!==null?it?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se,0,0,Ce.width,Ce.height,We,Ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se,De,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se,0,0,Ce.width,Ce.height,We,ke,Ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se,De,Ce.width,Ce.height,0,We,ke,Ce.data)}}}else{Re=E.mipmaps,it&&gt&&(Re.length>0&&H++,t.texStorage2D(s.TEXTURE_CUBE_MAP,H,De,oe[0].width,oe[0].height));for(let ee=0;ee<6;ee++)if(Ee){it?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,oe[ee].width,oe[ee].height,We,ke,oe[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,De,oe[ee].width,oe[ee].height,0,We,ke,oe[ee].data);for(let Se=0;Se<Re.length;Se++){const dt=Re[Se].image[ee].image;it?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se+1,0,0,dt.width,dt.height,We,ke,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se+1,De,dt.width,dt.height,0,We,ke,dt.data)}}else{it?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,We,ke,oe[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,De,We,ke,oe[ee]);for(let Se=0;Se<Re.length;Se++){const Ce=Re[Se];it?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se+1,0,0,We,ke,Ce.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se+1,De,We,ke,Ce.image[ee])}}}z(E,He)&&O(s.TEXTURE_CUBE_MAP),Te.__version=ye.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function tt(N,E,se,ue,ye){const Te=l.convert(se.format,se.colorSpace),Be=l.convert(se.type),Ee=ae(se.internalFormat,Te,Be,se.colorSpace);r.get(E).__hasExternalTextures||(ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?t.texImage3D(ye,0,Ee,E.width,E.height,E.depth,0,Te,Be,null):t.texImage2D(ye,0,Ee,E.width,E.height,0,Te,Be,null)),t.bindFramebuffer(s.FRAMEBUFFER,N),ht(E)?_.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,ye,r.get(se).__webglTexture,0,et(E)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ue,ye,r.get(se).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function $(N,E,se){if(s.bindRenderbuffer(s.RENDERBUFFER,N),E.depthBuffer&&!E.stencilBuffer){let ue=s.DEPTH_COMPONENT16;if(se||ht(E)){const ye=E.depthTexture;ye&&ye.isDepthTexture&&(ye.type===ar?ue=s.DEPTH_COMPONENT32F:ye.type===sr&&(ue=s.DEPTH_COMPONENT24));const Te=et(E);ht(E)?_.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,ue,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,ue,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,ue,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,N)}else if(E.depthBuffer&&E.stencilBuffer){const ue=et(E);se&&ht(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,s.DEPTH24_STENCIL8,E.width,E.height):ht(E)?_.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,N)}else{const ue=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ye=0;ye<ue.length;ye++){const Te=ue[ye],Be=l.convert(Te.format,Te.colorSpace),Ee=l.convert(Te.type),oe=ae(Te.internalFormat,Be,Ee,Te.colorSpace),Ge=et(E);se&&ht(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,oe,E.width,E.height):ht(E)?_.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ge,oe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,oe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const ue=r.get(E.depthTexture).__webglTexture,ye=et(E);if(E.depthTexture.format===Nr)ht(E)?_.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ue,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ue,0);else if(E.depthTexture.format===Ns)ht(E)?_.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ue,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function je(N){const E=r.get(N),se=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");Pt(E.__webglFramebuffer,N)}else if(se){E.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ue]),E.__webglDepthbuffer[ue]=s.createRenderbuffer(),$(E.__webglDepthbuffer[ue],N,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),$(E.__webglDepthbuffer,N,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Je(N,E,se){const ue=r.get(N);E!==void 0&&tt(ue.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),se!==void 0&&je(N)}function $e(N){const E=N.texture,se=r.get(N),ue=r.get(E);N.addEventListener("dispose",pe),N.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture()),ue.__version=E.version,u.memory.textures++);const ye=N.isWebGLCubeRenderTarget===!0,Te=N.isWebGLMultipleRenderTargets===!0,Be=L(N)||h;if(ye){se.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)se.__webglFramebuffer[Ee]=s.createFramebuffer()}else{if(se.__webglFramebuffer=s.createFramebuffer(),Te)if(o.drawBuffers){const Ee=N.texture;for(let oe=0,Ge=Ee.length;oe<Ge;oe++){const He=r.get(Ee[oe]);He.__webglTexture===void 0&&(He.__webglTexture=s.createTexture(),u.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(h&&N.samples>0&&ht(N)===!1){const Ee=Te?E:[E];se.__webglMultisampledFramebuffer=s.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let oe=0;oe<Ee.length;oe++){const Ge=Ee[oe];se.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,se.__webglColorRenderbuffer[oe]);const He=l.convert(Ge.format,Ge.colorSpace),We=l.convert(Ge.type),ke=ae(Ge.internalFormat,He,We,Ge.colorSpace,N.isXRRenderTarget===!0),De=et(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,ke,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,se.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(se.__webglDepthRenderbuffer=s.createRenderbuffer(),$(se.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ye){t.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),Le(s.TEXTURE_CUBE_MAP,E,Be);for(let Ee=0;Ee<6;Ee++)tt(se.__webglFramebuffer[Ee],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee);z(E,Be)&&O(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){const Ee=N.texture;for(let oe=0,Ge=Ee.length;oe<Ge;oe++){const He=Ee[oe],We=r.get(He);t.bindTexture(s.TEXTURE_2D,We.__webglTexture),Le(s.TEXTURE_2D,He,Be),tt(se.__webglFramebuffer,N,He,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D),z(He,Be)&&O(s.TEXTURE_2D)}t.unbindTexture()}else{let Ee=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(h?Ee=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ee,ue.__webglTexture),Le(Ee,E,Be),tt(se.__webglFramebuffer,N,E,s.COLOR_ATTACHMENT0,Ee),z(E,Be)&&O(Ee),t.unbindTexture()}N.depthBuffer&&je(N)}function vt(N){const E=L(N)||h,se=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let ue=0,ye=se.length;ue<ye;ue++){const Te=se[ue];if(z(Te,E)){const Be=N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ee=r.get(Te).__webglTexture;t.bindTexture(Be,Ee),O(Be),t.unbindTexture()}}}function rt(N){if(h&&N.samples>0&&ht(N)===!1){const E=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],se=N.width,ue=N.height;let ye=s.COLOR_BUFFER_BIT;const Te=[],Be=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=r.get(N),oe=N.isWebGLMultipleRenderTargets===!0;if(oe)for(let Ge=0;Ge<E.length;Ge++)t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ge=0;Ge<E.length;Ge++){Te.push(s.COLOR_ATTACHMENT0+Ge),N.depthBuffer&&Te.push(Be);const He=Ee.__ignoreDepthValues!==void 0?Ee.__ignoreDepthValues:!1;if(He===!1&&(N.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),oe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ge]),He===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Be]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Be])),oe){const We=r.get(E[Ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,We,0)}s.blitFramebuffer(0,0,se,ue,0,0,se,ue,ye,s.NEAREST),S&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Te)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let Ge=0;Ge<E.length;Ge++){t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ge,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ge]);const He=r.get(E[Ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ge,s.TEXTURE_2D,He,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}}function et(N){return Math.min(v,N.samples)}function ht(N){const E=r.get(N);return h&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xt(N){const E=u.render.frame;T.get(N)!==E&&(T.set(N,E),N.update())}function Dt(N,E){const se=N.colorSpace,ue=N.format,ye=N.type;return N.isCompressedTexture===!0||N.format===Nu||se!==fi&&se!==Dr&&(se===at?h===!1?e.has("EXT_sRGB")===!0&&ue===Wn?(N.format=Nu,N.minFilter=Gn,N.generateMipmaps=!1):E=im.sRGBToLinear(E):(ue!==Wn||ye!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),E}this.allocateTextureUnit=G,this.resetTextureUnits=J,this.setTexture2D=W,this.setTexture2DArray=R,this.setTexture3D=F,this.setTextureCube=Q,this.rebindTextures=Je,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=ht}function uM(s,e,t){const r=t.isWebGL2;function o(l,u=Dr){let h;if(l===lr)return s.UNSIGNED_BYTE;if(l===$p)return s.UNSIGNED_SHORT_4_4_4_4;if(l===Kp)return s.UNSIGNED_SHORT_5_5_5_1;if(l===G0)return s.BYTE;if(l===W0)return s.SHORT;if(l===Hu)return s.UNSIGNED_SHORT;if(l===Yp)return s.INT;if(l===sr)return s.UNSIGNED_INT;if(l===ar)return s.FLOAT;if(l===Ta)return r?s.HALF_FLOAT:(h=e.get("OES_texture_half_float"),h!==null?h.HALF_FLOAT_OES:null);if(l===j0)return s.ALPHA;if(l===Wn)return s.RGBA;if(l===X0)return s.LUMINANCE;if(l===q0)return s.LUMINANCE_ALPHA;if(l===Nr)return s.DEPTH_COMPONENT;if(l===Ns)return s.DEPTH_STENCIL;if(l===Nu)return h=e.get("EXT_sRGB"),h!==null?h.SRGB_ALPHA_EXT:null;if(l===Y0)return s.RED;if(l===Qp)return s.RED_INTEGER;if(l===$0)return s.RG;if(l===Zp)return s.RG_INTEGER;if(l===Jp)return s.RGBA_INTEGER;if(l===Zc||l===Jc||l===eu||l===tu)if(u===at)if(h=e.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(l===Zc)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Jc)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===eu)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===tu)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=e.get("WEBGL_compressed_texture_s3tc"),h!==null){if(l===Zc)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Jc)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===eu)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===tu)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Lf||l===Nf||l===Uf||l===Df)if(h=e.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(l===Lf)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Nf)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===Uf)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===Df)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===K0)return h=e.get("WEBGL_compressed_texture_etc1"),h!==null?h.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===If||l===Ff)if(h=e.get("WEBGL_compressed_texture_etc"),h!==null){if(l===If)return u===at?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(l===Ff)return u===at?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===kf||l===Of||l===Bf||l===zf||l===Hf||l===Vf||l===Gf||l===Wf||l===jf||l===Xf||l===qf||l===Yf||l===$f||l===Kf)if(h=e.get("WEBGL_compressed_texture_astc"),h!==null){if(l===kf)return u===at?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Of)return u===at?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===Bf)return u===at?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===zf)return u===at?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===Hf)return u===at?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===Vf)return u===at?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===Gf)return u===at?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===Wf)return u===at?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===jf)return u===at?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===Xf)return u===at?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===qf)return u===at?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===Yf)return u===at?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===$f)return u===at?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===Kf)return u===at?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===nu)if(h=e.get("EXT_texture_compression_bptc"),h!==null){if(l===nu)return u===at?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(l===Q0||l===Qf||l===Zf||l===Jf)if(h=e.get("EXT_texture_compression_rgtc"),h!==null){if(l===nu)return h.COMPRESSED_RED_RGTC1_EXT;if(l===Qf)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===Zf)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===Jf)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===Lr?r?s.UNSIGNED_INT_24_8:(h=e.get("WEBGL_depth_texture"),h!==null?h.UNSIGNED_INT_24_8_WEBGL:null):s[l]!==void 0?s[l]:null}return{convert:o}}class hM extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class el extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dM={type:"move"};class Ru{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new el,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new el,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new el,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const h=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const w of e.hand.values()){const x=t.getJointPose(w,r),y=this._getHandJoint(p,w);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),S=.02,T=.005;p.inputState.pinching&&_>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));h!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(dM)))}return h!==null&&(h.visible=o!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new el;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class fM extends Tn{constructor(e,t,r,o,l,u,h,f,p,g){if(g=g!==void 0?g:Nr,g!==Nr&&g!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Nr&&(r=sr),r===void 0&&g===Ns&&(r=Lr),super(null,o,l,u,h,f,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=h!==void 0?h:Xt,this.minFilter=f!==void 0?f:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pM extends Ds{constructor(e,t){super();const r=this;let o=null,l=1,u=null,h="local-floor",f=1,p=null,g=null,v=null,_=null,S=null,T=null;const w=t.getContextAttributes();let x=null,y=null;const I=[],P=[],L=new ii;L.layers.enable(1),L.viewport=new nn;const k=new ii;k.layers.enable(2),k.viewport=new nn;const z=[L,k],O=new hM;O.layers.enable(1),O.layers.enable(2);let ae=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let F=I[R];return F===void 0&&(F=new Ru,I[R]=F),F.getTargetRaySpace()},this.getControllerGrip=function(R){let F=I[R];return F===void 0&&(F=new Ru,I[R]=F),F.getGripSpace()},this.getHand=function(R){let F=I[R];return F===void 0&&(F=new Ru,I[R]=F),F.getHandSpace()};function D(R){const F=P.indexOf(R.inputSource);if(F===-1)return;const Q=I[F];Q!==void 0&&(Q.update(R.inputSource,R.frame,p||u),Q.dispatchEvent({type:R.type,data:R.inputSource}))}function fe(){o.removeEventListener("select",D),o.removeEventListener("selectstart",D),o.removeEventListener("selectend",D),o.removeEventListener("squeeze",D),o.removeEventListener("squeezestart",D),o.removeEventListener("squeezeend",D),o.removeEventListener("end",fe),o.removeEventListener("inputsourceschange",pe);for(let R=0;R<I.length;R++){const F=P[R];F!==null&&(P[R]=null,I[R].disconnect(F))}ae=null,C=null,e.setRenderTarget(x),S=null,_=null,v=null,o=null,y=null,W.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){l=R,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){h=R,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(R){p=R},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(R){if(o=R,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",D),o.addEventListener("selectstart",D),o.addEventListener("selectend",D),o.addEventListener("squeeze",D),o.addEventListener("squeezestart",D),o.addEventListener("squeezeend",D),o.addEventListener("end",fe),o.addEventListener("inputsourceschange",pe),w.xrCompatible!==!0&&await t.makeXRCompatible(),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:o.renderState.layers===void 0?w.antialias:!0,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,F),o.updateRenderState({baseLayer:S}),y=new Fr(S.framebufferWidth,S.framebufferHeight,{format:Wn,type:lr,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil})}else{let F=null,Q=null,de=null;w.depth&&(de=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=w.stencil?Ns:Nr,Q=w.stencil?Lr:sr);const ge={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:l};v=new XRWebGLBinding(o,t),_=v.createProjectionLayer(ge),o.updateRenderState({layers:[_]}),y=new Fr(_.textureWidth,_.textureHeight,{format:Wn,type:lr,depthTexture:new fM(_.textureWidth,_.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0});const Me=e.properties.get(y);Me.__ignoreDepthValues=_.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await o.requestReferenceSpace(h),W.setContext(o),W.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function pe(R){for(let F=0;F<R.removed.length;F++){const Q=R.removed[F],de=P.indexOf(Q);de>=0&&(P[de]=null,I[de].disconnect(Q))}for(let F=0;F<R.added.length;F++){const Q=R.added[F];let de=P.indexOf(Q);if(de===-1){for(let Me=0;Me<I.length;Me++)if(Me>=P.length){P.push(Q),de=Me;break}else if(P[Me]===null){P[Me]=Q,de=Me;break}if(de===-1)break}const ge=I[de];ge&&ge.connect(Q)}}const Y=new ie,ne=new ie;function re(R,F,Q){Y.setFromMatrixPosition(F.matrixWorld),ne.setFromMatrixPosition(Q.matrixWorld);const de=Y.distanceTo(ne),ge=F.projectionMatrix.elements,Me=Q.projectionMatrix.elements,Le=ge[14]/(ge[10]-1),we=ge[14]/(ge[10]+1),Ve=(ge[9]+1)/ge[5],mt=(ge[9]-1)/ge[5],tt=(ge[8]-1)/ge[0],$=(Me[8]+1)/Me[0],Pt=Le*tt,je=Le*$,Je=de/(-tt+$),$e=Je*-tt;F.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX($e),R.translateZ(Je),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();const vt=Le+Je,rt=we+Je,et=Pt-$e,ht=je+(de-$e),xt=Ve*we/rt*vt,Dt=mt*we/rt*vt;R.projectionMatrix.makePerspective(et,ht,xt,Dt,vt,rt),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}function he(R,F){F===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(F.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(o===null)return;O.near=k.near=L.near=R.near,O.far=k.far=L.far=R.far,(ae!==O.near||C!==O.far)&&(o.updateRenderState({depthNear:O.near,depthFar:O.far}),ae=O.near,C=O.far);const F=R.parent,Q=O.cameras;he(O,F);for(let de=0;de<Q.length;de++)he(Q[de],F);Q.length===2?re(O,L,k):O.projectionMatrix.copy(L.projectionMatrix),J(R,O,F)};function J(R,F,Q){Q===null?R.matrix.copy(F.matrixWorld):(R.matrix.copy(Q.matrixWorld),R.matrix.invert(),R.matrix.multiply(F.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0);const de=R.children;for(let ge=0,Me=de.length;ge<Me;ge++)de[ge].updateMatrixWorld(!0);R.projectionMatrix.copy(F.projectionMatrix),R.projectionMatrixInverse.copy(F.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=Uu*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(_===null&&S===null))return f},this.setFoveation=function(R){f=R,_!==null&&(_.fixedFoveation=R),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=R)};let G=null;function te(R,F){if(g=F.getViewerPose(p||u),T=F,g!==null){const Q=g.views;S!==null&&(e.setRenderTargetFramebuffer(y,S.framebuffer),e.setRenderTarget(y));let de=!1;Q.length!==O.cameras.length&&(O.cameras.length=0,de=!0);for(let ge=0;ge<Q.length;ge++){const Me=Q[ge];let Le=null;if(S!==null)Le=S.getViewport(Me);else{const Ve=v.getViewSubImage(_,Me);Le=Ve.viewport,ge===0&&(e.setRenderTargetTextures(y,Ve.colorTexture,_.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(y))}let we=z[ge];we===void 0&&(we=new ii,we.layers.enable(ge),we.viewport=new nn,z[ge]=we),we.matrix.fromArray(Me.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Me.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Le.x,Le.y,Le.width,Le.height),ge===0&&(O.matrix.copy(we.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),de===!0&&O.cameras.push(we)}}for(let Q=0;Q<I.length;Q++){const de=P[Q],ge=I[Q];de!==null&&ge!==void 0&&ge.update(de,F,p||u)}G&&G(R,F),F.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:F}),T=null}const W=new pm;W.setAnimationLoop(te),this.setAnimationLoop=function(R){G=R},this.dispose=function(){}}}function mM(s,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,um(s)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function o(x,y,I,P,L){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(x,y):y.isMeshToonMaterial?(l(x,y),v(x,y)):y.isMeshPhongMaterial?(l(x,y),g(x,y)):y.isMeshStandardMaterial?(l(x,y),_(x,y),y.isMeshPhysicalMaterial&&S(x,y,L)):y.isMeshMatcapMaterial?(l(x,y),T(x,y)):y.isMeshDepthMaterial?l(x,y):y.isMeshDistanceMaterial?(l(x,y),w(x,y)):y.isMeshNormalMaterial?l(x,y):y.isLineBasicMaterial?(u(x,y),y.isLineDashedMaterial&&h(x,y)):y.isPointsMaterial?f(x,y,I,P):y.isSpriteMaterial?p(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===En&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===En&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const I=e.get(y).envMap;if(I&&(x.envMap.value=I,x.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap){x.lightMap.value=y.lightMap;const P=s.useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=y.lightMapIntensity*P,t(y.lightMap,x.lightMapTransform)}y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function h(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function f(x,y,I,P){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*I,x.scale.value=P*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function g(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function v(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function _(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),e.get(y).envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,I){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===En&&x.clearcoatNormalScale.value.negate())),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=I.texture,x.transmissionSamplerSize.value.set(I.width,I.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,y){y.matcap&&(x.matcap.value=y.matcap)}function w(x,y){const I=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(I.matrixWorld),x.nearDistance.value=I.shadow.camera.near,x.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function gM(s,e,t,r){let o={},l={},u=[];const h=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(I,P){const L=P.program;r.uniformBlockBinding(I,L)}function p(I,P){let L=o[I.id];L===void 0&&(T(I),L=g(I),o[I.id]=L,I.addEventListener("dispose",x));const k=P.program;r.updateUBOMapping(I,k);const z=e.render.frame;l[I.id]!==z&&(_(I),l[I.id]=z)}function g(I){const P=v();I.__bindingPointIndex=P;const L=s.createBuffer(),k=I.__size,z=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,k,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,L),L}function v(){for(let I=0;I<h;I++)if(u.indexOf(I)===-1)return u.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(I){const P=o[I.id],L=I.uniforms,k=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let z=0,O=L.length;z<O;z++){const ae=L[z];if(S(ae,z,k)===!0){const C=ae.__offset,D=Array.isArray(ae.value)?ae.value:[ae.value];let fe=0;for(let pe=0;pe<D.length;pe++){const Y=D[pe],ne=w(Y);typeof Y=="number"?(ae.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,C+fe,ae.__data)):Y.isMatrix3?(ae.__data[0]=Y.elements[0],ae.__data[1]=Y.elements[1],ae.__data[2]=Y.elements[2],ae.__data[3]=Y.elements[0],ae.__data[4]=Y.elements[3],ae.__data[5]=Y.elements[4],ae.__data[6]=Y.elements[5],ae.__data[7]=Y.elements[0],ae.__data[8]=Y.elements[6],ae.__data[9]=Y.elements[7],ae.__data[10]=Y.elements[8],ae.__data[11]=Y.elements[0]):(Y.toArray(ae.__data,fe),fe+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,C,ae.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,P,L){const k=I.value;if(L[P]===void 0){if(typeof k=="number")L[P]=k;else{const z=Array.isArray(k)?k:[k],O=[];for(let ae=0;ae<z.length;ae++)O.push(z[ae].clone());L[P]=O}return!0}else if(typeof k=="number"){if(L[P]!==k)return L[P]=k,!0}else{const z=Array.isArray(L[P])?L[P]:[L[P]],O=Array.isArray(k)?k:[k];for(let ae=0;ae<z.length;ae++){const C=z[ae];if(C.equals(O[ae])===!1)return C.copy(O[ae]),!0}}return!1}function T(I){const P=I.uniforms;let L=0;const k=16;let z=0;for(let O=0,ae=P.length;O<ae;O++){const C=P[O],D={boundary:0,storage:0},fe=Array.isArray(C.value)?C.value:[C.value];for(let pe=0,Y=fe.length;pe<Y;pe++){const ne=fe[pe],re=w(ne);D.boundary+=re.boundary,D.storage+=re.storage}if(C.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=L,O>0){z=L%k;const pe=k-z;z!==0&&pe-D.boundary<0&&(L+=k-z,C.__offset=L)}L+=D.storage}return z=L%k,z>0&&(L+=k-z),I.__size=L,I.__cache={},this}function w(I){const P={boundary:0,storage:0};return typeof I=="number"?(P.boundary=4,P.storage=4):I.isVector2?(P.boundary=8,P.storage=8):I.isVector3||I.isColor?(P.boundary=16,P.storage=12):I.isVector4?(P.boundary=16,P.storage=16):I.isMatrix3?(P.boundary=48,P.storage=48):I.isMatrix4?(P.boundary=64,P.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),P}function x(I){const P=I.target;P.removeEventListener("dispose",x);const L=u.indexOf(P.__bindingPointIndex);u.splice(L,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function y(){for(const I in o)s.deleteBuffer(o[I]);u=[],o={},l={}}return{bind:f,update:p,dispose:y}}function vM(){const s=il("canvas");return s.style.display="block",s}class xm{constructor(e={}){const{canvas:t=vM(),context:r=null,depth:o=!0,stencil:l=!0,alpha:u=!1,antialias:h=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let _;r!==null?_=r.getContextAttributes().alpha:_=u;const S=new Uint32Array(4),T=new Int32Array(4);let w=null,x=null;const y=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=at,this.useLegacyLights=!0,this.toneMapping=Di,this.toneMappingExposure=1;const P=this;let L=!1,k=0,z=0,O=null,ae=-1,C=null;const D=new nn,fe=new nn;let pe=null;const Y=new At(0);let ne=0,re=t.width,he=t.height,J=1,G=null,te=null;const W=new nn(0,0,re,he),R=new nn(0,0,re,he);let F=!1;const Q=new fm;let de=!1,ge=!1,Me=null;const Le=new rn,we=new yt,Ve=new ie,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function tt(){return O===null?J:1}let $=r;function Pt(b,K){for(let le=0;le<b.length;le++){const X=b[le],ce=t.getContext(X,K);if(ce!==null)return ce}return null}try{const b={alpha:!0,depth:o,stencil:l,antialias:h,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zu}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",Se,!1),$===null){const K=["webgl2","webgl","experimental-webgl"];if(P.isWebGL1Renderer===!0&&K.shift(),$=Pt(K,b),$===null)throw Pt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let je,Je,$e,vt,rt,et,ht,xt,Dt,N,E,se,ue,ye,Te,Be,Ee,oe,Ge,He,We,ke,De,it;function gt(){je=new Ax($),Je=new Sx($,je,e),je.init(Je),ke=new uM($,je,Je),$e=new lM($,je,Je),vt=new Px($),rt=new YS,et=new cM($,je,$e,rt,Je,ke,vt),ht=new Ex(P),xt=new Rx(P),Dt=new zv($,Je),De=new yx($,je,Dt,Je),N=new Cx($,Dt,vt,De),E=new Dx($,N,Dt,vt),Ge=new Ux($,Je,et),Be=new Mx(rt),se=new qS(P,ht,xt,je,Je,De,Be),ue=new mM(P,rt),ye=new KS,Te=new nM(je,Je),oe=new _x(P,ht,xt,$e,E,_,f),Ee=new oM(P,E,Je),it=new gM($,vt,Je,$e),He=new xx($,je,vt,Je),We=new bx($,je,vt,Je),vt.programs=se.programs,P.capabilities=Je,P.extensions=je,P.properties=rt,P.renderLists=ye,P.shadowMap=Ee,P.state=$e,P.info=vt}gt();const H=new pM(P,$);this.xr=H,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const b=je.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=je.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(b){b!==void 0&&(J=b,this.setSize(re,he,!1))},this.getSize=function(b){return b.set(re,he)},this.setSize=function(b,K,le=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=b,he=K,t.width=Math.floor(b*J),t.height=Math.floor(K*J),le===!0&&(t.style.width=b+"px",t.style.height=K+"px"),this.setViewport(0,0,b,K)},this.getDrawingBufferSize=function(b){return b.set(re*J,he*J).floor()},this.setDrawingBufferSize=function(b,K,le){re=b,he=K,J=le,t.width=Math.floor(b*le),t.height=Math.floor(K*le),this.setViewport(0,0,b,K)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(W)},this.setViewport=function(b,K,le,X){b.isVector4?W.set(b.x,b.y,b.z,b.w):W.set(b,K,le,X),$e.viewport(D.copy(W).multiplyScalar(J).floor())},this.getScissor=function(b){return b.copy(R)},this.setScissor=function(b,K,le,X){b.isVector4?R.set(b.x,b.y,b.z,b.w):R.set(b,K,le,X),$e.scissor(fe.copy(R).multiplyScalar(J).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(b){$e.setScissorTest(F=b)},this.setOpaqueSort=function(b){G=b},this.setTransparentSort=function(b){te=b},this.getClearColor=function(b){return b.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(b=!0,K=!0,le=!0){let X=0;if(b){let ce=!1;if(O!==null){const Ne=O.texture.format;ce=Ne===Jp||Ne===Zp||Ne===Qp}if(ce){const Ne=O.texture.type,Xe=Ne===lr||Ne===sr||Ne===Hu||Ne===Lr||Ne===$p||Ne===Kp,Ke=oe.getClearColor(),Ze=oe.getClearAlpha(),ot=Ke.r,Ie=Ke.g,nt=Ke.b;Xe?(S[0]=ot,S[1]=Ie,S[2]=nt,S[3]=Ze,$.clearBufferuiv($.COLOR,0,S)):(T[0]=ot,T[1]=Ie,T[2]=nt,T[3]=Ze,$.clearBufferiv($.COLOR,0,T))}else X|=$.COLOR_BUFFER_BIT}K&&(X|=$.DEPTH_BUFFER_BIT),le&&(X|=$.STENCIL_BUFFER_BIT),$.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),ye.dispose(),Te.dispose(),rt.dispose(),ht.dispose(),xt.dispose(),E.dispose(),De.dispose(),it.dispose(),se.dispose(),H.dispose(),H.removeEventListener("sessionstart",Mt),H.removeEventListener("sessionend",Rn),Me&&(Me.dispose(),Me=null),kt.stop()};function Re(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const b=vt.autoReset,K=Ee.enabled,le=Ee.autoUpdate,X=Ee.needsUpdate,ce=Ee.type;gt(),vt.autoReset=b,Ee.enabled=K,Ee.autoUpdate=le,Ee.needsUpdate=X,Ee.type=ce}function Se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ce(b){const K=b.target;K.removeEventListener("dispose",Ce),dt(K)}function dt(b){St(b),rt.remove(b)}function St(b){const K=rt.get(b).programs;K!==void 0&&(K.forEach(function(le){se.releaseProgram(le)}),b.isShaderMaterial&&se.releaseShaderCache(b))}this.renderBufferDirect=function(b,K,le,X,ce,Ne){K===null&&(K=mt);const Xe=ce.isMesh&&ce.matrixWorld.determinant()<0,Ke=ul(b,K,le,X,ce);$e.setMaterial(X,Xe);let Ze=le.index,ot=1;X.wireframe===!0&&(Ze=N.getWireframeAttribute(le),ot=2);const Ie=le.drawRange,nt=le.attributes.position;let Et=Ie.start*ot,Ct=(Ie.start+Ie.count)*ot;Ne!==null&&(Et=Math.max(Et,Ne.start*ot),Ct=Math.min(Ct,(Ne.start+Ne.count)*ot)),Ze!==null?(Et=Math.max(Et,0),Ct=Math.min(Ct,Ze.count)):nt!=null&&(Et=Math.max(Et,0),Ct=Math.min(Ct,nt.count));const sn=Ct-Et;if(sn<0||sn===1/0)return;De.setup(ce,X,Ke,le,Ze);let jn,Lt=He;if(Ze!==null&&(jn=Dt.get(Ze),Lt=We,Lt.setIndex(jn)),ce.isMesh)X.wireframe===!0?($e.setLineWidth(X.wireframeLinewidth*tt()),Lt.setMode($.LINES)):Lt.setMode($.TRIANGLES);else if(ce.isLine){let lt=X.linewidth;lt===void 0&&(lt=1),$e.setLineWidth(lt*tt()),ce.isLineSegments?Lt.setMode($.LINES):ce.isLineLoop?Lt.setMode($.LINE_LOOP):Lt.setMode($.LINE_STRIP)}else ce.isPoints?Lt.setMode($.POINTS):ce.isSprite&&Lt.setMode($.TRIANGLES);if(ce.isInstancedMesh)Lt.renderInstances(Et,sn,ce.count);else if(le.isInstancedBufferGeometry){const lt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,mn=Math.min(le.instanceCount,lt);Lt.renderInstances(Et,sn,mn)}else Lt.render(Et,sn)},this.compile=function(b,K){function le(X,ce,Ne){X.transparent===!0&&X.side===Li&&X.forceSinglePass===!1?(X.side=En,X.needsUpdate=!0,pi(X,ce,Ne),X.side=cr,X.needsUpdate=!0,pi(X,ce,Ne),X.side=Li):pi(X,ce,Ne)}x=Te.get(b),x.init(),I.push(x),b.traverseVisible(function(X){X.isLight&&X.layers.test(K.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),x.setupLights(P.useLegacyLights),b.traverse(function(X){const ce=X.material;if(ce)if(Array.isArray(ce))for(let Ne=0;Ne<ce.length;Ne++){const Xe=ce[Ne];le(Xe,b,X)}else le(ce,b,X)}),I.pop(),x=null};let Ft=null;function wn(b){Ft&&Ft(b)}function Mt(){kt.stop()}function Rn(){kt.start()}const kt=new pm;kt.setAnimationLoop(wn),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(b){Ft=b,H.setAnimationLoop(b),b===null?kt.stop():kt.start()},H.addEventListener("sessionstart",Mt),H.addEventListener("sessionend",Rn),this.render=function(b,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(K),K=H.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,K,O),x=Te.get(b,I.length),x.init(),I.push(x),Le.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Q.setFromProjectionMatrix(Le),ge=this.localClippingEnabled,de=Be.init(this.clippingPlanes,ge),w=ye.get(b,y.length),w.init(),y.push(w),Br(b,K,0,P.sortObjects),w.finish(),P.sortObjects===!0&&w.sort(G,te),this.info.render.frame++,de===!0&&Be.beginShadows();const le=x.state.shadowsArray;if(Ee.render(le,b,K),de===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),oe.render(w,b),x.setupLights(P.useLegacyLights),K.isArrayCamera){const X=K.cameras;for(let ce=0,Ne=X.length;ce<Ne;ce++){const Xe=X[ce];Ii(w,b,Xe,Xe.viewport)}}else Ii(w,b,K);O!==null&&(et.updateMultisampleRenderTarget(O),et.updateRenderTargetMipmap(O)),b.isScene===!0&&b.onAfterRender(P,b,K),De.resetDefaultState(),ae=-1,C=null,I.pop(),I.length>0?x=I[I.length-1]:x=null,y.pop(),y.length>0?w=y[y.length-1]:w=null};function Br(b,K,le,X){if(b.visible===!1)return;if(b.layers.test(K.layers)){if(b.isGroup)le=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(K);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){X&&Ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Le);const Xe=E.update(b),Ke=b.material;Ke.visible&&w.push(b,Xe,Ke,le,Ve.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){const Xe=E.update(b),Ke=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ve.copy(b.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),Ve.copy(Xe.boundingSphere.center)),Ve.applyMatrix4(b.matrixWorld).applyMatrix4(Le)),Array.isArray(Ke)){const Ze=Xe.groups;for(let ot=0,Ie=Ze.length;ot<Ie;ot++){const nt=Ze[ot],Et=Ke[nt.materialIndex];Et&&Et.visible&&w.push(b,Xe,Et,le,Ve.z,nt)}}else Ke.visible&&w.push(b,Xe,Ke,le,Ve.z,null)}}const Ne=b.children;for(let Xe=0,Ke=Ne.length;Xe<Ke;Xe++)Br(Ne[Xe],K,le,X)}function Ii(b,K,le,X){const ce=b.opaque,Ne=b.transmissive,Xe=b.transparent;x.setupLightsView(le),de===!0&&Be.setGlobalState(P.clippingPlanes,le),Ne.length>0&&cl(ce,Ne,K,le),X&&$e.viewport(D.copy(X)),ce.length>0&&si(ce,K,le),Ne.length>0&&si(Ne,K,le),Xe.length>0&&si(Xe,K,le),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function cl(b,K,le,X){const ce=Je.isWebGL2;Me===null&&(Me=new Fr(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")?Ta:lr,minFilter:Ea,samples:ce?4:0})),P.getDrawingBufferSize(we),ce?Me.setSize(we.x,we.y):Me.setSize(Du(we.x),Du(we.y));const Ne=P.getRenderTarget();P.setRenderTarget(Me),P.getClearColor(Y),ne=P.getClearAlpha(),ne<1&&P.setClearColor(16777215,.5),P.clear();const Xe=P.toneMapping;P.toneMapping=Di,si(b,le,X),et.updateMultisampleRenderTarget(Me),et.updateRenderTargetMipmap(Me);let Ke=!1;for(let Ze=0,ot=K.length;Ze<ot;Ze++){const Ie=K[Ze],nt=Ie.object,Et=Ie.geometry,Ct=Ie.material,sn=Ie.group;if(Ct.side===Li&&nt.layers.test(X.layers)){const jn=Ct.side;Ct.side=En,Ct.needsUpdate=!0,ur(nt,le,X,Et,Ct,sn),Ct.side=jn,Ct.needsUpdate=!0,Ke=!0}}Ke===!0&&(et.updateMultisampleRenderTarget(Me),et.updateRenderTargetMipmap(Me)),P.setRenderTarget(Ne),P.setClearColor(Y,ne),P.toneMapping=Xe}function si(b,K,le){const X=K.isScene===!0?K.overrideMaterial:null;for(let ce=0,Ne=b.length;ce<Ne;ce++){const Xe=b[ce],Ke=Xe.object,Ze=Xe.geometry,ot=X===null?Xe.material:X,Ie=Xe.group;Ke.layers.test(le.layers)&&ur(Ke,K,le,Ze,ot,Ie)}}function ur(b,K,le,X,ce,Ne){b.onBeforeRender(P,K,le,X,ce,Ne),b.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ce.onBeforeRender(P,K,le,X,b,Ne),ce.transparent===!0&&ce.side===Li&&ce.forceSinglePass===!1?(ce.side=En,ce.needsUpdate=!0,P.renderBufferDirect(le,K,X,ce,b,Ne),ce.side=cr,ce.needsUpdate=!0,P.renderBufferDirect(le,K,X,ce,b,Ne),ce.side=Li):P.renderBufferDirect(le,K,X,ce,b,Ne),b.onAfterRender(P,K,le,X,ce,Ne)}function pi(b,K,le){K.isScene!==!0&&(K=mt);const X=rt.get(b),ce=x.state.lights,Ne=x.state.shadowsArray,Xe=ce.state.version,Ke=se.getParameters(b,ce.state,Ne,K,le),Ze=se.getProgramCacheKey(Ke);let ot=X.programs;X.environment=b.isMeshStandardMaterial?K.environment:null,X.fog=K.fog,X.envMap=(b.isMeshStandardMaterial?xt:ht).get(b.envMap||X.environment),ot===void 0&&(b.addEventListener("dispose",Ce),ot=new Map,X.programs=ot);let Ie=ot.get(Ze);if(Ie!==void 0){if(X.currentProgram===Ie&&X.lightsStateVersion===Xe)return zr(b,Ke),Ie}else Ke.uniforms=se.getUniforms(b),b.onBuild(le,Ke,P),b.onBeforeCompile(Ke,P),Ie=se.acquireProgram(Ke,Ze),ot.set(Ze,Ie),X.uniforms=Ke.uniforms;const nt=X.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(nt.clippingPlanes=Be.uniform),zr(b,Ke),X.needsLights=dl(b),X.lightsStateVersion=Xe,X.needsLights&&(nt.ambientLightColor.value=ce.state.ambient,nt.lightProbe.value=ce.state.probe,nt.directionalLights.value=ce.state.directional,nt.directionalLightShadows.value=ce.state.directionalShadow,nt.spotLights.value=ce.state.spot,nt.spotLightShadows.value=ce.state.spotShadow,nt.rectAreaLights.value=ce.state.rectArea,nt.ltc_1.value=ce.state.rectAreaLTC1,nt.ltc_2.value=ce.state.rectAreaLTC2,nt.pointLights.value=ce.state.point,nt.pointLightShadows.value=ce.state.pointShadow,nt.hemisphereLights.value=ce.state.hemi,nt.directionalShadowMap.value=ce.state.directionalShadowMap,nt.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,nt.spotShadowMap.value=ce.state.spotShadowMap,nt.spotLightMatrix.value=ce.state.spotLightMatrix,nt.spotLightMap.value=ce.state.spotLightMap,nt.pointShadowMap.value=ce.state.pointShadowMap,nt.pointShadowMatrix.value=ce.state.pointShadowMatrix);const Et=Ie.getUniforms(),Ct=tl.seqWithValue(Et.seq,nt);return X.currentProgram=Ie,X.uniformsList=Ct,Ie}function zr(b,K){const le=rt.get(b);le.outputColorSpace=K.outputColorSpace,le.instancing=K.instancing,le.skinning=K.skinning,le.morphTargets=K.morphTargets,le.morphNormals=K.morphNormals,le.morphColors=K.morphColors,le.morphTargetsCount=K.morphTargetsCount,le.numClippingPlanes=K.numClippingPlanes,le.numIntersection=K.numClipIntersection,le.vertexAlphas=K.vertexAlphas,le.vertexTangents=K.vertexTangents,le.toneMapping=K.toneMapping}function ul(b,K,le,X,ce){K.isScene!==!0&&(K=mt),et.resetTextureUnits();const Ne=K.fog,Xe=X.isMeshStandardMaterial?K.environment:null,Ke=O===null?P.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:fi,Ze=(X.isMeshStandardMaterial?xt:ht).get(X.envMap||Xe),ot=X.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,Ie=!!le.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),nt=!!le.morphAttributes.position,Et=!!le.morphAttributes.normal,Ct=!!le.morphAttributes.color,sn=X.toneMapped?P.toneMapping:Di,jn=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Lt=jn!==void 0?jn.length:0,lt=rt.get(X),mn=x.state.lights;if(de===!0&&(ge===!0||b!==C)){const $t=b===C&&X.id===ae;Be.setState(X,b,$t)}let Bt=!1;X.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==mn.state.version||lt.outputColorSpace!==Ke||ce.isInstancedMesh&&lt.instancing===!1||!ce.isInstancedMesh&&lt.instancing===!0||ce.isSkinnedMesh&&lt.skinning===!1||!ce.isSkinnedMesh&&lt.skinning===!0||lt.envMap!==Ze||X.fog===!0&&lt.fog!==Ne||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==Be.numPlanes||lt.numIntersection!==Be.numIntersection)||lt.vertexAlphas!==ot||lt.vertexTangents!==Ie||lt.morphTargets!==nt||lt.morphNormals!==Et||lt.morphColors!==Ct||lt.toneMapping!==sn||Je.isWebGL2===!0&&lt.morphTargetsCount!==Lt)&&(Bt=!0):(Bt=!0,lt.__version=X.version);let Gt=lt.currentProgram;Bt===!0&&(Gt=pi(X,K,ce));let Pa=!1,hr=!1,Fs=!1;const zt=Gt.getUniforms(),In=lt.uniforms;if($e.useProgram(Gt.program)&&(Pa=!0,hr=!0,Fs=!0),X.id!==ae&&(ae=X.id,hr=!0),Pa||C!==b){if(zt.setValue($,"projectionMatrix",b.projectionMatrix),Je.logarithmicDepthBuffer&&zt.setValue($,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),C!==b&&(C=b,hr=!0,Fs=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const $t=zt.map.cameraPosition;$t!==void 0&&$t.setValue($,Ve.setFromMatrixPosition(b.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&zt.setValue($,"isOrthographic",b.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||ce.isSkinnedMesh)&&zt.setValue($,"viewMatrix",b.matrixWorldInverse)}if(ce.isSkinnedMesh){zt.setOptional($,ce,"bindMatrix"),zt.setOptional($,ce,"bindMatrixInverse");const $t=ce.skeleton;$t&&(Je.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),zt.setValue($,"boneTexture",$t.boneTexture,et),zt.setValue($,"boneTextureSize",$t.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const mi=le.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0&&Je.isWebGL2===!0)&&Ge.update(ce,le,Gt),(hr||lt.receiveShadow!==ce.receiveShadow)&&(lt.receiveShadow=ce.receiveShadow,zt.setValue($,"receiveShadow",ce.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(In.envMap.value=Ze,In.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),hr&&(zt.setValue($,"toneMappingExposure",P.toneMappingExposure),lt.needsLights&&hl(In,Fs),Ne&&X.fog===!0&&ue.refreshFogUniforms(In,Ne),ue.refreshMaterialUniforms(In,X,J,he,Me),tl.upload($,lt.uniformsList,In,et)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(tl.upload($,lt.uniformsList,In,et),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&zt.setValue($,"center",ce.center),zt.setValue($,"modelViewMatrix",ce.modelViewMatrix),zt.setValue($,"normalMatrix",ce.normalMatrix),zt.setValue($,"modelMatrix",ce.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const $t=X.uniformsGroups;for(let ks=0,fl=$t.length;ks<fl;ks++)if(Je.isWebGL2){const Hr=$t[ks];it.update(Hr,Gt),it.bind(Hr,Gt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gt}function hl(b,K){b.ambientLightColor.needsUpdate=K,b.lightProbe.needsUpdate=K,b.directionalLights.needsUpdate=K,b.directionalLightShadows.needsUpdate=K,b.pointLights.needsUpdate=K,b.pointLightShadows.needsUpdate=K,b.spotLights.needsUpdate=K,b.spotLightShadows.needsUpdate=K,b.rectAreaLights.needsUpdate=K,b.hemisphereLights.needsUpdate=K}function dl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(b,K,le){rt.get(b.texture).__webglTexture=K,rt.get(b.depthTexture).__webglTexture=le;const X=rt.get(b);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=le===void 0,X.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,K){const le=rt.get(b);le.__webglFramebuffer=K,le.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(b,K=0,le=0){O=b,k=K,z=le;let X=!0,ce=null,Ne=!1,Xe=!1;if(b){const Ze=rt.get(b);Ze.__useDefaultFramebuffer!==void 0?($e.bindFramebuffer($.FRAMEBUFFER,null),X=!1):Ze.__webglFramebuffer===void 0?et.setupRenderTarget(b):Ze.__hasExternalTextures&&et.rebindTextures(b,rt.get(b.texture).__webglTexture,rt.get(b.depthTexture).__webglTexture);const ot=b.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Xe=!0);const Ie=rt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(ce=Ie[K],Ne=!0):Je.isWebGL2&&b.samples>0&&et.useMultisampledRTT(b)===!1?ce=rt.get(b).__webglMultisampledFramebuffer:ce=Ie,D.copy(b.viewport),fe.copy(b.scissor),pe=b.scissorTest}else D.copy(W).multiplyScalar(J).floor(),fe.copy(R).multiplyScalar(J).floor(),pe=F;if($e.bindFramebuffer($.FRAMEBUFFER,ce)&&Je.drawBuffers&&X&&$e.drawBuffers(b,ce),$e.viewport(D),$e.scissor(fe),$e.setScissorTest(pe),Ne){const Ze=rt.get(b.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ze.__webglTexture,le)}else if(Xe){const Ze=rt.get(b.texture),ot=K||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ze.__webglTexture,le||0,ot)}ae=-1},this.readRenderTargetPixels=function(b,K,le,X,ce,Ne,Xe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ke=Ke[Xe]),Ke){$e.bindFramebuffer($.FRAMEBUFFER,Ke);try{const Ze=b.texture,ot=Ze.format,Ie=Ze.type;if(ot!==Wn&&ke.convert(ot)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const nt=Ie===Ta&&(je.has("EXT_color_buffer_half_float")||Je.isWebGL2&&je.has("EXT_color_buffer_float"));if(Ie!==lr&&ke.convert(Ie)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===ar&&(Je.isWebGL2||je.has("OES_texture_float")||je.has("WEBGL_color_buffer_float")))&&!nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=b.width-X&&le>=0&&le<=b.height-ce&&$.readPixels(K,le,X,ce,ke.convert(ot),ke.convert(Ie),Ne)}finally{const Ze=O!==null?rt.get(O).__webglFramebuffer:null;$e.bindFramebuffer($.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(b,K,le=0){const X=Math.pow(2,-le),ce=Math.floor(K.image.width*X),Ne=Math.floor(K.image.height*X);et.setTexture2D(K,0),$.copyTexSubImage2D($.TEXTURE_2D,le,0,0,b.x,b.y,ce,Ne),$e.unbindTexture()},this.copyTextureToTexture=function(b,K,le,X=0){const ce=K.image.width,Ne=K.image.height,Xe=ke.convert(le.format),Ke=ke.convert(le.type);et.setTexture2D(le,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,le.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,le.unpackAlignment),K.isDataTexture?$.texSubImage2D($.TEXTURE_2D,X,b.x,b.y,ce,Ne,Xe,Ke,K.image.data):K.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,X,b.x,b.y,K.mipmaps[0].width,K.mipmaps[0].height,Xe,K.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,X,b.x,b.y,Xe,Ke,K.image),X===0&&le.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),$e.unbindTexture()},this.copyTextureToTexture3D=function(b,K,le,X,ce=0){if(P.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ne=b.max.x-b.min.x+1,Xe=b.max.y-b.min.y+1,Ke=b.max.z-b.min.z+1,Ze=ke.convert(X.format),ot=ke.convert(X.type);let Ie;if(X.isData3DTexture)et.setTexture3D(X,0),Ie=$.TEXTURE_3D;else if(X.isDataArrayTexture)et.setTexture2DArray(X,0),Ie=$.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,X.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,X.unpackAlignment);const nt=$.getParameter($.UNPACK_ROW_LENGTH),Et=$.getParameter($.UNPACK_IMAGE_HEIGHT),Ct=$.getParameter($.UNPACK_SKIP_PIXELS),sn=$.getParameter($.UNPACK_SKIP_ROWS),jn=$.getParameter($.UNPACK_SKIP_IMAGES),Lt=le.isCompressedTexture?le.mipmaps[0]:le.image;$.pixelStorei($.UNPACK_ROW_LENGTH,Lt.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Lt.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,b.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,b.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,b.min.z),le.isDataTexture||le.isData3DTexture?$.texSubImage3D(Ie,ce,K.x,K.y,K.z,Ne,Xe,Ke,Ze,ot,Lt.data):le.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Ie,ce,K.x,K.y,K.z,Ne,Xe,Ke,Ze,Lt.data)):$.texSubImage3D(Ie,ce,K.x,K.y,K.z,Ne,Xe,Ke,Ze,ot,Lt),$.pixelStorei($.UNPACK_ROW_LENGTH,nt),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Et),$.pixelStorei($.UNPACK_SKIP_PIXELS,Ct),$.pixelStorei($.UNPACK_SKIP_ROWS,sn),$.pixelStorei($.UNPACK_SKIP_IMAGES,jn),ce===0&&X.generateMipmaps&&$.generateMipmap(Ie),$e.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?et.setTextureCube(b,0):b.isData3DTexture?et.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?et.setTexture2DArray(b,0):et.setTexture2D(b,0),$e.unbindTexture()},this.resetState=function(){k=0,z=0,O=null,$e.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===at?Ur:em}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ur?at:fi}}class _M extends xm{}_M.prototype.isWebGL1Renderer=!0;class yM extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class xM extends Tn{constructor(e=null,t=1,r=1,o,l,u,h,f,p=Xt,g=Xt,v,_){super(null,u,h,f,p,g,o,l,v,_),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zu);class SM{constructor(e){this.system=e,this.a=0,this.x=0,this.y=0,this.sp=253,this.pc=0,this.carryFlag=!1,this.zeroFlag=!1,this.interruptDisableFlag=!0,this.decimalModeFlag=!1,this.breakCommand=!1,this.overflowFlag=!1,this.negativeFlag=!1,this.cycles=0,this.totalCycles=0,this.nmiPending=!1,this.debug=!1,this.instructionCount=0,this.instructions={load:{169:{mode:"immediate",reg:"a",cycles:2},165:{mode:"zeroPage",reg:"a",cycles:3},181:{mode:"zeroPageX",reg:"a",cycles:4},173:{mode:"absolute",reg:"a",cycles:4},189:{mode:"absoluteX",reg:"a",cycles:4,pageCross:!0},185:{mode:"absoluteY",reg:"a",cycles:4,pageCross:!0},161:{mode:"indirectX",reg:"a",cycles:6},177:{mode:"indirectY",reg:"a",cycles:5,pageCross:!0},162:{mode:"immediate",reg:"x",cycles:2},166:{mode:"zeroPage",reg:"x",cycles:3},182:{mode:"zeroPageY",reg:"x",cycles:4},174:{mode:"absolute",reg:"x",cycles:4},190:{mode:"absoluteY",reg:"x",cycles:4,pageCross:!0},160:{mode:"immediate",reg:"y",cycles:2},164:{mode:"zeroPage",reg:"y",cycles:3},180:{mode:"zeroPageX",reg:"y",cycles:4},172:{mode:"absolute",reg:"y",cycles:4},188:{mode:"absoluteX",reg:"y",cycles:4,pageCross:!0}},store:{133:{mode:"zeroPage",reg:"a",cycles:3},149:{mode:"zeroPageX",reg:"a",cycles:4},141:{mode:"absolute",reg:"a",cycles:4},157:{mode:"absoluteX",reg:"a",cycles:5},153:{mode:"absoluteY",reg:"a",cycles:5},129:{mode:"indirectX",reg:"a",cycles:6},145:{mode:"indirectY",reg:"a",cycles:6},134:{mode:"zeroPage",reg:"x",cycles:3},150:{mode:"zeroPageY",reg:"x",cycles:4},142:{mode:"absolute",reg:"x",cycles:4},132:{mode:"zeroPage",reg:"y",cycles:3},148:{mode:"zeroPageX",reg:"y",cycles:4},140:{mode:"absolute",reg:"y",cycles:4}},transfer:{170:{src:"a",dest:"x",cycles:2},168:{src:"a",dest:"y",cycles:2},138:{src:"x",dest:"a",cycles:2},152:{src:"y",dest:"a",cycles:2},186:{src:"sp",dest:"x",cycles:2},154:{src:"x",dest:"sp",cycles:2}},stack:{72:{op:"push",reg:"a",cycles:3},8:{op:"pushStatus",cycles:3},104:{op:"pull",reg:"a",cycles:4},40:{op:"pullStatus",cycles:4}},logical:{41:{op:"and",mode:"immediate",cycles:2},37:{op:"and",mode:"zeroPage",cycles:3},53:{op:"and",mode:"zeroPageX",cycles:4},45:{op:"and",mode:"absolute",cycles:4},61:{op:"and",mode:"absoluteX",cycles:4,pageCross:!0},57:{op:"and",mode:"absoluteY",cycles:4,pageCross:!0},33:{op:"and",mode:"indirectX",cycles:6},49:{op:"and",mode:"indirectY",cycles:5,pageCross:!0},9:{op:"ora",mode:"immediate",cycles:2},5:{op:"ora",mode:"zeroPage",cycles:3},21:{op:"ora",mode:"zeroPageX",cycles:4},13:{op:"ora",mode:"absolute",cycles:4},29:{op:"ora",mode:"absoluteX",cycles:4,pageCross:!0},25:{op:"ora",mode:"absoluteY",cycles:4,pageCross:!0},1:{op:"ora",mode:"indirectX",cycles:6},17:{op:"ora",mode:"indirectY",cycles:5,pageCross:!0},73:{op:"eor",mode:"immediate",cycles:2},69:{op:"eor",mode:"zeroPage",cycles:3},85:{op:"eor",mode:"zeroPageX",cycles:4},77:{op:"eor",mode:"absolute",cycles:4},93:{op:"eor",mode:"absoluteX",cycles:4,pageCross:!0},89:{op:"eor",mode:"absoluteY",cycles:4,pageCross:!0},65:{op:"eor",mode:"indirectX",cycles:6},81:{op:"eor",mode:"indirectY",cycles:5,pageCross:!0},36:{op:"bit",mode:"zeroPage",cycles:3},44:{op:"bit",mode:"absolute",cycles:4}},arithmetic:{105:{op:"adc",mode:"immediate",cycles:2},101:{op:"adc",mode:"zeroPage",cycles:3},117:{op:"adc",mode:"zeroPageX",cycles:4},109:{op:"adc",mode:"absolute",cycles:4},125:{op:"adc",mode:"absoluteX",cycles:4,pageCross:!0},121:{op:"adc",mode:"absoluteY",cycles:4,pageCross:!0},97:{op:"adc",mode:"indirectX",cycles:6},113:{op:"adc",mode:"indirectY",cycles:5,pageCross:!0},233:{op:"sbc",mode:"immediate",cycles:2},229:{op:"sbc",mode:"zeroPage",cycles:3},245:{op:"sbc",mode:"zeroPageX",cycles:4},237:{op:"sbc",mode:"absolute",cycles:4},253:{op:"sbc",mode:"absoluteX",cycles:4,pageCross:!0},249:{op:"sbc",mode:"absoluteY",cycles:4,pageCross:!0},225:{op:"sbc",mode:"indirectX",cycles:6},241:{op:"sbc",mode:"indirectY",cycles:5,pageCross:!0}},compare:{201:{reg:"a",mode:"immediate",cycles:2},197:{reg:"a",mode:"zeroPage",cycles:3},213:{reg:"a",mode:"zeroPageX",cycles:4},205:{reg:"a",mode:"absolute",cycles:4},221:{reg:"a",mode:"absoluteX",cycles:4,pageCross:!0},217:{reg:"a",mode:"absoluteY",cycles:4,pageCross:!0},193:{reg:"a",mode:"indirectX",cycles:6},209:{reg:"a",mode:"indirectY",cycles:5,pageCross:!0},224:{reg:"x",mode:"immediate",cycles:2},228:{reg:"x",mode:"zeroPage",cycles:3},236:{reg:"x",mode:"absolute",cycles:4},192:{reg:"y",mode:"immediate",cycles:2},196:{reg:"y",mode:"zeroPage",cycles:3},204:{reg:"y",mode:"absolute",cycles:4}},incdec:{232:{op:"inc",reg:"x",cycles:2},200:{op:"inc",reg:"y",cycles:2},202:{op:"dec",reg:"x",cycles:2},136:{op:"dec",reg:"y",cycles:2},230:{op:"incMem",mode:"zeroPage",cycles:5},246:{op:"incMem",mode:"zeroPageX",cycles:6},238:{op:"incMem",mode:"absolute",cycles:6},254:{op:"incMem",mode:"absoluteX",cycles:7},198:{op:"decMem",mode:"zeroPage",cycles:5},214:{op:"decMem",mode:"zeroPageX",cycles:6},206:{op:"decMem",mode:"absolute",cycles:6},222:{op:"decMem",mode:"absoluteX",cycles:7}},shift:{10:{op:"asl",mode:"accumulator",cycles:2},6:{op:"asl",mode:"zeroPage",cycles:5},22:{op:"asl",mode:"zeroPageX",cycles:6},14:{op:"asl",mode:"absolute",cycles:6},30:{op:"asl",mode:"absoluteX",cycles:7},74:{op:"lsr",mode:"accumulator",cycles:2},70:{op:"lsr",mode:"zeroPage",cycles:5},86:{op:"lsr",mode:"zeroPageX",cycles:6},78:{op:"lsr",mode:"absolute",cycles:6},94:{op:"lsr",mode:"absoluteX",cycles:7},42:{op:"rol",mode:"accumulator",cycles:2},38:{op:"rol",mode:"zeroPage",cycles:5},54:{op:"rol",mode:"zeroPageX",cycles:6},46:{op:"rol",mode:"absolute",cycles:6},62:{op:"rol",mode:"absoluteX",cycles:7},106:{op:"ror",mode:"accumulator",cycles:2},102:{op:"ror",mode:"zeroPage",cycles:5},118:{op:"ror",mode:"zeroPageX",cycles:6},110:{op:"ror",mode:"absolute",cycles:6},126:{op:"ror",mode:"absoluteX",cycles:7}},jump:{76:{op:"jmp",mode:"absolute",cycles:3},108:{op:"jmp",mode:"indirect",cycles:5},32:{op:"jsr",cycles:6},96:{op:"rts",cycles:6},64:{op:"rti",cycles:6}},branch:{144:{condition:"carry",expected:!1,cycles:2},176:{condition:"carry",expected:!0,cycles:2},240:{condition:"zero",expected:!0,cycles:2},48:{condition:"negative",expected:!0,cycles:2},208:{condition:"zero",expected:!1,cycles:2},16:{condition:"negative",expected:!1,cycles:2},80:{condition:"overflow",expected:!1,cycles:2},112:{condition:"overflow",expected:!0,cycles:2}},flags:{24:{flag:"carry",value:!1,cycles:2},56:{flag:"carry",value:!0,cycles:2},88:{flag:"interruptDisable",value:!1,cycles:2},120:{flag:"interruptDisable",value:!0,cycles:2},184:{flag:"overflow",value:!1,cycles:2},216:{flag:"decimalMode",value:!1,cycles:2},248:{flag:"decimalMode",value:!0,cycles:2}},other:{0:{op:"brk",cycles:7},234:{op:"nop",cycles:2}},unofficial:{2:{op:"jam",cycles:2},18:{op:"jam",cycles:2},34:{op:"jam",cycles:2},50:{op:"jam",cycles:2},66:{op:"jam",cycles:2},82:{op:"jam",cycles:2},98:{op:"jam",cycles:2},114:{op:"jam",cycles:2},146:{op:"jam",cycles:2},178:{op:"jam",cycles:2},210:{op:"jam",cycles:2},242:{op:"jam",cycles:2},3:{op:"slo",mode:"indirectX",cycles:8},7:{op:"slo",mode:"zeroPage",cycles:5},15:{op:"slo",mode:"absolute",cycles:6},19:{op:"slo",mode:"indirectY",cycles:8},23:{op:"slo",mode:"zeroPageX",cycles:6},27:{op:"slo",mode:"absoluteY",cycles:7},31:{op:"slo",mode:"absoluteX",cycles:7},35:{op:"rla",mode:"indirectX",cycles:8},39:{op:"rla",mode:"zeroPage",cycles:5},47:{op:"rla",mode:"absolute",cycles:6},51:{op:"rla",mode:"indirectY",cycles:8},55:{op:"rla",mode:"zeroPageX",cycles:6},59:{op:"rla",mode:"absoluteY",cycles:7},63:{op:"rla",mode:"absoluteX",cycles:7},67:{op:"sre",mode:"indirectX",cycles:8},71:{op:"sre",mode:"zeroPage",cycles:5},79:{op:"sre",mode:"absolute",cycles:6},83:{op:"sre",mode:"indirectY",cycles:8},87:{op:"sre",mode:"zeroPageX",cycles:6},91:{op:"sre",mode:"absoluteY",cycles:7},95:{op:"sre",mode:"absoluteX",cycles:7},99:{op:"rra",mode:"indirectX",cycles:8},103:{op:"rra",mode:"zeroPage",cycles:5},111:{op:"rra",mode:"absolute",cycles:6},115:{op:"rra",mode:"indirectY",cycles:8},119:{op:"rra",mode:"zeroPageX",cycles:6},123:{op:"rra",mode:"absoluteY",cycles:7},127:{op:"rra",mode:"absoluteX",cycles:7},131:{op:"sax",mode:"indirectX",cycles:6},135:{op:"sax",mode:"zeroPage",cycles:3},143:{op:"sax",mode:"absolute",cycles:4},151:{op:"sax",mode:"zeroPageY",cycles:4},163:{op:"lax",mode:"indirectX",cycles:6},167:{op:"lax",mode:"zeroPage",cycles:3},175:{op:"lax",mode:"absolute",cycles:4},179:{op:"lax",mode:"indirectY",cycles:5,pageCross:!0},183:{op:"lax",mode:"zeroPageY",cycles:4},191:{op:"lax",mode:"absoluteY",cycles:4,pageCross:!0},195:{op:"dcp",mode:"indirectX",cycles:8},199:{op:"dcp",mode:"zeroPage",cycles:5},207:{op:"dcp",mode:"absolute",cycles:6},211:{op:"dcp",mode:"indirectY",cycles:8},215:{op:"dcp",mode:"zeroPageX",cycles:6},219:{op:"dcp",mode:"absoluteY",cycles:7},223:{op:"dcp",mode:"absoluteX",cycles:7},227:{op:"isb",mode:"indirectX",cycles:8},231:{op:"isb",mode:"zeroPage",cycles:5},239:{op:"isb",mode:"absolute",cycles:6},243:{op:"isb",mode:"indirectY",cycles:8},247:{op:"isb",mode:"zeroPageX",cycles:6},251:{op:"isb",mode:"absoluteY",cycles:7},255:{op:"isb",mode:"absoluteX",cycles:7},11:{op:"anc",mode:"immediate",cycles:2},43:{op:"anc",mode:"immediate",cycles:2},75:{op:"alr",mode:"immediate",cycles:2},107:{op:"arr",mode:"immediate",cycles:2},139:{op:"xaa",mode:"immediate",cycles:2},171:{op:"lax",mode:"immediate",cycles:2},187:{op:"las",mode:"absoluteY",cycles:4,pageCross:!0},203:{op:"sbx",mode:"immediate",cycles:2},155:{op:"tas",mode:"absoluteY",cycles:5},156:{op:"shy",mode:"absoluteX",cycles:5},158:{op:"shx",mode:"absoluteY",cycles:5},159:{op:"sha",mode:"absoluteY",cycles:5},147:{op:"sha",mode:"zeroPageY",cycles:6},4:{op:"nop",mode:"zeroPage",cycles:3},12:{op:"nop",mode:"absolute",cycles:4},20:{op:"nop",mode:"zeroPageX",cycles:4},26:{op:"nop",mode:"implied",cycles:2},28:{op:"nop",mode:"absoluteX",cycles:4,pageCross:!0},52:{op:"nop",mode:"zeroPageX",cycles:4},58:{op:"nop",mode:"implied",cycles:2},60:{op:"nop",mode:"absoluteX",cycles:4,pageCross:!0},68:{op:"nop",mode:"zeroPage",cycles:3},84:{op:"nop",mode:"zeroPageX",cycles:4},90:{op:"nop",mode:"implied",cycles:2},92:{op:"nop",mode:"absoluteX",cycles:4,pageCross:!0},100:{op:"nop",mode:"zeroPage",cycles:3},116:{op:"nop",mode:"zeroPageX",cycles:4},122:{op:"nop",mode:"implied",cycles:2},124:{op:"nop",mode:"absoluteX",cycles:4,pageCross:!0},128:{op:"nop",mode:"immediate",cycles:2},130:{op:"nop",mode:"immediate",cycles:2},137:{op:"nop",mode:"immediate",cycles:2},194:{op:"nop",mode:"immediate",cycles:2},212:{op:"nop",mode:"zeroPageX",cycles:4},218:{op:"nop",mode:"implied",cycles:2},220:{op:"nop",mode:"absoluteX",cycles:4,pageCross:!0},226:{op:"nop",mode:"immediate",cycles:2},244:{op:"nop",mode:"zeroPageX",cycles:4},250:{op:"nop",mode:"implied",cycles:2},252:{op:"nop",mode:"absoluteX",cycles:4,pageCross:!0},235:{op:"sbc",mode:"immediate",cycles:2,duplicate:233}}}}reset(){this.a=0,this.x=0,this.y=0,this.sp=253,this.carryFlag=!1,this.zeroFlag=!1,this.interruptDisableFlag=!0,this.decimalModeFlag=!1,this.breakCommand=!1,this.overflowFlag=!1,this.negativeFlag=!1,this.cycles=0,this.totalCycles=0,this.instructionCount=0;const e=this.system.memory.read(65532),t=this.system.memory.read(65533);this.pc=t<<8|e,this.debug&&console.log(`CPU Reset: PC set to 0x${this.pc.toString(16)}`),this.nmiPending=!1}step(){if(this.nmiPending)return this.handleNMI(),this.nmiPending=!1,7;if((this.system.apu&&this.system.apu.isIRQAsserted()||this.system.mapper&&this.system.mapper.isIRQAsserted())&&!this.interruptDisableFlag)return this.handleIRQ(),7;const t=this.system.memory.read(this.pc);this.pc++;const r=this.executeInstruction(t);return this.cycles+=r,this.totalCycles+=r,this.instructionCount++,r}executeInstruction(e){const t=(u,h=!1)=>{let f,p,g=!1,v;switch(u){case"immediate":return p=this.system.memory.read(this.pc++),{value:p,pageCrossed:!1};case"zeroPage":return f=this.system.memory.read(this.pc++),p=this.system.memory.read(f),{address:f,value:p,pageCrossed:!1};case"zeroPageX":return f=this.system.memory.read(this.pc++)+this.x&255,p=this.system.memory.read(f),{address:f,value:p,pageCrossed:!1};case"zeroPageY":return f=this.system.memory.read(this.pc++)+this.y&255,p=this.system.memory.read(f),{address:f,value:p,pageCrossed:!1};case"absolute":return f=this.readWord(this.pc),this.pc+=2,p=this.system.memory.read(f),{address:f,value:p,pageCrossed:!1};case"absoluteX":return v=this.readWord(this.pc),this.pc+=2,f=v+this.x&65535,g=(v&65280)!==(f&65280),p=this.system.memory.read(f),{address:f,value:p,pageCrossed:g,baseAddr:v};case"absoluteY":return v=this.readWord(this.pc),this.pc+=2,f=v+this.y&65535,g=(v&65280)!==(f&65280),p=this.system.memory.read(f),{address:f,value:p,pageCrossed:g,baseAddr:v};case"indirectX":const _=this.system.memory.read(this.pc++)+this.x&255;return f=this.readWordBug(_),p=this.system.memory.read(f),{address:f,value:p,pageCrossed:!1};case"indirectY":const S=this.system.memory.read(this.pc++);return v=this.readWordBug(S),f=v+this.y&65535,g=(v&65280)!==(f&65280),p=this.system.memory.read(f),{address:f,value:p,pageCrossed:g,baseAddr:v};case"indirect":const T=this.readWord(this.pc);return this.pc+=2,f=this.readWordBug(T),{address:f,pageCrossed:!1};case"accumulator":return{value:this.a,pageCrossed:!1};default:return{address:f,value:p,pageCrossed:g}}};let r=null,o=null;for(const u in this.instructions)if(this.instructions[u][e]){r=this.instructions[u][e],o=u;break}if(!r)return console.warn(`Unimplemented opcode: 0x${e.toString(16)}`),2;let l=r.cycles;switch(o){case"load":{const{value:u,pageCrossed:h}=t(r.mode);this[r.reg]=u,this.zeroFlag=this[r.reg]===0,this.negativeFlag=(this[r.reg]&128)!==0,r.pageCross&&h&&l++;break}case"store":{let u;switch(r.mode){case"zeroPage":u=this.system.memory.read(this.pc++);break;case"zeroPageX":u=this.system.memory.read(this.pc++)+this.x&255;break;case"zeroPageY":u=this.system.memory.read(this.pc++)+this.y&255;break;case"absolute":u=this.readWord(this.pc),this.pc+=2;break;case"absoluteX":u=this.readWord(this.pc)+this.x&65535,this.pc+=2;break;case"absoluteY":u=this.readWord(this.pc)+this.y&65535,this.pc+=2;break;case"indirectX":{const h=this.system.memory.read(this.pc++)+this.x&255;u=this.readWordBug(h);break}case"indirectY":{const h=this.system.memory.read(this.pc++);u=this.readWordBug(h)+this.y&65535;break}}r.hasOwnProperty("value")?this.system.memory.write(u,r.value):this.system.memory.write(u,this[r.reg]);break}case"transfer":{this[r.dest]=this[r.src],r.dest!=="sp"&&(this.zeroFlag=this[r.dest]===0,this.negativeFlag=(this[r.dest]&128)!==0);break}case"stack":{r.op==="push"?this.pushByte(this[r.reg]):r.op==="pushStatus"?this.pushByte(this.getStatusByte(!0)):r.op==="pull"?(this[r.reg]=this.popByte(),this.zeroFlag=this[r.reg]===0,this.negativeFlag=(this[r.reg]&128)!==0):r.op==="pullStatus"&&this.setStatusByte(this.popByte());break}case"logical":{if(r.op==="bit"){const{value:u}=t(r.mode);this.zeroFlag=(this.a&u)===0,this.overflowFlag=(u&64)!==0,this.negativeFlag=(u&128)!==0}else{const{value:u,pageCrossed:h}=t(r.mode);r.op==="and"?this.a&=u:r.op==="ora"?this.a|=u:r.op==="eor"&&(this.a^=u),this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0,r.pageCross&&h&&l++}break}case"arithmetic":{const{value:u,pageCrossed:h}=t(r.mode);r.op==="adc"?this.adc(u):r.op==="sbc"&&this.sbc(u),r.pageCross&&h&&l++;break}case"compare":{const{value:u,pageCrossed:h}=t(r.mode),f=this[r.reg],p=f-u;this.carryFlag=f>=u,this.zeroFlag=(p&255)===0,this.negativeFlag=(p&128)!==0,r.pageCross&&h&&l++;break}case"incdec":{if(r.reg)r.op==="inc"?this[r.reg]=this[r.reg]+1&255:this[r.reg]=this[r.reg]-1&255,this.zeroFlag=this[r.reg]===0,this.negativeFlag=(this[r.reg]&128)!==0;else{const{address:u}=t(r.mode);let h=this.system.memory.read(u);r.op==="incMem"?h=h+1&255:h=h-1&255,this.system.memory.write(u,h),this.zeroFlag=h===0,this.negativeFlag=(h&128)!==0}break}case"shift":{let u,h;if(r.mode==="accumulator")u=this.a;else{const f=t(r.mode);u=f.value,h=f.address}if(r.op==="asl")this.carryFlag=(u&128)!==0,u=u<<1&255;else if(r.op==="lsr")this.carryFlag=(u&1)!==0,u=u>>1&127;else if(r.op==="rol"){const f=this.carryFlag?1:0;this.carryFlag=(u&128)!==0,u=(u<<1|f)&255}else if(r.op==="ror"){const f=this.carryFlag?128:0;this.carryFlag=(u&1)!==0,u=(u>>1|f)&255}r.mode==="accumulator"?this.a=u:this.system.memory.write(h,u),this.zeroFlag=u===0,this.negativeFlag=(u&128)!==0;break}case"jump":{if(r.op==="jmp"){if(r.mode==="absolute")this.pc=this.readWord(this.pc);else if(r.mode==="indirect"){const u=this.readWord(this.pc);this.pc=this.readWordBug(u)}}else if(r.op==="jsr"){const u=this.readWord(this.pc);this.pushWord(this.pc+1),this.pc=u}else if(r.op==="rts")this.pc=this.popWord()+1;else if(r.op==="rti"){const u=this.popByte();this.setStatusByte(u),this.pc=this.popWord()}break}case"branch":{const u=r.condition+"Flag",h=this[u]===r.expected,f=this.system.memory.read(this.pc++);if(h){const p=this.pc;this.pc=this.pc+(f>=128?f-256:f)&65535,l++,(p&65280)!==(this.pc&65280)&&l++}break}case"flags":{this[r.flag+"Flag"]=r.value;break}case"other":{r.op==="brk"&&(this.system.memory.read(this.pc++),this.pushWord(this.pc),this.pushByte(this.getStatusByte(!0)),this.interruptDisableFlag=!0,this.pc=this.readWord(65534));break}case"unofficial":{switch(r.op){case"jam":console.warn("CPU JAM instruction encountered at",this.pc.toString(16),e.toString(16)),this.system.stop(),this.pc++;break;case"nop":if(r.mode){const{pageCrossed:u}=t(r.mode);r.pageCross&&u&&l++}break;case"slo":{const{address:u,value:h}=t(r.mode);this.carryFlag=(h&128)!==0;const f=h<<1&255;this.system.memory.write(u,f),this.a|=f,this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0;break}case"rla":{const{address:u,value:h}=t(r.mode),f=this.carryFlag;this.carryFlag=(h&128)!==0;const p=h<<1&255|(f?1:0);this.system.memory.write(u,p),this.a&=p,this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0;break}case"dea":this.a=this.a-1&255,this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0;break;case"shx":{const{address:u,baseAddr:h}=t(r.mode),f=this.x&(u>>8)+1;(h&65280)===(u&65280)&&this.system.memory.write(u,f);break}case"isb":{const{address:u,value:h}=t(r.mode),f=h+1&255;this.system.memory.write(u,f),this.sbc(f);break}case"sre":{const{address:u,value:h}=t(r.mode);this.carryFlag=(h&1)!==0;const f=h>>1&127;this.system.memory.write(u,f),this.a^=f,this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0;break}case"rra":{const{address:u,value:h}=t(r.mode),f=this.carryFlag?128:0;this.carryFlag=(h&1)!==0;const p=(h>>1|f)&255;this.system.memory.write(u,p),this.adc(p);break}case"sax":{let u;switch(r.mode){case"indirectX":{const h=this.system.memory.read(this.pc++)+this.x&255;u=this.readWordBug(h);break}case"zeroPage":u=this.system.memory.read(this.pc++);break;case"absolute":u=this.readWord(this.pc),this.pc+=2;break;case"zeroPageY":u=this.system.memory.read(this.pc++)+this.y&255;break}this.system.memory.write(u,this.a&this.x);break}case"lax":{const{value:u,pageCrossed:h}=t(r.mode);this.a=this.x=u,this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0,r.pageCross&&h&&l++;break}case"las":{const{value:u,pageCrossed:h}=t(r.mode),f=u&this.sp;this.a=this.x=this.sp=f,this.zeroFlag=f===0,this.negativeFlag=(f&128)!==0,r.pageCross&&h&&l++;break}case"dcp":{const{address:u,value:h}=t(r.mode),f=h-1&255;this.system.memory.write(u,f);const p=this.a-f;this.carryFlag=this.a>=f,this.zeroFlag=(p&255)===0,this.negativeFlag=(p&128)!==0;break}case"anc":{const{value:u}=t(r.mode);this.a&=u,this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0,this.carryFlag=(this.a&128)!==0;break}case"alr":{const{value:u}=t(r.mode);this.a&=u,this.carryFlag=(this.a&1)!==0,this.a=this.a>>1&127,this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0;break}case"arr":{const{value:u}=t(r.mode);this.a&=u;const h=this.carryFlag?128:0;this.a=(this.a>>1|h)&255,this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0,this.carryFlag=(this.a&64)!==0,this.overflowFlag=(this.a&64^(this.a&32)<<1)!==0;break}case"xaa":{const{value:u}=t(r.mode);this.a=this.x&u,this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0;break}case"sbx":{const{value:u}=t(r.mode),h=(this.a&this.x)-u;this.x=h&255,this.carryFlag=h>=0,this.zeroFlag=this.x===0,this.negativeFlag=(this.x&128)!==0;break}case"tas":{const{address:u,baseAddr:h}=t(r.mode);this.sp=this.a&this.x;const f=this.a&this.x&(u>>8)+1;(h&65280)===(u&65280)&&this.system.memory.write(u,f);break}case"shy":{const{address:u,baseAddr:h}=t(r.mode),f=this.y&(u>>8)+1;(h&65280)===(u&65280)&&this.system.memory.write(u,f);break}case"sha":{const{address:u,baseAddr:h}=t(r.mode),f=this.a&this.x&(u>>8)+1;(h&65280)===(u&65280)&&this.system.memory.write(u,f);break}default:{if(r.duplicate)return this.executeInstruction(r.duplicate);console.warn("Unknown unofficial opcode encountered",e.toString(16))}}break}}return l}adc(e){{const t=this.a+e+(this.carryFlag?1:0);this.carryFlag=t>255;const r=t&255;this.overflowFlag=((this.a^r)&(e^r)&128)!==0,this.a=r,this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0}}sbc(e){{const t=e^255,r=this.a+t+(this.carryFlag?1:0);this.carryFlag=r>=256;const o=r&255;this.overflowFlag=((this.a^o)&(t^o)&128)!==0,this.a=o,this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0}}readWord(e){const t=this.system.memory.read(e);return this.system.memory.read(e+1&65535)<<8|t}readWordBug(e){const t=this.system.memory.read(e),r=(e&255)===255?e&65280:e+1;return this.system.memory.read(r)<<8|t}triggerNMI(){this.nmiPending=!0}handleNMI(){this.pushWord(this.pc),this.pushByte(this.getStatusByte(!1)),this.interruptDisableFlag=!0;const e=this.system.memory.read(65530),t=this.system.memory.read(65531);this.pc=t<<8|e}handleIRQ(){this.pushWord(this.pc),this.pushByte(this.getStatusByte(!1)),this.interruptDisableFlag=!0;const e=this.system.memory.read(65534),t=this.system.memory.read(65535);this.pc=t<<8|e}pushByte(e){this.system.memory.write(256+this.sp,e),this.sp=this.sp-1&255}popByte(){return this.sp=this.sp+1&255,this.system.memory.read(256+this.sp)}pushWord(e){const t=e>>8&255,r=e&255;this.pushByte(t),this.pushByte(r)}popWord(){const e=this.popByte();return this.popByte()<<8|e}getStatusByte(e){let t=0;return this.carryFlag&&(t|=1),this.zeroFlag&&(t|=2),this.interruptDisableFlag&&(t|=4),this.decimalModeFlag&&(t|=8),(e||this.breakCommand)&&(t|=16),t|=32,this.overflowFlag&&(t|=64),this.negativeFlag&&(t|=128),t}setStatusByte(e){this.carryFlag=(e&1)!==0,this.zeroFlag=(e&2)!==0,this.interruptDisableFlag=(e&4)!==0,this.decimalModeFlag=(e&8)!==0,this.breakCommand=(e&16)!==0,this.overflowFlag=(e&64)!==0,this.negativeFlag=(e&128)!==0}}class MM{constructor(e){this.system=e,this.control=0,this.mask=0,this.status=0,this.oamAddr=0,this.oamData=0,this.scroll=0,this.addr=0,this.data=0,this.v=0,this.t=0,this.x=0,this.w=0,this.vram=new Uint8Array(4096),this.paletteRAM=new Uint8Array(32),this.oamMemory=new Uint8Array(256),this.secondaryOAM=new Uint8Array(32),this.frameBuffer=new Uint8Array(256*240*4),this.scanline=0,this.cycle=0,this.frame=0,this.nmiOccurred=!1,this.nmiOutput=!1,this.nmiPrevious=!1,this.suppressNMI=!1,this.readBuffer=0,this.nextTileId=0,this.nextTileAttribute=0,this.nextTileLow=0,this.nextTileHigh=0,this.spriteCount=0,this.spritePositions=new Uint8Array(8),this.spritePatterns=new Uint16Array(8),this.spritePriorities=new Uint8Array(8),this.spriteIndexes=new Uint8Array(8),this.spriteAttributes=new Uint8Array(8),this.currentSpriteIndex=0,this.currentSpriteLowByte=0,this.currentSpriteFlipHorizontal=!1,this.spriteCount=0,this.bgShiftLow=0,this.bgShiftHigh=0,this.attrShiftLow=0,this.attrShiftHigh=0,this.nesPalette=[[128,128,128],[0,61,166],[0,18,176],[68,0,150],[161,0,94],[199,0,40],[186,6,0],[140,23,0],[92,47,0],[16,69,0],[5,74,0],[0,71,46],[0,65,102],[0,0,0],[5,5,5],[5,5,5],[199,199,199],[0,119,255],[33,85,255],[130,55,250],[235,47,181],[255,41,80],[255,34,0],[214,50,0],[196,98,0],[53,128,0],[5,143,0],[0,138,85],[0,153,204],[33,33,33],[9,9,9],[9,9,9],[255,255,255],[15,215,255],[105,162,255],[212,128,255],[255,69,243],[255,97,139],[255,136,51],[255,156,18],[250,188,32],[159,227,14],[43,240,53],[12,240,164],[5,251,255],[94,94,94],[13,13,13],[13,13,13],[255,255,255],[166,252,255],[179,236,255],[218,171,235],[255,168,249],[255,171,179],[255,210,176],[255,239,166],[255,247,156],[215,232,149],[166,237,175],[162,242,218],[153,255,252],[221,221,221],[17,17,17],[17,17,17]],this.debugMode=!1,this.showPatternTable=!1,this.showNametable=!1,this.layerVisualizationEnabled=!1,this.backgroundLayer=new Uint32Array(256*240),this.spriteLayer=new Uint32Array(256*240)}reset(){this.control=0,this.mask=0,this.status=0,this.oamAddr=0,this.oamData=0,this.scroll=0,this.addr=0,this.data=0,this.v=0,this.t=0,this.x=0,this.w=0,this.vram.fill(0),this.paletteRAM.fill(0),this.oamMemory.fill(0),this.secondaryOAM.fill(0),this.frameBuffer.fill(0),this.scanline=0,this.cycle=0,this.frame=0,this.nmiOccurred=!1,this.nmiOutput=!1,this.nmiPrevious=!1,this.suppressNMI=!1,this.readBuffer=0,this.nextTileId=0,this.nextTileAttribute=0,this.nextTileLow=0,this.nextTileHigh=0,this.spriteCount=0,this.spritePositions.fill(0),this.spritePatterns.fill(0),this.spritePriorities.fill(0),this.spriteIndexes.fill(0),this.spriteAttributes.fill(0),this.currentSpriteIndex=0,this.currentSpriteLowByte=0,this.currentSpriteFlipHorizontal=!1,this.spriteCount=0,this.bgShiftLow=0,this.bgShiftHigh=0,this.attrShiftLow=0,this.attrShiftHigh=0,this.backgroundLayer.fill(0),this.spriteLayer.fill(0)}step(e){for(let t=0;t<e;t++)this.tick(),this.nmiOccurred&&this.nmiOutput&&!this.nmiPrevious&&!this.suppressNMI&&this.system.cpu.triggerNMI(),this.nmiPrevious=this.nmiOccurred&&this.nmiOutput}tick(){if(this.scanline===261&&this.cycle===1&&(this.status&=-129,this.status&=-65,this.status&=-33,this.nmiOccurred=!1),(this.scanline<240||this.scanline===261)&&(this.mask&24)!==0){if(this.cycle>=1&&this.cycle<=256||this.cycle>=321&&this.cycle<=336){switch(this.updateShiftRegisters(),this.cycle%8){case 1:this.fetchNameTableByte();break;case 3:this.fetchAttributeTableByte();break;case 5:this.fetchLowTileByte();break;case 7:this.fetchHighTileByte();break;case 0:this.storeTileData(),this.incrementX();break}this.cycle===256&&this.incrementY()}if(this.cycle===257&&(this.copyHorizontalBits(),this.evaluateSprites()),this.cycle>=257&&this.cycle<=320){const e=Math.floor((this.cycle-257)/8);switch(this.cycle%8){case 1:this.fetchSpriteGarbageByte();break;case 3:break;case 5:this.fetchSpriteLowTileByte(e);break;case 7:this.fetchSpriteHighTileByte(e);break}}this.scanline===261&&this.cycle>=280&&this.cycle<=304&&this.copyVerticalBits()}this.scanline===241&&this.cycle===1&&(this.suppressNMI||(this.status|=128,this.nmiOccurred=!0),this.suppressNMI=!1),this.scanline<240&&this.cycle>=1&&this.cycle<=256&&this.renderPixel(),this.cycle++,this.cycle>340&&(this.cycle=0,this.scanline++,this.scanline>261&&(this.scanline=0,this.frame++,this.frame&1&&(this.mask&24)!==0&&(this.cycle=1)))}updateShiftRegisters(){(this.mask&24)!==0&&(this.bgShiftLow<<=1,this.bgShiftHigh<<=1,this.attrShiftLow<<=1,this.attrShiftHigh<<=1,this.bgShiftLow&=65535,this.bgShiftHigh&=65535,this.attrShiftLow&=65535,this.attrShiftHigh&=65535)}storeTileData(){if((this.mask&24)!==0){this.bgShiftLow=this.bgShiftLow&65280|this.nextTileLow,this.bgShiftHigh=this.bgShiftHigh&65280|this.nextTileHigh;const e=(this.nextTileAttribute&1)!==0?255:0,t=(this.nextTileAttribute&2)!==0?255:0;this.attrShiftLow=this.attrShiftLow&65280|e,this.attrShiftHigh=this.attrShiftHigh&65280|t}}fetchNameTableByte(){if((this.mask&24)===0)return;const t=8192|this.v&4095;this.nextTileId=this.ppuRead(t)}fetchAttributeTableByte(){if((this.mask&24)===0)return;const e=this.v,t=9152|e&3072|e>>4&56|e>>2&7,r=this.ppuRead(t),o=e>>4&4|e&2;this.nextTileAttribute=r>>o&3}fetchLowTileByte(){if((this.mask&24)===0)return;const e=(this.control&16)!==0?4096:0,t=this.v>>12&7,r=e+this.nextTileId*16+t;this.nextTileLow=this.ppuRead(r)}fetchHighTileByte(){if((this.mask&24)===0)return;const e=(this.control&16)!==0?4096:0,t=this.v>>12&7,r=e+this.nextTileId*16+t+8;this.nextTileHigh=this.ppuRead(r)}fetchSpriteGarbageByte(){(this.mask&24)!==0&&this.ppuRead(8192|this.v&4095)}fetchSpriteLowTileByte(e){if((this.mask&24)===0)return;if(this.secondaryOAM[e*4]===255){this.currentSpriteLowByte=0;return}const t=this.scanline+1,r=this.secondaryOAM[e*4],o=this.secondaryOAM[e*4+1],l=this.secondaryOAM[e*4+2],u=this.control&32?16:8,h=(l&128)!==0;let f=t-r;h&&(f=u-1-f);let p;if(u===8)p=(this.control&8?4096:0)+o*16+f;else{const g=o&1?4096:0,v=o&254;f<8?p=g+v*16+f:p=g+v*16+16+(f-8)}this.currentSpriteLowByte=this.ppuRead(p),this.currentSpriteFlipHorizontal=(l&64)!==0}fetchSpriteHighTileByte(e){if((this.mask&24)===0)return;if(this.secondaryOAM[e*4]===255){this.storeCurrentSpritePattern(e,0);return}const t=this.scanline+1,r=this.secondaryOAM[e*4],o=this.secondaryOAM[e*4+1],l=this.secondaryOAM[e*4+2],u=this.control&32?16:8,h=(l&128)!==0;let f=t-r;h&&(f=u-1-f);let p;if(u===8)p=(this.control&8?4096:0)+o*16+f+8;else{const _=o&1?4096:0,S=o&254;f<8?p=_+S*16+f+8:p=_+S*16+16+(f-8)+8}const g=this.ppuRead(p);let v;this.currentSpriteFlipHorizontal?v=this.flipByte(this.currentSpriteLowByte)|this.flipByte(g)<<8:v=this.currentSpriteLowByte|g<<8,this.storeCurrentSpritePattern(e,v)}storeCurrentSpritePattern(e,t){this.spritePatterns[e]=t}incrementX(){(this.mask&24)!==0&&((this.v&31)===31?(this.v&=-32,this.v^=1024):this.v+=1)}incrementY(){if((this.mask&24)===0)return;if((this.v>>12&7)===7){this.v&=-28673;const t=this.v>>5&31;t===29?(this.v&=-993,this.v^=2048):t===31?this.v&=-993:this.v+=32}else this.v+=4096}copyHorizontalBits(){(this.mask&24)!==0&&(this.v=this.v&-1056|this.t&1055)}copyVerticalBits(){(this.mask&24)!==0&&(this.v=this.v&-31713|this.t&31712)}evaluateSprites(){this.spriteCount=0,this.status&=-33;const e=this.control&32?16:8,t=this.scanline+1;if(!(t>239)){for(let r=0;r<64;r++){const o=r*4,l=this.oamMemory[o];if(t>=l&&t<l+e)if(this.spriteCount<=8){const u=this.spriteCount;this.spriteIndexes[u]=r,this.secondaryOAM[u*4]=this.oamMemory[o],this.secondaryOAM[u*4+1]=this.oamMemory[o+1],this.secondaryOAM[u*4+2]=this.oamMemory[o+2],this.secondaryOAM[u*4+3]=this.oamMemory[o+3],this.spritePositions[u]=this.oamMemory[o+3],this.spriteAttributes[u]=this.oamMemory[o+2],this.spritePriorities[u]=this.oamMemory[o+2]>>5&1,this.spriteCount++}else{this.status|=32;break}}for(let r=this.spriteCount;r<8;r++)this.secondaryOAM[r*4]=255,this.spriteIndexes[r]=64}}flipByte(e){return e=(e&240)>>4|(e&15)<<4,e=(e&204)>>2|(e&51)<<2,e=(e&170)>>1|(e&85)<<1,e}renderPixel(){const e=this.cycle-1,t=this.scanline,r=(this.mask&8)!==0,o=(this.mask&16)!==0,l=r?this.getBackgroundPixel():{pixel:0,color:this.ppuRead(16128)&63},u=o?this.getSpritePixel(e):{pixel:0};this.handleSpriteZeroHit(e,l.pixel,u.pixel,u.isZero);const{color:h,layer:f}=this.getFinalPixelColor(l,u);this.setPixel(e,t,h,f)}getBackgroundPixel(){const t=15-this.x,r=this.bgShiftLow>>t&1,o=this.bgShiftHigh>>t&1,l=this.attrShiftLow>>t&1,u=this.attrShiftHigh>>t&1,h=o<<1|r,f=u<<1|l;let p=this.ppuRead(16128)&63;if(h!==0){const g=16128+f*4+h;p=this.ppuRead(g)&63}return{pixel:h,palette:f,color:p}}getSpritePixel(e){const t=(this.mask&4)!==0;if(e<8&&!t)return{pixel:0};for(let r=0;r<this.spriteCount;r++){const o=this.spritePositions[r];if(e<o||e>=o+8)continue;const u=7-(e-o),h=this.spritePatterns[r]>>u&1,p=(this.spritePatterns[r]>>8>>u&1)<<1|h;if(p===0)continue;const v=16128+((this.spriteAttributes[r]&3)+4)*4+p,_=this.ppuRead(v)&63,S=this.spritePriorities[r],T=this.spriteIndexes[r]===0;return{pixel:p,color:_,priority:S,isZero:T}}return{pixel:0}}handleSpriteZeroHit(e,t,r,o){if(t===0||r===0||!o||e>=255)return;const l=e+1,u=(this.mask&2)===0,h=(this.mask&4)===0;(l>=8||!u&&!h)&&(this.status|=64)}getFinalPixelColor(e,t){const r={background:!1,sprite:!1};return e.pixel===0&&t.pixel===0?(r.background=!0,{color:e.color,layer:r}):t.pixel===0?(r.background=!0,{color:e.color,layer:r}):e.pixel===0?(r.sprite=!0,{color:t.color,layer:r}):t.priority===0?(r.sprite=!0,{color:t.color,layer:r}):(r.background=!0,{color:e.color,layer:r})}setPixel(e,t,r,o={background:!1,sprite:!1}){if(e<0||e>=256||t<0||t>=240)return;const u=((239-t)*256+e)*4,h=this.nesPalette[r&63];if(this.frameBuffer[u]=h[0],this.frameBuffer[u+1]=h[1],this.frameBuffer[u+2]=h[2],this.frameBuffer[u+3]=255,this.layerVisualizationEnabled){const f=h[0],p=h[1],g=h[2],v=255<<24|g<<16|p<<8|f;o.background?(this.backgroundLayer[t*256+e]=v,this.spriteLayer[t*256+e]=0):o.sprite&&(this.spriteLayer[t*256+e]=v,this.backgroundLayer[t*256+e]=0)}}clearLayerData(){this.backgroundLayer.fill(0),this.spriteLayer.fill(0)}setLayerVisualizationEnabled(e){this.layerVisualizationEnabled=e,e&&(this.backgroundLayer.fill(0),this.spriteLayer.fill(0))}writeMask(e){this.mask=e}writeScroll(e){if(this.w===0){this.x=e&7;const t=e>>3;this.t=this.t&-32|t,this.w=1}else{const t=(e&7)<<12;this.t=this.t&-28673|t;const o=(e&248)>>3<<5;this.t=this.t&-993|o,this.w=0}}writeAddress(e){this.w===0?(this.t=this.t&255|(e&63)<<8,this.w=1):(this.t=this.t&65280|e,this.v=this.t,this.w=0)}writeControl(e){const t=this.nmiOutput;this.control=e,this.t=this.t&-3073|(e&3)<<10,this.nmiOutput=(e&128)!==0,!t&&this.nmiOutput&&this.nmiOccurred&&!this.suppressNMI&&this.system.cpu.triggerNMI()}writeOAMAddress(e){this.oamAddr=e}writeOAMData(e){const t=this.oamAddr;this.oamMemory[t]=e,this.oamAddr=this.oamAddr+1&255}readOAM(){return this.oamMemory[this.oamAddr]}writeData(e){const t=this.v&16383;this.ppuWrite(t,e),this.v+=this.control&4?32:1,this.v&=32767}readData(){const e=this.v&16383;let t=this.readBuffer;return this.readBuffer=this.ppuRead(e),e>=16128&&(t=this.ppuRead(e)),this.v+=this.control&4?32:1,this.v&=32767,t}ppuWrite(e,t){if(t=t&255,e&=16383,!!this.system.mapper)if(e<8192)this.system.mapper.ppuWrite(e,t);else if(e<12288){const r=this.mirrorAddress(e);r<this.vram.length&&(this.vram[r]=t)}else e<16128?this.ppuWrite(e-4096,t):(e&=31,(e&19)===16&&(e&=15),e<this.paletteRAM.length&&(this.paletteRAM[e]=t))}ppuRead(e){e&=16383;let t=0;if(!this.system.mapper)return t;if(e<8192)t=this.system.mapper.ppuRead(e),(t==null||t<0||t>255)&&(t=0);else if(e<12288){const r=this.mirrorAddress(e);r<this.vram.length?t=this.vram[r]:t=0}else{if(e<16128)return this.ppuRead(e-4096);e&=31,(e&19)===16&&(e&=15),e<this.paletteRAM.length?t=this.paletteRAM[e]:t=0}return t}mirrorAddress(e){const t=e&4095,r=this.system.mapper.getMirroring(),o=t&1023,l=t>>10&3;if(r===4)return t;switch(r){case 0:return(l&2?1024:0)|o;case 1:return(l&1?1024:0)|o;default:return t}}}class EM{constructor(e){this.system=e,this.sampleRate=44100,this.cyclesPerSample=Math.floor(1789773/this.sampleRate),this.audioContext=null,this.audioNode=null,this.sampleRate=44100,this.cyclesPerSample=1789773/this.sampleRate,this.mainThreadBufferSize=8192,this.mainThreadBuffer=new Float32Array(this.mainThreadBufferSize),this.mainThreadBufferPosition=0,this.sampleCounter=0,this.cyclesRemainder=0,this.channelOutput={pulse1:0,pulse2:0,triangle:0,noise:0,dmc:0},this.pulse1={enabled:!1,volume:0,constantVolume:!1,lengthCounterHalt:!1,envelopeLoop:!1,envelopePeriod:0,envelopeValue:0,envelopeCounter:0,envelopeReset:!1,dutyMode:0,dutyValue:0,dutyPosition:0,sweepEnabled:!1,sweepPeriod:0,sweepNegate:!1,sweepShift:0,sweepCounter:0,sweepReload:!1,period:0,timerCounter:0,lengthCounter:0,sequenceCounter:0},this.pulse2={enabled:!1,volume:0,constantVolume:!1,lengthCounterHalt:!1,envelopeLoop:!1,envelopePeriod:0,envelopeValue:0,envelopeCounter:0,envelopeReset:!1,dutyMode:0,dutyValue:0,dutyPosition:0,sweepEnabled:!1,sweepPeriod:0,sweepNegate:!1,sweepShift:0,sweepCounter:0,sweepReload:!1,period:0,timerCounter:0,lengthCounter:0,sequenceCounter:0},this.triangle={enabled:!1,linearCounterControl:!1,linearCounterPeriod:0,linearCounter:0,linearCounterReload:!1,lengthCounterHalt:!1,period:0,timerCounter:0,lengthCounter:0,sequencePosition:0},this.noise={enabled:!1,volume:0,constantVolume:!1,lengthCounterHalt:!1,envelopeLoop:!1,envelopePeriod:0,envelopeValue:0,envelopeCounter:0,envelopeReset:!1,mode:!1,period:0,timerCounter:0,lengthCounter:0,shiftRegister:1},this.dmc={enabled:!1,irqEnabled:!1,loopEnabled:!1,rate:0,directLoad:0,sampleAddress:0,sampleLength:0,currentAddress:0,bytesRemaining:0,shiftRegister:0,bitsRemaining:0,outputLevel:0,silenceFlag:!1,timerCounter:0},this.frameIRQFlag=!1,this.dmcIRQFlag=!1,this.frameCounter=0,this.frameCounterMode=0,this.frameIRQInhibit=!0,this.frameCycles=0,this.frameSequence=0,this.frameStepCycles=[7457,14913,22371,29829,37281],this.initLookupTables()}initLookupTables(){this.dutyPatterns=[[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,1,1],[0,0,0,0,1,1,1,1],[1,1,1,1,1,1,0,0]],this.triangleSequence=[15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],this.noisePeriods=[4,8,16,32,64,96,128,160,202,254,380,508,762,1016,2034,4068],this.dmcRates=[428,380,340,320,286,254,226,214,190,160,142,128,106,84,72,54],this.lengthTable=[10,254,20,2,40,4,80,6,160,8,60,10,14,12,26,14,12,16,24,18,48,20,96,22,192,24,72,26,16,28,32,30],this.pulseTable=new Array(31);for(let e=0;e<31;e++)this.pulseTable[e]=95.52/(8128/e+100);this.tndTable=new Array(203);for(let e=0;e<203;e++)this.tndTable[e]=163.67/(24329/e+100)}async initAudio(){if(!(typeof window>"u"||this.audioContext))try{this.audioContext=new window.AudioContext,this.sampleRate=this.audioContext.sampleRate,this.cyclesPerSample=1789773/this.sampleRate,console.log(`AudioContext created (AudioWorklet). Sample Rate: ${this.sampleRate}, Cycles/Sample: ${this.cyclesPerSample}`),console.log(`APU Main Thread Buffer Size: ${this.mainThreadBufferSize}`);const e=`
class NESAPUProcessor extends AudioWorkletProcessor {
    constructor(options) {
        super();
        this.bufferQueue = [];
        // Use provided options or sensible defaults
        this.mainThreadBufferSize = options?.processorOptions?.bufferSize || 8192;
        this.targetQueueBuffers = options?.processorOptions?.targetQueue || 6; // Keep a decent target
        this.queueSizeSamples = this.targetQueueBuffers * this.mainThreadBufferSize;

        this.samplesInQueue = 0;
        this.requestingBuffer = false;
        this.bufferPosition = 0; // Position within the current buffer from queue

        // *** Store the absolute last processed sample (simpler) ***
        this.lastProcessedSample = 0.0;
        
        // *** Compression parameters ***
        this.threshold = 0.6;         // Level above which compression starts (higher = less compression)
        this.ratio = 3.0;             // Compression ratio (lower = less compression) 
        this.attack = 0.005;          // Attack time in seconds (higher = more transients preserved)
        this.release = 0.05;          // Release time in seconds (lower = faster recovery)
        this.makeupGain = 1.1;        // Gain to apply after compression (lower = quieter)
        this.kneeWidth = 0.2;         // Smooth knee transition width (higher = smoother)
        
        // Convert attack/release times to coefficients
        this.attackCoeff = Math.exp(-1.0 / (sampleRate * this.attack));
        this.releaseCoeff = Math.exp(-1.0 / (sampleRate * this.release));
        
        // State variables for compression
        this.envelope = 0.0;          // Current envelope level
        this.gainReduction = 1.0;     // Current gain reduction
        
        // *** DC blocking and pop reduction ***
        this.dcBlocker = { xm1: 0, ym1: 0 };
        this.limiterThreshold = 0.95;
        this.prevSample = 0.0;        // Previous sample for minimal transition smoothing
        this.smoothingFactor = 0.25;  // Very light smoothing factor - just for harsh transitions

        this.port.onmessage = (e) => {
            if (e.data.type === 'buffer') {
                const receivedBuffer = e.data.buffer;
                if (receivedBuffer && typeof receivedBuffer.length === 'number' && receivedBuffer.length === this.mainThreadBufferSize) {
                    // Apply pre-processing to the buffer before queuing
                    this.preprocessBuffer(receivedBuffer);
                    this.bufferQueue.push(receivedBuffer);
                    this.samplesInQueue += receivedBuffer.length;
                    this.requestingBuffer = false; // Allow new requests
                } else {
                    console.warn('Processor: Received invalid or unexpected size buffer:', receivedBuffer?.length);
                    this.requestingBuffer = false; // Allow requests anyway
                }
            }
        };
        this.requestMoreBuffersIfNeeded();
        console.log('Processor initialized with targeted pop reduction and minimal filtering.');
    }
    
    // Apply compression to a sample value
    compressSample(sample) {
        // Calculate absolute value for envelope follower
        const inputLevel = Math.abs(sample);
        
        // Envelope follower with different attack/release times
        if (inputLevel > this.envelope) {
            // Attack phase - input is higher than envelope
            this.envelope = this.attackCoeff * this.envelope + (1.0 - this.attackCoeff) * inputLevel;
        } else {
            // Release phase - input is lower than envelope
            this.envelope = this.releaseCoeff * this.envelope + (1.0 - this.releaseCoeff) * inputLevel;
        }
        
        // Compute gain reduction with knee
        let gainReduction = 1.0;
        if (this.envelope <= this.threshold - this.kneeWidth / 2) {
            // Below threshold - no compression
            gainReduction = 1.0;
        } else if (this.envelope > this.threshold + this.kneeWidth / 2) {
            // Above threshold + knee - full compression
            const overThreshold = this.envelope - this.threshold;
            const compressedLevel = this.threshold + overThreshold / this.ratio;
            gainReduction = compressedLevel / this.envelope;
        } else {
            // In the knee region - gradual compression
            const distanceInKnee = (this.envelope - (this.threshold - this.kneeWidth / 2)) / this.kneeWidth;
            const compressionFactor = ((1.0 - 1.0 / this.ratio) * distanceInKnee * distanceInKnee) / 2.0;
            gainReduction = 1.0 - compressionFactor;
        }
        
        // Apply compression and makeup gain
        return sample * gainReduction * this.makeupGain;
    }
    
    // Pre-process an entire buffer with compression
    preprocessBuffer(buffer) {
        // Apply compression to each sample
        for (let i = 0; i < buffer.length; i++) {
            // Apply compression but keep it light
            buffer[i] = this.compressSample(buffer[i]);
            
            // Apply DC blocking to prevent offset buildup
            buffer[i] = this.applyDCBlocker(buffer[i]);
        }
    }
    
    // Apply DC blocking filter to remove unwanted DC offset that can cause pops
    applyDCBlocker(sample) {
        // Simple DC blocking filter: y[n] = x[n] - x[n-1] + 0.995 * y[n-1]
        // This is a high-pass filter with very low cutoff (~10Hz)
        const y = sample - this.dcBlocker.xm1 + 0.995 * this.dcBlocker.ym1;
        this.dcBlocker.xm1 = sample;
        this.dcBlocker.ym1 = y;
        return y;
    }
    
    // Apply a soft limiter to prevent harsh transitions
    applyLimiter(sample) {
        // Simple soft limiter to prevent harsh clipping
        if (sample > this.limiterThreshold) {
            sample = this.limiterThreshold + (1.0 - this.limiterThreshold) * 
                     Math.tanh((sample - this.limiterThreshold) / (1.0 - this.limiterThreshold));
        } else if (sample < -this.limiterThreshold) {
            sample = -this.limiterThreshold - (1.0 - this.limiterThreshold) * 
                     Math.tanh((-sample - this.limiterThreshold) / (1.0 - this.limiterThreshold));
        }
        return sample;
    }
    
    // Apply minimal smoothing only on harsh transitions
    smoothHarshTransitions(sample, needsExtraSmoothing) {
        // Detect sudden large changes that could cause pops
        const change = Math.abs(sample - this.prevSample);
        
        // Only apply smoothing if the change is large or we're at a buffer transition
        if (change > 0.1 || needsExtraSmoothing) {
            // Apply just enough smoothing to take the edge off
            const factor = needsExtraSmoothing ? this.smoothingFactor * 2 : this.smoothingFactor;
            sample = this.prevSample * factor + sample * (1.0 - factor);
        }
        
        // Store for next comparison
        this.prevSample = sample;
        return sample;
    }

    requestMoreBuffersIfNeeded() {
        // Keep the proactive request logic
        const requestThreshold = this.queueSizeSamples * 0.9; // Request early
        if (!this.requestingBuffer && this.samplesInQueue < requestThreshold) {
             this.port.postMessage({ type: 'needBuffer' });
             this.requestingBuffer = true;
             const lowWaterMark = this.queueSizeSamples * 0.5;
             if (this.samplesInQueue < lowWaterMark) {
                 this.port.postMessage({ type: 'needBuffer' });
             }
        }
    }

    process(inputs, outputs, parameters) {
        const outputChannel = outputs[0][0];
        const bufferLength = outputChannel.length; // e.g., 128
        let outputIndex = 0;

        while (outputIndex < bufferLength) {
            let currentSample; // Sample value for this output index
            let needsCrossfade = false;

            if (this.bufferQueue.length > 0) {
                // --- Data Available ---
                const currentBuffer = this.bufferQueue[0];

                // Validate buffer state before reading
                if (!currentBuffer || typeof currentBuffer.length !== 'number' || this.bufferPosition >= currentBuffer.length) {
                     console.error("Processor Error: Invalid buffer state reading!", { bufLen: currentBuffer?.length, pos: this.bufferPosition });
                     if(this.bufferQueue.length > 0) this.bufferQueue.shift(); // Discard bad/finished buffer
                     this.bufferPosition = 0; // Reset position
                     this.samplesInQueue = this.bufferQueue.reduce((sum, buf) => sum + buf.length, 0); // Recalculate queue size
                     currentSample = this.lastProcessedSample; // Use stretch on error
                     needsCrossfade = true;
                } else {
                    // --- Get sample value ---
                    try {
                        currentSample = currentBuffer[this.bufferPosition];

                        if (isNaN(currentSample)) {
                            // console.warn(\`Processor Warning: Read NaN at pos \${this.bufferPosition}\`);
                            currentSample = this.lastProcessedSample; // Use stretch if buffer contains NaN
                            needsCrossfade = true;
                        }
                        
                        // Check if we're near the end of the buffer - prepare for extra smoothing
                        if (this.bufferPosition >= currentBuffer.length - 32) {
                            needsCrossfade = true;
                        }

                        // ** Store this sample as the last processed one **
                        this.lastProcessedSample = currentSample;

                        // Advance buffer position
                        this.bufferPosition++;
                        this.samplesInQueue--;

                        // Check if buffer finished
                        if (this.bufferPosition >= currentBuffer.length) {
                            this.bufferQueue.shift();
                            this.bufferPosition = 0;
                            needsCrossfade = true; // Definitely need crossfade at buffer boundaries
                        }
                    } catch (e) {
                        console.error("Processor Error reading buffer data:", e);
                        currentSample = this.lastProcessedSample; // Fallback on error
                        needsCrossfade = true;
                        // Attempt recovery
                        if(this.bufferQueue.length > 0) this.bufferQueue.shift();
                        this.bufferPosition = 0;
                        this.samplesInQueue = this.bufferQueue.reduce((sum, buf) => sum + buf.length, 0);
                    }
                }

            } else {
                // ***** UNDERRUN: Queue is empty *****
                // Use the simpler "last processed sample" for stretching
                currentSample = this.lastProcessedSample;
                this.samplesInQueue = 0; // Ensure count is zero
                needsCrossfade = true;
            }

            // Apply more fine-grained processing to the sample
            
            // First apply the limiter to prevent any harsh peaks
            currentSample = this.applyLimiter(currentSample);
            
            // Then smooth only harsh transitions
            currentSample = this.smoothHarshTransitions(currentSample, needsCrossfade);

            // Write the determined sample (real or stretched) to the output
            // Final safety check for NaN before writing
            outputChannel[outputIndex++] = isNaN(currentSample) ? 0.0 : currentSample;

        } // End while (outputIndex < bufferLength)

        this.requestMoreBuffersIfNeeded();
        return true;
    }
}
registerProcessor('nes-apu-processor', NESAPUProcessor);`;await this.audioContext.audioWorklet.addModule(URL.createObjectURL(new Blob([e],{type:"application/javascript"})));const t=8192,r=10;this.audioNode=new AudioWorkletNode(this.audioContext,"nes-apu-processor",{outputChannelCount:[1],processorOptions:{sampleRate:this.sampleRate,bufferSize:t,targetQueue:r}}),this.audioNode.connect(this.audioContext.destination),this.audioNode.port.onmessage=o=>{o.data.type},this.sampleCounter=0,this.cyclesRemainder=0,console.log(`AudioWorklet initialized. Buffer: ${this.mainThreadBufferSize}, Target Queue: ${r}`),this.resumeAudio()}catch(e){console.error("Failed to initialize AudioWorklet:",e)}}generateSample(){const e=this.getPulse1Output(),t=this.getPulse2Output(),r=this.getTriangleOutput(),o=this.getNoiseOutput(),l=this.getDMCOutput(),u=Math.min(30,Math.max(0,Math.floor(e+t))),h=Math.min(202,Math.max(0,Math.floor(3*r+2*o+l))),f=this.pulseTable[u],p=this.tndTable[h],g=Math.max(-.98,Math.min(.98,f+p));this.mainThreadBufferPosition<this.mainThreadBufferSize?(this.mainThreadBuffer[this.mainThreadBufferPosition++]=g,this.mainThreadBufferPosition>=this.mainThreadBufferSize&&this.sendBuffer()):console.error("APU main thread buffer overrun! Position:",this.mainThreadBufferPosition)}sendBuffer(){if(!(!this.audioNode||!this.audioContext||this.audioContext.state!=="running"||this.mainThreadBufferPosition<this.mainThreadBufferSize))try{const e=this.mainThreadBuffer.slice();this.audioNode.port.postMessage({type:"buffer",buffer:e}),this.mainThreadBufferPosition=0}catch(e){console.error("APU: Failed to send audio buffer:",e),this.mainThreadBufferPosition=0}}step(e){if(!this.cyclesPerSample||!this.audioContext||this.audioContext.state!=="running"){this.updateTimers(e),this.updateFrameCounter(e);return}for(this.sampleCounter+=e,this.updateTimers(e),this.updateFrameCounter(e);this.sampleCounter>=this.cyclesPerSample*3;)this.sampleCounter-=this.cyclesPerSample,this.generateSample()}resumeAudio(){return this.audioContext&&this.audioContext.state!=="running"?this.audioContext.resume().then(()=>{if(console.log("Audio context resumed (AudioWorklet)"),this.sampleCounter=0,this.cyclesRemainder=0,this.mainThreadBufferPosition=0,this.audioNode)try{this.audioNode.port.postMessage({type:"needBuffer"})}catch{}}).catch(e=>{console.error("Failed to resume audio context:",e),alert("Could not resume audio. Please click or interact with the page first.")}):Promise.resolve()}pauseAudio(){return this.audioContext&&this.audioContext.state==="running"?this.audioContext.suspend().then(()=>{if(console.log("Audio context suspended (AudioWorklet)"),this.mainThreadBufferPosition=0,this.audioNode)try{this.audioNode.port.postMessage({type:"clearQueue"})}catch{}}).catch(e=>{console.error("Failed to suspend audio context:",e)}):Promise.resolve()}reset(){this.pulse1={enabled:!1,volume:0,constantVolume:!1,lengthCounterHalt:!1,envelopeLoop:!1,envelopePeriod:0,envelopeValue:0,envelopeCounter:0,envelopeReset:!1,dutyMode:0,dutyValue:0,dutyPosition:0,sweepEnabled:!1,sweepPeriod:0,sweepNegate:!1,sweepShift:0,sweepCounter:0,sweepReload:!1,period:0,timerCounter:0,lengthCounter:0,sequenceCounter:0},this.pulse2={enabled:!1,volume:0,constantVolume:!1,lengthCounterHalt:!1,envelopeLoop:!1,envelopePeriod:0,envelopeValue:0,envelopeCounter:0,envelopeReset:!1,dutyMode:0,dutyValue:0,dutyPosition:0,sweepEnabled:!1,sweepPeriod:0,sweepNegate:!1,sweepShift:0,sweepCounter:0,sweepReload:!1,period:0,timerCounter:0,lengthCounter:0,sequenceCounter:0},this.triangle={enabled:!1,linearCounterControl:!1,linearCounterPeriod:0,linearCounter:0,linearCounterReload:!1,lengthCounterHalt:!1,period:0,timerCounter:0,lengthCounter:0,sequencePosition:0},this.noise={enabled:!1,volume:0,constantVolume:!1,lengthCounterHalt:!1,envelopeLoop:!1,envelopePeriod:0,envelopeValue:0,envelopeCounter:0,envelopeReset:!1,mode:!1,period:0,timerCounter:0,lengthCounter:0,shiftRegister:1},this.dmc={enabled:!1,irqEnabled:!1,loopEnabled:!1,rate:0,directLoad:0,sampleAddress:0,sampleLength:0,currentAddress:0,bytesRemaining:0,shiftRegister:0,bitsRemaining:0,outputLevel:0,silenceFlag:!1,timerCounter:0},this.frameCounter=0,this.frameCounterMode=0,this.frameIRQInhibit=!0,this.frameCycles=0,this.frameSequence=0,this.frameIRQFlag=!1,this.dmcIRQFlag=!1;for(let e=0;e<23;e++)this.writeRegister(16384+e,0);this.writeRegister(16405,0),this.mainThreadBuffer.fill(0)}updateFrameCounter(e){this.frameCycles+=e;const t=this.frameCounterMode===0?4:5,r=this.frameStepCycles[t-1];for(;this.frameCycles>=this.frameStepCycles[0];){let o=0;for(let l=0;l<t&&this.frameCycles>=this.frameStepCycles[l];l++)o=l+1;if(o>this.frameSequence&&(this.clockEnvelopes(),this.clockTriangleLinearCounter(),(o===2||o===4)&&(this.clockSweeps(),this.clockLengthCounters()),this.frameCounterMode===0&&o===4&&!this.frameIRQInhibit&&(this.frameIRQFlag=!0),this.frameSequence=o),this.frameCycles>=r){this.frameCycles-=r,this.frameSequence=0;break}if(o>=this.frameSequence&&this.frameCycles<r)break}}updateTimers(e){this.pulse1.enabled&&this.updatePulseTimer(this.pulse1,e),this.pulse2.enabled&&this.updatePulseTimer(this.pulse2,e),this.triangle.enabled&&this.updateTriangleTimer(e),this.noise.enabled&&this.updateNoiseTimer(e),this.dmc.enabled&&this.updateDMCTimer(e)}updatePulseTimer(e,t){for(e.timerCounter-=t;e.timerCounter<=0;){const r=e.period*2+2;if(e.timerCounter+=r,r===0){console.log(e.period),this.system.stop();break}e.dutyPosition=e.dutyPosition+1&7,e.dutyValue=this.dutyPatterns[e.dutyMode][e.dutyPosition]}}updateTriangleTimer(e){if(this.triangle.lengthCounter>0&&this.triangle.linearCounter>0)for(this.triangle.timerCounter-=e;this.triangle.timerCounter<=0;)this.triangle.timerCounter+=this.triangle.period+1,this.triangle.sequencePosition=this.triangle.sequencePosition+1&31}updateNoiseTimer(e){for(this.noise.timerCounter-=e;this.noise.timerCounter<=0;){this.noise.timerCounter+=this.noise.period;const t=this.noise.shiftRegister&1^this.noise.shiftRegister>>(this.noise.mode?6:1)&1;this.noise.shiftRegister=this.noise.shiftRegister>>1|t<<14}}updateDMCTimer(e){for(this.dmc.timerCounter-=e;this.dmc.timerCounter<=0;)this.dmc.timerCounter+=this.dmc.rate,this.dmc.silenceFlag||((this.dmc.shiftRegister&1)>0?this.dmc.outputLevel<=125&&(this.dmc.outputLevel+=2):this.dmc.outputLevel>=2&&(this.dmc.outputLevel-=2),this.dmc.shiftRegister>>=1),this.dmc.bitsRemaining--,this.dmc.bitsRemaining===0&&(this.dmc.bitsRemaining=8,this.dmc.bytesRemaining>0?(this.dmc.shiftRegister=this.readDMCSample(this.dmc.currentAddress),this.dmc.silenceFlag=!1,this.dmc.currentAddress=this.dmc.currentAddress+1&65535|32768,this.dmc.bytesRemaining--,this.dmc.bytesRemaining===0&&this.dmc.loopEnabled?this.restartDMCSample():this.dmc.bytesRemaining===0&&this.dmc.irqEnabled&&(this.dmcIRQFlag=!0)):this.dmc.silenceFlag=!0)}readDMCSample(e){return this.system&&this.system.cpu&&this.system.cpu.read?this.system.cpu.read(e):0}restartDMCSample(){this.dmc.currentAddress=this.dmc.sampleAddress,this.dmc.bytesRemaining=this.dmc.sampleLength}getPulse1Output(){return!this.pulse1.enabled||this.pulse1.lengthCounter===0||this.pulse1.dutyValue===0||this.pulse1.period<8||this.pulse1.period>2047?0:this.pulse1.constantVolume?this.pulse1.volume:this.pulse1.envelopeValue}getPulse2Output(){return!this.pulse2.enabled||this.pulse2.lengthCounter===0||this.pulse2.dutyValue===0||this.pulse2.period<8||this.pulse2.period>2047?0:this.pulse2.constantVolume?this.pulse2.volume:this.pulse2.envelopeValue}getTriangleOutput(){return!this.triangle.enabled||this.triangle.lengthCounter===0||this.triangle.linearCounter===0||this.triangle.period<2?0:this.triangleSequence[this.triangle.sequencePosition]}getNoiseOutput(){return!this.noise.enabled||this.noise.lengthCounter===0||(this.noise.shiftRegister&1)===0?0:this.noise.constantVolume?this.noise.volume:this.noise.envelopeValue}getDMCOutput(){return this.dmc.enabled?this.dmc.outputLevel:0}clockEnvelopes(){this.clockEnvelope(this.pulse1),this.clockEnvelope(this.pulse2),this.clockEnvelope(this.noise)}clockEnvelope(e){e.envelopeReset?(e.envelopeReset=!1,e.envelopeValue=15,e.envelopeCounter=e.envelopePeriod):e.envelopeCounter>0?e.envelopeCounter--:(e.envelopeCounter=e.envelopePeriod,e.envelopeValue>0?e.envelopeValue--:e.envelopeLoop&&(e.envelopeValue=15))}clockTriangleLinearCounter(){this.triangle.linearCounterReload?this.triangle.linearCounter=this.triangle.linearCounterPeriod:this.triangle.linearCounter>0&&this.triangle.linearCounter--,this.triangle.linearCounterControl||(this.triangle.linearCounterReload=!1)}clockSweeps(){this.clockSweep(this.pulse1,!0),this.clockSweep(this.pulse2,!1)}clockSweep(e,t){if(e.sweepCounter>0&&e.sweepCounter--,e.sweepCounter===0){e.sweepCounter=e.sweepPeriod;let r=0;const o=e.period>>e.sweepShift;e.sweepNegate?r=e.period-o:r=e.period+o,e.sweepEnabled&&e.sweepShift>0&&e.period>=8&&r<=2047&&r>=8&&(e.period=r)}e.sweepReload&&(e.sweepReload=!1,e.sweepCounter=e.sweepPeriod)}clockLengthCounters(){!this.pulse1.lengthCounterHalt&&this.pulse1.lengthCounter>0&&this.pulse1.lengthCounter--,!this.pulse2.lengthCounterHalt&&this.pulse2.lengthCounter>0&&this.pulse2.lengthCounter--,!this.triangle.lengthCounterHalt&&this.triangle.lengthCounter>0&&this.triangle.lengthCounter--,!this.noise.lengthCounterHalt&&this.noise.lengthCounter>0&&this.noise.lengthCounter--}isIRQAsserted(){return this.frameIRQFlag||this.dmcIRQFlag}writeRegister(e,t){switch(e){case 16384:this.pulse1.dutyMode=t>>6&3,this.pulse1.lengthCounterHalt=(t>>5&1)!==0,this.pulse1.envelopeLoop=(t>>5&1)!==0,this.pulse1.constantVolume=(t>>4&1)!==0,this.pulse1.volume=t&15,this.pulse1.envelopePeriod=t&15;break;case 16385:this.pulse1.sweepEnabled=(t>>7&1)!==0,this.pulse1.sweepPeriod=(t>>4&7)+1,this.pulse1.sweepNegate=(t>>3&1)!==0,this.pulse1.sweepShift=t&7,this.pulse1.sweepReload=!0;break;case 16386:this.pulse1.period=this.pulse1.period&65280|t;break;case 16387:this.pulse1.period=this.pulse1.period&255|(t&7)<<8,this.pulse1.enabled&&(this.pulse1.lengthCounter=this.lengthTable[t>>3]),this.pulse1.dutyPosition=0,this.pulse1.envelopeReset=!0;break;case 16388:this.pulse2.dutyMode=t>>6&3,this.pulse2.lengthCounterHalt=(t>>5&1)!==0,this.pulse2.envelopeLoop=(t>>5&1)!==0,this.pulse2.constantVolume=(t>>4&1)!==0,this.pulse2.volume=t&15,this.pulse2.envelopePeriod=t&15;break;case 16389:this.pulse2.sweepEnabled=(t>>7&1)!==0,this.pulse2.sweepPeriod=(t>>4&7)+1,this.pulse2.sweepNegate=(t>>3&1)!==0,this.pulse2.sweepShift=t&7,this.pulse2.sweepReload=!0;break;case 16390:this.pulse2.period=this.pulse2.period&65280|t;break;case 16391:this.pulse2.period=this.pulse2.period&255|(t&7)<<8,this.pulse2.enabled&&(this.pulse2.lengthCounter=this.lengthTable[t>>3]),this.pulse2.dutyPosition=0,this.pulse2.envelopeReset=!0;break;case 16392:this.triangle.lengthCounterHalt=(t>>7&1)!==0,this.triangle.linearCounterControl=(t>>7&1)!==0,this.triangle.linearCounterPeriod=t&127;break;case 16393:break;case 16394:this.triangle.period=this.triangle.period&65280|t;break;case 16395:this.triangle.period=this.triangle.period&255|(t&7)<<8,this.triangle.enabled&&(this.triangle.lengthCounter=this.lengthTable[t>>3]),this.triangle.linearCounterReload=!0;break;case 16396:this.noise.lengthCounterHalt=(t>>5&1)!==0,this.noise.envelopeLoop=(t>>5&1)!==0,this.noise.constantVolume=(t>>4&1)!==0,this.noise.volume=t&15,this.noise.envelopePeriod=t&15;break;case 16397:break;case 16398:this.noise.mode=(t>>7&1)!==0,this.noise.period=this.noisePeriods[t&15];break;case 16399:this.noise.enabled&&(this.noise.lengthCounter=this.lengthTable[t>>3]),this.noise.envelopeReset=!0;break;case 16400:this.dmc.irqEnabled=(t>>7&1)!==0,this.dmc.loopEnabled=(t>>6&1)!==0,this.dmc.rate=this.dmcRates[t&15],this.dmc.irqEnabled||(this.dmcIRQFlag=!1);break;case 16401:this.dmc.outputLevel=t&127;break;case 16402:this.dmc.sampleAddress=49152+t*64;break;case 16403:this.dmc.sampleLength=t*16+1;break;case 16405:this.pulse1.enabled=(t&1)!==0,this.pulse2.enabled=(t&2)!==0,this.triangle.enabled=(t&4)!==0,this.noise.enabled=(t&8)!==0;const r=this.dmc.enabled;this.dmc.enabled=(t&16)!==0,this.dmc.enabled?!r&&this.dmc.bytesRemaining===0&&this.restartDMCSample():(this.dmc.bytesRemaining=0,this.dmcIRQFlag=!1),this.pulse1.enabled||(this.pulse1.lengthCounter=0),this.pulse2.enabled||(this.pulse2.lengthCounter=0),this.triangle.enabled||(this.triangle.lengthCounter=0),this.noise.enabled||(this.noise.lengthCounter=0),this.frameIRQFlag=!1;break;case 16407:this.frameCounterMode=t>>7&1,this.frameIRQInhibit=(t>>6&1)!==0,this.frameIRQInhibit&&(this.frameIRQFlag=!1),this.frameCycles=0,this.frameSequence=0,this.frameCounterMode===1&&(this.clockEnvelopes(),this.clockTriangleLinearCounter(),this.clockSweeps(),this.clockLengthCounters());break}}readRegister(e){return e===16405?this.readStatus():0}readStatus(){let e=0;return this.pulse1.lengthCounter>0&&(e|=1),this.pulse2.lengthCounter>0&&(e|=2),this.triangle.lengthCounter>0&&(e|=4),this.noise.lengthCounter>0&&(e|=8),this.dmc.bytesRemaining>0&&(e|=16),this.frameIRQFlag&&(e|=64),this.dmcIRQFlag&&(e|=128),this.frameIRQFlag=!1,e}getChannelLevels(){return{pulse1:this.getPulse1Output(),pulse2:this.getPulse2Output(),triangle:this.getTriangleOutput(),noise:this.getNoiseOutput(),dmc:this.getDMCOutput()}}generateTestTone(e=1){if(!this.audioContext||!this.outputBuffer){console.error("Audio not initialized");return}console.log("Generating test tone");const t=440,r=this.audioContext.sampleRate,o=Math.min(e*r,this.outputBuffer.length);for(let l=0;l<o;l++)this.outputBuffer[l]=.3*Math.sin(2*Math.PI*t*l/r);this.bufferIndex=o,this.bufferReady=!0,console.log(`Generated ${o} samples of test tone`),this.audioContext.state==="running"&&this.audioNode?(console.log("Sending test tone to audio output"),this.audioNode.port.postMessage({type:"buffer",buffer:this.outputBuffer.slice(0,this.bufferIndex)}),this.outputBuffer.fill(0),this.bufferIndex=0):console.warn("AudioContext not running, test tone prepared but not sent")}setupAudioVisualizer(){if(typeof document>"u"||!this.audioContext)return;this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=2048,this.audioNode&&(this.audioNode.disconnect(),this.audioNode.connect(this.analyser),this.analyser.connect(this.audioContext.destination));const e=document.createElement("div");e.style.position="fixed",e.style.bottom="10px",e.style.right="10px",e.style.width="300px",e.style.padding="10px",e.style.backgroundColor="rgba(0, 0, 0, 0.7)",e.style.color="white",e.style.zIndex="9999",e.style.fontFamily="monospace",e.style.fontSize="12px",e.innerHTML=`
        <div>APU Audio Debug</div>
        <canvas width="280" height="100" style="background: #333; margin-top: 5px;"></canvas>
        <div id="apu-debug-stats">Waiting for data...</div>
        <button id="apu-test-tone" style="margin-top: 5px;">Test Tone</button>
        <button id="apu-debug-close" style="margin-left: 5px;">Close</button>
    `,document.body.appendChild(e);const t=e.querySelector("canvas"),r=t.getContext("2d"),o=e.querySelector("#apu-debug-stats");e.querySelector("#apu-test-tone").addEventListener("click",()=>{this.generateTestTone()}),e.querySelector("#apu-debug-close").addEventListener("click",()=>{clearInterval(this.visualizerInterval),document.body.removeChild(e)});const l=()=>{const u=this.analyser.frequencyBinCount,h=new Uint8Array(u);this.analyser.getByteTimeDomainData(h),r.fillStyle="#333",r.fillRect(0,0,t.width,t.height),r.lineWidth=2,r.strokeStyle="#00FF00",r.beginPath();const f=t.width/u;let p=0;for(let v=0;v<u;v++){const S=h[v]/128*t.height/2;v===0?r.moveTo(p,S):r.lineTo(p,S),p+=f}r.lineTo(t.width,t.height/2),r.stroke();const g=this.getChannelLevels();o.textContent=`P1:${g.pulse1} P2:${g.pulse2} TRI:${g.triangle} NOISE:${g.noise} DMC:${g.dmc}`};this.visualizerInterval=setInterval(l,30)}}class TM{constructor(e){this.system=e,this.internalRam=new Uint8Array(2048),this.mapper=null,this.openBus=0,this.debug=!1}setMapper(e){this.mapper&&typeof this.mapper.destroy=="function"&&this.mapper.destroy().catch(t=>console.error("Error destroying mapper:",t)),this.mapper=e,this.debug&&(console.debug(`Memory: Set mapper ${e.constructor.name}, PRG ROM size: ${e.prgRom.length} bytes`),e.prgRom.length>262144&&console.debug(`Memory: Large ROM detected (${e.prgRom.length/1024}KB)`))}reset(){this.internalRam.fill(0),this.openBus=0,this.mapper&&typeof this.mapper.reset=="function"&&this.mapper.reset()}write(e,t){t=t&255,e=e&65535,this.openBus=t,e<8192?this.internalRam[e&2047]=t:e<16384?this.writePPURegister(e&7,t):e<16416?this.writeIORegister(e,t):this.mapper&&this.mapper.cpuWrite(e,t),this.system.recordMemoryWrite&&this.system.recordMemoryWrite(e,t)}read(e){e=e&65535;let t;if(e<8192)t=this.internalRam[e&2047];else if(e<16384)t=this.readPPURegister(e&7);else if(e<16416)t=this.readIORegister(e);else if(this.mapper){const r=this.mapper.cpuRead(e);typeof r=="number"?t=r&255:t=this.openBus}else t=this.openBus;return this.openBus=t,this.system.recordMemoryRead&&this.system.recordMemoryRead(e,t),t}readPPURegister(e){if(!this.system.ppu)return this.openBus;let t=this.openBus;switch(e){case 0:case 1:case 3:case 5:case 6:break;case 2:t=this.system.ppu.status,this.system.ppu.status&=-129,this.system.ppu.nmiOccurred=!1,this.system.ppu.scanline===241&&this.system.ppu.cycle<=1&&(this.system.ppu.suppressNMI=!0),this.system.ppu.w=0;break;case 4:t=this.system.ppu.readOAM();break;case 7:t=this.system.ppu.readData();break}return t}writePPURegister(e,t){if(this.system.ppu)switch(e){case 0:this.system.ppu.writeControl(t);break;case 1:this.system.ppu.writeMask(t);break;case 2:break;case 3:this.system.ppu.writeOAMAddress(t);break;case 4:this.system.ppu.writeOAMData(t);break;case 5:this.system.ppu.writeScroll(t);break;case 6:this.system.ppu.writeAddress(t);break;case 7:this.system.ppu.writeData(t);break}}readIORegister(e){let t=this.openBus;switch(e){case 16406:t=this.system.controller?this.system.controller.read(0):0,this.system.recordControllerRead&&this.system.recordControllerRead(e,t);break;case 16407:t=64|this.openBus&31;break;case 16405:t=this.system.apu?this.system.apu.readStatus():this.openBus;break}return t}writeIORegister(e,t){switch(e){case 16404:this.doDMA(t);break;case 16406:this.system.controller&&this.system.controller.write(t),this.system.recordControllerWrite&&this.system.recordControllerWrite(e,t);break;default:this.system.apu&&(e==16406||e>=16384&&e<=16405)&&this.system.apu.writeRegister(e,t);break}}doDMA(e){if(!this.system.ppu)return;const t=e<<8&65280;for(let o=0;o<256;o++){const l=t+o&65535,u=this.read(l);this.system.ppu.oamMemory[o]=u}const r=this.system.cpu&&this.system.cpu.cycles%2===1?1:0;this.system.cpu&&(this.system.cpu.cycles+=513+r)}peek(e){if(e=e&65535,e<8192)return this.internalRam[e&2047];if(e<16384){if(this.system.ppu){const t=e&7;if(t===2)return this.system.ppu.status;if(t===4)return this.system.ppu.oamMemory[this.system.ppu.oamAddr]}return 0}else{if(e<16416)return 0;if(this.mapper&&typeof this.mapper.cpuRead=="function"){const t=this.mapper.cpuRead(e);return typeof t=="number"?t:0}}return 0}setDebug(e){this.debug=e}}class wM{constructor(){this.buttonStates=new Array(8).fill(!1),this.shiftRegister=0,this.strobe=!1,this.keyMappings={z:0,x:1,Shift:2,Enter:3,ArrowUp:4,ArrowDown:5,ArrowLeft:6,ArrowRight:7}}reset(){this.buttonStates.fill(!1),this.shiftRegister=0,this.strobe=!1}setButton(e,t){e>=0&&e<8&&(this.buttonStates[e]=t,this.strobe&&this.loadShiftRegister())}write(e){const t=(e&1)!==0;this.strobe&&!t&&this.loadShiftRegister(),this.strobe=t}read(e){if(e!==0)return 0;if(this.strobe)return this.buttonStates[0]?1:0;const t=this.shiftRegister&1;return this.shiftRegister>>=1,this.shiftRegister|=128,t}loadShiftRegister(){this.shiftRegister=0;for(let e=0;e<8;e++)this.buttonStates[e]&&(this.shiftRegister|=1<<e)}handleKeyInput(e,t){const r=this.keyMappings[e];r!==void 0&&this.setButton(r,t)}}class ba{constructor(e,t,r,o){this.romInfo=e,this.prgRom=t,this.chrRom=r,this.system=o,this.prgRam=new Uint8Array(e.prgRamSize),console.debug(`MMC1: PRG RAM size: ${e.prgRamSize} bytes`),this.usesChrRam=r.length===0,this.usesChrRam&&(console.debug("Game uses CHR RAM instead of CHR ROM"),this.chrRam=new Uint8Array(8192)),this.mirroring=e.mirroring,this.hasBattery=e.hasBattery}reset(){this.usesChrRam&&this.chrRam.fill(0)}async destroy(){}cpuRead(e){return 0}cpuWrite(e,t){}ppuRead(e){return 0}ppuWrite(e,t){}getMirroring(){return this.mirroring}isIRQAsserted(){return!1}handleCpuCycles(e){}}class RM extends ba{constructor(e,t,r,o){super(e,t,r,o),this.is32kbPrg=t.length>16384}reset(){super.reset()}cpuRead(e){return e>=24576&&e<32768?this.prgRam[e-24576]:e>=32768?this.is32kbPrg?this.prgRom[e-32768]:this.prgRom[e-32768&16383]:0}cpuWrite(e,t){e>=24576&&e<32768&&(this.prgRam[e-24576]=t)}ppuRead(e){return e<8192?this.usesChrRam?this.chrRam[e]:this.chrRom[e]:0}ppuWrite(e,t){e<8192&&this.usesChrRam&&(this.chrRam[e]=t)}}class AM extends ba{constructor(e,t,r,o){super(e,t,r,o),this.selectedBank=0,this.prgBankCount=Math.floor(t.length/16384),this.prgRomSize=t.length}reset(){super.reset(),this.selectedBank=0}cpuRead(e){if(e>=24576&&e<32768&&this.prgRam.length>0)return this.prgRam[e-24576];if(e>=32768)if(e<49152){const r=(this.selectedBank*16384+(e-32768))%this.prgRomSize;return this.prgRom[r]}else{const r=((this.prgBankCount-1)*16384+(e-49152))%this.prgRomSize;return this.prgRom[r]}return 0}cpuWrite(e,t){if(e>=24576&&e<32768&&this.prgRam.length>0){this.prgRam[e-24576]=t;return}e>=32768&&(this.selectedBank=t%this.prgBankCount)}ppuRead(e){return e<8192?this.usesChrRam?this.chrRam[e%this.chrRam.length]:this.chrRom[e%this.chrRom.length]:0}ppuWrite(e,t){e<8192&&this.usesChrRam&&(this.chrRam[e%this.chrRam.length]=t)}}class CM extends ba{constructor(e,t,r,o){super(e,t,r,o);const l=e.prgRamSize||8192;this.prgRam=new Uint8Array(l),this.selectedChrBank=0,this.is32kbPrg=t.length>16384,this.usesChrRam=this.chrRom.length===0,this.usesChrRam&&(console.log("Game uses CHR RAM instead of CHR ROM"),this.chrRam=new Uint8Array(8192)),this.chrBankCount=r.length/8192,this.mirroring=e.mirroring}reset(){super.reset(),this.selectedChrBank=0}cpuRead(e){return e>=24576&&e<32768?this.prgRam[e-24576]:e>=32768?this.is32kbPrg?this.prgRom[e-32768]:this.prgRom[e-32768&16383]:0}cpuWrite(e,t){if(e>=24576&&e<32768){this.prgRam[e-24576]=t;return}e>=32768&&(this.chrBankCount<=4?this.selectedChrBank=t&3:this.chrBankCount<=8?this.selectedChrBank=t&7:this.chrBankCount<=16?this.selectedChrBank=t&15:this.selectedChrBank=t&31,this.romInfo.submapper===1&&(this.selectedChrBank=t&3),this.selectedChrBank%=Math.max(1,this.chrBankCount))}ppuRead(e){if(e<8192){if(this.usesChrRam)return this.chrRam[e];{const t=this.selectedChrBank*8192%this.chrRom.length;return this.chrRom[t+e]}}return 0}ppuWrite(e,t){e<8192&&this.usesChrRam&&(this.chrRam[e]=t)}getMirroring(){return this.mirroring}destroy(){}}class Sm{constructor(){this.dbName="NESEmulatorSaves",this.storeName="saveData",this.db=null,this.dbPromise=this.openDatabase()}async openDatabase(){return new Promise((e,t)=>{const r=indexedDB.open(this.dbName,1);r.onupgradeneeded=o=>{const l=o.target.result;l.objectStoreNames.contains(this.storeName)||l.createObjectStore(this.storeName)},r.onsuccess=o=>{this.db=o.target.result,e(this.db)},r.onerror=o=>{console.error("Error opening IndexedDB:",o.target.error),t(o.target.error)}})}async saveData(e,t){try{const r=await this.dbPromise;return new Promise((o,l)=>{const f=r.transaction([this.storeName],"readwrite").objectStore(this.storeName).put(t,e);f.onsuccess=()=>{o(!0)},f.onerror=p=>{console.error("Error saving data:",p.target.error),l(p.target.error)}})}catch(r){return console.error("Failed to save data:",r),!1}}async loadData(e){try{const t=await this.dbPromise;return new Promise((r,o)=>{const h=t.transaction([this.storeName],"readonly").objectStore(this.storeName).get(e);h.onsuccess=()=>{r(h.result||null)},h.onerror=f=>{console.error("Error loading data:",f.target.error),o(f.target.error)}})}catch(t){return console.error("Failed to load data:",t),null}}async deleteData(e){try{const t=await this.dbPromise;return new Promise((r,o)=>{const h=t.transaction([this.storeName],"readwrite").objectStore(this.storeName).delete(e);h.onsuccess=()=>{r(!0)},h.onerror=f=>{console.error("Error deleting data:",f.target.error),o(f.target.error)}})}catch(t){return console.error("Failed to delete data:",t),!1}}}class bM extends ba{constructor(e,t,r,o){super(e,t,r,o),this.prgBankCount=Math.floor(t.length/16384),console.debug(`MMC1: ROM has ${this.prgBankCount} 16KB PRG banks (${t.length} bytes total)`),this.prgBankMask=this.prgBankCount-1,console.debug(`MMC1: PRG bank mask: 0x${this.prgBankMask.toString(16)}`),this.isLargeRom=this.prgRom.length>262144,this.isLargeRom&&console.debug(`MMC1: Large ROM (${this.prgRom.length/1024}KB) detected, enabling extended bank selection`);const l=e.prgRamSize||8192;this.isSxrom=this.isLargeRom&&l>=32768,this.isSorom=!this.isSxrom&&l>=16384,this.isSxrom?console.debug("MMC1: SXROM variant detected (32KB PRG RAM)"):this.isSorom?console.debug("MMC1: SOROM variant detected (16KB PRG RAM)"):this.isLargeRom&&console.debug("MMC1: SUROM variant detected (large ROM)"),this.storage=new Sm,this.saveKey=`nes-save-${e.name.replace(/[^a-z0-9]/gi,"-").toLowerCase()}`,e.hasBattery&&this.loadBatteryBackedRam(),this.control=12,this.chrBank0=0,this.chrBank1=0,this.prgBank=0,this.shiftRegister=16,this.shiftCount=0,this.prgRamBank=0,this.prgBankMode=3,this.chrBankMode=0,this.prgRamEnable=!0,this.mirroring=e.mirroring,this.ramDirty=!1,this.setupAutoSave()}cpuWrite(e,t){if(e>=24576&&e<32768){if(this.prgRamEnable){const o=this.prgRamBank*8192+(e-24576);o<this.prgRam.length&&(this.prgRam[o]=t,this.romInfo.hasBattery&&(this.ramDirty=!0))}return}if(e>=32768){if((t&128)!==0){this.shiftRegister=16,this.shiftCount=0,this.control=this.control&252|12,this.prgBankMode=3;return}if(this.shiftRegister=this.shiftRegister>>1|(t&1)<<4,this.shiftCount++,this.shiftCount===5){const r=this.shiftRegister&31;switch(e>>13&3){case 0:this.control=r,this.prgBankMode=r>>2&3,this.chrBankMode=r>>4&1,this.updateMirroring();break;case 1:this.chrBank0=r,(this.isSorom||this.isSxrom)&&(this.isSxrom?this.prgRamBank=r>>2&3:this.isSorom&&(this.prgRamBank=r>>4&1));break;case 2:if(this.chrBank1=r,this.isSorom&&this.chrBankMode===1){const l=r>>4&1;this.prgRamBank!==l&&(this.prgRamBank=l)}break;case 3:this.prgBank=r&15,this.prgRamEnable=(r&16)===0;break}this.shiftRegister=16,this.shiftCount=0}}}cpuRead(e){if(e>=24576&&e<32768){if(this.prgRamEnable){const r=this.prgRamBank*8192+(e-24576);if(r<this.prgRam.length)return this.prgRam[r]}return 0}if(e>=32768){let t=0;const r=this.isLargeRom?(this.chrBank0&16)>>4:0;switch(this.prgBankMode){case 0:case 1:if(this.isLargeRom){const l=this.prgBank>>1&7;t=(r<<3|l)<<1|e>>14&1}else t=this.prgBank&14|e>>14&1;break;case 2:e<49152?t=r<<4:t=r<<4|this.prgBank&15;break;case 3:default:e<49152?t=r<<4|this.prgBank&15:this.isLargeRom?t=r<<4|15:t=this.prgBankCount-1;break}t&=this.prgBankMask;const o=t*16384+(e&16383);return o<this.prgRom.length?this.prgRom[o]:(console.warn(`MMC1: Attempted read outside PRG ROM bounds. Addr: $${e.toString(16)}, Bank: ${t}, Offset: ${o}`),this.prgRom[o%this.prgRom.length])}return this.system.memory.openBus}ppuRead(e){if(e<8192){if(this.usesChrRam){let t=0;return this.chrBankMode===0?t=((this.chrBank0&14)>>1)*8192+e:e<4096?t=(this.chrBank0&15)*4096+e:t=(this.chrBank1&15)*4096+(e&4095),this.chrRam[t%this.chrRam.length]}if(this.chrBankMode===0){const t=this.isLargeRom?14:30,o=((this.chrBank0&t)>>1)*8192+e;return this.chrRom[o%this.chrRom.length]}else if(e<4096){const t=this.isLargeRom?15:31,o=(this.chrBank0&t)*4096+e;return this.chrRom[o%this.chrRom.length]}else{const t=this.isLargeRom?15:31,o=(this.chrBank1&t)*4096+(e&4095);return this.chrRom[o%this.chrRom.length]}}return 0}ppuWrite(e,t){if(e<8192&&this.usesChrRam){let r=0;if(this.chrBankMode===0)r=((this.chrBank0&14)>>1)*8192+e;else if(e<4096){const o=this.isLargeRom?15:31;r=(this.chrBank0&o)*4096+e}else{const o=this.isLargeRom?15:31;r=(this.chrBank1&o)*4096+(e&4095)}r<this.chrRam.length&&(this.chrRam[r]=t)}}updateMirroring(){switch(this.control&3){case 0:this.mirroring=2;break;case 1:this.mirroring=3;break;case 2:this.mirroring=1;break;case 3:this.mirroring=0;break}}getMirroring(){return this.mirroring}reset(){super.reset(),this.control=12,this.chrBank0=0,this.chrBank1=0,this.prgBank=0,this.prgRamBank=0,this.prgBankMode=3,this.chrBankMode=0,this.updateMirroring(),this.shiftRegister=16,this.shiftCount=0,this.prgRamEnable=!0}async loadBatteryBackedRam(){try{const e=await this.storage.loadData(this.saveKey);if(e){for(let t=0;t<Math.min(e.length,this.prgRam.length);t++)this.prgRam[t]=e[t];console.log(`Loaded saved data for ${this.romInfo.name}`)}else console.log(`No saved data found for ${this.romInfo.name}`)}catch(e){console.error("Error loading battery RAM:",e)}}async saveBatteryBackedRam(){if(!(!this.romInfo.hasBattery||!this.ramDirty))try{const e=Array.from(this.prgRam);await this.storage.saveData(this.saveKey,e),console.log(`Saved game data for ${this.romInfo.name}`),this.ramDirty=!1}catch(e){console.error("Error saving battery RAM:",e)}}setupAutoSave(){typeof setInterval<"u"&&(this.autoSaveInterval=setInterval(async()=>{this.ramDirty&&await this.saveBatteryBackedRam()},5e3))}async destroy(){this.ramDirty&&await this.saveBatteryBackedRam(),this.autoSaveInterval&&clearInterval(this.autoSaveInterval)}}class PM extends ba{constructor(e,t,r,o){super(e,t,r,o),this.prgBankCount=Math.floor(t.length/8192),console.debug(`MMC3: ROM has ${this.prgBankCount} 8KB PRG banks (${t.length} bytes total)`),this.prgBankMask=this.prgBankCount-1,console.debug(`MMC3: PRG bank mask: 0x${this.prgBankMask.toString(16)}`);const l=e.prgRamSize||8192;this.prgRam=new Uint8Array(l),console.debug(`MMC3: PRG RAM size: ${l} bytes`),this.isMMC6=this._detectMMC6(e),this.isMMC6&&console.debug("MMC3: MMC6 variant (StarTropics) detected"),this.usesChrRam=r.length===0,this.usesChrRam&&(console.debug("MMC3: Game uses CHR RAM instead of CHR ROM"),this.chrRam=new Uint8Array(8192)),this.chrBankCount=this.usesChrRam?8:Math.floor(r.length/1024),console.debug(`MMC3: ${this.usesChrRam?"CHR RAM":"CHR ROM"} has ${this.chrBankCount} 1KB banks`),this.chrBankMask=this.chrBankCount-1,console.debug(`MMC3: CHR bank mask: 0x${this.chrBankMask.toString(16)}`),e.hasBattery&&(this.storage=new Sm,this.saveKey=`nes-save-${e.name.replace(/[^a-z0-9]/gi,"-").toLowerCase()}`,this.loadBatteryBackedRam()),this.bankSelect=0,this.bankRegisters=new Uint8Array(8),this.mirrorMode=0,this.prgRamProtect=0,this.irqLatch=0,this.irqCounter=0,this.irqEnable=!1,this.irqAsserted=!1,this.prgMode=0,this.chrMode=0,this.irqReload=!1,this.lastA12=0,this.a12Filter=0,this.is4Screen=e.fourScreen,this.is4Screen&&console.debug("MMC3: 4-screen mirroring detected (typically for Gauntlet/Rad Racer 2)"),this.ramDirty=!1,e.hasBattery&&this.setupAutoSave()}_detectMMC6(e){const t=e.name.toLowerCase();return!!(t.includes("startropics")||t.includes("star tropics"))}reset(){super.reset(),this.bankSelect=0,this.bankRegisters.fill(0),this.mirrorMode=this.is4Screen?0:this.initialMirroring,this.prgRamProtect=0,this.irqLatch=0,this.irqCounter=0,this.irqEnable=!1,this.irqReload=!1,this.irqAsserted=!1,this.lastA12=0,this.a12Filter=0,this.prgMode=0,this.chrMode=0}cpuRead(e){if(e>=24576&&e<32768){if(this.isMMC6)return this._readMMC6Ram(e);if((this.prgRamProtect&128)!==0){const r=e-24576;return this.prgRam[r%this.prgRam.length]}return this.system.memory.openBus}if(e>=32768){let t=0;e<40960?t=this.prgMode===0?this.bankRegisters[6]:this.prgBankCount-2:e<49152?t=this.bankRegisters[7]:e<57344?t=this.prgMode===0?this.prgBankCount-2:this.bankRegisters[6]:t=this.prgBankCount-1,t&=this.prgBankMask;const r=t*8192+(e&8191);return r<this.prgRom.length?this.prgRom[r]:(console.warn(`MMC3: Out of bounds PRG ROM access at $${e.toString(16)}`),0)}return 0}_readMMC6Ram(e){if(e<28672)return this.system.memory.openBus;const t=e&511,r=(e&512)!==0,o=(this.prgRamProtect&128)!==0,l=(this.prgRamProtect&32)!==0;if(r){if(!o)return l?0:this.system.memory.openBus}else if(!l)return o?0:this.system.memory.openBus;const u=r?512+t:t;return this.prgRam[u%this.prgRam.length]}cpuWrite(e,t){if(e>=24576&&e<32768){if(this.isMMC6)this._writeMMC6Ram(e,t);else{const r=(this.prgRamProtect&128)!==0,o=(this.prgRamProtect&64)===0;if(r&&o){const l=e-24576;this.prgRam[l%this.prgRam.length]=t,this.romInfo.hasBattery&&(this.ramDirty=!0)}}return}if(e>=32768){const r=(e&1)===0;switch(e>>13&3){case 0:r?this._writeBankSelect(t):this._writeBankData(t);break;case 1:r?this._writeMirroring(t):this._writePrgRamProtect(t);break;case 2:r?this.irqLatch=t:(this.irqReload=!0,this.irqCounter=0);break;case 3:r?(this.irqEnable=!1,this.irqAsserted=!1):this.irqEnable=!0;break}}}_writeMMC6Ram(e,t){if(e<28672)return;const r=e&511,o=(e&512)!==0,l=(this.prgRamProtect&128)!==0,u=(this.prgRamProtect&64)!==0,h=(this.prgRamProtect&32)!==0,f=(this.prgRamProtect&16)!==0;if(o){if(!l||!u)return}else if(!h||!f)return;const p=o?512+r:r;this.prgRam[p%this.prgRam.length]=t,this.romInfo.hasBattery&&(this.ramDirty=!0)}_writeBankSelect(e){this.bankSelect=e,this.prgMode=e>>6&1,this.chrMode=e>>7&1,this.isMMC6&&((e&32)!==0||(this.prgRamProtect=0))}_writeMirroring(e){this.is4Screen||(this.mirrorMode=e&1?0:1)}_writePrgRamProtect(e){this.prgRamProtect=e,this.isMMC6}_writeBankData(e){const t=this.bankSelect&7;(t===6||t===7)&&(e&=63),this.bankRegisters[t]=e}ppuRead(e){if(this._checkA12(e),e<8192){let t=0;const r=e&1023;this.chrMode===0?e<2048?(t=this.bankRegisters[0]&254,e>=1024&&(t+=1)):e<4096?(t=this.bankRegisters[1]&254,e>=3072&&(t+=1)):e<5120?t=this.bankRegisters[2]:e<6144?t=this.bankRegisters[3]:e<7168?t=this.bankRegisters[4]:t=this.bankRegisters[5]:e<1024?t=this.bankRegisters[2]:e<2048?t=this.bankRegisters[3]:e<3072?t=this.bankRegisters[4]:e<4096?t=this.bankRegisters[5]:e<6144?(t=this.bankRegisters[0]&254,e>=5120&&(t+=1)):(t=this.bankRegisters[1]&254,e>=7168&&(t+=1)),t&=this.chrBankMask;const o=t*1024+r;return this.usesChrRam?this.chrRam[o%this.chrRam.length]:this.chrRom[o%this.chrRom.length]}return 0}ppuWrite(e,t){if(this._checkA12(e),e<8192&&this.usesChrRam){let r=0;const o=e&1023;this.chrMode===0?e<2048?(r=this.bankRegisters[0]&254,e>=1024&&(r+=1)):e<4096?(r=this.bankRegisters[1]&254,e>=3072&&(r+=1)):e<5120?r=this.bankRegisters[2]:e<6144?r=this.bankRegisters[3]:e<7168?r=this.bankRegisters[4]:r=this.bankRegisters[5]:e<1024?r=this.bankRegisters[2]:e<2048?r=this.bankRegisters[3]:e<3072?r=this.bankRegisters[4]:e<4096?r=this.bankRegisters[5]:e<6144?(r=this.bankRegisters[0]&254,e>=5120&&(r+=1)):(r=this.bankRegisters[1]&254,e>=7168&&(r+=1)),r&=this.chrBankMask;const l=r*1024+o;this.chrRam[l%this.chrRam.length]=t}}_checkA12(e){const t=e>>12&1;t===1&&this.lastA12===0&&this._updateIrqCounter(),this.lastA12=t}isIRQAsserted(){return this.irqAsserted}_updateIrqCounter(){this.irqReload?(this.irqCounter=this.irqLatch,this.irqReload=!1):this.irqCounter===0?this.irqCounter=this.irqLatch:this.irqCounter--,this.irqCounter===0&&this.irqEnable&&(this.irqAsserted=!0)}getMirroring(){return this.is4Screen?4:this.mirrorMode}clockSync(){}async loadBatteryBackedRam(){if(this.romInfo.hasBattery)try{const e=await this.storage.loadData(this.saveKey);if(e){for(let t=0;t<Math.min(e.length,this.prgRam.length);t++)this.prgRam[t]=e[t];console.log(`MMC3: Loaded saved data for ${this.romInfo.name}`)}else console.log(`MMC3: No saved data found for ${this.romInfo.name}`)}catch(e){console.error("MMC3: Error loading battery RAM:",e)}}async saveBatteryBackedRam(){if(!(!this.romInfo.hasBattery||!this.ramDirty))try{const e=Array.from(this.prgRam);await this.storage.saveData(this.saveKey,e),console.log(`MMC3: Saved game data for ${this.romInfo.name}`),this.ramDirty=!1}catch(e){console.error("MMC3: Error saving battery RAM:",e)}}setupAutoSave(){typeof setInterval<"u"&&(this.autoSaveInterval=setInterval(async()=>{this.ramDirty&&await this.saveBatteryBackedRam()},5e3))}endFrame(){}async destroy(){this.ramDirty&&await this.saveBatteryBackedRam(),this.autoSaveInterval&&clearInterval(this.autoSaveInterval)}}class LM{static createMapper(e,t,r,o,l){switch(e){case 0:return new RM(t,r,o,l);case 1:return new bM(t,r,o,l);case 2:return new AM(t,r,o,l);case 3:return new CM(t,r,o,l);case 4:return new PM(t,r,o,l);default:return console.warn(`Mapper ${e} not implemented yet`),null}}static getSupportedMappers(){return[0,1,2,3,4]}}class NM{static parseROM(e,t){const r=new Uint8Array(t);if(r.length<16||r[0]!==78||r[1]!==69||r[2]!==83||r[3]!==26)throw new Error("Invalid iNES ROM header");const o=r[5]*8192,l=r[6],u=r[7],h=r[8]||0,f=r[9]||0,p=r[10]||0,g=(u&12)===8;let v;if(g){const fe=f>>4&15,pe=r[4];fe===0?v=pe*16384:v=pe*Math.pow(2,fe-1)*16384}else(h&15)===0?v=r[4]*16384:v=((h&15)<<8|r[4])*16384;let _;g?_=u&240|l>>4|(h&15)<<8:_=(u&15)<<4|l>>4;let S=l&1?1:0;const T=(l&8)!==0;T&&(S=2);const w=(l&2)!==0,x=(l&4)!==0;let y=0;g?y=p?64<<(p&15):0:y=8192;const I=o===0,P=I?8192:0;let L=0;g?L=(p&3)%2:L=f&1;const O=16+(x?512:0),ae=O+v,C=zp(r,O,v);let D;return o>0?D=zp(r,ae,o):D=new Uint8Array(0),{mapperNumber:_,prgRomSize:v,chrRomSize:o,prgRamSize:y,chrRamSize:P,mirroring:S,hasBattery:w,hasTrainer:x,usesChrRam:I,fourScreen:T,tvSystem:L,isNes20:g,name:e,prgRom:C,chrRom:D,info:{format:g?"NES 2.0":"iNES 1.0",mapper:`Mapper ${_}`,mirroring:UM(S),prgRomSizeKB:v/1024,chrRomSizeKB:o/1024,features:[w?"Battery-backed RAM":null,I?"CHR RAM":null,T?"Four-screen VRAM":null].filter(Boolean),system:L===0?"NTSC":"PAL"}}}}function zp(s,e,t){return e<0||t<0||e+t>s.length?(console.warn(`Invalid ROM section: offset=${e}, length=${t}, array length=${s.length}`),new Uint8Array(t)):s.subarray?s.subarray(e,e+t):s.slice(e,e+t)}function UM(s){switch(s){case 0:return"Horizontal";case 1:return"Vertical";case 2:return"Four-screen";default:return"Unknown"}}class DM{constructor(){if(this.cpu=new SM(this),this.ppu=new MM(this),this.apu=new EM(this),this.memory=new TM(this),this.controller=new wM,this.mapper=null,this.apu.initAudio(),this.isRunning=!1,this.isPaused=!1,this.pendingFrame=!1,this.lastFrameTime=0,this.frameCount=0,this.fpsTimer=performance.now(),this.fpsCount=0,this.frameTimerId=null,this.frameSkipCounter=0,this.TV_SYSTEM={NTSC:{cyclesPerFrame:29780,fps:60},PAL:{cyclesPerFrame:33247,fps:50}},this.cyclesPerFrame=this.TV_SYSTEM.NTSC.cyclesPerFrame,this.targetFps=this.TV_SYSTEM.NTSC.fps,this.frameInterval=1e3/this.targetFps,this.batchSize=100,this.useFrameSkipping=!1,this.frameSkipRatio=0,this.adaptiveTiming=!1,this.frameBuffer=new Uint8Array(256*240*4),this.onFrameReady=null,this.onFpsUpdate=null,this.onRomLoaded=null,this.onCPUStateUpdate=null,this.onPPUStateUpdate=null,this.onAPUStateUpdate=null,this.onMemoryUpdate=null,this.onControllerUpdate=null,this.keyMapTable={z:0,x:1,Shift:2,Enter:3,ArrowUp:4,ArrowDown:5,ArrowLeft:6,ArrowRight:7},this.debug=!1,this.profiling=!1,this.MAX_MEMORY_LOG=7,this.MAX_CONTROLLER_LOG=7,this.MAX_OPCODES=10,this.memoryLog={reads:Array(this.MAX_MEMORY_LOG).fill().map(()=>({address:0,value:0,timestamp:0})),writes:Array(this.MAX_MEMORY_LOG).fill().map(()=>({address:0,value:0,timestamp:0}))},this.memoryReadIndex=0,this.memoryWriteIndex=0,this.memoryReadCount=0,this.memoryWriteCount=0,this.controllerLog={reads:Array(this.MAX_CONTROLLER_LOG).fill().map(()=>({address:0,value:0,timestamp:0})),writes:Array(this.MAX_CONTROLLER_LOG).fill().map(()=>({address:0,value:0,timestamp:0}))},this.controllerReadIndex=0,this.controllerWriteIndex=0,this.controllerReadCount=0,this.controllerWriteCount=0,this.recentOpcodes=[],this.nametableBuffer=new Uint32Array(256*240),this.patternTableBuffer=new Uint32Array(128*128),this.instructionMap={},this.cpu&&this.cpu.instructions)for(const e in this.cpu.instructions)for(const t in this.cpu.instructions[e])this.instructionMap[t]={...this.cpu.instructions[e][t],category:e}}loadROM(e,t){try{const r=t instanceof ArrayBuffer?NM.parseROM(e,t):t;return console.log(r),this.mapper=LM.createMapper(r.mapperNumber,r,r.prgRom,r.chrRom,this),this.mapper?(this.memory.setMapper(this.mapper),r.tvSystem===0?(this.cyclesPerFrame=this.TV_SYSTEM.NTSC.cyclesPerFrame,this.targetFps=this.TV_SYSTEM.NTSC.fps):(this.cyclesPerFrame=this.TV_SYSTEM.PAL.cyclesPerFrame,this.targetFps=this.TV_SYSTEM.PAL.fps),this.frameInterval=1e3/this.targetFps,this.reset(),this.onRomLoaded&&this.onRomLoaded(!0,r),!0):(console.error(`Unsupported mapper: ${r.mapperNumber}`),this.onRomLoaded&&this.onRomLoaded(!1,r),!1)}catch(r){return console.error("Error initializing ROM:",r),this.onRomLoaded&&this.onRomLoaded(!1,null),!1}}reset(){var e,t,r,o,l,u;this.mapper&&((e=this.cpu)==null||e.reset(),(t=this.ppu)==null||t.reset(),(r=this.apu)==null||r.reset(),(o=this.memory)==null||o.reset(),(l=this.controller)==null||l.reset(),(u=this.mapper)==null||u.reset(),this.frameCount=0,this.fpsTimer=performance.now(),this.fpsCount=0,this.pendingFrame=!1,this.frameSkipCounter=0,this.memoryLog.reads.fill({address:0,value:0,timestamp:0}),this.memoryLog.writes.fill({address:0,value:0,timestamp:0}),this.memoryReadIndex=0,this.memoryWriteIndex=0,this.memoryReadCount=0,this.memoryWriteCount=0,this.controllerLog.reads.fill({address:0,value:0,timestamp:0}),this.controllerLog.writes.fill({address:0,value:0,timestamp:0}),this.controllerReadIndex=0,this.controllerWriteIndex=0,this.controllerReadCount=0,this.controllerWriteCount=0,this.recentOpcodes=[],this.nametableBuffer.fill(0),this.patternTableBuffer.fill(0),this.frameBuffer.fill(0),this._clearTimers(),this._updateDebugState(),this._handleFrameRendering())}_clearTimers(){this.frameTimerId&&(cancelAnimationFrame(this.frameTimerId),this.frameTimerId=null)}start(){this.isRunning||(this.isRunning=!0,this.isPaused=!1,this.lastFrameTime=performance.now(),this.runEmulation())}stop(){this.isRunning=!1,this._clearTimers()}pause(){this.isPaused=!0}resume(){this.isRunning&&(this.isPaused=!1,this.runEmulation())}setCyclesPerFrame(e){if(!e||e<=0)return console.warn("Invalid cycles per frame value"),!1;const t=this.isRunning;return t&&this.stop(),this.cyclesPerFrame=e,t&&this.start(),console.log(`Cycles per frame set to ${e}`),!0}_updateDebugState(){this.onCPUStateUpdate&&this.cpu&&this.onCPUStateUpdate({registers:{A:this.cpu.a,X:this.cpu.x,Y:this.cpu.y,PC:this.cpu.pc,SP:this.cpu.sp,P:this.cpu.getStatusByte()},recentOpcodes:this.recentOpcodes}),this.onPPUStateUpdate&&this.ppu&&this.onPPUStateUpdate({registers:{PPUCTRL:this.ppu.control,PPUMASK:this.ppu.mask,PPUSTATUS:this.ppu.status,OAMADDR:this.ppu.oamAddr,OAMDATA:this.ppu.oamData,PPUSCROLL:this.ppu.scroll,PPUADDR:this.ppu.addr,PPUDATA:this.ppu.data,OAMDMA:0},flags:{scanline:this.ppu.scanline,cycle:this.ppu.cycle,frameCount:this.ppu.frame,vblank:(this.ppu.status&128)!==0,sprite0Hit:(this.ppu.status&64)!==0,spriteOverflow:(this.ppu.status&32)!==0,vramAddr:this.ppu.v,tempVramAddr:this.ppu.t,fineX:this.ppu.x,writeToggle:this.ppu.w}}),this.onAPUStateUpdate&&this.apu&&this.onAPUStateUpdate({registers:{pulse1Duty:this.apu.pulse1.dutyMode,pulse1Volume:this.apu.pulse1.volume,pulse1Period:this.apu.pulse1.period,pulse1LengthCounter:this.apu.pulse1.lengthCounter,pulse1SweepEnabled:this.apu.pulse1.sweepEnabled,pulse1SweepPeriod:this.apu.pulse1.sweepPeriod,pulse1SweepNegate:this.apu.pulse1.sweepNegate,pulse1SweepShift:this.apu.pulse1.sweepShift,pulse2Duty:this.apu.pulse2.dutyMode,pulse2Volume:this.apu.pulse2.volume,pulse2Period:this.apu.pulse2.period,pulse2LengthCounter:this.apu.pulse2.lengthCounter,pulse2SweepEnabled:this.apu.pulse2.sweepEnabled,pulse2SweepPeriod:this.apu.pulse2.sweepPeriod,pulse2SweepNegate:this.apu.pulse2.sweepNegate,pulse2SweepShift:this.apu.pulse2.sweepShift,trianglePeriod:this.apu.triangle.period,triangleLengthCounter:this.apu.triangle.lengthCounter,triangleLinearCounter:this.apu.triangle.linearCounter||0,triangleSequenceCounter:this.apu.triangle.sequenceCounter,noiseVolume:this.apu.noise.volume,noisePeriod:this.apu.noise.period,noiseLengthCounter:this.apu.noise.lengthCounter,noiseMode:this.apu.noise.mode||0,dmcFrequency:this.apu.dmc.frequency||0,dmcSampleAddress:this.apu.dmc.sampleAddress||0,dmcSampleLength:this.apu.dmc.sampleLength||0,dmcCurrentLevel:this.apu.dmc.currentLevel||0,frameCounter:this.apu.frameCounter,frameCounterMode:this.apu.frameCounterMode,frameIRQInhibit:this.apu.frameIRQInhibit,frameIRQFlag:this.apu.frameIRQFlag},channelOutput:{pulse1:this.apu.channelOutput.pulse1,pulse2:this.apu.channelOutput.pulse2,triangle:this.apu.channelOutput.triangle,noise:this.apu.channelOutput.noise,dmc:this.apu.channelOutput.dmc},buffer:{data:this.apu.mainThreadBuffer?Array.from(this.apu.mainThreadBuffer.slice(0,100)):[],index:this.apu.mainThreadBufferPosition,sampleRate:this.apu.sampleRate}}),this.onMemoryUpdate&&this.memory&&this.onMemoryUpdate({reads:[...this.memoryLog.reads],writes:[...this.memoryLog.writes]}),this.onControllerUpdate&&this.controller&&this.onControllerUpdate(this.controllerLog)}_updateFPS(e){this.frameCount++,e-this.fpsTimer>=1e3&&(this.fpsCount=this.frameCount,this.frameCount=0,this.fpsTimer=e,this.onFpsUpdate&&this.onFpsUpdate(this.fpsCount),this.adaptiveTiming&&this._adjustFrameSkipping())}runEmulation(){if(!this.isRunning||this.isPaused)return;const e=performance.now();e-this.lastFrameTime,this.lastFrameTime=e,this._updateFPS(e),this.runFrame(),this.debug&&this._updateDebugState(),this._scheduleNextFrame(e)}_adjustFrameSkipping(){const e=this.targetFps-this.fpsCount;e>5?this.useFrameSkipping?this.frameSkipRatio<3&&this.frameSkipRatio++:(this.useFrameSkipping=!0,this.frameSkipRatio=1):e<2&&this.useFrameSkipping&&(this.frameSkipRatio>0?this.frameSkipRatio--:this.useFrameSkipping=!1)}_handleFrameRendering(){const e=!this.useFrameSkipping||this.frameSkipCounter%(this.frameSkipRatio+1)===0;this.frameSkipCounter=(this.frameSkipCounter+1)%(this.frameSkipRatio+1),e&&(this.frameBuffer.set(this.ppu.frameBuffer),this.onFrameReady&&this.onFrameReady(this.frameBuffer))}_scheduleNextFrame(e){this._clearTimers(),this.frameTimerId=requestAnimationFrame(()=>{performance.now()-this.lastFrameTime>=this.frameInterval?this.runEmulation():this._scheduleNextFrame(e)}),this._handleFrameRendering()}runFrame(){if(!this.mapper)return;const e=this.profiling?{frameStart:performance.now(),cpu:0,ppu:0,apu:0,mapper:0,yield:0}:null;let t=0,r=0,o=this.cyclesPerFrame/10;for(;t<this.cyclesPerFrame;){for(;r<this.batchSize&&t<this.cyclesPerFrame;){if(this.debug&&this._recordCPUInstruction(),this.cpu){const l=this._timeFunctionExecution(()=>this.cpu.step(),e,"cpu");this.ppu&&this._timeFunctionExecution(()=>this.ppu.step(l*3),e,"ppu"),this.apu&&this._timeFunctionExecution(()=>this.apu.step(l),e,"apu"),t+=l}if(r++,t>=o){this.mapper&&typeof this.mapper.clockSync=="function"&&this._timeFunctionExecution(()=>this.mapper.clockSync(t),e,"mapper"),o+=this.cyclesPerFrame/10;break}}r=0}this.mapper&&typeof this.mapper.endFrame=="function"&&this._timeFunctionExecution(()=>this.mapper.endFrame(),e,"mapper"),this.profiling&&this._outputProfilingResults(e)}advanceFrame(){if(!this.mapper)return!1;const e=this.isRunning;return this.isRunning=!1,this.frameTimerId&&(cancelAnimationFrame(this.frameTimerId),this.frameTimerId=null),this.runFrame(),this.frameBuffer.set(this.ppu.frameBuffer),this.onFrameReady&&this.onFrameReady(this.frameBuffer),this.debug&&this._updateDebugState(),this.isRunning=e,e&&(this.lastFrameTime=performance.now(),this.runEmulation()),!0}advanceFrames(e=5){if(!this.mapper)return!1;e=Math.max(1,Math.floor(e));const t=this.isRunning;this.isRunning=!1,this.frameTimerId&&(cancelAnimationFrame(this.frameTimerId),this.frameTimerId=null);for(let r=0;r<e;r++)this.runFrame();return this.frameBuffer.set(this.ppu.frameBuffer),this.onFrameReady&&this.onFrameReady(this.frameBuffer),this.debug&&this._updateDebugState(),this.isRunning=t,t&&(this.lastFrameTime=performance.now(),this.runEmulation()),!0}_recordCPUInstruction(){const e=this.cpu.pc,t=this.memory.read(e),r=this._getInstructionDetails(t),o=[t];r.bytes>1&&(o.push(this.memory.read(e+1)),r.bytes>2&&o.push(this.memory.read(e+2)));const l={address:e,bytes:o,instruction:r,timestamp:performance.now()};this.recentOpcodes.unshift(l),this.recentOpcodes.length>this.MAX_OPCODES&&this.recentOpcodes.pop()}_getInstructionDetails(e){return this.instructionMap[e]||{}}recordMemoryRead(e,t){if(!this.debug)return;const r=this.memoryLog.reads[this.memoryReadIndex];r.address=e,r.value=t,r.timestamp=0,this.memoryReadIndex=(this.memoryReadIndex+1)%this.MAX_MEMORY_LOG,this.memoryReadCount<this.MAX_MEMORY_LOG&&this.memoryReadCount++}recordMemoryWrite(e,t){if(!this.debug)return;const r=this.memoryLog.writes[this.memoryWriteIndex];r.address=e,r.value=t,r.timestamp=0,this.memoryWriteIndex=(this.memoryWriteIndex+1)%this.MAX_MEMORY_LOG,this.memoryWriteCount<this.MAX_MEMORY_LOG&&this.memoryWriteCount++}recordControllerRead(e,t){if(!this.debug)return;const r=this.controllerLog.reads[this.controllerReadIndex];r.address=e,r.value=t,r.timestamp=this.lastFrameTime?performance.now()-this.lastFrameTime:0,this.controllerReadIndex=(this.controllerReadIndex+1)%this.MAX_CONTROLLER_LOG,this.controllerReadCount<this.MAX_CONTROLLER_LOG&&this.controllerReadCount++}recordControllerWrite(e,t){if(!this.debug)return;const r=this.controllerLog.writes[this.controllerWriteIndex];r.address=e,r.value=t,r.timestamp=this.lastFrameTime?performance.now()-this.lastFrameTime:0,this.controllerWriteIndex=(this.controllerWriteIndex+1)%this.MAX_CONTROLLER_LOG,this.controllerWriteCount<this.MAX_CONTROLLER_LOG&&this.controllerWriteCount++}_timeFunctionExecution(e,t,r){if(!t)return e();const o=performance.now(),l=e();return t[r]+=performance.now()-o,l}_outputProfilingResults(e){const t=performance.now()-e.frameStart,r=1e3/t,o=t-e.cpu-e.ppu-e.apu-e.mapper-e.yield;console.log("----- Frame Profiling -----"),console.log(`Total frame time: ${t.toFixed(2)}ms (${r.toFixed(1)} FPS)`),console.log(`CPU: ${e.cpu.toFixed(2)}ms (${(e.cpu/t*100).toFixed(1)}%)`),console.log(`PPU: ${e.ppu.toFixed(2)}ms (${(e.ppu/t*100).toFixed(1)}%)`),console.log(`APU: ${e.apu.toFixed(2)}ms (${(e.apu/t*100).toFixed(1)}%)`),console.log(`Mapper: ${e.mapper.toFixed(2)}ms (${(e.mapper/t*100).toFixed(1)}%)`),console.log(`Other: ${o.toFixed(2)}ms`),r<60&&console.warn(`Performance warning: Running at ${r.toFixed(1)} FPS (target: 60 FPS)`)}handleKeyDown(e){const t=this.keyMapTable[e];t!==void 0&&this.controller.setButton(t,!0)}handleKeyUp(e){const t=this.keyMapTable[e];t!==void 0&&this.controller.setButton(t,!1)}getPatternTableData(e=0,t=0){if(!this.ppu)return this.patternTableBuffer;const r=e*4096,o=t<4,l=o?0:16,u=o?t:t-4;for(let h=0;h<16;h++)for(let f=0;f<16;f++){const p=h*16+f;for(let g=0;g<8;g++){const v=r+p*16+g,_=this.ppu.ppuRead(v),S=this.ppu.ppuRead(v+8);for(let T=0;T<8;T++){const w=_>>7-T&1,y=(S>>7-T&1)<<1|w,I=f*8+T,L=(h*8+g)*128+I;let k;if(y===0)k=this.ppu.ppuRead(16128);else{const fe=16128+l+u*4+y;k=this.ppu.ppuRead(fe)}const z=this.ppu.nesPalette[k],O=z[0],ae=z[1],C=z[2],D=255<<24|C<<16|ae<<8|O;this.patternTableBuffer[L]=D}}}return this.patternTableBuffer}getNameTableData(e=0){if(!this.ppu)return this.nametableBuffer;const t=8192+e*1024,r=(this.ppu.control&16)!==0?4096:0;for(let o=0;o<30;o++)for(let l=0;l<32;l++){const u=t+o*32+l,h=this.ppu.ppuRead(u),f=Math.floor(l/4),p=Math.floor(o/4),g=t+960+p*8+f,v=this.ppu.ppuRead(g),_=l%4<2?0:1,w=((o%4<2?0:1)*2+_)*2,x=v>>w&3;for(let y=0;y<8;y++){const I=r+h*16+y,P=this.ppu.ppuRead(I),L=this.ppu.ppuRead(I+8);for(let k=0;k<8;k++){const z=P>>7-k&1,ae=(L>>7-k&1)<<1|z,C=l*8+k,fe=(o*8+y)*256+C;let pe;if(ae===0)pe=this.ppu.ppuRead(16128);else{const G=16128+x*4+ae;pe=this.ppu.ppuRead(G)}const Y=this.ppu.nesPalette[pe&63],ne=Y[0],re=Y[1],he=Y[2],J=255<<24|he<<16|re<<8|ne;this.nametableBuffer[fe]=J}}}return this.nametableBuffer}enableDebug(){this.debug=!0,console.log("Debug mode enabled")}disableDebug(){this.debug=!1,console.log("Debug mode disabled")}}const IM=({system:s,isActive:e,isRunning:t})=>{const r=be.useRef(null),o=be.useRef(null),[l,u]=be.useState(0),[h,f]=be.useState(0),p=be.useRef(null),g=be.useRef(null);be.useLayoutEffect(()=>{if(!r.current)return;const w=r.current.getContext("2d",{alpha:!1});if(w.imageSmoothingEnabled=!1,!g.current)return p.current||(p.current=w.createImageData(128,128)),g.current=w,()=>{o.current&&(cancelAnimationFrame(o.current),o.current=null)}},[s,e]);const v=be.useMemo(()=>p.current?new Uint32Array(p.current.data.buffer):null,[p.current]);be.useEffect(()=>{if(!e||!s||!s.ppu||!g.current||!v)return;o.current&&cancelAnimationFrame(o.current);const T=()=>{const w=s.getPatternTableData(l,h);if(!w||!w.length){o.current=requestAnimationFrame(T);return}v.set(w),g.current.putImageData(p.current,0,0),e&&(o.current=requestAnimationFrame(T))};return o.current=requestAnimationFrame(T),()=>{o.current&&(cancelAnimationFrame(o.current),o.current=null)}},[s,e,l,h,t,v]);const _=T=>{u(parseInt(T.target.value,10))},S=T=>{f(parseInt(T.target.value,10))};return A.jsxs("div",{className:"canvas-visualizer pattern-table-visualizer",children:[A.jsx("div",{className:"canvas-visualizer-title",children:"Pattern Table"}),e?A.jsxs("div",{className:"visualizer-content",children:[A.jsx("div",{className:"canvas-container",children:A.jsx("canvas",{ref:r,width:128,height:128,style:{width:"100%",imageRendering:"pixelated"}})}),A.jsxs("div",{className:"layer-controls",children:["Pattern Table:",A.jsxs("select",{value:l,onChange:_,children:[A.jsx("option",{value:"0",children:"Pattern Table 0"}),A.jsx("option",{value:"1",children:"Pattern Table 1"})]}),"Palette:",A.jsxs("select",{value:h,onChange:S,children:[A.jsx("option",{value:"0",children:"Palette 0"}),A.jsx("option",{value:"1",children:"Palette 1"}),A.jsx("option",{value:"2",children:"Palette 2"}),A.jsx("option",{value:"3",children:"Palette 3"}),A.jsx("option",{value:"4",children:"Palette 4"}),A.jsx("option",{value:"5",children:"Palette 5"}),A.jsx("option",{value:"6",children:"Palette 6"}),A.jsx("option",{value:"7",children:"Palette 7"})]})]})]}):A.jsx("div",{className:"placeholder-message",children:"No Pattern Table information to display"})]})},FM=({system:s,isActive:e,isRunning:t})=>{const r=be.useRef(null),o=be.useRef(null),[l,u]=be.useState(0),h=be.useRef(null),f=be.useRef(null);be.useLayoutEffect(()=>{if(!r.current)return;const _=r.current.getContext("2d",{alpha:!1});if(_.imageSmoothingEnabled=!1,!f.current)return h.current||(h.current=_.createImageData(256,240)),f.current=_,()=>{o.current&&(cancelAnimationFrame(o.current),o.current=null)}},[s,e]);const p=be.useMemo(()=>h.current?new Uint32Array(h.current.data.buffer):null,[h.current]);be.useEffect(()=>{if(!e||!s||!s.ppu||!f.current||!p)return;o.current&&cancelAnimationFrame(o.current);const v=()=>{const _=s.getNameTableData(l);if(!_||!_.length){o.current=requestAnimationFrame(v);return}p.set(_),f.current.putImageData(h.current,0,0),e&&(o.current=requestAnimationFrame(v))};return o.current=requestAnimationFrame(v),()=>{o.current&&(cancelAnimationFrame(o.current),o.current=null)}},[s,e,l,t,p]);const g=v=>{u(parseInt(v.target.value,10))};return A.jsxs("div",{className:"canvas-visualizer nametable-visualizer",children:[A.jsx("div",{className:"canvas-visualizer-title",children:"Name Table"}),e?A.jsxs("div",{className:"visualizer-content",children:[A.jsx("div",{className:"canvas-container",children:A.jsx("canvas",{ref:r,width:256,height:240,style:{width:"100%",imageRendering:"pixelated"}})}),A.jsxs("div",{className:"layer-controls",children:["Name Table:",A.jsxs("select",{value:l,onChange:g,children:[A.jsx("option",{value:"0",children:"Nametable 0"}),A.jsx("option",{value:"1",children:"Nametable 1"}),A.jsx("option",{value:"2",children:"Nametable 2"}),A.jsx("option",{value:"3",children:"Nametable 3"})]})]})]}):A.jsx("div",{className:"placeholder-message",children:"No Name Table information to display"})]})},kM=({system:s,isActive:e,isRunning:t})=>{const r=be.useRef(null),o=be.useRef(null),[l,u]=be.useState("sprites"),h=be.useRef(null),f=be.useRef(null);be.useLayoutEffect(()=>{if(!r.current)return;const _=r.current.getContext("2d",{alpha:!0});if(_.imageSmoothingEnabled=!1,!f.current)return h.current||(h.current=_.createImageData(256,240)),f.current=_,()=>{o.current&&(cancelAnimationFrame(o.current),o.current=null)}},[s,e]);const p=be.useMemo(()=>h.current?new Uint32Array(h.current.data.buffer):null,[h.current]);be.useEffect(()=>(s&&s.ppu&&s.ppu.setLayerVisualizationEnabled(e),()=>{s&&s.ppu&&s.ppu.setLayerVisualizationEnabled(!1)}),[s,e]),be.useEffect(()=>{if(!e||!s||!s.ppu||!f.current||!p)return;o.current&&cancelAnimationFrame(o.current);const v=()=>{let _;switch(l){case"background":_=s.ppu.backgroundLayer;break;case"sprites":_=s.ppu.spriteLayer;break;default:_=s.ppu.backgroundLayer}if(!_||!_.length){o.current=requestAnimationFrame(v);return}p.set(_),f.current.putImageData(h.current,0,0),e&&(o.current=requestAnimationFrame(v))};return o.current=requestAnimationFrame(v),()=>{o.current&&(cancelAnimationFrame(o.current),o.current=null)}},[s,e,l,t,p]);const g=v=>{u(v.target.value)};return A.jsxs("div",{className:"canvas-visualizer sprite-visualizer",children:[A.jsx("div",{className:"canvas-visualizer-title",children:"BG & Sprite Layers"}),e?A.jsxs("div",{className:"visualizer-content",children:[A.jsx("div",{className:"canvas-container",children:A.jsx("canvas",{ref:r,width:256,height:240})}),A.jsxs("div",{className:"layer-controls",children:[A.jsx("div",{children:"Display Mode:"}),A.jsxs("select",{value:l,onChange:g,disabled:!e,children:[A.jsx("option",{value:"background",children:"Background"}),A.jsx("option",{value:"sprites",children:"Sprites"})]})]})]}):A.jsx("div",{className:"placeholder-message",children:"No layer information to display"})]})},Fu=s=>`$${s.toString(16).toUpperCase().padStart(4,"0")}`,ku=s=>`$${s.toString(16).toUpperCase().padStart(2,"0")}`,OM=s=>`${s.toFixed(3)}ms`;Vp.memo(({type:s,address:e,value:t,timestamp:r})=>A.jsxs("li",{className:s.toLowerCase(),children:[s," ",Fu(e)," = ",ku(t),A.jsx("span",{className:"timestamp",children:OM(r)})]}));const Mm=be.memo(({memoryState:s,isActive:e})=>A.jsxs("div",{className:"visualizer memory-visualizer",children:[A.jsx("div",{className:"visualizer-title",children:"Memory Operations"}),e?A.jsxs("div",{className:"visualizer-content",children:[A.jsx("div",{className:"tabs",children:A.jsx("div",{className:"tab active",children:"Recent"})}),A.jsx("div",{className:"memory-log-container",children:A.jsxs("ul",{className:"memory-log",children:[((s==null?void 0:s.writes)||[]).map((t,r)=>A.jsxs("li",{className:"write",children:["WRITE ",Fu(t.address)," = ",ku(t.value)]},r)),((s==null?void 0:s.reads)||[]).map((t,r)=>A.jsxs("li",{className:"read",children:["READ ",Fu(t.address)," = ",ku(t.value)]},r))]})})]}):A.jsx("div",{className:"placeholder-message",children:"No memory operations to display"})]}));Mm.displayName="MemoryVisualizer";const BM=[{bit:0,name:"A"},{bit:1,name:"B"},{bit:2,name:"Select"},{bit:3,name:"Start"},{bit:4,name:"Up"},{bit:5,name:"Down"},{bit:6,name:"Left"},{bit:7,name:"Right"}],zM=({system:s,controllerState:e,isActive:t})=>{const r=f=>`$${f.toString(16).toUpperCase().padStart(4,"0")}`,o=f=>`$${f.toString(16).toUpperCase().padStart(2,"0")}`,l=f=>f.toString(2).padStart(8,"0"),u=f=>`${f.toFixed(3)}ms`,h=()=>s!=null&&s.controller?BM.map(f=>{const p=s.controller.buttonStates?s.controller.buttonStates[f.bit]:!1;return A.jsx("div",{className:`controller-button ${p?"pressed":""}`,children:f.name},f.name)}):A.jsx(A.Fragment,{});return A.jsxs("div",{className:"visualizer controller-visualizer",children:[A.jsx("div",{className:"visualizer-title",children:"Controller I/O"}),t?A.jsxs("div",{className:"visualizer-content",children:[A.jsx("div",{className:"controller-state",children:A.jsx("div",{className:"controller-diagram",children:h()})}),A.jsx("div",{className:"controller-log-container",children:A.jsxs("ul",{className:"memory-log",children:[e.writes.map((f,p)=>A.jsxs("li",{className:"write",children:["WRITE ",r(f.address)," = ",o(f.value),"(",l(f.value),")",A.jsx("span",{className:"timestamp",children:u(f.timestamp)})]},`write-${p}`)),e.reads.map((f,p)=>A.jsxs("li",{className:"read",children:["READ ",r(f.address)," = ",o(f.value),"(",l(f.value),")",A.jsx("span",{className:"timestamp",children:u(f.timestamp)})]},`read-${p}`))]})})]}):A.jsx("div",{className:"placeholder-message",children:"No controller I/O to display"})]})},HM=[{bit:7,name:"N",desc:"Negative"},{bit:6,name:"V",desc:"Overflow"},{bit:5,name:"-",desc:"Unused"},{bit:4,name:"B",desc:"Break"},{bit:3,name:"D",desc:"Decimal"},{bit:2,name:"I",desc:"Interrupt Disable"},{bit:1,name:"Z",desc:"Zero"},{bit:0,name:"C",desc:"Carry"}],VM=({cpuState:s,isActive:e})=>{const t=(r,o=2)=>`$${r.toString(16).toUpperCase().padStart(o,"0")}`;return A.jsxs("div",{className:"visualizer cpu-visualizer",children:[A.jsx("div",{className:"visualizer-title",children:"CPU State"}),e?A.jsxs("div",{className:"visualizer-content",children:[A.jsxs("div",{className:"register-grid",children:[A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"A:"}),A.jsx("span",{className:"register-value",children:t(s.registers.A)})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"X:"}),A.jsx("span",{className:"register-value",children:t(s.registers.X)})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Y:"}),A.jsx("span",{className:"register-value",children:t(s.registers.Y)})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"SP:"}),A.jsx("span",{className:"register-value",children:t(s.registers.SP)})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"PC:"}),A.jsx("span",{className:"register-value",children:t(s.registers.PC,4)})]})]}),A.jsxs("div",{className:"flags-container",children:[A.jsxs("div",{className:"flags-title",children:["Status (P): ",t(s.registers.P)]}),A.jsx("div",{className:"flag-bits",children:HM.map((r,o)=>{const l=(s.registers.P>>r.bit&1)===1;return A.jsx("div",{className:`flag-bit ${l?"active":"inactive"}`,title:r.desc,children:r.name},o)})})]}),A.jsxs("div",{className:"recent-opcodes",children:[A.jsx("div",{className:"opcodes-title",children:"Recent Instructions"}),A.jsx("div",{className:"opcodes-list",children:s.recentOpcodes.map((r,o)=>A.jsxs("div",{className:`opcode-entry ${o===0?"current-opcode":""}`,children:[A.jsx("span",{className:"opcode-address",children:t(r.address,4)}),A.jsx("span",{className:"opcode-bytes",children:r.bytes.map(l=>t(l)).join(" ")}),A.jsx("span",{className:"opcode-instruction",children:(r.instruction.op||r.instruction.category).toUpperCase()}),A.jsx("span",{className:"opcode-mode",children:r.instruction.mode||"-"}),A.jsx("span",{className:"opcode-reg",children:(r.instruction.reg||"-").toUpperCase()}),A.jsx("span",{className:"opcode-pagecross",children:r.instruction.pageCross?"+Page":"---"})]},o))})]})]}):A.jsx("div",{className:"placeholder-message",children:"No CPU operations to display"})]})},Ou=(s,e=2)=>s===void 0?"--":`$${s.toString(16).toUpperCase().padStart(e,"0")}`,GM=be.memo(({name:s,value:e,desc:t})=>A.jsxs("div",{className:"register-item",children:[A.jsxs("span",{className:"register-name",title:t,children:[s,":"]}),A.jsx("span",{className:"register-value",children:Ou(e)})]})),WM=be.memo(({name:s,value:e})=>A.jsxs("div",{className:"flag-item",children:[A.jsxs("span",{className:"flag-name",children:[s,":"]}),A.jsx("span",{className:"flag-value",children:e})]})),jM=be.memo(({name:s,value:e})=>A.jsxs("div",{className:"attribute-item",children:[A.jsxs("span",{className:"attribute-name",children:[s,":"]}),A.jsx("span",{className:"attribute-value",children:e})]})),XM=[{key:"PPUCTRL",name:"PPUCTRL ($2000)",desc:"Control Register"},{key:"PPUMASK",name:"PPUMASK ($2001)",desc:"Mask Register"},{key:"PPUSTATUS",name:"PPUSTATUS ($2002)",desc:"Status Register"},{key:"OAMADDR",name:"OAMADDR ($2003)",desc:"OAM Address"},{key:"OAMDATA",name:"OAMDATA ($2004)",desc:"OAM Data"},{key:"PPUSCROLL",name:"PPUSCROLL ($2005)",desc:"Scroll Position"},{key:"PPUADDR",name:"PPUADDR ($2006)",desc:"PPU Address"},{key:"PPUDATA",name:"PPUDATA ($2007)",desc:"PPU Data"},{key:"OAMDMA",name:"OAMDMA ($4014)",desc:"OAM DMA"}],qM=be.memo(({registers:s})=>A.jsxs("div",{className:"section",children:[A.jsx("div",{className:"section-title",children:"Registers"}),A.jsx("div",{className:"register-grid",children:XM.map(e=>A.jsx(GM,{name:e.name,value:s[e.key],desc:e.desc},e.key))})]})),YM=be.memo(({flags:s})=>{const e=[{key:"scanline",name:"Current Scanline",value:s.scanline},{key:"cycle",name:"Current Cycle",value:s.cycle},{key:"frameCount",name:"Frame Count",value:s.frameCount},{key:"vblank",name:"VBlank",value:s.vblank?"Yes":"No"},{key:"sprite0Hit",name:"Sprite 0 Hit",value:s.sprite0Hit?"Yes":"No"},{key:"spriteOverflow",name:"Sprite Overflow",value:s.spriteOverflow?"Yes":"No"}];return A.jsxs("div",{className:"section",children:[A.jsx("div",{className:"section-title",children:"Status"}),A.jsx("div",{className:"flags-grid",children:e.map(t=>A.jsx(WM,{name:t.name,value:t.value},t.key))})]})}),$M=be.memo(({flags:s})=>{const e=[{key:"vramAddr",name:"VRAM Address",value:Ou(s.vramAddr,4)},{key:"tempVramAddr",name:"Temp VRAM Address",value:Ou(s.tempVramAddr,4)},{key:"fineX",name:"Fine X",value:s.fineX},{key:"writeToggle",name:"Write Toggle",value:s.writeToggle?"High":"Low"}];return A.jsxs("div",{className:"section",children:[A.jsx("div",{className:"section-title",children:"Scroll & Address"}),A.jsx("div",{className:"attributes-grid",children:e.map(t=>A.jsx(jM,{name:t.name,value:t.value},t.key))})]})}),Em=be.memo(({ppuState:s,isActive:e})=>e?A.jsxs("div",{className:"visualizer ppu-visualizer",children:[A.jsx("div",{className:"visualizer-title",children:"PPU State"}),A.jsxs("div",{className:"visualizer-content",children:[A.jsx(qM,{registers:s.registers}),A.jsx(YM,{flags:s.flags}),A.jsx($M,{flags:s.flags})]})]}):A.jsxs("div",{className:"visualizer ppu-visualizer",children:[A.jsx("div",{className:"visualizer-title",children:"PPU State"}),A.jsx("div",{className:"placeholder-message",children:"No PPU information to display"})]}));Em.displayName="PPUVisualizer";const KM=({apuState:s,isActive:e,system:t})=>{const r=be.useRef(null),[o,l]=be.useState({current:0,total:0,sent:0}),u=be.useRef(null),h=be.useRef(null),f=(S,T=2)=>S===void 0?"--":`$${S.toString(16).toUpperCase().padStart(T,"0")}`;be.useEffect(()=>{if(!e||!t||!t.apu||!r.current)return;const S=r.current,T=S.getContext("2d");if(!u.current&&t.apu.audioContext){const I=t.apu.audioContext.createAnalyser();I.fftSize=2048,t.apu.audioNode&&(t.apu.audioNode.disconnect(),t.apu.audioNode.connect(I),I.connect(t.apu.audioContext.destination)),u.current=I}const x=setInterval(()=>{t&&t.apu&&l({current:t.apu.bufferPosition||0,total:t.apu.buffer?t.apu.buffer.length:0,sent:t.apu.samplesGenerated||0})},100),y=()=>{if(!u.current)return;const I=u.current,P=I.frequencyBinCount,L=new Uint8Array(P);I.getByteTimeDomainData(L),T.fillStyle="#2d3748",T.fillRect(0,0,S.width,S.height),T.lineWidth=2,T.strokeStyle="#00FF00",T.beginPath();const k=S.width/P;let z=0;for(let O=0;O<P;O++){const C=L[O]/128*S.height/2;O===0?T.moveTo(z,C):T.lineTo(z,C),z+=k}T.lineTo(S.width,S.height/2),T.stroke(),h.current=requestAnimationFrame(y)};return y(),()=>{clearInterval(x),h.current&&cancelAnimationFrame(h.current)}},[e,t]);const p=()=>{!t||!t.apu||t.apu.playTestTone()},g=()=>{var S,T;return A.jsxs(A.Fragment,{children:[A.jsxs("div",{className:"channel-section",children:[A.jsx("div",{className:"channel-title",children:"Pulse 1"}),A.jsxs("div",{className:"channel-registers",children:[A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Duty Mode:"}),A.jsx("span",{className:"register-value",children:s.registers.pulse1Duty})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Volume:"}),A.jsx("span",{className:"register-value",children:s.registers.pulse1Volume})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Period:"}),A.jsx("span",{className:"register-value",children:s.registers.pulse1Period})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Length Counter:"}),A.jsx("span",{className:"register-value",children:s.registers.pulse1LengthCounter})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Sweep:"}),A.jsxs("span",{className:"register-value",children:[s.registers.pulse1SweepEnabled?"Enabled":"Disabled",s.registers.pulse1SweepEnabled&&` (${s.registers.pulse1SweepNegate?"-":"+"}, ${s.registers.pulse1SweepShift})`]})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Output:"}),A.jsx("span",{className:"register-value",children:((S=s.channelOutput)==null?void 0:S.pulse1.toFixed(2))||0})]})]})]}),A.jsxs("div",{className:"channel-section",children:[A.jsx("div",{className:"channel-title",children:"Pulse 2"}),A.jsxs("div",{className:"channel-registers",children:[A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Duty Mode:"}),A.jsx("span",{className:"register-value",children:s.registers.pulse2Duty})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Volume:"}),A.jsx("span",{className:"register-value",children:s.registers.pulse2Volume})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Period:"}),A.jsx("span",{className:"register-value",children:s.registers.pulse2Period})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Length Counter:"}),A.jsx("span",{className:"register-value",children:s.registers.pulse2LengthCounter})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Sweep:"}),A.jsxs("span",{className:"register-value",children:[s.registers.pulse2SweepEnabled?"Enabled":"Disabled",s.registers.pulse2SweepEnabled&&` (${s.registers.pulse2SweepNegate?"-":"+"}, ${s.registers.pulse2SweepShift})`]})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Output:"}),A.jsx("span",{className:"register-value",children:((T=s.channelOutput)==null?void 0:T.pulse2.toFixed(2))||0})]})]})]})]})},v=()=>{var S,T,w;return A.jsxs(A.Fragment,{children:[A.jsxs("div",{className:"channel-section",children:[A.jsx("div",{className:"channel-title",children:"Triangle"}),A.jsxs("div",{className:"channel-registers",children:[A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Period:"}),A.jsx("span",{className:"register-value",children:s.registers.trianglePeriod})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Length Counter:"}),A.jsx("span",{className:"register-value",children:s.registers.triangleLengthCounter})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Linear Counter:"}),A.jsx("span",{className:"register-value",children:s.registers.triangleLinearCounter})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Sequence Position:"}),A.jsx("span",{className:"register-value",children:s.registers.triangleSequenceCounter})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Output:"}),A.jsx("span",{className:"register-value",children:((S=s.channelOutput)==null?void 0:S.triangle.toFixed(2))||0})]})]})]}),A.jsxs("div",{className:"channel-section",children:[A.jsx("div",{className:"channel-title",children:"Noise"}),A.jsxs("div",{className:"channel-registers",children:[A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Volume:"}),A.jsx("span",{className:"register-value",children:s.registers.noiseVolume})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Period:"}),A.jsx("span",{className:"register-value",children:s.registers.noisePeriod})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Length Counter:"}),A.jsx("span",{className:"register-value",children:s.registers.noiseLengthCounter})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Mode:"}),A.jsx("span",{className:"register-value",children:s.registers.noiseMode===0?"Long":"Short"})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Output:"}),A.jsx("span",{className:"register-value",children:((T=s.channelOutput)==null?void 0:T.noise.toFixed(2))||0})]})]})]}),A.jsxs("div",{className:"channel-section",children:[A.jsx("div",{className:"channel-title",children:"DMC"}),A.jsxs("div",{className:"channel-registers",children:[A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Frequency:"}),A.jsx("span",{className:"register-value",children:s.registers.dmcFrequency})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Sample Address:"}),A.jsx("span",{className:"register-value",children:f(s.registers.dmcSampleAddress,4)})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Sample Length:"}),A.jsx("span",{className:"register-value",children:s.registers.dmcSampleLength})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Current Level:"}),A.jsx("span",{className:"register-value",children:s.registers.dmcCurrentLevel})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Output:"}),A.jsx("span",{className:"register-value",children:((w=s.channelOutput)==null?void 0:w.dmc.toFixed(2))||0})]})]})]})]})},_=()=>A.jsxs("div",{className:"status-section",children:[A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Frame Counter:"}),A.jsx("span",{className:"register-value",children:s.registers.frameCounter})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"Frame Mode:"}),A.jsx("span",{className:"register-value",children:s.registers.frameCounterMode===0?"4-Step":"5-Step"})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"IRQ Inhibit:"}),A.jsx("span",{className:"register-value",children:s.registers.frameIRQInhibit?"Yes":"No"})]}),A.jsxs("div",{className:"register-item",children:[A.jsx("span",{className:"register-name",children:"IRQ Flag:"}),A.jsx("span",{className:"register-value",children:s.registers.frameIRQFlag?"Active":"Inactive"})]})]});return A.jsxs("div",{className:"visualizer apu-visualizer",children:[A.jsx("div",{className:"visualizer-title",children:"APU State"}),e?A.jsxs("div",{className:"visualizer-content",children:[A.jsxs("div",{className:"audio-visualizer",children:[A.jsx("canvas",{ref:r,width:280,height:80}),A.jsx("div",{className:"audio-controls",children:A.jsx("button",{onClick:p,disabled:!e,className:"test-tone-button",children:"Test Tone"})}),A.jsxs("div",{className:"audio-stats",children:["Buffer: ",o.current,"/",o.total," | Sent: ",o.sent]})]}),A.jsx("div",{className:"channels-container",children:A.jsxs("div",{className:"channels-scroll",children:[g(),v(),_()]})})]}):A.jsx("div",{className:"placeholder-message",children:"No APU information to display"})]})},ui=new DM,QM=()=>{const s=be.useRef(null),[e,t]=be.useState(!1),[r,o]=be.useState(!1),[l,u]=be.useState(""),[h,f]=be.useState(""),[p,g]=be.useState(0),[v,_]=be.useState(!1),[S,T]=be.useState(!1),[w,x]=be.useState(window.innerWidth),[y,I]=be.useState(29780),[P,L]=be.useState(!0),[k,z]=be.useState(!0),[O,ae]=be.useState(!0),[C,D]=be.useState(!0),[fe,pe]=be.useState(!0),[Y,ne]=be.useState(!0),[re,he]=be.useState(!0),[J,G]=be.useState(!0),te=be.useRef(null),W=be.useRef(null),R=be.useRef(null),F=be.useRef(null),Q=be.useRef(null),[de,ge]=be.useState({registers:{A:0,X:0,Y:0,SP:0,PC:0,P:0},recentOpcodes:[]}),[Me,Le]=be.useState({registers:{},flags:{}}),[we,Ve]=be.useState({registers:{},channelOutput:{pulse1:0,pulse2:0,triangle:0,noise:0,dmc:0},buffer:{data:[],index:0,sampleRate:44100}}),[mt,tt]=be.useState({reads:[],writes:[]}),[$,Pt]=be.useState({reads:[],writes:[]});be.useEffect(()=>{const E=()=>{x(window.innerWidth)};return window.addEventListener("resize",E),()=>{window.removeEventListener("resize",E)}},[]),be.useEffect(()=>{const Te=new yM;te.current=Te;const Be=new mm(0,256,240,0,.1,1e3);Be.position.z=10,W.current=Be;const Ee=new xm({canvas:s.current,antialias:!1,powerPreference:"high-performance",precision:"lowp",alpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1});Ee.setSize(256,240),Ee.autoClear=!1,Ee.setClearColor(0,0),R.current=Ee;const oe=new xM(new Uint8Array(256*240*4),256,240,Wn);oe.generateMipmaps=!1,oe.minFilter=Xt,oe.magFilter=Xt,oe.unpackAlignment=1,F.current=oe;const Ge=new ol(256,240),He=new Gu({map:oe,transparent:!1}),We=new Ui(Ge,He);return We.position.set(256/2,240/2,0),Te.add(We),()=>{Q.current&&Q.current.stop(),R.current&&(R.current.dispose(),He&&He.dispose(),Ge&&Ge.dispose(),oe&&oe.dispose())}},[]),be.useEffect(()=>{ui.enableDebug(),Q.current=ui,ui.onFrameReady=ue=>{if(F.current){const ye=new Uint8Array(ue);F.current.image.data.set(ye),F.current.needsUpdate=!0,R.current&&te.current&&W.current&&R.current.render(te.current,W.current)}},ui.onFpsUpdate=ue=>{g(ue)},ui.onRomLoaded=(ue,ye)=>{o(ue),ue||f("Failed to load ROM.")},ui.onCPUStateUpdate=ue=>{ge(ue)},ui.onPPUStateUpdate=ue=>{Le(ue)},ui.onAPUStateUpdate=ue=>{Ve(ue)},ui.onMemoryUpdate=ue=>{tt(ue)},ui.onControllerUpdate=ue=>{Pt(ue)};const E=ue=>{S||(Q.current&&Q.current.handleKeyDown(ue.key),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(ue.key)&&ue.preventDefault())},se=ue=>{S||Q.current&&Q.current.handleKeyUp(ue.key)};return window.addEventListener("keydown",E),window.addEventListener("keyup",se),()=>{window.removeEventListener("keydown",E),window.removeEventListener("keyup",se)}},[S]);const je=async E=>{const se=E.target.files[0];if(se)try{f("");const ue=await se.arrayBuffer();Q.current&&Q.current.loadROM(se.name,ue),u(se.name),Q.current.setCyclesPerFrame(y)}catch(ue){console.error("Error loading ROM:",ue),f(`Error loading ROM: ${ue.message}`)}},Je=()=>{if(!r||!Q.current)return;const E=e;E&&(Q.current.stop(),t(!1)),Q.current.advanceFrame(),E&&(Q.current.start(),t(!0))},$e=()=>{if(!r||!Q.current)return;const E=e;E&&(Q.current.stop(),t(!1)),Q.current.advanceFrames(5),E&&(Q.current.start(),t(!0))},vt=E=>{!r||!Q.current||(Q.current.setCyclesPerFrame(E),I(E))},rt=()=>{Q.current&&(v?Q.current.apu.pauseAudio().then(()=>{_(!1)}):Q.current.apu.resumeAudio().then(()=>{_(!0)}))},et=()=>{r&&(e?(Q.current.stop(),Q.current.apu&&Q.current.apu.pauseAudio().then(()=>{_(!1)}),t(!1)):(Q.current.start(),Q.current.apu&&Q.current.apu.resumeAudio().then(()=>{_(!0)}),t(!0)))},ht=[{id:"pattern",label:"Pattern Tables",state:P,setter:L},{id:"name",label:"Name Tables",state:O,setter:ae},{id:"sprite",label:"Sprites",state:k,setter:z},{id:"memory",label:"Memory",state:J,setter:G},{id:"controller",label:"Controller",state:re,setter:he},{id:"cpu",label:"CPU",state:fe,setter:pe},{id:"ppu",label:"PPU",state:C,setter:D},{id:"apu",label:"APU",state:Y,setter:ne}],xt=[{value:29780,label:"NTSC (29780)"},{value:33247,label:"PAL (33247)"},{value:14890,label:"1/2 Speed (14890)"},{value:5956,label:"1/5 Speed (5956)"},{value:596,label:"1/50 Speed (596)"}],Dt=E=>se=>{E(se.target.checked)},N=()=>{r&&Q.current.reset()};return A.jsxs("div",{className:"nes-emulator",children:[A.jsxs("div",{className:"emulator-controls",children:[A.jsxs("div",{className:"rom-controls",children:[A.jsx("input",{type:"file",id:"rom-upload",accept:".nes",onChange:je,disabled:e}),A.jsx("label",{htmlFor:"rom-upload",className:"rom-upload-label",children:r?l:"Load ROM (.nes)"})]}),A.jsxs("div",{className:"playback-controls",children:[A.jsx("button",{onClick:et,disabled:!r,className:e?"pause-button":"play-button",children:e?"Pause":"Start"}),A.jsx("button",{onClick:N,disabled:!r,className:"reset-button",children:"Reset"}),A.jsx("button",{onClick:Je,disabled:!r,className:"play-button",children:"Run 1 Frame"}),A.jsx("button",{onClick:$e,disabled:!r,className:"play-button",children:"Run 5 Frames"}),A.jsx("button",{onClick:rt,disabled:!r,className:v?"audio-on":"audio-off",children:v?"Audio On":"Audio Off"}),A.jsxs("div",{className:"fps-selector",children:[A.jsx("label",{htmlFor:"fps-select",children:"Speed:"}),A.jsx("select",{id:"fps-select",value:y,onChange:E=>vt(parseFloat(E.target.value)),disabled:!r,children:xt.map(E=>A.jsx("option",{value:E.value,children:E.label},E.value))})]}),r&&A.jsxs("div",{className:"fps-counter",children:["FPS: ",p]})]}),h&&A.jsx("div",{className:"error-message",children:h})]}),A.jsxs("div",{className:"visualizer-toggles",children:[A.jsx("div",{className:"toggle-label",children:"Active Visualizers:"}),A.jsx("div",{className:"toggle-controls",children:ht.map(E=>A.jsxs("div",{className:"toggle-control",children:[A.jsx("input",{type:"checkbox",id:`toggle-${E.id}`,checked:E.state,onChange:Dt(E.setter),disabled:!r}),A.jsx("label",{htmlFor:`toggle-${E.id}`,children:E.label})]},E.id))})]}),A.jsxs("div",{className:`debug-grid ${r?"":"faded"}`,children:[A.jsxs("div",{className:"grid-cell main-display",children:[A.jsx("canvas",{ref:s}),!r&&A.jsxs("div",{className:"no-rom-message",children:[A.jsx("h2",{children:"No ROM Loaded"}),A.jsx("p",{children:"Upload a .nes ROM file to begin"}),A.jsx("p",{children:"Controls:"}),A.jsx("p",{children:"A: Z, B: X, Start: Enter, Select: Left Shift"})]})]}),A.jsx("div",{className:`grid-cell ${r?"":"disabled"}`,children:A.jsx(IM,{system:Q.current,isActive:P,isRunning:e})}),A.jsx("div",{className:`grid-cell ${r?"":"disabled"}`,children:A.jsx(FM,{system:Q.current,isActive:O,isRunning:e})}),A.jsx("div",{className:`grid-cell ${r?"":"disabled"}`,children:A.jsx(kM,{system:Q.current,isActive:k,isRunning:e})}),A.jsx("div",{className:`grid-cell ${r?"":"disabled"}`,children:A.jsx(Mm,{system:Q.current,memoryState:mt,isActive:J,isRunning:e})}),A.jsx("div",{className:`grid-cell ${r?"":"disabled"}`,children:A.jsx(zM,{system:Q.current,controllerState:$,isActive:re,isRunning:e})}),A.jsx("div",{className:`grid-cell ${r?"":"disabled"}`,children:A.jsx(VM,{cpuState:de,isActive:fe,isRunning:e})}),A.jsx("div",{className:`grid-cell ${r?"":"disabled"}`,children:A.jsx(Em,{ppuState:Me,isActive:C,isRunning:e})}),A.jsx("div",{className:`grid-cell ${r?"":"disabled"}`,children:A.jsx(KM,{apuState:we,isActive:Y,isRunning:e,system:Q.current})})]})]})};function ZM(){return A.jsx("div",{className:"App",children:A.jsx("main",{children:A.jsx(QM,{})})})}const JM=d0.createRoot(document.getElementById("root"));JM.render(A.jsx(Vp.StrictMode,{children:A.jsx(ZM,{})}));
