angular.module('StoriesCtrl', []).controller('StoriesController', function($scope, $http, Stories) {

	//STORIES CONTROLLER

	//GET ALL PROFILES 
				Stories.getAllProfiles().then(function(response){
					console.log(response.data);
					$scope.stories = response.data;
				});
	//POST NEW PROFILE
				$scope.saveProfileFunc = function(){
					// console.log($scope.stories.picture);
					// console.log($scope.stories.name);
					// console.log($scope.stories.description);
					console.log($scope.newStory);

						Stories.postNewProfile($scope.newStory).then(function(response){
							console.log($scope.newStory);
							$scope.newStory = {};

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
	//EDIT PROFILE 
		//SELECT STORY: 
				$scope.selectStory = function(obj){
					console.log('select ouch');
					console.log(obj);

					$scope.selectedStory = obj; 
				}
		//EDIT STORY: 
					$scope.editProfileFunc = function(){
						console.log('poof edit');
						console.log($scope.selectedStory);
						var tempObj = $scope.selectedStory;

						Stories.editProfile($scope.selectedStory).then(function(res, err){
							if (err){console.log('edit error');}
							else {console.log(res);}

							Stories.getAllProfiles().then(function(response){
								$scope.stories = response.data;
							});
						});
					}




});
