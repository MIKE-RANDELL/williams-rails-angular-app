(function() {
    'use-strict';

    angular
      .module('williams')
      .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'williams/home/home.html',
            controller: 'HomeController as vm'
          })

          $urlRouterProvider.otherwise('/')
      }])

}())
