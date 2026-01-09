// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Devdraft from 'devdraft';

const client = new Devdraft({
  apiKey: 'My API Key',
  secret: 'My Secret',
  idempotencyKey: 'My Idempotency Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource liquidationAddresses', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v0.customers.liquidationAddresses.create('cust_123', {
      address: '0x4d0280da2f2fDA5103914bCc5aad114743152A9c',
      chain: 'ethereum',
      currency: 'usdc',
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
    const response = await client.v0.customers.liquidationAddresses.create('cust_123', {
      address: '0x4d0280da2f2fDA5103914bCc5aad114743152A9c',
      chain: 'ethereum',
      currency: 'usdc',
      bridge_wallet_id: 'bw_123',
      custom_developer_fee_percent: '2.5',
      destination_ach_reference: 'ACH123',
      destination_address: '0x1234567890abcdef1234567890abcdef12345678',
      destination_blockchain_memo: 'liquidation-memo-123',
      destination_currency: 'eur',
      destination_payment_rail: 'sepa',
      destination_sepa_reference: 'SEPA-REF-123456',
      destination_wire_message: 'Liquidation payment for customer',
      external_account_id: 'ext_123',
      prefunded_account_id: 'pf_acc_123',
      return_address: '0xabcdefabcdefabcdefabcdefabcdefabcdef',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v0.customers.liquidationAddresses.retrieve('la_generated_id_123', {
      customerId: 'cust_123',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.v0.customers.liquidationAddresses.retrieve('la_generated_id_123', {
      customerId: 'cust_123',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v0.customers.liquidationAddresses.list('cust_123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
