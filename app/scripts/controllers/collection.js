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

    /*$scope.username = "Agnoxis";

      $scope.collection = collection.query({
        username: $scope.username
      });*/

      $scope.findCollection = function(){
        $scope.collection = collection.query({
          username: $scope.username
        })
      }

  });
