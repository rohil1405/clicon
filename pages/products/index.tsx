"use client";

import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import ProductProps from "@/models/ProductProps";
import ProductListing from "@/components/Product/ProductListing";

const fetchProducts = async (page: number, limit: number) => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`
  );
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  return data.products as ProductProps[];
};

const ProductPage = () => {
  const [page, setPage] = useState(1);
  const limit = 12;

  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProducts(page, limit),
    placeholderData: keepPreviousData, // ✅ replaces keepPreviousData
  });

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Failed to load products.</p>;

  return (
    <div>
      <h2>Products</h2>
      <ProductListing products={products} />

      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <button
          disabled={page === 1}
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          style={{ marginRight: 10 }}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          disabled={products.length < limit}
          onClick={() => setPage((old) => old + 1)}
          style={{ marginLeft: 10 }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
