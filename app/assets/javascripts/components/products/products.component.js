(function(){

  'use-strict'

  function ProductsController($state, ProductService, $scope){
    var ctrl = this;

    //this.addProductsDataService = addProductsDataService;
    this.getProductsData = getProductsData;
    this.goToSelected = goToSelected;

    //ctrl.initResolvedProducts = ctrl.id;
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

    //function addProductsDataService(){
    //  ProductService.handleInitProductsData(ctrl.initResolvedProducts)
    //};

    //addProductsDataService(); //intial setup of ProductService data handling
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
