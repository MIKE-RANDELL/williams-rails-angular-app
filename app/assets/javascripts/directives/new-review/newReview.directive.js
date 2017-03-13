(function(){

  'use strict'

  function newReview(){
    return {
      templateUrl: 'directives/new-review/new-review.html',
      controller: NewReviewController,
      controllerAs: 'ctrl'
    }
  }

  function NewReviewController(ReviewsService){

  }

  angular
    .module('williams')
    .directive('newReview', ['ReviewsService', newReview])
}())
