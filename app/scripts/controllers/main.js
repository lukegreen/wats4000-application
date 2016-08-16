'use strict';

/**
 * @ngdoc function
 * @name wats4000ApplicationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wats4000ApplicationApp
 */
angular.module('wats4000ApplicationApp')
  .controller('MainCtrl', function ($scope, hotness, $localStorage) {
    $scope.hotness = hotness.query();
    $scope.storage = $localStorage;

    

  });
