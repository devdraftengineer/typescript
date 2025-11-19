# TransfersApi

All URIs are relative to *https://api.devdraft.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**transferControllerCreateDirectBankTransfer**](TransfersApi.md#transfercontrollercreatedirectbanktransfer) | **POST** /api/v0/transfers/direct-bank | Create a direct bank transfer |
| [**transferControllerCreateDirectWalletTransfer**](TransfersApi.md#transfercontrollercreatedirectwallettransfer) | **POST** /api/v0/transfers/direct-wallet | Create a direct wallet transfer |
| [**transferControllerCreateExternalBankTransfer**](TransfersApi.md#transfercontrollercreateexternalbanktransfer) | **POST** /api/v0/transfers/external-bank-transfer | Create an external bank transfer |
| [**transferControllerCreateExternalStablecoinTransfer**](TransfersApi.md#transfercontrollercreateexternalstablecointransfer) | **POST** /api/v0/transfers/external-stablecoin-transfer | Create an external stablecoin transfer |
| [**transferControllerCreateStablecoinConversion**](TransfersApi.md#transfercontrollercreatestablecoinconversion) | **POST** /api/v0/transfers/stablecoin-conversion | Create a stablecoin conversion |



## transferControllerCreateDirectBankTransfer

> transferControllerCreateDirectBankTransfer(createDirectBankTransferDto)

Create a direct bank transfer

### Example

```ts
import {
  Configuration,
  TransfersApi,
} from '@devdraft/sdk';
import type { TransferControllerCreateDirectBankTransferRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new TransfersApi(config);

  const body = {
    // CreateDirectBankTransferDto
    createDirectBankTransferDto: ...,
  } satisfies TransferControllerCreateDirectBankTransferRequest;

  try {
    const data = await api.transferControllerCreateDirectBankTransfer(body);
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
| **createDirectBankTransferDto** | [CreateDirectBankTransferDto](CreateDirectBankTransferDto.md) |  | |

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
| **201** | The transfer has been successfully created. |  -  |
| **400** | Bad Request - Invalid input |  -  |
| **404** | Not Found - Bridge wallet not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## transferControllerCreateDirectWalletTransfer

> transferControllerCreateDirectWalletTransfer(createDirectWalletTransferDto)

Create a direct wallet transfer

### Example

```ts
import {
  Configuration,
  TransfersApi,
} from '@devdraft/sdk';
import type { TransferControllerCreateDirectWalletTransferRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new TransfersApi(config);

  const body = {
    // CreateDirectWalletTransferDto
    createDirectWalletTransferDto: ...,
  } satisfies TransferControllerCreateDirectWalletTransferRequest;

  try {
    const data = await api.transferControllerCreateDirectWalletTransfer(body);
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
| **createDirectWalletTransferDto** | [CreateDirectWalletTransferDto](CreateDirectWalletTransferDto.md) |  | |

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
| **201** | The transfer has been successfully created. |  -  |
| **400** | Bad Request - Invalid input |  -  |
| **404** | Not Found - Bridge wallet not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## transferControllerCreateExternalBankTransfer

> transferControllerCreateExternalBankTransfer(createExternalBankTransferDto)

Create an external bank transfer

### Example

```ts
import {
  Configuration,
  TransfersApi,
} from '@devdraft/sdk';
import type { TransferControllerCreateExternalBankTransferRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new TransfersApi(config);

  const body = {
    // CreateExternalBankTransferDto
    createExternalBankTransferDto: ...,
  } satisfies TransferControllerCreateExternalBankTransferRequest;

  try {
    const data = await api.transferControllerCreateExternalBankTransfer(body);
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
| **createExternalBankTransferDto** | [CreateExternalBankTransferDto](CreateExternalBankTransferDto.md) |  | |

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
| **201** | The external bank transfer has been successfully created. |  -  |
| **400** | Bad Request - Invalid input |  -  |
| **404** | Not Found - Bridge wallet not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## transferControllerCreateExternalStablecoinTransfer

> transferControllerCreateExternalStablecoinTransfer(createExternalStablecoinTransferDto)

Create an external stablecoin transfer

### Example

```ts
import {
  Configuration,
  TransfersApi,
} from '@devdraft/sdk';
import type { TransferControllerCreateExternalStablecoinTransferRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new TransfersApi(config);

  const body = {
    // CreateExternalStablecoinTransferDto
    createExternalStablecoinTransferDto: ...,
  } satisfies TransferControllerCreateExternalStablecoinTransferRequest;

  try {
    const data = await api.transferControllerCreateExternalStablecoinTransfer(body);
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
| **createExternalStablecoinTransferDto** | [CreateExternalStablecoinTransferDto](CreateExternalStablecoinTransferDto.md) |  | |

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
| **201** | The external stablecoin transfer has been successfully created. |  -  |
| **400** | Bad Request - Invalid input |  -  |
| **404** | Not Found - Bridge wallet not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## transferControllerCreateStablecoinConversion

> transferControllerCreateStablecoinConversion(createStablecoinConversionDto)

Create a stablecoin conversion

### Example

```ts
import {
  Configuration,
  TransfersApi,
} from '@devdraft/sdk';
import type { TransferControllerCreateStablecoinConversionRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new TransfersApi(config);

  const body = {
    // CreateStablecoinConversionDto
    createStablecoinConversionDto: ...,
  } satisfies TransferControllerCreateStablecoinConversionRequest;

  try {
    const data = await api.transferControllerCreateStablecoinConversion(body);
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
| **createStablecoinConversionDto** | [CreateStablecoinConversionDto](CreateStablecoinConversionDto.md) |  | |

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
| **201** | The conversion has been successfully created. |  -  |
| **400** | Bad Request - Invalid input |  -  |
| **404** | Not Found - Bridge wallet not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

