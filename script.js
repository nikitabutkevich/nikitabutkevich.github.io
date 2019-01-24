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