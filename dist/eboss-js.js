/*!
 * accounting.js v0.3.2, copyright 2011 Joss Crowcroft, MIT license, http://josscrowcroft.github.com/accounting.js
 */
(function(p,z){function q(a){return!!(""===a||a&&a.charCodeAt&&a.substr)}function m(a){return u?u(a):"[object Array]"===v.call(a)}function r(a){return"[object Object]"===v.call(a)}function s(a,b){var d,a=a||{},b=b||{};for(d in b)b.hasOwnProperty(d)&&null==a[d]&&(a[d]=b[d]);return a}function j(a,b,d){var c=[],e,h;if(!a)return c;if(w&&a.map===w)return a.map(b,d);for(e=0,h=a.length;e<h;e++)c[e]=b.call(d,a[e],e,a);return c}function n(a,b){a=Math.round(Math.abs(a));return isNaN(a)?b:a}function x(a){var b=c.settings.currency.format;"function"===typeof a&&(a=a());return q(a)&&a.match("%v")?{pos:a,neg:a.replace("-","").replace("%v","-%v"),zero:a}:!a||!a.pos||!a.pos.match("%v")?!q(b)?b:c.settings.currency.format={pos:b,neg:b.replace("%v","-%v"),zero:b}:a}var c={version:"0.3.2",settings:{currency:{symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0,grouping:3,thousand:",",decimal:"."}}},w=Array.prototype.map,u=Array.isArray,v=Object.prototype.toString,o=c.unformat=c.parse=function(a,b){if(m(a))return j(a,function(a){return o(a,b)});a=a||0;if("number"===typeof a)return a;var b=b||".",c=RegExp("[^0-9-"+b+"]",["g"]),c=parseFloat((""+a).replace(/\((.*)\)/,"-$1").replace(c,"").replace(b,"."));return!isNaN(c)?c:0},y=c.toFixed=function(a,b){var b=n(b,c.settings.number.precision),d=Math.pow(10,b);return(Math.round(c.unformat(a)*d)/d).toFixed(b)},t=c.formatNumber=function(a,b,d,i){if(m(a))return j(a,function(a){return t(a,b,d,i)});var a=o(a),e=s(r(b)?b:{precision:b,thousand:d,decimal:i},c.settings.number),h=n(e.precision),f=0>a?"-":"",g=parseInt(y(Math.abs(a||0),h),10)+"",l=3<g.length?g.length%3:0;return f+(l?g.substr(0,l)+e.thousand:"")+g.substr(l).replace(/(\d{3})(?=\d)/g,"$1"+e.thousand)+(h?e.decimal+y(Math.abs(a),h).split(".")[1]:"")},A=c.formatMoney=function(a,b,d,i,e,h){if(m(a))return j(a,function(a){return A(a,b,d,i,e,h)});var a=o(a),f=s(r(b)?b:{symbol:b,precision:d,thousand:i,decimal:e,format:h},c.settings.currency),g=x(f.format);return(0<a?g.pos:0>a?g.neg:g.zero).replace("%s",f.symbol).replace("%v",t(Math.abs(a),n(f.precision),f.thousand,f.decimal))};c.formatColumn=function(a,b,d,i,e,h){if(!a)return[];var f=s(r(b)?b:{symbol:b,precision:d,thousand:i,decimal:e,format:h},c.settings.currency),g=x(f.format),l=g.pos.indexOf("%s")<g.pos.indexOf("%v")?!0:!1,k=0,a=j(a,function(a){if(m(a))return c.formatColumn(a,f);a=o(a);a=(0<a?g.pos:0>a?g.neg:g.zero).replace("%s",f.symbol).replace("%v",t(Math.abs(a),n(f.precision),f.thousand,f.decimal));if(a.length>k)k=a.length;return a});return j(a,function(a){return q(a)&&a.length<k?l?a.replace(f.symbol,f.symbol+Array(k-a.length+1).join(" ")):Array(k-a.length+1).join(" ")+a:a})};if("undefined"!==typeof exports){if("undefined"!==typeof module&&module.exports)exports=module.exports=c;exports.accounting=c}else"function"===typeof define&&define.amd?define([],function(){return c}):(c.noConflict=function(a){return function(){p.accounting=a;c.noConflict=z;return c}}(p.accounting),p.accounting=c)})(this);
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
      template = "<div class='modal fade' id='shopping_cart_modal' tabindex='-1' role='dialog'>\n  <div class='modal-dialog' role='document'>\n    <div class='modal-content'>\n      <div class='modal-header'>\n        <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>\n        <h4 class='modal-title' id='myModalLabel'>Item adicionado ao carrinho de compras!</h4>\n      </div>\n      <div class='modal-body'>\n        <div class=\"row\">\n          <div class=\"thumb col-xs-3\">\n            <img src='" + variation.thumb_url + "' class=\"img-responsive\">   \n          </div>\n          <div class=\"details col-xs-9\">\n            <h5 class=\"title\">" + variation.product_name + "</h5>\n            <div class=\"price-now\">" + (MoneyHelper.currency(variation.sale_price)) + "</div>\n            <div class=\"price-old\">" + (MoneyHelper.currency(variation.regular_price)) + "</div>\n            <ul class=\"attributes\">\n              " + attributes + "\n            </ul>\n          </div>\n        </div>\n        <div class=\"row action-next\">\n          <div class=\"col-xs-9 col-xs-offset-3\">\n            <a class=\"btn btn-primary checkout\">finalizar compra »</a>\n            <div class=\"keep-shopping\"><a href=\"/checkout\" data-dismiss=\"modal\">« continuar navegando</a></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>  ";
      return template;
    };

    CartTemplates.cartItems = function(line_items) {
      var attributes, i, item, j, len, len1, option, ref, template, variation, variation_tmp;
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
          variation_tmp = variation_tmp + (variation_tmp = " <div class='item'>\n  <div class='thumb col-xs-3'>\n    <img src='" + variation.thumb_url + "' alt='" + variation.product_name + "'>\n    <span class='remove-item'><a href='#' data-variation-id='" + variation.id + "'><span class='remove'>remover</span></a></span>\n  </div>\n  <div class='details col-xs-9'>\n    <h5 class='title'><a href=\"" + variation.permalink + "?" + (this.queryString(item)) + "\">" + variation.product_name + "</a></h5>\n    <ul class='attributes'>\n      " + attributes + "\n    </ul>\n    <div class='quantity-price'>                    \n      <div class='how-many'>\n        <input type='button' class='less' value='-'>\n        <input type=\"text\"   class=\"qty\" id=\"variation_qty_" + variation.id + "\" name=\"name\" value=\"" + item.qty + "\" maxlength=\"2\" />\n        <input type=\"button\" class=\"more\" value=\"+\" >\n        <input type=\"hidden\" name=\"variation_id\" value=\"" + variation.id + "\" />\n      </div>\n      <div class='price'>\n        <div class='amount'>\n          <p class='current-price'><span class=\"x\">x </span>" + (MoneyHelper.currency(variation.sale_price)) + "</p>\n          <p class='old-price'>" + (MoneyHelper.currency(variation.regular_price)) + "</p>\n        </div>\n      </div>\n    </div>\n    <a href=\"javascript:void(0)\" class=\"item_update_qty\"><i class=\"fa fa-refresh\"></i> atualizar</a>\n    <div class='total-price'>\n      <p class='current-price'>" + (MoneyHelper.currency(item.qty * variation.sale_price)) + "</p>\n      <p class='old-price'>" + (MoneyHelper.currency(item.qty * variation.regular_price)) + "</p>\n    </div>\n  </div>\n</div>");
        }
      }
      template = "<div class=\"panel panel-default\">\n  <div class=\"loading\"></div>\n  <div class=\"panel-heading\">\n    <h4 class=\"panel-title\">Itens no meu carrinho de compras: </h4>\n  </div>\n  <div class=\"panel-body\">\n    " + variation_tmp + "\n  </div>\n  <div class=\"panel-footer\">\n    <div class=\"row\">\n      <div class=\"col-xs-5 subtotal\">\n        <h5>Subtotal</h5>\n        <p>R$ 0,00</p>\n      </div>\n      <div class=\"col-xs-7 action-checkout text-right\">\n        <a href=\"/checkout\" id=\"checkout-button\" class=\"btn btn-primary\">finalizar compra »</a>    \n      </div>\n    </div>\n  <div>\n</div>";
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
      return empty = "<div class=\"empty-cart\">\n  <div>O carrinho está vazio.</div>\n</div>";
    };

    return CartTemplates;

  })();

}).call(this);

