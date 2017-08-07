angular.module('DatesCtrl', []).controller('DatesController', function($scope, $http, Dates) {
	
	//DATES CONTROLLER 

	//GET DATES 
				Dates.getAllDates().then(function(response){
					console.log(response.data);
					$scope.courses = response.data;

				});

	//POST DATES 
				$scope.saveCourseFunc = function(){
					console.log($scope.newCourse.start);
					console.log($scope.newCourse.end);
					console.log($scope.newCourse.details);

					Dates.postNewDates($scope.newCourse).then(function(response){
						console.log(response.data);
						$scope.newCourse = {};

							Dates.getAllDates().then(function(response){
							console.log(response.data);
							$scope.courses = response.data;
						});
					});
				}

});