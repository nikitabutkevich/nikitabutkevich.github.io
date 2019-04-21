//services 

class Services {
	async getData(method, param){
		let data = await $.ajax({
			url: 'https://api.vk.com/method/' + method + '?&' + param + '&v=5.52&access_token=08fea5561cee2b3eac1e9bc94cb3f5e0d9b36b4fe36009e97ad7f5d60f1fc3d5709fedf00f101119bbc26',
			method: "GET",
			dataType: "JSONP"
		});
		return data.response ? data.response.items : 'nothing';
	}

	async getDataUserInfo(param, userId){
		let data = await $.ajax({
			url: 'https://api.vk.com/method/users.get?&' + param + userId + '&fields=online,followers_count,photo_200_orig,bdate,city,counters&v=5.52&access_token=08fea5561cee2b3eac1e9bc94cb3f5e0d9b36b4fe36009e97ad7f5d60f1fc3d5709fedf00f101119bbc26',
			method: "GET",
			dataType: "JSONP"
		});
		return data.response ? data.response[0] : 'nothing';
	}

	addNewPost (id, messages) {
		 $.ajax({
			url: 'https://api.vk.com/method/wall.post?&owner_id=' + id + '&message=' + messages + '&v=5.52&access_token=08fea5561cee2b3eac1e9bc94cb3f5e0d9b36b4fe36009e97ad7f5d60f1fc3d5709fedf00f101119bbc26',
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