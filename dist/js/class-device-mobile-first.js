!function(){var e,i,n,o={"mobile-landscape":440,tablet:720,"tablet-landscape":1e3,laptop:1280,desktop:1560};function c(t,e,i){var n=e.getAttribute("class-"+t);n&&n.split(" ").forEach(function(t){i?t.indexOf("/")?e.classList.add(t):e.classList.remove(t.slice(1)):~t.indexOf("/")||e.classList.remove(t)})}function l(e){var i="class-initial";e.getAttribute(i)?e.getAttribute(i).split(" ").forEach(function(t){e.classList.add(t)}):e.classList.forEach(function(t){~t.indexOf("js-")||e.setAttribute(i,((e.getAttribute(i)||"")+" "+t).trim())}),e.getAttribute(i).length||e.removeAttribute(i)}e=function(){!function(){for(var t,e,i=document.querySelectorAll("body [class]"),n=i.length;n--;){l(i[n]);for(var s=Object.keys(o),r=0,a=s.length;r<a;)t=s[r],e=i[n],window.innerWidth>=o[t]?c(t,e,!0):c(t,e),r++}}()},n=[window.innerWidth],window.addEventListener("resize",function(){var t=n.length;n.push(window.innerWidth),n[t]!==n[t-1]&&(clearTimeout(i),i=setTimeout(e,150))}),e()}();