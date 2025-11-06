import http from "@/service";
import { PRODUCTS } from "./constants";
import { useQuery } from "@tanstack/react-query";

const getProducts = async () => {
  const response = await http.get(PRODUCTS);
  return response.data;
};

export const useGetProductsQuery = () => {
  return useQuery({
    queryKey: [PRODUCTS],
    queryFn: getProducts,
  });
};
