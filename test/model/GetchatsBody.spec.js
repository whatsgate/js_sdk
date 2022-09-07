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
    describe('GetchatsBody', function() {
      beforeEach(function() {
        instance = new ApiWhatsgateru.GetchatsBody();
      });

      it('should create an instance of GetchatsBody', function() {
        // TODO: update the code to test GetchatsBody
        expect(instance).to.be.a(ApiWhatsgateru.GetchatsBody);
      });

      it('should have the property whatsappID (base name: "WhatsappID")', function() {
        // TODO: update the code to test the property whatsappID
        expect(instance).to.have.property('whatsappID');
        // expect(instance.whatsappID).to.be(expectedValueLiteral);
      });

    });
  });

}));
