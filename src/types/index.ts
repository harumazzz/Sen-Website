/**
 * Central export for all type definitions
 */

export * from "./github";
export * from "./changelog";

/**
 * Common Types
 */

export interface ApiResponse<T> {
  data: T;
  error?: ApiError;
  meta?: {
    page?: number;
    perPage?: number;
    total?: number;
  };
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

/**
 * Component Props Types
 */

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Theme Types
 */

export type Theme = "light" | "dark" | "system";

/**
 * Loading State Types
 */

export type LoadingState = "idle" | "loading" | "success" | "error";

/**
 * Utility Types
 */

export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
export type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
