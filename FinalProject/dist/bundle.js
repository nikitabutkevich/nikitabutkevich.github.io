!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var i=class{getAccessToken(){var e=window.location.href.split("access_token=")[1].split("&")[0];localStorage.setItem("tokenAccess",e)}getUserId(){var e=window.location.href.split("user_id=")[1];localStorage.setItem("userId",e)}};var o=class{fillInfoToMyPage(e){var t=document.getElementById("user-page-name"),n=document.getElementById("user-page-photo"),i=document.getElementById("user-page-online"),o=document.getElementById("user-page-bdate"),s=document.getElementById("user-page-friends"),a=document.getElementById("user-photo"),r=document.getElementById("user-page-video"),l=document.getElementById("user-button-send-post");document.getElementById("user-page__info-details__blocks-friends").setAttribute("name",e.id),t.innerText=e.first_name+" "+e.last_name,n.setAttribute("src",e.photo_200_orig),i.innerText=this.userOnline(e.online),o.innerText=e.bdate,s.innerText=e.counters.friends,a.innerText=e.counters.photos,r.innerText=e.counters.videos,l.setAttribute("name",e.id)}writeListFriends(e){$(".list-friend__item").remove(),e.forEach(e=>{var t=document.getElementById("list-friends"),n=document.createElement("div"),i=document.createElement("div"),o=document.createElement("img"),s=document.createElement("a"),a=document.createElement("span"),r=document.createElement("p");n.setAttribute("class","list-friend__item"),n.setAttribute("value",e.id),i.setAttribute("value",e.id),o.setAttribute("value",e.id),s.setAttribute("value",e.id),r.setAttribute("value",e.id),a.setAttribute("value",e.id),i.setAttribute("class","list-friend__item-name"),o.setAttribute("src",e.photo_50),o.setAttribute("class","list-friend__item-photo"),s.setAttribute("target","_blank"),s.innerText=e.first_name+" "+e.last_name+" ",a.innerText=this.userOnline(e.online),n.appendChild(o),i.appendChild(s),i.appendChild(a),i.appendChild(r),n.appendChild(i),t.appendChild(n)})}userOnline(e){return 1===e?"Онлайн":"Оффлайн"}writeWall(e){$(".my-post__item").remove(),e.forEach(e=>{"attachments"in e?this.attachmentPost(e):"copy_history"in e?this.rePost(e):this.writePostWithOnlyText(e)})}attachmentPost(e){"photo"in e.attachments[0]&&this.writePost(e.attachments[0].photo.photo_75,e)}rePost(e){"attachments"in e.copy_history[0]&&this.writeRePost(e)}writePost(e,t){var n=document.getElementById("user-feed"),i=document.createElement("div"),o=document.createElement("span"),s=document.createElement("span"),a=document.createElement("span"),r=document.createElement("div"),l=document.createElement("div"),d=document.createElement("img"),c=document.createElement("p"),u=document.createElement("button");u.innerText="x",u.setAttribute("name",t.id),u.setAttribute("value",t.owner_id),u.setAttribute("class","user-post-delete"),u.setAttribute("title","Удалить"),i.setAttribute("class","my-post__item"),l.setAttribute("class","my-post__item-feed-back"),r.setAttribute("class","my-post__item-attachments"),c.setAttribute("class","my-post__item-text"),o.innerText=" Likes "+t.likes.count,s.innerText=" Commnet "+t.comments.count,a.innerText=" Repost "+t.reposts.count,d.setAttribute("src",e),i.appendChild(u),i.appendChild(c),r.appendChild(d),l.appendChild(o),l.appendChild(s),l.appendChild(a),i.appendChild(r),i.appendChild(l),n.appendChild(i)}writeRePost(e){"photo"in e.copy_history[0].attachments[0]&&this.writePost(e.copy_history[0].attachments[0].photo.photo_604,e)}writePostWithOnlyText(e){var t=document.getElementById("user-feed"),n=document.createElement("div"),i=document.createElement("span"),o=document.createElement("span"),s=document.createElement("span"),a=document.createElement("div"),r=document.createElement("div"),l=document.createElement("p"),d=document.createElement("button");d.innerText="x",d.setAttribute("name",e.id),d.setAttribute("value",e.owner_id),d.setAttribute("class","user-post-delete"),d.setAttribute("title","Удалить"),r.setAttribute("class","my-post-item_header"),r.appendChild(d),n.setAttribute("class","my-post__item"),a.setAttribute("class","my-post__item-feed-back"),l.setAttribute("class","my-post__item-text"),i.innerText=" Likes "+e.likes.count,o.innerText=" Commnet "+e.comments.count,s.innerText=" Repost "+e.reposts.count,l.innerText=e.text,n.appendChild(r),n.appendChild(l),a.appendChild(i),a.appendChild(o),a.appendChild(s),n.appendChild(a),t.appendChild(n)}};var s=class{getAccessToken(){var e=window.location.href.split("access_token=")[1].split("&")[0];localStorage.setItem("tokenAccess",e)}getUserId(){var e=window.location.href.split("user_id=")[1];localStorage.setItem("userId",e)}getLifeTimeToken(){var e=(new Date).getTime(),t=1e3*+window.location.href.split("expires_in=")[1].split("&")[1]+e;localStorage.setItem("timeToken",t)}avalibaleTime(){!function(){(new Date).getTime();localStorage.getItem("timeToken")}()}};var a=class{async getData(e,t,n){let i=await $.ajax({url:"https://api.vk.com/method/"+e+"?&"+t+"&v=5.52&access_token="+n,method:"GET",dataType:"JSONP"});return i.response?i.response.items:alert("Данные не получены!")}async getFriends(e,t){let n=await $.ajax({url:"https://api.vk.com/method/friends.get?&user_id="+e+"&fields=bdate,city,photo_100,contacts,sex,city,photo_50,photo_200_orig,online&v=5.52&access_token="+t,method:"GET",dataType:"JSONP"});return n.response?n.response.items:alert("Данные не получены!")}async getDataUserInfo(e,t){let n=await $.ajax({url:"https://api.vk.com/method/users.get?&user_ids="+e+"&fields=online,followers_count,photo_200_orig,bdate,city,counters&v=5.52&access_token="+t,method:"GET",dataType:"JSONP"});return n.response?n.response[0]:alert("Данные не получены!")}addNewPost(e,t,n){$.ajax({url:"https://api.vk.com/method/wall.post?&owner_id="+e+"&message="+t+"&v=5.52&access_token="+n,method:"GET",dataType:"JSONP",error:function(e){alert(e)},success:function(e){console.log(e)}})}deleteUserPost(e,t,n){$.ajax({url:"https://api.vk.com/method/wall.delete?&owner_id="+e+"&post_id="+t+"&v=5.52&access_token="+n,method:"GET",dataType:"JSONP",error:function(e){alert(e)},success:function(e){document.location.reload(!0)}})}};(function(){new i;const e=new a,t=new o,n=new s;$("#intro-window").css("display","none"),$(".my-friends").css("display","none"),$("#user-page").css("display","none"),$(".enter-app-button").on("click",()=>{$("#intro-window").css("display","flex"),$("#enter-in-app").css("display","none")}),n.getAccessToken(),n.getUserId(),n.getLifeTimeToken(),n.avalibaleTime()?($("#intro-window").css("display","flex"),$("#enter-in-app").css("display","none")):($("#intro-window").css("display","none"),$("#enter-in-app").css("display","flex"));var r=localStorage.getItem("tokenAccess"),l=localStorage.getItem("tokenPost"),d=localStorage.getItem("userId");$("#my-page").on("click",()=>{$(".intro-window").hide(),$("#friend-page").hide(),$("#user-page").show()}),$("#my-friends").on("click",()=>{$(".intro-window").hide(),$(".my-friends").show()}),$(document).on("click","#my-page",async n=>{var i=await e.getDataUserInfo(d,token),o=await e.getData("wall.get","count=10",r);console.log(i),"nothing"===o?(o=await e.getData("wall.get","count=10",r),t.fillInfoToMyPage(i),t.writeWall(o)):(t.fillInfoToMyPage(i),t.writeWall(o))}),$(document).on("click","#my-friends",async n=>{var i=await e.getData("friends.get","fields=bdate,city,photo_100,contacts,sex,city,photo_50,photo_200_orig,online",r);"nothing"===i?(i=await e.getData("friends.get","fields=bdate,city,photo_100,contacts,sex,city,photo_50,photo_200_orig,online",r),t.writeListFriends(i)):t.writeListFriends(i)}),$(document).on("click",".list-friend__item",async n=>{var i=$(n.target).attr("value"),o=await e.getDataUserInfo(i,r),s=await e.getData("wall.get","owner_id="+i,r);$(".my-friends").hide(),"nothing"===o||"nothing"===s?(o=await e.getDataUserInfo(i,r),s=await e.getData("wall.get","owner_id="+i,r),t.fillInfoToMyPage(o),t.writeWall(s)):(t.fillInfoToMyPage(o),t.writeWall(s)),$("#user-page").show()}),$(document).on("click",".button-send-new-post",async n=>{var i=$(n.target).attr("name"),o=$("#send-new-post").val(),s=await e.addNewPost(i,o,l);"nothing"===s?(s=await e.addNewPost(i,o,l),t.writeFriendWall(s)):t.writeFriendWall(s)}),$(document).on("click",".user-post-delete",async t=>{var n=$(t.target).attr("name"),i=$(t.target).attr("value");e.deleteUserPost(i,n,l)}),$(document).on("click","#user-page__info-details__blocks-friends",async n=>{var i=$(n.target).attr("name"),o=await e.getFriends(i,r);console.log(o),"nothing"===o?(o=await e.getFriends(i,r),t.writeListFriends(o)):t.writeListFriends(o),$("#user-page").hide(),$(".my-friends").show()})})()}]);