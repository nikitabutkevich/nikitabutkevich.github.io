//model

class Model {
	getAccessToken(){
		var pageURL = window.location.href
			pageURLData = pageURL.split('access_token=');
			pageDataToken = pageURLData[1].split('&'),
			accessToken = pageDataToken[0].
			;
		console.log(accessToken);
	}
}

export default Model;