'use strict';

angular.module('userContacts').controller('contactDetailsCtrl', ['$scope', '$rootScope', '$location', 'commonService', '$routeParams', function($scope, $rootScope, $location, commonService, $routeParams){
	
		   
	        $scope.id = sessionStorage.getItem("id");
	               
			commonService.getContactDetails($scope.id).then(function(data){
				
				$scope.contact = data;
				
			
			});
			
			
			$scope.goTo = function ( path ) {
				
				 				
				  $location.path( path );
				};
			
		
			
}]);
