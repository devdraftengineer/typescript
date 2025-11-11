// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as LiquidationAddressesAPI from './liquidation-addresses';
import {
  LiquidationAddressCreateParams,
  LiquidationAddressListResponse,
  LiquidationAddressResponse,
  LiquidationAddressRetrieveParams,
  LiquidationAddresses,
} from './liquidation-addresses';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Customers extends APIResource {
  liquidationAddresses: LiquidationAddressesAPI.LiquidationAddresses =
    new LiquidationAddressesAPI.LiquidationAddresses(this._client);

  /**
   * Creates a new customer in the system with their personal and contact
   * information.
   *
   * This endpoint allows you to register new customers and store their details for
   * future transactions.
   *
   * ## Use Cases
   *
   * - Register new customers for payment processing
   * - Store customer information for recurring payments
   * - Maintain customer profiles for transaction history
   *
   * ## Example: Create New Customer
   *
   * ```json
   * {
   *   "first_name": "John",
   *   "last_name": "Doe",
   *   "email": "john.doe@example.com",
   *   "phone_number": "+1-555-123-4567",
   *   "customer_type": "Startup",
   *   "status": "ACTIVE"
   * }
   * ```
   *
   * ## Required Fields
   *
   * - `first_name`: Customer's first name (1-100 characters)
   * - `last_name`: Customer's last name (1-100 characters)
   * - `phone_number`: Customer's phone number (max 20 characters)
   *
   * ## Optional Fields
   *
   * - `email`: Valid email address (max 255 characters)
   * - `customer_type`: Type of customer account (Individual, Startup, Small
   *   Business, Medium Business, Enterprise, Non-Profit, Government)
   * - `status`: Customer status (ACTIVE, BLACKLISTED, DEACTIVATED)
   *
   * @example
   * ```ts
   * await client.v0.customers.create({
   *   first_name: 'John',
   *   last_name: 'Doe',
   *   phone_number: '+1-555-123-4567',
   * });
   * ```
   */
  create(body: CustomerCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v0/customers', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves detailed information about a specific customer.
   *
   * This endpoint allows you to fetch complete customer details including their
   * contact information and status.
   *
   * ## Use Cases
   *
   * - View customer details
   * - Verify customer information
   * - Check customer status before processing payments
   *
   * ## Path Parameters
   *
   * - `id`: Customer UUID (required) - Must be a valid UUID format
   *
   * ## Example Request
   *
   * `GET /api/v0/customers/123e4567-e89b-12d3-a456-426614174000`
   *
   * ## Example Response
   *
   * ```json
   * {
   *   "id": "cust_123456",
   *   "first_name": "John",
   *   "last_name": "Doe",
   *   "email": "john.doe@example.com",
   *   "phone_number": "+1-555-123-4567",
   *   "customer_type": "Enterprise",
   *   "status": "ACTIVE",
   *   "last_spent": 1250.5,
   *   "last_purchase_date": "2024-03-15T14:30:00Z",
   *   "created_at": "2024-03-20T10:00:00Z",
   *   "updated_at": "2024-03-20T10:00:00Z"
   * }
   * ```
   *
   * @example
   * ```ts
   * await client.v0.customers.retrieve(
   *   'cust_123e4567-e89b-12d3-a456-426614174000',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v0/customers/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates an existing customer's information.
   *
   * This endpoint allows you to modify customer details while preserving their core
   * information.
   *
   * ## Use Cases
   *
   * - Update customer contact information
   * - Change customer type
   * - Modify customer status
   *
   * ## Path Parameters
   *
   * - `id`: Customer UUID (required) - Must be a valid UUID format
   *
   * ## Example Request
   *
   * `PATCH /api/v0/customers/123e4567-e89b-12d3-a456-426614174000`
   *
   * ## Example Request Body
   *
   * ```json
   * {
   *   "first_name": "John",
   *   "last_name": "Smith",
   *   "phone_number": "+1-987-654-3210",
   *   "customer_type": "Small Business"
   * }
   * ```
   *
   * ## Notes
   *
   * - Only include fields that need to be updated
   * - All fields are optional in updates
   * - Status changes may require additional verification
   *
   * @example
   * ```ts
   * await client.v0.customers.update(
   *   'cust_123e4567-e89b-12d3-a456-426614174000',
   *   { phone_number: '+1-987-654-3210' },
   * );
   * ```
   */
  update(id: string, body: CustomerUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/api/v0/customers/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a list of customers with optional filtering and pagination.
   *
   * This endpoint allows you to search and filter customers based on various
   * criteria.
   *
   * ## Use Cases
   *
   * - List all customers with pagination
   * - Search customers by name or email
   * - Filter customers by status
   * - Export customer data
   *
   * ## Query Parameters
   *
   * - `skip`: Number of records to skip (default: 0, min: 0)
   * - `take`: Number of records to take (default: 10, min: 1, max: 100)
   * - `status`: Filter by customer status (ACTIVE, BLACKLISTED, DEACTIVATED)
   * - `name`: Filter by customer name (partial match, case-insensitive)
   * - `email`: Filter by customer email (exact match, case-insensitive)
   *
   * ## Example Request
   *
   * `GET /api/v0/customers?skip=0&take=20&status=ACTIVE&name=John`
   *
   * ## Example Response
   *
   * ```json
   * {
   *   "data": [
   *     {
   *       "id": "cust_123456",
   *       "first_name": "John",
   *       "last_name": "Doe",
   *       "email": "john.doe@example.com",
   *       "phone_number": "+1-555-123-4567",
   *       "customer_type": "Startup",
   *       "status": "ACTIVE",
   *       "created_at": "2024-03-20T10:00:00Z",
   *       "updated_at": "2024-03-20T10:00:00Z"
   *     }
   *   ],
   *   "total": 100,
   *   "skip": 0,
   *   "take": 10
   * }
   * ```
   *
   * @example
   * ```ts
   * await client.v0.customers.list();
   * ```
   */
  list(query: CustomerListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v0/customers', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Current status of the customer account. Controls access to services and
 * features.
 */
export type CustomerStatus = 'ACTIVE' | 'BLACKLISTED' | 'DEACTIVATED' | 'DELETED';

/**
 * Type of customer account. Determines available features and compliance
 * requirements.
 */
export type CustomerType =
  | 'Individual'
  | 'Startup'
  | 'Small Business'
  | 'Medium Business'
  | 'Enterprise'
  | 'Non-Profit'
  | 'Government';

export interface CustomerCreateParams {
  /**
   * Customer's first name. Used for personalization and legal documentation.
   */
  first_name: string;

  /**
   * Customer's last name. Used for personalization and legal documentation.
   */
  last_name: string;

  /**
   * Customer's phone number. Used for SMS notifications and verification. Include
   * country code for international numbers.
   */
  phone_number: string;

  /**
   * Type of customer account. Determines available features and compliance
   * requirements.
   */
  customer_type?: CustomerType;

  /**
   * Customer's email address. Used for notifications, receipts, and account
   * management. Must be a valid email format.
   */
  email?: string;

  /**
   * Current status of the customer account. Controls access to services and
   * features.
   */
  status?: CustomerStatus;
}

export interface CustomerUpdateParams {
  /**
   * Type of customer account. Determines available features and compliance
   * requirements.
   */
  customer_type?: CustomerType;

  /**
   * Customer's email address. Used for notifications, receipts, and account
   * management. Must be a valid email format.
   */
  email?: string;

  /**
   * Customer's first name. Used for personalization and legal documentation.
   */
  first_name?: string;

  /**
   * Customer's last name. Used for personalization and legal documentation.
   */
  last_name?: string;

  /**
   * Customer's phone number. Used for SMS notifications and verification. Include
   * country code for international numbers.
   */
  phone_number?: string;

  /**
   * Current status of the customer account. Controls access to services and
   * features.
   */
  status?: CustomerStatus;
}

export interface CustomerListParams {
  /**
   * Filter customers by email (exact match, case-insensitive)
   */
  email?: string;

  /**
   * Filter customers by name (partial match, case-insensitive)
   */
  name?: string;

  /**
   * Number of records to skip for pagination
   */
  skip?: number;

  /**
   * Filter customers by status
   */
  status?: CustomerStatus;

  /**
   * Number of records to return (max 100)
   */
  take?: number;
}

Customers.LiquidationAddresses = LiquidationAddresses;

export declare namespace Customers {
  export {
    type CustomerStatus as CustomerStatus,
    type CustomerType as CustomerType,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };

  export {
    LiquidationAddresses as LiquidationAddresses,
    type LiquidationAddressResponse as LiquidationAddressResponse,
    type LiquidationAddressListResponse as LiquidationAddressListResponse,
    type LiquidationAddressCreateParams as LiquidationAddressCreateParams,
    type LiquidationAddressRetrieveParams as LiquidationAddressRetrieveParams,
  };
}
