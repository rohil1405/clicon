import classes from "./product-details.module.css";
import { ProductDetailProps } from "@/models/ProductDetailProps";

const ProductContent = (props: ProductDetailProps) => {
  return (
    <ul className={classes.list}>
      <li>
        Sku: <span>{props.sku}</span>
      </li>
      <li>
        Availability:{" "}
        <span className={classes.green}>{props.availabilityStatus}</span>
      </li>
      {props.brand && (
        <li>
          Brand: <span>{props.brand}</span>
        </li>
      )}
      <li>
        Category: <span>{props.category}</span>
      </li>
      <li>
        Stock: <span>{props.stock}</span>
      </li>
      <li>
        Weight: <span>{props.weight}</span>
      </li>
      {props.tags && props.tags.length > 0 && (
        <li>
          Tags: <span>{props.tags.join(", ")}</span>
        </li>
      )}
    </ul>
  );
}

export default ProductContent;
