function getData(method, param, funct){
	$.ajax('https://api.vk.com/method/' + method + '?&' + param + '&v=5.52&access_token=baac86d523082d3b522d1ddfc2c335ff1a1a3d1f3f4691c98fca30cc3ef9f5291bcd01e39a63ed556d8d1', {
		method: "GET",
		dataType: "JSONP",
		error: function(){
			console.log(error);
		},
		success: funct
	});
}
var a = getData('friends.get', 'fields=bdate,sex,city,photo_50,photo_200_orig,online', getInfoFriends);
var b = getData('wall.get', 'owner_id=13376656', consol);

function consol(data){
	console.log(data);
}

function getInfoFriends(data){
	var dataArray = data.response.items;
	
	console.log(dataArray);
	
	dataArray.forEach(function(item){
		writePage(item);
	});
}


function writePage(data){
	var list = document.getElementById('list-friends'),
		item = document.createElement('div'),
		image = document.createElement('img'),
		name = document.createElement('a'),
		onlineStatus = document.createElement('span')
		;

	item.setAttribute('class', 'list-friend__item');
	image.setAttribute('src', data.photo_50);
	name.setAttribute('href', 'https://vk.com/id' + data.id);
	name.setAttribute('target', '_blank');
	name.innerText = data.first_name + ' ' + data.last_name + ' ';
	onlineStatus.innerText = userOnline(data.online);

	item.appendChild(name);
	item.appendChild(image);
	item.appendChild(onlineStatus);
	list.appendChild(item);
}

function userOnline(online){
	if ( online === 1) {
		return "On";
	} else return "Off";
}


var wall = document.getElementById('friend-wall'),
				friendPost = document.createElement('div'),
				postLikes = document.createElement('span'),
				postComment = document.createElement('span'),
				postRepost = document.createElement('span'),
				postAttachment = document.createElement('div'),
				postImage = document.createElement('img')
				;

			postLikes.innerText = ' Likes ' + item.likes.count;
			postComment.innerText = ' Commnet ' + item.comments.count;
			postRepost.innerText = ' Repost ' + item.reposts.count;
			console.log(item);

			postAttachment.appendChild(postImage);
			friendPost.appendChild(postAttachment);
			friendPost.appendChild(postRepost);
			friendPost.appendChild(postComment);
			friendPost.appendChild(postLikes);
			wall.appendChild(friendPost);