!function(){function n(e,t){var n=document.createElement("BUTTON");n.classList.add("btn"),n.innerHTML=e.children[e.selectedIndex].innerHTML,n.addEventListener("click",function(e){!function(e){console.log(e.target),e.target.parentNode.classList.toggle("js-active")}(e)}),t.appendChild(n)}function d(e,t){console.log(e,t),e.target.parentNode.previousSibling.innerHTML=e.target.innerHTML,t.selectedIndex=e.target.getAttribute("data-index"),e.target.parentNode.parentNode.classList.remove("js-active")}function e(e){var t=document.createElement("DIV");t.classList.add("js-select"),function(e,t){t.parentNode.insertBefore(e,t.nextSibling)}(t,e),n(e,t),function(t,e){var n=document.createElement("DIV");n.classList.add("js-options-container");for(var a=t.children,i=0,r=a.length;i<r;){var c=document.createElement("SPAN");c.setAttribute("data-index",i),c.setAttribute("data-value",a[i].value),c.addEventListener("click",function(e){d(e,t)}),c.innerHTML=a[i].innerHTML,n.appendChild(c),i++}e.appendChild(n)}(e,t)}for(var t=document.querySelectorAll(".js-custom-select"),a=t.length;a--;)e(t[a])}();