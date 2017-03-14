(function(){

  'use strict'

  function createReview(){
    return {
      templateUrl: 'directives/create-review/create-review.html',
      controller: CreateReviewController,
      controllerAs: 'ctrl'
    }
  }

  function CreateReviewController(ReviewsService, $state){
    var ctrl = this;

    ctrl.user = "";
    ctrl.review = "";

    this.createReview = function createReview(){
      ReviewsService.createReview({"name": ctrl.user, "review": ctrl.review}).then(function(response){ return response })
      $state.reload()
    }
  }

  angular
    .module('williams')
    .directive('createReview', ['ReviewsService', '$state', createReview])
}())
