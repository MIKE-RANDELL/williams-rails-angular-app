(function(){

  'use strict'

  function createReview(){
    return {
      templateUrl: 'directives/create-review/create-review.html',
      controller: CreateReviewController,
      controllerAs: 'ctrl',
      scope: {}
    }
  }

  function CreateReviewController(ReviewsService, $state){
    var ctrl = this;

    ctrl.user = "";
    ctrl.review = "";

    this.createReview = function createReview(){
      ReviewsService.createReview({"name": ctrl.user, "review": ctrl.review})
                    .then(function(){ $state.reload() }) //had to put $state.reload() in callback
                                                        //so promise is completed and parent (routing resolve) is updated 
      //I had $state.reload() here...and was ran before promise was resolved
    }
  }

  angular
    .module('williams')
    .directive('createReview', ['ReviewsService', '$state', createReview])
}())
