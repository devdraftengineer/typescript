
# UpdateWebhookDto


## Properties

Name | Type
------------ | -------------
`name` | string
`url` | string
`isActive` | boolean
`signingSecret` | string
`encrypted` | boolean

## Example

```typescript
import type { UpdateWebhookDto } from '@devdraft/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Payment Notifications,
  "url": https://api.example.com/webhooks/payments,
  "isActive": true,
  "signingSecret": whsec_123456789,
  "encrypted": false,
} satisfies UpdateWebhookDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateWebhookDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


