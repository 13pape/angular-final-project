"use strict";

app.controller("RestCtrl", [
  "$scope",
  "$http",
  "$location",
  "RestFactory",

  function ($scope, $http, $location, RestFactory) {
    // Default property values for keys bound to input fields
    // $scope.songSearchText = {name: "", type: "", album: ""};
    // $scope.query = "";
    $scope.restaurants = [];

    $scope.loadRestaurants = function() {
       var currentRestaurants = [];
      // Invoke the promise that reads from Firebase
      RestFactory().then(
        // Handle resolve() from the promise
        restaurantList => Object.keys(restaurantList).forEach(key => {
        // console.log("restaurantList", restaurantList);
          restaurantList[key].id = key;
          currentRestaurants.push(restaurantList[key]);
        }),
        // Handle reject() from the promise
      err => console.log(err)
      ); 
      $scope.restaurants = currentRestaurants;
    };

    $scope.deleteRestaurant = function (restaurant) {
      $http.delete("https://mexicoapp.firebaseio.com/restaurants/" + restaurant.id + ".json")
      .then( function() {
        $scope.loadRestaurants();
        console.log("deleted:", restaurant.id);
      }
      );
    }
  $scope.loadRestaurants();
  }
]);