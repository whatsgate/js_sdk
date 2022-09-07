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
 * The GetmediaBody model module.
 * @module model/GetmediaBody
 * @version 1.0.0
 */
export class GetmediaBody {
  /**
   * Constructs a new <code>GetmediaBody</code>.
   * @alias module:model/GetmediaBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetmediaBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetmediaBody} obj Optional instance to populate.
   * @return {module:model/GetmediaBody} The populated <code>GetmediaBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetmediaBody();
      if (data.hasOwnProperty('WhatsappID'))
        obj.whatsappID = ApiClient.convertToType(data['WhatsappID'], 'String');
      if (data.hasOwnProperty('mediaKey'))
        obj.mediaKey = ApiClient.convertToType(data['mediaKey'], 'String');
    }
    return obj;
  }
}

/**
 * Идентификатор Whatsapp ID
 * @member {String} whatsappID
 */
GetmediaBody.prototype.whatsappID = undefined;

/**
 * Идентификатор медиафайла, содержится во входящих сообщениях.
 * @member {String} mediaKey
 */
GetmediaBody.prototype.mediaKey = undefined;
