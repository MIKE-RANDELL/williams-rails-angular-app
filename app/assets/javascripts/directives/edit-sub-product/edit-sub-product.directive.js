(function(){

  'use-strict'

  function editSubProduct(){
    return {
      templateUrl: 'directives/edit-sub-product/edit-sub-product.html',
      controller: EditSubProduct,
      controllerAs: 'ctrl'
    }

    function EditSubProduct(){
      var ctrl = this;
      
    }
  }

  angular
    .module('williams')
    .directive('editSubProduct', editSubProduct)
}())
