(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function Hp(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Xu={exports:{}},ga={},qu={exports:{}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf;function n0(){if(mf)return ct;mf=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(T){return T===null||typeof T!="object"?null:(T=v&&T[v]||T["@@iterator"],typeof T=="function"?T:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function x(T,O,ue){this.props=T,this.context=O,this.refs=w,this.updater=ue||S}x.prototype.isReactComponent={},x.prototype.setState=function(T,O){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,O,"setState")},x.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function y(){}y.prototype=x.prototype;function I(T,O,ue){this.props=T,this.context=O,this.refs=w,this.updater=ue||S}var P=I.prototype=new y;P.constructor=I,E(P,x.prototype),P.isPureReactComponent=!0;var L=Array.isArray,F=Object.prototype.hasOwnProperty,z={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function se(T,O,ue){var he,me={},Me=null,Le=null;if(O!=null)for(he in O.ref!==void 0&&(Le=O.ref),O.key!==void 0&&(Me=""+O.key),O)F.call(O,he)&&!k.hasOwnProperty(he)&&(me[he]=O[he]);var Te=arguments.length-2;if(Te===1)me.children=ue;else if(1<Te){for(var Ve=Array(Te),mt=0;mt<Te;mt++)Ve[mt]=arguments[mt+2];me.children=Ve}if(T&&T.defaultProps)for(he in Te=T.defaultProps,Te)me[he]===void 0&&(me[he]=Te[he]);return{$$typeof:s,type:T,key:Me,ref:Le,props:me,_owner:z.current}}function C(T,O){return{$$typeof:s,type:T.type,key:O,ref:T.ref,props:T.props,_owner:T._owner}}function D(T){return typeof T=="object"&&T!==null&&T.$$typeof===s}function de(T){var O={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(ue){return O[ue]})}var fe=/\/+/g;function Y(T,O){return typeof T=="object"&&T!==null&&T.key!=null?de(""+T.key):O.toString(36)}function te(T,O,ue,he,me){var Me=typeof T;(Me==="undefined"||Me==="boolean")&&(T=null);var Le=!1;if(T===null)Le=!0;else switch(Me){case"string":case"number":Le=!0;break;case"object":switch(T.$$typeof){case s:case e:Le=!0}}if(Le)return Le=T,me=me(Le),T=he===""?"."+Y(Le,0):he,L(me)?(ue="",T!=null&&(ue=T.replace(fe,"$&/")+"/"),te(me,O,ue,"",function(mt){return mt})):me!=null&&(D(me)&&(me=C(me,ue+(!me.key||Le&&Le.key===me.key?"":(""+me.key).replace(fe,"$&/")+"/")+T)),O.push(me)),1;if(Le=0,he=he===""?".":he+":",L(T))for(var Te=0;Te<T.length;Te++){Me=T[Te];var Ve=he+Y(Me,Te);Le+=te(Me,O,ue,Ve,me)}else if(Ve=_(T),typeof Ve=="function")for(T=Ve.call(T),Te=0;!(Me=T.next()).done;)Me=Me.value,Ve=he+Y(Me,Te++),Le+=te(Me,O,ue,Ve,me);else if(Me==="object")throw O=String(T),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return Le}function ie(T,O,ue){if(T==null)return T;var he=[],me=0;return te(T,he,"","",function(Me){return O.call(ue,Me,me++)}),he}function ce(T){if(T._status===-1){var O=T._result;O=O(),O.then(function(ue){(T._status===0||T._status===-1)&&(T._status=1,T._result=ue)},function(ue){(T._status===0||T._status===-1)&&(T._status=2,T._result=ue)}),T._status===-1&&(T._status=0,T._result=O)}if(T._status===1)return T._result.default;throw T._result}var Z={current:null},G={transition:null},J={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:G,ReactCurrentOwner:z};function W(){throw Error("act(...) is not supported in production builds of React.")}return ct.Children={map:ie,forEach:function(T,O,ue){ie(T,function(){O.apply(this,arguments)},ue)},count:function(T){var O=0;return ie(T,function(){O++}),O},toArray:function(T){return ie(T,function(O){return O})||[]},only:function(T){if(!D(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},ct.Component=x,ct.Fragment=t,ct.Profiler=o,ct.PureComponent=I,ct.StrictMode=r,ct.Suspense=f,ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,ct.act=W,ct.cloneElement=function(T,O,ue){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var he=E({},T.props),me=T.key,Me=T.ref,Le=T._owner;if(O!=null){if(O.ref!==void 0&&(Me=O.ref,Le=z.current),O.key!==void 0&&(me=""+O.key),T.type&&T.type.defaultProps)var Te=T.type.defaultProps;for(Ve in O)F.call(O,Ve)&&!k.hasOwnProperty(Ve)&&(he[Ve]=O[Ve]===void 0&&Te!==void 0?Te[Ve]:O[Ve])}var Ve=arguments.length-2;if(Ve===1)he.children=ue;else if(1<Ve){Te=Array(Ve);for(var mt=0;mt<Ve;mt++)Te[mt]=arguments[mt+2];he.children=Te}return{$$typeof:s,type:T.type,key:me,ref:Me,props:he,_owner:Le}},ct.createContext=function(T){return T={$$typeof:c,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:u,_context:T},T.Consumer=T},ct.createElement=se,ct.createFactory=function(T){var O=se.bind(null,T);return O.type=T,O},ct.createRef=function(){return{current:null}},ct.forwardRef=function(T){return{$$typeof:h,render:T}},ct.isValidElement=D,ct.lazy=function(T){return{$$typeof:g,_payload:{_status:-1,_result:T},_init:ce}},ct.memo=function(T,O){return{$$typeof:p,type:T,compare:O===void 0?null:O}},ct.startTransition=function(T){var O=G.transition;G.transition={};try{T()}finally{G.transition=O}},ct.unstable_act=W,ct.useCallback=function(T,O){return Z.current.useCallback(T,O)},ct.useContext=function(T){return Z.current.useContext(T)},ct.useDebugValue=function(){},ct.useDeferredValue=function(T){return Z.current.useDeferredValue(T)},ct.useEffect=function(T,O){return Z.current.useEffect(T,O)},ct.useId=function(){return Z.current.useId()},ct.useImperativeHandle=function(T,O,ue){return Z.current.useImperativeHandle(T,O,ue)},ct.useInsertionEffect=function(T,O){return Z.current.useInsertionEffect(T,O)},ct.useLayoutEffect=function(T,O){return Z.current.useLayoutEffect(T,O)},ct.useMemo=function(T,O){return Z.current.useMemo(T,O)},ct.useReducer=function(T,O,ue){return Z.current.useReducer(T,O,ue)},ct.useRef=function(T){return Z.current.useRef(T)},ct.useState=function(T){return Z.current.useState(T)},ct.useSyncExternalStore=function(T,O,ue){return Z.current.useSyncExternalStore(T,O,ue)},ct.useTransition=function(){return Z.current.useTransition()},ct.version="18.3.1",ct}var gf;function Bc(){return gf||(gf=1,qu.exports=n0()),qu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vf;function i0(){if(vf)return ga;vf=1;var s=Bc(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(h,f,p){var g,v={},_=null,S=null;p!==void 0&&(_=""+p),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(S=f.ref);for(g in f)r.call(f,g)&&!u.hasOwnProperty(g)&&(v[g]=f[g]);if(h&&h.defaultProps)for(g in f=h.defaultProps,f)v[g]===void 0&&(v[g]=f[g]);return{$$typeof:e,type:h,key:_,ref:S,props:v,_owner:o.current}}return ga.Fragment=t,ga.jsx=c,ga.jsxs=c,ga}var _f;function r0(){return _f||(_f=1,Xu.exports=i0()),Xu.exports}var R=r0(),Pe=Bc();const Vp=Hp(Pe);var No={},Yu={exports:{}},Sn={},$u={exports:{}},Ku={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf;function s0(){return yf||(yf=1,function(s){function e(G,J){var W=G.length;G.push(J);e:for(;0<W;){var T=W-1>>>1,O=G[T];if(0<o(O,J))G[T]=J,G[W]=O,W=T;else break e}}function t(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var J=G[0],W=G.pop();if(W!==J){G[0]=W;e:for(var T=0,O=G.length,ue=O>>>1;T<ue;){var he=2*(T+1)-1,me=G[he],Me=he+1,Le=G[Me];if(0>o(me,W))Me<O&&0>o(Le,me)?(G[T]=Le,G[Me]=W,T=Me):(G[T]=me,G[he]=W,T=he);else if(Me<O&&0>o(Le,W))G[T]=Le,G[Me]=W,T=Me;else break e}}return J}function o(G,J){var W=G.sortIndex-J.sortIndex;return W!==0?W:G.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var c=Date,h=c.now();s.unstable_now=function(){return c.now()-h}}var f=[],p=[],g=1,v=null,_=3,S=!1,E=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(G){for(var J=t(p);J!==null;){if(J.callback===null)r(p);else if(J.startTime<=G)r(p),J.sortIndex=J.expirationTime,e(f,J);else break;J=t(p)}}function L(G){if(w=!1,P(G),!E)if(t(f)!==null)E=!0,ce(F);else{var J=t(p);J!==null&&Z(L,J.startTime-G)}}function F(G,J){E=!1,w&&(w=!1,y(se),se=-1),S=!0;var W=_;try{for(P(J),v=t(f);v!==null&&(!(v.expirationTime>J)||G&&!de());){var T=v.callback;if(typeof T=="function"){v.callback=null,_=v.priorityLevel;var O=T(v.expirationTime<=J);J=s.unstable_now(),typeof O=="function"?v.callback=O:v===t(f)&&r(f),P(J)}else r(f);v=t(f)}if(v!==null)var ue=!0;else{var he=t(p);he!==null&&Z(L,he.startTime-J),ue=!1}return ue}finally{v=null,_=W,S=!1}}var z=!1,k=null,se=-1,C=5,D=-1;function de(){return!(s.unstable_now()-D<C)}function fe(){if(k!==null){var G=s.unstable_now();D=G;var J=!0;try{J=k(!0,G)}finally{J?Y():(z=!1,k=null)}}else z=!1}var Y;if(typeof I=="function")Y=function(){I(fe)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,ie=te.port2;te.port1.onmessage=fe,Y=function(){ie.postMessage(null)}}else Y=function(){x(fe,0)};function ce(G){k=G,z||(z=!0,Y())}function Z(G,J){se=x(function(){G(s.unstable_now())},J)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,ce(F))},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(G){switch(_){case 1:case 2:case 3:var J=3;break;default:J=_}var W=_;_=J;try{return G()}finally{_=W}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(G,J){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var W=_;_=G;try{return J()}finally{_=W}},s.unstable_scheduleCallback=function(G,J,W){var T=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?T+W:T):W=T,G){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=W+O,G={id:g++,callback:J,priorityLevel:G,startTime:W,expirationTime:O,sortIndex:-1},W>T?(G.sortIndex=W,e(p,G),t(f)===null&&G===t(p)&&(w?(y(se),se=-1):w=!0,Z(L,W-T))):(G.sortIndex=O,e(f,G),E||S||(E=!0,ce(F))),G},s.unstable_shouldYield=de,s.unstable_wrapCallback=function(G){var J=_;return function(){var W=_;_=J;try{return G.apply(this,arguments)}finally{_=W}}}}(Ku)),Ku}var xf;function a0(){return xf||(xf=1,$u.exports=s0()),$u.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf;function o0(){if(Sf)return Sn;Sf=1;var s=Bc(),e=a0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function u(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function _(n){return f.call(v,n)?!0:f.call(g,n)?!1:p.test(n)?v[n]=!0:(g[n]=!0,!1)}function S(n,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,l){if(i===null||typeof i>"u"||S(n,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,a,l,d,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,I);x[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,I);x[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,I);x[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,l){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,d,l)&&(a=null),l||d===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,l=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,l?n.setAttributeNS(l,i,a):n.setAttribute(i,a))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),z=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),se=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),de=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),G=Symbol.iterator;function J(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var W=Object.assign,T;function O(n){if(T===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);T=i&&i[1]||""}return`
`+T+n}var ue=!1;function he(n,i){if(!n||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Q){var l=Q}Reflect.construct(n,[],i)}else{try{i.call()}catch(Q){l=Q}n.call(i.prototype)}else{try{throw Error()}catch(Q){l=Q}n()}}catch(Q){if(Q&&l&&typeof Q.stack=="string"){for(var d=Q.stack.split(`
`),m=l.stack.split(`
`),M=d.length-1,U=m.length-1;1<=M&&0<=U&&d[M]!==m[U];)U--;for(;1<=M&&0<=U;M--,U--)if(d[M]!==m[U]){if(M!==1||U!==1)do if(M--,U--,0>U||d[M]!==m[U]){var B=`
`+d[M].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=M&&0<=U);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?O(n):""}function me(n){switch(n.tag){case 5:return O(n.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return n=he(n.type,!1),n;case 11:return n=he(n.type.render,!1),n;case 1:return n=he(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case z:return"Portal";case C:return"Profiler";case se:return"StrictMode";case Y:return"Suspense";case te:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case de:return(n.displayName||"Context")+".Consumer";case D:return(n._context.displayName||"Context")+".Provider";case fe:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ie:return i=n.displayName||null,i!==null?i:Me(n.type)||"Memo";case ce:i=n._payload,n=n._init;try{return Me(n(i))}catch{}}return null}function Le(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===se?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ve(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function mt(n){var i=Ve(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),l=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){l=""+M,m.call(this,M)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function it(n){n._valueTracker||(n._valueTracker=mt(n))}function $(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return n&&(l=Ve(n)?n.checked?"true":"false":n.value),n=l,n!==a?(i.setValue(n),!0):!1}function Pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function We(n,i){var a=i.checked;return W({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function nt(n,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=Te(i.value!=null?i.value:a),n._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ze(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function vt(n,i){Ze(n,i);var a=Te(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(l==="submit"||l==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?je(n,i.type,a):i.hasOwnProperty("defaultValue")&&je(n,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ge(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function je(n,i,a){(i!=="number"||Pt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Oe=Array.isArray;function yt(n,i,a,l){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&l&&(n[a].defaultSelected=!0)}else{for(a=""+Te(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,l&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Lt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return W({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function N(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Oe(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Te(a)}}function A(n,i){var a=Te(i.value),l=Te(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),l!=null&&(n.defaultValue=""+l)}function re(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ye(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _e(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ye(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ee,He=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,l,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ee=Ee||document.createElement("div"),Ee.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ee.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function we(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var le={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ye=["Webkit","ms","Moz","O"];Object.keys(le).forEach(function(n){Ye.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),le[i]=le[n]})});function Xe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||le.hasOwnProperty(n)&&le[n]?(""+i).trim():i+"px"}function $e(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,d=Xe(a,i[a],l);a==="float"&&(a="cssFloat"),l?n.setProperty(a,d):n[a]=d}}var ke=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function De(n,i){if(i){if(ke[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function st(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gt=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ae=null,ee=null,Se=null;function Ce(n){if(n=ta(n)){if(typeof Ae!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Xa(i),Ae(n.stateNode,n.type,i))}}function dt(n){ee?Se?Se.push(n):Se=[n]:ee=n}function St(){if(ee){var n=ee,i=Se;if(Se=ee=null,Ce(n),i)for(n=0;n<i.length;n++)Ce(i[n])}}function Ft(n,i){return n(i)}function wn(){}var Mt=!1;function An(n,i,a){if(Mt)return n(i,a);Mt=!0;try{return Ft(n,i,a)}finally{Mt=!1,(ee!==null||Se!==null)&&(wn(),St())}}function Ot(n,i){var a=n.stateNode;if(a===null)return null;var l=Xa(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Br=!1;if(h)try{var Ii={};Object.defineProperty(Ii,"passive",{get:function(){Br=!0}}),window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{Br=!1}function ul(n,i,a,l,d,m,M,U,B){var Q=Array.prototype.slice.call(arguments,3);try{i.apply(a,Q)}catch(ge){this.onError(ge)}}var si=!1,cr=null,pi=!1,zr=null,cl={onError:function(n){si=!0,cr=n}};function hl(n,i,a,l,d,m,M,U,B){si=!1,cr=null,ul.apply(cl,arguments)}function dl(n,i,a,l,d,m,M,U,B){if(hl.apply(this,arguments),si){if(si){var Q=cr;si=!1,cr=null}else throw Error(t(198));pi||(pi=!0,zr=Q)}}function b(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function K(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ae(n){if(b(n)!==n)throw Error(t(188))}function X(n){var i=n.alternate;if(!i){if(i=b(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,l=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(l=d.return,l!==null){a=l;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return ae(d),n;if(m===l)return ae(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==l.return)a=d,l=m;else{for(var M=!1,U=d.child;U;){if(U===a){M=!0,a=d,l=m;break}if(U===l){M=!0,l=d,a=m;break}U=U.sibling}if(!M){for(U=m.child;U;){if(U===a){M=!0,a=m,l=d;break}if(U===l){M=!0,l=m,a=d;break}U=U.sibling}if(!M)throw Error(t(189))}}if(a.alternate!==l)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function oe(n){return n=X(n),n!==null?Ne(n):null}function Ne(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ne(n);if(i!==null)return i;n=n.sibling}return null}var qe=e.unstable_scheduleCallback,Je=e.unstable_cancelCallback,tt=e.unstable_shouldYield,lt=e.unstable_requestPaint,Ie=e.unstable_now,rt=e.unstable_getCurrentPriorityLevel,Et=e.unstable_ImmediatePriority,Ct=e.unstable_UserBlockingPriority,sn=e.unstable_NormalPriority,jn=e.unstable_LowPriority,Nt=e.unstable_IdlePriority,ut=null,mn=null;function Bt(n){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:Fs,Pa=Math.log,hr=Math.LN2;function Fs(n){return n>>>=0,n===0?32:31-(Pa(n)/hr|0)|0}var zt=64,In=4194304;function mi(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function $t(n,i){var a=n.pendingLanes;if(a===0)return 0;var l=0,d=n.suspendedLanes,m=n.pingedLanes,M=a&268435455;if(M!==0){var U=M&~d;U!==0?l=mi(U):(m&=M,m!==0&&(l=mi(m)))}else M=a&~d,M!==0?l=mi(M):m!==0&&(l=mi(m));if(l===0)return 0;if(i!==0&&i!==l&&(i&d)===0&&(d=l&-l,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=l;0<i;)a=31-Gt(i),d=1<<a,l|=n[a],i&=~d;return l}function Os(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fl(n,i){for(var a=n.suspendedLanes,l=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var M=31-Gt(m),U=1<<M,B=d[M];B===-1?((U&a)===0||(U&l)!==0)&&(d[M]=Os(U,i)):B<=i&&(n.expiredLanes|=U),m&=~U}}function Hr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function jc(){var n=zt;return zt<<=1,(zt&4194240)===0&&(zt=64),n}function pl(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function ks(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Gt(i),n[i]=a}function Em(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var l=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Gt(a),m=1<<d;i[d]=0,l[d]=-1,n[d]=-1,a&=~m}}function ml(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var l=31-Gt(a),d=1<<l;d&i|n[l]&i&&(n[l]|=i),a&=~d}}var _t=0;function Xc(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var qc,gl,Yc,$c,Kc,vl=!1,La=[],Fi=null,Oi=null,ki=null,Bs=new Map,zs=new Map,Bi=[],Tm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qc(n,i){switch(n){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":Oi=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":Bs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":zs.delete(i.pointerId)}}function Hs(n,i,a,l,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:m,targetContainers:[d]},i!==null&&(i=ta(i),i!==null&&gl(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function wm(n,i,a,l,d){switch(i){case"focusin":return Fi=Hs(Fi,n,i,a,l,d),!0;case"dragenter":return Oi=Hs(Oi,n,i,a,l,d),!0;case"mouseover":return ki=Hs(ki,n,i,a,l,d),!0;case"pointerover":var m=d.pointerId;return Bs.set(m,Hs(Bs.get(m)||null,n,i,a,l,d)),!0;case"gotpointercapture":return m=d.pointerId,zs.set(m,Hs(zs.get(m)||null,n,i,a,l,d)),!0}return!1}function Zc(n){var i=dr(n.target);if(i!==null){var a=b(i);if(a!==null){if(i=a.tag,i===13){if(i=K(a),i!==null){n.blockedOn=i,Kc(n.priority,function(){Yc(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Na(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=yl(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);gt=l,a.target.dispatchEvent(l),gt=null}else return i=ta(a),i!==null&&gl(i),n.blockedOn=a,!1;i.shift()}return!0}function Jc(n,i,a){Na(n)&&a.delete(i)}function Am(){vl=!1,Fi!==null&&Na(Fi)&&(Fi=null),Oi!==null&&Na(Oi)&&(Oi=null),ki!==null&&Na(ki)&&(ki=null),Bs.forEach(Jc),zs.forEach(Jc)}function Vs(n,i){n.blockedOn===i&&(n.blockedOn=null,vl||(vl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Am)))}function Gs(n){function i(d){return Vs(d,n)}if(0<La.length){Vs(La[0],n);for(var a=1;a<La.length;a++){var l=La[a];l.blockedOn===n&&(l.blockedOn=null)}}for(Fi!==null&&Vs(Fi,n),Oi!==null&&Vs(Oi,n),ki!==null&&Vs(ki,n),Bs.forEach(i),zs.forEach(i),a=0;a<Bi.length;a++)l=Bi[a],l.blockedOn===n&&(l.blockedOn=null);for(;0<Bi.length&&(a=Bi[0],a.blockedOn===null);)Zc(a),a.blockedOn===null&&Bi.shift()}var Vr=L.ReactCurrentBatchConfig,Ua=!0;function Rm(n,i,a,l){var d=_t,m=Vr.transition;Vr.transition=null;try{_t=1,_l(n,i,a,l)}finally{_t=d,Vr.transition=m}}function Cm(n,i,a,l){var d=_t,m=Vr.transition;Vr.transition=null;try{_t=4,_l(n,i,a,l)}finally{_t=d,Vr.transition=m}}function _l(n,i,a,l){if(Ua){var d=yl(n,i,a,l);if(d===null)Fl(n,i,l,Da,a),Qc(n,l);else if(wm(d,n,i,a,l))l.stopPropagation();else if(Qc(n,l),i&4&&-1<Tm.indexOf(n)){for(;d!==null;){var m=ta(d);if(m!==null&&qc(m),m=yl(n,i,a,l),m===null&&Fl(n,i,l,Da,a),m===d)break;d=m}d!==null&&l.stopPropagation()}else Fl(n,i,l,null,a)}}var Da=null;function yl(n,i,a,l){if(Da=null,n=H(l),n=dr(n),n!==null)if(i=b(n),i===null)n=null;else if(a=i.tag,a===13){if(n=K(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Da=n,null}function eh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rt()){case Et:return 1;case Ct:return 4;case sn:case jn:return 16;case Nt:return 536870912;default:return 16}default:return 16}}var zi=null,xl=null,Ia=null;function th(){if(Ia)return Ia;var n,i=xl,a=i.length,l,d="value"in zi?zi.value:zi.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var M=a-n;for(l=1;l<=M&&i[a-l]===d[m-l];l++);return Ia=d.slice(n,1<l?1-l:void 0)}function Fa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Oa(){return!0}function nh(){return!1}function Rn(n){function i(a,l,d,m,M){this._reactName=a,this._targetInst=d,this.type=l,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Oa:nh,this.isPropagationStopped=nh,this}return W(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),i}var Gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=Rn(Gr),Ws=W({},Gr,{view:0,detail:0}),bm=Rn(Ws),Ml,El,js,ka=W({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wl,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==js&&(js&&n.type==="mousemove"?(Ml=n.screenX-js.screenX,El=n.screenY-js.screenY):El=Ml=0,js=n),Ml)},movementY:function(n){return"movementY"in n?n.movementY:El}}),ih=Rn(ka),Pm=W({},ka,{dataTransfer:0}),Lm=Rn(Pm),Nm=W({},Ws,{relatedTarget:0}),Tl=Rn(Nm),Um=W({},Gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Dm=Rn(Um),Im=W({},Gr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Fm=Rn(Im),Om=W({},Gr,{data:0}),rh=Rn(Om),km={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hm(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=zm[n])?!!i[n]:!1}function wl(){return Hm}var Vm=W({},Ws,{key:function(n){if(n.key){var i=km[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Fa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Bm[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wl,charCode:function(n){return n.type==="keypress"?Fa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Fa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Gm=Rn(Vm),Wm=W({},ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sh=Rn(Wm),jm=W({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wl}),Xm=Rn(jm),qm=W({},Gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ym=Rn(qm),$m=W({},ka,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Km=Rn($m),Qm=[9,13,27,32],Al=h&&"CompositionEvent"in window,Xs=null;h&&"documentMode"in document&&(Xs=document.documentMode);var Zm=h&&"TextEvent"in window&&!Xs,ah=h&&(!Al||Xs&&8<Xs&&11>=Xs),oh=" ",lh=!1;function uh(n,i){switch(n){case"keyup":return Qm.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ch(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Wr=!1;function Jm(n,i){switch(n){case"compositionend":return ch(i);case"keypress":return i.which!==32?null:(lh=!0,oh);case"textInput":return n=i.data,n===oh&&lh?null:n;default:return null}}function eg(n,i){if(Wr)return n==="compositionend"||!Al&&uh(n,i)?(n=th(),Ia=xl=zi=null,Wr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ah&&i.locale!=="ko"?null:i.data;default:return null}}var tg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!tg[n.type]:i==="textarea"}function dh(n,i,a,l){dt(l),i=Ga(i,"onChange"),0<i.length&&(a=new Sl("onChange","change",null,a,l),n.push({event:a,listeners:i}))}var qs=null,Ys=null;function ng(n){Ph(n,0)}function Ba(n){var i=$r(n);if($(i))return n}function ig(n,i){if(n==="change")return i}var fh=!1;if(h){var Rl;if(h){var Cl="oninput"in document;if(!Cl){var ph=document.createElement("div");ph.setAttribute("oninput","return;"),Cl=typeof ph.oninput=="function"}Rl=Cl}else Rl=!1;fh=Rl&&(!document.documentMode||9<document.documentMode)}function mh(){qs&&(qs.detachEvent("onpropertychange",gh),Ys=qs=null)}function gh(n){if(n.propertyName==="value"&&Ba(Ys)){var i=[];dh(i,Ys,n,H(n)),An(ng,i)}}function rg(n,i,a){n==="focusin"?(mh(),qs=i,Ys=a,qs.attachEvent("onpropertychange",gh)):n==="focusout"&&mh()}function sg(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ba(Ys)}function ag(n,i){if(n==="click")return Ba(i)}function og(n,i){if(n==="input"||n==="change")return Ba(i)}function lg(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Xn=typeof Object.is=="function"?Object.is:lg;function $s(n,i){if(Xn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var d=a[l];if(!f.call(i,d)||!Xn(n[d],i[d]))return!1}return!0}function vh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function _h(n,i){var a=vh(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=i&&l>=i)return{node:a,offset:i-n};n=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vh(a)}}function yh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?yh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function xh(){for(var n=window,i=Pt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Pt(n.document)}return i}function bl(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function ug(n){var i=xh(),a=n.focusedElem,l=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&yh(a.ownerDocument.documentElement,a)){if(l!==null&&bl(a)){if(i=l.start,n=l.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(l.start,d);l=l.end===void 0?m:Math.min(l.end,d),!n.extend&&m>l&&(d=l,l=m,m=d),d=_h(a,m);var M=_h(a,l);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>l?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var cg=h&&"documentMode"in document&&11>=document.documentMode,jr=null,Pl=null,Ks=null,Ll=!1;function Sh(n,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ll||jr==null||jr!==Pt(l)||(l=jr,"selectionStart"in l&&bl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ks&&$s(Ks,l)||(Ks=l,l=Ga(Pl,"onSelect"),0<l.length&&(i=new Sl("onSelect","select",null,i,a),n.push({event:i,listeners:l}),i.target=jr)))}function za(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Xr={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionend:za("Transition","TransitionEnd")},Nl={},Mh={};h&&(Mh=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function Ha(n){if(Nl[n])return Nl[n];if(!Xr[n])return n;var i=Xr[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Mh)return Nl[n]=i[a];return n}var Eh=Ha("animationend"),Th=Ha("animationiteration"),wh=Ha("animationstart"),Ah=Ha("transitionend"),Rh=new Map,Ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hi(n,i){Rh.set(n,i),u(i,[n])}for(var Ul=0;Ul<Ch.length;Ul++){var Dl=Ch[Ul],hg=Dl.toLowerCase(),dg=Dl[0].toUpperCase()+Dl.slice(1);Hi(hg,"on"+dg)}Hi(Eh,"onAnimationEnd"),Hi(Th,"onAnimationIteration"),Hi(wh,"onAnimationStart"),Hi("dblclick","onDoubleClick"),Hi("focusin","onFocus"),Hi("focusout","onBlur"),Hi(Ah,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qs));function bh(n,i,a){var l=n.type||"unknown-event";n.currentTarget=a,dl(l,i,void 0,n),n.currentTarget=null}function Ph(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],d=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var M=l.length-1;0<=M;M--){var U=l[M],B=U.instance,Q=U.currentTarget;if(U=U.listener,B!==m&&d.isPropagationStopped())break e;bh(d,U,Q),m=B}else for(M=0;M<l.length;M++){if(U=l[M],B=U.instance,Q=U.currentTarget,U=U.listener,B!==m&&d.isPropagationStopped())break e;bh(d,U,Q),m=B}}}if(pi)throw n=zr,pi=!1,zr=null,n}function wt(n,i){var a=i[Vl];a===void 0&&(a=i[Vl]=new Set);var l=n+"__bubble";a.has(l)||(Lh(i,n,2,!1),a.add(l))}function Il(n,i,a){var l=0;i&&(l|=4),Lh(a,n,l,i)}var Va="_reactListening"+Math.random().toString(36).slice(2);function Zs(n){if(!n[Va]){n[Va]=!0,r.forEach(function(a){a!=="selectionchange"&&(fg.has(a)||Il(a,!1,n),Il(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Va]||(i[Va]=!0,Il("selectionchange",!1,i))}}function Lh(n,i,a,l){switch(eh(i)){case 1:var d=Rm;break;case 4:d=Cm;break;default:d=_l}a=d.bind(null,i,a,n),d=void 0,!Br||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Fl(n,i,a,l,d){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var U=l.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(M===4)for(M=l.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;M=M.return}for(;U!==null;){if(M=dr(U),M===null)return;if(B=M.tag,B===5||B===6){l=m=M;continue e}U=U.parentNode}}l=l.return}An(function(){var Q=m,ge=H(a),ve=[];e:{var pe=Rh.get(n);if(pe!==void 0){var be=Sl,Fe=n;switch(n){case"keypress":if(Fa(a)===0)break e;case"keydown":case"keyup":be=Gm;break;case"focusin":Fe="focus",be=Tl;break;case"focusout":Fe="blur",be=Tl;break;case"beforeblur":case"afterblur":be=Tl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":be=ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":be=Lm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":be=Xm;break;case Eh:case Th:case wh:be=Dm;break;case Ah:be=Ym;break;case"scroll":be=bm;break;case"wheel":be=Km;break;case"copy":case"cut":case"paste":be=Fm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":be=sh}var Be=(i&4)!==0,kt=!Be&&n==="scroll",j=Be?pe!==null?pe+"Capture":null:pe;Be=[];for(var V=Q,q;V!==null;){q=V;var xe=q.stateNode;if(q.tag===5&&xe!==null&&(q=xe,j!==null&&(xe=Ot(V,j),xe!=null&&Be.push(Js(V,xe,q)))),kt)break;V=V.return}0<Be.length&&(pe=new be(pe,Fe,null,a,ge),ve.push({event:pe,listeners:Be}))}}if((i&7)===0){e:{if(pe=n==="mouseover"||n==="pointerover",be=n==="mouseout"||n==="pointerout",pe&&a!==gt&&(Fe=a.relatedTarget||a.fromElement)&&(dr(Fe)||Fe[gi]))break e;if((be||pe)&&(pe=ge.window===ge?ge:(pe=ge.ownerDocument)?pe.defaultView||pe.parentWindow:window,be?(Fe=a.relatedTarget||a.toElement,be=Q,Fe=Fe?dr(Fe):null,Fe!==null&&(kt=b(Fe),Fe!==kt||Fe.tag!==5&&Fe.tag!==6)&&(Fe=null)):(be=null,Fe=Q),be!==Fe)){if(Be=ih,xe="onMouseLeave",j="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(Be=sh,xe="onPointerLeave",j="onPointerEnter",V="pointer"),kt=be==null?pe:$r(be),q=Fe==null?pe:$r(Fe),pe=new Be(xe,V+"leave",be,a,ge),pe.target=kt,pe.relatedTarget=q,xe=null,dr(ge)===Q&&(Be=new Be(j,V+"enter",Fe,a,ge),Be.target=q,Be.relatedTarget=kt,xe=Be),kt=xe,be&&Fe)t:{for(Be=be,j=Fe,V=0,q=Be;q;q=qr(q))V++;for(q=0,xe=j;xe;xe=qr(xe))q++;for(;0<V-q;)Be=qr(Be),V--;for(;0<q-V;)j=qr(j),q--;for(;V--;){if(Be===j||j!==null&&Be===j.alternate)break t;Be=qr(Be),j=qr(j)}Be=null}else Be=null;be!==null&&Nh(ve,pe,be,Be,!1),Fe!==null&&kt!==null&&Nh(ve,kt,Fe,Be,!0)}}e:{if(pe=Q?$r(Q):window,be=pe.nodeName&&pe.nodeName.toLowerCase(),be==="select"||be==="input"&&pe.type==="file")var ze=ig;else if(hh(pe))if(fh)ze=og;else{ze=sg;var Ke=rg}else(be=pe.nodeName)&&be.toLowerCase()==="input"&&(pe.type==="checkbox"||pe.type==="radio")&&(ze=ag);if(ze&&(ze=ze(n,Q))){dh(ve,ze,a,ge);break e}Ke&&Ke(n,pe,Q),n==="focusout"&&(Ke=pe._wrapperState)&&Ke.controlled&&pe.type==="number"&&je(pe,"number",pe.value)}switch(Ke=Q?$r(Q):window,n){case"focusin":(hh(Ke)||Ke.contentEditable==="true")&&(jr=Ke,Pl=Q,Ks=null);break;case"focusout":Ks=Pl=jr=null;break;case"mousedown":Ll=!0;break;case"contextmenu":case"mouseup":case"dragend":Ll=!1,Sh(ve,a,ge);break;case"selectionchange":if(cg)break;case"keydown":case"keyup":Sh(ve,a,ge)}var Qe;if(Al)e:{switch(n){case"compositionstart":var et="onCompositionStart";break e;case"compositionend":et="onCompositionEnd";break e;case"compositionupdate":et="onCompositionUpdate";break e}et=void 0}else Wr?uh(n,a)&&(et="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(et="onCompositionStart");et&&(ah&&a.locale!=="ko"&&(Wr||et!=="onCompositionStart"?et==="onCompositionEnd"&&Wr&&(Qe=th()):(zi=ge,xl="value"in zi?zi.value:zi.textContent,Wr=!0)),Ke=Ga(Q,et),0<Ke.length&&(et=new rh(et,n,null,a,ge),ve.push({event:et,listeners:Ke}),Qe?et.data=Qe:(Qe=ch(a),Qe!==null&&(et.data=Qe)))),(Qe=Zm?Jm(n,a):eg(n,a))&&(Q=Ga(Q,"onBeforeInput"),0<Q.length&&(ge=new rh("onBeforeInput","beforeinput",null,a,ge),ve.push({event:ge,listeners:Q}),ge.data=Qe))}Ph(ve,i)})}function Js(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ga(n,i){for(var a=i+"Capture",l=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Ot(n,a),m!=null&&l.unshift(Js(n,m,d)),m=Ot(n,i),m!=null&&l.push(Js(n,m,d))),n=n.return}return l}function qr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Nh(n,i,a,l,d){for(var m=i._reactName,M=[];a!==null&&a!==l;){var U=a,B=U.alternate,Q=U.stateNode;if(B!==null&&B===l)break;U.tag===5&&Q!==null&&(U=Q,d?(B=Ot(a,m),B!=null&&M.unshift(Js(a,B,U))):d||(B=Ot(a,m),B!=null&&M.push(Js(a,B,U)))),a=a.return}M.length!==0&&n.push({event:i,listeners:M})}var pg=/\r\n?/g,mg=/\u0000|\uFFFD/g;function Uh(n){return(typeof n=="string"?n:""+n).replace(pg,`
`).replace(mg,"")}function Wa(n,i,a){if(i=Uh(i),Uh(n)!==i&&a)throw Error(t(425))}function ja(){}var Ol=null,kl=null;function Bl(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var zl=typeof setTimeout=="function"?setTimeout:void 0,gg=typeof clearTimeout=="function"?clearTimeout:void 0,Dh=typeof Promise=="function"?Promise:void 0,vg=typeof queueMicrotask=="function"?queueMicrotask:typeof Dh<"u"?function(n){return Dh.resolve(null).then(n).catch(_g)}:zl;function _g(n){setTimeout(function(){throw n})}function Hl(n,i){var a=i,l=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(l===0){n.removeChild(d),Gs(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=d}while(a);Gs(i)}function Vi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ih(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),ai="__reactFiber$"+Yr,ea="__reactProps$"+Yr,gi="__reactContainer$"+Yr,Vl="__reactEvents$"+Yr,yg="__reactListeners$"+Yr,xg="__reactHandles$"+Yr;function dr(n){var i=n[ai];if(i)return i;for(var a=n.parentNode;a;){if(i=a[gi]||a[ai]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Ih(n);n!==null;){if(a=n[ai])return a;n=Ih(n)}return i}n=a,a=n.parentNode}return null}function ta(n){return n=n[ai]||n[gi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function $r(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Xa(n){return n[ea]||null}var Gl=[],Kr=-1;function Gi(n){return{current:n}}function At(n){0>Kr||(n.current=Gl[Kr],Gl[Kr]=null,Kr--)}function Tt(n,i){Kr++,Gl[Kr]=n.current,n.current=i}var Wi={},an=Gi(Wi),gn=Gi(!1),fr=Wi;function Qr(n,i){var a=n.type.contextTypes;if(!a)return Wi;var l=n.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return l&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function vn(n){return n=n.childContextTypes,n!=null}function qa(){At(gn),At(an)}function Fh(n,i,a){if(an.current!==Wi)throw Error(t(168));Tt(an,i),Tt(gn,a)}function Oh(n,i,a){var l=n.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var d in l)if(!(d in i))throw Error(t(108,Le(n)||"Unknown",d));return W({},a,l)}function Ya(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Wi,fr=an.current,Tt(an,n),Tt(gn,gn.current),!0}function kh(n,i,a){var l=n.stateNode;if(!l)throw Error(t(169));a?(n=Oh(n,i,fr),l.__reactInternalMemoizedMergedChildContext=n,At(gn),At(an),Tt(an,n)):At(gn),Tt(gn,a)}var vi=null,$a=!1,Wl=!1;function Bh(n){vi===null?vi=[n]:vi.push(n)}function Sg(n){$a=!0,Bh(n)}function ji(){if(!Wl&&vi!==null){Wl=!0;var n=0,i=_t;try{var a=vi;for(_t=1;n<a.length;n++){var l=a[n];do l=l(!0);while(l!==null)}vi=null,$a=!1}catch(d){throw vi!==null&&(vi=vi.slice(n+1)),qe(Et,ji),d}finally{_t=i,Wl=!1}}return null}var Zr=[],Jr=0,Ka=null,Qa=0,Fn=[],On=0,pr=null,_i=1,yi="";function mr(n,i){Zr[Jr++]=Qa,Zr[Jr++]=Ka,Ka=n,Qa=i}function zh(n,i,a){Fn[On++]=_i,Fn[On++]=yi,Fn[On++]=pr,pr=n;var l=_i;n=yi;var d=32-Gt(l)-1;l&=~(1<<d),a+=1;var m=32-Gt(i)+d;if(30<m){var M=d-d%5;m=(l&(1<<M)-1).toString(32),l>>=M,d-=M,_i=1<<32-Gt(i)+d|a<<d|l,yi=m+n}else _i=1<<m|a<<d|l,yi=n}function jl(n){n.return!==null&&(mr(n,1),zh(n,1,0))}function Xl(n){for(;n===Ka;)Ka=Zr[--Jr],Zr[Jr]=null,Qa=Zr[--Jr],Zr[Jr]=null;for(;n===pr;)pr=Fn[--On],Fn[On]=null,yi=Fn[--On],Fn[On]=null,_i=Fn[--On],Fn[On]=null}var Cn=null,bn=null,bt=!1,qn=null;function Hh(n,i){var a=Hn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Vh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Cn=n,bn=Vi(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Cn=n,bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=pr!==null?{id:_i,overflow:yi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Hn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Cn=n,bn=null,!0):!1;default:return!1}}function ql(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Yl(n){if(bt){var i=bn;if(i){var a=i;if(!Vh(n,i)){if(ql(n))throw Error(t(418));i=Vi(a.nextSibling);var l=Cn;i&&Vh(n,i)?Hh(l,a):(n.flags=n.flags&-4097|2,bt=!1,Cn=n)}}else{if(ql(n))throw Error(t(418));n.flags=n.flags&-4097|2,bt=!1,Cn=n}}}function Gh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Cn=n}function Za(n){if(n!==Cn)return!1;if(!bt)return Gh(n),bt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Bl(n.type,n.memoizedProps)),i&&(i=bn)){if(ql(n))throw Wh(),Error(t(418));for(;i;)Hh(n,i),i=Vi(i.nextSibling)}if(Gh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){bn=Vi(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}bn=null}}else bn=Cn?Vi(n.stateNode.nextSibling):null;return!0}function Wh(){for(var n=bn;n;)n=Vi(n.nextSibling)}function es(){bn=Cn=null,bt=!1}function $l(n){qn===null?qn=[n]:qn.push(n)}var Mg=L.ReactCurrentBatchConfig;function na(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var l=a.stateNode}if(!l)throw Error(t(147,n));var d=l,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var U=d.refs;M===null?delete U[m]:U[m]=M},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ja(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function jh(n){var i=n._init;return i(n._payload)}function Xh(n){function i(j,V){if(n){var q=j.deletions;q===null?(j.deletions=[V],j.flags|=16):q.push(V)}}function a(j,V){if(!n)return null;for(;V!==null;)i(j,V),V=V.sibling;return null}function l(j,V){for(j=new Map;V!==null;)V.key!==null?j.set(V.key,V):j.set(V.index,V),V=V.sibling;return j}function d(j,V){return j=Ji(j,V),j.index=0,j.sibling=null,j}function m(j,V,q){return j.index=q,n?(q=j.alternate,q!==null?(q=q.index,q<V?(j.flags|=2,V):q):(j.flags|=2,V)):(j.flags|=1048576,V)}function M(j){return n&&j.alternate===null&&(j.flags|=2),j}function U(j,V,q,xe){return V===null||V.tag!==6?(V=zu(q,j.mode,xe),V.return=j,V):(V=d(V,q),V.return=j,V)}function B(j,V,q,xe){var ze=q.type;return ze===k?ge(j,V,q.props.children,xe,q.key):V!==null&&(V.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===ce&&jh(ze)===V.type)?(xe=d(V,q.props),xe.ref=na(j,V,q),xe.return=j,xe):(xe=To(q.type,q.key,q.props,null,j.mode,xe),xe.ref=na(j,V,q),xe.return=j,xe)}function Q(j,V,q,xe){return V===null||V.tag!==4||V.stateNode.containerInfo!==q.containerInfo||V.stateNode.implementation!==q.implementation?(V=Hu(q,j.mode,xe),V.return=j,V):(V=d(V,q.children||[]),V.return=j,V)}function ge(j,V,q,xe,ze){return V===null||V.tag!==7?(V=Er(q,j.mode,xe,ze),V.return=j,V):(V=d(V,q),V.return=j,V)}function ve(j,V,q){if(typeof V=="string"&&V!==""||typeof V=="number")return V=zu(""+V,j.mode,q),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case F:return q=To(V.type,V.key,V.props,null,j.mode,q),q.ref=na(j,null,V),q.return=j,q;case z:return V=Hu(V,j.mode,q),V.return=j,V;case ce:var xe=V._init;return ve(j,xe(V._payload),q)}if(Oe(V)||J(V))return V=Er(V,j.mode,q,null),V.return=j,V;Ja(j,V)}return null}function pe(j,V,q,xe){var ze=V!==null?V.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return ze!==null?null:U(j,V,""+q,xe);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case F:return q.key===ze?B(j,V,q,xe):null;case z:return q.key===ze?Q(j,V,q,xe):null;case ce:return ze=q._init,pe(j,V,ze(q._payload),xe)}if(Oe(q)||J(q))return ze!==null?null:ge(j,V,q,xe,null);Ja(j,q)}return null}function be(j,V,q,xe,ze){if(typeof xe=="string"&&xe!==""||typeof xe=="number")return j=j.get(q)||null,U(V,j,""+xe,ze);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case F:return j=j.get(xe.key===null?q:xe.key)||null,B(V,j,xe,ze);case z:return j=j.get(xe.key===null?q:xe.key)||null,Q(V,j,xe,ze);case ce:var Ke=xe._init;return be(j,V,q,Ke(xe._payload),ze)}if(Oe(xe)||J(xe))return j=j.get(q)||null,ge(V,j,xe,ze,null);Ja(V,xe)}return null}function Fe(j,V,q,xe){for(var ze=null,Ke=null,Qe=V,et=V=0,Zt=null;Qe!==null&&et<q.length;et++){Qe.index>et?(Zt=Qe,Qe=null):Zt=Qe.sibling;var pt=pe(j,Qe,q[et],xe);if(pt===null){Qe===null&&(Qe=Zt);break}n&&Qe&&pt.alternate===null&&i(j,Qe),V=m(pt,V,et),Ke===null?ze=pt:Ke.sibling=pt,Ke=pt,Qe=Zt}if(et===q.length)return a(j,Qe),bt&&mr(j,et),ze;if(Qe===null){for(;et<q.length;et++)Qe=ve(j,q[et],xe),Qe!==null&&(V=m(Qe,V,et),Ke===null?ze=Qe:Ke.sibling=Qe,Ke=Qe);return bt&&mr(j,et),ze}for(Qe=l(j,Qe);et<q.length;et++)Zt=be(Qe,j,et,q[et],xe),Zt!==null&&(n&&Zt.alternate!==null&&Qe.delete(Zt.key===null?et:Zt.key),V=m(Zt,V,et),Ke===null?ze=Zt:Ke.sibling=Zt,Ke=Zt);return n&&Qe.forEach(function(er){return i(j,er)}),bt&&mr(j,et),ze}function Be(j,V,q,xe){var ze=J(q);if(typeof ze!="function")throw Error(t(150));if(q=ze.call(q),q==null)throw Error(t(151));for(var Ke=ze=null,Qe=V,et=V=0,Zt=null,pt=q.next();Qe!==null&&!pt.done;et++,pt=q.next()){Qe.index>et?(Zt=Qe,Qe=null):Zt=Qe.sibling;var er=pe(j,Qe,pt.value,xe);if(er===null){Qe===null&&(Qe=Zt);break}n&&Qe&&er.alternate===null&&i(j,Qe),V=m(er,V,et),Ke===null?ze=er:Ke.sibling=er,Ke=er,Qe=Zt}if(pt.done)return a(j,Qe),bt&&mr(j,et),ze;if(Qe===null){for(;!pt.done;et++,pt=q.next())pt=ve(j,pt.value,xe),pt!==null&&(V=m(pt,V,et),Ke===null?ze=pt:Ke.sibling=pt,Ke=pt);return bt&&mr(j,et),ze}for(Qe=l(j,Qe);!pt.done;et++,pt=q.next())pt=be(Qe,j,et,pt.value,xe),pt!==null&&(n&&pt.alternate!==null&&Qe.delete(pt.key===null?et:pt.key),V=m(pt,V,et),Ke===null?ze=pt:Ke.sibling=pt,Ke=pt);return n&&Qe.forEach(function(t0){return i(j,t0)}),bt&&mr(j,et),ze}function kt(j,V,q,xe){if(typeof q=="object"&&q!==null&&q.type===k&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case F:e:{for(var ze=q.key,Ke=V;Ke!==null;){if(Ke.key===ze){if(ze=q.type,ze===k){if(Ke.tag===7){a(j,Ke.sibling),V=d(Ke,q.props.children),V.return=j,j=V;break e}}else if(Ke.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===ce&&jh(ze)===Ke.type){a(j,Ke.sibling),V=d(Ke,q.props),V.ref=na(j,Ke,q),V.return=j,j=V;break e}a(j,Ke);break}else i(j,Ke);Ke=Ke.sibling}q.type===k?(V=Er(q.props.children,j.mode,xe,q.key),V.return=j,j=V):(xe=To(q.type,q.key,q.props,null,j.mode,xe),xe.ref=na(j,V,q),xe.return=j,j=xe)}return M(j);case z:e:{for(Ke=q.key;V!==null;){if(V.key===Ke)if(V.tag===4&&V.stateNode.containerInfo===q.containerInfo&&V.stateNode.implementation===q.implementation){a(j,V.sibling),V=d(V,q.children||[]),V.return=j,j=V;break e}else{a(j,V);break}else i(j,V);V=V.sibling}V=Hu(q,j.mode,xe),V.return=j,j=V}return M(j);case ce:return Ke=q._init,kt(j,V,Ke(q._payload),xe)}if(Oe(q))return Fe(j,V,q,xe);if(J(q))return Be(j,V,q,xe);Ja(j,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,V!==null&&V.tag===6?(a(j,V.sibling),V=d(V,q),V.return=j,j=V):(a(j,V),V=zu(q,j.mode,xe),V.return=j,j=V),M(j)):a(j,V)}return kt}var ts=Xh(!0),qh=Xh(!1),eo=Gi(null),to=null,ns=null,Kl=null;function Ql(){Kl=ns=to=null}function Zl(n){var i=eo.current;At(eo),n._currentValue=i}function Jl(n,i,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===a)break;n=n.return}}function is(n,i){to=n,Kl=ns=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(_n=!0),n.firstContext=null)}function kn(n){var i=n._currentValue;if(Kl!==n)if(n={context:n,memoizedValue:i,next:null},ns===null){if(to===null)throw Error(t(308));ns=n,to.dependencies={lanes:0,firstContext:n}}else ns=ns.next=n;return i}var gr=null;function eu(n){gr===null?gr=[n]:gr.push(n)}function Yh(n,i,a,l){var d=i.interleaved;return d===null?(a.next=a,eu(i)):(a.next=d.next,d.next=a),i.interleaved=a,xi(n,l)}function xi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Xi=!1;function tu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $h(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Si(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function qi(n,i,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(ft&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,xi(n,a)}return d=l.interleaved,d===null?(i.next=i,eu(l)):(i.next=d.next,d.next=i),l.interleaved=i,xi(n,a)}function no(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,ml(n,a)}}function Kh(n,i){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=M:m=m.next=M,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:l.shared,effects:l.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function io(n,i,a,l){var d=n.updateQueue;Xi=!1;var m=d.firstBaseUpdate,M=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var B=U,Q=B.next;B.next=null,M===null?m=Q:M.next=Q,M=B;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,U=ge.lastBaseUpdate,U!==M&&(U===null?ge.firstBaseUpdate=Q:U.next=Q,ge.lastBaseUpdate=B))}if(m!==null){var ve=d.baseState;M=0,ge=Q=B=null,U=m;do{var pe=U.lane,be=U.eventTime;if((l&pe)===pe){ge!==null&&(ge=ge.next={eventTime:be,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Fe=n,Be=U;switch(pe=i,be=a,Be.tag){case 1:if(Fe=Be.payload,typeof Fe=="function"){ve=Fe.call(be,ve,pe);break e}ve=Fe;break e;case 3:Fe.flags=Fe.flags&-65537|128;case 0:if(Fe=Be.payload,pe=typeof Fe=="function"?Fe.call(be,ve,pe):Fe,pe==null)break e;ve=W({},ve,pe);break e;case 2:Xi=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,pe=d.effects,pe===null?d.effects=[U]:pe.push(U))}else be={eventTime:be,lane:pe,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ge===null?(Q=ge=be,B=ve):ge=ge.next=be,M|=pe;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;pe=U,U=pe.next,pe.next=null,d.lastBaseUpdate=pe,d.shared.pending=null}}while(!0);if(ge===null&&(B=ve),d.baseState=B,d.firstBaseUpdate=Q,d.lastBaseUpdate=ge,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);yr|=M,n.lanes=M,n.memoizedState=ve}}function Qh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var l=n[i],d=l.callback;if(d!==null){if(l.callback=null,l=a,typeof d!="function")throw Error(t(191,d));d.call(l)}}}var ia={},oi=Gi(ia),ra=Gi(ia),sa=Gi(ia);function vr(n){if(n===ia)throw Error(t(174));return n}function nu(n,i){switch(Tt(sa,i),Tt(ra,n),Tt(oi,ia),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:_e(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=_e(i,n)}At(oi),Tt(oi,i)}function rs(){At(oi),At(ra),At(sa)}function Zh(n){vr(sa.current);var i=vr(oi.current),a=_e(i,n.type);i!==a&&(Tt(ra,n),Tt(oi,a))}function iu(n){ra.current===n&&(At(oi),At(ra))}var Ut=Gi(0);function ro(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ru=[];function su(){for(var n=0;n<ru.length;n++)ru[n]._workInProgressVersionPrimary=null;ru.length=0}var so=L.ReactCurrentDispatcher,au=L.ReactCurrentBatchConfig,_r=0,Dt=null,Wt=null,Kt=null,ao=!1,aa=!1,oa=0,Eg=0;function on(){throw Error(t(321))}function ou(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Xn(n[a],i[a]))return!1;return!0}function lu(n,i,a,l,d,m){if(_r=m,Dt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,so.current=n===null||n.memoizedState===null?Rg:Cg,n=a(l,d),aa){m=0;do{if(aa=!1,oa=0,25<=m)throw Error(t(301));m+=1,Kt=Wt=null,i.updateQueue=null,so.current=bg,n=a(l,d)}while(aa)}if(so.current=uo,i=Wt!==null&&Wt.next!==null,_r=0,Kt=Wt=Dt=null,ao=!1,i)throw Error(t(300));return n}function uu(){var n=oa!==0;return oa=0,n}function li(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?Dt.memoizedState=Kt=n:Kt=Kt.next=n,Kt}function Bn(){if(Wt===null){var n=Dt.alternate;n=n!==null?n.memoizedState:null}else n=Wt.next;var i=Kt===null?Dt.memoizedState:Kt.next;if(i!==null)Kt=i,Wt=n;else{if(n===null)throw Error(t(310));Wt=n,n={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},Kt===null?Dt.memoizedState=Kt=n:Kt=Kt.next=n}return Kt}function la(n,i){return typeof i=="function"?i(n):i}function cu(n){var i=Bn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var l=Wt,d=l.baseQueue,m=a.pending;if(m!==null){if(d!==null){var M=d.next;d.next=m.next,m.next=M}l.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,l=l.baseState;var U=M=null,B=null,Q=m;do{var ge=Q.lane;if((_r&ge)===ge)B!==null&&(B=B.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),l=Q.hasEagerState?Q.eagerState:n(l,Q.action);else{var ve={lane:ge,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};B===null?(U=B=ve,M=l):B=B.next=ve,Dt.lanes|=ge,yr|=ge}Q=Q.next}while(Q!==null&&Q!==m);B===null?M=l:B.next=U,Xn(l,i.memoizedState)||(_n=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=B,a.lastRenderedState=l}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Dt.lanes|=m,yr|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function hu(n){var i=Bn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var l=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var M=d=d.next;do m=n(m,M.action),M=M.next;while(M!==d);Xn(m,i.memoizedState)||(_n=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,l]}function Jh(){}function ed(n,i){var a=Dt,l=Bn(),d=i(),m=!Xn(l.memoizedState,d);if(m&&(l.memoizedState=d,_n=!0),l=l.queue,du(id.bind(null,a,l,n),[n]),l.getSnapshot!==i||m||Kt!==null&&Kt.memoizedState.tag&1){if(a.flags|=2048,ua(9,nd.bind(null,a,l,d,i),void 0,null),Qt===null)throw Error(t(349));(_r&30)!==0||td(a,i,d)}return d}function td(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Dt.updateQueue,i===null?(i={lastEffect:null,stores:null},Dt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function nd(n,i,a,l){i.value=a,i.getSnapshot=l,rd(i)&&sd(n)}function id(n,i,a){return a(function(){rd(i)&&sd(n)})}function rd(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Xn(n,a)}catch{return!0}}function sd(n){var i=xi(n,1);i!==null&&Qn(i,n,1,-1)}function ad(n){var i=li();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:n},i.queue=n,n=n.dispatch=Ag.bind(null,Dt,n),[i.memoizedState,n]}function ua(n,i,a,l){return n={tag:n,create:i,destroy:a,deps:l,next:null},i=Dt.updateQueue,i===null?(i={lastEffect:null,stores:null},Dt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,i.lastEffect=n)),n}function od(){return Bn().memoizedState}function oo(n,i,a,l){var d=li();Dt.flags|=n,d.memoizedState=ua(1|i,a,void 0,l===void 0?null:l)}function lo(n,i,a,l){var d=Bn();l=l===void 0?null:l;var m=void 0;if(Wt!==null){var M=Wt.memoizedState;if(m=M.destroy,l!==null&&ou(l,M.deps)){d.memoizedState=ua(i,a,m,l);return}}Dt.flags|=n,d.memoizedState=ua(1|i,a,m,l)}function ld(n,i){return oo(8390656,8,n,i)}function du(n,i){return lo(2048,8,n,i)}function ud(n,i){return lo(4,2,n,i)}function cd(n,i){return lo(4,4,n,i)}function hd(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function dd(n,i,a){return a=a!=null?a.concat([n]):null,lo(4,4,hd.bind(null,i,n),a)}function fu(){}function fd(n,i){var a=Bn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&ou(i,l[1])?l[0]:(a.memoizedState=[n,i],n)}function pd(n,i){var a=Bn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&ou(i,l[1])?l[0]:(n=n(),a.memoizedState=[n,i],n)}function md(n,i,a){return(_r&21)===0?(n.baseState&&(n.baseState=!1,_n=!0),n.memoizedState=a):(Xn(a,i)||(a=jc(),Dt.lanes|=a,yr|=a,n.baseState=!0),i)}function Tg(n,i){var a=_t;_t=a!==0&&4>a?a:4,n(!0);var l=au.transition;au.transition={};try{n(!1),i()}finally{_t=a,au.transition=l}}function gd(){return Bn().memoizedState}function wg(n,i,a){var l=Qi(n);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},vd(n))_d(i,a);else if(a=Yh(n,i,a,l),a!==null){var d=fn();Qn(a,n,l,d),yd(a,i,l)}}function Ag(n,i,a){var l=Qi(n),d={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(vd(n))_d(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,U=m(M,a);if(d.hasEagerState=!0,d.eagerState=U,Xn(U,M)){var B=i.interleaved;B===null?(d.next=d,eu(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}a=Yh(n,i,d,l),a!==null&&(d=fn(),Qn(a,n,l,d),yd(a,i,l))}}function vd(n){var i=n.alternate;return n===Dt||i!==null&&i===Dt}function _d(n,i){aa=ao=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function yd(n,i,a){if((a&4194240)!==0){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,ml(n,a)}}var uo={readContext:kn,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},Rg={readContext:kn,useCallback:function(n,i){return li().memoizedState=[n,i===void 0?null:i],n},useContext:kn,useEffect:ld,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,oo(4194308,4,hd.bind(null,i,n),a)},useLayoutEffect:function(n,i){return oo(4194308,4,n,i)},useInsertionEffect:function(n,i){return oo(4,2,n,i)},useMemo:function(n,i){var a=li();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var l=li();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},l.queue=n,n=n.dispatch=wg.bind(null,Dt,n),[l.memoizedState,n]},useRef:function(n){var i=li();return n={current:n},i.memoizedState=n},useState:ad,useDebugValue:fu,useDeferredValue:function(n){return li().memoizedState=n},useTransition:function(){var n=ad(!1),i=n[0];return n=Tg.bind(null,n[1]),li().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var l=Dt,d=li();if(bt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Qt===null)throw Error(t(349));(_r&30)!==0||td(l,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,ld(id.bind(null,l,m,n),[n]),l.flags|=2048,ua(9,nd.bind(null,l,m,a,i),void 0,null),a},useId:function(){var n=li(),i=Qt.identifierPrefix;if(bt){var a=yi,l=_i;a=(l&~(1<<32-Gt(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=oa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Eg++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Cg={readContext:kn,useCallback:fd,useContext:kn,useEffect:du,useImperativeHandle:dd,useInsertionEffect:ud,useLayoutEffect:cd,useMemo:pd,useReducer:cu,useRef:od,useState:function(){return cu(la)},useDebugValue:fu,useDeferredValue:function(n){var i=Bn();return md(i,Wt.memoizedState,n)},useTransition:function(){var n=cu(la)[0],i=Bn().memoizedState;return[n,i]},useMutableSource:Jh,useSyncExternalStore:ed,useId:gd,unstable_isNewReconciler:!1},bg={readContext:kn,useCallback:fd,useContext:kn,useEffect:du,useImperativeHandle:dd,useInsertionEffect:ud,useLayoutEffect:cd,useMemo:pd,useReducer:hu,useRef:od,useState:function(){return hu(la)},useDebugValue:fu,useDeferredValue:function(n){var i=Bn();return Wt===null?i.memoizedState=n:md(i,Wt.memoizedState,n)},useTransition:function(){var n=hu(la)[0],i=Bn().memoizedState;return[n,i]},useMutableSource:Jh,useSyncExternalStore:ed,useId:gd,unstable_isNewReconciler:!1};function Yn(n,i){if(n&&n.defaultProps){i=W({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function pu(n,i,a,l){i=n.memoizedState,a=a(l,i),a=a==null?i:W({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var co={isMounted:function(n){return(n=n._reactInternals)?b(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var l=fn(),d=Qi(n),m=Si(l,d);m.payload=i,a!=null&&(m.callback=a),i=qi(n,m,d),i!==null&&(Qn(i,n,d,l),no(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var l=fn(),d=Qi(n),m=Si(l,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=qi(n,m,d),i!==null&&(Qn(i,n,d,l),no(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=fn(),l=Qi(n),d=Si(a,l);d.tag=2,i!=null&&(d.callback=i),i=qi(n,d,l),i!==null&&(Qn(i,n,l,a),no(i,n,l))}};function xd(n,i,a,l,d,m,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,m,M):i.prototype&&i.prototype.isPureReactComponent?!$s(a,l)||!$s(d,m):!0}function Sd(n,i,a){var l=!1,d=Wi,m=i.contextType;return typeof m=="object"&&m!==null?m=kn(m):(d=vn(i)?fr:an.current,l=i.contextTypes,m=(l=l!=null)?Qr(n,d):Wi),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=co,n.stateNode=i,i._reactInternals=n,l&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Md(n,i,a,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==n&&co.enqueueReplaceState(i,i.state,null)}function mu(n,i,a,l){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},tu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=kn(m):(m=vn(i)?fr:an.current,d.context=Qr(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(pu(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&co.enqueueReplaceState(d,d.state,null),io(n,a,d,l),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ss(n,i){try{var a="",l=i;do a+=me(l),l=l.return;while(l);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function gu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function vu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Pg=typeof WeakMap=="function"?WeakMap:Map;function Ed(n,i,a){a=Si(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){_o||(_o=!0,Nu=l),vu(n,i)},a}function Td(n,i,a){a=Si(-1,a),a.tag=3;var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;a.payload=function(){return l(d)},a.callback=function(){vu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){vu(n,i),typeof l!="function"&&($i===null?$i=new Set([this]):$i.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),a}function wd(n,i,a){var l=n.pingCache;if(l===null){l=n.pingCache=new Pg;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(a)||(d.add(a),n=Wg.bind(null,n,i,a),i.then(n,n))}function Ad(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Rd(n,i,a,l,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Si(-1,1),i.tag=2,qi(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Lg=L.ReactCurrentOwner,_n=!1;function dn(n,i,a,l){i.child=n===null?qh(i,null,a,l):ts(i,n.child,a,l)}function Cd(n,i,a,l,d){a=a.render;var m=i.ref;return is(i,d),l=lu(n,i,a,l,m,d),a=uu(),n!==null&&!_n?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Mi(n,i,d)):(bt&&a&&jl(i),i.flags|=1,dn(n,i,l,d),i.child)}function bd(n,i,a,l,d){if(n===null){var m=a.type;return typeof m=="function"&&!Bu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Pd(n,i,m,l,d)):(n=To(a.type,null,l,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var M=m.memoizedProps;if(a=a.compare,a=a!==null?a:$s,a(M,l)&&n.ref===i.ref)return Mi(n,i,d)}return i.flags|=1,n=Ji(m,l),n.ref=i.ref,n.return=i,i.child=n}function Pd(n,i,a,l,d){if(n!==null){var m=n.memoizedProps;if($s(m,l)&&n.ref===i.ref)if(_n=!1,i.pendingProps=l=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(_n=!0);else return i.lanes=n.lanes,Mi(n,i,d)}return _u(n,i,a,l,d)}function Ld(n,i,a){var l=i.pendingProps,d=l.children,m=n!==null?n.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Tt(os,Pn),Pn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Tt(os,Pn),Pn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=m!==null?m.baseLanes:a,Tt(os,Pn),Pn|=l}else m!==null?(l=m.baseLanes|a,i.memoizedState=null):l=a,Tt(os,Pn),Pn|=l;return dn(n,i,d,a),i.child}function Nd(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function _u(n,i,a,l,d){var m=vn(a)?fr:an.current;return m=Qr(i,m),is(i,d),a=lu(n,i,a,l,m,d),l=uu(),n!==null&&!_n?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Mi(n,i,d)):(bt&&l&&jl(i),i.flags|=1,dn(n,i,a,d),i.child)}function Ud(n,i,a,l,d){if(vn(a)){var m=!0;Ya(i)}else m=!1;if(is(i,d),i.stateNode===null)fo(n,i),Sd(i,a,l),mu(i,a,l,d),l=!0;else if(n===null){var M=i.stateNode,U=i.memoizedProps;M.props=U;var B=M.context,Q=a.contextType;typeof Q=="object"&&Q!==null?Q=kn(Q):(Q=vn(a)?fr:an.current,Q=Qr(i,Q));var ge=a.getDerivedStateFromProps,ve=typeof ge=="function"||typeof M.getSnapshotBeforeUpdate=="function";ve||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==l||B!==Q)&&Md(i,M,l,Q),Xi=!1;var pe=i.memoizedState;M.state=pe,io(i,l,M,d),B=i.memoizedState,U!==l||pe!==B||gn.current||Xi?(typeof ge=="function"&&(pu(i,a,ge,l),B=i.memoizedState),(U=Xi||xd(i,a,U,l,pe,B,Q))?(ve||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),M.props=l,M.state=B,M.context=Q,l=U):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,$h(n,i),U=i.memoizedProps,Q=i.type===i.elementType?U:Yn(i.type,U),M.props=Q,ve=i.pendingProps,pe=M.context,B=a.contextType,typeof B=="object"&&B!==null?B=kn(B):(B=vn(a)?fr:an.current,B=Qr(i,B));var be=a.getDerivedStateFromProps;(ge=typeof be=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==ve||pe!==B)&&Md(i,M,l,B),Xi=!1,pe=i.memoizedState,M.state=pe,io(i,l,M,d);var Fe=i.memoizedState;U!==ve||pe!==Fe||gn.current||Xi?(typeof be=="function"&&(pu(i,a,be,l),Fe=i.memoizedState),(Q=Xi||xd(i,a,Q,l,pe,Fe,B)||!1)?(ge||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Fe,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Fe,B)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&pe===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&pe===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Fe),M.props=l,M.state=Fe,M.context=B,l=Q):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&pe===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&pe===n.memoizedState||(i.flags|=1024),l=!1)}return yu(n,i,a,l,m,d)}function yu(n,i,a,l,d,m){Nd(n,i);var M=(i.flags&128)!==0;if(!l&&!M)return d&&kh(i,a,!1),Mi(n,i,m);l=i.stateNode,Lg.current=i;var U=M&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,n!==null&&M?(i.child=ts(i,n.child,null,m),i.child=ts(i,null,U,m)):dn(n,i,U,m),i.memoizedState=l.state,d&&kh(i,a,!0),i.child}function Dd(n){var i=n.stateNode;i.pendingContext?Fh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Fh(n,i.context,!1),nu(n,i.containerInfo)}function Id(n,i,a,l,d){return es(),$l(d),i.flags|=256,dn(n,i,a,l),i.child}var xu={dehydrated:null,treeContext:null,retryLane:0};function Su(n){return{baseLanes:n,cachePool:null,transitions:null}}function Fd(n,i,a){var l=i.pendingProps,d=Ut.current,m=!1,M=(i.flags&128)!==0,U;if((U=M)||(U=n!==null&&n.memoizedState===null?!1:(d&2)!==0),U?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Tt(Ut,d&1),n===null)return Yl(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,n=l.fallback,m?(l=i.mode,m=i.child,M={mode:"hidden",children:M},(l&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=M):m=wo(M,l,0,null),n=Er(n,l,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Su(a),i.memoizedState=xu,n):Mu(i,M));if(d=n.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return Ng(n,i,M,l,U,d,a);if(m){m=l.fallback,M=i.mode,d=n.child,U=d.sibling;var B={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==d?(l=i.child,l.childLanes=0,l.pendingProps=B,i.deletions=null):(l=Ji(d,B),l.subtreeFlags=d.subtreeFlags&14680064),U!==null?m=Ji(U,m):(m=Er(m,M,a,null),m.flags|=2),m.return=i,l.return=i,l.sibling=m,i.child=l,l=m,m=i.child,M=n.child.memoizedState,M=M===null?Su(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=n.childLanes&~a,i.memoizedState=xu,l}return m=n.child,n=m.sibling,l=Ji(m,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=l,i.memoizedState=null,l}function Mu(n,i){return i=wo({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ho(n,i,a,l){return l!==null&&$l(l),ts(i,n.child,null,a),n=Mu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Ng(n,i,a,l,d,m,M){if(a)return i.flags&256?(i.flags&=-257,l=gu(Error(t(422))),ho(n,i,M,l)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=l.fallback,d=i.mode,l=wo({mode:"visible",children:l.children},d,0,null),m=Er(m,d,M,null),m.flags|=2,l.return=i,m.return=i,l.sibling=m,i.child=l,(i.mode&1)!==0&&ts(i,n.child,null,M),i.child.memoizedState=Su(M),i.memoizedState=xu,m);if((i.mode&1)===0)return ho(n,i,M,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var U=l.dgst;return l=U,m=Error(t(419)),l=gu(m,l,void 0),ho(n,i,M,l)}if(U=(M&n.childLanes)!==0,_n||U){if(l=Qt,l!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|M))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,xi(n,d),Qn(l,n,d,-1))}return ku(),l=gu(Error(t(421))),ho(n,i,M,l)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=jg.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,bn=Vi(d.nextSibling),Cn=i,bt=!0,qn=null,n!==null&&(Fn[On++]=_i,Fn[On++]=yi,Fn[On++]=pr,_i=n.id,yi=n.overflow,pr=i),i=Mu(i,l.children),i.flags|=4096,i)}function Od(n,i,a){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),Jl(n.return,i,a)}function Eu(n,i,a,l,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=a,m.tailMode=d)}function kd(n,i,a){var l=i.pendingProps,d=l.revealOrder,m=l.tail;if(dn(n,i,l.children,a),l=Ut.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Od(n,a,i);else if(n.tag===19)Od(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}if(Tt(Ut,l),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&ro(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Eu(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&ro(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Eu(i,!0,a,null,m);break;case"together":Eu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function fo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Mi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),yr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Ji(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Ji(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Ug(n,i,a){switch(i.tag){case 3:Dd(i),es();break;case 5:Zh(i);break;case 1:vn(i.type)&&Ya(i);break;case 4:nu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,d=i.memoizedProps.value;Tt(eo,l._currentValue),l._currentValue=d;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Tt(Ut,Ut.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Fd(n,i,a):(Tt(Ut,Ut.current&1),n=Mi(n,i,a),n!==null?n.sibling:null);Tt(Ut,Ut.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(n.flags&128)!==0){if(l)return kd(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Tt(Ut,Ut.current),l)break;return null;case 22:case 23:return i.lanes=0,Ld(n,i,a)}return Mi(n,i,a)}var Bd,Tu,zd,Hd;Bd=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Tu=function(){},zd=function(n,i,a,l){var d=n.memoizedProps;if(d!==l){n=i.stateNode,vr(oi.current);var m=null;switch(a){case"input":d=We(n,d),l=We(n,l),m=[];break;case"select":d=W({},d,{value:void 0}),l=W({},l,{value:void 0}),m=[];break;case"textarea":d=Lt(n,d),l=Lt(n,l),m=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(n.onclick=ja)}De(a,l);var M;a=null;for(Q in d)if(!l.hasOwnProperty(Q)&&d.hasOwnProperty(Q)&&d[Q]!=null)if(Q==="style"){var U=d[Q];for(M in U)U.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(o.hasOwnProperty(Q)?m||(m=[]):(m=m||[]).push(Q,null));for(Q in l){var B=l[Q];if(U=d!=null?d[Q]:void 0,l.hasOwnProperty(Q)&&B!==U&&(B!=null||U!=null))if(Q==="style")if(U){for(M in U)!U.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in B)B.hasOwnProperty(M)&&U[M]!==B[M]&&(a||(a={}),a[M]=B[M])}else a||(m||(m=[]),m.push(Q,a)),a=B;else Q==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(m=m||[]).push(Q,B)):Q==="children"?typeof B!="string"&&typeof B!="number"||(m=m||[]).push(Q,""+B):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(o.hasOwnProperty(Q)?(B!=null&&Q==="onScroll"&&wt("scroll",n),m||U===B||(m=[])):(m=m||[]).push(Q,B))}a&&(m=m||[]).push("style",a);var Q=m;(i.updateQueue=Q)&&(i.flags|=4)}},Hd=function(n,i,a,l){a!==l&&(i.flags|=4)};function ca(n,i){if(!bt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function ln(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=l,n.childLanes=a,i}function Dg(n,i,a){var l=i.pendingProps;switch(Xl(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(i),null;case 1:return vn(i.type)&&qa(),ln(i),null;case 3:return l=i.stateNode,rs(),At(gn),At(an),su(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(n===null||n.child===null)&&(Za(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,qn!==null&&(Iu(qn),qn=null))),Tu(n,i),ln(i),null;case 5:iu(i);var d=vr(sa.current);if(a=i.type,n!==null&&i.stateNode!=null)zd(n,i,a,l,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(t(166));return ln(i),null}if(n=vr(oi.current),Za(i)){l=i.stateNode,a=i.type;var m=i.memoizedProps;switch(l[ai]=i,l[ea]=m,n=(i.mode&1)!==0,a){case"dialog":wt("cancel",l),wt("close",l);break;case"iframe":case"object":case"embed":wt("load",l);break;case"video":case"audio":for(d=0;d<Qs.length;d++)wt(Qs[d],l);break;case"source":wt("error",l);break;case"img":case"image":case"link":wt("error",l),wt("load",l);break;case"details":wt("toggle",l);break;case"input":nt(l,m),wt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!m.multiple},wt("invalid",l);break;case"textarea":N(l,m),wt("invalid",l)}De(a,m),d=null;for(var M in m)if(m.hasOwnProperty(M)){var U=m[M];M==="children"?typeof U=="string"?l.textContent!==U&&(m.suppressHydrationWarning!==!0&&Wa(l.textContent,U,n),d=["children",U]):typeof U=="number"&&l.textContent!==""+U&&(m.suppressHydrationWarning!==!0&&Wa(l.textContent,U,n),d=["children",""+U]):o.hasOwnProperty(M)&&U!=null&&M==="onScroll"&&wt("scroll",l)}switch(a){case"input":it(l),Ge(l,m,!0);break;case"textarea":it(l),re(l);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(l.onclick=ja)}l=d,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ye(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof l.is=="string"?n=M.createElement(a,{is:l.is}):(n=M.createElement(a),a==="select"&&(M=n,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):n=M.createElementNS(n,a),n[ai]=i,n[ea]=l,Bd(n,i,!1,!1),i.stateNode=n;e:{switch(M=st(a,l),a){case"dialog":wt("cancel",n),wt("close",n),d=l;break;case"iframe":case"object":case"embed":wt("load",n),d=l;break;case"video":case"audio":for(d=0;d<Qs.length;d++)wt(Qs[d],n);d=l;break;case"source":wt("error",n),d=l;break;case"img":case"image":case"link":wt("error",n),wt("load",n),d=l;break;case"details":wt("toggle",n),d=l;break;case"input":nt(n,l),d=We(n,l),wt("invalid",n);break;case"option":d=l;break;case"select":n._wrapperState={wasMultiple:!!l.multiple},d=W({},l,{value:void 0}),wt("invalid",n);break;case"textarea":N(n,l),d=Lt(n,l),wt("invalid",n);break;default:d=l}De(a,d),U=d;for(m in U)if(U.hasOwnProperty(m)){var B=U[m];m==="style"?$e(n,B):m==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&He(n,B)):m==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&we(n,B):typeof B=="number"&&we(n,""+B):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?B!=null&&m==="onScroll"&&wt("scroll",n):B!=null&&P(n,m,B,M))}switch(a){case"input":it(n),Ge(n,l,!1);break;case"textarea":it(n),re(n);break;case"option":l.value!=null&&n.setAttribute("value",""+Te(l.value));break;case"select":n.multiple=!!l.multiple,m=l.value,m!=null?yt(n,!!l.multiple,m,!1):l.defaultValue!=null&&yt(n,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=ja)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return ln(i),null;case 6:if(n&&i.stateNode!=null)Hd(n,i,n.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(t(166));if(a=vr(sa.current),vr(oi.current),Za(i)){if(l=i.stateNode,a=i.memoizedProps,l[ai]=i,(m=l.nodeValue!==a)&&(n=Cn,n!==null))switch(n.tag){case 3:Wa(l.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Wa(l.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[ai]=i,i.stateNode=l}return ln(i),null;case 13:if(At(Ut),l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(bt&&bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Wh(),es(),i.flags|=98560,m=!1;else if(m=Za(i),l!==null&&l.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[ai]=i}else es(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ln(i),m=!1}else qn!==null&&(Iu(qn),qn=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(n!==null&&n.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ut.current&1)!==0?jt===0&&(jt=3):ku())),i.updateQueue!==null&&(i.flags|=4),ln(i),null);case 4:return rs(),Tu(n,i),n===null&&Zs(i.stateNode.containerInfo),ln(i),null;case 10:return Zl(i.type._context),ln(i),null;case 17:return vn(i.type)&&qa(),ln(i),null;case 19:if(At(Ut),m=i.memoizedState,m===null)return ln(i),null;if(l=(i.flags&128)!==0,M=m.rendering,M===null)if(l)ca(m,!1);else{if(jt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(M=ro(n),M!==null){for(i.flags|=128,ca(m,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)m=a,n=l,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,n=M.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Tt(Ut,Ut.current&1|2),i.child}n=n.sibling}m.tail!==null&&Ie()>ls&&(i.flags|=128,l=!0,ca(m,!1),i.lanes=4194304)}else{if(!l)if(n=ro(M),n!==null){if(i.flags|=128,l=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ca(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!bt)return ln(i),null}else 2*Ie()-m.renderingStartTime>ls&&a!==1073741824&&(i.flags|=128,l=!0,ca(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(a=m.last,a!==null?a.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Ie(),i.sibling=null,a=Ut.current,Tt(Ut,l?a&1|2:a&1),i):(ln(i),null);case 22:case 23:return Ou(),l=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Pn&1073741824)!==0&&(ln(i),i.subtreeFlags&6&&(i.flags|=8192)):ln(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Ig(n,i){switch(Xl(i),i.tag){case 1:return vn(i.type)&&qa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return rs(),At(gn),At(an),su(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return iu(i),null;case 13:if(At(Ut),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));es()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return At(Ut),null;case 4:return rs(),null;case 10:return Zl(i.type._context),null;case 22:case 23:return Ou(),null;case 24:return null;default:return null}}var po=!1,un=!1,Fg=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function as(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){It(n,i,l)}else a.current=null}function wu(n,i,a){try{a()}catch(l){It(n,i,l)}}var Vd=!1;function Og(n,i){if(Ol=Ua,n=xh(),bl(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var d=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var M=0,U=-1,B=-1,Q=0,ge=0,ve=n,pe=null;t:for(;;){for(var be;ve!==a||d!==0&&ve.nodeType!==3||(U=M+d),ve!==m||l!==0&&ve.nodeType!==3||(B=M+l),ve.nodeType===3&&(M+=ve.nodeValue.length),(be=ve.firstChild)!==null;)pe=ve,ve=be;for(;;){if(ve===n)break t;if(pe===a&&++Q===d&&(U=M),pe===m&&++ge===l&&(B=M),(be=ve.nextSibling)!==null)break;ve=pe,pe=ve.parentNode}ve=be}a=U===-1||B===-1?null:{start:U,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(kl={focusedElem:n,selectionRange:a},Ua=!1,Ue=i;Ue!==null;)if(i=Ue,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ue=n;else for(;Ue!==null;){i=Ue;try{var Fe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Fe!==null){var Be=Fe.memoizedProps,kt=Fe.memoizedState,j=i.stateNode,V=j.getSnapshotBeforeUpdate(i.elementType===i.type?Be:Yn(i.type,Be),kt);j.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var q=i.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(xe){It(i,i.return,xe)}if(n=i.sibling,n!==null){n.return=i.return,Ue=n;break}Ue=i.return}return Fe=Vd,Vd=!1,Fe}function ha(n,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&wu(i,a,m)}d=d.next}while(d!==l)}}function mo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function Au(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Gd(n){var i=n.alternate;i!==null&&(n.alternate=null,Gd(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[ai],delete i[ea],delete i[Vl],delete i[yg],delete i[xg])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Wd(n){return n.tag===5||n.tag===3||n.tag===4}function jd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Wd(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ru(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ja));else if(l!==4&&(n=n.child,n!==null))for(Ru(n,i,a),n=n.sibling;n!==null;)Ru(n,i,a),n=n.sibling}function Cu(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(l!==4&&(n=n.child,n!==null))for(Cu(n,i,a),n=n.sibling;n!==null;)Cu(n,i,a),n=n.sibling}var en=null,$n=!1;function Yi(n,i,a){for(a=a.child;a!==null;)Xd(n,i,a),a=a.sibling}function Xd(n,i,a){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 5:un||as(a,i);case 6:var l=en,d=$n;en=null,Yi(n,i,a),en=l,$n=d,en!==null&&($n?(n=en,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):en.removeChild(a.stateNode));break;case 18:en!==null&&($n?(n=en,a=a.stateNode,n.nodeType===8?Hl(n.parentNode,a):n.nodeType===1&&Hl(n,a),Gs(n)):Hl(en,a.stateNode));break;case 4:l=en,d=$n,en=a.stateNode.containerInfo,$n=!0,Yi(n,i,a),en=l,$n=d;break;case 0:case 11:case 14:case 15:if(!un&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var m=d,M=m.destroy;m=m.tag,M!==void 0&&((m&2)!==0||(m&4)!==0)&&wu(a,i,M),d=d.next}while(d!==l)}Yi(n,i,a);break;case 1:if(!un&&(as(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(U){It(a,i,U)}Yi(n,i,a);break;case 21:Yi(n,i,a);break;case 22:a.mode&1?(un=(l=un)||a.memoizedState!==null,Yi(n,i,a),un=l):Yi(n,i,a);break;default:Yi(n,i,a)}}function qd(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Fg),i.forEach(function(l){var d=Xg.bind(null,n,l);a.has(l)||(a.add(l),l.then(d,d))})}}function Kn(n,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var d=a[l];try{var m=n,M=i,U=M;e:for(;U!==null;){switch(U.tag){case 5:en=U.stateNode,$n=!1;break e;case 3:en=U.stateNode.containerInfo,$n=!0;break e;case 4:en=U.stateNode.containerInfo,$n=!0;break e}U=U.return}if(en===null)throw Error(t(160));Xd(m,M,d),en=null,$n=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(Q){It(d,i,Q)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Yd(i,n),i=i.sibling}function Yd(n,i){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Kn(i,n),ui(n),l&4){try{ha(3,n,n.return),mo(3,n)}catch(Be){It(n,n.return,Be)}try{ha(5,n,n.return)}catch(Be){It(n,n.return,Be)}}break;case 1:Kn(i,n),ui(n),l&512&&a!==null&&as(a,a.return);break;case 5:if(Kn(i,n),ui(n),l&512&&a!==null&&as(a,a.return),n.flags&32){var d=n.stateNode;try{we(d,"")}catch(Be){It(n,n.return,Be)}}if(l&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,M=a!==null?a.memoizedProps:m,U=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{U==="input"&&m.type==="radio"&&m.name!=null&&Ze(d,m),st(U,M);var Q=st(U,m);for(M=0;M<B.length;M+=2){var ge=B[M],ve=B[M+1];ge==="style"?$e(d,ve):ge==="dangerouslySetInnerHTML"?He(d,ve):ge==="children"?we(d,ve):P(d,ge,ve,Q)}switch(U){case"input":vt(d,m);break;case"textarea":A(d,m);break;case"select":var pe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var be=m.value;be!=null?yt(d,!!m.multiple,be,!1):pe!==!!m.multiple&&(m.defaultValue!=null?yt(d,!!m.multiple,m.defaultValue,!0):yt(d,!!m.multiple,m.multiple?[]:"",!1))}d[ea]=m}catch(Be){It(n,n.return,Be)}}break;case 6:if(Kn(i,n),ui(n),l&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Be){It(n,n.return,Be)}}break;case 3:if(Kn(i,n),ui(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Gs(i.containerInfo)}catch(Be){It(n,n.return,Be)}break;case 4:Kn(i,n),ui(n);break;case 13:Kn(i,n),ui(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Lu=Ie())),l&4&&qd(n);break;case 22:if(ge=a!==null&&a.memoizedState!==null,n.mode&1?(un=(Q=un)||ge,Kn(i,n),un=Q):Kn(i,n),ui(n),l&8192){if(Q=n.memoizedState!==null,(n.stateNode.isHidden=Q)&&!ge&&(n.mode&1)!==0)for(Ue=n,ge=n.child;ge!==null;){for(ve=Ue=ge;Ue!==null;){switch(pe=Ue,be=pe.child,pe.tag){case 0:case 11:case 14:case 15:ha(4,pe,pe.return);break;case 1:as(pe,pe.return);var Fe=pe.stateNode;if(typeof Fe.componentWillUnmount=="function"){l=pe,a=pe.return;try{i=l,Fe.props=i.memoizedProps,Fe.state=i.memoizedState,Fe.componentWillUnmount()}catch(Be){It(l,a,Be)}}break;case 5:as(pe,pe.return);break;case 22:if(pe.memoizedState!==null){Qd(ve);continue}}be!==null?(be.return=pe,Ue=be):Qd(ve)}ge=ge.sibling}e:for(ge=null,ve=n;;){if(ve.tag===5){if(ge===null){ge=ve;try{d=ve.stateNode,Q?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(U=ve.stateNode,B=ve.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=Xe("display",M))}catch(Be){It(n,n.return,Be)}}}else if(ve.tag===6){if(ge===null)try{ve.stateNode.nodeValue=Q?"":ve.memoizedProps}catch(Be){It(n,n.return,Be)}}else if((ve.tag!==22&&ve.tag!==23||ve.memoizedState===null||ve===n)&&ve.child!==null){ve.child.return=ve,ve=ve.child;continue}if(ve===n)break e;for(;ve.sibling===null;){if(ve.return===null||ve.return===n)break e;ge===ve&&(ge=null),ve=ve.return}ge===ve&&(ge=null),ve.sibling.return=ve.return,ve=ve.sibling}}break;case 19:Kn(i,n),ui(n),l&4&&qd(n);break;case 21:break;default:Kn(i,n),ui(n)}}function ui(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Wd(a)){var l=a;break e}a=a.return}throw Error(t(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(we(d,""),l.flags&=-33);var m=jd(n);Cu(n,m,d);break;case 3:case 4:var M=l.stateNode.containerInfo,U=jd(n);Ru(n,U,M);break;default:throw Error(t(161))}}catch(B){It(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function kg(n,i,a){Ue=n,$d(n)}function $d(n,i,a){for(var l=(n.mode&1)!==0;Ue!==null;){var d=Ue,m=d.child;if(d.tag===22&&l){var M=d.memoizedState!==null||po;if(!M){var U=d.alternate,B=U!==null&&U.memoizedState!==null||un;U=po;var Q=un;if(po=M,(un=B)&&!Q)for(Ue=d;Ue!==null;)M=Ue,B=M.child,M.tag===22&&M.memoizedState!==null?Zd(d):B!==null?(B.return=M,Ue=B):Zd(d);for(;m!==null;)Ue=m,$d(m),m=m.sibling;Ue=d,po=U,un=Q}Kd(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ue=m):Kd(n)}}function Kd(n){for(;Ue!==null;){var i=Ue;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:un||mo(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!un)if(a===null)l.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Yn(i.type,a.memoizedProps);l.componentDidUpdate(d,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Qh(i,m,l);break;case 3:var M=i.updateQueue;if(M!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Qh(i,M,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Q=i.alternate;if(Q!==null){var ge=Q.memoizedState;if(ge!==null){var ve=ge.dehydrated;ve!==null&&Gs(ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}un||i.flags&512&&Au(i)}catch(pe){It(i,i.return,pe)}}if(i===n){Ue=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ue=a;break}Ue=i.return}}function Qd(n){for(;Ue!==null;){var i=Ue;if(i===n){Ue=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ue=a;break}Ue=i.return}}function Zd(n){for(;Ue!==null;){var i=Ue;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{mo(4,i)}catch(B){It(i,a,B)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var d=i.return;try{l.componentDidMount()}catch(B){It(i,d,B)}}var m=i.return;try{Au(i)}catch(B){It(i,m,B)}break;case 5:var M=i.return;try{Au(i)}catch(B){It(i,M,B)}}}catch(B){It(i,i.return,B)}if(i===n){Ue=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Ue=U;break}Ue=i.return}}var Bg=Math.ceil,go=L.ReactCurrentDispatcher,bu=L.ReactCurrentOwner,zn=L.ReactCurrentBatchConfig,ft=0,Qt=null,Ht=null,tn=0,Pn=0,os=Gi(0),jt=0,da=null,yr=0,vo=0,Pu=0,fa=null,yn=null,Lu=0,ls=1/0,Ei=null,_o=!1,Nu=null,$i=null,yo=!1,Ki=null,xo=0,pa=0,Uu=null,So=-1,Mo=0;function fn(){return(ft&6)!==0?Ie():So!==-1?So:So=Ie()}function Qi(n){return(n.mode&1)===0?1:(ft&2)!==0&&tn!==0?tn&-tn:Mg.transition!==null?(Mo===0&&(Mo=jc()),Mo):(n=_t,n!==0||(n=window.event,n=n===void 0?16:eh(n.type)),n)}function Qn(n,i,a,l){if(50<pa)throw pa=0,Uu=null,Error(t(185));ks(n,a,l),((ft&2)===0||n!==Qt)&&(n===Qt&&((ft&2)===0&&(vo|=a),jt===4&&Zi(n,tn)),xn(n,l),a===1&&ft===0&&(i.mode&1)===0&&(ls=Ie()+500,$a&&ji()))}function xn(n,i){var a=n.callbackNode;fl(n,i);var l=$t(n,n===Qt?tn:0);if(l===0)a!==null&&Je(a),n.callbackNode=null,n.callbackPriority=0;else if(i=l&-l,n.callbackPriority!==i){if(a!=null&&Je(a),i===1)n.tag===0?Sg(ef.bind(null,n)):Bh(ef.bind(null,n)),vg(function(){(ft&6)===0&&ji()}),a=null;else{switch(Xc(l)){case 1:a=Et;break;case 4:a=Ct;break;case 16:a=sn;break;case 536870912:a=Nt;break;default:a=sn}a=uf(a,Jd.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Jd(n,i){if(So=-1,Mo=0,(ft&6)!==0)throw Error(t(327));var a=n.callbackNode;if(us()&&n.callbackNode!==a)return null;var l=$t(n,n===Qt?tn:0);if(l===0)return null;if((l&30)!==0||(l&n.expiredLanes)!==0||i)i=Eo(n,l);else{i=l;var d=ft;ft|=2;var m=nf();(Qt!==n||tn!==i)&&(Ei=null,ls=Ie()+500,Sr(n,i));do try{Vg();break}catch(U){tf(n,U)}while(!0);Ql(),go.current=m,ft=d,Ht!==null?i=0:(Qt=null,tn=0,i=jt)}if(i!==0){if(i===2&&(d=Hr(n),d!==0&&(l=d,i=Du(n,d))),i===1)throw a=da,Sr(n,0),Zi(n,l),xn(n,Ie()),a;if(i===6)Zi(n,l);else{if(d=n.current.alternate,(l&30)===0&&!zg(d)&&(i=Eo(n,l),i===2&&(m=Hr(n),m!==0&&(l=m,i=Du(n,m))),i===1))throw a=da,Sr(n,0),Zi(n,l),xn(n,Ie()),a;switch(n.finishedWork=d,n.finishedLanes=l,i){case 0:case 1:throw Error(t(345));case 2:Mr(n,yn,Ei);break;case 3:if(Zi(n,l),(l&130023424)===l&&(i=Lu+500-Ie(),10<i)){if($t(n,0)!==0)break;if(d=n.suspendedLanes,(d&l)!==l){fn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=zl(Mr.bind(null,n,yn,Ei),i);break}Mr(n,yn,Ei);break;case 4:if(Zi(n,l),(l&4194240)===l)break;for(i=n.eventTimes,d=-1;0<l;){var M=31-Gt(l);m=1<<M,M=i[M],M>d&&(d=M),l&=~m}if(l=d,l=Ie()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Bg(l/1960))-l,10<l){n.timeoutHandle=zl(Mr.bind(null,n,yn,Ei),l);break}Mr(n,yn,Ei);break;case 5:Mr(n,yn,Ei);break;default:throw Error(t(329))}}}return xn(n,Ie()),n.callbackNode===a?Jd.bind(null,n):null}function Du(n,i){var a=fa;return n.current.memoizedState.isDehydrated&&(Sr(n,i).flags|=256),n=Eo(n,i),n!==2&&(i=yn,yn=a,i!==null&&Iu(i)),n}function Iu(n){yn===null?yn=n:yn.push.apply(yn,n)}function zg(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var d=a[l],m=d.getSnapshot;d=d.value;try{if(!Xn(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Zi(n,i){for(i&=~Pu,i&=~vo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Gt(i),l=1<<a;n[a]=-1,i&=~l}}function ef(n){if((ft&6)!==0)throw Error(t(327));us();var i=$t(n,0);if((i&1)===0)return xn(n,Ie()),null;var a=Eo(n,i);if(n.tag!==0&&a===2){var l=Hr(n);l!==0&&(i=l,a=Du(n,l))}if(a===1)throw a=da,Sr(n,0),Zi(n,i),xn(n,Ie()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Mr(n,yn,Ei),xn(n,Ie()),null}function Fu(n,i){var a=ft;ft|=1;try{return n(i)}finally{ft=a,ft===0&&(ls=Ie()+500,$a&&ji())}}function xr(n){Ki!==null&&Ki.tag===0&&(ft&6)===0&&us();var i=ft;ft|=1;var a=zn.transition,l=_t;try{if(zn.transition=null,_t=1,n)return n()}finally{_t=l,zn.transition=a,ft=i,(ft&6)===0&&ji()}}function Ou(){Pn=os.current,At(os)}function Sr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,gg(a)),Ht!==null)for(a=Ht.return;a!==null;){var l=a;switch(Xl(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&qa();break;case 3:rs(),At(gn),At(an),su();break;case 5:iu(l);break;case 4:rs();break;case 13:At(Ut);break;case 19:At(Ut);break;case 10:Zl(l.type._context);break;case 22:case 23:Ou()}a=a.return}if(Qt=n,Ht=n=Ji(n.current,null),tn=Pn=i,jt=0,da=null,Pu=vo=yr=0,yn=fa=null,gr!==null){for(i=0;i<gr.length;i++)if(a=gr[i],l=a.interleaved,l!==null){a.interleaved=null;var d=l.next,m=a.pending;if(m!==null){var M=m.next;m.next=d,l.next=M}a.pending=l}gr=null}return n}function tf(n,i){do{var a=Ht;try{if(Ql(),so.current=uo,ao){for(var l=Dt.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}ao=!1}if(_r=0,Kt=Wt=Dt=null,aa=!1,oa=0,bu.current=null,a===null||a.return===null){jt=1,da=i,Ht=null;break}e:{var m=n,M=a.return,U=a,B=i;if(i=tn,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var Q=B,ge=U,ve=ge.tag;if((ge.mode&1)===0&&(ve===0||ve===11||ve===15)){var pe=ge.alternate;pe?(ge.updateQueue=pe.updateQueue,ge.memoizedState=pe.memoizedState,ge.lanes=pe.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var be=Ad(M);if(be!==null){be.flags&=-257,Rd(be,M,U,m,i),be.mode&1&&wd(m,Q,i),i=be,B=Q;var Fe=i.updateQueue;if(Fe===null){var Be=new Set;Be.add(B),i.updateQueue=Be}else Fe.add(B);break e}else{if((i&1)===0){wd(m,Q,i),ku();break e}B=Error(t(426))}}else if(bt&&U.mode&1){var kt=Ad(M);if(kt!==null){(kt.flags&65536)===0&&(kt.flags|=256),Rd(kt,M,U,m,i),$l(ss(B,U));break e}}m=B=ss(B,U),jt!==4&&(jt=2),fa===null?fa=[m]:fa.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var j=Ed(m,B,i);Kh(m,j);break e;case 1:U=B;var V=m.type,q=m.stateNode;if((m.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&($i===null||!$i.has(q)))){m.flags|=65536,i&=-i,m.lanes|=i;var xe=Td(m,U,i);Kh(m,xe);break e}}m=m.return}while(m!==null)}sf(a)}catch(ze){i=ze,Ht===a&&a!==null&&(Ht=a=a.return);continue}break}while(!0)}function nf(){var n=go.current;return go.current=uo,n===null?uo:n}function ku(){(jt===0||jt===3||jt===2)&&(jt=4),Qt===null||(yr&268435455)===0&&(vo&268435455)===0||Zi(Qt,tn)}function Eo(n,i){var a=ft;ft|=2;var l=nf();(Qt!==n||tn!==i)&&(Ei=null,Sr(n,i));do try{Hg();break}catch(d){tf(n,d)}while(!0);if(Ql(),ft=a,go.current=l,Ht!==null)throw Error(t(261));return Qt=null,tn=0,jt}function Hg(){for(;Ht!==null;)rf(Ht)}function Vg(){for(;Ht!==null&&!tt();)rf(Ht)}function rf(n){var i=lf(n.alternate,n,Pn);n.memoizedProps=n.pendingProps,i===null?sf(n):Ht=i,bu.current=null}function sf(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Dg(a,i,Pn),a!==null){Ht=a;return}}else{if(a=Ig(a,i),a!==null){a.flags&=32767,Ht=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{jt=6,Ht=null;return}}if(i=i.sibling,i!==null){Ht=i;return}Ht=i=n}while(i!==null);jt===0&&(jt=5)}function Mr(n,i,a){var l=_t,d=zn.transition;try{zn.transition=null,_t=1,Gg(n,i,a,l)}finally{zn.transition=d,_t=l}return null}function Gg(n,i,a,l){do us();while(Ki!==null);if((ft&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Em(n,m),n===Qt&&(Ht=Qt=null,tn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||yo||(yo=!0,uf(sn,function(){return us(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=zn.transition,zn.transition=null;var M=_t;_t=1;var U=ft;ft|=4,bu.current=null,Og(n,a),Yd(a,n),ug(kl),Ua=!!Ol,kl=Ol=null,n.current=a,kg(a),lt(),ft=U,_t=M,zn.transition=m}else n.current=a;if(yo&&(yo=!1,Ki=n,xo=d),m=n.pendingLanes,m===0&&($i=null),Bt(a.stateNode),xn(n,Ie()),i!==null)for(l=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],l(d.value,{componentStack:d.stack,digest:d.digest});if(_o)throw _o=!1,n=Nu,Nu=null,n;return(xo&1)!==0&&n.tag!==0&&us(),m=n.pendingLanes,(m&1)!==0?n===Uu?pa++:(pa=0,Uu=n):pa=0,ji(),null}function us(){if(Ki!==null){var n=Xc(xo),i=zn.transition,a=_t;try{if(zn.transition=null,_t=16>n?16:n,Ki===null)var l=!1;else{if(n=Ki,Ki=null,xo=0,(ft&6)!==0)throw Error(t(331));var d=ft;for(ft|=4,Ue=n.current;Ue!==null;){var m=Ue,M=m.child;if((Ue.flags&16)!==0){var U=m.deletions;if(U!==null){for(var B=0;B<U.length;B++){var Q=U[B];for(Ue=Q;Ue!==null;){var ge=Ue;switch(ge.tag){case 0:case 11:case 15:ha(8,ge,m)}var ve=ge.child;if(ve!==null)ve.return=ge,Ue=ve;else for(;Ue!==null;){ge=Ue;var pe=ge.sibling,be=ge.return;if(Gd(ge),ge===Q){Ue=null;break}if(pe!==null){pe.return=be,Ue=pe;break}Ue=be}}}var Fe=m.alternate;if(Fe!==null){var Be=Fe.child;if(Be!==null){Fe.child=null;do{var kt=Be.sibling;Be.sibling=null,Be=kt}while(Be!==null)}}Ue=m}}if((m.subtreeFlags&2064)!==0&&M!==null)M.return=m,Ue=M;else e:for(;Ue!==null;){if(m=Ue,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ha(9,m,m.return)}var j=m.sibling;if(j!==null){j.return=m.return,Ue=j;break e}Ue=m.return}}var V=n.current;for(Ue=V;Ue!==null;){M=Ue;var q=M.child;if((M.subtreeFlags&2064)!==0&&q!==null)q.return=M,Ue=q;else e:for(M=V;Ue!==null;){if(U=Ue,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:mo(9,U)}}catch(ze){It(U,U.return,ze)}if(U===M){Ue=null;break e}var xe=U.sibling;if(xe!==null){xe.return=U.return,Ue=xe;break e}Ue=U.return}}if(ft=d,ji(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(ut,n)}catch{}l=!0}return l}finally{_t=a,zn.transition=i}}return!1}function af(n,i,a){i=ss(a,i),i=Ed(n,i,1),n=qi(n,i,1),i=fn(),n!==null&&(ks(n,1,i),xn(n,i))}function It(n,i,a){if(n.tag===3)af(n,n,a);else for(;i!==null;){if(i.tag===3){af(i,n,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&($i===null||!$i.has(l))){n=ss(a,n),n=Td(i,n,1),i=qi(i,n,1),n=fn(),i!==null&&(ks(i,1,n),xn(i,n));break}}i=i.return}}function Wg(n,i,a){var l=n.pingCache;l!==null&&l.delete(i),i=fn(),n.pingedLanes|=n.suspendedLanes&a,Qt===n&&(tn&a)===a&&(jt===4||jt===3&&(tn&130023424)===tn&&500>Ie()-Lu?Sr(n,0):Pu|=a),xn(n,i)}function of(n,i){i===0&&((n.mode&1)===0?i=1:(i=In,In<<=1,(In&130023424)===0&&(In=4194304)));var a=fn();n=xi(n,i),n!==null&&(ks(n,i,a),xn(n,a))}function jg(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),of(n,a)}function Xg(n,i){var a=0;switch(n.tag){case 13:var l=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:l=n.stateNode;break;default:throw Error(t(314))}l!==null&&l.delete(i),of(n,a)}var lf;lf=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||gn.current)_n=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return _n=!1,Ug(n,i,a);_n=(n.flags&131072)!==0}else _n=!1,bt&&(i.flags&1048576)!==0&&zh(i,Qa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;fo(n,i),n=i.pendingProps;var d=Qr(i,an.current);is(i,a),d=lu(null,i,l,n,d,a);var m=uu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,vn(l)?(m=!0,Ya(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,tu(i),d.updater=co,i.stateNode=d,d._reactInternals=i,mu(i,l,n,a),i=yu(null,i,l,!0,m,a)):(i.tag=0,bt&&m&&jl(i),dn(null,i,d,a),i=i.child),i;case 16:l=i.elementType;e:{switch(fo(n,i),n=i.pendingProps,d=l._init,l=d(l._payload),i.type=l,d=i.tag=Yg(l),n=Yn(l,n),d){case 0:i=_u(null,i,l,n,a);break e;case 1:i=Ud(null,i,l,n,a);break e;case 11:i=Cd(null,i,l,n,a);break e;case 14:i=bd(null,i,l,Yn(l.type,n),a);break e}throw Error(t(306,l,""))}return i;case 0:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Yn(l,d),_u(n,i,l,d,a);case 1:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Yn(l,d),Ud(n,i,l,d,a);case 3:e:{if(Dd(i),n===null)throw Error(t(387));l=i.pendingProps,m=i.memoizedState,d=m.element,$h(n,i),io(i,l,null,a);var M=i.memoizedState;if(l=M.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=ss(Error(t(423)),i),i=Id(n,i,l,a,d);break e}else if(l!==d){d=ss(Error(t(424)),i),i=Id(n,i,l,a,d);break e}else for(bn=Vi(i.stateNode.containerInfo.firstChild),Cn=i,bt=!0,qn=null,a=qh(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(es(),l===d){i=Mi(n,i,a);break e}dn(n,i,l,a)}i=i.child}return i;case 5:return Zh(i),n===null&&Yl(i),l=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,M=d.children,Bl(l,d)?M=null:m!==null&&Bl(l,m)&&(i.flags|=32),Nd(n,i),dn(n,i,M,a),i.child;case 6:return n===null&&Yl(i),null;case 13:return Fd(n,i,a);case 4:return nu(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=ts(i,null,l,a):dn(n,i,l,a),i.child;case 11:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Yn(l,d),Cd(n,i,l,d,a);case 7:return dn(n,i,i.pendingProps,a),i.child;case 8:return dn(n,i,i.pendingProps.children,a),i.child;case 12:return dn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,d=i.pendingProps,m=i.memoizedProps,M=d.value,Tt(eo,l._currentValue),l._currentValue=M,m!==null)if(Xn(m.value,M)){if(m.children===d.children&&!gn.current){i=Mi(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var U=m.dependencies;if(U!==null){M=m.child;for(var B=U.firstContext;B!==null;){if(B.context===l){if(m.tag===1){B=Si(-1,a&-a),B.tag=2;var Q=m.updateQueue;if(Q!==null){Q=Q.shared;var ge=Q.pending;ge===null?B.next=B:(B.next=ge.next,ge.next=B),Q.pending=B}}m.lanes|=a,B=m.alternate,B!==null&&(B.lanes|=a),Jl(m.return,a,i),U.lanes|=a;break}B=B.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(t(341));M.lanes|=a,U=M.alternate,U!==null&&(U.lanes|=a),Jl(M,a,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}dn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,l=i.pendingProps.children,is(i,a),d=kn(d),l=l(d),i.flags|=1,dn(n,i,l,a),i.child;case 14:return l=i.type,d=Yn(l,i.pendingProps),d=Yn(l.type,d),bd(n,i,l,d,a);case 15:return Pd(n,i,i.type,i.pendingProps,a);case 17:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Yn(l,d),fo(n,i),i.tag=1,vn(l)?(n=!0,Ya(i)):n=!1,is(i,a),Sd(i,l,d),mu(i,l,d,a),yu(null,i,l,!0,n,a);case 19:return kd(n,i,a);case 22:return Ld(n,i,a)}throw Error(t(156,i.tag))};function uf(n,i){return qe(n,i)}function qg(n,i,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(n,i,a,l){return new qg(n,i,a,l)}function Bu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Yg(n){if(typeof n=="function")return Bu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===fe)return 11;if(n===ie)return 14}return 2}function Ji(n,i){var a=n.alternate;return a===null?(a=Hn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function To(n,i,a,l,d,m){var M=2;if(l=n,typeof n=="function")Bu(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case k:return Er(a.children,d,m,i);case se:M=8,d|=8;break;case C:return n=Hn(12,a,i,d|2),n.elementType=C,n.lanes=m,n;case Y:return n=Hn(13,a,i,d),n.elementType=Y,n.lanes=m,n;case te:return n=Hn(19,a,i,d),n.elementType=te,n.lanes=m,n;case Z:return wo(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case D:M=10;break e;case de:M=9;break e;case fe:M=11;break e;case ie:M=14;break e;case ce:M=16,l=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Hn(M,a,i,d),i.elementType=n,i.type=l,i.lanes=m,i}function Er(n,i,a,l){return n=Hn(7,n,l,i),n.lanes=a,n}function wo(n,i,a,l){return n=Hn(22,n,l,i),n.elementType=Z,n.lanes=a,n.stateNode={isHidden:!1},n}function zu(n,i,a){return n=Hn(6,n,null,i),n.lanes=a,n}function Hu(n,i,a){return i=Hn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function $g(n,i,a,l,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pl(0),this.expirationTimes=pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pl(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Vu(n,i,a,l,d,m,M,U,B){return n=new $g(n,i,a,U,B),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Hn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},tu(m),n}function Kg(n,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:l==null?null:""+l,children:n,containerInfo:i,implementation:a}}function cf(n){if(!n)return Wi;n=n._reactInternals;e:{if(b(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(vn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(vn(a))return Oh(n,a,i)}return i}function hf(n,i,a,l,d,m,M,U,B){return n=Vu(a,l,!0,n,d,m,M,U,B),n.context=cf(null),a=n.current,l=fn(),d=Qi(a),m=Si(l,d),m.callback=i??null,qi(a,m,d),n.current.lanes=d,ks(n,d,l),xn(n,l),n}function Ao(n,i,a,l){var d=i.current,m=fn(),M=Qi(d);return a=cf(a),i.context===null?i.context=a:i.pendingContext=a,i=Si(m,M),i.payload={element:n},l=l===void 0?null:l,l!==null&&(i.callback=l),n=qi(d,i,M),n!==null&&(Qn(n,d,M,m),no(n,d,M)),M}function Ro(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function df(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Gu(n,i){df(n,i),(n=n.alternate)&&df(n,i)}function Qg(){return null}var ff=typeof reportError=="function"?reportError:function(n){console.error(n)};function Wu(n){this._internalRoot=n}Co.prototype.render=Wu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ao(n,i,null,null)},Co.prototype.unmount=Wu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;xr(function(){Ao(null,n,null,null)}),i[gi]=null}};function Co(n){this._internalRoot=n}Co.prototype.unstable_scheduleHydration=function(n){if(n){var i=$c();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Bi.length&&i!==0&&i<Bi[a].priority;a++);Bi.splice(a,0,n),a===0&&Zc(n)}};function ju(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function bo(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function pf(){}function Zg(n,i,a,l,d){if(d){if(typeof l=="function"){var m=l;l=function(){var Q=Ro(M);m.call(Q)}}var M=hf(i,l,n,0,null,!1,!1,"",pf);return n._reactRootContainer=M,n[gi]=M.current,Zs(n.nodeType===8?n.parentNode:n),xr(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof l=="function"){var U=l;l=function(){var Q=Ro(B);U.call(Q)}}var B=Vu(n,0,!1,null,null,!1,!1,"",pf);return n._reactRootContainer=B,n[gi]=B.current,Zs(n.nodeType===8?n.parentNode:n),xr(function(){Ao(i,B,a,l)}),B}function Po(n,i,a,l,d){var m=a._reactRootContainer;if(m){var M=m;if(typeof d=="function"){var U=d;d=function(){var B=Ro(M);U.call(B)}}Ao(i,M,n,d)}else M=Zg(a,i,n,d,l);return Ro(M)}qc=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=mi(i.pendingLanes);a!==0&&(ml(i,a|1),xn(i,Ie()),(ft&6)===0&&(ls=Ie()+500,ji()))}break;case 13:xr(function(){var l=xi(n,1);if(l!==null){var d=fn();Qn(l,n,1,d)}}),Gu(n,1)}},gl=function(n){if(n.tag===13){var i=xi(n,134217728);if(i!==null){var a=fn();Qn(i,n,134217728,a)}Gu(n,134217728)}},Yc=function(n){if(n.tag===13){var i=Qi(n),a=xi(n,i);if(a!==null){var l=fn();Qn(a,n,i,l)}Gu(n,i)}},$c=function(){return _t},Kc=function(n,i){var a=_t;try{return _t=n,i()}finally{_t=a}},Ae=function(n,i,a){switch(i){case"input":if(vt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==n&&l.form===n.form){var d=Xa(l);if(!d)throw Error(t(90));$(l),vt(l,d)}}}break;case"textarea":A(n,a);break;case"select":i=a.value,i!=null&&yt(n,!!a.multiple,i,!1)}},Ft=Fu,wn=xr;var Jg={usingClientEntryPoint:!1,Events:[ta,$r,Xa,dt,St,Fu]},ma={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e0={bundleType:ma.bundleType,version:ma.version,rendererPackageName:ma.rendererPackageName,rendererConfig:ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=oe(n),n===null?null:n.stateNode},findFiberByHostInstance:ma.findFiberByHostInstance||Qg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lo.isDisabled&&Lo.supportsFiber)try{ut=Lo.inject(e0),mn=Lo}catch{}}return Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jg,Sn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ju(i))throw Error(t(200));return Kg(n,i,null,a)},Sn.createRoot=function(n,i){if(!ju(n))throw Error(t(299));var a=!1,l="",d=ff;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Vu(n,1,!1,null,null,a,!1,l,d),n[gi]=i.current,Zs(n.nodeType===8?n.parentNode:n),new Wu(i)},Sn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=oe(i),n=n===null?null:n.stateNode,n},Sn.flushSync=function(n){return xr(n)},Sn.hydrate=function(n,i,a){if(!bo(i))throw Error(t(200));return Po(null,n,i,!0,a)},Sn.hydrateRoot=function(n,i,a){if(!ju(n))throw Error(t(405));var l=a!=null&&a.hydratedSources||null,d=!1,m="",M=ff;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),i=hf(i,null,n,1,a??null,d,!1,m,M),n[gi]=i.current,Zs(n),l)for(n=0;n<l.length;n++)a=l[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Co(i)},Sn.render=function(n,i,a){if(!bo(i))throw Error(t(200));return Po(null,n,i,!1,a)},Sn.unmountComponentAtNode=function(n){if(!bo(n))throw Error(t(40));return n._reactRootContainer?(xr(function(){Po(null,null,n,!1,function(){n._reactRootContainer=null,n[gi]=null})}),!0):!1},Sn.unstable_batchedUpdates=Fu,Sn.unstable_renderSubtreeIntoContainer=function(n,i,a,l){if(!bo(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Po(n,i,a,!1,l)},Sn.version="18.3.1-next-f1338f8080-20240426",Sn}var Mf;function l0(){if(Mf)return Yu.exports;Mf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Yu.exports=o0(),Yu.exports}var Ef;function u0(){if(Ef)return No;Ef=1;var s=l0();return No.createRoot=s.createRoot,No.hydrateRoot=s.hydrateRoot,No}var c0=u0();const h0=Hp(c0);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zc="154",d0=0,Tf=1,f0=2,Gp=1,p0=2,Pi=3,ur=0,En=1,Li=2,or=0,Cs=1,wf=2,Af=3,Rf=4,m0=5,As=100,g0=101,v0=102,Cf=103,bf=104,_0=200,y0=201,x0=202,S0=203,Wp=204,jp=205,M0=206,E0=207,T0=208,w0=209,A0=210,R0=0,C0=1,b0=2,Rc=3,P0=4,L0=5,N0=6,U0=7,Xp=0,D0=1,I0=2,Di=0,F0=1,O0=2,k0=3,B0=4,z0=5,qp=300,Ps=301,Ls=302,Cc=303,bc=304,rl=306,Pc=1e3,ri=1001,Lc=1002,Xt=1003,Pf=1004,Qu=1005,Gn=1006,H0=1007,Ea=1008,lr=1009,V0=1010,G0=1011,Hc=1012,Yp=1013,sr=1014,ar=1015,Ta=1016,$p=1017,Kp=1018,Lr=1020,W0=1021,Wn=1023,j0=1024,X0=1025,Nr=1026,Ns=1027,q0=1028,Qp=1029,Y0=1030,Zp=1031,Jp=1033,Zu=33776,Ju=33777,ec=33778,tc=33779,Lf=35840,Nf=35841,Uf=35842,Df=35843,$0=36196,If=37492,Ff=37496,Of=37808,kf=37809,Bf=37810,zf=37811,Hf=37812,Vf=37813,Gf=37814,Wf=37815,jf=37816,Xf=37817,qf=37818,Yf=37819,$f=37820,Kf=37821,nc=36492,K0=36283,Qf=36284,Zf=36285,Jf=36286,em=3e3,Ur=3001,Q0=3200,Z0=3201,J0=0,ev=1,Dr="",ot="srgb",fi="srgb-linear",tm="display-p3",ic=7680,tv=519,nv=512,iv=513,rv=514,sv=515,av=516,ov=517,lv=518,uv=519,ep=35044,tp="300 es",Nc=1035,Ni=2e3,nl=2001;class Ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const u=o.indexOf(t);u!==-1&&o.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let u=0,c=o.length;u<c;u++)o[u].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rc=Math.PI/180,Uc=180/Math.PI;function wa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(cn[s&255]+cn[s>>8&255]+cn[s>>16&255]+cn[s>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[r&255]+cn[r>>8&255]+cn[r>>16&255]+cn[r>>24&255]).toLowerCase()}function Mn(s,e,t){return Math.max(e,Math.min(t,s))}function cv(s,e){return(s%e+e)%e}function sc(s,e,t){return(1-t)*s+t*e}function np(s){return(s&s-1)===0&&s!==0}function Dc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Uo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class xt{constructor(e=0,t=0){xt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),u=this.x-e.x,c=this.y-e.y;return this.x=u*r-c*o+e.x,this.y=u*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,r,o,u,c,h,f,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,u,c,h,f,p)}set(e,t,r,o,u,c,h,f,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=t,g[4]=u,g[5]=f,g[6]=r,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,u=this.elements,c=r[0],h=r[3],f=r[6],p=r[1],g=r[4],v=r[7],_=r[2],S=r[5],E=r[8],w=o[0],x=o[3],y=o[6],I=o[1],P=o[4],L=o[7],F=o[2],z=o[5],k=o[8];return u[0]=c*w+h*I+f*F,u[3]=c*x+h*P+f*z,u[6]=c*y+h*L+f*k,u[1]=p*w+g*I+v*F,u[4]=p*x+g*P+v*z,u[7]=p*y+g*L+v*k,u[2]=_*w+S*I+E*F,u[5]=_*x+S*P+E*z,u[8]=_*y+S*L+E*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],u=e[3],c=e[4],h=e[5],f=e[6],p=e[7],g=e[8];return t*c*g-t*h*p-r*u*g+r*h*f+o*u*p-o*c*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],u=e[3],c=e[4],h=e[5],f=e[6],p=e[7],g=e[8],v=g*c-h*p,_=h*f-g*u,S=p*u-c*f,E=t*v+r*_+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(o*p-g*r)*w,e[2]=(h*r-o*c)*w,e[3]=_*w,e[4]=(g*t-o*f)*w,e[5]=(o*u-h*t)*w,e[6]=S*w,e[7]=(r*f-p*t)*w,e[8]=(c*t-r*u)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,u,c,h){const f=Math.cos(u),p=Math.sin(u);return this.set(r*f,r*p,-r*(f*c+p*h)+c+e,-o*p,o*f,-o*(-p*c+f*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(ac.makeScale(e,t)),this}rotate(e){return this.premultiply(ac.makeRotation(-e)),this}translate(e,t){return this.premultiply(ac.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ac=new ht;function nm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function il(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const ip={};function Ma(s){s in ip||(ip[s]=!0,console.warn(s))}function bs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function oc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const hv=new ht().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),dv=new ht().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function fv(s){return s.convertSRGBToLinear().applyMatrix3(dv)}function pv(s){return s.applyMatrix3(hv).convertLinearToSRGB()}const mv={[fi]:s=>s,[ot]:s=>s.convertSRGBToLinear(),[tm]:fv},gv={[fi]:s=>s,[ot]:s=>s.convertLinearToSRGB(),[tm]:pv},Zn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return fi},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const r=mv[e],o=gv[t];if(r===void 0||o===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return o(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let cs;class im{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cs===void 0&&(cs=il("canvas")),cs.width=e.width,cs.height=e.height;const r=cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=il("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),u=o.data;for(let c=0;c<u.length;c++)u[c]=bs(u[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(bs(t[r]/255)*255):t[r]=bs(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vv=0;class rm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=wa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let c=0,h=o.length;c<h;c++)o[c].isDataTexture?u.push(lc(o[c].image)):u.push(lc(o[c]))}else u=lc(o);r.url=u}return t||(e.images[this.uuid]=r),r}}function lc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?im.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _v=0;class Tn extends Ds{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,r=ri,o=ri,u=Gn,c=Ea,h=Wn,f=lr,p=Tn.DEFAULT_ANISOTROPY,g=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=wa(),this.name="",this.source=new rm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=u,this.minFilter=c,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=f,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===Ur?ot:Dr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pc:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pc:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ot?Ur:em}set encoding(e){Ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ur?ot:Dr}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=qp;Tn.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,t=0,r=0,o=1){nn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,u=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*u,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*u,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*u,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,u;const f=e.elements,p=f[0],g=f[4],v=f[8],_=f[1],S=f[5],E=f[9],w=f[2],x=f[6],y=f[10];if(Math.abs(g-_)<.01&&Math.abs(v-w)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+w)<.1&&Math.abs(E+x)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,L=(S+1)/2,F=(y+1)/2,z=(g+_)/4,k=(v+w)/4,se=(E+x)/4;return P>L&&P>F?P<.01?(r=0,o=.707106781,u=.707106781):(r=Math.sqrt(P),o=z/r,u=k/r):L>F?L<.01?(r=.707106781,o=0,u=.707106781):(o=Math.sqrt(L),r=z/o,u=se/o):F<.01?(r=.707106781,o=.707106781,u=0):(u=Math.sqrt(F),r=k/u,o=se/u),this.set(r,o,u,t),this}let I=Math.sqrt((x-E)*(x-E)+(v-w)*(v-w)+(_-g)*(_-g));return Math.abs(I)<.001&&(I=1),this.x=(x-E)/I,this.y=(v-w)/I,this.z=(_-g)/I,this.w=Math.acos((p+S+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fr extends Ds{constructor(e=1,t=1,r={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t);const o={width:e,height:t,depth:1};r.encoding!==void 0&&(Ma("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Ur?ot:Dr),this.texture=new Tn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Gn,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sm extends Tn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yv extends Tn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Aa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,u,c,h){let f=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];const _=u[c+0],S=u[c+1],E=u[c+2],w=u[c+3];if(h===0){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h===1){e[t+0]=_,e[t+1]=S,e[t+2]=E,e[t+3]=w;return}if(v!==w||f!==_||p!==S||g!==E){let x=1-h;const y=f*_+p*S+g*E+v*w,I=y>=0?1:-1,P=1-y*y;if(P>Number.EPSILON){const F=Math.sqrt(P),z=Math.atan2(F,y*I);x=Math.sin(x*z)/F,h=Math.sin(h*z)/F}const L=h*I;if(f=f*x+_*L,p=p*x+S*L,g=g*x+E*L,v=v*x+w*L,x===1-h){const F=1/Math.sqrt(f*f+p*p+g*g+v*v);f*=F,p*=F,g*=F,v*=F}}e[t]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,u,c){const h=r[o],f=r[o+1],p=r[o+2],g=r[o+3],v=u[c],_=u[c+1],S=u[c+2],E=u[c+3];return e[t]=h*E+g*v+f*S-p*_,e[t+1]=f*E+g*_+p*v-h*S,e[t+2]=p*E+g*S+h*_-f*v,e[t+3]=g*E-h*v-f*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const r=e._x,o=e._y,u=e._z,c=e._order,h=Math.cos,f=Math.sin,p=h(r/2),g=h(o/2),v=h(u/2),_=f(r/2),S=f(o/2),E=f(u/2);switch(c){case"XYZ":this._x=_*g*v+p*S*E,this._y=p*S*v-_*g*E,this._z=p*g*E+_*S*v,this._w=p*g*v-_*S*E;break;case"YXZ":this._x=_*g*v+p*S*E,this._y=p*S*v-_*g*E,this._z=p*g*E-_*S*v,this._w=p*g*v+_*S*E;break;case"ZXY":this._x=_*g*v-p*S*E,this._y=p*S*v+_*g*E,this._z=p*g*E+_*S*v,this._w=p*g*v-_*S*E;break;case"ZYX":this._x=_*g*v-p*S*E,this._y=p*S*v+_*g*E,this._z=p*g*E-_*S*v,this._w=p*g*v+_*S*E;break;case"YZX":this._x=_*g*v+p*S*E,this._y=p*S*v+_*g*E,this._z=p*g*E-_*S*v,this._w=p*g*v-_*S*E;break;case"XZY":this._x=_*g*v-p*S*E,this._y=p*S*v-_*g*E,this._z=p*g*E+_*S*v,this._w=p*g*v+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],u=t[8],c=t[1],h=t[5],f=t[9],p=t[2],g=t[6],v=t[10],_=r+h+v;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-f)*S,this._y=(u-p)*S,this._z=(c-o)*S}else if(r>h&&r>v){const S=2*Math.sqrt(1+r-h-v);this._w=(g-f)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(u+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-r-v);this._w=(u-p)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(f+g)/S}else{const S=2*Math.sqrt(1+v-r-h);this._w=(c-o)/S,this._x=(u+p)/S,this._y=(f+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,u=e._z,c=e._w,h=t._x,f=t._y,p=t._z,g=t._w;return this._x=r*g+c*h+o*p-u*f,this._y=o*g+c*f+u*h-r*p,this._z=u*g+c*p+r*f-o*h,this._w=c*g-r*h-o*f-u*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,u=this._z,c=this._w;let h=c*e._w+r*e._x+o*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=c,this._x=r,this._y=o,this._z=u,this;const f=1-h*h;if(f<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*r+t*this._x,this._y=S*o+t*this._y,this._z=S*u+t*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(f),g=Math.atan2(p,h),v=Math.sin((1-t)*g)/p,_=Math.sin(t*g)/p;return this._w=c*v+this._w*_,this._x=r*v+this._x*_,this._y=o*v+this._y*_,this._z=u*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),o=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(t*Math.cos(o),r*Math.sin(u),r*Math.cos(u),t*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*t+u[3]*r+u[6]*o,this.y=u[1]*t+u[4]*r+u[7]*o,this.z=u[2]*t+u[5]*r+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,u=e.elements,c=1/(u[3]*t+u[7]*r+u[11]*o+u[15]);return this.x=(u[0]*t+u[4]*r+u[8]*o+u[12])*c,this.y=(u[1]*t+u[5]*r+u[9]*o+u[13])*c,this.z=(u[2]*t+u[6]*r+u[10]*o+u[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,u=e.x,c=e.y,h=e.z,f=e.w,p=f*t+c*o-h*r,g=f*r+h*t-u*o,v=f*o+u*r-c*t,_=-u*t-c*r-h*o;return this.x=p*f+_*-u+g*-h-v*-c,this.y=g*f+_*-c+v*-u-p*-h,this.z=v*f+_*-h+p*-c-g*-u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o,this.y=u[1]*t+u[5]*r+u[9]*o,this.z=u[2]*t+u[6]*r+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,u=e.z,c=t.x,h=t.y,f=t.z;return this.x=o*f-u*h,this.y=u*c-r*f,this.z=r*h-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return uc.copy(this).projectOnVector(e),this.sub(uc)}reflect(e){return this.sub(uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uc=new ne,rp=new Aa;class Ra{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),hs.copy(e.boundingBox),hs.applyMatrix4(e.matrixWorld),this.union(hs);else{const o=e.geometry;if(o!==void 0)if(t&&o.attributes!==void 0&&o.attributes.position!==void 0){const u=o.attributes.position;for(let c=0,h=u.count;c<h;c++)wi.fromBufferAttribute(u,c).applyMatrix4(e.matrixWorld),this.expandByPoint(wi)}else o.boundingBox===null&&o.computeBoundingBox(),hs.copy(o.boundingBox),hs.applyMatrix4(e.matrixWorld),this.union(hs)}const r=e.children;for(let o=0,u=r.length;o<u;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),Do.subVectors(this.max,va),ds.subVectors(e.a,va),fs.subVectors(e.b,va),ps.subVectors(e.c,va),tr.subVectors(fs,ds),nr.subVectors(ps,fs),Tr.subVectors(ds,ps);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Tr.z,Tr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Tr.z,0,-Tr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Tr.y,Tr.x,0];return!cc(t,ds,fs,ps,Do)||(t=[1,0,0,0,1,0,0,0,1],!cc(t,ds,fs,ps,Do))?!1:(Io.crossVectors(tr,nr),t=[Io.x,Io.y,Io.z],cc(t,ds,fs,ps,Do))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],wi=new ne,hs=new Ra,ds=new ne,fs=new ne,ps=new ne,tr=new ne,nr=new ne,Tr=new ne,va=new ne,Do=new ne,Io=new ne,wr=new ne;function cc(s,e,t,r,o){for(let u=0,c=s.length-3;u<=c;u+=3){wr.fromArray(s,u);const h=o.x*Math.abs(wr.x)+o.y*Math.abs(wr.y)+o.z*Math.abs(wr.z),f=e.dot(wr),p=t.dot(wr),g=r.dot(wr);if(Math.max(-Math.max(f,p,g),Math.min(f,p,g))>h)return!1}return!0}const xv=new Ra,_a=new ne,hc=new ne;class Vc{constructor(e=new ne,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):xv.setFromPoints(e).getCenter(r);let o=0;for(let u=0,c=e.length;u<c;u++)o=Math.max(o,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);const t=_a.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(_a,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(hc)),this.expandByPoint(_a.copy(e.center).sub(hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new ne,dc=new ne,Fo=new ne,ir=new ne,fc=new ne,Oo=new ne,pc=new ne;class Sv{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){dc.copy(e).add(t).multiplyScalar(.5),Fo.copy(t).sub(e).normalize(),ir.copy(this.origin).sub(dc);const u=e.distanceTo(t)*.5,c=-this.direction.dot(Fo),h=ir.dot(this.direction),f=-ir.dot(Fo),p=ir.lengthSq(),g=Math.abs(1-c*c);let v,_,S,E;if(g>0)if(v=c*f-h,_=c*h-f,E=u*g,v>=0)if(_>=-E)if(_<=E){const w=1/g;v*=w,_*=w,S=v*(v+c*_+2*h)+_*(c*v+_+2*f)+p}else _=u,v=Math.max(0,-(c*_+h)),S=-v*v+_*(_+2*f)+p;else _=-u,v=Math.max(0,-(c*_+h)),S=-v*v+_*(_+2*f)+p;else _<=-E?(v=Math.max(0,-(-c*u+h)),_=v>0?-u:Math.min(Math.max(-u,-f),u),S=-v*v+_*(_+2*f)+p):_<=E?(v=0,_=Math.min(Math.max(-u,-f),u),S=_*(_+2*f)+p):(v=Math.max(0,-(c*u+h)),_=v>0?u:Math.min(Math.max(-u,-f),u),S=-v*v+_*(_+2*f)+p);else _=c>0?-u:u,v=Math.max(0,-(c*_+h)),S=-v*v+_*(_+2*f)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(dc).addScaledVector(Fo,_),S}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);const r=Ai.dot(this.direction),o=Ai.dot(Ai)-r*r,u=e.radius*e.radius;if(o>u)return null;const c=Math.sqrt(u-o),h=r-c,f=r+c;return f<0?null:h<0?this.at(f,t):this.at(h,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,u,c,h,f;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),g>=0?(u=(e.min.y-_.y)*g,c=(e.max.y-_.y)*g):(u=(e.max.y-_.y)*g,c=(e.min.y-_.y)*g),r>c||u>o||((u>r||isNaN(r))&&(r=u),(c<o||isNaN(o))&&(o=c),v>=0?(h=(e.min.z-_.z)*v,f=(e.max.z-_.z)*v):(h=(e.max.z-_.z)*v,f=(e.min.z-_.z)*v),r>f||h>o)||((h>r||r!==r)&&(r=h),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,r,o,u){fc.subVectors(t,e),Oo.subVectors(r,e),pc.crossVectors(fc,Oo);let c=this.direction.dot(pc),h;if(c>0){if(o)return null;h=1}else if(c<0)h=-1,c=-c;else return null;ir.subVectors(this.origin,e);const f=h*this.direction.dot(Oo.crossVectors(ir,Oo));if(f<0)return null;const p=h*this.direction.dot(fc.cross(ir));if(p<0||f+p>c)return null;const g=-h*ir.dot(pc);return g<0?null:this.at(g/c,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,t,r,o,u,c,h,f,p,g,v,_,S,E,w,x){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,u,c,h,f,p,g,v,_,S,E,w,x)}set(e,t,r,o,u,c,h,f,p,g,v,_,S,E,w,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=u,y[5]=c,y[9]=h,y[13]=f,y[2]=p,y[6]=g,y[10]=v,y[14]=_,y[3]=S,y[7]=E,y[11]=w,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/ms.setFromMatrixColumn(e,0).length(),u=1/ms.setFromMatrixColumn(e,1).length(),c=1/ms.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*u,t[5]=r[5]*u,t[6]=r[6]*u,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,u=e.z,c=Math.cos(r),h=Math.sin(r),f=Math.cos(o),p=Math.sin(o),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const _=c*g,S=c*v,E=h*g,w=h*v;t[0]=f*g,t[4]=-f*v,t[8]=p,t[1]=S+E*p,t[5]=_-w*p,t[9]=-h*f,t[2]=w-_*p,t[6]=E+S*p,t[10]=c*f}else if(e.order==="YXZ"){const _=f*g,S=f*v,E=p*g,w=p*v;t[0]=_+w*h,t[4]=E*h-S,t[8]=c*p,t[1]=c*v,t[5]=c*g,t[9]=-h,t[2]=S*h-E,t[6]=w+_*h,t[10]=c*f}else if(e.order==="ZXY"){const _=f*g,S=f*v,E=p*g,w=p*v;t[0]=_-w*h,t[4]=-c*v,t[8]=E+S*h,t[1]=S+E*h,t[5]=c*g,t[9]=w-_*h,t[2]=-c*p,t[6]=h,t[10]=c*f}else if(e.order==="ZYX"){const _=c*g,S=c*v,E=h*g,w=h*v;t[0]=f*g,t[4]=E*p-S,t[8]=_*p+w,t[1]=f*v,t[5]=w*p+_,t[9]=S*p-E,t[2]=-p,t[6]=h*f,t[10]=c*f}else if(e.order==="YZX"){const _=c*f,S=c*p,E=h*f,w=h*p;t[0]=f*g,t[4]=w-_*v,t[8]=E*v+S,t[1]=v,t[5]=c*g,t[9]=-h*g,t[2]=-p*g,t[6]=S*v+E,t[10]=_-w*v}else if(e.order==="XZY"){const _=c*f,S=c*p,E=h*f,w=h*p;t[0]=f*g,t[4]=-v,t[8]=p*g,t[1]=_*v+w,t[5]=c*g,t[9]=S*v-E,t[2]=E*v-S,t[6]=h*g,t[10]=w*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mv,e,Ev)}lookAt(e,t,r){const o=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),rr.crossVectors(r,Nn),rr.lengthSq()===0&&(Math.abs(r.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),rr.crossVectors(r,Nn)),rr.normalize(),ko.crossVectors(Nn,rr),o[0]=rr.x,o[4]=ko.x,o[8]=Nn.x,o[1]=rr.y,o[5]=ko.y,o[9]=Nn.y,o[2]=rr.z,o[6]=ko.z,o[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,u=this.elements,c=r[0],h=r[4],f=r[8],p=r[12],g=r[1],v=r[5],_=r[9],S=r[13],E=r[2],w=r[6],x=r[10],y=r[14],I=r[3],P=r[7],L=r[11],F=r[15],z=o[0],k=o[4],se=o[8],C=o[12],D=o[1],de=o[5],fe=o[9],Y=o[13],te=o[2],ie=o[6],ce=o[10],Z=o[14],G=o[3],J=o[7],W=o[11],T=o[15];return u[0]=c*z+h*D+f*te+p*G,u[4]=c*k+h*de+f*ie+p*J,u[8]=c*se+h*fe+f*ce+p*W,u[12]=c*C+h*Y+f*Z+p*T,u[1]=g*z+v*D+_*te+S*G,u[5]=g*k+v*de+_*ie+S*J,u[9]=g*se+v*fe+_*ce+S*W,u[13]=g*C+v*Y+_*Z+S*T,u[2]=E*z+w*D+x*te+y*G,u[6]=E*k+w*de+x*ie+y*J,u[10]=E*se+w*fe+x*ce+y*W,u[14]=E*C+w*Y+x*Z+y*T,u[3]=I*z+P*D+L*te+F*G,u[7]=I*k+P*de+L*ie+F*J,u[11]=I*se+P*fe+L*ce+F*W,u[15]=I*C+P*Y+L*Z+F*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],u=e[12],c=e[1],h=e[5],f=e[9],p=e[13],g=e[2],v=e[6],_=e[10],S=e[14],E=e[3],w=e[7],x=e[11],y=e[15];return E*(+u*f*v-o*p*v-u*h*_+r*p*_+o*h*S-r*f*S)+w*(+t*f*S-t*p*_+u*c*_-o*c*S+o*p*g-u*f*g)+x*(+t*p*v-t*h*S-u*c*v+r*c*S+u*h*g-r*p*g)+y*(-o*h*g-t*f*v+t*h*_+o*c*v-r*c*_+r*f*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],u=e[3],c=e[4],h=e[5],f=e[6],p=e[7],g=e[8],v=e[9],_=e[10],S=e[11],E=e[12],w=e[13],x=e[14],y=e[15],I=v*x*p-w*_*p+w*f*S-h*x*S-v*f*y+h*_*y,P=E*_*p-g*x*p-E*f*S+c*x*S+g*f*y-c*_*y,L=g*w*p-E*v*p+E*h*S-c*w*S-g*h*y+c*v*y,F=E*v*f-g*w*f-E*h*_+c*w*_+g*h*x-c*v*x,z=t*I+r*P+o*L+u*F;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/z;return e[0]=I*k,e[1]=(w*_*u-v*x*u-w*o*S+r*x*S+v*o*y-r*_*y)*k,e[2]=(h*x*u-w*f*u+w*o*p-r*x*p-h*o*y+r*f*y)*k,e[3]=(v*f*u-h*_*u-v*o*p+r*_*p+h*o*S-r*f*S)*k,e[4]=P*k,e[5]=(g*x*u-E*_*u+E*o*S-t*x*S-g*o*y+t*_*y)*k,e[6]=(E*f*u-c*x*u-E*o*p+t*x*p+c*o*y-t*f*y)*k,e[7]=(c*_*u-g*f*u+g*o*p-t*_*p-c*o*S+t*f*S)*k,e[8]=L*k,e[9]=(E*v*u-g*w*u-E*r*S+t*w*S+g*r*y-t*v*y)*k,e[10]=(c*w*u-E*h*u+E*r*p-t*w*p-c*r*y+t*h*y)*k,e[11]=(g*h*u-c*v*u-g*r*p+t*v*p+c*r*S-t*h*S)*k,e[12]=F*k,e[13]=(g*w*o-E*v*o+E*r*_-t*w*_-g*r*x+t*v*x)*k,e[14]=(E*h*o-c*w*o-E*r*f+t*w*f+c*r*x-t*h*x)*k,e[15]=(c*v*o-g*h*o+g*r*f-t*v*f-c*r*_+t*h*_)*k,this}scale(e){const t=this.elements,r=e.x,o=e.y,u=e.z;return t[0]*=r,t[4]*=o,t[8]*=u,t[1]*=r,t[5]*=o,t[9]*=u,t[2]*=r,t[6]*=o,t[10]*=u,t[3]*=r,t[7]*=o,t[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),u=1-r,c=e.x,h=e.y,f=e.z,p=u*c,g=u*h;return this.set(p*c+r,p*h-o*f,p*f+o*h,0,p*h+o*f,g*h+r,g*f-o*c,0,p*f-o*h,g*f+o*c,u*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,u,c){return this.set(1,r,u,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,u=t._x,c=t._y,h=t._z,f=t._w,p=u+u,g=c+c,v=h+h,_=u*p,S=u*g,E=u*v,w=c*g,x=c*v,y=h*v,I=f*p,P=f*g,L=f*v,F=r.x,z=r.y,k=r.z;return o[0]=(1-(w+y))*F,o[1]=(S+L)*F,o[2]=(E-P)*F,o[3]=0,o[4]=(S-L)*z,o[5]=(1-(_+y))*z,o[6]=(x+I)*z,o[7]=0,o[8]=(E+P)*k,o[9]=(x-I)*k,o[10]=(1-(_+w))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let u=ms.set(o[0],o[1],o[2]).length();const c=ms.set(o[4],o[5],o[6]).length(),h=ms.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),e.x=o[12],e.y=o[13],e.z=o[14],Jn.copy(this);const p=1/u,g=1/c,v=1/h;return Jn.elements[0]*=p,Jn.elements[1]*=p,Jn.elements[2]*=p,Jn.elements[4]*=g,Jn.elements[5]*=g,Jn.elements[6]*=g,Jn.elements[8]*=v,Jn.elements[9]*=v,Jn.elements[10]*=v,t.setFromRotationMatrix(Jn),r.x=u,r.y=c,r.z=h,this}makePerspective(e,t,r,o,u,c,h=Ni){const f=this.elements,p=2*u/(t-e),g=2*u/(r-o),v=(t+e)/(t-e),_=(r+o)/(r-o);let S,E;if(h===Ni)S=-(c+u)/(c-u),E=-2*c*u/(c-u);else if(h===nl)S=-c/(c-u),E=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return f[0]=p,f[4]=0,f[8]=v,f[12]=0,f[1]=0,f[5]=g,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=S,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,r,o,u,c,h=Ni){const f=this.elements,p=1/(t-e),g=1/(r-o),v=1/(c-u),_=(t+e)*p,S=(r+o)*g;let E,w;if(h===Ni)E=(c+u)*v,w=-2*v;else if(h===nl)E=u*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-_,f[1]=0,f[5]=2*g,f[9]=0,f[13]=-S,f[2]=0,f[6]=0,f[10]=w,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ms=new ne,Jn=new rn,Mv=new ne(0,0,0),Ev=new ne(1,1,1),rr=new ne,ko=new ne,Nn=new ne,sp=new rn,ap=new Aa;class sl{constructor(e=0,t=0,r=0,o=sl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,u=o[0],c=o[4],h=o[8],f=o[1],p=o[5],g=o[9],v=o[2],_=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Mn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(f,u));break;case"ZYX":this._y=Math.asin(-Mn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(f,u)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Mn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return sp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sp,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ap.setFromEuler(this),this.setFromQuaternion(ap,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sl.DEFAULT_ORDER="XYZ";class am{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tv=0;const op=new ne,gs=new Aa,Ri=new rn,Bo=new ne,ya=new ne,wv=new ne,Av=new Aa,lp=new ne(1,0,0),up=new ne(0,1,0),cp=new ne(0,0,1),Rv={type:"added"},hp={type:"removed"};class Dn extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new ne,t=new sl,r=new Aa,o=new ne(1,1,1);function u(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new rn},normalMatrix:{value:new ht}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new am,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(lp,e)}rotateY(e){return this.rotateOnAxis(up,e)}rotateZ(e){return this.rotateOnAxis(cp,e)}translateOnAxis(e,t){return op.copy(e).applyQuaternion(this.quaternion),this.position.add(op.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lp,e)}translateY(e){return this.translateOnAxis(up,e)}translateZ(e){return this.translateOnAxis(cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Bo.copy(e):Bo.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(ya,Bo,this.up):Ri.lookAt(Bo,ya,this.up),this.quaternion.setFromRotationMatrix(Ri),o&&(Ri.extractRotation(o.matrixWorld),gs.setFromRotationMatrix(Ri),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Rv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(hp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t){let r=[];this[e]===t&&r.push(this);for(let o=0,u=this.children.length;o<u;o++){const c=this.children[o].getObjectsByProperty(e,t);c.length>0&&(r=r.concat(c))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,e,wv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,Av,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++){const u=t[r];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let u=0,c=o.length;u<c;u++){const h=o[u];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function u(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const f=h.shapes;if(Array.isArray(f))for(let p=0,g=f.length;p<g;p++){const v=f[p];u(e.shapes,v)}else u(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let f=0,p=this.material.length;f<p;f++)h.push(u(e.materials,this.material[f]));o.material=h}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const f=this.animations[h];o.animations.push(u(e.animations,f))}}if(t){const h=c(e.geometries),f=c(e.materials),p=c(e.textures),g=c(e.images),v=c(e.shapes),_=c(e.skeletons),S=c(e.animations),E=c(e.nodes);h.length>0&&(r.geometries=h),f.length>0&&(r.materials=f),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=o,r;function c(h){const f=[];for(const p in h){const g=h[p];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Dn.DEFAULT_UP=new ne(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new ne,Ci=new ne,mc=new ne,bi=new ne,vs=new ne,_s=new ne,dp=new ne,gc=new ne,vc=new ne,_c=new ne;let zo=!1;class ni{constructor(e=new ne,t=new ne,r=new ne){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),ei.subVectors(e,t),o.cross(ei);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,t,r,o,u){ei.subVectors(o,t),Ci.subVectors(r,t),mc.subVectors(e,t);const c=ei.dot(ei),h=ei.dot(Ci),f=ei.dot(mc),p=Ci.dot(Ci),g=Ci.dot(mc),v=c*p-h*h;if(v===0)return u.set(-2,-1,-1);const _=1/v,S=(p*f-h*g)*_,E=(c*g-h*f)*_;return u.set(1-S-E,E,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,bi),bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getUV(e,t,r,o,u,c,h,f){return zo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zo=!0),this.getInterpolation(e,t,r,o,u,c,h,f)}static getInterpolation(e,t,r,o,u,c,h,f){return this.getBarycoord(e,t,r,o,bi),f.setScalar(0),f.addScaledVector(u,bi.x),f.addScaledVector(c,bi.y),f.addScaledVector(h,bi.z),f}static isFrontFacing(e,t,r,o){return ei.subVectors(r,t),Ci.subVectors(e,t),ei.cross(Ci).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ei.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,o,u){return zo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zo=!0),ni.getInterpolation(e,this.a,this.b,this.c,t,r,o,u)}getInterpolation(e,t,r,o,u){return ni.getInterpolation(e,this.a,this.b,this.c,t,r,o,u)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,u=this.c;let c,h;vs.subVectors(o,r),_s.subVectors(u,r),gc.subVectors(e,r);const f=vs.dot(gc),p=_s.dot(gc);if(f<=0&&p<=0)return t.copy(r);vc.subVectors(e,o);const g=vs.dot(vc),v=_s.dot(vc);if(g>=0&&v<=g)return t.copy(o);const _=f*v-g*p;if(_<=0&&f>=0&&g<=0)return c=f/(f-g),t.copy(r).addScaledVector(vs,c);_c.subVectors(e,u);const S=vs.dot(_c),E=_s.dot(_c);if(E>=0&&S<=E)return t.copy(u);const w=S*p-f*E;if(w<=0&&p>=0&&E<=0)return h=p/(p-E),t.copy(r).addScaledVector(_s,h);const x=g*E-S*v;if(x<=0&&v-g>=0&&S-E>=0)return dp.subVectors(u,o),h=(v-g)/(v-g+(S-E)),t.copy(o).addScaledVector(dp,h);const y=1/(x+w+_);return c=w*y,h=_*y,t.copy(r).addScaledVector(vs,c).addScaledVector(_s,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Cv=0;class al extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=wa(),this.name="",this.type="Material",this.blending=Cs,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wp,this.blendDst=jp,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Rc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ic,this.stencilZFail=ic,this.stencilZPass=ic,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(r.blending=this.blending),this.side!==ur&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(r.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(u){const c=[];for(const h in u){const f=u[h];delete f.metadata,c.push(f)}return c}if(t){const u=o(e.textures),c=o(e.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let u=0;u!==o;++u)r[u]=t[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const om={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function yc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Rt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zn.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Zn.workingColorSpace){return this.r=e,this.g=t,this.b=r,Zn.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Zn.workingColorSpace){if(e=cv(e,1),t=Mn(t,0,1),r=Mn(r,0,1),t===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+t):r+t-r*t,c=2*r-u;this.r=yc(c,u,e+1/3),this.g=yc(c,u,e),this.b=yc(c,u,e-1/3)}return Zn.toWorkingColorSpace(this,o),this}setStyle(e,t=ot){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=o[1],h=o[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,t);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,t);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=o[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(u,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ot){const r=om[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=oc(e.r),this.g=oc(e.g),this.b=oc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ot){return Zn.fromWorkingColorSpace(hn.copy(this),e),Math.round(Mn(hn.r*255,0,255))*65536+Math.round(Mn(hn.g*255,0,255))*256+Math.round(Mn(hn.b*255,0,255))}getHexString(e=ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zn.workingColorSpace){Zn.fromWorkingColorSpace(hn.copy(this),t);const r=hn.r,o=hn.g,u=hn.b,c=Math.max(r,o,u),h=Math.min(r,o,u);let f,p;const g=(h+c)/2;if(h===c)f=0,p=0;else{const v=c-h;switch(p=g<=.5?v/(c+h):v/(2-c-h),c){case r:f=(o-u)/v+(o<u?6:0);break;case o:f=(u-r)/v+2;break;case u:f=(r-o)/v+4;break}f/=6}return e.h=f,e.s=p,e.l=g,e}getRGB(e,t=Zn.workingColorSpace){return Zn.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=ot){Zn.fromWorkingColorSpace(hn.copy(this),e);const t=hn.r,r=hn.g,o=hn.b;return e!==ot?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(ti),ti.h+=e,ti.s+=t,ti.l+=r,this.setHSL(ti.h,ti.s,ti.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(Ho);const r=sc(ti.h,Ho.h,t),o=sc(ti.s,Ho.s,t),u=sc(ti.l,Ho.l,t);return this.setHSL(r,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,u=e.elements;return this.r=u[0]*t+u[3]*r+u[6]*o,this.g=u[1]*t+u[4]*r+u[7]*o,this.b=u[2]*t+u[5]*r+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Rt;Rt.NAMES=om;class Gc extends al{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new ne,Vo=new xt;class di{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=ep,this.updateRange={offset:0,count:-1},this.gpuType=ar,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Vo.fromBufferAttribute(this,t),Vo.applyMatrix3(e),this.setXY(t,Vo.x,Vo.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Uo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Uo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Uo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Uo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array),o=Ln(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,u){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array),o=Ln(o,this.array),u=Ln(u,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ep&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class lm extends di{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class um extends di{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ir extends di{constructor(e,t,r){super(new Float32Array(e),t,r)}}let bv=0;const Vn=new rn,xc=new Dn,ys=new ne,Un=new Ra,xa=new Ra,Jt=new ne;class kr extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=wa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nm(e)?um:lm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ht().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,r){return Vn.makeTranslation(e,t,r),this.applyMatrix4(Vn),this}scale(e,t,r){return Vn.makeScale(e,t,r),this.applyMatrix4(Vn),this}lookAt(e){return xc.lookAt(e),xc.updateMatrix(),this.applyMatrix4(xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const t=[];for(let r=0,o=e.length;r<o;r++){const u=e[r];t.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Ir(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ra);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const u=t[r];Un.setFromBufferAttribute(u),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let u=0,c=t.length;u<c;u++){const h=t[u];xa.setFromBufferAttribute(h),this.morphTargetsRelative?(Jt.addVectors(Un.min,xa.min),Un.expandByPoint(Jt),Jt.addVectors(Un.max,xa.max),Un.expandByPoint(Jt)):(Un.expandByPoint(xa.min),Un.expandByPoint(xa.max))}Un.getCenter(r);let o=0;for(let u=0,c=e.count;u<c;u++)Jt.fromBufferAttribute(e,u),o=Math.max(o,r.distanceToSquared(Jt));if(t)for(let u=0,c=t.length;u<c;u++){const h=t[u],f=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Jt.fromBufferAttribute(h,p),f&&(ys.fromBufferAttribute(e,p),Jt.add(ys)),o=Math.max(o,r.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,o=t.position.array,u=t.normal.array,c=t.uv.array,h=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*h),4));const f=this.getAttribute("tangent").array,p=[],g=[];for(let D=0;D<h;D++)p[D]=new ne,g[D]=new ne;const v=new ne,_=new ne,S=new ne,E=new xt,w=new xt,x=new xt,y=new ne,I=new ne;function P(D,de,fe){v.fromArray(o,D*3),_.fromArray(o,de*3),S.fromArray(o,fe*3),E.fromArray(c,D*2),w.fromArray(c,de*2),x.fromArray(c,fe*2),_.sub(v),S.sub(v),w.sub(E),x.sub(E);const Y=1/(w.x*x.y-x.x*w.y);isFinite(Y)&&(y.copy(_).multiplyScalar(x.y).addScaledVector(S,-w.y).multiplyScalar(Y),I.copy(S).multiplyScalar(w.x).addScaledVector(_,-x.x).multiplyScalar(Y),p[D].add(y),p[de].add(y),p[fe].add(y),g[D].add(I),g[de].add(I),g[fe].add(I))}let L=this.groups;L.length===0&&(L=[{start:0,count:r.length}]);for(let D=0,de=L.length;D<de;++D){const fe=L[D],Y=fe.start,te=fe.count;for(let ie=Y,ce=Y+te;ie<ce;ie+=3)P(r[ie+0],r[ie+1],r[ie+2])}const F=new ne,z=new ne,k=new ne,se=new ne;function C(D){k.fromArray(u,D*3),se.copy(k);const de=p[D];F.copy(de),F.sub(k.multiplyScalar(k.dot(de))).normalize(),z.crossVectors(se,de);const Y=z.dot(g[D])<0?-1:1;f[D*4]=F.x,f[D*4+1]=F.y,f[D*4+2]=F.z,f[D*4+3]=Y}for(let D=0,de=L.length;D<de;++D){const fe=L[D],Y=fe.start,te=fe.count;for(let ie=Y,ce=Y+te;ie<ce;ie+=3)C(r[ie+0]),C(r[ie+1]),C(r[ie+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new di(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const o=new ne,u=new ne,c=new ne,h=new ne,f=new ne,p=new ne,g=new ne,v=new ne;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),w=e.getX(_+1),x=e.getX(_+2);o.fromBufferAttribute(t,E),u.fromBufferAttribute(t,w),c.fromBufferAttribute(t,x),g.subVectors(c,u),v.subVectors(o,u),g.cross(v),h.fromBufferAttribute(r,E),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,x),h.add(g),f.add(g),p.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let _=0,S=t.count;_<S;_+=3)o.fromBufferAttribute(t,_+0),u.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),g.subVectors(c,u),v.subVectors(o,u),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(h,f){const p=h.array,g=h.itemSize,v=h.normalized,_=new p.constructor(f.length*g);let S=0,E=0;for(let w=0,x=f.length;w<x;w++){h.isInterleavedBufferAttribute?S=f[w]*h.data.stride+h.offset:S=f[w]*g;for(let y=0;y<g;y++)_[E++]=p[S++]}return new di(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kr,r=this.index.array,o=this.attributes;for(const h in o){const f=o[h],p=e(f,r);t.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const f=[],p=u[h];for(let g=0,v=p.length;g<v;g++){const _=p[g],S=e(_,r);f.push(S)}t.morphAttributes[h]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,f=c.length;h<f;h++){const p=c[h];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const p=r[f];e.data.attributes[f]=p.toJSON(e.data)}const o={};let u=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],g=[];for(let v=0,_=p.length;v<_;v++){const S=p[v];g.push(S.toJSON(e.data))}g.length>0&&(o[f]=g,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(t))}const u=e.morphAttributes;for(const p in u){const g=[],v=u[p];for(let _=0,S=v.length;_<S;_++)g.push(v[_].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fp=new rn,Ar=new Sv,Go=new Vc,pp=new ne,xs=new ne,Ss=new ne,Ms=new ne,Sc=new ne,Wo=new ne,jo=new xt,Xo=new xt,qo=new xt,mp=new ne,gp=new ne,vp=new ne,Yo=new ne,$o=new ne;class Ui extends Dn{constructor(e=new kr,t=new Gc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(u&&h){Wo.set(0,0,0);for(let f=0,p=u.length;f<p;f++){const g=h[f],v=u[f];g!==0&&(Sc.fromBufferAttribute(v,e),c?Wo.addScaledVector(Sc,g):Wo.addScaledVector(Sc.sub(t),g))}t.add(Wo)}return t}raycast(e,t){const r=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Go.copy(r.boundingSphere),Go.applyMatrix4(u),Ar.copy(e.ray).recast(e.near),!(Go.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Go,pp)===null||Ar.origin.distanceToSquared(pp)>(e.far-e.near)**2))&&(fp.copy(u).invert(),Ar.copy(e.ray).applyMatrix4(fp),!(r.boundingBox!==null&&Ar.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,r){let o;const u=this.geometry,c=this.material,h=u.index,f=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,_=u.groups,S=u.drawRange;if(h!==null)if(Array.isArray(c))for(let E=0,w=_.length;E<w;E++){const x=_[E],y=c[x.materialIndex],I=Math.max(x.start,S.start),P=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let L=I,F=P;L<F;L+=3){const z=h.getX(L),k=h.getX(L+1),se=h.getX(L+2);o=Ko(this,y,e,r,p,g,v,z,k,se),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let x=E,y=w;x<y;x+=3){const I=h.getX(x),P=h.getX(x+1),L=h.getX(x+2);o=Ko(this,c,e,r,p,g,v,I,P,L),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(c))for(let E=0,w=_.length;E<w;E++){const x=_[E],y=c[x.materialIndex],I=Math.max(x.start,S.start),P=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let L=I,F=P;L<F;L+=3){const z=L,k=L+1,se=L+2;o=Ko(this,y,e,r,p,g,v,z,k,se),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let x=E,y=w;x<y;x+=3){const I=x,P=x+1,L=x+2;o=Ko(this,c,e,r,p,g,v,I,P,L),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function Pv(s,e,t,r,o,u,c,h){let f;if(e.side===En?f=r.intersectTriangle(c,u,o,!0,h):f=r.intersectTriangle(o,u,c,e.side===ur,h),f===null)return null;$o.copy(h),$o.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo($o);return p<t.near||p>t.far?null:{distance:p,point:$o.clone(),object:s}}function Ko(s,e,t,r,o,u,c,h,f,p){s.getVertexPosition(h,xs),s.getVertexPosition(f,Ss),s.getVertexPosition(p,Ms);const g=Pv(s,e,t,r,xs,Ss,Ms,Yo);if(g){o&&(jo.fromBufferAttribute(o,h),Xo.fromBufferAttribute(o,f),qo.fromBufferAttribute(o,p),g.uv=ni.getInterpolation(Yo,xs,Ss,Ms,jo,Xo,qo,new xt)),u&&(jo.fromBufferAttribute(u,h),Xo.fromBufferAttribute(u,f),qo.fromBufferAttribute(u,p),g.uv1=ni.getInterpolation(Yo,xs,Ss,Ms,jo,Xo,qo,new xt),g.uv2=g.uv1),c&&(mp.fromBufferAttribute(c,h),gp.fromBufferAttribute(c,f),vp.fromBufferAttribute(c,p),g.normal=ni.getInterpolation(Yo,xs,Ss,Ms,mp,gp,vp,new ne),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:f,c:p,normal:new ne,materialIndex:0};ni.getNormal(xs,Ss,Ms,v.normal),g.face=v}return g}class Ca extends kr{constructor(e=1,t=1,r=1,o=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:u,depthSegments:c};const h=this;o=Math.floor(o),u=Math.floor(u),c=Math.floor(c);const f=[],p=[],g=[],v=[];let _=0,S=0;E("z","y","x",-1,-1,r,t,e,c,u,0),E("z","y","x",1,-1,r,t,-e,c,u,1),E("x","z","y",1,1,e,r,t,o,c,2),E("x","z","y",1,-1,e,r,-t,o,c,3),E("x","y","z",1,-1,e,t,r,o,u,4),E("x","y","z",-1,-1,e,t,-r,o,u,5),this.setIndex(f),this.setAttribute("position",new Ir(p,3)),this.setAttribute("normal",new Ir(g,3)),this.setAttribute("uv",new Ir(v,2));function E(w,x,y,I,P,L,F,z,k,se,C){const D=L/k,de=F/se,fe=L/2,Y=F/2,te=z/2,ie=k+1,ce=se+1;let Z=0,G=0;const J=new ne;for(let W=0;W<ce;W++){const T=W*de-Y;for(let O=0;O<ie;O++){const ue=O*D-fe;J[w]=ue*I,J[x]=T*P,J[y]=te,p.push(J.x,J.y,J.z),J[w]=0,J[x]=0,J[y]=z>0?1:-1,g.push(J.x,J.y,J.z),v.push(O/k),v.push(1-W/se),Z+=1}}for(let W=0;W<se;W++)for(let T=0;T<k;T++){const O=_+T+ie*W,ue=_+T+ie*(W+1),he=_+(T+1)+ie*(W+1),me=_+(T+1)+ie*W;f.push(O,ue,me),f.push(ue,he,me),G+=6}h.addGroup(S,G,C),S+=G,_+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Us(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function pn(s){const e={};for(let t=0;t<s.length;t++){const r=Us(s[t]);for(const o in r)e[o]=r[o]}return e}function Lv(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function cm(s){return s.getRenderTarget()===null?s.outputColorSpace:fi}const Nv={clone:Us,merge:pn};var Uv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Or extends al{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uv,this.fragmentShader=Dv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=Lv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class hm extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ii extends hm{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Uc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uc*2*Math.atan(Math.tan(rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,o,u,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rc*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,u=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,p=c.fullHeight;u+=c.offsetX*o/f,t-=c.offsetY*r/p,o*=c.width/f,r*=c.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Es=-90,Ts=1;class Iv extends Dn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null;const o=new ii(Es,Ts,e,t);o.layers=this.layers,this.add(o);const u=new ii(Es,Ts,e,t);u.layers=this.layers,this.add(u);const c=new ii(Es,Ts,e,t);c.layers=this.layers,this.add(c);const h=new ii(Es,Ts,e,t);h.layers=this.layers,this.add(h);const f=new ii(Es,Ts,e,t);f.layers=this.layers,this.add(f);const p=new ii(Es,Ts,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,u,c,h,f]=t;for(const p of t)this.remove(p);if(e===Ni)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===nl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,c,h,f,p]=this.children,g=e.getRenderTarget(),v=e.toneMapping,_=e.xr.enabled;e.toneMapping=Di,e.xr.enabled=!1;const S=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(t,o),e.setRenderTarget(r,1),e.render(t,u),e.setRenderTarget(r,2),e.render(t,c),e.setRenderTarget(r,3),e.render(t,h),e.setRenderTarget(r,4),e.render(t,f),r.texture.generateMipmaps=S,e.setRenderTarget(r,5),e.render(t,p),e.setRenderTarget(g),e.toneMapping=v,e.xr.enabled=_,r.texture.needsPMREMUpdate=!0}}class dm extends Tn{constructor(e,t,r,o,u,c,h,f,p,g){e=e!==void 0?e:[],t=t!==void 0?t:Ps,super(e,t,r,o,u,c,h,f,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fv extends Fr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];t.encoding!==void 0&&(Ma("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ur?ot:Dr),this.texture=new dm(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ca(5,5,5),u=new Or({name:"CubemapFromEquirect",uniforms:Us(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:En,blending:or});u.uniforms.tEquirect.value=t;const c=new Ui(o,u),h=t.minFilter;return t.minFilter===Ea&&(t.minFilter=Gn),new Iv(1,10,this).update(e,c),t.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,o){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(u)}}const Mc=new ne,Ov=new ne,kv=new ht;class Cr{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Mc.subVectors(r,t).cross(Ov.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Mc),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:t.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||kv.getNormalMatrix(e),o=this.coplanarPoint(Mc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new Vc,Qo=new ne;class fm{constructor(e=new Cr,t=new Cr,r=new Cr,o=new Cr,u=new Cr,c=new Cr){this.planes=[e,t,r,o,u,c]}set(e,t,r,o,u,c){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(r),h[3].copy(o),h[4].copy(u),h[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ni){const r=this.planes,o=e.elements,u=o[0],c=o[1],h=o[2],f=o[3],p=o[4],g=o[5],v=o[6],_=o[7],S=o[8],E=o[9],w=o[10],x=o[11],y=o[12],I=o[13],P=o[14],L=o[15];if(r[0].setComponents(f-u,_-p,x-S,L-y).normalize(),r[1].setComponents(f+u,_+p,x+S,L+y).normalize(),r[2].setComponents(f+c,_+g,x+E,L+I).normalize(),r[3].setComponents(f-c,_-g,x-E,L-I).normalize(),r[4].setComponents(f-h,_-v,x-w,L-P).normalize(),t===Ni)r[5].setComponents(f+h,_+v,x+w,L+P).normalize();else if(t===nl)r[5].setComponents(h,v,w,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let u=0;u<6;u++)if(t[u].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Qo.x=o.normal.x>0?e.max.x:e.min.x,Qo.y=o.normal.y>0?e.max.y:e.min.y,Qo.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pm(){let s=null,e=!1,t=null,r=null;function o(u,c){t(u,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){t=u},setContext:function(u){s=u}}}function Bv(s,e){const t=e.isWebGL2,r=new WeakMap;function o(p,g){const v=p.array,_=p.usage,S=s.createBuffer();s.bindBuffer(g,S),s.bufferData(g,v,_),p.onUploadCallback();let E;if(v instanceof Float32Array)E=s.FLOAT;else if(v instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)E=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=s.UNSIGNED_SHORT;else if(v instanceof Int16Array)E=s.SHORT;else if(v instanceof Uint32Array)E=s.UNSIGNED_INT;else if(v instanceof Int32Array)E=s.INT;else if(v instanceof Int8Array)E=s.BYTE;else if(v instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:S,type:E,bytesPerElement:v.BYTES_PER_ELEMENT,version:p.version}}function u(p,g,v){const _=g.array,S=g.updateRange;s.bindBuffer(v,p),S.count===-1?s.bufferSubData(v,0,_):(t?s.bufferSubData(v,S.offset*_.BYTES_PER_ELEMENT,_,S.offset,S.count):s.bufferSubData(v,S.offset*_.BYTES_PER_ELEMENT,_.subarray(S.offset,S.offset+S.count)),S.count=-1),g.onUploadCallback()}function c(p){return p.isInterleavedBufferAttribute&&(p=p.data),r.get(p)}function h(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=r.get(p);g&&(s.deleteBuffer(g.buffer),r.delete(p))}function f(p,g){if(p.isGLBufferAttribute){const _=r.get(p);(!_||_.version<p.version)&&r.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const v=r.get(p);v===void 0?r.set(p,o(p,g)):v.version<p.version&&(u(v.buffer,p,g),v.version=p.version)}return{get:c,remove:h,update:f}}class ol extends kr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const u=e/2,c=t/2,h=Math.floor(r),f=Math.floor(o),p=h+1,g=f+1,v=e/h,_=t/f,S=[],E=[],w=[],x=[];for(let y=0;y<g;y++){const I=y*_-c;for(let P=0;P<p;P++){const L=P*v-u;E.push(L,-I,0),w.push(0,0,1),x.push(P/h),x.push(1-y/f)}}for(let y=0;y<f;y++)for(let I=0;I<h;I++){const P=I+p*y,L=I+p*(y+1),F=I+1+p*(y+1),z=I+1+p*y;S.push(P,L,z),S.push(L,F,z)}this.setIndex(S),this.setAttribute("position",new Ir(E,3)),this.setAttribute("normal",new Ir(w,3)),this.setAttribute("uv",new Ir(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.width,e.height,e.widthSegments,e.heightSegments)}}var zv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hv=`#ifdef USE_ALPHAHASH
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
#endif`,Vv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$v=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qv=`#ifdef USE_IRIDESCENCE
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
#endif`,Zv=`#ifdef USE_BUMPMAP
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
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,r_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,o_=`#define PI 3.141592653589793
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
} // validated`,l_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,c_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p_="gl_FragColor = linearToOutputTexel( gl_FragColor );",m_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g_=`#ifdef USE_ENVMAP
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
#endif`,v_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,__=`#ifdef USE_ENVMAP
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
#endif`,y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x_=`#ifdef USE_ENVMAP
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
#endif`,S_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w_=`#ifdef USE_GRADIENTMAP
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
#endif`,R_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P_=`uniform bool receiveShadow;
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
#endif`,L_=`#ifdef USE_ENVMAP
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
#endif`,N_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F_=`PhysicalMaterial material;
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
}`,k_=`
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
#endif`,B_=`#if defined( RE_IndirectDiffuse )
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
#endif`,z_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,H_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,W_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,j_=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,X_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Y_=`#if defined( USE_POINTS_UV )
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
#endif`,$_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z_=`#ifdef USE_MORPHNORMALS
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
#endif`,J_=`#ifdef USE_MORPHTARGETS
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
#endif`,ey=`#ifdef USE_MORPHTARGETS
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
#endif`,ty=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,ny=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ay=`#ifdef USE_NORMALMAP
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
#endif`,oy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ly=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,cy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,py=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,my=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_y=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,My=`float getShadowMask() {
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
}`,Ey=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ty=`#ifdef USE_SKINNING
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
#endif`,wy=`#ifdef USE_SKINNING
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
#endif`,Ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,by=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Py=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ly=`#ifdef USE_TRANSMISSION
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
#endif`,Ny=`#ifdef USE_TRANSMISSION
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
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
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
}`,ky=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,By=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gy=`#include <common>
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
}`,Wy=`#if DEPTH_PACKING == 3200
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
}`,jy=`#define DISTANCE
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
}`,Xy=`#define DISTANCE
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
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$y=`uniform float scale;
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
}`,Ky=`uniform vec3 diffuse;
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
}`,Qy=`#include <common>
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
}`,Zy=`uniform vec3 diffuse;
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
}`,Jy=`#define LAMBERT
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
}`,ex=`#define LAMBERT
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
}`,tx=`#define MATCAP
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
}`,nx=`#define MATCAP
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
}`,ix=`#define NORMAL
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
}`,rx=`#define NORMAL
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
}`,sx=`#define PHONG
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
}`,ax=`#define PHONG
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
}`,ox=`#define STANDARD
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
}`,lx=`#define STANDARD
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
}`,cx=`#define TOON
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
}`,hx=`uniform float size;
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
}`,dx=`uniform vec3 diffuse;
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
}`,fx=`#include <common>
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
}`,px=`uniform vec3 color;
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
}`,mx=`uniform float rotation;
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
}`,gx=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:zv,alphahash_pars_fragment:Hv,alphamap_fragment:Vv,alphamap_pars_fragment:Gv,alphatest_fragment:Wv,alphatest_pars_fragment:jv,aomap_fragment:Xv,aomap_pars_fragment:qv,begin_vertex:Yv,beginnormal_vertex:$v,bsdfs:Kv,iridescence_fragment:Qv,bumpmap_pars_fragment:Zv,clipping_planes_fragment:Jv,clipping_planes_pars_fragment:e_,clipping_planes_pars_vertex:t_,clipping_planes_vertex:n_,color_fragment:i_,color_pars_fragment:r_,color_pars_vertex:s_,color_vertex:a_,common:o_,cube_uv_reflection_fragment:l_,defaultnormal_vertex:u_,displacementmap_pars_vertex:c_,displacementmap_vertex:h_,emissivemap_fragment:d_,emissivemap_pars_fragment:f_,colorspace_fragment:p_,colorspace_pars_fragment:m_,envmap_fragment:g_,envmap_common_pars_fragment:v_,envmap_pars_fragment:__,envmap_pars_vertex:y_,envmap_physical_pars_fragment:L_,envmap_vertex:x_,fog_vertex:S_,fog_pars_vertex:M_,fog_fragment:E_,fog_pars_fragment:T_,gradientmap_pars_fragment:w_,lightmap_fragment:A_,lightmap_pars_fragment:R_,lights_lambert_fragment:C_,lights_lambert_pars_fragment:b_,lights_pars_begin:P_,lights_toon_fragment:N_,lights_toon_pars_fragment:U_,lights_phong_fragment:D_,lights_phong_pars_fragment:I_,lights_physical_fragment:F_,lights_physical_pars_fragment:O_,lights_fragment_begin:k_,lights_fragment_maps:B_,lights_fragment_end:z_,logdepthbuf_fragment:H_,logdepthbuf_pars_fragment:V_,logdepthbuf_pars_vertex:G_,logdepthbuf_vertex:W_,map_fragment:j_,map_pars_fragment:X_,map_particle_fragment:q_,map_particle_pars_fragment:Y_,metalnessmap_fragment:$_,metalnessmap_pars_fragment:K_,morphcolor_vertex:Q_,morphnormal_vertex:Z_,morphtarget_pars_vertex:J_,morphtarget_vertex:ey,normal_fragment_begin:ty,normal_fragment_maps:ny,normal_pars_fragment:iy,normal_pars_vertex:ry,normal_vertex:sy,normalmap_pars_fragment:ay,clearcoat_normal_fragment_begin:oy,clearcoat_normal_fragment_maps:ly,clearcoat_pars_fragment:uy,iridescence_pars_fragment:cy,opaque_fragment:hy,packing:dy,premultiplied_alpha_fragment:fy,project_vertex:py,dithering_fragment:my,dithering_pars_fragment:gy,roughnessmap_fragment:vy,roughnessmap_pars_fragment:_y,shadowmap_pars_fragment:yy,shadowmap_pars_vertex:xy,shadowmap_vertex:Sy,shadowmask_pars_fragment:My,skinbase_vertex:Ey,skinning_pars_vertex:Ty,skinning_vertex:wy,skinnormal_vertex:Ay,specularmap_fragment:Ry,specularmap_pars_fragment:Cy,tonemapping_fragment:by,tonemapping_pars_fragment:Py,transmission_fragment:Ly,transmission_pars_fragment:Ny,uv_pars_fragment:Uy,uv_pars_vertex:Dy,uv_vertex:Iy,worldpos_vertex:Fy,background_vert:Oy,background_frag:ky,backgroundCube_vert:By,backgroundCube_frag:zy,cube_vert:Hy,cube_frag:Vy,depth_vert:Gy,depth_frag:Wy,distanceRGBA_vert:jy,distanceRGBA_frag:Xy,equirect_vert:qy,equirect_frag:Yy,linedashed_vert:$y,linedashed_frag:Ky,meshbasic_vert:Qy,meshbasic_frag:Zy,meshlambert_vert:Jy,meshlambert_frag:ex,meshmatcap_vert:tx,meshmatcap_frag:nx,meshnormal_vert:ix,meshnormal_frag:rx,meshphong_vert:sx,meshphong_frag:ax,meshphysical_vert:ox,meshphysical_frag:lx,meshtoon_vert:ux,meshtoon_frag:cx,points_vert:hx,points_frag:dx,shadow_vert:fx,shadow_frag:px,sprite_vert:mx,sprite_frag:gx},Re={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},hi={basic:{uniforms:pn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:pn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Rt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:pn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:pn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:pn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Rt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:pn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:pn([Re.points,Re.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:pn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:pn([Re.common,Re.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:pn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:pn([Re.sprite,Re.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:pn([Re.common,Re.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:pn([Re.lights,Re.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};hi.physical={uniforms:pn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Zo={r:0,b:0,g:0};function vx(s,e,t,r,o,u,c){const h=new Rt(0);let f=u===!0?0:1,p,g,v=null,_=0,S=null;function E(x,y){let I=!1,P=y.isScene===!0?y.background:null;switch(P&&P.isTexture&&(P=(y.backgroundBlurriness>0?t:e).get(P)),P===null?w(h,f):P&&P.isColor&&(w(P,1),I=!0),s.xr.getEnvironmentBlendMode()){case"opaque":I=!0;break;case"additive":r.buffers.color.setClear(0,0,0,1,c),I=!0;break;case"alpha-blend":r.buffers.color.setClear(0,0,0,0,c),I=!0;break}(s.autoClear||I)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),P&&(P.isCubeTexture||P.mapping===rl)?(g===void 0&&(g=new Ui(new Ca(1,1,1),new Or({name:"BackgroundCubeMaterial",uniforms:Us(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,k,se){this.matrixWorld.copyPosition(se.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,g.material.toneMapped=P.colorSpace!==ot,(v!==P||_!==P.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,v=P,_=P.version,S=s.toneMapping),g.layers.enableAll(),x.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Ui(new ol(2,2),new Or({name:"BackgroundMaterial",uniforms:Us(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,p.material.toneMapped=P.colorSpace!==ot,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||_!==P.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,v=P,_=P.version,S=s.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null))}function w(x,y){x.getRGB(Zo,cm(s)),r.buffers.color.setClear(Zo.r,Zo.g,Zo.b,y,c)}return{getClearColor:function(){return h},setClearColor:function(x,y=1){h.set(x),f=y,w(h,f)},getClearAlpha:function(){return f},setClearAlpha:function(x){f=x,w(h,f)},render:E}}function _x(s,e,t,r){const o=s.getParameter(s.MAX_VERTEX_ATTRIBS),u=r.isWebGL2?null:e.get("OES_vertex_array_object"),c=r.isWebGL2||u!==null,h={},f=x(null);let p=f,g=!1;function v(te,ie,ce,Z,G){let J=!1;if(c){const W=w(Z,ce,ie);p!==W&&(p=W,S(p.object)),J=y(te,Z,ce,G),J&&I(te,Z,ce,G)}else{const W=ie.wireframe===!0;(p.geometry!==Z.id||p.program!==ce.id||p.wireframe!==W)&&(p.geometry=Z.id,p.program=ce.id,p.wireframe=W,J=!0)}G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(J||g)&&(g=!1,se(te,ie,ce,Z),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function _(){return r.isWebGL2?s.createVertexArray():u.createVertexArrayOES()}function S(te){return r.isWebGL2?s.bindVertexArray(te):u.bindVertexArrayOES(te)}function E(te){return r.isWebGL2?s.deleteVertexArray(te):u.deleteVertexArrayOES(te)}function w(te,ie,ce){const Z=ce.wireframe===!0;let G=h[te.id];G===void 0&&(G={},h[te.id]=G);let J=G[ie.id];J===void 0&&(J={},G[ie.id]=J);let W=J[Z];return W===void 0&&(W=x(_()),J[Z]=W),W}function x(te){const ie=[],ce=[],Z=[];for(let G=0;G<o;G++)ie[G]=0,ce[G]=0,Z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:ce,attributeDivisors:Z,object:te,attributes:{},index:null}}function y(te,ie,ce,Z){const G=p.attributes,J=ie.attributes;let W=0;const T=ce.getAttributes();for(const O in T)if(T[O].location>=0){const he=G[O];let me=J[O];if(me===void 0&&(O==="instanceMatrix"&&te.instanceMatrix&&(me=te.instanceMatrix),O==="instanceColor"&&te.instanceColor&&(me=te.instanceColor)),he===void 0||he.attribute!==me||me&&he.data!==me.data)return!0;W++}return p.attributesNum!==W||p.index!==Z}function I(te,ie,ce,Z){const G={},J=ie.attributes;let W=0;const T=ce.getAttributes();for(const O in T)if(T[O].location>=0){let he=J[O];he===void 0&&(O==="instanceMatrix"&&te.instanceMatrix&&(he=te.instanceMatrix),O==="instanceColor"&&te.instanceColor&&(he=te.instanceColor));const me={};me.attribute=he,he&&he.data&&(me.data=he.data),G[O]=me,W++}p.attributes=G,p.attributesNum=W,p.index=Z}function P(){const te=p.newAttributes;for(let ie=0,ce=te.length;ie<ce;ie++)te[ie]=0}function L(te){F(te,0)}function F(te,ie){const ce=p.newAttributes,Z=p.enabledAttributes,G=p.attributeDivisors;ce[te]=1,Z[te]===0&&(s.enableVertexAttribArray(te),Z[te]=1),G[te]!==ie&&((r.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](te,ie),G[te]=ie)}function z(){const te=p.newAttributes,ie=p.enabledAttributes;for(let ce=0,Z=ie.length;ce<Z;ce++)ie[ce]!==te[ce]&&(s.disableVertexAttribArray(ce),ie[ce]=0)}function k(te,ie,ce,Z,G,J,W){W===!0?s.vertexAttribIPointer(te,ie,ce,G,J):s.vertexAttribPointer(te,ie,ce,Z,G,J)}function se(te,ie,ce,Z){if(r.isWebGL2===!1&&(te.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;P();const G=Z.attributes,J=ce.getAttributes(),W=ie.defaultAttributeValues;for(const T in J){const O=J[T];if(O.location>=0){let ue=G[T];if(ue===void 0&&(T==="instanceMatrix"&&te.instanceMatrix&&(ue=te.instanceMatrix),T==="instanceColor"&&te.instanceColor&&(ue=te.instanceColor)),ue!==void 0){const he=ue.normalized,me=ue.itemSize,Me=t.get(ue);if(Me===void 0)continue;const Le=Me.buffer,Te=Me.type,Ve=Me.bytesPerElement,mt=r.isWebGL2===!0&&(Te===s.INT||Te===s.UNSIGNED_INT||ue.gpuType===Yp);if(ue.isInterleavedBufferAttribute){const it=ue.data,$=it.stride,Pt=ue.offset;if(it.isInstancedInterleavedBuffer){for(let We=0;We<O.locationSize;We++)F(O.location+We,it.meshPerAttribute);te.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let We=0;We<O.locationSize;We++)L(O.location+We);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let We=0;We<O.locationSize;We++)k(O.location+We,me/O.locationSize,Te,he,$*Ve,(Pt+me/O.locationSize*We)*Ve,mt)}else{if(ue.isInstancedBufferAttribute){for(let it=0;it<O.locationSize;it++)F(O.location+it,ue.meshPerAttribute);te.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let it=0;it<O.locationSize;it++)L(O.location+it);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let it=0;it<O.locationSize;it++)k(O.location+it,me/O.locationSize,Te,he,me*Ve,me/O.locationSize*it*Ve,mt)}}else if(W!==void 0){const he=W[T];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(O.location,he);break;case 3:s.vertexAttrib3fv(O.location,he);break;case 4:s.vertexAttrib4fv(O.location,he);break;default:s.vertexAttrib1fv(O.location,he)}}}}z()}function C(){fe();for(const te in h){const ie=h[te];for(const ce in ie){const Z=ie[ce];for(const G in Z)E(Z[G].object),delete Z[G];delete ie[ce]}delete h[te]}}function D(te){if(h[te.id]===void 0)return;const ie=h[te.id];for(const ce in ie){const Z=ie[ce];for(const G in Z)E(Z[G].object),delete Z[G];delete ie[ce]}delete h[te.id]}function de(te){for(const ie in h){const ce=h[ie];if(ce[te.id]===void 0)continue;const Z=ce[te.id];for(const G in Z)E(Z[G].object),delete Z[G];delete ce[te.id]}}function fe(){Y(),g=!0,p!==f&&(p=f,S(p.object))}function Y(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:v,reset:fe,resetDefaultState:Y,dispose:C,releaseStatesOfGeometry:D,releaseStatesOfProgram:de,initAttributes:P,enableAttribute:L,disableUnusedAttributes:z}}function yx(s,e,t,r){const o=r.isWebGL2;let u;function c(p){u=p}function h(p,g){s.drawArrays(u,p,g),t.update(g,u,1)}function f(p,g,v){if(v===0)return;let _,S;if(o)_=s,S="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[S](u,p,g,v),t.update(g,u,v)}this.setMode=c,this.render=h,this.renderInstances=f}function xx(s,e,t){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let h=t.precision!==void 0?t.precision:"highp";const f=u(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const p=c||e.has("WEBGL_draw_buffers"),g=t.logarithmicDepthBuffer===!0,v=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),w=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),I=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,L=c||e.has("OES_texture_float"),F=P&&L,z=c?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:p,getMaxAnisotropy:o,getMaxPrecision:u,precision:h,logarithmicDepthBuffer:g,maxTextures:v,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:E,maxAttributes:w,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:I,vertexTextures:P,floatFragmentTextures:L,floatVertexTextures:F,maxSamples:z}}function Sx(s){const e=this;let t=null,r=0,o=!1,u=!1;const c=new Cr,h=new ht,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const S=v.length!==0||_||r!==0||o;return o=_,r=v.length,S},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,_){t=g(v,_,0)},this.setState=function(v,_,S){const E=v.clippingPlanes,w=v.clipIntersection,x=v.clipShadows,y=s.get(v);if(!o||E===null||E.length===0||u&&!x)u?g(null):p();else{const I=u?0:r,P=I*4;let L=y.clippingState||null;f.value=L,L=g(E,_,P,S);for(let F=0;F!==P;++F)L[F]=t[F];y.clippingState=L,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,_,S,E){const w=v!==null?v.length:0;let x=null;if(w!==0){if(x=f.value,E!==!0||x===null){const y=S+w*4,I=_.matrixWorldInverse;h.getNormalMatrix(I),(x===null||x.length<y)&&(x=new Float32Array(y));for(let P=0,L=S;P!==w;++P,L+=4)c.copy(v[P]).applyMatrix4(I,h),c.normal.toArray(x,L),x[L+3]=c.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function Mx(s){let e=new WeakMap;function t(c,h){return h===Cc?c.mapping=Ps:h===bc&&(c.mapping=Ls),c}function r(c){if(c&&c.isTexture&&c.isRenderTargetTexture===!1){const h=c.mapping;if(h===Cc||h===bc)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const p=new Fv(f.height/2);return p.fromEquirectangularTexture(s,c),e.set(c,p),c.addEventListener("dispose",o),t(p.texture,c.mapping)}else return null}}return c}function o(c){const h=c.target;h.removeEventListener("dispose",o);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class mm extends hm{constructor(e=-1,t=1,r=1,o=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=r-e,c=r+e,h=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,c=u+p*this.view.width,h-=g*this.view.offsetY,f=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,c,h,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Rs=4,_p=[.125,.215,.35,.446,.526,.582],Pr=20,Ec=new mm,yp=new Rt;let Tc=null;const br=(1+Math.sqrt(5))/2,ws=1/br,xp=[new ne(1,1,1),new ne(-1,1,1),new ne(1,1,-1),new ne(-1,1,-1),new ne(0,br,ws),new ne(0,br,-ws),new ne(ws,0,br),new ne(-ws,0,br),new ne(br,ws,0),new ne(-br,ws,0)];class Sp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){Tc=this._renderer.getRenderTarget(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,o,u),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tc),e.scissorTest=!1,Jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ps||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tc=this._renderer.getRenderTarget();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Ta,format:Wn,colorSpace:fi,depthBuffer:!1},o=Mp(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mp(e,t,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ex(u)),this._blurMaterial=Tx(u,e,t)}return o}_compileMaterial(e){const t=new Ui(this._lodPlanes[0],e);this._renderer.compile(t,Ec)}_sceneToCubeUV(e,t,r,o){const h=new ii(90,1,t,r),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,_=g.toneMapping;g.getClearColor(yp),g.toneMapping=Di,g.autoClear=!1;const S=new Gc({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),E=new Ui(new Ca,S);let w=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,w=!0):(S.color.copy(yp),w=!0);for(let y=0;y<6;y++){const I=y%3;I===0?(h.up.set(0,f[y],0),h.lookAt(p[y],0,0)):I===1?(h.up.set(0,0,f[y]),h.lookAt(0,p[y],0)):(h.up.set(0,f[y],0),h.lookAt(0,0,p[y]));const P=this._cubeSize;Jo(o,I*P,y>2?P:0,P,P),g.setRenderTarget(o),w&&g.render(E,h),g.render(e,h)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=_,g.autoClear=v,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ps||e.mapping===Ls;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ep());const u=o?this._cubemapMaterial:this._equirectMaterial,c=new Ui(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const f=this._cubeSize;Jo(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(c,Ec)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const u=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),c=xp[(o-1)%xp.length];this._blur(e,o-1,o,u,c)}t.autoClear=r}_blur(e,t,r,o,u){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",u),this._halfBlur(c,e,r,r,o,"longitudinal",u)}_halfBlur(e,t,r,o,u,c,h){const f=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Ui(this._lodPlanes[o],p),_=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Pr-1),w=u/E,x=isFinite(u)?1+Math.floor(g*w):Pr;x>Pr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Pr}`);const y=[];let I=0;for(let k=0;k<Pr;++k){const se=k/w,C=Math.exp(-se*se/2);y.push(C),k===0?I+=C:k<x&&(I+=2*C)}for(let k=0;k<y.length;k++)y[k]=y[k]/I;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=y,_.latitudinal.value=c==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:P}=this;_.dTheta.value=E,_.mipInt.value=P-r;const L=this._sizeLods[o],F=3*L*(o>P-Rs?o-P+Rs:0),z=4*(this._cubeSize-L);Jo(t,F,z,3*L,2*L),f.setRenderTarget(t),f.render(v,Ec)}}function Ex(s){const e=[],t=[],r=[];let o=s;const u=s-Rs+1+_p.length;for(let c=0;c<u;c++){const h=Math.pow(2,o);t.push(h);let f=1/h;c>s-Rs?f=_p[c-s+Rs-1]:c===0&&(f=0),r.push(f);const p=1/(h-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,E=6,w=3,x=2,y=1,I=new Float32Array(w*E*S),P=new Float32Array(x*E*S),L=new Float32Array(y*E*S);for(let z=0;z<S;z++){const k=z%3*2/3-1,se=z>2?0:-1,C=[k,se,0,k+2/3,se,0,k+2/3,se+1,0,k,se,0,k+2/3,se+1,0,k,se+1,0];I.set(C,w*E*z),P.set(_,x*E*z);const D=[z,z,z,z,z,z];L.set(D,y*E*z)}const F=new kr;F.setAttribute("position",new di(I,w)),F.setAttribute("uv",new di(P,x)),F.setAttribute("faceIndex",new di(L,y)),e.push(F),o>Rs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Mp(s,e,t){const r=new Fr(s,e,t);return r.texture.mapping=rl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Jo(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function Tx(s,e,t){const r=new Float32Array(Pr),o=new ne(0,1,0);return new Or({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Ep(){return new Or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Tp(){return new Or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Wc(){return`

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
	`}function wx(s){let e=new WeakMap,t=null;function r(h){if(h&&h.isTexture){const f=h.mapping,p=f===Cc||f===bc,g=f===Ps||f===Ls;if(p||g)if(h.isRenderTargetTexture&&h.needsPMREMUpdate===!0){h.needsPMREMUpdate=!1;let v=e.get(h);return t===null&&(t=new Sp(s)),v=p?t.fromEquirectangular(h,v):t.fromCubemap(h,v),e.set(h,v),v.texture}else{if(e.has(h))return e.get(h).texture;{const v=h.image;if(p&&v&&v.height>0||g&&v&&o(v)){t===null&&(t=new Sp(s));const _=p?t.fromEquirectangular(h):t.fromCubemap(h);return e.set(h,_),h.addEventListener("dispose",u),_.texture}else return null}}}return h}function o(h){let f=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&f++;return f===p}function u(h){const f=h.target;f.removeEventListener("dispose",u);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function Ax(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const o=t(r);return o===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function Rx(s,e,t,r){const o={},u=new WeakMap;function c(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);for(const E in _.morphAttributes){const w=_.morphAttributes[E];for(let x=0,y=w.length;x<y;x++)e.remove(w[x])}_.removeEventListener("dispose",c),delete o[_.id];const S=u.get(_);S&&(e.remove(S),u.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function h(v,_){return o[_.id]===!0||(_.addEventListener("dispose",c),o[_.id]=!0,t.memory.geometries++),_}function f(v){const _=v.attributes;for(const E in _)e.update(_[E],s.ARRAY_BUFFER);const S=v.morphAttributes;for(const E in S){const w=S[E];for(let x=0,y=w.length;x<y;x++)e.update(w[x],s.ARRAY_BUFFER)}}function p(v){const _=[],S=v.index,E=v.attributes.position;let w=0;if(S!==null){const I=S.array;w=S.version;for(let P=0,L=I.length;P<L;P+=3){const F=I[P+0],z=I[P+1],k=I[P+2];_.push(F,z,z,k,k,F)}}else{const I=E.array;w=E.version;for(let P=0,L=I.length/3-1;P<L;P+=3){const F=P+0,z=P+1,k=P+2;_.push(F,z,z,k,k,F)}}const x=new(nm(_)?um:lm)(_,1);x.version=w;const y=u.get(v);y&&e.remove(y),u.set(v,x)}function g(v){const _=u.get(v);if(_){const S=v.index;S!==null&&_.version<S.version&&p(v)}else p(v);return u.get(v)}return{get:h,update:f,getWireframeAttribute:g}}function Cx(s,e,t,r){const o=r.isWebGL2;let u;function c(_){u=_}let h,f;function p(_){h=_.type,f=_.bytesPerElement}function g(_,S){s.drawElements(u,S,h,_*f),t.update(S,u,1)}function v(_,S,E){if(E===0)return;let w,x;if(o)w=s,x="drawElementsInstanced";else if(w=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",w===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}w[x](u,S,h,_*f,E),t.update(S,u,E)}this.setMode=c,this.setIndex=p,this.render=g,this.renderInstances=v}function bx(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,h){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=h*(u/3);break;case s.LINES:t.lines+=h*(u/2);break;case s.LINE_STRIP:t.lines+=h*(u-1);break;case s.LINE_LOOP:t.lines+=h*u;break;case s.POINTS:t.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function Px(s,e){return s[0]-e[0]}function Lx(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Nx(s,e,t){const r={},o=new Float32Array(8),u=new WeakMap,c=new nn,h=[];for(let p=0;p<8;p++)h[p]=[p,0];function f(p,g,v){const _=p.morphTargetInfluences;if(e.isWebGL2===!0){const E=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,w=E!==void 0?E.length:0;let x=u.get(g);if(x===void 0||x.count!==w){let ie=function(){Y.dispose(),u.delete(g),g.removeEventListener("dispose",ie)};var S=ie;x!==void 0&&x.texture.dispose();const P=g.morphAttributes.position!==void 0,L=g.morphAttributes.normal!==void 0,F=g.morphAttributes.color!==void 0,z=g.morphAttributes.position||[],k=g.morphAttributes.normal||[],se=g.morphAttributes.color||[];let C=0;P===!0&&(C=1),L===!0&&(C=2),F===!0&&(C=3);let D=g.attributes.position.count*C,de=1;D>e.maxTextureSize&&(de=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const fe=new Float32Array(D*de*4*w),Y=new sm(fe,D,de,w);Y.type=ar,Y.needsUpdate=!0;const te=C*4;for(let ce=0;ce<w;ce++){const Z=z[ce],G=k[ce],J=se[ce],W=D*de*4*ce;for(let T=0;T<Z.count;T++){const O=T*te;P===!0&&(c.fromBufferAttribute(Z,T),fe[W+O+0]=c.x,fe[W+O+1]=c.y,fe[W+O+2]=c.z,fe[W+O+3]=0),L===!0&&(c.fromBufferAttribute(G,T),fe[W+O+4]=c.x,fe[W+O+5]=c.y,fe[W+O+6]=c.z,fe[W+O+7]=0),F===!0&&(c.fromBufferAttribute(J,T),fe[W+O+8]=c.x,fe[W+O+9]=c.y,fe[W+O+10]=c.z,fe[W+O+11]=J.itemSize===4?c.w:1)}}x={count:w,texture:Y,size:new xt(D,de)},u.set(g,x),g.addEventListener("dispose",ie)}let y=0;for(let P=0;P<_.length;P++)y+=_[P];const I=g.morphTargetsRelative?1:1-y;v.getUniforms().setValue(s,"morphTargetBaseInfluence",I),v.getUniforms().setValue(s,"morphTargetInfluences",_),v.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),v.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const E=_===void 0?0:_.length;let w=r[g.id];if(w===void 0||w.length!==E){w=[];for(let L=0;L<E;L++)w[L]=[L,0];r[g.id]=w}for(let L=0;L<E;L++){const F=w[L];F[0]=L,F[1]=_[L]}w.sort(Lx);for(let L=0;L<8;L++)L<E&&w[L][1]?(h[L][0]=w[L][0],h[L][1]=w[L][1]):(h[L][0]=Number.MAX_SAFE_INTEGER,h[L][1]=0);h.sort(Px);const x=g.morphAttributes.position,y=g.morphAttributes.normal;let I=0;for(let L=0;L<8;L++){const F=h[L],z=F[0],k=F[1];z!==Number.MAX_SAFE_INTEGER&&k?(x&&g.getAttribute("morphTarget"+L)!==x[z]&&g.setAttribute("morphTarget"+L,x[z]),y&&g.getAttribute("morphNormal"+L)!==y[z]&&g.setAttribute("morphNormal"+L,y[z]),o[L]=k,I+=k):(x&&g.hasAttribute("morphTarget"+L)===!0&&g.deleteAttribute("morphTarget"+L),y&&g.hasAttribute("morphNormal"+L)===!0&&g.deleteAttribute("morphNormal"+L),o[L]=0)}const P=g.morphTargetsRelative?1:1-I;v.getUniforms().setValue(s,"morphTargetBaseInfluence",P),v.getUniforms().setValue(s,"morphTargetInfluences",o)}}return{update:f}}function Ux(s,e,t,r){let o=new WeakMap;function u(f){const p=r.render.frame,g=f.geometry,v=e.get(f,g);if(o.get(v)!==p&&(e.update(v),o.set(v,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),o.get(f)!==p&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const _=f.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return v}function c(){o=new WeakMap}function h(f){const p=f.target;p.removeEventListener("dispose",h),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:u,dispose:c}}const gm=new Tn,vm=new sm,_m=new yv,ym=new dm,wp=[],Ap=[],Rp=new Float32Array(16),Cp=new Float32Array(9),bp=new Float32Array(4);function Is(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let u=wp[o];if(u===void 0&&(u=new Float32Array(o),wp[o]=u),e!==0){r.toArray(u,0);for(let c=1,h=0;c!==e;++c)h+=t,s[c].toArray(u,h)}return u}function qt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Yt(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function ll(s,e){let t=Ap[e];t===void 0&&(t=new Int32Array(e),Ap[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function Dx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ix(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2fv(this.addr,e),Yt(t,e)}}function Fx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;s.uniform3fv(this.addr,e),Yt(t,e)}}function Ox(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4fv(this.addr,e),Yt(t,e)}}function kx(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,r))return;bp.set(r),s.uniformMatrix2fv(this.addr,!1,bp),Yt(t,r)}}function Bx(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,r))return;Cp.set(r),s.uniformMatrix3fv(this.addr,!1,Cp),Yt(t,r)}}function zx(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,r))return;Rp.set(r),s.uniformMatrix4fv(this.addr,!1,Rp),Yt(t,r)}}function Hx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Vx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2iv(this.addr,e),Yt(t,e)}}function Gx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;s.uniform3iv(this.addr,e),Yt(t,e)}}function Wx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4iv(this.addr,e),Yt(t,e)}}function jx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Xx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2uiv(this.addr,e),Yt(t,e)}}function qx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;s.uniform3uiv(this.addr,e),Yt(t,e)}}function Yx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4uiv(this.addr,e),Yt(t,e)}}function $x(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2D(e||gm,o)}function Kx(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||_m,o)}function Qx(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||ym,o)}function Zx(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||vm,o)}function Jx(s){switch(s){case 5126:return Dx;case 35664:return Ix;case 35665:return Fx;case 35666:return Ox;case 35674:return kx;case 35675:return Bx;case 35676:return zx;case 5124:case 35670:return Hx;case 35667:case 35671:return Vx;case 35668:case 35672:return Gx;case 35669:case 35673:return Wx;case 5125:return jx;case 36294:return Xx;case 36295:return qx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return Kx;case 35680:case 36300:case 36308:case 36293:return Qx;case 36289:case 36303:case 36311:case 36292:return Zx}}function eS(s,e){s.uniform1fv(this.addr,e)}function tS(s,e){const t=Is(e,this.size,2);s.uniform2fv(this.addr,t)}function nS(s,e){const t=Is(e,this.size,3);s.uniform3fv(this.addr,t)}function iS(s,e){const t=Is(e,this.size,4);s.uniform4fv(this.addr,t)}function rS(s,e){const t=Is(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function sS(s,e){const t=Is(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function aS(s,e){const t=Is(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function oS(s,e){s.uniform1iv(this.addr,e)}function lS(s,e){s.uniform2iv(this.addr,e)}function uS(s,e){s.uniform3iv(this.addr,e)}function cS(s,e){s.uniform4iv(this.addr,e)}function hS(s,e){s.uniform1uiv(this.addr,e)}function dS(s,e){s.uniform2uiv(this.addr,e)}function fS(s,e){s.uniform3uiv(this.addr,e)}function pS(s,e){s.uniform4uiv(this.addr,e)}function mS(s,e,t){const r=this.cache,o=e.length,u=ll(t,o);qt(r,u)||(s.uniform1iv(this.addr,u),Yt(r,u));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||gm,u[c])}function gS(s,e,t){const r=this.cache,o=e.length,u=ll(t,o);qt(r,u)||(s.uniform1iv(this.addr,u),Yt(r,u));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||_m,u[c])}function vS(s,e,t){const r=this.cache,o=e.length,u=ll(t,o);qt(r,u)||(s.uniform1iv(this.addr,u),Yt(r,u));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||ym,u[c])}function _S(s,e,t){const r=this.cache,o=e.length,u=ll(t,o);qt(r,u)||(s.uniform1iv(this.addr,u),Yt(r,u));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||vm,u[c])}function yS(s){switch(s){case 5126:return eS;case 35664:return tS;case 35665:return nS;case 35666:return iS;case 35674:return rS;case 35675:return sS;case 35676:return aS;case 5124:case 35670:return oS;case 35667:case 35671:return lS;case 35668:case 35672:return uS;case 35669:case 35673:return cS;case 5125:return hS;case 36294:return dS;case 36295:return fS;case 36296:return pS;case 35678:case 36198:case 36298:case 36306:case 35682:return mS;case 35679:case 36299:case 36307:return gS;case 35680:case 36300:case 36308:case 36293:return vS;case 36289:case 36303:case 36311:case 36292:return _S}}class xS{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.setValue=Jx(t.type)}}class SS{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.size=t.size,this.setValue=yS(t.type)}}class MS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let u=0,c=o.length;u!==c;++u){const h=o[u];h.setValue(e,t[h.id],r)}}}const wc=/(\w+)(\])?(\[|\.)?/g;function Pp(s,e){s.seq.push(e),s.map[e.id]=e}function ES(s,e,t){const r=s.name,o=r.length;for(wc.lastIndex=0;;){const u=wc.exec(r),c=wc.lastIndex;let h=u[1];const f=u[2]==="]",p=u[3];if(f&&(h=h|0),p===void 0||p==="["&&c+2===o){Pp(t,p===void 0?new xS(h,s,e):new SS(h,s,e));break}else{let v=t.map[h];v===void 0&&(v=new MS(h),Pp(t,v)),t=v}}}class tl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const u=e.getActiveUniform(t,o),c=e.getUniformLocation(t,u.name);ES(u,c,this)}}setValue(e,t,r,o){const u=this.map[t];u!==void 0&&u.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let u=0,c=t.length;u!==c;++u){const h=t[u],f=r[h.id];f.needsUpdate!==!1&&h.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,u=e.length;o!==u;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function Lp(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}let TS=0;function wS(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),u=Math.min(e+6,t.length);for(let c=o;c<u;c++){const h=c+1;r.push(`${h===e?">":" "} ${h}: ${t[c]}`)}return r.join(`
`)}function AS(s){switch(s){case fi:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function Np(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const c=parseInt(u[1]);return t.toUpperCase()+`

`+o+`

`+wS(s.getShaderSource(e),c)}else return o}function RS(s,e){const t=AS(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function CS(s,e){let t;switch(e){case F0:t="Linear";break;case O0:t="Reinhard";break;case k0:t="OptimizedCineon";break;case B0:t="ACESFilmic";break;case z0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function bS(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sa).join(`
`)}function PS(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function LS(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const u=s.getActiveAttrib(e,o),c=u.name;let h=1;u.type===s.FLOAT_MAT2&&(h=2),u.type===s.FLOAT_MAT3&&(h=3),u.type===s.FLOAT_MAT4&&(h=4),t[c]={type:u.type,location:s.getAttribLocation(e,c),locationSize:h}}return t}function Sa(s){return s!==""}function Up(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(s){return s.replace(NS,DS)}const US=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function DS(s,e){let t=at[e];if(t===void 0){const r=US.get(e);if(r!==void 0)t=at[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ic(t)}const IS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ip(s){return s.replace(IS,FS)}function FS(s,e,t,r){let o="";for(let u=parseInt(e);u<parseInt(t);u++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function Fp(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function OS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===p0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function kS(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ps:case Ls:e="ENVMAP_TYPE_CUBE";break;case rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function zS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xp:e="ENVMAP_BLENDING_MULTIPLY";break;case D0:e="ENVMAP_BLENDING_MIX";break;case I0:e="ENVMAP_BLENDING_ADD";break}return e}function HS(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function VS(s,e,t,r){const o=s.getContext(),u=t.defines;let c=t.vertexShader,h=t.fragmentShader;const f=OS(t),p=kS(t),g=BS(t),v=zS(t),_=HS(t),S=t.isWebGL2?"":bS(t),E=PS(u),w=o.createProgram();let x,y,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Sa).join(`
`),x.length>0&&(x+=`
`),y=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Sa).join(`
`),y.length>0&&(y+=`
`)):(x=[Fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),y=[S,Fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?at.tonemapping_pars_fragment:"",t.toneMapping!==Di?CS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,RS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sa).join(`
`)),c=Ic(c),c=Up(c,t),c=Dp(c,t),h=Ic(h),h=Up(h,t),h=Dp(h,t),c=Ip(c),h=Ip(h),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=I+x+c,L=I+y+h,F=Lp(o,o.VERTEX_SHADER,P),z=Lp(o,o.FRAGMENT_SHADER,L);if(o.attachShader(w,F),o.attachShader(w,z),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w),s.debug.checkShaderErrors){const C=o.getProgramInfoLog(w).trim(),D=o.getShaderInfoLog(F).trim(),de=o.getShaderInfoLog(z).trim();let fe=!0,Y=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(fe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,F,z);else{const te=Np(o,F,"vertex"),ie=Np(o,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Program Info Log: `+C+`
`+te+`
`+ie)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(D===""||de==="")&&(Y=!1);Y&&(this.diagnostics={runnable:fe,programLog:C,vertexShader:{log:D,prefix:x},fragmentShader:{log:de,prefix:y}})}o.deleteShader(F),o.deleteShader(z);let k;this.getUniforms=function(){return k===void 0&&(k=new tl(o,w)),k};let se;return this.getAttributes=function(){return se===void 0&&(se=LS(o,w)),se},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=TS++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=z,this}let GS=0;class WS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),u=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new jS(e),t.set(e,r)),r}}class jS{constructor(e){this.id=GS++,this.code=e,this.usedTimes=0}}function XS(s,e,t,r,o,u,c){const h=new am,f=new WS,p=[],g=o.isWebGL2,v=o.logarithmicDepthBuffer,_=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return C===0?"uv":`uv${C}`}function x(C,D,de,fe,Y){const te=fe.fog,ie=Y.geometry,ce=C.isMeshStandardMaterial?fe.environment:null,Z=(C.isMeshStandardMaterial?t:e).get(C.envMap||ce),G=Z&&Z.mapping===rl?Z.image.height:null,J=E[C.type];C.precision!==null&&(S=o.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const W=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,T=W!==void 0?W.length:0;let O=0;ie.morphAttributes.position!==void 0&&(O=1),ie.morphAttributes.normal!==void 0&&(O=2),ie.morphAttributes.color!==void 0&&(O=3);let ue,he,me,Me;if(J){const wn=hi[J];ue=wn.vertexShader,he=wn.fragmentShader}else ue=C.vertexShader,he=C.fragmentShader,f.update(C),me=f.getVertexShaderID(C),Me=f.getFragmentShaderID(C);const Le=s.getRenderTarget(),Te=Y.isInstancedMesh===!0,Ve=!!C.map,mt=!!C.matcap,it=!!Z,$=!!C.aoMap,Pt=!!C.lightMap,We=!!C.bumpMap,nt=!!C.normalMap,Ze=!!C.displacementMap,vt=!!C.emissiveMap,Ge=!!C.metalnessMap,je=!!C.roughnessMap,Oe=C.anisotropy>0,yt=C.clearcoat>0,Lt=C.iridescence>0,N=C.sheen>0,A=C.transmission>0,re=Oe&&!!C.anisotropyMap,ye=yt&&!!C.clearcoatMap,_e=yt&&!!C.clearcoatNormalMap,Ee=yt&&!!C.clearcoatRoughnessMap,He=Lt&&!!C.iridescenceMap,we=Lt&&!!C.iridescenceThicknessMap,le=N&&!!C.sheenColorMap,Ye=N&&!!C.sheenRoughnessMap,Xe=!!C.specularMap,$e=!!C.specularColorMap,ke=!!C.specularIntensityMap,De=A&&!!C.transmissionMap,st=A&&!!C.thicknessMap,gt=!!C.gradientMap,H=!!C.alphaMap,Ae=C.alphaTest>0,ee=!!C.alphaHash,Se=!!C.extensions,Ce=!!ie.attributes.uv1,dt=!!ie.attributes.uv2,St=!!ie.attributes.uv3;return{isWebGL2:g,shaderID:J,shaderType:C.type,shaderName:C.name,vertexShader:ue,fragmentShader:he,defines:C.defines,customVertexShaderID:me,customFragmentShaderID:Me,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,instancing:Te,instancingColor:Te&&Y.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:Le===null?s.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:fi,map:Ve,matcap:mt,envMap:it,envMapMode:it&&Z.mapping,envMapCubeUVHeight:G,aoMap:$,lightMap:Pt,bumpMap:We,normalMap:nt,displacementMap:_&&Ze,emissiveMap:vt,normalMapObjectSpace:nt&&C.normalMapType===ev,normalMapTangentSpace:nt&&C.normalMapType===J0,metalnessMap:Ge,roughnessMap:je,anisotropy:Oe,anisotropyMap:re,clearcoat:yt,clearcoatMap:ye,clearcoatNormalMap:_e,clearcoatRoughnessMap:Ee,iridescence:Lt,iridescenceMap:He,iridescenceThicknessMap:we,sheen:N,sheenColorMap:le,sheenRoughnessMap:Ye,specularMap:Xe,specularColorMap:$e,specularIntensityMap:ke,transmission:A,transmissionMap:De,thicknessMap:st,gradientMap:gt,opaque:C.transparent===!1&&C.blending===Cs,alphaMap:H,alphaTest:Ae,alphaHash:ee,combine:C.combine,mapUv:Ve&&w(C.map.channel),aoMapUv:$&&w(C.aoMap.channel),lightMapUv:Pt&&w(C.lightMap.channel),bumpMapUv:We&&w(C.bumpMap.channel),normalMapUv:nt&&w(C.normalMap.channel),displacementMapUv:Ze&&w(C.displacementMap.channel),emissiveMapUv:vt&&w(C.emissiveMap.channel),metalnessMapUv:Ge&&w(C.metalnessMap.channel),roughnessMapUv:je&&w(C.roughnessMap.channel),anisotropyMapUv:re&&w(C.anisotropyMap.channel),clearcoatMapUv:ye&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:_e&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:we&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:le&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&w(C.sheenRoughnessMap.channel),specularMapUv:Xe&&w(C.specularMap.channel),specularColorMapUv:$e&&w(C.specularColorMap.channel),specularIntensityMapUv:ke&&w(C.specularIntensityMap.channel),transmissionMapUv:De&&w(C.transmissionMap.channel),thicknessMapUv:st&&w(C.thicknessMap.channel),alphaMapUv:H&&w(C.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(nt||Oe),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:dt,vertexUv3s:St,pointsUvs:Y.isPoints===!0&&!!ie.attributes.uv&&(Ve||H),fog:!!te,useFog:C.fog===!0,fogExp2:te&&te.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:Y.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:O,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&de.length>0,shadowMapType:s.shadowMap.type,toneMapping:C.toneMapped?s.toneMapping:Di,useLegacyLights:s.useLegacyLights,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Li,flipSided:C.side===En,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:Se&&C.extensions.derivatives===!0,extensionFragDepth:Se&&C.extensions.fragDepth===!0,extensionDrawBuffers:Se&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&C.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:g||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||r.has("EXT_shader_texture_lod"),customProgramCacheKey:C.customProgramCacheKey()}}function y(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const de in C.defines)D.push(de),D.push(C.defines[de]);return C.isRawShaderMaterial===!1&&(I(D,C),P(D,C),D.push(s.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function I(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function P(C,D){h.disableAll(),D.isWebGL2&&h.enable(0),D.supportsVertexTextures&&h.enable(1),D.instancing&&h.enable(2),D.instancingColor&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),C.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.skinning&&h.enable(4),D.morphTargets&&h.enable(5),D.morphNormals&&h.enable(6),D.morphColors&&h.enable(7),D.premultipliedAlpha&&h.enable(8),D.shadowMapEnabled&&h.enable(9),D.useLegacyLights&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),C.push(h.mask)}function L(C){const D=E[C.type];let de;if(D){const fe=hi[D];de=Nv.clone(fe.uniforms)}else de=C.uniforms;return de}function F(C,D){let de;for(let fe=0,Y=p.length;fe<Y;fe++){const te=p[fe];if(te.cacheKey===D){de=te,++de.usedTimes;break}}return de===void 0&&(de=new VS(s,D,C,u),p.push(de)),de}function z(C){if(--C.usedTimes===0){const D=p.indexOf(C);p[D]=p[p.length-1],p.pop(),C.destroy()}}function k(C){f.remove(C)}function se(){f.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:L,acquireProgram:F,releaseProgram:z,releaseShaderCache:k,programs:p,dispose:se}}function qS(){let s=new WeakMap;function e(u){let c=s.get(u);return c===void 0&&(c={},s.set(u,c)),c}function t(u){s.delete(u)}function r(u,c,h){s.get(u)[c]=h}function o(){s=new WeakMap}return{get:e,remove:t,update:r,dispose:o}}function YS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Op(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function kp(){const s=[];let e=0;const t=[],r=[],o=[];function u(){e=0,t.length=0,r.length=0,o.length=0}function c(v,_,S,E,w,x){let y=s[e];return y===void 0?(y={id:v.id,object:v,geometry:_,material:S,groupOrder:E,renderOrder:v.renderOrder,z:w,group:x},s[e]=y):(y.id=v.id,y.object=v,y.geometry=_,y.material=S,y.groupOrder=E,y.renderOrder=v.renderOrder,y.z=w,y.group=x),e++,y}function h(v,_,S,E,w,x){const y=c(v,_,S,E,w,x);S.transmission>0?r.push(y):S.transparent===!0?o.push(y):t.push(y)}function f(v,_,S,E,w,x){const y=c(v,_,S,E,w,x);S.transmission>0?r.unshift(y):S.transparent===!0?o.unshift(y):t.unshift(y)}function p(v,_){t.length>1&&t.sort(v||YS),r.length>1&&r.sort(_||Op),o.length>1&&o.sort(_||Op)}function g(){for(let v=e,_=s.length;v<_;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:u,push:h,unshift:f,finish:g,sort:p}}function $S(){let s=new WeakMap;function e(r,o){const u=s.get(r);let c;return u===void 0?(c=new kp,s.set(r,[c])):o>=u.length?(c=new kp,u.push(c)):c=u[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function KS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new Rt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return s[e.id]=t,t}}}function QS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ZS=0;function JS(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function eM(s,e){const t=new KS,r=QS(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let g=0;g<9;g++)o.probe.push(new ne);const u=new ne,c=new rn,h=new rn;function f(g,v){let _=0,S=0,E=0;for(let de=0;de<9;de++)o.probe[de].set(0,0,0);let w=0,x=0,y=0,I=0,P=0,L=0,F=0,z=0,k=0,se=0;g.sort(JS);const C=v===!0?Math.PI:1;for(let de=0,fe=g.length;de<fe;de++){const Y=g[de],te=Y.color,ie=Y.intensity,ce=Y.distance,Z=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)_+=te.r*ie*C,S+=te.g*ie*C,E+=te.b*ie*C;else if(Y.isLightProbe)for(let G=0;G<9;G++)o.probe[G].addScaledVector(Y.sh.coefficients[G],ie);else if(Y.isDirectionalLight){const G=t.get(Y);if(G.color.copy(Y.color).multiplyScalar(Y.intensity*C),Y.castShadow){const J=Y.shadow,W=r.get(Y);W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,o.directionalShadow[w]=W,o.directionalShadowMap[w]=Z,o.directionalShadowMatrix[w]=Y.shadow.matrix,L++}o.directional[w]=G,w++}else if(Y.isSpotLight){const G=t.get(Y);G.position.setFromMatrixPosition(Y.matrixWorld),G.color.copy(te).multiplyScalar(ie*C),G.distance=ce,G.coneCos=Math.cos(Y.angle),G.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),G.decay=Y.decay,o.spot[y]=G;const J=Y.shadow;if(Y.map&&(o.spotLightMap[k]=Y.map,k++,J.updateMatrices(Y),Y.castShadow&&se++),o.spotLightMatrix[y]=J.matrix,Y.castShadow){const W=r.get(Y);W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,o.spotShadow[y]=W,o.spotShadowMap[y]=Z,z++}y++}else if(Y.isRectAreaLight){const G=t.get(Y);G.color.copy(te).multiplyScalar(ie),G.halfWidth.set(Y.width*.5,0,0),G.halfHeight.set(0,Y.height*.5,0),o.rectArea[I]=G,I++}else if(Y.isPointLight){const G=t.get(Y);if(G.color.copy(Y.color).multiplyScalar(Y.intensity*C),G.distance=Y.distance,G.decay=Y.decay,Y.castShadow){const J=Y.shadow,W=r.get(Y);W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,W.shadowCameraNear=J.camera.near,W.shadowCameraFar=J.camera.far,o.pointShadow[x]=W,o.pointShadowMap[x]=Z,o.pointShadowMatrix[x]=Y.shadow.matrix,F++}o.point[x]=G,x++}else if(Y.isHemisphereLight){const G=t.get(Y);G.skyColor.copy(Y.color).multiplyScalar(ie*C),G.groundColor.copy(Y.groundColor).multiplyScalar(ie*C),o.hemi[P]=G,P++}}I>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Re.LTC_FLOAT_1,o.rectAreaLTC2=Re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Re.LTC_HALF_1,o.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=_,o.ambient[1]=S,o.ambient[2]=E;const D=o.hash;(D.directionalLength!==w||D.pointLength!==x||D.spotLength!==y||D.rectAreaLength!==I||D.hemiLength!==P||D.numDirectionalShadows!==L||D.numPointShadows!==F||D.numSpotShadows!==z||D.numSpotMaps!==k)&&(o.directional.length=w,o.spot.length=y,o.rectArea.length=I,o.point.length=x,o.hemi.length=P,o.directionalShadow.length=L,o.directionalShadowMap.length=L,o.pointShadow.length=F,o.pointShadowMap.length=F,o.spotShadow.length=z,o.spotShadowMap.length=z,o.directionalShadowMatrix.length=L,o.pointShadowMatrix.length=F,o.spotLightMatrix.length=z+k-se,o.spotLightMap.length=k,o.numSpotLightShadowsWithMaps=se,D.directionalLength=w,D.pointLength=x,D.spotLength=y,D.rectAreaLength=I,D.hemiLength=P,D.numDirectionalShadows=L,D.numPointShadows=F,D.numSpotShadows=z,D.numSpotMaps=k,o.version=ZS++)}function p(g,v){let _=0,S=0,E=0,w=0,x=0;const y=v.matrixWorldInverse;for(let I=0,P=g.length;I<P;I++){const L=g[I];if(L.isDirectionalLight){const F=o.directional[_];F.direction.setFromMatrixPosition(L.matrixWorld),u.setFromMatrixPosition(L.target.matrixWorld),F.direction.sub(u),F.direction.transformDirection(y),_++}else if(L.isSpotLight){const F=o.spot[E];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(y),F.direction.setFromMatrixPosition(L.matrixWorld),u.setFromMatrixPosition(L.target.matrixWorld),F.direction.sub(u),F.direction.transformDirection(y),E++}else if(L.isRectAreaLight){const F=o.rectArea[w];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(y),h.identity(),c.copy(L.matrixWorld),c.premultiply(y),h.extractRotation(c),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),F.halfWidth.applyMatrix4(h),F.halfHeight.applyMatrix4(h),w++}else if(L.isPointLight){const F=o.point[S];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(y),S++}else if(L.isHemisphereLight){const F=o.hemi[x];F.direction.setFromMatrixPosition(L.matrixWorld),F.direction.transformDirection(y),x++}}}return{setup:f,setupView:p,state:o}}function Bp(s,e){const t=new eM(s,e),r=[],o=[];function u(){r.length=0,o.length=0}function c(v){r.push(v)}function h(v){o.push(v)}function f(v){t.setup(r,v)}function p(v){t.setupView(r,v)}return{init:u,state:{lightsArray:r,shadowsArray:o,lights:t},setupLights:f,setupLightsView:p,pushLight:c,pushShadow:h}}function tM(s,e){let t=new WeakMap;function r(u,c=0){const h=t.get(u);let f;return h===void 0?(f=new Bp(s,e),t.set(u,[f])):c>=h.length?(f=new Bp(s,e),h.push(f)):f=h[c],f}function o(){t=new WeakMap}return{get:r,dispose:o}}class nM extends al{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Q0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iM extends al{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sM=`uniform sampler2D shadow_pass;
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
}`;function aM(s,e,t){let r=new fm;const o=new xt,u=new xt,c=new nn,h=new nM({depthPacking:Z0}),f=new iM,p={},g=t.maxTextureSize,v={[ur]:En,[En]:ur,[Li]:Li},_=new Or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:rM,fragmentShader:sM}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new kr;E.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ui(E,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gp;let y=this.type;this.render=function(F,z,k){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const se=s.getRenderTarget(),C=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),de=s.state;de.setBlending(or),de.buffers.color.setClear(1,1,1,1),de.buffers.depth.setTest(!0),de.setScissorTest(!1);const fe=y!==Pi&&this.type===Pi,Y=y===Pi&&this.type!==Pi;for(let te=0,ie=F.length;te<ie;te++){const ce=F[te],Z=ce.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;o.copy(Z.mapSize);const G=Z.getFrameExtents();if(o.multiply(G),u.copy(Z.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(u.x=Math.floor(g/G.x),o.x=u.x*G.x,Z.mapSize.x=u.x),o.y>g&&(u.y=Math.floor(g/G.y),o.y=u.y*G.y,Z.mapSize.y=u.y)),Z.map===null||fe===!0||Y===!0){const W=this.type!==Pi?{minFilter:Xt,magFilter:Xt}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Fr(o.x,o.y,W),Z.map.texture.name=ce.name+".shadowMap",Z.camera.updateProjectionMatrix()}s.setRenderTarget(Z.map),s.clear();const J=Z.getViewportCount();for(let W=0;W<J;W++){const T=Z.getViewport(W);c.set(u.x*T.x,u.y*T.y,u.x*T.z,u.y*T.w),de.viewport(c),Z.updateMatrices(ce,W),r=Z.getFrustum(),L(z,k,Z.camera,ce,this.type)}Z.isPointLightShadow!==!0&&this.type===Pi&&I(Z,k),Z.needsUpdate=!1}y=this.type,x.needsUpdate=!1,s.setRenderTarget(se,C,D)};function I(F,z){const k=e.update(w);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Fr(o.x,o.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(z,null,k,_,w,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(z,null,k,S,w,null)}function P(F,z,k,se){let C=null;const D=k.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(D!==void 0)C=D;else if(C=k.isPointLight===!0?f:h,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const de=C.uuid,fe=z.uuid;let Y=p[de];Y===void 0&&(Y={},p[de]=Y);let te=Y[fe];te===void 0&&(te=C.clone(),Y[fe]=te),C=te}if(C.visible=z.visible,C.wireframe=z.wireframe,se===Pi?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:v[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const de=s.properties.get(C);de.light=k}return C}function L(F,z,k,se,C){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===Pi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,F.matrixWorld);const fe=e.update(F),Y=F.material;if(Array.isArray(Y)){const te=fe.groups;for(let ie=0,ce=te.length;ie<ce;ie++){const Z=te[ie],G=Y[Z.materialIndex];if(G&&G.visible){const J=P(F,G,se,C);s.renderBufferDirect(k,null,fe,J,F,Z)}}}else if(Y.visible){const te=P(F,Y,se,C);s.renderBufferDirect(k,null,fe,te,F,null)}}const de=F.children;for(let fe=0,Y=de.length;fe<Y;fe++)L(de[fe],z,k,se,C)}}function oM(s,e,t){const r=t.isWebGL2;function o(){let H=!1;const Ae=new nn;let ee=null;const Se=new nn(0,0,0,0);return{setMask:function(Ce){ee!==Ce&&!H&&(s.colorMask(Ce,Ce,Ce,Ce),ee=Ce)},setLocked:function(Ce){H=Ce},setClear:function(Ce,dt,St,Ft,wn){wn===!0&&(Ce*=Ft,dt*=Ft,St*=Ft),Ae.set(Ce,dt,St,Ft),Se.equals(Ae)===!1&&(s.clearColor(Ce,dt,St,Ft),Se.copy(Ae))},reset:function(){H=!1,ee=null,Se.set(-1,0,0,0)}}}function u(){let H=!1,Ae=null,ee=null,Se=null;return{setTest:function(Ce){Ce?Le(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(Ce){Ae!==Ce&&!H&&(s.depthMask(Ce),Ae=Ce)},setFunc:function(Ce){if(ee!==Ce){switch(Ce){case R0:s.depthFunc(s.NEVER);break;case C0:s.depthFunc(s.ALWAYS);break;case b0:s.depthFunc(s.LESS);break;case Rc:s.depthFunc(s.LEQUAL);break;case P0:s.depthFunc(s.EQUAL);break;case L0:s.depthFunc(s.GEQUAL);break;case N0:s.depthFunc(s.GREATER);break;case U0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ee=Ce}},setLocked:function(Ce){H=Ce},setClear:function(Ce){Se!==Ce&&(s.clearDepth(Ce),Se=Ce)},reset:function(){H=!1,Ae=null,ee=null,Se=null}}}function c(){let H=!1,Ae=null,ee=null,Se=null,Ce=null,dt=null,St=null,Ft=null,wn=null;return{setTest:function(Mt){H||(Mt?Le(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(Mt){Ae!==Mt&&!H&&(s.stencilMask(Mt),Ae=Mt)},setFunc:function(Mt,An,Ot){(ee!==Mt||Se!==An||Ce!==Ot)&&(s.stencilFunc(Mt,An,Ot),ee=Mt,Se=An,Ce=Ot)},setOp:function(Mt,An,Ot){(dt!==Mt||St!==An||Ft!==Ot)&&(s.stencilOp(Mt,An,Ot),dt=Mt,St=An,Ft=Ot)},setLocked:function(Mt){H=Mt},setClear:function(Mt){wn!==Mt&&(s.clearStencil(Mt),wn=Mt)},reset:function(){H=!1,Ae=null,ee=null,Se=null,Ce=null,dt=null,St=null,Ft=null,wn=null}}}const h=new o,f=new u,p=new c,g=new WeakMap,v=new WeakMap;let _={},S={},E=new WeakMap,w=[],x=null,y=!1,I=null,P=null,L=null,F=null,z=null,k=null,se=null,C=!1,D=null,de=null,fe=null,Y=null,te=null;const ie=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,Z=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),ce=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),ce=Z>=2);let J=null,W={};const T=s.getParameter(s.SCISSOR_BOX),O=s.getParameter(s.VIEWPORT),ue=new nn().fromArray(T),he=new nn().fromArray(O);function me(H,Ae,ee,Se){const Ce=new Uint8Array(4),dt=s.createTexture();s.bindTexture(H,dt),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let St=0;St<ee;St++)r&&(H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY)?s.texImage3D(Ae,0,s.RGBA,1,1,Se,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(Ae+St,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return dt}const Me={};Me[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Me[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),h.setClear(0,0,0,1),f.setClear(1),p.setClear(0),Le(s.DEPTH_TEST),f.setFunc(Rc),Ze(!1),vt(Tf),Le(s.CULL_FACE),We(or);function Le(H){_[H]!==!0&&(s.enable(H),_[H]=!0)}function Te(H){_[H]!==!1&&(s.disable(H),_[H]=!1)}function Ve(H,Ae){return S[H]!==Ae?(s.bindFramebuffer(H,Ae),S[H]=Ae,r&&(H===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=Ae),H===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=Ae)),!0):!1}function mt(H,Ae){let ee=w,Se=!1;if(H)if(ee=E.get(Ae),ee===void 0&&(ee=[],E.set(Ae,ee)),H.isWebGLMultipleRenderTargets){const Ce=H.texture;if(ee.length!==Ce.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,St=Ce.length;dt<St;dt++)ee[dt]=s.COLOR_ATTACHMENT0+dt;ee.length=Ce.length,Se=!0}}else ee[0]!==s.COLOR_ATTACHMENT0&&(ee[0]=s.COLOR_ATTACHMENT0,Se=!0);else ee[0]!==s.BACK&&(ee[0]=s.BACK,Se=!0);Se&&(t.isWebGL2?s.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function it(H){return x!==H?(s.useProgram(H),x=H,!0):!1}const $={[As]:s.FUNC_ADD,[g0]:s.FUNC_SUBTRACT,[v0]:s.FUNC_REVERSE_SUBTRACT};if(r)$[Cf]=s.MIN,$[bf]=s.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&($[Cf]=H.MIN_EXT,$[bf]=H.MAX_EXT)}const Pt={[_0]:s.ZERO,[y0]:s.ONE,[x0]:s.SRC_COLOR,[Wp]:s.SRC_ALPHA,[A0]:s.SRC_ALPHA_SATURATE,[T0]:s.DST_COLOR,[M0]:s.DST_ALPHA,[S0]:s.ONE_MINUS_SRC_COLOR,[jp]:s.ONE_MINUS_SRC_ALPHA,[w0]:s.ONE_MINUS_DST_COLOR,[E0]:s.ONE_MINUS_DST_ALPHA};function We(H,Ae,ee,Se,Ce,dt,St,Ft){if(H===or){y===!0&&(Te(s.BLEND),y=!1);return}if(y===!1&&(Le(s.BLEND),y=!0),H!==m0){if(H!==I||Ft!==C){if((P!==As||z!==As)&&(s.blendEquation(s.FUNC_ADD),P=As,z=As),Ft)switch(H){case Cs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wf:s.blendFunc(s.ONE,s.ONE);break;case Af:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rf:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wf:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Af:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rf:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}L=null,F=null,k=null,se=null,I=H,C=Ft}return}Ce=Ce||Ae,dt=dt||ee,St=St||Se,(Ae!==P||Ce!==z)&&(s.blendEquationSeparate($[Ae],$[Ce]),P=Ae,z=Ce),(ee!==L||Se!==F||dt!==k||St!==se)&&(s.blendFuncSeparate(Pt[ee],Pt[Se],Pt[dt],Pt[St]),L=ee,F=Se,k=dt,se=St),I=H,C=!1}function nt(H,Ae){H.side===Li?Te(s.CULL_FACE):Le(s.CULL_FACE);let ee=H.side===En;Ae&&(ee=!ee),Ze(ee),H.blending===Cs&&H.transparent===!1?We(or):We(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),f.setFunc(H.depthFunc),f.setTest(H.depthTest),f.setMask(H.depthWrite),h.setMask(H.colorWrite);const Se=H.stencilWrite;p.setTest(Se),Se&&(p.setMask(H.stencilWriteMask),p.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),p.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),je(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Le(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(H){D!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),D=H)}function vt(H){H!==d0?(Le(s.CULL_FACE),H!==de&&(H===Tf?s.cullFace(s.BACK):H===f0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),de=H}function Ge(H){H!==fe&&(ce&&s.lineWidth(H),fe=H)}function je(H,Ae,ee){H?(Le(s.POLYGON_OFFSET_FILL),(Y!==Ae||te!==ee)&&(s.polygonOffset(Ae,ee),Y=Ae,te=ee)):Te(s.POLYGON_OFFSET_FILL)}function Oe(H){H?Le(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function yt(H){H===void 0&&(H=s.TEXTURE0+ie-1),J!==H&&(s.activeTexture(H),J=H)}function Lt(H,Ae,ee){ee===void 0&&(J===null?ee=s.TEXTURE0+ie-1:ee=J);let Se=W[ee];Se===void 0&&(Se={type:void 0,texture:void 0},W[ee]=Se),(Se.type!==H||Se.texture!==Ae)&&(J!==ee&&(s.activeTexture(ee),J=ee),s.bindTexture(H,Ae||Me[H]),Se.type=H,Se.texture=Ae)}function N(){const H=W[J];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function A(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function re(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function He(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ye(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xe(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $e(H){ue.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),ue.copy(H))}function ke(H){he.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),he.copy(H))}function De(H,Ae){let ee=v.get(Ae);ee===void 0&&(ee=new WeakMap,v.set(Ae,ee));let Se=ee.get(H);Se===void 0&&(Se=s.getUniformBlockIndex(Ae,H.name),ee.set(H,Se))}function st(H,Ae){const Se=v.get(Ae).get(H);g.get(Ae)!==Se&&(s.uniformBlockBinding(Ae,Se,H.__bindingPointIndex),g.set(Ae,Se))}function gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),r===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},J=null,W={},S={},E=new WeakMap,w=[],x=null,y=!1,I=null,P=null,L=null,F=null,z=null,k=null,se=null,C=!1,D=null,de=null,fe=null,Y=null,te=null,ue.set(0,0,s.canvas.width,s.canvas.height),he.set(0,0,s.canvas.width,s.canvas.height),h.reset(),f.reset(),p.reset()}return{buffers:{color:h,depth:f,stencil:p},enable:Le,disable:Te,bindFramebuffer:Ve,drawBuffers:mt,useProgram:it,setBlending:We,setMaterial:nt,setFlipSided:Ze,setCullFace:vt,setLineWidth:Ge,setPolygonOffset:je,setScissorTest:Oe,activeTexture:yt,bindTexture:Lt,unbindTexture:N,compressedTexImage2D:A,compressedTexImage3D:re,texImage2D:Ye,texImage3D:Xe,updateUBOMapping:De,uniformBlockBinding:st,texStorage2D:we,texStorage3D:le,texSubImage2D:ye,texSubImage3D:_e,compressedTexSubImage2D:Ee,compressedTexSubImage3D:He,scissor:$e,viewport:ke,reset:gt}}function lM(s,e,t,r,o,u,c){const h=o.isWebGL2,f=o.maxTextures,p=o.maxCubemapSize,g=o.maxTextureSize,v=o.maxSamples,_=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let w;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(N,A){return y?new OffscreenCanvas(N,A):il("canvas")}function P(N,A,re,ye){let _e=1;if((N.width>ye||N.height>ye)&&(_e=ye/Math.max(N.width,N.height)),_e<1||A===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const Ee=A?Dc:Math.floor,He=Ee(_e*N.width),we=Ee(_e*N.height);w===void 0&&(w=I(He,we));const le=re?I(He,we):w;return le.width=He,le.height=we,le.getContext("2d").drawImage(N,0,0,He,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+He+"x"+we+")."),le}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function L(N){return np(N.width)&&np(N.height)}function F(N){return h?!1:N.wrapS!==ri||N.wrapT!==ri||N.minFilter!==Xt&&N.minFilter!==Gn}function z(N,A){return N.generateMipmaps&&A&&N.minFilter!==Xt&&N.minFilter!==Gn}function k(N){s.generateMipmap(N)}function se(N,A,re,ye,_e=!1){if(h===!1)return A;if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Ee=A;return A===s.RED&&(re===s.FLOAT&&(Ee=s.R32F),re===s.HALF_FLOAT&&(Ee=s.R16F),re===s.UNSIGNED_BYTE&&(Ee=s.R8)),A===s.RG&&(re===s.FLOAT&&(Ee=s.RG32F),re===s.HALF_FLOAT&&(Ee=s.RG16F),re===s.UNSIGNED_BYTE&&(Ee=s.RG8)),A===s.RGBA&&(re===s.FLOAT&&(Ee=s.RGBA32F),re===s.HALF_FLOAT&&(Ee=s.RGBA16F),re===s.UNSIGNED_BYTE&&(Ee=ye===ot&&_e===!1?s.SRGB8_ALPHA8:s.RGBA8),re===s.UNSIGNED_SHORT_4_4_4_4&&(Ee=s.RGBA4),re===s.UNSIGNED_SHORT_5_5_5_1&&(Ee=s.RGB5_A1)),(Ee===s.R16F||Ee===s.R32F||Ee===s.RG16F||Ee===s.RG32F||Ee===s.RGBA16F||Ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Ee}function C(N,A,re){return z(N,re)===!0||N.isFramebufferTexture&&N.minFilter!==Xt&&N.minFilter!==Gn?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function D(N){return N===Xt||N===Pf||N===Qu?s.NEAREST:s.LINEAR}function de(N){const A=N.target;A.removeEventListener("dispose",de),Y(A),A.isVideoTexture&&E.delete(A)}function fe(N){const A=N.target;A.removeEventListener("dispose",fe),ie(A)}function Y(N){const A=r.get(N);if(A.__webglInit===void 0)return;const re=N.source,ye=x.get(re);if(ye){const _e=ye[A.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&te(N),Object.keys(ye).length===0&&x.delete(re)}r.remove(N)}function te(N){const A=r.get(N);s.deleteTexture(A.__webglTexture);const re=N.source,ye=x.get(re);delete ye[A.__cacheKey],c.memory.textures--}function ie(N){const A=N.texture,re=r.get(N),ye=r.get(A);if(ye.__webglTexture!==void 0&&(s.deleteTexture(ye.__webglTexture),c.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++)s.deleteFramebuffer(re.__webglFramebuffer[_e]),re.__webglDepthbuffer&&s.deleteRenderbuffer(re.__webglDepthbuffer[_e]);else{if(s.deleteFramebuffer(re.__webglFramebuffer),re.__webglDepthbuffer&&s.deleteRenderbuffer(re.__webglDepthbuffer),re.__webglMultisampledFramebuffer&&s.deleteFramebuffer(re.__webglMultisampledFramebuffer),re.__webglColorRenderbuffer)for(let _e=0;_e<re.__webglColorRenderbuffer.length;_e++)re.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(re.__webglColorRenderbuffer[_e]);re.__webglDepthRenderbuffer&&s.deleteRenderbuffer(re.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let _e=0,Ee=A.length;_e<Ee;_e++){const He=r.get(A[_e]);He.__webglTexture&&(s.deleteTexture(He.__webglTexture),c.memory.textures--),r.remove(A[_e])}r.remove(A),r.remove(N)}let ce=0;function Z(){ce=0}function G(){const N=ce;return N>=f&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+f),ce+=1,N}function J(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function W(N,A){const re=r.get(N);if(N.isVideoTexture&&yt(N),N.isRenderTargetTexture===!1&&N.version>0&&re.__version!==N.version){const ye=N.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(re,N,A);return}}t.bindTexture(s.TEXTURE_2D,re.__webglTexture,s.TEXTURE0+A)}function T(N,A){const re=r.get(N);if(N.version>0&&re.__version!==N.version){Ve(re,N,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,re.__webglTexture,s.TEXTURE0+A)}function O(N,A){const re=r.get(N);if(N.version>0&&re.__version!==N.version){Ve(re,N,A);return}t.bindTexture(s.TEXTURE_3D,re.__webglTexture,s.TEXTURE0+A)}function ue(N,A){const re=r.get(N);if(N.version>0&&re.__version!==N.version){mt(re,N,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture,s.TEXTURE0+A)}const he={[Pc]:s.REPEAT,[ri]:s.CLAMP_TO_EDGE,[Lc]:s.MIRRORED_REPEAT},me={[Xt]:s.NEAREST,[Pf]:s.NEAREST_MIPMAP_NEAREST,[Qu]:s.NEAREST_MIPMAP_LINEAR,[Gn]:s.LINEAR,[H0]:s.LINEAR_MIPMAP_NEAREST,[Ea]:s.LINEAR_MIPMAP_LINEAR},Me={[nv]:s.NEVER,[uv]:s.ALWAYS,[iv]:s.LESS,[sv]:s.LEQUAL,[rv]:s.EQUAL,[lv]:s.GEQUAL,[av]:s.GREATER,[ov]:s.NOTEQUAL};function Le(N,A,re){if(re?(s.texParameteri(N,s.TEXTURE_WRAP_S,he[A.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,he[A.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,he[A.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,me[A.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,me[A.minFilter])):(s.texParameteri(N,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(N,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==ri||A.wrapT!==ri)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(N,s.TEXTURE_MAG_FILTER,D(A.magFilter)),s.texParameteri(N,s.TEXTURE_MIN_FILTER,D(A.minFilter)),A.minFilter!==Xt&&A.minFilter!==Gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,Me[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ye=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Xt||A.minFilter!==Qu&&A.minFilter!==Ea||A.type===ar&&e.has("OES_texture_float_linear")===!1||h===!1&&A.type===Ta&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||r.get(A).__currentAnisotropy)&&(s.texParameterf(N,ye.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy)}}function Te(N,A){let re=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",de));const ye=A.source;let _e=x.get(ye);_e===void 0&&(_e={},x.set(ye,_e));const Ee=J(A);if(Ee!==N.__cacheKey){_e[Ee]===void 0&&(_e[Ee]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,re=!0),_e[Ee].usedTimes++;const He=_e[N.__cacheKey];He!==void 0&&(_e[N.__cacheKey].usedTimes--,He.usedTimes===0&&te(A)),N.__cacheKey=Ee,N.__webglTexture=_e[Ee].texture}return re}function Ve(N,A,re){let ye=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ye=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ye=s.TEXTURE_3D);const _e=Te(N,A),Ee=A.source;t.bindTexture(ye,N.__webglTexture,s.TEXTURE0+re);const He=r.get(Ee);if(Ee.version!==He.__version||_e===!0){t.activeTexture(s.TEXTURE0+re),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const we=F(A)&&L(A.image)===!1;let le=P(A.image,we,!1,g);le=Lt(A,le);const Ye=L(le)||h,Xe=u.convert(A.format,A.colorSpace);let $e=u.convert(A.type),ke=se(A.internalFormat,Xe,$e,A.colorSpace);Le(ye,A,Ye);let De;const st=A.mipmaps,gt=h&&A.isVideoTexture!==!0,H=He.__version===void 0||_e===!0,Ae=C(A,le,Ye);if(A.isDepthTexture)ke=s.DEPTH_COMPONENT,h?A.type===ar?ke=s.DEPTH_COMPONENT32F:A.type===sr?ke=s.DEPTH_COMPONENT24:A.type===Lr?ke=s.DEPTH24_STENCIL8:ke=s.DEPTH_COMPONENT16:A.type===ar&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Nr&&ke===s.DEPTH_COMPONENT&&A.type!==Hc&&A.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=sr,$e=u.convert(A.type)),A.format===Ns&&ke===s.DEPTH_COMPONENT&&(ke=s.DEPTH_STENCIL,A.type!==Lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Lr,$e=u.convert(A.type))),H&&(gt?t.texStorage2D(s.TEXTURE_2D,1,ke,le.width,le.height):t.texImage2D(s.TEXTURE_2D,0,ke,le.width,le.height,0,Xe,$e,null));else if(A.isDataTexture)if(st.length>0&&Ye){gt&&H&&t.texStorage2D(s.TEXTURE_2D,Ae,ke,st[0].width,st[0].height);for(let ee=0,Se=st.length;ee<Se;ee++)De=st[ee],gt?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,De.width,De.height,Xe,$e,De.data):t.texImage2D(s.TEXTURE_2D,ee,ke,De.width,De.height,0,Xe,$e,De.data);A.generateMipmaps=!1}else gt?(H&&t.texStorage2D(s.TEXTURE_2D,Ae,ke,le.width,le.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,le.width,le.height,Xe,$e,le.data)):t.texImage2D(s.TEXTURE_2D,0,ke,le.width,le.height,0,Xe,$e,le.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){gt&&H&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,ke,st[0].width,st[0].height,le.depth);for(let ee=0,Se=st.length;ee<Se;ee++)De=st[ee],A.format!==Wn?Xe!==null?gt?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,De.width,De.height,le.depth,Xe,De.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,ke,De.width,De.height,le.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,De.width,De.height,le.depth,Xe,$e,De.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,ke,De.width,De.height,le.depth,0,Xe,$e,De.data)}else{gt&&H&&t.texStorage2D(s.TEXTURE_2D,Ae,ke,st[0].width,st[0].height);for(let ee=0,Se=st.length;ee<Se;ee++)De=st[ee],A.format!==Wn?Xe!==null?gt?t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,De.width,De.height,Xe,De.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,ke,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,De.width,De.height,Xe,$e,De.data):t.texImage2D(s.TEXTURE_2D,ee,ke,De.width,De.height,0,Xe,$e,De.data)}else if(A.isDataArrayTexture)gt?(H&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,ke,le.width,le.height,le.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Xe,$e,le.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,le.width,le.height,le.depth,0,Xe,$e,le.data);else if(A.isData3DTexture)gt?(H&&t.texStorage3D(s.TEXTURE_3D,Ae,ke,le.width,le.height,le.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Xe,$e,le.data)):t.texImage3D(s.TEXTURE_3D,0,ke,le.width,le.height,le.depth,0,Xe,$e,le.data);else if(A.isFramebufferTexture){if(H)if(gt)t.texStorage2D(s.TEXTURE_2D,Ae,ke,le.width,le.height);else{let ee=le.width,Se=le.height;for(let Ce=0;Ce<Ae;Ce++)t.texImage2D(s.TEXTURE_2D,Ce,ke,ee,Se,0,Xe,$e,null),ee>>=1,Se>>=1}}else if(st.length>0&&Ye){gt&&H&&t.texStorage2D(s.TEXTURE_2D,Ae,ke,st[0].width,st[0].height);for(let ee=0,Se=st.length;ee<Se;ee++)De=st[ee],gt?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,Xe,$e,De):t.texImage2D(s.TEXTURE_2D,ee,ke,Xe,$e,De);A.generateMipmaps=!1}else gt?(H&&t.texStorage2D(s.TEXTURE_2D,Ae,ke,le.width,le.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Xe,$e,le)):t.texImage2D(s.TEXTURE_2D,0,ke,Xe,$e,le);z(A,Ye)&&k(ye),He.__version=Ee.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function mt(N,A,re){if(A.image.length!==6)return;const ye=Te(N,A),_e=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+re);const Ee=r.get(_e);if(_e.version!==Ee.__version||ye===!0){t.activeTexture(s.TEXTURE0+re),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const He=A.isCompressedTexture||A.image[0].isCompressedTexture,we=A.image[0]&&A.image[0].isDataTexture,le=[];for(let ee=0;ee<6;ee++)!He&&!we?le[ee]=P(A.image[ee],!1,!0,p):le[ee]=we?A.image[ee].image:A.image[ee],le[ee]=Lt(A,le[ee]);const Ye=le[0],Xe=L(Ye)||h,$e=u.convert(A.format,A.colorSpace),ke=u.convert(A.type),De=se(A.internalFormat,$e,ke,A.colorSpace),st=h&&A.isVideoTexture!==!0,gt=Ee.__version===void 0||ye===!0;let H=C(A,Ye,Xe);Le(s.TEXTURE_CUBE_MAP,A,Xe);let Ae;if(He){st&&gt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,H,De,Ye.width,Ye.height);for(let ee=0;ee<6;ee++){Ae=le[ee].mipmaps;for(let Se=0;Se<Ae.length;Se++){const Ce=Ae[Se];A.format!==Wn?$e!==null?st?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se,0,0,Ce.width,Ce.height,$e,Ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se,De,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se,0,0,Ce.width,Ce.height,$e,ke,Ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se,De,Ce.width,Ce.height,0,$e,ke,Ce.data)}}}else{Ae=A.mipmaps,st&&gt&&(Ae.length>0&&H++,t.texStorage2D(s.TEXTURE_CUBE_MAP,H,De,le[0].width,le[0].height));for(let ee=0;ee<6;ee++)if(we){st?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,le[ee].width,le[ee].height,$e,ke,le[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,De,le[ee].width,le[ee].height,0,$e,ke,le[ee].data);for(let Se=0;Se<Ae.length;Se++){const dt=Ae[Se].image[ee].image;st?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se+1,0,0,dt.width,dt.height,$e,ke,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se+1,De,dt.width,dt.height,0,$e,ke,dt.data)}}else{st?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,$e,ke,le[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,De,$e,ke,le[ee]);for(let Se=0;Se<Ae.length;Se++){const Ce=Ae[Se];st?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se+1,0,0,$e,ke,Ce.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se+1,De,$e,ke,Ce.image[ee])}}}z(A,Xe)&&k(s.TEXTURE_CUBE_MAP),Ee.__version=_e.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function it(N,A,re,ye,_e){const Ee=u.convert(re.format,re.colorSpace),He=u.convert(re.type),we=se(re.internalFormat,Ee,He,re.colorSpace);r.get(A).__hasExternalTextures||(_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,0,we,A.width,A.height,A.depth,0,Ee,He,null):t.texImage2D(_e,0,we,A.width,A.height,0,Ee,He,null)),t.bindFramebuffer(s.FRAMEBUFFER,N),Oe(A)?_.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,_e,r.get(re).__webglTexture,0,je(A)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ye,_e,r.get(re).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function $(N,A,re){if(s.bindRenderbuffer(s.RENDERBUFFER,N),A.depthBuffer&&!A.stencilBuffer){let ye=s.DEPTH_COMPONENT16;if(re||Oe(A)){const _e=A.depthTexture;_e&&_e.isDepthTexture&&(_e.type===ar?ye=s.DEPTH_COMPONENT32F:_e.type===sr&&(ye=s.DEPTH_COMPONENT24));const Ee=je(A);Oe(A)?_.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,ye,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,ye,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,ye,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,N)}else if(A.depthBuffer&&A.stencilBuffer){const ye=je(A);re&&Oe(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,s.DEPTH24_STENCIL8,A.width,A.height):Oe(A)?_.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,N)}else{const ye=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let _e=0;_e<ye.length;_e++){const Ee=ye[_e],He=u.convert(Ee.format,Ee.colorSpace),we=u.convert(Ee.type),le=se(Ee.internalFormat,He,we,Ee.colorSpace),Ye=je(A);re&&Oe(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,le,A.width,A.height):Oe(A)?_.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,le,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,le,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),W(A.depthTexture,0);const ye=r.get(A.depthTexture).__webglTexture,_e=je(A);if(A.depthTexture.format===Nr)Oe(A)?_.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0);else if(A.depthTexture.format===Ns)Oe(A)?_.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function We(N){const A=r.get(N),re=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");Pt(A.__webglFramebuffer,N)}else if(re){A.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ye]),A.__webglDepthbuffer[ye]=s.createRenderbuffer(),$(A.__webglDepthbuffer[ye],N,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),$(A.__webglDepthbuffer,N,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(N,A,re){const ye=r.get(N);A!==void 0&&it(ye.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),re!==void 0&&We(N)}function Ze(N){const A=N.texture,re=r.get(N),ye=r.get(A);N.addEventListener("dispose",fe),N.isWebGLMultipleRenderTargets!==!0&&(ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture()),ye.__version=A.version,c.memory.textures++);const _e=N.isWebGLCubeRenderTarget===!0,Ee=N.isWebGLMultipleRenderTargets===!0,He=L(N)||h;if(_e){re.__webglFramebuffer=[];for(let we=0;we<6;we++)re.__webglFramebuffer[we]=s.createFramebuffer()}else{if(re.__webglFramebuffer=s.createFramebuffer(),Ee)if(o.drawBuffers){const we=N.texture;for(let le=0,Ye=we.length;le<Ye;le++){const Xe=r.get(we[le]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=s.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(h&&N.samples>0&&Oe(N)===!1){const we=Ee?A:[A];re.__webglMultisampledFramebuffer=s.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let le=0;le<we.length;le++){const Ye=we[le];re.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,re.__webglColorRenderbuffer[le]);const Xe=u.convert(Ye.format,Ye.colorSpace),$e=u.convert(Ye.type),ke=se(Ye.internalFormat,Xe,$e,Ye.colorSpace,N.isXRRenderTarget===!0),De=je(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,ke,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,re.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(re.__webglDepthRenderbuffer=s.createRenderbuffer(),$(re.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(_e){t.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),Le(s.TEXTURE_CUBE_MAP,A,He);for(let we=0;we<6;we++)it(re.__webglFramebuffer[we],N,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we);z(A,He)&&k(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){const we=N.texture;for(let le=0,Ye=we.length;le<Ye;le++){const Xe=we[le],$e=r.get(Xe);t.bindTexture(s.TEXTURE_2D,$e.__webglTexture),Le(s.TEXTURE_2D,Xe,He),it(re.__webglFramebuffer,N,Xe,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D),z(Xe,He)&&k(s.TEXTURE_2D)}t.unbindTexture()}else{let we=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(h?we=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(we,ye.__webglTexture),Le(we,A,He),it(re.__webglFramebuffer,N,A,s.COLOR_ATTACHMENT0,we),z(A,He)&&k(we),t.unbindTexture()}N.depthBuffer&&We(N)}function vt(N){const A=L(N)||h,re=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let ye=0,_e=re.length;ye<_e;ye++){const Ee=re[ye];if(z(Ee,A)){const He=N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,we=r.get(Ee).__webglTexture;t.bindTexture(He,we),k(He),t.unbindTexture()}}}function Ge(N){if(h&&N.samples>0&&Oe(N)===!1){const A=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],re=N.width,ye=N.height;let _e=s.COLOR_BUFFER_BIT;const Ee=[],He=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=r.get(N),le=N.isWebGLMultipleRenderTargets===!0;if(le)for(let Ye=0;Ye<A.length;Ye++)t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ye=0;Ye<A.length;Ye++){Ee.push(s.COLOR_ATTACHMENT0+Ye),N.depthBuffer&&Ee.push(He);const Xe=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;if(Xe===!1&&(N.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),le&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,we.__webglColorRenderbuffer[Ye]),Xe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[He]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[He])),le){const $e=r.get(A[Ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$e,0)}s.blitFramebuffer(0,0,re,ye,0,0,re,ye,_e,s.NEAREST),S&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ee)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let Ye=0;Ye<A.length;Ye++){t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,we.__webglColorRenderbuffer[Ye]);const Xe=r.get(A[Ye]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,Xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}}function je(N){return Math.min(v,N.samples)}function Oe(N){const A=r.get(N);return h&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function yt(N){const A=c.render.frame;E.get(N)!==A&&(E.set(N,A),N.update())}function Lt(N,A){const re=N.colorSpace,ye=N.format,_e=N.type;return N.isCompressedTexture===!0||N.format===Nc||re!==fi&&re!==Dr&&(re===ot?h===!1?e.has("EXT_sRGB")===!0&&ye===Wn?(N.format=Nc,N.minFilter=Gn,N.generateMipmaps=!1):A=im.sRGBToLinear(A):(ye!==Wn||_e!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),A}this.allocateTextureUnit=G,this.resetTextureUnits=Z,this.setTexture2D=W,this.setTexture2DArray=T,this.setTexture3D=O,this.setTextureCube=ue,this.rebindTextures=nt,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=it,this.useMultisampledRTT=Oe}function uM(s,e,t){const r=t.isWebGL2;function o(u,c=Dr){let h;if(u===lr)return s.UNSIGNED_BYTE;if(u===$p)return s.UNSIGNED_SHORT_4_4_4_4;if(u===Kp)return s.UNSIGNED_SHORT_5_5_5_1;if(u===V0)return s.BYTE;if(u===G0)return s.SHORT;if(u===Hc)return s.UNSIGNED_SHORT;if(u===Yp)return s.INT;if(u===sr)return s.UNSIGNED_INT;if(u===ar)return s.FLOAT;if(u===Ta)return r?s.HALF_FLOAT:(h=e.get("OES_texture_half_float"),h!==null?h.HALF_FLOAT_OES:null);if(u===W0)return s.ALPHA;if(u===Wn)return s.RGBA;if(u===j0)return s.LUMINANCE;if(u===X0)return s.LUMINANCE_ALPHA;if(u===Nr)return s.DEPTH_COMPONENT;if(u===Ns)return s.DEPTH_STENCIL;if(u===Nc)return h=e.get("EXT_sRGB"),h!==null?h.SRGB_ALPHA_EXT:null;if(u===q0)return s.RED;if(u===Qp)return s.RED_INTEGER;if(u===Y0)return s.RG;if(u===Zp)return s.RG_INTEGER;if(u===Jp)return s.RGBA_INTEGER;if(u===Zu||u===Ju||u===ec||u===tc)if(c===ot)if(h=e.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(u===Zu)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===Ju)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===ec)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===tc)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=e.get("WEBGL_compressed_texture_s3tc"),h!==null){if(u===Zu)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===Ju)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===ec)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===tc)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===Lf||u===Nf||u===Uf||u===Df)if(h=e.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(u===Lf)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===Nf)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===Uf)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===Df)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===$0)return h=e.get("WEBGL_compressed_texture_etc1"),h!==null?h.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===If||u===Ff)if(h=e.get("WEBGL_compressed_texture_etc"),h!==null){if(u===If)return c===ot?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(u===Ff)return c===ot?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===Of||u===kf||u===Bf||u===zf||u===Hf||u===Vf||u===Gf||u===Wf||u===jf||u===Xf||u===qf||u===Yf||u===$f||u===Kf)if(h=e.get("WEBGL_compressed_texture_astc"),h!==null){if(u===Of)return c===ot?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===kf)return c===ot?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===Bf)return c===ot?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===zf)return c===ot?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===Hf)return c===ot?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===Vf)return c===ot?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===Gf)return c===ot?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===Wf)return c===ot?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===jf)return c===ot?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===Xf)return c===ot?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===qf)return c===ot?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===Yf)return c===ot?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===$f)return c===ot?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===Kf)return c===ot?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===nc)if(h=e.get("EXT_texture_compression_bptc"),h!==null){if(u===nc)return c===ot?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(u===K0||u===Qf||u===Zf||u===Jf)if(h=e.get("EXT_texture_compression_rgtc"),h!==null){if(u===nc)return h.COMPRESSED_RED_RGTC1_EXT;if(u===Qf)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===Zf)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===Jf)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===Lr?r?s.UNSIGNED_INT_24_8:(h=e.get("WEBGL_depth_texture"),h!==null?h.UNSIGNED_INT_24_8_WEBGL:null):s[u]!==void 0?s[u]:null}return{convert:o}}class cM extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class el extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hM={type:"move"};class Ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new el,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new el,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new el,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,u=null,c=null;const h=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const w of e.hand.values()){const x=t.getJointPose(w,r),y=this._getHandJoint(p,w);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&_>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(u=t.getPose(e.gripSpace,r),u!==null&&(f.matrix.fromArray(u.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,u.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(u.linearVelocity)):f.hasLinearVelocity=!1,u.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(u.angularVelocity)):f.hasAngularVelocity=!1));h!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&u!==null&&(o=u),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(hM)))}return h!==null&&(h.visible=o!==null),f!==null&&(f.visible=u!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new el;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class dM extends Tn{constructor(e,t,r,o,u,c,h,f,p,g){if(g=g!==void 0?g:Nr,g!==Nr&&g!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Nr&&(r=sr),r===void 0&&g===Ns&&(r=Lr),super(null,o,u,c,h,f,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=h!==void 0?h:Xt,this.minFilter=f!==void 0?f:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fM extends Ds{constructor(e,t){super();const r=this;let o=null,u=1,c=null,h="local-floor",f=1,p=null,g=null,v=null,_=null,S=null,E=null;const w=t.getContextAttributes();let x=null,y=null;const I=[],P=[],L=new ii;L.layers.enable(1),L.viewport=new nn;const F=new ii;F.layers.enable(2),F.viewport=new nn;const z=[L,F],k=new cM;k.layers.enable(1),k.layers.enable(2);let se=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let O=I[T];return O===void 0&&(O=new Ac,I[T]=O),O.getTargetRaySpace()},this.getControllerGrip=function(T){let O=I[T];return O===void 0&&(O=new Ac,I[T]=O),O.getGripSpace()},this.getHand=function(T){let O=I[T];return O===void 0&&(O=new Ac,I[T]=O),O.getHandSpace()};function D(T){const O=P.indexOf(T.inputSource);if(O===-1)return;const ue=I[O];ue!==void 0&&(ue.update(T.inputSource,T.frame,p||c),ue.dispatchEvent({type:T.type,data:T.inputSource}))}function de(){o.removeEventListener("select",D),o.removeEventListener("selectstart",D),o.removeEventListener("selectend",D),o.removeEventListener("squeeze",D),o.removeEventListener("squeezestart",D),o.removeEventListener("squeezeend",D),o.removeEventListener("end",de),o.removeEventListener("inputsourceschange",fe);for(let T=0;T<I.length;T++){const O=P[T];O!==null&&(P[T]=null,I[T].disconnect(O))}se=null,C=null,e.setRenderTarget(x),S=null,_=null,v=null,o=null,y=null,W.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){u=T,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){h=T,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(T){p=T},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(T){if(o=T,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",D),o.addEventListener("selectstart",D),o.addEventListener("selectend",D),o.addEventListener("squeeze",D),o.addEventListener("squeezestart",D),o.addEventListener("squeezeend",D),o.addEventListener("end",de),o.addEventListener("inputsourceschange",fe),w.xrCompatible!==!0&&await t.makeXRCompatible(),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:o.renderState.layers===void 0?w.antialias:!0,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(o,t,O),o.updateRenderState({baseLayer:S}),y=new Fr(S.framebufferWidth,S.framebufferHeight,{format:Wn,type:lr,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil})}else{let O=null,ue=null,he=null;w.depth&&(he=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=w.stencil?Ns:Nr,ue=w.stencil?Lr:sr);const me={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:u};v=new XRWebGLBinding(o,t),_=v.createProjectionLayer(me),o.updateRenderState({layers:[_]}),y=new Fr(_.textureWidth,_.textureHeight,{format:Wn,type:lr,depthTexture:new dM(_.textureWidth,_.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0});const Me=e.properties.get(y);Me.__ignoreDepthValues=_.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(f),p=null,c=await o.requestReferenceSpace(h),W.setContext(o),W.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function fe(T){for(let O=0;O<T.removed.length;O++){const ue=T.removed[O],he=P.indexOf(ue);he>=0&&(P[he]=null,I[he].disconnect(ue))}for(let O=0;O<T.added.length;O++){const ue=T.added[O];let he=P.indexOf(ue);if(he===-1){for(let Me=0;Me<I.length;Me++)if(Me>=P.length){P.push(ue),he=Me;break}else if(P[Me]===null){P[Me]=ue,he=Me;break}if(he===-1)break}const me=I[he];me&&me.connect(ue)}}const Y=new ne,te=new ne;function ie(T,O,ue){Y.setFromMatrixPosition(O.matrixWorld),te.setFromMatrixPosition(ue.matrixWorld);const he=Y.distanceTo(te),me=O.projectionMatrix.elements,Me=ue.projectionMatrix.elements,Le=me[14]/(me[10]-1),Te=me[14]/(me[10]+1),Ve=(me[9]+1)/me[5],mt=(me[9]-1)/me[5],it=(me[8]-1)/me[0],$=(Me[8]+1)/Me[0],Pt=Le*it,We=Le*$,nt=he/(-it+$),Ze=nt*-it;O.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(Ze),T.translateZ(nt),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert();const vt=Le+nt,Ge=Te+nt,je=Pt-Ze,Oe=We+(he-Ze),yt=Ve*Te/Ge*vt,Lt=mt*Te/Ge*vt;T.projectionMatrix.makePerspective(je,Oe,yt,Lt,vt,Ge),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}function ce(T,O){O===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(O.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(o===null)return;k.near=F.near=L.near=T.near,k.far=F.far=L.far=T.far,(se!==k.near||C!==k.far)&&(o.updateRenderState({depthNear:k.near,depthFar:k.far}),se=k.near,C=k.far);const O=T.parent,ue=k.cameras;ce(k,O);for(let he=0;he<ue.length;he++)ce(ue[he],O);ue.length===2?ie(k,L,F):k.projectionMatrix.copy(L.projectionMatrix),Z(T,k,O)};function Z(T,O,ue){ue===null?T.matrix.copy(O.matrixWorld):(T.matrix.copy(ue.matrixWorld),T.matrix.invert(),T.matrix.multiply(O.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0);const he=T.children;for(let me=0,Me=he.length;me<Me;me++)he[me].updateMatrixWorld(!0);T.projectionMatrix.copy(O.projectionMatrix),T.projectionMatrixInverse.copy(O.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=Uc*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(_===null&&S===null))return f},this.setFoveation=function(T){f=T,_!==null&&(_.fixedFoveation=T),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=T)};let G=null;function J(T,O){if(g=O.getViewerPose(p||c),E=O,g!==null){const ue=g.views;S!==null&&(e.setRenderTargetFramebuffer(y,S.framebuffer),e.setRenderTarget(y));let he=!1;ue.length!==k.cameras.length&&(k.cameras.length=0,he=!0);for(let me=0;me<ue.length;me++){const Me=ue[me];let Le=null;if(S!==null)Le=S.getViewport(Me);else{const Ve=v.getViewSubImage(_,Me);Le=Ve.viewport,me===0&&(e.setRenderTargetTextures(y,Ve.colorTexture,_.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(y))}let Te=z[me];Te===void 0&&(Te=new ii,Te.layers.enable(me),Te.viewport=new nn,z[me]=Te),Te.matrix.fromArray(Me.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Me.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Le.x,Le.y,Le.width,Le.height),me===0&&(k.matrix.copy(Te.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),he===!0&&k.cameras.push(Te)}}for(let ue=0;ue<I.length;ue++){const he=P[ue],me=I[ue];he!==null&&me!==void 0&&me.update(he,O,p||c)}G&&G(T,O),O.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:O}),E=null}const W=new pm;W.setAnimationLoop(J),this.setAnimationLoop=function(T){G=T},this.dispose=function(){}}}function pM(s,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,cm(s)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function o(x,y,I,P,L){y.isMeshBasicMaterial||y.isMeshLambertMaterial?u(x,y):y.isMeshToonMaterial?(u(x,y),v(x,y)):y.isMeshPhongMaterial?(u(x,y),g(x,y)):y.isMeshStandardMaterial?(u(x,y),_(x,y),y.isMeshPhysicalMaterial&&S(x,y,L)):y.isMeshMatcapMaterial?(u(x,y),E(x,y)):y.isMeshDepthMaterial?u(x,y):y.isMeshDistanceMaterial?(u(x,y),w(x,y)):y.isMeshNormalMaterial?u(x,y):y.isLineBasicMaterial?(c(x,y),y.isLineDashedMaterial&&h(x,y)):y.isPointsMaterial?f(x,y,I,P):y.isSpriteMaterial?p(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function u(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===En&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===En&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const I=e.get(y).envMap;if(I&&(x.envMap.value=I,x.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap){x.lightMap.value=y.lightMap;const P=s.useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=y.lightMapIntensity*P,t(y.lightMap,x.lightMapTransform)}y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function c(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function h(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function f(x,y,I,P){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*I,x.scale.value=P*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function g(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function v(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function _(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),e.get(y).envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,I){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===En&&x.clearcoatNormalScale.value.negate())),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=I.texture,x.transmissionSamplerSize.value.set(I.width,I.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,y){y.matcap&&(x.matcap.value=y.matcap)}function w(x,y){const I=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(I.matrixWorld),x.nearDistance.value=I.shadow.camera.near,x.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function mM(s,e,t,r){let o={},u={},c=[];const h=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(I,P){const L=P.program;r.uniformBlockBinding(I,L)}function p(I,P){let L=o[I.id];L===void 0&&(E(I),L=g(I),o[I.id]=L,I.addEventListener("dispose",x));const F=P.program;r.updateUBOMapping(I,F);const z=e.render.frame;u[I.id]!==z&&(_(I),u[I.id]=z)}function g(I){const P=v();I.__bindingPointIndex=P;const L=s.createBuffer(),F=I.__size,z=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,F,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,L),L}function v(){for(let I=0;I<h;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(I){const P=o[I.id],L=I.uniforms,F=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let z=0,k=L.length;z<k;z++){const se=L[z];if(S(se,z,F)===!0){const C=se.__offset,D=Array.isArray(se.value)?se.value:[se.value];let de=0;for(let fe=0;fe<D.length;fe++){const Y=D[fe],te=w(Y);typeof Y=="number"?(se.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,C+de,se.__data)):Y.isMatrix3?(se.__data[0]=Y.elements[0],se.__data[1]=Y.elements[1],se.__data[2]=Y.elements[2],se.__data[3]=Y.elements[0],se.__data[4]=Y.elements[3],se.__data[5]=Y.elements[4],se.__data[6]=Y.elements[5],se.__data[7]=Y.elements[0],se.__data[8]=Y.elements[6],se.__data[9]=Y.elements[7],se.__data[10]=Y.elements[8],se.__data[11]=Y.elements[0]):(Y.toArray(se.__data,de),de+=te.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,C,se.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,P,L){const F=I.value;if(L[P]===void 0){if(typeof F=="number")L[P]=F;else{const z=Array.isArray(F)?F:[F],k=[];for(let se=0;se<z.length;se++)k.push(z[se].clone());L[P]=k}return!0}else if(typeof F=="number"){if(L[P]!==F)return L[P]=F,!0}else{const z=Array.isArray(L[P])?L[P]:[L[P]],k=Array.isArray(F)?F:[F];for(let se=0;se<z.length;se++){const C=z[se];if(C.equals(k[se])===!1)return C.copy(k[se]),!0}}return!1}function E(I){const P=I.uniforms;let L=0;const F=16;let z=0;for(let k=0,se=P.length;k<se;k++){const C=P[k],D={boundary:0,storage:0},de=Array.isArray(C.value)?C.value:[C.value];for(let fe=0,Y=de.length;fe<Y;fe++){const te=de[fe],ie=w(te);D.boundary+=ie.boundary,D.storage+=ie.storage}if(C.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=L,k>0){z=L%F;const fe=F-z;z!==0&&fe-D.boundary<0&&(L+=F-z,C.__offset=L)}L+=D.storage}return z=L%F,z>0&&(L+=F-z),I.__size=L,I.__cache={},this}function w(I){const P={boundary:0,storage:0};return typeof I=="number"?(P.boundary=4,P.storage=4):I.isVector2?(P.boundary=8,P.storage=8):I.isVector3||I.isColor?(P.boundary=16,P.storage=12):I.isVector4?(P.boundary=16,P.storage=16):I.isMatrix3?(P.boundary=48,P.storage=48):I.isMatrix4?(P.boundary=64,P.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),P}function x(I){const P=I.target;P.removeEventListener("dispose",x);const L=c.indexOf(P.__bindingPointIndex);c.splice(L,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete u[P.id]}function y(){for(const I in o)s.deleteBuffer(o[I]);c=[],o={},u={}}return{bind:f,update:p,dispose:y}}function gM(){const s=il("canvas");return s.style.display="block",s}class xm{constructor(e={}){const{canvas:t=gM(),context:r=null,depth:o=!0,stencil:u=!0,alpha:c=!1,antialias:h=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let _;r!==null?_=r.getContextAttributes().alpha:_=c;const S=new Uint32Array(4),E=new Int32Array(4);let w=null,x=null;const y=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ot,this.useLegacyLights=!0,this.toneMapping=Di,this.toneMappingExposure=1;const P=this;let L=!1,F=0,z=0,k=null,se=-1,C=null;const D=new nn,de=new nn;let fe=null;const Y=new Rt(0);let te=0,ie=t.width,ce=t.height,Z=1,G=null,J=null;const W=new nn(0,0,ie,ce),T=new nn(0,0,ie,ce);let O=!1;const ue=new fm;let he=!1,me=!1,Me=null;const Le=new rn,Te=new xt,Ve=new ne,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function it(){return k===null?Z:1}let $=r;function Pt(b,K){for(let ae=0;ae<b.length;ae++){const X=b[ae],oe=t.getContext(X,K);if(oe!==null)return oe}return null}try{const b={alpha:!0,depth:o,stencil:u,antialias:h,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zc}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",Se,!1),$===null){const K=["webgl2","webgl","experimental-webgl"];if(P.isWebGL1Renderer===!0&&K.shift(),$=Pt(K,b),$===null)throw Pt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let We,nt,Ze,vt,Ge,je,Oe,yt,Lt,N,A,re,ye,_e,Ee,He,we,le,Ye,Xe,$e,ke,De,st;function gt(){We=new Ax($),nt=new xx($,We,e),We.init(nt),ke=new uM($,We,nt),Ze=new oM($,We,nt),vt=new bx($),Ge=new qS,je=new lM($,We,Ze,Ge,nt,ke,vt),Oe=new Mx(P),yt=new wx(P),Lt=new Bv($,nt),De=new _x($,We,Lt,nt),N=new Rx($,Lt,vt,De),A=new Ux($,N,Lt,vt),Ye=new Nx($,nt,je),He=new Sx(Ge),re=new XS(P,Oe,yt,We,nt,De,He),ye=new pM(P,Ge),_e=new $S,Ee=new tM(We,nt),le=new vx(P,Oe,yt,Ze,A,_,f),we=new aM(P,A,nt),st=new mM($,vt,nt,Ze),Xe=new yx($,We,vt,nt),$e=new Cx($,We,vt,nt),vt.programs=re.programs,P.capabilities=nt,P.extensions=We,P.properties=Ge,P.renderLists=_e,P.shadowMap=we,P.state=Ze,P.info=vt}gt();const H=new fM(P,$);this.xr=H,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const b=We.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=We.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(ie,ce,!1))},this.getSize=function(b){return b.set(ie,ce)},this.setSize=function(b,K,ae=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=b,ce=K,t.width=Math.floor(b*Z),t.height=Math.floor(K*Z),ae===!0&&(t.style.width=b+"px",t.style.height=K+"px"),this.setViewport(0,0,b,K)},this.getDrawingBufferSize=function(b){return b.set(ie*Z,ce*Z).floor()},this.setDrawingBufferSize=function(b,K,ae){ie=b,ce=K,Z=ae,t.width=Math.floor(b*ae),t.height=Math.floor(K*ae),this.setViewport(0,0,b,K)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(W)},this.setViewport=function(b,K,ae,X){b.isVector4?W.set(b.x,b.y,b.z,b.w):W.set(b,K,ae,X),Ze.viewport(D.copy(W).multiplyScalar(Z).floor())},this.getScissor=function(b){return b.copy(T)},this.setScissor=function(b,K,ae,X){b.isVector4?T.set(b.x,b.y,b.z,b.w):T.set(b,K,ae,X),Ze.scissor(de.copy(T).multiplyScalar(Z).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(b){Ze.setScissorTest(O=b)},this.setOpaqueSort=function(b){G=b},this.setTransparentSort=function(b){J=b},this.getClearColor=function(b){return b.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(b=!0,K=!0,ae=!0){let X=0;if(b){let oe=!1;if(k!==null){const Ne=k.texture.format;oe=Ne===Jp||Ne===Zp||Ne===Qp}if(oe){const Ne=k.texture.type,qe=Ne===lr||Ne===sr||Ne===Hc||Ne===Lr||Ne===$p||Ne===Kp,Je=le.getClearColor(),tt=le.getClearAlpha(),lt=Je.r,Ie=Je.g,rt=Je.b;qe?(S[0]=lt,S[1]=Ie,S[2]=rt,S[3]=tt,$.clearBufferuiv($.COLOR,0,S)):(E[0]=lt,E[1]=Ie,E[2]=rt,E[3]=tt,$.clearBufferiv($.COLOR,0,E))}else X|=$.COLOR_BUFFER_BIT}K&&(X|=$.DEPTH_BUFFER_BIT),ae&&(X|=$.STENCIL_BUFFER_BIT),$.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),_e.dispose(),Ee.dispose(),Ge.dispose(),Oe.dispose(),yt.dispose(),A.dispose(),De.dispose(),st.dispose(),re.dispose(),H.dispose(),H.removeEventListener("sessionstart",Mt),H.removeEventListener("sessionend",An),Me&&(Me.dispose(),Me=null),Ot.stop()};function Ae(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const b=vt.autoReset,K=we.enabled,ae=we.autoUpdate,X=we.needsUpdate,oe=we.type;gt(),vt.autoReset=b,we.enabled=K,we.autoUpdate=ae,we.needsUpdate=X,we.type=oe}function Se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ce(b){const K=b.target;K.removeEventListener("dispose",Ce),dt(K)}function dt(b){St(b),Ge.remove(b)}function St(b){const K=Ge.get(b).programs;K!==void 0&&(K.forEach(function(ae){re.releaseProgram(ae)}),b.isShaderMaterial&&re.releaseShaderCache(b))}this.renderBufferDirect=function(b,K,ae,X,oe,Ne){K===null&&(K=mt);const qe=oe.isMesh&&oe.matrixWorld.determinant()<0,Je=cl(b,K,ae,X,oe);Ze.setMaterial(X,qe);let tt=ae.index,lt=1;X.wireframe===!0&&(tt=N.getWireframeAttribute(ae),lt=2);const Ie=ae.drawRange,rt=ae.attributes.position;let Et=Ie.start*lt,Ct=(Ie.start+Ie.count)*lt;Ne!==null&&(Et=Math.max(Et,Ne.start*lt),Ct=Math.min(Ct,(Ne.start+Ne.count)*lt)),tt!==null?(Et=Math.max(Et,0),Ct=Math.min(Ct,tt.count)):rt!=null&&(Et=Math.max(Et,0),Ct=Math.min(Ct,rt.count));const sn=Ct-Et;if(sn<0||sn===1/0)return;De.setup(oe,X,Je,ae,tt);let jn,Nt=Xe;if(tt!==null&&(jn=Lt.get(tt),Nt=$e,Nt.setIndex(jn)),oe.isMesh)X.wireframe===!0?(Ze.setLineWidth(X.wireframeLinewidth*it()),Nt.setMode($.LINES)):Nt.setMode($.TRIANGLES);else if(oe.isLine){let ut=X.linewidth;ut===void 0&&(ut=1),Ze.setLineWidth(ut*it()),oe.isLineSegments?Nt.setMode($.LINES):oe.isLineLoop?Nt.setMode($.LINE_LOOP):Nt.setMode($.LINE_STRIP)}else oe.isPoints?Nt.setMode($.POINTS):oe.isSprite&&Nt.setMode($.TRIANGLES);if(oe.isInstancedMesh)Nt.renderInstances(Et,sn,oe.count);else if(ae.isInstancedBufferGeometry){const ut=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,mn=Math.min(ae.instanceCount,ut);Nt.renderInstances(Et,sn,mn)}else Nt.render(Et,sn)},this.compile=function(b,K){function ae(X,oe,Ne){X.transparent===!0&&X.side===Li&&X.forceSinglePass===!1?(X.side=En,X.needsUpdate=!0,pi(X,oe,Ne),X.side=ur,X.needsUpdate=!0,pi(X,oe,Ne),X.side=Li):pi(X,oe,Ne)}x=Ee.get(b),x.init(),I.push(x),b.traverseVisible(function(X){X.isLight&&X.layers.test(K.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),x.setupLights(P.useLegacyLights),b.traverse(function(X){const oe=X.material;if(oe)if(Array.isArray(oe))for(let Ne=0;Ne<oe.length;Ne++){const qe=oe[Ne];ae(qe,b,X)}else ae(oe,b,X)}),I.pop(),x=null};let Ft=null;function wn(b){Ft&&Ft(b)}function Mt(){Ot.stop()}function An(){Ot.start()}const Ot=new pm;Ot.setAnimationLoop(wn),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(b){Ft=b,H.setAnimationLoop(b),b===null?Ot.stop():Ot.start()},H.addEventListener("sessionstart",Mt),H.addEventListener("sessionend",An),this.render=function(b,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(K),K=H.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,K,k),x=Ee.get(b,I.length),x.init(),I.push(x),Le.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ue.setFromProjectionMatrix(Le),me=this.localClippingEnabled,he=He.init(this.clippingPlanes,me),w=_e.get(b,y.length),w.init(),y.push(w),Br(b,K,0,P.sortObjects),w.finish(),P.sortObjects===!0&&w.sort(G,J),this.info.render.frame++,he===!0&&He.beginShadows();const ae=x.state.shadowsArray;if(we.render(ae,b,K),he===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),le.render(w,b),x.setupLights(P.useLegacyLights),K.isArrayCamera){const X=K.cameras;for(let oe=0,Ne=X.length;oe<Ne;oe++){const qe=X[oe];Ii(w,b,qe,qe.viewport)}}else Ii(w,b,K);k!==null&&(je.updateMultisampleRenderTarget(k),je.updateRenderTargetMipmap(k)),b.isScene===!0&&b.onAfterRender(P,b,K),De.resetDefaultState(),se=-1,C=null,I.pop(),I.length>0?x=I[I.length-1]:x=null,y.pop(),y.length>0?w=y[y.length-1]:w=null};function Br(b,K,ae,X){if(b.visible===!1)return;if(b.layers.test(K.layers)){if(b.isGroup)ae=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(K);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ue.intersectsSprite(b)){X&&Ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Le);const qe=A.update(b),Je=b.material;Je.visible&&w.push(b,qe,Je,ae,Ve.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ue.intersectsObject(b))){const qe=A.update(b),Je=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ve.copy(b.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),Ve.copy(qe.boundingSphere.center)),Ve.applyMatrix4(b.matrixWorld).applyMatrix4(Le)),Array.isArray(Je)){const tt=qe.groups;for(let lt=0,Ie=tt.length;lt<Ie;lt++){const rt=tt[lt],Et=Je[rt.materialIndex];Et&&Et.visible&&w.push(b,qe,Et,ae,Ve.z,rt)}}else Je.visible&&w.push(b,qe,Je,ae,Ve.z,null)}}const Ne=b.children;for(let qe=0,Je=Ne.length;qe<Je;qe++)Br(Ne[qe],K,ae,X)}function Ii(b,K,ae,X){const oe=b.opaque,Ne=b.transmissive,qe=b.transparent;x.setupLightsView(ae),he===!0&&He.setGlobalState(P.clippingPlanes,ae),Ne.length>0&&ul(oe,Ne,K,ae),X&&Ze.viewport(D.copy(X)),oe.length>0&&si(oe,K,ae),Ne.length>0&&si(Ne,K,ae),qe.length>0&&si(qe,K,ae),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function ul(b,K,ae,X){const oe=nt.isWebGL2;Me===null&&(Me=new Fr(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")?Ta:lr,minFilter:Ea,samples:oe?4:0})),P.getDrawingBufferSize(Te),oe?Me.setSize(Te.x,Te.y):Me.setSize(Dc(Te.x),Dc(Te.y));const Ne=P.getRenderTarget();P.setRenderTarget(Me),P.getClearColor(Y),te=P.getClearAlpha(),te<1&&P.setClearColor(16777215,.5),P.clear();const qe=P.toneMapping;P.toneMapping=Di,si(b,ae,X),je.updateMultisampleRenderTarget(Me),je.updateRenderTargetMipmap(Me);let Je=!1;for(let tt=0,lt=K.length;tt<lt;tt++){const Ie=K[tt],rt=Ie.object,Et=Ie.geometry,Ct=Ie.material,sn=Ie.group;if(Ct.side===Li&&rt.layers.test(X.layers)){const jn=Ct.side;Ct.side=En,Ct.needsUpdate=!0,cr(rt,ae,X,Et,Ct,sn),Ct.side=jn,Ct.needsUpdate=!0,Je=!0}}Je===!0&&(je.updateMultisampleRenderTarget(Me),je.updateRenderTargetMipmap(Me)),P.setRenderTarget(Ne),P.setClearColor(Y,te),P.toneMapping=qe}function si(b,K,ae){const X=K.isScene===!0?K.overrideMaterial:null;for(let oe=0,Ne=b.length;oe<Ne;oe++){const qe=b[oe],Je=qe.object,tt=qe.geometry,lt=X===null?qe.material:X,Ie=qe.group;Je.layers.test(ae.layers)&&cr(Je,K,ae,tt,lt,Ie)}}function cr(b,K,ae,X,oe,Ne){b.onBeforeRender(P,K,ae,X,oe,Ne),b.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),oe.onBeforeRender(P,K,ae,X,b,Ne),oe.transparent===!0&&oe.side===Li&&oe.forceSinglePass===!1?(oe.side=En,oe.needsUpdate=!0,P.renderBufferDirect(ae,K,X,oe,b,Ne),oe.side=ur,oe.needsUpdate=!0,P.renderBufferDirect(ae,K,X,oe,b,Ne),oe.side=Li):P.renderBufferDirect(ae,K,X,oe,b,Ne),b.onAfterRender(P,K,ae,X,oe,Ne)}function pi(b,K,ae){K.isScene!==!0&&(K=mt);const X=Ge.get(b),oe=x.state.lights,Ne=x.state.shadowsArray,qe=oe.state.version,Je=re.getParameters(b,oe.state,Ne,K,ae),tt=re.getProgramCacheKey(Je);let lt=X.programs;X.environment=b.isMeshStandardMaterial?K.environment:null,X.fog=K.fog,X.envMap=(b.isMeshStandardMaterial?yt:Oe).get(b.envMap||X.environment),lt===void 0&&(b.addEventListener("dispose",Ce),lt=new Map,X.programs=lt);let Ie=lt.get(tt);if(Ie!==void 0){if(X.currentProgram===Ie&&X.lightsStateVersion===qe)return zr(b,Je),Ie}else Je.uniforms=re.getUniforms(b),b.onBuild(ae,Je,P),b.onBeforeCompile(Je,P),Ie=re.acquireProgram(Je,tt),lt.set(tt,Ie),X.uniforms=Je.uniforms;const rt=X.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(rt.clippingPlanes=He.uniform),zr(b,Je),X.needsLights=dl(b),X.lightsStateVersion=qe,X.needsLights&&(rt.ambientLightColor.value=oe.state.ambient,rt.lightProbe.value=oe.state.probe,rt.directionalLights.value=oe.state.directional,rt.directionalLightShadows.value=oe.state.directionalShadow,rt.spotLights.value=oe.state.spot,rt.spotLightShadows.value=oe.state.spotShadow,rt.rectAreaLights.value=oe.state.rectArea,rt.ltc_1.value=oe.state.rectAreaLTC1,rt.ltc_2.value=oe.state.rectAreaLTC2,rt.pointLights.value=oe.state.point,rt.pointLightShadows.value=oe.state.pointShadow,rt.hemisphereLights.value=oe.state.hemi,rt.directionalShadowMap.value=oe.state.directionalShadowMap,rt.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,rt.spotShadowMap.value=oe.state.spotShadowMap,rt.spotLightMatrix.value=oe.state.spotLightMatrix,rt.spotLightMap.value=oe.state.spotLightMap,rt.pointShadowMap.value=oe.state.pointShadowMap,rt.pointShadowMatrix.value=oe.state.pointShadowMatrix);const Et=Ie.getUniforms(),Ct=tl.seqWithValue(Et.seq,rt);return X.currentProgram=Ie,X.uniformsList=Ct,Ie}function zr(b,K){const ae=Ge.get(b);ae.outputColorSpace=K.outputColorSpace,ae.instancing=K.instancing,ae.skinning=K.skinning,ae.morphTargets=K.morphTargets,ae.morphNormals=K.morphNormals,ae.morphColors=K.morphColors,ae.morphTargetsCount=K.morphTargetsCount,ae.numClippingPlanes=K.numClippingPlanes,ae.numIntersection=K.numClipIntersection,ae.vertexAlphas=K.vertexAlphas,ae.vertexTangents=K.vertexTangents,ae.toneMapping=K.toneMapping}function cl(b,K,ae,X,oe){K.isScene!==!0&&(K=mt),je.resetTextureUnits();const Ne=K.fog,qe=X.isMeshStandardMaterial?K.environment:null,Je=k===null?P.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:fi,tt=(X.isMeshStandardMaterial?yt:Oe).get(X.envMap||qe),lt=X.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Ie=!!ae.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),rt=!!ae.morphAttributes.position,Et=!!ae.morphAttributes.normal,Ct=!!ae.morphAttributes.color,sn=X.toneMapped?P.toneMapping:Di,jn=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Nt=jn!==void 0?jn.length:0,ut=Ge.get(X),mn=x.state.lights;if(he===!0&&(me===!0||b!==C)){const $t=b===C&&X.id===se;He.setState(X,b,$t)}let Bt=!1;X.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==mn.state.version||ut.outputColorSpace!==Je||oe.isInstancedMesh&&ut.instancing===!1||!oe.isInstancedMesh&&ut.instancing===!0||oe.isSkinnedMesh&&ut.skinning===!1||!oe.isSkinnedMesh&&ut.skinning===!0||ut.envMap!==tt||X.fog===!0&&ut.fog!==Ne||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==He.numPlanes||ut.numIntersection!==He.numIntersection)||ut.vertexAlphas!==lt||ut.vertexTangents!==Ie||ut.morphTargets!==rt||ut.morphNormals!==Et||ut.morphColors!==Ct||ut.toneMapping!==sn||nt.isWebGL2===!0&&ut.morphTargetsCount!==Nt)&&(Bt=!0):(Bt=!0,ut.__version=X.version);let Gt=ut.currentProgram;Bt===!0&&(Gt=pi(X,K,oe));let Pa=!1,hr=!1,Fs=!1;const zt=Gt.getUniforms(),In=ut.uniforms;if(Ze.useProgram(Gt.program)&&(Pa=!0,hr=!0,Fs=!0),X.id!==se&&(se=X.id,hr=!0),Pa||C!==b){if(zt.setValue($,"projectionMatrix",b.projectionMatrix),nt.logarithmicDepthBuffer&&zt.setValue($,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),C!==b&&(C=b,hr=!0,Fs=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const $t=zt.map.cameraPosition;$t!==void 0&&$t.setValue($,Ve.setFromMatrixPosition(b.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&zt.setValue($,"isOrthographic",b.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||oe.isSkinnedMesh)&&zt.setValue($,"viewMatrix",b.matrixWorldInverse)}if(oe.isSkinnedMesh){zt.setOptional($,oe,"bindMatrix"),zt.setOptional($,oe,"bindMatrixInverse");const $t=oe.skeleton;$t&&(nt.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),zt.setValue($,"boneTexture",$t.boneTexture,je),zt.setValue($,"boneTextureSize",$t.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const mi=ae.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0&&nt.isWebGL2===!0)&&Ye.update(oe,ae,Gt),(hr||ut.receiveShadow!==oe.receiveShadow)&&(ut.receiveShadow=oe.receiveShadow,zt.setValue($,"receiveShadow",oe.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(In.envMap.value=tt,In.flipEnvMap.value=tt.isCubeTexture&&tt.isRenderTargetTexture===!1?-1:1),hr&&(zt.setValue($,"toneMappingExposure",P.toneMappingExposure),ut.needsLights&&hl(In,Fs),Ne&&X.fog===!0&&ye.refreshFogUniforms(In,Ne),ye.refreshMaterialUniforms(In,X,Z,ce,Me),tl.upload($,ut.uniformsList,In,je)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(tl.upload($,ut.uniformsList,In,je),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&zt.setValue($,"center",oe.center),zt.setValue($,"modelViewMatrix",oe.modelViewMatrix),zt.setValue($,"normalMatrix",oe.normalMatrix),zt.setValue($,"modelMatrix",oe.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const $t=X.uniformsGroups;for(let Os=0,fl=$t.length;Os<fl;Os++)if(nt.isWebGL2){const Hr=$t[Os];st.update(Hr,Gt),st.bind(Hr,Gt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gt}function hl(b,K){b.ambientLightColor.needsUpdate=K,b.lightProbe.needsUpdate=K,b.directionalLights.needsUpdate=K,b.directionalLightShadows.needsUpdate=K,b.pointLights.needsUpdate=K,b.pointLightShadows.needsUpdate=K,b.spotLights.needsUpdate=K,b.spotLightShadows.needsUpdate=K,b.rectAreaLights.needsUpdate=K,b.hemisphereLights.needsUpdate=K}function dl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,K,ae){Ge.get(b.texture).__webglTexture=K,Ge.get(b.depthTexture).__webglTexture=ae;const X=Ge.get(b);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=ae===void 0,X.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,K){const ae=Ge.get(b);ae.__webglFramebuffer=K,ae.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(b,K=0,ae=0){k=b,F=K,z=ae;let X=!0,oe=null,Ne=!1,qe=!1;if(b){const tt=Ge.get(b);tt.__useDefaultFramebuffer!==void 0?(Ze.bindFramebuffer($.FRAMEBUFFER,null),X=!1):tt.__webglFramebuffer===void 0?je.setupRenderTarget(b):tt.__hasExternalTextures&&je.rebindTextures(b,Ge.get(b.texture).__webglTexture,Ge.get(b.depthTexture).__webglTexture);const lt=b.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(qe=!0);const Ie=Ge.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(oe=Ie[K],Ne=!0):nt.isWebGL2&&b.samples>0&&je.useMultisampledRTT(b)===!1?oe=Ge.get(b).__webglMultisampledFramebuffer:oe=Ie,D.copy(b.viewport),de.copy(b.scissor),fe=b.scissorTest}else D.copy(W).multiplyScalar(Z).floor(),de.copy(T).multiplyScalar(Z).floor(),fe=O;if(Ze.bindFramebuffer($.FRAMEBUFFER,oe)&&nt.drawBuffers&&X&&Ze.drawBuffers(b,oe),Ze.viewport(D),Ze.scissor(de),Ze.setScissorTest(fe),Ne){const tt=Ge.get(b.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+K,tt.__webglTexture,ae)}else if(qe){const tt=Ge.get(b.texture),lt=K||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,tt.__webglTexture,ae||0,lt)}se=-1},this.readRenderTargetPixels=function(b,K,ae,X,oe,Ne,qe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=Ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&qe!==void 0&&(Je=Je[qe]),Je){Ze.bindFramebuffer($.FRAMEBUFFER,Je);try{const tt=b.texture,lt=tt.format,Ie=tt.type;if(lt!==Wn&&ke.convert(lt)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const rt=Ie===Ta&&(We.has("EXT_color_buffer_half_float")||nt.isWebGL2&&We.has("EXT_color_buffer_float"));if(Ie!==lr&&ke.convert(Ie)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===ar&&(nt.isWebGL2||We.has("OES_texture_float")||We.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=b.width-X&&ae>=0&&ae<=b.height-oe&&$.readPixels(K,ae,X,oe,ke.convert(lt),ke.convert(Ie),Ne)}finally{const tt=k!==null?Ge.get(k).__webglFramebuffer:null;Ze.bindFramebuffer($.FRAMEBUFFER,tt)}}},this.copyFramebufferToTexture=function(b,K,ae=0){const X=Math.pow(2,-ae),oe=Math.floor(K.image.width*X),Ne=Math.floor(K.image.height*X);je.setTexture2D(K,0),$.copyTexSubImage2D($.TEXTURE_2D,ae,0,0,b.x,b.y,oe,Ne),Ze.unbindTexture()},this.copyTextureToTexture=function(b,K,ae,X=0){const oe=K.image.width,Ne=K.image.height,qe=ke.convert(ae.format),Je=ke.convert(ae.type);je.setTexture2D(ae,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,ae.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,ae.unpackAlignment),K.isDataTexture?$.texSubImage2D($.TEXTURE_2D,X,b.x,b.y,oe,Ne,qe,Je,K.image.data):K.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,X,b.x,b.y,K.mipmaps[0].width,K.mipmaps[0].height,qe,K.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,X,b.x,b.y,qe,Je,K.image),X===0&&ae.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),Ze.unbindTexture()},this.copyTextureToTexture3D=function(b,K,ae,X,oe=0){if(P.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ne=b.max.x-b.min.x+1,qe=b.max.y-b.min.y+1,Je=b.max.z-b.min.z+1,tt=ke.convert(X.format),lt=ke.convert(X.type);let Ie;if(X.isData3DTexture)je.setTexture3D(X,0),Ie=$.TEXTURE_3D;else if(X.isDataArrayTexture)je.setTexture2DArray(X,0),Ie=$.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,X.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,X.unpackAlignment);const rt=$.getParameter($.UNPACK_ROW_LENGTH),Et=$.getParameter($.UNPACK_IMAGE_HEIGHT),Ct=$.getParameter($.UNPACK_SKIP_PIXELS),sn=$.getParameter($.UNPACK_SKIP_ROWS),jn=$.getParameter($.UNPACK_SKIP_IMAGES),Nt=ae.isCompressedTexture?ae.mipmaps[0]:ae.image;$.pixelStorei($.UNPACK_ROW_LENGTH,Nt.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Nt.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,b.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,b.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,b.min.z),ae.isDataTexture||ae.isData3DTexture?$.texSubImage3D(Ie,oe,K.x,K.y,K.z,Ne,qe,Je,tt,lt,Nt.data):ae.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Ie,oe,K.x,K.y,K.z,Ne,qe,Je,tt,Nt.data)):$.texSubImage3D(Ie,oe,K.x,K.y,K.z,Ne,qe,Je,tt,lt,Nt),$.pixelStorei($.UNPACK_ROW_LENGTH,rt),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Et),$.pixelStorei($.UNPACK_SKIP_PIXELS,Ct),$.pixelStorei($.UNPACK_SKIP_ROWS,sn),$.pixelStorei($.UNPACK_SKIP_IMAGES,jn),oe===0&&X.generateMipmaps&&$.generateMipmap(Ie),Ze.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?je.setTextureCube(b,0):b.isData3DTexture?je.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?je.setTexture2DArray(b,0):je.setTexture2D(b,0),Ze.unbindTexture()},this.resetState=function(){F=0,z=0,k=null,Ze.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ot?Ur:em}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ur?ot:fi}}class vM extends xm{}vM.prototype.isWebGL1Renderer=!0;class _M extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class yM extends Tn{constructor(e=null,t=1,r=1,o,u,c,h,f,p=Xt,g=Xt,v,_){super(null,c,h,f,p,g,o,u,v,_),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);class xM{constructor(e){this.system=e,this.a=0,this.x=0,this.y=0,this.sp=253,this.pc=0,this.carryFlag=!1,this.zeroFlag=!1,this.interruptDisableFlag=!0,this.decimalModeFlag=!1,this.breakCommand=!1,this.overflowFlag=!1,this.negativeFlag=!1,this.cycles=0,this.totalCycles=0,this.nmiPending=!1,this.irqPending=!1,this.resetPending=!0,this.debug=!1,this.instructionCount=0,this.instructions={load:{169:{mode:"immediate",reg:"a",cycles:2},165:{mode:"zeroPage",reg:"a",cycles:3},181:{mode:"zeroPageX",reg:"a",cycles:4},173:{mode:"absolute",reg:"a",cycles:4},189:{mode:"absoluteX",reg:"a",cycles:4,pageCross:!0},185:{mode:"absoluteY",reg:"a",cycles:4,pageCross:!0},161:{mode:"indirectX",reg:"a",cycles:6},177:{mode:"indirectY",reg:"a",cycles:5,pageCross:!0},162:{mode:"immediate",reg:"x",cycles:2},166:{mode:"zeroPage",reg:"x",cycles:3},182:{mode:"zeroPageY",reg:"x",cycles:4},174:{mode:"absolute",reg:"x",cycles:4},190:{mode:"absoluteY",reg:"x",cycles:4,pageCross:!0},160:{mode:"immediate",reg:"y",cycles:2},164:{mode:"zeroPage",reg:"y",cycles:3},180:{mode:"zeroPageX",reg:"y",cycles:4},172:{mode:"absolute",reg:"y",cycles:4},188:{mode:"absoluteX",reg:"y",cycles:4,pageCross:!0}},store:{133:{mode:"zeroPage",reg:"a",cycles:3},149:{mode:"zeroPageX",reg:"a",cycles:4},141:{mode:"absolute",reg:"a",cycles:4},157:{mode:"absoluteX",reg:"a",cycles:5},153:{mode:"absoluteY",reg:"a",cycles:5},129:{mode:"indirectX",reg:"a",cycles:6},145:{mode:"indirectY",reg:"a",cycles:6},134:{mode:"zeroPage",reg:"x",cycles:3},150:{mode:"zeroPageY",reg:"x",cycles:4},142:{mode:"absolute",reg:"x",cycles:4},132:{mode:"zeroPage",reg:"y",cycles:3},148:{mode:"zeroPageX",reg:"y",cycles:4},140:{mode:"absolute",reg:"y",cycles:4}},transfer:{170:{src:"a",dest:"x",cycles:2},168:{src:"a",dest:"y",cycles:2},138:{src:"x",dest:"a",cycles:2},152:{src:"y",dest:"a",cycles:2},186:{src:"sp",dest:"x",cycles:2},154:{src:"x",dest:"sp",cycles:2}},stack:{72:{op:"push",reg:"a",cycles:3},8:{op:"pushStatus",cycles:3},104:{op:"pull",reg:"a",cycles:4},40:{op:"pullStatus",cycles:4}},logical:{41:{op:"and",mode:"immediate",cycles:2},37:{op:"and",mode:"zeroPage",cycles:3},53:{op:"and",mode:"zeroPageX",cycles:4},45:{op:"and",mode:"absolute",cycles:4},61:{op:"and",mode:"absoluteX",cycles:4,pageCross:!0},57:{op:"and",mode:"absoluteY",cycles:4,pageCross:!0},33:{op:"and",mode:"indirectX",cycles:6},49:{op:"and",mode:"indirectY",cycles:5,pageCross:!0},9:{op:"ora",mode:"immediate",cycles:2},5:{op:"ora",mode:"zeroPage",cycles:3},21:{op:"ora",mode:"zeroPageX",cycles:4},13:{op:"ora",mode:"absolute",cycles:4},29:{op:"ora",mode:"absoluteX",cycles:4,pageCross:!0},25:{op:"ora",mode:"absoluteY",cycles:4,pageCross:!0},1:{op:"ora",mode:"indirectX",cycles:6},17:{op:"ora",mode:"indirectY",cycles:5,pageCross:!0},73:{op:"eor",mode:"immediate",cycles:2},69:{op:"eor",mode:"zeroPage",cycles:3},85:{op:"eor",mode:"zeroPageX",cycles:4},77:{op:"eor",mode:"absolute",cycles:4},93:{op:"eor",mode:"absoluteX",cycles:4,pageCross:!0},89:{op:"eor",mode:"absoluteY",cycles:4,pageCross:!0},65:{op:"eor",mode:"indirectX",cycles:6},81:{op:"eor",mode:"indirectY",cycles:5,pageCross:!0},36:{op:"bit",mode:"zeroPage",cycles:3},44:{op:"bit",mode:"absolute",cycles:4}},arithmetic:{105:{op:"adc",mode:"immediate",cycles:2},101:{op:"adc",mode:"zeroPage",cycles:3},117:{op:"adc",mode:"zeroPageX",cycles:4},109:{op:"adc",mode:"absolute",cycles:4},125:{op:"adc",mode:"absoluteX",cycles:4,pageCross:!0},121:{op:"adc",mode:"absoluteY",cycles:4,pageCross:!0},97:{op:"adc",mode:"indirectX",cycles:6},113:{op:"adc",mode:"indirectY",cycles:5,pageCross:!0},233:{op:"sbc",mode:"immediate",cycles:2},229:{op:"sbc",mode:"zeroPage",cycles:3},245:{op:"sbc",mode:"zeroPageX",cycles:4},237:{op:"sbc",mode:"absolute",cycles:4},253:{op:"sbc",mode:"absoluteX",cycles:4,pageCross:!0},249:{op:"sbc",mode:"absoluteY",cycles:4,pageCross:!0},225:{op:"sbc",mode:"indirectX",cycles:6},241:{op:"sbc",mode:"indirectY",cycles:5,pageCross:!0}},compare:{201:{reg:"a",mode:"immediate",cycles:2},197:{reg:"a",mode:"zeroPage",cycles:3},213:{reg:"a",mode:"zeroPageX",cycles:4},205:{reg:"a",mode:"absolute",cycles:4},221:{reg:"a",mode:"absoluteX",cycles:4,pageCross:!0},217:{reg:"a",mode:"absoluteY",cycles:4,pageCross:!0},193:{reg:"a",mode:"indirectX",cycles:6},209:{reg:"a",mode:"indirectY",cycles:5,pageCross:!0},224:{reg:"x",mode:"immediate",cycles:2},228:{reg:"x",mode:"zeroPage",cycles:3},236:{reg:"x",mode:"absolute",cycles:4},192:{reg:"y",mode:"immediate",cycles:2},196:{reg:"y",mode:"zeroPage",cycles:3},204:{reg:"y",mode:"absolute",cycles:4}},incdec:{232:{op:"inc",reg:"x",cycles:2},200:{op:"inc",reg:"y",cycles:2},202:{op:"dec",reg:"x",cycles:2},136:{op:"dec",reg:"y",cycles:2},230:{op:"incMem",mode:"zeroPage",cycles:5},246:{op:"incMem",mode:"zeroPageX",cycles:6},238:{op:"incMem",mode:"absolute",cycles:6},254:{op:"incMem",mode:"absoluteX",cycles:7},198:{op:"decMem",mode:"zeroPage",cycles:5},214:{op:"decMem",mode:"zeroPageX",cycles:6},206:{op:"decMem",mode:"absolute",cycles:6},222:{op:"decMem",mode:"absoluteX",cycles:7}},shift:{10:{op:"asl",mode:"accumulator",cycles:2},6:{op:"asl",mode:"zeroPage",cycles:5},22:{op:"asl",mode:"zeroPageX",cycles:6},14:{op:"asl",mode:"absolute",cycles:6},30:{op:"asl",mode:"absoluteX",cycles:7},74:{op:"lsr",mode:"accumulator",cycles:2},70:{op:"lsr",mode:"zeroPage",cycles:5},86:{op:"lsr",mode:"zeroPageX",cycles:6},78:{op:"lsr",mode:"absolute",cycles:6},94:{op:"lsr",mode:"absoluteX",cycles:7},42:{op:"rol",mode:"accumulator",cycles:2},38:{op:"rol",mode:"zeroPage",cycles:5},54:{op:"rol",mode:"zeroPageX",cycles:6},46:{op:"rol",mode:"absolute",cycles:6},62:{op:"rol",mode:"absoluteX",cycles:7},106:{op:"ror",mode:"accumulator",cycles:2},102:{op:"ror",mode:"zeroPage",cycles:5},118:{op:"ror",mode:"zeroPageX",cycles:6},110:{op:"ror",mode:"absolute",cycles:6},126:{op:"ror",mode:"absoluteX",cycles:7}},jump:{76:{op:"jmp",mode:"absolute",cycles:3},108:{op:"jmp",mode:"indirect",cycles:5},32:{op:"jsr",cycles:6},96:{op:"rts",cycles:6},64:{op:"rti",cycles:6}},branch:{144:{condition:"carry",expected:!1,cycles:2},176:{condition:"carry",expected:!0,cycles:2},240:{condition:"zero",expected:!0,cycles:2},48:{condition:"negative",expected:!0,cycles:2},208:{condition:"zero",expected:!1,cycles:2},16:{condition:"negative",expected:!1,cycles:2},80:{condition:"overflow",expected:!1,cycles:2},112:{condition:"overflow",expected:!0,cycles:2}},flags:{24:{flag:"carry",value:!1,cycles:2},56:{flag:"carry",value:!0,cycles:2},88:{flag:"interruptDisable",value:!1,cycles:2},120:{flag:"interruptDisable",value:!0,cycles:2},184:{flag:"overflow",value:!1,cycles:2},216:{flag:"decimalMode",value:!1,cycles:2},248:{flag:"decimalMode",value:!0,cycles:2}},other:{0:{op:"brk",cycles:7},234:{op:"nop",cycles:2}},unofficial:{2:{op:"jam",cycles:2},18:{op:"jam",cycles:2},34:{op:"jam",cycles:2},50:{op:"jam",cycles:2},66:{op:"jam",cycles:2},82:{op:"jam",cycles:2},98:{op:"jam",cycles:2},114:{op:"jam",cycles:2},146:{op:"jam",cycles:2},178:{op:"jam",cycles:2},210:{op:"jam",cycles:2},242:{op:"jam",cycles:2},3:{op:"slo",mode:"indirectX",cycles:8},7:{op:"slo",mode:"zeroPage",cycles:5},15:{op:"slo",mode:"absolute",cycles:6},19:{op:"slo",mode:"indirectY",cycles:8},23:{op:"slo",mode:"zeroPageX",cycles:6},27:{op:"slo",mode:"absoluteY",cycles:7},31:{op:"slo",mode:"absoluteX",cycles:7},35:{op:"rla",mode:"indirectX",cycles:8},39:{op:"rla",mode:"zeroPage",cycles:5},47:{op:"rla",mode:"absolute",cycles:6},51:{op:"rla",mode:"indirectY",cycles:8},55:{op:"rla",mode:"zeroPageX",cycles:6},59:{op:"rla",mode:"absoluteY",cycles:7},63:{op:"rla",mode:"absoluteX",cycles:7},67:{op:"sre",mode:"indirectX",cycles:8},71:{op:"sre",mode:"zeroPage",cycles:5},79:{op:"sre",mode:"absolute",cycles:6},83:{op:"sre",mode:"indirectY",cycles:8},87:{op:"sre",mode:"zeroPageX",cycles:6},91:{op:"sre",mode:"absoluteY",cycles:7},95:{op:"sre",mode:"absoluteX",cycles:7},99:{op:"rra",mode:"indirectX",cycles:8},103:{op:"rra",mode:"zeroPage",cycles:5},111:{op:"rra",mode:"absolute",cycles:6},115:{op:"rra",mode:"indirectY",cycles:8},119:{op:"rra",mode:"zeroPageX",cycles:6},123:{op:"rra",mode:"absoluteY",cycles:7},127:{op:"rra",mode:"absoluteX",cycles:7},131:{op:"sax",mode:"indirectX",cycles:6},135:{op:"sax",mode:"zeroPage",cycles:3},143:{op:"sax",mode:"absolute",cycles:4},151:{op:"sax",mode:"zeroPageY",cycles:4},163:{op:"lax",mode:"indirectX",cycles:6},167:{op:"lax",mode:"zeroPage",cycles:3},175:{op:"lax",mode:"absolute",cycles:4},179:{op:"lax",mode:"indirectY",cycles:5,pageCross:!0},183:{op:"lax",mode:"zeroPageY",cycles:4},191:{op:"lax",mode:"absoluteY",cycles:4,pageCross:!0},195:{op:"dcp",mode:"indirectX",cycles:8},199:{op:"dcp",mode:"zeroPage",cycles:5},207:{op:"dcp",mode:"absolute",cycles:6},211:{op:"dcp",mode:"indirectY",cycles:8},215:{op:"dcp",mode:"zeroPageX",cycles:6},219:{op:"dcp",mode:"absoluteY",cycles:7},223:{op:"dcp",mode:"absoluteX",cycles:7},227:{op:"isb",mode:"indirectX",cycles:8},231:{op:"isb",mode:"zeroPage",cycles:5},239:{op:"isb",mode:"absolute",cycles:6},243:{op:"isb",mode:"indirectY",cycles:8},247:{op:"isb",mode:"zeroPageX",cycles:6},251:{op:"isb",mode:"absoluteY",cycles:7},255:{op:"isb",mode:"absoluteX",cycles:7},11:{op:"anc",mode:"immediate",cycles:2},43:{op:"anc",mode:"immediate",cycles:2},75:{op:"alr",mode:"immediate",cycles:2},107:{op:"arr",mode:"immediate",cycles:2},139:{op:"xaa",mode:"immediate",cycles:2},171:{op:"lax",mode:"immediate",cycles:2},187:{op:"las",mode:"absoluteY",cycles:4,pageCross:!0},203:{op:"sbx",mode:"immediate",cycles:2},155:{op:"tas",mode:"absoluteY",cycles:5},156:{op:"shy",mode:"absoluteX",cycles:5},158:{op:"shx",mode:"absoluteY",cycles:5},159:{op:"sha",mode:"absoluteY",cycles:5},147:{op:"sha",mode:"zeroPageY",cycles:6},4:{op:"nop",mode:"zeroPage",cycles:3},12:{op:"nop",mode:"absolute",cycles:4},20:{op:"nop",mode:"zeroPageX",cycles:4},26:{op:"nop",mode:"implied",cycles:2},28:{op:"nop",mode:"absoluteX",cycles:4,pageCross:!0},52:{op:"nop",mode:"zeroPageX",cycles:4},58:{op:"nop",mode:"implied",cycles:2},60:{op:"nop",mode:"absoluteX",cycles:4,pageCross:!0},68:{op:"nop",mode:"zeroPage",cycles:3},84:{op:"nop",mode:"zeroPageX",cycles:4},90:{op:"nop",mode:"implied",cycles:2},92:{op:"nop",mode:"absoluteX",cycles:4,pageCross:!0},100:{op:"nop",mode:"zeroPage",cycles:3},116:{op:"nop",mode:"zeroPageX",cycles:4},122:{op:"nop",mode:"implied",cycles:2},124:{op:"nop",mode:"absoluteX",cycles:4,pageCross:!0},128:{op:"nop",mode:"immediate",cycles:2},130:{op:"nop",mode:"immediate",cycles:2},137:{op:"nop",mode:"immediate",cycles:2},194:{op:"nop",mode:"immediate",cycles:2},212:{op:"nop",mode:"zeroPageX",cycles:4},218:{op:"nop",mode:"implied",cycles:2},220:{op:"nop",mode:"absoluteX",cycles:4,pageCross:!0},226:{op:"nop",mode:"immediate",cycles:2},244:{op:"nop",mode:"zeroPageX",cycles:4},250:{op:"nop",mode:"implied",cycles:2},252:{op:"nop",mode:"absoluteX",cycles:4,pageCross:!0},235:{op:"sbc",mode:"immediate",cycles:2,duplicate:233}}}}reset(){this.a=0,this.x=0,this.y=0,this.sp=253,this.carryFlag=!1,this.zeroFlag=!1,this.interruptDisableFlag=!0,this.decimalModeFlag=!1,this.breakCommand=!1,this.overflowFlag=!1,this.negativeFlag=!1,this.cycles=0,this.totalCycles=0,this.instructionCount=0;const e=this.system.memory.read(65532),t=this.system.memory.read(65533);this.pc=t<<8|e,this.debug&&console.log(`CPU Reset: PC set to 0x${this.pc.toString(16)}`),this.nmiPending=!1,this.irqPending=!1,this.resetPending=!1}step(){if(this.nmiPending)return this.handleNMI(),this.nmiPending=!1,7;if(this.irqPending&&!this.interruptDisableFlag)return this.handleIRQ(),this.irqPending=!1,7;const e=this.system.memory.read(this.pc++),t=this.executeInstruction(e);return this.cycles+=t,this.totalCycles+=t,this.instructionCount++,t}executeInstruction(e){const t=(c,h=!1)=>{let f,p,g=!1,v;switch(c){case"immediate":return p=this.system.memory.read(this.pc++),{value:p,pageCrossed:!1};case"zeroPage":return f=this.system.memory.read(this.pc++),p=this.system.memory.read(f),{address:f,value:p,pageCrossed:!1};case"zeroPageX":return f=this.system.memory.read(this.pc++)+this.x&255,p=this.system.memory.read(f),{address:f,value:p,pageCrossed:!1};case"zeroPageY":return f=this.system.memory.read(this.pc++)+this.y&255,p=this.system.memory.read(f),{address:f,value:p,pageCrossed:!1};case"absolute":return f=this.readWord(this.pc),this.pc+=2,p=this.system.memory.read(f),{address:f,value:p,pageCrossed:!1};case"absoluteX":return v=this.readWord(this.pc),this.pc+=2,f=v+this.x&65535,g=(v&65280)!==(f&65280),p=this.system.memory.read(f),{address:f,value:p,pageCrossed:g,baseAddr:v};case"absoluteY":return v=this.readWord(this.pc),this.pc+=2,f=v+this.y&65535,g=(v&65280)!==(f&65280),p=this.system.memory.read(f),{address:f,value:p,pageCrossed:g,baseAddr:v};case"indirectX":const _=this.system.memory.read(this.pc++)+this.x&255;return f=this.readWordBug(_),p=this.system.memory.read(f),{address:f,value:p,pageCrossed:!1};case"indirectY":const S=this.system.memory.read(this.pc++);return v=this.readWordBug(S),f=v+this.y&65535,g=(v&65280)!==(f&65280),p=this.system.memory.read(f),{address:f,value:p,pageCrossed:g,baseAddr:v};case"indirect":const E=this.readWord(this.pc);return this.pc+=2,f=this.readWordBug(E),{address:f,pageCrossed:!1};case"accumulator":return{value:this.a,pageCrossed:!1};default:return{address:f,value:p,pageCrossed:g}}};let r=null,o=null;for(const c in this.instructions)if(this.instructions[c][e]){r=this.instructions[c][e],o=c;break}if(!r)return console.warn(`Unimplemented opcode: 0x${e.toString(16)}`),2;let u=r.cycles;switch(o){case"load":{const{value:c,pageCrossed:h}=t(r.mode);this[r.reg]=c,this.zeroFlag=this[r.reg]===0,this.negativeFlag=(this[r.reg]&128)!==0,r.pageCross&&h&&u++;break}case"store":{let c;switch(r.mode){case"zeroPage":c=this.system.memory.read(this.pc++);break;case"zeroPageX":c=this.system.memory.read(this.pc++)+this.x&255;break;case"zeroPageY":c=this.system.memory.read(this.pc++)+this.y&255;break;case"absolute":c=this.readWord(this.pc),this.pc+=2;break;case"absoluteX":c=this.readWord(this.pc)+this.x&65535,this.pc+=2;break;case"absoluteY":c=this.readWord(this.pc)+this.y&65535,this.pc+=2;break;case"indirectX":{const h=this.system.memory.read(this.pc++)+this.x&255;c=this.readWordBug(h);break}case"indirectY":{const h=this.system.memory.read(this.pc++);c=this.readWordBug(h)+this.y&65535;break}}r.hasOwnProperty("value")?this.system.memory.write(c,r.value):this.system.memory.write(c,this[r.reg]);break}case"transfer":{this[r.dest]=this[r.src],r.dest!=="sp"&&(this.zeroFlag=this[r.dest]===0,this.negativeFlag=(this[r.dest]&128)!==0);break}case"stack":{r.op==="push"?this.pushByte(this[r.reg]):r.op==="pushStatus"?this.pushByte(this.getStatusByte(!0)):r.op==="pull"?(this[r.reg]=this.popByte(),this.zeroFlag=this[r.reg]===0,this.negativeFlag=(this[r.reg]&128)!==0):r.op==="pullStatus"&&this.setStatusByte(this.popByte());break}case"logical":{if(r.op==="bit"){const{value:c}=t(r.mode);this.zeroFlag=(this.a&c)===0,this.overflowFlag=(c&64)!==0,this.negativeFlag=(c&128)!==0}else{const{value:c,pageCrossed:h}=t(r.mode);r.op==="and"?this.a&=c:r.op==="ora"?this.a|=c:r.op==="eor"&&(this.a^=c),this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0,r.pageCross&&h&&u++}break}case"arithmetic":{const{value:c,pageCrossed:h}=t(r.mode);r.op==="adc"?this.adc(c):r.op==="sbc"&&this.sbc(c),r.pageCross&&h&&u++;break}case"compare":{const{value:c,pageCrossed:h}=t(r.mode),f=this[r.reg],p=f-c;this.carryFlag=f>=c,this.zeroFlag=(p&255)===0,this.negativeFlag=(p&128)!==0,r.pageCross&&h&&u++;break}case"incdec":{if(r.reg)r.op==="inc"?this[r.reg]=this[r.reg]+1&255:this[r.reg]=this[r.reg]-1&255,this.zeroFlag=this[r.reg]===0,this.negativeFlag=(this[r.reg]&128)!==0;else{const{address:c}=t(r.mode);let h=this.system.memory.read(c);r.op==="incMem"?h=h+1&255:h=h-1&255,this.system.memory.write(c,h),this.zeroFlag=h===0,this.negativeFlag=(h&128)!==0}break}case"shift":{let c,h;if(r.mode==="accumulator")c=this.a;else{const f=t(r.mode);c=f.value,h=f.address}if(r.op==="asl")this.carryFlag=(c&128)!==0,c=c<<1&255;else if(r.op==="lsr")this.carryFlag=(c&1)!==0,c=c>>1&127;else if(r.op==="rol"){const f=this.carryFlag?1:0;this.carryFlag=(c&128)!==0,c=(c<<1|f)&255}else if(r.op==="ror"){const f=this.carryFlag?128:0;this.carryFlag=(c&1)!==0,c=(c>>1|f)&255}r.mode==="accumulator"?this.a=c:this.system.memory.write(h,c),this.zeroFlag=c===0,this.negativeFlag=(c&128)!==0;break}case"jump":{if(r.op==="jmp"){if(r.mode==="absolute")this.pc=this.readWord(this.pc);else if(r.mode==="indirect"){const c=this.readWord(this.pc);this.pc=this.readWordBug(c)}}else if(r.op==="jsr"){const c=this.readWord(this.pc);this.pushWord(this.pc+1),this.pc=c}else if(r.op==="rts")this.pc=this.popWord()+1;else if(r.op==="rti"){const c=this.popByte();this.setStatusByte(c),this.pc=this.popWord()}break}case"branch":{const c=r.condition+"Flag",h=this[c]===r.expected,f=this.system.memory.read(this.pc++);let p=u;if(h){const g=this.pc;this.pc=this.pc+(f>=128?f-256:f)&65535,p++,(g&65280)!==(this.pc&65280)&&p++}u=p;break}case"flags":{this[r.flag+"Flag"]=r.value;break}case"other":{r.op==="brk"&&(this.pc++,this.pushWord(this.pc),this.pushByte(this.getStatusByte(!0)),this.interruptDisableFlag=!0,this.pc=this.readWord(65534));break}case"unofficial":{switch(r.op){case"jam":console.warn("CPU JAM instruction encountered at",this.pc.toString(16),e.toString(16)),this.system.stop(),this.pc++;break;case"nop":if(r.mode){const{pageCrossed:c}=t(r.mode);r.pageCross&&c&&u++}break;case"slo":{const{address:c,value:h}=t(r.mode);this.carryFlag=(h&128)!==0;const f=h<<1&255;this.system.memory.write(c,f),this.a|=f,this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0;break}case"rla":{const{address:c,value:h}=t(r.mode),f=this.carryFlag;this.carryFlag=(h&128)!==0;const p=h<<1&255|(f?1:0);this.system.memory.write(c,p),this.a&=p,this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0;break}case"dea":this.a=this.a-1&255,this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0;break;case"shx":{const{address:c,baseAddr:h}=t(r.mode),f=this.x&(c>>8)+1;(h&65280)===(c&65280)&&this.system.memory.write(c,f);break}case"isb":{const{address:c,value:h}=t(r.mode),f=h+1&255;this.system.memory.write(c,f),this.sbc(f);break}case"sre":{const{address:c,value:h}=t(r.mode);this.carryFlag=(h&1)!==0;const f=h>>1&127;this.system.memory.write(c,f),this.a^=f,this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0;break}case"rra":{const{address:c,value:h}=t(r.mode),f=this.carryFlag?128:0;this.carryFlag=(h&1)!==0;const p=(h>>1|f)&255;this.system.memory.write(c,p),this.adc(p);break}case"sax":{let c;switch(r.mode){case"indirectX":{const h=this.system.memory.read(this.pc++)+this.x&255;c=this.readWordBug(h);break}case"zeroPage":c=this.system.memory.read(this.pc++);break;case"absolute":c=this.readWord(this.pc),this.pc+=2;break;case"zeroPageY":c=this.system.memory.read(this.pc++)+this.y&255;break}this.system.memory.write(c,this.a&this.x);break}case"lax":{const{value:c,pageCrossed:h}=t(r.mode);this.a=this.x=c,this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0,r.pageCross&&h&&u++;break}case"las":{const{value:c,pageCrossed:h}=t(r.mode),f=c&this.sp;this.a=this.x=this.sp=f,this.zeroFlag=f===0,this.negativeFlag=(f&128)!==0,r.pageCross&&h&&u++;break}case"dcp":{const{address:c,value:h}=t(r.mode),f=h-1&255;this.system.memory.write(c,f);const p=this.a-f;this.carryFlag=this.a>=f,this.zeroFlag=(p&255)===0,this.negativeFlag=(p&128)!==0;break}case"anc":{const{value:c}=t(r.mode);this.a&=c,this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0,this.carryFlag=(this.a&128)!==0;break}case"alr":{const{value:c}=t(r.mode);this.a&=c,this.carryFlag=(this.a&1)!==0,this.a=this.a>>1&127,this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0;break}case"arr":{const{value:c}=t(r.mode);this.a&=c;const h=this.carryFlag?128:0;this.a=(this.a>>1|h)&255,this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0,this.carryFlag=(this.a&64)!==0,this.overflowFlag=(this.a&64^(this.a&32)<<1)!==0;break}case"xaa":{const{value:c}=t(r.mode);this.a=this.x&c,this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0;break}case"sbx":{const{value:c}=t(r.mode),h=(this.a&this.x)-c;this.x=h&255,this.carryFlag=h>=0,this.zeroFlag=this.x===0,this.negativeFlag=(this.x&128)!==0;break}case"tas":{const{address:c,baseAddr:h}=t(r.mode);this.sp=this.a&this.x;const f=this.a&this.x&(c>>8)+1;(h&65280)===(c&65280)&&this.system.memory.write(c,f);break}case"shy":{const{address:c,baseAddr:h}=t(r.mode),f=this.y&(c>>8)+1;(h&65280)===(c&65280)&&this.system.memory.write(c,f);break}case"sha":{const{address:c,baseAddr:h}=t(r.mode),f=this.a&this.x&(c>>8)+1;(h&65280)===(c&65280)&&this.system.memory.write(c,f);break}default:{if(r.duplicate)return this.executeInstruction(r.duplicate);console.warn("Unknown unofficial opcode encountered",e.toString(16))}}break}}return u}adc(e){{const t=this.a+e+(this.carryFlag?1:0);this.carryFlag=t>255;const r=t&255;this.overflowFlag=((this.a^r)&(e^r)&128)!==0,this.a=r,this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0}}sbc(e){{const t=e^255,r=this.a+t+(this.carryFlag?1:0);this.carryFlag=r>=256;const o=r&255;this.overflowFlag=((this.a^o)&(t^o)&128)!==0,this.a=o,this.zeroFlag=this.a===0,this.negativeFlag=(this.a&128)!==0}}readWord(e){const t=this.system.memory.read(e);return this.system.memory.read(e+1&65535)<<8|t}readWordBug(e){const t=this.system.memory.read(e),r=(e&255)===255?e&65280:e+1;return this.system.memory.read(r)<<8|t}triggerNMI(){this.nmiPending=!0}triggerIRQ(){this.irqPending=!0}handleNMI(){this.pushWord(this.pc),this.pushByte(this.getStatusByte(!1)),this.interruptDisableFlag=!0;const e=this.system.memory.read(65530),t=this.system.memory.read(65531);this.pc=t<<8|e}handleIRQ(){this.pushWord(this.pc),this.pushByte(this.getStatusByte(!1)),this.interruptDisableFlag=!0;const e=this.system.memory.read(65534),t=this.system.memory.read(65535);this.pc=t<<8|e}pushByte(e){this.system.memory.write(256+this.sp,e),this.sp=this.sp-1&255}popByte(){return this.sp=this.sp+1&255,this.system.memory.read(256+this.sp)}pushWord(e){const t=e>>8&255,r=e&255;this.pushByte(t),this.pushByte(r)}popWord(){const e=this.popByte();return this.popByte()<<8|e}getStatusByte(e){let t=0;return this.carryFlag&&(t|=1),this.zeroFlag&&(t|=2),this.interruptDisableFlag&&(t|=4),this.decimalModeFlag&&(t|=8),(e||this.breakCommand)&&(t|=16),t|=32,this.overflowFlag&&(t|=64),this.negativeFlag&&(t|=128),t}setStatusByte(e){this.carryFlag=(e&1)!==0,this.zeroFlag=(e&2)!==0,this.interruptDisableFlag=(e&4)!==0,this.decimalModeFlag=(e&8)!==0,this.breakCommand=(e&16)!==0,this.overflowFlag=(e&64)!==0,this.negativeFlag=(e&128)!==0}}class SM{constructor(e){this.system=e,this.control=0,this.mask=0,this.status=0,this.oamAddr=0,this.oamData=0,this.scroll=0,this.addr=0,this.data=0,this.v=0,this.t=0,this.x=0,this.w=0,this.vram=new Uint8Array(4096),this.paletteRAM=new Uint8Array(32),this.oamMemory=new Uint8Array(256),this.secondaryOAM=new Uint8Array(32),this.frameBuffer=new Uint8Array(256*240*4),this.scanline=0,this.cycle=0,this.frame=0,this.nmiOccurred=!1,this.nmiOutput=!1,this.nmiPrevious=!1,this.suppressNMI=!1,this.readBuffer=0,this.nextTileId=0,this.nextTileAttribute=0,this.nextTileLow=0,this.nextTileHigh=0,this.spriteCount=0,this.spritePositions=new Uint8Array(8),this.spritePatterns=new Uint16Array(8),this.spritePriorities=new Uint8Array(8),this.spriteIndexes=new Uint8Array(8),this.spriteAttributes=new Uint8Array(8),this.currentSpriteIndex=0,this.currentSpriteLowByte=0,this.currentSpriteFlipHorizontal=!1,this.spriteCount=0,this.bgShiftLow=0,this.bgShiftHigh=0,this.attrShiftLow=0,this.attrShiftHigh=0,this.nesPalette=[[128,128,128],[0,61,166],[0,18,176],[68,0,150],[161,0,94],[199,0,40],[186,6,0],[140,23,0],[92,47,0],[16,69,0],[5,74,0],[0,71,46],[0,65,102],[0,0,0],[5,5,5],[5,5,5],[199,199,199],[0,119,255],[33,85,255],[130,55,250],[235,47,181],[255,41,80],[255,34,0],[214,50,0],[196,98,0],[53,128,0],[5,143,0],[0,138,85],[0,153,204],[33,33,33],[9,9,9],[9,9,9],[255,255,255],[15,215,255],[105,162,255],[212,128,255],[255,69,243],[255,97,139],[255,136,51],[255,156,18],[250,188,32],[159,227,14],[43,240,53],[12,240,164],[5,251,255],[94,94,94],[13,13,13],[13,13,13],[255,255,255],[166,252,255],[179,236,255],[218,171,235],[255,168,249],[255,171,179],[255,210,176],[255,239,166],[255,247,156],[215,232,149],[166,237,175],[162,242,218],[153,255,252],[221,221,221],[17,17,17],[17,17,17]],this.debugMode=!1,this.showPatternTable=!1,this.showNametable=!1,this.layerVisualizationEnabled=!1,this.backgroundLayer=new Uint32Array(256*240),this.spriteLayer=new Uint32Array(256*240)}reset(){this.control=0,this.mask=0,this.status=0,this.oamAddr=0,this.oamData=0,this.scroll=0,this.addr=0,this.data=0,this.v=0,this.t=0,this.x=0,this.w=0,this.vram.fill(0),this.paletteRAM.fill(0),this.oamMemory.fill(0),this.secondaryOAM.fill(0),this.frameBuffer.fill(0),this.scanline=0,this.cycle=0,this.frame=0,this.nmiOccurred=!1,this.nmiOutput=!1,this.nmiPrevious=!1,this.suppressNMI=!1,this.readBuffer=0,this.nextTileId=0,this.nextTileAttribute=0,this.nextTileLow=0,this.nextTileHigh=0,this.spriteCount=0,this.spritePositions.fill(0),this.spritePatterns.fill(0),this.spritePriorities.fill(0),this.spriteIndexes.fill(0),this.spriteAttributes.fill(0),this.currentSpriteIndex=0,this.currentSpriteLowByte=0,this.currentSpriteFlipHorizontal=!1,this.spriteCount=0,this.bgShiftLow=0,this.bgShiftHigh=0,this.attrShiftLow=0,this.attrShiftHigh=0,this.backgroundLayer.fill(0),this.spriteLayer.fill(0)}step(e){for(let t=0;t<e;t++)this.tick(),this.nmiOccurred&&this.nmiOutput&&!this.nmiPrevious&&!this.suppressNMI&&this.system.cpu.triggerNMI(),this.nmiPrevious=this.nmiOccurred&&this.nmiOutput}tick(){if(this.scanline===261&&this.cycle===1&&(this.status&=-129,this.status&=-65,this.status&=-33,this.nmiOccurred=!1),(this.scanline<240||this.scanline===261)&&(this.mask&24)!==0){if(this.cycle>=1&&this.cycle<=256||this.cycle>=321&&this.cycle<=336){switch(this.updateShiftRegisters(),this.cycle%8){case 1:this.fetchNameTableByte();break;case 3:this.fetchAttributeTableByte();break;case 5:this.fetchLowTileByte();break;case 7:this.fetchHighTileByte();break;case 0:this.storeTileData(),this.incrementX();break}this.cycle===256&&this.incrementY()}if(this.cycle===257&&(this.copyHorizontalBits(),this.evaluateSprites()),this.cycle>=257&&this.cycle<=320){const e=Math.floor((this.cycle-257)/8);switch(this.cycle%8){case 1:this.fetchSpriteGarbageByte();break;case 3:break;case 5:this.fetchSpriteLowTileByte(e);break;case 7:this.fetchSpriteHighTileByte(e);break}}this.scanline===261&&this.cycle>=280&&this.cycle<=304&&this.copyVerticalBits()}this.scanline===241&&this.cycle===1&&(this.suppressNMI||(this.status|=128,this.nmiOccurred=!0),this.suppressNMI=!1),this.scanline<240&&this.cycle>=1&&this.cycle<=256&&this.renderPixel(),this.cycle++,this.cycle>340&&(this.cycle=0,this.scanline++,this.scanline>261&&(this.scanline=0,this.frame++,this.frame&1&&(this.mask&24)!==0&&(this.cycle=1)))}updateShiftRegisters(){(this.mask&24)!==0&&(this.bgShiftLow<<=1,this.bgShiftHigh<<=1,this.attrShiftLow<<=1,this.attrShiftHigh<<=1,this.bgShiftLow&=65535,this.bgShiftHigh&=65535,this.attrShiftLow&=65535,this.attrShiftHigh&=65535)}storeTileData(){if((this.mask&24)!==0){this.bgShiftLow=this.bgShiftLow&65280|this.nextTileLow,this.bgShiftHigh=this.bgShiftHigh&65280|this.nextTileHigh;const e=(this.nextTileAttribute&1)!==0?255:0,t=(this.nextTileAttribute&2)!==0?255:0;this.attrShiftLow=this.attrShiftLow&65280|e,this.attrShiftHigh=this.attrShiftHigh&65280|t}}fetchNameTableByte(){if((this.mask&24)===0)return;const t=8192|this.v&4095;this.nextTileId=this.ppuRead(t)}fetchAttributeTableByte(){if((this.mask&24)===0)return;const e=this.v,t=9152|e&3072|e>>4&56|e>>2&7,r=this.ppuRead(t),o=e>>4&4|e&2;this.nextTileAttribute=r>>o&3}fetchLowTileByte(){if((this.mask&24)===0)return;const e=(this.control&16)!==0?4096:0,t=this.v>>12&7,r=e+this.nextTileId*16+t;this.nextTileLow=this.ppuRead(r)}fetchHighTileByte(){if((this.mask&24)===0)return;const e=(this.control&16)!==0?4096:0,t=this.v>>12&7,r=e+this.nextTileId*16+t+8;this.nextTileHigh=this.ppuRead(r)}fetchSpriteGarbageByte(){(this.mask&24)!==0&&this.ppuRead(8192|this.v&4095)}fetchSpriteLowTileByte(e){if((this.mask&24)===0)return;if(this.secondaryOAM[e*4]===255){this.currentSpriteLowByte=0;return}const t=this.scanline+1,r=this.secondaryOAM[e*4],o=this.secondaryOAM[e*4+1],u=this.secondaryOAM[e*4+2],c=this.control&32?16:8,h=(u&128)!==0;let f=t-r;h&&(f=c-1-f);let p;if(c===8)p=(this.control&8?4096:0)+o*16+f;else{const g=o&1?4096:0,v=o&254;f<8?p=g+v*16+f:p=g+v*16+16+(f-8)}this.currentSpriteLowByte=this.ppuRead(p),this.currentSpriteFlipHorizontal=(u&64)!==0}fetchSpriteHighTileByte(e){if((this.mask&24)===0)return;if(this.secondaryOAM[e*4]===255){this.storeCurrentSpritePattern(e,0);return}const t=this.scanline+1,r=this.secondaryOAM[e*4],o=this.secondaryOAM[e*4+1],u=this.secondaryOAM[e*4+2],c=this.control&32?16:8,h=(u&128)!==0;let f=t-r;h&&(f=c-1-f);let p;if(c===8)p=(this.control&8?4096:0)+o*16+f+8;else{const _=o&1?4096:0,S=o&254;f<8?p=_+S*16+f+8:p=_+S*16+16+(f-8)+8}const g=this.ppuRead(p);let v;this.currentSpriteFlipHorizontal?v=this.flipByte(this.currentSpriteLowByte)|this.flipByte(g)<<8:v=this.currentSpriteLowByte|g<<8,this.storeCurrentSpritePattern(e,v)}storeCurrentSpritePattern(e,t){this.spritePatterns[e]=t}incrementX(){(this.mask&24)!==0&&((this.v&31)===31?(this.v&=-32,this.v^=1024):this.v+=1)}incrementY(){if((this.mask&24)===0)return;if((this.v>>12&7)===7){this.v&=-28673;const t=this.v>>5&31;t===29?(this.v&=-993,this.v^=2048):t===31?this.v&=-993:this.v+=32}else this.v+=4096}copyHorizontalBits(){(this.mask&24)!==0&&(this.v=this.v&-1056|this.t&1055)}copyVerticalBits(){(this.mask&24)!==0&&(this.v=this.v&-31713|this.t&31712)}evaluateSprites(){this.spriteCount=0,this.status&=-33;const e=this.control&32?16:8,t=this.scanline+1;if(!(t>239)){for(let r=0;r<64;r++){const o=r*4,u=this.oamMemory[o];if(t>=u&&t<u+e)if(this.spriteCount<=8){const c=this.spriteCount;this.spriteIndexes[c]=r,this.secondaryOAM[c*4]=this.oamMemory[o],this.secondaryOAM[c*4+1]=this.oamMemory[o+1],this.secondaryOAM[c*4+2]=this.oamMemory[o+2],this.secondaryOAM[c*4+3]=this.oamMemory[o+3],this.spritePositions[c]=this.oamMemory[o+3],this.spriteAttributes[c]=this.oamMemory[o+2],this.spritePriorities[c]=this.oamMemory[o+2]>>5&1,this.spriteCount++}else{this.status|=32;break}}for(let r=this.spriteCount;r<8;r++)this.secondaryOAM[r*4]=255,this.spriteIndexes[r]=64}}flipByte(e){return e=(e&240)>>4|(e&15)<<4,e=(e&204)>>2|(e&51)<<2,e=(e&170)>>1|(e&85)<<1,e}renderPixel(){const e=this.cycle-1,t=this.scanline,r=(this.mask&8)!==0,o=(this.mask&16)!==0,u=r?this.getBackgroundPixel():{pixel:0,color:this.ppuRead(16128)&63},c=o?this.getSpritePixel(e):{pixel:0};this.handleSpriteZeroHit(e,u.pixel,c.pixel,c.isZero);const{color:h,layer:f}=this.getFinalPixelColor(u,c);this.setPixel(e,t,h,f)}getBackgroundPixel(){const t=15-this.x,r=this.bgShiftLow>>t&1,o=this.bgShiftHigh>>t&1,u=this.attrShiftLow>>t&1,c=this.attrShiftHigh>>t&1,h=o<<1|r,f=c<<1|u;let p=this.ppuRead(16128)&63;if(h!==0){const g=16128+f*4+h;p=this.ppuRead(g)&63}return{pixel:h,palette:f,color:p}}getSpritePixel(e){const t=(this.mask&4)!==0;if(e<8&&!t)return{pixel:0};for(let r=0;r<this.spriteCount;r++){const o=this.spritePositions[r];if(e<o||e>=o+8)continue;const c=7-(e-o),h=this.spritePatterns[r]>>c&1,p=(this.spritePatterns[r]>>8>>c&1)<<1|h;if(p===0)continue;const v=16128+((this.spriteAttributes[r]&3)+4)*4+p,_=this.ppuRead(v)&63,S=this.spritePriorities[r],E=this.spriteIndexes[r]===0;return{pixel:p,color:_,priority:S,isZero:E}}return{pixel:0}}handleSpriteZeroHit(e,t,r,o){if(t===0||r===0||!o||e>=255)return;const u=e+1,c=(this.mask&2)===0,h=(this.mask&4)===0;(u>=8||!c&&!h)&&(this.status|=64)}getFinalPixelColor(e,t){const r={background:!1,sprite:!1};return e.pixel===0&&t.pixel===0?(r.background=!0,{color:e.color,layer:r}):t.pixel===0?(r.background=!0,{color:e.color,layer:r}):e.pixel===0?(r.sprite=!0,{color:t.color,layer:r}):t.priority===0?(r.sprite=!0,{color:t.color,layer:r}):(r.background=!0,{color:e.color,layer:r})}setPixel(e,t,r,o={background:!1,sprite:!1}){if(e<0||e>=256||t<0||t>=240)return;const c=((239-t)*256+e)*4,h=this.nesPalette[r&63];if(this.frameBuffer[c]=h[0],this.frameBuffer[c+1]=h[1],this.frameBuffer[c+2]=h[2],this.frameBuffer[c+3]=255,this.layerVisualizationEnabled){const f=h[0],p=h[1],g=h[2],v=255<<24|g<<16|p<<8|f;o.background?(this.backgroundLayer[t*256+e]=v,this.spriteLayer[t*256+e]=0):o.sprite&&(this.spriteLayer[t*256+e]=v,this.backgroundLayer[t*256+e]=0)}}clearLayerData(){this.backgroundLayer.fill(0),this.spriteLayer.fill(0)}setLayerVisualizationEnabled(e){this.layerVisualizationEnabled=e,e&&(this.backgroundLayer.fill(0),this.spriteLayer.fill(0))}writeMask(e){this.mask=e}writeScroll(e){if(this.w===0){this.x=e&7;const t=e>>3;this.t=this.t&-32|t,this.w=1}else{const t=(e&7)<<12;this.t=this.t&-28673|t;const o=(e&248)>>3<<5;this.t=this.t&-993|o,this.w=0}}writeAddress(e){this.w===0?(this.t=this.t&255|(e&63)<<8,this.w=1):(this.t=this.t&65280|e,this.v=this.t,this.w=0)}writeControl(e){const t=this.nmiOutput;this.control=e,this.t=this.t&-3073|(e&3)<<10,this.nmiOutput=(e&128)!==0,!t&&this.nmiOutput&&this.nmiOccurred&&!this.suppressNMI&&this.system.cpu.triggerNMI()}writeOAMAddress(e){this.oamAddr=e}writeOAMData(e){const t=this.oamAddr;this.oamMemory[t]=e,this.oamAddr=this.oamAddr+1&255}readOAM(){return this.oamMemory[this.oamAddr]}writeData(e){const t=this.v&16383;this.ppuWrite(t,e),this.v+=this.control&4?32:1,this.v&=16383}readData(){const e=this.v&16383;let t=this.readBuffer;return this.readBuffer=this.ppuRead(e),e>=16128&&(t=this.ppuRead(e)),this.v+=this.control&4?32:1,this.v&=16383,t}ppuRead(e){e&=16383;let t=0;if(!this.system.mapper)return t;if(e<8192)t=this.system.mapper.ppuRead(e);else if(e<12288){const r=this.mirrorAddress(e);t=this.vram[r]}else{if(e<16128)return this.ppuRead(e-4096);e&=31,(e&19)===16&&(e&=15),t=this.paletteRAM[e]}return t}ppuWrite(e,t){if(e&=16383,!!this.system.mapper)if(e<8192)this.system.mapper.ppuWrite(e,t);else if(e<12288){const r=this.mirrorAddress(e);this.vram[r]=t}else e<16128?this.ppuWrite(e-4096,t):(e&=31,(e&19)===16&&(e&=15),this.paletteRAM[e]=t)}mirrorAddress(e){const t=e&4095,r=this.system.mapper.getMirroring(),o=t>>10&3,u=t&1023;switch(r){case 0:return(o&2?1024:0)|u;case 1:return(o&1?1024:0)|u;case 2:return u;case 3:return 1024|u;default:return t}}}class MM{constructor(e){this.system=e,this.sampleRate=44100,this.cyclesPerSample=Math.floor(1789773/this.sampleRate),this.outputBuffer=new Float32Array(this.sampleRate),this.bufferIndex=0,this.audioContext=null,this.audioNode=null,this.channelOutput={pulse1:0,pulse2:0,triangle:0,noise:0,dmc:0},this.pulse1={enabled:!1,volume:0,constantVolume:!1,lengthCounterHalt:!1,envelopeLoop:!1,envelopePeriod:0,envelopeValue:0,envelopeCounter:0,envelopeReset:!1,dutyMode:0,dutyValue:0,dutyPosition:0,sweepEnabled:!1,sweepPeriod:0,sweepNegate:!1,sweepShift:0,sweepCounter:0,sweepReload:!1,period:0,timerCounter:0,lengthCounter:0,sequenceCounter:0},this.pulse2={enabled:!1,volume:0,constantVolume:!1,lengthCounterHalt:!1,envelopeLoop:!1,envelopePeriod:0,envelopeValue:0,envelopeCounter:0,envelopeReset:!1,dutyMode:0,dutyValue:0,dutyPosition:0,sweepEnabled:!1,sweepPeriod:0,sweepNegate:!1,sweepShift:0,sweepCounter:0,sweepReload:!1,period:0,timerCounter:0,lengthCounter:0,sequenceCounter:0},this.triangle={enabled:!1,linearCounterControl:!1,linearCounterPeriod:0,linearCounter:0,linearCounterReload:!1,lengthCounterHalt:!1,period:0,timerCounter:0,lengthCounter:0,sequencePosition:0},this.noise={enabled:!1,volume:0,constantVolume:!1,lengthCounterHalt:!1,envelopeLoop:!1,envelopePeriod:0,envelopeValue:0,envelopeCounter:0,envelopeReset:!1,mode:!1,period:0,timerCounter:0,lengthCounter:0,shiftRegister:1},this.dmc={enabled:!1,irqEnabled:!1,loopEnabled:!1,rate:0,directLoad:0,sampleAddress:0,sampleLength:0,currentAddress:0,bytesRemaining:0,shiftRegister:0,bitsRemaining:0,outputLevel:0,silenceFlag:!1,timerCounter:0},this.frameIRQFlag=!1,this.dmcIRQFlag=!1,this.frameCounter=0,this.frameCounterMode=0,this.frameIRQInhibit=!1,this.frameCycles=0,this.frameSequence=0,this.initLookupTables()}initLookupTables(){this.dutyPatterns=[[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,1,1],[0,0,0,0,1,1,1,1],[1,1,1,1,1,1,0,0]],this.triangleSequence=[15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],this.noisePeriods=[4,8,16,32,64,96,128,160,202,254,380,508,762,1016,2034,4068],this.dmcRates=[428,380,340,320,286,254,226,214,190,160,142,128,106,84,72,54],this.lengthTable=[10,254,20,2,40,4,80,6,160,8,60,10,14,12,26,14,12,16,24,18,48,20,96,22,192,24,72,26,16,28,32,30],this.pulseTable=new Array(31);for(let e=0;e<31;e++)this.pulseTable[e]=95.52/(8128/e+100);this.tndTable=new Array(203);for(let e=0;e<203;e++)this.tndTable[e]=163.67/(24329/e+100)}async initAudio(){if(typeof window>"u")return;this.audioContext=new window.AudioContext,this.sampleRate=this.audioContext.sampleRate,this.cyclesPerSample=1789773/this.sampleRate,this.cyclesRemainder=0;const e=64;this.buffer=new Float32Array(e),this.bufferPosition=0,this.bufferUnderrun=!1,this.bufferOverrun=!1;const t=`
class NESAPUProcessor extends AudioWorkletProcessor {
    constructor() {
        super();
        this.bufferQueue = [];
        this.currentBuffer = null;
        this.bufferPosition = 0;
        this.previousSample = 0;
        
        // More stable buffer and timing parameters
        this.bufferUnderrunCount = 0;
        this.sampleRate = 44100;
        this.bufferThreshold = 2; // Minimum number of buffers to keep ready
        
        this.port.onmessage = (e) => {
            if (e.data.type === 'buffer') {
                this.bufferQueue.push(e.data.buffer);
                // Clear underrun counter when we receive data
                if (this.bufferQueue.length >= this.bufferThreshold) {
                    this.bufferUnderrunCount = 0;
                }
            }
        };
        
        // Request initial buffer
        this.port.postMessage({ type: 'needBuffer' });
    }

    process(inputs, outputs, parameters) {
        const output = outputs[0][0];
        
        // Process each sample
        for (let i = 0; i < output.length; i++) {
            // Buffer management
            if (!this.currentBuffer || this.bufferPosition >= this.currentBuffer.length) {
                if (this.bufferQueue.length > 0) {
                    this.currentBuffer = this.bufferQueue.shift();
                    this.bufferPosition = 0;
                    
                    // Request more data when queue gets low
                    if (this.bufferQueue.length < this.bufferThreshold) {
                        this.port.postMessage({ type: 'needBuffer' });
                    }
                } else {
                    // Buffer underrun handling - crucial for preventing crackling
                    this.bufferUnderrunCount++;
                    
                    // Use very gentle fade out to prevent clicks
                    const fadeCoeff = Math.max(0.98, 1 - (this.bufferUnderrunCount / 1000));
                    output[i] = this.previousSample * fadeCoeff;
                    this.previousSample *= fadeCoeff;
                    
                    // Request buffer more aggressively during underrun
                    this.port.postMessage({ type: 'needBuffer', urgent: true });
                    continue;
                }
            }
            
            // Get the next sample with minimal processing to avoid artifacts
            const sample = this.currentBuffer[this.bufferPosition++];
            
            // Only apply very light smoothing to prevent aliasing without causing muffled sound
            const smoothingFactor = 0.2; // Just enough to remove high-frequency artifacts
            const smoothedSample = this.previousSample * smoothingFactor + sample * (1 - smoothingFactor);
            
            output[i] = smoothedSample;
            this.previousSample = smoothedSample;
        }

        return true;
    }
}

registerProcessor('nes-apu-processor', NESAPUProcessor);`;try{await this.audioContext.audioWorklet.addModule(URL.createObjectURL(new Blob([t],{type:"application/javascript"}))),this.audioNode=new AudioWorkletNode(this.audioContext,"nes-apu-processor",{outputChannelCount:[1],processorOptions:{sampleRate:this.sampleRate}}),this.audioNode.connect(this.audioContext.destination),this.audioNode.port.onmessage=r=>{r.data.type==="needBuffer"&&(r.data.urgent?this.generateAndSendBuffer():this.sendBuffer())},this.lastTimestamp=performance.now(),this.sampleCounter=0,console.log("AudioWorklet initialized at sample rate:",this.sampleRate)}catch(r){console.error("Failed to initialize AudioWorklet:",r)}}generateSample(){const e=this.getPulse1Output(),t=this.getPulse2Output(),r=this.getTriangleOutput(),o=this.getNoiseOutput(),u=this.getDMCOutput(),c=this.pulseTable[e+t],h=this.tndTable[3*r+2*o+u],f=Math.max(-.98,Math.min(.98,c+h));this.bufferPosition<this.buffer.length?this.buffer[this.bufferPosition++]=f:(this.bufferOverrun=!0,console.warn("Audio buffer overrun")),this.bufferPosition>=this.buffer.length*.8&&this.sendBuffer()}sendBuffer(){if(this.bufferPosition>0){const e=this.buffer.slice(0,this.bufferPosition);try{this.audioNode.port.postMessage({type:"buffer",buffer:e}),this.buffer.fill(0),this.bufferPosition=0,this.bufferUnderrun=!1}catch(t){console.error("Failed to send audio buffer:",t)}}else this.bufferUnderrun=!0}generateAndSendBuffer(){if(this.bufferPosition===0){const e=new Float32Array(512);for(let t=0;t<e.length;t++)e[t]=Math.random()*.001-5e-4;try{this.audioNode.port.postMessage({type:"buffer",buffer:e})}catch(t){console.error("Failed to send emergency buffer:",t)}}else this.sendBuffer()}step(e){if(this.cyclesPerSample)for(this.sampleCounter+=e,this.cyclesRemainder+=e%1,this.cyclesRemainder>=1&&(this.sampleCounter+=Math.floor(this.cyclesRemainder),this.cyclesRemainder-=Math.floor(this.cyclesRemainder)),this.updateTimers(e),this.updateFrameCounter(e);this.sampleCounter>=this.cyclesPerSample;)this.sampleCounter-=this.cyclesPerSample,this.generateSample()}resumeAudio(){return this.audioContext&&this.audioContext.state!=="running"?this.audioContext.resume().then(()=>{console.log("Audio context resumed successfully"),this.generateAndSendBuffer(),this.lastTimestamp=performance.now()}).catch(e=>{console.error("Failed to resume audio context:",e)}):Promise.resolve()}pauseAudio(){return this.audioContext&&this.audioContext.state==="running"?this.audioContext.suspend().then(()=>{console.log("Audio context suspended"),this.buffer.fill(0),this.bufferPosition=0,this.sampleCounter=0,this.cyclesRemainder=0}).catch(e=>{console.error("Failed to suspend audio context:",e)}):Promise.resolve()}generateTestTone(e=1){if(!this.audioContext||!this.outputBuffer){console.error("Audio not initialized");return}console.log("Generating test tone");const t=440,r=this.audioContext.sampleRate,o=Math.min(e*r,this.outputBuffer.length);for(let u=0;u<o;u++)this.outputBuffer[u]=.3*Math.sin(2*Math.PI*t*u/r);this.bufferIndex=o,this.bufferReady=!0,console.log(`Generated ${o} samples of test tone`),this.audioContext.state==="running"&&this.audioNode?(console.log("Sending test tone to audio output"),this.audioNode.port.postMessage({type:"buffer",buffer:this.outputBuffer.slice(0,this.bufferIndex)}),this.outputBuffer.fill(0),this.bufferIndex=0):console.warn("AudioContext not running, test tone prepared but not sent")}fallbackAudioInit(){if(console.warn("Using fallback audio implementation"),typeof window>"u")return;this.audioContext=new window.AudioContext,this.sampleRate=this.audioContext.sampleRate,this.cyclesPerSample=Math.floor(1789773/this.sampleRate);const e=4096;this.scriptNode=this.audioContext.createScriptProcessor(e,0,1),this.scriptNode.onaudioprocess=t=>{const r=t.outputBuffer.getChannelData(0);if(this.bufferReady){for(let o=0;o<r.length;o++)r[o]=o<this.bufferIndex?this.outputBuffer[o]:0;this.outputBuffer.fill(0),this.bufferIndex=0,this.bufferReady=!1}else r.fill(0)},this.scriptNode.connect(this.audioContext.destination),this.sampleCounter=0}reset(){this.pulse1={enabled:!1,volume:0,constantVolume:!1,lengthCounterHalt:!1,envelopeLoop:!1,envelopePeriod:0,envelopeValue:0,envelopeCounter:0,envelopeReset:!1,dutyMode:0,dutyValue:0,dutyPosition:0,sweepEnabled:!1,sweepPeriod:0,sweepNegate:!1,sweepShift:0,sweepCounter:0,sweepReload:!1,period:0,timerCounter:0,lengthCounter:0,sequenceCounter:0},this.pulse2={enabled:!1,volume:0,constantVolume:!1,lengthCounterHalt:!1,envelopeLoop:!1,envelopePeriod:0,envelopeValue:0,envelopeCounter:0,envelopeReset:!1,dutyMode:0,dutyValue:0,dutyPosition:0,sweepEnabled:!1,sweepPeriod:0,sweepNegate:!1,sweepShift:0,sweepCounter:0,sweepReload:!1,period:0,timerCounter:0,lengthCounter:0,sequenceCounter:0},this.triangle={enabled:!1,linearCounterControl:!1,linearCounterPeriod:0,linearCounter:0,linearCounterReload:!1,lengthCounterHalt:!1,period:0,timerCounter:0,lengthCounter:0,sequencePosition:0},this.noise={enabled:!1,volume:0,constantVolume:!1,lengthCounterHalt:!1,envelopeLoop:!1,envelopePeriod:0,envelopeValue:0,envelopeCounter:0,envelopeReset:!1,mode:!1,period:0,timerCounter:0,lengthCounter:0,shiftRegister:0},this.dmc={enabled:!1,irqEnabled:!1,loopEnabled:!1,rate:0,directLoad:0,sampleAddress:0,sampleLength:0,currentAddress:0,bytesRemaining:0,shiftRegister:0,bitsRemaining:0,outputLevel:0,silenceFlag:!1,timerCounter:0},this.frameCounter=0,this.frameCounterMode=0,this.frameIRQInhibit=!1,this.frameCycles=0,this.frameSequence=0,this.frameIRQFlag=!1,this.dmcIRQFlag=!1;for(let e=0;e<24;e++)this.writeRegister(16384+e,0);this.writeRegister(16405,0),this.outputBuffer.fill(0),this.bufferIndex=0}updateFrameCounter(e){this.frameCycles+=e;const t=this.frameCounterMode;for(;this.frameCycles>=7457;)this.frameCycles-=7457,this.frameSequence++,this.frameSequence<=4&&(this.clockEnvelopes(),this.clockTriangleLinearCounter()),(this.frameSequence===2||this.frameSequence===4)&&(this.clockSweeps(),this.clockLengthCounters()),t===0&&this.frameSequence===4&&!this.frameIRQInhibit&&(this.frameIRQFlag=!0,this.system&&this.system.cpu&&this.system.cpu.triggerIRQ()),(t===0&&this.frameSequence>=4||t===1&&this.frameSequence>=5)&&(this.frameSequence=0)}updateTimers(e){this.pulse1.enabled&&this.updatePulseTimer(this.pulse1,e),this.pulse2.enabled&&this.updatePulseTimer(this.pulse2,e),this.triangle.enabled&&this.updateTriangleTimer(e),this.noise.enabled&&this.updateNoiseTimer(e),this.dmc.enabled&&this.updateDMCTimer(e)}updatePulseTimer(e,t){for(e.timerCounter-=t;e.timerCounter<=0;){const r=e.period*2+2;if(e.timerCounter+=r,r===0){console.log(e.period),this.system.stop();break}e.dutyPosition=e.dutyPosition+1&7,e.dutyValue=this.dutyPatterns[e.dutyMode][e.dutyPosition]}}updateTriangleTimer(e){if(this.triangle.lengthCounter>0&&this.triangle.linearCounter>0)for(this.triangle.timerCounter-=e;this.triangle.timerCounter<=0;)this.triangle.timerCounter+=this.triangle.period+1,this.triangle.sequencePosition=this.triangle.sequencePosition+1&31}updateNoiseTimer(e){for(this.noise.timerCounter-=e;this.noise.timerCounter<=0;){this.noise.timerCounter+=this.noise.period;const t=this.noise.shiftRegister&1^this.noise.shiftRegister>>(this.noise.mode?6:1)&1;this.noise.shiftRegister=this.noise.shiftRegister>>1|t<<14}}updateDMCTimer(e){for(this.dmc.timerCounter-=e;this.dmc.timerCounter<=0;)this.dmc.timerCounter+=this.dmc.rate,this.dmc.silenceFlag||((this.dmc.shiftRegister&1)>0?this.dmc.outputLevel<=125&&(this.dmc.outputLevel+=2):this.dmc.outputLevel>=2&&(this.dmc.outputLevel-=2),this.dmc.shiftRegister>>=1),this.dmc.bitsRemaining--,this.dmc.bitsRemaining===0&&(this.dmc.bitsRemaining=8,this.dmc.bytesRemaining>0?(this.dmc.shiftRegister=this.readDMCSample(this.dmc.currentAddress),this.dmc.silenceFlag=!1,this.dmc.currentAddress=this.dmc.currentAddress+1&65535|32768,this.dmc.bytesRemaining--,this.dmc.bytesRemaining===0&&this.dmc.loopEnabled?this.restartDMCSample():this.dmc.bytesRemaining===0&&this.dmc.irqEnabled&&(this.dmcIRQFlag=!0,this.system&&this.system.cpu&&this.system.cpu.triggerIRQ())):this.dmc.silenceFlag=!0)}readDMCSample(e){return this.system&&this.system.cpu&&this.system.cpu.read?this.system.cpu.read(e):0}restartDMCSample(){this.dmc.currentAddress=this.dmc.sampleAddress,this.dmc.bytesRemaining=this.dmc.sampleLength}getPulse1Output(){return!this.pulse1.enabled||this.pulse1.lengthCounter===0||this.pulse1.dutyValue===0||this.pulse1.period<8||this.pulse1.period>2047?0:this.pulse1.constantVolume?this.pulse1.volume:this.pulse1.envelopeValue}getPulse2Output(){return!this.pulse2.enabled||this.pulse2.lengthCounter===0||this.pulse2.dutyValue===0||this.pulse2.period<8||this.pulse2.period>2047?0:this.pulse2.constantVolume?this.pulse2.volume:this.pulse2.envelopeValue}getTriangleOutput(){return!this.triangle.enabled||this.triangle.lengthCounter===0||this.triangle.linearCounter===0||this.triangle.period<2?0:this.triangleSequence[this.triangle.sequencePosition]}getNoiseOutput(){return!this.noise.enabled||this.noise.lengthCounter===0||(this.noise.shiftRegister&1)===0?0:this.noise.constantVolume?this.noise.volume:this.noise.envelopeValue}getDMCOutput(){return this.dmc.enabled?this.dmc.outputLevel:0}clockEnvelopes(){this.clockEnvelope(this.pulse1),this.clockEnvelope(this.pulse2),this.clockEnvelope(this.noise)}clockEnvelope(e){e.envelopeReset?(e.envelopeReset=!1,e.envelopeValue=15,e.envelopeCounter=e.envelopePeriod):e.envelopeCounter>0?e.envelopeCounter--:(e.envelopeCounter=e.envelopePeriod,e.envelopeValue>0?e.envelopeValue--:e.envelopeLoop&&(e.envelopeValue=15))}clockTriangleLinearCounter(){this.triangle.linearCounterReload?this.triangle.linearCounter=this.triangle.linearCounterPeriod:this.triangle.linearCounter>0&&this.triangle.linearCounter--,this.triangle.linearCounterControl||(this.triangle.linearCounterReload=!1)}clockSweeps(){this.clockSweep(this.pulse1,!0),this.clockSweep(this.pulse2,!1)}clockSweep(e,t){if(e.sweepCounter>0&&e.sweepCounter--,e.sweepCounter===0&&(e.sweepCounter=e.sweepPeriod,e.sweepEnabled&&e.sweepShift>0)){const r=e.period>>e.sweepShift;let o=e.period;e.sweepNegate?t?o=e.period-r-1:o=e.period-r:o=e.period+r,o>=8&&o<=2047?e.period=o:e.lengthCounter=0}e.sweepReload&&(e.sweepReload=!1,e.sweepCounter=e.sweepPeriod)}clockLengthCounters(){!this.pulse1.lengthCounterHalt&&this.pulse1.lengthCounter>0&&this.pulse1.lengthCounter--,!this.pulse2.lengthCounterHalt&&this.pulse2.lengthCounter>0&&this.pulse2.lengthCounter--,!this.triangle.lengthCounterHalt&&this.triangle.lengthCounter>0&&this.triangle.lengthCounter--,!this.noise.lengthCounterHalt&&this.noise.lengthCounter>0&&this.noise.lengthCounter--}writeRegister(e,t){switch(e){case 16384:this.pulse1.dutyMode=t>>6&3,this.pulse1.lengthCounterHalt=(t>>5&1)!==0,this.pulse1.envelopeLoop=(t>>5&1)!==0,this.pulse1.constantVolume=(t>>4&1)!==0,this.pulse1.volume=t&15,this.pulse1.envelopePeriod=t&15;break;case 16385:this.pulse1.sweepEnabled=(t>>7&1)!==0,this.pulse1.sweepPeriod=(t>>4&7)+1,this.pulse1.sweepNegate=(t>>3&1)!==0,this.pulse1.sweepShift=t&7,this.pulse1.sweepReload=!0;break;case 16386:this.pulse1.period=this.pulse1.period&65280|t;break;case 16387:this.pulse1.period=this.pulse1.period&255|(t&7)<<8,this.pulse1.enabled&&(this.pulse1.lengthCounter=this.lengthTable[t>>3]),this.pulse1.dutyPosition=0,this.pulse1.envelopeReset=!0;break;case 16388:this.pulse2.dutyMode=t>>6&3,this.pulse2.lengthCounterHalt=(t>>5&1)!==0,this.pulse2.envelopeLoop=(t>>5&1)!==0,this.pulse2.constantVolume=(t>>4&1)!==0,this.pulse2.volume=t&15,this.pulse2.envelopePeriod=t&15;break;case 16389:this.pulse2.sweepEnabled=(t>>7&1)!==0,this.pulse2.sweepPeriod=(t>>4&7)+1,this.pulse2.sweepNegate=(t>>3&1)!==0,this.pulse2.sweepShift=t&7,this.pulse2.sweepReload=!0;break;case 16390:this.pulse2.period=this.pulse2.period&65280|t;break;case 16391:this.pulse2.period=this.pulse2.period&255|(t&7)<<8,this.pulse2.enabled&&(this.pulse2.lengthCounter=this.lengthTable[t>>3]),this.pulse2.dutyPosition=0,this.pulse2.envelopeReset=!0;break;case 16392:this.triangle.lengthCounterHalt=(t>>7&1)!==0,this.triangle.linearCounterControl=(t>>7&1)!==0,this.triangle.linearCounterPeriod=t&127;break;case 16393:break;case 16394:this.triangle.period=this.triangle.period&65280|t;break;case 16395:this.triangle.period=this.triangle.period&255|(t&7)<<8,this.triangle.enabled&&(this.triangle.lengthCounter=this.lengthTable[t>>3]),this.triangle.linearCounterReload=!0;break;case 16396:this.noise.lengthCounterHalt=(t>>5&1)!==0,this.noise.envelopeLoop=(t>>5&1)!==0,this.noise.constantVolume=(t>>4&1)!==0,this.noise.volume=t&15,this.noise.envelopePeriod=t&15;break;case 16397:break;case 16398:this.noise.mode=(t>>7&1)!==0,this.noise.period=this.noisePeriods[t&15];break;case 16399:this.noise.enabled&&(this.noise.lengthCounter=this.lengthTable[t>>3]),this.noise.envelopeReset=!0;break;case 16400:this.dmc.irqEnabled=(t>>7&1)!==0,this.dmc.loopEnabled=(t>>6&1)!==0,this.dmc.rate=this.dmcRates[t&15],this.dmc.irqEnabled||(this.dmcIRQFlag=!1);break;case 16401:this.dmc.outputLevel=t&127;break;case 16402:this.dmc.sampleAddress=49152+t*64;break;case 16403:this.dmc.sampleLength=t*16+1;break;case 16405:this.pulse1.enabled=(t&1)!==0,this.pulse2.enabled=(t&2)!==0,this.triangle.enabled=(t&4)!==0,this.noise.enabled=(t&8)!==0;const r=this.dmc.enabled;this.dmc.enabled=(t&16)!==0,this.dmc.enabled?!r&&this.dmc.bytesRemaining===0&&this.restartDMCSample():(this.dmc.bytesRemaining=0,this.dmcIRQFlag=!1),this.pulse1.enabled||(this.pulse1.lengthCounter=0),this.pulse2.enabled||(this.pulse2.lengthCounter=0),this.triangle.enabled||(this.triangle.lengthCounter=0),this.noise.enabled||(this.noise.lengthCounter=0),this.frameIRQFlag=!1;break;case 16407:this.frameCounterMode=t>>7&1,this.frameIRQInhibit=(t>>6&1)!==0,this.frameIRQInhibit&&(this.frameIRQFlag=!1),this.frameCycles=0,this.frameSequence=0,(t&128)!==0&&(this.clockEnvelopes(),this.clockTriangleLinearCounter(),this.clockSweeps(),this.clockLengthCounters());break}}readRegister(e){return e===16405?this.readStatus():0}readStatus(){let e=0;return this.pulse1.lengthCounter>0&&(e|=1),this.pulse2.lengthCounter>0&&(e|=2),this.triangle.lengthCounter>0&&(e|=4),this.noise.lengthCounter>0&&(e|=8),this.dmc.bytesRemaining>0&&(e|=16),this.frameIRQFlag&&(e|=64),this.dmcIRQFlag&&(e|=128),this.frameIRQFlag=!1,e}getChannelLevels(){return{pulse1:this.channelOutput.pulse1,pulse2:this.channelOutput.pulse2,triangle:this.channelOutput.triangle,noise:this.channelOutput.noise,dmc:this.channelOutput.dmc}}enableAudioDebug(){this.setupAudioVisualizer(),this.debugBufferInterval=setInterval(()=>this.logBufferStats(),1e3),this.samplesGenerated=0,this.buffersSent=0,this.lastBufferTime=Date.now();const e=this.generateSample;this.generateSample=function(){e.call(this),this.samplesGenerated++};const t=this.audioNode.port.onmessage;this.audioNode.port.onmessage=r=>{r.data.type==="needBuffer"&&(this.buffersSent++,this.lastBufferTime=Date.now()),t(r)},this.injectTestTone(),console.log("Audio debugging enabled")}logBufferStats(){if(!this.outputBuffer)return;const e=Array.from(this.outputBuffer).filter(o=>o!==0).length,t=Math.max(...Array.from(this.outputBuffer).map(Math.abs)),r=Array.from(this.outputBuffer).reduce((o,u)=>o+Math.abs(u),0)/this.outputBuffer.length;console.log(`Audio buffer stats:
    - Buffer size: ${this.outputBuffer.length}
    - Current index: ${this.bufferIndex}
    - Non-zero samples: ${e} (${(e/this.outputBuffer.length*100).toFixed(1)}%)
    - Max amplitude: ${t.toFixed(4)}
    - Avg amplitude: ${r.toFixed(4)}
    - Buffer ready: ${this.bufferReady}
    - Samples generated: ${this.samplesGenerated}
    - Buffers sent: ${this.buffersSent}
    - Time since last buffer: ${Date.now()-this.lastBufferTime}ms
    - Audio context state: ${this.audioContext?this.audioContext.state:"null"}
    `),e===0&&console.warn("WARNING: Buffer contains only zeros - no audio is being generated"),t<.01&&console.warn("WARNING: Maximum amplitude is very low - audio might be inaudible"),this.audioContext&&this.audioContext.state!=="running"&&console.warn(`WARNING: AudioContext is not running (state: ${this.audioContext.state})`)}setupAudioVisualizer(){if(typeof document>"u"||!this.audioContext)return;this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=2048,this.audioNode&&(this.audioNode.disconnect(),this.audioNode.connect(this.analyser),this.analyser.connect(this.audioContext.destination));const e=document.createElement("div");e.style.position="fixed",e.style.bottom="10px",e.style.right="10px",e.style.width="300px",e.style.padding="10px",e.style.backgroundColor="rgba(0, 0, 0, 0.7)",e.style.color="white",e.style.zIndex="9999",e.style.fontFamily="monospace",e.style.fontSize="12px",e.innerHTML=`
        <div>APU Audio Debug</div>
        <canvas width="280" height="100" style="background: #333; margin-top: 5px;"></canvas>
        <div id="apu-debug-stats">Waiting for data...</div>
        <button id="apu-test-tone" style="margin-top: 5px;">Test Tone</button>
        <button id="apu-debug-close" style="margin-left: 5px;">Close</button>
    `,document.body.appendChild(e);const t=e.querySelector("canvas"),r=t.getContext("2d"),o=e.querySelector("#apu-debug-stats");e.querySelector("#apu-test-tone").addEventListener("click",()=>{this.playTestTone()}),e.querySelector("#apu-debug-close").addEventListener("click",()=>{clearInterval(this.visualizerInterval),clearInterval(this.debugBufferInterval),document.body.removeChild(e)});const u=()=>{const c=this.analyser.frequencyBinCount,h=new Uint8Array(c);this.analyser.getByteTimeDomainData(h),r.fillStyle="#333",r.fillRect(0,0,t.width,t.height),r.lineWidth=2,r.strokeStyle="#00FF00",r.beginPath();const f=t.width/c;let p=0;for(let g=0;g<c;g++){const _=h[g]/128*t.height/2;g===0?r.moveTo(p,_):r.lineTo(p,_),p+=f}r.lineTo(t.width,t.height/2),r.stroke(),o.textContent=`Buffer: ${this.bufferIndex}/${this.outputBuffer?this.outputBuffer.length:0} | Sent: ${this.buffersSent}`};this.visualizerInterval=setInterval(u,30)}injectTestTone(){this.testToneActive=!1}playTestTone(){if(!this.audioContext||!this.outputBuffer)return;console.log("Playing test tone");const e=440,t=this.audioContext.sampleRate;for(let r=0;r<this.outputBuffer.length;r++)this.outputBuffer[r]=.5*Math.sin(2*Math.PI*e*r/t);this.bufferIndex=this.outputBuffer.length,this.bufferReady=!0,this.audioNode&&this.audioNode.port&&(this.audioNode.port.postMessage({type:"buffer",buffer:this.outputBuffer.slice(0)}),this.outputBuffer=new Float32Array(this.outputBuffer.length),this.bufferIndex=0),console.log("Test tone sent to audio output")}startContinuousTestTone(){if(!this.audioContext)return;const e=this.audioContext.createOscillator(),t=this.audioContext.createGain();return e.frequency.value=440,t.gain.value=.2,e.connect(t),t.connect(this.audioContext.destination),e.start(),console.log("Started continuous test tone"),this.testOscillator=e,this.testGain=t,{oscillator:e,gainNode:t}}stopContinuousTestTone(){this.testOscillator&&(this.testOscillator.stop(),this.testOscillator.disconnect(),this.testGain.disconnect(),this.testOscillator=null,this.testGain=null,console.log("Stopped continuous test tone"))}checkChannelOutputs(){console.log("Checking channel output functions:");try{const e=this.getPulse1Output();console.log("Pulse 1 output:",e)}catch(e){console.error("Error getting Pulse 1 output:",e)}try{const e=this.getPulse2Output();console.log("Pulse 2 output:",e)}catch(e){console.error("Error getting Pulse 2 output:",e)}try{const e=this.getTriangleOutput();console.log("Triangle output:",e)}catch(e){console.error("Error getting Triangle output:",e)}try{const e=this.getNoiseOutput();console.log("Noise output:",e)}catch(e){console.error("Error getting Noise output:",e)}try{const e=this.getDMCOutput();console.log("DMC output:",e)}catch(e){console.error("Error getting DMC output:",e)}}checkLookupTables(){console.log("Checking lookup tables:"),this.pulseTable?(console.log(`Pulse table has ${this.pulseTable.length} entries`),console.log("Sample values:",this.pulseTable.slice(0,5),"...")):console.error("Pulse table is not initialized!"),this.tndTable?(console.log(`TND table has ${this.tndTable.length} entries`),console.log("Sample values:",this.tndTable.slice(0,5),"...")):console.error("TND table is not initialized!")}}class EM{constructor(e){this.system=e,this.internalRam=new Uint8Array(2048),this.mapper=null,this.openBus=0}setMapper(e){this.mapper=e}reset(){this.internalRam.fill(0),this.openBus=0}read(e){let t=null;return e<8192?t=this.internalRam[e&2047]:e<16384?t=this.readPPURegister(e&7):e<16416?t=this.readIORegister(e):this.mapper?t=this.mapper.cpuRead(e):t=this.openBus,this.system.recordMemoryRead&&this.system.recordMemoryRead(e,t),t}write(e,t){this.openBus=t,e<8192?this.internalRam[e&2047]=t:e<16384?this.writePPURegister(e&7,t):e<16416?this.writeIORegister(e,t):this.mapper&&this.mapper.cpuWrite(e,t),this.system.recordMemoryWrite&&this.system.recordMemoryWrite(e,t)}readPPURegister(e){switch(e){case 0:return this.openBus;case 1:return this.openBus;case 2:{const t=this.system.ppu.status;return this.system.ppu.status&=-129,this.system.ppu.nmiOccurred=!1,this.system.ppu.scanline===241&&this.system.ppu.cycle<=1&&(this.system.ppu.suppressNMI=!0),this.system.ppu.w=0,t}case 3:return this.openBus;case 4:return this.system.ppu.readOAM();case 5:return this.openBus;case 6:return this.openBus;case 7:return this.system.ppu.readData()}return this.openBus}writePPURegister(e,t){switch(e){case 0:this.system.ppu.writeControl(t);break;case 1:this.system.ppu.writeMask(t);break;case 2:break;case 3:this.system.ppu.writeOAMAddress(t);break;case 4:this.system.ppu.writeOAMData(t);break;case 5:this.system.ppu.writeScroll(t);break;case 6:this.system.ppu.writeAddress(t);break;case 7:this.system.ppu.writeData(t);break}}readIORegister(e){switch(e){case 16406:const t=this.system.controller.read(0);return this.system.recordControllerRead&&this.system.recordControllerRead(e,t),t;case 16407:return 0;default:if(e<16405)return this.openBus;if(e===16405)return this.system.apu.readStatus()}}writeIORegister(e,t){switch(e){case 16404:this.doDMA(t);break;case 16406:this.system.controller.write(t),this.system.recordControllerWrite&&this.system.recordControllerWrite(e,t);break;default:e<16406&&this.system.apu.writeRegister(e,t);break}}doDMA(e){const t=e<<8;for(let r=0;r<256;r++){const o=this.read(t+r);this.system.ppu.oamMemory[r]=o}this.system.cpu.cycles+=513}}class TM{constructor(){this.buttonStates=new Array(8).fill(!1),this.shiftRegister=0,this.strobe=!1,this.keyMappings={z:0,x:1,Shift:2,Enter:3,ArrowUp:4,ArrowDown:5,ArrowLeft:6,ArrowRight:7}}reset(){this.buttonStates.fill(!1),this.shiftRegister=0,this.strobe=!1}setButton(e,t){e>=0&&e<8&&(this.buttonStates[e]=t,this.strobe&&this.loadShiftRegister())}write(e){const t=(e&1)!==0;this.strobe&&!t&&this.loadShiftRegister(),this.strobe=t}read(e){if(e!==0)return 0;if(this.strobe)return this.buttonStates[0]?1:0;const t=this.shiftRegister&1;return this.shiftRegister>>=1,this.shiftRegister|=128,t}loadShiftRegister(){this.shiftRegister=0;for(let e=0;e<8;e++)this.buttonStates[e]&&(this.shiftRegister|=1<<e)}handleKeyInput(e,t){const r=this.keyMappings[e];r!==void 0&&this.setButton(r,t)}}class ba{constructor(e,t,r,o){this.romInfo=e,this.prgRom=t,this.chrRom=r,this.system=o,this.usesChrRam=r.length===0,this.chrRam=this.usesChrRam?new Uint8Array(8192):null,this.prgRam=new Uint8Array(8192),this.mirroring=e.mirroring,this.hasBattery=e.hasBattery}reset(){this.usesChrRam&&this.chrRam.fill(0)}cpuRead(e){return 0}cpuWrite(e,t){}ppuRead(e){return 0}ppuWrite(e,t){}getMirroring(){return this.mirroring}handleCpuCycles(e){}}class wM extends ba{constructor(e,t,r,o){super(e,t,r,o),this.is32kbPrg=t.length>16384}reset(){super.reset()}cpuRead(e){return e>=24576&&e<32768?this.prgRam[e-24576]:e>=32768?this.is32kbPrg?this.prgRom[e-32768]:this.prgRom[e-32768&16383]:0}cpuWrite(e,t){e>=24576&&e<32768&&(this.prgRam[e-24576]=t)}ppuRead(e){return e<8192?this.usesChrRam?this.chrRam[e]:this.chrRom[e]:0}ppuWrite(e,t){e<8192&&this.usesChrRam&&(this.chrRam[e]=t)}}class AM extends ba{constructor(e,t,r,o){super(e,t,r,o),this.selectedBank=0,this.prgBankCount=t.length/16384}reset(){super.reset(),this.selectedBank=0}cpuRead(e){if(e>=24576&&e<32768)return this.prgRam[e-24576];if(e>=32768)if(e<49152){const t=this.selectedBank*16384%this.prgRom.length;return this.prgRom[t+(e-32768)]}else{const t=(this.prgBankCount-1)*16384;return this.prgRom[t+(e-49152)]}return 0}cpuWrite(e,t){if(e>=24576&&e<32768){this.prgRam[e-24576]=t;return}e>=32768&&(this.selectedBank=t&15)}ppuRead(e){return e<8192?this.usesChrRam?this.chrRam[e]:this.chrRom[e]:0}ppuWrite(e,t){e<8192&&this.usesChrRam&&(this.chrRam[e]=t)}}class RM extends ba{constructor(e,t,r,o){super(e,t,r,o),this.selectedChrBank=0,this.is32kbPrg=t.length>16384,this.chrBankCount=r.length/8192}reset(){super.reset(),this.selectedChrBank=0}cpuRead(e){return e>=24576&&e<32768?this.prgRam[e-24576]:e>=32768?this.is32kbPrg?this.prgRom[e-32768]:this.prgRom[e-32768&16383]:0}cpuWrite(e,t){if(e>=24576&&e<32768){this.prgRam[e-24576]=t;return}e>=32768&&(this.selectedChrBank=t&3,this.chrBankCount>4&&(this.selectedChrBank=t&15))}ppuRead(e){if(e<8192){if(this.usesChrRam)return this.chrRam[e];{const t=this.selectedChrBank*8192%this.chrRom.length;return this.chrRom[t+e]}}return 0}ppuWrite(e,t){e<8192&&this.usesChrRam&&(this.chrRam[e]=t)}}class CM{constructor(){this.dbName="NESEmulatorSaves",this.storeName="saveData",this.db=null,this.dbPromise=this.openDatabase()}async openDatabase(){return new Promise((e,t)=>{const r=indexedDB.open(this.dbName,1);r.onupgradeneeded=o=>{const u=o.target.result;u.objectStoreNames.contains(this.storeName)||u.createObjectStore(this.storeName)},r.onsuccess=o=>{this.db=o.target.result,e(this.db)},r.onerror=o=>{console.error("Error opening IndexedDB:",o.target.error),t(o.target.error)}})}async saveData(e,t){try{const r=await this.dbPromise;return new Promise((o,u)=>{const f=r.transaction([this.storeName],"readwrite").objectStore(this.storeName).put(t,e);f.onsuccess=()=>{o(!0)},f.onerror=p=>{console.error("Error saving data:",p.target.error),u(p.target.error)}})}catch(r){return console.error("Failed to save data:",r),!1}}async loadData(e){try{const t=await this.dbPromise;return new Promise((r,o)=>{const h=t.transaction([this.storeName],"readonly").objectStore(this.storeName).get(e);h.onsuccess=()=>{r(h.result||null)},h.onerror=f=>{console.error("Error loading data:",f.target.error),o(f.target.error)}})}catch(t){return console.error("Failed to load data:",t),null}}async deleteData(e){try{const t=await this.dbPromise;return new Promise((r,o)=>{const h=t.transaction([this.storeName],"readwrite").objectStore(this.storeName).delete(e);h.onsuccess=()=>{r(!0)},h.onerror=f=>{console.error("Error deleting data:",f.target.error),o(f.target.error)}})}catch(t){return console.error("Failed to delete data:",t),!1}}}class bM extends ba{constructor(e,t,r,o){super(e,t,r,o);const u=e.prgRamSize||8192;this.prgRam=new Uint8Array(u),this.storage=new CM,this.saveKey=`nes-save-${e.name.replace(/[^a-z0-9]/gi,"-").toLowerCase()}`,e.hasBattery&&this.loadBatteryBackedRam(),this.registers=new Uint8Array(5),this.shiftRegister=16,this.shiftCount=0,this.prgBankMode=3,this.chrBankMode=0,this.prgRamEnable=!0,this.mirroring=e.mirroring,this.prgBank=0,this.chrBank0=0,this.chrBank1=0,this.usesChrRam=this.chrRom.length===0,this.usesChrRam&&(console.log("Game uses CHR RAM instead of CHR ROM"),this.chrRam=new Uint8Array(8192)),this.prgBankCount=t.length/16384,this.ramDirty=!1,this.setupAutoSave()}reset(){super.reset(),this.registers.fill(0),this.registers[0]=31,this.shiftRegister=16,this.shiftCount=0,this.updateBankingFromRegisters()}cpuRead(e){if(e>=24576&&e<32768)return this.prgRamEnable?this.prgRam[e-24576]:0;if(e>=32768){let t;switch(this.prgBankMode){case 0:case 1:return t=this.prgBank&-2,this.prgRom[(t*16384+(e&32767))%this.prgRom.length];case 2:return e<49152?this.prgRom[e&16383]:this.prgRom[(this.prgBank*16384+(e&16383))%this.prgRom.length];case 3:default:if(e<49152)return this.prgRom[(this.prgBank*16384+(e&16383))%this.prgRom.length];{const o=(this.prgBankCount-1)*16384;return this.prgRom[o+(e&16383)]}}}return 0}cpuWrite(e,t){if(e>=24576&&e<32768){this.prgRamEnable&&(this.prgRam[e-24576]=t,this.romInfo.hasBattery&&(this.ramDirty=!0));return}if(e>=32768){if((t&128)!==0){this.shiftRegister=16,this.shiftCount=0;return}const r=t&1;if(this.shiftRegister=this.shiftRegister>>1|r<<4,this.shiftCount++,this.shiftCount===5){const o=e>>13&3;this.registers[o]=this.shiftRegister&31,this.shiftRegister=16,this.shiftCount=0,this.updateBankingFromRegisters()}}}ppuRead(e){return e<8192?this.usesChrRam?this.chrBankMode===0?this.chrRam[e]:e<4096?this.chrRam[(this.chrBank0*4096+e)%this.chrRam.length]:this.chrRam[(this.chrBank1*4096+(e&4095))%this.chrRam.length]:this.chrBankMode===0?this.chrRom[(this.chrBank0*8192+e)%this.chrRom.length]:e<4096?this.chrRom[(this.chrBank0*4096+e)%this.chrRom.length]:this.chrRom[(this.chrBank1*4096+(e&4095))%this.chrRom.length]:0}ppuWrite(e,t){e<8192&&this.usesChrRam&&(this.chrBankMode===0?this.chrRam[e]=t:e<4096?this.chrRam[(this.chrBank0*4096+e)%this.chrRam.length]=t:this.chrRam[(this.chrBank1*4096+(e&4095))%this.chrRam.length]=t)}getMirroring(){switch(this.registers[0]&3){case 0:return 2;case 1:return 3;case 2:return 1;case 3:return 0;default:return this.mirroring}}updateBankingFromRegisters(){this.prgBankMode=this.registers[0]>>2&3,this.chrBankMode=this.registers[0]>>4&1,this.chrBank0=this.registers[1],this.chrBank1=this.registers[2],this.prgBank=this.registers[3]&15,this.prgRamEnable=(this.registers[3]&16)===0}async loadBatteryBackedRam(){try{const e=await this.storage.loadData(this.saveKey);if(e){for(let t=0;t<Math.min(e.length,this.prgRam.length);t++)this.prgRam[t]=e[t];console.log(`Loaded saved data for ${this.romInfo.name}`)}else console.log(`No saved data found for ${this.romInfo.name}`)}catch(e){console.error("Error loading battery RAM:",e)}}async saveBatteryBackedRam(){if(!(!this.romInfo.hasBattery||!this.ramDirty))try{const e=Array.from(this.prgRam);await this.storage.saveData(this.saveKey,e),console.log(`Saved game data for ${this.romInfo.name}`),this.ramDirty=!1}catch(e){console.error("Error saving battery RAM:",e)}}setupAutoSave(){typeof setInterval<"u"&&(this.autoSaveInterval=setInterval(async()=>{this.ramDirty&&await this.saveBatteryBackedRam()},5e3))}async destroy(){this.ramDirty&&await this.saveBatteryBackedRam(),this.autoSaveInterval&&clearInterval(this.autoSaveInterval)}}class PM extends ba{constructor(e,t,r,o){super(e,t,r,o),this.bankSelect=0,this.bankRegisters=new Uint8Array(8),this.mirrorMode=0,this.prgRamProtect=0,this.irqLatch=0,this.irqReload=!1,this.irqEnable=!1,this.irqCounter=0,this.lastA12=0,this.prgMode=0,this.chrMode=0,this.irqPending=!1,this.irqReloadPending=!1,this.prgBankCount=t.length/8192,this.chrBankCount=this.usesChrRam?8:r.length/1024}reset(){super.reset(),this.bankSelect=0,this.bankRegisters.fill(0),this.mirrorMode=0,this.prgRamProtect=0,this.irqLatch=0,this.irqReload=!1,this.irqEnable=!1,this.irqCounter=0,this.lastA12=0,this.prgMode=0,this.chrMode=0,this.irqPending=!1,this.irqReloadPending=!1}cpuRead(e){if(e>=24576&&e<32768)return(this.prgRamProtect&128)!==0?this.prgRam[e-24576]:0;if(e>=32768){let t;e>=32768&&e<40960?this.prgMode===0?t=this.bankRegisters[6]:t=this.prgBankCount-2:e>=40960&&e<49152?t=this.bankRegisters[7]:e>=49152&&e<57344?this.prgMode===1?t=this.bankRegisters[6]:t=this.prgBankCount-2:t=this.prgBankCount-1,t%=this.prgBankCount;const r=e&8191;return this.prgRom[t*8192+r]}return 0}cpuWrite(e,t){if(e>=24576&&e<32768){const r=(this.prgRamProtect&128)!==0,o=(this.prgRamProtect&64)===0;r&&o&&(this.prgRam[e-24576]=t);return}if(e>=32768){const r=(e&1)===0,o=e>>13&3;if(o===0)if(r)this.bankSelect=t,this.prgMode=t>>6&1,this.chrMode=t>>7&1;else{const u=this.bankSelect&7;this.bankRegisters[u]=t}else o===1?r?this.mirrorMode=t&1:this.prgRamProtect=t:o===2?r?this.irqLatch=t:this.irqReload=!0:o===3&&(r?(this.irqEnable=!1,this.irqPending=!1,this.system.cpu.irqPending=!1):this.irqEnable=!0)}}ppuRead(e){if(e<8192){const t=this.getChrRegister(e),r=this.bankRegisters[t];let o;if(t===0||t===1){o=r&254;const u=o+((e&2048)>>11);return this.getChrData(u*1024+(e&2047))}else return o=r,this.getChrData(o*1024+(e&1023))}return 0}ppuWrite(e,t){if(e<8192&&this.usesChrRam){const r=this.getChrRegister(e),o=this.bankRegisters[r];let u;if(r===0||r===1){u=o&254;const c=u+((e&2048)>>11);this.chrRam[c*1024+(e&2047)]=t}else u=o,this.chrRam[u*1024+(e&1023)]=t}}getMirroring(){return this.mirrorMode===0?1:0}getChrData(e){return this.usesChrRam?this.chrRam[e%this.chrRam.length]:this.chrRom[e%this.chrRom.length]}getChrRegister(e){return this.chrMode===0?e<2048?0:e<4096?1:e<5120?2:e<6144?3:e<7168?4:5:e<1024?2:e<2048?3:e<3072?4:e<4096?5:e<6144?0:1}onScanline(){this.irqReload?(this.irqCounter=this.irqLatch,this.irqReload=!1):this.irqCounter===0?this.irqCounter=this.irqLatch:this.irqCounter--,this.irqCounter===0&&this.irqEnable&&(this.irqPending=!0,this.system.cpu.triggerIRQ())}onPpuAddressChange(e){const t=e>>12&1;t===1&&this.lastA12===0&&this.onScanline(),this.lastA12=t}}class LM{static createMapper(e,t,r,o,u){switch(e){case 0:return new wM(t,r,o,u);case 1:return new bM(t,r,o,u);case 2:return new AM(t,r,o,u);case 3:return new RM(t,r,o,u);case 4:return new PM(t,r,o,u);default:return console.warn(`Mapper ${e} not implemented yet`),null}}static getSupportedMappers(){return[0,1,2,3,4]}}class NM{static parseROM(e,t){const r=new Uint8Array(t);if(r.length<16||r[0]!==78||r[1]!==69||r[2]!==83||r[3]!==26)throw new Error("Invalid iNES ROM header");const o=r[4]*16384,u=r[5]*8192,c=r[6],h=r[7],f=r[8]||0,p=r[9]||0,g=r[10]||0,v=(h&12)===8;let _=h&240|c>>4;v&&(_|=(f&15)<<8);let S=c&1?1:0;const E=(c&8)!==0;E&&(S=2);const w=(c&2)!==0,x=(c&4)!==0;let y=0;v?y=g?64<<(g&15):0:y=8192;const I=u===0,P=I?8192:0;let L=0;v?L=(g&3)%2:L=p&1;const k=16+(x?512:0),se=k+o,C=zp(r,k,o);let D;return u>0?D=zp(r,se,u):D=new Uint8Array(0),{mapperNumber:_,prgRomSize:o,chrRomSize:u,prgRamSize:y,chrRamSize:P,mirroring:S,hasBattery:w,hasTrainer:x,usesChrRam:I,fourScreen:E,tvSystem:L,isNes20:v,name:e,prgRom:C,chrRom:D,info:{format:v?"NES 2.0":"iNES 1.0",mapper:`Mapper ${_}`,mirroring:UM(S),prgRomSizeKB:o/1024,chrRomSizeKB:u/1024,features:[w?"Battery-backed RAM":null,I?"CHR RAM":null,E?"Four-screen VRAM":null].filter(Boolean),system:L===0?"NTSC":"PAL"}}}}function zp(s,e,t){return s.subarray?s.subarray(e,e+t):s.slice(e,e+t)}function UM(s){switch(s){case 0:return"Horizontal";case 1:return"Vertical";case 2:return"Four-screen";default:return"Unknown"}}class DM{constructor(){if(this.cpu=new xM(this),this.ppu=new SM(this),this.apu=new MM(this),this.memory=new EM(this),this.controller=new TM,this.mapper=null,this.apu.initAudio(),this.isRunning=!1,this.isPaused=!1,this.pendingFrame=!1,this.lastFrameTime=0,this.frameCount=0,this.fpsTimer=performance.now(),this.fpsCount=0,this.frameTimerId=null,this.frameSkipCounter=0,this.TV_SYSTEM={NTSC:{cyclesPerFrame:29780,fps:60},PAL:{cyclesPerFrame:33247,fps:50}},this.cyclesPerFrame=this.TV_SYSTEM.NTSC.cyclesPerFrame,this.targetFps=this.TV_SYSTEM.NTSC.fps,this.frameInterval=1e3/this.targetFps,this.batchSize=100,this.useFrameSkipping=!1,this.frameSkipRatio=0,this.adaptiveTiming=!1,this.frameBuffer=new Uint8Array(256*240*4),this.onFrameReady=null,this.onFpsUpdate=null,this.onRomLoaded=null,this.onCPUStateUpdate=null,this.onPPUStateUpdate=null,this.onAPUStateUpdate=null,this.onMemoryUpdate=null,this.onControllerUpdate=null,this.keyMapTable={z:0,x:1,Shift:2,Enter:3,ArrowUp:4,ArrowDown:5,ArrowLeft:6,ArrowRight:7},this.debug=!1,this.profiling=!1,this.MAX_MEMORY_LOG=7,this.MAX_CONTROLLER_LOG=7,this.MAX_OPCODES=10,this.memoryLog={reads:Array(this.MAX_MEMORY_LOG).fill().map(()=>({address:0,value:0,timestamp:0})),writes:Array(this.MAX_MEMORY_LOG).fill().map(()=>({address:0,value:0,timestamp:0}))},this.memoryReadIndex=0,this.memoryWriteIndex=0,this.memoryReadCount=0,this.memoryWriteCount=0,this.controllerLog={reads:Array(this.MAX_CONTROLLER_LOG).fill().map(()=>({address:0,value:0,timestamp:0})),writes:Array(this.MAX_CONTROLLER_LOG).fill().map(()=>({address:0,value:0,timestamp:0}))},this.controllerReadIndex=0,this.controllerWriteIndex=0,this.controllerReadCount=0,this.controllerWriteCount=0,this.recentOpcodes=[],this.nametableBuffer=new Uint32Array(256*240),this.patternTableBuffer=new Uint32Array(128*128),this.instructionMap={},this.cpu&&this.cpu.instructions)for(const e in this.cpu.instructions)for(const t in this.cpu.instructions[e])this.instructionMap[t]={...this.cpu.instructions[e][t],category:e}}loadROM(e,t){try{const r=t instanceof ArrayBuffer?NM.parseROM(e,t):t;return console.log(r),this.mapper=LM.createMapper(r.mapperNumber,r,r.prgRom,r.chrRom,this),this.mapper?(this.memory.setMapper(this.mapper),r.tvSystem===0?(this.cyclesPerFrame=this.TV_SYSTEM.NTSC.cyclesPerFrame,this.targetFps=this.TV_SYSTEM.NTSC.fps):(this.cyclesPerFrame=this.TV_SYSTEM.PAL.cyclesPerFrame,this.targetFps=this.TV_SYSTEM.PAL.fps),this.frameInterval=1e3/this.targetFps,this.reset(),this.onRomLoaded&&this.onRomLoaded(!0,r),!0):(console.error(`Unsupported mapper: ${r.mapperNumber}`),this.onRomLoaded&&this.onRomLoaded(!1,r),!1)}catch(r){return console.error("Error initializing ROM:",r),this.onRomLoaded&&this.onRomLoaded(!1,null),!1}}reset(){this.mapper&&(this.cpu.reset(),this.ppu.reset(),this.apu.reset(),this.memory.reset(),this.controller.reset(),this.mapper.reset(),this.frameCount=0,this.fpsTimer=performance.now(),this.fpsCount=0,this.pendingFrame=!1,this.frameSkipCounter=0,this.memoryLog={reads:Array(this.MAX_MEMORY_LOG).fill().map(()=>({address:0,value:0,timestamp:0})),writes:Array(this.MAX_MEMORY_LOG).fill().map(()=>({address:0,value:0,timestamp:0}))},this.memoryReadIndex=0,this.memoryWriteIndex=0,this.memoryReadCount=0,this.memoryWriteCount=0,this.controllerLog={reads:Array(this.MAX_CONTROLLER_LOG).fill().map(()=>({address:0,value:0,timestamp:0})),writes:Array(this.MAX_CONTROLLER_LOG).fill().map(()=>({address:0,value:0,timestamp:0}))},this.controllerReadIndex=0,this.controllerWriteIndex=0,this.controllerReadCount=0,this.controllerWriteCount=0,this.recentOpcodes=[],this.nametableBuffer.fill(0),this.patternTableBuffer.fill(0),this._clearTimers())}_clearTimers(){this.frameTimerId&&(cancelAnimationFrame(this.frameTimerId),this.frameTimerId=null)}start(){this.isRunning||(this.isRunning=!0,this.isPaused=!1,this.lastFrameTime=performance.now(),this.runEmulation())}stop(){this.isRunning=!1,this._clearTimers()}pause(){this.isPaused=!0}resume(){this.isRunning&&(this.isPaused=!1,this.runEmulation())}_updateDebugState(){this.onCPUStateUpdate&&this.onCPUStateUpdate({registers:{A:this.cpu.a,X:this.cpu.x,Y:this.cpu.y,PC:this.cpu.pc,SP:this.cpu.sp,P:this.cpu.getStatusByte()},recentOpcodes:this.recentOpcodes}),this.onPPUStateUpdate&&this.onPPUStateUpdate({registers:{PPUCTRL:this.ppu.control,PPUMASK:this.ppu.mask,PPUSTATUS:this.ppu.status,OAMADDR:this.ppu.oamAddr,OAMDATA:this.ppu.oamData,PPUSCROLL:this.ppu.scroll,PPUADDR:this.ppu.addr,PPUDATA:this.ppu.data,OAMDMA:0},flags:{scanline:this.ppu.scanline,cycle:this.ppu.cycle,frameCount:this.ppu.frameCount,vblank:(this.ppu.status&128)!==0,sprite0Hit:(this.ppu.status&64)!==0,spriteOverflow:(this.ppu.status&32)!==0,xScroll:0,yScroll:0,vramAddr:this.ppu.v,tempVramAddr:this.ppu.t,fineX:this.ppu.x,writeToggle:this.ppu.w}}),this.onAPUStateUpdate&&this.onAPUStateUpdate({registers:{pulse1Duty:this.apu.pulse1.dutyMode,pulse1Volume:this.apu.pulse1.volume,pulse1Period:this.apu.pulse1.period,pulse1LengthCounter:this.apu.pulse1.lengthCounter,pulse1SweepEnabled:this.apu.pulse1.sweepEnabled,pulse1SweepPeriod:this.apu.pulse1.sweepPeriod,pulse1SweepNegate:this.apu.pulse1.sweepNegate,pulse1SweepShift:this.apu.pulse1.sweepShift,pulse2Duty:this.apu.pulse2.dutyMode,pulse2Volume:this.apu.pulse2.volume,pulse2Period:this.apu.pulse2.period,pulse2LengthCounter:this.apu.pulse2.lengthCounter,pulse2SweepEnabled:this.apu.pulse2.sweepEnabled,pulse2SweepPeriod:this.apu.pulse2.sweepPeriod,pulse2SweepNegate:this.apu.pulse2.sweepNegate,pulse2SweepShift:this.apu.pulse2.sweepShift,trianglePeriod:this.apu.triangle.period,triangleLengthCounter:this.apu.triangle.lengthCounter,triangleLinearCounter:this.apu.triangle.linearCounter||0,triangleSequenceCounter:this.apu.triangle.sequenceCounter,noiseVolume:this.apu.noise.volume,noisePeriod:this.apu.noise.period,noiseLengthCounter:this.apu.noise.lengthCounter,noiseMode:this.apu.noise.mode||0,dmcFrequency:this.apu.dmc.frequency||0,dmcSampleAddress:this.apu.dmc.sampleAddress||0,dmcSampleLength:this.apu.dmc.sampleLength||0,dmcCurrentLevel:this.apu.dmc.currentLevel||0,frameCounter:this.apu.frameCounter,frameCounterMode:this.apu.frameCounterMode,frameIRQInhibit:this.apu.frameIRQInhibit,frameIRQFlag:this.apu.frameIRQFlag},channelOutput:{pulse1:this.apu.channelOutput.pulse1,pulse2:this.apu.channelOutput.pulse2,triangle:this.apu.channelOutput.triangle,noise:this.apu.channelOutput.noise,dmc:this.apu.channelOutput.dmc},buffer:{data:this.apu.outputBuffer?Array.from(this.apu.outputBuffer.slice(0,100)):[],index:this.apu.bufferIndex,sampleRate:this.apu.sampleRate}}),this.onMemoryUpdate&&this.onMemoryUpdate({reads:[...this.memoryLog.reads],writes:[...this.memoryLog.writes]}),this.onControllerUpdate&&this.onControllerUpdate(this.controllerLog)}_updateFPS(e){this.frameCount++,e-this.fpsTimer>=1e3&&(this.fpsCount=this.frameCount,this.frameCount=0,this.fpsTimer=e,this.onFpsUpdate&&this.onFpsUpdate(this.fpsCount),this.adaptiveTiming&&this._adjustFrameSkipping())}runEmulation(){if(!this.isRunning||this.isPaused)return;const e=performance.now();e-this.lastFrameTime,this.lastFrameTime=e,this._updateFPS(e),this.runFrame(),this.debug&&this._updateDebugState(),this._scheduleNextFrame(e)}_adjustFrameSkipping(){const e=this.targetFps-this.fpsCount;e>5?this.useFrameSkipping?this.frameSkipRatio<3&&this.frameSkipRatio++:(this.useFrameSkipping=!0,this.frameSkipRatio=1):e<2&&this.useFrameSkipping&&(this.frameSkipRatio>0?this.frameSkipRatio--:this.useFrameSkipping=!1)}_handleFrameRendering(){const e=!this.useFrameSkipping||this.frameSkipCounter%(this.frameSkipRatio+1)===0;this.frameSkipCounter=(this.frameSkipCounter+1)%(this.frameSkipRatio+1),e&&(this.frameBuffer.set(this.ppu.frameBuffer),this.onFrameReady&&this.onFrameReady(this.frameBuffer))}_scheduleNextFrame(e){this._clearTimers(),this.frameTimerId=requestAnimationFrame(()=>{performance.now()-this.lastFrameTime>=this.frameInterval?this.runEmulation():this._scheduleNextFrame(e)}),this._handleFrameRendering()}runFrame(){if(!this.mapper)return;const e=this.profiling?{frameStart:performance.now(),cpu:0,ppu:0,apu:0,mapper:0,yield:0}:null;let t=0,r=0,o=this.cyclesPerFrame/10;for(;t<this.cyclesPerFrame;){for(;r<this.batchSize&&t<this.cyclesPerFrame;){this.debug&&this._recordCPUInstruction();const u=this._timeFunctionExecution(()=>this.cpu.step(),e,"cpu");if(this._timeFunctionExecution(()=>this.ppu.step(u*3),e,"ppu"),this._timeFunctionExecution(()=>this.apu.step(u),e,"apu"),t+=u,r++,t>=o){this.mapper&&typeof this.mapper.clockSync=="function"&&this._timeFunctionExecution(()=>this.mapper.clockSync(t),e,"mapper"),o+=this.cyclesPerFrame/10;break}}r=0}this.mapper&&typeof this.mapper.endFrame=="function"&&this._timeFunctionExecution(()=>this.mapper.endFrame(),e,"mapper"),this.profiling&&this._outputProfilingResults(e)}_recordCPUInstruction(){const e=this.cpu.pc,t=this.memory.read(e),r=this._getInstructionDetails(t),o=[t];r.bytes>1&&(o.push(this.memory.read(e+1)),r.bytes>2&&o.push(this.memory.read(e+2)));const u={address:e,bytes:o,instruction:r,timestamp:performance.now()};this.recentOpcodes.unshift(u),this.recentOpcodes.length>this.MAX_OPCODES&&this.recentOpcodes.pop()}_getInstructionDetails(e){return this.instructionMap[e]||{}}recordMemoryRead(e,t){if(!this.debug)return;const r=this.memoryLog.reads[this.memoryReadIndex];r.address=e,r.value=t,r.timestamp=0,this.memoryReadIndex=(this.memoryReadIndex+1)%this.MAX_MEMORY_LOG,this.memoryReadCount<this.MAX_MEMORY_LOG&&this.memoryReadCount++}recordMemoryWrite(e,t){if(!this.debug)return;const r=this.memoryLog.writes[this.memoryWriteIndex];r.address=e,r.value=t,r.timestamp=0,this.memoryWriteIndex=(this.memoryWriteIndex+1)%this.MAX_MEMORY_LOG,this.memoryWriteCount<this.MAX_MEMORY_LOG&&this.memoryWriteCount++}recordControllerRead(e,t){if(!this.debug)return;const r=this.controllerLog.reads[this.controllerReadIndex];r.address=e,r.value=t,r.timestamp=this.lastFrameTime?performance.now()-this.lastFrameTime:0,this.controllerReadIndex=(this.controllerReadIndex+1)%this.MAX_CONTROLLER_LOG,this.controllerReadCount<this.MAX_CONTROLLER_LOG&&this.controllerReadCount++}recordControllerWrite(e,t){if(!this.debug)return;const r=this.controllerLog.writes[this.controllerWriteIndex];r.address=e,r.value=t,r.timestamp=this.lastFrameTime?performance.now()-this.lastFrameTime:0,this.controllerWriteIndex=(this.controllerWriteIndex+1)%this.MAX_CONTROLLER_LOG,this.controllerWriteCount<this.MAX_CONTROLLER_LOG&&this.controllerWriteCount++}_timeFunctionExecution(e,t,r){if(!t)return e();const o=performance.now(),u=e();return t[r]+=performance.now()-o,u}_outputProfilingResults(e){const t=performance.now()-e.frameStart,r=1e3/t,o=t-e.cpu-e.ppu-e.apu-e.mapper-e.yield;console.log("----- Frame Profiling -----"),console.log(`Total frame time: ${t.toFixed(2)}ms (${r.toFixed(1)} FPS)`),console.log(`CPU: ${e.cpu.toFixed(2)}ms (${(e.cpu/t*100).toFixed(1)}%)`),console.log(`PPU: ${e.ppu.toFixed(2)}ms (${(e.ppu/t*100).toFixed(1)}%)`),console.log(`APU: ${e.apu.toFixed(2)}ms (${(e.apu/t*100).toFixed(1)}%)`),console.log(`Mapper: ${e.mapper.toFixed(2)}ms (${(e.mapper/t*100).toFixed(1)}%)`),console.log(`Other: ${o.toFixed(2)}ms`),r<60&&console.warn(`Performance warning: Running at ${r.toFixed(1)} FPS (target: 60 FPS)`)}handleKeyDown(e){const t=this.keyMapTable[e];t!==void 0&&this.controller.setButton(t,!0)}handleKeyUp(e){const t=this.keyMapTable[e];t!==void 0&&this.controller.setButton(t,!1)}getPatternTableData(e=0,t=0){if(!this.ppu)return this.patternTableBuffer;const r=e*4096,o=t<4,u=o?0:16,c=o?t:t-4;for(let h=0;h<16;h++)for(let f=0;f<16;f++){const p=h*16+f;for(let g=0;g<8;g++){const v=r+p*16+g,_=this.ppu.ppuRead(v),S=this.ppu.ppuRead(v+8);for(let E=0;E<8;E++){const w=_>>7-E&1,y=(S>>7-E&1)<<1|w,I=f*8+E,L=(h*8+g)*128+I;let F;if(y===0)F=this.ppu.ppuRead(16128);else{const de=16128+u+c*4+y;F=this.ppu.ppuRead(de)}const z=this.ppu.nesPalette[F],k=z[0],se=z[1],C=z[2],D=255<<24|C<<16|se<<8|k;this.patternTableBuffer[L]=D}}}return this.patternTableBuffer}getNameTableData(e=0){if(!this.ppu)return this.nametableBuffer;const t=8192+e*1024,r=(this.ppu.control&16)!==0?4096:0;for(let o=0;o<30;o++)for(let u=0;u<32;u++){const c=t+o*32+u,h=this.ppu.ppuRead(c),f=Math.floor(u/4),p=Math.floor(o/4),g=t+960+p*8+f,v=this.ppu.ppuRead(g),_=u%4<2?0:1,w=((o%4<2?0:1)*2+_)*2,x=v>>w&3;for(let y=0;y<8;y++){const I=r+h*16+y,P=this.ppu.ppuRead(I),L=this.ppu.ppuRead(I+8);for(let F=0;F<8;F++){const z=P>>7-F&1,se=(L>>7-F&1)<<1|z,C=u*8+F,de=(o*8+y)*256+C;let fe;if(se===0)fe=this.ppu.ppuRead(16128);else{const G=16128+x*4+se;fe=this.ppu.ppuRead(G)}const Y=this.ppu.nesPalette[fe&63],te=Y[0],ie=Y[1],ce=Y[2],Z=255<<24|ce<<16|ie<<8|te;this.nametableBuffer[de]=Z}}}return this.nametableBuffer}enableDebug(){this.debug=!0,console.log("Debug mode enabled")}disableDebug(){this.debug=!1,console.log("Debug mode disabled")}}const IM=({system:s,isActive:e,isRunning:t})=>{const r=Pe.useRef(null),o=Pe.useRef(null),[u,c]=Pe.useState(0),[h,f]=Pe.useState(0),p=Pe.useRef(null),g=Pe.useRef(null);Pe.useLayoutEffect(()=>{if(!r.current)return;const w=r.current.getContext("2d",{alpha:!1});if(w.imageSmoothingEnabled=!1,!g.current)return p.current||(p.current=w.createImageData(128,128)),g.current=w,()=>{o.current&&(cancelAnimationFrame(o.current),o.current=null)}},[s,e]);const v=Pe.useMemo(()=>p.current?new Uint32Array(p.current.data.buffer):null,[p.current]);Pe.useEffect(()=>{if(!e||!s||!s.ppu||!g.current||!v)return;o.current&&cancelAnimationFrame(o.current);const E=()=>{const w=s.getPatternTableData(u,h);if(!w||!w.length){o.current=requestAnimationFrame(E);return}v.set(w),g.current.putImageData(p.current,0,0),e&&(o.current=requestAnimationFrame(E))};return o.current=requestAnimationFrame(E),()=>{o.current&&(cancelAnimationFrame(o.current),o.current=null)}},[s,e,u,h,t,v]);const _=E=>{c(parseInt(E.target.value,10))},S=E=>{f(parseInt(E.target.value,10))};return R.jsxs("div",{className:"canvas-visualizer pattern-table-visualizer",children:[R.jsx("div",{className:"canvas-visualizer-title",children:"Pattern Table"}),e?R.jsxs("div",{className:"visualizer-content",children:[R.jsx("div",{className:"canvas-container",children:R.jsx("canvas",{ref:r,width:128,height:128,style:{width:"100%",imageRendering:"pixelated"}})}),R.jsxs("div",{className:"layer-controls",children:["Pattern Table:",R.jsxs("select",{value:u,onChange:_,children:[R.jsx("option",{value:"0",children:"Pattern Table 0"}),R.jsx("option",{value:"1",children:"Pattern Table 1"})]}),"Palette:",R.jsxs("select",{value:h,onChange:S,children:[R.jsx("option",{value:"0",children:"Palette 0"}),R.jsx("option",{value:"1",children:"Palette 1"}),R.jsx("option",{value:"2",children:"Palette 2"}),R.jsx("option",{value:"3",children:"Palette 3"}),R.jsx("option",{value:"4",children:"Palette 4"}),R.jsx("option",{value:"5",children:"Palette 5"}),R.jsx("option",{value:"6",children:"Palette 6"}),R.jsx("option",{value:"7",children:"Palette 7"})]})]})]}):R.jsx("div",{className:"placeholder-message",children:"No Pattern Table information to display"})]})},FM=({system:s,isActive:e,isRunning:t})=>{const r=Pe.useRef(null),o=Pe.useRef(null),[u,c]=Pe.useState(0),h=Pe.useRef(null),f=Pe.useRef(null);Pe.useLayoutEffect(()=>{if(!r.current)return;const _=r.current.getContext("2d",{alpha:!1});if(_.imageSmoothingEnabled=!1,!f.current)return h.current||(h.current=_.createImageData(256,240)),f.current=_,()=>{o.current&&(cancelAnimationFrame(o.current),o.current=null)}},[s,e]);const p=Pe.useMemo(()=>h.current?new Uint32Array(h.current.data.buffer):null,[h.current]);Pe.useEffect(()=>{if(!e||!s||!s.ppu||!f.current||!p)return;o.current&&cancelAnimationFrame(o.current);const v=()=>{const _=s.getNameTableData(u);if(!_||!_.length){o.current=requestAnimationFrame(v);return}p.set(_),f.current.putImageData(h.current,0,0),e&&(o.current=requestAnimationFrame(v))};return o.current=requestAnimationFrame(v),()=>{o.current&&(cancelAnimationFrame(o.current),o.current=null)}},[s,e,u,t,p]);const g=v=>{c(parseInt(v.target.value,10))};return R.jsxs("div",{className:"canvas-visualizer nametable-visualizer",children:[R.jsx("div",{className:"canvas-visualizer-title",children:"Name Table"}),e?R.jsxs("div",{className:"visualizer-content",children:[R.jsx("div",{className:"canvas-container",children:R.jsx("canvas",{ref:r,width:256,height:240,style:{width:"100%",imageRendering:"pixelated"}})}),R.jsxs("div",{className:"layer-controls",children:["Name Table:",R.jsxs("select",{value:u,onChange:g,children:[R.jsx("option",{value:"0",children:"Nametable 0"}),R.jsx("option",{value:"1",children:"Nametable 1"}),R.jsx("option",{value:"2",children:"Nametable 2"}),R.jsx("option",{value:"3",children:"Nametable 3"})]})]})]}):R.jsx("div",{className:"placeholder-message",children:"No Name Table information to display"})]})},OM=({system:s,isActive:e,isRunning:t})=>{const r=Pe.useRef(null),o=Pe.useRef(null),[u,c]=Pe.useState("sprites"),h=Pe.useRef(null),f=Pe.useRef(null);Pe.useLayoutEffect(()=>{if(!r.current)return;const _=r.current.getContext("2d",{alpha:!0});if(_.imageSmoothingEnabled=!1,!f.current)return h.current||(h.current=_.createImageData(256,240)),f.current=_,()=>{o.current&&(cancelAnimationFrame(o.current),o.current=null)}},[s,e]);const p=Pe.useMemo(()=>h.current?new Uint32Array(h.current.data.buffer):null,[h.current]);Pe.useEffect(()=>(s&&s.ppu&&s.ppu.setLayerVisualizationEnabled(e),()=>{s&&s.ppu&&s.ppu.setLayerVisualizationEnabled(!1)}),[s,e]),Pe.useEffect(()=>{if(!e||!s||!s.ppu||!f.current||!p)return;o.current&&cancelAnimationFrame(o.current);const v=()=>{let _;switch(u){case"background":_=s.ppu.backgroundLayer;break;case"sprites":_=s.ppu.spriteLayer;break;default:_=s.ppu.backgroundLayer}if(!_||!_.length){o.current=requestAnimationFrame(v);return}p.set(_),f.current.putImageData(h.current,0,0),e&&(o.current=requestAnimationFrame(v))};return o.current=requestAnimationFrame(v),()=>{o.current&&(cancelAnimationFrame(o.current),o.current=null)}},[s,e,u,t,p]);const g=v=>{c(v.target.value)};return R.jsxs("div",{className:"canvas-visualizer sprite-visualizer",children:[R.jsx("div",{className:"canvas-visualizer-title",children:"BG & Sprite Layers"}),e?R.jsxs("div",{className:"visualizer-content",children:[R.jsx("div",{className:"canvas-container",children:R.jsx("canvas",{ref:r,width:256,height:240})}),R.jsxs("div",{className:"layer-controls",children:[R.jsx("div",{children:"Display Mode:"}),R.jsxs("select",{value:u,onChange:g,disabled:!e,children:[R.jsx("option",{value:"background",children:"Background"}),R.jsx("option",{value:"sprites",children:"Sprites"})]})]})]}):R.jsx("div",{className:"placeholder-message",children:"No layer information to display"})]})},Fc=s=>`$${s.toString(16).toUpperCase().padStart(4,"0")}`,Oc=s=>`$${s.toString(16).toUpperCase().padStart(2,"0")}`,kM=s=>`${s.toFixed(3)}ms`;Vp.memo(({type:s,address:e,value:t,timestamp:r})=>R.jsxs("li",{className:s.toLowerCase(),children:[s," ",Fc(e)," = ",Oc(t),R.jsx("span",{className:"timestamp",children:kM(r)})]}));const Sm=Pe.memo(({memoryState:s,isActive:e})=>R.jsxs("div",{className:"visualizer memory-visualizer",children:[R.jsx("div",{className:"visualizer-title",children:"Memory Operations"}),e?R.jsxs("div",{className:"visualizer-content",children:[R.jsx("div",{className:"tabs",children:R.jsx("div",{className:"tab active",children:"Recent"})}),R.jsx("div",{className:"memory-log-container",children:R.jsxs("ul",{className:"memory-log",children:[((s==null?void 0:s.writes)||[]).map((t,r)=>R.jsxs("li",{className:"write",children:["WRITE ",Fc(t.address)," = ",Oc(t.value)]},r)),((s==null?void 0:s.reads)||[]).map((t,r)=>R.jsxs("li",{className:"read",children:["READ ",Fc(t.address)," = ",Oc(t.value)]},r))]})})]}):R.jsx("div",{className:"placeholder-message",children:"No memory operations to display"})]}));Sm.displayName="MemoryVisualizer";const BM=[{bit:0,name:"A"},{bit:1,name:"B"},{bit:2,name:"Select"},{bit:3,name:"Start"},{bit:4,name:"Up"},{bit:5,name:"Down"},{bit:6,name:"Left"},{bit:7,name:"Right"}],zM=({system:s,controllerState:e,isActive:t})=>{const r=f=>`$${f.toString(16).toUpperCase().padStart(4,"0")}`,o=f=>`$${f.toString(16).toUpperCase().padStart(2,"0")}`,u=f=>f.toString(2).padStart(8,"0"),c=f=>`${f.toFixed(3)}ms`,h=()=>s!=null&&s.controller?BM.map(f=>{const p=s.controller.buttonStates?s.controller.buttonStates[f.bit]:!1;return R.jsx("div",{className:`controller-button ${p?"pressed":""}`,children:f.name},f.name)}):R.jsx(R.Fragment,{});return R.jsxs("div",{className:"visualizer controller-visualizer",children:[R.jsx("div",{className:"visualizer-title",children:"Controller I/O"}),t?R.jsxs("div",{className:"visualizer-content",children:[R.jsx("div",{className:"controller-state",children:R.jsx("div",{className:"controller-diagram",children:h()})}),R.jsx("div",{className:"controller-log-container",children:R.jsxs("ul",{className:"memory-log",children:[e.writes.map((f,p)=>R.jsxs("li",{className:"write",children:["WRITE ",r(f.address)," = ",o(f.value),"(",u(f.value),")",R.jsx("span",{className:"timestamp",children:c(f.timestamp)})]},`write-${p}`)),e.reads.map((f,p)=>R.jsxs("li",{className:"read",children:["READ ",r(f.address)," = ",o(f.value),"(",u(f.value),")",R.jsx("span",{className:"timestamp",children:c(f.timestamp)})]},`read-${p}`))]})})]}):R.jsx("div",{className:"placeholder-message",children:"No controller I/O to display"})]})},HM=[{bit:7,name:"N",desc:"Negative"},{bit:6,name:"V",desc:"Overflow"},{bit:5,name:"-",desc:"Unused"},{bit:4,name:"B",desc:"Break"},{bit:3,name:"D",desc:"Decimal"},{bit:2,name:"I",desc:"Interrupt Disable"},{bit:1,name:"Z",desc:"Zero"},{bit:0,name:"C",desc:"Carry"}],VM=({cpuState:s,isActive:e})=>{const t=(r,o=2)=>`$${r.toString(16).toUpperCase().padStart(o,"0")}`;return R.jsxs("div",{className:"visualizer cpu-visualizer",children:[R.jsx("div",{className:"visualizer-title",children:"CPU State"}),e?R.jsxs("div",{className:"visualizer-content",children:[R.jsxs("div",{className:"register-grid",children:[R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"A:"}),R.jsx("span",{className:"register-value",children:t(s.registers.A)})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"X:"}),R.jsx("span",{className:"register-value",children:t(s.registers.X)})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Y:"}),R.jsx("span",{className:"register-value",children:t(s.registers.Y)})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"SP:"}),R.jsx("span",{className:"register-value",children:t(s.registers.SP)})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"PC:"}),R.jsx("span",{className:"register-value",children:t(s.registers.PC,4)})]})]}),R.jsxs("div",{className:"flags-container",children:[R.jsxs("div",{className:"flags-title",children:["Status (P): ",t(s.registers.P)]}),R.jsx("div",{className:"flag-bits",children:HM.map((r,o)=>{const u=(s.registers.P>>r.bit&1)===1;return R.jsx("div",{className:`flag-bit ${u?"active":"inactive"}`,title:r.desc,children:r.name},o)})})]}),R.jsxs("div",{className:"recent-opcodes",children:[R.jsx("div",{className:"opcodes-title",children:"Recent Instructions"}),R.jsx("div",{className:"opcodes-list",children:s.recentOpcodes.map((r,o)=>R.jsxs("div",{className:`opcode-entry ${o===0?"current-opcode":""}`,children:[R.jsx("span",{className:"opcode-address",children:t(r.address,4)}),R.jsx("span",{className:"opcode-bytes",children:r.bytes.map(u=>t(u)).join(" ")}),R.jsx("span",{className:"opcode-instruction",children:(r.instruction.op||r.instruction.category).toUpperCase()}),R.jsx("span",{className:"opcode-mode",children:r.instruction.mode||"-"}),R.jsx("span",{className:"opcode-reg",children:(r.instruction.reg||"-").toUpperCase()}),R.jsx("span",{className:"opcode-pagecross",children:r.instruction.pageCross?"+Page":"---"})]},o))})]})]}):R.jsx("div",{className:"placeholder-message",children:"No CPU operations to display"})]})},kc=(s,e=2)=>s===void 0?"--":`$${s.toString(16).toUpperCase().padStart(e,"0")}`,GM=Pe.memo(({name:s,value:e,desc:t})=>R.jsxs("div",{className:"register-item",children:[R.jsxs("span",{className:"register-name",title:t,children:[s,":"]}),R.jsx("span",{className:"register-value",children:kc(e)})]})),WM=Pe.memo(({name:s,value:e})=>R.jsxs("div",{className:"flag-item",children:[R.jsxs("span",{className:"flag-name",children:[s,":"]}),R.jsx("span",{className:"flag-value",children:e})]})),jM=Pe.memo(({name:s,value:e})=>R.jsxs("div",{className:"attribute-item",children:[R.jsxs("span",{className:"attribute-name",children:[s,":"]}),R.jsx("span",{className:"attribute-value",children:e})]})),XM=[{key:"PPUCTRL",name:"PPUCTRL ($2000)",desc:"Control Register"},{key:"PPUMASK",name:"PPUMASK ($2001)",desc:"Mask Register"},{key:"PPUSTATUS",name:"PPUSTATUS ($2002)",desc:"Status Register"},{key:"OAMADDR",name:"OAMADDR ($2003)",desc:"OAM Address"},{key:"OAMDATA",name:"OAMDATA ($2004)",desc:"OAM Data"},{key:"PPUSCROLL",name:"PPUSCROLL ($2005)",desc:"Scroll Position"},{key:"PPUADDR",name:"PPUADDR ($2006)",desc:"PPU Address"},{key:"PPUDATA",name:"PPUDATA ($2007)",desc:"PPU Data"},{key:"OAMDMA",name:"OAMDMA ($4014)",desc:"OAM DMA"}],qM=Pe.memo(({registers:s})=>R.jsxs("div",{className:"section",children:[R.jsx("div",{className:"section-title",children:"Registers"}),R.jsx("div",{className:"register-grid",children:XM.map(e=>R.jsx(GM,{name:e.name,value:s[e.key],desc:e.desc},e.key))})]})),YM=Pe.memo(({flags:s})=>{const e=[{key:"scanline",name:"Current Scanline",value:s.scanline},{key:"cycle",name:"Current Cycle",value:s.cycle},{key:"frameCount",name:"Frame Count",value:s.frameCount},{key:"vblank",name:"VBlank",value:s.vblank?"Yes":"No"},{key:"sprite0Hit",name:"Sprite 0 Hit",value:s.sprite0Hit?"Yes":"No"},{key:"spriteOverflow",name:"Sprite Overflow",value:s.spriteOverflow?"Yes":"No"}];return R.jsxs("div",{className:"section",children:[R.jsx("div",{className:"section-title",children:"Status"}),R.jsx("div",{className:"flags-grid",children:e.map(t=>R.jsx(WM,{name:t.name,value:t.value},t.key))})]})}),$M=Pe.memo(({flags:s})=>{const e=[{key:"xScroll",name:"X Scroll",value:s.xScroll},{key:"yScroll",name:"Y Scroll",value:s.yScroll},{key:"vramAddr",name:"VRAM Address",value:kc(s.vramAddr,4)},{key:"tempVramAddr",name:"Temp VRAM Address",value:kc(s.tempVramAddr,4)},{key:"fineX",name:"Fine X Scroll",value:s.fineX},{key:"writeToggle",name:"Write Toggle",value:s.writeToggle?"High":"Low"}];return R.jsxs("div",{className:"section",children:[R.jsx("div",{className:"section-title",children:"Scroll & Address"}),R.jsx("div",{className:"attributes-grid",children:e.map(t=>R.jsx(jM,{name:t.name,value:t.value},t.key))})]})}),Mm=Pe.memo(({ppuState:s,isActive:e})=>e?R.jsxs("div",{className:"visualizer ppu-visualizer",children:[R.jsx("div",{className:"visualizer-title",children:"PPU State"}),R.jsxs("div",{className:"visualizer-content",children:[R.jsx(qM,{registers:s.registers}),R.jsx(YM,{flags:s.flags}),R.jsx($M,{flags:s.flags})]})]}):R.jsxs("div",{className:"visualizer ppu-visualizer",children:[R.jsx("div",{className:"visualizer-title",children:"PPU State"}),R.jsx("div",{className:"placeholder-message",children:"No PPU information to display"})]}));Mm.displayName="PPUVisualizer";const KM=({apuState:s,isActive:e,system:t})=>{const r=Pe.useRef(null),[o,u]=Pe.useState({current:0,total:0,sent:0}),c=Pe.useRef(null),h=Pe.useRef(null),f=(S,E=2)=>S===void 0?"--":`$${S.toString(16).toUpperCase().padStart(E,"0")}`;Pe.useEffect(()=>{if(!e||!t||!t.apu||!r.current)return;const S=r.current,E=S.getContext("2d");if(!c.current&&t.apu.audioContext){const I=t.apu.audioContext.createAnalyser();I.fftSize=2048,t.apu.audioNode&&(t.apu.audioNode.disconnect(),t.apu.audioNode.connect(I),I.connect(t.apu.audioContext.destination)),c.current=I}const x=setInterval(()=>{t&&t.apu&&u({current:t.apu.bufferPosition||0,total:t.apu.buffer?t.apu.buffer.length:0,sent:t.apu.samplesGenerated||0})},100),y=()=>{if(!c.current)return;const I=c.current,P=I.frequencyBinCount,L=new Uint8Array(P);I.getByteTimeDomainData(L),E.fillStyle="#2d3748",E.fillRect(0,0,S.width,S.height),E.lineWidth=2,E.strokeStyle="#00FF00",E.beginPath();const F=S.width/P;let z=0;for(let k=0;k<P;k++){const C=L[k]/128*S.height/2;k===0?E.moveTo(z,C):E.lineTo(z,C),z+=F}E.lineTo(S.width,S.height/2),E.stroke(),h.current=requestAnimationFrame(y)};return y(),()=>{clearInterval(x),h.current&&cancelAnimationFrame(h.current)}},[e,t]);const p=()=>{!t||!t.apu||t.apu.playTestTone()},g=()=>{var S,E;return R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"channel-section",children:[R.jsx("div",{className:"channel-title",children:"Pulse 1"}),R.jsxs("div",{className:"channel-registers",children:[R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Duty Mode:"}),R.jsx("span",{className:"register-value",children:s.registers.pulse1Duty})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Volume:"}),R.jsx("span",{className:"register-value",children:s.registers.pulse1Volume})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Period:"}),R.jsx("span",{className:"register-value",children:s.registers.pulse1Period})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Length Counter:"}),R.jsx("span",{className:"register-value",children:s.registers.pulse1LengthCounter})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Sweep:"}),R.jsxs("span",{className:"register-value",children:[s.registers.pulse1SweepEnabled?"Enabled":"Disabled",s.registers.pulse1SweepEnabled&&` (${s.registers.pulse1SweepNegate?"-":"+"}, ${s.registers.pulse1SweepShift})`]})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Output:"}),R.jsx("span",{className:"register-value",children:((S=s.channelOutput)==null?void 0:S.pulse1.toFixed(2))||0})]})]})]}),R.jsxs("div",{className:"channel-section",children:[R.jsx("div",{className:"channel-title",children:"Pulse 2"}),R.jsxs("div",{className:"channel-registers",children:[R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Duty Mode:"}),R.jsx("span",{className:"register-value",children:s.registers.pulse2Duty})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Volume:"}),R.jsx("span",{className:"register-value",children:s.registers.pulse2Volume})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Period:"}),R.jsx("span",{className:"register-value",children:s.registers.pulse2Period})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Length Counter:"}),R.jsx("span",{className:"register-value",children:s.registers.pulse2LengthCounter})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Sweep:"}),R.jsxs("span",{className:"register-value",children:[s.registers.pulse2SweepEnabled?"Enabled":"Disabled",s.registers.pulse2SweepEnabled&&` (${s.registers.pulse2SweepNegate?"-":"+"}, ${s.registers.pulse2SweepShift})`]})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Output:"}),R.jsx("span",{className:"register-value",children:((E=s.channelOutput)==null?void 0:E.pulse2.toFixed(2))||0})]})]})]})]})},v=()=>{var S,E,w;return R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"channel-section",children:[R.jsx("div",{className:"channel-title",children:"Triangle"}),R.jsxs("div",{className:"channel-registers",children:[R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Period:"}),R.jsx("span",{className:"register-value",children:s.registers.trianglePeriod})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Length Counter:"}),R.jsx("span",{className:"register-value",children:s.registers.triangleLengthCounter})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Linear Counter:"}),R.jsx("span",{className:"register-value",children:s.registers.triangleLinearCounter})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Sequence Position:"}),R.jsx("span",{className:"register-value",children:s.registers.triangleSequenceCounter})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Output:"}),R.jsx("span",{className:"register-value",children:((S=s.channelOutput)==null?void 0:S.triangle.toFixed(2))||0})]})]})]}),R.jsxs("div",{className:"channel-section",children:[R.jsx("div",{className:"channel-title",children:"Noise"}),R.jsxs("div",{className:"channel-registers",children:[R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Volume:"}),R.jsx("span",{className:"register-value",children:s.registers.noiseVolume})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Period:"}),R.jsx("span",{className:"register-value",children:s.registers.noisePeriod})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Length Counter:"}),R.jsx("span",{className:"register-value",children:s.registers.noiseLengthCounter})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Mode:"}),R.jsx("span",{className:"register-value",children:s.registers.noiseMode===0?"Long":"Short"})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Output:"}),R.jsx("span",{className:"register-value",children:((E=s.channelOutput)==null?void 0:E.noise.toFixed(2))||0})]})]})]}),R.jsxs("div",{className:"channel-section",children:[R.jsx("div",{className:"channel-title",children:"DMC"}),R.jsxs("div",{className:"channel-registers",children:[R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Frequency:"}),R.jsx("span",{className:"register-value",children:s.registers.dmcFrequency})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Sample Address:"}),R.jsx("span",{className:"register-value",children:f(s.registers.dmcSampleAddress,4)})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Sample Length:"}),R.jsx("span",{className:"register-value",children:s.registers.dmcSampleLength})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Current Level:"}),R.jsx("span",{className:"register-value",children:s.registers.dmcCurrentLevel})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Output:"}),R.jsx("span",{className:"register-value",children:((w=s.channelOutput)==null?void 0:w.dmc.toFixed(2))||0})]})]})]})]})},_=()=>R.jsxs("div",{className:"status-section",children:[R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Frame Counter:"}),R.jsx("span",{className:"register-value",children:s.registers.frameCounter})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"Frame Mode:"}),R.jsx("span",{className:"register-value",children:s.registers.frameCounterMode===0?"4-Step":"5-Step"})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"IRQ Inhibit:"}),R.jsx("span",{className:"register-value",children:s.registers.frameIRQInhibit?"Yes":"No"})]}),R.jsxs("div",{className:"register-item",children:[R.jsx("span",{className:"register-name",children:"IRQ Flag:"}),R.jsx("span",{className:"register-value",children:s.registers.frameIRQFlag?"Active":"Inactive"})]})]});return R.jsxs("div",{className:"visualizer apu-visualizer",children:[R.jsx("div",{className:"visualizer-title",children:"APU State"}),e?R.jsxs("div",{className:"visualizer-content",children:[R.jsxs("div",{className:"audio-visualizer",children:[R.jsx("canvas",{ref:r,width:280,height:80}),R.jsx("div",{className:"audio-controls",children:R.jsx("button",{onClick:p,disabled:!e,className:"test-tone-button",children:"Test Tone"})}),R.jsxs("div",{className:"audio-stats",children:["Buffer: ",o.current,"/",o.total," | Sent: ",o.sent]})]}),R.jsx("div",{className:"channels-container",children:R.jsxs("div",{className:"channels-scroll",children:[g(),v(),_()]})})]}):R.jsx("div",{className:"placeholder-message",children:"No APU information to display"})]})},ci=new DM,QM=()=>{const s=Pe.useRef(null),[e,t]=Pe.useState(!1),[r,o]=Pe.useState(!1),[u,c]=Pe.useState(""),[h,f]=Pe.useState(""),[p,g]=Pe.useState(0),[v,_]=Pe.useState(!1),[S,E]=Pe.useState(!1),[w,x]=Pe.useState(window.innerWidth),[y,I]=Pe.useState(!0),[P,L]=Pe.useState(!0),[F,z]=Pe.useState(!0),[k,se]=Pe.useState(!0),[C,D]=Pe.useState(!0),[de,fe]=Pe.useState(!0),[Y,te]=Pe.useState(!0),[ie,ce]=Pe.useState(!0),Z=Pe.useRef(null),G=Pe.useRef(null),J=Pe.useRef(null),W=Pe.useRef(null),T=Pe.useRef(null),[O,ue]=Pe.useState({registers:{A:0,X:0,Y:0,SP:0,PC:0,P:0},recentOpcodes:[]}),[he,me]=Pe.useState({registers:{},flags:{}}),[Me,Le]=Pe.useState({registers:{},channelOutput:{pulse1:0,pulse2:0,triangle:0,noise:0,dmc:0},buffer:{data:[],index:0,sampleRate:44100}}),[Te,Ve]=Pe.useState({reads:[],writes:[]}),[mt,it]=Pe.useState({reads:[],writes:[]});Pe.useEffect(()=>{const Ge=()=>{x(window.innerWidth)};return window.addEventListener("resize",Ge),()=>{window.removeEventListener("resize",Ge)}},[]),Pe.useEffect(()=>{const Lt=new _M;Z.current=Lt;const N=new mm(0,256,240,0,.1,1e3);N.position.z=10,G.current=N;const A=new xm({canvas:s.current,antialias:!1,powerPreference:"high-performance",precision:"lowp",alpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1});A.setSize(256,240),A.autoClear=!1,A.setClearColor(0,0),J.current=A;const re=new yM(new Uint8Array(256*240*4),256,240,Wn);re.generateMipmaps=!1,re.minFilter=Xt,re.magFilter=Xt,re.unpackAlignment=1,W.current=re;const ye=new ol(256,240),_e=new Gc({map:re,transparent:!1}),Ee=new Ui(ye,_e);return Ee.position.set(256/2,240/2,0),Lt.add(Ee),()=>{T.current&&T.current.stop(),J.current&&(J.current.dispose(),_e&&_e.dispose(),ye&&ye.dispose(),re&&re.dispose())}},[]),Pe.useEffect(()=>{ci.enableDebug(),T.current=ci,ci.onFrameReady=Oe=>{if(W.current){const yt=new Uint8Array(Oe);W.current.image.data.set(yt),W.current.needsUpdate=!0,J.current&&Z.current&&G.current&&J.current.render(Z.current,G.current)}},ci.onFpsUpdate=Oe=>{g(Oe)},ci.onRomLoaded=(Oe,yt)=>{o(Oe),Oe||f("Failed to load ROM.")},ci.onCPUStateUpdate=Oe=>{ue(Oe)},ci.onPPUStateUpdate=Oe=>{me(Oe)},ci.onAPUStateUpdate=Oe=>{Le(Oe)},ci.onMemoryUpdate=Oe=>{Ve(Oe)},ci.onControllerUpdate=Oe=>{it(Oe)};const Ge=Oe=>{S||(T.current&&T.current.handleKeyDown(Oe.key),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(Oe.key)&&Oe.preventDefault())},je=Oe=>{S||T.current&&T.current.handleKeyUp(Oe.key)};return window.addEventListener("keydown",Ge),window.addEventListener("keyup",je),()=>{window.removeEventListener("keydown",Ge),window.removeEventListener("keyup",je)}},[S]);const $=async Ge=>{const je=Ge.target.files[0];if(je)try{f("");const Oe=await je.arrayBuffer();T.current&&T.current.loadROM(je.name,Oe),c(je.name)}catch(Oe){console.error("Error loading ROM:",Oe),f(`Error loading ROM: ${Oe.message}`)}},Pt=()=>{T.current&&(v?T.current.apu.pauseAudio().then(()=>{_(!1)}):T.current.apu.resumeAudio().then(()=>{_(!0)}))},We=()=>{r&&(e?(T.current.stop(),T.current.apu.pauseAudio().then(()=>{_(!1)}),t(!1)):(T.current.start(),T.current.apu.resumeAudio().then(()=>{_(!0)}),t(!0)))},nt=[{id:"pattern",label:"Pattern Tables",state:y,setter:I},{id:"name",label:"Name Tables",state:F,setter:z},{id:"sprite",label:"Sprites",state:P,setter:L},{id:"memory",label:"Memory",state:ie,setter:ce},{id:"controller",label:"Controller",state:Y,setter:te},{id:"cpu",label:"CPU",state:C,setter:D},{id:"ppu",label:"PPU",state:k,setter:se},{id:"apu",label:"APU",state:de,setter:fe}],Ze=Ge=>je=>{Ge(je.target.checked)},vt=()=>{r&&T.current.reset()};return R.jsxs("div",{className:"nes-emulator",children:[R.jsxs("div",{className:"emulator-controls",children:[R.jsxs("div",{className:"rom-controls",children:[R.jsx("input",{type:"file",id:"rom-upload",accept:".nes",onChange:$,disabled:e}),R.jsx("label",{htmlFor:"rom-upload",className:"rom-upload-label",children:r?u:"Load ROM (.nes)"})]}),R.jsxs("div",{className:"playback-controls",children:[R.jsx("button",{onClick:We,disabled:!r,className:e?"pause-button":"play-button",children:e?"Pause":"Start"}),R.jsx("button",{onClick:vt,disabled:!r,className:"reset-button",children:"Reset"}),R.jsx("button",{onClick:Pt,disabled:!r,className:v?"audio-on":"audio-off",children:v?"Audio On":"Audio Off"}),r&&R.jsxs("div",{className:"fps-counter",children:["FPS: ",p]})]}),h&&R.jsx("div",{className:"error-message",children:h})]}),R.jsxs("div",{className:"visualizer-toggles",children:[R.jsx("div",{className:"toggle-label",children:"Active Visualizers:"}),R.jsx("div",{className:"toggle-controls",children:nt.map(Ge=>R.jsxs("div",{className:"toggle-control",children:[R.jsx("input",{type:"checkbox",id:`toggle-${Ge.id}`,checked:Ge.state,onChange:Ze(Ge.setter),disabled:!r}),R.jsx("label",{htmlFor:`toggle-${Ge.id}`,children:Ge.label})]},Ge.id))})]}),R.jsxs("div",{className:`debug-grid ${r?"":"faded"}`,children:[R.jsxs("div",{className:"grid-cell main-display",children:[R.jsx("canvas",{ref:s}),!r&&R.jsxs("div",{className:"no-rom-message",children:[R.jsx("h2",{children:"No ROM Loaded"}),R.jsx("p",{children:"Upload a .nes ROM file to begin"})]})]}),R.jsx("div",{className:`grid-cell ${r?"":"disabled"}`,children:R.jsx(IM,{system:T.current,isActive:y,isRunning:e})}),R.jsx("div",{className:`grid-cell ${r?"":"disabled"}`,children:R.jsx(FM,{system:T.current,isActive:F,isRunning:e})}),R.jsx("div",{className:`grid-cell ${r?"":"disabled"}`,children:R.jsx(OM,{system:T.current,isActive:P,isRunning:e})}),R.jsx("div",{className:`grid-cell ${r?"":"disabled"}`,children:R.jsx(Sm,{system:T.current,memoryState:Te,isActive:ie,isRunning:e})}),R.jsx("div",{className:`grid-cell ${r?"":"disabled"}`,children:R.jsx(zM,{system:T.current,controllerState:mt,isActive:Y,isRunning:e})}),R.jsx("div",{className:`grid-cell ${r?"":"disabled"}`,children:R.jsx(VM,{cpuState:O,isActive:C,isRunning:e})}),R.jsx("div",{className:`grid-cell ${r?"":"disabled"}`,children:R.jsx(Mm,{ppuState:he,isActive:k,isRunning:e})}),R.jsx("div",{className:`grid-cell ${r?"":"disabled"}`,children:R.jsx(KM,{apuState:Me,isActive:de,isRunning:e,system:T.current})})]})]})};function ZM(){return R.jsx("div",{className:"App",children:R.jsx("main",{children:R.jsx(QM,{})})})}const JM=h0.createRoot(document.getElementById("root"));JM.render(R.jsx(Vp.StrictMode,{children:R.jsx(ZM,{})}));
