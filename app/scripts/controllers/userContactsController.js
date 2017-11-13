'use strict';

angular.module('userContacts').controller('userContactsCtrl', ['$scope', '$rootScope', '$location', 'commonService', function($scope, $rootScope, $location, commonService){
	
         //$scope.searchText="";		
		//$location.path("/contacts");
		commonService.getContacts().then(function(data){
			
			$scope.contacts = data;
			
			console.log(JSON.stringify(data));
			
			$scope.totalContacts = data.length;
			
		});
		
		$scope.showDetails = function(id){
			$scope.id = id;
			commonService.getContactDetails($scope.id).then(function(data){
				
				$scope.contactDetails = data;
				
			});
			
		};
		
			
		
		$scope.deleteContact = function(id, name){
			
			var decision = confirm("Are you sure you want to delete "+ name + " from your contacts");
			
			if(decision){
			$scope.contacts = $scope.contacts.filter(function(obj){
				
				return (obj.id).indexOf(id) === -1;
				       
			});
			}
			
			else
			return false;
			
		};
		
		$scope.editContact = function(id){

			commonService.getContactDetails(id).then(function(data){
				$scope.editContactObj=data[0];
	        	$scope.fullName= data[0].fullName;
				$scope.email= data[0].email;
				$scope.address= data[0].address;
				$scope.phone= data[0].phone;
				$scope.facebook= data[0].facebook;
				$scope.twitter= data[0].twitter;
				$scope.linkedin= data[0].linkedin;
				$scope.skype= data[0].skype;
				$scope.jobTitle= data[0].jobTitle;
				$scope.id = data[0].id;
				
				
			});
						
			$("#editContactModal").modal('show');
		};
		
		$scope.saveEditedContact = function() {
		
         $scope.contacts = $scope.contacts.filter(function(obj){
				
				return obj.id !== $scope.id;
				       
			});
           var temp = {
        		   "id":"11",
        		   "name":$scope.fullName,
        		   "age":"35",
        		   "email": "rr@gmail.com",
        		   "jobTitle":"Lead",
        		   "Phone":"12345",
        		   "Picture":"",
        		   "Address": "123 Maint St"
        	       	   
           };
           
           
			$scope.contacts.push(temp);
			
		}; 
		
		$scope.addContact = function()
		{
			var temp = {
	        		   "id":"11",
	        		   "name":$scope.fullName,
	        		   "age":"35",
	        		   "email": "rr@gmail.com",
	        		   "jobTitle":"Lead",
	        		   "Phone":"12345",
	        		   "Picture":"",
	        		   "Address": "123 Maint St"
	        	       	   
	           };
			$scope.contacts.push(temp);
			
			
		};
		
		
		$scope.go = function ( path ) {
			
			path = '/contactDetails/'+path;
			  $location.path( path );
			};
			
}]);
