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
          var table="<table class='table'><tr><th>ID</th><th>Detail</th><th>Price</th></tr>";
          var x = data.getElementsByTagName("Order");
          for (i = 0; i <x.length; i++) {
            table += "<tr><td>" +
            x[i].getElementsByTagName("productId")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("status")[0].childNodes[0].nodeValue +
            "</td><td>"
          }
        document.getElementById("orderTable").innerHTML = table + "</table>";
        });
  }
