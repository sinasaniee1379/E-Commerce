"use client";

import { useGetProductsQuery } from "@/api";

export default function Home() {
  const { data } = useGetProductsQuery();
  console.log(data);
  return (
    <div className="mt-4">
      <div className="flex gap-1.5">
        <p>Home</p> {">"} <p className="text-primary font-light">Products</p>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
