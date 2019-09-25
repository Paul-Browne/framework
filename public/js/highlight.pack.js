!function(e){var t="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):t&&(t.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return t.hljs}))}(function(a){function v(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function f(e){return e.nodeName.toLowerCase()}function N(e,t){var r=e&&e.exec(t);return r&&0===r.index}function o(e){return n.test(e)}function l(e){var t,r={},n=Array.prototype.slice.call(arguments,1);for(t in e)r[t]=e[t];return n.forEach(function(e){for(t in e)r[t]=e[t]}),r}function s(e){var a=[];return function e(t,r){for(var n=t.firstChild;n;n=n.nextSibling)3===n.nodeType?r+=n.nodeValue.length:1===n.nodeType&&(a.push({event:"start",offset:r,node:n}),r=e(n,r),f(n).match(/br|hr|img|input/)||a.push({event:"stop",offset:r,node:n}));return r}(e,0),a}function w(i){function o(e){return e&&e.source||e}function s(e,t){return new RegExp(o(e),"m"+(i.cI?"i":"")+(t?"g":""))}!function t(r,e){if(!r.compiled){if(r.compiled=!0,r.k=r.k||r.bK,r.k){function n(r,e){i.cI&&(e=e.toLowerCase()),e.split(" ").forEach(function(e){var t=e.split("|");a[t[0]]=[r,t[1]?Number(t[1]):1]})}var a={};"string"==typeof r.k?n("keyword",r.k):p(r.k).forEach(function(e){n(e,r.k[e])}),r.k=a}r.lR=s(r.l||/\w+/,!0),e&&(r.bK&&(r.b="\\b("+r.bK.split(" ").join("|")+")\\b"),r.b||(r.b=/\B|\b/),r.bR=s(r.b),r.e||r.eW||(r.e=/\B|\b/),r.e&&(r.eR=s(r.e)),r.tE=o(r.e)||"",r.eW&&e.tE&&(r.tE+=(r.e?"|":"")+e.tE)),r.i&&(r.iR=s(r.i)),null==r.r&&(r.r=1),r.c||(r.c=[]),r.c=Array.prototype.concat.apply([],r.c.map(function(e){return function(t){return t.v&&!t.cached_variants&&(t.cached_variants=t.v.map(function(e){return l(t,{v:null},e)})),t.cached_variants||t.eW&&[l(t)]||[t]}("self"===e?r:e)})),r.c.forEach(function(e){t(e,r)}),r.starts&&t(r.starts,e);var c=r.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([r.tE,r.i]).map(o).filter(Boolean);r.t=c.length?s(c.join("|"),!0):{exec:function(){return null}}}}(i)}function y(e,t,c,r){function o(e,t,r,n){var a='<span class="'+(n?"":k.classPrefix);return(a+=e+'">')+t+(r?"":C)}function i(){b+=null!=u.sL?function(){var e="string"==typeof u.sL;if(e&&!R[u.sL])return v(p);var t=e?y(u.sL,p,!0,f[u.sL]):E(p,u.sL.length?u.sL:void 0);return 0<u.r&&(g+=t.r),e&&(f[u.sL]=t.top),o(t.language,t.value,!1,!0)}():function(){var e,t,r,n,a,c,i;if(!u.k)return v(p);for(n="",t=0,u.lR.lastIndex=0,r=u.lR.exec(p);r;)n+=v(p.substring(t,r.index)),a=u,c=r,void 0,i=l.cI?c[0].toLowerCase():c[0],(e=a.k.hasOwnProperty(i)&&a.k[i])?(g+=e[1],n+=o(e[0],v(r[0]))):n+=v(r[0]),t=u.lR.lastIndex,r=u.lR.exec(p);return n+v(p.substr(t))}(),p=""}function s(e){b+=e.cN?o(e.cN,"",!0):"",u=Object.create(e,{parent:{value:u}})}function n(e,t){if(p+=e,null==t)return i(),0;var r=function(e,t){var r,n;for(r=0,n=t.c.length;r<n;r++)if(N(t.c[r].bR,e))return t.c[r]}(t,u);if(r)return r.skip?p+=t:(r.eB&&(p+=t),i(),r.rB||r.eB||(p=t)),s(r),r.rB?0:t.length;var n=function e(t,r){if(N(t.eR,r)){for(;t.endsParent&&t.parent;)t=t.parent;return t}return t.eW?e(t.parent,r):void 0}(u,t);if(n){var a=u;for(a.skip?p+=t:(a.rE||a.eE||(p+=t),i(),a.eE&&(p=t));u.cN&&(b+=C),u.skip||(g+=u.r),(u=u.parent)!==n.parent;);return n.starts&&s(n.starts),a.rE?0:t.length}if(function(e,t){return!c&&N(t.iR,e)}(t,u))throw new Error('Illegal lexeme "'+t+'" for mode "'+(u.cN||"<unnamed>")+'"');return p+=t,t.length||1}var l=M(e);if(!l)throw new Error('Unknown language: "'+e+'"');w(l);var a,u=r||l,f={},b="";for(a=u;a!==l;a=a.parent)a.cN&&(b=o(a.cN,"",!0)+b);var p="",g=0;try{for(var d,h,m=0;u.t.lastIndex=m,d=u.t.exec(t);)h=n(t.substring(m,d.index),d[0]),m=d.index+h;for(n(t.substr(m)),a=u;a.parent;a=a.parent)a.cN&&(b+=C);return{r:g,value:b,language:e,top:u}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{r:0,value:v(t)};throw e}}function E(r,e){e=e||k.languages||p(R);var n={r:0,value:v(r)},a=n;return e.filter(M).forEach(function(e){var t=y(e,r,!1);t.language=e,t.r>a.r&&(a=t),t.r>n.r&&(a=n,n=t)}),a.language&&(n.second_best=a),n}function u(e){return k.tabReplace||k.useBR?e.replace(c,function(e,t){return k.useBR&&"\n"===e?"<br>":k.tabReplace?t.replace(/\t/g,k.tabReplace):""}):e}function t(e){var t,r,n,a,c,i=function(e){var t,r,n,a,c=e.className+" ";if(c+=e.parentNode?e.parentNode.className:"",r=d.exec(c))return M(r[1])?r[1]:"no-highlight";for(t=0,n=(c=c.split(/\s+/)).length;t<n;t++)if(o(a=c[t])||M(a))return a}(e);o(i)||(k.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):t=e,c=t.textContent,n=i?y(i,c,!0):E(c),(r=s(t)).length&&((a=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=n.value,n.value=function(e,t,r){function n(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function a(e){s+="<"+f(e)+b.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+v(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function c(e){s+="</"+f(e)+">"}function i(e){("start"===e.event?a:c)(e.node)}for(var o=0,s="",l=[];e.length||t.length;){var u=n();if(s+=v(r.substring(o,u[0].offset)),o=u[0].offset,u===e){for(l.reverse().forEach(c);i(u.splice(0,1)[0]),(u=n())===e&&u.length&&u[0].offset===o;);l.reverse().forEach(a)}else"start"===u[0].event?l.push(u[0].node):l.pop(),i(u.splice(0,1)[0])}return s+v(r.substr(o))}(r,s(a),c)),n.value=u(n.value),e.innerHTML=n.value,e.className=function(e,t,r){var n=t?g[t]:r,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(n)&&a.push(n),a.join(" ").trim()}(e.className,i,n.language),e.result={language:n.language,re:n.r},n.second_best&&(e.second_best={language:n.second_best.language,re:n.second_best.r}))}function r(){if(!r.called){r.called=!0;var e=document.querySelectorAll("pre code");b.forEach.call(e,t)}}function M(e){return e=(e||"").toLowerCase(),R[e]||R[g[e]]}var b=[],p=Object.keys,R={},g={},n=/^(no-?highlight|plain|text)$/i,d=/\blang(?:uage)?-([\w-]+)\b/i,c=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,C="</span>",k={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return a.highlight=y,a.highlightAuto=E,a.fixMarkup=u,a.highlightBlock=t,a.configure=function(e){k=l(k,e)},a.initHighlighting=r,a.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",r,!1),addEventListener("load",r,!1)},a.registerLanguage=function(t,e){var r=R[t]=e(a);r.aliases&&r.aliases.forEach(function(e){g[e]=t})},a.listLanguages=function(){return p(R)},a.getLanguage=M,a.inherit=l,a.IR="[a-zA-Z]\\w*",a.UIR="[a-zA-Z_]\\w*",a.NR="\\b\\d+(\\.\\d+)?",a.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",a.BNR="\\b(0b[01]+)",a.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",a.BE={b:"\\\\[\\s\\S]",r:0},a.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[a.BE]},a.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[a.BE]},a.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},a.C=function(e,t,r){var n=a.inherit({cN:"comment",b:e,e:t,c:[]},r||{});return n.c.push(a.PWM),n.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),n},a.CLCM=a.C("//","$"),a.CBCM=a.C("/\\*","\\*/"),a.HCM=a.C("#","$"),a.NM={cN:"number",b:a.NR,r:0},a.CNM={cN:"number",b:a.CNR,r:0},a.BNM={cN:"number",b:a.BNR,r:0},a.CSSNM={cN:"number",b:a.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},a.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[a.BE,{b:/\[/,e:/\]/,r:0,c:[a.BE]}]},a.TM={cN:"title",b:a.IR,r:0},a.UTM={cN:"title",b:a.UIR,r:0},a.METHOD_GUARD={b:"\\.\\s*"+a.UIR,r:0},a}),hljs.registerLanguage("css",function(e){var t={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[e.ASM,e.QSM]}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",i:/:/,c:[{cN:"keyword",b:/\w+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:"selector-tag",b:"[a-zA-Z-][a-zA-Z0-9_-]*",r:0},{b:"{",e:"}",i:/\S/,c:[e.CBCM,t]}]}}),hljs.registerLanguage("http",function(e){var t="HTTP/[0-9\\.]+";return{aliases:["https"],i:"\\S",c:[{b:"^"+t,e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{b:"^[A-Z]+ (.*?) "+t+"$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0},{b:t},{cN:"keyword",b:"[A-Z]+"}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{e:"$",r:0}},{b:"\\n\\n",starts:{sL:[],eW:!0}}]}}),hljs.registerLanguage("javascript",function(e){var t="[A-Za-z$_][0-9A-Za-z$_]*",r={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},n={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},a={cN:"subst",b:"\\$\\{",e:"\\}",k:r,c:[]},c={cN:"string",b:"`",e:"`",c:[e.BE,a]};a.c=[e.ASM,e.QSM,c,n,e.RM];var i=a.c.concat([e.CBCM,e.CLCM]);return{aliases:["js","jsx"],k:r,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,c,e.CLCM,e.CBCM,n,{b:/[{,]\s*/,r:0,c:[{b:t+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:t,r:0}]}]},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+t+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:t},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:r,c:i}]}]},{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:[{b:/<\w+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:t}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:i}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}}),hljs.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)}/}]},r={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]};return{aliases:["sh","zsh"],l:/\b-?[a-z\._]+\b/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"meta",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,r,{cN:"string",b:/'/,e:/'/},t]}}),hljs.registerLanguage("json",function(e){var t={literal:"true false null"},r=[e.QSM,e.CNM],n={e:",",eW:!0,eE:!0,c:r,k:t},a={b:"{",e:"}",c:[{cN:"attr",b:/"/,e:/"/,c:[e.BE],i:"\\n"},e.inherit(n,{b:/:/})],i:"\\S"},c={b:"\\[",e:"\\]",c:[e.inherit(n)],i:"\\S"};return r.splice(r.length,0,a,c),{c:r,k:t,i:"\\S"}}),hljs.initHighlightingOnLoad();