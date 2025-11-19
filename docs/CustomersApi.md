# CustomersApi

All URIs are relative to *https://api.devdraft.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**customerControllerCreate**](CustomersApi.md#customercontrollercreate) | **POST** /api/v0/customers | Create a new customer |
| [**customerControllerFindAll**](CustomersApi.md#customercontrollerfindall) | **GET** /api/v0/customers | Get all customers with filters |
| [**customerControllerFindOne**](CustomersApi.md#customercontrollerfindone) | **GET** /api/v0/customers/{id} | Get a customer by ID |
| [**customerControllerUpdate**](CustomersApi.md#customercontrollerupdate) | **PATCH** /api/v0/customers/{id} | Update a customer |



## customerControllerCreate

> customerControllerCreate(createCustomerDto)

Create a new customer

Creates a new customer in the system with their personal and contact information.      This endpoint allows you to register new customers and store their details for future transactions.  ## Use Cases - Register new customers for payment processing - Store customer information for recurring payments - Maintain customer profiles for transaction history  ## Example: Create New Customer &#x60;&#x60;&#x60;json {   \&quot;first_name\&quot;: \&quot;John\&quot;,   \&quot;last_name\&quot;: \&quot;Doe\&quot;,   \&quot;email\&quot;: \&quot;john.doe@example.com\&quot;,   \&quot;phone_number\&quot;: \&quot;+1-555-123-4567\&quot;,   \&quot;customer_type\&quot;: \&quot;Startup\&quot;,   \&quot;status\&quot;: \&quot;ACTIVE\&quot; } &#x60;&#x60;&#x60;  ## Required Fields - &#x60;first_name&#x60;: Customer\&#39;s first name (1-100 characters) - &#x60;last_name&#x60;: Customer\&#39;s last name (1-100 characters) - &#x60;phone_number&#x60;: Customer\&#39;s phone number (max 20 characters)  ## Optional Fields - &#x60;email&#x60;: Valid email address (max 255 characters) - &#x60;customer_type&#x60;: Type of customer account (Individual, Startup, Small Business, Medium Business, Enterprise, Non-Profit, Government) - &#x60;status&#x60;: Customer status (ACTIVE, BLACKLISTED, DEACTIVATED)

### Example

```ts
import {
  Configuration,
  CustomersApi,
} from '@devdraft/sdk';
import type { CustomerControllerCreateRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new CustomersApi(config);

  const body = {
    // CreateCustomerDto | Customer creation data
    createCustomerDto: ...,
  } satisfies CustomerControllerCreateRequest;

  try {
    const data = await api.customerControllerCreate(body);
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
| **createCustomerDto** | [CreateCustomerDto](CreateCustomerDto.md) | Customer creation data | |

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
| **201** | Customer created successfully |  -  |
| **400** | Bad Request - Invalid input data |  -  |
| **401** | Unauthorized - Invalid API credentials |  -  |
| **409** | Conflict - Customer with the same email already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## customerControllerFindAll

> customerControllerFindAll(skip, take, status, name, email)

Get all customers with filters

Retrieves a list of customers with optional filtering and pagination.      This endpoint allows you to search and filter customers based on various criteria.  ## Use Cases - List all customers with pagination - Search customers by name or email - Filter customers by status - Export customer data  ## Query Parameters - &#x60;skip&#x60;: Number of records to skip (default: 0, min: 0) - &#x60;take&#x60;: Number of records to take (default: 10, min: 1, max: 100) - &#x60;status&#x60;: Filter by customer status (ACTIVE, BLACKLISTED, DEACTIVATED) - &#x60;name&#x60;: Filter by customer name (partial match, case-insensitive) - &#x60;email&#x60;: Filter by customer email (exact match, case-insensitive)  ## Example Request &#x60;GET /api/v0/customers?skip&#x3D;0&amp;take&#x3D;20&amp;status&#x3D;ACTIVE&amp;name&#x3D;John&#x60;  ## Example Response &#x60;&#x60;&#x60;json {   \&quot;data\&quot;: [     {       \&quot;id\&quot;: \&quot;cust_123456\&quot;,       \&quot;first_name\&quot;: \&quot;John\&quot;,       \&quot;last_name\&quot;: \&quot;Doe\&quot;,       \&quot;email\&quot;: \&quot;john.doe@example.com\&quot;,       \&quot;phone_number\&quot;: \&quot;+1-555-123-4567\&quot;,       \&quot;customer_type\&quot;: \&quot;Startup\&quot;,       \&quot;status\&quot;: \&quot;ACTIVE\&quot;,       \&quot;created_at\&quot;: \&quot;2024-03-20T10:00:00Z\&quot;,       \&quot;updated_at\&quot;: \&quot;2024-03-20T10:00:00Z\&quot;     }   ],   \&quot;total\&quot;: 100,   \&quot;skip\&quot;: 0,   \&quot;take\&quot;: 10 } &#x60;&#x60;&#x60;

### Example

```ts
import {
  Configuration,
  CustomersApi,
} from '@devdraft/sdk';
import type { CustomerControllerFindAllRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new CustomersApi(config);

  const body = {
    // number | Number of records to skip for pagination (optional)
    skip: 0,
    // number | Number of records to return (max 100) (optional)
    take: 10,
    // CustomerStatus | Filter customers by status (optional)
    status: ...,
    // string | Filter customers by name (partial match, case-insensitive) (optional)
    name: John,
    // string | Filter customers by email (exact match, case-insensitive) (optional)
    email: john.doe@example.com,
  } satisfies CustomerControllerFindAllRequest;

  try {
    const data = await api.customerControllerFindAll(body);
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
| **status** | `CustomerStatus` | Filter customers by status | [Optional] [Defaults to `undefined`] [Enum: ACTIVE, BLACKLISTED, DEACTIVATED, DELETED] |
| **name** | `string` | Filter customers by name (partial match, case-insensitive) | [Optional] [Defaults to `undefined`] |
| **email** | `string` | Filter customers by email (exact match, case-insensitive) | [Optional] [Defaults to `undefined`] |

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
| **200** | Successfully retrieved customers |  -  |
| **400** | Bad Request - Invalid query parameters |  -  |
| **401** | Unauthorized - Invalid API credentials |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## customerControllerFindOne

> customerControllerFindOne(id)

Get a customer by ID

Retrieves detailed information about a specific customer.      This endpoint allows you to fetch complete customer details including their contact information and status.  ## Use Cases - View customer details - Verify customer information - Check customer status before processing payments  ## Path Parameters - &#x60;id&#x60;: Customer UUID (required) - Must be a valid UUID format  ## Example Request &#x60;GET /api/v0/customers/123e4567-e89b-12d3-a456-426614174000&#x60;  ## Example Response &#x60;&#x60;&#x60;json {   \&quot;id\&quot;: \&quot;cust_123456\&quot;,   \&quot;first_name\&quot;: \&quot;John\&quot;,   \&quot;last_name\&quot;: \&quot;Doe\&quot;,   \&quot;email\&quot;: \&quot;john.doe@example.com\&quot;,   \&quot;phone_number\&quot;: \&quot;+1-555-123-4567\&quot;,   \&quot;customer_type\&quot;: \&quot;Enterprise\&quot;,   \&quot;status\&quot;: \&quot;ACTIVE\&quot;,   \&quot;last_spent\&quot;: 1250.50,   \&quot;last_purchase_date\&quot;: \&quot;2024-03-15T14:30:00Z\&quot;,   \&quot;created_at\&quot;: \&quot;2024-03-20T10:00:00Z\&quot;,   \&quot;updated_at\&quot;: \&quot;2024-03-20T10:00:00Z\&quot; } &#x60;&#x60;&#x60;

### Example

```ts
import {
  Configuration,
  CustomersApi,
} from '@devdraft/sdk';
import type { CustomerControllerFindOneRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new CustomersApi(config);

  const body = {
    // string | Customer unique identifier (UUID)
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CustomerControllerFindOneRequest;

  try {
    const data = await api.customerControllerFindOne(body);
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
| **id** | `string` | Customer unique identifier (UUID) | [Defaults to `undefined`] |

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
| **200** | Successfully retrieved customer |  -  |
| **400** | Bad Request - Invalid customer ID format |  -  |
| **401** | Unauthorized - Invalid API credentials |  -  |
| **404** | Not Found - Customer not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## customerControllerUpdate

> customerControllerUpdate(id, updateCustomerDto)

Update a customer

Updates an existing customer\&#39;s information.      This endpoint allows you to modify customer details while preserving their core information.  ## Use Cases - Update customer contact information - Change customer type - Modify customer status  ## Path Parameters - &#x60;id&#x60;: Customer UUID (required) - Must be a valid UUID format  ## Example Request &#x60;PATCH /api/v0/customers/123e4567-e89b-12d3-a456-426614174000&#x60;  ## Example Request Body &#x60;&#x60;&#x60;json {   \&quot;first_name\&quot;: \&quot;John\&quot;,   \&quot;last_name\&quot;: \&quot;Smith\&quot;,   \&quot;phone_number\&quot;: \&quot;+1-987-654-3210\&quot;,   \&quot;customer_type\&quot;: \&quot;Small Business\&quot; } &#x60;&#x60;&#x60;  ## Notes - Only include fields that need to be updated - All fields are optional in updates - Status changes may require additional verification

### Example

```ts
import {
  Configuration,
  CustomersApi,
} from '@devdraft/sdk';
import type { CustomerControllerUpdateRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new CustomersApi(config);

  const body = {
    // string | Customer unique identifier (UUID)
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateCustomerDto | Customer update data
    updateCustomerDto: ...,
  } satisfies CustomerControllerUpdateRequest;

  try {
    const data = await api.customerControllerUpdate(body);
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
| **id** | `string` | Customer unique identifier (UUID) | [Defaults to `undefined`] |
| **updateCustomerDto** | [UpdateCustomerDto](UpdateCustomerDto.md) | Customer update data | |

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
| **200** | Successfully updated customer |  -  |
| **400** | Bad Request - Invalid input data or customer ID format |  -  |
| **401** | Unauthorized - Invalid API credentials |  -  |
| **404** | Not Found - Customer not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

