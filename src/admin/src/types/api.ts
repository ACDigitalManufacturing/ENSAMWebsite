export interface Response<TResponse = any> {
  response?: TResponse;
  errors?: CustomError[];
}

export interface CustomError {
  message: string;
  field?: string;
}
