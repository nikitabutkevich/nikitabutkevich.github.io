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

	if ( localStorage.getItem('token') != '' ) {
		$('#enter-in-app').hide();
		$('#intro-window').show();
	} else {
		alert('Доступ не получен!');
	}

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
		var getUserInfo = await services.getDataUserInfo(token),
			getUserWall = await services.getData('wall.get', 'count=10', token),
			token = localStorage.getItem('token')
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
		var token = localStorage.getItem('token'),
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
			token = localStorage.getItem('token'),
			getFriendData = await services.getDataUserInfo('user_ids=', id, token),
			getFriendWall = await services.getData('wall.get', 'owner_id=' + id, token);
			;

		$('.my-friends').hide();
		
		if ( getFriendData === 'nothing' || getFriendWall === 'nothing' ) {
			getFriendData = await services.getDataUserInfo('user_ids=', id, token),
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
			token = localStorage.getItem('token'),
			valueInputPost = $('#send-new-post').val(),
			getFriendWall = await services.addNewPost(id, valueInputPost, token);
			;
		
		if ( getFriendWall === 'nothing' ) {
			getFriendWall = await services.addNewPost(id, valueInputPost, token);
			view.writeFriendWall(getFriendWall);
		} else {
			view.writeFriendWall(getFriendWall);
		}
	});

	
	$(document).on('click', '.user-post-delete', async (event) => {
		var postId = $(event.target).attr('name'),
			ownerId = $(event.target).attr('value'),
			token = localStorage.getItem('token')
			;

		services.deleteUserPost(ownerId, postId, token);
	});

	$(document).on('click', '#user-page__info-details__blocks-friends', async (event) => {
		var userId = $(event.target).attr('name'),
			token = localStorage.getItem('token'),
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