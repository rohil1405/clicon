import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ProductListing from "@/components/Product/ProductListing";
import Section from "@/components/Section/Section";
import Button from "@/components/Button/Button";

export default function FavoritesPage() {
  const favorites = useSelector((state: RootState) => state.productFavorites);

  return (
    <>
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
          <Button
            name="Go Back"
            left={true}
            right={false}
            cart={false}
            href="/"
          />
        </div>
      )}
    </>
  );
}
