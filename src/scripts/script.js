
$(document).ready(function () {
    addition();
    tooltip();
});

//Mapa
function myMap() {
  var mapCanvas = document.getElementById("map");
  var map = new google.maps.LatLng(50.049261, 22.007919)
  var mapOptions = {
    center: map,
    zoom: 17,
    mapTypeId: 'hybrid'
  }
  var myLatLng = {lat: 50.049261, lng: 22.007919};
  var map = new google.maps.Map(mapCanvas, mapOptions);

          var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Tu Narazie jest sciernisko'
          });
}

function addition() {
    var num1 = $("#l1");
    var num2 = $("#l2");
    var res = $("#res");
    var button = $("#btnRes");
    
    button.click(function () {
        res.val(parseInt(num1.val()) + parseInt(num2.val()));
    });

}
function tooltip() {
    $('[data-toggle="tooltip"]').tooltip();  
}

// function validate() {
//   $("form[name='formu']").validate({
//     rules: {
//       name: {
//         required: true,
//         minlength: 5
//       },
//       email: {
//         required: true,
//         email: true
//     },
//       messages: {
//       name: "Please enter your Name",
//       email: "Please enter a valid email address"
//     },
//     // Make sure the form is submitted to the destination defined
//     // in the "action" attribute of the form when valid
//     submitHandler: function(form) {
//       form.submit();
//     }
//     }});
// }