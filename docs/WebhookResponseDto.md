
# WebhookResponseDto


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`url` | string
`isActive` | boolean
`encrypted` | boolean
`createdAt` | string
`updatedAt` | string
`deliveryStats` | object

## Example

```typescript
import type { WebhookResponseDto } from '@devdraft/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 550e8400-e29b-41d4-a716-446655440000,
  "name": Payment Notifications,
  "url": https://api.example.com/webhooks/payments,
  "isActive": true,
  "encrypted": false,
  "createdAt": 2024-03-20T12:00:00.000Z,
  "updatedAt": 2024-03-20T12:00:00.000Z,
  "deliveryStats": {"total_events":150,"successful_deliveries":145,"failed_deliveries":5,"last_delivery":"2024-03-20T11:55:00.000Z"},
} satisfies WebhookResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


