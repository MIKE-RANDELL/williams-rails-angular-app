(function(){

  'use-strict'

  function editSubProduct(){
    return {
      templateUrl: 'directives/edit-sub-product/edit-sub-product.html',
      controller: EditSubProduct,
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {
        id: '=',
        editOffFn: '&'
      },
      compile: function($element, $attrs){
        return {
          post: function(scope, elem, attrs, ctrl){
            ctrl.editModeOff = function(){
              ctrl.editOffFn()(ctrl.subProduct)
            }
            //*what I had working originally before passing parent function*
            //  ctrl.editModeOff = function(){
            //    scope.ctrl.subProduct.editMode = false;
            //  }
          }
        }
      }
    }

    function EditSubProduct(SubProductService, $state){
      var ctrl = this;
      
      this.copySubProduct = copySubProduct;

      ctrl.subProduct = ctrl.id;
      ctrl.formSubProduct = null;

      ctrl.subProduct.price = parseFloat(ctrl.subProduct.price);

      function copySubProduct(){
        ctrl.formSubProduct = angular.copy(ctrl.subProduct)
      }
      copySubProduct()
    }
  }

  angular
    .module('williams')
    .directive('editSubProduct', ['SubProductService', '$state', editSubProduct])
}())
