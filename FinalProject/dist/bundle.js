!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=class{};var i=class{fillInfoToMyPage(e){var t=document.getElementById("user-page-name"),n=document.getElementById("user-page-photo"),o=document.getElementById("user-page-online"),i=document.getElementById("user-page-bdate"),a=document.getElementById("user-page-friends"),r=document.getElementById("user-photo"),s=document.getElementById("user-page-video"),d=document.getElementById("user-button-send-post");document.getElementById("user-page__info-details__blocks-friends").setAttribute("name",e.id),t.innerText=e.first_name+" "+e.last_name,n.setAttribute("src",e.photo_200_orig),o.innerText=this.userOnline(e.online),i.innerText=e.bdate,a.innerText=e.counters.friends,r.innerText=e.counters.photos,s.innerText=e.counters.videos,d.setAttribute("name",e.id)}writeListFriends(e){$(".list-friend__item").remove(),e.forEach(e=>{var t=document.getElementById("list-friends"),n=document.createElement("div"),o=document.createElement("div"),i=document.createElement("img"),a=document.createElement("a"),r=document.createElement("span"),s=document.createElement("p");n.setAttribute("class","list-friend__item"),n.setAttribute("value",e.id),o.setAttribute("value",e.id),i.setAttribute("value",e.id),a.setAttribute("value",e.id),s.setAttribute("value",e.id),r.setAttribute("value",e.id),o.setAttribute("class","list-friend__item-name"),i.setAttribute("src",e.photo_50),i.setAttribute("class","list-friend__item-photo"),a.setAttribute("target","_blank"),a.innerText=e.first_name+" "+e.last_name+" ",r.innerText=this.userOnline(e.online),n.appendChild(i),o.appendChild(a),o.appendChild(r),o.appendChild(s),n.appendChild(o),t.appendChild(n)})}userOnline(e){return 1===e?"Онлайн":"Оффлайн"}writeWall(e){$(".my-post__item").remove(),e.forEach(e=>{"attachments"in e?this.attachmentPost(e):"copy_history"in e?this.rePost(e):this.writePostWithOnlyText(e)})}attachmentPost(e){"photo"in e.attachments[0]&&this.writePost(e.attachments[0].photo.photo_75,e)}rePost(e){"attachments"in e.copy_history[0]&&this.writeRePost(e)}writePost(e,t){var n=document.getElementById("user-feed"),o=document.createElement("div"),i=document.createElement("span"),a=document.createElement("span"),r=document.createElement("span"),s=document.createElement("div"),d=document.createElement("div"),l=document.createElement("img"),c=document.createElement("p"),m=document.createElement("button");m.innerText="x",m.setAttribute("name",t.id),m.setAttribute("value",t.owner_id),m.setAttribute("class","user-post-delete"),m.setAttribute("title","Удалить"),o.setAttribute("class","my-post__item"),d.setAttribute("class","my-post__item-feed-back"),s.setAttribute("class","my-post__item-attachments"),c.setAttribute("class","my-post__item-text"),i.innerText=" Likes "+t.likes.count,a.innerText=" Commnet "+t.comments.count,r.innerText=" Repost "+t.reposts.count,l.setAttribute("src",e),o.appendChild(m),o.appendChild(c),s.appendChild(l),d.appendChild(i),d.appendChild(a),d.appendChild(r),o.appendChild(s),o.appendChild(d),n.appendChild(o)}writeRePost(e){"photo"in e.copy_history[0].attachments[0]&&this.writePost(e.copy_history[0].attachments[0].photo.photo_604,e)}writePostWithOnlyText(e){var t=document.getElementById("user-feed"),n=document.createElement("div"),o=document.createElement("span"),i=document.createElement("span"),a=document.createElement("span"),r=document.createElement("div"),s=document.createElement("div"),d=document.createElement("p"),l=document.createElement("button");l.innerText="x",l.setAttribute("name",e.id),l.setAttribute("value",e.owner_id),l.setAttribute("class","user-post-delete"),l.setAttribute("title","Удалить"),s.setAttribute("class","my-post-item_header"),s.appendChild(l),n.setAttribute("class","my-post__item"),r.setAttribute("class","my-post__item-feed-back"),d.setAttribute("class","my-post__item-text"),o.innerText=" Likes "+e.likes.count,i.innerText=" Commnet "+e.comments.count,a.innerText=" Repost "+e.reposts.count,d.innerText=e.text,n.appendChild(s),n.appendChild(d),r.appendChild(o),r.appendChild(i),r.appendChild(a),n.appendChild(r),t.appendChild(n)}};var a=class{getAccessToken(){var e=window.location.href.split("access_token=")[1].split("&")[0];localStorage.setItem("tokenAccess",e)}getUserId(){var e=window.location.href.split("user_id=")[1];localStorage.setItem("userId",e),localStorage.getItem("userId"),localStorage.setItem("authorization","yes")}getLifeTimeToken(){var e=(new Date).getTime(),t=1e3*+window.location.href.split("expires_in=")[1].split("&")[0]+e;localStorage.setItem("timeToken",t)}getPostToken(){var e=$("#warning-window__input").val();localStorage.setItem("tokenPost",e)}avalibaleTime(){!function(){(new Date).getTime();localStorage.getItem("timeToken")}()}};var r=class{async getData(e,t,n){let o=await $.ajax({url:"https://api.vk.com/method/"+e+"?&"+t+"&v=5.52&access_token="+n,method:"GET",dataType:"JSONP"});return o.response?o.response.items:alert("Данные не получены!")}async getFriends(e,t){let n=await $.ajax({url:"https://api.vk.com/method/friends.get?&user_id="+e+"&fields=bdate,city,photo_100,contacts,sex,city,photo_50,photo_200_orig,online&v=5.52&access_token="+t,method:"GET",dataType:"JSONP"});return n.response?n.response.items:alert("Данные не получены!")}async getDataUserInfo(e,t){let n=await $.ajax({url:"https://api.vk.com/method/users.get?&user_ids="+e+"&fields=online,followers_count,photo_200_orig,bdate,city,counters&v=5.52&access_token="+t,method:"GET",dataType:"JSONP"});return n.response?n.response[0]:alert("Данные не получены!")}addNewPost(e,t,n){$.ajax({url:"https://api.vk.com/method/wall.post?&owner_id="+e+"&message="+t+"&v=5.52&access_token="+n,method:"GET",dataType:"JSONP",error:function(e){alert(e)},success:function(e){console.log(e)}})}deleteUserPost(e,t,n){$.ajax({url:"https://api.vk.com/method/wall.delete?&owner_id="+e+"&post_id="+t+"&v=5.52&access_token="+n,method:"GET",dataType:"JSONP",error:function(e){alert(e)},success:function(e){document.location.reload(!0)}})}};(function(){new o;const e=new r,t=new i,n=new a;$("#intro-window").hide(),$(".my-friends").hide(),$("#user-page").hide(),$("#warning-window-block").hide(),n.getAccessToken(),n.getUserId(),n.getLifeTimeToken(),window.addEventListener("load",()=>{"yes"===localStorage.getItem("authorization")?($("#intro-window").show(),$("#enter-in-app").hide()):($("#intro-window").hide(),$("#enter-in-app").show()),""!=localStorage.getItem("tokenPost")?$("#warning-window-block").hide():$("#warning-window-block").show()});var s=localStorage.getItem("tokenAccess"),d=localStorage.getItem("tokenPost"),l=localStorage.getItem("userId");$("#my-page").on("click",()=>{$(".intro-window").hide(),$("#friend-page").hide(),$("#user-page").show()}),$("#my-friends").on("click",()=>{$(".intro-window").hide(),$(".my-friends").show()}),$(document).on("click","#warning-window__button",()=>{n.getPostToken(),""!=localStorage.getItem("tokenPost")?alert("Спасибо за понимание и Ваш труд!!!"):alert("Токен не был добавлен!!!!"),$("#intro-window").show(),$("#warning-window-block").hide(),$("#enter-in-app").hide()}),$(document).on("click","#my-page",async n=>{var o=await e.getDataUserInfo(l,s),i=await e.getData("wall.get","count=10",s);"nothing"===i?(i=await e.getData("wall.get","count=10",s),t.fillInfoToMyPage(o),t.writeWall(i)):(t.fillInfoToMyPage(o),t.writeWall(i))}),$(document).on("click","#my-friends",async n=>{var o=await e.getData("friends.get","fields=bdate,city,photo_100,contacts,sex,city,photo_50,photo_200_orig,online",s);"nothing"===o?(o=await e.getData("friends.get","fields=bdate,city,photo_100,contacts,sex,city,photo_50,photo_200_orig,online",s),t.writeListFriends(o)):t.writeListFriends(o)}),$(document).on("click",".list-friend__item",async n=>{var o=$(n.target).attr("value"),i=await e.getDataUserInfo(o,s),a=await e.getData("wall.get","owner_id="+o,s);$(".my-friends").hide(),"nothing"===i||"nothing"===a?(i=await e.getDataUserInfo(o,s),a=await e.getData("wall.get","owner_id="+o,s),t.fillInfoToMyPage(i),t.writeWall(a)):(t.fillInfoToMyPage(i),t.writeWall(a)),$("#user-page").show()}),$(document).on("click",".button-send-new-post",t=>{var n=$(t.target).attr("name"),o=$("#send-new-post").val();e.addNewPost(n,o,d)}),$(document).on("click",".user-post-delete",async t=>{var n=$(t.target).attr("name"),o=$(t.target).attr("value");e.deleteUserPost(o,n,d)}),$(document).on("click","#user-page__info-details__blocks-friends",async n=>{var o=$(n.target).attr("name"),i=await e.getFriends(o,s);"nothing"===i?(i=await e.getFriends(o,s),t.writeListFriends(i)):t.writeListFriends(i),$("#user-page").hide(),$(".my-friends").show()})})()}]);