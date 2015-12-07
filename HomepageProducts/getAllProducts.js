$('#AllProducts').on('click', function(e){

	var xmlhttp = new XMLHttpRequest();
	var url = "https://damp-reef-8180.herokuapp.com/services/productservice/productD";

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var myArr = JSON.parse(xmlhttp.responseText);
		}
	};

	xmlhttp.open("GET", url, true);
	xmlhttp.send();
});
});


