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
      return $http(req).then(makeSubProductCallback)
                       .catch(function(error){console.log(error)})

      function makeSubProductCallback(response){
        return response.data;
      }
    };

    function getSubProducts(product_id){
      return $http.get(`/product/${product_id}/sub_products`).then(getSubProductsCallback)
                                                             .catch(function(error){console.log(error)})

      function getSubProductsCallback(response){
        return response.data;
      }
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
      return $http(req).then(updateSubProductCallback)
                       .catch(function(error){console.log(error)})

      function updateSubProductCallback(response){
        return response.data;
      };
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
      for(var i = 0; i < this.data.length; i++) {
        this.data[i].photo = "https://" + this.data[i].photo.slice(2).split('?')[0]
      }
      return this.data;
    }
  }

  angular
    .module('williams')
    .service('SubProductService', SubProductService)
}())
