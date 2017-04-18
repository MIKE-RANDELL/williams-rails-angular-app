(function() {
    'use-strict';

    angular
      .module('williams', ['ui.router', 'templates', 'naif.base64', 'ng-rails-csrf', 'ng-token-auth', 'ipCookie', 'angular.filter', 'ngMessages'])
      .config(function($httpProvider, $compileProvider){
        $httpProvider.useApplyAsync(true);
        $compileProvider.debugInfoEnabled(false);
      });
}())
