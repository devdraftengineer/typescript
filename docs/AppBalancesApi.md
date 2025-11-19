# AppBalancesApi

All URIs are relative to *https://api.devdraft.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**balanceControllerGetAllBalances**](AppBalancesApi.md#balancecontrollergetallbalances) | **GET** /api/v0/balance | Get all stablecoin balances for an app |
| [**balanceControllerGetEURCBalance**](AppBalancesApi.md#balancecontrollergeteurcbalance) | **GET** /api/v0/balance/eurc | Get EURC balance for an app |
| [**balanceControllerGetUSDCBalance**](AppBalancesApi.md#balancecontrollergetusdcbalance) | **GET** /api/v0/balance/usdc | Get USDC balance for an app |



## balanceControllerGetAllBalances

> AllBalancesResponse balanceControllerGetAllBalances()

Get all stablecoin balances for an app

Retrieves both USDC and EURC balances across all wallets for the specified app.      This comprehensive endpoint provides: - Complete USDC balance aggregation with detailed breakdown - Complete EURC balance aggregation with detailed breakdown - Total USD equivalent value across both currencies - Individual wallet and chain-specific balance details  ## Use Cases - Complete financial dashboard overview - Multi-currency balance reporting - Comprehensive wallet management - Cross-currency analytics and reporting  ## Response Format The response includes separate aggregations for each currency plus a combined USD value estimate, providing complete visibility into stablecoin holdings.

### Example

```ts
import {
  Configuration,
  AppBalancesApi,
} from '@devdraft/sdk';
import type { BalanceControllerGetAllBalancesRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new AppBalancesApi(config);

  try {
    const data = await api.balanceControllerGetAllBalances();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AllBalancesResponse**](AllBalancesResponse.md)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | All stablecoin balances retrieved successfully |  -  |
| **401** | Unauthorized - Invalid or missing API credentials |  -  |
| **404** | App not found or no access permission |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## balanceControllerGetEURCBalance

> AggregatedBalanceResponse balanceControllerGetEURCBalance()

Get EURC balance for an app

Retrieves the total EURC balance across all wallets for the specified app.      This endpoint aggregates EURC balances from all associated wallets and provides: - Total EURC balance across all chains and wallets - Detailed breakdown by individual wallet and blockchain network - Contract addresses and wallet identifiers for each balance  ## Use Cases - Dashboard balance display - European market operations - Euro-denominated financial reporting - Cross-currency balance tracking  ## Response Format The response includes both the aggregated total and detailed breakdown, enabling comprehensive euro stablecoin balance management.

### Example

```ts
import {
  Configuration,
  AppBalancesApi,
} from '@devdraft/sdk';
import type { BalanceControllerGetEURCBalanceRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new AppBalancesApi(config);

  try {
    const data = await api.balanceControllerGetEURCBalance();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AggregatedBalanceResponse**](AggregatedBalanceResponse.md)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | EURC balance retrieved successfully |  -  |
| **401** | Unauthorized - Invalid or missing API credentials |  -  |
| **404** | App not found or no access permission |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## balanceControllerGetUSDCBalance

> AggregatedBalanceResponse balanceControllerGetUSDCBalance()

Get USDC balance for an app

Retrieves the total USDC balance across all wallets for the specified app.      This endpoint aggregates USDC balances from all associated wallets and provides: - Total USDC balance across all chains and wallets - Detailed breakdown by individual wallet and blockchain network - Contract addresses and wallet identifiers for each balance  ## Use Cases - Dashboard balance display - Financial reporting and reconciliation - Real-time balance monitoring - Multi-chain balance aggregation  ## Response Format The response includes both the aggregated total and detailed breakdown, allowing for comprehensive balance tracking and wallet-specific analysis.

### Example

```ts
import {
  Configuration,
  AppBalancesApi,
} from '@devdraft/sdk';
import type { BalanceControllerGetUSDCBalanceRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new AppBalancesApi(config);

  try {
    const data = await api.balanceControllerGetUSDCBalance();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AggregatedBalanceResponse**](AggregatedBalanceResponse.md)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | USDC balance retrieved successfully |  -  |
| **401** | Unauthorized - Invalid or missing API credentials |  -  |
| **404** | App not found or no access permission |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

