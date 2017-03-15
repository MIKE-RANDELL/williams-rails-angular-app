(function(){

  'use-strict'

  function GalleryController(){
    var ctrl = this;

    ctrl.pictureObjArr = ctrl.id;

    ctrl.cutCounter = (ctrl.pictureObjArr.length / 2);
    ctrl.organizedPictureObjArr = [];

    ctrl.startIdx = 0;
    ctrl.endIdx = 2;

    this.setPictureObjArr = setPictureObjArr

    function setPictureObjArr(){
      for(i=0; i < ctrl.cutCounter; i++){
        ctrl.organizedPictureObjArr.push(ctrl.pictureObjArr.slice(ctrl.startIdx, ctrl.endIdx))
        ctrl.startIdx += 2;
        ctrl.endIdx += 2;
      }
    }
    this.setPictureObjArr()
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
