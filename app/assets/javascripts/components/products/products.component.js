(function(){

  'use-strict'

  function ProductsController($state){
    var ctrl = this;

    this.chunkData = chunkData;
    this.goToSelected = goToSelected;

    ctrl.products = ctrl.id;

    function goToSelected(params){
      $state.go('home.sub-products',{'id': params});
    };

    function chunkData(data, size){
      var chunkedArr = [];
      for(i=0; i < data.length; i += size){
        chunkedArr.push(data.slice(i, i+size))
      }
      return chunkedArr;
    }
    ctrl.chunkedData = chunkData(ctrl.products, 3);
  }

  var Products = {
    templateUrl: 'components/products/products.html',
    controller: ProductsController,
    controllerAs: 'ctrl',
    bindings: {
      id: '='
    }
  }

  angular
    .module('williams')
    .component('products', Products)
}())
