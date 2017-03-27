(function(){

  'use-strict'

  function ProductsController(productsSet, ProductService){
    var ctrl = this;
    this.addProductsDataService = addProductsDataService;

    ctrl.products = productsSet;

    function addProductsDataService(){
      ProductService.handleInitProductsData(ctrl.products)
    }
    addProductsDataService()
  }

  angular
    .module('williams')
    .controller('ProductsController', ['productsSet', 'ProductService', ProductsController])
}())
