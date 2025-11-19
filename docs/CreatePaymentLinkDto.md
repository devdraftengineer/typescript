
# CreatePaymentLinkDto


## Properties

Name | Type
------------ | -------------
`title` | string
`url` | string
`description` | string
`coverImage` | string
`linkType` | string
`amount` | number
`paymentForId` | string
`customerId` | string
`paymentLinkProducts` | [Array&lt;PaymentLinkProductDto&gt;](PaymentLinkProductDto.md)
`isForAllProduct` | boolean
`allowQuantityAdjustment` | boolean
`collectTax` | boolean
`taxId` | string
`collectAddress` | boolean
`limitPayments` | boolean
`maxPayments` | number
`customFields` | object
`allowMobilePayment` | boolean
`currency` | string
`expirationDate` | Date

## Example

```typescript
import type { CreatePaymentLinkDto } from '@devdraft/sdk'

// TODO: Update the object below with actual values
const example = {
  "title": Premium Subscription,
  "url": premium-subscription,
  "description": Get access to all premium features with our monthly subscription plan. Includes priority support and advanced analytics.,
  "coverImage": https://example.com/images/premium-subscription.jpg,
  "linkType": PRODUCT,
  "amount": 29.99,
  "paymentForId": sub_123456789,
  "customerId": 123e4567-e89b-12d3-a456-426614174002,
  "paymentLinkProducts": [{"productId":"123e4567-e89b-12d3-a456-426614174003","quantity":1},{"productId":"123e4567-e89b-12d3-a456-426614174004","quantity":2}],
  "isForAllProduct": false,
  "allowQuantityAdjustment": true,
  "collectTax": true,
  "taxId": 123e4567-e89b-12d3-a456-426614174005,
  "collectAddress": true,
  "limitPayments": true,
  "maxPayments": 100,
  "customFields": {"customField1":"value1","customField2":"value2"},
  "allowMobilePayment": true,
  "currency": usdc,
  "expirationDate": 2024-12-31T23:59:59Z,
} satisfies CreatePaymentLinkDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatePaymentLinkDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


