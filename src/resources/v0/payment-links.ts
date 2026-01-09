// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PaymentLinks extends APIResource {
  /**
   * Creates a new payment link with the provided details. Supports both simple
   * one-time payments and complex product bundles.
   *
   * @example
   * ```ts
   * await client.v0.paymentLinks.create({
   *   allowMobilePayment: true,
   *   allowQuantityAdjustment: true,
   *   collectAddress: true,
   *   collectTax: true,
   *   currency: 'usdc',
   *   linkType: 'PRODUCT',
   *   title: 'Premium Subscription',
   *   url: 'https://checkout.example.com/pay/123',
   *   amount: 29.99,
   *   description:
   *     'Get access to all premium features with our monthly subscription plan.',
   *   expiration_date: '2024-12-31T23:59:59Z',
   * });
   * ```
   */
  create(body: PaymentLinkCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v0/payment-links', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a payment link by ID
   *
   * @example
   * ```ts
   * await client.v0.paymentLinks.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v0/payment-links/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update a payment link
   *
   * @example
   * ```ts
   * await client.v0.paymentLinks.update('id');
   * ```
   */
  update(id: string, body: PaymentLinkUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/v0/payment-links/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all payment links
   *
   * @example
   * ```ts
   * await client.v0.paymentLinks.list();
   * ```
   */
  list(query: PaymentLinkListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v0/payment-links', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PaymentLinkCreateParams {
  /**
   * Whether to allow mobile payment
   */
  allowMobilePayment: boolean;

  /**
   * Whether to allow quantity adjustment
   */
  allowQuantityAdjustment: boolean;

  /**
   * Whether to collect address
   */
  collectAddress: boolean;

  /**
   * Whether to collect tax
   */
  collectTax: boolean;

  /**
   * Currency
   */
  currency: 'usdc' | 'eurc';

  /**
   * Type of the payment link
   */
  linkType: 'INVOICE' | 'PRODUCT' | 'COLLECTION' | 'DONATION';

  /**
   * Display title for the payment link. This appears on the checkout page and in
   * customer communications.
   */
  title: string;

  /**
   * Unique URL slug for the payment link. Can be a full URL or just the path
   * segment. Must be unique within your account.
   */
  url: string;

  /**
   * Amount for the payment link
   */
  amount?: number;

  /**
   * Cover image URL
   */
  coverImage?: string;

  /**
   * Customer ID
   */
  customerId?: string;

  /**
   * Custom fields
   */
  customFields?: unknown;

  /**
   * Detailed description of what the customer is purchasing. Supports markdown
   * formatting.
   */
  description?: string;

  /**
   * Expiration date
   */
  expiration_date?: string;

  /**
   * Whether the payment link is for all products
   */
  isForAllProduct?: boolean;

  /**
   * Whether to limit payments
   */
  limitPayments?: boolean;

  /**
   * Maximum number of payments
   */
  maxPayments?: number;

  /**
   * Payment for ID
   */
  paymentForId?: string;

  /**
   * Array of products in the payment link
   */
  paymentLinkProducts?: Array<PaymentLinkCreateParams.PaymentLinkProduct>;

  /**
   * Tax ID
   */
  taxId?: string;
}

export namespace PaymentLinkCreateParams {
  export interface PaymentLinkProduct {
    /**
     * UUID of the product to include in this payment link. Must be a valid product
     * from your catalog.
     */
    productId: string;

    /**
     * Quantity of this product to include. Must be at least 1.
     */
    quantity: number;
  }
}

export interface PaymentLinkUpdateParams {}

export interface PaymentLinkListParams {
  /**
   * Number of records to skip (must be non-negative)
   */
  skip?: string;

  /**
   * Number of records to take (must be positive)
   */
  take?: string;
}

export declare namespace PaymentLinks {
  export {
    type PaymentLinkCreateParams as PaymentLinkCreateParams,
    type PaymentLinkUpdateParams as PaymentLinkUpdateParams,
    type PaymentLinkListParams as PaymentLinkListParams,
  };
}
