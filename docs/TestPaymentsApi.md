# TestPaymentsApi

All URIs are relative to *https://api.devdraft.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**testPaymentControllerCreatePaymentV0**](TestPaymentsApi.md#testpaymentcontrollercreatepaymentv0) | **POST** /api/v0/test-payment | Process a test payment |
| [**testPaymentControllerGetPaymentV0**](TestPaymentsApi.md#testpaymentcontrollergetpaymentv0) | **GET** /api/v0/test-payment/{id} | Get payment details by ID |
| [**testPaymentControllerRefundPaymentV0**](TestPaymentsApi.md#testpaymentcontrollerrefundpaymentv0) | **POST** /api/v0/test-payment/{id}/refund | Refund a payment |



## testPaymentControllerCreatePaymentV0

> PaymentResponseDto testPaymentControllerCreatePaymentV0(idempotencyKey, paymentRequestDto)

Process a test payment

Creates a new payment. Requires an idempotency key to prevent duplicate payments on retry.      ## Idempotency Key Best Practices  1. **Generate unique keys**: Use UUIDs or similar unique identifiers, prefixed with a descriptive operation name 2. **Store keys client-side**: Save the key with the original request so you can retry with the same key 3. **Key format**: Between 6-64 alphanumeric characters 4. **Expiration**: Keys expire after 24 hours by default 5. **Use case**: Perfect for ensuring payment operations are never processed twice, even during network failures  ## Example Request (curl)  &#x60;&#x60;&#x60;bash curl -X POST \\   https://api.example.com/rest-api/v0/test-payment \\   -H \&#39;Content-Type: application/json\&#39; \\   -H \&#39;Client-Key: your-api-key\&#39; \\   -H \&#39;Client-Secret: your-api-secret\&#39; \\   -H \&#39;Idempotency-Key: payment_123456_unique_key\&#39; \\   -d \&#39;{     \&quot;amount\&quot;: 100.00,     \&quot;currency\&quot;: \&quot;USD\&quot;,     \&quot;description\&quot;: \&quot;Test payment for order #12345\&quot;,     \&quot;customerId\&quot;: \&quot;cus_12345\&quot;   }\&#39; &#x60;&#x60;&#x60;  ## Example Response (First Request)  &#x60;&#x60;&#x60;json {   \&quot;id\&quot;: \&quot;pay_abc123xyz456\&quot;,   \&quot;amount\&quot;: 100.00,   \&quot;currency\&quot;: \&quot;USD\&quot;,   \&quot;status\&quot;: \&quot;succeeded\&quot;,   \&quot;timestamp\&quot;: \&quot;2023-07-01T12:00:00.000Z\&quot; } &#x60;&#x60;&#x60;  ## Example Response (Duplicate Request)  The exact same response will be returned for any duplicate request with the same idempotency key, without creating a new payment.  ## Retry Scenario Example  Network failure during payment submission: 1. Client creates payment request with idempotency key: \&quot;payment_123456_unique_key\&quot; 2. Request begins processing, but network connection fails before response received 3. Client retries the exact same request with the same idempotency key 4. Server detects duplicate idempotency key and returns the result of the first request 5. No duplicate payment is created  If you retry with same key but different parameters (e.g., different amount), you\&#39;ll receive a 409 Conflict error.

### Example

```ts
import {
  Configuration,
  TestPaymentsApi,
} from '@devdraft/sdk';
import type { TestPaymentControllerCreatePaymentV0Request } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new TestPaymentsApi(config);

  const body = {
    // string | Unique key to ensure the request is idempotent. If a request with the same key is sent multiple times, only the first will be processed, and subsequent requests will return the same response.
    idempotencyKey: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // PaymentRequestDto
    paymentRequestDto: ...,
  } satisfies TestPaymentControllerCreatePaymentV0Request;

  try {
    const data = await api.testPaymentControllerCreatePaymentV0(body);
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
| **idempotencyKey** | `string` | Unique key to ensure the request is idempotent. If a request with the same key is sent multiple times, only the first will be processed, and subsequent requests will return the same response. | [Defaults to `undefined`] |
| **paymentRequestDto** | [PaymentRequestDto](PaymentRequestDto.md) |  | |

### Return type

[**PaymentResponseDto**](PaymentResponseDto.md)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Payment processed successfully |  -  |
| **400** | Bad Request. The idempotency key is missing or invalid.    Sample response: &#x60;&#x60;&#x60;json {   \&quot;statusCode\&quot;: 400,   \&quot;message\&quot;: \&quot;The idempotency-key header is required for POST requests\&quot; } &#x60;&#x60;&#x60; |  -  |
| **401** | Unauthorized. Client key or secret is invalid or missing. |  -  |
| **409** | Idempotency Conflict. The provided idempotency key was already used with different parameters.    Sample response: &#x60;&#x60;&#x60;json {   \&quot;statusCode\&quot;: 409,   \&quot;message\&quot;: \&quot;Conflict: Idempotency key already used with different request data\&quot; } &#x60;&#x60;&#x60; |  -  |
| **429** | Too many requests, rate limit exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## testPaymentControllerGetPaymentV0

> PaymentResponseDto testPaymentControllerGetPaymentV0(id)

Get payment details by ID

### Example

```ts
import {
  Configuration,
  TestPaymentsApi,
} from '@devdraft/sdk';
import type { TestPaymentControllerGetPaymentV0Request } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new TestPaymentsApi(config);

  const body = {
    // string | Payment ID
    id: id_example,
  } satisfies TestPaymentControllerGetPaymentV0Request;

  try {
    const data = await api.testPaymentControllerGetPaymentV0(body);
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
| **id** | `string` | Payment ID | [Defaults to `undefined`] |

### Return type

[**PaymentResponseDto**](PaymentResponseDto.md)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Payment details retrieved successfully |  -  |
| **400** | Bad Request. The idempotency key is missing or invalid.    Sample response: &#x60;&#x60;&#x60;json {   \&quot;statusCode\&quot;: 400,   \&quot;message\&quot;: \&quot;The idempotency-key header is required for POST requests\&quot; } &#x60;&#x60;&#x60; |  -  |
| **401** | Unauthorized. Client key or secret is invalid or missing. |  -  |
| **409** | Idempotency Conflict. The provided idempotency key was already used with different parameters.    Sample response: &#x60;&#x60;&#x60;json {   \&quot;statusCode\&quot;: 409,   \&quot;message\&quot;: \&quot;Conflict: Idempotency key already used with different request data\&quot; } &#x60;&#x60;&#x60; |  -  |
| **429** | Too many requests, rate limit exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## testPaymentControllerRefundPaymentV0

> RefundResponseDto testPaymentControllerRefundPaymentV0(id, idempotencyKey)

Refund a payment

Refunds an existing payment. Requires an idempotency key to prevent duplicate refunds on retry.      ## Idempotency Key Benefits for Refunds  Refunds are critical financial operations where duplicates can cause serious issues. Using idempotency keys ensures:  1. **Prevent duplicate refunds**: Even if a request times out or fails, retrying with the same key won\&#39;t issue multiple refunds 2. **Safe retries**: Network failures or timeouts won\&#39;t risk creating multiple refunds 3. **Consistent response**: Always get the same response for the same operation  ## Example Request (curl)  &#x60;&#x60;&#x60;bash curl -X POST \\   https://api.example.com/rest-api/v0/test-payment/pay_abc123xyz456/refund \\   -H \&#39;Content-Type: application/json\&#39; \\   -H \&#39;Client-Key: your-api-key\&#39; \\   -H \&#39;Client-Secret: your-api-secret\&#39; \\   -H \&#39;Idempotency-Key: refund_123456_unique_key\&#39; &#x60;&#x60;&#x60;  ## Example Response (First Request)  &#x60;&#x60;&#x60;json {   \&quot;id\&quot;: \&quot;ref_xyz789\&quot;,   \&quot;paymentId\&quot;: \&quot;pay_abc123xyz456\&quot;,   \&quot;amount\&quot;: 100.00,   \&quot;status\&quot;: \&quot;succeeded\&quot;,   \&quot;timestamp\&quot;: \&quot;2023-07-01T14:30:00.000Z\&quot; } &#x60;&#x60;&#x60;  ## Example Response (Duplicate Request)  The exact same response will be returned for any duplicate request with the same idempotency key, without creating a new refund.  ## Idempotency Key Guidelines  - Use a unique key for each distinct refund operation - Store keys client-side to ensure you can retry with the same key if needed - Keys expire after 24 hours by default

### Example

```ts
import {
  Configuration,
  TestPaymentsApi,
} from '@devdraft/sdk';
import type { TestPaymentControllerRefundPaymentV0Request } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new TestPaymentsApi(config);

  const body = {
    // string | Payment ID to refund
    id: id_example,
    // string | Unique key to ensure the refund request is idempotent. If a request with the same key is sent multiple times, only the first will be processed, and subsequent requests will return the same response.
    idempotencyKey: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies TestPaymentControllerRefundPaymentV0Request;

  try {
    const data = await api.testPaymentControllerRefundPaymentV0(body);
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
| **id** | `string` | Payment ID to refund | [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Unique key to ensure the refund request is idempotent. If a request with the same key is sent multiple times, only the first will be processed, and subsequent requests will return the same response. | [Defaults to `undefined`] |

### Return type

[**RefundResponseDto**](RefundResponseDto.md)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Payment refunded successfully |  -  |
| **400** | Bad Request. The idempotency key is missing or invalid.    Sample response: &#x60;&#x60;&#x60;json {   \&quot;statusCode\&quot;: 400,   \&quot;message\&quot;: \&quot;The idempotency-key header is required for POST requests\&quot; } &#x60;&#x60;&#x60; |  -  |
| **401** | Unauthorized. Client key or secret is invalid or missing. |  -  |
| **409** | Idempotency Conflict. The provided idempotency key was already used with different parameters.    Sample response: &#x60;&#x60;&#x60;json {   \&quot;statusCode\&quot;: 409,   \&quot;message\&quot;: \&quot;Conflict: Idempotency key already used with different request data\&quot; } &#x60;&#x60;&#x60; |  -  |
| **429** | Too many requests, rate limit exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

