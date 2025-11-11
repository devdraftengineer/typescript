// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BalanceAPI from './balance';
import { AggregatedBalance, Balance, BalanceGetAllStablecoinBalancesResponse } from './balance';
import * as ExchangeRateAPI from './exchange-rate';
import { ExchangeRate, ExchangeRateGetExchangeRateParams, ExchangeRateResponse } from './exchange-rate';
import * as HealthAPI from './health';
import { Health, HealthCheckPublicResponse, HealthCheckResponse } from './health';
import * as InvoicesAPI from './invoices';
import {
  CreateInvoice,
  InvoiceCreateParams,
  InvoiceListParams,
  InvoiceUpdateParams,
  Invoices,
} from './invoices';
import * as PaymentIntentsAPI from './payment-intents';
import {
  BridgePaymentRail,
  PaymentIntentCreateBankParams,
  PaymentIntentCreateStableParams,
  PaymentIntents,
  StableCoinCurrency,
} from './payment-intents';
import * as PaymentLinksAPI from './payment-links';
import {
  PaymentLinkCreateParams,
  PaymentLinkListParams,
  PaymentLinkUpdateParams,
  PaymentLinks,
} from './payment-links';
import * as ProductsAPI from './products';
import { ProductCreateParams, ProductListParams, ProductUpdateParams, Products } from './products';
import * as TaxesAPI from './taxes';
import { TaxCreateParams, TaxCreateResponse, TaxListParams, TaxUpdateParams, Taxes } from './taxes';
import * as TestPaymentAPI from './test-payment';
import {
  PaymentResponse,
  TestPayment,
  TestPaymentProcessParams,
  TestPaymentRefundResponse,
} from './test-payment';
import * as TransfersAPI from './transfers';
import {
  TransferCreateDirectBankParams,
  TransferCreateDirectWalletParams,
  TransferCreateExternalBankTransferParams,
  TransferCreateExternalStablecoinTransferParams,
  TransferCreateStablecoinConversionParams,
  Transfers,
} from './transfers';
import * as WebhooksAPI from './webhooks';
import {
  WebhookCreateParams,
  WebhookListParams,
  WebhookListResponse,
  WebhookResponse,
  WebhookUpdateParams,
  Webhooks,
} from './webhooks';
import * as CustomersAPI from './customers/customers';
import {
  CustomerCreateParams,
  CustomerListParams,
  CustomerStatus,
  CustomerType,
  CustomerUpdateParams,
  Customers,
} from './customers/customers';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class V0 extends APIResource {
  health: HealthAPI.Health = new HealthAPI.Health(this._client);
  testPayment: TestPaymentAPI.TestPayment = new TestPaymentAPI.TestPayment(this._client);
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  paymentLinks: PaymentLinksAPI.PaymentLinks = new PaymentLinksAPI.PaymentLinks(this._client);
  paymentIntents: PaymentIntentsAPI.PaymentIntents = new PaymentIntentsAPI.PaymentIntents(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
  transfers: TransfersAPI.Transfers = new TransfersAPI.Transfers(this._client);
  balance: BalanceAPI.Balance = new BalanceAPI.Balance(this._client);
  exchangeRate: ExchangeRateAPI.ExchangeRate = new ExchangeRateAPI.ExchangeRate(this._client);
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);
  invoices: InvoicesAPI.Invoices = new InvoicesAPI.Invoices(this._client);
  taxes: TaxesAPI.Taxes = new TaxesAPI.Taxes(this._client);

  /**
   * Get wallets for an app
   *
   * @example
   * ```ts
   * await client.v0.getWallets();
   * ```
   */
  getWallets(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v0/wallets', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

V0.Health = Health;
V0.TestPayment = TestPayment;
V0.Customers = Customers;
V0.PaymentLinks = PaymentLinks;
V0.PaymentIntents = PaymentIntents;
V0.Webhooks = Webhooks;
V0.Transfers = Transfers;
V0.Balance = Balance;
V0.ExchangeRate = ExchangeRate;
V0.Products = Products;
V0.Invoices = Invoices;
V0.Taxes = Taxes;

export declare namespace V0 {
  export {
    Health as Health,
    type HealthCheckResponse as HealthCheckResponse,
    type HealthCheckPublicResponse as HealthCheckPublicResponse,
  };

  export {
    TestPayment as TestPayment,
    type PaymentResponse as PaymentResponse,
    type TestPaymentRefundResponse as TestPaymentRefundResponse,
    type TestPaymentProcessParams as TestPaymentProcessParams,
  };

  export {
    Customers as Customers,
    type CustomerStatus as CustomerStatus,
    type CustomerType as CustomerType,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };

  export {
    PaymentLinks as PaymentLinks,
    type PaymentLinkCreateParams as PaymentLinkCreateParams,
    type PaymentLinkUpdateParams as PaymentLinkUpdateParams,
    type PaymentLinkListParams as PaymentLinkListParams,
  };

  export {
    PaymentIntents as PaymentIntents,
    type BridgePaymentRail as BridgePaymentRail,
    type StableCoinCurrency as StableCoinCurrency,
    type PaymentIntentCreateBankParams as PaymentIntentCreateBankParams,
    type PaymentIntentCreateStableParams as PaymentIntentCreateStableParams,
  };

  export {
    Webhooks as Webhooks,
    type WebhookResponse as WebhookResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
  };

  export {
    Transfers as Transfers,
    type TransferCreateDirectBankParams as TransferCreateDirectBankParams,
    type TransferCreateDirectWalletParams as TransferCreateDirectWalletParams,
    type TransferCreateExternalBankTransferParams as TransferCreateExternalBankTransferParams,
    type TransferCreateExternalStablecoinTransferParams as TransferCreateExternalStablecoinTransferParams,
    type TransferCreateStablecoinConversionParams as TransferCreateStablecoinConversionParams,
  };

  export {
    Balance as Balance,
    type AggregatedBalance as AggregatedBalance,
    type BalanceGetAllStablecoinBalancesResponse as BalanceGetAllStablecoinBalancesResponse,
  };

  export {
    ExchangeRate as ExchangeRate,
    type ExchangeRateResponse as ExchangeRateResponse,
    type ExchangeRateGetExchangeRateParams as ExchangeRateGetExchangeRateParams,
  };

  export {
    Products as Products,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
  };

  export {
    Invoices as Invoices,
    type CreateInvoice as CreateInvoice,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
    type InvoiceListParams as InvoiceListParams,
  };

  export {
    Taxes as Taxes,
    type TaxCreateResponse as TaxCreateResponse,
    type TaxCreateParams as TaxCreateParams,
    type TaxUpdateParams as TaxUpdateParams,
    type TaxListParams as TaxListParams,
  };
}
