angular.module('angularjs',[])
  .config(function($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('angularjs', {
        url        : '/angularjs',
        templateUrl: '/modules/angularjs/angularjs.html'
      })
  });