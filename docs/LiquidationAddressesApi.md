# LiquidationAddressesApi

All URIs are relative to *https://api.devdraft.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**liquidationAddressControllerCreateLiquidationAddress**](LiquidationAddressesApi.md#liquidationaddresscontrollercreateliquidationaddress) | **POST** /api/v0/customers/{customerId}/liquidation_addresses | Create a new liquidation address for a customer |
| [**liquidationAddressControllerGetLiquidationAddress**](LiquidationAddressesApi.md#liquidationaddresscontrollergetliquidationaddress) | **GET** /api/v0/customers/{customerId}/liquidation_addresses/{liquidationAddressId} | Get a specific liquidation address |
| [**liquidationAddressControllerGetLiquidationAddresses**](LiquidationAddressesApi.md#liquidationaddresscontrollergetliquidationaddresses) | **GET** /api/v0/customers/{customerId}/liquidation_addresses | Get all liquidation addresses for a customer |



## liquidationAddressControllerCreateLiquidationAddress

> LiquidationAddressResponseDto liquidationAddressControllerCreateLiquidationAddress(customerId, createLiquidationAddressDto)

Create a new liquidation address for a customer

       Create a new liquidation address for a customer. Liquidation addresses allow        customers to automatically liquidate cryptocurrency holdings to fiat or other        stablecoins based on configured parameters.        **Required fields:**       - chain: Blockchain network (ethereum, polygon, arbitrum, base)       - currency: Stablecoin currency (usdc, eurc, dai, pyusd, usdt)       - address: Valid blockchain address        **At least one destination must be specified:**       - external_account_id: External bank account       - prefunded_account_id: Developer\&#39;s prefunded account       - bridge_wallet_id: Bridge wallet       - destination_address: Crypto wallet address        **Payment Rails:**       Different payment rails have different requirements:       - ACH: Requires external_account_id, supports destination_ach_reference       - SEPA: Requires external_account_id, supports destination_sepa_reference       - Wire: Requires external_account_id, supports destination_wire_message       - Crypto: Requires destination_address, supports destination_blockchain_memo     

### Example

```ts
import {
  Configuration,
  LiquidationAddressesApi,
} from '@devdraft/sdk';
import type { LiquidationAddressControllerCreateLiquidationAddressRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const api = new LiquidationAddressesApi();

  const body = {
    // string | Unique identifier for the customer
    customerId: cust_123,
    // CreateLiquidationAddressDto
    createLiquidationAddressDto: ...,
  } satisfies LiquidationAddressControllerCreateLiquidationAddressRequest;

  try {
    const data = await api.liquidationAddressControllerCreateLiquidationAddress(body);
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
| **customerId** | `string` | Unique identifier for the customer | [Defaults to `undefined`] |
| **createLiquidationAddressDto** | [CreateLiquidationAddressDto](CreateLiquidationAddressDto.md) |  | |

### Return type

[**LiquidationAddressResponseDto**](LiquidationAddressResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Liquidation address created successfully |  -  |
| **400** | Invalid request data |  -  |
| **404** | Customer not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## liquidationAddressControllerGetLiquidationAddress

> LiquidationAddressResponseDto liquidationAddressControllerGetLiquidationAddress(customerId, liquidationAddressId)

Get a specific liquidation address

Retrieve a specific liquidation address by its ID for a given customer.

### Example

```ts
import {
  Configuration,
  LiquidationAddressesApi,
} from '@devdraft/sdk';
import type { LiquidationAddressControllerGetLiquidationAddressRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const api = new LiquidationAddressesApi();

  const body = {
    // string | Unique identifier for the customer
    customerId: cust_123,
    // string | Unique identifier for the liquidation address
    liquidationAddressId: la_generated_id_123,
  } satisfies LiquidationAddressControllerGetLiquidationAddressRequest;

  try {
    const data = await api.liquidationAddressControllerGetLiquidationAddress(body);
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
| **customerId** | `string` | Unique identifier for the customer | [Defaults to `undefined`] |
| **liquidationAddressId** | `string` | Unique identifier for the liquidation address | [Defaults to `undefined`] |

### Return type

[**LiquidationAddressResponseDto**](LiquidationAddressResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Liquidation address details |  -  |
| **404** | Liquidation address not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## liquidationAddressControllerGetLiquidationAddresses

> Array&lt;LiquidationAddressResponseDto&gt; liquidationAddressControllerGetLiquidationAddresses(customerId)

Get all liquidation addresses for a customer

Retrieve all liquidation addresses associated with a specific customer.

### Example

```ts
import {
  Configuration,
  LiquidationAddressesApi,
} from '@devdraft/sdk';
import type { LiquidationAddressControllerGetLiquidationAddressesRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const api = new LiquidationAddressesApi();

  const body = {
    // string | Unique identifier for the customer
    customerId: cust_123,
  } satisfies LiquidationAddressControllerGetLiquidationAddressesRequest;

  try {
    const data = await api.liquidationAddressControllerGetLiquidationAddresses(body);
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
| **customerId** | `string` | Unique identifier for the customer | [Defaults to `undefined`] |

### Return type

[**Array&lt;LiquidationAddressResponseDto&gt;**](LiquidationAddressResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of liquidation addresses |  -  |
| **404** | Customer not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

