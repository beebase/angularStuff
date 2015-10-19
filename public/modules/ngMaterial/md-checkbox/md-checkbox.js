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
    vm.toggle = function(item) {
      var index = vm.getIndex(item);
      console.log('index:', index)
      if (index > -1) {
        vm.selected.splice(index, 1);
      } else {
        vm.selected.push(item);
      }
    }
  });
