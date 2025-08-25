import { useEffect, useState } from "react";

const useHeaderCount = () => {
  const [favCount, setFavCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const favName = process.env.NEXT_PUBLIC_CLICON_FAVORITES || "favorites";
  const cartName = process.env.NEXT_PUBLIC_CLICON_CART || "cart";

  useEffect(() => {
    const loadCounts = () => {
      const fav = JSON.parse(localStorage.getItem(favName) || "[]");
      const cart = JSON.parse(localStorage.getItem(cartName) || "[]");

      setFavCount(fav.length);
      setCartCount(cart.length);
    };

    loadCounts();

    window.addEventListener("storage", loadCounts);
    return () => window.removeEventListener("storage", loadCounts);
  }, []);

  return { favCount, cartCount };
};

export default useHeaderCount;
