angular.module('app')
  .controller('NgShowHideCtrl', function() {
    var vm = this;
    vm.isShowing = true;
    vm.toggle = function() {
      vm.isShowing = !vm.isShowing;
    }
  });