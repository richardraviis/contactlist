'use strict';

angular.module('userContacts').controller('loginCtrl', ['$scope', '$rootScope', '$location', 'commonService', function($scope, $rootScope, $location, commonService){
	
	$scope.userName="";
	$scope.password="";
	$scope.login = function(){
		
		//$location.path("/contacts");
		commonService.authenticateUser($scope.userName).then(function(data){
			
			$rootScope.userName = $scope.userName;
			var user = $scope.userName;
			
			
			if(data[user]!== undefined && data[user] === $scope.password)
				{
				if (typeof(Storage) !== "undefined") {
				      sessionStorage.setItem("username", $scope.userName);
				    
				   
				}
				$location.path("/contacts");
				 
				}
			else {
				$scope.validationMessage="Invalid Username/Password. Please try again";
				$scope.userName="";
				$scope.password="";
				$location.path("/login");
				
			}
			console.log("123>>>"+data[user]);
		});
		
		
		console.log($scope.userName);
		console.log($scope.password);
	};
		
	
	
}]);
