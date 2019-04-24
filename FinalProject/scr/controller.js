//Controller

import Model from './model.js';
import View from './view.js';
import Helper from './helper.js';
import Services from './services.js';

function Controller(){
	var tokenPost;
	const model = new Model(),
		services = new Services(),
		view = new View(),
		helper = new Helper()
		;

	$('#intro-window').hide();
	$('.my-friends').hide();
	$('#user-page').hide();
	$('#warning-window-block').hide();

	$(document).on('click', '.enter-app-button', (event) => {
		model.getAccessToken();
		model.getUserId();

		if ( localStorage.getItem('tokenAccess') != '' && localStorage.getItem('userId') != '' ) {
			$('#enter-in-app').remove();
			$('#intro-window').show();
			$('#warning-window-block').show();
		} else {
			alert('Доступ не получен');
		}
	});

	$(document).on('click', '#warning-window__button', (event) => {
		model.getPostToken();
		tokenPost = localStorage.getItem('tokenPost');
		$('#warning-window-block').hide();
	});

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
		var userId = localStorage.getItem('userId'),
			token = localStorage.getItem('tokenAccess'),
			getUserInfo = await services.getDataUserInfo(userId, token),
			getUserWall = await services.getData('wall.get', 'count=10', token)
			;
		console.log(getUserInfo);
		if ( getUserWall === 'nothing' ){
			getUserWall = await services.getData('wall.get', 'count=10', token);
			view.fillInfoToMyPage(getUserInfo);
			view.writeWall(getUserWall);
		} else {
			view.fillInfoToMyPage(getUserInfo);
			view.writeWall(getUserWall);			
		}

	});

	$(document).on('click', '#my-friends', async (event) => {
		var token = localStorage.getItem('tokenAccess'),
			getFriends = await services.getData('friends.get', 'fields=bdate,city,photo_100,contacts,sex,city,photo_50,photo_200_orig,online', token)
			;

		if ( getFriends === 'nothing' ) {
			getFriends = await services.getData('friends.get', 'fields=bdate,city,photo_100,contacts,sex,city,photo_50,photo_200_orig,online', token);
			view.writeListFriends(getFriends);
		} else {
			view.writeListFriends(getFriends);
		}
	});

	$(document).on('click', '.list-friend__item', async (event) => {
		var id = $(event.target).attr('value'),
			token = localStorage.getItem('tokenAccess'),
			getFriendData = await services.getDataUserInfo(id, token),
			getFriendWall = await services.getData('wall.get', 'owner_id=' + id, token);
			;

		$('.my-friends').hide();
		
		if ( getFriendData === 'nothing' || getFriendWall === 'nothing' ) {
			getFriendData = await services.getDataUserInfo(id, token);
			getFriendWall = await services.getData('wall.get', 'owner_id=' + id, token);
			view.fillInfoToMyPage(getFriendData);
			view.writeWall(getFriendWall);
		} else {
			view.fillInfoToMyPage(getFriendData);
			view.writeWall(getFriendWall);
		}

		$('#user-page').show();
	});

	$(document).on('click', '.button-send-new-post', async (event) => {
		var id = $(event.target).attr('name'),
			valueInputPost = $('#send-new-post').val(),
			getFriendWall = await services.addNewPost(id, valueInputPost, tokenPost);
			;
		
		if ( getFriendWall === 'nothing' ) {
			getFriendWall = await services.addNewPost(id, valueInputPost, tokenPost);
			view.writeFriendWall(getFriendWall);
		} else {
			view.writeFriendWall(getFriendWall);
		}
	});

	
	$(document).on('click', '.user-post-delete', async (event) => {
		var postId = $(event.target).attr('name'),
			ownerId = $(event.target).attr('value')
			;

		services.deleteUserPost(ownerId, postId, tokenPost);
	});

	$(document).on('click', '#user-page__info-details__blocks-friends', async (event) => {
		var userId = $(event.target).attr('name'),
			token = localStorage.getItem('tokenAccess'),
			getFriends = await services.getFriends(userId, token)
			;
			console.log(getFriends);
		if ( getFriends === 'nothing' ) {
			getFriends = await services.getFriends(userId, token);
			view.writeListFriends(getFriends);
		} else {
			view.writeListFriends(getFriends);
		}
		$('#user-page').hide();
		$('.my-friends').show();
	});
}

export default Controller;