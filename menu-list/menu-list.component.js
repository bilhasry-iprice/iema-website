a.component('menuList', {
    templateUrl: 'menu-list/menu-list.template.html',
    controller: function menuListController( $scope, $http, $document, $routeParams) {
      var loc = window.location.href;
      var lang = loc.split("/").pop(-1);
      if( lang != null){
        data = 'data.'+lang+'.json';
      }
      $http({
      	method: "GET",
      	url: "data/" + data
      }).then(function mySuccess(response){
      	 $scope.menus = response.data.menus;

         $scope.scroll = function( _target ){

                var $target = $(_target );
                  if ($target.length) {
                   $('html,body').animate({
                       scrollTop: $target.offset().top - 120
                  }, 1000);
                  return false;
              }
         }
      });
    }
  });
