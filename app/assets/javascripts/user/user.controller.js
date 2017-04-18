(function(){
  'use-strict'

  function UserController($scope){
    $scope.$on('auth:login-error', function(ev, reason) {
      $scope.error = reason.errors[0];
    });
  }

  angular
    .module('williams')
    .controller('UserController', ['$scope', UserController])
}())
