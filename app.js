
var prev= '';
var data = 'data.json';
var data_section = 'section.data.json';
var a = angular.module("myApp", ['ngSanitize', 'ngRoute']);

a.config(function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/:lang', {
		templateUrl : "home.html",
		controller : function($scope, $location, $routeParams){

				data = 'data.th.json';
				data_section = 'section.data.en.json';
			
		}
	})
	.otherwise({
		templateUrl : "home.html",
		controller : function($scope, $location, $routeParams){

			$scope.$on('$viewContentLoaded', function(){
	          $('#main-menu').collapse('hide');
	        });
		}
	});

	
})
.directive('headerImage', function(){
	return{
		link : function( scope, element, attrs, tabsCtrl){
			
		}
	}
});
