import Product from "@/models/ProductProps";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const favoritesStorage =
  process.env.NEXT_PUBLIC_CLICON_FAVORITES || "favorites";
const cartStorage = process.env.NEXT_PUBLIC_CLICON_CART || "cart";

interface CartItem extends Product {
  quantity: number;
}

const loadStorage = <T>(key: string): T[] => {
  if (typeof window !== "undefined") {
    try {
      const store = localStorage.getItem(key);
      return store ? JSON.parse(store) : [];
    } catch (error) {
      console.error(error);
    }
  }
  return [];
};

export const productFavoritesSlice = createSlice({
  name: favoritesStorage,
  initialState: loadStorage<Product>(favoritesStorage),
  reducers: {
    add(state, action: PayloadAction<Product>) {
      const item = action.payload;
      const exists = state.some(({ id }) => id === item.id);
      if (!exists) {
        state.push(item);
        if (typeof window !== "undefined") {
          localStorage.setItem(favoritesStorage, JSON.stringify(state));
          window.dispatchEvent(new Event("storageUpdate"));
        }
      }
    },
    remove(state, action: PayloadAction<number>) {
      const productId = action.payload;
      const filtered = state.filter(({ id }) => id !== productId);
      if (typeof window !== "undefined") {
        localStorage.setItem(favoritesStorage, JSON.stringify(filtered));
        window.dispatchEvent(new Event("storageUpdate"));
      }
      return filtered;
    },
    clear() {
      if (typeof window !== "undefined") {
        localStorage.removeItem(favoritesStorage);
        window.dispatchEvent(new Event("storageUpdate"));
      }
      return [];
    },
  },
});


export const productCartSlice = createSlice({
  name: cartStorage,
  initialState: loadStorage<CartItem>(cartStorage),
  reducers: {
    add(state, action: PayloadAction<Product>) {
      const item = action.payload;
      const existing = state.find((p) => p.id === item.id);
      if (existing) {
        existing.quantity += 1; 
      } else {
        state.push({ ...item, quantity: 1 }); 
      }
      if (typeof window !== "undefined") {
        localStorage.setItem(cartStorage, JSON.stringify(state));
        window.dispatchEvent(new Event("storageUpdate"));
      }
    },
    updateQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
  const { id, quantity } = action.payload;
  const item = state.find((p) => p.id === id);
  if (item) {
    item.quantity = quantity;
    localStorage.setItem(cartStorage, JSON.stringify(state));
    window.dispatchEvent(new Event("storageUpdate"));
  }
},

    decrease(state, action: PayloadAction<number>) {
      const productId = action.payload;
      const item = state.find((p) => p.id === productId);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          const filtered = state.filter((p) => p.id !== productId);
          if (typeof window !== "undefined") {
            localStorage.setItem(cartStorage, JSON.stringify(filtered));
            window.dispatchEvent(new Event("storageUpdate"));
          }
          return filtered;
        }
      }
      if (typeof window !== "undefined") {
        localStorage.setItem(cartStorage, JSON.stringify(state));
        window.dispatchEvent(new Event("storageUpdate"));
      }
    },
    remove(state, action: PayloadAction<number>) {
      const productId = action.payload;
      const filtered = state.filter(({ id }) => id !== productId);
      if (typeof window !== "undefined") {
        localStorage.setItem(cartStorage, JSON.stringify(filtered));
        window.dispatchEvent(new Event("storageUpdate"));
      }
      return filtered;
    },
    clear(state) {
      if (typeof window !== "undefined") {
        localStorage.removeItem(cartStorage);
        window.dispatchEvent(new Event("storageUpdate"));
      }
      return [];
    },
  },
});

export const productFavoritesActions = productFavoritesSlice.actions;
export const productCartActions = productCartSlice.actions;
