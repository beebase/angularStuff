angular.module('app',
  ['ngMaterial',
   'ui.router',
   'angularjs'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/angularjs');
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('orange')
      .warnPalette('orange')
      .backgroundPalette('grey')
      .dark();
  })
  .run(function($rootScope, $state) {
    $rootScope.$on('$stateChangeSuccess', function() {
      if ($state.current.data) {
        $rootScope.$broadcast('breadcrumb', {path: $state.current.data.path});
      }
    })
  })
  .controller('IndexCtrl', function($scope, $mdSidenav, $mdMedia, $state) {
    var vm = this;
    $scope.$on('breadcrumb', function(event, arg) {
      vm.breadcrumb = arg.path;
    });

    vm.nav = [
      {
        name : 'AngularJS',
        state: 'angularJS',
        menu : [
          {directives: ['ng-class', 'ng-show']},
          {localstorage: ['localJSON']}
        ]
      },
      {
        name : 'ngMaterial',
        state: 'ngMaterial',
        menu : [
          {directives: ['md-select', 'md-checkbox']}
        ]
      }
    ];

    vm.toggleSidebar = function(side) {
      $mdSidenav(side).toggle();
    };

    vm.closeSidebar = function(side) {
      $mdSidenav(side).close();
    };

    vm.smallScreen = $mdMedia('sm');

    vm.go = function(dest) {
      vm.closeSidebar('left');
      $state.go(dest);
    }

  });