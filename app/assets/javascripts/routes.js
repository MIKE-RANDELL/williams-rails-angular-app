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
          .state('home.products', {
            url: 'products',
            controller: 'ProductsController as vm',
            templateUrl: 'products/products.html',
            resolve: {
              productsSet: function(ProductService){
                return ProductService.getProducts().then(function(response){return response})
              }
            }
          })
          .state('home.sub-products', { //had home.sub-products
            url: 'product/:id/sub-products',
            controller: 'SubProductsController as vm',
            templateUrl: 'sub-products/sub-products.html',
            resolve: {                                                   //dependencies needed to be in order
              subProductsGet: ['ProductService', '$stateParams', function(ProductService, $stateParams){
                return ProductService.getSubProducts($stateParams.id).then(function(response){return response})
              }]
            }
          })

          $urlRouterProvider.otherwise('/')
      }])

}())
