"use strict";

app.controller("PageCtrl",
[
  "$scope",
  "$location",
  "$http",
  "authFactory",
  "firebaseURL",
  "$window",


  ($scope, $location, $http, authFactory, firebaseURL, $window) => {

    // Local variables
    let ref = new Firebase(firebaseURL);

    $scope.isAuthenticated = () => {
      return authFactory.isAuthenticated();
    };

    $scope.logout = () => {
      console.log("Unauthenticating user");
      ref.unauth();
    };


$window.initMap = function(){
	console.log('this is init map fn');
	//let setMap = new google.maps.latLng(36.17, -86.77);


  let mapOptions = {
    center: {lat:36.17, lng:-86.77},
    zoom:10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  let map = new google.maps.Map(document.getElementById("map"), mapOptions);

  map.addListener('click', function(e) {
 ref.push({lat: e.latLng.lat(), lng: e.latLng.lng()});
  });

  ref.on("child_added", function(snapshot, prevChildKey) {
    // Get latitude and longitude from Firebase.
    var newPosition = snapshot.val();

    // Create a google.maps.LatLng object for the position of the marker.
    // A LatLng object literal (as above) could be used, but the heatmap
    // in the next step requires a google.maps.LatLng object.
    var latLng = new google.maps.LatLng(newPosition.lat, newPosition.lng);

    // Place a marker at that location.
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  });
}


  }
]);

