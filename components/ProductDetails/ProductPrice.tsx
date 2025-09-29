import classes from "./product-details.module.css";
import { ProductDetailProps } from "@/models/ProductDetailProps";

type ProductPriceProps = Pick<ProductDetailProps, "price" | "discountPercentage">;

const ProductPrice = ({ price, discountPercentage }: ProductPriceProps) => {
  const discountedPrice = price - (price * discountPercentage) / 100;

  return (
    <div className={classes.price}>
      <div className={classes.finalPrice}>${discountedPrice.toFixed(2)}</div>
      <div className={classes.originalPrice}>${price.toFixed(2)}</div>
      <div className={classes.discount}>-{discountPercentage}%</div>
    </div>
  );
}


export default ProductPrice;