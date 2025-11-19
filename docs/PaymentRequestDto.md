
# PaymentRequestDto


## Properties

Name | Type
------------ | -------------
`amount` | number
`currency` | string
`description` | string
`customerId` | string

## Example

```typescript
import type { PaymentRequestDto } from '@devdraft/sdk'

// TODO: Update the object below with actual values
const example = {
  "amount": 100.5,
  "currency": USD,
  "description": Test payment for API,
  "customerId": cus_12345,
} satisfies PaymentRequestDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PaymentRequestDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


