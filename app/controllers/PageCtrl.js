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
	let latLang = new google.maps.LatLng(36.17, -86.77);


  let mapOptions = {
    center: latLang,
    zoom:10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  let map = new google.maps.Map(document.getElementById("map"), mapOptions);
}   

    // map.addListener('click', function(e) {
    // console.log("hello");
    //   let marker = new google.maps.Marker({
    //     position: {lat: e.latLng.lat(), lng: e.latLng.lng()},
    //     map: map
    //   });
    // });

  }
]);

