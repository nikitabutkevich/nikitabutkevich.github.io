function removeLoader(){
    	$( "#loading" ).fadeOut(500, function() {
      		$( "#loading" ).remove();
  		});  
	}

$(window).on('load', function () {
	removeLoader();
});

/***********Slider*************/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function curresntSlides(n) {
	showSides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName('block-slider__content');

	if (n > slides.length) {
		slideIndex = 1;
	} else if ( n < 1 ) {
		slideIndex = slides.length;
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}

	slides[slideIndex-1].style.display = 'flex';
}

/***********Button close*************/

var enterForm = $('#login-form'),
	regForm = $('#regist-form')
	;

enterForm.hide();
regForm.hide();


function loginButton (){
	enterForm.show();
}

function regButton (){
	regForm.show();
}

function buttonClose (){
	enterForm.hide();
	regForm.hide();
};