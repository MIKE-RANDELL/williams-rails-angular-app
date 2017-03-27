(function(){

  'use-strict'

  function SubProductsController(subProductsGet, SubProductService){
    var ctrl = this;
    this.addSubProductDataService = addSubProductDataService;

    ctrl.subProductsSet = subProductsGet

    function addSubProductDataService(){
      SubProductService.handleInitSubProductsData(ctrl.subProductsSet)
    }
    addSubProductDataService()
  }

  angular
    .module('williams')
    .controller('SubProductsController', ['subProductsGet', 'SubProductService', SubProductsController])
}())
