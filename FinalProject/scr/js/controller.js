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

	$(window).on('load', () => {
    	setTimeout( removeLoader, 2000 );
  	});

  	function removeLoader(){
    	$( "#loading" ).fadeOut(500, function() {
      		$( "#loading" ).remove();
  		});  
	}

	$('#intro-window').hide();
	$('.my-friends').hide();
	$('#user-page').hide();
	$('#user-photos').hide();
	$('#warning-window-block').hide();
	$('#back-page').hide();

	helper.getAccessToken();
	helper.getUserId();
	helper.getLifeTimeToken();

	window.addEventListener('load', () =>{
		if ( localStorage.getItem('authorization') === 'yes' ) {
			$('#back-page').show();
			$('#intro-window').show();
			$('#enter-in-app').hide();
		} else {
			$('#intro-window').hide();
			$('#enter-in-app').show();
			$('#back-page').hide();
		}

		localStorage.getItem('tokenPost') != null ? $('#warning-window-block').hide() : $('#warning-window-block').show();
	});

	var tokenAccess = localStorage.getItem('tokenAccess'),
		tokenPost = localStorage.getItem('tokenPost'),
		userId = localStorage.getItem('userId')
		;

	$('#my-page').on('click', () => {
		$('.intro-window').hide();
		$('#friend-page').hide();
		$('#user-page').show();
		$('#back-page').show();
	});

	$('#my-friends').on('click', () => {
		$('.intro-window').hide();
		$('.my-friends').show();
		$('#back-page').show();
	});

	$(document).on('click', '#back-page', () => {
		$('.my-friends').hide();
		$('#user-page').hide();
		$('#user-photos').hide();
		$('#intro-window').show();
	});

	$(document).on('click', '#warning-window__button', () => {
		helper.getPostToken();

		localStorage.getItem('tokenPost') != '' ? alert('Спасибо за понимание и Ваш труд!!!') : alert('Токен не был добавлен!!!!') ;

		$('#intro-window').show();
		$('#warning-window-block').hide();
		$('#enter-in-app').hide();
		$('#back-page').show();
	});

	$(document).on('click', '#my-page', async (event) => {
		var getUserInfo = await services.getDataUserInfo(userId, tokenAccess),
			getUserWall = await services.getData('wall.get', 'count=10', tokenAccess)
			;

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
		$('#back-page').show();
		
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

	$(document).on('click', '.button-send-new-post', (event) => {
		var id = $(event.target).attr('name'),
			valueInputPost = $('#send-new-post').val()
			;

		services.addNewPost(id, valueInputPost, tokenPost);
		
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

		if ( getFriends === 'nothing' ) {
			getFriends = await services.getFriends(userFriendId, tokenAccess);
			view.writeListFriends(getFriends);
		} else {
			view.writeListFriends(getFriends);
		}
		$('#user-page').hide();
		$('.my-friends').show();
		$('#back-page').show();
	});

	$(document).on('click', '#user-page__info-details__blocks-ph', async (event) => {
		var userId = $(event.target).attr('name'),
			getPhotos = await services.getData('photos.get', 'owner_id=' + userId + '&album_id=profile', tokenAccess)
			;
			
		$('#user-photos-list').empty()
		
		if ( getPhotos.length === 0 ) {
			view.userDontHavePhotos();
		} else if ( getPhotos === 'nothing' ) {
			getPhotos = await services.getData('photos.get', 'owner_id=' + userId, tokenAccess);
			view.userPhotos(getFriends);
		} else {
			view.userPhotos(getPhotos);
		}

		$('#user-page').hide();
		$('#user-photos').show();
		$('#back-page').show();
	});
}

export default Controller;
