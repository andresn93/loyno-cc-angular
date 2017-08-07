angular.module('DatesCtrl', []).controller('DatesController', function($scope, $http, Dates) {
	
	//DATES CONTROLLER 

	//GET DATES 
				Dates.getAllDates().then(function(response){
					console.log(response.data);
					$scope.courses = response.data;

				});

	//POST DATES 
				$scope.saveCourseFunc = function(){
					console.log($scope.courses.start);
					console.log($scope.courses.end);
					console.log($scope.courses.details);

					Dates.postNewDates($scope.courses).then(function(response){
						console.log(response.data);
						$scope.courses = {};

							Dates.getAllDates().then(function(response){
							console.log(response.data);
							$scope.courses = response.data;
						});
					});
				}

});