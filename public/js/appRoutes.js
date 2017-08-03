angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/stories', {
			templateUrl: 'views/stories.html',
			controller: 'StoriesController'
		})

		.when('/dates', {
			templateUrl: 'views/dates.html',
			controller: 'DatesController'	
		});

	$locationProvider.html5Mode(true);

}]);