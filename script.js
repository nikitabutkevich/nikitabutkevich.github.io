/*console.log('Задание №1');

function getArray() {
	let arrayObject = [];
	let max = 50;	

	for (var i = 0; i < 10; i++) {
		let randomNumber = Math.floor(Math.random() * Math.floor(max) + 1);
		let randomObject = {
			initial: randomNumber,
			sqrt: Math.sqrt(randomNumber),
			floor: 'boolean1',
			ceil: 'boolean2'
		}
		randomObject.sqrtHund = Math.sqrt(randomNumber).toFixed(2);  //Task #2
		arrayObject.push(randomObject);
	}

	console.log(arrayObject);
}
console.log(getArray());


console.log('Задание №3');
function palindrome(){
	let userString = prompt('Enter the string', '');

	let userStringRevers = userString.split("").reverse().join("");
	
	if (userString == userStringRevers) console.log('It is a palindrome');
		else console.log('Not a palindrome');
	
	
}
console.log(palindrome());*/
/*
//Task 8
function getWeekDay(){
	var day = new Date();
	var numberOfDay = day.getDay();

	switch (numberOfDay){
		case 0: 
			alert('Воскресенье');
			break;
		case 1: 
			alert('Понедельник');
			break;
		case 2: 
			alert('Вторник');
			break;
		case 3: 
			alert('Среда');
			break;
		case 4: 
			alert('Четверг');
			break;
		case 5:
			alert('Пятница');
			break;
		case 6: 
			alert('Суббота');
			break;
		default:
    			alert('Нет такого дня недели');
	}
}

console.log(getWeekDay());*/


//Task 9

function getDate(){
	var userDay = +prompt('Enter the day', '');
	var userMonth = +prompt('Enter the month', '');
	var userYear = +prompt('Enter the year', '');
	var userEnterDate = new Date(userYear, userMonth-1, userDay+1);
	
	var numberWeekDay = userEnterDate.getDay();

	/*if (numberWeekDay == 0 || numberWeekDay == 1) numberWeekDay = numberWeekDay;
		else numberWeekDay;*/

	switch (numberWeekDay){
		case 0: 
			alert('0Воскресенье');
			break;
		case 1: 
			alert('1Понедельник');
			break;
		case 2: 
			alert('2Вторник');
			break;
		case 3: 
			alert('3Среда');
			break;
		case 4: 
			alert('4Четверг');
			break;
		case 5:
			alert('5Пятница');
			break;
		case 6: 
			alert('6Суббота');
			break;
		default:
    			alert('Нет такого дня недели');
	}
}
console.log(getDate());
/*

function getDateBirthday(){
	var userDay = +prompt('Enter the day', '');
	var userMonth = +prompt('Enter the month', '');
	var userYear = +prompt('Enter the year', '');
	var userEnterDateBirthday = new Date(userYear, userMonth-1, userDay+1);
	console.log(userEnterDateBirthday);
	var numberWeekDay = userEnterDateBirthday.getDay();

	console.log(numberWeekDay);

}
console.log(getDateBirthday());*/
