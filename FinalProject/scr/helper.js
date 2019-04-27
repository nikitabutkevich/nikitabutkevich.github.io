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

	getLifeTimeToken(){
		var date = new Date().getTime(),
			pageURL = window.location.href,
			pageURLData = pageURL.split('expires_in='),
			pageDataTime = pageURLData[1].split('&'),
			timeValueSecond = +pageDataTime[0],
			timeValue = ( timeValueSecond * 1000 ) + date
			;

		localStorage.setItem('timeToken', timeValue);
	}

	getUserId(){
		var pageURL = window.location.href,
			pageURLData = pageURL.split('user_id='),
			userId = pageURLData[1]
			;

		localStorage.setItem('userId', userId);
	}

	authorizationUser(){
		localStorage.getItem('userId') != '' && checkAvalibaleTime() ? localStorage.setItem('authorization', 'yes') : localStorage.setItem('authorization', 'yes');
	}
}

function checkAvalibaleTime() {
	const now = new Date().getTime();
	const timeToken = localStorage.getItem('timeToken');

	return timeToken > now;
}

export default Helper;