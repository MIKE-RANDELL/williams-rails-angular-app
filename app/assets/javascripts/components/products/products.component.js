(function(){

  'use-strict'

  function ProductsController($state, ProductService, $scope){
    var ctrl = this;

    this.getProductsData = getProductsData;
    this.goToSelected = goToSelected;

    ctrl.products = getProductsData();

    $scope.$on('productsDataUpdate', function(){
      var newProduct = ProductService.handleGetNewProductData()
      ctrl.products.push(newProduct)
    });

    function goToSelected(params){
      $state.go('home.sub-products',{'id': params});
    };

    function getProductsData(){
      return ProductService.handleGetAllProductData()
    }
  }

  var Products = {
    templateUrl: 'components/products/products.html',
    controller: ProductsController,
    controllerAs: 'ctrl'
  }

  angular
    .module('williams')
    .component('products', Products)
}())
