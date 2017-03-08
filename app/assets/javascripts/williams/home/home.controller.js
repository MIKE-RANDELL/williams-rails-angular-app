(function() {
    'use-strict';

    function HomeController($scope) {
      $scope.name = "MIKE"
    };

    HomeController.$inject = ['$scope']

    angular
      .module('williams')
      .controller('HomeController', HomeController)

}())
