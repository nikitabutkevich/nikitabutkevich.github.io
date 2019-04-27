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

	$('#intro-window').css('display', 'none');
	$('.my-friends').css('display', 'none');
	$('#user-page').css('display', 'none');

	helper.getAccessToken();
	helper.getUserId();
	helper.getLifeTimeToken();

	window.addEventListener('load', () =>{
		if ( localStorage.getItem('authorization') === 'yes' ) {
			$('#intro-window').css('style', 'display: flex;');
			$('#enter-in-app').hide();
		} else {
			$('#intro-window').css('style', 'display: none;');
			$('#enter-in-app').show();
		}
	});

	var tokenAccess = localStorage.getItem('tokenAccess'),
		tokenPost = localStorage.getItem('tokenPost'),
		userId = localStorage.getItem('userId')
		;

	$('#my-page').on('click', () => {
		$('.intro-window').css('style', 'display: none;');
		$('#friend-page').css('style', 'display: none;');
		$('#user-page').css('style', 'display: flex;');
	});

	$('#my-friends').on('click', () => {
		$('.intro-window').css('style', 'display: none;');
		$('.my-friends').css('style', 'display: flex;');
	});

	$(document).on('click', '#my-page', async (event) => {
		var getUserInfo = await services.getDataUserInfo(userId, token),
			getUserWall = await services.getData('wall.get', 'count=10', tokenAccess)
			;

		console.log(getUserInfo);
		if ( getUserWall === 'nothing' ){
			getUserWall = await services.getData('wall.get', 'count=10', tokenAccess);
			view.fillInfoToMyPage(getUserInfo);
			view.writeWall(getUserWall);
		} else {
			view.fillInfoToMyPage(getUserInfo);
			view.writeWall(getUserWall);			
		}

	});

	$(document).on('click', '#my-friends', async (event) => {
		var getFriends = await services.getData('friends.get', 'fields=bdate,city,photo_100,contacts,sex,city,photo_50,photo_200_orig,online', tokenAccess)
			;

		if ( getFriends === 'nothing' ) {
			getFriends = await services.getData('friends.get', 'fields=bdate,city,photo_100,contacts,sex,city,photo_50,photo_200_orig,online', tokenAccess);
			view.writeListFriends(getFriends);
		} else {
			view.writeListFriends(getFriends);
		}
	});

	$(document).on('click', '.list-friend__item', async (event) => {
		var id = $(event.target).attr('value'),
			getFriendData = await services.getDataUserInfo(id, tokenAccess),
			getFriendWall = await services.getData('wall.get', 'owner_id=' + id, tokenAccess);
			;

		$('.my-friends').hide();
		
		if ( getFriendData === 'nothing' || getFriendWall === 'nothing' ) {
			getFriendData = await services.getDataUserInfo(id, tokenAccess);
			getFriendWall = await services.getData('wall.get', 'owner_id=' + id, tokenAccess);
			view.fillInfoToMyPage(getFriendData);
			view.writeWall(getFriendWall);
		} else {
			view.fillInfoToMyPage(getFriendData);
			view.writeWall(getFriendWall);
		}

		$('#user-page').css('style', 'display: flex;');
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
		var userFriendId = $(event.target).attr('name'),
			getFriends = await services.getFriends(userFriendId, tokenAccess)
			;
			console.log(getFriends);
		if ( getFriends === 'nothing' ) {
			getFriends = await services.getFriends(userFriendId, tokenAccess);
			view.writeListFriends(getFriends);
		} else {
			view.writeListFriends(getFriends);
		}
		$('#user-page').css('style', 'display: none;');
		$('.my-friends').css('style', 'display: flex;');
	});
}

export default Controller;
