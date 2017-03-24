(function(){

  'use-strict'

  function SubProductsController($state, SubProductService){
    var ctrl = this;

    this.setEditMode = setEditMode;
    this.onEditMode = onEditMode;
    this.offEditMode = offEditMode;

    ctrl.initResolvedSubProducts = ctrl.id;
    ctrl.subProducts = ctrl.id;

    function setEditMode(data){
      for(i=0; i < data.length; i++){
        data[i].editMode = false;
      }
    }

    function onEditMode(subProduct){
      subProduct.editMode = true;
    }

    function offEditMode(subProduct){
      subProduct.editMode = false;
    }

    setEditMode(ctrl.subProducts);
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
