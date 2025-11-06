import { BaseError } from "@/types/request";
import { QueryClient } from "@tanstack/react-query";

const SECOND = 1000;
export const MINUTE = SECOND * 60;
const MAX_RETRIES = 2;
const NO_RETRY_CODES = [401, 403, 429, 500, 404];

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: true,
      staleTime: MINUTE / 2,
      retry(failureCount, error) {
        const customError = error as unknown as BaseError;
        if (
          customError.statusCode &&
          NO_RETRY_CODES.includes(customError.statusCode)
        ) {
          return false;
        }
        return failureCount < MAX_RETRIES;
      },

      retryDelay: SECOND * 5,
    },
  },
});
