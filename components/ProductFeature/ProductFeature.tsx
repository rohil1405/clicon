"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { getProductFeatures } from "@/store/action/ProductFeature";
import ProductFeatureList from "./ProductFeatureList";

const ProductFeature = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.productFeatures
  );

  useEffect(() => {
    dispatch(getProductFeatures());
  }, [dispatch]);

  if (loading) return <p>Loading features...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <ProductFeatureList items={items} />
    </>
  );
};

export default ProductFeature;
