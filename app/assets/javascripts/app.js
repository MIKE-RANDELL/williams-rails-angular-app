(function() {
    'use-strict';

    angular
      .module('williams', ['ui.router', 'templates', 'Devise', 'naif.base64', 'ng-rails-csrf', 'angular.filter', 'ngMessages'])
      .config(function($httpProvider, $compileProvider){
        $httpProvider.useApplyAsync(true);
        $compileProvider.debugInfoEnabled(false);
      });
}())
