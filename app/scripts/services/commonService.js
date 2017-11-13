angular.module('userContacts')
  .factory('commonService', function($http, $rootScope, $q){
	  
	  authenticateUser: function(){
		var deferred= $q.defer();
		  //var url= $rootScope.appContext +"/data/Users/"+$rootScope.userName+"contacts.json";
		  var url= $rootScope.appContext +"/data/login/loginCredentials.json";
		  
		  $http.get(url, {
			  headers:{
				  'Content-Type': 'application/json',
				  'Accept': 'application/json',
					  },
			  
			  
		  }).then(function(data){
			  
			  alert(data.data);
			  deferred.resolve(data.data);
		  });
		  
		  return deferred.promise;
	  }
  
 
	  
  });
