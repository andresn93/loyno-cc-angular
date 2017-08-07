angular.module('StoriesService', []).service('Stories', ['$http', function($http, $scope, Stories) {

var URL = 'https://gentle-shore-39524.herokuapp.com';

	return {
//GET PROFILES
		getAllProfiles : function(data){
			return $http.get(URL + '/stories', data)
		},
//POST A PROFILE
		postNewProfile : function(data){
			console.log(data);
			return $http.post(URL + '/new-story', data)
		},
//DELETE A PROFILE
		deleteProfile  : function(delProf){
			// console.log(delProf);
			return $http.post(URL + '/delete-story', delProf)
		}, 
//EDIT A PROFILE
		// editProfile    : function(tempObj){
		// 	return $http.post(URL + '/edit-story', tempObj)
		// }

		   }

}]);