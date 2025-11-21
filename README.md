# @devdraft/sdk@1.0.0

A TypeScript SDK client for the api.devdraft.ai API.

## Usage

First, install the SDK from npm.

```bash
npm install @devdraft/sdk --save
```

Next, try it out.


```ts
import {
  Configuration,
  APIHealthApi,
} from '@devdraft/sdk';
import type { HealthControllerCheckV0Request } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new APIHealthApi(config);

  try {
    const data = await api.healthControllerCheckV0();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```



## Examples

This SDK includes comprehensive examples demonstrating common use cases. Each example includes simple usage, advanced workflows, and error handling scenarios.

### Quick Start Example

```typescript
import { Configuration, APIHealthApi } from '@devdraft/sdk';

const config = new Configuration({
  basePath: 'https://api.devdraft.ai',
  apiKey: (key) => {
    if (key === 'x-client-key') return process.env.CLIENT_KEY || 'your-client-key';
    if (key === 'x-client-secret') return process.env.CLIENT_SECRET || 'your-client-secret';
    return '';
  }
});

const api = new APIHealthApi(config);
const response = await api.healthControllerPublicHealthCheckV0();
console.log('Service status:', response.status);
```

### Available Example Files

- [Health Examples](./examples/health-check.ts)
- [Payments Examples](./examples/payments.ts)
- [Customers Examples](./examples/customers.ts)
- [Invoices Examples](./examples/invoices.ts)
- [Webhooks Examples](./examples/webhooks.ts)

### Example Structure

Each example file contains:
- **Simple Examples**: Basic usage with minimal code
- **Advanced Examples**: Complex workflows and best practices  
- **Error Scenarios**: How to handle errors and edge cases

For detailed examples, see the [examples directory](./examples/README.md).
## Documentation

### API Endpoints

