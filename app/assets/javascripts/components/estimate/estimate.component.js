(function(){

  'use-strict'

  function EstimateController(){
    var ctrl = this;
    this.$onInit = () => {
      //ctrl.estimate = this.id <!-- REMOVAL TO SHOW AUTO ADMIN FUNCTIONALTY -->
      ctrl.estimate = true
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
