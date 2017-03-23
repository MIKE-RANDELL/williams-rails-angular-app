(function(){

  'use-strict'

  function ProductsController($state, ProductService, $scope){
    var ctrl = this;

    this.addProductsDataService = addProductsDataService;
    this.chunkData = chunkData;
    this.goToSelected = goToSelected;

    ctrl.initResolvedProducts = ctrl.id;
    ctrl.products = ctrl.initResolvedProducts;

    $scope.$on('productsDataUpdate', function(){
      var newProduct = ProductService.handleGetNewProductData()
      ctrl.products.push(newProduct)
      console.log(chunkData(ctrl.products, 3));
      $scope.$apply()
    });

    function goToSelected(params){
      $state.go('home.sub-products',{'id': params});
    };

    function chunkData(data, size){
      //debugger;
      var chunkedArr = [];
      for(i=0; i < data.length; i += size){
        chunkedArr.push(data.slice(i, i+size))
      }
      ctrl.chunkedData = chunkedArr;
    };

    function addProductsDataService(){
      ProductService.handleInitProductsData(ctrl.initResolvedProducts)
    };

    chunkData(ctrl.products, 3);
    addProductsDataService(); //intial setup of ProductService data handling
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
