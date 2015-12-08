
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



  function reviewTrigger(reviewURL){
  var reviewForm = '<form role="form" id="ReviewForm" onSubmit="return submitForm(\'' + reviewURL + '\');"><div class="row"><div class="form-group col-xs-4 col-xs-offset-4 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4"><label for="reviewDetail"><h3>Review</h3></label><input type="text" class="form-control" id="reviewDetail" name="reviewDetail"></div></div></div><div class="row"><div class="form-group col-xs-4 col-xs-offset-4 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4"><label for="rating"><h3>Rating</h3></label><input type="text" class="form-control" id="rating" name="rating"></div></div></div><div class="btn-group-wrap"><div class="btn-group form-group"><button type="submit" name="submit" class="btn btn-default">Submit Review (out of 5 points)</button></div></div>';
    document.getElementById("reviewField").innerHTML = reviewForm + '</form>';
  }  $(document).ready(function()
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
      var table="<table class='table'><tr><th>ID</th><th>Product Name</th><th>Order Status</th><th>Cancel?</th><th>Review Product</th>";
      var x = data.getElementsByTagName("Order");
      for (i = 0; i <x.length; i++) {
        var orderLinkNode = x[i].getElementsByTagName("link");
        var orderURL = orderLinkNode[0].getElementsByTagName("url")[0].childNodes[0].nodeValue;
        var reviewURL = orderLinkNode[3].getElementsByTagName("url")[0].childNodes[0].nodeValue;
        console.log(orderURL);
        var cancelButton = '<button type="submit" name="submit" class="btn btn-default" onClick="cancelOrder(\'' + orderURL + '\')">Cancel My Order</button>';
        var reviewButton = '<button type="submit" name="submit" class="btn btn-default" onClick="reviewTrigger(\'' + reviewURL + '\')">Review This Product</button>';
        table += "<tr><td>" +
        x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("productName")[0].childNodes[0].nodeValue
        + "</td><td>" +
        x[i].getElementsByTagName("status")[0].childNodes[0].nodeValue
        + "</td><td>" + cancelButton + "</td><td>" + reviewButton + '</td></tr>'
      }
      document.getElementById("orderTable").innerHTML = table + "</table>";
    });
  }

  function submitForm(reviewURL) {
  var detail = $('#ReviewForm').find('input[name="reviewDetail"]').val();
  var rating = $('#ReviewForm').find('input[name="rating"]').val();
  var custId = localStorage.getItem("cust_id");
  var path = reviewURL + "/customer/" + custId + "/detail/" + detail + "/rating/" + rating;
  console.log("Path= " + path);
  $.post(path, function( data ){
  });
    return false;
}

  function reviewPost(url) {
    var path = url + 
    $.post(url, function(data){

    });
  }

  function logout() {
    localStorage.clear();
    window.location.href = "/";
  }

 function cancelOrder(orderURL){
    $.get(orderURL, function(data){
      console.log("Order " + orderURL + " cancelled!");
    });
  }
