# ProductsApi

All URIs are relative to *https://api.devdraft.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**productControllerCreate**](ProductsApi.md#productcontrollercreate) | **POST** /api/v0/products | Create a new product |
| [**productControllerFindAll**](ProductsApi.md#productcontrollerfindall) | **GET** /api/v0/products | Get all products |
| [**productControllerFindOne**](ProductsApi.md#productcontrollerfindone) | **GET** /api/v0/products/{id} | Get a product by ID |
| [**productControllerRemove**](ProductsApi.md#productcontrollerremove) | **DELETE** /api/v0/products/{id} | Delete a product |
| [**productControllerUpdate**](ProductsApi.md#productcontrollerupdate) | **PUT** /api/v0/products/{id} | Update a product |
| [**productControllerUploadImage**](ProductsApi.md#productcontrolleruploadimage) | **POST** /api/v0/products/{id}/images | Upload images for a product |



## productControllerCreate

> productControllerCreate(name, description, price, currency, type, weight, unit, quantity, stockCount, status, productType, images)

Create a new product

Creates a new product with optional image uploads.      This endpoint allows you to create products with detailed information and multiple images.  ## Use Cases - Add new products to your catalog - Create products with multiple images - Set up product pricing and descriptions  ## Supported Image Formats - JPEG/JPG - PNG - WebP - Maximum 10 images per product - Maximum file size: 5MB per image  ## Example Request (multipart/form-data) &#x60;&#x60;&#x60; name: \&quot;Premium Widget\&quot; description: \&quot;High-quality widget for all your needs\&quot; price: \&quot;99.99\&quot; images: [file1.jpg, file2.jpg]  // Optional, up to 10 images &#x60;&#x60;&#x60;  ## Required Fields - &#x60;name&#x60;: Product name - &#x60;price&#x60;: Product price (decimal number)  ## Optional Fields - &#x60;description&#x60;: Detailed product description - &#x60;images&#x60;: Product images (up to 10 files)

### Example

```ts
import {
  Configuration,
  ProductsApi,
} from '@devdraft/sdk';
import type { ProductControllerCreateRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new ProductsApi(config);

  const body = {
    // string | Product name as it will appear to customers. Should be clear and descriptive.
    name: name_example,
    // string | Detailed description of the product. Supports markdown formatting for rich text display.
    description: description_example,
    // number | Product price in the specified currency. Must be greater than 0.
    price: 8.14,
    // string | Currency code for the price. Defaults to USD if not specified. (optional)
    currency: currency_example,
    // string | Product type (optional)
    type: type_example,
    // number | Weight of the product (optional)
    weight: 8.14,
    // string | Unit of measurement (optional)
    unit: unit_example,
    // number | Quantity available (optional)
    quantity: 8.14,
    // number | Stock count (optional)
    stockCount: 8.14,
    // string | Product status (optional)
    status: status_example,
    // string | Product type (optional)
    productType: productType_example,
    // Array<string> | Array of image URLs (optional)
    images: ...,
  } satisfies ProductControllerCreateRequest;

  try {
    const data = await api.productControllerCreate(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | `string` | Product name as it will appear to customers. Should be clear and descriptive. | [Defaults to `undefined`] |
| **description** | `string` | Detailed description of the product. Supports markdown formatting for rich text display. | [Defaults to `undefined`] |
| **price** | `number` | Product price in the specified currency. Must be greater than 0. | [Defaults to `undefined`] |
| **currency** | `USD`, `EUR`, `GBP`, `CAD`, `AUD`, `JPY` | Currency code for the price. Defaults to USD if not specified. | [Optional] [Defaults to `&#39;USD&#39;`] [Enum: USD, EUR, GBP, CAD, AUD, JPY] |
| **type** | `string` | Product type | [Optional] [Defaults to `undefined`] |
| **weight** | `number` | Weight of the product | [Optional] [Defaults to `undefined`] |
| **unit** | `string` | Unit of measurement | [Optional] [Defaults to `undefined`] |
| **quantity** | `number` | Quantity available | [Optional] [Defaults to `undefined`] |
| **stockCount** | `number` | Stock count | [Optional] [Defaults to `undefined`] |
| **status** | `string` | Product status | [Optional] [Defaults to `undefined`] |
| **productType** | `string` | Product type | [Optional] [Defaults to `undefined`] |
| **images** | `Array<string>` | Array of image URLs | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The product has been successfully created. |  -  |
| **400** | Bad Request - Invalid input data or image format |  -  |
| **401** | Unauthorized - Invalid API credentials |  -  |
| **413** | Payload Too Large - Image files too large |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## productControllerFindAll

> productControllerFindAll(skip, take)

Get all products

Retrieves a list of products with pagination.      This endpoint allows you to fetch products with optional pagination.  ## Use Cases - List all products - Browse product catalog - Implement product search  ## Query Parameters - &#x60;skip&#x60;: Number of records to skip (default: 0) - &#x60;take&#x60;: Number of records to take (default: 10)  ## Example Response &#x60;&#x60;&#x60;json {   \&quot;data\&quot;: [     {       \&quot;id\&quot;: \&quot;prod_123456\&quot;,       \&quot;name\&quot;: \&quot;Premium Widget\&quot;,       \&quot;description\&quot;: \&quot;High-quality widget for all your needs\&quot;,       \&quot;price\&quot;: \&quot;99.99\&quot;,       \&quot;images\&quot;: [         \&quot;https://storage.example.com/images/file1.jpg\&quot;,         \&quot;https://storage.example.com/images/file2.jpg\&quot;       ],       \&quot;createdAt\&quot;: \&quot;2024-03-20T10:00:00Z\&quot;     }   ],   \&quot;total\&quot;: 100,   \&quot;skip\&quot;: 0,   \&quot;take\&quot;: 10 } &#x60;&#x60;&#x60;

### Example

```ts
import {
  Configuration,
  ProductsApi,
} from '@devdraft/sdk';
import type { ProductControllerFindAllRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new ProductsApi(config);

  const body = {
    // number | Number of records to skip (optional)
    skip: 8.14,
    // number | Number of records to take (optional)
    take: 8.14,
  } satisfies ProductControllerFindAllRequest;

  try {
    const data = await api.productControllerFindAll(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **skip** | `number` | Number of records to skip | [Optional] [Defaults to `undefined`] |
| **take** | `number` | Number of records to take | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Return all products. |  -  |
| **401** | Unauthorized - Invalid API credentials |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## productControllerFindOne

> productControllerFindOne(id)

Get a product by ID

Retrieves detailed information about a specific product.      This endpoint allows you to fetch complete product details including all images.  ## Use Cases - View product details - Display product information - Check product availability  ## Example Response &#x60;&#x60;&#x60;json {   \&quot;id\&quot;: \&quot;prod_123456\&quot;,   \&quot;name\&quot;: \&quot;Premium Widget\&quot;,   \&quot;description\&quot;: \&quot;High-quality widget for all your needs\&quot;,   \&quot;price\&quot;: \&quot;99.99\&quot;,   \&quot;images\&quot;: [     \&quot;https://storage.example.com/images/file1.jpg\&quot;,     \&quot;https://storage.example.com/images/file2.jpg\&quot;   ],   \&quot;createdAt\&quot;: \&quot;2024-03-20T10:00:00Z\&quot;,   \&quot;updatedAt\&quot;: \&quot;2024-03-20T10:00:00Z\&quot; } &#x60;&#x60;&#x60;

### Example

```ts
import {
  Configuration,
  ProductsApi,
} from '@devdraft/sdk';
import type { ProductControllerFindOneRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new ProductsApi(config);

  const body = {
    // string | Product ID
    id: id_example,
  } satisfies ProductControllerFindOneRequest;

  try {
    const data = await api.productControllerFindOne(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Product ID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Return the product. |  -  |
| **401** | Unauthorized - Invalid API credentials |  -  |
| **404** | Product not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## productControllerRemove

> productControllerRemove(id)

Delete a product

Deletes a product and its associated images.      This endpoint allows you to remove a product and all its associated data.  ## Use Cases - Remove discontinued products - Clean up product catalog - Delete test products  ## Notes - This action cannot be undone - All product images will be deleted - Associated data will be removed

### Example

```ts
import {
  Configuration,
  ProductsApi,
} from '@devdraft/sdk';
import type { ProductControllerRemoveRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new ProductsApi(config);

  const body = {
    // string | Product ID
    id: id_example,
  } satisfies ProductControllerRemoveRequest;

  try {
    const data = await api.productControllerRemove(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Product ID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The product has been successfully deleted. |  -  |
| **401** | Unauthorized - Invalid API credentials |  -  |
| **404** | Product not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## productControllerUpdate

> productControllerUpdate(id, name, description, price, currency, type, weight, unit, quantity, stockCount, status, productType, images)

Update a product

Updates an existing product\&#39;s information and optionally adds new images.      This endpoint allows you to modify product details and manage product images.  ## Use Cases - Update product information - Change product pricing - Modify product images - Update product description  ## Example Request (multipart/form-data) &#x60;&#x60;&#x60; name: \&quot;Updated Premium Widget\&quot; description: \&quot;Updated description\&quot; price: \&quot;129.99\&quot; images: [file1.jpg, file2.jpg]  // Optional, up to 10 images &#x60;&#x60;&#x60;  ## Notes - Only include fields that need to be updated - New images will replace existing images - Maximum 10 images per product - Images are automatically optimized

### Example

```ts
import {
  Configuration,
  ProductsApi,
} from '@devdraft/sdk';
import type { ProductControllerUpdateRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new ProductsApi(config);

  const body = {
    // string | Product ID
    id: id_example,
    // string | Product name as it will appear to customers. Should be clear and descriptive. (optional)
    name: name_example,
    // string | Detailed description of the product. Supports markdown formatting for rich text display. (optional)
    description: description_example,
    // number | Product price in the specified currency. Must be greater than 0. (optional)
    price: 8.14,
    // string | Currency code for the price. Defaults to USD if not specified. (optional)
    currency: currency_example,
    // string | Product type (optional)
    type: type_example,
    // number | Weight of the product (optional)
    weight: 8.14,
    // string | Unit of measurement (optional)
    unit: unit_example,
    // number | Quantity available (optional)
    quantity: 8.14,
    // number | Stock count (optional)
    stockCount: 8.14,
    // string | Product status (optional)
    status: status_example,
    // string | Product type (optional)
    productType: productType_example,
    // Array<string> | Array of image URLs (optional)
    images: ...,
  } satisfies ProductControllerUpdateRequest;

  try {
    const data = await api.productControllerUpdate(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Product ID | [Defaults to `undefined`] |
| **name** | `string` | Product name as it will appear to customers. Should be clear and descriptive. | [Optional] [Defaults to `undefined`] |
| **description** | `string` | Detailed description of the product. Supports markdown formatting for rich text display. | [Optional] [Defaults to `undefined`] |
| **price** | `number` | Product price in the specified currency. Must be greater than 0. | [Optional] [Defaults to `undefined`] |
| **currency** | `USD`, `EUR`, `GBP`, `CAD`, `AUD`, `JPY` | Currency code for the price. Defaults to USD if not specified. | [Optional] [Defaults to `&#39;USD&#39;`] [Enum: USD, EUR, GBP, CAD, AUD, JPY] |
| **type** | `string` | Product type | [Optional] [Defaults to `undefined`] |
| **weight** | `number` | Weight of the product | [Optional] [Defaults to `undefined`] |
| **unit** | `string` | Unit of measurement | [Optional] [Defaults to `undefined`] |
| **quantity** | `number` | Quantity available | [Optional] [Defaults to `undefined`] |
| **stockCount** | `number` | Stock count | [Optional] [Defaults to `undefined`] |
| **status** | `string` | Product status | [Optional] [Defaults to `undefined`] |
| **productType** | `string` | Product type | [Optional] [Defaults to `undefined`] |
| **images** | `Array<string>` | Array of image URLs | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The product has been successfully updated. |  -  |
| **400** | Bad Request - Invalid input data or image format |  -  |
| **401** | Unauthorized - Invalid API credentials |  -  |
| **404** | Product not found. |  -  |
| **413** | Payload Too Large - Image files too large |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## productControllerUploadImage

> productControllerUploadImage(id)

Upload images for a product

Adds new images to an existing product.      This endpoint allows you to upload additional images for a product that already exists.  ## Use Cases - Add more product images - Update product gallery - Enhance product presentation  ## Supported Image Formats - JPEG/JPG - PNG - WebP - Maximum 10 images per upload - Maximum file size: 5MB per image  ## Example Request (multipart/form-data) &#x60;&#x60;&#x60; images: [file1.jpg, file2.jpg]  // Up to 10 images &#x60;&#x60;&#x60;  ## Notes - Images are appended to existing product images - Total images per product cannot exceed 10 - Images are automatically optimized and resized

### Example

```ts
import {
  Configuration,
  ProductsApi,
} from '@devdraft/sdk';
import type { ProductControllerUploadImageRequest } from '@devdraft/sdk';

async function example() {
  console.log("🚀 Testing @devdraft/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-client-secret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: x-client-key
    apiKey: "YOUR API KEY",
  });
  const api = new ProductsApi(config);

  const body = {
    // string | Product ID
    id: id_example,
  } satisfies ProductControllerUploadImageRequest;

  try {
    const data = await api.productControllerUploadImage(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Product ID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[x-client-secret](../README.md#x-client-secret), [x-client-key](../README.md#x-client-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The images have been successfully uploaded. |  -  |
| **401** | Unauthorized - Invalid API credentials |  -  |
| **404** | Product not found. |  -  |
| **413** | Payload Too Large - Image files too large |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

