(function(){

  'use strict'

  function ReviewsController(reviewsSet, $scope, $state){

    var ctrl = this;
    ctrl.reviews = reviewsSet;

    $scope.reload = function(){
      $state.reload();
    };
  }

  angular
    .module('williams')
    .controller('ReviewsController', ['reviewsSet', '$scope', '$state', ReviewsController])
}())
