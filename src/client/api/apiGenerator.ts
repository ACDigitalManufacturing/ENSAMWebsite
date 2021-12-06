import axios from "axios";
import { Response } from "Types/api";
import { errorParser } from "./errors";
import { getHost } from "./getHost";

// export getUnauthenticatedApi<
//   TResponse
// >(): GetUnauthenticatedApi<TResponse> {
//   return
// }
export const getUnauthenticatedApi = async <TResponse>(
  uri: string,
  params: Record<string, string | number>
): Promise<Response<TResponse>> => {
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
