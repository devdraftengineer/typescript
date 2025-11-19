
# UpdateCustomerDto


## Properties

Name | Type
------------ | -------------
`firstName` | string
`lastName` | string
`email` | string
`phoneNumber` | string
`customerType` | [CustomerType](CustomerType.md)
`status` | [CustomerStatus](CustomerStatus.md)

## Example

```typescript
import type { UpdateCustomerDto } from '@devdraft/sdk'

// TODO: Update the object below with actual values
const example = {
  "firstName": John,
  "lastName": Doe,
  "email": john.doe@example.com,
  "phoneNumber": +1-555-123-4567,
  "customerType": null,
  "status": null,
} satisfies UpdateCustomerDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateCustomerDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


