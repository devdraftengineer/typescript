/**
 * Payment Examples
 * 
 * These examples demonstrate how to process payments, retrieve payment details,
 * and handle refunds.
 */

import { Configuration, TestPaymentsApi, PaymentRequestDto } from '@devdraft/sdk';
import { v4 as uuidv4 } from 'uuid';

// ============================================================================
// Simple Example: Create a Payment
// ============================================================================

async function simpleCreatePayment() {
  const config = new Configuration({
    basePath: 'https://api.devdraft.ai',
    apiKey: (key) => {
      if (key === 'x-client-key') return process.env.CLIENT_KEY || 'your-client-key';
      if (key === 'x-client-secret') return process.env.CLIENT_SECRET || 'your-client-secret';
      return '';
    }
  });
  
  const api = new TestPaymentsApi(config);
  
  const paymentRequest: PaymentRequestDto = {
    amount: 100.50,
    currency: 'USD',
    description: 'Test payment for order #12345',
    customerId: 'cus_12345'
  };
  
  const idempotencyKey = `payment_${uuidv4()}`;
  
  try {
    const response = await api.testPaymentControllerCreatePaymentV0(
      paymentRequest,
      idempotencyKey
    );
    console.log('Payment created:', response.id);
    console.log('Status:', response.status);
    return response;
  } catch (error) {
    console.error('Payment creation failed:', error);
    throw error;
  }
}

// ============================================================================
// Advanced Example: Payment Workflow with Retry Logic
// ============================================================================

async function advancedPaymentWorkflow() {
  const config = new Configuration({
    basePath: 'https://api.devdraft.ai',
    apiKey: (key) => {
      if (key === 'x-client-key') return process.env.CLIENT_KEY || 'your-client-key';
      if (key === 'x-client-secret') return process.env.CLIENT_SECRET || 'your-client-secret';
      return '';
    }
  });
  
  const api = new TestPaymentsApi(config);
  
  // Step 1: Create payment with idempotency key
  const idempotencyKey = `payment_${Date.now()}_${uuidv4()}`;
  const paymentRequest: PaymentRequestDto = {
    amount: 250.00,
    currency: 'USD',
    description: 'Premium subscription payment',
    customerId: 'cus_premium_001'
  };
  
  let payment;
  try {
    payment = await api.testPaymentControllerCreatePaymentV0(
      paymentRequest,
      idempotencyKey
    );
    console.log('✅ Payment created:', payment.id);
  } catch (error: any) {
    if (error.response?.status === 409) {
      console.log('⚠️  Payment already exists with this idempotency key');
      // Retry with same key to get existing payment
      const paymentId = extractPaymentIdFromError(error);
      if (paymentId) {
        payment = await api.testPaymentControllerGetPaymentV0(paymentId);
      }
    } else {
      throw error;
    }
  }
  
  // Step 2: Retrieve payment details
  if (payment?.id) {
    const paymentDetails = await api.testPaymentControllerGetPaymentV0(payment.id);
    console.log('Payment details retrieved:', {
      id: paymentDetails.id,
      amount: paymentDetails.amount,
      status: paymentDetails.status,
      timestamp: paymentDetails.timestamp
    });
  }
  
  return payment;
}

function extractPaymentIdFromError(error: any): string | null {
  // Extract payment ID from error response if available
  return error.response?.data?.paymentId || null;
}

// ============================================================================
// Error Scenario: Handling Payment Errors
// ============================================================================

async function errorScenarioPayments() {
  const config = new Configuration({
    basePath: 'https://api.devdraft.ai',
    apiKey: (key) => {
      if (key === 'x-client-key') return process.env.CLIENT_KEY || 'your-client-key';
      if (key === 'x-client-secret') return process.env.CLIENT_SECRET || 'your-client-secret';
      return '';
    }
  });
  
  const api = new TestPaymentsApi(config);
  
  // Scenario 1: Missing idempotency key
  try {
    await api.testPaymentControllerCreatePaymentV0(
      { amount: 100, currency: 'USD', description: 'Test', customerId: 'cus_123' },
      '' // Missing idempotency key
    );
  } catch (error: any) {
    if (error.response?.status === 400) {
      console.error('❌ Bad Request: Idempotency key is required');
    }
  }
  
  // Scenario 2: Invalid payment data
  try {
    await api.testPaymentControllerCreatePaymentV0(
      { amount: -100, currency: 'USD', description: '', customerId: '' }, // Invalid data
      `payment_${uuidv4()}`
    );
  } catch (error: any) {
    if (error.response?.status === 400) {
      console.error('❌ Bad Request: Invalid payment data');
      console.error('Validation errors:', error.response.data);
    }
  }
  
  // Scenario 3: Rate limiting
  try {
    // Make multiple rapid requests
    for (let i = 0; i < 100; i++) {
      await api.testPaymentControllerCreatePaymentV0(
        { amount: 100, currency: 'USD', description: 'Test', customerId: 'cus_123' },
        `payment_${uuidv4()}`
      );
    }
  } catch (error: any) {
    if (error.response?.status === 429) {
      console.error('❌ Rate limit exceeded. Please wait before retrying.');
      const retryAfter = error.response.headers['retry-after'];
      if (retryAfter) {
        console.log(`Wait ${retryAfter} seconds before retrying`);
      }
    }
  }
}

// ============================================================================
// Refund Example
// ============================================================================

async function refundPaymentExample(paymentId: string) {
  const config = new Configuration({
    basePath: 'https://api.devdraft.ai',
    apiKey: (key) => {
      if (key === 'x-client-key') return process.env.CLIENT_KEY || 'your-client-key';
      if (key === 'x-client-secret') return process.env.CLIENT_SECRET || 'your-client-secret';
      return '';
    }
  });
  
  const api = new TestPaymentsApi(config);
  const idempotencyKey = `refund_${uuidv4()}`;
  
  try {
    const refund = await api.testPaymentControllerRefundPaymentV0(
      paymentId,
      idempotencyKey
    );
    console.log('✅ Refund processed:', refund.id);
    console.log('Refund amount:', refund.amount);
    console.log('Refund status:', refund.status);
    return refund;
  } catch (error: any) {
    if (error.response?.status === 400) {
      console.error('❌ Bad Request: Invalid refund request');
    } else if (error.response?.status === 404) {
      console.error('❌ Payment not found');
    } else {
      console.error('❌ Refund failed:', error.message);
    }
    throw error;
  }
}

export {
  simpleCreatePayment,
  advancedPaymentWorkflow,
  errorScenarioPayments,
  refundPaymentExample
};
