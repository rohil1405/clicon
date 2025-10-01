
import { useState } from "react";
import Image from "next/image";
import classes from "./product-details.module.css";

interface ProductLeftProps {
  title: string;
  thumbnail: string;
}

const ProductLeft = ({ title, thumbnail }: ProductLeftProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={classes.left}>
      {loading && <p className="loader"></p>}

      <Image
        src={thumbnail}
        alt={title}
        width={616}
        height={584}
        className={`${classes.productImg} ${loading ? classes.hidden : ""}`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}

export default ProductLeft;
