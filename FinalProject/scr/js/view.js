//view

class View {
	fillInfoToMyPage(data){
		var userName = document.getElementById('user-page-name'),
			userPhoto = document.getElementById('user-page-photo'),
			onlineStatus = document.getElementById('user-page-online'),
			dataBday = document.getElementById('user-page-bdate'),
			friendsNumber = document.getElementById('user-page-friends'),
			photoNumber = document.getElementById('user-photo'),
			videoNumber = document.getElementById('user-page-video'),
			buttonSendPost = document.getElementById('user-button-send-post'),
			infoBlock = document.getElementById('user-page__info-details__blocks-friends')
			;

		infoBlock.setAttribute('name', data.id);
		userName.innerText = data.first_name + ' ' + data.last_name;
		userPhoto.setAttribute('src', data.photo_200_orig);
		onlineStatus.innerText = this.userOnline(data.online);
		dataBday.innerText = data.bdate;
		friendsNumber.innerText = data.counters.friends;
		photoNumber.innerText = data.counters.photos;
		videoNumber.innerText = data.counters.videos;
		buttonSendPost.setAttribute('name', data.id);

	}

	writeListFriends(dataArray){
		$('.list-friend__item').remove();

		dataArray.forEach((elem) => {
			var list = document.getElementById('list-friends'),
				item = document.createElement('div'),
				itemName = document.createElement('div'),
				image = document.createElement('img'),
				name = document.createElement('a'),
				onlineStatus = document.createElement('span'),
				cityName = document.createElement('p')
				;

			item.setAttribute('class', 'list-friend__item');
			item.setAttribute('value', elem.id);
			itemName.setAttribute('value', elem.id);
			image.setAttribute('value', elem.id);
			name.setAttribute('value', elem.id);
			cityName.setAttribute('value', elem.id);
			onlineStatus.setAttribute('value', elem.id);
			itemName.setAttribute('class', 'list-friend__item-name');

			//cityName.innerText = 'г. ' + elem.city.title;

			image.setAttribute('src', elem.photo_50);
			image.setAttribute('class', 'list-friend__item-photo');
			
			name.setAttribute('target', '_blank');
			name.innerText = elem.first_name + ' ' + elem.last_name + ' ';
			onlineStatus.innerText = this.userOnline(elem.online);

			item.appendChild(image);

			itemName.appendChild(name);			
			itemName.appendChild(onlineStatus);
			itemName.appendChild(cityName);
			
			item.appendChild(itemName);
			
			list.appendChild(item);
		});
	}

	userOnline(online){
		if ( online === 1) {
			return "Онлайн";
		} else return "Оффлайн";
	}

	writeWall(dataWall){
		$('.my-post__item').remove();

		dataWall.forEach((item) => {
			if ( 'attachments' in item ){
				this.attachmentPost(item);
			} else if ( 'copy_history' in item ){
				this.rePost(item);
			} else {
				this.writePostWithOnlyText(item);
			}
		});
	}

	attachmentPost(item){
		if ( 'photo' in item.attachments[0] ) {
			this.writePost(item.attachments[0].photo.photo_75, item);
		}
	}

	rePost(item){
		if ( 'attachments' in item.copy_history[0] ){
			this.writeRePost(item);
		}
	}

	writePost( link, item ){
		var wall = document.getElementById('user-feed'),
			friendPost = document.createElement('div'),
			postLikes = document.createElement('span'),
			postComment = document.createElement('span'),
			postRepost = document.createElement('span'),
			postAttachment = document.createElement('div'),
			postFeedBack = document.createElement('div'),
			postImage = document.createElement('img'),
			postText = document.createElement('p'),
			deletePost = document.createElement('button'),
			deleteImg = document.createElement('img')
			;

		deleteImg.setAttribute('src', '././image/cancel.svg');
		deletePost.appendChild(deleteImg);
		deletePost.setAttribute('name', item.id);
		deletePost.setAttribute('value', item.owner_id);
		deletePost.setAttribute('class', 'user-post-delete');
		deletePost.setAttribute('title', 'Удалить');


		friendPost.setAttribute('class', 'my-post__item');
		postFeedBack.setAttribute('class', 'my-post__item-feed-back');
		postAttachment.setAttribute('class', 'my-post__item-attachments');	
		postText.setAttribute('class', 'my-post__item-text');	

		postLikes.innerText = ' Likes ' + item.likes.count;
		postComment.innerText = ' Commnet ' + item.comments.count;
		postRepost.innerText = ' Repost ' + item.reposts.count;
		
		postImage.setAttribute('src', link);
		
		//postText.innerText = item.copy_history.text;
		friendPost.appendChild(deletePost);
		friendPost.appendChild(postText);
		postAttachment.appendChild(postImage);
		postFeedBack.appendChild(postLikes);
		postFeedBack.appendChild(postComment);
		postFeedBack.appendChild(postRepost);
		friendPost.appendChild(postAttachment);
		friendPost.appendChild(postFeedBack);
		wall.appendChild(friendPost);
	}

	writeRePost( item ){
		if ( 'photo' in item.copy_history[0].attachments[0]){
			this.writePost(item.copy_history[0].attachments[0].photo.photo_604, item);
		}
	}

	writePostWithOnlyText(item){
		var wall = document.getElementById('user-feed'),
			friendPost = document.createElement('div'),
			postLikes = document.createElement('span'),
			postComment = document.createElement('span'),
			postRepost = document.createElement('span'),
			postFeedBack = document.createElement('div'),
			headerBlock = document.createElement('div'),
			postText = document.createElement('p'),
			deletePost = document.createElement('button'),
			deleteImg = document.createElement('img')
			;
		

		deleteImg.setAttribute('src', '././image/cancel.svg');
		deletePost.appendChild(deleteImg);
		deletePost.setAttribute('name', item.id);
		deletePost.setAttribute('value', item.owner_id);
		deletePost.setAttribute('class', 'user-post-delete');
		deletePost.setAttribute('title', 'Удалить');
		headerBlock.setAttribute('class', 'my-post-item_header');
		headerBlock.appendChild(deletePost);
		
		friendPost.setAttribute('class', 'my-post__item');
		postFeedBack.setAttribute('class', 'my-post__item-feed-back');
		postText.setAttribute('class', 'my-post__item-text');	

		postLikes.innerText = ' Likes ' + item.likes.count;
		postComment.innerText = ' Commnet ' + item.comments.count;
		postRepost.innerText = ' Repost ' + item.reposts.count;
		
		postText.innerText = item.text;

		friendPost.appendChild(headerBlock);
		friendPost.appendChild(postText);
		postFeedBack.appendChild(postLikes);
		postFeedBack.appendChild(postComment);
		postFeedBack.appendChild(postRepost);	
		friendPost.appendChild(postFeedBack);
		wall.appendChild(friendPost);
	}
}

export default View;