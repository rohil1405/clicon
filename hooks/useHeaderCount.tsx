

import { useEffect, useState } from "react";

const useHeaderCount = () => {
  const [favCount, setFavCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const favName = process.env.NEXT_PUBLIC_CLICON_FAVORITES || "favorites";
  const cartName = process.env.NEXT_PUBLIC_CLICON_CART || "cart";

  const loadCounts = () => {
    try {
      const fav = JSON.parse(localStorage.getItem(favName) || "[]");
      const cart = JSON.parse(localStorage.getItem(cartName) || "[]");
      setFavCount(fav.length);
      setCartCount(cart.length);
    } catch (err) {
      console.error("Error parsing storage:", err);
    }
  };

  useEffect(() => {
    loadCounts();

    window.addEventListener("storage", loadCounts);
    window.addEventListener("storageUpdate", loadCounts);

    return () => {
      window.removeEventListener("storage", loadCounts);
      window.removeEventListener("storageUpdate", loadCounts);
    };
  }, []);

  return { favCount, cartCount, reload: loadCounts };
};

export default useHeaderCount;
