// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Devdraft from 'devdraft';

const client = new Devdraft({
  apiKey: 'My API Key',
  secret: 'My Secret',
  idempotencyKey: 'My Idempotency Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource paymentLinks', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v0.paymentLinks.create({
      allowMobilePayment: true,
      allowQuantityAdjustment: true,
      collectAddress: true,
      collectTax: true,
      currency: 'usdc',
      linkType: 'PRODUCT',
      title: 'Premium Subscription',
      url: 'https://checkout.example.com/pay/123',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.v0.paymentLinks.create({
      allowMobilePayment: true,
      allowQuantityAdjustment: true,
      collectAddress: true,
      collectTax: true,
      currency: 'usdc',
      linkType: 'PRODUCT',
      title: 'Premium Subscription',
      url: 'https://checkout.example.com/pay/123',
      amount: 29.99,
      coverImage: 'https://example.com/images/premium-subscription.jpg',
      customerId: '123e4567-e89b-12d3-a456-426614174002',
      customFields: { customField1: 'value1', customField2: 'value2' },
      description: 'Get access to all premium features with our monthly subscription plan.',
      expiration_date: '2024-12-31T23:59:59Z',
      isForAllProduct: false,
      limitPayments: true,
      maxPayments: 100,
      paymentForId: 'sub_123456789',
      paymentLinkProducts: [
        { productId: '123e4567-e89b-12d3-a456-426614174003', quantity: 1 },
        { productId: '123e4567-e89b-12d3-a456-426614174004', quantity: 2 },
      ],
      taxId: '123e4567-e89b-12d3-a456-426614174005',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.v0.paymentLinks.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.v0.paymentLinks.update('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v0.paymentLinks.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v0.paymentLinks.list({ skip: 'skip', take: 'take' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Devdraft.NotFoundError);
  });
});
