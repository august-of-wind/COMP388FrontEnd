  $(document).ready(function()
  {
    var path = "https://damp-reef-8180.herokuapp.com/services/customerservice/customer/" + localStorage.getItem("cust_id");
    var userResponse = $.get(path, function( data ){
        //alert('Customer GET:' + data + path);
      }).done(function(data) {
        customerXML = data.getElementsByTagName("Customer");
        customerName = customerXML[0].getElementsByTagName("customerName")[0].childNodes[0].nodeValue;
        customerAddr = customerXML[0].getElementsByTagName("customerAddr")[0].childNodes[0].nodeValue;
        links = customerXML[0].getElementsByTagName("link");
        myOrders = links[0].getElementsByTagName("url")[0].childNodes[0].nodeValue;
        updatePwdLink = links[1].getElementsByTagName("url")[0].childNodes[0].nodeValue;
        updateAddrLink = links[2].getElementsByTagName("url")[0].childNodes[0].nodeValue;
        myBI = links[4].getElementsByTagName("url")[0].childNodes[0].nodeValue;

        document.getElementById("customerName").innerHTML = "Welcome " + customerName + "!";
        document.getElementById("customerAddr").innerHTML = "Your current account address is " + customerAddr + ".";

      })
    });
  function logout() {
    localStorage.clear();
    window.location.href = "/";
  }

  function submitAddrForm() {
    var newAddr = $('#UpdateAddress').find('input[name="update"]').val();
    var path = updateAddrLink + newAddr;
    console.log("newAddr is " + newAddr);
    console.log("path is " + path);

    $.post(path, function( data ){
      console.log('Data Loaded:' + data);
      window.location = ".";
    });

    return false;
  }

  function submitPwdForm() {
    var newPwd = $('#UpdatePwd').find('input[name="update"]').val();
    var path = updatePwdLink + newPwd;
    console.log("newPwd is " + newPwd);
    console.log("path is " + path);

    $.post(path, function( data ){
      console.log('Data Loaded:' + data);
      window.location = ".";
    });
    return false;
  }






  function getAllProducts(){

    $.ajax({
      url: "https://damp-reef-8180.herokuapp.com/services/productservice/product/",
      method: 'GET',
    }).done(function(data) {
      var i;
      var table="<table class='table'><tr><th>ID</th><th>Detail</th><th>Price</th></tr>";
      var x = data.getElementsByTagName("Product");
      for (i = 0; i <x.length; i++) {
        table += "<tr><td>" +
        x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("productDetail")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("productPrice")[0].childNodes[0].nodeValue +
        "</td></tr>";
      }
      document.getElementById("div2").innerHTML = table + "</table>";
    });
  }
