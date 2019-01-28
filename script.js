//Task 1
console.log('Задание №1');

function triangel(cathet1, cathet2, hypotenuse){
	if ( hypotenuse ** 2 == cathet1 ** 2 + cathet2 ** 2) {
		return true;
	} else {
		return false;
	}
}
console.log(triangel(2, 2, 1));
console.log(' ');


//Task 2
console.log('Задание №2');
let str = prompt('Enter the string', '');
let n = 2;

function repeat(str) {
	for (i = 0; i < n; i++) {
		str += str;
		return str;
	}
}

console.log(repeat(str, n));
console.log('');


//Task 3
console.log('Задание №3');

let people = +prompt('Введите число учащихся', '');
let tabel = +prompt('Введите количество столов', '');

function group(people, tabel) {
	if (tabel < people / 2) return 'Столов меньше чем учащихся'
		else return 'Столов хватает';
}
console.log(group(people, tabel));
console.log('');


//Task 4

console.log('Задание №4');
let point = +prompt('Введите оценку по 10-бальной системе', '');
console.log('You enter ' + point);
function rage(point) {
	switch (point){
		case 10: 
			console.log('In Russian equivalent is  5+');
			console.log('In US equivalent is  A+'); 
			break;
		case 9: 
			console.log('In Russian equivalent is  5');
			console.log('In US equivalent is  A'); 
			break;
		case 8: 
			console.log('In Russian equivalent is  4+');
			console.log('In US equivalent is  A-'); 
			break;
		case 7: 
			console.log('In Russian equivalent is  4');
			console.log('In US equivalent is  B+'); 
			break;
		case 6: 
			console.log('In Russian equivalent is  4-');
			console.log('In US equivalent is  B'); 
			break;
		case 5: 
			console.log('In Russian equivalent is  3+');
			console.log('In US equivalent is  B-'); 
			break;
		case 4: 
			console.log('In Russian equivalent is  3');
			console.log('In US equivalent is  C+'); 
			break;
		case 3: 
			console.log('In Russian equivalent is  3-');
			console.log('In US equivalent is  C'); 
			break;
		case 2: 
			console.log('In Russian equivalent is  2');
			console.log('In US equivalent is  F+'); 
			break;
		case 1: 
			console.log('In Russian equivalent is  1');
			console.log('In US equivalent is  F'); 
			break;
		default: 
			console.log('Это уже не 10-бальная система :(');
	}
}
console.log(rage(point));
console.log(' ');


//Task 5

console.log('Задание №5');
function ziro() {
	do {
		numberZiro = +prompt('Введите любое число ', '');
	} while ( !(numberZiro == 0) );
}

console.log(ziro());
console.log(' ');


//Task 6

console.log('Задание №6');
function zeroToHundred() {
	let numberSum = 0;
	let numberOfPromptUser = 0;
	do {
		numberPromptUser = +prompt('Введите любое число ', '');
		numberSum += numberPromptUser;
		numberOfPromptUser++
	} while ( numberSum < 100 );
	
	console.log(numberSum + ' сумма введенных чисел');
	return numberOfPromptUser + ' количество введенных чисел';
}

console.log(zeroToHundred());
console.log(' ');


//Task 7

console.log('Задание №7')
let numberSimp = +prompt('Введите простое число', '');

function simpleNumber(numberSimp) {
	if (numberSimp == 2 || numberSimp == 3) return numberSimp + ' простое число';
		
		else if (numberSimp % 2 == 0 || numberSimp % 3 == 0) return numberSimp + ' составное число';
		
		else return numberSimp + ' простое число';
}

console.log(simpleNumber(numberSimp));
console.log(' ');


//Task 8

console.log('Задание №8');
let month = +prompt('Введите номер месяца', '');

function season(month) {
	switch (month){
		case 12:
		case 1:
		case 2: 
			console.log('Зима');
			break;
		case 3:
		case 4:
		case 5: 
			console.log('Весна');
			break;
		case 6:
		case 7:
		case 8: 
			console.log('Лето');
			break;
		case 9:
		case 10:
		case 11: 
			console.log('Осень');
			break;
		default: 
			console.log('Извините, но в году только 12 месяцев');
	}
}
console.log(season(month));
console.log(' ');


//Task 9
console.log('Задание №9');

function numberSeven() {

	for (var i = 99; i > 10; i--) {
		if (i % 7 == 0 ) {
			console.log(i + ' число делящееся на 7');
		}

		if (i % 10 == 7 ) {
			console.log(i + ' число заканчивающееся на 7');
		}
	}
}

console.log(numberSeven());
console.log(' ');


//Task 10
/*console.log('Задание №10');

function getDev(number) {
	if ( number < 2 || number > 20) return;
	var counter = 0;

	for ( i = 1; i <= number; i++) {
		if (!(number % i)){
			console.log(i);
			counter++;
		}
	}
}

function fun() {
	for (var i = 2;  i >= 20; i++) {
		console.log('This is # ' + i);
		getDev(i);
	}
}*/


//Task 12 
console.log('Задание №12');
let unit = prompt('Введите единицу измерения: «Кб», «Мб», «Гб»', '');
let size = +prompt('Введите размер в выбранном формате', '');

function bite(unit, size) {
	switch (unit) {
		case 'Кб':
			console.log('В ' + size + ' Кб ' + size * 1024 + ' Байт');
			break;
		case 'Мб':
			console.log('В ' + size + ' Мб ' + size * 1048576 + ' Байт');
			break;
		case 'Гб':
			console.log('В ' + size + ' Гб ' + size * 1073741824 + ' Байт');
			break;
		default: 
			console.log('Не верно введина единица измерения!!!');
	}
}

console.log(bite(unit, size));
console.log(' ');


//Task 15 
console.log('Задание №15');
let numberPencil = +prompt('Введите количество карандашей', '');

function pencil(numberPencil) {
	if ( numberPencil == 11 || numberPencil % 100 == 11) return 'Вы ввели ' + numberPencil + ' карандашЕЙ';
	else if ( numberPencil % 10 == 1 ) return 'Вы ввели ' + numberPencil + ' карандаш';
	else if ( numberPencil % 10 == 2 || numberPencil % 10 == 3 || numberPencil % 10 == 4) return 'Вы ввели ' + numberPencil + ' карандашА';
	else return 'Вы ввели ' + numberPencil + ' карандашЕЙ';
}

console.log(pencil(numberPencil));
console.log(' ');
