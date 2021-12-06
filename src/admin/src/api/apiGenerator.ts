import axios from "axios";
import { Response } from "types/api";
import { errorParser } from "./errors";
import { getHost } from "./getHost";

interface GetUnauthenticatedApiRequest {
  url: string;
  params: Record<string, string | number>;
}

interface GetAuthenticatedApiRequest {
  url: string;
  auth_token: string;
  params: Record<string, string | number>;
}
interface PostAuthenticatedApiRequest<T> {
  url: string;
  auth_token: string;
  body: T;
  params: Record<string, string | number>;
}
interface PutAuthenticatedApiRequest<T> {
  url: string;
  auth_token: string;
  body: T;
  params: Record<string, string | number>;
}
interface DeleteAuthenticatedApiRequest {
  url: string;
  auth_token: string;
  params: Record<string, string | number>;
}

export async function getUnauthenticatedApi<TResponse>({
  url,
  params,
}: GetUnauthenticatedApiRequest): Promise<Response<TResponse>> {
  try {
    const host = getHost();
    const response = await axios.get(`${host}${url}`, {
      params: params || {},
      headers: { "Content-Type": "application/json" },
    });

    return { response: response.data };
  } catch (error) {
    return {
      errors: errorParser(error),
    };
  }
}

export async function getAuthenticatedApi<TResponse>({
  url,
  params,
  auth_token,
}: GetAuthenticatedApiRequest): Promise<Response<TResponse>> {
  try {
    const host = getHost();
    const response = await axios.get(`${host}${url}`, {
      params: params || {},
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth_token}`,
      },
    });

    return { response: response.data };
  } catch (error) {
    return {
      errors: errorParser(error),
    };
  }
}

export async function postAuthenticatedApi<TRequest, TResponse>({
  url,
  params,
  body,
  auth_token,
}: PostAuthenticatedApiRequest<TRequest>): Promise<Response<TResponse>> {
  try {
    const host = getHost();
    const response = await axios.post(`${host}${url}`, body, {
      params: params || {},
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth_token}`,
      },
    });

    return { response: response.data };
  } catch (error) {
    return {
      errors: errorParser(error),
    };
  }
}

export async function putAuthenticatedApi<TRequest, TResponse>({
  url,
  params,
  body,
  auth_token,
}: PutAuthenticatedApiRequest<TRequest>): Promise<Response<TResponse>> {
  try {
    const host = getHost();
    const response = await axios.put(`${host}${url}`, body, {
      params: params || {},
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth_token}`,
      },
    });

    return { response: response.data };
  } catch (error) {
    return {
      errors: errorParser(error),
    };
  }
}

export async function deleteAuthenticatedApi<TResponse>({
  url,
  params,
  auth_token,
}: DeleteAuthenticatedApiRequest): Promise<Response<TResponse>> {
  try {
    const host = getHost();
    const response = await axios.delete(`${host}${url}`, {
      params: params || {},
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth_token}`,
      },
    });

    return { response: response.data };
  } catch (error) {
    return {
      errors: errorParser(error),
    };
  }
}
