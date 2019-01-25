//Task 1
/*
function triangel(cathet1, cathet2, hypotenuse){
	if ( hypotenuse ** 2 == cathet1 ** 2 + cathet2 ** 2) {
		return true;
	} else {
		return false;
	}
}

console.log(triangel(2, 2, 1));
*/

//Task 2

/*function repeat(str, n) {
	var answer;

	for (var i = 1; i <= n; i++) {
		answer = answer + str;
		return answer;
	}
}

console.log(repeat('Привет', 2));*/


//Task 10

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
}


/*let people = +prompt('Enter the number of people', '');
let tabel = +prompt('Enter the number of tabel', '');

function group(people, tabel) {
	if (tabel < people / 2) return 'tabel less than people'
		else return 'it is fine';
}

console.log(group(people, tabel));*/

/*let point = +prompt('Enter the point', '');
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
			console.log('Wrong point');
	}
}

console.log(rage(point));*/


let numberZero = +prompt('Enter the number', '');

function zero(numberZero){
	for (var i = 0; i != numberZero ; i++) {
		
	}
}
