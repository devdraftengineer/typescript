
# PaymentLinkProductDto


## Properties

Name | Type
------------ | -------------
`productId` | string
`quantity` | number

## Example

```typescript
import type { PaymentLinkProductDto } from '@devdraft/sdk'

// TODO: Update the object below with actual values
const example = {
  "productId": 123e4567-e89b-12d3-a456-426614174000,
  "quantity": 2,
} satisfies PaymentLinkProductDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PaymentLinkProductDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


