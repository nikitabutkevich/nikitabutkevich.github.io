//Task 1
//var element = document.getElementById('elem');
//element.className = 'www';

//Task 2
//как я понимаю мы сам класс удалить не можем, можем очистить его имя, т.е. присвоить пустую строку
//if (element.className == 'www') element.className = '';

//Task 3
function recursiveSearchTags(body, tag){
	var divChild = body.getElementsByTagName(tag);
	return divChild;
}
console.log(recursiveSearchTags(document.body, 'div'));
