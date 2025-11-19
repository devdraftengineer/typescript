# InvoicesApi

All URIs are relative to *https://api.devdraft.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**invoiceControllerCreate**](InvoicesApi.md#invoicecontrollercreate) | **POST** /api/v0/invoices | Create a new invoice |
| [**invoiceControllerFindAll**](InvoicesApi.md#invoicecontrollerfindall) | **GET** /api/v0/invoices | Get all invoices |
| [**invoiceControllerFindOne**](InvoicesApi.md#invoicecontrollerfindone) | **GET** /api/v0/invoices/{id} | Get an invoice by ID |
| [**invoiceControllerUpdate**](InvoicesApi.md#invoicecontrollerupdate) | **PUT** /api/v0/invoices/{id} | Update an invoice |



## invoiceControllerCreate

> invoiceControllerCreate(createInvoiceDto)

Create a new invoice

### Example

```ts
import {
  Configuration,
  InvoicesApi,
} from '@devdraft/sdk';
import type { InvoiceControllerCreateRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new InvoicesApi(config);

  const body = {
    // CreateInvoiceDto
    createInvoiceDto: ...,
  } satisfies InvoiceControllerCreateRequest;

  try {
    const data = await api.invoiceControllerCreate(body);
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
| **createInvoiceDto** | [CreateInvoiceDto](CreateInvoiceDto.md) |  | |

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
| **201** | The invoice has been successfully created. |  -  |
| **400** | Bad Request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## invoiceControllerFindAll

> invoiceControllerFindAll(skip, take)

Get all invoices

### Example

```ts
import {
  Configuration,
  InvoicesApi,
} from '@devdraft/sdk';
import type { InvoiceControllerFindAllRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new InvoicesApi(config);

  const body = {
    // number | Number of records to skip (optional)
    skip: 8.14,
    // number | Number of records to take (optional)
    take: 8.14,
  } satisfies InvoiceControllerFindAllRequest;

  try {
    const data = await api.invoiceControllerFindAll(body);
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
| **skip** | `number` | Number of records to skip | [Optional] [Defaults to `undefined`] |
| **take** | `number` | Number of records to take | [Optional] [Defaults to `undefined`] |

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
| **200** | Return all invoices. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## invoiceControllerFindOne

> invoiceControllerFindOne(id)

Get an invoice by ID

### Example

```ts
import {
  Configuration,
  InvoicesApi,
} from '@devdraft/sdk';
import type { InvoiceControllerFindOneRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new InvoicesApi(config);

  const body = {
    // string | Invoice ID
    id: id_example,
  } satisfies InvoiceControllerFindOneRequest;

  try {
    const data = await api.invoiceControllerFindOne(body);
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
| **id** | `string` | Invoice ID | [Defaults to `undefined`] |

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
| **200** | Return the invoice. |  -  |
| **404** | Invoice not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## invoiceControllerUpdate

> invoiceControllerUpdate(id, createInvoiceDto)

Update an invoice

### Example

```ts
import {
  Configuration,
  InvoicesApi,
} from '@devdraft/sdk';
import type { InvoiceControllerUpdateRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new InvoicesApi(config);

  const body = {
    // string | Invoice ID
    id: id_example,
    // CreateInvoiceDto
    createInvoiceDto: ...,
  } satisfies InvoiceControllerUpdateRequest;

  try {
    const data = await api.invoiceControllerUpdate(body);
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
| **id** | `string` | Invoice ID | [Defaults to `undefined`] |
| **createInvoiceDto** | [CreateInvoiceDto](CreateInvoiceDto.md) |  | |

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
| **200** | The invoice has been successfully updated. |  -  |
| **404** | Invoice not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

