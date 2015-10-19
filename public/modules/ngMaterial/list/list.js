angular.module('app')
  .controller('ListToolbarContentCtrl', function() {
    var vm = this;
    vm.contacts = [
      {name: 'Maarten', age: 33},
      {name: 'Bert', age: 44},
      {name: 'Els', age: 44},
      {name: 'Hans', age: 38},
      {name: 'Daan', age: 43}
    ];

    vm.sort = function(clickedColumn) {
      if (vm.sortedColumn === clickedColumn) {
        vm.reverse = !vm.reverse;
      }
      else {
        vm.sortedColumn = clickedColumn;
        vm.reverse = false;
      }
    }
  })