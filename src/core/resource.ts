// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Devdraft } from '../client';

export abstract class APIResource {
  protected _client: Devdraft;

  constructor(client: Devdraft) {
    this._client = client;
  }
}
