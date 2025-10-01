"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { productCartActions } from "@/store/slice/Product";
import Image from "next/image";
import classes from "./AddCart.module.css";
import Swal from "sweetalert2";
import { MdRemoveShoppingCart } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";

const AddCart = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state: RootState) => state.productCart);

  const increaseQuantity = (id: number) => {
    const product = cart.find((p) => p.id === id);
    if (product) {
      dispatch(
        productCartActions.updateQuantity({
          id,
          quantity: product.quantity + 1,
        })
      );
    }
  };

  const decreaseQuantity = (id: number) => {
    const product = cart.find((p) => p.id === id);
    if (product && product.quantity > 1) {
      dispatch(
        productCartActions.updateQuantity({
          id,
          quantity: product.quantity - 1,
        })
      );
    }
  };

  const removeItem = (id: number) => {
    dispatch(productCartActions.remove(id));
    Swal.fire({
      title: "Removed!",
      text: "Item has been removed from the cart.",
      icon: "success",
      confirmButtonColor: "#fa8232",
    });
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    dispatch(productCartActions.clear());
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart"); 
    }

    Swal.fire({
      title: "Thank You!",
      text: "Your order has been placed successfully.",
      icon: "success",
      confirmButtonColor: "#fa8232",
    }).then(() => {
      router.push("/thank-you");
    });
  };

  if (cart.length === 0) {
    return <p className={classes.empty}>Your cart is empty.</p>;
  }

  return (
    <div className={classes.wrap}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <Image
                  src={item.thumbnail}
                  width={100}
                  height={60}
                  alt={item.title}
                />
              </td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>
                <div className={classes.quantity}>
                  <button onClick={() => decreaseQuantity(item.id)}>
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>
                    <FaPlus />
                  </button>
                </div>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button
                  className={classes.removeBtn}
                  onClick={() => removeItem(item.id)}
                >
                  <MdRemoveShoppingCart />
                </button>
              </td>
            </tr>
          ))}

          <tr>
            <td className={classes.total} colSpan={5}>
              Total:
            </td>
            <td colSpan={2}>${totalPrice.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <div className={classes.checkout} onClick={handleCheckout}>
        <Button
          name="Checkout"
          left={false}
          right={true}
          cart={false}
          href="/thank-you"
        />{" "}
      </div>
    </div>
  );
};

export default AddCart;
