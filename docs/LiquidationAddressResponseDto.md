
# LiquidationAddressResponseDto


## Properties

Name | Type
------------ | -------------
`id` | string
`state` | string
`customerId` | string
`chain` | string
`currency` | string
`address` | string
`externalAccountId` | string
`prefundedAccountId` | string
`bridgeWalletId` | string
`destinationPaymentRail` | string
`destinationCurrency` | string
`customDeveloperFeePercent` | string
`createdAt` | string
`updatedAt` | string

## Example

```typescript
import type { LiquidationAddressResponseDto } from '@devdraft/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": la_generated_id_123,
  "state": active,
  "customerId": cust_123,
  "chain": ethereum,
  "currency": usdc,
  "address": 0x4d0280da2f2fDA5103914bCc5aad114743152A9c,
  "externalAccountId": null,
  "prefundedAccountId": null,
  "bridgeWalletId": null,
  "destinationPaymentRail": null,
  "destinationCurrency": null,
  "customDeveloperFeePercent": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies LiquidationAddressResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LiquidationAddressResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


