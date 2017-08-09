angular.module('FormsCtrl', []).controller('FormsController', function($scope, $http, Forms) {

	//FORMS CONTROLLER

		//GET ALL FORMS 
		Forms.getAllForms().then(function(response){
			console.log(response.data);
			$scope.applications = response.data;
		});

		//DELETE A FORM
		$scope.deleteFormFunc = function(obj){
			console.log('ouch delete form');
			console.log(obj);
			var delForm = {_id : obj}
		
			Forms.deleteForm(delForm).then(function(err, res){
				if (err){console.log('delete form ERROR');}
				else {console.log(res);}

				Forms.getAllForms().then(function(response){
				console.log(response.data);
				$scope.applications = response.data;
			});
		});
	}

		//SELECT FORM: 
				$scope.selectForm = function(obj){
					console.log('select form ouch');
					console.log(obj);

					$scope.selectedForm = obj; 
				}
		//EDIT FORM: 
					$scope.editFormFunc = function(){
						console.log('poof edit');
						console.log($scope.selectedForm);
						var tempObj = $scope.selectedForm;

						Forms.editForm($scope.selectedForm).then(function(res, err){
							if (err){console.log('edit form error');}
							else {console.log(res);}

							Forms.getAllForms().then(function(response){
								$scope.applications = response.data;
							});
						});
					}

});