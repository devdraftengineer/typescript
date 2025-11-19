
# TaxControllerCreate201Response


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`description` | string
`percentage` | number
`active` | boolean
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { TaxControllerCreate201Response } from '@devdraft/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": tax_123e4567-e89b-12d3-a456-426614174000,
  "name": Sales Tax,
  "description": Standard sales tax for retail transactions,
  "percentage": 8.5,
  "active": true,
  "createdAt": null,
  "updatedAt": null,
} satisfies TaxControllerCreate201Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TaxControllerCreate201Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


