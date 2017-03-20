(function(){

  'use-strict'

  function SubProductsController($state){
    var ctrl = this;

    this.chunkSetData = chunkSetData;
    this.setEditMode = setEditMode;

    ctrl.subProducts = ctrl.id;

    function setEditMode(data){
      for(i=0; i < data.length; i++){
        data[i].editMode = false;
      }
    }

    function chunkSetData(data, size){
      var chunkedArr = [];
      //for(i=0; i < data.length; i++){
      //  data[i].editMode = false;
      //}
      for(i=0; i < data.length; i += size){
        chunkedArr.push(data.slice(i, i+size))
      }
      return chunkedArr;
    }

    setEditMode(ctrl.subProducts);
    ctrl.chunkedSetData = chunkSetData(ctrl.subProducts, 3);
  }

  var subProducts = {
    templateUrl: 'components/sub-products/sub-products.html',
    controller: SubProductsController,
    controllerAs: 'ctrl',
    bindings: {
      id: '='
    }
  }

  angular
    .module('williams')
    .component('subProducts', subProducts)
}())
