angular.module('DatesService', []).service('Dates', ['$http', function($http, $scope, Dates) {

var URL = 'https://gentle-shore-39524.herokuapp.com';

	return {

		getAllDates  : function(data){
			return $http.get(URL + '/courses', data);
		},

		postNewDates : function(data){
			return $http.post(URL + '/new-course', data);
		},

		deleteDates  : function(delDat){
			return $http.post(URL + '/delete-course', delDat);
		},
		editDates : function(data){
			return $http.post(URL + '/edit-course', data);
		}


		   }
	

}]);