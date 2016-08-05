'use strict';

describe('Service: collection', function () {

  // load the service's module
  beforeEach(module('wats4000ApplicationApp'));

  // instantiate service
  var collection;
  beforeEach(inject(function (_collection_) {
    collection = _collection_;
  }));

  it('should do something', function () {
    expect(!!collection).toBe(true);
  });

});
