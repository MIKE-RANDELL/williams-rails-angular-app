(function() {
  'use strict';

  var navigation = {
    templateUrl: 'components/navigation/navigation.html',
    restrict: 'E',
    scope: {},
    controller: function(){
      
    },
    controllerAs: 'ctrl'
  }

  angular
    .module('williams')
    .component('navigation', navigation)
}())
