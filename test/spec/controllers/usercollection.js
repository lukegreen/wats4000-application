'use strict';

describe('Controller: UsercollectionCtrl', function () {

  // load the controller's module
  beforeEach(module('wats4000ApplicationApp'));

  var UsercollectionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsercollectionCtrl = $controller('UsercollectionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsercollectionCtrl.awesomeThings.length).toBe(3);
  });
});
