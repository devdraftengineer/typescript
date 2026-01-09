// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class TestPayment extends APIResource {
  /**
   * Get payment details by ID
   *
   * @example
   * ```ts
   * const paymentResponse =
   *   await client.v0.testPayment.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PaymentResponse> {
    return this._client.get(path`/api/v0/test-payment/${id}`, options);
  }

  /**
   * Creates a new payment. Requires an idempotency key to prevent duplicate payments
   * on retry.
   *
   * ## Idempotency Key Best Practices
   *
   * 1. **Generate unique keys**: Use UUIDs or similar unique identifiers, prefixed
   *    with a descriptive operation name
   * 2. **Store keys client-side**: Save the key with the original request so you can
   *    retry with the same key
   * 3. **Key format**: Between 6-64 alphanumeric characters
   * 4. **Expiration**: Keys expire after 24 hours by default
   * 5. **Use case**: Perfect for ensuring payment operations are never processed
   *    twice, even during network failures
   *
   * ## Example Request (curl)
   *
   * ```bash
   * curl -X POST \
   *   https://api.example.com/rest-api/v0/test-payment \
   *   -H 'Content-Type: application/json' \
   *   -H 'Client-Key: your-api-key' \
   *   -H 'Client-Secret: your-api-secret' \
   *   -H 'Idempotency-Key: payment_123456_unique_key' \
   *   -d '{
   *     "amount": 100.00,
   *     "currency": "USD",
   *     "description": "Test payment for order #12345",
   *     "customerId": "cus_12345"
   *   }'
   * ```
   *
   * ## Example Response (First Request)
   *
   * ```json
   * {
   *   "id": "pay_abc123xyz456",
   *   "amount": 100.0,
   *   "currency": "USD",
   *   "status": "succeeded",
   *   "timestamp": "2023-07-01T12:00:00.000Z"
   * }
   * ```
   *
   * ## Example Response (Duplicate Request)
   *
   * The exact same response will be returned for any duplicate request with the same
   * idempotency key, without creating a new payment.
   *
   * ## Retry Scenario Example
   *
   * Network failure during payment submission:
   *
   * 1. Client creates payment request with idempotency key:
   *    "payment_123456_unique_key"
   * 2. Request begins processing, but network connection fails before response
   *    received
   * 3. Client retries the exact same request with the same idempotency key
   * 4. Server detects duplicate idempotency key and returns the result of the first
   *    request
   * 5. No duplicate payment is created
   *
   * If you retry with same key but different parameters (e.g., different amount),
   * you'll receive a 409 Conflict error.
   *
   * @example
   * ```ts
   * const paymentResponse = await client.v0.testPayment.process(
   *   {
   *     amount: 100.5,
   *     currency: 'USD',
   *     description: 'Test payment for API',
   *   },
   * );
   * ```
   */
  process(body: TestPaymentProcessParams, options?: RequestOptions): APIPromise<PaymentResponse> {
    return this._client.post('/api/v0/test-payment', { body, ...options });
  }

  /**
   * Refunds an existing payment. Requires an idempotency key to prevent duplicate
   * refunds on retry.
   *
   * ## Idempotency Key Benefits for Refunds
   *
   * Refunds are critical financial operations where duplicates can cause serious
   * issues. Using idempotency keys ensures:
   *
   * 1. **Prevent duplicate refunds**: Even if a request times out or fails, retrying
   *    with the same key won't issue multiple refunds
   * 2. **Safe retries**: Network failures or timeouts won't risk creating multiple
   *    refunds
   * 3. **Consistent response**: Always get the same response for the same operation
   *
   * ## Example Request (curl)
   *
   * ```bash
   * curl -X POST \
   *   https://api.example.com/rest-api/v0/test-payment/pay_abc123xyz456/refund \
   *   -H 'Content-Type: application/json' \
   *   -H 'Client-Key: your-api-key' \
   *   -H 'Client-Secret: your-api-secret' \
   *   -H 'Idempotency-Key: refund_123456_unique_key'
   * ```
   *
   * ## Example Response (First Request)
   *
   * ```json
   * {
   *   "id": "ref_xyz789",
   *   "paymentId": "pay_abc123xyz456",
   *   "amount": 100.0,
   *   "status": "succeeded",
   *   "timestamp": "2023-07-01T14:30:00.000Z"
   * }
   * ```
   *
   * ## Example Response (Duplicate Request)
   *
   * The exact same response will be returned for any duplicate request with the same
   * idempotency key, without creating a new refund.
   *
   * ## Idempotency Key Guidelines
   *
   * - Use a unique key for each distinct refund operation
   * - Store keys client-side to ensure you can retry with the same key if needed
   * - Keys expire after 24 hours by default
   *
   * @example
   * ```ts
   * const response = await client.v0.testPayment.refund('id');
   * ```
   */
  refund(id: string, options?: RequestOptions): APIPromise<TestPaymentRefundResponse> {
    return this._client.post(path`/api/v0/test-payment/${id}/refund`, options);
  }
}

export interface PaymentResponse {
  /**
   * Payment ID
   */
  id: string;

  /**
   * The amount charged
   */
  amount: number;

  /**
   * The currency code
   */
  currency: string;

  /**
   * Payment status
   */
  status: string;

  /**
   * Timestamp of the payment
   */
  timestamp: string;
}

export interface TestPaymentRefundResponse {
  /**
   * Refund ID
   */
  id: string;

  /**
   * The amount refunded
   */
  amount: number;

  /**
   * Original payment ID
   */
  paymentId: string;

  /**
   * Refund status
   */
  status: string;

  /**
   * Timestamp of the refund
   */
  timestamp: string;
}

export interface TestPaymentProcessParams {
  /**
   * The amount to charge
   */
  amount: number;

  /**
   * The currency code
   */
  currency: string;

  /**
   * Description of the payment
   */
  description: string;

  /**
   * Customer reference ID
   */
  customerId?: string;
}

export declare namespace TestPayment {
  export {
    type PaymentResponse as PaymentResponse,
    type TestPaymentRefundResponse as TestPaymentRefundResponse,
    type TestPaymentProcessParams as TestPaymentProcessParams,
  };
}
