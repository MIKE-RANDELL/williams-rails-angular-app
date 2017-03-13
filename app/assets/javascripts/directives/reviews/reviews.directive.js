(function(){

  'use-strict';

  function reviews(ReviewsService, $q){
    return {
      templateUrl: 'directives/reviews/reviews.html',
      require: 'reviews',
      controller: ReviewsController,
      controllerAs: 'ctrl',
      link: function(scope, elem, attrs, ctrl){
        var reviews;
        var getReviewsPromise = function(){
          console.log("SUCCESS") ? $q.when(response) : ReviewsService.getReviews().then(function(data){
            ctrl.reviews = data; //cache the $http response when promise is ready
          })
        };
        getReviewsPromise()
      }
    }

    function ReviewsController(){
      this.reviews = [];
    }
  }

  angular
    .module('williams')
    .directive('reviews', ['ReviewsService', '$q', reviews])
}())
