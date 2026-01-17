// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class ExchangeRate extends APIResource {
  /**
   * Retrieves the current exchange rate for converting EUR to USD (EURC to USDC).
   *
   * This endpoint provides real-time exchange rate information for stablecoin
   * conversions:
   *
   * - Mid-market rate for reference pricing
   * - Buy rate for actual conversion calculations
   * - Sell rate for reverse conversion scenarios
   *
   * ## Use Cases
   *
   * - Display current exchange rates in dashboards
   * - Calculate conversion amounts for EURC to USDC transfers
   * - Financial reporting and analytics
   * - Real-time pricing for multi-currency operations
   *
   * ## Rate Information
   *
   * - **Mid-market rate**: The theoretical middle rate between buy and sell
   * - **Buy rate**: Rate used when converting FROM EUR TO USD (what you get)
   * - **Sell rate**: Rate used when converting FROM USD TO EUR (what you pay)
   *
   * The rates are updated in real-time and reflect current market conditions.
   *
   * @example
   * ```ts
   * const exchangeRateResponse =
   *   await client.v0.exchangeRate.getEurToUsd();
   * ```
   */
  getEurToUsd(options?: RequestOptions): APIPromise<ExchangeRateResponse> {
    return this._client.get('/api/v0/exchange-rate/eur-to-usd', options);
  }

  /**
   * Retrieves the current exchange rate between two specified currencies.
   *
   * This flexible endpoint allows you to get exchange rates for any supported
   * currency pair:
   *
   * - Supports USD and EUR currency codes
   * - Provides comprehensive rate information
   * - Real-time market data
   *
   * ## Supported Currency Pairs
   *
   * - USD to EUR (USDC to EURC)
   * - EUR to USD (EURC to USDC)
   *
   * ## Query Parameters
   *
   * - **from**: Source currency code (usd, eur)
   * - **to**: Target currency code (usd, eur)
   *
   * ## Use Cases
   *
   * - Flexible exchange rate queries
   * - Multi-currency application support
   * - Dynamic currency conversion calculations
   * - Financial analytics and reporting
   *
   * ## Rate Information
   *
   * All rates are provided with full market context including mid-market, buy, and
   * sell rates.
   *
   * @example
   * ```ts
   * const exchangeRateResponse =
   *   await client.v0.exchangeRate.getExchangeRate({
   *     from: 'usd',
   *     to: 'eur',
   *   });
   * ```
   */
  getExchangeRate(
    query: ExchangeRateGetExchangeRateParams,
    options?: RequestOptions,
  ): APIPromise<ExchangeRateResponse> {
    return this._client.get('/api/v0/exchange-rate', { query, ...options });
  }

  /**
   * Retrieves the current exchange rate for converting USD to EUR (USDC to EURC).
   *
   * This endpoint provides real-time exchange rate information for stablecoin
   * conversions:
   *
   * - Mid-market rate for reference pricing
   * - Buy rate for actual conversion calculations
   * - Sell rate for reverse conversion scenarios
   *
   * ## Use Cases
   *
   * - Display current exchange rates in dashboards
   * - Calculate conversion amounts for USDC to EURC transfers
   * - Financial reporting and analytics
   * - Real-time pricing for multi-currency operations
   *
   * ## Rate Information
   *
   * - **Mid-market rate**: The theoretical middle rate between buy and sell
   * - **Buy rate**: Rate used when converting FROM USD TO EUR (what you get)
   * - **Sell rate**: Rate used when converting FROM EUR TO USD (what you pay)
   *
   * The rates are updated in real-time and reflect current market conditions.
   *
   * @example
   * ```ts
   * const exchangeRateResponse =
   *   await client.v0.exchangeRate.getUsdToEur();
   * ```
   */
  getUsdToEur(options?: RequestOptions): APIPromise<ExchangeRateResponse> {
    return this._client.get('/api/v0/exchange-rate/usd-to-eur', options);
  }
}

export interface ExchangeRateResponse {
  /**
   * Rate for buying target currency (what you get when converting from source to
   * target)
   */
  buy_rate: string;

  /**
   * Source currency code (USD for USDC)
   */
  from: string;

  /**
   * Mid-market exchange rate from source to target currency
   */
  midmarket_rate: string;

  /**
   * Rate for selling target currency (what you pay when converting from target to
   * source)
   */
  sell_rate: string;

  /**
   * Target currency code (EUR for EURC)
   */
  to: string;

  /**
   * Timestamp when the exchange rate was last updated
   */
  timestamp?: string;
}

export interface ExchangeRateGetExchangeRateParams {
  /**
   * Source currency code (e.g., usd)
   */
  from: string;

  /**
   * Target currency code (e.g., eur)
   */
  to: string;
}

export declare namespace ExchangeRate {
  export {
    type ExchangeRateResponse as ExchangeRateResponse,
    type ExchangeRateGetExchangeRateParams as ExchangeRateGetExchangeRateParams,
  };
}
