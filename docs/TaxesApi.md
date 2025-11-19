# TaxesApi

All URIs are relative to *https://api.devdraft.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**taxControllerCreate**](TaxesApi.md#taxcontrollercreate) | **POST** /api/v0/taxes | Create a new tax |
| [**taxControllerDeleteWithoutId**](TaxesApi.md#taxcontrollerdeletewithoutid) | **DELETE** /api/v0/taxes | Tax ID required for deletion |
| [**taxControllerFindAll**](TaxesApi.md#taxcontrollerfindall) | **GET** /api/v0/taxes | Get all taxes with filters |
| [**taxControllerFindOne**](TaxesApi.md#taxcontrollerfindone) | **GET** /api/v0/taxes/{id} | Get a tax by ID |
| [**taxControllerRemove**](TaxesApi.md#taxcontrollerremove) | **DELETE** /api/v0/taxes/{id} | Delete a tax |
| [**taxControllerUpdate**](TaxesApi.md#taxcontrollerupdate) | **PUT** /api/v0/taxes/{id} | Update a tax |
| [**taxControllerUpdateWithoutId**](TaxesApi.md#taxcontrollerupdatewithoutid) | **PUT** /api/v0/taxes | Tax ID required for updates |



## taxControllerCreate

> TaxControllerCreate201Response taxControllerCreate(createTaxDto)

Create a new tax

Creates a new tax rate that can be applied to products, invoices, and payment links.  ## Use Cases - Set up sales tax for different regions - Create VAT rates for international customers - Configure state and local tax rates - Manage tax compliance requirements  ## Example: Create Basic Sales Tax &#x60;&#x60;&#x60;json {   \&quot;name\&quot;: \&quot;Sales Tax\&quot;,   \&quot;description\&quot;: \&quot;Standard sales tax for retail transactions\&quot;,   \&quot;percentage\&quot;: 8.5,   \&quot;active\&quot;: true } &#x60;&#x60;&#x60;  ## Required Fields - &#x60;name&#x60;: Tax name for identification (1-100 characters) - &#x60;percentage&#x60;: Tax rate percentage (0-100)  ## Optional Fields - &#x60;description&#x60;: Explanation of what this tax covers (max 255 characters) - &#x60;active&#x60;: Whether this tax is currently active (default: true) - &#x60;appIds&#x60;: Array of app IDs where this tax should be available

### Example

```ts
import {
  Configuration,
  TaxesApi,
} from '@devdraft/sdk';
import type { TaxControllerCreateRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new TaxesApi(config);

  const body = {
    // CreateTaxDto | Tax creation data
    createTaxDto: ...,
  } satisfies TaxControllerCreateRequest;

  try {
    const data = await api.taxControllerCreate(body);
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
| **createTaxDto** | [CreateTaxDto](CreateTaxDto.md) | Tax creation data | |

### Return type

[**TaxControllerCreate201Response**](TaxControllerCreate201Response.md)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Tax created successfully |  -  |
| **400** | Bad Request - Invalid input data |  -  |
| **401** | Unauthorized - Invalid API credentials |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## taxControllerDeleteWithoutId

> taxControllerDeleteWithoutId()

Tax ID required for deletion

This endpoint requires a tax ID in the URL path. Use DELETE /api/v0/taxes/{id} instead.

### Example

```ts
import {
  Configuration,
  TaxesApi,
} from '@devdraft/sdk';
import type { TaxControllerDeleteWithoutIdRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new TaxesApi(config);

  try {
    const data = await api.taxControllerDeleteWithoutId();
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

`void` (Empty response body)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **400** | Bad Request - Tax ID is required in the URL path |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## taxControllerFindAll

> taxControllerFindAll(skip, take, name, active)

Get all taxes with filters

Retrieves a list of taxes with optional filtering and pagination.  ## Use Cases - List all available tax rates - Search taxes by name - Filter active/inactive taxes - Export tax configuration  ## Query Parameters - &#x60;skip&#x60;: Number of records to skip (default: 0, min: 0) - &#x60;take&#x60;: Number of records to return (default: 10, min: 1, max: 100) - &#x60;name&#x60;: Filter taxes by name (partial match, case-insensitive) - &#x60;active&#x60;: Filter by active status (true/false)  ## Example Request &#x60;GET /api/v0/taxes?skip&#x3D;0&amp;take&#x3D;20&amp;active&#x3D;true&amp;name&#x3D;Sales&#x60;  ## Example Response &#x60;&#x60;&#x60;json [   {     \&quot;id\&quot;: \&quot;tax_123456\&quot;,     \&quot;name\&quot;: \&quot;Sales Tax\&quot;,     \&quot;description\&quot;: \&quot;Standard sales tax for retail transactions\&quot;,     \&quot;percentage\&quot;: 8.5,     \&quot;active\&quot;: true,     \&quot;created_at\&quot;: \&quot;2024-03-20T10:00:00Z\&quot;,     \&quot;updated_at\&quot;: \&quot;2024-03-20T10:00:00Z\&quot;   } ] &#x60;&#x60;&#x60;

### Example

```ts
import {
  Configuration,
  TaxesApi,
} from '@devdraft/sdk';
import type { TaxControllerFindAllRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new TaxesApi(config);

  const body = {
    // number | Number of records to skip for pagination (optional)
    skip: 0,
    // number | Number of records to return (max 100) (optional)
    take: 10,
    // string | Filter taxes by name (partial match, case-insensitive) (optional)
    name: Sales,
    // boolean | Filter by active status (optional)
    active: true,
  } satisfies TaxControllerFindAllRequest;

  try {
    const data = await api.taxControllerFindAll(body);
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
| **skip** | `number` | Number of records to skip for pagination | [Optional] [Defaults to `0`] |
| **take** | `number` | Number of records to return (max 100) | [Optional] [Defaults to `10`] |
| **name** | `string` | Filter taxes by name (partial match, case-insensitive) | [Optional] [Defaults to `undefined`] |
| **active** | `boolean` | Filter by active status | [Optional] [Defaults to `undefined`] |

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
| **200** | Successfully retrieved taxes |  -  |
| **400** | Bad Request - Invalid query parameters |  -  |
| **401** | Unauthorized - Invalid API credentials |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## taxControllerFindOne

> taxControllerFindOne(id)

Get a tax by ID

Retrieves detailed information about a specific tax.  ## Use Cases - View tax details - Verify tax configuration - Check tax status before applying to products  ## Path Parameters - &#x60;id&#x60;: Tax UUID (required) - Must be a valid UUID format  ## Example Request &#x60;GET /api/v0/taxes/123e4567-e89b-12d3-a456-426614174000&#x60;  ## Example Response &#x60;&#x60;&#x60;json {   \&quot;id\&quot;: \&quot;tax_123456\&quot;,   \&quot;name\&quot;: \&quot;Sales Tax\&quot;,   \&quot;description\&quot;: \&quot;Standard sales tax for retail transactions\&quot;,   \&quot;percentage\&quot;: 8.5,   \&quot;active\&quot;: true,   \&quot;created_at\&quot;: \&quot;2024-03-20T10:00:00Z\&quot;,   \&quot;updated_at\&quot;: \&quot;2024-03-20T10:00:00Z\&quot; } &#x60;&#x60;&#x60;

### Example

```ts
import {
  Configuration,
  TaxesApi,
} from '@devdraft/sdk';
import type { TaxControllerFindOneRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new TaxesApi(config);

  const body = {
    // string | Tax unique identifier (UUID)
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies TaxControllerFindOneRequest;

  try {
    const data = await api.taxControllerFindOne(body);
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
| **id** | `string` | Tax unique identifier (UUID) | [Defaults to `undefined`] |

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
| **200** | Successfully retrieved tax |  -  |
| **400** | Bad Request - Invalid tax ID format |  -  |
| **401** | Unauthorized - Invalid API credentials |  -  |
| **404** | Not Found - Tax not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## taxControllerRemove

> taxControllerRemove(id)

Delete a tax

Deletes an existing tax.  ## Use Cases - Remove obsolete tax rates - Clean up unused taxes - Comply with regulatory changes  ## Path Parameters - &#x60;id&#x60;: Tax UUID (required) - Must be a valid UUID format  ## Example Request &#x60;DELETE /api/v0/taxes/123e4567-e89b-12d3-a456-426614174000&#x60;  ## Warning This action cannot be undone. Consider deactivating the tax instead of deleting it if it has been used in transactions.

### Example

```ts
import {
  Configuration,
  TaxesApi,
} from '@devdraft/sdk';
import type { TaxControllerRemoveRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new TaxesApi(config);

  const body = {
    // string | Tax unique identifier (UUID)
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies TaxControllerRemoveRequest;

  try {
    const data = await api.taxControllerRemove(body);
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
| **id** | `string` | Tax unique identifier (UUID) | [Defaults to `undefined`] |

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
| **200** | Successfully deleted tax |  -  |
| **400** | Bad Request - Invalid tax ID format |  -  |
| **401** | Unauthorized - Invalid API credentials |  -  |
| **404** | Not Found - Tax not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## taxControllerUpdate

> taxControllerUpdate(id, updateTaxDto)

Update a tax

Updates an existing tax\&#39;s information.  ## Use Cases - Modify tax percentage rates - Update tax descriptions - Activate/deactivate taxes - Change tax names  ## Path Parameters - &#x60;id&#x60;: Tax UUID (required) - Must be a valid UUID format  ## Example Request &#x60;PUT /api/v0/taxes/123e4567-e89b-12d3-a456-426614174000&#x60;  ## Example Request Body &#x60;&#x60;&#x60;json {   \&quot;name\&quot;: \&quot;Updated Sales Tax\&quot;,   \&quot;description\&quot;: \&quot;Updated sales tax rate\&quot;,   \&quot;percentage\&quot;: 9.0,   \&quot;active\&quot;: true } &#x60;&#x60;&#x60;  ## Notes - Only include fields that need to be updated - All fields are optional in updates - Percentage changes affect future calculations only

### Example

```ts
import {
  Configuration,
  TaxesApi,
} from '@devdraft/sdk';
import type { TaxControllerUpdateRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new TaxesApi(config);

  const body = {
    // string | Tax unique identifier (UUID)
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateTaxDto | Tax update data - only include fields you want to update
    updateTaxDto: ...,
  } satisfies TaxControllerUpdateRequest;

  try {
    const data = await api.taxControllerUpdate(body);
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
| **id** | `string` | Tax unique identifier (UUID) | [Defaults to `undefined`] |
| **updateTaxDto** | [UpdateTaxDto](UpdateTaxDto.md) | Tax update data - only include fields you want to update | |

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
| **200** | Successfully updated tax |  -  |
| **400** | Bad Request - Invalid input data or tax ID format |  -  |
| **401** | Unauthorized - Invalid API credentials |  -  |
| **404** | Not Found - Tax not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## taxControllerUpdateWithoutId

> taxControllerUpdateWithoutId()

Tax ID required for updates

This endpoint requires a tax ID in the URL path. Use PUT /api/v0/taxes/{id} instead.

### Example

```ts
import {
  Configuration,
  TaxesApi,
} from '@devdraft/sdk';
import type { TaxControllerUpdateWithoutIdRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new TaxesApi(config);

  try {
    const data = await api.taxControllerUpdateWithoutId();
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

`void` (Empty response body)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **400** | Bad Request - Tax ID is required in the URL path |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

