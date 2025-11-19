
# AggregatedBalanceResponse


## Properties

Name | Type
------------ | -------------
`currency` | string
`totalBalance` | string
`balances` | Array&lt;object&gt;

## Example

```typescript
import type { AggregatedBalanceResponse } from '@devdraft/sdk'

// TODO: Update the object below with actual values
const example = {
  "currency": usdc,
  "totalBalance": 5678.90,
  "balances": null,
} satisfies AggregatedBalanceResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AggregatedBalanceResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


