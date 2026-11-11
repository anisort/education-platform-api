
# ErrorResponse

Standard API error response.

## Properties

Name | Type
------------ | -------------
`status` | number
`error` | string
`message` | string
`path` | string

## Example

```typescript
import type { ErrorResponse } from 'education-platform-api-client'

// TODO: Update the object below with actual values
const example = {
  "status": 404,
  "error": Not Found,
  "message": Course not found.,
  "path": /api/v1/courses/22222222-2222-2222-2222-222222222222,
} satisfies ErrorResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ErrorResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


