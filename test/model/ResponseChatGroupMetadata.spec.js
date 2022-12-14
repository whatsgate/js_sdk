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
    describe('ResponseChatGroupMetadata', function() {
      beforeEach(function() {
        instance = new ApiWhatsgateru.ResponseChatGroupMetadata();
      });

      it('should create an instance of ResponseChatGroupMetadata', function() {
        // TODO: update the code to test ResponseChatGroupMetadata
        expect(instance).to.be.a(ApiWhatsgateru.ResponseChatGroupMetadata);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property creation (base name: "creation")', function() {
        // TODO: update the code to test the property creation
        expect(instance).to.have.property('creation');
        // expect(instance.creation).to.be(expectedValueLiteral);
      });

      it('should have the property owner (base name: "owner")', function() {
        // TODO: update the code to test the property owner
        expect(instance).to.have.property('owner');
        // expect(instance.owner).to.be(expectedValueLiteral);
      });

      it('should have the property size (base name: "size")', function() {
        // TODO: update the code to test the property size
        expect(instance).to.have.property('size');
        // expect(instance.size).to.be(expectedValueLiteral);
      });

      it('should have the property participants (base name: "participants")', function() {
        // TODO: update the code to test the property participants
        expect(instance).to.have.property('participants');
        // expect(instance.participants).to.be(expectedValueLiteral);
      });

    });
  });

}));
