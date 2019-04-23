//Controller

import Model from './model.js';
import View from './view.js';
import Helper from './helper.js';
import Services from './services.js';

function Controller(){
	const model = new Model(),
		services = new Services(),
		view = new View(),
		helper = new Helper()
		;
	
	model.getAccessToken();

	$('#intro-window').hide();
	$('.my-friends').hide();
	$('#user-page').hide();
	$('#friend-page').hide();

	$('#my-page').on('click', () => {
		$('.intro-window').hide();
		$('#friend-page').hide();
		$('#user-page').show();
	});

	$('#my-friends').on('click', () => {
		$('.intro-window').hide();
		$('.my-friends').show();
	});

	$(document).on('click', '#my-page', async (event) => {
		var getUserInfo = await services.getDataUserInfo(),
			getUserWall = await services.getData('wall.get', 'count=10')
			;

		view.fillInfoToMyPage(getUserInfo);
		view.writeWall(getUserWall);
	});

	$(document).on('click', '#my-friends', async (event) => {
		var getFriends = await services.getData('friends.get', 'fields=bdate,city,photo_100,contacts,sex,city,photo_50,photo_200_orig,online');

		view.writeListFriends(getFriends);
	});

	$(document).on('click', '.list-friend__item', async (event) => {
		var id = $(event.target).attr('value'),
			getFriendData = await services.getDataUserInfo('user_ids=', id),
			getFriendWall = await services.getData('wall.get', 'owner_id=' + id);
			;

		$('.my-friends').hide();
		view.fillInfoToMyPage(getFriendData);
		view.writeWall(getFriendWall);
		$('#user-page').show();
	});

	$(document).on('click', '.button-send-new-post', async (event) => {
		var id = $(event.target).attr('name'),
			valueInputPost = $('#send-new-post').val(),
			getFriendWall = await services.addNewPost(id, valueInputPost);
			;

		console.log(getFriendWall);
		view.writeFriendWall(getFriendWall);
	});

	

}

export default Controller;