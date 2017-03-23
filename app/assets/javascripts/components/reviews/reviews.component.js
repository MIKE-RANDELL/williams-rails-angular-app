
(function(){

  'use strict'

  function ReviewsController(ReviewsService, $scope){
    var ctrl = this;
    this.addReviewsDataService = addReviewsDataService;

    ctrl.initResolvedReviews = this.id;
    ctrl.reviews = ctrl.initResolvedReviews;

    $scope.$on('reviewsDataUpdate', function(){
      var newReview = ReviewsService.handleGetNewReviewData()
      ctrl.reviews.push(newReview)
    });

    function addReviewsDataService() {
      ReviewsService.handleInitReviewsData(ctrl.initResolvedReviews)
    }
    addReviewsDataService() //intial setup of ReviewsService data handling
  }

  var reviews = {
    templateUrl: 'components/reviews/reviews.html',
    bindings: {
      id: '='
    },
    controller: ReviewsController,
    controllerAs: 'ctrl'
  }

  angular
    .module('williams')
    .component('reviews', reviews)
}())
