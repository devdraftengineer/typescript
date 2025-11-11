// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Products extends APIResource {
  /**
   * Creates a new product with optional image uploads.
   *
   * This endpoint allows you to create products with detailed information and
   * multiple images.
   *
   * ## Use Cases
   *
   * - Add new products to your catalog
   * - Create products with multiple images
   * - Set up product pricing and descriptions
   *
   * ## Supported Image Formats
   *
   * - JPEG/JPG
   * - PNG
   * - WebP
   * - Maximum 10 images per product
   * - Maximum file size: 5MB per image
   *
   * ## Example Request (multipart/form-data)
   *
   * ```
   * name: "Premium Widget"
   * description: "High-quality widget for all your needs"
   * price: "99.99"
   * images: [file1.jpg, file2.jpg]  // Optional, up to 10 images
   * ```
   *
   * ## Required Fields
   *
   * - `name`: Product name
   * - `price`: Product price (decimal number)
   *
   * ## Optional Fields
   *
   * - `description`: Detailed product description
   * - `images`: Product images (up to 10 files)
   *
   * @example
   * ```ts
   * await client.v0.products.create({
   *   description:
   *     'Annual license for our premium software suite with advanced features, priority support, and regular updates.',
   *   name: 'Premium Software License',
   *   price: 299.99,
   * });
   * ```
   */
  create(body: ProductCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(
      '/api/v0/products',
      multipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }

  /**
   * Retrieves detailed information about a specific product.
   *
   * This endpoint allows you to fetch complete product details including all images.
   *
   * ## Use Cases
   *
   * - View product details
   * - Display product information
   * - Check product availability
   *
   * ## Example Response
   *
   * ```json
   * {
   *   "id": "prod_123456",
   *   "name": "Premium Widget",
   *   "description": "High-quality widget for all your needs",
   *   "price": "99.99",
   *   "images": [
   *     "https://storage.example.com/images/file1.jpg",
   *     "https://storage.example.com/images/file2.jpg"
   *   ],
   *   "createdAt": "2024-03-20T10:00:00Z",
   *   "updatedAt": "2024-03-20T10:00:00Z"
   * }
   * ```
   *
   * @example
   * ```ts
   * await client.v0.products.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v0/products/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates an existing product's information and optionally adds new images.
   *
   * This endpoint allows you to modify product details and manage product images.
   *
   * ## Use Cases
   *
   * - Update product information
   * - Change product pricing
   * - Modify product images
   * - Update product description
   *
   * ## Example Request (multipart/form-data)
   *
   * ```
   * name: "Updated Premium Widget"
   * description: "Updated description"
   * price: "129.99"
   * images: [file1.jpg, file2.jpg]  // Optional, up to 10 images
   * ```
   *
   * ## Notes
   *
   * - Only include fields that need to be updated
   * - New images will replace existing images
   * - Maximum 10 images per product
   * - Images are automatically optimized
   *
   * @example
   * ```ts
   * await client.v0.products.update('id');
   * ```
   */
  update(id: string, body: ProductUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(
      path`/api/v0/products/${id}`,
      multipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }

  /**
   * Retrieves a list of products with pagination.
   *
   * This endpoint allows you to fetch products with optional pagination.
   *
   * ## Use Cases
   *
   * - List all products
   * - Browse product catalog
   * - Implement product search
   *
   * ## Query Parameters
   *
   * - `skip`: Number of records to skip (default: 0)
   * - `take`: Number of records to take (default: 10)
   *
   * ## Example Response
   *
   * ```json
   * {
   *   "data": [
   *     {
   *       "id": "prod_123456",
   *       "name": "Premium Widget",
   *       "description": "High-quality widget for all your needs",
   *       "price": "99.99",
   *       "images": [
   *         "https://storage.example.com/images/file1.jpg",
   *         "https://storage.example.com/images/file2.jpg"
   *       ],
   *       "createdAt": "2024-03-20T10:00:00Z"
   *     }
   *   ],
   *   "total": 100,
   *   "skip": 0,
   *   "take": 10
   * }
   * ```
   *
   * @example
   * ```ts
   * await client.v0.products.list();
   * ```
   */
  list(query: ProductListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v0/products', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Deletes a product and its associated images.
   *
   * This endpoint allows you to remove a product and all its associated data.
   *
   * ## Use Cases
   *
   * - Remove discontinued products
   * - Clean up product catalog
   * - Delete test products
   *
   * ## Notes
   *
   * - This action cannot be undone
   * - All product images will be deleted
   * - Associated data will be removed
   *
   * @example
   * ```ts
   * await client.v0.products.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v0/products/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Adds new images to an existing product.
   *
   * This endpoint allows you to upload additional images for a product that already
   * exists.
   *
   * ## Use Cases
   *
   * - Add more product images
   * - Update product gallery
   * - Enhance product presentation
   *
   * ## Supported Image Formats
   *
   * - JPEG/JPG
   * - PNG
   * - WebP
   * - Maximum 10 images per upload
   * - Maximum file size: 5MB per image
   *
   * ## Example Request (multipart/form-data)
   *
   * ```
   * images: [file1.jpg, file2.jpg]  // Up to 10 images
   * ```
   *
   * ## Notes
   *
   * - Images are appended to existing product images
   * - Total images per product cannot exceed 10
   * - Images are automatically optimized and resized
   *
   * @example
   * ```ts
   * await client.v0.products.uploadImages('id');
   * ```
   */
  uploadImages(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/v0/products/${id}/images`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ProductCreateParams {
  /**
   * Detailed description of the product. Supports markdown formatting for rich text
   * display.
   */
  description: string;

  /**
   * Product name as it will appear to customers. Should be clear and descriptive.
   */
  name: string;

  /**
   * Product price in the specified currency. Must be greater than 0.
   */
  price: number;

  /**
   * Currency code for the price. Defaults to USD if not specified.
   */
  currency?: 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD' | 'JPY';

  /**
   * Array of image URLs
   */
  images?: Array<string>;

  /**
   * Product type
   */
  productType?: string;

  /**
   * Quantity available
   */
  quantity?: number;

  /**
   * Product status
   */
  status?: string;

  /**
   * Stock count
   */
  stockCount?: number;

  /**
   * Product type
   */
  type?: string;

  /**
   * Unit of measurement
   */
  unit?: string;

  /**
   * Weight of the product
   */
  weight?: number;
}

export interface ProductUpdateParams {
  /**
   * Currency code for the price. Defaults to USD if not specified.
   */
  currency?: 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD' | 'JPY';

  /**
   * Detailed description of the product. Supports markdown formatting for rich text
   * display.
   */
  description?: string;

  /**
   * Array of image URLs
   */
  images?: Array<string>;

  /**
   * Product name as it will appear to customers. Should be clear and descriptive.
   */
  name?: string;

  /**
   * Product price in the specified currency. Must be greater than 0.
   */
  price?: number;

  /**
   * Product type
   */
  productType?: string;

  /**
   * Quantity available
   */
  quantity?: number;

  /**
   * Product status
   */
  status?: string;

  /**
   * Stock count
   */
  stockCount?: number;

  /**
   * Product type
   */
  type?: string;

  /**
   * Unit of measurement
   */
  unit?: string;

  /**
   * Weight of the product
   */
  weight?: number;
}

export interface ProductListParams {
  /**
   * Number of records to skip
   */
  skip?: number;

  /**
   * Number of records to take
   */
  take?: number;
}

export declare namespace Products {
  export {
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
  };
}
