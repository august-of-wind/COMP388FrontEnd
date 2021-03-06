function submitForm() {
	var email = $('#MyForm').find('input[name="email"]').val();
	var pwd = $('#MyForm').find('input[name="pwd"]').val();
	var path = 'https://damp-reef-8180.herokuapp.com/services/customerservice/customerlogin/' + email + '/' + pwd;
	console.log(email+pwd);

    $.get(path, function( data ){
        if(!data){
            document.getElementById('errorDiv').innerHTML = 'Your email and/or password were incorrect. Please try logging in again.';
        }
        else{
            var cust = data.getElementsByTagName("Customer");
            var cust_id = cust[0].getElementsByTagName("id")[0].childNodes[0].nodeValue
            localStorage['cust_id'] = cust_id
            window.location = "../CustomerHomePage"
        }
    });
    return false;
}

function submitSignUpForm() {
    console.log("We have reached the signup form");
    var email = $('#MyForm').find('input[name="email"]').val();
    var pwd = $('#MyForm').find('input[name="pwd"]').val();
    //A log to see if this was a user's initial signup
    localStorage['BIPrompt'] = 1;
    var path = 'https://damp-reef-8180.herokuapp.com/services/customerservice/customer/customersignup/customername/' + email + '/customerpassword/' + pwd;
    console.log(email+pwd);

    $.post(path, function( data ){
        submitForm();
    });
    return false;
}
