//controller

'use strict';

document.querySelector("#filter-author").onchange = function (){
	var card = document.querySelectorAll('.card-item'),
		selectedOption = $('#filter-author option:selected').text()
		;

	if ( document.querySelectorAll('#filter-author option')[0].selected ){
		card.forEach(function(elem){
				elem.style.display = 'flex';
		});
	} else {
		card.forEach(function(elem){
			if ( elem.innerText.search(selectedOption) == -1 ){
				elem.style.display = 'none';
			} else {
				elem.style.display = 'flex';
			}
		});
	}
};


document.querySelector("#filter-genre").onchange = function (){
	var card = document.querySelectorAll('.card-item'),
		selectedOption = $('#filter-genre option:selected').text()
		;

	if ( document.querySelectorAll('#filter-genre option')[0].selected ){
		card.forEach(function(elem){
				elem.style.display = 'flex';
		});
	} else {
		card.forEach(function(elem){
			if ( elem.innerText.search(selectedOption) == -1 ){
				elem.style.display = 'none';
			} else {
				elem.style.display = 'flex';
			}
		});
	}
};

document.querySelector("#filter-publisher").onchange = function (){
	var card = document.querySelectorAll('.card-item'),
		selectedOption = $('#filter-publisher option:selected').text()
		;

	if ( document.querySelectorAll('#filter-publisher option')[0].selected ){
		card.forEach(function(elem){
				elem.style.display = 'flex';
		});
	} else {
		card.forEach(function(elem){
			if ( elem.innerText.search(selectedOption) == -1 ){
				elem.style.display = 'none';
			} else {
				elem.style.display = 'flex';
			}
		});
	}
};


document.querySelector('#input-search').oninput = function(){
    var inputValue = this.value.trim(),
        card = document.querySelectorAll('.card-item')
        ;

  	if ( inputValue != '' ) {
  		card.forEach(function(elem){
  			if ( elem.innerText.search(inputValue) == -1 ){
  				elem.style.display = 'none';
  			} else {
  				elem.style.display = 'flex';
  			}
  		});
  	} else {
  		card.forEach(function(elem){
  			elem.style.display = 'flex';
  		});
  	}
};