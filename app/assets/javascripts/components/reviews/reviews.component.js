
(function(){


  'use strict'

  function ReviewsController(ReviewsService, $scope){
    var ctrl = this;
    this.addReviewsData = addReviewsData;

    ctrl.initResolvedReviews = this.id;
    ctrl.reviews = ctrl.initResolvedReviews;

    $scope.$on('reviewsDataUpdate', function(){
      var newReview = ReviewsService.handleGetReviewsData()
      ctrl.reviews.push(newReview)
      $scope.$apply()
    });



    function addReviewsData() {
      ReviewsService.handleInitReviewsData(ctrl.initResolvedReviews)
    }
    addReviewsData()
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
