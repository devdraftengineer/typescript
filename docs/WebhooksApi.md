# WebhooksApi

All URIs are relative to *https://api.devdraft.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**webhookControllerCreate**](WebhooksApi.md#webhookcontrollercreate) | **POST** /api/v0/webhooks | Create a new webhook |
| [**webhookControllerFindAll**](WebhooksApi.md#webhookcontrollerfindall) | **GET** /api/v0/webhooks | Get all webhooks |
| [**webhookControllerFindOne**](WebhooksApi.md#webhookcontrollerfindone) | **GET** /api/v0/webhooks/{id} | Get a webhook by id |
| [**webhookControllerRemove**](WebhooksApi.md#webhookcontrollerremove) | **DELETE** /api/v0/webhooks/{id} | Delete a webhook |
| [**webhookControllerUpdate**](WebhooksApi.md#webhookcontrollerupdate) | **PATCH** /api/v0/webhooks/{id} | Update a webhook |



## webhookControllerCreate

> WebhookResponseDto webhookControllerCreate(createWebhookDto)

Create a new webhook

Creates a new webhook endpoint for receiving event notifications. Requires webhook:create scope.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@devdraft/sdk';
import type { WebhookControllerCreateRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  const body = {
    // CreateWebhookDto | Webhook configuration details
    createWebhookDto: ...,
  } satisfies WebhookControllerCreateRequest;

  try {
    const data = await api.webhookControllerCreate(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createWebhookDto** | [CreateWebhookDto](CreateWebhookDto.md) | Webhook configuration details | |

### Return type

[**WebhookResponseDto**](WebhookResponseDto.md)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The webhook has been successfully created. |  -  |
| **400** | Invalid input data. |  -  |
| **401** | Unauthorized - Missing or invalid API key. |  -  |
| **403** | Forbidden - Missing required scope or API key not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## webhookControllerFindAll

> Array&lt;WebhookResponseDto&gt; webhookControllerFindAll(skip, take)

Get all webhooks

Retrieves a list of all webhooks for your application. Requires webhook:read scope.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@devdraft/sdk';
import type { WebhookControllerFindAllRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  const body = {
    // number | Number of records to skip (default: 0) (optional)
    skip: 8.14,
    // number | Number of records to return (default: 10) (optional)
    take: 8.14,
  } satisfies WebhookControllerFindAllRequest;

  try {
    const data = await api.webhookControllerFindAll(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **skip** | `number` | Number of records to skip (default: 0) | [Optional] [Defaults to `undefined`] |
| **take** | `number` | Number of records to return (default: 10) | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;WebhookResponseDto&gt;**](WebhookResponseDto.md)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Return all webhooks. |  -  |
| **401** | Unauthorized - Missing or invalid API key. |  -  |
| **403** | Forbidden - Missing required scope or API key not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## webhookControllerFindOne

> WebhookResponseDto webhookControllerFindOne(id)

Get a webhook by id

Retrieves details for a specific webhook. Requires webhook:read scope.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@devdraft/sdk';
import type { WebhookControllerFindOneRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook unique identifier (UUID)
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies WebhookControllerFindOneRequest;

  try {
    const data = await api.webhookControllerFindOne(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Webhook unique identifier (UUID) | [Defaults to `undefined`] |

### Return type

[**WebhookResponseDto**](WebhookResponseDto.md)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Return the webhook. |  -  |
| **401** | Unauthorized - Missing or invalid API key. |  -  |
| **403** | Forbidden - Missing required scope or API key not found. |  -  |
| **404** | Webhook not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## webhookControllerRemove

> WebhookResponseDto webhookControllerRemove(id)

Delete a webhook

Deletes a webhook configuration. Requires webhook:delete scope.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@devdraft/sdk';
import type { WebhookControllerRemoveRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook unique identifier (UUID)
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies WebhookControllerRemoveRequest;

  try {
    const data = await api.webhookControllerRemove(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Webhook unique identifier (UUID) | [Defaults to `undefined`] |

### Return type

[**WebhookResponseDto**](WebhookResponseDto.md)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The webhook has been successfully deleted. |  -  |
| **401** | Unauthorized - Missing or invalid API key. |  -  |
| **403** | Forbidden - Missing required scope or API key not found. |  -  |
| **404** | Webhook not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## webhookControllerUpdate

> WebhookResponseDto webhookControllerUpdate(id, updateWebhookDto)

Update a webhook

Updates an existing webhook configuration. Requires webhook:update scope.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@devdraft/sdk';
import type { WebhookControllerUpdateRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook unique identifier (UUID)
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateWebhookDto | Webhook update details
    updateWebhookDto: ...,
  } satisfies WebhookControllerUpdateRequest;

  try {
    const data = await api.webhookControllerUpdate(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Webhook unique identifier (UUID) | [Defaults to `undefined`] |
| **updateWebhookDto** | [UpdateWebhookDto](UpdateWebhookDto.md) | Webhook update details | |

### Return type

[**WebhookResponseDto**](WebhookResponseDto.md)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The webhook has been successfully updated. |  -  |
| **400** | Invalid input data. |  -  |
| **401** | Unauthorized - Missing or invalid API key. |  -  |
| **403** | Forbidden - Missing required scope or API key not found. |  -  |
| **404** | Webhook not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

