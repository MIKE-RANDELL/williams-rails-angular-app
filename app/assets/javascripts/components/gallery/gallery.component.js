(function(){

  'use-strict'

  function GalleryController(){
    var ctrl = this;
    this.$onInit = () => {
      ctrl.pictureObjArr = this.id
      this.setPictureObjArr()
    }
    //ctrl.pictureObjArr = ctrl.id;


    ctrl.organizedPictureObjArr = [];

    ctrl.startIdx = 0;
    ctrl.endIdx = 2;

    this.setPictureObjArr = setPictureObjArr

    function setPictureObjArr(){
      ctrl.cutCounter = (ctrl.pictureObjArr.length / 2);
      for(i=0; i < ctrl.cutCounter; i++){
        ctrl.organizedPictureObjArr.push(ctrl.pictureObjArr.slice(ctrl.startIdx, ctrl.endIdx))
        ctrl.startIdx += 2;
        ctrl.endIdx += 2;
        //debugger;
      }
    }
    //if(ctrl.pictureObjArr){
    //  this.setPictureObjArr()
    //}
  }

  var Gallery = {
    templateUrl: 'components/gallery/gallery.html',
    bindings: {
      id:'='
    },
    controller: GalleryController,
    controllerAs: 'ctrl'
  }

  angular
    .module('williams')
    .component('gallery', Gallery)
}())
