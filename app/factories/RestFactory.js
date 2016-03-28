"use strict";


app.factory("RestFactory", ($q, $http) => 

	() =>
	    $q((resolve, reject) => {// Return a promise for our async XHR
	      $http.get("https://mexicoapp.firebaseio.com/restaurants.json")
	        .success(
	          function (restaurantList) {
	          	//console.log("tomas y teo love them");
	          	resolve(restaurantList);
	          },
	          function (error) {
	          	reject(error)
	          }
			)
	    })
);


//get, post, put (edit), delete