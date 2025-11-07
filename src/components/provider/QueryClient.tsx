"use client";
import { queryClient } from "@/utils/reactQueryUtils";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface QueryClientProps {
  children: ReactNode;
}
const QueryClient = ({ children }: QueryClientProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />

      {children}
    </QueryClientProvider>
  );
};

export default QueryClient;
