!function(){var t=new XMLHttpRequest;t.onreadystatechange=function(){if(4==t.readyState&&200==t.status){var e=JSON.parse(t.responseText);for(var n in e)(!~n.indexOf("!")&&(document.querySelector(n)||window[n])||~n.indexOf("!")&&0==window[n.slice("1")]||~n.indexOf("!!")&&!window[n.slice("2")])&&e[n].forEach(function(e){var t;if(/\.js($|\?)/.test(e))(t=document.createElement("SCRIPT")).src=e,document.head.appendChild(t);else if(/\.css($|\?)/.test(e))(t=document.createElement("LINK")).rel="stylesheet",t.href=e,document.head.appendChild(t);else if(/\.html($|\?)/.test(e)){var r=n,s=new XMLHttpRequest;s.onreadystatechange=function(){if(4==s.readyState&&200==s.status){document.querySelector(r).outerHTML=s.responseText;for(var e=(new DOMParser).parseFromString(s.responseText,"text/html").querySelectorAll("script"),t=e.length;t--;){var n=document.createElement("SCRIPT");e[t].src?n.src=e[t].src:n.innerHTML=e[t].innerHTML,document.head.appendChild(n)}}},s.open("GET",e,!0),s.send()}})}},t.open("GET","resources.json",!0),t.send()}();