/*
 * API whatsgate.ru
 * Интерфейс для взаимодействия с клиентом Whatsapp
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.35
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApiWhatsgateru);
  }
}(this, function(expect, ApiWhatsgateru) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Media', function() {
      beforeEach(function() {
        instance = new ApiWhatsgateru.Media();
      });

      it('should create an instance of Media', function() {
        // TODO: update the code to test Media
        expect(instance).to.be.a(ApiWhatsgateru.Media);
      });

      it('should have the property mimetype (base name: "mimetype")', function() {
        // TODO: update the code to test the property mimetype
        expect(instance).to.have.property('mimetype');
        // expect(instance.mimetype).to.be(expectedValueLiteral);
      });

      it('should have the property data (base name: "data")', function() {
        // TODO: update the code to test the property data
        expect(instance).to.have.property('data');
        // expect(instance.data).to.be(expectedValueLiteral);
      });

      it('should have the property filename (base name: "filename")', function() {
        // TODO: update the code to test the property filename
        expect(instance).to.have.property('filename');
        // expect(instance.filename).to.be(expectedValueLiteral);
      });

    });
  });

}));
