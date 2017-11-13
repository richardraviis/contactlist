angular.module('userContacts', ['ngRoute'])
.run(function($rootScope){
	
	
	$rootScope.appContext="http://localhost:9000/";
	
	
	
	
})
.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/contacts', {
		templateUrl:'views/viewContacts.html',
		controller: 'userContactsCtrl'
		
	}).when('/contactDetails/:id', {
		templateUrl:'views/detailedView.html',
		controller: 'contactDetailsCtrl'
		
	}).when('/login', {
		templateUrl:'views/login/index.html',
		controller: 'loginCtrl'
		
	}).otherwise({redirectTo: '/login'});
	
});
