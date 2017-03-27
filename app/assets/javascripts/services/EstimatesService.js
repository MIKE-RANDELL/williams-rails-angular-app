(function(){

  'use-strict';

  function EstimatesService($http, $rootScope){

    this.getEstimates = getEstimates;
    this.createEstimate = createEstimate;
    this.handleGetAllEstimateData = handleGetAllEstimateData;
    this.handleNewEstimateData = handleNewEstimateData;
    this.handleInitEstimatesData = handleInitEstimatesData;

    this.data = [];

    function getEstimates(){
      return $http.get('/estimates').then(getEstimatesCallback);

      function getEstimatesCallback(response){
        return response.data;
      }
    }

    function createEstimate(estimate){
      var req = {
        method: 'POST', //this here takes care of the POST request
        url: '/estimates',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {estimate}
      }
      return $http(req).then(function(response){return response.data})
    }

    function handleInitEstimatesData(estimates){
      this.data = estimates;
    }

    function handleNewEstimateData(newEstimate){
      this.data.push(newEstimate);
      $rootScope.$emit('EstimatesDataUpdate');
    }

    function handleGetNewEstimateData(){
      return this.data.last;
    }

    function handleGetAllEstimateData(){
      return this.data;
    }
  }

  angular
    .module('williams')
    .service('EstimatesService', EstimatesService)
}())
