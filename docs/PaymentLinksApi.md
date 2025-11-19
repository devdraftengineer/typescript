# PaymentLinksApi

All URIs are relative to *https://api.devdraft.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**paymentLinksControllerCreate**](PaymentLinksApi.md#paymentlinkscontrollercreate) | **POST** /api/v0/payment-links | Create a new payment link |
| [**paymentLinksControllerFindAll**](PaymentLinksApi.md#paymentlinkscontrollerfindall) | **GET** /api/v0/payment-links | Get all payment links |
| [**paymentLinksControllerFindOne**](PaymentLinksApi.md#paymentlinkscontrollerfindone) | **GET** /api/v0/payment-links/{id} | Get a payment link by ID |
| [**paymentLinksControllerUpdate**](PaymentLinksApi.md#paymentlinkscontrollerupdate) | **PUT** /api/v0/payment-links/{id} | Update a payment link |



## paymentLinksControllerCreate

> paymentLinksControllerCreate(createPaymentLinkDto)

Create a new payment link

Creates a new payment link with the provided details. Supports both simple one-time payments and complex product bundles.

### Example

```ts
import {
  Configuration,
  PaymentLinksApi,
} from '@devdraft/sdk';
import type { PaymentLinksControllerCreateRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new PaymentLinksApi(config);

  const body = {
    // CreatePaymentLinkDto | Payment link creation data
    createPaymentLinkDto: ...,
  } satisfies PaymentLinksControllerCreateRequest;

  try {
    const data = await api.paymentLinksControllerCreate(body);
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
| **createPaymentLinkDto** | [CreatePaymentLinkDto](CreatePaymentLinkDto.md) | Payment link creation data | |

### Return type

`void` (Empty response body)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The payment link has been successfully created. |  -  |
| **400** | Bad Request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## paymentLinksControllerFindAll

> paymentLinksControllerFindAll(skip, take)

Get all payment links

### Example

```ts
import {
  Configuration,
  PaymentLinksApi,
} from '@devdraft/sdk';
import type { PaymentLinksControllerFindAllRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new PaymentLinksApi(config);

  const body = {
    // string | Number of records to skip (must be non-negative) (optional)
    skip: skip_example,
    // string | Number of records to take (must be positive) (optional)
    take: take_example,
  } satisfies PaymentLinksControllerFindAllRequest;

  try {
    const data = await api.paymentLinksControllerFindAll(body);
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
| **skip** | `string` | Number of records to skip (must be non-negative) | [Optional] [Defaults to `undefined`] |
| **take** | `string` | Number of records to take (must be positive) | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Return all payment links. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## paymentLinksControllerFindOne

> paymentLinksControllerFindOne(id)

Get a payment link by ID

### Example

```ts
import {
  Configuration,
  PaymentLinksApi,
} from '@devdraft/sdk';
import type { PaymentLinksControllerFindOneRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new PaymentLinksApi(config);

  const body = {
    // string | Payment Link ID
    id: id_example,
  } satisfies PaymentLinksControllerFindOneRequest;

  try {
    const data = await api.paymentLinksControllerFindOne(body);
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
| **id** | `string` | Payment Link ID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Return the payment link. |  -  |
| **404** | Payment link not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## paymentLinksControllerUpdate

> paymentLinksControllerUpdate(id, body)

Update a payment link

### Example

```ts
import {
  Configuration,
  PaymentLinksApi,
} from '@devdraft/sdk';
import type { PaymentLinksControllerUpdateRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new PaymentLinksApi(config);

  const body = {
    // string | Payment Link ID
    id: id_example,
    // object
    body: Object,
  } satisfies PaymentLinksControllerUpdateRequest;

  try {
    const data = await api.paymentLinksControllerUpdate(body);
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
| **id** | `string` | Payment Link ID | [Defaults to `undefined`] |
| **body** | `object` |  | |

### Return type

`void` (Empty response body)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The payment link has been successfully updated. |  -  |
| **404** | Payment link not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

