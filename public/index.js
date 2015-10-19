angular.module('app',
  ['ngMaterial',
   'ui.router',
   'angularjs'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        templateUrl: 'home.html'
      })
  })
  .controller('IndexCtrl', function($mdSidenav, $mdMedia, $state) {
    var vm = this;
    vm.toggleSidebar = function(side) {
      $mdSidenav(side).toggle();
    };

    vm.closeSidebar = function(side) {
      $mdSidenav(side).close();
    };

    vm.smallScreen = $mdMedia('sm');



    vm.go = function(dest) {
      $state.go(dest);
    }

  });