(function(){

  'use strict'

  function GalleryController(GalleryService, gallerySet){
    this.galleryArr = gallerySet
    var ctrl = this;

    ctrl.picture = {};

    //ctrl.submit = function() {
    //  $http.post('/pictures.json', ctrl.picture).then(function(res) {
    //    ctrl.upload = res.data.photo;
    //  });
    //}

    ctrl.submit = function() {
      GalleryService.createPhoto(ctrl.picture).then(function(res){console.log(res)})
    }
  }

  angular
    .module('williams')
    .controller('GalleryController', ['GalleryService', 'gallerySet', GalleryController])

}())
