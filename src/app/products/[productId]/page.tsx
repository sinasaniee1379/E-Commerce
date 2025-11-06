import React, { use } from "react";
interface ProductProps {
  params: Promise<{ productId: string }>;
}
const Product = ({ params }: ProductProps) => {
  const { productId } = use(params);
  console.log(productId);
  return <div>Page</div>;
};

export default Product;
