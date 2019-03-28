'use strict';

var data;

function getData(){
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://my-json-server.typicode.com/nikitabutkevich/demo/books', false);

	xhr.send();

	if ( xhr.status != 200 ){
		console.log( xhr.status + ": " + xhr.statusText );
	} else {
		data = JSON.parse(xhr.responseText);
	}
}
getData();

function putDataToLocalStorage(){
	data.forEach(function(elem){
		localStorage.setItem("id" + elem.id, JSON.stringify(elem));
		addBookCardElementToPage(elem);
	});
}
putDataToLocalStorage();

function addBookCardElementToPage(elem){
	var blockCards = document.getElementById('cards'),
		card = document.createElement('div'),
		cardImage = document.createElement('div'),
		cardInfo = document.createElement('div'),
		imageTag = document.createElement('img'),
		pTagInfoName = document.createElement('p'),
		pTagInfoGenre = document.createElement('p'),
		pTagInfoAuthor = document.createElement('p')
		;
	card.setAttribute('class', 'card-item');
	card.setAttribute('id', 'card' + JSON.parse(localStorage.getItem("id" + elem.id)).id);
	cardImage.setAttribute('class', 'card-item__image');
	cardInfo.setAttribute('class', 'card-item__info');
	
	imageTag.setAttribute('class','card-item__img');
	imageTag.setAttribute('src', '' + JSON.parse(localStorage.getItem("id" + elem.id)).coverURL);
	imageTag.setAttribute('alt','' + JSON.parse(localStorage.getItem("id" + elem.id)).bookTitle);

	pTagInfoName.setAttribute('class', 'card-item__info-name');
	pTagInfoGenre.setAttribute('class', 'card-item__info-genre');
	pTagInfoAuthor.setAttribute('class', 'card-item__info-author');

	pTagInfoName.innerHTML = JSON.parse(localStorage.getItem("id" + elem.id)).bookTitle;
	pTagInfoGenre.innerHTML = JSON.parse(localStorage.getItem("id" + elem.id)).genre;
	pTagInfoAuthor.innerHTML = JSON.parse(localStorage.getItem("id" + elem.id)).authorName;

	cardInfo.appendChild(pTagInfoName);
	cardInfo.appendChild(pTagInfoGenre);
	cardInfo.appendChild(pTagInfoAuthor);

	cardImage.appendChild(imageTag);

	card.appendChild(cardImage);
	card.appendChild(cardInfo);

	blockCards.appendChild(card);
}

function eventSearchBook(){
	var buttonSearch = document.getElementById('button-search'),
		searchValue = document.getElementById('input-search').value,
		searchRegExp = /D/ig
		;

	for (var i = 1; i < localStorage.length+1; i++){
		if ( JSON.parse(localStorage.getItem('id' + i)).bookTitle === searchValue ){
			document.getElementById('card' + i).setAttribute('class', 'hide');
		}
	}
}