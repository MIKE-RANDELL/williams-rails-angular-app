(function(){

  'use strict'

  function createReview(){
    return {
      templateUrl: 'directives/create-review/create-review.html',
      controller: CreateReviewController,
      controllerAs: 'ctrl'
    }
  }

  function CreateReviewController(ReviewsService, $scope){
    var ctrl = this;

    this.createReview = createReview;
    this.handleReviewData = handleReviewData;

    ctrl.user = "";
    ctrl.review = "";
    ctrl.rev = null;

    function createReview(){
      ReviewsService.createReview({"name": ctrl.user, "review": ctrl.review})
                    .then(function(response){
                      ctrl.rev = response.data;
                      if (ctrl.rev){
                        ctrl.handleReviewData()
                      };
                     })
    };

    function handleReviewData(){
      ReviewsService.handleNewReviewData(ctrl.rev)
    }
  }

  angular
    .module('williams')
    .directive('createReview', ['ReviewsService', createReview])
}())
