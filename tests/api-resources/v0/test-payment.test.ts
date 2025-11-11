// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Devdraft from 'devdraft';

const client = new Devdraft({
  apiKey: 'My API Key',
  secret: 'My Secret',
  idempotencyKey: 'My Idempotency Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource testPayment', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.v0.testPayment.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('process: only required params', async () => {
    const responsePromise = client.v0.testPayment.process({
      amount: 100.5,
      currency: 'USD',
      description: 'Test payment for API',
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
  test.skip('process: required and optional params', async () => {
    const response = await client.v0.testPayment.process({
      amount: 100.5,
      currency: 'USD',
      description: 'Test payment for API',
      customerId: 'cus_12345',
    });
  });

  // Prism tests are disabled
  test.skip('refund', async () => {
    const responsePromise = client.v0.testPayment.refund('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
