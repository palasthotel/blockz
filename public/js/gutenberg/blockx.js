!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=25)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.React}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){var r=n(18),o=n(19),i=n(11),c=n(20);e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||c()}},function(e,t){!function(){e.exports=this.regeneratorRuntime}()},function(e,t,n){var r=n(22),o=n(23),i=n(11),c=n(24);e.exports=function(e){return r(e)||o(e)||i(e)||c()}},function(e,t,n){"use strict";n.r(t),n.d(t,"getBlockContext",(function(){return c}));var r=n(3),o=n.n(r),i={},c=function(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"undefined"===o()(i[e])&&(i[e]=React.createContext(t)),i[e]}("block")}},function(e,t){function n(e,t,n,r,o,i,c){try{var u=e[i](c),a=u.value}catch(e){return void n(e)}u.done?t(a):Promise.resolve(a).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var c=e.apply(t,r);function u(e){n(c,o,i,u,a,"next",e)}function a(e){n(c,o,i,u,a,"throw",e)}u(void 0)}))}}},function(e,t){!function(){e.exports=this.wp.apiFetch}()},function(e,t,n){var r=n(12);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.serverSideRender}()},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){},function(e,t,n){var r=n(12);e.exports=function(e){if(Array.isArray(e))return r(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r),i=n(5),c=n.n(i),u=n(4),a=n.n(u),l=n(0),f=n(13),s=n(14),p=n(15),d=n.n(p),b=n(2),v=function(e){var t=e.definition,n=e.value,r=e.onChange;return Object(l.createElement)(b.TextControl,{label:t.label,value:n,onChange:r,type:"number"})},y=n(16),h=n.n(y),m=n(6),g=n.n(m),O=n(9),j=n.n(O),w=n(10),x=n.n(w),S=n(1),E=Object.prototype.hasOwnProperty;var _=new WeakMap,k=0;var C={isOnline:function(){return void 0===navigator.onLine||navigator.onLine},isDocumentVisible:function(){return"undefined"==typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))}},P=new(function(){function e(e){void 0===e&&(e={}),this.__cache=new Map(Object.entries(e)),this.__listeners=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.__cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.__cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.__cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.__cache.has(t)},e.prototype.clear=function(){this.__cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.__cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"==typeof e)try{e=e()}catch(t){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n){var r=void 0;null===e[n]||"object"!=typeof e[n]&&"function"!=typeof e[n]?r="string"==typeof e[n]?'"'+e[n]+'"':String(e[n]):_.has(e[n])?r=_.get(e[n]):(r=k,_.set(e[n],k++)),t+="@"+r}return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!=typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.__listeners.push(e),function(){if(n){n=!1;var r=t.__listeners.indexOf(e);r>-1&&(t.__listeners[r]=t.__listeners[t.__listeners.length-1],t.__listeners.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.__listeners;e<t.length;e++){(0,t[e])()}},e}());var D="undefined"!=typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),I={onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,o){if(n.isDocumentVisible()&&!("number"==typeof n.errorRetryCount&&o.retryCount>n.errorRetryCount)){var i=Math.min(o.retryCount||0,8),c=~~((Math.random()+.5)*(1<<i))*n.errorRetryInterval;setTimeout(r,c,o)}},errorRetryInterval:1e3*(D?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(D?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,n){var r,o;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((o=t.length)===n.length)for(;o--&&e(t[o],n[o]););return-1===o}if(!r||"object"==typeof t){for(r in o=0,t){if(E.call(t,r)&&++o&&!E.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===o}}return t!=t&&n!=n},fetcher:C.fetcher,isOnline:C.isOnline,isDocumentVisible:C.isDocumentVisible},A=Object(S.createContext)({});A.displayName="SWRConfigContext";var T,R=A,V=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(e){i(e)}}function u(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,u)}a((r=r.apply(e,t||[])).next())}))},N=function(e,t){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=c.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},L="undefined"==typeof window||!!("undefined"!=typeof Deno&&Deno&&Deno.version&&Deno.version.deno),B=L?null:window.requestAnimationFrame||function(e){return setTimeout(e,1)},M=L?S.useEffect:S.useLayoutEffect,F={},z={},K={},W={},U={},q={},X={},$=(T=0,function(){return T++});if(!L&&window.addEventListener){var H=function(e){if(I.isDocumentVisible()&&I.isOnline())for(var t in e)e[t][0]&&e[t][0]()};window.addEventListener("visibilitychange",(function(){return H(K)}),!1),window.addEventListener("focus",(function(){return H(K)}),!1),window.addEventListener("online",(function(){return H(W)}),!1)}var J=function(e,t){void 0===t&&(t=!0);var n=P.serializeKey(e),r=n[0],o=n[2],i=n[3];if(!r)return Promise.resolve();var c=U[r];if(r&&c){for(var u=P.get(r),a=P.get(o),l=P.get(i),f=[],s=0;s<c.length;++s)f.push(c[s](t,u,a,l,s>0));return Promise.all(f).then((function(){return P.get(r)}))}return Promise.resolve(P.get(r))},G=function(e,t,n,r){var o=U[e];if(e&&o)for(var i=0;i<o.length;++i)o[i](!1,t,n,r)},Q=function(e,t,n){return void 0===n&&(n=!0),V(void 0,void 0,void 0,(function(){var r,o,i,c,u,a,l,f,s,p,d,b,v;return N(this,(function(y){switch(y.label){case 0:if(r=P.serializeKey(e),o=r[0],i=r[2],!o)return[2];if(void 0===t)return[2,J(e,n)];if(q[o]=$()-1,X[o]=0,c=q[o],u=z[o],f=!1,t&&"function"==typeof t)try{t=t(P.get(o))}catch(e){l=e}if(!t||"function"!=typeof t.then)return[3,5];f=!0,y.label=1;case 1:return y.trys.push([1,3,,4]),[4,t];case 2:return a=y.sent(),[3,4];case 3:return s=y.sent(),l=s,[3,4];case 4:return[3,6];case 5:a=t,y.label=6;case 6:return(p=function(){if(c!==q[o]||u!==z[o]){if(l)throw l;return!0}})()?[2,a]:(void 0!==a&&P.set(o,a),P.set(i,l),X[o]=$()-1,f?[3,8]:[4,0]);case 7:if(y.sent(),p())return[2,a];y.label=8;case 8:if(d=U[o]){for(b=[],v=0;v<d.length;++v)b.push(d[v](!!n,a,l,void 0,v>0));return[2,Promise.all(b).then((function(){if(l)throw l;return P.get(o)}))]}if(l)throw l;return[2,a]}}))}))};R.Provider;var Y=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r,o,i={};t.length>=1&&(r=t[0]),t.length>2?(o=t[1],i=t[2]):"function"==typeof t[1]?o=t[1]:"object"==typeof t[1]&&(i=t[1]);var c=P.serializeKey(r),u=c[0],a=c[1],l=c[2],f=c[3];i=Object.assign({},I,Object(S.useContext)(R),i);var s=Object(S.useRef)(i);M((function(){s.current=i})),void 0===o&&(o=i.fetcher);var p=function(){var e=P.get(u);return void 0===e?i.initialData:e},d=p(),b=P.get(l),v=!!P.get(f),y=Object(S.useRef)({data:!1,error:!1,isValidating:!1}),h=Object(S.useRef)({data:d,error:b,isValidating:v});Object(S.useDebugValue)(h.current.data);var m=Object(S.useState)(null)[1],g=Object(S.useCallback)((function(e){var t=!1;for(var n in e)h.current[n]!==e[n]&&(h.current[n]=e[n],y.current[n]&&(t=!0));if(t||i.suspense){if(O.current||!w.current)return;m({})}}),[]),O=Object(S.useRef)(!1),j=Object(S.useRef)(u),w=Object(S.useRef)(!1),x=Object(S.useRef)({emit:function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];O.current||(t=s.current)[e].apply(t,n)}}),E=Object(S.useCallback)((function(e,t){return Q(j.current,e,t)}),[]),_=function(e,t){t&&(e[u]?e[u].push(t):e[u]=[t])},k=function(e,t){if(e[u]){var n=e[u],r=n.indexOf(t);r>=0&&(n[r]=n[n.length-1],n.pop())}},C=Object(S.useCallback)((function(t){return void 0===t&&(t={}),V(e,void 0,void 0,(function(){var e,n,r,c,s,p,d;return N(this,(function(b){switch(b.label){case 0:if(!u||!o)return[2,!1];if(O.current)return[2,!1];t=Object.assign({dedupe:!1},t),e=!0,n=void 0!==F[u]&&t.dedupe,b.label=1;case 1:return b.trys.push([1,6,,7]),g({isValidating:!0}),P.set(f,!0),n||G(u,h.current.data,h.current.error,!0),r=void 0,c=void 0,n?(c=z[u],[4,F[u]]):[3,3];case 2:return r=b.sent(),[3,5];case 3:return i.loadingTimeout&&!P.get(u)&&setTimeout((function(){e&&x.current.emit("onLoadingSlow",u,i)}),i.loadingTimeout),F[u]=null!==a?o.apply(void 0,a):o(u),z[u]=c=$(),[4,F[u]];case 4:r=b.sent(),setTimeout((function(){delete F[u],delete z[u]}),i.dedupingInterval),x.current.emit("onSuccess",r,u,i),b.label=5;case 5:return z[u]>c||q[u]&&(c<=q[u]||c<=X[u]||0===X[u])?(g({isValidating:!1}),[2,!1]):(P.set(u,r),P.set(l,void 0),P.set(f,!1),s={isValidating:!1},void 0!==h.current.error&&(s.error=void 0),i.compare(h.current.data,r)||(s.data=r),g(s),n||G(u,r,s.error,!1),[3,7]);case 6:return p=b.sent(),delete F[u],delete z[u],P.set(l,p),h.current.error!==p&&(g({isValidating:!1,error:p}),n||G(u,void 0,p,!1)),x.current.emit("onError",p,u,i),i.shouldRetryOnError&&(d=(t.retryCount||0)+1,x.current.emit("onErrorRetry",p,u,i,C,Object.assign({dedupe:!0},t,{retryCount:d}))),[3,7];case 7:return e=!1,[2,!0]}}))}))}),[u]);M((function(){if(u){O.current=!1,w.current=!0;var e=h.current.data,t=p();j.current!==u&&(j.current=u),i.compare(e,t)||g({data:t});var n=function(){return C({dedupe:!0})};(i.revalidateOnMount||!i.initialData&&void 0===i.revalidateOnMount)&&(void 0!==t?B(n):n());var r=!1,o=function(){!r&&s.current.revalidateOnFocus&&(r=!0,n(),setTimeout((function(){return r=!1}),s.current.focusThrottleInterval))},c=function(){s.current.revalidateOnReconnect&&n()},a=function(e,t,r,o,c){void 0===e&&(e=!0),void 0===c&&(c=!0);var u={},a=!1;return void 0===t||i.compare(h.current.data,t)||(u.data=t,a=!0),h.current.error!==r&&(u.error=r,a=!0),void 0!==o&&h.current.isValidating!==o&&(u.isValidating=o,a=!0),a&&g(u),!!e&&(c?n():C())};return _(K,o),_(W,c),_(U,a),function(){g=function(){return null},O.current=!0,k(K,o),k(W,c),k(U,a)}}}),[u,C]),M((function(){var t=null,n=function(){return V(e,void 0,void 0,(function(){return N(this,(function(e){switch(e.label){case 0:return h.current.error||!s.current.refreshWhenHidden&&!s.current.isDocumentVisible()||!s.current.refreshWhenOffline&&!s.current.isOnline()?[3,2]:[4,C({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return s.current.refreshInterval&&!h.current.error&&(t=setTimeout(n,s.current.refreshInterval)),[2]}}))}))};return s.current.refreshInterval&&(t=setTimeout(n,s.current.refreshInterval)),function(){t&&clearTimeout(t)}}),[i.refreshInterval,i.refreshWhenHidden,i.refreshWhenOffline,C]);var D=Object(S.useMemo)((function(){var e={revalidate:C,mutate:E};return Object.defineProperties(e,{error:{get:function(){return y.current.error=!0,j.current===u?h.current.error:b},enumerable:!0},data:{get:function(){return y.current.data=!0,j.current===u?h.current.data:d},enumerable:!0},isValidating:{get:function(){return y.current.isValidating=!0,h.current.isValidating},enumerable:!0}}),e}),[C]);if(i.suspense){var A=P.get(u),T=P.get(l);if(void 0===A&&(A=d),void 0===T&&(T=b),void 0===A&&void 0===T){if(F[u]||C(),F[u]&&"function"==typeof F[u].then)throw F[u];A=F[u]}if(void 0===A&&T)throw T;return{error:T,data:A,revalidate:C,mutate:E,isValidating:h.current.isValidating}}return D};var Z=Y,ee=n(8),te=function(){return Object(S.useContext)(Object(ee.getBlockContext)())};function ne(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return re(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}}function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ce={},ue=function(){var e=j()(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=ce[t],o()(n)!==o()({})||"undefined"===o()(n.content)){e.next=3;break}return e.abrupt("return",n);case 3:return e.next=5,x()({path:"/wp/v2/posts/"+t});case 5:return r=e.sent,o()(r)===o()({})&&r.id&&(r.post_title=r.title.rendered,r.ID=r.id,ce[t]=ie(ie(ie({},ce[t]||{}),r),{},{ID:r.id,post_title:r.title.rendered})),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae={},le=function(e,t,n,r){var i,u,a,f,s,p,d=te(),b=d.blockId,v=d.dirtyState,y=function(e,t,n,r){return{s:e,post_type:t.join(","),post_status:n.join(","),block_instance:r}}((i=e,u=600,a=Object(l.useState)(i),f=c()(a,2),s=f[0],p=f[1],Object(l.useEffect)((function(){var e=setTimeout((function(){p(i)}),u);return function(){clearTimeout(e)}}),[i,u]),s),t,n,ie({},r?{blockId:b,content:v}:{blockId:b})),h=JSON.stringify(y),m=Z(h,function(e){return j()(g.a.mark((function t(){var n,r,i,c,u,a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e.length){t.next=2;break}return t.abrupt("return",[]);case 2:if(n="/blockx/v1/query",r=JSON.stringify(e),o()(ae[r])!==o()([])){t.next=6;break}return t.abrupt("return",ae[r]);case 6:return t.next=8,x()({method:"POST",path:n,data:e});case 8:i=t.sent,ae[r]=i,c=ne(i);try{for(c.s();!(u=c.n()).done;)a=u.value,ce[a.ID]=a}catch(e){c.e(e)}finally{c.f()}return t.abrupt("return",i);case 13:case"end":return t.stop()}}),t)})))}(y)),O=m.data;return{posts:O||[],isLoading:!m.error&&!O}},fe=(n(21),function(e){e.ID;var t=e.post_title,n=e.onClick;return Object(l.createElement)("div",{className:"blockx-post",onClick:n},t)}),se=function(e){var t=e.label,n=e.post_types,r=e.post_status,o=e.use_context,i=e.onFound,u=Object(l.useState)(""),a=c()(u,2),f=a[0],s=a[1],p=Object(l.useState)(!1),d=c()(p,2),v=d[0],y=d[1],m=le(f,n,r,o),g=m.posts,O=m.isLoading;return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];Object(l.useEffect)((function(){if(n){var t=function(t){"Escape"===t.key&&e()};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}}),t)}((function(){y(!1)}),[v],v),Object(l.createElement)(b.BaseControl,{className:"blockx--search-post"},Object(l.createElement)("div",{className:"blockx--search-posts__input-wrapper"},Object(l.createElement)(b.TextControl,{label:t,value:f,onChange:function(e){y(!0),s(e)},onFocus:function(){return y(!0)}}),O&&Object(l.createElement)("span",{className:"blockx--search-post__spinner-wrapper"},Object(l.createElement)(b.Spinner,null))),v?Object(l.createElement)(b.Popover,{focusOnMount:!1,position:"bottom center"},g.length>0?g.map((function(e){return Object(l.createElement)(fe,h()({key:e.ID},e,{onClick:function(){return i(e.ID)}}))})):Object(l.createElement)("p",{className:"blockx--search-post__no-results"},"No posts found.")):null)},pe=function(e){var t,n,r=e.label,o=e.post_id,i=e.onUnlock,c=(t=Z(o,ue),{post:(n=t.data)||{},isLoading:!t.error&&!n}).post.post_title,u=void 0===c?o:c;return Object(l.createElement)(b.BaseControl,{className:"blockx--locked-post"},Object(l.createElement)(b.TextControl,{label:r,value:u,readOnly:!0}),Object(l.createElement)("span",{className:"blockx--locked-post__icon",onClick:i},Object(l.createElement)(b.Icon,{icon:"no"})))},de=function(e){var t=e.definition,n=e.value,r=e.onChange,o=e.instance;return n?Object(l.createElement)(pe,{label:t.label,post_id:n,onUnlock:function(){return r("")}}):Object(l.createElement)(se,{label:t.label,post_types:t.post_types,post_status:t.post_status,use_context:t.use_context,instance:o,onFound:r})},be=function(e){var t=e.definition,n=e.value,r=e.onChange,o=t.label,i=t.options;return Object(l.createElement)(b.SelectControl,{label:o,value:n,onChange:r,options:i})},ve=n(7),ye=n.n(ve),he=n(17),me=function(e,t){return{value:e,label:t}},ge=function(e){return o()(e)===o()("")?BlockX.i18n[e]:BlockX.i18n},Oe=function(){return ge("widget_tax_query")},je=function(e){return Object(he.useSelect)((function(t){return t("core").getEntityRecords("taxonomy",e,{per_page:-1})||[]}),[e])};function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?we(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Se=function(e,t){return function(e,t){return t.find((function(t){return t.id===e}))}(e,t)||function(e,t){return t.find((function(t){return t.slug===e}))}(e,t)||function(e,t){return t.find((function(t){return t.name===e}))}(e,t)},Ee=function(e){var t=e.taxonomies,n=e.value,r=e.onChange,i=n.taxonomy,c=void 0===i?t[0]:i,u=n.termIds,a=void 0===u?[]:u,f=n.operator,s=void 0===f?"OR":f,p=Oe(),d=p.label_taxonomy,v=p.label_add_terms,y=p.label_operator,h=je(c);Object(l.useEffect)((function(){t.map((function(e){return e.value})).includes(c)||r(xe(xe({},n),{},{taxonomy:t[0].value}))}),[c,t]);return Object(l.createElement)(l.Fragment,null,Object(l.createElement)("div",null,Object(l.createElement)(b.SelectControl,{label:d,options:t,value:c,onChange:function(e){return r(xe(xe({},n),{},{taxonomy:e}))}})),Object(l.createElement)("div",null,Object(l.createElement)(b.FormTokenField,{label:v,value:a.map((function(e){var t=Se(e,h);return t?t.name:e})),suggestions:h.map((function(e){return e.name})),onChange:function(e){var t=e.map((function(e){var t=o()(e)===o()("")?e:e.value,n=Se(t,h);return n?n.id:t}));r(xe(xe({},n),{},{termIds:t}))}})),Object(l.createElement)("div",null,Object(l.createElement)(b.SelectControl,{label:y,value:s,options:["IN","NOT IN","AND"].map((function(e){return me(e,e)})),onChange:function(e){r(xe(xe({},n),{},{operator:e}))}})))},_e=function(e){var t=e.children;return Object(l.createElement)("div",{style:{background:"rgba(0, 0, 0, 0.02)",padding:8,border:"1px solid rgba(0, 0, 0, 0.1)",borderRadius:4,marginBottom:5,marginLeft:-10,marginRight:-10}},t)},ke=function(e){var t=e.taxonomies,n=e.value,r=e.onChange,o=Oe(),i=o.toggle_AND_description,c=o.toggle_OR_description,u=o.btn_add_taxonomy,a=o.btn_delete_taxonomy,f=n.taxonomies,s=void 0===f?[]:f,p=n.relation,d=void 0===p?"OR":p,v=function(e){return r(e.taxonomies.length>=1?e:void 0)};return Object(l.createElement)("div",null,Object(l.createElement)("div",null,s.map((function(e,r){return Object(l.createElement)(_e,{key:r},Object(l.createElement)(Ee,{taxonomies:t,value:e,onChange:function(e){v(xe(xe({},n),{},{taxonomies:s.map((function(t,n){return r===n?e:t}))}))}}),Object(l.createElement)(b.Button,{isDestructive:!0,isSmall:!0,onClick:function(){v(xe(xe({},n),{},{taxonomies:s.map((function(e,t){return t===r?null:e})).filter((function(e){return null!=e}))}))}},a))})),s.length>1?Object(l.createElement)("div",{style:{marginTop:10}},Object(l.createElement)(b.ToggleControl,{label:d,help:"AND"===d?i:c,checked:"AND"===d,onChange:function(e){v(xe(xe({},n),{},{relation:e?"AND":"OR"}))}})):null),Object(l.createElement)(b.Button,{isSecondary:!0,isSmall:!0,onClick:function(){v({relation:d,taxonomies:[].concat(ye()(s),[{}])})},style:{width:"100%",textAlign:"center",display:"inline-block"}},u))},Ce=function(e,t){return o()(e)===o()({})?t?e.on:e.off:o()(e)===o()("")?e:null},Pe={text:function(e){var t=e.definition,n=e.value,r=e.onChange;return Object(l.createElement)(b.TextControl,{label:t.label,value:n,onChange:r})},number:v,toggle:function(e){var t=e.definition,n=e.value,r=e.onChange,o=t.label,i=t.help;return Object(l.createElement)(b.ToggleControl,{label:Ce(o,n),help:Ce(i,n),checked:n,onChange:r})},select:be,taxonomy_term:function(e){var t=e.definition,n=e.value,r=e.onChange,o=t.label,i=function(e){var t=je(e),n=ge().term_select_any;return[me("",n)].concat(ye()(t.map((function(e){var t=e.name,n=e.id;return me(n,t)}))))}(t.taxonomy);return Object(l.createElement)(b.SelectControl,{label:o,value:n,onChange:r,options:i})},tax_query:function(e){var t=e.definition,n=e.value,r=e.onChange;return Object(l.createElement)(b.BaseControl,{label:t.label},Object(l.createElement)(ke,{taxonomies:t.taxonomies,value:n,onChange:r}))},post:de},De=function(e){var t=e.items,n=e.value,r=e.onChange;return t.map((function(e){if("undefined"!==o()(Pe[e.type])){var t=Pe[e.type],i="undefined"!==o()(n[e.key])?n[e.key]:e.defaultValue;return Object(l.createElement)(t,{key:e.key,definition:e,value:i,onChange:function(t){return r(e.key,t)}})}return Object(l.createElement)("p",{key:e.key},"Type ",Object(l.createElement)("b",null,e.type)," not implemented")}))};function Ie(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return Ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ae(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}}function Ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Te(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ve=function(e){var t,n=e.definition,r=e.content,o=e.setContent,i=ge().btn_apply_changes,c=te(),u=c.localChanges,a=c.changeLocalState,f=[],s={label:void 0,opened:void 0,contentStructure:[]},p=Ie(n);try{for(p.s();!(t=p.n()).done;){var d=t.value;"panel"!==d.type?s.contentStructure.push(d):(f.push(Re({},s)),f.push({label:d.label,opened:d.opened,contentStructure:d.contentStructure}),s.contentStructure=[])}}catch(e){p.e(e)}finally{p.f()}return s.contentStructure.length>0&&f.push(s),Object(l.createElement)(l.Fragment,null,f.map((function(e,t){return Object(l.createElement)(b.PanelBody,{key:t,title:e.label,initialOpen:e.opened},Object(l.createElement)(De,{items:e.contentStructure,value:Re(Re({},r),u),onChange:function(e,t){a(e,t)}}))})),Object(l.createElement)(b.PanelBody,null,Object(l.createElement)(b.Button,{isSecondary:!0,disabled:0===Object.keys(u).length,onClick:function(){o(Re(Re({},r),u))}},i)))};function Ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ne(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Be=n(8).getBlockContext,Me=function(e){var t=e.blockId,n=e.contentStructure,r=e.defaultValues,o=e.content,i=e.changeLocalState,c=e.localChanges,u=e.children,a=Be();return Object(l.createElement)(a.Provider,{value:{blockId:t,contentStructure:n,defaultValues:r,content:o,changeLocalState:i,localChanges:c,dirtyState:Le(Le({},o),c)}},u)};function Fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ze(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Fe(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ke(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return We(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return We(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}}function We(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Ue,qe=window.BlockXComponents||{},Xe=Ke(BlockX.blocks);try{var $e=function(){var e,t=Ue.value,n=t.id,r=t.title,i=t.category,u=t.registerBlockTypeArgs,p=t.contentStructure,b={},v=Ke(p);try{for(v.s();!(e=v.n()).done;){var y=e.value,h=y.defaultValue,m=y.key,g=y.options;"undefined"!==o()(h)?b[m]=h:o()(g)===o()([])&&g.length>0&&o()(g[0].value)===o()("")&&(b[m]=g[0].value)}}catch(e){v.e(e)}finally{v.f()}Object(f.registerBlockType)(n,ze(ze({},u),{},{title:r,category:i,attributes:{content:{type:"object",default:b}},edit:function(e){e.isSelected;var t=e.className,r=e.setAttributes,o=e.attributes,i=Object(l.useState)({}),u=c()(i,2),f=u[0],v=u[1],y=function(e,t){return v((function(n){return ze(ze({},f),{},a()({},e,t))}))},h=qe[n]||d.a;return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(s.InspectorControls,null,Object(l.createElement)(Me,{blockId:n,contentStructure:p,defaultValues:b,content:o.content,changeLocalState:y,localChanges:f},Object(l.createElement)(Ve,{definition:p,content:o.content,setContent:function(e){r({content:e}),v({})}}))),Object(l.createElement)("div",{className:t},Object(l.createElement)(Me,{blockId:n,contentStructure:p,defaultValues:b,content:o.content,changeLocalState:y,localChanges:f},Object(l.createElement)(h,{block:n,attributes:o,content:o.content}))))}}))};for(Xe.s();!(Ue=Xe.n()).done;)$e()}catch(e){Xe.e(e)}finally{Xe.f()}}]);