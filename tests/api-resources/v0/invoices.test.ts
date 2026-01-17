// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Devdraft from 'devdraft';

const client = new Devdraft({
  apiKey: 'My API Key',
  secret: 'My Secret',
  idempotencyKey: 'My Idempotency Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invoices', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v0.invoices.create({
      currency: 'usdc',
      customer_id: 'customer_id',
      delivery: 'EMAIL',
      due_date: '2019-12-27T18:11:19.117Z',
      email: 'email',
      items: [{ product_id: 'product_id', quantity: 0 }],
      name: 'name',
      partial_payment: true,
      payment_link: true,
      payment_methods: ['ACH'],
      status: 'DRAFT',
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
    const response = await client.v0.invoices.create({
      currency: 'usdc',
      customer_id: 'customer_id',
      delivery: 'EMAIL',
      due_date: '2019-12-27T18:11:19.117Z',
      email: 'email',
      items: [{ product_id: 'product_id', quantity: 0 }],
      name: 'name',
      partial_payment: true,
      payment_link: true,
      payment_methods: ['ACH'],
      status: 'DRAFT',
      address: 'address',
      logo: 'logo',
      phone_number: 'phone_number',
      send_date: '2019-12-27T18:11:19.117Z',
      taxId: 'taxId',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.v0.invoices.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.v0.invoices.update('id', {
      currency: 'usdc',
      customer_id: 'customer_id',
      delivery: 'EMAIL',
      due_date: '2019-12-27T18:11:19.117Z',
      email: 'email',
      items: [{ product_id: 'product_id', quantity: 0 }],
      name: 'name',
      partial_payment: true,
      payment_link: true,
      payment_methods: ['ACH'],
      status: 'DRAFT',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.v0.invoices.update('id', {
      currency: 'usdc',
      customer_id: 'customer_id',
      delivery: 'EMAIL',
      due_date: '2019-12-27T18:11:19.117Z',
      email: 'email',
      items: [{ product_id: 'product_id', quantity: 0 }],
      name: 'name',
      partial_payment: true,
      payment_link: true,
      payment_methods: ['ACH'],
      status: 'DRAFT',
      address: 'address',
      logo: 'logo',
      phone_number: 'phone_number',
      send_date: '2019-12-27T18:11:19.117Z',
      taxId: 'taxId',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v0.invoices.list();
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
      client.v0.invoices.list({ skip: 0, take: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Devdraft.NotFoundError);
  });
});
