// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Balance extends APIResource {
  /**
   * Retrieves both USDC and EURC balances across all wallets for the specified app.
   *
   * This comprehensive endpoint provides:
   *
   * - Complete USDC balance aggregation with detailed breakdown
   * - Complete EURC balance aggregation with detailed breakdown
   * - Total USD equivalent value across both currencies
   * - Individual wallet and chain-specific balance details
   *
   * ## Use Cases
   *
   * - Complete financial dashboard overview
   * - Multi-currency balance reporting
   * - Comprehensive wallet management
   * - Cross-currency analytics and reporting
   *
   * ## Response Format
   *
   * The response includes separate aggregations for each currency plus a combined
   * USD value estimate, providing complete visibility into stablecoin holdings.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v0.balance.getAllStablecoinBalances();
   * ```
   */
  getAllStablecoinBalances(options?: RequestOptions): APIPromise<BalanceGetAllStablecoinBalancesResponse> {
    return this._client.get('/api/v0/balance', options);
  }

  /**
   * Retrieves the total EURC balance across all wallets for the specified app.
   *
   * This endpoint aggregates EURC balances from all associated wallets and provides:
   *
   * - Total EURC balance across all chains and wallets
   * - Detailed breakdown by individual wallet and blockchain network
   * - Contract addresses and wallet identifiers for each balance
   *
   * ## Use Cases
   *
   * - Dashboard balance display
   * - European market operations
   * - Euro-denominated financial reporting
   * - Cross-currency balance tracking
   *
   * ## Response Format
   *
   * The response includes both the aggregated total and detailed breakdown, enabling
   * comprehensive euro stablecoin balance management.
   *
   * @example
   * ```ts
   * const aggregatedBalance = await client.v0.balance.getEurc();
   * ```
   */
  getEurc(options?: RequestOptions): APIPromise<AggregatedBalance> {
    return this._client.get('/api/v0/balance/eurc', options);
  }

  /**
   * Retrieves the total USDC balance across all wallets for the specified app.
   *
   * This endpoint aggregates USDC balances from all associated wallets and provides:
   *
   * - Total USDC balance across all chains and wallets
   * - Detailed breakdown by individual wallet and blockchain network
   * - Contract addresses and wallet identifiers for each balance
   *
   * ## Use Cases
   *
   * - Dashboard balance display
   * - Financial reporting and reconciliation
   * - Real-time balance monitoring
   * - Multi-chain balance aggregation
   *
   * ## Response Format
   *
   * The response includes both the aggregated total and detailed breakdown, allowing
   * for comprehensive balance tracking and wallet-specific analysis.
   *
   * @example
   * ```ts
   * const aggregatedBalance = await client.v0.balance.getUsdc();
   * ```
   */
  getUsdc(options?: RequestOptions): APIPromise<AggregatedBalance> {
    return this._client.get('/api/v0/balance/usdc', options);
  }
}

export interface AggregatedBalance {
  /**
   * Detailed breakdown of balances by wallet and chain
   */
  balances: Array<Array<unknown>>;

  /**
   * The stablecoin currency
   */
  currency: 'usdc' | 'eurc';

  /**
   * The total aggregated balance across all wallets and chains
   */
  total_balance: string;
}

export interface BalanceGetAllStablecoinBalancesResponse {
  /**
   * EURC balance aggregation
   */
  eurc: AggregatedBalance;

  /**
   * Total value in USD equivalent
   */
  total_usd_value: string;

  /**
   * USDC balance aggregation
   */
  usdc: AggregatedBalance;
}

export declare namespace Balance {
  export {
    type AggregatedBalance as AggregatedBalance,
    type BalanceGetAllStablecoinBalancesResponse as BalanceGetAllStablecoinBalancesResponse,
  };
}
