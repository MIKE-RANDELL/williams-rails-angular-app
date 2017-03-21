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
        toggleEditMode: '&'
      },
      compile: function($element, $attrs){
        return {
          pre: function(scope, element, attrs){

          },
          post: function(scope, element, attrs, controller){
            controller.editModeOff = function(){
              scope.$parent.$parent.subProduct.editMode = false;
            }
          }
        }
      }
    }

    function EditSubProduct(ProductService, $state){
      var ctrl = this;
      this.updateSubProduct = updateSubProduct;
      this.toggleEditMode = ctrl.toggleEditMode;

      ctrl.subProduct = ctrl.id;

      ctrl.subProduct.price = parseFloat(ctrl.subProduct.price);

      function updateSubProduct(){
        data = {"id": this.subProduct.id, "name": this.subProduct.name, "description": this.subProduct.description, "price": this.subProduct.price}
        ProductService.updateSubProduct(data).then(function(response){return response})
        //this.editModeOff() //this is running through on-click event now
      };
    }
  }

  angular
    .module('williams')
    .directive('editSubProduct', ['ProductService', '$state', editSubProduct])
}())
