// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class PaymentIntents extends APIResource {
  /**
   * Creates a new bank payment intent for fiat-to-stablecoin transfers.
   *
   * This endpoint allows you to create payment intents for bank transfers (ACH,
   * Wire, SEPA) that convert to stablecoins. Perfect for onboarding users from
   * traditional banking to crypto.
   *
   * ## Supported Payment Rails
   *
   * - **ACH_PUSH**: US bank transfers (same-day or standard)
   * - **WIRE**: International wire transfers
   * - **SEPA**: European bank transfers
   *
   * ## Use Cases
   *
   * - USD bank account to USDC conversion
   * - EUR bank account to EURC conversion
   * - MXN bank account to stablecoin conversion
   * - Flexible amount payment intents for variable pricing
   *
   * ## Supported Source Currencies
   *
   * - **USD**: US Dollar
   * - **EUR**: Euro
   * - **MXN**: Mexican Peso
   *
   * ## Example: USD Bank to USDC
   *
   * ```json
   * {
   *   "sourcePaymentRail": "ach_push",
   *   "sourceCurrency": "usd",
   *   "destinationCurrency": "usdc",
   *   "destinationNetwork": "ethereum",
   *   "destinationAddress": "0x742d35Cc6634C0532925a3b8D4C9db96c4b4d8e1",
   *   "amount": "1000.00",
   *   "customer_first_name": "John",
   *   "customer_last_name": "Doe",
   *   "customer_email": "john.doe@example.com",
   *   "ach_reference": "INV12345"
   * }
   * ```
   *
   * ## Reference Fields
   *
   * Use appropriate reference fields based on the payment rail:
   *
   * - `ach_reference`: For ACH transfers (max 10 chars, alphanumeric + spaces)
   * - `wire_message`: For wire transfers (max 256 chars)
   * - `sepa_reference`: For SEPA transfers (6-140 chars, specific character set)
   *
   * ## Idempotency
   *
   * Include an `idempotency-key` header with a unique UUID v4 to prevent duplicate
   * payments. Subsequent requests with the same key will return the original
   * response.
   *
   * @example
   * ```ts
   * await client.v0.paymentIntents.createBank({
   *   destinationCurrency: 'usdc',
   *   destinationNetwork: 'ethereum',
   *   sourceCurrency: 'usd',
   *   sourcePaymentRail: 'ach_push',
   *   ach_reference: 'INV12345',
   *   amount: '1000.00',
   *   customer_address: '123 Main St, New York, NY 10001',
   *   customer_country: 'United States',
   *   customer_email: 'john.doe@example.com',
   *   customer_first_name: 'John',
   *   customer_last_name: 'Doe',
   *   destinationAddress:
   *     '0x742d35Cc6634C0532925a3b8D4C9db96c4b4d8e1',
   *   phoneNumber: '+1-555-123-4567',
   * });
   * ```
   */
  createBank(body: PaymentIntentCreateBankParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v0/payment-intents/bank', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Creates a new stable payment intent for stablecoin-to-stablecoin transfers.
   *
   * This endpoint allows you to create payment intents for transfers between
   * different stablecoins and networks. Perfect for cross-chain stablecoin swaps and
   * conversions.
   *
   * ## Use Cases
   *
   * - USDC to EURC conversions
   * - Cross-chain stablecoin transfers (e.g., Ethereum USDC to Polygon USDC)
   * - Flexible amount payment intents for dynamic pricing
   *
   * ## Example: USDC to EURC Conversion
   *
   * ```json
   * {
   *   "sourceCurrency": "usdc",
   *   "sourceNetwork": "ethereum",
   *   "destinationCurrency": "eurc",
   *   "destinationNetwork": "polygon",
   *   "destinationAddress": "0x742d35Cc6634C0532925a3b8D4C9db96c4b4d8e1",
   *   "amount": "100.00",
   *   "customer_first_name": "John",
   *   "customer_last_name": "Doe",
   *   "customer_email": "john.doe@example.com"
   * }
   * ```
   *
   * ## Flexible Amount Payments
   *
   * Omit the `amount` field to create a flexible payment intent where users can
   * specify the amount during payment.
   *
   * ## Idempotency
   *
   * Include an `idempotency-key` header with a unique UUID v4 to prevent duplicate
   * payments. Subsequent requests with the same key will return the original
   * response.
   *
   * @example
   * ```ts
   * await client.v0.paymentIntents.createStable({
   *   destinationNetwork: 'polygon',
   *   sourceCurrency: 'usdc',
   *   sourceNetwork: 'ethereum',
   *   amount: '100.00',
   *   customer_address: '123 Main St, New York, NY 10001',
   *   customer_country: 'United States',
   *   customer_email: 'john.doe@example.com',
   *   customer_first_name: 'John',
   *   customer_last_name: 'Doe',
   *   destinationAddress:
   *     '0x742d35Cc6634C0532925a3b8D4C9db96c4b4d8e1',
   *   destinationCurrency: 'eurc',
   *   phoneNumber: '+1-555-123-4567',
   * });
   * ```
   */
  createStable(body: PaymentIntentCreateStableParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v0/payment-intents/stablecoin', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * The blockchain network where the source currency resides. Determines gas fees
 * and transaction speed.
 */
export type BridgePaymentRail =
  | 'ethereum'
  | 'solana'
  | 'polygon'
  | 'avalanche_c_chain'
  | 'base'
  | 'arbitrum'
  | 'optimism'
  | 'stellar'
  | 'tron'
  | 'bridge_wallet'
  | 'wire'
  | 'ach'
  | 'ach_push'
  | 'ach_same_day'
  | 'sepa'
  | 'swift'
  | 'spei';

/**
 * The stablecoin currency to convert FROM. This is the currency the customer will
 * pay with.
 */
export type StableCoinCurrency = 'usdc' | 'eurc';

export interface PaymentIntentCreateBankParams {
  /**
   * The stablecoin currency to convert FROM. This is the currency the customer will
   * pay with.
   */
  destinationCurrency: StableCoinCurrency;

  /**
   * The blockchain network where the source currency resides. Determines gas fees
   * and transaction speed.
   */
  destinationNetwork: BridgePaymentRail;

  /**
   * The fiat currency to convert FROM. Must match the currency of the source payment
   * rail.
   */
  sourceCurrency: 'usd' | 'eur' | 'mxn';

  /**
   * The blockchain network where the source currency resides. Determines gas fees
   * and transaction speed.
   */
  sourcePaymentRail: BridgePaymentRail;

  /**
   * ACH reference (for ACH transfers)
   */
  ach_reference?: string;

  /**
   * Payment amount (optional for flexible amount)
   */
  amount?: string;

  /**
   * Customer address
   */
  customer_address?: string;

  /**
   * Customer country
   */
  customer_country?: string;

  /**
   * Customer country ISO code
   */
  customer_countryISO?: string;

  /**
   * Customer email address
   */
  customer_email?: string;

  /**
   * Customer first name
   */
  customer_first_name?: string;

  /**
   * Customer last name
   */
  customer_last_name?: string;

  /**
   * Customer province/state
   */
  customer_province?: string;

  /**
   * Customer province/state ISO code
   */
  customer_provinceISO?: string;

  /**
   * Destination wallet address. Supports Ethereum (0x...) and Solana address
   * formats.
   */
  destinationAddress?: string;

  /**
   * Customer phone number
   */
  phoneNumber?: string;

  /**
   * SEPA reference (for SEPA transfers)
   */
  sepa_reference?: string;

  /**
   * Wire transfer message (for WIRE transfers)
   */
  wire_message?: string;
}

export interface PaymentIntentCreateStableParams {
  /**
   * The blockchain network where the source currency resides. Determines gas fees
   * and transaction speed.
   */
  destinationNetwork: BridgePaymentRail;

  /**
   * The stablecoin currency to convert FROM. This is the currency the customer will
   * pay with.
   */
  sourceCurrency: StableCoinCurrency;

  /**
   * The blockchain network where the source currency resides. Determines gas fees
   * and transaction speed.
   */
  sourceNetwork: BridgePaymentRail;

  /**
   * Payment amount in the source currency. Omit for flexible amount payments where
   * users specify the amount during checkout.
   */
  amount?: string;

  /**
   * Customer's full address. Required for compliance in certain jurisdictions and
   * high-value transactions.
   */
  customer_address?: string;

  /**
   * Customer's country of residence. Used for compliance and tax reporting.
   */
  customer_country?: string;

  /**
   * Customer's country ISO 3166-1 alpha-2 code. Used for automated compliance
   * checks.
   */
  customer_countryISO?: string;

  /**
   * Customer's email address. Used for transaction notifications and receipts.
   * Highly recommended for all transactions.
   */
  customer_email?: string;

  /**
   * Customer's first name. Used for transaction records and compliance. Required for
   * amounts over $1000.
   */
  customer_first_name?: string;

  /**
   * Customer's last name. Used for transaction records and compliance. Required for
   * amounts over $1000.
   */
  customer_last_name?: string;

  /**
   * Customer's state or province. Required for US and Canadian customers.
   */
  customer_province?: string;

  /**
   * Customer's state or province ISO code. Used for automated tax calculations.
   */
  customer_provinceISO?: string;

  /**
   * The wallet address where converted funds will be sent. Supports Ethereum (0x...)
   * and Solana address formats.
   */
  destinationAddress?: string;

  /**
   * The stablecoin currency to convert FROM. This is the currency the customer will
   * pay with.
   */
  destinationCurrency?: StableCoinCurrency;

  /**
   * Customer's phone number with country code. Used for SMS notifications and
   * verification.
   */
  phoneNumber?: string;
}

export declare namespace PaymentIntents {
  export {
    type BridgePaymentRail as BridgePaymentRail,
    type StableCoinCurrency as StableCoinCurrency,
    type PaymentIntentCreateBankParams as PaymentIntentCreateBankParams,
    type PaymentIntentCreateStableParams as PaymentIntentCreateStableParams,
  };
}
