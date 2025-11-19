
# HealthResponseDto


## Properties

Name | Type
------------ | -------------
`status` | string
`timestamp` | Date
`version` | string
`database` | string
`message` | string
`authenticated` | boolean

## Example

```typescript
import type { HealthResponseDto } from '@devdraft/sdk'

// TODO: Update the object below with actual values
const example = {
  "status": ok,
  "timestamp": 2023-07-01T12:00Z,
  "version": 1.0.0,
  "database": connected,
  "message": Service is up and running,
  "authenticated": true,
} satisfies HealthResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HealthResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


