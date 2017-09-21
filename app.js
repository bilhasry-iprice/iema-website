
var prev= '';
var a = angular.module("myApp", ['ngSanitize', 'ngRoute']);

a.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when("/faq", {
		templateUrl : "faq.html",
		controller : function( $scope){
			
			$scope.$on('$routeChangeSuccess', function(){
				$('html,body').animate({
	                       scrollTop: 0
	                  }, 1000);
				prev = 'faq';

				$('#main-menu').collapse('hide');
			});

			
		}
	})
	.otherwise({
		templateUrl : "home.html",
		controller : function($scope, $location){
			
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
