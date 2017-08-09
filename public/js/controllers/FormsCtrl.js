angular.module('FormsCtrl', []).controller('FormsController', function($scope, $http, Forms) {

	//FORMS CONTROLLER

		//GET ALL FORMS 
		Forms.getAllForms().then(function(response){
			console.log(response.data);
			$scope.forms = response.data;
		});

		//DELETE A FORM
		$scope.deleteFormFunc = function(obj){
			console.log('ouch delete form');
			console.log(obj);
		
			Forms.deleteForm(delForm).then(function(err, res){
				if (err){console.log('delete form ERROR');}
				else {console.log(res);}

				Forms.getAllForms().then(function(response){
				console.log(response.data);
				$scope.forms = response.data;
			});
		});
	}
	
});