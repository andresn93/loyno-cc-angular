angular.module('DatesCtrl', []).controller('DatesController', function($scope, $http, Dates) {
	
	//DATES CONTROLLER 

	//GET DATES 
				Dates.getAllDates().then(function(response){
					console.log(response.data);
					$scope.courses = response.data;

				});

	//POST DATES 
				$scope.saveCourseFunc = function(){
					// console.log($scope.newCourse.start);
					// console.log($scope.newCourse.end);
					// console.log($scope.newCourse.details);
					console.log($scope.newCourse);

					Dates.postNewDates($scope.newCourse).then(function(response){
						console.log(response.data);
						$scope.newCourse = {};

							Dates.getAllDates().then(function(response){
							console.log(response.data);
							$scope.courses = response.data;
						});
					});
				}

	//DELETE DATES
				$scope.delCourseFunc = function(obj){
					console.log('ouch dates delete');
					console.log(obj);
					var delDat = {_id : obj};

						Dates.deleteDates(delDat).then(function(err,res){
							if (err){console.log('delete error');}
							else{console.log(res);}

							Dates.getAllDates().then(function(response){
								$scope.courses = response.data;
						});
					});
				}

	//UNAVAILABLE 
				$scope.unavailableFunc = function(obj){
					console.log('ouch unavailable');
					console.log(obj);
					var unavObj = {_id : obj};

					Dates.applyDates().then(function(err, res){
						if (err){console.log('delete error');}
						else{console.log(res);}
					});
				}


	// CHANGE AVAILABLE

				$scope.changeAvailable = function(data){
					console.log(data);

					var editDate = data;

					if(data.available == true){
						editDate.available = false;
					}else{
						editDate.available = true;
					}

					Dates.editDates(editDate).then(function(response){
								console.log(response);
								
						});

				}

});


