function submitLogInForm() {
	var email = $('#MyForm').find('input[name="email"]').val();
	var pwd = $('#MyForm').find('input[name="pwd"]').val();
	var path = 'https://damp-reef-8180.herokuapp.com/services/sellerservice/sellerlogin/' + email + '/' + pwd;
	console.log(email+pwd);

    $.get(path, function( data ){
        if(!data){
            document.getElementById('errorDiv').innerHTML = 'Your email and/or password were incorrect. Please try logging in again.';
        }
        else{
            var seller = data.getElementsByTagName("Seller");
            var seller_id = seller[0].getElementsByTagName("id")[0].childNodes[0].nodeValue
            localStorage['seller_id'] = seller_id
            window.location = "../SellerHomePage"
        }
    });
    return false;
}

function submitSignUpForm() {
    var email = $('#MyForm').find('input[name="email"]').val();
    var pwd = $('#MyForm').find('input[name="pwd"]').val();
    var path = 'https://damp-reef-8180.herokuapp.com/services/sellerservice/seller/sellersignup/sellername/' + email + '/sellerpassword/' + pwd;
    console.log(email+pwd);

    $.post(path, function( data ){
        submitLogInForm();
    });
    return false;
}
