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
import {ApiClient} from './ApiClient';
import {AnyOfseenBodyRecipient} from './model/AnyOfseenBodyRecipient';
import {AnyOfsendBodyMessage} from './model/AnyOfsendBodyMessage';
import {AnyOfsendBodyRecipient} from './model/AnyOfsendBodyRecipient';
import {CheckBody} from './model/CheckBody';
import {Error} from './model/Error';
import {GetchatsBody} from './model/GetchatsBody';
import {GetmediaBody} from './model/GetmediaBody';
import {InlineResponse200} from './model/InlineResponse200';
import {InlineResponse2001} from './model/InlineResponse2001';
import {InlineResponse2002} from './model/InlineResponse2002';
import {InlineResponse2003} from './model/InlineResponse2003';
import {InlineResponse2004} from './model/InlineResponse2004';
import {Media} from './model/Media';
import {MessageMedia} from './model/MessageMedia';
import {MessageText} from './model/MessageText';
import {OneOfinlineResponse200Result} from './model/OneOfinlineResponse200Result';
import {RecipientId} from './model/RecipientId';
import {RecipientNum} from './model/RecipientNum';
import {ResponseAsync} from './model/ResponseAsync';
import {ResponseChat} from './model/ResponseChat';
import {ResponseChatGroupMetadata} from './model/ResponseChatGroupMetadata';
import {ResponseChatGroupMetadataParticipants} from './model/ResponseChatGroupMetadataParticipants';
import {ResponseMessage} from './model/ResponseMessage';
import {SeenBody} from './model/SeenBody';
import {SendBody} from './model/SendBody';
import {DefaultApi} from './api/DefaultApi';
import {_Api} from './api/_Api';

/**
* _____Whatsapp.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ApiWhatsgateru = require('index'); // See note below*.
* var xxxSvc = new ApiWhatsgateru.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ApiWhatsgateru.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ApiWhatsgateru.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ApiWhatsgateru.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AnyOfseenBodyRecipient model constructor.
     * @property {module:model/AnyOfseenBodyRecipient}
     */
    AnyOfseenBodyRecipient,

    /**
     * The AnyOfsendBodyMessage model constructor.
     * @property {module:model/AnyOfsendBodyMessage}
     */
    AnyOfsendBodyMessage,

    /**
     * The AnyOfsendBodyRecipient model constructor.
     * @property {module:model/AnyOfsendBodyRecipient}
     */
    AnyOfsendBodyRecipient,

    /**
     * The CheckBody model constructor.
     * @property {module:model/CheckBody}
     */
    CheckBody,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The GetchatsBody model constructor.
     * @property {module:model/GetchatsBody}
     */
    GetchatsBody,

    /**
     * The GetmediaBody model constructor.
     * @property {module:model/GetmediaBody}
     */
    GetmediaBody,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003,

    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004,

    /**
     * The Media model constructor.
     * @property {module:model/Media}
     */
    Media,

    /**
     * The MessageMedia model constructor.
     * @property {module:model/MessageMedia}
     */
    MessageMedia,

    /**
     * The MessageText model constructor.
     * @property {module:model/MessageText}
     */
    MessageText,

    /**
     * The OneOfinlineResponse200Result model constructor.
     * @property {module:model/OneOfinlineResponse200Result}
     */
    OneOfinlineResponse200Result,

    /**
     * The RecipientId model constructor.
     * @property {module:model/RecipientId}
     */
    RecipientId,

    /**
     * The RecipientNum model constructor.
     * @property {module:model/RecipientNum}
     */
    RecipientNum,

    /**
     * The ResponseAsync model constructor.
     * @property {module:model/ResponseAsync}
     */
    ResponseAsync,

    /**
     * The ResponseChat model constructor.
     * @property {module:model/ResponseChat}
     */
    ResponseChat,

    /**
     * The ResponseChatGroupMetadata model constructor.
     * @property {module:model/ResponseChatGroupMetadata}
     */
    ResponseChatGroupMetadata,

    /**
     * The ResponseChatGroupMetadataParticipants model constructor.
     * @property {module:model/ResponseChatGroupMetadataParticipants}
     */
    ResponseChatGroupMetadataParticipants,

    /**
     * The ResponseMessage model constructor.
     * @property {module:model/ResponseMessage}
     */
    ResponseMessage,

    /**
     * The SeenBody model constructor.
     * @property {module:model/SeenBody}
     */
    SeenBody,

    /**
     * The SendBody model constructor.
     * @property {module:model/SendBody}
     */
    SendBody,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi,

    /**
    * The _Api service constructor.
    * @property {module:api/_Api}
    */
    _Api
};
