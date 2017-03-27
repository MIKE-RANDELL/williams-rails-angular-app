(function(){

  'use-strict'

  function createSubProduct(){
    return {
      templateUrl: 'directives/create-sub-product/create-sub-product.html',
      controller: CreateSubProductController,
      controllerAs: 'ctrl'
    }
  }

  function CreateSubProductController(SubProductService, $stateParams, $state){
    var ctrl = this;

    ctrl.name = "";
    ctrl.description = "";
    ctrl.price;
    ctrl.product = $stateParams.id

    ctrl.picture = {};

    this.createSubProduct = createSubProduct
    this.handleSubProductData = handleSubProductData;


    function createSubProduct(){
      var data = {"name": ctrl.name, "description": ctrl.description, "price": ctrl.price, "product_id": ctrl.product, "picture": ctrl.picture};
      SubProductService.makeSubProduct(data).then(function(response){
                                              ctrl.newSubProduct = response;
                                              if(ctrl.newSubProduct){
                                                ctrl.handleSubProductData(ctrl.newSubProduct)
                                              };
      })
    }

    function handleSubProductData(data){
      SubProductService.handleNewSubProductData(data);
      //ctrl.resetSubProductForm()
    };

  }

  angular
    .module('williams')
    .directive('createSubProduct', ['SubProductService', '$stateParams', '$state', createSubProduct])
}())
