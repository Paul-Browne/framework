!function(){var e,i,n,c={l:1560,t:1280,tp:1e3,m:720,mp:440};function a(t,e,i){var n=e.getAttribute("class-"+t);n&&n.split(" ").forEach(function(t){i?t.indexOf("/")?e.classList.add(t):e.classList.remove(t.slice(1)):~t.indexOf("/")||e.classList.remove(t)})}function u(e){var i="class-i";e.getAttribute(i)?e.getAttribute(i).split(" ").forEach(function(t){e.classList.add(t)}):e.classList.forEach(function(t){~t.indexOf("js-")||e.setAttribute(i,((e.getAttribute(i)||"")+" "+t).trim())}),e.getAttribute(i).length||e.removeAttribute(i)}e=function(){!function(){for(var t,e,i=document.querySelectorAll("body [class]"),n=i.length;n--;){u(i[n]);for(var s=Object.keys(c),r=0,o=s.length;r<o;)t=s[r],e=i[n],window.innerWidth<c[t]?a(t,e,!0):a(t,e),r++}}()},n=[window.innerWidth],window.addEventListener("resize",function(){var t=n.length;n.push(window.innerWidth),n[t]!==n[t-1]&&(clearTimeout(i),i=setTimeout(e,150))}),e()}();