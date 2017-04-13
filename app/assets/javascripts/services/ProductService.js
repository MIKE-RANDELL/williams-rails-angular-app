(function(){

  'use-strict'

  function ProductService($http, $rootScope){
    this.makeProduct = makeProduct;
    this.getProducts = getProducts;
    this.getHighlightProduct = getHighlightProduct
    this.handleInitProductsData = handleInitProductsData;
    this.handleNewProductData = handleNewProductData;
    this.handleGetNewProductData = handleGetNewProductData;
    this.handleGetAllProductData = handleGetAllProductData;
    this.setHighlightProduct = setHighlightProduct;
    //this.removeHighlightProduct = removeHighlightProduct;
    this.logProductTweet = logProductTweet;

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

    function setHighlightProduct(product){
      if (moment(product.start_date) <= moment() && moment(product.end_date) >= moment()) {
        product.highlight = true;
      } else {
        product.highlight = false;
      };

      var req = {
        method: 'PATCH',
        url: `/products/${product.id}`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {product}
      }
      return $http(req).then(updateProductCallback)
                       .catch(function(error){console.log(error)})

      function updateProductCallback(response){
        return response.data;
      };
    }

    //function removeHighlightProduct(product){
    //  if (product){
    //  product.highlight = false;
    //  var req = {
    //    method: 'PATCH',
    //    url: `/products/${product.id}`,
    //    headers: {
    //      'Content-Type': 'application/json'
    //    },
    //    data: {product}
    //  }
    //  return $http(req).then(updateProductCallback)
    //                   .catch(function(error){console.log(error)})

    //  function updateProductCallback(response){
    //    return response.data;
    //  };
    //  }
    //}

    function getHighlightProduct(){
      return this.data.find(product => product.highlight === true)
    }

    function logProductTweet(product_id, product_name){
      var req = {
        method: 'POST',
        url: '/tweets',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {product_id, product_name}
      };
      return $http(req).then(makeTweetCallback)
                       .catch(function(error){console.log(error)});

      function makeTweetCallback(response){
        return response.data
      };
    }
  }

  angular
    .module('williams')
    .service('ProductService', ProductService)
}())
