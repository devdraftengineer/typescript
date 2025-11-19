
# PublicHealthResponseDto


## Properties

Name | Type
------------ | -------------
`status` | string
`timestamp` | Date
`version` | string

## Example

```typescript
import type { PublicHealthResponseDto } from '@devdraft/sdk'

// TODO: Update the object below with actual values
const example = {
  "status": ok,
  "timestamp": 2023-07-01T12:00Z,
  "version": 1.0.0,
} satisfies PublicHealthResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PublicHealthResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


