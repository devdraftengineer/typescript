
# CreateLiquidationAddressDto


## Properties

Name | Type
------------ | -------------
`chain` | string
`currency` | string
`address` | string
`externalAccountId` | string
`prefundedAccountId` | string
`bridgeWalletId` | string
`destinationPaymentRail` | [BridgePaymentRail](BridgePaymentRail.md)
`destinationCurrency` | [DestinationCurrency](DestinationCurrency.md)
`destinationWireMessage` | string
`destinationSepaReference` | string
`destinationAchReference` | string
`destinationAddress` | string
`destinationBlockchainMemo` | string
`returnAddress` | string
`customDeveloperFeePercent` | string

## Example

```typescript
import type { CreateLiquidationAddressDto } from '@devdraft/sdk'

// TODO: Update the object below with actual values
const example = {
  "chain": ethereum,
  "currency": usdc,
  "address": 0x4d0280da2f2fDA5103914bCc5aad114743152A9c,
  "externalAccountId": ext_123,
  "prefundedAccountId": pf_acc_123,
  "bridgeWalletId": bw_123,
  "destinationPaymentRail": null,
  "destinationCurrency": null,
  "destinationWireMessage": Liquidation payment for customer,
  "destinationSepaReference": SEPA-REF-123456,
  "destinationAchReference": ACH123,
  "destinationAddress": 0x1234567890abcdef1234567890abcdef12345678,
  "destinationBlockchainMemo": liquidation-memo-123,
  "returnAddress": 0xabcdefabcdefabcdefabcdefabcdefabcdef,
  "customDeveloperFeePercent": 2.5,
} satisfies CreateLiquidationAddressDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateLiquidationAddressDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


