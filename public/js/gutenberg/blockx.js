!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=28)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.React}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){!function(){e.exports=this.regeneratorRuntime}()},function(e,t,n){var r=n(19),o=n(20),i=n(14),c=n(21);e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||c()}},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.wp.apiFetch}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t,n){var r=n(23),o=n(24),i=n(14),c=n(25);e.exports=function(e){return r(e)||o(e)||i(e)||c()}},function(e,t,n){"use strict";n.r(t),n.d(t,"STORE_NAME",(function(){return C}));var r=n(1),o=n.n(r),i=n(4),c=n.n(i),u=n(5),a=n.n(u),l=n(8),s=n.n(l),f=n(7);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(){return JSON.parse(localStorage.getItem("blockx-ssr-cache-timestamps")||"{}")},v=function(e){return localStorage.setItem("blockx-ssr-cache-timestamps",JSON.stringify(e))},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=d(),r=Date.now();for(var o in e)n[o]=r+1e3*t;v(n),localStorage.setItem("blockx-ssr-cache",JSON.stringify(e))},h=function(){return JSON.parse(localStorage.getItem("blockx-ssr-cache")||"{}")},m=d(),O=Date.now();for(var g in m)m[g]<O&&delete m[g],v(m);var j=Object.keys(m),E=h();for(var w in E)j.includes(w)||delete E[w];y(E);var S=function(e,t){return btoa("".concat(e,"-").concat(JSON.stringify(t)))},k={isRequesting:!1,blocks:h(),queue:{}},x=function(e){return{type:"SET_IS_REQUESTING",isRequesting:e}},_={addToQueue:function(e,t){var n={id:e,content:t};return function(e,t){return{type:"ADD_TO_QUEUE",hash:e,block:t}}(S(e,t),n)},fetchSSR:a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=P.getState().queue,!(Object.keys(t).length<1)){e.next=3;break}return e.abrupt("return",{type:"none"});case 3:return e.next=5,x(!0);case 5:return e.next=7,{type:"SSR_FETCH",path:"/blockx/v1/ssr",data:{blocks:t}};case 7:return n=e.sent,e.next=10,{type:"SET_BLOCKS",blocks:n};case 10:return e.next=12,{type:"REMOVE_FROM_QUEUE",hashes:Object.keys(t)};case 12:return e.abrupt("return",x(!1));case 13:case"end":return e.stop()}}),e)}))},C="block-x",P=Object(f.registerStore)(C,{reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IS_REQUESTING":return b(b({},e),{},{isRequesting:t.isRequesting});case"SET_BLOCKS":var n=b(b({},e.blocks),t.blocks);return y(n),b(b({},e),{},{blocks:n});case"ADD_TO_QUEUE":return b(b({},e),{},{queue:b(b({},e.queue),{},c()({},t.hash,t.block))});case"REMOVE_FROM_QUEUE":return b(b({},e),{},{queue:Object.keys(e.queue).filter((function(e){return!t.hashes.includes(e)})).map((function(t){return e.queue[t]}))})}return e},actions:_,selectors:{isRequesting:function(e,t,n){return"undefined"===o()(t)||"undefined"===o()(n)?e.isRequesting:e.isRequesting&&"undefined"!==o()(e.queue[S(t,n)])},isInQueue:function(e,t,n){return"undefined"!==o()(e.queue[S(t,n)])},getQueue:function(e){return Object.values(e.queue)},getBlocks:function(e){return e.blocks},getBlock:function(e,t,n){return e.blocks[S(t,n)]}},controls:{SSR_FETCH:function(e){return s()({path:e.path,data:e.data,method:"POST"})}}})},function(e,t,n){"use strict";n.r(t),n.d(t,"getBlockContext",(function(){return c}));var r=n(1),o=n.n(r),i={},c=function(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"undefined"===o()(i[e])&&(i[e]=React.createContext(t)),i[e]}("block")}},function(e,t){function n(e,t,n,r,o,i,c){try{var u=e[i](c),a=u.value}catch(e){return void n(e)}u.done?t(a):Promise.resolve(a).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var c=e.apply(t,r);function u(e){n(c,o,i,u,a,"next",e)}function a(e){n(c,o,i,u,a,"throw",e)}u(void 0)}))}}},function(e,t,n){var r=n(15);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){},function(e,t,n){var r=n(15);e.exports=function(e){if(Array.isArray(e))return r(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){},function(e,t,n){var r=n(11).STORE_NAME;setInterval((function(){var e=wp.data.select(r);e.isRequesting()||e.getQueue().length<1||wp.data.dispatch(r).fetchSSR()}),300)},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(6),c=n.n(i),u=n(4),a=n.n(u),l=n(0),s=n(16),f=n(17),p=n(2),b=function(e){var t=e.definition,n=e.value,r=e.onChange;return Object(l.createElement)(p.TextControl,{label:t.label,value:n,onChange:r,type:"number"})},d=n(18),v=n.n(d),y=n(5),h=n.n(y),m=n(13),O=n.n(m),g=n(8),j=n.n(g),E=n(3),w=Object.prototype.hasOwnProperty;var S=new WeakMap,k=0;var x={isOnline:function(){return void 0===navigator.onLine||navigator.onLine},isDocumentVisible:function(){return"undefined"==typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))}},_=new(function(){function e(e){void 0===e&&(e={}),this.__cache=new Map(Object.entries(e)),this.__listeners=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.__cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.__cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.__cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.__cache.has(t)},e.prototype.clear=function(){this.__cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.__cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"==typeof e)try{e=e()}catch(t){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n){var r=void 0;null===e[n]||"object"!=typeof e[n]&&"function"!=typeof e[n]?r="string"==typeof e[n]?'"'+e[n]+'"':String(e[n]):S.has(e[n])?r=S.get(e[n]):(r=k,S.set(e[n],k++)),t+="@"+r}return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!=typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.__listeners.push(e),function(){if(n){n=!1;var r=t.__listeners.indexOf(e);r>-1&&(t.__listeners[r]=t.__listeners[t.__listeners.length-1],t.__listeners.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.__listeners;e<t.length;e++){(0,t[e])()}},e}());var C="undefined"!=typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),P={onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,o){if(n.isDocumentVisible()&&!("number"==typeof n.errorRetryCount&&o.retryCount>n.errorRetryCount)){var i=Math.min(o.retryCount||0,8),c=~~((Math.random()+.5)*(1<<i))*n.errorRetryInterval;setTimeout(r,c,o)}},errorRetryInterval:1e3*(C?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(C?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,n){var r,o;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((o=t.length)===n.length)for(;o--&&e(t[o],n[o]););return-1===o}if(!r||"object"==typeof t){for(r in o=0,t){if(w.call(t,r)&&++o&&!w.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===o}}return t!=t&&n!=n},fetcher:x.fetcher,isOnline:x.isOnline,isDocumentVisible:x.isDocumentVisible},D=Object(E.createContext)({});D.displayName="SWRConfigContext";var I,T=D,R=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(e){i(e)}}function u(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,u)}a((r=r.apply(e,t||[])).next())}))},A=function(e,t){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=c.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},N="undefined"==typeof window||!!("undefined"!=typeof Deno&&Deno&&Deno.version&&Deno.version.deno),L=N?null:window.requestAnimationFrame||function(e){return setTimeout(e,1)},V=N?E.useEffect:E.useLayoutEffect,M={},B={},q={},F={},U={},Q={},K={},z=(I=0,function(){return I++});if(!N&&window.addEventListener){var W=function(e){if(P.isDocumentVisible()&&P.isOnline())for(var t in e)e[t][0]&&e[t][0]()};window.addEventListener("visibilitychange",(function(){return W(q)}),!1),window.addEventListener("focus",(function(){return W(q)}),!1),window.addEventListener("online",(function(){return W(F)}),!1)}var J=function(e,t){void 0===t&&(t=!0);var n=_.serializeKey(e),r=n[0],o=n[2],i=n[3];if(!r)return Promise.resolve();var c=U[r];if(r&&c){for(var u=_.get(r),a=_.get(o),l=_.get(i),s=[],f=0;f<c.length;++f)s.push(c[f](t,u,a,l,f>0));return Promise.all(s).then((function(){return _.get(r)}))}return Promise.resolve(_.get(r))},H=function(e,t,n,r){var o=U[e];if(e&&o)for(var i=0;i<o.length;++i)o[i](!1,t,n,r)},X=function(e,t,n){return void 0===n&&(n=!0),R(void 0,void 0,void 0,(function(){var r,o,i,c,u,a,l,s,f,p,b,d,v;return A(this,(function(y){switch(y.label){case 0:if(r=_.serializeKey(e),o=r[0],i=r[2],!o)return[2];if(void 0===t)return[2,J(e,n)];if(Q[o]=z()-1,K[o]=0,c=Q[o],u=B[o],s=!1,t&&"function"==typeof t)try{t=t(_.get(o))}catch(e){l=e}if(!t||"function"!=typeof t.then)return[3,5];s=!0,y.label=1;case 1:return y.trys.push([1,3,,4]),[4,t];case 2:return a=y.sent(),[3,4];case 3:return f=y.sent(),l=f,[3,4];case 4:return[3,6];case 5:a=t,y.label=6;case 6:return(p=function(){if(c!==Q[o]||u!==B[o]){if(l)throw l;return!0}})()?[2,a]:(void 0!==a&&_.set(o,a),_.set(i,l),K[o]=z()-1,s?[3,8]:[4,0]);case 7:if(y.sent(),p())return[2,a];y.label=8;case 8:if(b=U[o]){for(d=[],v=0;v<b.length;++v)d.push(b[v](!!n,a,l,void 0,v>0));return[2,Promise.all(d).then((function(){if(l)throw l;return _.get(o)}))]}if(l)throw l;return[2,a]}}))}))};T.Provider;var $=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r,o,i={};t.length>=1&&(r=t[0]),t.length>2?(o=t[1],i=t[2]):"function"==typeof t[1]?o=t[1]:"object"==typeof t[1]&&(i=t[1]);var c=_.serializeKey(r),u=c[0],a=c[1],l=c[2],s=c[3];i=Object.assign({},P,Object(E.useContext)(T),i);var f=Object(E.useRef)(i);V((function(){f.current=i})),void 0===o&&(o=i.fetcher);var p=function(){var e=_.get(u);return void 0===e?i.initialData:e},b=p(),d=_.get(l),v=!!_.get(s),y=Object(E.useRef)({data:!1,error:!1,isValidating:!1}),h=Object(E.useRef)({data:b,error:d,isValidating:v});Object(E.useDebugValue)(h.current.data);var m=Object(E.useState)(null)[1],O=Object(E.useCallback)((function(e){var t=!1;for(var n in e)h.current[n]!==e[n]&&(h.current[n]=e[n],y.current[n]&&(t=!0));if(t||i.suspense){if(g.current||!w.current)return;m({})}}),[]),g=Object(E.useRef)(!1),j=Object(E.useRef)(u),w=Object(E.useRef)(!1),S=Object(E.useRef)({emit:function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];g.current||(t=f.current)[e].apply(t,n)}}),k=Object(E.useCallback)((function(e,t){return X(j.current,e,t)}),[]),x=function(e,t){t&&(e[u]?e[u].push(t):e[u]=[t])},C=function(e,t){if(e[u]){var n=e[u],r=n.indexOf(t);r>=0&&(n[r]=n[n.length-1],n.pop())}},D=Object(E.useCallback)((function(t){return void 0===t&&(t={}),R(e,void 0,void 0,(function(){var e,n,r,c,f,p,b;return A(this,(function(d){switch(d.label){case 0:if(!u||!o)return[2,!1];if(g.current)return[2,!1];t=Object.assign({dedupe:!1},t),e=!0,n=void 0!==M[u]&&t.dedupe,d.label=1;case 1:return d.trys.push([1,6,,7]),O({isValidating:!0}),_.set(s,!0),n||H(u,h.current.data,h.current.error,!0),r=void 0,c=void 0,n?(c=B[u],[4,M[u]]):[3,3];case 2:return r=d.sent(),[3,5];case 3:return i.loadingTimeout&&!_.get(u)&&setTimeout((function(){e&&S.current.emit("onLoadingSlow",u,i)}),i.loadingTimeout),M[u]=null!==a?o.apply(void 0,a):o(u),B[u]=c=z(),[4,M[u]];case 4:r=d.sent(),setTimeout((function(){delete M[u],delete B[u]}),i.dedupingInterval),S.current.emit("onSuccess",r,u,i),d.label=5;case 5:return B[u]>c||Q[u]&&(c<=Q[u]||c<=K[u]||0===K[u])?(O({isValidating:!1}),[2,!1]):(_.set(u,r),_.set(l,void 0),_.set(s,!1),f={isValidating:!1},void 0!==h.current.error&&(f.error=void 0),i.compare(h.current.data,r)||(f.data=r),O(f),n||H(u,r,f.error,!1),[3,7]);case 6:return p=d.sent(),delete M[u],delete B[u],_.set(l,p),h.current.error!==p&&(O({isValidating:!1,error:p}),n||H(u,void 0,p,!1)),S.current.emit("onError",p,u,i),i.shouldRetryOnError&&(b=(t.retryCount||0)+1,S.current.emit("onErrorRetry",p,u,i,D,Object.assign({dedupe:!0},t,{retryCount:b}))),[3,7];case 7:return e=!1,[2,!0]}}))}))}),[u]);V((function(){if(u){g.current=!1,w.current=!0;var e=h.current.data,t=p();j.current!==u&&(j.current=u),i.compare(e,t)||O({data:t});var n=function(){return D({dedupe:!0})};(i.revalidateOnMount||!i.initialData&&void 0===i.revalidateOnMount)&&(void 0!==t?L(n):n());var r=!1,o=function(){!r&&f.current.revalidateOnFocus&&(r=!0,n(),setTimeout((function(){return r=!1}),f.current.focusThrottleInterval))},c=function(){f.current.revalidateOnReconnect&&n()},a=function(e,t,r,o,c){void 0===e&&(e=!0),void 0===c&&(c=!0);var u={},a=!1;return void 0===t||i.compare(h.current.data,t)||(u.data=t,a=!0),h.current.error!==r&&(u.error=r,a=!0),void 0!==o&&h.current.isValidating!==o&&(u.isValidating=o,a=!0),a&&O(u),!!e&&(c?n():D())};return x(q,o),x(F,c),x(U,a),function(){O=function(){return null},g.current=!0,C(q,o),C(F,c),C(U,a)}}}),[u,D]),V((function(){var t=null,n=function(){return R(e,void 0,void 0,(function(){return A(this,(function(e){switch(e.label){case 0:return h.current.error||!f.current.refreshWhenHidden&&!f.current.isDocumentVisible()||!f.current.refreshWhenOffline&&!f.current.isOnline()?[3,2]:[4,D({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return f.current.refreshInterval&&!h.current.error&&(t=setTimeout(n,f.current.refreshInterval)),[2]}}))}))};return f.current.refreshInterval&&(t=setTimeout(n,f.current.refreshInterval)),function(){t&&clearTimeout(t)}}),[i.refreshInterval,i.refreshWhenHidden,i.refreshWhenOffline,D]);var I=Object(E.useMemo)((function(){var e={revalidate:D,mutate:k};return Object.defineProperties(e,{error:{get:function(){return y.current.error=!0,j.current===u?h.current.error:d},enumerable:!0},data:{get:function(){return y.current.data=!0,j.current===u?h.current.data:b},enumerable:!0},isValidating:{get:function(){return y.current.isValidating=!0,h.current.isValidating},enumerable:!0}}),e}),[D]);if(i.suspense){var N=_.get(u),W=_.get(l);if(void 0===N&&(N=b),void 0===W&&(W=d),void 0===N&&void 0===W){if(M[u]||D(),M[u]&&"function"==typeof M[u].then)throw M[u];N=M[u]}if(void 0===N&&W)throw W;return{error:W,data:N,revalidate:D,mutate:k,isValidating:h.current.isValidating}}return I};var G=$,Y=n(12),Z=function(){return Object(E.useContext)(Object(Y.getBlockContext)())};function ee(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return te(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var oe={},ie=function(){var e=O()(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=oe[t],o()(n)!==o()({})||"undefined"===o()(n.content)){e.next=3;break}return e.abrupt("return",n);case 3:return e.next=5,j()({path:"/wp/v2/posts/"+t});case 5:return r=e.sent,o()(r)===o()({})&&r.id&&(r.post_title=r.title.rendered,r.ID=r.id,oe[t]=re(re(re({},oe[t]||{}),r),{},{ID:r.id,post_title:r.title.rendered})),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce={},ue=function(e,t,n,r){var i,u,a,s,f,p,b=Z(),d=b.blockId,v=b.dirtyState,y=function(e,t,n,r){return{s:e,post_type:t.join(","),post_status:n.join(","),block_instance:r}}((i=e,u=600,a=Object(l.useState)(i),s=c()(a,2),f=s[0],p=s[1],Object(l.useEffect)((function(){var e=setTimeout((function(){p(i)}),u);return function(){clearTimeout(e)}}),[i,u]),f),t,n,re({},r?{blockId:d,content:v}:{blockId:d})),m=JSON.stringify(y),g=G(m,function(e){return O()(h.a.mark((function t(){var n,r,i,c,u,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e.length){t.next=2;break}return t.abrupt("return",[]);case 2:if(n="/blockx/v1/query",r=JSON.stringify(e),o()(ce[r])!==o()([])){t.next=6;break}return t.abrupt("return",ce[r]);case 6:return t.next=8,j()({method:"POST",path:n,data:e});case 8:i=t.sent,ce[r]=i,c=ee(i);try{for(c.s();!(u=c.n()).done;)a=u.value,oe[a.ID]=a}catch(e){c.e(e)}finally{c.f()}return t.abrupt("return",i);case 13:case"end":return t.stop()}}),t)})))}(y)),E=g.data;return{posts:E||[],isLoading:!g.error&&!E}},ae=(n(22),function(e){var t=e.ID,n=e.post_title,r=e.onClick;return Object(l.createElement)("div",{className:"blockx-post",onClick:r},n,Object(l.createElement)("br",null),Object(l.createElement)("i",{className:"description"},"ID: ",t))}),le=function(e){var t=e.label,n=e.post_types,r=e.post_status,o=e.use_context,i=e.onFound,u=Object(l.useState)(""),a=c()(u,2),s=a[0],f=a[1],b=Object(l.useState)(!1),d=c()(b,2),y=d[0],h=d[1],m=ue(s,n,r,o),O=m.posts,g=m.isLoading;return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];Object(l.useEffect)((function(){if(n){var t=function(t){"Escape"===t.key&&e()};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}}),t)}((function(){h(!1)}),[y],y),Object(l.createElement)(p.BaseControl,{className:"blockx--search-post"},Object(l.createElement)("div",{className:"blockx--search-posts__input-wrapper"},Object(l.createElement)(p.TextControl,{label:t,value:s,onChange:function(e){h(!0),f(e)},onFocus:function(){return h(!0)}}),g&&Object(l.createElement)("span",{className:"blockx--search-post__spinner-wrapper"},Object(l.createElement)(p.Spinner,null))),y?Object(l.createElement)(p.Popover,{focusOnMount:!1,position:"bottom center"},O.length>0?O.map((function(e){return Object(l.createElement)(ae,v()({key:e.ID},e,{onClick:function(){return i(e.ID)}}))})):Object(l.createElement)("p",{className:"blockx--search-post__no-results"},"No posts found.")):null)},se=function(e){var t,n,r=e.label,o=e.post_id,i=e.onUnlock,c=(t=G(o,ie),{post:(n=t.data)||{},isLoading:!t.error&&!n}).post.post_title,u=void 0===c?o:c;return Object(l.createElement)(p.BaseControl,{className:"blockx--locked-post"},Object(l.createElement)(p.TextControl,{label:r,value:u,readOnly:!0}),Object(l.createElement)("span",{className:"blockx--locked-post__icon",onClick:i},Object(l.createElement)(p.Icon,{icon:"no"})))},fe=function(e){var t=e.definition,n=e.value,r=e.onChange,o=e.instance;return n?Object(l.createElement)(se,{label:t.label,post_id:n,onUnlock:function(){return r("")}}):Object(l.createElement)(le,{label:t.label,post_types:t.post_types,post_status:t.post_status,use_context:t.use_context,instance:o,onFound:r})},pe=function(e){var t=e.definition,n=e.value,r=e.onChange,o=t.label,i=t.options;return Object(l.createElement)(p.SelectControl,{label:o,value:n,onChange:r,options:i})},be=n(10),de=n.n(be),ve=n(7),ye=function(e,t){return{value:e,label:t}},he=function(e){return o()(e)===o()("")?BlockX.i18n[e]:BlockX.i18n},me=function(){return he("widget_tax_query")},Oe=function(e){return Object(ve.useSelect)((function(t){return t("core").getEntityRecords("taxonomy",e,{per_page:-1})||[]}),[e])};function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ee=function(e,t){return function(e,t){return t.find((function(t){return t.id===e}))}(e,t)||function(e,t){return t.find((function(t){return t.slug===e}))}(e,t)||function(e,t){return t.find((function(t){return t.name===e}))}(e,t)},we=function(e){var t=e.taxonomies,n=e.value,r=e.onChange,i=n.taxonomy,c=void 0===i?t[0]:i,u=n.termIds,a=void 0===u?[]:u,s=n.operator,f=void 0===s?"OR":s,b=me(),d=b.label_taxonomy,v=b.label_add_terms,y=b.label_operator,h=Oe(c);Object(l.useEffect)((function(){t.map((function(e){return e.value})).includes(c)||r(je(je({},n),{},{taxonomy:t[0].value}))}),[c,t]);return Object(l.createElement)(l.Fragment,null,Object(l.createElement)("div",null,Object(l.createElement)(p.SelectControl,{label:d,options:t,value:c,onChange:function(e){return r(je(je({},n),{},{taxonomy:e}))}})),Object(l.createElement)("div",null,Object(l.createElement)(p.FormTokenField,{label:v,value:a.map((function(e){var t=Ee(e,h);return t?t.name:e})),suggestions:h.map((function(e){return e.name})),onChange:function(e){var t=e.map((function(e){var t=o()(e)===o()("")?e:e.value,n=Ee(t,h);return n?n.id:t}));r(je(je({},n),{},{termIds:t}))}})),Object(l.createElement)("div",null,Object(l.createElement)(p.SelectControl,{label:y,value:f,options:["IN","NOT IN","AND"].map((function(e){return ye(e,e)})),onChange:function(e){r(je(je({},n),{},{operator:e}))}})))},Se=function(e){var t=e.children;return Object(l.createElement)("div",{style:{background:"rgba(0, 0, 0, 0.02)",padding:8,border:"1px solid rgba(0, 0, 0, 0.1)",borderRadius:4,marginBottom:5,marginLeft:-10,marginRight:-10}},t)},ke=function(e){var t=e.taxonomies,n=e.value,r=e.onChange,o=me(),i=o.toggle_AND_description,c=o.toggle_OR_description,u=o.btn_add_taxonomy,a=o.btn_delete_taxonomy,s=n.taxonomies,f=void 0===s?[]:s,b=n.relation,d=void 0===b?"OR":b,v=function(e){return r(e.taxonomies.length>=1?e:void 0)};return Object(l.createElement)("div",null,Object(l.createElement)("div",null,f.map((function(e,r){return Object(l.createElement)(Se,{key:r},Object(l.createElement)(we,{taxonomies:t,value:e,onChange:function(e){v(je(je({},n),{},{taxonomies:f.map((function(t,n){return r===n?e:t}))}))}}),Object(l.createElement)(p.Button,{isDestructive:!0,isSmall:!0,onClick:function(){v(je(je({},n),{},{taxonomies:f.map((function(e,t){return t===r?null:e})).filter((function(e){return null!=e}))}))}},a))})),f.length>1?Object(l.createElement)("div",{style:{marginTop:10}},Object(l.createElement)(p.ToggleControl,{label:d,help:"AND"===d?i:c,checked:"AND"===d,onChange:function(e){v(je(je({},n),{},{relation:e?"AND":"OR"}))}})):null),Object(l.createElement)(p.Button,{isSecondary:!0,isSmall:!0,onClick:function(){v({relation:d,taxonomies:[].concat(de()(f),[{}])})},style:{width:"100%",textAlign:"center",display:"inline-block"}},u))},xe=function(e,t){return o()(e)===o()({})?t?e.on:e.off:o()(e)===o()("")?e:null},_e={text:function(e){var t=e.definition,n=e.value,r=e.onChange;return Object(l.createElement)(p.TextControl,{label:t.label,value:n,onChange:r})},number:b,toggle:function(e){var t=e.definition,n=e.value,r=e.onChange,o=t.label,i=t.help;return Object(l.createElement)(p.ToggleControl,{label:xe(o,n),help:xe(i,n),checked:n,onChange:r})},select:pe,taxonomy_term:function(e){var t=e.definition,n=e.value,r=e.onChange,o=t.label,i=function(e){var t=Oe(e),n=he().term_select_any;return[ye("",n)].concat(de()(t.map((function(e){var t=e.name,n=e.id;return ye(n,t)}))))}(t.taxonomy);return Object(l.createElement)(p.SelectControl,{label:o,value:n,onChange:r,options:i})},tax_query:function(e){var t=e.definition,n=e.value,r=e.onChange;return Object(l.createElement)(p.BaseControl,{label:t.label},Object(l.createElement)(ke,{taxonomies:t.taxonomies,value:n,onChange:r}))},post:fe},Ce=function(e){var t=e.items,n=e.value,r=e.onChange;return t.map((function(e){if("undefined"!==o()(_e[e.type])){var t=_e[e.type],i="undefined"!==o()(n[e.key])?n[e.key]:e.defaultValue;return Object(l.createElement)(t,{key:e.key,definition:e,value:i,onChange:function(t){return r(e.key,t)}})}return Object(l.createElement)("p",{key:e.key},"Type ",Object(l.createElement)("b",null,e.type)," not implemented")}))};function Pe(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return De(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return De(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}}function De(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ie(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Re=function(e){var t,n=e.definition,r=e.content,o=e.setContent,i=he().btn_apply_changes,c=Z(),u=c.localChanges,a=c.changeLocalState,s=[],f={label:void 0,opened:void 0,contentStructure:[]},b=Pe(n);try{for(b.s();!(t=b.n()).done;){var d=t.value;"panel"!==d.type?f.contentStructure.push(d):(s.push(Te({},f)),s.push({label:d.label,opened:d.opened,contentStructure:d.contentStructure}),f.contentStructure=[])}}catch(e){b.e(e)}finally{b.f()}return f.contentStructure.length>0&&s.push(f),Object(l.createElement)(l.Fragment,null,s.map((function(e,t){return Object(l.createElement)(p.PanelBody,{key:t,title:e.label,initialOpen:e.opened},Object(l.createElement)(Ce,{items:e.contentStructure,value:Te(Te({},r),u),onChange:function(e,t){a(e,t)}}))})),Object(l.createElement)(p.PanelBody,null,Object(l.createElement)(p.Button,{isSecondary:!0,disabled:0===Object.keys(u).length,onClick:function(){o(Te(Te({},r),u))}},i)))};function Ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ae(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Le=n(12).getBlockContext,Ve=function(e){var t=e.blockId,n=e.contentStructure,r=e.defaultValues,o=e.content,i=e.changeLocalState,c=e.localChanges,u=e.children,a=Le();return Object(l.createElement)(a.Provider,{value:{blockId:t,contentStructure:n,defaultValues:r,content:o,changeLocalState:i,localChanges:c,dirtyState:Ne(Ne({},o),c)}},u)},Me=n(9),Be=n(11),qe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(ve.useSelect)((function(t){return e(t(Be.STORE_NAME))}),t)},Fe=function(e,t){var n=qe((function(n){return n.getBlock(e,t)}),[e,t]),r=Object(ve.useDispatch)(Be.STORE_NAME);return Object(l.useEffect)((function(){r.addToQueue(e,t)}),[e,t]),n},Ue=(n(26),function(e){var t=e.isLoading,n=e.children;return Object(l.createElement)("div",{className:"blockx--ssr__wrapper"},n,t&&Object(l.createElement)("span",{className:"loader"},Object(l.createElement)(p.Spinner,null)))}),Qe=function(e){var t,n,r=e.block,i=e.content,c=Fe(r,i),u=qe((function(e){return e.isRequesting(t,n)}),[t=r,n=i]),a=function(e,t){return qe((function(n){return n.isInQueue(e,t)}),[e,t])}(r,i),s=u||a;if(!1===c)return console.error("Error whith ssr reponse of block: "+r,i,c),Object(l.createElement)(Ue,{isLoading:s},";",Object(l.createElement)(p.Placeholder,null,Object(Me.sprintf)(Object(Me.__)("Error loading block: %s"),r)));if("undefined"===o()(c)){var f=Object(Me.__)("Block rendered as empty.");return Object(l.createElement)(Ue,{isLoading:s},Object(l.createElement)(p.Placeholder,null,s?Object(Me.__)("Loading"):f))}return Object(l.createElement)(Ue,{isLoading:s},Object(l.createElement)(l.RawHTML,{key:"html"},c))};function Ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ze(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ke(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ke(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function We(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return Je(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Je(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}}function Je(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var He,Xe=window.BlockXComponents||{},$e=We(BlockX.blocks);try{var Ge=function(){var e,t=He.value,n=t.id,r=t.title,i=t.category,u=t.registerBlockTypeArgs,p=t.contentStructure,b={},d=We(p);try{for(d.s();!(e=d.n()).done;){var v=e.value,y=v.defaultValue,h=v.key,m=v.options;"undefined"!==o()(y)?b[h]=y:o()(m)===o()([])&&m.length>0&&o()(m[0].value)===o()("")&&(b[h]=m[0].value)}}catch(e){d.e(e)}finally{d.f()}Object(s.registerBlockType)(n,ze(ze({},u),{},{title:r,category:i,attributes:{content:{type:"object",default:b}},edit:function(e){e.isSelected;var t=e.className,r=e.setAttributes,o=e.attributes,i=Object(l.useState)({}),u=c()(i,2),s=u[0],d=u[1],v=function(e,t){return d((function(n){return ze(ze({},s),{},a()({},e,t))}))},y=Xe[n]||Qe;return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(f.InspectorControls,null,Object(l.createElement)(Ve,{blockId:n,contentStructure:p,defaultValues:b,content:o.content,changeLocalState:v,localChanges:s},Object(l.createElement)(Re,{definition:p,content:o.content,setContent:function(e){r({content:e}),d({})}}))),Object(l.createElement)("div",{className:t},Object(l.createElement)(Ve,{blockId:n,contentStructure:p,defaultValues:b,content:o.content,changeLocalState:v,localChanges:s},Object(l.createElement)(y,{block:n,attributes:o,content:o.content}))))}}))};for($e.s();!(He=$e.n()).done;)Ge()}catch(e){$e.e(e)}finally{$e.f()}n(27)}]);