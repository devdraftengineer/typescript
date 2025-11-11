// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Webhooks extends APIResource {
  /**
   * Creates a new webhook endpoint for receiving event notifications. Requires
   * webhook:create scope.
   *
   * @example
   * ```ts
   * const webhookResponse = await client.v0.webhooks.create({
   *   encrypted: false,
   *   isActive: true,
   *   name: 'Payment Notifications',
   *   url: 'https://api.example.com/webhooks/payments',
   *   signing_secret: 'whsec_123456789',
   * });
   * ```
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<WebhookResponse> {
    return this._client.post('/api/v0/webhooks', { body, ...options });
  }

  /**
   * Retrieves details for a specific webhook. Requires webhook:read scope.
   *
   * @example
   * ```ts
   * const webhookResponse = await client.v0.webhooks.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WebhookResponse> {
    return this._client.get(path`/api/v0/webhooks/${id}`, options);
  }

  /**
   * Updates an existing webhook configuration. Requires webhook:update scope.
   *
   * @example
   * ```ts
   * const webhookResponse = await client.v0.webhooks.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { url: 'https://api.example.com/webhooks/payments/new' },
   * );
   * ```
   */
  update(id: string, body: WebhookUpdateParams, options?: RequestOptions): APIPromise<WebhookResponse> {
    return this._client.patch(path`/api/v0/webhooks/${id}`, { body, ...options });
  }

  /**
   * Retrieves a list of all webhooks for your application. Requires webhook:read
   * scope.
   *
   * @example
   * ```ts
   * const webhookResponses = await client.v0.webhooks.list();
   * ```
   */
  list(
    query: WebhookListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookListResponse> {
    return this._client.get('/api/v0/webhooks', { query, ...options });
  }

  /**
   * Deletes a webhook configuration. Requires webhook:delete scope.
   *
   * @example
   * ```ts
   * const webhookResponse = await client.v0.webhooks.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<WebhookResponse> {
    return this._client.delete(path`/api/v0/webhooks/${id}`, options);
  }
}

export interface WebhookResponse {
  /**
   * Unique identifier for the webhook
   */
  id: string;

  /**
   * Timestamp when the webhook was created
   */
  created_at: string;

  /**
   * Webhook delivery statistics
   */
  delivery_stats: unknown;

  /**
   * Whether webhook payloads are encrypted
   */
  encrypted: boolean;

  /**
   * Whether the webhook is currently active
   */
  isActive: boolean;

  /**
   * Name of the webhook
   */
  name: string;

  /**
   * Timestamp when the webhook was last updated
   */
  updated_at: string;

  /**
   * URL where webhook events are sent
   */
  url: string;
}

export type WebhookListResponse = Array<WebhookResponse>;

export interface WebhookCreateParams {
  /**
   * Whether webhook payloads should be encrypted
   */
  encrypted: boolean;

  /**
   * Whether the webhook is active and will receive events
   */
  isActive: boolean;

  /**
   * Name of the webhook for identification purposes
   */
  name: string;

  /**
   * URL where webhook events will be sent
   */
  url: string;

  /**
   * Secret key used to sign webhook payloads for verification
   */
  signing_secret?: string;
}

export interface WebhookUpdateParams {
  /**
   * Whether webhook payloads should be encrypted
   */
  encrypted?: boolean;

  /**
   * Whether the webhook is active and will receive events
   */
  isActive?: boolean;

  /**
   * Name of the webhook for identification purposes
   */
  name?: string;

  /**
   * Secret key used to sign webhook payloads for verification
   */
  signing_secret?: string;

  /**
   * URL where webhook events will be sent
   */
  url?: string;
}

export interface WebhookListParams {
  /**
   * Number of records to skip (default: 0)
   */
  skip?: number;

  /**
   * Number of records to return (default: 10)
   */
  take?: number;
}

export declare namespace Webhooks {
  export {
    type WebhookResponse as WebhookResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
  };
}
