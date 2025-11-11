// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Health extends APIResource {
  /**
   * Authenticated health check endpoint
   *
   * @example
   * ```ts
   * const response = await client.v0.health.check();
   * ```
   */
  check(options?: RequestOptions): APIPromise<HealthCheckResponse> {
    return this._client.get('/api/v0/health', options);
  }

  /**
   * Public health check endpoint
   *
   * @example
   * ```ts
   * const response = await client.v0.health.checkPublic();
   * ```
   */
  checkPublic(options?: RequestOptions): APIPromise<HealthCheckPublicResponse> {
    return this._client.get('/api/v0/health/public', options);
  }
}

export interface HealthCheckResponse {
  /**
   * Indicates whether the request was properly authenticated. Always true for this
   * endpoint since authentication is required.
   */
  authenticated: boolean;

  /**
   * Database connectivity status. Shows "connected" when database is accessible,
   * "error" when connection fails.
   */
  database: 'connected' | 'error';

  /**
   * Human-readable message describing the current health status and any issues.
   */
  message: string;

  /**
   * Overall health status of the service. Returns "ok" when healthy, "error" when
   * issues detected.
   */
  status: 'ok' | 'error';

  /**
   * ISO 8601 timestamp when the health check was performed.
   */
  timestamp: string;

  /**
   * Current version of the API service. Useful for debugging and compatibility
   * checks.
   */
  version: string;
}

export interface HealthCheckPublicResponse {
  /**
   * Basic health status of the service. Returns "ok" when the service is responding.
   */
  status: 'ok' | 'error';

  /**
   * ISO 8601 timestamp when the health check was performed.
   */
  timestamp: string;

  /**
   * Current version of the API service.
   */
  version: string;
}

export declare namespace Health {
  export {
    type HealthCheckResponse as HealthCheckResponse,
    type HealthCheckPublicResponse as HealthCheckPublicResponse,
  };
}
