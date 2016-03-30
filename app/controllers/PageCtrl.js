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


    var map;
    var markers = [];
      var delMarkers = document.getElementById("deleteMarkers");

      $window.initMap = function(){
        var nashVille = {lat: 36.162480, lng: -86.785968};

        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: nashVille,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        // This event listener will call addMarker() when the map is clicked.
        map.addListener('click', function(event) {
          addMarker(event.latLng);
        });

        // Adds a marker at the center of the map.
        addMarker(nashVille);
      }

      // Adds a marker to the map and push to the array.
      function addMarker(location) {
        var marker = new google.maps.Marker({
          position: location,
          map: map,
          title: 'Hello World!'
        });
        markers.push(marker);
      }

      // Sets the map on all markers in the array.
      function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }

      // Removes the markers from the map, but keeps them in the array.
      function clearMarkers() {
        setMapOnAll(null);
      }

      // Shows any markers currently in the array.
      function showMarkers() {
        setMapOnAll(map);
      }

      // Deletes all markers in the array by removing references to them.
      function deleteMarkers() {
        clearMarkers();
        markers = [];
      }

      function addFirebaseMarkers() {

      }

      delMarkers.addEventListener("click", function(){
        deleteMarkers();
      })
  }
]);

