import { ProductFeatureProps } from "@/models/ProductFeatureProps";
import classes from "./ProductFeature.module.css";
import Image from "next/image";

const ProductFeatureItem = ({ title, feature, id, image }: ProductFeatureProps) => {

  return (
    <li key={id}>
      <div>
        <Image src={"/" + image} alt={title} width={40} height={40} />
      </div>
      <div className={classes.content}>
        <p>{title}</p>
        <p>{feature}</p>
      </div>
    </li>
  );
}

export default ProductFeatureItem;
