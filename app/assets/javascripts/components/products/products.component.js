(function(){

  'use-strict'

  function ProductsController($state, ProductService, $scope){
    var ctrl = this;

    this.getProductsData = getProductsData;
    this.goToSelected = goToSelected;
    this.makeImportant = makeImportant;
    this.highlightProductSetter = highlightProductSetter;
    this.highlightProductRemover = highlightProductRemover;
    this.logProductTweet = logProductTweet;


    ctrl.products = getProductsData();

    //ctrl.activeHighlightProduct = ProductService.getHighlightProduct(); //to store active Highlighted Product

    $scope.$on('productsDataUpdate', function(){
      var newProduct = ProductService.handleGetNewProductData()
      ctrl.products.push(newProduct)
    });

    function makeImportant(product){
      ctrl.highlightProduct = product;
    }

    function goToSelected(params){
      $state.go('sub-products',{'id': params});
    };

    function getProductsData(){
      return ProductService.handleGetAllProductData()
    }

    function highlightProductSetter(product){
      return ProductService.setHighlightProduct(product);
    }

    //function highlightProductSetter(product){
    //  if (ctrl.activeHighlightProduct !== null){
    //    highlightProductRemover(ctrl.activeHighlightProduct)
    //  }
    //  ctrl.activeHighlightProduct = product;
    //  return ProductService.setHighlightProduct(product);
    //}

    function highlightProductRemover(product){
      return ProductService.removeHighlightProduct(product)
    }

    function logProductTweet(productId, productName){
      return ProductService.logProductTweet(productId, productName)
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
