# V0

Methods:

- <code title="get /api/v0/wallets">client.v0.<a href="./src/resources/v0/v0.ts">getWallets</a>() -> void</code>

## Health

Types:

- <code><a href="./src/resources/v0/health.ts">HealthCheckResponse</a></code>
- <code><a href="./src/resources/v0/health.ts">HealthCheckPublicResponse</a></code>

Methods:

- <code title="get /api/v0/health">client.v0.health.<a href="./src/resources/v0/health.ts">check</a>() -> HealthCheckResponse</code>
- <code title="get /api/v0/health/public">client.v0.health.<a href="./src/resources/v0/health.ts">checkPublic</a>() -> HealthCheckPublicResponse</code>

## TestPayment

Types:

- <code><a href="./src/resources/v0/test-payment.ts">PaymentResponse</a></code>
- <code><a href="./src/resources/v0/test-payment.ts">TestPaymentRefundResponse</a></code>

Methods:

- <code title="get /api/v0/test-payment/{id}">client.v0.testPayment.<a href="./src/resources/v0/test-payment.ts">retrieve</a>(id) -> PaymentResponse</code>
- <code title="post /api/v0/test-payment">client.v0.testPayment.<a href="./src/resources/v0/test-payment.ts">process</a>({ ...params }) -> PaymentResponse</code>
- <code title="post /api/v0/test-payment/{id}/refund">client.v0.testPayment.<a href="./src/resources/v0/test-payment.ts">refund</a>(id) -> TestPaymentRefundResponse</code>

## Customers

Types:

- <code><a href="./src/resources/v0/customers/customers.ts">CustomerStatus</a></code>
- <code><a href="./src/resources/v0/customers/customers.ts">CustomerType</a></code>

Methods:

- <code title="post /api/v0/customers">client.v0.customers.<a href="./src/resources/v0/customers/customers.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v0/customers/{id}">client.v0.customers.<a href="./src/resources/v0/customers/customers.ts">retrieve</a>(id) -> void</code>
- <code title="patch /api/v0/customers/{id}">client.v0.customers.<a href="./src/resources/v0/customers/customers.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /api/v0/customers">client.v0.customers.<a href="./src/resources/v0/customers/customers.ts">list</a>({ ...params }) -> void</code>

### LiquidationAddresses

Types:

- <code><a href="./src/resources/v0/customers/liquidation-addresses.ts">LiquidationAddressResponse</a></code>
- <code><a href="./src/resources/v0/customers/liquidation-addresses.ts">LiquidationAddressListResponse</a></code>

Methods:

- <code title="post /api/v0/customers/{customerId}/liquidation_addresses">client.v0.customers.liquidationAddresses.<a href="./src/resources/v0/customers/liquidation-addresses.ts">create</a>(customerID, { ...params }) -> LiquidationAddressResponse</code>
- <code title="get /api/v0/customers/{customerId}/liquidation_addresses/{liquidationAddressId}">client.v0.customers.liquidationAddresses.<a href="./src/resources/v0/customers/liquidation-addresses.ts">retrieve</a>(liquidationAddressID, { ...params }) -> LiquidationAddressResponse</code>
- <code title="get /api/v0/customers/{customerId}/liquidation_addresses">client.v0.customers.liquidationAddresses.<a href="./src/resources/v0/customers/liquidation-addresses.ts">list</a>(customerID) -> LiquidationAddressListResponse</code>

## PaymentLinks

Methods:

- <code title="post /api/v0/payment-links">client.v0.paymentLinks.<a href="./src/resources/v0/payment-links.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v0/payment-links/{id}">client.v0.paymentLinks.<a href="./src/resources/v0/payment-links.ts">retrieve</a>(id) -> void</code>
- <code title="put /api/v0/payment-links/{id}">client.v0.paymentLinks.<a href="./src/resources/v0/payment-links.ts">update</a>(id) -> void</code>
- <code title="get /api/v0/payment-links">client.v0.paymentLinks.<a href="./src/resources/v0/payment-links.ts">list</a>({ ...params }) -> void</code>

## PaymentIntents

Types:

- <code><a href="./src/resources/v0/payment-intents.ts">BridgePaymentRail</a></code>
- <code><a href="./src/resources/v0/payment-intents.ts">StableCoinCurrency</a></code>

Methods:

- <code title="post /api/v0/payment-intents/bank">client.v0.paymentIntents.<a href="./src/resources/v0/payment-intents.ts">createBank</a>({ ...params }) -> void</code>
- <code title="post /api/v0/payment-intents/stablecoin">client.v0.paymentIntents.<a href="./src/resources/v0/payment-intents.ts">createStable</a>({ ...params }) -> void</code>

## Webhooks

Types:

- <code><a href="./src/resources/v0/webhooks.ts">WebhookResponse</a></code>
- <code><a href="./src/resources/v0/webhooks.ts">WebhookListResponse</a></code>

Methods:

- <code title="post /api/v0/webhooks">client.v0.webhooks.<a href="./src/resources/v0/webhooks.ts">create</a>({ ...params }) -> WebhookResponse</code>
- <code title="get /api/v0/webhooks/{id}">client.v0.webhooks.<a href="./src/resources/v0/webhooks.ts">retrieve</a>(id) -> WebhookResponse</code>
- <code title="patch /api/v0/webhooks/{id}">client.v0.webhooks.<a href="./src/resources/v0/webhooks.ts">update</a>(id, { ...params }) -> WebhookResponse</code>
- <code title="get /api/v0/webhooks">client.v0.webhooks.<a href="./src/resources/v0/webhooks.ts">list</a>({ ...params }) -> WebhookListResponse</code>
- <code title="delete /api/v0/webhooks/{id}">client.v0.webhooks.<a href="./src/resources/v0/webhooks.ts">delete</a>(id) -> WebhookResponse</code>

