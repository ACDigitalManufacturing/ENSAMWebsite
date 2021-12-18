import axios from "axios";
import { Response } from "Types/api";
import { errorParser } from "./errors";
import { getHost } from "./getHost";

// export getUnauthenticatedApi<
//   TResponse
// >(): GetUnauthenticatedApi<TResponse> {
//   return
// }

const BACKEND_URI = process.env.NEXT_PUBLIC_BACKEND_API_URI || "/api";

export const getUnauthenticatedApi = async <TResponse>(
  uri: string,
  params: Record<string, string | number>
): Promise<Response<TResponse>> => {
  try {
    const host = getHost();
    const response = await axios.get(`${host}/api/${uri}`, {
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

export const getBackendUnauthenticatedApi = async <TResponse>(
  uri: string,
  params: Record<string, string | number>,
  add_default_host: boolean = true
): Promise<Response<TResponse>> => {
  try {
    const response = await axios.get(
      `${add_default_host ? BACKEND_URI : ""}${uri}`,
      {
        params: params || {},
        headers: { "Content-Type": "application/json" },
      }
    );

    return { response: response.data };
  } catch (error) {
    return {
      errors: errorParser(error),
    };
  }
};
