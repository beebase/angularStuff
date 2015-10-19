angular.module('app')
  .controller('SelectCtrl', function() {
    var vm = this;
    vm.colors = [
      {name: 'blue', id: 1},
      {name: 'yellow', id: 2},
      {name: 'green', id: 3}
    ]
  });