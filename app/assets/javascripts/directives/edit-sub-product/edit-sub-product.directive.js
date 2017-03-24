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
        offToggleEditMode: '&'
      },
      compile: function($element, $attrs){
        return {
          post: function(scope, elem, attrs, ctrl){
            ctrl.editModeOff = function(){
              scope.ctrl.subProduct.editMode = false;
            }
          }
        }
      }
    }

    function EditSubProduct(SubProductService, $state){
      var ctrl = this;
      this.updateSubProduct = updateSubProduct;
      this.offToggleEditMode = ctrl.offToggleEditMode;

      console.log(ctrl.offToggleEditMode)

      ctrl.subProduct = ctrl.id;

      ctrl.subProduct.price = parseFloat(ctrl.subProduct.price);

      function updateSubProduct(){
        data = {"id": this.subProduct.id, "name": this.subProduct.name, "description": this.subProduct.description, "price": this.subProduct.price}
        SubProductService.updateSubProduct(data).then(function(response){return response})
        //this.editModeOff() //this is running through on-click event now
      };
    }
  }

  angular
    .module('williams')
    .directive('editSubProduct', ['SubProductService', '$state', editSubProduct])
}())
