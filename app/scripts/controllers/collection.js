'use strict';

/**
 * @ngdoc function
 * @name wats4000ApplicationApp.controller:CollectionCtrl
 * @description
 * # CollectionCtrl
 * Controller of the wats4000ApplicationApp
 */
angular.module('wats4000ApplicationApp')
  .controller('CollectionCtrl', function ($scope, $routeParams, collection, $localStorage) {

    //This function finds a collection based in the username in the view input
    $scope.findCollection = function(){
        $scope.collection = collection.query({
          username: $scope.username
        });
      };

      //Here we'll setup localStorage for usernames we want to keep
      $scope.saveUser = function(){
          var thisUser = $scope.username;
          var thisCollection = $scope.collection;

          thisCollection.username = thisUser;

          console.log(thisUser);
          console.log(thisCollection);


    if (!$localStorage.savedUsers){
        $localStorage.savedUsers = [thisUser];
        $localStorage.savedCollections = [thisCollection];
    } else {
        // We have already saved some cities.
        // Check to make sure we haven't already saved the current city.
        var save = true; // Initialize the save decision variable.
        // Use this loop to check if we've already saved the city.
        for (var i=0; i < $localStorage.savedUsers.length; i++){
            if ($localStorage.savedUsers[i] === thisUser) {
                // This is a duplicate, so don't save (variable set to false).
                save = false;
            }
        }
        if (save===true){
            $localStorage.savedUsers.push(thisUser);
            $localStorage.savedCollections.push(thisCollection);
        } else {
            console.log('this username is already saved');
        }
      }
    };

    //define storage variable for use in the collections view
    $scope.storage = $localStorage;

  });
