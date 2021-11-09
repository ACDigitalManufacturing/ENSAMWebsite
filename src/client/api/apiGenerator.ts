import axios from "axios";
import { Response } from "Types/api";
import { errorParser } from "./errors";
import { getHost } from "./getHost";

interface GetUnauthenticatedApi<TResponse> {
  (uri: string, params: Record<string, string>): Promise<Response<TResponse>>;
}

export function getUnauthenticatedApi<
  TResponse
>(): GetUnauthenticatedApi<TResponse> {
  return async (uri, params) => {
    try {
      const host = getHost();
      const response = await axios.get(`${host}/${uri}`, {
        params: params || {},
        headers: { "Content-Type": "application/json" },
      });

      return { response: response.data };
    } catch (error) {
      return {
        errors: errorParser(error),
      };
    }
  };
}
