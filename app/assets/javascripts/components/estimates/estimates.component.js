(function(){

  'use-strict'

  function EstimatesController(EstimatesService, $scope){
    var ctrl = this;
    this.getEstimatesData = getEstimatesData;
    this.filterOn = filterOn;
    this.filterOff = filterOff;
    this.filterCheck = filterCheck;

    ctrl.estimates = getEstimatesData()
    ctrl.selectedCity;
    ctrl.filter = false;


    $scope.$on('EstimatesDataUpdate', function(){
      var newEstimate = EstimatesService.handleGetNewEstimateData()
      ctrl.estimates.push(newEstimate)
    });

    function getEstimatesData(){
      return EstimatesService.handleGetAllEstimateData()
    };

    function filterCheck(){
      if (ctrl.selectedCity == "All"){
        filterOff()
      } else {
        filterOn()
      }
    }

    function filterOn(){
      ctrl.filter = true;
    }

    function filterOff(){
      ctrl.filter = false;
    }
  }

  var estimates = {
    templateUrl: 'components/estimates/estimates.html',
    controller: EstimatesController,
    controllerAs: 'ctrl'
  }

  angular
    .module('williams')
    .component('estimates', estimates)
}())
