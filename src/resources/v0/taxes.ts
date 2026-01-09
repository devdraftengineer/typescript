// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Taxes extends APIResource {
  /**
   * Creates a new tax rate that can be applied to products, invoices, and payment
   * links.
   *
   * ## Use Cases
   *
   * - Set up sales tax for different regions
   * - Create VAT rates for international customers
   * - Configure state and local tax rates
   * - Manage tax compliance requirements
   *
   * ## Example: Create Basic Sales Tax
   *
   * ```json
   * {
   *   "name": "Sales Tax",
   *   "description": "Standard sales tax for retail transactions",
   *   "percentage": 8.5,
   *   "active": true
   * }
   * ```
   *
   * ## Required Fields
   *
   * - `name`: Tax name for identification (1-100 characters)
   * - `percentage`: Tax rate percentage (0-100)
   *
   * ## Optional Fields
   *
   * - `description`: Explanation of what this tax covers (max 255 characters)
   * - `active`: Whether this tax is currently active (default: true)
   * - `appIds`: Array of app IDs where this tax should be available
   *
   * @example
   * ```ts
   * const tax = await client.v0.taxes.create({
   *   name: 'Sales Tax',
   *   percentage: 8.5,
   * });
   * ```
   */
  create(body: TaxCreateParams, options?: RequestOptions): APIPromise<TaxCreateResponse> {
    return this._client.post('/api/v0/taxes', { body, ...options });
  }

  /**
   * Retrieves detailed information about a specific tax.
   *
   * ## Use Cases
   *
   * - View tax details
   * - Verify tax configuration
   * - Check tax status before applying to products
   *
   * ## Path Parameters
   *
   * - `id`: Tax UUID (required) - Must be a valid UUID format
   *
   * ## Example Request
   *
   * `GET /api/v0/taxes/123e4567-e89b-12d3-a456-426614174000`
   *
   * ## Example Response
   *
   * ```json
   * {
   *   "id": "tax_123456",
   *   "name": "Sales Tax",
   *   "description": "Standard sales tax for retail transactions",
   *   "percentage": 8.5,
   *   "active": true,
   *   "created_at": "2024-03-20T10:00:00Z",
   *   "updated_at": "2024-03-20T10:00:00Z"
   * }
   * ```
   *
   * @example
   * ```ts
   * await client.v0.taxes.retrieve(
   *   'tax_123e4567-e89b-12d3-a456-426614174000',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v0/taxes/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates an existing tax's information.
   *
   * ## Use Cases
   *
   * - Modify tax percentage rates
   * - Update tax descriptions
   * - Activate/deactivate taxes
   * - Change tax names
   *
   * ## Path Parameters
   *
   * - `id`: Tax UUID (required) - Must be a valid UUID format
   *
   * ## Example Request
   *
   * `PUT /api/v0/taxes/123e4567-e89b-12d3-a456-426614174000`
   *
   * ## Example Request Body
   *
   * ```json
   * {
   *   "name": "Updated Sales Tax",
   *   "description": "Updated sales tax rate",
   *   "percentage": 9.0,
   *   "active": true
   * }
   * ```
   *
   * ## Notes
   *
   * - Only include fields that need to be updated
   * - All fields are optional in updates
   * - Percentage changes affect future calculations only
   *
   * @example
   * ```ts
   * await client.v0.taxes.update(
   *   'tax_123e4567-e89b-12d3-a456-426614174000',
   *   { percentage: 10.5 },
   * );
   * ```
   */
  update(id: string, body: TaxUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/v0/taxes/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a list of taxes with optional filtering and pagination.
   *
   * ## Use Cases
   *
   * - List all available tax rates
   * - Search taxes by name
   * - Filter active/inactive taxes
   * - Export tax configuration
   *
   * ## Query Parameters
   *
   * - `skip`: Number of records to skip (default: 0, min: 0)
   * - `take`: Number of records to return (default: 10, min: 1, max: 100)
   * - `name`: Filter taxes by name (partial match, case-insensitive)
   * - `active`: Filter by active status (true/false)
   *
   * ## Example Request
   *
   * `GET /api/v0/taxes?skip=0&take=20&active=true&name=Sales`
   *
   * ## Example Response
   *
   * ```json
   * [
   *   {
   *     "id": "tax_123456",
   *     "name": "Sales Tax",
   *     "description": "Standard sales tax for retail transactions",
   *     "percentage": 8.5,
   *     "active": true,
   *     "created_at": "2024-03-20T10:00:00Z",
   *     "updated_at": "2024-03-20T10:00:00Z"
   *   }
   * ]
   * ```
   *
   * @example
   * ```ts
   * await client.v0.taxes.list();
   * ```
   */
  list(query: TaxListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v0/taxes', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Deletes an existing tax.
   *
   * ## Use Cases
   *
   * - Remove obsolete tax rates
   * - Clean up unused taxes
   * - Comply with regulatory changes
   *
   * ## Path Parameters
   *
   * - `id`: Tax UUID (required) - Must be a valid UUID format
   *
   * ## Example Request
   *
   * `DELETE /api/v0/taxes/123e4567-e89b-12d3-a456-426614174000`
   *
   * ## Warning
   *
   * This action cannot be undone. Consider deactivating the tax instead of deleting
   * it if it has been used in transactions.
   *
   * @example
   * ```ts
   * await client.v0.taxes.delete(
   *   'tax_123e4567-e89b-12d3-a456-426614174000',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v0/taxes/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This endpoint requires a tax ID in the URL path. Use DELETE /api/v0/taxes/{id}
   * instead.
   *
   * @example
   * ```ts
   * await client.v0.taxes.deleteAll();
   * ```
   */
  deleteAll(options?: RequestOptions): APIPromise<void> {
    return this._client.delete('/api/v0/taxes', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This endpoint requires a tax ID in the URL path. Use PUT /api/v0/taxes/{id}
   * instead.
   *
   * @example
   * ```ts
   * await client.v0.taxes.updateAll();
   * ```
   */
  updateAll(options?: RequestOptions): APIPromise<void> {
    return this._client.put('/api/v0/taxes', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TaxCreateResponse {
  id?: string;

  active?: boolean;

  created_at?: string;

  description?: string;

  name?: string;

  percentage?: number;

  updated_at?: string;
}

export interface TaxCreateParams {
  /**
   * Tax name. Used to identify and reference this tax rate.
   */
  name: string;

  /**
   * Tax percentage rate. Must be between 0 and 100.
   */
  percentage: number;

  /**
   * Whether this tax is currently active and can be applied.
   */
  active?: boolean;

  /**
   * Array of app IDs where this tax should be available. If not provided, tax will
   * be available for the current app.
   */
  appIds?: Array<string>;

  /**
   * Optional description explaining what this tax covers.
   */
  description?: string;
}

export interface TaxUpdateParams {
  /**
   * Whether this tax is currently active and can be applied
   */
  active?: boolean;

  /**
   * Array of app IDs where this tax should be available
   */
  appIds?: Array<string>;

  /**
   * Detailed description of what this tax covers
   */
  description?: string;

  /**
   * Tax name for identification and display purposes
   */
  name?: string;

  /**
   * Tax rate as a percentage (0-100)
   */
  percentage?: number;
}

export interface TaxListParams {
  /**
   * Filter by active status
   */
  active?: boolean;

  /**
   * Filter taxes by name (partial match, case-insensitive)
   */
  name?: string;

  /**
   * Number of records to skip for pagination
   */
  skip?: number;

  /**
   * Number of records to return (max 100)
   */
  take?: number;
}

export declare namespace Taxes {
  export {
    type TaxCreateResponse as TaxCreateResponse,
    type TaxCreateParams as TaxCreateParams,
    type TaxUpdateParams as TaxUpdateParams,
    type TaxListParams as TaxListParams,
  };
}
