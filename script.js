//Task 1
function cloneInput(){
	var input = document.getElementById('body__input');
	var button = document.getElementById('body__button');

	button.addEventListener('click', function(e){
		var cloneInput = input.cloneNode();
		document.body.appendChild(cloneInput);
	});
}
cloneInput();

function table(){
	var table = document.getElementById('table');
	
	function bordered(){
		table.className = "bordered";
	}

	function striped(){
		table.className = "striped";
	}

	function highlight(){
		table.className = "highlight";
	}

	table.addEventListener('click', bordered);
	table.addEventListener('click', striped);
	table.addEventListener('click', highlight);
}
table();
