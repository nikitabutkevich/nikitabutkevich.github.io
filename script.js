<form name='sendEmailAddress' method='POST' action="mailto:address@domen.domen">
		<input type="text" id="text" placeholder="Enter some text">
		<input type="button" id='send' value='Send'>
		<input type="button" id='clean' value='Clean'>
	</form>
	<br>
	<form name='feedBackForm' method='POST' action="">
		<label for="name">Name</label>
		<input id="name" type="text" placeholder="Ivan">
		<br>
		<label for="email">E-mail</label>
		<input id="email" type="email" placeholder="example@google.com">
		<br>
		<label for="phone">Phone</label>
		<input id="phone" type="text" placeholder="+375292512285">
		<br>
		<label for="message">Message</label><br>
            	<textarea name="message" id="message" cols="40" rows="6"></textarea>
		<br>
		<input id="send" type="button" value="Send">
	</form>



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


regForName = /\D{1,}/i;
regForEmail = /.{1,}@\D{1,}.\D{1,}/i;
regForPhone = /\+\d{11}/i;
