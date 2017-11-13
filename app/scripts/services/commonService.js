angular.module('userContacts')
  .factory('commonService', function($http, $rootScope, $q){
	 var auth=''; 
	 return {
			
	authenticateUser:function()
	  {
		var deferred= $q.defer();
		  //var url= $rootScope.appContext +"/data/Users/"+$rootScope.userName+"contacts.json";
		  var url= $rootScope.appContext +"/data/login/loginCredentials.json";
		  
		  $http.get(url, {
			  headers: {
				  'Content-Type': 'application/json',
				  'Accept': 'application/json',
					  },
				data: '',
				async: false
			  
			  
		  }).then(function(data){
			  
			  
			  deferred.resolve(data.data);
		  });
		  
		  return deferred.promise;
	  },
	 
	 getContacts: function(){
		 
		 var deferred= $q.defer();
		$rootScope.userName=sessionStorage.getItem("username");
		 
		 alert($rootScope.userName);
		 
		  var url= $rootScope.appContext +"/data/Users/"+$rootScope.userName+"/contacts.json";
		 
		  
		  $http.get(url, {
			  headers: {
				  'Content-Type': 'application/json',
				  'Accept': 'application/json',
					  },
				data: '',
				async: false
			  
			  
		  }).then(function(data){
			  
			  
			  deferred.resolve(data.data);
		  });
		  
		  return deferred.promise;
	 },
	  
	  
	  getContactDetails: function(id){
		  var deferred= $q.defer();
			 
			  var url= $rootScope.appContext +"data/Users/"+$rootScope.userName+"/"+id+".json";
			 
			  
			  $http.get(url, {
				  headers: {
					  'Content-Type': 'application/json',
					  'Accept': 'application/json',
						  },
					data: '',
					async: false
				  
				  
			  }).then(function(data){
				 			  
				  deferred.resolve(data.data);
			  });
			  
			  return deferred.promise;
	  
	 },
	 
	 saveEditContact: function(){
		 var deferred= $q.defer();
		
		  var url= $rootScope.appContext +"data/Users/"+$rootScope.userName+"/"+id+".json";
		 
		  
		  $http.get(url, {
			  headers: {
				  'Content-Type': 'application/json',
				  'Accept': 'application/json',
					  },
				data: '',
				async: false
			  
			  
		  }).then(function(data){
			  
			  
			  deferred.resolve(data.data);
		  });
		  
		  return deferred.promise;
  } 
		 
	 }

	  
	 
  
 
	  
  });
