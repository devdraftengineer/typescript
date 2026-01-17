// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PaymentIntentsAPI from '../payment-intents';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class LiquidationAddresses extends APIResource {
  /**
   * Create a new liquidation address for a customer. Liquidation addresses allow
   *       customers to automatically liquidate cryptocurrency holdings to fiat or other
   *       stablecoins based on configured parameters.
   *
   *       **Required fields:**
   *       - chain: Blockchain network (ethereum, polygon, arbitrum, base)
   *       - currency: Stablecoin currency (usdc, eurc, dai, pyusd, usdt)
   *       - address: Valid blockchain address
   *
   *       **At least one destination must be specified:**
   *       - external_account_id: External bank account
   *       - prefunded_account_id: Developer's prefunded account
   *       - bridge_wallet_id: Bridge wallet
   *       - destination_address: Crypto wallet address
   *
   *       **Payment Rails:**
   *       Different payment rails have different requirements:
   *       - ACH: Requires external_account_id, supports destination_ach_reference
   *       - SEPA: Requires external_account_id, supports destination_sepa_reference
   *       - Wire: Requires external_account_id, supports destination_wire_message
   *       - Crypto: Requires destination_address, supports destination_blockchain_memo
   *
   * @example
   * ```ts
   * const liquidationAddressResponse =
   *   await client.v0.customers.liquidationAddresses.create(
   *     'cust_123',
   *     {
   *       address: '0x4d0280da2f2fDA5103914bCc5aad114743152A9c',
   *       chain: 'ethereum',
   *       currency: 'usdc',
   *     },
   *   );
   * ```
   */
  create(
    customerID: string,
    body: LiquidationAddressCreateParams,
    options?: RequestOptions,
  ): APIPromise<LiquidationAddressResponse> {
    return this._client.post(path`/api/v0/customers/${customerID}/liquidation_addresses`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve a specific liquidation address by its ID for a given customer.
   *
   * @example
   * ```ts
   * const liquidationAddressResponse =
   *   await client.v0.customers.liquidationAddresses.retrieve(
   *     'la_generated_id_123',
   *     { customerId: 'cust_123' },
   *   );
   * ```
   */
  retrieve(
    liquidationAddressID: string,
    params: LiquidationAddressRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<LiquidationAddressResponse> {
    const { customerId } = params;
    return this._client.get(
      path`/api/v0/customers/${customerId}/liquidation_addresses/${liquidationAddressID}`,
      options,
    );
  }

  /**
   * Retrieve all liquidation addresses associated with a specific customer.
   *
   * @example
   * ```ts
   * const liquidationAddressResponses =
   *   await client.v0.customers.liquidationAddresses.list(
   *     'cust_123',
   *   );
   * ```
   */
  list(customerID: string, options?: RequestOptions): APIPromise<LiquidationAddressListResponse> {
    return this._client.get(path`/api/v0/customers/${customerID}/liquidation_addresses`, options);
  }
}

export interface LiquidationAddressResponse {
  /**
   * Unique identifier for the liquidation address
   */
  id: string;

  /**
   * Liquidation address
   */
  address: string;

  /**
   * Blockchain chain
   */
  chain: string;

  /**
   * Creation timestamp
   */
  created_at: string;

  /**
   * Currency
   */
  currency: string;

  /**
   * Customer ID this liquidation address belongs to
   */
  customer_id: string;

  /**
   * Current state of the liquidation address
   */
  state: string;

  /**
   * Last update timestamp
   */
  updated_at: string;

  /**
   * Bridge wallet ID
   */
  bridge_wallet_id?: string;

  /**
   * Custom developer fee percent
   */
  custom_developer_fee_percent?: string;

  /**
   * Destination currency
   */
  destination_currency?: string;

  /**
   * Destination payment rail
   */
  destination_payment_rail?: string;

  /**
   * External account ID
   */
  external_account_id?: string;

  /**
   * Prefunded account ID
   */
  prefunded_account_id?: string;
}

export type LiquidationAddressListResponse = Array<LiquidationAddressResponse>;

export interface LiquidationAddressCreateParams {
  /**
   * The liquidation address on the blockchain
   */
  address: string;

  /**
   * The blockchain chain for the liquidation address
   */
  chain:
    | 'ethereum'
    | 'solana'
    | 'polygon'
    | 'avalanche_c_chain'
    | 'base'
    | 'arbitrum'
    | 'optimism'
    | 'stellar'
    | 'tron';

  /**
   * The currency for the liquidation address
   */
  currency: 'usdc' | 'eurc' | 'dai' | 'pyusd' | 'usdt';

  /**
   * Bridge Wallet to send funds to
   */
  bridge_wallet_id?: string;

  /**
   * Custom developer fee percentage (Base 100 percentage: 10.2% = "10.2")
   */
  custom_developer_fee_percent?: string;

  /**
   * Reference for ACH transactions
   */
  destination_ach_reference?: string;

  /**
   * Crypto wallet address for crypto transfers
   */
  destination_address?: string;

  /**
   * Memo for blockchain transactions
   */
  destination_blockchain_memo?: string;

  /**
   * Currency for sending funds
   */
  destination_currency?: 'usd' | 'eur' | 'mxn' | 'usdc' | 'eurc' | 'dai' | 'pyusd' | 'usdt';

  /**
   * The blockchain network where the source currency resides. Determines gas fees
   * and transaction speed.
   */
  destination_payment_rail?: PaymentIntentsAPI.BridgePaymentRail;

  /**
   * Reference for SEPA transactions
   */
  destination_sepa_reference?: string;

  /**
   * Message for wire transfers
   */
  destination_wire_message?: string;

  /**
   * External bank account to send funds to
   */
  external_account_id?: string;

  /**
   * Developer's prefunded account id
   */
  prefunded_account_id?: string;

  /**
   * Address to return funds on failed transactions (Not supported on Stellar)
   */
  return_address?: string;
}

export interface LiquidationAddressRetrieveParams {
  /**
   * Unique identifier for the customer
   */
  customerId: string;
}

export declare namespace LiquidationAddresses {
  export {
    type LiquidationAddressResponse as LiquidationAddressResponse,
    type LiquidationAddressListResponse as LiquidationAddressListResponse,
    type LiquidationAddressCreateParams as LiquidationAddressCreateParams,
    type LiquidationAddressRetrieveParams as LiquidationAddressRetrieveParams,
  };
}
