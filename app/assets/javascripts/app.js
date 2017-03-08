(function() {
    'use-strict';

    function WilliamsController($scope) {
      $scope.name = "MIKE"
    }

    angular
      .module('williams', ['ui.router', 'templates', 'Devise'])
      .controller('WilliamsController', WilliamsController)
}())
