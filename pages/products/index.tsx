"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductProps from "@/models/ProductProps";
import ProductListing from "@/components/Product/ProductListing";
import Request from "@/utils/Request";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SeoHead from "@/components/SeoHead/SeoHead";
import Section from "@/components/Section/Section";

const LIMIT = 12;

const fetchProducts = async (
  page: number,
  searchTerm?: string
): Promise<ProductProps[]> => {
  let url = "";

  if (searchTerm) {
    url = `${
      process.env.CLICON_PRODUCT_WEBSITE_URL
    }/search?q=${searchTerm}&limit=${LIMIT}&skip=${LIMIT * (page - 1)}`;
  } else {
    url = `${process.env.CLICON_PRODUCT_WEBSITE_URL}?limit=${LIMIT}&skip=${
      LIMIT * (page - 1)
    }`;
  }

  const response = await Request({
    url,
    configuration: { method: "GET" },
  });

  return response.data.products;
};

const ProductPage = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", page, searchTerm],
    queryFn: () => fetchProducts(page, searchTerm),
    placeholderData: (prev) => prev,
  });

  if (isLoading)
    return (
      <div className="load-error">
        <p className="loader">Loading products...</p>;
      </div>
    );
  if (isError)
    return (
      <div className="load-error">
        <div className="iserror">
          <h2>Oops! Something went wrong.</h2>
          <p>
            We couldn’t load the products at the moment. Please try refreshing
            the page or come back later.
          </p>
        </div>
      </div>
    );

  return (
    <>
      <SeoHead
        seoData={{
          title: "Products - Clicon Store",
          description:
            "Explore our wide range of products at Clicon Store. Find the best deals and quality products for all your needs.",
          keywords:
            "Clicon, products, shop, ecommerce, online store, buy products",
          canonical: "products",
          robots: "index, follow",
          og: {
            title: "Clicon Store - Products",
            description:
              "Discover and shop from our collection of premium products at Clicon Store.",
            image: "/images/seo-img.png",
          },
        }}
      />

      <div className="all-product-wrap">
        <Section
          title="Shop Our Products"
          description="Browse our premium selection of products at Clicon Store. Quality, variety, and the best deals all in one place."
        >
          <ProductListing products={products} />

          <div className="pagination">
            <button
              disabled={page === 1}
              onClick={() => setPage((old) => Math.max(old - 1, 1))}
            >
              <FaChevronLeft />
            </button>
            <span>{page}</span>
            <button
              disabled={products.length < LIMIT}
              onClick={() => setPage((old) => old + 1)}
            >
              <FaChevronRight />
            </button>
          </div>
        </Section>
      </div>
    </>
  );
};

export default ProductPage;
