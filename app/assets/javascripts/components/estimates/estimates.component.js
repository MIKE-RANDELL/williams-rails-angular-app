(function(){

  'use-strict'

  function EstimatesController(EstimatesService, $scope){
    var ctrl = this;
    this.getEstimatesData = getEstimatesData;
    this.searchOn = searchOn;
    this.selectOn = selectOn;

    ctrl.estimates = getEstimatesData()
    ctrl.selectedCity = "All";
    ctrl.searchQuery;
    ctrl.searchActive = true;
    ctrl.selectActive = false;


    $scope.$on('EstimatesDataUpdate', function(){
      var newEstimate = EstimatesService.handleGetNewEstimateData()
      ctrl.estimates.push(newEstimate)
    });

    function getEstimatesData(){
      return EstimatesService.handleGetAllEstimateData()
    };

    function searchOn(){
      ctrl.selectActive = false;
      ctrl.searchActive = true;
      ctrl.selectedCity = "All";
    }
    function selectOn(){
      ctrl.searchActive = false;
      ctrl.selectActive = true;
      ctrl.searchQuery = "";
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
