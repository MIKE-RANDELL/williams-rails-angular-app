(function(){

  'use-strict'

  function SubProductService($http, $rootScope){
    this.makeSubProduct = makeSubProduct;
    this.getSubProducts = getSubProducts;
    this.updateSubProduct = updateSubProduct;
    this.handleInitSubProductsData = handleInitSubProductsData;
    this.handleNewSubProductData = handleNewSubProductData;
    this.handleGetNewSubProductData = handleGetNewSubProductData;
    this.getAllSubProductsData = getAllSubProductsData;

    this.data = [];

    function makeSubProduct(sub_product){
      var req = {
        method: 'POST',
        url: '/sub_products',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {sub_product}
      }
      return $http(req).then(function(res){return res.data})
    };

    function getSubProducts(product_id){
      return $http.get(`/product/${product_id}/sub_products`).then(function(res){return res.data});
    };

    function updateSubProduct(sub_product){
      var req = {
        method: 'PATCH',
        url: `/sub_products/${sub_product.id}`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {sub_product}
      }
      return $http(req).then(function(res){return res.data})
    };

    function handleInitSubProductsData(subProducts){
      this.data = subProducts;
    }

    function handleNewSubProductData(newSubProduct){
      newSubProduct.editMode = false;
      this.data.push(newSubProduct);
      $rootScope.$emit('subProductsDataUpdate')
    }

    function handleGetNewSubProductData(){
      return this.data.last;
    }

    function getAllSubProductsData(){
      return this.data;
    }
  }

  angular
    .module('williams')
    .service('SubProductService', SubProductService)
}())
