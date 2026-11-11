# EnrollmentApi

All URIs are relative to *http://localhost:8080/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addStudentToCourse**](EnrollmentApi.md#addstudenttocourse) | **POST** /courses/{courseId}/students/{studentId} | Add a student to a course |
| [**getStudentsInCourse**](EnrollmentApi.md#getstudentsincourse) | **GET** /courses/{courseId}/students | Get students enrolled in a course |
| [**removeStudentFromCourse**](EnrollmentApi.md#removestudentfromcourse) | **DELETE** /courses/{courseId}/students/{studentId} | Remove a student from a course |



## addStudentToCourse

> Enrollment addStudentToCourse(courseId, studentId)

Add a student to a course

Adds a specific student to a course owned by the authenticated instructor. Only users with the STUDENT role can be enrolled. 

### Example

```ts
import {
  Configuration,
  EnrollmentApi,
} from 'education-platform-api-client';
import type { AddStudentToCourseRequest } from 'education-platform-api-client';

async function example() {
  console.log("🚀 Testing education-platform-api-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EnrollmentApi(config);

  const body = {
    // string | Unique course identifier.
    courseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Unique student identifier.
    studentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies AddStudentToCourseRequest;

  try {
    const data = await api.addStudentToCourse(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **courseId** | `string` | Unique course identifier. | [Defaults to `undefined`] |
| **studentId** | `string` | Unique student identifier. | [Defaults to `undefined`] |

### Return type

[**Enrollment**](Enrollment.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Student added to the course successfully. |  -  |
| **401** | Authentication is required or the access token is invalid. |  -  |
| **403** | The user does not have permission to perform this operation. |  -  |
| **404** | The requested resource does not exist. |  -  |
| **409** | The request conflicts with existing data. |  -  |
| **500** | An unexpected server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStudentsInCourse

> Array&lt;User&gt; getStudentsInCourse(courseId)

Get students enrolled in a course

Returns all students enrolled in a course owned by the authenticated instructor. 

### Example

```ts
import {
  Configuration,
  EnrollmentApi,
} from 'education-platform-api-client';
import type { GetStudentsInCourseRequest } from 'education-platform-api-client';

async function example() {
  console.log("🚀 Testing education-platform-api-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EnrollmentApi(config);

  const body = {
    // string | Unique course identifier.
    courseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetStudentsInCourseRequest;

  try {
    const data = await api.getStudentsInCourse(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **courseId** | `string` | Unique course identifier. | [Defaults to `undefined`] |

### Return type

[**Array&lt;User&gt;**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of enrolled students retrieved successfully. |  -  |
| **401** | Authentication is required or the access token is invalid. |  -  |
| **403** | The user does not have permission to perform this operation. |  -  |
| **404** | The requested resource does not exist. |  -  |
| **500** | An unexpected server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeStudentFromCourse

> removeStudentFromCourse(courseId, studentId)

Remove a student from a course

Removes a student from a course owned by the authenticated instructor. Only the enrollment record is deleted. The student account and course remain unchanged. 

### Example

```ts
import {
  Configuration,
  EnrollmentApi,
} from 'education-platform-api-client';
import type { RemoveStudentFromCourseRequest } from 'education-platform-api-client';

async function example() {
  console.log("🚀 Testing education-platform-api-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EnrollmentApi(config);

  const body = {
    // string | Unique course identifier.
    courseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Unique student identifier.
    studentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RemoveStudentFromCourseRequest;

  try {
    const data = await api.removeStudentFromCourse(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **courseId** | `string` | Unique course identifier. | [Defaults to `undefined`] |
| **studentId** | `string` | Unique student identifier. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Student removed from the course successfully. |  -  |
| **401** | Authentication is required or the access token is invalid. |  -  |
| **403** | The user does not have permission to perform this operation. |  -  |
| **404** | The requested resource does not exist. |  -  |
| **500** | An unexpected server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

