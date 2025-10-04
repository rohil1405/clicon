import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ProductListing from "@/components/Product/ProductListing";
import Section from "@/components/Section/Section";
import SeoHead from "@/components/SeoHead/SeoHead";

const FavoritesPage = () => {
  const favorites = useSelector((state: RootState) => state.productFavorites);

  return (
    <>
      <SeoHead
        seoData={{
          title: "Favorites - Clicon Store",
          description:
            "View and manage your favorite products at Clicon Store. Keep track of items you love and plan your purchases.",
          keywords: "Clicon, favorites, wishlist, saved products, online store",
          canonical: "favorites",
          robots: "index, follow",
          og: {
            title: "Clicon Store - Favorites",
            description:
              "Check your favorite products and manage your wishlist at Clicon Store.",
            image: "/images/favorites-seo-img.png",
          },
        }}
      />

      {favorites.length ? (
        <div className="fav-cart-wrap">
          <Section
            title="Your Favorites"
            description="All the products you’ve marked with ❤️ are saved here. Easily find and shop them anytime."
          >
            <ProductListing products={favorites} />
          </Section>
        </div>
      ) : (
        <div className="no-product fav-cart-wrap">
          <div className="product-msg">
            Looks like you haven’t added any favorites yet.
            <span>Tap the ❤️ button on products to save them here.</span>
          </div>
          <div style={{ marginTop: "20px" }}></div>
        </div>
      )}
    </>
  );
};

export default FavoritesPage;
