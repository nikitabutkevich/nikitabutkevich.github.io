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

	$('#intro-window').hide();
	$('.my-friends').hide();
	$('#user-page').hide();

	helper.getAccessToken();
	helper.getUserId();
	helper.getLifeTimeToken();

	window.addEventListener('load', () =>{
		if ( localStorage.getItem('authorization') === 'yes' ) {
			$('#intro-window').show();
			$('#enter-in-app').hide();
		} else {
			$('#intro-window').hide();
			$('#enter-in-app').show();
		}
	});

	var tokenAccess = localStorage.getItem('tokenAccess'),
		tokenPost = localStorage.getItem('tokenPost'),
		userId = localStorage.getItem('userId')
		;

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
		var getUserInfo = await services.getDataUserInfo(userId, tokenAccess),
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

		$('#user-page').show();
	});

	/*$(document).on('click', '.button-send-new-post', async (event) => {
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
	});*/

	$(document).on('click', '.button-send-new-post', (event) => {
		localStorage.setAttribue('tokenPost', 'fbbc0651c3f5ce5175b128c52682759efacefa349f279635cf8f8bccc9a5b37533ceb189f1ff43b27173d');
		model.sendForm('form-send.php');
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
		$('#user-page').hide();
		$('.my-friends').show();
	});
}

export default Controller;
