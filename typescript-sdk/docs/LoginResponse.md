
# LoginResponse

Authentication response containing a JWT access token.

## Properties

Name | Type
------------ | -------------
`accessToken` | string
`tokenType` | string

## Example

```typescript
import type { LoginResponse } from 'education-platform-api-client'

// TODO: Update the object below with actual values
const example = {
  "accessToken": <jwt_access_token>,
  "tokenType": Bearer,
} satisfies LoginResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LoginResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


