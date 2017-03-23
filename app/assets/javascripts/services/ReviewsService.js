(function(){

  'use-strict';

  function ReviewsService($http, $rootScope){

    this.getReviews = getReviews;
    this.createReview = createReview;
    this.handleNewReviewData = handleNewReviewData;
    this.handleInitReviewsData = handleInitReviewsData;

    this.data = [];

    function getReviews(){
      return $http.get('/reviews').then(getReviewsCallback);

      function getReviewsCallback(response){
        return response.data;
      }
    }

    function createReview(review){
      var req = {
        method: 'POST', //this here takes care of the POST request
        url: '/reviews',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {review}
      }
      return $http(req).then(function(response){return response})
    }

    function handleNewReviewData(newReview){
      this.data.push(newReview);
      $rootScope.$emit('reviewsDataUpdate');
    }

    function handleInitReviewsData(reviews){
      this.data = reviews;
    }

    function handleGetReviewsData(){
      return this.data.last;
    }
  }

  angular
    .module('williams')
    .service('ReviewsService', ReviewsService)
}())
