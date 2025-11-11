// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Devdraft from 'devdraft';

const client = new Devdraft({
  apiKey: 'My API Key',
  secret: 'My Secret',
  idempotencyKey: 'My Idempotency Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource paymentIntents', () => {
  // Prism tests are disabled
  test.skip('createBank: only required params', async () => {
    const responsePromise = client.v0.paymentIntents.createBank({
      destinationCurrency: 'usdc',
      destinationNetwork: 'ethereum',
      sourceCurrency: 'usd',
      sourcePaymentRail: 'ach_push',
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
  test.skip('createBank: required and optional params', async () => {
    const response = await client.v0.paymentIntents.createBank({
      destinationCurrency: 'usdc',
      destinationNetwork: 'ethereum',
      sourceCurrency: 'usd',
      sourcePaymentRail: 'ach_push',
      ach_reference: 'INV12345',
      amount: '1000.00',
      customer_address: '123 Main St, New York, NY 10001',
      customer_country: 'United States',
      customer_countryISO: 'US',
      customer_email: 'john.doe@example.com',
      customer_first_name: 'John',
      customer_last_name: 'Doe',
      customer_province: 'New York',
      customer_provinceISO: 'NY',
      destinationAddress: '0x742d35Cc6634C0532925a3b8D4C9db96c4b4d8e1',
      phoneNumber: '+1-555-123-4567',
      sepa_reference: 'REF-123456789',
      wire_message: 'Payment for invoice #12345',
    });
  });

  // Prism tests are disabled
  test.skip('createStable: only required params', async () => {
    const responsePromise = client.v0.paymentIntents.createStable({
      destinationNetwork: 'polygon',
      sourceCurrency: 'usdc',
      sourceNetwork: 'ethereum',
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
  test.skip('createStable: required and optional params', async () => {
    const response = await client.v0.paymentIntents.createStable({
      destinationNetwork: 'polygon',
      sourceCurrency: 'usdc',
      sourceNetwork: 'ethereum',
      amount: '100.00',
      customer_address: '123 Main St, New York, NY 10001',
      customer_country: 'United States',
      customer_countryISO: 'US',
      customer_email: 'john.doe@example.com',
      customer_first_name: 'John',
      customer_last_name: 'Doe',
      customer_province: 'New York',
      customer_provinceISO: 'NY',
      destinationAddress: '0x742d35Cc6634C0532925a3b8D4C9db96c4b4d8e1',
      destinationCurrency: 'eurc',
      phoneNumber: '+1-555-123-4567',
    });
  });
});
