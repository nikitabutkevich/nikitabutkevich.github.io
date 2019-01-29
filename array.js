console.log('Задание №1');
var randomArray = [];
var len = 12; //длина массива
var max = 10; //максимально число которое может быть выведено в ячейке массива

function getRandomArray(len) {
	for (var i = 0; i < len; i++) {
		randomArray.push(Math.random());
	}
}

console.log(getRandomArray(len));
console.log(randomArray);
console.log(' ');
