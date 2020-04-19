/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-emoji-flash-fullscreen-geolocation-todataurljpeg_todataurlpng_todataurlwebp-setclasses !*/
!function(e,n,t){function a(e,n){return typeof e===n}function o(){var e,n,t,o,r,i,s;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=a(n.fn,"function")?n.fn():n.fn,r=0;r<e.length;r++)i=e[r],s=i.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),x.push((o?"":"no-")+s.join("-"))}}function r(e){var n=T.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(a,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?T.className.baseVal=n:T.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function l(e,n){return!!~(""+e).indexOf(n)}function u(e,n){return function(){return e.apply(n,arguments)}}function c(e,n,t){var o;for(var r in e)if(e[r]in n)return t===!1?e[r]:(o=n[e[r]],a(o,"function")?u(o,t||n):o);return!1}function f(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(n,t,a){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var r=e.console;if(null!==o)a&&(o=o.getPropertyValue(a));else if(r){var i=r.error?"error":"log";r[i].call(r,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[a];return o}function p(){var e=n.body;return e||(e=i(_?"svg":"body"),e.fake=!0),e}function v(e,t,a,o){var r,s,l,u,c="modernizr",f=i("div"),d=p();if(parseInt(a,10))for(;a--;)l=i("div"),l.id=o?o[a]:c+(a+1),f.appendChild(l);return r=i("style"),r.type="text/css",r.id="s"+c,(d.fake?d:f).appendChild(r),d.appendChild(f),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(n.createTextNode(e)),f.id=c,d.fake&&(d.style.background="",d.style.overflow="hidden",u=T.style.overflow,T.style.overflow="hidden",T.appendChild(d)),s=t(f,e),d.fake?(d.parentNode.removeChild(d),T.style.overflow=u,T.offsetHeight):f.parentNode.removeChild(f),!!s}function g(n,a){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(f(n[o]),a))return!0;return!1}if("CSSSupportsRule"in e){for(var r=[];o--;)r.push("("+f(n[o])+":"+a+")");return r=r.join(" or "),v("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return t}function y(e,n,o,r){function u(){f&&(delete O.style,delete O.modElem)}if(r=a(r,"undefined")?!1:r,!a(o,"undefined")){var c=g(e,o);if(!a(c,"undefined"))return c}for(var f,d,p,v,y,m=["modernizr","tspan","samp"];!O.style&&m.length;)f=!0,O.modElem=i(m.shift()),O.style=O.modElem.style;for(p=e.length,d=0;p>d;d++)if(v=e[d],y=O.style[v],l(v,"-")&&(v=s(v)),O.style[v]!==t){if(r||a(o,"undefined"))return u(),"pfx"==n?v:!0;try{O.style[v]=o}catch(h){}if(O.style[v]!=y)return u(),"pfx"==n?v:!0}return u(),!1}function m(e,n,t,o,r){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+P.join(i+" ")+i).split(" ");return a(n,"string")||a(n,"undefined")?y(s,n,o,r):(s=(e+" "+j.join(i+" ")+i).split(" "),c(s,n,t))}function h(e,n){if("object"==typeof e)for(var t in e)L(e,t)&&h(t,e[t]);else{e=e.toLowerCase();var a=e.split("."),o=Modernizr[a[0]];if(2==a.length&&(o=o[a[1]]),"undefined"!=typeof o)return Modernizr;n="function"==typeof n?n():n,1==a.length?Modernizr[a[0]]=n:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=n),r([(n&&0!=n?"":"no-")+a.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var x=[],C=[],w={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr,Modernizr.addTest("geolocation","geolocation"in navigator);var T=n.documentElement,_="svg"===T.nodeName.toLowerCase();Modernizr.addTest("audio",function(){var e=i("audio"),n=!1;try{n=!!e.canPlayType,n&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),n.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(t){}return n}),Modernizr.addTest("canvas",function(){var e=i("canvas");return!(!e.getContext||!e.getContext("2d"))});var b=i("canvas");Modernizr.addTest("todataurljpeg",function(){return!!Modernizr.canvas&&0===b.toDataURL("image/jpeg").indexOf("data:image/jpeg")}),Modernizr.addTest("todataurlpng",function(){return!!Modernizr.canvas&&0===b.toDataURL("image/png").indexOf("data:image/png")}),Modernizr.addTest("todataurlwebp",function(){var e=!1;try{e=!!Modernizr.canvas&&0===b.toDataURL("image/webp").indexOf("data:image/webp")}catch(n){}return e}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof i("canvas").getContext("2d").fillText}),Modernizr.addTest("emoji",function(){if(!Modernizr.canvastext)return!1;var n=e.devicePixelRatio||1,t=12*n,a=i("canvas"),o=a.getContext("2d");return o.fillStyle="#f00",o.textBaseline="top",o.font="32px Arial",o.fillText("🐨",0,0),0!==o.getImageData(t,t,1,1).data[0]});var S="Moz O ms Webkit",P=w._config.usePrefixes?S.split(" "):[];w._cssomPrefixes=P;var k=function(n){var a,o=prefixes.length,r=e.CSSRule;if("undefined"==typeof r)return t;if(!n)return!1;if(n=n.replace(/^@/,""),a=n.replace(/-/g,"_").toUpperCase()+"_RULE",a in r)return"@"+n;for(var i=0;o>i;i++){var s=prefixes[i],l=s.toUpperCase()+"_"+a;if(l in r)return"@-"+s.toLowerCase()+"-"+n}return!1};w.atRule=k;var j=w._config.usePrefixes?S.toLowerCase().split(" "):[];w._domPrefixes=j;var N={elem:i("modernizr")};Modernizr._q.push(function(){delete N.elem});var O={style:N.elem.style};Modernizr._q.unshift(function(){delete O.style}),w.testAllProps=m;var E=w.prefixed=function(e,n,t){return 0===e.indexOf("@")?k(e):(-1!=e.indexOf("-")&&(e=s(e)),n?m(e,n,t):m(e,"pfx"))};Modernizr.addTest("fullscreen",!(!E("exitFullscreen",n,!1)&&!E("cancelFullScreen",n,!1)));var L;!function(){var e={}.hasOwnProperty;L=a(e,"undefined")||a(e.call,"undefined")?function(e,n){return n in e&&a(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),w._l={},w.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},w._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,a;for(e=0;e<t.length;e++)(a=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){w.addTest=h}),Modernizr.addAsyncTest(function(){var t,a,o=function(e){T.contains(e)||T.appendChild(e)},r=function(e){e.fake&&e.parentNode&&e.parentNode.removeChild(e)},s=function(e,n){var t=!!e;if(t&&(t=new Boolean(t),t.blocked="blocked"===e),h("flash",function(){return t}),n&&d.contains(n)){for(;n.parentNode!==d;)n=n.parentNode;d.removeChild(n)}};try{a="ActiveXObject"in e&&"Pan"in new e.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(l){}if(t=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||a),t||_)s(!1);else{var u,c,f=i("embed"),d=p();if(f.type="application/x-shockwave-flash",d.appendChild(f),!("Pan"in f||a))return o(d),s("blocked",f),void r(d);u=function(){return o(d),T.contains(d)?(T.contains(f)?(c=f.style.cssText,""!==c?s("blocked",f):s(!0,f)):s("blocked"),void r(d)):(d=n.body||d,f=i("embed"),f.type="application/x-shockwave-flash",d.appendChild(f),setTimeout(u,1e3))},setTimeout(u,10)}}),o(),r(x),delete w.addTest,delete w.addAsyncTest;for(var z=0;z<Modernizr._q.length;z++)Modernizr._q[z]();e.Modernizr=Modernizr}(window,document);