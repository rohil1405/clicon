import { configureStore } from "@reduxjs/toolkit";
import productFeatureSlice from "./slice/ProductFeature";

export const store = configureStore({
  reducer: {
    productFeatures: productFeatureSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
