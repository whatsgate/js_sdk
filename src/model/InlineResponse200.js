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
import {ApiClient} from '../ApiClient';

/**
 * The InlineResponse200 model module.
 * @module model/InlineResponse200
 * @version 1.0.0
 */
export class InlineResponse200 {
  /**
   * Constructs a new <code>InlineResponse200</code>.
   * @alias module:model/InlineResponse200
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200} obj Optional instance to populate.
   * @return {module:model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse200();
      if (data.hasOwnProperty('result'))
        obj.result = ApiClient.convertToType(data['result'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} result
 */
InlineResponse200.prototype.result = undefined;

