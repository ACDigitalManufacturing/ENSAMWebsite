// eslint-disable-next-line
export interface Response<TResponse = any> {
  response?: TResponse;
  errors?: CustomError[];
}

export interface CustomError {
  message: string;
  field?: string;
}

export enum AllowedTypesForCover {
  png = "image/png",
  jpg = "image/jpg",
  gif = "image/gif",
  jpeg = "image/jpeg",
  svg = "image/svg+xml",
  webp = "image/webp",
}
