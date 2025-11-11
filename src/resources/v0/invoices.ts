// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Invoices extends APIResource {
  /**
   * Create a new invoice
   *
   * @example
   * ```ts
   * await client.v0.invoices.create({
   *   currency: 'usdc',
   *   customer_id: 'customer_id',
   *   delivery: 'EMAIL',
   *   due_date: '2019-12-27T18:11:19.117Z',
   *   email: 'email',
   *   items: [{ product_id: 'product_id', quantity: 0 }],
   *   name: 'name',
   *   partial_payment: true,
   *   payment_link: true,
   *   payment_methods: ['ACH'],
   *   status: 'DRAFT',
   * });
   * ```
   */
  create(body: InvoiceCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v0/invoices', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get an invoice by ID
   *
   * @example
   * ```ts
   * await client.v0.invoices.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v0/invoices/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update an invoice
   *
   * @example
   * ```ts
   * await client.v0.invoices.update('id', {
   *   currency: 'usdc',
   *   customer_id: 'customer_id',
   *   delivery: 'EMAIL',
   *   due_date: '2019-12-27T18:11:19.117Z',
   *   email: 'email',
   *   items: [{ product_id: 'product_id', quantity: 0 }],
   *   name: 'name',
   *   partial_payment: true,
   *   payment_link: true,
   *   payment_methods: ['ACH'],
   *   status: 'DRAFT',
   * });
   * ```
   */
  update(id: string, body: InvoiceUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/v0/invoices/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all invoices
   *
   * @example
   * ```ts
   * await client.v0.invoices.list();
   * ```
   */
  list(query: InvoiceListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v0/invoices', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CreateInvoice {
  /**
   * Currency for the invoice
   */
  currency: 'usdc' | 'eurc';

  /**
   * Customer ID
   */
  customer_id: string;

  /**
   * Delivery method
   */
  delivery: 'EMAIL' | 'MANUALLY';

  /**
   * Due date of the invoice
   */
  due_date: string;

  /**
   * Email address
   */
  email: string;

  /**
   * Array of products in the invoice
   */
  items: Array<CreateInvoice.Item>;

  /**
   * Name of the invoice
   */
  name: string;

  /**
   * Allow partial payments
   */
  partial_payment: boolean;

  /**
   * Whether to generate a payment link
   */
  payment_link: boolean;

  /**
   * Array of accepted payment methods
   */
  payment_methods: Array<'ACH' | 'BANK_TRANSFER' | 'CREDIT_CARD' | 'CASH' | 'MOBILE_MONEY' | 'CRYPTO'>;

  /**
   * Invoice status
   */
  status: 'DRAFT' | 'OPEN' | 'PASTDUE' | 'PAID' | 'PARTIALLYPAID';

  /**
   * Address
   */
  address?: string;

  /**
   * Logo URL
   */
  logo?: string;

  /**
   * Phone number
   */
  phone_number?: string;

  /**
   * Send date
   */
  send_date?: string;

  /**
   * Tax ID
   */
  taxId?: string;
}

export namespace CreateInvoice {
  export interface Item {
    /**
     * Product ID
     */
    product_id: string;

    /**
     * Quantity of the product
     */
    quantity: number;
  }
}

export interface InvoiceCreateParams {
  /**
   * Currency for the invoice
   */
  currency: 'usdc' | 'eurc';

  /**
   * Customer ID
   */
  customer_id: string;

  /**
   * Delivery method
   */
  delivery: 'EMAIL' | 'MANUALLY';

  /**
   * Due date of the invoice
   */
  due_date: string;

  /**
   * Email address
   */
  email: string;

  /**
   * Array of products in the invoice
   */
  items: Array<InvoiceCreateParams.Item>;

  /**
   * Name of the invoice
   */
  name: string;

  /**
   * Allow partial payments
   */
  partial_payment: boolean;

  /**
   * Whether to generate a payment link
   */
  payment_link: boolean;

  /**
   * Array of accepted payment methods
   */
  payment_methods: Array<'ACH' | 'BANK_TRANSFER' | 'CREDIT_CARD' | 'CASH' | 'MOBILE_MONEY' | 'CRYPTO'>;

  /**
   * Invoice status
   */
  status: 'DRAFT' | 'OPEN' | 'PASTDUE' | 'PAID' | 'PARTIALLYPAID';

  /**
   * Address
   */
  address?: string;

  /**
   * Logo URL
   */
  logo?: string;

  /**
   * Phone number
   */
  phone_number?: string;

  /**
   * Send date
   */
  send_date?: string;

  /**
   * Tax ID
   */
  taxId?: string;
}

export namespace InvoiceCreateParams {
  export interface Item {
    /**
     * Product ID
     */
    product_id: string;

    /**
     * Quantity of the product
     */
    quantity: number;
  }
}

export interface InvoiceUpdateParams {
  /**
   * Currency for the invoice
   */
  currency: 'usdc' | 'eurc';

  /**
   * Customer ID
   */
  customer_id: string;

  /**
   * Delivery method
   */
  delivery: 'EMAIL' | 'MANUALLY';

  /**
   * Due date of the invoice
   */
  due_date: string;

  /**
   * Email address
   */
  email: string;

  /**
   * Array of products in the invoice
   */
  items: Array<InvoiceUpdateParams.Item>;

  /**
   * Name of the invoice
   */
  name: string;

  /**
   * Allow partial payments
   */
  partial_payment: boolean;

  /**
   * Whether to generate a payment link
   */
  payment_link: boolean;

  /**
   * Array of accepted payment methods
   */
  payment_methods: Array<'ACH' | 'BANK_TRANSFER' | 'CREDIT_CARD' | 'CASH' | 'MOBILE_MONEY' | 'CRYPTO'>;

  /**
   * Invoice status
   */
  status: 'DRAFT' | 'OPEN' | 'PASTDUE' | 'PAID' | 'PARTIALLYPAID';

  /**
   * Address
   */
  address?: string;

  /**
   * Logo URL
   */
  logo?: string;

  /**
   * Phone number
   */
  phone_number?: string;

  /**
   * Send date
   */
  send_date?: string;

  /**
   * Tax ID
   */
  taxId?: string;
}

export namespace InvoiceUpdateParams {
  export interface Item {
    /**
     * Product ID
     */
    product_id: string;

    /**
     * Quantity of the product
     */
    quantity: number;
  }
}

export interface InvoiceListParams {
  /**
   * Number of records to skip
   */
  skip?: number;

  /**
   * Number of records to take
   */
  take?: number;
}

export declare namespace Invoices {
  export {
    type CreateInvoice as CreateInvoice,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
    type InvoiceListParams as InvoiceListParams,
  };
}
