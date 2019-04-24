//services 

class Services {
	async getData(method, param){
		let data = await $.ajax({
			url: 'https://api.vk.com/method/' + method + '?&' + param + '&v=5.52&access_token=12b60a9606b8befbd244a420b6a1bf6b00e3d2bc0a830a4c94a9f127335f0fee40805745ada55c20b47a2',
			method: "GET",
			dataType: "JSONP"
		});
		return data.response ? data.response.items : alert('Данные не получены!');
	}

	async getFriends(param){
		let data = await $.ajax({
			url: 'https://api.vk.com/method/friends.get?&user_id=' + param + '&fields=bdate,city,photo_100,contacts,sex,city,photo_50,photo_200_orig,online&v=5.52&access_token=12b60a9606b8befbd244a420b6a1bf6b00e3d2bc0a830a4c94a9f127335f0fee40805745ada55c20b47a2',
			method: "GET",
			dataType: "JSONP"
		});
		return data.response ? data.response.items : alert('Данные не получены!');
	}

	async getDataUserInfo(param, userId){
		let data = await $.ajax({
			url: 'https://api.vk.com/method/users.get?&' + param + userId + '&fields=online,followers_count,photo_200_orig,bdate,city,counters&v=5.52&access_token=12b60a9606b8befbd244a420b6a1bf6b00e3d2bc0a830a4c94a9f127335f0fee40805745ada55c20b47a2',
			method: "GET",
			dataType: "JSONP"
		});
		return data.response ? data.response[0] : alert('Данные не получены!');
	}

	addNewPost (id, messages) {
		 $.ajax({
			url: 'https://api.vk.com/method/wall.post?&owner_id=' + id + '&message=' + messages + '&v=5.52&access_token=318c0b84191670d17cd080dead674901f149192f80e792d59c49bc807297e9662debc160e785045974f0f',
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

	deleteUserPost(owner, post) {
		 $.ajax({
			url: 'https://api.vk.com/method/wall.delete?&owner_id=' + owner + '&post_id=' + post + '&v=5.52&access_token=318c0b84191670d17cd080dead674901f149192f80e792d59c49bc807297e9662debc160e785045974f0f',
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