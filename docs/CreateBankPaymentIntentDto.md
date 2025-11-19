
# CreateBankPaymentIntentDto


## Properties

Name | Type
------------ | -------------
`sourcePaymentRail` | [BridgePaymentRail](BridgePaymentRail.md)
`sourceCurrency` | [FiatCurrency](FiatCurrency.md)
`destinationCurrency` | [StableCoinCurrency](StableCoinCurrency.md)
`destinationNetwork` | [BridgePaymentRail](BridgePaymentRail.md)
`destinationAddress` | string
`amount` | string
`customerFirstName` | string
`customerLastName` | string
`customerEmail` | string
`customerAddress` | string
`customerCountry` | string
`customerCountryISO` | string
`customerProvince` | string
`customerProvinceISO` | string
`phoneNumber` | string
`wireMessage` | string
`sepaReference` | string
`achReference` | string

## Example

```typescript
import type { CreateBankPaymentIntentDto } from '@devdraft/sdk'

// TODO: Update the object below with actual values
const example = {
  "sourcePaymentRail": null,
  "sourceCurrency": null,
  "destinationCurrency": null,
  "destinationNetwork": null,
  "destinationAddress": 0x742d35Cc6634C0532925a3b8D4C9db96c4b4d8e1,
  "amount": 1000.00,
  "customerFirstName": John,
  "customerLastName": Doe,
  "customerEmail": john.doe@example.com,
  "customerAddress": 123 Main St, New York, NY 10001,
  "customerCountry": United States,
  "customerCountryISO": US,
  "customerProvince": New York,
  "customerProvinceISO": NY,
  "phoneNumber": +1-555-123-4567,
  "wireMessage": Payment for invoice #12345,
  "sepaReference": REF-123456789,
  "achReference": ACH123456,
} satisfies CreateBankPaymentIntentDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateBankPaymentIntentDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


