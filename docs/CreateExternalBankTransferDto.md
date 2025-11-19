
# CreateExternalBankTransferDto


## Properties

Name | Type
------------ | -------------
`sourceWalletId` | string
`sourceCurrency` | string
`destinationCurrency` | string
`destinationPaymentRail` | [BridgeFiatPaymentRail](BridgeFiatPaymentRail.md)
`externalAccountId` | string
`amount` | number
`wireMessage` | string
`sepaReference` | string
`swiftReference` | string
`speiReference` | string
`swiftCharges` | string
`achReference` | string

## Example

```typescript
import type { CreateExternalBankTransferDto } from '@devdraft/sdk'

// TODO: Update the object below with actual values
const example = {
  "sourceWalletId": null,
  "sourceCurrency": null,
  "destinationCurrency": null,
  "destinationPaymentRail": null,
  "externalAccountId": null,
  "amount": null,
  "wireMessage": null,
  "sepaReference": null,
  "swiftReference": null,
  "speiReference": null,
  "swiftCharges": null,
  "achReference": null,
} satisfies CreateExternalBankTransferDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateExternalBankTransferDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


