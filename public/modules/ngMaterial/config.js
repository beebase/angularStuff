angular.module('app')
  .config(function($stateProvider) {
    $stateProvider
      .state('ngmaterial', {
        url        : '/ngmaterial',
        templateUrl: 'modules/ngMaterial/ngmaterial.html'
      })
      .state('ngmaterial.md-select', {
        url        : '/md-select',
        templateUrl: 'modules/ngMaterial/md-select/md-select.html'
      })
      .state('ngmaterial.md-checkbox', {
        url        : '/md-checkbox',
        templateUrl: 'modules/ngMaterial/md-checkbox/md-checkbox.html'
      })
  });