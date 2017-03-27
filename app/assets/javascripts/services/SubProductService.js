(function(){

  'use-strict'

  function SubProductService($http, $rootScope){
    this.makeSubProduct = makeSubProduct;
    this.getSubProducts = getSubProducts;
    this.updateSubProduct = updateSubProduct;

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
  }

  angular
    .module('williams')
    .service('SubProductService', SubProductService)
}())
