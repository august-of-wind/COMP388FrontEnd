  $(document).ready(function()
  {
    var path = "https://damp-reef-8180.herokuapp.com/services/sellerservice/seller/" + localStorage.getItem("seller_id");
    var userResponse = $.get(path, function( data ){
      }).done(function(data) {
        sellerXML = data.getElementsByTagName("Seller");
        sellerName = sellerXML[0].getElementsByTagName("sellerName")[0].childNodes[0].nodeValue;
        links = sellerXML[0].getElementsByTagName("link");
        updatePwdLink = links[1].getElementsByTagName("url")[0].childNodes[0].nodeValue;


        document.getElementById("sellerName").innerHTML = "Welcome " + sellerName + "!";
      })
    });
  function logout() {
    localStorage.clear();
    window.location.href = "/";
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






// function getAllProducts(){
//
//   $.ajax({
//           url: "https://damp-reef-8180.herokuapp.com/services/productservice/product/",
//           method: 'GET',
//         }).done(function(data) {
//           var i;
//           var table="<table class='table'><tr><th>ID</th><th>Detail</th><th>Price</th></tr>";
//           var x = data.getElementsByTagName("Product");
//           for (i = 0; i <x.length; i++) {
//             table += "<tr><td>" +
//             x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue +
//             "</td><td>" +
//             x[i].getElementsByTagName("productDetail")[0].childNodes[0].nodeValue +
//             "</td><td>" +
//             x[i].getElementsByTagName("productPrice")[0].childNodes[0].nodeValue +
//             "</td></tr>";
//           }
//         document.getElementById("div2").innerHTML = table + "</table>";
//         });
//   }
