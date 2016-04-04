"use strict";

	
	app.filter('restFilter', function () {
		return function (type) {
			var filtered = [];

			angular.forEach(type, function(type) {
				if(restaurant.type >= type) {
					filtered.push(type);
				}
			});
			return filtered;
		}	
	});