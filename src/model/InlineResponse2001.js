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
 * The InlineResponse2001 model module.
 * @module model/InlineResponse2001
 * @version 1.0.0
 */
export class InlineResponse2001 {
  /**
   * Constructs a new <code>InlineResponse2001</code>.
   * @alias module:model/InlineResponse2001
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2001</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2001} obj Optional instance to populate.
   * @return {module:model/InlineResponse2001} The populated <code>InlineResponse2001</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2001();
      if (data.hasOwnProperty('result'))
        obj.result = ApiClient.convertToType(data['result'], 'String');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], 'Boolean');
    }
    return obj;
  }
}

/**
 * при удачном исполнении запроса содержит OK
 * @member {String} result
 */
InlineResponse2001.prototype.result = undefined;

/**
 * результат проверки, true - зарегистрирован.
 * @member {Boolean} data
 */
InlineResponse2001.prototype.data = undefined;

