angular.module('StoriesCtrl', []).controller('StoriesController', function($scope, $http, Stories) {

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


});
