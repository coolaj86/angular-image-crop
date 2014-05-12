'use strict';

describe('Controller: ProfilePicCtrl', function () {

  // load the controller's module
  beforeEach(module('sortinghatApp'));

  var ProfilePicCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfilePicCtrl = $controller('ProfilePicCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
