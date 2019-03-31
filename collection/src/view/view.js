//view 

'use strict';

function addBookCardElementToPage(elem){
	var blockCards = document.getElementById('cards'),
		card = document.createElement('div'),
		cardImage = document.createElement('div'),
		cardInfo = document.createElement('div'),
		imageTag = document.createElement('img'),
		pTagInfoName = document.createElement('p'),
		pTagInfoGenre = document.createElement('p'),
		pTagInfoAuthor = document.createElement('p'),
		pTagInfoPublisher = document.createElement('p')
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
	pTagInfoPublisher.setAttribute('class', 'card-item__info-publisher');

	pTagInfoName.innerHTML = JSON.parse(localStorage.getItem("id" + elem.id)).bookTitle;
	pTagInfoGenre.innerHTML = JSON.parse(localStorage.getItem("id" + elem.id)).genre;
	pTagInfoAuthor.innerHTML = JSON.parse(localStorage.getItem("id" + elem.id)).authorName;
	pTagInfoPublisher.innerHTML = JSON.parse(localStorage.getItem("id" + elem.id)).edition;

	cardInfo.appendChild(pTagInfoName);
	cardInfo.appendChild(pTagInfoGenre);
	cardInfo.appendChild(pTagInfoAuthor);
	cardInfo.appendChild(pTagInfoPublisher);

	cardImage.appendChild(imageTag);

	card.appendChild(cardImage);
	card.appendChild(cardInfo);

	blockCards.appendChild(card);
}