
# ExchangeRateResponseDto


## Properties

Name | Type
------------ | -------------
`from` | string
`to` | string
`midmarketRate` | string
`buyRate` | string
`sellRate` | string
`timestamp` | string

## Example

```typescript
import type { ExchangeRateResponseDto } from '@devdraft/sdk'

// TODO: Update the object below with actual values
const example = {
  "from": usd,
  "to": eur,
  "midmarketRate": 0.85000,
  "buyRate": 0.84500,
  "sellRate": 0.85500,
  "timestamp": 2024-01-15T10:30:00Z,
} satisfies ExchangeRateResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExchangeRateResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


