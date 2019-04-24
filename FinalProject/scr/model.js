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