!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);r(1),r(2),r(3),r(4)},function(e,t,r){"use strict";var n,i;(i=new XMLHttpRequest).open("GET","https://my-json-server.typicode.com/nikitabutkevich/demo/books",!1),i.send(),200!=i.status?console.log(i.status+": "+i.statusText):n=JSON.parse(i.responseText),n.forEach(function(e){localStorage.setItem("id"+e.id,JSON.stringify(e))}),n.forEach(function(e){var t=document.getElementById("cards"),r=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),o=document.createElement("img"),l=document.createElement("p"),c=document.createElement("p"),a=document.createElement("p"),u=document.createElement("p");r.setAttribute("class","card-item"),r.setAttribute("id","card"+JSON.parse(localStorage.getItem("id"+e.id)).id),r.setAttribute("title",JSON.parse(localStorage.getItem("id"+e.id)).bookTitle),n.setAttribute("class","card-item__image"),i.setAttribute("class","card-item__info"),o.setAttribute("class","card-item__img"),o.setAttribute("src",""+JSON.parse(localStorage.getItem("id"+e.id)).coverURL),o.setAttribute("alt",""+JSON.parse(localStorage.getItem("id"+e.id)).bookTitle),l.setAttribute("class","card-item__info-name"),c.setAttribute("class","card-item__info-genre"),a.setAttribute("class","card-item__info-author"),u.setAttribute("class","card-item__info-publisher"),l.innerHTML=JSON.parse(localStorage.getItem("id"+e.id)).bookTitle,c.innerHTML=JSON.parse(localStorage.getItem("id"+e.id)).genre,a.innerHTML=JSON.parse(localStorage.getItem("id"+e.id)).authorName,u.innerHTML=JSON.parse(localStorage.getItem("id"+e.id)).edition,i.appendChild(l),i.appendChild(c),i.appendChild(a),i.appendChild(u),n.appendChild(o),r.appendChild(n),r.appendChild(i),t.appendChild(r)})},function(e,t,r){"use strict"},function(e,t,r){},function(e,t,r){"use strict";document.querySelector("#filter-author").onchange=function(){var e=document.querySelectorAll(".card-item"),t=$("#filter-author option:selected").text();document.querySelectorAll("#filter-author option")[0].selected?e.forEach(function(e){e.style.display="flex"}):e.forEach(function(e){-1==e.innerText.search(t)?e.style.display="none":e.style.display="flex"})},document.querySelector("#filter-genre").onchange=function(){var e=document.querySelectorAll(".card-item"),t=$("#filter-genre option:selected").text();document.querySelectorAll("#filter-genre option")[0].selected?e.forEach(function(e){e.style.display="flex"}):e.forEach(function(e){-1==e.innerText.search(t)?e.style.display="none":e.style.display="flex"})},document.querySelector("#filter-publisher").onchange=function(){var e=document.querySelectorAll(".card-item"),t=$("#filter-publisher option:selected").text();document.querySelectorAll("#filter-publisher option")[0].selected?e.forEach(function(e){e.style.display="flex"}):e.forEach(function(e){-1==e.innerText.search(t)?e.style.display="none":e.style.display="flex"})},document.querySelector("#input-search").oninput=function(){var e=this.value.trim(),t=document.querySelectorAll(".card-item");""!=e?t.forEach(function(t){-1==t.innerText.search(e)?t.style.display="none":t.style.display="flex"}):t.forEach(function(e){e.style.display="flex"})}}]);