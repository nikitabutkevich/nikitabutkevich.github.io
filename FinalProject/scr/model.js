//model

class Model {
	sendForm(url){
		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'JSONP',
			data: $("#form-add-post").serialize(),
			success: (response) => {
				console.log(response);
			},
			error: (response) => {
				console.log(response);
			}
		});
	}
}

export default Model;
