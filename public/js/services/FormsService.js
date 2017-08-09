angular.module('FormsService', []).service('Forms', ['$http', function($http, $scope, Forms) {

var URL = 'https://gentle-shore-39524.herokuapp.com';

	return {
//GET PROFILES
		getAllForms : function(data){
			return $http.get(URL + '/', data)
		},
//POST A PROFILE
		postNewForm : function(data){
			console.log(data);
			return $http.post(URL + '/', data)
		},
//DELETE A PROFILE
		deleteForm  : function(delForm){
			// console.log(delForm);
			return $http.post(URL + '/', delForm)
		}, 
//EDIT A PROFILE
		editForm    : function(tempObForm){
			return $http.post(URL + '/', tempObForm)
		}

		   }

}]);