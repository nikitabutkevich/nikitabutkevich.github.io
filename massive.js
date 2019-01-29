var len = +prompt('Введите длинну массива', '');
var randomArray = [];

function getRandomArray(len) {
	for (var i = 0; i < len; i++) {
		randomArray.push(Math.random());
	}
}

console.log(getRandomArray(len));
console.log(randomArray);
