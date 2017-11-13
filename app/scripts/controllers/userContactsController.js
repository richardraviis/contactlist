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
			$scope.id = 11;
			alert(id);
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
				
						
				$scope.editContactObj=data;
	        	$scope.fullName= data.fullName;
				$scope.email= data.email;
				$scope.address= data.address;
				$scope.phone= data.phone;
				$scope.facebook= data.facebook;
				$scope.twitter= data.twitter;
				$scope.linkedin= data.linkedin;
				$scope.skype= data.skype;
				$scope.jobTitle= data.jobTitle;
				$scope.id = data.id;
				
				
			});
			
						
			$("#editContactModal").modal('show');
		};
		
		$scope.saveEditedContact = function() {
		
         $scope.contacts = $scope.contacts.filter(function(obj){
				
				return obj.id !== $scope.id;
				       
			});
           var temp = {
        		   "id":$scope.id,
        		   "fullName":$scope.fullName,
        		   "email": $scope.email,
        		   "jobTitle":$scope.jobTitle,
        		   "phone":$scope.phone,
        		   "photo":"",
        		   "address": $scope.address,
        		   "facebook":$scope.facebook,
        		   "twitter":$scope.twitter,
        		   "linkedin":$scope.linkedin,
        		   "skype":$scope.skype
        	       	   
           };
           
           
			$scope.contacts.push(temp);
			$("#editContactModal").modal('hide');
			
		}; 
		
		$scope.saveNewContact = function()
		{
			
			var randomNumber = Math.floor(Math.random() * 20 );
			
			var temp = {
	        		   "id":randomNumber,
	        		   "fullName":$scope.fullName,
	        		   "email": $scope.email,
	        		   "jobTitle":$scope.jobTitle,
	        		   "phone":$scope.phone,
	        		   "photo":"/images/User_1.jpg",
	        		   "address": $scope.address,
	        		   "facebook":$scope.facebook,
	        		   "twitter":$scope.twitter,
	        		   "linkedin":$scope.linkedin,
	        		   "skype":$scope.skype
	        	       	   
	           };
			$scope.contacts.push(temp);
			$("#editContactModal").modal('hide');
			
		};
		
		$scope.addContact = function()
		{
			
			
			$scope.fullName= "";
			$scope.email= "";
			$scope.address= "";
			$scope.phone= "";
			$scope.facebook= "";
			$scope.twitter= "";
			$scope.linkedin= "";
			$scope.skype= "";
			$scope.jobTitle= "";
			$scope.id = "";
			$("#editContactModal").modal('show');
			
		};
		
		
		
		
		
		$scope.go = function ( path ) {
			
			path = '/contactDetails/'+path;
			  $location.path( path );
			};
			
}]);
