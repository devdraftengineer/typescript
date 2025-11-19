# ExchangeRatesApi

All URIs are relative to *https://api.devdraft.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**exchangeRateControllerGetEURToUSDRate**](ExchangeRatesApi.md#exchangeratecontrollergeteurtousdrate) | **GET** /api/v0/exchange-rate/eur-to-usd | Get EUR to USD exchange rate |
| [**exchangeRateControllerGetExchangeRate**](ExchangeRatesApi.md#exchangeratecontrollergetexchangerate) | **GET** /api/v0/exchange-rate | Get exchange rate between specified currencies |
| [**exchangeRateControllerGetUSDToEURRate**](ExchangeRatesApi.md#exchangeratecontrollergetusdtoeurrate) | **GET** /api/v0/exchange-rate/usd-to-eur | Get USD to EUR exchange rate |



## exchangeRateControllerGetEURToUSDRate

> ExchangeRateResponseDto exchangeRateControllerGetEURToUSDRate()

Get EUR to USD exchange rate

Retrieves the current exchange rate for converting EUR to USD (EURC to USDC).      This endpoint provides real-time exchange rate information for stablecoin conversions: - Mid-market rate for reference pricing - Buy rate for actual conversion calculations - Sell rate for reverse conversion scenarios  ## Use Cases - Display current exchange rates in dashboards - Calculate conversion amounts for EURC to USDC transfers - Financial reporting and analytics - Real-time pricing for multi-currency operations  ## Rate Information - **Mid-market rate**: The theoretical middle rate between buy and sell - **Buy rate**: Rate used when converting FROM EUR TO USD (what you get) - **Sell rate**: Rate used when converting FROM USD TO EUR (what you pay)  The rates are updated in real-time and reflect current market conditions.

### Example

```ts
import {
  Configuration,
  ExchangeRatesApi,
} from '@devdraft/sdk';
import type { ExchangeRateControllerGetEURToUSDRateRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new ExchangeRatesApi(config);

  try {
    const data = await api.exchangeRateControllerGetEURToUSDRate();
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

[**ExchangeRateResponseDto**](ExchangeRateResponseDto.md)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Exchange rate retrieved successfully |  -  |
| **401** | Unauthorized - Invalid or missing API credentials |  -  |
| **404** | App not found or no access permission |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exchangeRateControllerGetExchangeRate

> ExchangeRateResponseDto exchangeRateControllerGetExchangeRate(from, to)

Get exchange rate between specified currencies

Retrieves the current exchange rate between two specified currencies.      This flexible endpoint allows you to get exchange rates for any supported currency pair: - Supports USD and EUR currency codes - Provides comprehensive rate information - Real-time market data  ## Supported Currency Pairs - USD to EUR (USDC to EURC) - EUR to USD (EURC to USDC)  ## Query Parameters - **from**: Source currency code (usd, eur) - **to**: Target currency code (usd, eur)  ## Use Cases - Flexible exchange rate queries - Multi-currency application support - Dynamic currency conversion calculations - Financial analytics and reporting  ## Rate Information All rates are provided with full market context including mid-market, buy, and sell rates.

### Example

```ts
import {
  Configuration,
  ExchangeRatesApi,
} from '@devdraft/sdk';
import type { ExchangeRateControllerGetExchangeRateRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new ExchangeRatesApi(config);

  const body = {
    // string | Source currency code (e.g., usd)
    from: usd,
    // string | Target currency code (e.g., eur)
    to: eur,
  } satisfies ExchangeRateControllerGetExchangeRateRequest;

  try {
    const data = await api.exchangeRateControllerGetExchangeRate(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **from** | `string` | Source currency code (e.g., usd) | [Defaults to `undefined`] |
| **to** | `string` | Target currency code (e.g., eur) | [Defaults to `undefined`] |

### Return type

[**ExchangeRateResponseDto**](ExchangeRateResponseDto.md)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Exchange rate retrieved successfully |  -  |
| **400** | Bad Request - Invalid currency codes or unsupported currency pair |  -  |
| **401** | Unauthorized - Invalid or missing API credentials |  -  |
| **404** | App not found or no access permission |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exchangeRateControllerGetUSDToEURRate

> ExchangeRateResponseDto exchangeRateControllerGetUSDToEURRate()

Get USD to EUR exchange rate

Retrieves the current exchange rate for converting USD to EUR (USDC to EURC).      This endpoint provides real-time exchange rate information for stablecoin conversions: - Mid-market rate for reference pricing - Buy rate for actual conversion calculations - Sell rate for reverse conversion scenarios  ## Use Cases - Display current exchange rates in dashboards - Calculate conversion amounts for USDC to EURC transfers - Financial reporting and analytics - Real-time pricing for multi-currency operations  ## Rate Information - **Mid-market rate**: The theoretical middle rate between buy and sell - **Buy rate**: Rate used when converting FROM USD TO EUR (what you get) - **Sell rate**: Rate used when converting FROM EUR TO USD (what you pay)  The rates are updated in real-time and reflect current market conditions.

### Example

```ts
import {
  Configuration,
  ExchangeRatesApi,
} from '@devdraft/sdk';
import type { ExchangeRateControllerGetUSDToEURRateRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new ExchangeRatesApi(config);

  try {
    const data = await api.exchangeRateControllerGetUSDToEURRate();
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

[**ExchangeRateResponseDto**](ExchangeRateResponseDto.md)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Exchange rate retrieved successfully |  -  |
| **401** | Unauthorized - Invalid or missing API credentials |  -  |
| **404** | App not found or no access permission |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

