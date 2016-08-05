'use strict';

/**
 * @ngdoc service
 * @name wats4000ApplicationApp.collection
 * @description
 * # collection
 * Factory in the wats4000ApplicationApp.
 */
angular.module('wats4000ApplicationApp')
  .factory('collection', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
