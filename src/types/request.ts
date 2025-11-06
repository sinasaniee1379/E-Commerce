export interface BaseError {
  message: string;
  status: number;
  statusCode: number;
  errors?: string[];
  code?: string;
  config?: string;
}
