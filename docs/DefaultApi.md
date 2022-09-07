# ApiWhatsgateru.DefaultApi

All URIs are relative to *https://whatsgate.ru/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkPost**](DefaultApi.md#checkPost) | **POST** /check | Проверка зарегистрирован ли номер в WhatsApp
[**getChatsPost**](DefaultApi.md#getChatsPost) | **POST** /get-chats | Возвращает список активных чатов
[**seenPost**](DefaultApi.md#seenPost) | **POST** /seen | Отправляет команду в чат, что последние сообщения просмотрены
[**sendMessage**](DefaultApi.md#sendMessage) | **POST** /send | Отправка сообщения

<a name="checkPost"></a>
# **checkPost**
> InlineResponse2001 checkPost(body)

Проверка зарегистрирован ли номер в WhatsApp

### Example
```javascript
import {ApiWhatsgateru} from 'api_whatsgateru';
let defaultClient = ApiWhatsgateru.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ApiWhatsgateru.DefaultApi();
let body = new ApiWhatsgateru.CheckBody(); // CheckBody | Проверяет, зарегистрирован ли указанный номер в WhatsApp. Номер указывается в формате только цифр, например 79999999999

apiInstance.checkPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CheckBody**](CheckBody.md)| Проверяет, зарегистрирован ли указанный номер в WhatsApp. Номер указывается в формате только цифр, например 79999999999 | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChatsPost"></a>
# **getChatsPost**
> InlineResponse2002 getChatsPost(body)

Возвращает список активных чатов

### Example
```javascript
import {ApiWhatsgateru} from 'api_whatsgateru';
let defaultClient = ApiWhatsgateru.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ApiWhatsgateru.DefaultApi();
let body = new ApiWhatsgateru.GetchatsBody(); // GetchatsBody | Запрашивает и возвращает список активных чатов, включая контакты и группы. В объекте группы находится идентификатор группы, список всех участников группы, права участников (является ли участник администратором группы).

apiInstance.getChatsPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GetchatsBody**](GetchatsBody.md)| Запрашивает и возвращает список активных чатов, включая контакты и группы. В объекте группы находится идентификатор группы, список всех участников группы, права участников (является ли участник администратором группы). | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="seenPost"></a>
# **seenPost**
> InlineResponse2004 seenPost(body)

Отправляет команду в чат, что последние сообщения просмотрены

### Example
```javascript
import {ApiWhatsgateru} from 'api_whatsgateru';
let defaultClient = ApiWhatsgateru.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ApiWhatsgateru.DefaultApi();
let body = new ApiWhatsgateru.SeenBody(); // SeenBody | Команда устанавливает у всех сообщений в указанном чате статус просмотрены.

apiInstance.seenPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SeenBody**](SeenBody.md)| Команда устанавливает у всех сообщений в указанном чате статус просмотрены. | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendMessage"></a>
# **sendMessage**
> InlineResponse200 sendMessage(body)

Отправка сообщения

### Example
```javascript
import {ApiWhatsgateru} from 'api_whatsgateru';
let defaultClient = ApiWhatsgateru.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ApiWhatsgateru.DefaultApi();
let body = new ApiWhatsgateru.SendBody(); // SendBody | Отправляет текстовое или мультимедийное сообщение контакту либо группе. Может использоваться синхронно (возвращает ответ после отправки сообщения, ответ содержит объект отправленного сообщения с идентификатором), либо асинхронно (ответ содержит результат постановки в очередь, а отправленное сообщение приходит на указанный webhook). По умолчанию используется асинхронная отправка.

apiInstance.sendMessage(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SendBody**](SendBody.md)| Отправляет текстовое или мультимедийное сообщение контакту либо группе. Может использоваться синхронно (возвращает ответ после отправки сообщения, ответ содержит объект отправленного сообщения с идентификатором), либо асинхронно (ответ содержит результат постановки в очередь, а отправленное сообщение приходит на указанный webhook). По умолчанию используется асинхронная отправка. | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

