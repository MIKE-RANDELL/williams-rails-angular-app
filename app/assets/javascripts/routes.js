(function() {
    'use-strict';

    angular
      .module('williams')
      .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('home', {
            url: '/',
            views: {
              '': {
                templateUrl: 'home/home.html' //WAS MESSING WITH ROUTES, SO JUST LEAVING THESE MULTIPLE NAMED VIEWS
              },
              'homepage@home': {
                templateUrl: 'home/homepage.html' //FOR EXAMPLES
              }
            },
            controller: 'HomeController as vm'
          })
          .state('reviews', {
            url: '/reviews',
            templateUrl: 'reviews/reviews.html',
            controller: 'ReviewsController as vm',
            resolve: {
              reviewsSet: function(ReviewsService){
                return ReviewsService.getReviews().then(function(response){return response})
              }
            }
          })
          .state('gallery', {
            url: '/gallery',
            templateUrl: 'gallery/gallery.html',
            controller: 'GalleryController as vm',
            resolve: {
              gallerySet: function(GalleryService){
                return GalleryService.getPhotos().then(function(response){return response})
              }
            }
          })
          .state('products', {
            url: '/products',
            controller: 'ProductsController as vm',
            templateUrl: 'products/products.html',
            resolve: {
              productsSet: function(ProductService){
                return ProductService.getProducts().then(function(response){return response})
              }
            }
          })
          .state('sub-products', {
            url: '/product/:id/sub-products',
            controller: 'SubProductsController as vm',
            templateUrl: 'sub-products/sub-products.html',
            resolve: {                                                   //dependencies needed to be in order
              subProductsGet: ['SubProductService', '$stateParams', function(SubProductService, $stateParams){
                return SubProductService.getSubProducts($stateParams.id).then(function(response){return response})
              }]
            }
          })
          .state('estimates', {
            url: '/estimates',
            controller: 'EstimatesController as vm',
            templateUrl: 'estimates/estimates.html',
            resolve: {
              estimatesSet: function(EstimatesService){
                return EstimatesService.getEstimates().then(function(response){return response})
              }
            }
          })
          .state('tweets', {
            url: '/tweets',
            controller: 'TweetsController as vm',
            templateUrl: 'tweets/tweets.html',
            resolve: {
              auth: ['$auth', function($auth) {
                return $auth.validateUser();
              }],
              tweetsSet: function(TweetsService){
                return TweetsService.getTweets().then(function(response){return response})
              }
            }
          })
          .state('login', {
            url: '/login',
            controller: 'UserController as vm',
            templateUrl: 'user/user.html'
          })
          $urlRouterProvider.otherwise('/')
      }])

}())
