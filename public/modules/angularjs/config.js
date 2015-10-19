angular.module('angularjs',[])
  .config(function($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('angularJS', {
        url        : '/angularjs',
        templateUrl: '/modules/angularjs/angularjs.html' ,
        data : {
          path : 'AngularJS'
        }
      })
      .state('angularJS.localJSON', {
        url : '/localJSON',
        templateUrl: '/modules/angularJS/localStorage/localJSON.html'
      })
  });