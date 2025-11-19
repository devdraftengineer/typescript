
# TaxControllerDeleteWithoutId400Response


## Properties

Name | Type
------------ | -------------
`message` | string
`error` | string
`statusCode` | number

## Example

```typescript
import type { TaxControllerDeleteWithoutId400Response } from '@devdraft/sdk'

// TODO: Update the object below with actual values
const example = {
  "message": Tax ID is required in the URL path. Use DELETE /api/v0/taxes/{id} to delete a specific tax.,
  "error": Bad Request,
  "statusCode": 400,
} satisfies TaxControllerDeleteWithoutId400Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TaxControllerDeleteWithoutId400Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


