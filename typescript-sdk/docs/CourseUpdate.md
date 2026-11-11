
# CourseUpdate

Data required to update a course.

## Properties

Name | Type
------------ | -------------
`title` | string
`description` | string
`durationHours` | number

## Example

```typescript
import type { CourseUpdate } from 'education-platform-api-client'

// TODO: Update the object below with actual values
const example = {
  "title": Advanced Python,
  "description": An advanced Python programming course.,
  "durationHours": 60,
} satisfies CourseUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CourseUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


