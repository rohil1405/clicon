import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Section from "@/components/Section/Section";
import Button from "@/components/Button/Button";
import AddCart from "@/components/AddCart/AddCart";

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.productCart);

  return (
    <>
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
}

export default CartPage;