import { CustomError } from "Types/api";

export const errorParser = (error: any): CustomError[] => {
  if (!error || !error.response?.data || !error.response.data.errors) {
    return [
      {
        message: "Error connecting to server",
      },
    ];
  }
  return error.response.data.errors;
};
