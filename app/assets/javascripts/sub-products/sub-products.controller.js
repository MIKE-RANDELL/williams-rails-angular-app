(function(){

  'use-strict'

  function SubProductsController($stateParams, ProductService, $state){
    var ctrl = this;
    this.getSubProducts = getSubProducts
    this.setSubProductsVar = setSubProductsVar

    ctrl.subProductsSet =

    function getSubProducts(){
      var getSubProductsPromise = ProductService.getSubProducts($stateParams.id);

      getSubProductsPromise.then(function(response){
        ctrl.subProductsSet = response;
        $state.reload()
      });
      //$state.reload()
      //return ProductService.getSubProducts($stateParams.id).then(function(response){return response})
    }


    function setSubProductsVar(){
      //debugger;
      //getSubProducts().then(function(response){console.log(response)})
    }
    //getSubProducts()


    //setSubProductsVar() //setting subProductsSet variable for collection
    //debugger;
  }

  angular
    .module('williams')
    .controller('SubProductsController', ['$stateParams', 'ProductService', '$state', SubProductsController])
}())
