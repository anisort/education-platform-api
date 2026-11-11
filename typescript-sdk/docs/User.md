
# User

Represents a registered platform user.

## Properties

Name | Type
------------ | -------------
`id` | string
`firstName` | string
`lastName` | string
`email` | string
`role` | string
`registrationDate` | Date

## Example

```typescript
import type { User } from 'education-platform-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "firstName": John,
  "lastName": Smith,
  "email": john@example.com,
  "role": INSTRUCTOR,
  "registrationDate": Wed Nov 11 02:00:00 EET 2026,
} satisfies User

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as User
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


