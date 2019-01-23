//Задание №1

/*console.log('Задание №1. Функция с 3-мя аргументами');

var firstNumber = +prompt ('Enter first number', '');
var secondNumber = +prompt ('Enter second number', '');
var thirdNumber = +prompt ('Enter third number', '');

function firstArgument(firstNumber, secondNumber, thirdNumber) {
	if (firstNumber>secondNumber  && secondNumber>thirdNumber) {
		return (thirdNumber);
	} else if (secondNumber>thirdNumber && thirdNumber>firstNumber) {
		return (firstNumber);
	} else if (thirdNumber>firstNumber && firstNumber>secondNumber) {
		return (secondNumber);
	}
}

console.log('Наименьшее значение аргумента ' + firstArgument(firstNumber, secondNumber, thirdNumber));
*/


//Задание №2

/*console.log('Задание №2. Функция с аргументами суток, часов и минут');
let day = +prompt ('Enter the day', '');
let hour = +prompt ('Enter the hour', '');
let minutes = +prompt ('Enter the minutes', '');

function secondArgument(day, hour, minutes) {
	if (day < 1 || day > 31) {
		console.log('do not correct write the day');
	} else {	
		console.log('seconds in the day');
		console.log(day *= 86400);
	}
	console.log(' ');
	if (hour < 1 || hour > 24) {
		console.log('do not correct write the hour');
	} else {
		console.log('seconds in the hour');
		console.log(hour *= 3600);
	}
	console.log(' ');
	if (minutes < 1 || minutes > 60) {
		console.log('do not correct write the minutes');	
	} else {
		console.log('seconds in the minutes');
		console.log(minutes *= 60);
	}
}

console.log(secondArgument(day, hour, minutes));*/


//Задание №3 

/*console.log('Задание №3. Рекурсивная функция для подсчёта факториала');

let numb = +prompt ('Enter the number', '');

function fact(numb){
	if (numb == 1 || numb == 0) 
		return 1;
		else return numb * fact(numb-1);		
	}

console.log(fact(numb));*/