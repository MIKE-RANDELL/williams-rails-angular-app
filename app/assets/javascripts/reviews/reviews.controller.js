(function(){

  'use-strict'

  function ReviewsController(reviewsSet, ReviewsService){
    var ctrl = this;
    this.addReviewsDataService = addReviewsDataService;

    ctrl.reviews = reviewsSet;

    function addReviewsDataService(){
      ReviewsService.handleInitReviewsData(ctrl.reviews)
    }
    addReviewsDataService()
  }

  angular
    .module('williams')
    .controller('ReviewsController', ['reviewsSet', 'ReviewsService', ReviewsController])
}())
