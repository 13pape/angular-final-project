"use strict";

app.controller("MapCtrl",
[
  "$scope",
  "$location",
  "$http",
  "authFactory",
  "firebaseURL",
  "$window",

	function ($scope, $location, $http, authFactory, firebaseURL, $window) {}
	//google.maps.event.addDomListener(window, 'load', initialize);

		// let ref = new Firebase(firebaseURL);
		// console.log("ref", ref);

		// let mapOptions = {
		// 	center: {lat:36.162480, lng:-86.785968},
		// 	zoom:8,
		// 	mapTypeId: google.maps.MapTypeId.ROADMAP
		// };

	// 	let map = new google.maps.Map(document.getElementById("map"), mapOptions);
	// 		map.addListener('click', function(e) {
	// 			console.log("what is happening?");
	//  			ref.push({lat: e.latLng.lat(), lng: e.latLng.lng()});
	// 		});

	// 	// ref.on("child_added", function(snapshot, prevChildKey) {
	// 	// // Get latitude and longitude from Firebase.
	// 	// 	var newPosition = snapshot.val();

	// 	// 	// Create a google.maps.LatLng object for the position of the marker.
	// 	// 	// A LatLng object literal (as above) could be used, but the heatmap
	// 	// 	// in the next step requires a google.maps.LatLng object.
	// 	// 	var latLng = new google.maps.LatLng(newPosition.lat, newPosition.lng);

	// 	// 	// Place a marker at that location.
	// 	// 	var marker = new google.maps.Marker({
	// 	// 	  position: latLng,
	// 	// 	  //function make marker with firebase data
	// 	// 	  map: map,
	// 	// 	  title: 'NASHVILLE'
	// 	// 	});
	// 	// });
	// }
])

// var markersArray = [];
// google.maps.Map.prototype.clearOverlays = function() {
//   for (var i = 0; i < markersArray.length; i++ ) {
//     markersArray[i].setMap(null);
//   }
//   markersArray.length = 0;
// }
// markersArray.push(marker);
// google.maps.event.addListener(marker,"click",function(){});
// map.clearOverlays();

// var removeMarker = function(marker, markerId) {
//     marker.setMap(null); // set markers setMap to null to remove it from map
//     delete markers[markerId]; // delete marker instance from markers object
// };