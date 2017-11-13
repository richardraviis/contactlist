'use strict';

angular.module('userContacts', ['ngRoute'])
.run(function(){
	
})
.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/contacts', {
		templateUrl:'views/viewContacts.html',
		controller: 'testCtrl'
		
	}).when('/login', {
		templateUrl:'views/form-3/index.html',
		controller: 'loginCtrl'
		
	}).otherwise({redirectTo: '/login'});
	
});
