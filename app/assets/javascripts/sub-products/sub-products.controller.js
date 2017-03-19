(function(){

  'use-strict'

  function SubProductsController(subProductsGet){
    var ctrl = this;

    ctrl.subProductsSet = subProductsGet
  }

  angular
    .module('williams')
    .controller('SubProductsController', ['subProductsGet', SubProductsController])
}())
