//helper

class Helper {
	getAccessToken(){
		var pageURL = window.location.href,
			pageURLData = pageURL.split('access_token='),
			pageDataToken = pageURLData[1].split('&'),
			accessToken = pageDataToken[0]
			;

		localStorage.setItem('tokenAccess', accessToken);
	}

	getUserId(){
		var pageURL = window.location.href,
			pageURLData = pageURL.split('user_id='),
			userId = pageURLData[1]
			;

		localStorage.setItem('userId', userId);
	}

	getLifeTimeToken(){
		var nowTime = new Date().getTime(),
			pageURL = window.location.href,
			pageURLData = pageURL.split('expires_in='),
			pageDataTime = pageURLData[1].split('&'),
			timeValueSecond = +pageDataTime[1],
			timeValue = ( timeValueSecond * 1000 ) + nowTime
			;

		localStorage.setItem('timeToken', timeValue);
	}

	checkAvalibaleTime() {
		const now = new Date.getItem(),
			timeToken = localStorage.getItem('timeToken');

		return timeToken > now;
	}

	
}

export default Helper;