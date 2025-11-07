import http from "@/service";
import { PRODUCT, PRODUCTS } from "./constants";
import { useQuery } from "@tanstack/react-query";

const getProducts = async () => {
  const response = await http.get(PRODUCTS);
  return response.data;
};

const getProduct = async (id: string) => {
  const response = await http.get(`${PRODUCTS}/${id}`);
  return response.data;
};

export const useGetProductsQuery = () => {
  return useQuery({
    queryKey: [PRODUCTS],
    queryFn: getProducts,
  });
};

export const useGetProductQuery = (productId: string) => {
  return useQuery({
    queryKey: [PRODUCT(productId)],
    queryFn: () => getProduct(productId),
  });
};
