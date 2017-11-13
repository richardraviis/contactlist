'use strict';

angular.module('userContacts').controller('contactDetailsCtrl', ['$scope', '$rootScope', '$location', 'commonService', '$routeParams', function($scope, $rootScope, $location, commonService, $routeParams){
	
	commonService.getContactDetails($routeParams.id).then(function(data){
				$scope.contactDetails = data;
			
			});
			
		
			
}]);
