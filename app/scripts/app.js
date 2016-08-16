'use strict';

/**
 * @ngdoc overview
 * @name wats4000ApplicationApp
 * @description
 * # wats4000ApplicationApp
 *
 * Main module of the application.
 */
angular
  .module('wats4000ApplicationApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage', //added to enagle local storage features
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/collection/:username', {
        templateUrl: 'views/collection.html',
        controller: 'CollectionCtrl',
        controllerAs: 'collection'
      })
      .when('/userCollection', {
        templateUrl: 'views/usercollection.html',
        controller: 'UsercollectionCtrl',
        controllerAs: 'userCollection'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
