(function(){

  'use-strict'

  function createSubProduct(){
    return {
      templateUrl: 'directives/create-sub-product/create-sub-product.html',
      controller: CreateSubProductController,
      controllerAs: 'ctrl'
    }
  }

  function CreateSubProductController(ProductService, $stateParams){
    var ctrl = this;

    ctrl.name = "";
    ctrl.description = "";
    ctrl.price;
    ctrl.product = $stateParams.id



    this.createSubProduct = createSubProduct

    function createSubProduct(){
      var data = {"name": ctrl.name, "description": ctrl.description, "price": ctrl.price, "product_id": ctrl.product};
      ProductService.makeSubProduct(data).then(function(res){console.log(res)})
    }
  }

  angular
    .module('williams')
    .directive('createSubProduct', ['ProductService', '$stateParams', createSubProduct])
}())
