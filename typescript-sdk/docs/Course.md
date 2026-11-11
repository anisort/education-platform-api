
# Course

Represents an educational course.

## Properties

Name | Type
------------ | -------------
`id` | string
`title` | string
`description` | string
`durationHours` | number
`instructorId` | string

## Example

```typescript
import type { Course } from 'education-platform-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "title": Introduction to Python,
  "description": A beginner-friendly Python programming course.,
  "durationHours": 40,
  "instructorId": null,
} satisfies Course

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Course
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