## Transfers

Methods:

- <code title="post /api/v0/transfers/direct-bank">client.v0.transfers.<a href="./src/resources/v0/transfers.ts">createDirectBank</a>({ ...params }) -> void</code>
- <code title="post /api/v0/transfers/direct-wallet">client.v0.transfers.<a href="./src/resources/v0/transfers.ts">createDirectWallet</a>({ ...params }) -> void</code>
- <code title="post /api/v0/transfers/external-bank-transfer">client.v0.transfers.<a href="./src/resources/v0/transfers.ts">createExternalBankTransfer</a>({ ...params }) -> void</code>
- <code title="post /api/v0/transfers/external-stablecoin-transfer">client.v0.transfers.<a href="./src/resources/v0/transfers.ts">createExternalStablecoinTransfer</a>({ ...params }) -> void</code>
- <code title="post /api/v0/transfers/stablecoin-conversion">client.v0.transfers.<a href="./src/resources/v0/transfers.ts">createStablecoinConversion</a>({ ...params }) -> void</code>

## Balance

Types:

- <code><a href="./src/resources/v0/balance.ts">AggregatedBalance</a></code>
- <code><a href="./src/resources/v0/balance.ts">BalanceGetAllStablecoinBalancesResponse</a></code>

Methods:

- <code title="get /api/v0/balance">client.v0.balance.<a href="./src/resources/v0/balance.ts">getAllStablecoinBalances</a>() -> BalanceGetAllStablecoinBalancesResponse</code>
- <code title="get /api/v0/balance/eurc">client.v0.balance.<a href="./src/resources/v0/balance.ts">getEurc</a>() -> AggregatedBalance</code>
- <code title="get /api/v0/balance/usdc">client.v0.balance.<a href="./src/resources/v0/balance.ts">getUsdc</a>() -> AggregatedBalance</code>

## ExchangeRate

Types:

- <code><a href="./src/resources/v0/exchange-rate.ts">ExchangeRateResponse</a></code>

Methods:

- <code title="get /api/v0/exchange-rate/eur-to-usd">client.v0.exchangeRate.<a href="./src/resources/v0/exchange-rate.ts">getEurToUsd</a>() -> ExchangeRateResponse</code>
- <code title="get /api/v0/exchange-rate">client.v0.exchangeRate.<a href="./src/resources/v0/exchange-rate.ts">getExchangeRate</a>({ ...params }) -> ExchangeRateResponse</code>
- <code title="get /api/v0/exchange-rate/usd-to-eur">client.v0.exchangeRate.<a href="./src/resources/v0/exchange-rate.ts">getUsdToEur</a>() -> ExchangeRateResponse</code>

## Products

Methods:

- <code title="post /api/v0/products">client.v0.products.<a href="./src/resources/v0/products.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v0/products/{id}">client.v0.products.<a href="./src/resources/v0/products.ts">retrieve</a>(id) -> void</code>
- <code title="put /api/v0/products/{id}">client.v0.products.<a href="./src/resources/v0/products.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /api/v0/products">client.v0.products.<a href="./src/resources/v0/products.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /api/v0/products/{id}">client.v0.products.<a href="./src/resources/v0/products.ts">delete</a>(id) -> void</code>
- <code title="post /api/v0/products/{id}/images">client.v0.products.<a href="./src/resources/v0/products.ts">uploadImages</a>(id) -> void</code>

## Invoices

Types:

- <code><a href="./src/resources/v0/invoices.ts">CreateInvoice</a></code>

Methods:

- <code title="post /api/v0/invoices">client.v0.invoices.<a href="./src/resources/v0/invoices.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v0/invoices/{id}">client.v0.invoices.<a href="./src/resources/v0/invoices.ts">retrieve</a>(id) -> void</code>
- <code title="put /api/v0/invoices/{id}">client.v0.invoices.<a href="./src/resources/v0/invoices.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /api/v0/invoices">client.v0.invoices.<a href="./src/resources/v0/invoices.ts">list</a>({ ...params }) -> void</code>

## Taxes

Types:

- <code><a href="./src/resources/v0/taxes.ts">TaxCreateResponse</a></code>

Methods:

- <code title="post /api/v0/taxes">client.v0.taxes.<a href="./src/resources/v0/taxes.ts">create</a>({ ...params }) -> TaxCreateResponse</code>
- <code title="get /api/v0/taxes/{id}">client.v0.taxes.<a href="./src/resources/v0/taxes.ts">retrieve</a>(id) -> void</code>
- <code title="put /api/v0/taxes/{id}">client.v0.taxes.<a href="./src/resources/v0/taxes.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /api/v0/taxes">client.v0.taxes.<a href="./src/resources/v0/taxes.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /api/v0/taxes/{id}">client.v0.taxes.<a href="./src/resources/v0/taxes.ts">delete</a>(id) -> void</code>
- <code title="delete /api/v0/taxes">client.v0.taxes.<a href="./src/resources/v0/taxes.ts">deleteAll</a>() -> void</code>
- <code title="put /api/v0/taxes">client.v0.taxes.<a href="./src/resources/v0/taxes.ts">updateAll</a>() -> void</code>
