// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Transfers extends APIResource {
  /**
   * Create a direct bank transfer
   *
   * @example
   * ```ts
   * await client.v0.transfers.createDirectBank({
   *   amount: 0,
   *   destinationCurrency: 'destinationCurrency',
   *   paymentRail: 'paymentRail',
   *   sourceCurrency: 'sourceCurrency',
   *   walletId: 'walletId',
   * });
   * ```
   */
  createDirectBank(body: TransferCreateDirectBankParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v0/transfers/direct-bank', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a direct wallet transfer
   *
   * @example
   * ```ts
   * await client.v0.transfers.createDirectWallet({
   *   amount: 0,
   *   network: 'network',
   *   stableCoinCurrency: 'stableCoinCurrency',
   *   walletId: 'walletId',
   * });
   * ```
   */
  createDirectWallet(body: TransferCreateDirectWalletParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v0/transfers/direct-wallet', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create an external bank transfer
   *
   * @example
   * ```ts
   * await client.v0.transfers.createExternalBankTransfer({
   *   destinationCurrency: 'destinationCurrency',
   *   destinationPaymentRail: 'ach',
   *   external_account_id: 'external_account_id',
   *   sourceCurrency: 'sourceCurrency',
   *   sourceWalletId: 'sourceWalletId',
   * });
   * ```
   */
  createExternalBankTransfer(
    body: TransferCreateExternalBankTransferParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/api/v0/transfers/external-bank-transfer', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create an external stablecoin transfer
   *
   * @example
   * ```ts
   * await client.v0.transfers.createExternalStablecoinTransfer({
   *   beneficiaryId: 'beneficiary_12345',
   *   destinationCurrency: 'destinationCurrency',
   *   sourceCurrency: 'sourceCurrency',
   *   sourceWalletId: 'sourceWalletId',
   * });
   * ```
   */
  createExternalStablecoinTransfer(
    body: TransferCreateExternalStablecoinTransferParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/api/v0/transfers/external-stablecoin-transfer', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a stablecoin conversion
   *
   * @example
   * ```ts
   * await client.v0.transfers.createStablecoinConversion({
   *   amount: 0,
   *   destinationCurrency: 'destinationCurrency',
   *   sourceCurrency: 'sourceCurrency',
   *   sourceNetwork: 'sourceNetwork',
   *   walletId: 'walletId',
   * });
   * ```
   */
  createStablecoinConversion(
    body: TransferCreateStablecoinConversionParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/api/v0/transfers/stablecoin-conversion', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TransferCreateDirectBankParams {
  /**
   * The amount to transfer
   */
  amount: number;

  /**
   * The destination currency
   */
  destinationCurrency: string;

  /**
   * The payment rail to use
   */
  paymentRail: string;

  /**
   * The source currency
   */
  sourceCurrency: string;

  /**
   * The ID of the bridge wallet to transfer from
   */
  walletId: string;

  /**
   * ACH transfer reference
   */
  ach_reference?: string;

  /**
   * SEPA transfer reference
   */
  sepa_reference?: string;

  /**
   * Wire transfer message
   */
  wire_message?: string;
}

export interface TransferCreateDirectWalletParams {
  /**
   * The amount to transfer
   */
  amount: number;

  /**
   * The network to use for the transfer
   */
  network: string;

  /**
   * The stablecoin currency to use
   */
  stableCoinCurrency: string;

  /**
   * The ID of the bridge wallet to transfer from
   */
  walletId: string;
}

export interface TransferCreateExternalBankTransferParams {
  /**
   * The destination currency
   */
  destinationCurrency: string;

  /**
   * The destination payment rail (fiat payment method)
   */
  destinationPaymentRail: 'ach' | 'ach_push' | 'ach_same_day' | 'wire' | 'sepa' | 'swift' | 'spei';

  /**
   * The external account ID for the bank transfer
   */
  external_account_id: string;

  /**
   * The source currency
   */
  sourceCurrency: string;

  /**
   * The ID of the source bridge wallet
   */
  sourceWalletId: string;

  /**
   * ACH reference message (1-10 characters, only for ACH transfers)
   */
  ach_reference?: string;

  /**
   * The amount to transfer
   */
  amount?: number;

  /**
   * SEPA reference message (6-140 characters, only for SEPA transfers)
   */
  sepa_reference?: string;

  /**
   * SPEI reference message (1-40 characters, only for SPEI transfers)
   */
  spei_reference?: string;

  /**
   * SWIFT charges bearer (only for SWIFT transfers)
   */
  swift_charges?: string;

  /**
   * SWIFT reference message (1-190 characters, only for SWIFT transfers)
   */
  swift_reference?: string;

  /**
   * Wire transfer message (1-256 characters, only for wire transfers)
   */
  wire_message?: string;
}

export interface TransferCreateExternalStablecoinTransferParams {
  /**
   * Beneficiary ID for the stablecoin transfer
   */
  beneficiaryId: string;

  /**
   * The destination currency
   */
  destinationCurrency: string;

  /**
   * The source currency
   */
  sourceCurrency: string;

  /**
   * The ID of the source bridge wallet
   */
  sourceWalletId: string;

  /**
   * The amount to transfer
   */
  amount?: number;

  /**
   * Blockchain memo for the transfer
   */
  blockchain_memo?: string;
}

export interface TransferCreateStablecoinConversionParams {
  /**
   * The amount to convert
   */
  amount: number;

  /**
   * The destination currency
   */
  destinationCurrency: string;

  /**
   * The source currency
   */
  sourceCurrency: string;

  /**
   * The source network
   */
  sourceNetwork: string;

  /**
   * The ID of the bridge wallet to use
   */
  walletId: string;
}

export declare namespace Transfers {
  export {
    type TransferCreateDirectBankParams as TransferCreateDirectBankParams,
    type TransferCreateDirectWalletParams as TransferCreateDirectWalletParams,
    type TransferCreateExternalBankTransferParams as TransferCreateExternalBankTransferParams,
    type TransferCreateExternalStablecoinTransferParams as TransferCreateExternalStablecoinTransferParams,
    type TransferCreateStablecoinConversionParams as TransferCreateStablecoinConversionParams,
  };
}
