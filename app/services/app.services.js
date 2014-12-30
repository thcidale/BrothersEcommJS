(function(){

	'use strict';

	angular.module('app.services', [])
		.factory('Countries', Countries);

	Countries.$inject = ['$resource'];

	//  -------------- FUNCTIONS!!! ------------		
	function Countries($resource){
		return $resource('data/data-register.json');
	}
})()