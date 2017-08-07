angular.module('MainCtrl', []).controller('MainController', function($scope, $http, Stories, Dates) {

	// $scope.tagline = 'To the moon and back!';	

//STORIES CONTROLLER

	//GET ALL PROFILES 
				Stories.getAllProfiles().then(function(response){
					console.log(response.data);
					$scope.stories = response.data;
				});
	//POST NEW PROFILE
				$scope.saveProfileFunc = function(){
					console.log($scope.stories.picture);
					console.log($scope.stories.name);
					console.log($scope.stories.description);

						Stories.postNewProfile($scope.stories).then(function(response){
							console.log($scope.stories);
							$scope.stories = {};

								Stories.getAllProfiles().then(function(response){
								console.log(response.data);
								$scope.stories = response.data;
							});
						});
				},
	//DELETE PROFILE
				$scope.deleteProfileFunc = function(obj){
					console.log('ouch delete!');
					console.log(obj);
					var delProf = {_id : obj};

						Stories.deleteProfile(delProf).then(function(res, err){
							if (err){console.log('delete error');}
							else {console.log(res);}

								Stories.getAllProfiles().then(function(response){
									console.log(response.data);
									$scope.stories = response.data;
								});
						});
				}

//DATES CONTROLLER 

	//GET DATES 
				Dates.getAllDates().then(function(response){
					console.log(response.data);
					$scope.courses = response.data;

				});

	//POST DATES 
				$scope.okCourseFunc = function(){
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















}); //CLOSE ANGULAR MODULE