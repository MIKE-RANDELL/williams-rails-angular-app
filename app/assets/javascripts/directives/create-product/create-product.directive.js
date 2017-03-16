(function(){

  'use-strict'

  function createProduct(){
    return {
      templateUrl: 'directives/create-product/create-product.html',
      controller: CreateProductController,
      controllerAs: 'ctrl'
    }
  }

  function CreateProductController(ProductService){
    var ctrl = this;

    ctrl.name = "";
    ctrl.description = "";
    ctrl.price;



    this.createProduct = createProduct

    function createProduct(){
      var data = {"name": ctrl.name, "description": ctrl.description, "price": ctrl.price};
      ProductService.makeProduct(data).then(function(res){console.log(res)})
    }
  }

  angular
    .module('williams')
    .directive('createProduct', ['ProductService', createProduct])
}())
