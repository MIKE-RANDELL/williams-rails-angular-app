(function(){
  'use-strict'

  function TweetsService($http){
    this.getTweets = getTweets;
    this.getTopProductTweeted = getTopProductTweeted;

    function getTweets(){
      return $http.get('/tweets').then(getTweetsCallback).catch(function(error){console.log(error)})

      function getTweetsCallback(response){
        return response.data
      }
    }

    function getTopProductTweeted(){
      
    }
  }

  angular
    .module('williams')
    .service('TweetsService', TweetsService)
}())
