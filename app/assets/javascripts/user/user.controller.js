(function(){
  'use-strict'

  function UserController($scope){
    $scope.$on('auth:login-success', function() {
      $scope.message = "Successful login!"
    });
    $scope.$on('auth:login-error', function(ev, reason) {
      $scope.message = "Login failed, you must have admin credentials!"
    });
    $scope.$on('auth:logout-success', function() {
      $scope.message = "Successful logout!"
    });
    $scope.$on('auth:logout-error', function() {
      $scope.message = "Logout failed!"
    });
  }

  angular
    .module('williams')
    .controller('UserController', ['$scope', UserController])
}())
