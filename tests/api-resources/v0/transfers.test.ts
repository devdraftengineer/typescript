// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Devdraft from 'devdraft';

const client = new Devdraft({
  apiKey: 'My API Key',
  secret: 'My Secret',
  idempotencyKey: 'My Idempotency Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transfers', () => {
  // Prism tests are disabled
  test.skip('createDirectBank: only required params', async () => {
    const responsePromise = client.v0.transfers.createDirectBank({
      amount: 0,
      destinationCurrency: 'destinationCurrency',
      paymentRail: 'paymentRail',
      sourceCurrency: 'sourceCurrency',
      walletId: 'walletId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createDirectBank: required and optional params', async () => {
    const response = await client.v0.transfers.createDirectBank({
      amount: 0,
      destinationCurrency: 'destinationCurrency',
      paymentRail: 'paymentRail',
      sourceCurrency: 'sourceCurrency',
      walletId: 'walletId',
      ach_reference: 'ach_reference',
      sepa_reference: 'sepa_reference',
      wire_message: 'wire_message',
    });
  });

  // Prism tests are disabled
  test.skip('createDirectWallet: only required params', async () => {
    const responsePromise = client.v0.transfers.createDirectWallet({
      amount: 0,
      network: 'network',
      stableCoinCurrency: 'stableCoinCurrency',
      walletId: 'walletId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createDirectWallet: required and optional params', async () => {
    const response = await client.v0.transfers.createDirectWallet({
      amount: 0,
      network: 'network',
      stableCoinCurrency: 'stableCoinCurrency',
      walletId: 'walletId',
    });
  });

  // Prism tests are disabled
  test.skip('createExternalBankTransfer: only required params', async () => {
    const responsePromise = client.v0.transfers.createExternalBankTransfer({
      destinationCurrency: 'destinationCurrency',
      destinationPaymentRail: 'ach',
      external_account_id: 'external_account_id',
      sourceCurrency: 'sourceCurrency',
      sourceWalletId: 'sourceWalletId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createExternalBankTransfer: required and optional params', async () => {
    const response = await client.v0.transfers.createExternalBankTransfer({
      destinationCurrency: 'destinationCurrency',
      destinationPaymentRail: 'ach',
      external_account_id: 'external_account_id',
      sourceCurrency: 'sourceCurrency',
      sourceWalletId: 'sourceWalletId',
      ach_reference: 'x',
      amount: 0,
      sepa_reference: 'xxxxxx',
      spei_reference: 'x',
      swift_charges: 'swift_charges',
      swift_reference: 'x',
      wire_message: 'x',
    });
  });

  // Prism tests are disabled
  test.skip('createExternalStablecoinTransfer: only required params', async () => {
    const responsePromise = client.v0.transfers.createExternalStablecoinTransfer({
      beneficiaryId: 'beneficiary_12345',
      destinationCurrency: 'destinationCurrency',
      sourceCurrency: 'sourceCurrency',
      sourceWalletId: 'sourceWalletId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createExternalStablecoinTransfer: required and optional params', async () => {
    const response = await client.v0.transfers.createExternalStablecoinTransfer({
      beneficiaryId: 'beneficiary_12345',
      destinationCurrency: 'destinationCurrency',
      sourceCurrency: 'sourceCurrency',
      sourceWalletId: 'sourceWalletId',
      amount: 0,
      blockchain_memo: 'blockchain_memo',
    });
  });

  // Prism tests are disabled
  test.skip('createStablecoinConversion: only required params', async () => {
    const responsePromise = client.v0.transfers.createStablecoinConversion({
      amount: 0,
      destinationCurrency: 'destinationCurrency',
      sourceCurrency: 'sourceCurrency',
      sourceNetwork: 'sourceNetwork',
      walletId: 'walletId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createStablecoinConversion: required and optional params', async () => {
    const response = await client.v0.transfers.createStablecoinConversion({
      amount: 0,
      destinationCurrency: 'destinationCurrency',
      sourceCurrency: 'sourceCurrency',
      sourceNetwork: 'sourceNetwork',
      walletId: 'walletId',
    });
  });
});
