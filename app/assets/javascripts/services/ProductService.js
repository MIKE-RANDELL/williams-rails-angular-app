(function(){

  'use-strict'

  function ProductService($http){
    this.makeProduct = makeProduct
    this.getProducts = getProducts

    function makeProduct(product){
      var req = {
        method: 'POST', //this here takes care of the POST request
        url: '/products',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {product}
      }
      return $http(req).then(function(res){console.log(res)})
    }

    function getProducts(){

    }
  }

  angular
    .module('williams')
    .service('ProductService', ProductService)
}())
