# APIHealthApi

All URIs are relative to *https://api.devdraft.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**healthControllerCheckV0**](APIHealthApi.md#healthcontrollercheckv0) | **GET** /api/v0/health | Authenticated health check endpoint |
| [**healthControllerPublicHealthCheckV0**](APIHealthApi.md#healthcontrollerpublichealthcheckv0) | **GET** /api/v0/health/public | Public health check endpoint |



## healthControllerCheckV0

> HealthResponseDto healthControllerCheckV0()

Authenticated health check endpoint

### Example

```ts
import {
  Configuration,
  APIHealthApi,
} from '@devdraft/sdk';
import type { HealthControllerCheckV0Request } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new APIHealthApi(config);

  try {
    const data = await api.healthControllerCheckV0();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**HealthResponseDto**](HealthResponseDto.md)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Service is up and running |  -  |
| **401** | Unauthorized. Client key or secret is invalid or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## healthControllerPublicHealthCheckV0

> PublicHealthResponseDto healthControllerPublicHealthCheckV0()

Public health check endpoint

### Example

```ts
import {
  Configuration,
  APIHealthApi,
} from '@devdraft/sdk';
import type { HealthControllerPublicHealthCheckV0Request } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const api = new APIHealthApi();

  try {
    const data = await api.healthControllerPublicHealthCheckV0();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**PublicHealthResponseDto**](PublicHealthResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Basic service health check |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

