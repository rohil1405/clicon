import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductFeatureProps } from "@/models/ProductFeatureProps";
import ProductFeatureState from "@/models/ProductFeatureState";

const initialState: ProductFeatureState = {
  items: [],
  loading: false,
  error: null,
};

const productFeatureSlice = createSlice({
  name: "productFeatures",
  initialState,
  reducers: {
    setFeatures(
      state,
      action: PayloadAction<{
        items?: ProductFeatureProps[];
        loading?: boolean;
        error?: string | null;
      }>
    ) {
      if (action.payload.items !== undefined) state.items = action.payload.items;
      if (action.payload.loading !== undefined) state.loading = action.payload.loading;
      if (action.payload.error !== undefined) state.error = action.payload.error;
    },
  },
});

export const { setFeatures } = productFeatureSlice.actions;


export default productFeatureSlice;
