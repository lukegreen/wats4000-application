'use strict';

/**
 * @ngdoc service
 * @name wats4000ApplicationApp.collection
 * @description
 * # collection
 * Factory in the wats4000ApplicationApp.
 */
angular.module('wats4000ApplicationApp')
  .factory('collection', function ($resource) {
    // Service logic
    // ...


        // Public API here
         return $resource('https://bgg-json.azurewebsites.net/collection/:username?grouped=false', {}, {
           query: {
             method:'GET',
             params:{
               username: 'Agnoxis'
             },
             isArray:true
           }
         });
       });
