//services 

class Services {
	async getData(method, param){
		let data = await $.ajax({
			url: 'https://api.vk.com/method/' + method + '?&' + param + '&v=5.52&access_token=7b7476dd02f716d10ec5ef3f21c9fdf72f7d64b0f2f4ca60472419fe913530e494fa7196c77603faff4ee',
			method: "GET",
			dataType: "JSONP"
		});
		return data.response ? data.response.items : 'nothing';
	}

	async getDataUserInfo(param, userId){
		let data = await $.ajax({
			url: 'https://api.vk.com/method/users.get?&' + param + userId + '&fields=online,followers_count,photo_200_orig,bdate,city,counters&v=5.52&access_token=7b7476dd02f716d10ec5ef3f21c9fdf72f7d64b0f2f4ca60472419fe913530e494fa7196c77603faff4ee',
			method: "GET",
			dataType: "JSONP"
		});
		return data.response ? data.response[0] : 'nothing';
	}

	addNewPost (id, messages) {
		 $.ajax({
			url: 'https://api.vk.com/method/wall.post?&owner_id=' + id + '&message=' + messages + '&v=5.52&access_token=7b7476dd02f716d10ec5ef3f21c9fdf72f7d64b0f2f4ca60472419fe913530e494fa7196c77603faff4ee',
			method: "POST",
			dataType: "JSONP",
			error: function(error){
				alert(error);
			},
			success: function(data){
				console.log(data);
			}
		});
	}
}

export default Services;