(function() {
  this.CartHelper = (function() {
    function CartHelper() {}

    CartHelper.plusOneCounterItems = function() {
      var numberOfItems;
      _.plural('item', 'itens');
      numberOfItems = /\d+/.exec($("[data-role='cart-counter'] a").text());
      if (numberOfItems === null) {
        numberOfItems = 1;
      } else {
        numberOfItems = parseInt(numberOfItems) + 1;
      }
      return $("[data-role='cart-counter'] a").text("" + (_('item').pluralize(numberOfItems, true)));
    };

    CartHelper.minusOneCounterItems = function() {
      var numberOfItems;
      _.plural('item', 'itens');
      numberOfItems = /\d+/.exec($("[data-role='cart-counter'] a").text());
      numberOfItems = parseInt(numberOfItems) - 1;
      if (numberOfItems === 0) {
        return $("[data-role='cart-counter'] a").text('vazio');
      } else {
        return $("[data-role='cart-counter'] a").text("" + (_('item').pluralize(numberOfItems, true)));
      }
    };

    CartHelper.updateCounterItems = function(numberOfItems) {
      _.plural('item', 'itens');
      if (numberOfItems === 0) {
        return $("[data-role='cart-counter'] a").text('vazio');
      } else {
        return $("[data-role='cart-counter'] a").text("" + (_('item').pluralize(numberOfItems, true)));
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
      current_price = MoneyHelper.value($(quantity_price).find('p.current-price').text());
      old_price = MoneyHelper.value($(quantity_price).find('p.old-price').text());
      total_prices = $(element).parent().parent().siblings('.total-price');
      $(total_prices).find('p.current-price').text(MoneyHelper.currency(qty * current_price));
      return $(total_prices).find('p.old-price').text(MoneyHelper.currency(qty * old_price));
    };

    CartHelper.updateSubTotal = function() {
      this.calculateSubTotalFor($("#shopping-cart"));
      return this.calculateSubTotalFor($("#shopping-cart-responsive"));
    };

    CartHelper.calculateSubTotalFor = function(cart) {
      var cart_content, prices, sum;
      cart_content = $(cart).siblings("div#cart-content");
      prices = _.map($(cart_content).find("div.total-price p.current-price"), function(elem) {
        return $(elem).text();
      });
      sum = _.reduce(prices, (function(memo, num) {
        return memo + MoneyHelper.value(num);
      }), 0);
      return $(cart_content).find("div.subtotal p").text(MoneyHelper.currency(sum));
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
      return $(item).slideUp(500, function() {
        $(item).remove();
        if ($("div#cart-content div.panel-body").children().length === 0) {
          $("div#cart-content div.panel-body").html(CartTemplates.emptyCart());
        }
        return CartHelper.updateSubTotal();
      });
    };

    return CartHelper;

  })();

}).call(this);

(function() {
  this.MoneyHelper = (function() {
    function MoneyHelper() {}

    accounting.settings = {
      currency: {
        symbol: "R$",
        format: "%s %v",
        decimal: ",",
        thousand: ".",
        precision: 2
      },
      number: {
        precision: 2,
        thousand: ",",
        decimal: "."
      }
    };

    MoneyHelper.currency = function(value) {
      return accounting.formatMoney(value);
    };

    MoneyHelper.value = function(currency) {
      return accounting.unformat(currency, ',');
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

    CartController.updateCartCounter = function() {
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
          return CartHelper.updateCounterItems(response.number_of_items);
        }
      });
    };

    CartController.removeCartItem = function(variation_id) {
      var data, token, url;
      token = $("input[type='hidden'][name='authenticity_token']").val();
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

    SelectVariationController.prototype.toogleOptionButtons = function(buttonClicked, variations) {
      var button, i, len, opt, opt_value, results, variation;
      button = $(buttonClicked);
      SelectVariationHelper.enableAllOptionButtons();
      results = [];
      for (i = 0, len = variations.length; i < len; i++) {
        variation = variations[i];
        if (variation.qty_in_stock === 0 && variation.options.length === 1) {
          opt = _.values(variation.options[0])[0];
          results.push(SelectVariationHelper.disableOptionButton($("input[type='radio'][value='" + opt + "']")));
        } else if (variation.qty_in_stock === 0 && variation.options.length > 1) {
          results.push((function() {
            var j, len1, ref, results1;
            ref = variation.options;
            results1 = [];
            for (j = 0, len1 = ref.length; j < len1; j++) {
              opt = ref[j];
              if (_.values(opt)[0] !== $(button).attr('value')) {
                opt_value = _.values(opt)[0];
                results1.push(SelectVariationHelper.disableOptionButton($("input[type='radio'][value='" + opt_value + "']")));
              } else {
                results1.push(void 0);
              }
            }
            return results1;
          })());
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    SelectVariationController.prototype.updateSelectedVariation = function(variations) {
      if (variations.length === 1) {
        return $("input[type='hidden'][name='variation_selected']").val(variations[0].id);
      }
    };

    SelectVariationController.prototype.toggleBuyButton = function(variations) {
      if (variations.length === 1) {
        if (variations[0].is_virtual) {
          return $("#buy-button").text('comprar').attr('disabled', false);
        } else {
          if (variations[0].qty_in_stock === 0) {
            return $("#buy-button").text('indisponível').attr('disabled', true);
          } else {
            return $("#buy-button").text('comprar').attr('disabled', false);
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
        if (confirm('Tem certeza de que deseja remover este item?')) {
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
        var quantity, variationId;
        variationId = $(e.target).siblings("input[type='hidden']").val();
        quantity = parseInt($(e.target).val());
        if (quantity === 0) {
          if (confirm('Tem certeza de que deseja remover esse item?')) {
            CartController.removeCartItem(variationId);
            return CartController.updateCartCounter();
          } else {
            return $(e.target).val(e.target.defaultValue);
          }
        } else {
          CartController.updateVariationQuantityInCart(variationId, quantity);
          CartHelper.updateSubTotal();
          CartHelper.updatePriceByQuantity(e.target, quantity);
          return CartController.updateCartCounter();
        }
      });
    };

    CartHandler.prototype.onClickMinus = function() {
      return $("input[type='button'][class='less']").on('click', function(e) {
        var quantity, variationId;
        variationId = $(e.target).siblings("input[type='hidden']").val();
        quantity = parseInt($(e.target).siblings("input[type='text']").val());
        if (quantity - 1 === 0) {
          if (confirm('Tem certeza de que deseja remover esse item?')) {
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
        var quantity, variationId;
        variationId = $(e.target).siblings("input[type='hidden']").val();
        quantity = $(e.target).siblings("input[type='text']").val();
        CartController.updateVariationQuantityInCart(variationId, parseInt(quantity) + 1);
        CartHelper.plusOneItemInCart(e.target);
        CartHelper.updateSubTotal();
        return CartController.updateCartCounter();
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
            this.controller.toogleOptionButtons(event.target, response);
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
  this.Eboss = (function() {
    function Eboss() {
      var cart;
      new SelectVariationHandler();
      cart = new CartHandler();
      cart.clickOnCart();
      cart.clickOnAddToCart();
      cart.onDocumentReady();
    }

    return Eboss;

  })();

}).call(this);
