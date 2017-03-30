(function(){

  'use-strict'

  function ProductService($http, $rootScope){
    this.makeProduct = makeProduct;
    this.getProducts = getProducts;
    this.handleInitProductsData = handleInitProductsData;
    this.handleNewProductData = handleNewProductData;
    this.handleGetNewProductData = handleGetNewProductData;
    this.handleGetAllProductData = handleGetAllProductData;

    this.data = [];

    function makeProduct(product){
      var req = {
        method: 'POST',
        url: '/products',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {product}
      };
      return $http(req).then(makeProductCallback)
                       .catch(function(error){console.log(error)});

      function makeProductCallback(response){
        return response.data
      };
    };

    function getProducts(){
      return $http.get('/products').then(getProductsCallback)
                                   .catch(function(error){console.log(error)});

      function getProductsCallback(response){
        return response.data;
      };
    };

    function handleInitProductsData(products){
      this.data = products;
    };

    function handleNewProductData(newProduct){
      this.data.push(newProduct);
      $rootScope.$emit('productsDataUpdate');
    }

    function handleGetNewProductData(){
      return this.data.last;
    }

    function handleGetAllProductData(){
      return this.data;
    }
  }

  angular
    .module('williams')
    .service('ProductService', ProductService)
}())
