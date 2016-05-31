'use strict';
 let app = angular.module("MexicoApp", ["ngRoute", "firebase"])
 .constant('firebaseURL', "https://mexicoapp.firebaseio.com/");

 let isAuth = (authFactory) => new Promise((resolve, reject) => {
  if (authFactory.isAuthenticated()) {
    console.log("User is authenticated, resolve route promise");
    resolve();
  } else {
    console.log("User is not authenticated, reject route promise");
    reject();
  }
});

 app.config(["$routeProvider",
  function ($routeProvider) {
    $routeProvider.
      when("/", {
        templateUrl: "partials/login.html",
        controller: "LoginCtrl"
      }).
      when("/logout", {
        templateUrl: "partials/login.html",
        controller: "LoginCtrl"
      }).
      when("/map", {
        templateUrl: "partials/map.html",
        controller: "MapCtrl"
      }).
      when("/restaurant", {
        templateUrl: "partials/restaurant.html",
        controller: "RestCtrl"
      }).
      when("/add", {
        templateUrl: "partials/addRestaurant.html",
        controller: "AddRestCtrl"
      }).
      otherwise({
        redirectTo: "/"
      });
  }]);


/*
  When the application first loads, redirect the user to the login
  form if there is no authentication
 */
app.run([
  "$location",

  ($location) => {
    let appRef = new Firebase("https://mexicoapp.firebaseio.com/");

    appRef.onAuth(authData => {
      if (!authData) {

        console.log("onAuth detected unauthenticated client");
        $location.path("/login");
      }
    });
  }
]);