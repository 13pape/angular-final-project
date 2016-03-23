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
// var mapOptions = {
//         zoom: 4,
//         center: new google.maps.LatLng(40.0000, -98.0000),
//         mapTypeId: google.maps.MapTypeId.TERRAIN
//     }
//  $scope.map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

//center:new google.maps.LatLng(51.508742,-0.120850),
//    mapTypeId:google.maps.MapTypeId.ROADMAP


$window.initMap = function(){
	console.log('this is init map fn');
	var latLang = new google.maps.LatLng(36.17, -86.77);


  var mapOptions = {
    center: latLang,
    zoom:10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

  }
]);

