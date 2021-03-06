angular.module('FormsService', []).service('Forms', ['$http', function($http, $scope, Forms) {

var URL = 'https://gentle-shore-39524.herokuapp.com';

	return {
//GET PROFILES
		getAllForms : function(data){
			return $http.get(URL + '/applications', data)
		},
//DELETE A FORM
		deleteForm  : function(delForm){
			// console.log(delForm);
			return $http.post(URL + '/delete-application', delForm)
		}, 
//EDIT A FORM
		editForm    : function(tempObForm){
			return $http.post(URL + '/edit-application', tempObForm)
		}

		   }

}]);