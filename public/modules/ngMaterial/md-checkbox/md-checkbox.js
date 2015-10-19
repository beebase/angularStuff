angular.module('app')
  .controller('CheckboxCtrl', function() {
    var vm = this;
    vm.colors = [
      {name: 'yellow', id: 1},
      {name: 'green', id: 2},
      {name: 'red', id: 3}
    ];

    vm.selected = [];
    vm.getIndex = function(item) {
      return vm.selected.indexOf(item);
    };
    vm.exists = function(item) {
      return vm.getIndex(item) > -1;
    };
    vm.toggle = function(item) {
      if (vm.exists(item)) {
        vm.selected.splice(vm.getIndex(item), 1);
      } else {
        vm.selected.push(item);
      }
    }
  });
