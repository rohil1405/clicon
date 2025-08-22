import { ProductFeatureProps } from "./ProductFeatureProps";

export default interface ProductFeatureState {
  items: ProductFeatureProps[];
  loading: boolean;
  error: string | null;
}