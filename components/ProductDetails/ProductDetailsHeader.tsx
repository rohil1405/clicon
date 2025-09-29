import classes from "./product-details.module.css";
import Link from "next/link";
import Image from "next/image";
import { ProductDetailProps } from "@/models/ProductDetailProps";

const ProductDetailHeader = (props:ProductDetailProps) => {
  return (
    <div className={classes.header}>
      <ul>
        <li>
          <Link href="/">
            <Image src="/images/House.svg" width={20} height={20} alt="home" />
            Home
          </Link>
        </li>
        <li>
          <Link href="/products">Shop</Link>
        </li>
        <li className={classes.active}>{props.title}</li>
      </ul>
    </div>
  );
}

export default ProductDetailHeader;
