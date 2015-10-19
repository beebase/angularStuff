angular.module('app')
  .config(function($stateProvider) {
    $stateProvider
      .state('ngMaterial', {
        url        : '/ngMaterial',
        templateUrl: 'modules/ngMaterial/ngmaterial.html',
        data       : {
          path: 'ngMaterial'
        }
      })
      .state('ngMaterial.md-select', {
        url        : '/md-select',
        templateUrl: 'modules/ngMaterial/md-select/md-select.html',
        data       : {
          path: 'ngMaterial / md-select'
        }
      })
      .state('ngMaterial.md-checkbox', {
        url        : '/md-checkbox',
        templateUrl: 'modules/ngMaterial/md-checkbox/md-checkbox.html',
        data       : {
          path: 'ngMaterial / md-checkbox'
        }
      })
      .state('ngMaterial.list', {
        url        : '/list',
        templateUrl: 'modules/ngMaterial/list/list.html',
        data       : {
          path: 'ngMaterial / list'
        }
      })
      .state('ngMaterial.md-sidenav', {
        url        : '/md-sidenav',
        templateUrl: '/modules/ngMaterial/md-sidenav/md-sidenav.html',
        data       : {
          path: 'mgMaterial / md-sidenav'
        }
      })
  });