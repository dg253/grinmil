var locations = [
  ['Grin Mil', 25.645840, -100.380895, 4],
  ['San Pedro de Pinta', 25.656210, -100.370977, 4],
  ['Carrots', 25.658403, -100.362913, 4]
];

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 13,
  center: new google.maps.LatLng(25.645840, -100.380895,1),
  mapTypeId: google.maps.MapTypeId.ROADMAP

});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}


wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
})
wow.init();
