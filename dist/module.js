angular.module('youbankApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
angular.module("corpapp.module.fullpage", [])

.run(function(){
	$(document).ready(function() {
	    $('#fullpage').fullpage();
	});
});