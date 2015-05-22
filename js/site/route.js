smcom.config(['$routeProvider',function($routeProvider){

	$routeProvider.
		when('/',{
			templateUrl: '/html/home.html',
			controller: 'HomeController'
			}).
		when('/resume',{
			templateUrl: '/html/resume.html',
			controller: 'ResumeController'
			}).
		when('/portfolio',{
			templateUrl: '/html/portfolio.html',
			controller: 'PortfolioController'
			}).
		when('/letters',{
			templateUrl: '/html/letters.html',
			controller: 'LettersController'
			}).
		otherwise({
			redirectTo:'/'
		});

}]);
