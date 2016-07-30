'use strict';

describe('Service: hotness', function () {

  // load the service's module
  beforeEach(module('wats4000ApplicationApp'));

  // instantiate service
  var hotness;
  beforeEach(inject(function (_hotness_) {
    hotness = _hotness_;
  }));

  it('should do something', function () {
    expect(!!hotness).toBe(true);
  });

});
