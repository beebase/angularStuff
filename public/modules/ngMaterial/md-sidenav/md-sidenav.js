angular.module('app')
  .controller('mdSidenavCtrl', function($mdSidenav) {
    var vm = this;
    vm.toggle = function(side) {
      $mdSidenav(side).toggle();
    };
    vm.close = function(side) {
      $mdSidenav(side).close();
    };
  });