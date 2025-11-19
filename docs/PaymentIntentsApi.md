# PaymentIntentsApi

All URIs are relative to *https://api.devdraft.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**paymentIntentControllerCreateBankPaymentIntent**](PaymentIntentsApi.md#paymentintentcontrollercreatebankpaymentintent) | **POST** /api/v0/payment-intents/bank | Create a bank payment intent |
| [**paymentIntentControllerCreateStablePaymentIntent**](PaymentIntentsApi.md#paymentintentcontrollercreatestablepaymentintent) | **POST** /api/v0/payment-intents/stablecoin | Create a stable payment intent |



## paymentIntentControllerCreateBankPaymentIntent

> paymentIntentControllerCreateBankPaymentIntent(idempotencyKey, createBankPaymentIntentDto)

Create a bank payment intent

Creates a new bank payment intent for fiat-to-stablecoin transfers.      This endpoint allows you to create payment intents for bank transfers (ACH, Wire, SEPA) that convert to stablecoins. Perfect for onboarding users from traditional banking to crypto.  ## Supported Payment Rails - **ACH_PUSH**: US bank transfers (same-day or standard) - **WIRE**: International wire transfers - **SEPA**: European bank transfers  ## Use Cases - USD bank account to USDC conversion - EUR bank account to EURC conversion - MXN bank account to stablecoin conversion - Flexible amount payment intents for variable pricing  ## Supported Source Currencies - **USD**: US Dollar - **EUR**: Euro - **MXN**: Mexican Peso  ## Example: USD Bank to USDC &#x60;&#x60;&#x60;json {   \&quot;sourcePaymentRail\&quot;: \&quot;ach_push\&quot;,   \&quot;sourceCurrency\&quot;: \&quot;usd\&quot;,   \&quot;destinationCurrency\&quot;: \&quot;usdc\&quot;,   \&quot;destinationNetwork\&quot;: \&quot;ethereum\&quot;,   \&quot;destinationAddress\&quot;: \&quot;0x742d35Cc6634C0532925a3b8D4C9db96c4b4d8e1\&quot;,   \&quot;amount\&quot;: \&quot;1000.00\&quot;,   \&quot;customer_first_name\&quot;: \&quot;John\&quot;,   \&quot;customer_last_name\&quot;: \&quot;Doe\&quot;,   \&quot;customer_email\&quot;: \&quot;john.doe@example.com\&quot;,   \&quot;ach_reference\&quot;: \&quot;INV12345\&quot; } &#x60;&#x60;&#x60;  ## Reference Fields Use appropriate reference fields based on the payment rail: - &#x60;ach_reference&#x60;: For ACH transfers (max 10 chars, alphanumeric + spaces) - &#x60;wire_message&#x60;: For wire transfers (max 256 chars) - &#x60;sepa_reference&#x60;: For SEPA transfers (6-140 chars, specific character set)  ## Idempotency Include an &#x60;idempotency-key&#x60; header with a unique UUID v4 to prevent duplicate payments. Subsequent requests with the same key will return the original response.

### Example

```ts
import {
  Configuration,
  PaymentIntentsApi,
} from '@devdraft/sdk';
import type { PaymentIntentControllerCreateBankPaymentIntentRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new PaymentIntentsApi(config);

  const body = {
    // string | Unique UUID v4 for idempotent requests. Prevents duplicate payments.
    idempotencyKey: idempotencyKey_example,
    // CreateBankPaymentIntentDto | Bank payment intent creation data
    createBankPaymentIntentDto: ...,
  } satisfies PaymentIntentControllerCreateBankPaymentIntentRequest;

  try {
    const data = await api.paymentIntentControllerCreateBankPaymentIntent(body);
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
| **idempotencyKey** | `string` | Unique UUID v4 for idempotent requests. Prevents duplicate payments. | [Defaults to `undefined`] |
| **createBankPaymentIntentDto** | [CreateBankPaymentIntentDto](CreateBankPaymentIntentDto.md) | Bank payment intent creation data | |

### Return type

`void` (Empty response body)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Bank payment intent created successfully |  -  |
| **400** | Bad Request - Invalid input data |  -  |
| **401** | Unauthorized - Invalid API credentials |  -  |
| **404** | Not Found - App not found |  -  |
| **409** | Conflict - Idempotency key already used with different parameters |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## paymentIntentControllerCreateStablePaymentIntent

> paymentIntentControllerCreateStablePaymentIntent(idempotencyKey, createStablePaymentIntentDto)

Create a stable payment intent

Creates a new stable payment intent for stablecoin-to-stablecoin transfers.      This endpoint allows you to create payment intents for transfers between different stablecoins and networks. Perfect for cross-chain stablecoin swaps and conversions.  ## Use Cases - USDC to EURC conversions - Cross-chain stablecoin transfers (e.g., Ethereum USDC to Polygon USDC) - Flexible amount payment intents for dynamic pricing  ## Example: USDC to EURC Conversion &#x60;&#x60;&#x60;json {   \&quot;sourceCurrency\&quot;: \&quot;usdc\&quot;,   \&quot;sourceNetwork\&quot;: \&quot;ethereum\&quot;,   \&quot;destinationCurrency\&quot;: \&quot;eurc\&quot;,   \&quot;destinationNetwork\&quot;: \&quot;polygon\&quot;,   \&quot;destinationAddress\&quot;: \&quot;0x742d35Cc6634C0532925a3b8D4C9db96c4b4d8e1\&quot;,   \&quot;amount\&quot;: \&quot;100.00\&quot;,   \&quot;customer_first_name\&quot;: \&quot;John\&quot;,   \&quot;customer_last_name\&quot;: \&quot;Doe\&quot;,   \&quot;customer_email\&quot;: \&quot;john.doe@example.com\&quot; } &#x60;&#x60;&#x60;  ## Flexible Amount Payments Omit the &#x60;amount&#x60; field to create a flexible payment intent where users can specify the amount during payment.  ## Idempotency Include an &#x60;idempotency-key&#x60; header with a unique UUID v4 to prevent duplicate payments. Subsequent requests with the same key will return the original response.

### Example

```ts
import {
  Configuration,
  PaymentIntentsApi,
} from '@devdraft/sdk';
import type { PaymentIntentControllerCreateStablePaymentIntentRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new PaymentIntentsApi(config);

  const body = {
    // string | Unique UUID v4 for idempotent requests. Prevents duplicate payments.
    idempotencyKey: idempotencyKey_example,
    // CreateStablePaymentIntentDto | Stable payment intent creation data
    createStablePaymentIntentDto: ...,
  } satisfies PaymentIntentControllerCreateStablePaymentIntentRequest;

  try {
    const data = await api.paymentIntentControllerCreateStablePaymentIntent(body);
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
| **idempotencyKey** | `string` | Unique UUID v4 for idempotent requests. Prevents duplicate payments. | [Defaults to `undefined`] |
| **createStablePaymentIntentDto** | [CreateStablePaymentIntentDto](CreateStablePaymentIntentDto.md) | Stable payment intent creation data | |

### Return type

`void` (Empty response body)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Stable payment intent created successfully |  -  |
| **400** | Bad Request - Invalid input data |  -  |
| **401** | Unauthorized - Invalid API credentials |  -  |
| **404** | Not Found - App not found |  -  |
| **409** | Conflict - Idempotency key already used with different parameters |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

