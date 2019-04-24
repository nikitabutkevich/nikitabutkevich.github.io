//services 

class Services {
	async getData(method, param, token){
		let data = await $.ajax({
			url: 'https://api.vk.com/method/' + method + '?&' + param + '&v=5.52&access_token=' + token,
			method: "GET",
			dataType: "JSONP"
		});
		return data.response ? data.response.items : alert('Данные не получены!');
	}

	async getFriends(param, token){
		let data = await $.ajax({
			url: 'https://api.vk.com/method/friends.get?&user_id=' + param + '&fields=bdate,city,photo_100,contacts,sex,city,photo_50,photo_200_orig,online&v=5.52&access_token=' + token,
			method: "GET",
			dataType: "JSONP"
		});
		return data.response ? data.response.items : alert('Данные не получены!');
	}

	async getDataUserInfo(param, userId, token){
		let data = await $.ajax({
			url: 'https://api.vk.com/method/users.get?&' + param + userId + '&fields=online,followers_count,photo_200_orig,bdate,city,counters&v=5.52&access_token=' + token,
			method: "GET",
			dataType: "JSONP"
		});
		return data.response ? data.response[0] : alert('Данные не получены!');
	}

	addNewPost (id, messages, token) {
		 $.ajax({
			url: 'https://api.vk.com/method/wall.post?&owner_id=' + id + '&message=' + messages + '&v=5.52&access_token=' + token,
			method: "GET",
			dataType: "JSONP",
			error: function(error){
				alert(error);
			},
			success: function(data){
				alert("Пост отправлен успешно!");
			}
		});
	}

	deleteUserPost(owner, post, token) {
		 $.ajax({
			url: 'https://api.vk.com/method/wall.delete?&owner_id=' + owner + '&post_id=' + post + '&v=5.52&access_token=' + token,
			method: "GET",
			dataType: "JSONP",
			error: function(error){
				alert(error);
			},
			success: function(data){
				document.location.reload(true);
			}
		});
	}
}

export default Services;