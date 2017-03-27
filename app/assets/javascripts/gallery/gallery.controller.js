(function(){

  'use strict'

  function GalleryController($state, GalleryService, gallerySet){
    this.galleryArr = gallerySet
    var ctrl = this;

    ctrl.picture = {};

    ctrl.submit = function() {
      GalleryService.createPhoto(ctrl.picture).then(function(res){$state.reload()})
    }
  }

  angular
    .module('williams')
    .controller('GalleryController', ['$state', 'GalleryService', 'gallerySet', GalleryController])

}())
