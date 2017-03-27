(function(){

  'use-strict'

  function EstimatesController(estimatesSet, EstimatesService){
    var ctrl = this;
    this.addEstimatesDataService = addEstimatesDataService;

    ctrl.estimates = estimatesSet;

    function addEstimatesDataService(data){
      EstimatesService.handleInitEstimatesData(data)
    }
    addEstimatesDataService(ctrl.estimates)
  }

  angular
    .module('williams')
    .controller('EstimatesController', ['estimatesSet', 'EstimatesService', EstimatesController])
}())
