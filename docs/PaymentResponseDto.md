
# PaymentResponseDto


## Properties

Name | Type
------------ | -------------
`id` | string
`amount` | number
`currency` | string
`status` | string
`timestamp` | string

## Example

```typescript
import type { PaymentResponseDto } from '@devdraft/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": pay_12345abcdef,
  "amount": 100.5,
  "currency": USD,
  "status": succeeded,
  "timestamp": 2023-07-01T12:00:00.000Z,
} satisfies PaymentResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PaymentResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


