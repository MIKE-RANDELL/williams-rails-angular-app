
(function(){

  'use strict'

  function ReviewsController(ReviewsService, $scope){
    var ctrl = this;
    this.getReviewsData = getReviewsData;

    ctrl.reviews = getReviewsData();

    $scope.$on('reviewsDataUpdate', function(){
      var newReview = ReviewsService.handleGetNewReviewData()
      ctrl.reviews.push(newReview)
    });

    function getReviewsData(){
      return ReviewsService.handleGetAllReviewsData()
    }
  }

  var reviews = {
    templateUrl: 'components/reviews/reviews.html',
    controller: ReviewsController,
    controllerAs: 'ctrl'
  }

  angular
    .module('williams')
    .component('reviews', reviews)
}())
