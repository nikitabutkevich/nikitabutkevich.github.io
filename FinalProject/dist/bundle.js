!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a=class{getAccessToken(){var e=window.location.href.split("access_token=")[1].split("&")[0];console.log(e)}};var i=class{fillInfoToMyPage(e){var t=document.getElementById("user-page-name"),n=document.getElementById("user-page-photo"),a=document.getElementById("user-page-online"),i=document.getElementById("user-page-bdate"),o=document.getElementById("user-page-friends"),s=document.getElementById("user-photo"),r=document.getElementById("user-page-video"),d=document.getElementById("user-button-send-post");document.getElementById("user-page__info-details__blocks-friends").setAttribute("name",e.id),t.innerText=e.first_name+" "+e.last_name,n.setAttribute("src",e.photo_200_orig),a.innerText=this.userOnline(e.online),i.innerText=e.bdate,o.innerText=e.counters.friends,s.innerText=e.counters.photos,r.innerText=e.counters.videos,d.setAttribute("name",e.id)}writeListFriends(e){$(".list-friend__item").remove(),e.forEach(e=>{var t=document.getElementById("list-friends"),n=document.createElement("div"),a=document.createElement("div"),i=document.createElement("img"),o=document.createElement("a"),s=document.createElement("span"),r=document.createElement("p");n.setAttribute("class","list-friend__item"),n.setAttribute("value",e.id),a.setAttribute("value",e.id),i.setAttribute("value",e.id),o.setAttribute("value",e.id),r.setAttribute("value",e.id),s.setAttribute("value",e.id),a.setAttribute("class","list-friend__item-name"),i.setAttribute("src",e.photo_50),i.setAttribute("class","list-friend__item-photo"),o.setAttribute("target","_blank"),o.innerText=e.first_name+" "+e.last_name+" ",s.innerText=this.userOnline(e.online),n.appendChild(i),a.appendChild(o),a.appendChild(s),a.appendChild(r),n.appendChild(a),t.appendChild(n)})}userOnline(e){return 1===e?"Онлайн":"Оффлайн"}writeWall(e){$(".my-post__item").remove(),e.forEach(e=>{"attachments"in e?this.attachmentPost(e):"copy_history"in e?this.rePost(e):this.writePostWithOnlyText(e)})}attachmentPost(e){"photo"in e.attachments[0]&&this.writePost(e.attachments[0].photo.photo_75,e)}rePost(e){"attachments"in e.copy_history[0]&&this.writeRePost(e)}writePost(e,t){var n=document.getElementById("user-feed"),a=document.createElement("div"),i=document.createElement("span"),o=document.createElement("span"),s=document.createElement("span"),r=document.createElement("div"),d=document.createElement("div"),c=document.createElement("img"),l=document.createElement("p"),u=document.createElement("button");u.innerText="x",u.setAttribute("name",t.id),u.setAttribute("value",t.owner_id),u.setAttribute("class","user-post-delete"),u.setAttribute("title","Удалить"),a.setAttribute("class","my-post__item"),d.setAttribute("class","my-post__item-feed-back"),r.setAttribute("class","my-post__item-attachments"),l.setAttribute("class","my-post__item-text"),i.innerText=" Likes "+t.likes.count,o.innerText=" Commnet "+t.comments.count,s.innerText=" Repost "+t.reposts.count,c.setAttribute("src",e),a.appendChild(u),a.appendChild(l),r.appendChild(c),d.appendChild(i),d.appendChild(o),d.appendChild(s),a.appendChild(r),a.appendChild(d),n.appendChild(a)}writeRePost(e){"photo"in e.copy_history[0].attachments[0]&&this.writePost(e.copy_history[0].attachments[0].photo.photo_604,e)}writePostWithOnlyText(e){var t=document.getElementById("user-feed"),n=document.createElement("div"),a=document.createElement("span"),i=document.createElement("span"),o=document.createElement("span"),s=document.createElement("div"),r=document.createElement("div"),d=document.createElement("p"),c=document.createElement("button");c.innerText="x",c.setAttribute("name",e.id),c.setAttribute("value",e.owner_id),c.setAttribute("class","user-post-delete"),c.setAttribute("title","Удалить"),r.setAttribute("class","my-post-item_header"),r.appendChild(c),n.setAttribute("class","my-post__item"),s.setAttribute("class","my-post__item-feed-back"),d.setAttribute("class","my-post__item-text"),a.innerText=" Likes "+e.likes.count,i.innerText=" Commnet "+e.comments.count,o.innerText=" Repost "+e.reposts.count,d.innerText=e.text,n.appendChild(r),n.appendChild(d),s.appendChild(a),s.appendChild(i),s.appendChild(o),n.appendChild(s),t.appendChild(n)}};var o=class{userOnline(e){return 1===e?"On":"Off"}};var s=class{async getData(e,t){let n=await $.ajax({url:"https://api.vk.com/method/"+e+"?&"+t+"&v=5.52&access_token=12b60a9606b8befbd244a420b6a1bf6b00e3d2bc0a830a4c94a9f127335f0fee40805745ada55c20b47a2",method:"GET",dataType:"JSONP"});return n.response?n.response.items:alert("Данные не получены!")}async getFriends(e){let t=await $.ajax({url:"https://api.vk.com/method/friends.get?&user_id="+e+"&fields=bdate,city,photo_100,contacts,sex,city,photo_50,photo_200_orig,online&v=5.52&access_token=12b60a9606b8befbd244a420b6a1bf6b00e3d2bc0a830a4c94a9f127335f0fee40805745ada55c20b47a2",method:"GET",dataType:"JSONP"});return t.response?t.response.items:alert("Данные не получены!")}async getDataUserInfo(e,t){let n=await $.ajax({url:"https://api.vk.com/method/users.get?&"+e+t+"&fields=online,followers_count,photo_200_orig,bdate,city,counters&v=5.52&access_token=12b60a9606b8befbd244a420b6a1bf6b00e3d2bc0a830a4c94a9f127335f0fee40805745ada55c20b47a2",method:"GET",dataType:"JSONP"});return n.response?n.response[0]:alert("Данные не получены!")}addNewPost(e,t){$.ajax({url:"https://api.vk.com/method/wall.post?&owner_id="+e+"&message="+t+"&v=5.52&access_token=318c0b84191670d17cd080dead674901f149192f80e792d59c49bc807297e9662debc160e785045974f0f",method:"GET",dataType:"JSONP",error:function(e){alert(e)},success:function(e){alert("Пост отправлен успешно!")}})}deleteUserPost(e,t){$.ajax({url:"https://api.vk.com/method/wall.delete?&owner_id="+e+"&post_id="+t+"&v=5.52&access_token=318c0b84191670d17cd080dead674901f149192f80e792d59c49bc807297e9662debc160e785045974f0f",method:"GET",dataType:"JSONP",error:function(e){alert(e)},success:function(e){document.location.reload(!0)}})}};(function(){const e=new a,t=new s,n=new i;new o,e.getAccessToken(),$("#intro-window").hide(),$(document).on("click",".enter-app-button",e=>{$("#enter-in-app").hide(),$("#intro-window").show()}),$(".my-friends").hide(),$("#user-page").hide(),$("#friend-page").hide(),$("#my-page").on("click",()=>{$(".intro-window").hide(),$("#friend-page").hide(),$("#user-page").show()}),$("#my-friends").on("click",()=>{$(".intro-window").hide(),$(".my-friends").show()}),$(document).on("click","#my-page",async e=>{var a=await t.getDataUserInfo(),i=await t.getData("wall.get","count=10");console.log(a),"nothing"===i?(i=await t.getData("wall.get","count=10"),n.fillInfoToMyPage(a),n.writeWall(i)):(n.fillInfoToMyPage(a),n.writeWall(i))}),$(document).on("click","#my-friends",async e=>{var a=await t.getData("friends.get","fields=bdate,city,photo_100,contacts,sex,city,photo_50,photo_200_orig,online");"nothing"===a?(a=await t.getData("friends.get","fields=bdate,city,photo_100,contacts,sex,city,photo_50,photo_200_orig,online"),n.writeListFriends(a)):n.writeListFriends(a)}),$(document).on("click",".list-friend__item",async e=>{var a=$(e.target).attr("value"),i=await t.getDataUserInfo("user_ids=",a),o=await t.getData("wall.get","owner_id="+a);$(".my-friends").hide(),"nothing"===i||"nothing"===o?(i=await t.getDataUserInfo("user_ids=",a),o=await t.getData("wall.get","owner_id="+a),n.fillInfoToMyPage(i),n.writeWall(o)):(n.fillInfoToMyPage(i),n.writeWall(o)),$("#user-page").show()}),$(document).on("click",".button-send-new-post",async e=>{var a=$(e.target).attr("name"),i=$("#send-new-post").val(),o=await t.addNewPost(a,i);"nothing"===o?(o=await t.addNewPost(a,i),n.writeFriendWall(o)):n.writeFriendWall(o)}),$(document).on("click",".user-post-delete",async e=>{var n=$(e.target).attr("name"),a=$(e.target).attr("value");t.deleteUserPost(a,n)}),$(document).on("click","#user-page__info-details__blocks-friends",async e=>{var a=$(e.target).attr("name"),i=await t.getFriends(a);console.log(i),"nothing"===i?(i=await t.getFriends(a),n.writeListFriends(i)):n.writeListFriends(i),$("#user-page").hide(),$(".my-friends").show()})})()}]);