/**
 * Webhook Examples
 * 
 * These examples demonstrate how to create, list, retrieve, and update webhooks.
 */

import { Configuration, WebhooksApi, CreateWebhookDto, UpdateWebhookDto } from '@devdraft/sdk';

// ============================================================================
// Simple Example: Create a Webhook
// ============================================================================

async function simpleCreateWebhook() {
  const config = new Configuration({
    basePath: 'https://api.devdraft.ai',
    apiKey: (key) => {
      if (key === 'x-client-key') return process.env.CLIENT_KEY || 'your-client-key';
      if (key === 'x-client-secret') return process.env.CLIENT_SECRET || 'your-client-secret';
      return '';
    }
  });
  
  const api = new WebhooksApi(config);
  
  const webhookData: CreateWebhookDto = {
    url: 'https://your-app.com/webhooks/payment',
    events: ['payment.created', 'payment.succeeded']
  };
  
  try {
    const webhook = await api.webhookControllerCreate(webhookData);
    console.log('Webhook created:', webhook.id);
    console.log('Webhook URL:', webhook.url);
    return webhook;
  } catch (error) {
    console.error('Webhook creation failed:', error);
    throw error;
  }
}

// ============================================================================
// Advanced Example: Webhook Management Workflow
// ============================================================================

async function advancedWebhookWorkflow() {
  const config = new Configuration({
    basePath: 'https://api.devdraft.ai',
    apiKey: (key) => {
      if (key === 'x-client-key') return process.env.CLIENT_KEY || 'your-client-key';
      if (key === 'x-client-secret') return process.env.CLIENT_SECRET || 'your-client-secret';
      return '';
    }
  });
  
  const api = new WebhooksApi(config);
  
  // Step 1: Create webhook for payment events
  const webhookData: CreateWebhookDto = {
    url: 'https://your-app.com/webhooks/payments',
    events: [
      'payment.created',
      'payment.succeeded',
      'payment.failed',
      'payment.refunded'
    ]
  };
  
  let webhook;
  try {
    webhook = await api.webhookControllerCreate(webhookData);
    console.log('✅ Webhook created:', webhook.id);
  } catch (error: any) {
    if (error.response?.status === 400) {
      console.error('❌ Invalid webhook configuration');
      throw error;
    }
    throw error;
  }
  
  // Step 2: List all webhooks
  const webhooks = await api.webhookControllerFindAll();
  console.log(`Found ${webhooks.length} webhooks`);
  
  // Step 3: Get webhook details
  if (webhook?.id) {
    const webhookDetails = await api.webhookControllerFindOne(webhook.id);
    console.log('Webhook details:', {
      id: webhookDetails.id,
      url: webhookDetails.url,
      events: webhookDetails.events,
      active: webhookDetails.active
    });
    
    // Step 4: Update webhook
    const updateData: UpdateWebhookDto = {
      url: 'https://your-app.com/webhooks/payments-v2',
      events: [
        'payment.created',
        'payment.succeeded',
        'payment.failed',
        'payment.refunded',
        'customer.created'
      ]
    };
    
    const updatedWebhook = await api.webhookControllerUpdate(webhook.id, updateData);
    console.log('✅ Webhook updated:', updatedWebhook.id);
  }
  
  return webhook;
}

// ============================================================================
// Error Scenario: Handling Webhook Errors
// ============================================================================

async function errorScenarioWebhooks() {
  const config = new Configuration({
    basePath: 'https://api.devdraft.ai',
    apiKey: (key) => {
      if (key === 'x-client-key') return process.env.CLIENT_KEY || 'your-client-key';
      if (key === 'x-client-secret') return process.env.CLIENT_SECRET || 'your-client-secret';
      return '';
    }
  });
  
  const api = new WebhooksApi(config);
  
  // Scenario 1: Invalid URL
  try {
    await api.webhookControllerCreate({
      url: 'not-a-valid-url',
      events: ['payment.created']
    });
  } catch (error: any) {
    if (error.response?.status === 400) {
      console.error('❌ Bad Request: Invalid webhook URL');
    }
  }
  
  // Scenario 2: Empty events array
  try {
    await api.webhookControllerCreate({
      url: 'https://your-app.com/webhooks',
      events: [] // Empty events
    });
  } catch (error: any) {
    if (error.response?.status === 400) {
      console.error('❌ Bad Request: Webhook must have at least one event');
    }
  }
  
  // Scenario 3: Webhook not found
  try {
    await api.webhookControllerFindOne('non-existent-webhook-id');
  } catch (error: any) {
    if (error.response?.status === 404) {
      console.error('❌ Webhook not found');
    }
  }
  
  // Scenario 4: Invalid event name
  try {
    await api.webhookControllerCreate({
      url: 'https://your-app.com/webhooks',
      events: ['invalid.event.name']
    });
  } catch (error: any) {
    if (error.response?.status === 400) {
      console.error('❌ Bad Request: Invalid event name');
    }
  }
}

export {
  simpleCreateWebhook,
  advancedWebhookWorkflow,
  errorScenarioWebhooks
};
