import { configureStore } from "@reduxjs/toolkit";
import productFeatureSlice from "./slice/ProductFeature";
import productFavoritesSlice from "./slice/Product";

export const store = configureStore({
  reducer: {
    productFeatures: productFeatureSlice.reducer,
    productFavorites: productFavoritesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