All URIs are relative to *https://api.devdraft.ai*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*APIHealthApi* | [**healthControllerCheckV0**](docs/APIHealthApi.md#healthcontrollercheckv0) | **GET** /api/v0/health | Authenticated health check endpoint
*APIHealthApi* | [**healthControllerPublicHealthCheckV0**](docs/APIHealthApi.md#healthcontrollerpublichealthcheckv0) | **GET** /api/v0/health/public | Public health check endpoint
*AppBalancesApi* | [**balanceControllerGetAllBalances**](docs/AppBalancesApi.md#balancecontrollergetallbalances) | **GET** /api/v0/balance | Get all stablecoin balances for an app
*AppBalancesApi* | [**balanceControllerGetEURCBalance**](docs/AppBalancesApi.md#balancecontrollergeteurcbalance) | **GET** /api/v0/balance/eurc | Get EURC balance for an app
*AppBalancesApi* | [**balanceControllerGetUSDCBalance**](docs/AppBalancesApi.md#balancecontrollergetusdcbalance) | **GET** /api/v0/balance/usdc | Get USDC balance for an app
*CustomersApi* | [**customerControllerCreate**](docs/CustomersApi.md#customercontrollercreate) | **POST** /api/v0/customers | Create a new customer
*CustomersApi* | [**customerControllerFindAll**](docs/CustomersApi.md#customercontrollerfindall) | **GET** /api/v0/customers | Get all customers with filters
*CustomersApi* | [**customerControllerFindOne**](docs/CustomersApi.md#customercontrollerfindone) | **GET** /api/v0/customers/{id} | Get a customer by ID
*CustomersApi* | [**customerControllerUpdate**](docs/CustomersApi.md#customercontrollerupdate) | **PATCH** /api/v0/customers/{id} | Update a customer
*ExchangeRatesApi* | [**exchangeRateControllerGetEURToUSDRate**](docs/ExchangeRatesApi.md#exchangeratecontrollergeteurtousdrate) | **GET** /api/v0/exchange-rate/eur-to-usd | Get EUR to USD exchange rate
*ExchangeRatesApi* | [**exchangeRateControllerGetExchangeRate**](docs/ExchangeRatesApi.md#exchangeratecontrollergetexchangerate) | **GET** /api/v0/exchange-rate | Get exchange rate between specified currencies
*ExchangeRatesApi* | [**exchangeRateControllerGetUSDToEURRate**](docs/ExchangeRatesApi.md#exchangeratecontrollergetusdtoeurrate) | **GET** /api/v0/exchange-rate/usd-to-eur | Get USD to EUR exchange rate
*InvoicesApi* | [**invoiceControllerCreate**](docs/InvoicesApi.md#invoicecontrollercreate) | **POST** /api/v0/invoices | Create a new invoice
*InvoicesApi* | [**invoiceControllerFindAll**](docs/InvoicesApi.md#invoicecontrollerfindall) | **GET** /api/v0/invoices | Get all invoices
*InvoicesApi* | [**invoiceControllerFindOne**](docs/InvoicesApi.md#invoicecontrollerfindone) | **GET** /api/v0/invoices/{id} | Get an invoice by ID
*InvoicesApi* | [**invoiceControllerUpdate**](docs/InvoicesApi.md#invoicecontrollerupdate) | **PUT** /api/v0/invoices/{id} | Update an invoice
*LiquidationAddressesApi* | [**liquidationAddressControllerCreateLiquidationAddress**](docs/LiquidationAddressesApi.md#liquidationaddresscontrollercreateliquidationaddress) | **POST** /api/v0/customers/{customerId}/liquidation_addresses | Create a new liquidation address for a customer
*LiquidationAddressesApi* | [**liquidationAddressControllerGetLiquidationAddress**](docs/LiquidationAddressesApi.md#liquidationaddresscontrollergetliquidationaddress) | **GET** /api/v0/customers/{customerId}/liquidation_addresses/{liquidationAddressId} | Get a specific liquidation address
*LiquidationAddressesApi* | [**liquidationAddressControllerGetLiquidationAddresses**](docs/LiquidationAddressesApi.md#liquidationaddresscontrollergetliquidationaddresses) | **GET** /api/v0/customers/{customerId}/liquidation_addresses | Get all liquidation addresses for a customer
*PaymentIntentsApi* | [**paymentIntentControllerCreateBankPaymentIntent**](docs/PaymentIntentsApi.md#paymentintentcontrollercreatebankpaymentintent) | **POST** /api/v0/payment-intents/bank | Create a bank payment intent
*PaymentIntentsApi* | [**paymentIntentControllerCreateStablePaymentIntent**](docs/PaymentIntentsApi.md#paymentintentcontrollercreatestablepaymentintent) | **POST** /api/v0/payment-intents/stablecoin | Create a stable payment intent
*PaymentLinksApi* | [**paymentLinksControllerCreate**](docs/PaymentLinksApi.md#paymentlinkscontrollercreate) | **POST** /api/v0/payment-links | Create a new payment link
*PaymentLinksApi* | [**paymentLinksControllerFindAll**](docs/PaymentLinksApi.md#paymentlinkscontrollerfindall) | **GET** /api/v0/payment-links | Get all payment links
*PaymentLinksApi* | [**paymentLinksControllerFindOne**](docs/PaymentLinksApi.md#paymentlinkscontrollerfindone) | **GET** /api/v0/payment-links/{id} | Get a payment link by ID
*PaymentLinksApi* | [**paymentLinksControllerUpdate**](docs/PaymentLinksApi.md#paymentlinkscontrollerupdate) | **PUT** /api/v0/payment-links/{id} | Update a payment link
*ProductsApi* | [**productControllerCreate**](docs/ProductsApi.md#productcontrollercreate) | **POST** /api/v0/products | Create a new product
*ProductsApi* | [**productControllerFindAll**](docs/ProductsApi.md#productcontrollerfindall) | **GET** /api/v0/products | Get all products
*ProductsApi* | [**productControllerFindOne**](docs/ProductsApi.md#productcontrollerfindone) | **GET** /api/v0/products/{id} | Get a product by ID
*ProductsApi* | [**productControllerRemove**](docs/ProductsApi.md#productcontrollerremove) | **DELETE** /api/v0/products/{id} | Delete a product
*ProductsApi* | [**productControllerUpdate**](docs/ProductsApi.md#productcontrollerupdate) | **PUT** /api/v0/products/{id} | Update a product
*ProductsApi* | [**productControllerUploadImage**](docs/ProductsApi.md#productcontrolleruploadimage) | **POST** /api/v0/products/{id}/images | Upload images for a product
*TaxesApi* | [**taxControllerCreate**](docs/TaxesApi.md#taxcontrollercreate) | **POST** /api/v0/taxes | Create a new tax
*TaxesApi* | [**taxControllerDeleteWithoutId**](docs/TaxesApi.md#taxcontrollerdeletewithoutid) | **DELETE** /api/v0/taxes | Tax ID required for deletion
*TaxesApi* | [**taxControllerFindAll**](docs/TaxesApi.md#taxcontrollerfindall) | **GET** /api/v0/taxes | Get all taxes with filters
*TaxesApi* | [**taxControllerFindOne**](docs/TaxesApi.md#taxcontrollerfindone) | **GET** /api/v0/taxes/{id} | Get a tax by ID
*TaxesApi* | [**taxControllerRemove**](docs/TaxesApi.md#taxcontrollerremove) | **DELETE** /api/v0/taxes/{id} | Delete a tax
*TaxesApi* | [**taxControllerUpdate**](docs/TaxesApi.md#taxcontrollerupdate) | **PUT** /api/v0/taxes/{id} | Update a tax
*TaxesApi* | [**taxControllerUpdateWithoutId**](docs/TaxesApi.md#taxcontrollerupdatewithoutid) | **PUT** /api/v0/taxes | Tax ID required for updates
*TestPaymentsApi* | [**testPaymentControllerCreatePaymentV0**](docs/TestPaymentsApi.md#testpaymentcontrollercreatepaymentv0) | **POST** /api/v0/test-payment | Process a test payment
*TestPaymentsApi* | [**testPaymentControllerGetPaymentV0**](docs/TestPaymentsApi.md#testpaymentcontrollergetpaymentv0) | **GET** /api/v0/test-payment/{id} | Get payment details by ID
*TestPaymentsApi* | [**testPaymentControllerRefundPaymentV0**](docs/TestPaymentsApi.md#testpaymentcontrollerrefundpaymentv0) | **POST** /api/v0/test-payment/{id}/refund | Refund a payment
*TransfersApi* | [**transferControllerCreateDirectBankTransfer**](docs/TransfersApi.md#transfercontrollercreatedirectbanktransfer) | **POST** /api/v0/transfers/direct-bank | Create a direct bank transfer
*TransfersApi* | [**transferControllerCreateDirectWalletTransfer**](docs/TransfersApi.md#transfercontrollercreatedirectwallettransfer) | **POST** /api/v0/transfers/direct-wallet | Create a direct wallet transfer
*TransfersApi* | [**transferControllerCreateExternalBankTransfer**](docs/TransfersApi.md#transfercontrollercreateexternalbanktransfer) | **POST** /api/v0/transfers/external-bank-transfer | Create an external bank transfer
*TransfersApi* | [**transferControllerCreateExternalStablecoinTransfer**](docs/TransfersApi.md#transfercontrollercreateexternalstablecointransfer) | **POST** /api/v0/transfers/external-stablecoin-transfer | Create an external stablecoin transfer
*TransfersApi* | [**transferControllerCreateStablecoinConversion**](docs/TransfersApi.md#transfercontrollercreatestablecoinconversion) | **POST** /api/v0/transfers/stablecoin-conversion | Create a stablecoin conversion
*WalletsApi* | [**walletControllerGetWallets**](docs/WalletsApi.md#walletcontrollergetwallets) | **GET** /api/v0/wallets | Get wallets for an app
*WebhooksApi* | [**webhookControllerCreate**](docs/WebhooksApi.md#webhookcontrollercreate) | **POST** /api/v0/webhooks | Create a new webhook
*WebhooksApi* | [**webhookControllerFindAll**](docs/WebhooksApi.md#webhookcontrollerfindall) | **GET** /api/v0/webhooks | Get all webhooks
*WebhooksApi* | [**webhookControllerFindOne**](docs/WebhooksApi.md#webhookcontrollerfindone) | **GET** /api/v0/webhooks/{id} | Get a webhook by id
*WebhooksApi* | [**webhookControllerRemove**](docs/WebhooksApi.md#webhookcontrollerremove) | **DELETE** /api/v0/webhooks/{id} | Delete a webhook
*WebhooksApi* | [**webhookControllerUpdate**](docs/WebhooksApi.md#webhookcontrollerupdate) | **PATCH** /api/v0/webhooks/{id} | Update a webhook


### Models

- [AggregatedBalanceResponse](docs/AggregatedBalanceResponse.md)
- [AllBalancesResponse](docs/AllBalancesResponse.md)
- [BridgeFiatPaymentRail](docs/BridgeFiatPaymentRail.md)
- [BridgePaymentRail](docs/BridgePaymentRail.md)
- [CreateBankPaymentIntentDto](docs/CreateBankPaymentIntentDto.md)
- [CreateCustomerDto](docs/CreateCustomerDto.md)
- [CreateDirectBankTransferDto](docs/CreateDirectBankTransferDto.md)
- [CreateDirectWalletTransferDto](docs/CreateDirectWalletTransferDto.md)
- [CreateExternalBankTransferDto](docs/CreateExternalBankTransferDto.md)
- [CreateExternalStablecoinTransferDto](docs/CreateExternalStablecoinTransferDto.md)
- [CreateInvoiceDto](docs/CreateInvoiceDto.md)
- [CreateLiquidationAddressDto](docs/CreateLiquidationAddressDto.md)
- [CreatePaymentLinkDto](docs/CreatePaymentLinkDto.md)
- [CreateStablePaymentIntentDto](docs/CreateStablePaymentIntentDto.md)
- [CreateStablecoinConversionDto](docs/CreateStablecoinConversionDto.md)
- [CreateTaxDto](docs/CreateTaxDto.md)
- [CreateWebhookDto](docs/CreateWebhookDto.md)
- [CustomerStatus](docs/CustomerStatus.md)
- [CustomerType](docs/CustomerType.md)
- [DestinationCurrency](docs/DestinationCurrency.md)
- [ExchangeRateResponseDto](docs/ExchangeRateResponseDto.md)
- [FiatCurrency](docs/FiatCurrency.md)
- [HealthResponseDto](docs/HealthResponseDto.md)
- [InvoiceProductDto](docs/InvoiceProductDto.md)
- [LiquidationAddressResponseDto](docs/LiquidationAddressResponseDto.md)
- [PaymentLinkProductDto](docs/PaymentLinkProductDto.md)
- [PaymentRequestDto](docs/PaymentRequestDto.md)
- [PaymentResponseDto](docs/PaymentResponseDto.md)
- [PublicHealthResponseDto](docs/PublicHealthResponseDto.md)
- [RefundResponseDto](docs/RefundResponseDto.md)
- [StableCoinCurrency](docs/StableCoinCurrency.md)
- [TaxControllerCreate201Response](docs/TaxControllerCreate201Response.md)
- [TaxControllerDeleteWithoutId400Response](docs/TaxControllerDeleteWithoutId400Response.md)
- [TaxControllerUpdateWithoutId400Response](docs/TaxControllerUpdateWithoutId400Response.md)
- [UpdateCustomerDto](docs/UpdateCustomerDto.md)
- [UpdateTaxDto](docs/UpdateTaxDto.md)
- [UpdateWebhookDto](docs/UpdateWebhookDto.md)
- [WebhookResponseDto](docs/WebhookResponseDto.md)

### Authorization


Authentication schemes defined for the API:
<a id="x-client-key"></a>
#### x-client-key


- **Type**: API key
- **API key parameter name**: `x-client-key`
- **Location**: HTTP header
<a id="x-client-secret"></a>
#### x-client-secret


- **Type**: API key
- **API key parameter name**: `x-client-secret`
- **Location**: HTTP header
<a id="idempotency-key"></a>
#### idempotency-key


- **Type**: API key
- **API key parameter name**: `idempotency-key`
- **Location**: HTTP header

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0.0`
- Package version: `1.0.0`
- Generator version: `7.17.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
