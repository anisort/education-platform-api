# CourseApi

All URIs are relative to *http://localhost:8080/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCourse**](CourseApi.md#createcourse) | **POST** /courses | Create a course |
| [**deleteCourse**](CourseApi.md#deletecourse) | **DELETE** /courses/{id} | Delete a course |
| [**getAllCourses**](CourseApi.md#getallcourses) | **GET** /courses | Get all courses |
| [**getCourseById**](CourseApi.md#getcoursebyid) | **GET** /courses/{id} | Get course by ID |
| [**updateCourse**](CourseApi.md#updatecourse) | **PUT** /courses/{id} | Update a course |



## createCourse

> Course createCourse(courseCreate)

Create a course

Creates a new course associated with the authenticated instructor. The instructorId is assigned automatically based on the JWT token. 

### Example

```ts
import {
  Configuration,
  CourseApi,
} from 'education-platform-api-client';
import type { CreateCourseRequest } from 'education-platform-api-client';

async function example() {
  console.log("🚀 Testing education-platform-api-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CourseApi(config);

  const body = {
    // CourseCreate
    courseCreate: ...,
  } satisfies CreateCourseRequest;

  try {
    const data = await api.createCourse(body);
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
| **courseCreate** | [CourseCreate](CourseCreate.md) |  | |

### Return type

[**Course**](Course.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Course created successfully. |  -  |
| **400** | Invalid request data. |  -  |
| **401** | Authentication is required or the access token is invalid. |  -  |
| **403** | The user does not have permission to perform this operation. |  -  |
| **500** | An unexpected server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCourse

> deleteCourse(id)

Delete a course

Deletes a course owned by the authenticated instructor. All enrollment records associated with the course are also deleted. Student accounts remain unchanged. 

### Example

```ts
import {
  Configuration,
  CourseApi,
} from 'education-platform-api-client';
import type { DeleteCourseRequest } from 'education-platform-api-client';

async function example() {
  console.log("🚀 Testing education-platform-api-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CourseApi(config);

  const body = {
    // string | Unique course identifier.
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteCourseRequest;

  try {
    const data = await api.deleteCourse(body);
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
| **id** | `string` | Unique course identifier. | [Defaults to `undefined`] |

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
| **204** | Course deleted successfully. |  -  |
| **401** | Authentication is required or the access token is invalid. |  -  |
| **403** | The user does not have permission to perform this operation. |  -  |
| **404** | The requested resource does not exist. |  -  |
| **500** | An unexpected server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllCourses

> Array&lt;Course&gt; getAllCourses()

Get all courses

Returns a list of all available courses.

### Example

```ts
import {
  Configuration,
  CourseApi,
} from 'education-platform-api-client';
import type { GetAllCoursesRequest } from 'education-platform-api-client';

async function example() {
  console.log("🚀 Testing education-platform-api-client SDK...");
  const api = new CourseApi();

  try {
    const data = await api.getAllCourses();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;Course&gt;**](Course.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of courses retrieved successfully. |  -  |
| **500** | An unexpected server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCourseById

> Course getCourseById(id)

Get course by ID

Returns details of a specific course.

### Example

```ts
import {
  Configuration,
  CourseApi,
} from 'education-platform-api-client';
import type { GetCourseByIdRequest } from 'education-platform-api-client';

async function example() {
  console.log("🚀 Testing education-platform-api-client SDK...");
  const api = new CourseApi();

  const body = {
    // string | Unique course identifier.
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetCourseByIdRequest;

  try {
    const data = await api.getCourseById(body);
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
| **id** | `string` | Unique course identifier. | [Defaults to `undefined`] |

### Return type

[**Course**](Course.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Course retrieved successfully. |  -  |
| **404** | The requested resource does not exist. |  -  |
| **500** | An unexpected server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCourse

> Course updateCourse(id, courseUpdate)

Update a course

Updates an existing course owned by the authenticated instructor.

### Example

```ts
import {
  Configuration,
  CourseApi,
} from 'education-platform-api-client';
import type { UpdateCourseRequest } from 'education-platform-api-client';

async function example() {
  console.log("🚀 Testing education-platform-api-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CourseApi(config);

  const body = {
    // string | Unique course identifier.
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CourseUpdate
    courseUpdate: ...,
  } satisfies UpdateCourseRequest;

  try {
    const data = await api.updateCourse(body);
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
| **id** | `string` | Unique course identifier. | [Defaults to `undefined`] |
| **courseUpdate** | [CourseUpdate](CourseUpdate.md) |  | |

### Return type

[**Course**](Course.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Course updated successfully. |  -  |
| **400** | Invalid request data. |  -  |
| **401** | Authentication is required or the access token is invalid. |  -  |
| **403** | The user does not have permission to perform this operation. |  -  |
| **404** | The requested resource does not exist. |  -  |
| **500** | An unexpected server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

