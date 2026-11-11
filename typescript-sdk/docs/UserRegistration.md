
# UserRegistration

Data required to register a new user.

## Properties

Name | Type
------------ | -------------
`firstName` | string
`lastName` | string
`email` | string
`password` | string
`role` | string

## Example

```typescript
import type { UserRegistration } from 'education-platform-api-client'

// TODO: Update the object below with actual values
const example = {
  "firstName": Jane,
  "lastName": Brown,
  "email": jane@example.com,
  "password": password123,
  "role": STUDENT,
} satisfies UserRegistration

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserRegistration
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


