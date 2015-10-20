angular.module('app')
  .controller('ActiveTabCtrl', function() {
    var vm = this;
    vm.tabs = [
      {title: 'tab1'},
      {title: 'tab2'}
    ];
  });