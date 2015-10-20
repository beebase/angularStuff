angular.module('angularjs', [])
  .config(function($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('angularJS', {
        url        : '/angularjs',
        templateUrl: '/modules/angularjs/angularjs.html',
        data       : {
          path: 'AngularJS'
        }
      })
      .state('angularJS.localJson', {
        url        : '/localJson',
        templateUrl: '/modules/angularJS/localStorage/localJson/localJson.html',
        data       : {
          path: 'AngularJS / localJson'
        }
      })
      .state('angularJS.ng-show-hide', {
        url        : '/ng-show-hide',
        templateUrl: '/modules/angularJS/directives/ng-show-hide/ng-show-hide.html',
        data       : {
          path: 'AngularJS / ng-show-hide'
        }
      })
      .state('angularJS.formValidation', {
        url        : '/formValidation',
        templateUrl: '/modules/angularJS/validation/formValidation/formValidation.html',
        data       : {
          path: 'angularJS / validation / formValidation'
        }
      })
      .state('angularJS.activeTab', {
        url        : '/activeTab',
        templateUrl: '/modules/angularJS/navigation/activeTab/activeTab.html',
        data       : {
          path: 'angularJS / navigation / activeTab'
        }
      })
      .state('angularJS.timeFormatter', {
        url        : '/timeFormatter',
        templateUrl: '/modules/angularJS/directivesCustom/timeFormatter/timeFormatter.html'
      })
  });