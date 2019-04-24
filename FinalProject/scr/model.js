//model

class Model {
	getAccessToken(){
		var pageURL = window.location.href,
			pageURLData = pageURL.split('access_token='),
			pageDataToken = pageURLData[1].split('&'),
			accessToken = pageDataToken[0]
			;

		localStorage.setItem('tokenAccess', accessToken);
	}

	getPostToken(){
		window.location.href = 'https://oauth.vk.com/authorize?client_id=6953753&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=friends,users,wall&response_type=token&v=5.52';
		
		var pageURL = window.location.href,
			pageURLData = pageURL.split('access_token='),
			pageDataToken = pageURLData[1].split('&'),
			accessToken = pageDataToken[0]
			;

		localStorage.setItem('tokenPost', accessToken);
	}

	getUserId(){
		var pageURL = window.location.href,
			pageURLData = pageURL.split('user_id='),
			userId = pageURLData[1]
			;

		localStorage.setItem('userId', userId);
	}
}

export default Model;