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
 * The RecipientNum model module.
 * @module model/RecipientNum
 * @version 1.0.0
 */
export class RecipientNum {
  /**
   * Constructs a new <code>RecipientNum</code>.
   * @alias module:model/RecipientNum
   * @class
   * @param _number {String} Recipient number
   */
  constructor(_number) {
    this._number = _number;
  }

  /**
   * Constructs a <code>RecipientNum</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientNum} obj Optional instance to populate.
   * @return {module:model/RecipientNum} The populated <code>RecipientNum</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RecipientNum();
      if (data.hasOwnProperty('number'))
        obj._number = ApiClient.convertToType(data['number'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }
}

/**
 * Recipient number
 * @member {String} _number
 */
RecipientNum.prototype._number = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
RecipientNum.TypeEnum = {
  /**
   * value: "group"
   * @const
   */
  group: "group",

  /**
   * value: "contact"
   * @const
   */
  contact: "contact"
};
/**
 * Recipient type, group or contact
 * @member {module:model/RecipientNum.TypeEnum} type
 * @default 'contact'
 */
RecipientNum.prototype.type = 'contact';

// Implement AnyOfseenBodyRecipient interface:
// Implement AnyOfsendBodyRecipient interface:
