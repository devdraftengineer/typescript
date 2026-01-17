// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Devdraft from 'devdraft';

const client = new Devdraft({
  apiKey: 'My API Key',
  secret: 'My Secret',
  idempotencyKey: 'My Idempotency Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource exchangeRate', () => {
  // Prism tests are disabled
  test.skip('getEurToUsd', async () => {
    const responsePromise = client.v0.exchangeRate.getEurToUsd();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getExchangeRate: only required params', async () => {
    const responsePromise = client.v0.exchangeRate.getExchangeRate({ from: 'usd', to: 'eur' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getExchangeRate: required and optional params', async () => {
    const response = await client.v0.exchangeRate.getExchangeRate({ from: 'usd', to: 'eur' });
  });

  // Prism tests are disabled
  test.skip('getUsdToEur', async () => {
    const responsePromise = client.v0.exchangeRate.getUsdToEur();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
