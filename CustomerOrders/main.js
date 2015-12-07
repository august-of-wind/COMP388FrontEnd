  $(document).ready(function()
  {
    var path = "https://damp-reef-8180.herokuapp.com/services/customerservice/customer/" + localStorage.getItem("cust_id");
    var userResponse = $.get(path, function( data ){
    }).done(function(data) {
      customerXML = data.getElementsByTagName("Customer");
      customerName = customerXML[0].getElementsByTagName("customerName")[0].childNodes[0].nodeValue;
      customerAddr = customerXML[0].getElementsByTagName("customerAddr")[0].childNodes[0].nodeValue;
      links = customerXML[0].getElementsByTagName("link");
      myOrders = links[0].getElementsByTagName("url")[0].childNodes[0].nodeValue;

      document.getElementById("customerName").innerHTML = "Welcome " + customerName + "!";
      document.getElementById("customerAddr").innerHTML = "Your current account address is " + customerAddr + ".";

    })
  });

  function getOrders(){

    $.ajax({
      url: myOrders,
      method: 'GET',
    }).done(function(data) {
      var i;
      var table="<table class='table'><tr><th>ID</th><th>Product Name</th><th>Order Status</th><th>Cancel?</th></tr>";
      var x = data.getElementsByTagName("Order");
      for (i = 0; i <x.length; i++) {
        var orderLinkNode = x[i].getElementsByTagName("link");
        var orderURL = orderLinkNode[0].getElementsByTagName("url")[0].childNodes[0].nodeValue;
        console.log(orderURL);
        var button = '<button type="submit" name="submit" class="btn btn-default" onClick="cancelOrder(\'' + orderURL + '\')">Cancel My Order</button>';
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

  function cancelOrder(orderURL){
    $.get(orderURL, function(data){
      console.log("Order " + orderURL + " cancelled!");
    });
  }
