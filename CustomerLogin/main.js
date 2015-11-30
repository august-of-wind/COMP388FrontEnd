function submitForm() {
	var email = $('#MyForm').find('input[name="email"]').val();
	var pwd = $('#MyForm').find('input[name="pwd"]').val();
	var path = 'https://damp-reef-8180.herokuapp.com/services/customerservice/customerlogin/' + email + '/' + pwd;
	console.log(email+pwd);
    $.get(path, function( data ){
        alert('Data Loaded:' + data);
    });
    return false;
}