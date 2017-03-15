(function(){

  'use-strict'

  function ReviewsController(reviewsSet){
    var ctrl = this;
    ctrl.reviews = reviewsSet;
  }

  angular
    .module('williams')
    .controller('ReviewsController', ['reviewsSet', ReviewsController])
}())
