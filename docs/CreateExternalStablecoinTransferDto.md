
# CreateExternalStablecoinTransferDto


## Properties

Name | Type
------------ | -------------
`sourceWalletId` | string
`sourceCurrency` | string
`destinationCurrency` | string
`blockchainMemo` | string
`beneficiaryId` | string
`amount` | number

## Example

```typescript
import type { CreateExternalStablecoinTransferDto } from '@devdraft/sdk'

// TODO: Update the object below with actual values
const example = {
  "sourceWalletId": null,
  "sourceCurrency": null,
  "destinationCurrency": null,
  "blockchainMemo": null,
  "beneficiaryId": beneficiary_12345,
  "amount": null,
} satisfies CreateExternalStablecoinTransferDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateExternalStablecoinTransferDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


