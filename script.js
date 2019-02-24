//Task 2
var emailForm = document.forms.sendEmailAddress,
	textMessage = emailForm.elements.text,
	sendButton = emailForm.elements.send,
	cleanButton = emailForm.elements.clean;

cleanButton.addEventListener('click', function(e){
	textMessage.value = '';
});

sendButton.addEventListener('click', function(e){
	emailForm.submit();
});


//Task 5
function changeWord(){
	var string = 'Математическое понятие функции выражает интуитивное представление о том, как одна величина полностью определяет значение другой величины. Так, значение переменной x {\displaystyle x} x однозначно определяет значение выражения x 2 {\displaystyle x^{2}} x^{2}, также значение месяца однозначно определяет значение следующего за ним месяца. Другой пример функции: каждому человеку можно однозначно поставить в соответствие его биологическую мать.';

	var result = string.replace(/функция/ig, 'функция');
	console.log(result);
}
changeWord();


//Task 6
function correctString(){
	var string = "9.15 am", 
		regExp = /\d{1,}.\d{2}\s\D{2}/ig,
		result = regExp.test(string);
	
	console.log(result);
}
correctString();
