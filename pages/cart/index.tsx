import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Section from "@/components/Section/Section";
import Button from "@/components/Button/Button";
import AddCart from "@/components/AddCart/AddCart";
import SeoHead from "@/components/SeoHead/SeoHead";

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.productCart);

  return (
    <>
      <SeoHead
        seoData={{
          title: "Add to Cart - Clicon Store",
          description:
            "Review the items in your cart and proceed to checkout at Clicon Store. Enjoy a seamless shopping experience.",
          keywords:
            "Clicon, cart, ecommerce, online shopping, checkout, add to cart",
          canonical: "cart",
          robots: "index, follow",
          og: {
            title: "Clicon Store - Cart",
            description:
              "Check out the items in your cart and continue shopping or proceed to checkout at Clicon Store.",
            image: "/images/cart-seo-img.png",
          },
        }}
      />

      {cart.length ? (
        <div className="cart-wrap fav-cart-wrap">
          <Section
            title="Your Cart"
            description="Review all the products you’ve added to your shopping cart. You can update quantities or proceed to checkout."
          >
            <AddCart />
          </Section>
        </div>
      ) : (
        <div className="no-product fav-cart-wrap">
          <div className="product-msg">
            Your cart is empty.
            <span>Start adding items to your cart to see them here.</span>
          </div>
          <div style={{ marginTop: "20px" }}>
            <Button
              name="Go Back"
              left={true}
              right={false}
              cart={false}
              href="/"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
