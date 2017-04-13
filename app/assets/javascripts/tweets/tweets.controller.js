(function(){
  'use-strict'

  function TweetsController(tweetsSet, $filter){
    var ctrl = this;
    this.mostTweeted = mostTweeted;

    ctrl.tweets = tweetsSet;
    ctrl.topProductTweeted;
    ctrl.productTweetCounterArray = []

    function productTweetCounter(tweets){
      for(i=0; i<tweets.length; i++){
        ctrl.productTweetCounterArray.push(tweets[i].product.name)
      }
      ctrl.topProductTweeted = mostTweeted(ctrl.productTweetCounterArray)
    }

    function mostTweeted(products){
      var frequency = {}
      var max = 0;
      var result;
      for(var v in products){
        frequency[products[v]]=(frequency[products[v]] || 0)+1
        if(frequency[products[v]] > max){
          max = frequency[products[v]]
          result = products[v]
        }
      }
      return result;
    }

    productTweetCounter(ctrl.tweets)
  }

  angular
    .module('williams')
    .controller('TweetsController', ['tweetsSet', '$filter', TweetsController])
}())
