!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var o,r,a,u,l,f,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function S(e){return c=e,l=setTimeout(O,t),s?b(e):u}function h(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=a}function O(){var e=p();if(h(e))return w(e);l=setTimeout(O,function(e){var n=t-(e-f);return d?g(n,a-(e-c)):n}(e))}function w(e){return l=void 0,v&&o?b(e):(o=r=void 0,u)}function T(){var e=p(),n=h(e);if(o=arguments,r=this,f=e,n){if(void 0===l)return S(f);if(d)return l=setTimeout(O,t),b(f)}return void 0===l&&(l=setTimeout(O,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=r=l=void 0},T.flush=function(){return void 0===l?u:w(p())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||l.test(t)?f(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};var S,h,O=document.querySelector(".feedback-form"),w="feedback-form-state",T=e(t)((function(){var e={email:O.el.email.value,message:O.el.message.value};localStorage.setItem(w,JSON.stringify(e))}),500);O.addEventListener("input",(function(){T()})),O.el.email.value=null!==(S=localStorage.getItem(w))&&void 0!==S?S:"",O.el.message.value=null!==(h=localStorage.getItem(w))&&void 0!==h?h:"",O.addEventListener("submit",(function(e){e.preventDefault();var t=localStorage.getItem(w);if(t)try{var n=JSON.parse(t),o=n.email,i=n.message;console.log("Feedback submitted:"),console.log("Email:",o),console.log("Message:",i)}catch(e){console.error("Error parsing stored data:",e)}localStorage.removeItem(w),O.reset()}))}();
//# sourceMappingURL=03-feedback.9d39f8ba.js.map
