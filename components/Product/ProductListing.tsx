
import classes from "./ProductListing.module.css";
import Link from "next/link";
import Image from "next/image";
import ProductProps from "@/models/ProductProps";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  productFavoritesActions,
  productCartActions,
} from "@/store/slice/Product";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

interface ProductListingProps {
  products: ProductProps[];
}

const ProductListing: React.FC<ProductListingProps> = ({ products }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.productFavorites);
  const cart = useSelector((state: RootState) => state.productCart); 

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const toggleFavorite = (product: ProductProps) => {
    const isFavorite = favorites.some((f) => f.id === product.id);

    if (isFavorite) {
      Swal.fire({
        title: "Are you sure?",
        text: `${product.title} will be removed from your favorites.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#fa8232",
        cancelButtonColor: "#dc3545",
        confirmButtonText: "Yes, remove it",
        cancelButtonText: "No, keep it",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(productFavoritesActions.remove(product.id));
          Swal.fire({
            title: "Removed!",
            text: `${product.title} has been removed from favorites.`,
            icon: "success",
            confirmButtonColor: "#fa8232",
          });
        }
      });
    } else {
      dispatch(productFavoritesActions.add(product));
      Swal.fire({
        title: "Added!",
        text: `${product.title} has been added to your favorites.`,
        icon: "success",
        confirmButtonColor: "#fa8232",
      });
    }
  };

  const toggleCart = (product: ProductProps) => {
    const cartItem = cart.find((c) => c.id === product.id);

    if (cartItem) {
      dispatch(productCartActions.add(product));
      Swal.fire({
        title: "Quantity Updated!",
        text: `Quantity of "${product.title}" is now ${cartItem.quantity + 1}.`,
        icon: "success",
        confirmButtonColor: "#fa8232",
      });
    } else {
      dispatch(productCartActions.add(product));
      Swal.fire({
        title: "Added to Cart!",
        text: `"${product.title}" has been added to your cart.`,
        icon: "success",
        confirmButtonColor: "#fa8232",
      });
    }
  };

  if (!mounted) {
    return (
      <ul className={classes.list}>
        {products.map((p) => (
          <li key={p.id} className={classes.item}>
            <button className="">🤍</button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={classes.list}>
      {products.map((p) => {
        const isFavorite = favorites.some((f) => f.id === p.id);
        const exploreProduct = `/products/${p.id}`;
        const cartItem = cart.find((c) => c.id === p.id);

        return (
          <li key={p.id} className={classes.item}>
            <div className={classes.image}>
              <Image src={p.thumbnail} alt={p.title} width={316} height={288} />
              <button
                onClick={() => toggleFavorite(p)}
                className={isFavorite ? "fav-active" : ""}
              >
                {isFavorite ? "❤️" : "🤍"}
              </button>
            </div>

            <div className={classes.content}>
              <Link href={exploreProduct} className="h5 title">
                {p.title}
              </Link>
              <p>{p.description}</p>
              <div className={classes.price}>${p.price}</div>
              <div className={classes.discount}>
                {p.discountPercentage}% OFF
              </div>

              <div className={classes.cta} onClick={() => toggleCart(p)}>
                <div className="btn" style={{ display: "flex" }}>
                  {cartItem ? `Add More` : "Add to cart"}
                  <Image
                    src="/images/ShoppingCartSimple.svg"
                    width={24}
                    height={24}
                    alt="add-to-cart"
                  />
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductListing;
