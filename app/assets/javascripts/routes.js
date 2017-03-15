(function() {
    'use-strict';

    angular
      .module('williams')
      .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider, ReviewsService) {
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'home/home.html',
            controller: 'HomeController as vm'
          })
          .state('home.reviews', {
            url: 'reviews',
            templateUrl: 'reviews/reviews.html',
            controller: 'ReviewsController as vm',
            resolve: {
              reviewsSet: function(ReviewsService){
                return ReviewsService.getReviews().then(function(response){return response})
              }
            }
          })
          .state('home.gallery', {
            url: 'gallery',
            templateUrl: 'gallery/gallery.html',
            controller: 'GalleryController as vm',
            resolve: {
              gallerySet: function(GalleryService){
                return GalleryService.getPhotos().then(function(response){return response})
              }
            }
          })

          $urlRouterProvider.otherwise('/')
      }])

}())
