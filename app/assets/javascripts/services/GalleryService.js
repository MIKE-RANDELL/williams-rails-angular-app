(function(){

  'use strict'

  function GalleryService($http){
    this.createPhoto = createPhoto;
    this.getPhotos = getPhotos;

    function createPhoto(picture){
      return $http.post('/pictures.json', picture).then(createPhotoCallback)
                                                  .catch(function(error){console.log(error)});

      function createPhotoCallback(response){
        return response.data;
      };
    };

    function getPhotos(){
      return $http.get('/pictures').then(getPhotosCallback)
                                   .catch(function(error){console.log(error)});

      function getPhotosCallback(response){
        return response.data;
      }
    };
  }

  angular
    .module('williams')
    .service('GalleryService', GalleryService)
}())
