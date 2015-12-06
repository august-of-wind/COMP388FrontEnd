function submitForm() {
	var email = $('#MyForm').find('input[name="email"]').val();
	var pwd = $('#MyForm').find('input[name="pwd"]').val();
	var path = 'https://damp-reef-8180.herokuapp.com/services/customerservice/customerlogin/' + email + '/' + pwd;
	console.log(email+pwd);
    $.get(path, function( data ){
        alert('Data Loaded:' + data);

				var cust = data.getElementsByTagName("Customer");
				var cust_id = cust[0].getElementsByTagName("id")[0].childNodes[0].nodeValue
        //window.name = cust_id;
				localStorage['cust_id'] = cust_id
				window.location = "http://127.0.0.1:8000"
				//$(document).ready(function() {});
    });
    return false;
}
