/**
 * Customer Examples
 * 
 * These examples demonstrate how to manage customers: creating, listing,
 * retrieving, and updating customer records.
 */

import { Configuration, CustomersApi, CreateCustomerDto, UpdateCustomerDto } from '@devdraft/sdk';

// ============================================================================
// Simple Example: Create a Customer
// ============================================================================

async function simpleCreateCustomer() {
  const config = new Configuration({
    basePath: 'https://api.devdraft.ai',
    apiKey: (key) => {
      if (key === 'x-client-key') return process.env.CLIENT_KEY || 'your-client-key';
      if (key === 'x-client-secret') return process.env.CLIENT_SECRET || 'your-client-secret';
      return '';
    }
  });
  
  const api = new CustomersApi(config);
  
  const customerData: CreateCustomerDto = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    phone_number: '+1-555-123-4567',
    customer_type: 'Startup',
    status: 'ACTIVE'
  };
  
  try {
    const customer = await api.customerControllerCreate(customerData);
    console.log('Customer created:', customer.id);
    return customer;
  } catch (error) {
    console.error('Customer creation failed:', error);
    throw error;
  }
}

// ============================================================================
// Advanced Example: Customer Management Workflow
// ============================================================================

async function advancedCustomerWorkflow() {
  const config = new Configuration({
    basePath: 'https://api.devdraft.ai',
    apiKey: (key) => {
      if (key === 'x-client-key') return process.env.CLIENT_KEY || 'your-client-key';
      if (key === 'x-client-secret') return process.env.CLIENT_SECRET || 'your-client-secret';
      return '';
    }
  });
  
  const api = new CustomersApi(config);
  
  // Step 1: Create a new customer
  const newCustomer: CreateCustomerDto = {
    first_name: 'Jane',
    last_name: 'Smith',
    email: 'jane.smith@example.com',
    phone_number: '+1-555-987-6543',
    customer_type: 'Small Business',
    status: 'ACTIVE'
  };
  
  let customer;
  try {
    customer = await api.customerControllerCreate(newCustomer);
    console.log('✅ Customer created:', customer.id);
  } catch (error: any) {
    if (error.response?.status === 409) {
      console.log('⚠️  Customer with this email already exists');
      // Try to find existing customer
      const customers = await api.customerControllerFindAll(0, 10, undefined, undefined, 'jane.smith@example.com');
      if (customers.data && customers.data.length > 0) {
        customer = customers.data[0];
      }
    } else {
      throw error;
    }
  }
  
  // Step 2: List customers with filters
  const activeCustomers = await api.customerControllerFindAll(
    0,      // skip
    20,     // take
    'ACTIVE', // status filter
    undefined, // name filter
    undefined  // email filter
  );
  
  console.log(`Found ${activeCustomers.total} active customers`);
  
  // Step 3: Get customer details
  if (customer?.id) {
    const customerDetails = await api.customerControllerFindOne(customer.id);
    console.log('Customer details:', {
      id: customerDetails.id,
      name: `${customerDetails.first_name} ${customerDetails.last_name}`,
      email: customerDetails.email,
      status: customerDetails.status
    });
    
    // Step 4: Update customer
    const updateData: UpdateCustomerDto = {
      status: 'ACTIVE',
      phone_number: '+1-555-999-8888'
    };
    
    const updatedCustomer = await api.customerControllerUpdate(customer.id, updateData);
    console.log('✅ Customer updated:', updatedCustomer.id);
  }
  
  return customer;
}

// ============================================================================
// Error Scenario: Handling Customer Errors
// ============================================================================

async function errorScenarioCustomers() {
  const config = new Configuration({
    basePath: 'https://api.devdraft.ai',
    apiKey: (key) => {
      if (key === 'x-client-key') return process.env.CLIENT_KEY || 'your-client-key';
      if (key === 'x-client-secret') return process.env.CLIENT_SECRET || 'your-client-secret';
      return '';
    }
  });
  
  const api = new CustomersApi(config);
  
  // Scenario 1: Missing required fields
  try {
    await api.customerControllerCreate({
      first_name: '', // Empty required field
      last_name: 'Doe',
      phone_number: '+1-555-123-4567'
    } as CreateCustomerDto);
  } catch (error: any) {
    if (error.response?.status === 400) {
      console.error('❌ Bad Request: Missing required fields');
      console.error('Validation errors:', error.response.data);
    }
  }
  
  // Scenario 2: Invalid email format
  try {
    await api.customerControllerCreate({
      first_name: 'John',
      last_name: 'Doe',
      email: 'invalid-email', // Invalid format
      phone_number: '+1-555-123-4567'
    });
  } catch (error: any) {
    if (error.response?.status === 400) {
      console.error('❌ Bad Request: Invalid email format');
    }
  }
  
  // Scenario 3: Customer not found
  try {
    await api.customerControllerFindOne('non-existent-id');
  } catch (error: any) {
    if (error.response?.status === 404) {
      console.error('❌ Customer not found');
    }
  }
  
  // Scenario 4: Duplicate email
  try {
    await api.customerControllerCreate({
      first_name: 'John',
      last_name: 'Doe',
      email: 'existing@example.com', // Already exists
      phone_number: '+1-555-123-4567'
    });
  } catch (error: any) {
    if (error.response?.status === 409) {
      console.error('❌ Conflict: Customer with this email already exists');
    }
  }
}

export {
  simpleCreateCustomer,
  advancedCustomerWorkflow,
  errorScenarioCustomers
};
