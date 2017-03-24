(function(){

  'use-strict'

  function ProductService($http, $rootScope){
    this.makeProduct = makeProduct;
    this.getProducts = getProducts;
    //this.makeSubProduct = makeSubProduct;
    //this.getSubProducts = getSubProducts;
    //this.updateSubProduct = updateSubProduct;
    this.handleInitProductsData = handleInitProductsData;
    this.handleNewProductData = handleNewProductData;
    this.handleGetNewProductData = handleGetNewProductData;

    this.data = [];

    function makeProduct(product){
      var req = {
        method: 'POST',
        url: '/products',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {product}
      }
      return $http(req).then(function(res){return res.data})
    };

    function getProducts(){
      return $http.get('/products').then(function(res){return res.data})
    };

    //function makeSubProduct(sub_product){
    //  var req = {
    //    method: 'POST',
    //    url: '/sub_products',
    //    headers: {
    //      'Content-Type': 'application/json'
    //    },
    //    data: {sub_product}
    //  }
    //  return $http(req).then(function(res){return res.data})
    //};
//
    //function getSubProducts(product_id){
    //  return $http.get(`/product/${product_id}/sub_products`).then(function(res){return res.data});
    //};
//
    //function updateSubProduct(sub_product){
    //  var req = {
    //    method: 'PATCH',
    //    url: `/sub_products/${sub_product.id}`,
    //    headers: {
    //      'Content-Type': 'application/json'
    //    },
    //    data: {sub_product}
    //  }
    //  return $http(req).then(function(res){return res.data})
    //};

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
  }

  angular
    .module('williams')
    .service('ProductService', ProductService)
}())
