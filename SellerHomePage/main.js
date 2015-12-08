  $(document).ready(function()
  {
    var path = "https://damp-reef-8180.herokuapp.com/services/sellerservice/seller/" + localStorage.getItem("seller_id");
    var userResponse = $.get(path, function( data ){
    }).done(function(data) {
      sellerXML = data.getElementsByTagName("Seller");
      sellerName = sellerXML[0].getElementsByTagName("sellerName")[0].childNodes[0].nodeValue;
      links = sellerXML[0].getElementsByTagName("link");
      addProductLink = links[0].getElementsByTagName("url")[0].childNodes[0].nodeValue;
      updatePwdLink = links[1].getElementsByTagName("url")[0].childNodes[0].nodeValue;
      sellerReviews = links[2].getElementsByTagName("url")[0].childNodes[0].nodeValue;
      sellerOrders = links[3].getElementsByTagName("url")[0].childNodes[0].nodeValue;
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

  function addProductForm() {
    var newProd = $('#AddProduct').find('input[name="addProd"]').val();
    var newProdPrice = $('#AddProduct').find('input[name="addProdPrice"]').val();
    var path = addProductLink + "/productdetail/" + newProd + "/productprice/" + newProdPrice;
    console.log("newProduct is " + newProd);
    console.log("path is " + path);

    $.post(path, function( data ){
      console.log('Data Loaded:' + data);
      window.location = ".";
    });
    return false;
  }







