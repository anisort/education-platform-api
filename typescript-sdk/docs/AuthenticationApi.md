# AuthenticationApi

All URIs are relative to *http://localhost:8080/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**loginUser**](AuthenticationApi.md#loginuser) | **POST** /auth/login | Login |
| [**registerUser**](AuthenticationApi.md#registeruser) | **POST** /auth/register | Register a user |



## loginUser

> LoginResponse loginUser(loginRequest)

Login

Authenticates a user and returns a JWT access token.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'education-platform-api-client';
import type { LoginUserRequest } from 'education-platform-api-client';

async function example() {
  console.log("🚀 Testing education-platform-api-client SDK...");
  const api = new AuthenticationApi();

  const body = {
    // LoginRequest
    loginRequest: ...,
  } satisfies LoginUserRequest;

  try {
    const data = await api.loginUser(body);
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
| **loginRequest** | [LoginRequest](LoginRequest.md) |  | |

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Authentication successful. |  -  |
| **400** | Invalid request data. |  -  |
| **401** | Authentication is required or the access token is invalid. |  -  |
| **500** | An unexpected server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## registerUser

> User registerUser(userRegistration)

Register a user

Registers a new user as an INSTRUCTOR or STUDENT. The user role is specified during registration. 

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from 'education-platform-api-client';
import type { RegisterUserRequest } from 'education-platform-api-client';

async function example() {
  console.log("🚀 Testing education-platform-api-client SDK...");
  const api = new AuthenticationApi();

  const body = {
    // UserRegistration
    userRegistration: ...,
  } satisfies RegisterUserRequest;

  try {
    const data = await api.registerUser(body);
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
| **userRegistration** | [UserRegistration](UserRegistration.md) |  | |

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | User registered successfully. |  -  |
| **400** | Invalid request data. |  -  |
| **409** | The request conflicts with existing data. |  -  |
| **500** | An unexpected server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

