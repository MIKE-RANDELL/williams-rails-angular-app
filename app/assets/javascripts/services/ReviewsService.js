(function(){

  'use-strict';

  function ReviewsService($http){
    this.getReviews = getReviews;
    this.data = [];

    function getReviews(){
      return $http.get('/reviews').then(getReviewsCallback);

      function getReviewsCallback(response){
        return response.data;
      }
    }
  }

  angular
    .module('williams')
    .service('ReviewsService', ReviewsService)
}())
