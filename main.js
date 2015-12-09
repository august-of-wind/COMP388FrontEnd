function searchProducts(){
    var url = "https://damp-reef-8180.herokuapp.com/services/productservice/product/";
    $.ajax({
      url: url,
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
          "</td></tr>"
        }
        document.getElementById("prodTable").innerHTML = table + "</table>";

      });
  }