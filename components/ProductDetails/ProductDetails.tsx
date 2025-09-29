import ProductTabs from "./ProductTab";
import ProductDetailHeader from "./ProductDetailsHeader";
import classes from "./product-details.module.css";
import ProductLeft from "./ProductLeft";
import ProductRight from "./ProductRight";
import { ProductDetailProps } from "@/models/ProductDetailProps";

interface ProductDetailComponentProps {
  product?: ProductDetailProps; // make optional
}

const ProductDetail = ({ product }: ProductDetailComponentProps) => {
  if (!product) {
    return <p className="loader">Loading product...</p>; 
  }

  return (
    <div className={classes.wrap}>
      <div className="container">
        <ProductDetailHeader {...product} />
        <div className={classes.content}>
          <ProductLeft
            title={product.title ?? ""}
            thumbnail={product.thumbnail ?? ""}
          />
          <ProductRight {...product} />
        </div>
        <ProductTabs product={product} />
      </div>
    </div>
  );
}

export default ProductDetail;
