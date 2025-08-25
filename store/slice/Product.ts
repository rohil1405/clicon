import Product from "@/models/ProductProps";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const localstorageName = process.env.NEXT_PUBLIC_CLICON_FAVORITES || "favorites";

const initialState = (): Product[] => {
    if(typeof window !== "undefined") {
try {
      const store = localStorage.getItem(localstorageName);
      return store ? JSON.parse(store) : [];
    } catch (error) {
      console.error(error);
    }
    }
    
  return [];
};

const productFavoritesSlice = createSlice({
  name: localstorageName, 
  initialState: initialState(),
  reducers: {
    add(state, action: PayloadAction<Product>) {
      const item = action.payload;
      const exists = state.some(({ id }) => id === item.id);
      if (!exists) {
        state.push(item);
        if(typeof window !== "undefined") { 
       localStorage.setItem(localstorageName, JSON.stringify(state));
        }
      }
    },
    remove(state, action: PayloadAction<number>) {
      const productId = action.payload;
      const filtered = state.filter(({ id }) => id !== productId);
      if(typeof window !== "undefined") {
     localStorage.setItem(localstorageName, JSON.stringify(filtered));
      }
      return filtered; 
    },
    clear() {
        if(typeof window !== "undefined") {
      localStorage.removeItem(localstorageName);
        }
      return [];
    },
  },
});

export default productFavoritesSlice;
export const productFavoritesActions = productFavoritesSlice.actions;
