(function(){

  'use-strict'

  function EstimateController(){
    var ctrl = this;
    this.$onInit = () => {
      ctrl.estimate = this.id
    }
  }

  var estimate = {
    templateUrl: 'components/estimate/estimate.html',
    bindings: {
      id: '='
    },
    controller: EstimateController,
    controllerAs: 'ctrl'
  }

angular
  .module('williams')
  .component('estimate', estimate)
}())
