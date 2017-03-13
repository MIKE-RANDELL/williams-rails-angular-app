(function(){

  'use strict'

  function ReviewController(){
    var ctrl = this;

    ctrl.user = this.id.name;
    ctrl.review = this.id.review;
  }

  var review = {
    templateUrl: 'components/review/review.html',
    bindings: {
      id: '='
    },
    controller: ReviewController,
    controllerAs: 'ctrl'
  }



  angular
    .module('williams')
    .component('review', review)
}())
