
# AllBalancesResponse


## Properties

Name | Type
------------ | -------------
`usdc` | [AggregatedBalanceResponse](AggregatedBalanceResponse.md)
`eurc` | [AggregatedBalanceResponse](AggregatedBalanceResponse.md)
`totalUsdValue` | string

## Example

```typescript
import type { AllBalancesResponse } from '@devdraft/sdk'

// TODO: Update the object below with actual values
const example = {
  "usdc": null,
  "eurc": null,
  "totalUsdValue": 6890.45,
} satisfies AllBalancesResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AllBalancesResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


