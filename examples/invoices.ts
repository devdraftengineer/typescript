/**
 * Invoice Examples
 * 
 * These examples demonstrate how to create, list, and retrieve invoices.
 */

import { Configuration, InvoicesApi, CreateInvoiceDto } from '@devdraft/sdk';

// ============================================================================
// Simple Example: Create an Invoice
// ============================================================================

async function simpleCreateInvoice() {
  const config = new Configuration({
    basePath: 'https://api.devdraft.ai',
    apiKey: (key) => {
      if (key === 'x-client-key') return process.env.CLIENT_KEY || 'your-client-key';
      if (key === 'x-client-secret') return process.env.CLIENT_SECRET || 'your-client-secret';
      return '';
    }
  });
  
  const api = new InvoicesApi(config);
  
  const invoiceData: CreateInvoiceDto = {
    customerId: 'cus_12345',
    products: [
      {
        productId: 'prod_123',
        quantity: 2,
        price: 99.99
      }
    ],
    dueDate: '2024-12-31T23:59:59Z'
  };
  
  try {
    const invoice = await api.invoiceControllerCreate(invoiceData);
    console.log('Invoice created:', invoice.id);
    return invoice;
  } catch (error) {
    console.error('Invoice creation failed:', error);
    throw error;
  }
}

// ============================================================================
// Advanced Example: Invoice Management Workflow
// ============================================================================

async function advancedInvoiceWorkflow() {
  const config = new Configuration({
    basePath: 'https://api.devdraft.ai',
    apiKey: (key) => {
      if (key === 'x-client-key') return process.env.CLIENT_KEY || 'your-client-key';
      if (key === 'x-client-secret') return process.env.CLIENT_SECRET || 'your-client-secret';
      return '';
    }
  });
  
  const api = new InvoicesApi(config);
  
  // Step 1: Create invoice with multiple products
  const invoiceData: CreateInvoiceDto = {
    customerId: 'cus_premium_001',
    products: [
      {
        productId: 'prod_premium',
        quantity: 1,
        price: 299.99
      },
      {
        productId: 'prod_addon',
        quantity: 2,
        price: 49.99
      }
    ],
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 30 days from now
  };
  
  const invoice = await api.invoiceControllerCreate(invoiceData);
  console.log('✅ Invoice created:', invoice.id);
  console.log('Total amount:', invoice.totalAmount);
  
  // Step 2: List invoices with pagination
  const invoices = await api.invoiceControllerFindAll(0, 10);
  console.log(`Found ${invoices.total} invoices`);
  
  // Step 3: Get invoice details
  const invoiceDetails = await api.invoiceControllerFindOne(invoice.id);
  console.log('Invoice details:', {
    id: invoiceDetails.id,
    customerId: invoiceDetails.customerId,
    status: invoiceDetails.status,
    totalAmount: invoiceDetails.totalAmount
  });
  
  return invoice;
}

// ============================================================================
// Error Scenario: Handling Invoice Errors
// ============================================================================

async function errorScenarioInvoices() {
  const config = new Configuration({
    basePath: 'https://api.devdraft.ai',
    apiKey: (key) => {
      if (key === 'x-client-key') return process.env.CLIENT_KEY || 'your-client-key';
      if (key === 'x-client-secret') return process.env.CLIENT_SECRET || 'your-client-secret';
      return '';
    }
  });
  
  const api = new InvoicesApi(config);
  
  // Scenario 1: Invalid customer ID
  try {
    await api.invoiceControllerCreate({
      customerId: 'invalid-customer-id',
      products: []
    });
  } catch (error: any) {
    if (error.response?.status === 400) {
      console.error('❌ Bad Request: Invalid customer ID');
    } else if (error.response?.status === 404) {
      console.error('❌ Customer not found');
    }
  }
  
  // Scenario 2: Empty products array
  try {
    await api.invoiceControllerCreate({
      customerId: 'cus_123',
      products: [] // Empty products
    });
  } catch (error: any) {
    if (error.response?.status === 400) {
      console.error('❌ Bad Request: Invoice must have at least one product');
    }
  }
  
  // Scenario 3: Invoice not found
  try {
    await api.invoiceControllerFindOne('non-existent-invoice-id');
  } catch (error: any) {
    if (error.response?.status === 404) {
      console.error('❌ Invoice not found');
    }
  }
}

export {
  simpleCreateInvoice,
  advancedInvoiceWorkflow,
  errorScenarioInvoices
};
