interface ErrorDetail {
  message: string;
}

interface ValidationError {
  [key: string]: ErrorDetail[]; // Key is the error code, value is an array of error details
}

interface ApiRegErrorResponse {
  type: string;
  title: string;
  status: number;
  errors: ValidationError;
}
