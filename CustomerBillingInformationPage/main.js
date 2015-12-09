/*
/update/cardtype/{cardType}/billingname/{billingName}/billingaddress/{billingAddress}/cardnumber/{cardNumber}/expdate/{expDate}/cvcnumber/{cvcNumber}
*/

function submitBIForm() {
    var path = "https://damp-reef-8180.herokuapp.com/services/customerservice/customer/" + localStorage.getItem("cust_id");
    console.log("LOL1");
    var userResponse = $.get(path, function( data ){
        var userResponseData = data;
    });
    console.log("LOL2");
    customerXML = userResponseData.getElementsByTagName("Customer");
    custBILink = customerXML[0].getElementsByTagName("link")[4].childNodes[0].nodeValue;
    custBIURL = customerXML[0].getElementsByTagName("url")[0].childNodes[0].nodeValue;

    cardType = $('#MyForm').find('input[name="cardType"]').val();
    billingName = $('#MyForm').find('input[name="billingName"]').val();
    billingAddress = $('#MyForm').find('input[name="billingAddress"]').val();
    cardNumber = $('#MyForm').find('input[name="cardNumber"]').val();
    expDate = $('#MyForm').find('input[name="expDate"]').val();
    cvcNumber = $('#MyForm').find('input[name="cvcNumber"]').val();
    console.log(cardType + "/" + billingName);
    localStorage['BIPrompt'] = 0;

    var BIResponse = $.get(custBIURL, function(data){
    }.done(function(data){
    BIResponseData = data;
    }));
    var currentBillingInfoXML = data.getElementsByTagName("BillingInfo");
    var currentBillingInfoLink = currentBillingInfoXML.getElementsByTagName("link")[0].childNodes[0].nodeValue;
    var currentBillingInfoURL = currentBillingInfoLink.getElementsByTagName("url")[0].childNodes[0].nodeValue;
    var currentBillingInfoPath = currentBillingInfoURL + "cardtype/" + cardType + "/billingname/" + billingname + "/billingaddress/" + billingAddress + "/cardnumber/" + cardNumber + "/expdate/" + "/cvcnumber/" + cvcNumber;
    $.post(currentBillingInfoPath, function( data ){
            console.log("path is now " + currentBillingInfoPath);
            window.location("../CustomerHomePage");
    });        
    return false;
}


