
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