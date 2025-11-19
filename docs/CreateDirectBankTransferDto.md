
# CreateDirectBankTransferDto


## Properties

Name | Type
------------ | -------------
`walletId` | string
`paymentRail` | string
`destinationCurrency` | string
`sourceCurrency` | string
`amount` | number
`wireMessage` | string
`sepaReference` | string
`achReference` | string

## Example

```typescript
import type { CreateDirectBankTransferDto } from '@devdraft/sdk'

// TODO: Update the object below with actual values
const example = {
  "walletId": null,
  "paymentRail": null,
  "destinationCurrency": null,
  "sourceCurrency": null,
  "amount": null,
  "wireMessage": null,
  "sepaReference": null,
  "achReference": null,
} satisfies CreateDirectBankTransferDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateDirectBankTransferDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


