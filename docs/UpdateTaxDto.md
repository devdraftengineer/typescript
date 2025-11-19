
# UpdateTaxDto


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`percentage` | number
`active` | boolean
`appIds` | Array&lt;string&gt;

## Example

```typescript
import type { UpdateTaxDto } from '@devdraft/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Updated Sales Tax,
  "description": Updated description for retail sales tax,
  "percentage": 9.5,
  "active": false,
  "appIds": ["app_123e4567-e89b-12d3-a456-426614174000"],
} satisfies UpdateTaxDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateTaxDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


