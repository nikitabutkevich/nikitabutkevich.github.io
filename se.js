function getFriends(method, param, funct){
	$.ajax('https://api.vk.com/method/' + method + '?&' + param + '&v=5.52&access_token=ba1be921cc79fb3434d09f0ad2f9f8a657bdb1cb35ab85e16aebfbc48615c5a5ed5d1f811cf13af24c283', {
		method: "GET",
		dataType: "JSONP",
		error: function(){
			console.log(error);
		},
		success: funct
	});
}
getFriends('friends.get', 'fields=bdate,sex,city,photo_50,photo_200_orig,online', getInfoFriends);

function getInfoFriends(data){
	var dataArray = data.response.items;
	
	console.log(dataArray);
	
	dataArray.forEach(function(item){
		writePage(item);
	});
}


function writePage(data){
	var list = document.getElementById('list-friend'),
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
