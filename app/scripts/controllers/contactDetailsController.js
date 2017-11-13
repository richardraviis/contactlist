'use strict';

angular.module('userContacts').controller('contactDetailsCtrl', ['$scope', '$rootScope', '$location', 'commonService', function($scope, $rootScope, $location, commonService){
	
		
		//$location.path("/contacts");
		commonService.getContacts().then(function(data){
			
			$scope.contacts = data;
			
			$scope.totalContacts = data.length;
			
		});
		
		$scope.showDetails = function(id){
			$scope.id = id;
			commonService.getContactDetails($scope.id).then(function(data){
				
				$scope.contactDetails = data;
				
			});
			
		};
			
}]);
