"use client";
import { queryClient } from "@/utils/reactQueryUtils";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface QueryClientProps {
  children: ReactNode;
}
const QueryClient = ({ children }: QueryClientProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryClient;
