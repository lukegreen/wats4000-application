'use strict';

/**
 * @ngdoc service
 * @name wats4000ApplicationApp.hotness
 * @description
 * # hotness
 * Factory in the wats4000ApplicationApp.
 */
angular.module('wats4000ApplicationApp')
  .factory('hotness', function ($resource) {
    // Service logic
    // ...

    // Public API here
     return $resource('https://bgg-json.azurewebsites.net/hot', {}, {
       query: {
         method:'GET',
         params:{

         },
         isArray:true
       }
     });
   });
