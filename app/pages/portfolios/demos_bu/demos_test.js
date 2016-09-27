'use strict';

describe('myApp.demos module', function() {

  beforeEach(module('myApp.demos'));

  describe('demos controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var demosCtrl = $controller('demosCtrl');
      expect(demosCtrl).toBeDefined();
    }));

  });
});