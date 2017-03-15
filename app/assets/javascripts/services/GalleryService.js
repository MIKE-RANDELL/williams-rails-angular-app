(function(){

  'use strict'

  function GalleryService($http){
    this.createPhoto = createPhoto;
    this.getPhotos = getPhotos;

    function createPhoto(picture){
      return $http.post('/pictures.json', picture).then(function(res) {
        return res.data
      });
    };

    function getPhotos(){
      return $http.get('/pictures').then(getPhotosCallback)

      function getPhotosCallback(response){
        return response.data
      }
    };
  }

  angular
    .module('williams')
    .service('GalleryService', GalleryService)
}())
