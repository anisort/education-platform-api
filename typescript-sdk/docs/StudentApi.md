# StudentApi

All URIs are relative to *http://localhost:8080/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getOwnEnrolledCourses**](StudentApi.md#getownenrolledcourses) | **GET** /students/me/courses | Get own enrolled courses |



## getOwnEnrolledCourses

> Array&lt;Course&gt; getOwnEnrolledCourses()

Get own enrolled courses

Returns all courses in which the authenticated student is enrolled. The student ID is obtained from the JWT access token. 

### Example

```ts
import {
  Configuration,
  StudentApi,
} from 'education-platform-api-client';
import type { GetOwnEnrolledCoursesRequest } from 'education-platform-api-client';

async function example() {
  console.log("🚀 Testing education-platform-api-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StudentApi(config);

  try {
    const data = await api.getOwnEnrolledCourses();
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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of enrolled courses retrieved successfully. |  -  |
| **401** | Authentication is required or the access token is invalid. |  -  |
| **403** | The user does not have permission to perform this operation. |  -  |
| **500** | An unexpected server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

