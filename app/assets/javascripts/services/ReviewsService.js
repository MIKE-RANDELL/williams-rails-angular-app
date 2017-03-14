(function(){

  'use-strict';

  function ReviewsService($http){
    this.getReviews = getReviews;
    this.createReview = createReview;

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
  }

  angular
    .module('williams')
    .service('ReviewsService', ReviewsService)
}())
