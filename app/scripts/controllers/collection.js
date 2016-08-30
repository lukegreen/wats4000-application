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
          var userObject = {
            user: null,
            games: []
          };

          //set the user property in userObject
        	userObject.user = thisUser;

          var objectCheckOne = userObject.user;
          console.log(objectCheckOne);

          //add game names to userObject
          for (var x=0; x < thisCollection.length; ++x) {
          	var gameName = thisCollection[x].name;
          	userObject.games.push(gameName);
          }

          var objectCheckTwo = userObject.games[0];
          console.log(objectCheckTwo);

          if (!$localStorage.savedUsers){
              $localStorage.savedUsers = [thisUser];
              $localStorage.savedCollections = [userObject];
          } else {
              // We have already saved a user.
              // Check to make sure we haven't already saved the current user.
              var save = true; // Initialize the save decision variable.
              // Use this loop to check if we've already saved the user.
              for (var i=0; i < $localStorage.savedUsers.length; i++){
                  if ($localStorage.savedUsers[i] === thisUser) {
                      // This is a duplicate, so don't save (variable set to false).
                      save = false;
                  }
              }
              if (save===true){
                  $localStorage.savedUsers.push(thisUser);
                  $localStorage.savedCollections.push(userObject);
                  // Add object to trigger messages
                  $scope.collectionSaved = {
                    'success': true
                  };
              } else {
                  console.log('this username is already saved');

                  // Add object to trigger messages
                   $scope.collectionSaved = {
                       'duplicate': true
                   };
              }
            }
          };

    //define storage variable for use in the collections view
    $scope.storage = $localStorage;

    //a function to display saved collections

    $scope.displayCollection = function(user) {
      var buttonName = user;
      var collectionArray = JSON.parse(localStorage.getItem(localStorage.key(0)));

      //var userCollection = collectionArray[0].games;
      for (var i=0; i <collectionArray.length; i++) {
        if (collectionArray[i].user === buttonName){
          $scope.thisUserCollection = collectionArray[i].games.join(" " + "|" + " ");

        } else {
          //alert("Couldn't find this collection");
        }
      }
    };

  });
