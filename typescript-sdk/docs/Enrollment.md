
# Enrollment

Represents a student\'s enrollment in a course.

## Properties

Name | Type
------------ | -------------
`studentId` | string
`courseId` | string

## Example

```typescript
import type { Enrollment } from 'education-platform-api-client'

// TODO: Update the object below with actual values
const example = {
  "studentId": 33333333-3333-3333-3333-333333333333,
  "courseId": 22222222-2222-2222-2222-222222222222,
} satisfies Enrollment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Enrollment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


