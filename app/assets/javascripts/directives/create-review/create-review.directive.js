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
    this.resetReviewForm = resetReviewForm;

    ctrl.user = "";
    ctrl.review = "";
    ctrl.newReview = null;

    function createReview(){
      ReviewsService.createReview({"name": ctrl.user, "review": ctrl.review})
                    .then(function(response){
                      ctrl.newReview = response;
                      if (ctrl.newReview){
                        ctrl.handleReviewData(ctrl.newReview)
                      };
      })
    };

    function handleReviewData(data){
      ReviewsService.handleNewReviewData(data);
      ctrl.resetReviewForm();
    }

    function resetReviewForm(){
      ctrl.user = ctrl.review = ""
      ctrl.newReview = null;
    }
  }

  angular
    .module('williams')
    .directive('createReview', ['ReviewsService', createReview])
}())
