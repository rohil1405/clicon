
import ProductContent from "./ProductContent";
import classes from "./product-details.module.css";
import ProductPrice from "./ProductPrice";
import Image from "next/image";
import { ProductDetailProps } from "@/models/ProductDetailProps";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  productFavoritesActions,
  productCartActions,
} from "@/store/slice/Product";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ProductRight = (props: ProductDetailProps) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.productFavorites);
  const cart = useSelector((state: RootState) => state.productCart);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isFavorite = favorites.some((f) => f.id === props.id);
  const isCart = cart.some((c) => c.id === props.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      Swal.fire({
        title: "Are you sure?",
        text: `${props.title} will be removed from your favorites.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#fa8232",
        cancelButtonColor: "#dc3545",
        confirmButtonText: "Yes, remove it",
        cancelButtonText: "No, keep it",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(productFavoritesActions.remove(props.id));
          Swal.fire({
            title: "Removed!",
            text: `${props.title} has been removed from favorites.`,
            icon: "success",
            confirmButtonColor: "#fa8232",
          });
        }
      });
    } else {
      dispatch(productFavoritesActions.add(props));
      Swal.fire({
        title: "Added!",
        text: `${props.title} has been added to your favorites.`,
        icon: "success",
        confirmButtonColor: "#fa8232",
      });
    }
  };

  const toggleCart = () => {
    if (isCart) {
      Swal.fire({
        title: "Are you sure?",
        text: `${props.title} will be removed from your cart.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#fa8232",
        cancelButtonColor: "#dc3545",
        confirmButtonText: "Yes, remove it",
        cancelButtonText: "No, keep it",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(productCartActions.remove(props.id));
          Swal.fire({
            title: "Removed!",
            text: `${props.title} has been removed from cart.`,
            icon: "success",
            confirmButtonColor: "#fa8232",
          });
        }
      });
    } else {
      dispatch(productCartActions.add(props));
      Swal.fire({
        title: "Added!",
        text: `${props.title} has been added to your cart.`,
        icon: "success",
        confirmButtonColor: "#fa8232",
      });
    }
  };

  if (!mounted) {
    return (
      <div className={classes.right}>
        <button disabled className="">
          🤍
        </button>
      </div>
    );
  }

  return (
    <div className={classes.right}>
      <button
        onClick={toggleFavorite}
        className={isFavorite ? "fav-active" : ""}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      <div className={classes.rating}>{props.rating} <span>Star Rating</span></div>
      <h1 className="h2">{props.title}</h1>
      <h2 className="h6">{props.description}</h2>

      <ProductContent {...props} />
      <ProductPrice
        price={props.price}
        discountPercentage={props.discountPercentage}
      />

      <div className={classes.cta} onClick={toggleCart}>
        <div className="btn" style={{ display: "flex" }}>
          {isCart ? "Remove from cart" : "Add to cart"}
          <Image
            src="/images/ShoppingCartSimple.svg"
            width={24}
            height={24}
            alt="add-to-cart"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductRight;
