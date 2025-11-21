/**
 * Health Check Examples
 * 
 * These examples demonstrate how to use the health check endpoints.
 */

import { Configuration, APIHealthApi } from '@devdraft/sdk';

// ============================================================================
// Simple Example: Public Health Check
// ============================================================================

async function simplePublicHealthCheck() {
  const config = new Configuration({
    basePath: 'https://api.devdraft.ai'
  });
  
  const api = new APIHealthApi(config);
  
  try {
    const response = await api.healthControllerPublicHealthCheckV0();
    console.log('Service status:', response.status);
    console.log('Service is healthy:', response.status === 'ok');
  } catch (error) {
    console.error('Health check failed:', error);
  }
}

// ============================================================================
// Advanced Example: Authenticated Health Check with Error Handling
// ============================================================================

async function advancedAuthenticatedHealthCheck() {
  const config = new Configuration({
    basePath: 'https://api.devdraft.ai',
    apiKey: (key) => {
      if (key === 'x-client-key') return process.env.CLIENT_KEY || 'your-client-key';
      if (key === 'x-client-secret') return process.env.CLIENT_SECRET || 'your-client-secret';
      return '';
    }
  });
  
  const api = new APIHealthApi(config);
  
  try {
    const response = await api.healthControllerCheckV0();
    
    console.log('=== Health Check Results ===');
    console.log('Status:', response.status);
    console.log('Version:', response.version);
    console.log('Database:', response.database);
    console.log('Message:', response.message);
    console.log('Authenticated:', response.authenticated);
    console.log('Timestamp:', response.timestamp);
    
    // Check if service is healthy
    if (response.status === 'ok' && response.database === 'connected') {
      console.log('✅ Service is fully operational');
    } else {
      console.warn('⚠️  Service may have issues');
    }
  } catch (error: any) {
    if (error.response) {
      console.error('HTTP Error:', error.response.status, error.response.statusText);
      if (error.response.status === 401) {
        console.error('Authentication failed. Please check your API keys.');
      }
    } else {
      console.error('Request failed:', error.message);
    }
    throw error;
  }
}

// ============================================================================
// Error Scenario: Handling Authentication Errors
// ============================================================================

async function errorScenarioHealthCheck() {
  const config = new Configuration({
    basePath: 'https://api.devdraft.ai',
    apiKey: () => 'invalid-key' // Intentionally wrong
  });
  
  const api = new APIHealthApi(config);
  
  try {
    await api.healthControllerCheckV0();
  } catch (error: any) {
    if (error.response?.status === 401) {
      console.error('❌ Unauthorized: Invalid API credentials');
      console.error('Please verify your CLIENT_KEY and CLIENT_SECRET environment variables');
    } else if (error.response?.status === 429) {
      console.error('❌ Rate limit exceeded. Please wait before retrying.');
    } else {
      console.error('❌ Unexpected error:', error.message);
    }
  }
}

// Run examples
if (require.main === module) {
  simplePublicHealthCheck()
    .then(() => advancedAuthenticatedHealthCheck())
    .catch(console.error);
}

export { simplePublicHealthCheck, advancedAuthenticatedHealthCheck, errorScenarioHealthCheck };
