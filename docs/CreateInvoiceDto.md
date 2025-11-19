
# CreateInvoiceDto


## Properties

Name | Type
------------ | -------------
`name` | string
`email` | string
`customerId` | string
`currency` | string
`items` | object
`dueDate` | Date
`delivery` | string
`paymentLink` | boolean
`paymentMethods` | Array&lt;string&gt;
`status` | string
`address` | string
`phoneNumber` | string
`sendDate` | Date
`logo` | string
`partialPayment` | boolean
`taxId` | string

## Example

```typescript
import type { CreateInvoiceDto } from '@devdraft/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "email": null,
  "customerId": null,
  "currency": null,
  "items": null,
  "dueDate": null,
  "delivery": null,
  "paymentLink": null,
  "paymentMethods": null,
  "status": null,
  "address": null,
  "phoneNumber": null,
  "sendDate": null,
  "logo": null,
  "partialPayment": null,
  "taxId": null,
} satisfies CreateInvoiceDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateInvoiceDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


