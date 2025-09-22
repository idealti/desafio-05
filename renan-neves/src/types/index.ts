export const StatusCode = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  ERROR: 500,
  // Add any other status codes as needed
} as const;

export type StatusCodeValue = typeof StatusCode[keyof typeof StatusCode];

export type ApiResponse<T = unknown> = {
  data: T | null // The actual data returned from the api
  message: string // Message about the operation (e.g., success or error details)
  status: StatusCodeValue // Status code (e.g., 200 for success, 400 for client errors)
}