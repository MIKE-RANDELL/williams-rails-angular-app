(function(){

  'use-strict'

  function ProductsController(productsSet, $state){
    var ctrl = this;
    ctrl.products = productsSet;

    this.gotoSelected = function(params){
      //debugger;
      $state.go('home.sub-products',{'id': params});
    };
  }

  angular
    .module('williams')
    .controller('ProductsController', ['productsSet', '$state', ProductsController])
}())
