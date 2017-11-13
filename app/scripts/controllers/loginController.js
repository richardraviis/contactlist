'use strict';

angular.module('userContacts').controller('loginCtrl', ['$scope', '$rootScope', 'commonService','$location', function($scope, $rootScope, commonService, $location){
	
	$scope.userName="";
	$scope.password="";
	$scope.login = function(){
		alert($rootScope.appContext);
		$location.href="/contacts"
		commonService.authenticateUser($scope.userName).then(function(data){
			
			console.log("123>>>"+data);
		})
		console.log($scope.userName);
		console.log($scope.password);
	};
		
	
	
}]);
