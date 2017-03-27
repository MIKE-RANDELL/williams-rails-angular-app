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
      require: '^sub-products', //requiring parent controller
      link: function(scope, element, attrs, ctrl){
        scope.ctrl.editModeOff = function(){
          ctrl.offEditMode(scope.ctrl.subProduct)
        }
      }
      //compile: function($element, $attrs){
      //  return {
      //    post: function(scope, elem, attrs, ctrl){
      //      ctrl.editModeOff = function(){
      //        ctrl.editOffFn()(ctrl.subProduct)
      //      }
      //      //*what I had working originally before passing parent function*
      //      //  ctrl.editModeOff = function(){
      //      //    scope.ctrl.subProduct.editMode = false;
      //      //  }
      //    }
      //  }
      //}
    }

    function EditSubProduct(SubProductService){
      var ctrl = this;
      this.updateSubProduct = updateSubProduct;

      ctrl.subProduct = ctrl.id;

      ctrl.subProduct.price = parseFloat(ctrl.subProduct.price);

      function updateSubProduct(){
         data = {"id": this.subProduct.id, "name": this.subProduct.name, "description": this.subProduct.description, "price": this.subProduct.price}
         SubProductService.updateSubProduct(data).then(function(response){return response})
      };
    }
  }

  angular
    .module('williams')
    .directive('editSubProduct', ['SubProductService', '$state', editSubProduct])
}())
