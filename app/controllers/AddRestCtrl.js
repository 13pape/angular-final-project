"use strict";

app.controller("AddRestCtrl",
[
  "$scope",
  "$location",
  "$http",

  function ($scope, $location, $http)  {

    // Default property values for keys bound to input fields
    $scope.newRestaurant = {
      name: "",
      description: "",
      type: "",
      rating: "",
      number: "",
      street: "",
      city: "",
      state: "",
      zip: "",
    };

    // Function bound to the Add Restaurant button in the view template
    $scope.addRestaurant = function () {

      // POST the restaurant to Firebase
      $http.post(
        "https://mexicoapp.firebaseio.com/restaurants.json",

        // Remember to stringify objects/arrays before
        // sending them to an API
        JSON.stringify({
          name: $scope.newRestaurant.name,
          description: $scope.newRestaurant.description,
          type: $scope.newRestaurant.type,
          rating: $scope.newRestaurant.rating,
          number: $scope.newRestaurant.number,
          street: $scope.newRestaurant.street,
          city: $scope.newRestaurant.city,
          state: $scope.newRestaurant.state,
          zip: $scope.newRestaurant.zip,
          url: $scope.newRestaurant.url,
        })

      // The $http.post() method returns a promise, so you can use then()
      ).then(
        () => $location.url("#/restaurant.html"), // Handle resolve
        (response) => console.log(response)  // Handle reject
      );
    };


  }
]);
