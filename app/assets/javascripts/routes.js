(function() {
    'use-strict';

    angular
      .module('williams')
      .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'home/home.html',
            controller: 'HomeController as vm'
          })
          //.state('home.reviews', {
          //  url: '/reviews',
          //  templateUrl: 'reviews/reviews.html',
          //  controller: 'ReviewController as vm'
          //})

          $urlRouterProvider.otherwise('/')
      }])

}())
