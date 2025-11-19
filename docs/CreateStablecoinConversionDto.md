
# CreateStablecoinConversionDto


## Properties

Name | Type
------------ | -------------
`walletId` | string
`sourceNetwork` | string
`sourceCurrency` | string
`destinationCurrency` | string
`amount` | number

## Example

```typescript
import type { CreateStablecoinConversionDto } from '@devdraft/sdk'

// TODO: Update the object below with actual values
const example = {
  "walletId": null,
  "sourceNetwork": null,
  "sourceCurrency": null,
  "destinationCurrency": null,
  "amount": null,
} satisfies CreateStablecoinConversionDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateStablecoinConversionDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


