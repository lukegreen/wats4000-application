'use strict';

/**
 * @ngdoc function
 * @name wats4000ApplicationApp.controller:CollectionCtrl
 * @description
 * # CollectionCtrl
 * Controller of the wats4000ApplicationApp
 */
angular.module('wats4000ApplicationApp')
  .controller('CollectionCtrl', function ($scope, $routeParams, collection) {
    //$scope.collection = collection.query();

      $scope.username = $routeParams.username;



       $scope.findCollection = function() {
         $scope.thisCollection = collection.query({
               username: $routeParams.username;
          });
       };

  });
