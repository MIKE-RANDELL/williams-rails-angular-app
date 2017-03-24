(function(){

  'use-strict'

  function createProduct(){
    return {
      templateUrl: 'directives/create-product/create-product.html',
      controller: CreateProductController,
      controllerAs: 'ctrl'
    }
  }

  function CreateProductController(ProductService, $state){
    var ctrl = this;

    ctrl.name = "";
    ctrl.description = "";
    ctrl.newProduct = null;

    ctrl.picture = {};

    this.createProduct = createProduct;
    this.handleProductData = handleProductData;
    this.resetProductForm = resetProductForm;

    function createProduct(){
      var data = {"name": ctrl.name, "description": ctrl.description, "picture": ctrl.picture};
      ProductService.makeProduct(data).then(function(response){
                                        ctrl.newProduct = response;
                                        if (ctrl.newProduct){
                                          ctrl.handleProductData(ctrl.newProduct)
                                        };
      })
    };

    function handleProductData(data){
      ProductService.handleNewProductData(data);
      ctrl.resetProductForm();
    };

    function resetProductForm(){
      ctrl.name = "";
      ctrl.description = "";
      ctrl.picture = {};
    };
  }

  angular
    .module('williams')
    .directive('createProduct', ['ProductService', '$state', createProduct])
}())
