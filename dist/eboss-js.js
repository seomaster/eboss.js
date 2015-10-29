/*!
 * accounting.js v0.3.2, copyright 2011 Joss Crowcroft, MIT license, http://josscrowcroft.github.com/accounting.js
 */
(function(p,z){function q(a){return!!(""===a||a&&a.charCodeAt&&a.substr)}function m(a){return u?u(a):"[object Array]"===v.call(a)}function r(a){return"[object Object]"===v.call(a)}function s(a,b){var d,a=a||{},b=b||{};for(d in b)b.hasOwnProperty(d)&&null==a[d]&&(a[d]=b[d]);return a}function j(a,b,d){var c=[],e,h;if(!a)return c;if(w&&a.map===w)return a.map(b,d);for(e=0,h=a.length;e<h;e++)c[e]=b.call(d,a[e],e,a);return c}function n(a,b){a=Math.round(Math.abs(a));return isNaN(a)?b:a}function x(a){var b=c.settings.currency.format;"function"===typeof a&&(a=a());return q(a)&&a.match("%v")?{pos:a,neg:a.replace("-","").replace("%v","-%v"),zero:a}:!a||!a.pos||!a.pos.match("%v")?!q(b)?b:c.settings.currency.format={pos:b,neg:b.replace("%v","-%v"),zero:b}:a}var c={version:"0.3.2",settings:{currency:{symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0,grouping:3,thousand:",",decimal:"."}}},w=Array.prototype.map,u=Array.isArray,v=Object.prototype.toString,o=c.unformat=c.parse=function(a,b){if(m(a))return j(a,function(a){return o(a,b)});a=a||0;if("number"===typeof a)return a;var b=b||".",c=RegExp("[^0-9-"+b+"]",["g"]),c=parseFloat((""+a).replace(/\((.*)\)/,"-$1").replace(c,"").replace(b,"."));return!isNaN(c)?c:0},y=c.toFixed=function(a,b){var b=n(b,c.settings.number.precision),d=Math.pow(10,b);return(Math.round(c.unformat(a)*d)/d).toFixed(b)},t=c.formatNumber=function(a,b,d,i){if(m(a))return j(a,function(a){return t(a,b,d,i)});var a=o(a),e=s(r(b)?b:{precision:b,thousand:d,decimal:i},c.settings.number),h=n(e.precision),f=0>a?"-":"",g=parseInt(y(Math.abs(a||0),h),10)+"",l=3<g.length?g.length%3:0;return f+(l?g.substr(0,l)+e.thousand:"")+g.substr(l).replace(/(\d{3})(?=\d)/g,"$1"+e.thousand)+(h?e.decimal+y(Math.abs(a),h).split(".")[1]:"")},A=c.formatMoney=function(a,b,d,i,e,h){if(m(a))return j(a,function(a){return A(a,b,d,i,e,h)});var a=o(a),f=s(r(b)?b:{symbol:b,precision:d,thousand:i,decimal:e,format:h},c.settings.currency),g=x(f.format);return(0<a?g.pos:0>a?g.neg:g.zero).replace("%s",f.symbol).replace("%v",t(Math.abs(a),n(f.precision),f.thousand,f.decimal))};c.formatColumn=function(a,b,d,i,e,h){if(!a)return[];var f=s(r(b)?b:{symbol:b,precision:d,thousand:i,decimal:e,format:h},c.settings.currency),g=x(f.format),l=g.pos.indexOf("%s")<g.pos.indexOf("%v")?!0:!1,k=0,a=j(a,function(a){if(m(a))return c.formatColumn(a,f);a=o(a);a=(0<a?g.pos:0>a?g.neg:g.zero).replace("%s",f.symbol).replace("%v",t(Math.abs(a),n(f.precision),f.thousand,f.decimal));if(a.length>k)k=a.length;return a});return j(a,function(a){return q(a)&&a.length<k?l?a.replace(f.symbol,f.symbol+Array(k-a.length+1).join(" ")):Array(k-a.length+1).join(" ")+a:a})};if("undefined"!==typeof exports){if("undefined"!==typeof module&&module.exports)exports=module.exports=c;exports.accounting=c}else"function"===typeof define&&define.amd?define([],function(){return c}):(c.noConflict=function(a){return function(){p.accounting=a;c.noConflict=z;return c}}(p.accounting),p.accounting=c)})(this);
// i18next, v1.10.3
// Copyright (c)2015 Jan Mühlemann (jamuhl).
// Distributed under MIT license
// http://i18next.com
!function(a){function b(a,b){if(!b||"function"==typeof b)return a;for(var c in b)a[c]=b[c];return a}function c(a,b){for(var d in b)d in a?c(a[d],b[d]):a[d]=b[d];return a}function d(a,b,c){var d,e=0,f=a.length,g=void 0===f||"[object Array]"!==Object.prototype.toString.apply(a)||"function"==typeof a;if(c)if(g){for(d in a)if(b.apply(a[d],c)===!1)break}else for(;f>e&&b.apply(a[e++],c)!==!1;);else if(g){for(d in a)if(b.call(a[d],d,a[d])===!1)break}else for(;f>e&&b.call(a[e],e,a[e++])!==!1;);return a}function e(a){return"string"==typeof a?a.replace(/[&<>"'\/]/g,function(a){return U[a]}):a}function f(a){var b=function(a){if(window.XMLHttpRequest)return a(null,new XMLHttpRequest);if(window.ActiveXObject)try{return a(null,new ActiveXObject("Msxml2.XMLHTTP"))}catch(b){return a(null,new ActiveXObject("Microsoft.XMLHTTP"))}return a(new Error)},c=function(a){if("string"==typeof a)return a;var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.join("&")},d=function(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b},e=function(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a=d(a);var c,e,f,g,h,i,j,k="",l=0;do c=a.charCodeAt(l++),e=a.charCodeAt(l++),f=a.charCodeAt(l++),g=c>>2,h=(3&c)<<4|e>>4,i=(15&e)<<2|f>>6,j=63&f,isNaN(e)?i=j=64:isNaN(f)&&(j=64),k+=b.charAt(g)+b.charAt(h)+b.charAt(i)+b.charAt(j),c=e=f="",g=h=i=j="";while(l<a.length);return k},f=function(){for(var a=arguments[0],b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d])}return a},g=function(a,d,e,h){"function"==typeof e&&(h=e,e={}),e.cache=e.cache||!1,e.data=e.data||{},e.headers=e.headers||{},e.jsonp=e.jsonp||!1,e.async=void 0===e.async?!0:e.async;var i,j=f({accept:"*/*","content-type":"application/x-www-form-urlencoded;charset=UTF-8"},g.headers,e.headers);if(i="application/json"===j["content-type"]?JSON.stringify(e.data):c(e.data),"GET"===a){var k=[];if(i&&(k.push(i),i=null),e.cache||k.push("_="+(new Date).getTime()),e.jsonp&&(k.push("callback="+e.jsonp),k.push("jsonp="+e.jsonp)),k=k.join("&"),k.length>1&&(d+=d.indexOf("?")>-1?"&"+k:"?"+k),e.jsonp){var l=document.getElementsByTagName("head")[0],m=document.createElement("script");return m.type="text/javascript",m.src=d,void l.appendChild(m)}}b(function(b,c){if(b)return h(b);c.open(a,d,e.async);for(var f in j)j.hasOwnProperty(f)&&c.setRequestHeader(f,j[f]);c.onreadystatechange=function(){if(4===c.readyState){var a=c.responseText||"";if(!h)return;h(c.status,{text:function(){return a},json:function(){try{return JSON.parse(a)}catch(b){return X.error("Can not parse JSON. URL: "+d),{}}}})}},c.send(i)})},h={authBasic:function(a,b){g.headers.Authorization="Basic "+e(a+":"+b)},connect:function(a,b,c){return g("CONNECT",a,b,c)},del:function(a,b,c){return g("DELETE",a,b,c)},get:function(a,b,c){return g("GET",a,b,c)},head:function(a,b,c){return g("HEAD",a,b,c)},headers:function(a){g.headers=a||{}},isAllowed:function(a,b,c){this.options(a,function(a,d){c(-1!==d.text().indexOf(b))})},options:function(a,b,c){return g("OPTIONS",a,b,c)},patch:function(a,b,c){return g("PATCH",a,b,c)},post:function(a,b,c){return g("POST",a,b,c)},put:function(a,b,c){return g("PUT",a,b,c)},trace:function(a,b,c){return g("TRACE",a,b,c)}},i=a.type?a.type.toLowerCase():"get";h[i](a.url,a,function(b,c){200===b||0===b&&c.text()?a.success(c.json(),b,null):a.error(c.text(),b,null)})}function g(a,b){"function"==typeof a&&(b=a,a={}),a=a||{},X.extend(T,a),delete T.fixLng,T.functions&&(delete T.functions,X.extend(X,a.functions)),"string"==typeof T.ns&&(T.ns={namespaces:[T.ns],defaultNs:T.ns}),"string"==typeof T.fallbackNS&&(T.fallbackNS=[T.fallbackNS]),("string"==typeof T.fallbackLng||"boolean"==typeof T.fallbackLng)&&(T.fallbackLng=[T.fallbackLng]),T.interpolationPrefixEscaped=X.regexEscape(T.interpolationPrefix),T.interpolationSuffixEscaped=X.regexEscape(T.interpolationSuffix),T.lng||(T.lng=X.detectLanguage()),P=X.toLanguages(T.lng),K=P[0],X.log("currentLng set to: "+K),T.useCookie&&X.cookie.read(T.cookieName)!==K&&X.cookie.create(T.cookieName,K,T.cookieExpirationTime,T.cookieDomain),T.detectLngFromLocalStorage&&"undefined"!=typeof document&&window.localStorage&&X.localStorage.setItem("i18next_lng",K);var c=E;a.fixLng&&(c=function(a,b){return b=b||{},b.lng=b.lng||c.lng,E(a,b)},c.lng=K),$.setCurrentLng(K),L&&T.setJqueryExt?w&&w():x&&x();var d;if(L&&L.Deferred&&(d=L.Deferred()),!T.resStore){var e=X.toLanguages(T.lng);"string"==typeof T.preload&&(T.preload=[T.preload]);for(var f=0,g=T.preload.length;g>f;f++)for(var h=X.toLanguages(T.preload[f]),i=0,j=h.length;j>i;i++)e.indexOf(h[i])<0&&e.push(h[i]);return M.sync.load(e,T,function(a,e){N=e,Q=!0,b&&b(a,c),d&&(a?d.reject:d.resolve)(a||c)}),d?d.promise():void 0}return N=T.resStore,Q=!0,b&&b(null,c),d&&d.resolve(c),d?d.promise():void 0}function h(){return Q}function i(a,b){"string"==typeof a&&(a=[a]);for(var c=0,d=a.length;d>c;c++)T.preload.indexOf(a[c])<0&&T.preload.push(a[c]);return g(b)}function j(a,b,c,d){"string"!=typeof b?(c=b,b=T.ns.defaultNs):T.ns.namespaces.indexOf(b)<0&&T.ns.namespaces.push(b),N[a]=N[a]||{},N[a][b]=N[a][b]||{},d?X.deepExtend(N[a][b],c):X.extend(N[a][b],c),T.useLocalStorage&&R._storeLocal(N)}function k(a,b){"string"!=typeof b&&(b=T.ns.defaultNs),N[a]=N[a]||{};var c=N[a][b]||{},d=!1;for(var e in c)c.hasOwnProperty(e)&&(d=!0);return d}function l(a,b){return"string"!=typeof b&&(b=T.ns.defaultNs),N[a]=N[a]||{},X.extend({},N[a][b])}function m(a,b){"string"!=typeof b&&(b=T.ns.defaultNs),N[a]=N[a]||{},N[a][b]={},T.useLocalStorage&&R._storeLocal(N)}function n(a,b,c,d){"string"!=typeof b?(resource=b,b=T.ns.defaultNs):T.ns.namespaces.indexOf(b)<0&&T.ns.namespaces.push(b),N[a]=N[a]||{},N[a][b]=N[a][b]||{};for(var e=c.split(T.keyseparator),f=0,g=N[a][b];e[f];)f==e.length-1?g[e[f]]=d:(null==g[e[f]]&&(g[e[f]]={}),g=g[e[f]]),f++;T.useLocalStorage&&R._storeLocal(N)}function o(a,b,c){"string"!=typeof b?(resource=b,b=T.ns.defaultNs):T.ns.namespaces.indexOf(b)<0&&T.ns.namespaces.push(b);for(var d in c)"string"==typeof c[d]&&n(a,b,d,c[d])}function p(a){T.ns.defaultNs=a}function q(a,b){r([a],b)}function r(a,b){var c={dynamicLoad:T.dynamicLoad,resGetPath:T.resGetPath,getAsync:T.getAsync,customLoad:T.customLoad,ns:{namespaces:a,defaultNs:""}},d=X.toLanguages(T.lng);"string"==typeof T.preload&&(T.preload=[T.preload]);for(var e=0,f=T.preload.length;f>e;e++)for(var g=X.toLanguages(T.preload[e]),h=0,i=g.length;i>h;h++)d.indexOf(g[h])<0&&d.push(g[h]);for(var j=[],k=0,l=d.length;l>k;k++){var m=!1,n=N[d[k]];if(n)for(var o=0,p=a.length;p>o;o++)n[a[o]]||(m=!0);else m=!0;m&&j.push(d[k])}j.length?M.sync._fetch(j,c,function(c,d){var e=a.length*j.length;X.each(a,function(a,c){T.ns.namespaces.indexOf(c)<0&&T.ns.namespaces.push(c),X.each(j,function(a,f){N[f]=N[f]||{},N[f][c]=d[f][c],e--,0===e&&b&&(T.useLocalStorage&&M.sync._storeLocal(N),b())})})}):b&&b()}function s(a,b,c){return"function"==typeof b?(c=b,b={}):b||(b={}),b.lng=a,g(b,c)}function t(){return K}function u(a){N={},s(K,a)}function v(){window.i18next=window.i18n,S?window.i18n=S:delete window.i18n}function w(){function a(a,b,c){if(0!==b.length){var d="text";if(0===b.indexOf("[")){var e=b.split("]");b=e[1],d=e[0].substr(1,e[0].length-1)}b.indexOf(";")===b.length-1&&(b=b.substr(0,b.length-2));var f;if("html"===d)f=T.defaultValueFromContent?L.extend({defaultValue:a.html()},c):c,a.html(L.t(b,f));else if("text"===d)f=T.defaultValueFromContent?L.extend({defaultValue:a.text()},c):c,a.text(L.t(b,f));else if("prepend"===d)f=T.defaultValueFromContent?L.extend({defaultValue:a.html()},c):c,a.prepend(L.t(b,f));else if("append"===d)f=T.defaultValueFromContent?L.extend({defaultValue:a.html()},c):c,a.append(L.t(b,f));else if(0===d.indexOf("data-")){var g=d.substr("data-".length);f=T.defaultValueFromContent?L.extend({defaultValue:a.data(g)},c):c;var h=L.t(b,f);a.data(g,h),a.attr(d,h)}else f=T.defaultValueFromContent?L.extend({defaultValue:a.attr(d)},c):c,a.attr(d,L.t(b,f))}}function b(b,c){var d=b.attr(T.selectorAttr);if(d||"undefined"==typeof d||d===!1||(d=b.text()||b.val()),d){var e=b,f=b.data("i18n-target");if(f&&(e=b.find(f)||b),c||T.useDataAttrOptions!==!0||(c=b.data("i18n-options")),c=c||{},d.indexOf(";")>=0){var g=d.split(";");L.each(g,function(b,d){""!==d&&a(e,d,c)})}else a(e,d,c);if(T.useDataAttrOptions===!0){var h=L.extend({lng:"non",lngs:[],_origLng:"non"},c);delete h.lng,delete h.lngs,delete h._origLng,b.data("i18n-options",h)}}}L.t=L.t||E,L.fn.i18n=function(a){return this.each(function(){b(L(this),a);var c=L(this).find("["+T.selectorAttr+"]");c.each(function(){b(L(this),a)})})}}function x(){function a(a,b,c){if(0!==b.length){var d="text";if(0===b.indexOf("[")){var e=b.split("]");b=e[1],d=e[0].substr(1,e[0].length-1)}b.indexOf(";")===b.length-1&&(b=b.substr(0,b.length-2)),"html"===d?a.innerHTML=E(b,c):"text"===d?a.textContent=E(b,c):"prepend"===d?a.insertAdjacentHTML(E(b,c),"afterbegin"):"append"===d?a.insertAdjacentHTML(E(b,c),"beforeend"):a.setAttribute(d,E(b,c))}}function b(b,c){var d=b.getAttribute(T.selectorAttr);if(d||"undefined"==typeof d||d===!1||(d=b.textContent||b.value),d){var e=b,f=b.getAttribute("i18n-target");if(f&&(e=b.querySelector(f)||b),d.indexOf(";")>=0)for(var g=d.split(";"),h=0,i=g.length;i>h;h++)""!==g[h]&&a(e,g[h],c);else a(e,d,c)}}M.translateObject=function(a,c){for(var d=a.querySelectorAll("["+T.selectorAttr+"]"),e=0,f=d.length;f>e;e++)b(d[e],c)}}function y(a,b,c,d){if(!a)return a;if(d=d||b,a.indexOf(d.interpolationPrefix||T.interpolationPrefix)<0)return a;var e=d.interpolationPrefix?X.regexEscape(d.interpolationPrefix):T.interpolationPrefixEscaped,f=d.interpolationSuffix?X.regexEscape(d.interpolationSuffix):T.interpolationSuffixEscaped,g=b.replace&&"object"==typeof b.replace?b.replace:b,h=new RegExp([e,"(.+?)","(HTML)?",f].join(""),"g"),i=d.escapeInterpolation||T.escapeInterpolation;return a.replace(h,function(a,b,c){for(var d=g,e=b;e.indexOf(T.keyseparator)>=0&&"object"==typeof d&&d;){var f=e.slice(0,e.indexOf(T.keyseparator));e=e.slice(e.indexOf(T.keyseparator)+1),d=d[f]}if(d&&"object"==typeof d&&d.hasOwnProperty(e)){{d[e]}return i&&!c?X.escape(d[e]):d[e]}return a})}function z(a,b){var c=",",d="{",e="}",f=X.extend({},b);for(delete f.postProcess;-1!=a.indexOf(T.reusePrefix)&&(O++,!(O>T.maxRecursion));){var g=a.lastIndexOf(T.reusePrefix),h=a.indexOf(T.reuseSuffix,g)+T.reuseSuffix.length,i=a.substring(g,h),j=i.replace(T.reusePrefix,"").replace(T.reuseSuffix,"");if(g>=h)return X.error("there is an missing closing in following translation value",a),"";if(-1!=j.indexOf(c)){var k=j.indexOf(c);if(-1!=j.indexOf(d,k)&&-1!=j.indexOf(e,k)){var l=j.indexOf(d,k),m=j.indexOf(e,l)+e.length;try{f=X.extend(f,JSON.parse(j.substring(l,m))),j=j.substring(0,k)}catch(n){}}}var o=H(j,f);a=a.replace(i,X.regexReplacementEscape(o))}return a}function A(a){return a.context&&("string"==typeof a.context||"number"==typeof a.context)}function B(a){return void 0!==a.count&&"string"!=typeof a.count}function C(a){return void 0!==a.indefinite_article&&"string"!=typeof a.indefinite_article&&a.indefinite_article}function D(a,b){b=b||{};var c=F(a,b),d=I(a,b);return void 0!==d||d===c}function E(a,b){return b=b||{},Q?(O=0,H.apply(null,arguments)):(X.log("i18next not finished initialization. you might have called t function before loading resources finished."),b.defaultValue||"")}function F(a,b){return void 0!==b.defaultValue?b.defaultValue:a}function G(){for(var a=[],b=1;b<arguments.length;b++)a.push(arguments[b]);return{postProcess:"sprintf",sprintf:a}}function H(a,b){if(b&&"object"!=typeof b?"sprintf"===T.shortcutFunction?b=G.apply(null,arguments):"defaultValue"===T.shortcutFunction&&(b={defaultValue:b}):b=b||{},"object"==typeof T.defaultVariables&&(b=X.extend({},T.defaultVariables,b)),void 0===a||null===a||""===a)return"";"number"==typeof a&&(a=String(a)),"string"==typeof a&&(a=[a]);var c=a[0];if(a.length>1)for(var d=0;d<a.length&&(c=a[d],!D(c,b));d++);var e,f=F(c,b),g=I(c,b),h=b.lng?X.toLanguages(b.lng,b.fallbackLng):P,i=b.ns||T.ns.defaultNs;c.indexOf(T.nsseparator)>-1&&(e=c.split(T.nsseparator),i=e[0],c=e[1]),void 0===g&&T.sendMissing&&"function"==typeof T.missingKeyHandler&&(b.lng?T.missingKeyHandler(h[0],i,c,f,h):T.missingKeyHandler(T.lng,i,c,f,h));var j;j="string"==typeof T.postProcess&&""!==T.postProcess?[T.postProcess]:"array"==typeof T.postProcess||"object"==typeof T.postProcess?T.postProcess:[],"string"==typeof b.postProcess&&""!==b.postProcess?j=j.concat([b.postProcess]):("array"==typeof b.postProcess||"object"==typeof b.postProcess)&&(j=j.concat(b.postProcess)),void 0!==g&&j.length&&j.forEach(function(a){_[a]&&(g=_[a](g,c,b))});var k=f;if(f.indexOf(T.nsseparator)>-1&&(e=f.split(T.nsseparator),k=e[1]),k===c&&T.parseMissingKey&&(f=T.parseMissingKey(f)),void 0===g&&(f=y(f,b),f=z(f,b),j.length)){var l=F(c,b);j.forEach(function(a){_[a]&&(g=_[a](l,c,b))})}return void 0!==g?g:f}function I(a,b){b=b||{};var c,d,e=F(a,b),f=P;if(!N)return e;if("cimode"===f[0].toLowerCase())return e;if(b.lngs&&(f=b.lngs),b.lng&&(f=X.toLanguages(b.lng,b.fallbackLng),!N[f[0]])){var g=T.getAsync;T.getAsync=!1,M.sync.load(f,T,function(a,b){X.extend(N,b),T.getAsync=g})}var h=b.ns||T.ns.defaultNs;if(a.indexOf(T.nsseparator)>-1){var i=a.split(T.nsseparator);h=i[0],a=i[1]}if(A(b)){c=X.extend({},b),delete c.context,c.defaultValue=T.contextNotFound;var j=h+T.nsseparator+a+"_"+b.context;if(d=E(j,c),d!=T.contextNotFound)return y(d,{context:b.context})}if(B(b,f[0])){c=X.extend({lngs:[f[0]]},b),delete c.count,c._origLng=c._origLng||c.lng||f[0],delete c.lng,c.defaultValue=T.pluralNotFound;var k;if($.needsPlural(f[0],b.count)){k=h+T.nsseparator+a+T.pluralSuffix;var l=$.get(f[0],b.count);l>=0?k=k+"_"+l:1===l&&(k=h+T.nsseparator+a)}else k=h+T.nsseparator+a;if(d=E(k,c),d!=T.pluralNotFound)return y(d,{count:b.count,interpolationPrefix:b.interpolationPrefix,interpolationSuffix:b.interpolationSuffix});if(!(f.length>1))return c.lng=c._origLng,delete c._origLng,d=E(h+T.nsseparator+a,c),y(d,{count:b.count,interpolationPrefix:b.interpolationPrefix,interpolationSuffix:b.interpolationSuffix});var m=f.slice();if(m.shift(),b=X.extend(b,{lngs:m}),b._origLng=c._origLng,delete b.lng,d=E(h+T.nsseparator+a,b),d!=T.pluralNotFound)return d}if(C(b)){var n=X.extend({},b);delete n.indefinite_article,n.defaultValue=T.indefiniteNotFound;var o=h+T.nsseparator+a+(b.count&&!B(b,f[0])||!b.count?T.indefiniteSuffix:"");if(d=E(o,n),d!=T.indefiniteNotFound)return d}for(var p,q=a.split(T.keyseparator),r=0,s=f.length;s>r&&void 0===p;r++){for(var t=f[r],u=0,v=N[t]&&N[t][h];q[u];)v=v&&v[q[u]],u++;if(void 0!==v&&(!T.showKeyIfEmpty||""!==v)){var w=Object.prototype.toString.apply(v);if("string"==typeof v)v=y(v,b),v=z(v,b);else if("[object Array]"!==w||T.returnObjectTrees||b.returnObjectTrees){if(null===v&&T.fallbackOnNull===!0)v=void 0;else if(null!==v)if(T.returnObjectTrees||b.returnObjectTrees){if("[object Number]"!==w&&"[object Function]"!==w&&"[object RegExp]"!==w){var x="[object Array]"===w?[]:{};X.each(v,function(c){x[c]=H(h+T.nsseparator+a+T.keyseparator+c,b)}),v=x}}else T.objectTreeKeyHandler&&"function"==typeof T.objectTreeKeyHandler?v=T.objectTreeKeyHandler(a,v,t,h,b):(v="key '"+h+":"+a+" ("+t+")' returned an object instead of string.",X.log(v))}else v=v.join("\n"),v=y(v,b),v=z(v,b);"string"==typeof v&&""===v.trim()&&T.fallbackOnEmpty===!0&&(v=void 0),p=v}}if(void 0===p&&!b.isFallbackLookup&&(T.fallbackToDefaultNS===!0||T.fallbackNS&&T.fallbackNS.length>0)){if(b.isFallbackLookup=!0,T.fallbackNS.length){for(var D=0,G=T.fallbackNS.length;G>D;D++)if(p=I(T.fallbackNS[D]+T.nsseparator+a,b),p||""===p&&T.fallbackOnEmpty===!1){var J=p.indexOf(T.nsseparator)>-1?p.split(T.nsseparator)[1]:p,K=e.indexOf(T.nsseparator)>-1?e.split(T.nsseparator)[1]:e;if(J!==K)break}}else b.ns=T.ns.defaultNs,p=I(a,b);b.isFallbackLookup=!1}return p}function J(){var a,b=T.lngWhitelist||[],c=[];if("undefined"!=typeof window&&!function(){for(var a=window.location.search.substring(1),b=a.split("&"),d=0;d<b.length;d++){var e=b[d].indexOf("=");if(e>0){var f=b[d].substring(0,e);f==T.detectLngQS&&c.push(b[d].substring(e+1))}}}(),T.useCookie&&"undefined"!=typeof document){var d=X.cookie.read(T.cookieName);d&&c.push(d)}if(T.detectLngFromLocalStorage&&"undefined"!=typeof window&&window.localStorage){var e=X.localStorage.getItem("i18next_lng");e&&c.push(e)}if("undefined"!=typeof navigator){if(navigator.languages)for(var f=0;f<navigator.languages.length;f++)c.push(navigator.languages[f]);navigator.userLanguage&&c.push(navigator.userLanguage),navigator.language&&c.push(navigator.language)}return function(){for(var d=0;d<c.length;d++){var e=c[d];if(e.indexOf("-")>-1){var f=e.split("-");e=T.lowerCaseLng?f[0].toLowerCase()+"-"+f[1].toLowerCase():f[0].toLowerCase()+"-"+f[1].toUpperCase()}if(0===b.length||b.indexOf(e)>-1){a=e;break}}}(),a||(a=T.fallbackLng[0]),a}Array.prototype.indexOf||(Array.prototype.indexOf=function(a){"use strict";if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>0&&(d=Number(arguments[1]),d!=d?d=0:0!=d&&d!=1/0&&d!=-(1/0)&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);c>e;e++)if(e in b&&b[e]===a)return e;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(a){"use strict";if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=c;arguments.length>1&&(d=Number(arguments[1]),d!=d?d=0:0!=d&&d!=1/0&&d!=-(1/0)&&(d=(d>0||-1)*Math.floor(Math.abs(d))));for(var e=d>=0?Math.min(d,c-1):c-Math.abs(d);e>=0;e--)if(e in b&&b[e]===a)return e;return-1}),"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var K,L=a.jQuery||a.Zepto,M={},N={},O=0,P=[],Q=!1,R={},S=null;"undefined"!=typeof module&&module.exports?module.exports=M:(L&&(L.i18n=L.i18n||M),a.i18n&&(S=a.i18n),a.i18n=M),R={load:function(a,b,c){b.useLocalStorage?R._loadLocal(a,b,function(d,e){for(var f=[],g=0,h=a.length;h>g;g++)e[a[g]]||f.push(a[g]);f.length>0?R._fetch(f,b,function(a,b){X.extend(e,b),R._storeLocal(b),c(a,e)}):c(d,e)}):R._fetch(a,b,function(a,b){c(a,b)})},_loadLocal:function(a,b,c){var d={},e=(new Date).getTime();if(window.localStorage){var f=a.length;X.each(a,function(a,g){var h=X.localStorage.getItem("res_"+g);h&&(h=JSON.parse(h),h.i18nStamp&&h.i18nStamp+b.localStorageExpirationTime>e&&(d[g]=h)),f--,0===f&&c(null,d)})}},_storeLocal:function(a){if(window.localStorage)for(var b in a)a[b].i18nStamp=(new Date).getTime(),X.localStorage.setItem("res_"+b,JSON.stringify(a[b]))},_fetch:function(a,b,c){var d=b.ns,e={};if(b.dynamicLoad){var f=function(a,b){c(a,b)};if("function"==typeof b.customLoad)b.customLoad(a,d.namespaces,b,f);else{var g=y(b.resGetPath,{lng:a.join("+"),ns:d.namespaces.join("+")});X.ajax({url:g,cache:b.cache,success:function(a){X.log("loaded: "+g),f(null,a)},error:function(a,b,c){X.log("failed loading: "+g),f("failed loading resource.json error: "+c)},dataType:"json",async:b.getAsync,timeout:b.ajaxTimeout})}}else{var h,i=d.namespaces.length*a.length;X.each(d.namespaces,function(d,f){X.each(a,function(a,d){var g=function(a,b){a&&(h=h||[],h.push(a)),e[d]=e[d]||{},e[d][f]=b,i--,0===i&&c(h,e)};"function"==typeof b.customLoad?b.customLoad(d,f,b,g):R._fetchOne(d,f,b,g)})})}},_fetchOne:function(a,b,c,d){var e=y(c.resGetPath,{lng:a,ns:b});X.ajax({url:e,cache:c.cache,success:function(a){X.log("loaded: "+e),d(null,a)},error:function(a,b,c){if(b&&200==b||a&&a.status&&200==a.status)X.error("There is a typo in: "+e);else if(b&&404==b||a&&a.status&&404==a.status)X.log("Does not exist: "+e);else{var f=b?b:a&&a.status?a.status:null;X.log(f+" when loading "+e)}d(c,{})},dataType:"json",async:c.getAsync,timeout:c.ajaxTimeout})},postMissing:function(a,b,c,d,e){var f={};f[c]=d;var g=[];if("fallback"===T.sendMissingTo&&T.fallbackLng[0]!==!1)for(var h=0;h<T.fallbackLng.length;h++)g.push({lng:T.fallbackLng[h],url:y(T.resPostPath,{lng:T.fallbackLng[h],ns:b})});else if("current"===T.sendMissingTo||"fallback"===T.sendMissingTo&&T.fallbackLng[0]===!1)g.push({lng:a,url:y(T.resPostPath,{lng:a,ns:b})});else if("all"===T.sendMissingTo)for(var h=0,i=e.length;i>h;h++)g.push({lng:e[h],url:y(T.resPostPath,{lng:e[h],ns:b})});for(var j=0,k=g.length;k>j;j++){var l=g[j];X.ajax({url:l.url,type:T.sendType,data:f,success:function(){X.log("posted missing key '"+c+"' to: "+l.url);for(var a=c.split("."),e=0,f=N[l.lng][b];a[e];)f=f[a[e]]=e===a.length-1?d:f[a[e]]||{},e++},error:function(){X.log("failed posting missing key '"+c+"' to: "+l.url)},dataType:"json",async:T.postAsync,timeout:T.ajaxTimeout})}},reload:u};var T={lng:void 0,load:"all",preload:[],lowerCaseLng:!1,returnObjectTrees:!1,fallbackLng:["dev"],fallbackNS:[],detectLngQS:"setLng",detectLngFromLocalStorage:!1,ns:{namespaces:["translation"],defaultNs:"translation"},fallbackOnNull:!0,fallbackOnEmpty:!1,fallbackToDefaultNS:!1,showKeyIfEmpty:!1,nsseparator:":",keyseparator:".",selectorAttr:"data-i18n",debug:!1,resGetPath:"locales/__lng__/__ns__.json",resPostPath:"locales/add/__lng__/__ns__",getAsync:!0,postAsync:!0,resStore:void 0,useLocalStorage:!1,localStorageExpirationTime:6048e5,dynamicLoad:!1,sendMissing:!1,sendMissingTo:"fallback",sendType:"POST",interpolationPrefix:"__",interpolationSuffix:"__",defaultVariables:!1,reusePrefix:"$t(",reuseSuffix:")",pluralSuffix:"_plural",pluralNotFound:["plural_not_found",Math.random()].join(""),contextNotFound:["context_not_found",Math.random()].join(""),escapeInterpolation:!1,indefiniteSuffix:"_indefinite",indefiniteNotFound:["indefinite_not_found",Math.random()].join(""),setJqueryExt:!0,defaultValueFromContent:!0,useDataAttrOptions:!1,cookieExpirationTime:void 0,useCookie:!0,cookieName:"i18next",cookieDomain:void 0,objectTreeKeyHandler:void 0,postProcess:void 0,parseMissingKey:void 0,missingKeyHandler:R.postMissing,ajaxTimeout:0,shortcutFunction:"sprintf"},U={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},V={create:function(a,b,c,d){var e;if(c){var f=new Date;f.setTime(f.getTime()+60*c*1e3),e="; expires="+f.toGMTString()}else e="";d=d?"domain="+d+";":"",document.cookie=a+"="+b+e+";"+d+"path=/"},read:function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return e.substring(b.length,e.length)}return null},remove:function(a){this.create(a,"",-1)}},W={create:function(){},read:function(){return null},remove:function(){}},X={extend:L?L.extend:b,deepExtend:c,each:L?L.each:d,ajax:L?L.ajax:"undefined"!=typeof document?f:function(){},cookie:"undefined"!=typeof document?V:W,detectLanguage:J,escape:e,log:function(a){T.debug&&"undefined"!=typeof console&&console.log(a)},error:function(a){"undefined"!=typeof console&&console.error(a)},getCountyIndexOfLng:function(a){var b=0;return("nb-NO"===a||"nn-NO"===a||"nb-no"===a||"nn-no"===a)&&(b=1),b},toLanguages:function(a,b){function c(a){var b=a;if("string"==typeof a&&a.indexOf("-")>-1){var c=a.split("-");b=T.lowerCaseLng?c[0].toLowerCase()+"-"+c[1].toLowerCase():c[0].toLowerCase()+"-"+c[1].toUpperCase()}else b=T.lowerCaseLng?a.toLowerCase():a;return b}var d=this.log;b=b||T.fallbackLng,"string"==typeof b&&(b=[b]);var e=[],f=T.lngWhitelist||!1,g=function(a){!f||f.indexOf(a)>-1?e.push(a):d("rejecting non-whitelisted language: "+a)};if("string"==typeof a&&a.indexOf("-")>-1){var h=a.split("-");"unspecific"!==T.load&&g(c(a)),"current"!==T.load&&g(c(h[this.getCountyIndexOfLng(a)]))}else g(c(a));for(var i=0;i<b.length;i++)-1===e.indexOf(b[i])&&b[i]&&e.push(c(b[i]));return e},regexEscape:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},regexReplacementEscape:function(a){return"string"==typeof a?a.replace(/\$/g,"$$$$"):a},localStorage:{setItem:function(a,b){if(window.localStorage)try{window.localStorage.setItem(a,b)}catch(c){X.log('failed to set value for key "'+a+'" to localStorage.')}},getItem:function(a,b){if(window.localStorage)try{return window.localStorage.getItem(a,b)}catch(c){return void X.log('failed to get value for key "'+a+'" from localStorage.')}}}};X.applyReplacement=y;var Y=[["ach","Acholi",[1,2],1],["af","Afrikaans",[1,2],2],["ak","Akan",[1,2],1],["am","Amharic",[1,2],1],["an","Aragonese",[1,2],2],["ar","Arabic",[0,1,2,3,11,100],5],["arn","Mapudungun",[1,2],1],["ast","Asturian",[1,2],2],["ay","Aymará",[1],3],["az","Azerbaijani",[1,2],2],["be","Belarusian",[1,2,5],4],["bg","Bulgarian",[1,2],2],["bn","Bengali",[1,2],2],["bo","Tibetan",[1],3],["br","Breton",[1,2],1],["bs","Bosnian",[1,2,5],4],["ca","Catalan",[1,2],2],["cgg","Chiga",[1],3],["cs","Czech",[1,2,5],6],["csb","Kashubian",[1,2,5],7],["cy","Welsh",[1,2,3,8],8],["da","Danish",[1,2],2],["de","German",[1,2],2],["dev","Development Fallback",[1,2],2],["dz","Dzongkha",[1],3],["el","Greek",[1,2],2],["en","English",[1,2],2],["eo","Esperanto",[1,2],2],["es","Spanish",[1,2],2],["es_ar","Argentinean Spanish",[1,2],2],["et","Estonian",[1,2],2],["eu","Basque",[1,2],2],["fa","Persian",[1],3],["fi","Finnish",[1,2],2],["fil","Filipino",[1,2],1],["fo","Faroese",[1,2],2],["fr","French",[1,2],9],["fur","Friulian",[1,2],2],["fy","Frisian",[1,2],2],["ga","Irish",[1,2,3,7,11],10],["gd","Scottish Gaelic",[1,2,3,20],11],["gl","Galician",[1,2],2],["gu","Gujarati",[1,2],2],["gun","Gun",[1,2],1],["ha","Hausa",[1,2],2],["he","Hebrew",[1,2],2],["hi","Hindi",[1,2],2],["hr","Croatian",[1,2,5],4],["hu","Hungarian",[1,2],2],["hy","Armenian",[1,2],2],["ia","Interlingua",[1,2],2],["id","Indonesian",[1],3],["is","Icelandic",[1,2],12],["it","Italian",[1,2],2],["ja","Japanese",[1],3],["jbo","Lojban",[1],3],["jv","Javanese",[0,1],13],["ka","Georgian",[1],3],["kk","Kazakh",[1],3],["km","Khmer",[1],3],["kn","Kannada",[1,2],2],["ko","Korean",[1],3],["ku","Kurdish",[1,2],2],["kw","Cornish",[1,2,3,4],14],["ky","Kyrgyz",[1],3],["lb","Letzeburgesch",[1,2],2],["ln","Lingala",[1,2],1],["lo","Lao",[1],3],["lt","Lithuanian",[1,2,10],15],["lv","Latvian",[1,2,0],16],["mai","Maithili",[1,2],2],["mfe","Mauritian Creole",[1,2],1],["mg","Malagasy",[1,2],1],["mi","Maori",[1,2],1],["mk","Macedonian",[1,2],17],["ml","Malayalam",[1,2],2],["mn","Mongolian",[1,2],2],["mnk","Mandinka",[0,1,2],18],["mr","Marathi",[1,2],2],["ms","Malay",[1],3],["mt","Maltese",[1,2,11,20],19],["nah","Nahuatl",[1,2],2],["nap","Neapolitan",[1,2],2],["nb","Norwegian Bokmal",[1,2],2],["ne","Nepali",[1,2],2],["nl","Dutch",[1,2],2],["nn","Norwegian Nynorsk",[1,2],2],["no","Norwegian",[1,2],2],["nso","Northern Sotho",[1,2],2],["oc","Occitan",[1,2],1],["or","Oriya",[2,1],2],["pa","Punjabi",[1,2],2],["pap","Papiamento",[1,2],2],["pl","Polish",[1,2,5],7],["pms","Piemontese",[1,2],2],["ps","Pashto",[1,2],2],["pt","Portuguese",[1,2],2],["pt_br","Brazilian Portuguese",[1,2],2],["rm","Romansh",[1,2],2],["ro","Romanian",[1,2,20],20],["ru","Russian",[1,2,5],4],["sah","Yakut",[1],3],["sco","Scots",[1,2],2],["se","Northern Sami",[1,2],2],["si","Sinhala",[1,2],2],["sk","Slovak",[1,2,5],6],["sl","Slovenian",[5,1,2,3],21],["so","Somali",[1,2],2],["son","Songhay",[1,2],2],["sq","Albanian",[1,2],2],["sr","Serbian",[1,2,5],4],["su","Sundanese",[1],3],["sv","Swedish",[1,2],2],["sw","Swahili",[1,2],2],["ta","Tamil",[1,2],2],["te","Telugu",[1,2],2],["tg","Tajik",[1,2],1],["th","Thai",[1],3],["ti","Tigrinya",[1,2],1],["tk","Turkmen",[1,2],2],["tr","Turkish",[1,2],1],["tt","Tatar",[1],3],["ug","Uyghur",[1],3],["uk","Ukrainian",[1,2,5],4],["ur","Urdu",[1,2],2],["uz","Uzbek",[1,2],1],["vi","Vietnamese",[1],3],["wa","Walloon",[1,2],1],["wo","Wolof",[1],3],["yo","Yoruba",[1,2],2],["zh","Chinese",[1],3]],Z={1:function(a){return Number(a>1)},2:function(a){return Number(1!=a)},3:function(){return 0},4:function(a){return Number(a%10==1&&a%100!=11?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)},5:function(a){return Number(0===a?0:1==a?1:2==a?2:a%100>=3&&10>=a%100?3:a%100>=11?4:5)},6:function(a){return Number(1==a?0:a>=2&&4>=a?1:2)},7:function(a){return Number(1==a?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)},8:function(a){return Number(1==a?0:2==a?1:8!=a&&11!=a?2:3)},9:function(a){return Number(a>=2)},10:function(a){return Number(1==a?0:2==a?1:7>a?2:11>a?3:4)},11:function(a){return Number(1==a||11==a?0:2==a||12==a?1:a>2&&20>a?2:3)},12:function(a){return Number(a%10!=1||a%100==11)},13:function(a){return Number(0!==a)},14:function(a){return Number(1==a?0:2==a?1:3==a?2:3)},15:function(a){return Number(a%10==1&&a%100!=11?0:a%10>=2&&(10>a%100||a%100>=20)?1:2)},16:function(a){return Number(a%10==1&&a%100!=11?0:0!==a?1:2)},17:function(a){return Number(1==a||a%10==1?0:1)},18:function(a){return Number(1==a?1:2)},19:function(a){return Number(1==a?0:0===a||a%100>1&&11>a%100?1:a%100>10&&20>a%100?2:3)},20:function(a){return Number(1==a?0:0===a||a%100>0&&20>a%100?1:2)},21:function(a){return Number(a%100==1?1:a%100==2?2:a%100==3||a%100==4?3:0)}},$={rules:function(){var a,b={};for(a=Y.length;a--;)b[Y[a][0]]={name:Y[a][1],numbers:Y[a][2],plurals:Z[Y[a][3]]};return b}(),addRule:function(a,b){$.rules[a]=b},setCurrentLng:function(a){if(!$.currentRule||$.currentRule.lng!==a){var b=a.split("-");$.currentRule={lng:a,rule:$.rules[b[0]]}}},needsPlural:function(a,b){var c,d=a.split("-");return c=$.currentRule&&$.currentRule.lng===a?$.currentRule.rule:$.rules[d[X.getCountyIndexOfLng(a)]],c&&c.numbers.length<=1?!1:1!==this.get(a,b)},get:function(a,b){function c(b,c){var d;if(d=$.currentRule&&$.currentRule.lng===a?$.currentRule.rule:$.rules[b]){var e;e=d.plurals(d.noAbs?c:Math.abs(c));var f=d.numbers[e];return 2===d.numbers.length&&1===d.numbers[0]&&(2===f?f=-1:1===f&&(f=1)),f}return 1===c?"1":"-1"}var d=a.split("-");return c(d[X.getCountyIndexOfLng(a)],b)}},_={},aa=function(a,b){_[a]=b},ba=function(){function a(a){return Object.prototype.toString.call(a).slice(8,-1).toLowerCase()}function b(a,b){for(var c=[];b>0;c[--b]=a);return c.join("")}var c=function(){return c.cache.hasOwnProperty(arguments[0])||(c.cache[arguments[0]]=c.parse(arguments[0])),c.format.call(null,c.cache[arguments[0]],arguments)};return c.format=function(c,d){var e,f,g,h,i,j,k,l=1,m=c.length,n="",o=[];for(f=0;m>f;f++)if(n=a(c[f]),"string"===n)o.push(c[f]);else if("array"===n){if(h=c[f],h[2])for(e=d[l],g=0;g<h[2].length;g++){if(!e.hasOwnProperty(h[2][g]))throw ba('[sprintf] property "%s" does not exist',h[2][g]);e=e[h[2][g]]}else e=h[1]?d[h[1]]:d[l++];if(/[^s]/.test(h[8])&&"number"!=a(e))throw ba("[sprintf] expecting number but found %s",a(e));switch(h[8]){case"b":e=e.toString(2);break;case"c":e=String.fromCharCode(e);break;case"d":e=parseInt(e,10);break;case"e":e=h[7]?e.toExponential(h[7]):e.toExponential();break;case"f":e=h[7]?parseFloat(e).toFixed(h[7]):parseFloat(e);break;case"o":e=e.toString(8);break;case"s":e=(e=String(e))&&h[7]?e.substring(0,h[7]):e;break;case"u":e=Math.abs(e);break;case"x":e=e.toString(16);break;case"X":e=e.toString(16).toUpperCase()}e=/[def]/.test(h[8])&&h[3]&&e>=0?"+"+e:e,j=h[4]?"0"==h[4]?"0":h[4].charAt(1):" ",k=h[6]-String(e).length,i=h[6]?b(j,k):"",o.push(h[5]?e+i:i+e)}return o.join("")},c.cache={},c.parse=function(a){for(var b=a,c=[],d=[],e=0;b;){if(null!==(c=/^[^\x25]+/.exec(b)))d.push(c[0]);else if(null!==(c=/^\x25{2}/.exec(b)))d.push("%");else{if(null===(c=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(b)))throw"[sprintf] huh?";if(c[2]){e|=1;var f=[],g=c[2],h=[];if(null===(h=/^([a-z_][a-z_\d]*)/i.exec(g)))throw"[sprintf] huh?";for(f.push(h[1]);""!==(g=g.substring(h[0].length));)if(null!==(h=/^\.([a-z_][a-z_\d]*)/i.exec(g)))f.push(h[1]);else{if(null===(h=/^\[(\d+)\]/.exec(g)))throw"[sprintf] huh?";f.push(h[1])}c[2]=f}else e|=2;if(3===e)throw"[sprintf] mixing positional and named placeholders is not (yet) supported";d.push(c)}b=b.substring(c[0].length)}return d},c}(),ca=function(a,b){
return b.unshift(a),ba.apply(null,b)};aa("sprintf",function(a,b,c){return c.sprintf?"[object Array]"===Object.prototype.toString.apply(c.sprintf)?ca(a,c.sprintf):"object"==typeof c.sprintf?ba(a,c.sprintf):a:a}),M.init=g,M.isInitialized=h,M.setLng=s,M.preload=i,M.addResourceBundle=j,M.hasResourceBundle=k,M.getResourceBundle=l,M.addResource=n,M.addResources=o,M.removeResourceBundle=m,M.loadNamespace=q,M.loadNamespaces=r,M.setDefaultNamespace=p,M.t=E,M.translate=E,M.exists=D,M.detectLanguage=X.detectLanguage,M.pluralExtensions=$,M.sync=R,M.functions=X,M.lng=t,M.addPostProcessor=aa,M.applyReplacement=X.applyReplacement,M.options=T,M.noConflict=v}("undefined"==typeof exports?window:exports);
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map
//  Underscore.inflection.js
//  (c) 2014 Jeremy Ruppel
//  Underscore.inflection is freely distributable under the MIT license.
//  Portions of Underscore.inflection are inspired or borrowed from ActiveSupport
//  Version 1.0.0

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['underscore'], factory);
  } else if (typeof require === 'function' && typeof exports === 'object') {
    // CommonJS
    module.exports = factory(require('underscore'));
  } else {
    // Browser globals (root is window)
    factory(root._);
  }
})(this, function(_, undefined) {
  var plurals      = [];
  var singulars    = [];
  var uncountables = [];

  /**
   * Inflector
   */
  var inflector = {

    /**
     * `gsub` is a method that is just slightly different than our
     * standard `String#replace`. The main differences are that it
     * matches globally every time, and if no substitution is made
     * it returns `null`. It accepts a string for `word` and
     * `replacement`, and `rule` can be either a string or a regex.
     */
    gsub: function(word, rule, replacement) {
      var pattern = new RegExp(rule.source || rule, 'gi');

      return pattern.test(word) ? word.replace(pattern, replacement) : null;
    },

    /**
     * `plural` creates a new pluralization rule for the inflector.
     * `rule` can be either a string or a regex.
     */
    plural: function(rule, replacement) {
      plurals.unshift([rule, replacement]);
    },

    /**
     * Pluralizes the string passed to it. It also can accept a
     * number as the second parameter. If a number is provided,
     * it will pluralize the word to match the number. Optionally,
     * you can pass `true` as a third parameter. If found, this
     * will include the count with the output.
     */
    pluralize: function(word, count, includeNumber) {
      var result;

      if (count !== undefined) {
        count = parseFloat(count);
        result = (count === 1) ? this.singularize(word) : this.pluralize(word);
        result = (includeNumber) ? [count, result].join(' ') : result;
      } else {
        if (_(uncountables).include(word)) {
          return word;
        }

        result = word;

        _(plurals).detect(function(rule) {
          var gsub = this.gsub(word, rule[0], rule[1]);

          return gsub ? (result = gsub) : false;
        },
        this);
      }

      return result;
    },

    /**
     * `singular` creates a new singularization rule for the
     * inflector. `rule` can be either a string or a regex.
     */
    singular: function(rule, replacement) {
      singulars.unshift([rule, replacement]);
    },

    /**
     * `singularize` returns the singular version of the plural
     * passed to it.
     */
    singularize: function(word) {
      if (_(uncountables).include(word)) {
        return word;
      }

      var result = word;

      _(singulars).detect(function(rule) {
        var gsub = this.gsub(word, rule[0], rule[1]);

        return gsub ? (result = gsub) : false;
      },
      this);

      return result;
    },

    /**
     * `irregular` is a shortcut method to create both a
     * pluralization and singularization rule for the word at
     * the same time. You must supply both the singular form
     * and the plural form as explicit strings.
     */
    irregular: function(singular, plural) {
      this.plural('\\b' + singular + '\\b', plural);
      this.singular('\\b' + plural + '\\b', singular);
    },

    /**
     * `uncountable` creates a new uncountable rule for `word`.
     * Uncountable words do not get pluralized or singularized.
     */
    uncountable: function(word) {
      uncountables.unshift(word);
    },

    /**
     * `ordinalize` adds an ordinal suffix to `number`.
     */
    ordinalize: function(number) {
      if (isNaN(number)) {
        return number;
      }

      number = number.toString();
      var lastDigit = number.slice(-1);
      var lastTwoDigits = number.slice(-2);

      if (lastTwoDigits === '11' || lastTwoDigits === '12' || lastTwoDigits === '13') {
        return number + 'th';
      }

      switch (lastDigit) {
        case '1':
          return number + 'st';
        case '2':
          return number + 'nd';
        case '3':
          return number + 'rd';
        default:
          return number + 'th';
      }
    },

    /**
     * `titleize` capitalizes the first letter of each word in
     * the string `words`. It preserves the existing whitespace.
     */
    titleize: function(words) {
      if (typeof words !== 'string') {
        return words;
      }

      return words.replace(/\S+/g, function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
    },

    /**
     * Resets the inflector's rules to their initial state,
     * clearing out any custom rules that have been added.
     */
    resetInflections: function() {
      plurals      = [];
      singulars    = [];
      uncountables = [];

      this.plural(/$/,                         's');
      this.plural(/s$/,                        's');
      this.plural(/(ax|test)is$/,              '$1es');
      this.plural(/(octop|vir)us$/,            '$1i');
      this.plural(/(octop|vir)i$/,             '$1i');
      this.plural(/(alias|status)$/,           '$1es');
      this.plural(/(bu)s$/,                    '$1ses');
      this.plural(/(buffal|tomat)o$/,          '$1oes');
      this.plural(/([ti])um$/,                 '$1a');
      this.plural(/([ti])a$/,                  '$1a');
      this.plural(/sis$/,                      'ses');
      this.plural(/(?:([^f])fe|([lr])?f)$/,     '$1$2ves');
      this.plural(/(hive)$/,                   '$1s');
      this.plural(/([^aeiouy]|qu)y$/,          '$1ies');
      this.plural(/(x|ch|ss|sh)$/,             '$1es');
      this.plural(/(matr|vert|ind)(?:ix|ex)$/, '$1ices');
      this.plural(/([m|l])ouse$/,              '$1ice');
      this.plural(/([m|l])ice$/,               '$1ice');
      this.plural(/^(ox)$/,                    '$1en');
      this.plural(/^(oxen)$/,                  '$1');
      this.plural(/(quiz)$/,                   '$1zes');

      this.singular(/s$/,                                                            '');
      this.singular(/(n)ews$/,                                                       '$1ews');
      this.singular(/([ti])a$/,                                                      '$1um');
      this.singular(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/, '$1$2sis');
      this.singular(/(^analy)ses$/,                                                  '$1sis');
      this.singular(/([^f])ves$/,                                                    '$1fe');
      this.singular(/(hive)s$/,                                                      '$1');
      this.singular(/(tive)s$/,                                                      '$1');
      this.singular(/([lr])ves$/,                                                    '$1f');
      this.singular(/([^aeiouy]|qu)ies$/,                                            '$1y');
      this.singular(/(s)eries$/,                                                     '$1eries');
      this.singular(/(m)ovies$/,                                                     '$1ovie');
      this.singular(/(x|ch|ss|sh)es$/,                                               '$1');
      this.singular(/([m|l])ice$/,                                                   '$1ouse');
      this.singular(/(bus)es$/,                                                      '$1');
      this.singular(/(o)es$/,                                                        '$1');
      this.singular(/(shoe)s$/,                                                      '$1');
      this.singular(/(cris|ax|test)es$/,                                             '$1is');
      this.singular(/(octop|vir)i$/,                                                 '$1us');
      this.singular(/(alias|status)es$/,                                             '$1');
      this.singular(/^(ox)en/,                                                       '$1');
      this.singular(/(vert|ind)ices$/,                                               '$1ex');
      this.singular(/(matr)ices$/,                                                   '$1ix');
      this.singular(/(quiz)zes$/,                                                    '$1');
      this.singular(/(database)s$/,                                                  '$1');

      this.irregular('person', 'people');
      this.irregular('man',    'men');
      this.irregular('child',  'children');
      this.irregular('sex',    'sexes');
      this.irregular('move',   'moves');
      this.irregular('cow',    'kine');

      this.uncountable('equipment');
      this.uncountable('information');
      this.uncountable('rice');
      this.uncountable('money');
      this.uncountable('species');
      this.uncountable('series');
      this.uncountable('fish');
      this.uncountable('sheep');
      this.uncountable('jeans');

      return this;
    }
  };

  /**
   * Underscore integration
   */
  _.mixin(inflector.resetInflections());

  return inflector;
});
;(function() {
  this.I18n = (function() {
    function I18n() {
      i18n.init({
        lng: document.documentElement.lang,
        fallbackLng: 'pt-BR',
        useCookie: false,
        useLocalStorage: false,
        resStore: Translations.locales()
      });
      accounting.settings = {
        currency: {
          symbol: i18n.t('currency.symbol'),
          format: i18n.t('currency.format'),
          decimal: i18n.t('currency.decimal'),
          thousand: i18n.t('currency.thousand'),
          precision: 2
        },
        number: {
          precision: 2,
          thousand: i18n.t('number.thousand'),
          decimal: i18n.t('number.decimal')
        }
      };
    }

    return I18n;

  })();

}).call(this);

(function() {
  this.Translations = (function() {
    function Translations() {}

    Translations.locales = function() {
      return {
        'pt-BR': {
          translation: {
            number: {
              decimal: '.',
              thousand: ','
            },
            currency: {
              symbol: 'R$',
              format: '%s %v',
              decimal: ',',
              thousand: '.'
            },
            cart: {
              item: {
                one: 'item',
                others: 'itens'
              },
              cancel: 'cancelar',
              line_items: 'Itens no meu carrinho de compras:',
              line_item_added: 'Item adicionado ao carrinho de compras!',
              finish_buy: 'ir para o checkout',
              continue_shop: 'voltar para a loja',
              line_items_on_cart: 'Itens no meu carrinho de compras:',
              empty_cart: 'O carrinho está vazio',
              empty: 'vazio',
              remove: 'remover',
              confirm_remove: 'Tem certeza de que deseja remover este item?',
              update: 'atualizar',
              unavailable: 'indisponível',
              buy: 'adicionar ao carrinho',
              set_amount: 'Ajuste as quantidades dos produtos',
              close: 'Fechar',
              warning_quantity_unavailable: 'Aviso: Estoque limitado',
              product_qty_unavailable: 'O produto __product__ está com estoque limitado no momento.',
              warning_review_cart: 'Revise o seu carrinho de compras',
              product_unavailable: 'Produto(s) removido(s): um ou mais produtos estão esgotados e foram removidos do seu carrinho.',
              product_stock_changed: 'Aviso de estoque: um ou mais produtos estão com estoque reduzido. Atualizamos seu carrinho para a quantidade disponível.'
            }
          }
        },
        'en': {
          translation: {
            number: {
              decimal: ',',
              thousand: '.'
            },
            currency: {
              symbol: '$',
              format: '%s %v',
              decimal: '.',
              thousand: ','
            },
            cart: {
              item: {
                one: 'item',
                others: 'items'
              },
              cancel: 'cancel',
              line_items: 'Items in my shopping cart:',
              line_item_added: 'Item added to cart',
              finish_buy: 'proceed to checkout',
              continue_shop: 'go back to store',
              line_items_on_cart: 'Items in my shopping cart:',
              empty_cart: 'Your shopping cart is empty',
              empty: 'empty',
              remove: 'remove',
              confirm_remove: 'Are you sure you want to remove this item?',
              update: 'update',
              buy: 'add to cart',
              unavailable: 'not available',
              set_amount: 'Review your items',
              close: 'Close',
              warning_quantity_unavailable: 'Note: Limited stock',
              product_qty_unavailable: '__product__ is under limited stock at the moment.',
              warning_review_cart: 'Review your shopping cart',
              product_unavailable: 'Out of stock: one or more items are no longer available and have been removed from your cart.',
              product_stock_changed: 'Stock alert: one or more items are in low stock. Your cart has been updated to the available amount.'
            }
          }
        }
      };
    };

    return Translations;

  })();

}).call(this);

(function() {
  this.CartTemplates = (function() {
    function CartTemplates() {}

    CartTemplates.selectedVariation = function(variation) {
      var attributes, i, len, option, ref, template;
      attributes = '';
      ref = variation.options;
      for (i = 0, len = ref.length; i < len; i++) {
        option = ref[i];
        attributes = attributes + ("<li>" + (_.keys(option)[0]) + ": " + (_.values(option)[0]) + "</li>");
      }
      template = "<div class='modal fade' id='shopping_cart_modal' tabindex='-1' role='dialog'>\n  <div class='modal-dialog' role='document'>\n    <div class='modal-content'>\n      <div class='modal-header'>\n        <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>\n        <h4 class='modal-title' id='myModalLabel'>" + (i18n.t('cart.line_item_added')) + "</h4>\n      </div>\n      <div class='modal-body'>\n        <div class=\"row\">\n          <div class=\"thumb col-xs-3\">\n            <img src='" + variation.thumb_url + "' class=\"img-responsive\">   \n          </div>\n          <div class=\"details col-xs-9\">\n            <h5 class=\"title\">" + variation.product_name + "</h5>\n            <div class=\"price-now\">" + (MoneyHelper.currency(variation.sale_price)) + "</div>\n            <div class=\"price-old\">" + (MoneyHelper.currency(variation.regular_price)) + "</div>\n            <ul class=\"attributes\">\n              " + attributes + "\n            </ul>\n          </div>\n        </div>\n        <div class=\"row action-next\">\n          <div class=\"col-xs-9 col-xs-offset-3\">\n            <a href=\"/checkout\" class=\"btn btn-primary checkout\">" + (i18n.t('cart.finish_buy')) + " »</a>\n            <div class=\"keep-shopping\"><a href=\"/\" data-dismiss=\"modal\">« " + (i18n.t('cart.continue_shop')) + "</a></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>  ";
      return template;
    };

    CartTemplates.editCartItems = function(line_items) {
      var template;
      template = "<div class='modal fade' id='shopping_cart_modal' tabindex='-1' role='dialog'>\n  <div class='modal-dialog' role='document'>\n    <div class='modal-content'>\n      <div class='modal-header'>\n        <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>\n        <h4 class='modal-title' id='myModalLabel'>" + (i18n.t('cart.set_amount')) + "</h4>\n      </div>\n      <div class='modal-body'>\n        " + (CartTemplates.cartItems(line_items)) + "\n      </div>\n    </div>\n  </div>\n</div>";
      return template;
    };

    CartTemplates.cartItems = function(line_items) {
      var attributes, checkout_button, i, item, j, len, len1, option, ref, template, variation, variation_tmp;
      variation_tmp = '';
      if (line_items.length === 0) {
        variation_tmp = this.emptyCart();
      } else {
        for (i = 0, len = line_items.length; i < len; i++) {
          item = line_items[i];
          variation = item.variation;
          attributes = '';
          ref = item.variation.options;
          for (j = 0, len1 = ref.length; j < len1; j++) {
            option = ref[j];
            attributes = attributes + ("<li>" + (_.keys(option)[0].trim()) + ": " + (_.values(option)[0].trim()) + "</li>");
          }
          variation_tmp = variation_tmp + (variation_tmp = " <div class='item'>\n  <div class='thumb col-xs-3'>\n    <img src='" + variation.thumb_url + "' alt='" + variation.product_name + "'>\n    <span class='remove-item'><a href='#' data-variation-id='" + variation.id + "'><span class='remove'>" + (i18n.t('cart.remove')) + "</span></a></span>\n  </div>\n  <div class='details col-xs-9'>\n    <h5 class='title'><a href=\"" + variation.permalink + "?" + (this.queryString(item)) + "\">" + variation.product_name + "</a></h5>\n    <ul class='attributes'>\n      " + attributes + "\n    </ul>\n    <div class='quantity-price'>                    \n      <div class='how-many'>\n        <input type='button' class='less' value='-'>\n        <input type=\"text\"   class=\"qty\" id=\"variation_qty_" + variation.id + "\" name=\"name\" value=\"" + item.qty + "\" maxlength=\"2\" />\n        <input type=\"button\" class=\"more\" value=\"+\" >\n        <input type=\"hidden\" name=\"variation_id\" value=\"" + variation.id + "\" />\n      </div>\n      <div class='price'>\n        <div class='amount'>\n          <p class='current-price'><span class=\"x\">x </span>" + (MoneyHelper.currency(variation.sale_price)) + "</p>\n          <p class='old-price'>" + (MoneyHelper.currency(variation.regular_price)) + "</p>\n        </div>\n      </div>\n    </div>\n    <a href=\"javascript:void(0)\" class=\"item_update_qty\"><i class=\"fa fa-refresh\"></i> " + (i18n.t('cart.update')) + "</a>\n    <div class='total-price'>\n      <p class='current-price'>" + (MoneyHelper.currency(item.qty * variation.sale_price)) + "</p>\n      <p class='old-price'>" + (MoneyHelper.currency(item.qty * variation.regular_price)) + "</p>\n    </div>\n  </div>\n</div>");
        }
      }
      if (line_items.length === 0) {
        checkout_button = '';
      } else {
        if ($("div.checkout-container").length === 0) {
          checkout_button = "<a href=\"/checkout\" id=\"checkout-button\" class=\"btn btn-primary\">" + (i18n.t('cart.finish_buy')) + " »</a>";
        } else {
          checkout_button = "<a href=\"/checkout\" class=\"btn btn-primary\">" + (i18n.t('cart.close')) + "</a>";
        }
      }
      template = "<div class=\"panel panel-default\">\n  <div class=\"loading\"></div>\n  <div class=\"panel-heading\">\n    <h4 class=\"panel-title\">" + (i18n.t('cart.line_items')) + " </h4>\n  </div>\n  <div class=\"panel-body\">\n    " + variation_tmp + "\n  </div>\n  <div class=\"panel-footer\">\n    <div class=\"row\">\n      <div class=\"col-xs-5 subtotal\">\n        <h5>Subtotal</h5>\n        <p>R$ 0,00</p>\n      </div>\n      <div class=\"col-xs-7 action-checkout text-right\">\n        " + checkout_button + "\n      </div>\n    </div>\n  <div>\n</div>";
      return template;
    };

    CartTemplates.unavailableVariation = function(variation) {
      var template;
      template = "<div class='modal fade' id='shopping_cart_modal' tabindex='-1' role='dialog'>\n  <div class='modal-dialog' role='document'>\n    <div class='modal-content'>\n      <div class='modal-header'>\n        <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>\n        <h4 class='modal-title' id='myModalLabel'>" + (i18n.t('cart.warning_quantity_unavailable')) + "</h4>\n      </div>\n      <div class='modal-body'>\n        <div class=\"row\">\n          <div class=\"details col-xs-12\">\n            <h5 class=\"title\">" + (i18n.t('cart.product_qty_unavailable', {
        product: variation.product_name
      })) + "</h5>\n          </div>\n        </div>\n        <div class=\"row action-next\">\n          <div class=\"col-xs-9\">\n            <div class=\"keep-shopping\"><a href=\"/\" data-dismiss=\"modal\">« " + (i18n.t('cart.continue_shop')) + "</a></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>  ";
      return template;
    };

    CartTemplates.alertModal = function(template) {
      return template = "<div class='modal fade' id='shopping_cart_modal' tabindex='-1' role='dialog'>\n  <div class='modal-dialog' role='document'>\n    <div class='modal-content'>\n      " + template + "\n      <div class=\"row action-next\">\n        <div class=\"col-xs-9\">\n          <div class=\"keep-shopping\"><a href=\"/\" data-dismiss=\"modal\">« " + (i18n.t('cart.continue_shop')) + "</a></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
    };

    CartTemplates.confirmModal = function(template) {
      return template = "<div class='modal fade' id='shopping_cart_modal' tabindex='-1' role='dialog'>\n  <div class='modal-dialog' role='document'>\n    <div class='modal-content'>\n      " + template + "\n      <div class=\"row action-next\">\n        <div class=\"col-xs-9 col-xs-offset-3\">\n            <a href=\"#\" class=\"btn btn-primary\" data-dismiss=\"modal\">" + (i18n.t('cart.cancel')) + "</a>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>";
    };

    CartTemplates.reviewCartItems = function(options) {
      var template;
      template = "<div class='modal-header'>\n  <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>\n  <h4 class='modal-title' id='myModalLabel'>" + (i18n.t('cart.warning_review_cart')) + "</h4>\n</div>\n<div class='modal-body'>\n  <div class=\"row\">\n    <div class=\"details col-xs-12\">";
      if (options.unavailable) {
        template += "\"<h5 class=\"title\">" + (i18n.t('cart.product_unavailable')) + "</h5>";
      } else {
        template += "\"<h5 class=\"title\">" + (i18n.t('cart.product_stock_changed')) + "</h5>";
      }
      template += "</div>\n</div>";
      return template;
    };

    CartTemplates.queryString = function(item) {
      var i, len, option, queryString, ref;
      queryString = '';
      ref = item.variation.options;
      for (i = 0, len = ref.length; i < len; i++) {
        option = ref[i];
        queryString = queryString + ((_.keys(option)[0]) + "=" + (_.values(option)[0]));
        if (option !== _.last(item.variation.options)) {
          queryString = queryString + "&";
        }
      }
      return queryString;
    };

    CartTemplates.emptyCart = function() {
      var empty;
      return empty = "<div class=\"empty-cart\">\n  <div>" + (i18n.t('cart.empty_cart')) + "</div>\n</div>";
    };

    return CartTemplates;

  })();

}).call(this);

(function() {
  this.CartHelper = (function() {
    function CartHelper() {}

    CartHelper.plusOneCounterItems = function() {
      var numberOfItems;
      _.plural($.t('cart.item.one'), $.t('cart.item.others'));
      numberOfItems = /\d+/.exec($("[data-role='cart-counter'] a").text());
      if (numberOfItems === null) {
        numberOfItems = 1;
      } else {
        numberOfItems = parseInt(numberOfItems) + 1;
      }
      return $("[data-role='cart-counter'] a").text("" + (_($.t('cart.item.one')).pluralize(numberOfItems, true)));
    };

    CartHelper.minusOneCounterItems = function() {
      var numberOfItems;
      _.plural($.t('cart.item.one'), $.t('cart.item.others'));
      numberOfItems = /\d+/.exec($("[data-role='cart-counter'] a").text());
      numberOfItems = parseInt(numberOfItems) - 1;
      if (numberOfItems === 0) {
        return $("[data-role='cart-counter'] a").text($.t('cart.empty'));
      } else {
        return $("[data-role='cart-counter'] a").text("" + (_($.t('cart.item.one')).pluralize(numberOfItems, true)));
      }
    };

    CartHelper.updateCounterItems = function(numberOfItems) {
      _.plural($.t('cart.item.one'), $.t('cart.item.others'));
      if (numberOfItems === 0) {
        return $("[data-role='cart-counter'] a").text($.t('cart.empty'));
      } else {
        return $("[data-role='cart-counter'] a").text("" + (_($.t('cart.item.one')).pluralize(numberOfItems, true)));
      }
    };

    CartHelper.minusOneItemInCart = function(element) {
      var quantity;
      quantity = parseInt($(element).siblings("input[type='text'][class='qty']").val());
      if (quantity > 0) {
        quantity = quantity - 1;
        $(element).siblings("input[type='text'][class='qty']").val(quantity);
        return CartHelper.updatePriceByQuantity(element, quantity);
      }
    };

    CartHelper.plusOneItemInCart = function(element) {
      var quantity;
      quantity = parseInt($(element).siblings("input[type='text'][class='qty']").val());
      quantity = quantity + 1;
      $(element).siblings("input[type='text'][class='qty']").val(quantity);
      return CartHelper.updatePriceByQuantity(element, quantity);
    };

    CartHelper.updatePriceByQuantity = function(element, qty) {
      var current_price, old_price, quantity_price, total_prices;
      quantity_price = $(element).parent().parent();
      current_price = $(quantity_price).find('p.current-price');
      if (current_price.length === 0) {
        current_price = $(quantity_price).closest('tr').find('td.unit-price').find('p.current-price');
      }
      current_price = MoneyHelper.value(current_price.text());
      old_price = $(quantity_price).find('p.old-price');
      if (old_price.length === 0) {
        old_price = $(quantity_price).closest('tr').find('td.unit-price').find('p.old-price');
      }
      old_price = MoneyHelper.value(old_price.text());
      total_prices = $(element).parent().parent().siblings('.total-price');
      if (total_prices.length === 0) {
        total_prices = $(quantity_price).closest('tr').find('td.unit-subtotal');
      }
      if (current_price) {
        $(total_prices).find('p.current-price').text(MoneyHelper.currency(qty * current_price));
      }
      if (old_price) {
        return $(total_prices).find('p.old-price').text(MoneyHelper.currency(qty * old_price));
      }
    };

    CartHelper.updateSubTotal = function() {
      this.calculateSubTotalFor($("#shopping-cart~div#cart-content"));
      this.calculateSubTotalFor($("#shopping-cart-responsive~div#cart-content"));
      return this.calculateSubTotalFor($("#shopping_cart_modal").find("div.modal-body"));
    };

    CartHelper.calculateSubTotalFor = function(cart) {
      var cart_content, prices, sub_total, sum;
      cart_content = $(cart);
      if (cart_content.length === 0) {
        cart_content = $(cart).find('#product-grid > tbody > tr');
      }
      prices = _.map($(cart_content).find("div.total-price p.current-price"), function(elem) {
        return $(elem).text();
      });
      sum = _.reduce(prices, (function(memo, num) {
        return memo + MoneyHelper.value(num);
      }), 0);
      sub_total = $(cart_content).find("div.subtotal p");
      if (sub_total.length === 0) {
        sub_total = $(cart).find('div#subtotal > div.amount p');
      }
      return $(sub_total).text(MoneyHelper.currency(sum));
    };

    CartHelper.anyLineItemNotAvailable = function(line_items, options) {
      var isNotAvailable;
      if (options == null) {
        options = {
          confirm: false
        };
      }
      isNotAvailable = function(line_item) {
        return !line_item.variation.is_virtual && line_item.variation.qty_in_stock === 0;
      };
      if (!_.isEmpty(line_items) && _.any(line_items, isNotAvailable)) {
        if (options.confirm) {
          CartHelper.confirmReviewCart({
            unavailable: true
          });
        } else {
          CartHelper.alertReviewCart({
            unavailable: true
          });
        }
        return true;
      }
      return false;
    };

    CartHelper.anyLineItemLowStock = function(line_items, options) {
      var isLowStock;
      if (options == null) {
        options = {
          confirm: false
        };
      }
      isLowStock = function(line_item) {
        return !line_item.variation.is_virtual && line_item.qty > line_item.variation.qty_in_stock;
      };
      if (!_.isEmpty(line_items) && _.any(line_items, isLowStock)) {
        if (options.confirm) {
          CartHelper.confirmReviewCart();
        } else {
          CartHelper.alertReviewCart();
        }
        return true;
      }
      return false;
    };

    CartHelper.openCartModal = function(template) {
      return $(template).modal();
    };

    CartHelper.showCart = function(template) {
      $("div#cart-content").remove();
      $("<div id='cart-content' class='cart-container dropdown-menu pull-right' aria-labelledby='shopping-cart'>").insertAfter($("div#shopping-cart"));
      $("<div id='cart-content' class='cart-container dropdown-menu pull-right' aria-labelledby='shopping-cart'>").insertAfter($("div#shopping-cart-responsive"));
      $("div#cart-content").html(template);
      return $('div#cart-content').click(function(e) {
        return e.stopPropagation();
      });
    };

    CartHelper.removeCartItem = function(variation) {
      var item;
      item = $("a[data-variation-id='" + variation + "']").closest('div.item');
      if (item.length === 0) {
        item = $("a[data-variation-id='" + variation + "']").closest('tr');
      }
      return $(item).slideUp(500, function() {
        $(item).remove();
        if ($("div#cart-content div.panel-body").children().length === 0) {
          $("div#cart-content div.panel-body").html(CartTemplates.emptyCart());
          $("div#cart-content div.panel-footer #checkout-button").remove();
        }
        return CartHelper.updateSubTotal();
      });
    };

    CartHelper.emptyCartPage = function() {
      $("div.cart-is-empty").toggleClass('yes');
      $("div#subtotal").hide();
      $("#no-more-tables").empty();
      return $("#no-more-tables").html(CartTemplates.emptyCart());
    };

    CartHelper.alertReviewCart = function(options) {
      if (options == null) {
        options = {
          unavailable: false
        };
      }
      return $(CartTemplates.alertModal(CartTemplates.reviewCartItems(options))).modal().on('hidden.bs.modal', function() {
        CartHelper.alertCartItems();
        return $("#shopping_cart_modal").remove();
      });
    };

    CartHelper.confirmReviewCart = function(options) {
      if (options == null) {
        options = {
          unavailable: false
        };
      }
      return $(CartTemplates.confirmModal(CartTemplates.reviewCartItems(options))).modal().on('hidden.bs.modal', function() {
        CartHelper.alertCartItems();
        return $("#shopping_cart_modal").remove();
      });
    };

    CartHelper.alertCartItems = function() {
      return $("#cart-items").effect('shake');
    };

    CartHelper.clickAlreadyAttached = function(selector) {
      var ev, isResponsiveLink;
      ev = $._data(document, 'events');
      isResponsiveLink = function(elem) {
        return elem.selector === selector;
      };
      return _.any(ev.click, isResponsiveLink);
    };

    return CartHelper;

  })();

}).call(this);

(function() {
  this.MoneyHelper = (function() {
    function MoneyHelper() {}

    MoneyHelper.currency = function(value) {
      return accounting.formatMoney(value);
    };

    MoneyHelper.value = function(currency) {
      return accounting.unformat(currency, i18n.t('currency.decimal'));
    };

    return MoneyHelper;

  })();

}).call(this);

(function() {
  this.SelectVariationHelper = (function() {
    function SelectVariationHelper() {}

    SelectVariationHelper.updatePrice = function(element, price) {
      if (price !== null) {
        return $(element).text(price);
      }
    };

    SelectVariationHelper.currentURL = function() {
      return document.URL;
    };

    SelectVariationHelper.addParameterToURL = function(param, value) {
      var qstring, url, val;
      url = decodeURI(this.currentURL());
      val = new RegExp('(\\?|\\&)' + param + '=.*?(?=(&|$))');
      qstring = /\?.+$/;
      if (val.test(url)) {
        url = url.replace(val, '$1' + param + '=' + value);
      } else if (qstring.test(url)) {
        url = url + '&' + param + '=' + value;
      } else {
        url = url + '?' + param + '=' + value;
      }
      return window.history.replaceState(url, "Title", url);
    };

    SelectVariationHelper.getURLParameters = function() {
      var hash, i, len, p, param, params, queryString;
      queryString = window.location.search.substr(window.location.search.indexOf("?") + 1);
      params = decodeURI(queryString).split("&");
      hash = {};
      for (i = 0, len = params.length; i < len; i++) {
        param = params[i];
        p = param.split('=');
        if (p.length === 2) {
          hash[p[0]] = p[1];
        }
      }
      return hash;
    };

    SelectVariationHelper.enableAllOptionButtons = function() {
      var radio_buttons;
      radio_buttons = $("input[data-role='variation']:not([disabled=true])");
      radio_buttons.attr('disabled', false);
      return radio_buttons.closest('li').removeClass('unavailable').removeAttr('title');
    };

    SelectVariationHelper.disableOptionButton = function(button) {
      $(button).attr('disabled', true).prop('checked', false);
      return $(button).closest('li').removeClass('active').addClass('unavailable').attr('title', 'Indisponível');
    };

    SelectVariationHelper.carouselIsDefined = function() {
      return $("div#image-big").length !== 0 && $('div#thumb-nav').length !== 0;
    };

    SelectVariationHelper.updateImageCarousel = function(variations) {
      var hugeVideo, huges, i, image, images, len, thumbVideo, thumbs, variation;
      if (this.carouselIsDefined()) {
        if (variations.length === 1) {
          variation = variations[0];
          images = variation.variation_images;
          $('div#image-big').hide().empty();
          $('div#thumb-nav').hide().empty();
          huges = [];
          thumbs = [];
          if (!_.isEmpty($("div[data-huge='video']"))) {
            hugeVideo = "div[data-huge='video']";
            thumbVideo = "div[data-thumb='video']";
            huges.push($('div#huge-placeholder').find(hugeVideo).clone());
            thumbs.push($('div#thumb-placeholder').find(thumbVideo).clone());
          }
          for (i = 0, len = images.length; i < len; i++) {
            image = images[i];
            huges.push($('div#huge-placeholder').find("div[data-huge='variation_" + image + "']").clone());
            thumbs.push($('div#thumb-placeholder').find("div[data-thumb='variation_" + image + "']").clone());
          }
          $("div#image-big").append(huges);
          $("div#thumb-nav").append(thumbs);
          $('.slide-full').data('owlCarousel').reinit();
          return $('.slide-thumb').data('owlCarousel').reinit();
        }
      }
    };

    return SelectVariationHelper;

  })();

}).call(this);

(function() {
  this.CartController = (function() {
    function CartController() {}

    CartController.addToCart = function() {
      var data, form, url;
      form = $("form[id='add_to_cart']");
      data = $(form).serialize();
      url = '/cart.json';
      return $.ajax(url, {
        dataType: 'json',
        method: 'post',
        async: true,
        data: data,
        success: function(data, status, jqXHR) {
          CartHelper.plusOneCounterItems();
          return CartHelper.openCartModal(CartTemplates.selectedVariation(data));
        },
        error: function(jqXHR, textStatus, errorThrow) {
          return console.log(errorThrow);
        }
      });
    };

    CartController.showCart = function() {
      var data, form, url;
      form = $("form[id='add_to_cart']");
      data = $(form).serialize();
      url = '/cart.json';
      return $.ajax(url, {
        dataType: 'json',
        method: 'get',
        async: true,
        data: data,
        success: function(response, status, jqXHR) {
          var cart;
          CartHelper.updateCounterItems(response.number_of_items);
          CartHelper.showCart(CartTemplates.cartItems(response.line_items));
          CartHelper.updateSubTotal();
          cart = new CartHandler();
          cart.clickOnRemoveCartItem();
          cart.onScrollCart();
          cart.onlyNumbers();
          cart.onChangeQuantity();
          cart.onClickMinus();
          return cart.onClickPlus();
        }
      });
    };

    CartController.showEditCart = function() {
      var data, token, url;
      token = $("input[type='hidden'][name='authenticity_token']").val();
      if (!token) {
        token = $("meta[name='csrf-token']").attr('content');
      }
      data = {
        authenticity_token: token
      };
      url = '/cart.json';
      return $.ajax(url, {
        dataType: 'json',
        method: 'get',
        async: true,
        data: data,
        success: function(response, status, jqXHR) {
          return CartHelper.openCartModal(CartTemplates.editCartItems(response.line_items)).on('shown.bs.modal', function() {
            var cart;
            CartHelper.updateSubTotal();
            cart = new CartHandler();
            cart.clickOnRemoveCartItem();
            cart.onScrollCart();
            cart.onlyNumbers();
            cart.onChangeQuantity();
            cart.onClickMinus();
            return cart.onClickPlus();
          }).on('hide.bs.modal', function() {
            return CartController.updateSummaryCart();
          }).on('hidden.bs.modal', function() {
            var handler;
            CartHelper.alertCartItems();
            $("#shopping_cart_modal").remove();
            $("#edit-cart").removeAttr('disabled');
            handler = new CartHandler();
            return handler.clickResponsiveCartOnCheckout();
          });
        }
      });
    };

    CartController.updateCartCounter = function() {
      var data, form, url;
      form = $("form[id='add_to_cart']");
      if (form) {
        data = $(form).serialize();
        url = '/cart.json';
        return $.ajax(url, {
          dataType: 'json',
          method: 'get',
          async: true,
          data: data,
          success: function(response, status, jqXHR) {
            return CartHelper.updateCounterItems(response.number_of_items);
          }
        });
      }
    };

    CartController.removeCartItem = function(variation_id) {
      var data, token, url;
      token = $("input[type='hidden'][name='authenticity_token']").val();
      if (!token) {
        token = $("meta[name='csrf-token']").attr('content');
      }
      data = {
        variation: variation_id,
        authenticity_token: token
      };
      $("div.panel div.loading").toggleClass('overlay');
      url = "/cart.json";
      return $.ajax(url, {
        dataType: 'json',
        method: 'delete',
        async: true,
        data: $.param(data),
        success: function(response, status, jqXHR) {
          CartHelper.removeCartItem(variation_id);
          CartHelper.updateCounterItems(response.number_of_items);
          return $("div.panel div.loading").toggleClass('overlay');
        }
      });
    };

    CartController.updateVariationQuantityInCart = function(variation_id, quantity) {
      var data, token, url;
      token = $("input[type='hidden'][name='authenticity_token']").val();
      if (!token) {
        token = $("meta[name='csrf-token']").attr('content');
      }
      data = {
        authenticity_token: token,
        variation: variation_id,
        quantity: quantity
      };
      $("div.panel div.loading").toggleClass('overlay');
      url = "/cart.json";
      return $.ajax(url, {
        dataType: 'json',
        method: 'put',
        async: true,
        data: $.param(data),
        success: function(response, status, jqXHR) {
          return $("div.panel div.loading").toggleClass('overlay');
        }
      });
    };

    CartController.checkVariationAvailableInStock = function(variation_id, quantity) {
      var data, stockStatus, token, url;
      stockStatus = {
        available: true
      };
      token = $("input[type='hidden'][name='authenticity_token']").val();
      if (!token) {
        token = $("meta[name='csrf-token']").attr('content');
      }
      data = {
        authenticity_token: token,
        variation: variation_id,
        quantity: quantity
      };
      $("div.panel div.loading").toggleClass('overlay');
      url = "/variation.json";
      $.ajax(url, {
        dataType: 'json',
        method: 'get',
        async: false,
        data: $.param(data),
        success: function(response, status, jqXHR) {
          if (!response.is_virtual && response.qty_in_stock < quantity) {
            CartHelper.openCartModal(CartTemplates.unavailableVariation(response));
            stockStatus.available = false;
            stockStatus.maxQtyAvailable = response.qty_in_stock;
          }
        },
        complete: function(jqXHR, status) {
          $("div.panel div.loading").toggleClass('overlay');
        }
      });
      return stockStatus;
    };

    CartController.checkCartItemsInStock = function(options) {
      var data, needReviewCart, token, url;
      needReviewCart = false;
      token = $("input[type='hidden'][name='authenticity_token']").val();
      if (!token) {
        token = $("meta[name='csrf-token']").attr('content');
      }
      data = {
        authenticity_token: token
      };
      url = '/cart.json';
      $.ajax(url, {
        dataType: 'json',
        method: 'get',
        async: false,
        data: data,
        success: function(response, status, jqXHR) {
          var line_items;
          line_items = response.line_items;
          if (CartHelper.anyLineItemNotAvailable(line_items, options)) {
            return needReviewCart = true;
          } else if (CartHelper.anyLineItemLowStock(line_items, options)) {
            return needReviewCart = true;
          }
        }
      });
      return needReviewCart;
    };

    CartController.updateSummaryCart = function() {
      var data, token, url;
      token = $("input[type='hidden'][name='authenticity_token']").val();
      if (!token) {
        token = $("meta[name='csrf-token']").attr('content');
      }
      data = {
        authenticity_token: token
      };
      url = '/update_summary_cart.json';
      return $.ajax(url, {
        dataType: 'script',
        method: 'post',
        async: true,
        data: data,
        success: function(response, status, jqXHR) {
          var handler;
          handler = new CartHandler();
          return handler.clickOnEditCart();
        }
      });
    };

    return CartController;

  })();

}).call(this);

(function() {
  this.SelectVariationController = (function() {
    function SelectVariationController() {}

    SelectVariationController.prototype.updateSalesPrice = function(variations) {
      if (variations.length === 1) {
        return SelectVariationHelper.updatePrice("div[data-role='sale-price']", MoneyHelper.currency(variations[0].sale_price));
      }
    };

    SelectVariationController.prototype.updateRegularPrice = function(variations) {
      if (variations.length === 1) {
        return SelectVariationHelper.updatePrice("div[data-role='regular-price']", MoneyHelper.currency(variations[0].regular_price));
      }
    };

    SelectVariationController.prototype.updateHistoryState = function(element) {
      return SelectVariationHelper.addParameterToURL($(element).attr('name'), $(element).val());
    };

    SelectVariationController.prototype.selectOptionsOnLoad = function() {
      var first_options, i, len, option, options, parameters, results;
      parameters = SelectVariationHelper.getURLParameters();
      if (_.isEmpty(parameters)) {
        first_options = $("ul.feature-options").find("input[data-role='variation']:first");
        results = [];
        for (i = 0, len = first_options.length; i < len; i++) {
          option = first_options[i];
          $(option).attr('checked', true);
          results.push($(option).click());
        }
        return results;
      } else {
        options = $("input[data-role='variation']");
        return options.each(function(index, option) {
          var name, value;
          name = $(option).attr('name');
          value = $(option).attr('value');
          if (name in parameters && parameters[name] === value) {
            $(option).attr('checked', true);
            return $(option).click();
          }
        });
      }
    };

    SelectVariationController.prototype.updateImageCarousel = function(variations) {
      return SelectVariationHelper.updateImageCarousel(variations);
    };

    SelectVariationController.prototype.updateSelectedVariation = function(variations) {
      if (variations.length === 1) {
        return $("input[type='hidden'][name='variation_selected']").val(variations[0].id);
      }
    };

    SelectVariationController.prototype.toggleBuyButton = function(variations) {
      if (variations.length === 1) {
        if (variations[0].is_virtual) {
          return $("#buy-button").text($.t('cart.buy')).attr('disabled', false);
        } else {
          if (variations[0].qty_in_stock === 0) {
            return $("#buy-button").text($.t('cart.unavailable')).attr('disabled', true);
          } else {
            return $("#buy-button").text($.t('cart.buy')).attr('disabled', false);
          }
        }
      }
    };

    return SelectVariationController;

  })();

}).call(this);

(function() {
  this.CartHandler = (function() {
    function CartHandler() {}

    CartHandler.prototype.clickOnCart = function() {
      $("#shopping-cart-responsive").children().on('click', function(e) {
        e.preventDefault();
        return CartController.showCart();
      });
      return $('#shopping-cart').children().on('click', function(e) {
        e.preventDefault();
        return CartController.showCart();
      });
    };

    CartHandler.prototype.clickResponsiveCartOnCheckout = function() {
      if (!CartHelper.clickAlreadyAttached('.close-show-cart')) {
        return $(document).on('click', '.close-show-cart', function(e) {
          $(document).off('click', '.close-show-cart');
          return CartController.showEditCart();
        });
      }
    };

    CartHandler.prototype.clickOnEditCart = function() {
      return $('#edit-cart').on('click', function(e) {
        $('#edit-cart').unbind('click');
        $(this).attr('disabled', 'disabled');
        e.preventDefault();
        return CartController.showEditCart();
      });
    };

    CartHandler.prototype.clickOnAddToCart = function() {
      return $('#buy-button').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return CartController.addToCart();
      });
    };

    CartHandler.prototype.clickOnRemoveCartItem = function() {
      return $("span.remove-item a").on('click', function(e) {
        var variationId;
        e.preventDefault();
        e.stopPropagation();
        if (confirm(i18n.t('cart.confirm_remove'))) {
          variationId = $(e.target).parent().data('variationId');
          CartController.removeCartItem(variationId);
          return CartController.updateCartCounter();
        }
      });
    };

    CartHandler.prototype.onScrollCart = function() {
      return $("#cart-content .panel-body").on('mousewheel DOMMouseScroll', function(e) {
        var scrollTo;
        scrollTo = null;
        if (e.type === 'mousewheel') {
          scrollTo = e.originalEvent.wheelDelta * -1;
        } else if (e.type === 'DOMMouseScroll') {
          scrollTo = 40 * e.originalEvent.detail;
        }
        if (scrollTo) {
          e.preventDefault();
          return $(this).scrollTop(scrollTo + $(this).scrollTop());
        }
      });
    };

    CartHandler.prototype.onlyNumbers = function() {
      return $("input[type='text'][class='qty']").keypress(function(e) {
        if (e.which !== 8 && e.which !== 0 && (e.which < 48 || e.which > 57)) {
          return false;
        }
      });
    };

    CartHandler.prototype.onChangeQuantity = function() {
      return $("input[type='text'][class='qty']").on('change', function(e) {
        var quantity, stock, variationId;
        variationId = $(e.target).siblings("input[type='hidden']").val();
        quantity = parseInt($(e.target).val());
        if (_.isNaN(quantity)) {
          return $(e.target).val(e.target.defaultValue);
        } else {
          if (quantity === 0) {
            if (confirm($.t('cart.confirm_remove'))) {
              CartController.removeCartItem(variationId);
              return CartController.updateCartCounter();
            } else {
              return $(e.target).val(e.target.defaultValue);
            }
          } else {
            stock = CartController.checkVariationAvailableInStock(variationId, quantity);
            if (stock.available) {
              CartController.updateVariationQuantityInCart(variationId, quantity);
              CartHelper.updatePriceByQuantity(e.target, quantity);
              CartHelper.updateSubTotal();
              return CartController.updateCartCounter();
            } else {
              CartController.updateVariationQuantityInCart(variationId, stock.maxQtyAvailable);
              CartHelper.updatePriceByQuantity(e.target, stock.maxQtyAvailable);
              CartHelper.updateSubTotal();
              return CartController.updateCartCounter();
            }
          }
        }
      });
    };

    CartHandler.prototype.onClickMinus = function() {
      return $("input[type='button'][class='less']").on('click', function(e) {
        var quantity, variationId;
        variationId = $(e.target).siblings("input[type='hidden']").val();
        quantity = parseInt($(e.target).siblings("input[type='text']").val());
        if (quantity - 1 === 0) {
          if (confirm($.t('cart.confirm_remove'))) {
            CartController.removeCartItem(variationId);
            return CartController.updateCartCounter();
          }
        } else {
          CartController.updateVariationQuantityInCart(variationId, quantity - 1);
          CartHelper.minusOneItemInCart(e.target);
          CartHelper.updateSubTotal();
          return CartController.updateCartCounter();
        }
      });
    };

    CartHandler.prototype.onClickPlus = function() {
      return $("input[type='button'][class='more']").on('click', function(e) {
        var quantity, stock, variationId;
        variationId = $(e.target).siblings("input[type='hidden']").val();
        quantity = $(e.target).siblings("input[type='text']").val();
        stock = CartController.checkVariationAvailableInStock(variationId, parseInt(quantity) + 1);
        if (stock.available) {
          CartController.updateVariationQuantityInCart(variationId, parseInt(quantity) + 1);
          CartHelper.plusOneItemInCart(e.target);
          CartHelper.updateSubTotal();
          return CartController.updateCartCounter();
        } else {
          CartController.updateVariationQuantityInCart(variationId, stock.maxQtyAvailable);
          CartHelper.updatePriceByQuantity(e.target, stock.maxQtyAvailable);
          CartHelper.updateSubTotal();
          return CartController.updateCartCounter();
        }
      });
    };

    CartHandler.prototype.onChangeTable = function() {
      return $("#product-grid").bind("DOMSubtreeModified", function(e) {
        if ($("#product-grid>tbody>tr").length === 0) {
          return CartHelper.emptyCartPage();
        }
      });
    };

    CartHandler.prototype.onFinishCheckout = function() {
      return $(document).on('click', ".btn-make-payment", function(e) {
        e.preventDefault();
        e.stopPropagation();
        return console.log('Click');
      });
    };

    CartHandler.prototype.onCheckoutDocumentReady = function() {
      return $(window).bind('load', function() {
        CartController.checkCartItemsInStock();
        return CartController.updateSummaryCart();
      });
    };

    CartHandler.prototype.onDocumentReady = function() {
      return $(window).bind('load', function() {
        return CartController.updateCartCounter();
      });
    };

    return CartHandler;

  })();

}).call(this);

(function() {
  this.SelectVariationHandler = (function() {
    function SelectVariationHandler() {
      this.onClickVariation();
      this.onDocumentReady();
    }

    SelectVariationHandler.prototype.onClickVariation = function() {
      return $("input[data-role='variation']").on('click keyup', function(event) {
        var action, data, form, request;
        event.stopPropagation();
        form = $(this).closest('form');
        action = ($(form).attr('action')) + ".json";
        data = $(form).serialize();
        request = {
          url: action,
          data: data,
          method: 'get',
          dataType: 'JSON',
          success: function(response) {
            this.controller = new SelectVariationController();
            this.controller.updateSalesPrice(response);
            this.controller.updateRegularPrice(response);
            this.controller.updateImageCarousel(response);
            this.controller.updateSelectedVariation(response);
            this.controller.toggleBuyButton(response);
            return this.controller.updateHistoryState(event.target);
          }
        };
        return $.ajax(request);
      });
    };

    SelectVariationHandler.prototype.onDocumentReady = function() {
      return $(window).bind('load', (function(_this) {
        return function() {
          _this.controller = new SelectVariationController();
          return _this.controller.selectOptionsOnLoad();
        };
      })(this));
    };

    return SelectVariationHandler;

  })();

}).call(this);

(function() {
  this.EbossCart = (function() {
    function EbossCart() {
      var cart;
      new I18n();
      new SelectVariationHandler();
      cart = new CartHandler();
      cart.clickOnCart();
      cart.clickOnAddToCart();
      cart.onDocumentReady();
    }

    return EbossCart;

  })();

  this.EbossCartPage = (function() {
    function EbossCartPage() {
      var cart;
      new I18n();
      cart = new CartHandler();
      cart.clickOnRemoveCartItem();
      cart.onClickMinus();
      cart.onClickPlus();
      cart.onChangeQuantity();
      cart.onChangeTable();
    }

    return EbossCartPage;

  })();

  this.EbossCartCheckout = (function() {
    function EbossCartCheckout() {
      var cart;
      new I18n();
      cart = new CartHandler();
      cart.clickResponsiveCartOnCheckout();
      cart.onCheckoutDocumentReady();
      cart.onFinishCheckout();
      cart.clickOnEditCart();
    }

    return EbossCartCheckout;

  })();

}).call(this);
