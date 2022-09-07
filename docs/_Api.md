# ApiWhatsgateru._Api

All URIs are relative to *https://whatsgate.ru/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMediaPost**](_Api.md#getMediaPost) | **POST** /get-media | Возвращает объект медиафайла, прикрепленного к сообщению

<a name="getMediaPost"></a>
# **getMediaPost**
> InlineResponse2003 getMediaPost(body)

Возвращает объект медиафайла, прикрепленного к сообщению

### Example
```javascript
import {ApiWhatsgateru} from 'api_whatsgateru';
let defaultClient = ApiWhatsgateru.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ApiWhatsgateru._Api();
let body = new ApiWhatsgateru.GetmediaBody(); // GetmediaBody | Запрашивает и возвращает медиа-файл, прикрепленный к сообщению по идентификатору mediaKey.

apiInstance.getMediaPost(body, (error, data, response) => {
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
 **body** | [**GetmediaBody**](GetmediaBody.md)| Запрашивает и возвращает медиа-файл, прикрепленный к сообщению по идентификатору mediaKey. | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

