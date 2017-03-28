(function(){

  'use-strict'

  function createEstimate(EstimatesService){
    return {
      templateUrl: 'directives/create-estimate/create-estimate.html',
      controller: CreateEstimateController,
      controllerAs: 'ctrl'
    }

    function CreateEstimateController(){
      var ctrl = this;
      this.createEstimate = createEstimate;
      this.handleEstimateData = handleEstimateData;
      this.resetEstimateForm = resetEstimateForm;
      this.cleanForm = cleanForm;

      ctrl.name;
      ctrl.phone;
      ctrl.street_address;
      ctrl.city;
      ctrl.zipcode;
      ctrl.details;
      ctrl.newEstimate = null;

      function createEstimate(){
        var gotResponse = null;
        var data = {"name": ctrl.name, "phone": ctrl.phone, "city": ctrl.city,
                    "street_address": ctrl.street_address, "zipcode": ctrl.zipcode, "details": ctrl.details}
        EstimatesService.createEstimate(data).then(function(response){
                                                ctrl.newEstimate = response;
                                                if(ctrl.newEstimate){
                                                  ctrl.handleEstimateData(ctrl.newEstimate)
                                                };
        })
      };

      function handleEstimateData(data){
        EstimatesService.handleNewEstimateData(data)
        ctrl.resetEstimateForm()
      };

      function resetEstimateForm(){
        ctrl.name = ctrl.phone = ctrl.street_address = ctrl.city = ctrl.zipcode = ctrl.details = undefined;
        ctrl.newEstimate = null;
      }

      function cleanForm(form){
        form.$setPristine();
        form.$setUntouched();
      }
    }
  }

  angular
    .module('williams')
    .directive('createEstimate', ['EstimatesService', createEstimate])
}())
