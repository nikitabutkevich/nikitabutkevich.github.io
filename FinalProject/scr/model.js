//model

class Model {
	sendForm(url){
		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'JSONP',
			data: $("#form-add-post").serialize(),
			success: (response) => {
				alert(response);
			},
			error: (response) => {
				alert(response);
			}
		});
	}
}

export default Model;
