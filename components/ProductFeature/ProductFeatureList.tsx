import ProductFeatureItem from "./ProductFeatureItem";
import classes from "./ProductFeature.module.css";
import type { ProductFeatureProps } from "@/models/ProductFeatureProps";

interface ProductFeatureListProps {
  items: ProductFeatureProps[];
}

const ProductFeatureList = ({ items }: ProductFeatureListProps) => {
  return (
    <div className={classes.features}>
      <div className="container">
        <ul>
          {items.map((feature) => (
            <ProductFeatureItem
              key={feature.id}
              id={feature.id}
              title={feature.title}
              image={feature.image}
              feature={feature.feature}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductFeatureList;
