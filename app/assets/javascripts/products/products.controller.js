(function(){

  'use-strict'

  function ProductsController(productsSet, $state){
    var ctrl = this;
    ctrl.products = productsSet;
  }

  angular
    .module('williams')
    .controller('ProductsController', ['productsSet', '$state', ProductsController])
}())
