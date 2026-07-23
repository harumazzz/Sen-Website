import type { ApiError, ApiResponse } from "./types";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.github.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
};

export class APIError extends Error {
  constructor(
    message: string,
    public status?: number,
    public code?: string
  ) {
    super(message);
    this.name = "APIError";
  }
}

class ApiClient {
  private client: AxiosInstance;

  constructor(config: typeof API_CONFIG) {
    this.client = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout,
      headers: config.headers,
    });
  }

  private async request<T>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.request<T>(config);
      return { data: response.data };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          throw new APIError("Request timeout", 408);
        }
        const status = error.response?.status;
        const errorData = (error.response?.data as any) || {};
        throw new APIError(
          errorData.message || error.message || `HTTP ${status}`,
          status,
          errorData.code
        );
      }

      if (error instanceof Error) {
        throw new APIError(error.message);
      }

      throw new APIError("An unknown error occurred");
    }
  }

  async get<T>(endpoint: string, options?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>({ ...options, url: endpoint, method: "GET" });
  }

  async post<T>(endpoint: string, body?: unknown, options?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>({
      ...options,
      url: endpoint,
      method: "POST",
      data: body,
    });
  }

  async put<T>(endpoint: string, body?: unknown, options?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>({
      ...options,
      url: endpoint,
      method: "PUT",
      data: body,
    });
  }

  async delete<T>(endpoint: string, options?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>({ ...options, url: endpoint, method: "DELETE" });
  }
}

export const apiClient = new ApiClient(API_CONFIG);

export function handleApiError(error: unknown): ApiError {
  if (error instanceof APIError) {
    return {
      message: error.message,
      status: error.status,
      code: error.code,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
    };
  }

  return {
    message: "An unknown error occurred",
  };
}
