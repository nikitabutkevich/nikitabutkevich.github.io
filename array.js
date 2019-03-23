console.log('Задание №1');
var randomArray = [];
var len = 12; //длина массива
var max = 10; //максимально число которое может быть выведено в ячейке массива

function getRandomArray(len) {
	for (var i = 0; i < len; i++) {
		randomArray.push(Math.random());
		secondRandomArray.push(Math.floor(Math.random() * Math.floor(max)));
	}
}

console.log(getRandomArray(len));
console.log(randomArray);
console.log(' ');


console.log('Задание №4');
function deleteElementArray(randomArray, len) {
	for (var i = 0; i <= len; i++) {
		if (randomArray[i] < 3) {
			randomArray.splice(i, 1);
			randomArray.unshift(0);
		}
	}
	
	console.log(randomArray);
}

console.log(deleteElementArray(randomArray, len));

console.log('Задание №6');
var interim = 0;

function arrayBubbleSort(randomArray, len) {
	for (var i = 0; i < len-1; i++) {
		for (var t = 0; t < len-1; t++) {
			if (randomArray[t] > randomArray[t+1]) {
				interim = randomArray[t];
				randomArray[t] = randomArray[t+1];
				randomArray[t+1] = interim;
			}
		}
	}
	console.log(randomArray);
}

console.log(arrayBubbleSort(randomArray, len));

var sumArray = [];
var sum = 0;

function getSumElementArray(randomArray, secondRandomArray) {
	for (var j = 0; j < len; j++) {
		sum = randomArray[j] + secondRandomArray[j];
		sumArray.push(sum);
	}
	console.log(sumArray);
}

console.log(getSumElementArray(randomArray, secondRandomArray));
