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

  function getOrders(){

    $.ajax({
      url: sellerOrders,
      method: 'GET',
    }).done(function(data) {
      var i;
      var table="<table class='table'><tr><th>ID</th><th>Product Name</th><th>Order Status</th><th>Fulfill?</th></tr>";
      var x = data.getElementsByTagName("Order");
      for (i = 0; i <x.length; i++) {
        var orderLinkNode = x[i].getElementsByTagName("link");
        var orderURL = orderLinkNode[2].getElementsByTagName("url")[0].childNodes[0].nodeValue;
        console.log(orderURL);
        var button = '<button type="submit" name="submit" class="btn btn-default" onClick="fulfillOrder(\'' + orderURL + '\')">Fulfill My Order</button>';
        table += "<tr><td>" +
        x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("productName")[0].childNodes[0].nodeValue
        + "</td><td>" +
        x[i].getElementsByTagName("status")[0].childNodes[0].nodeValue
        + "</td><td>" + button
      }
      document.getElementById("orderTable").innerHTML = table + "</table>";
    });
}

function getSellerReview(){
      $.ajax({
      url: sellerOrders,
      method: 'GET',
    }).done(function(data) {
      var i;
      var table="<table class='table'><tr><th>ID</th><th>Product Name</th><th>Order Status</th><th>Fulfill?</th></tr>";
      var x = data.getElementsByTagName("Order");
      for (i = 0; i <x.length; i++) {
        var orderLinkNode = x[i].getElementsByTagName("link");
        var orderURL = orderLinkNode[2].getElementsByTagName("url")[0].childNodes[0].nodeValue;
        console.log(orderURL);
        var button = '<button type="submit" name="submit" class="btn btn-default" onClick="fulfillOrder(\'' + orderURL + '\')">Fulfill My Order</button>';
        table += "<tr><td>" +
        x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("productName")[0].childNodes[0].nodeValue
        + "</td><td>" +
        x[i].getElementsByTagName("status")[0].childNodes[0].nodeValue
        + "</td><td>" + button
      }
      document.getElementById("orderTable").innerHTML = table + "</table>";
    });
}

function fulfillOrder(orderURL){
  $.get(orderURL, function(data){
    console.log("Order " + orderURL + " fulfilled!");
  });
}
