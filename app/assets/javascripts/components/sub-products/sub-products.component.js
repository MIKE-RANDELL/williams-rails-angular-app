(function(){

  'use-strict'

  function SubProductsController($state, SubProductService, $scope){
    var ctrl = this;

    this.$onInit = () => {
      //ctrl.loggedIn = this.id
      ctrl.loggedIn = true
    }

    this.getSubProductsData = getSubProductsData;
    this.setEditMode = setEditMode;
    this.onEditMode = onEditMode;
    this.offEditMode = offEditMode;

    ctrl.subProducts = getSubProductsData()

    $scope.$on('subProductsDataUpdate', function(){
      var newSubProduct = SubProductService.handleGetNewSubProductData()
      ctrl.subProducts.push(newSubProduct)
    });

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

    function getSubProductsData(){
      return SubProductService.getAllSubProductsData()
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
