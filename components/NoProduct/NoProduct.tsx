import Image from "next/image";
import Button from "../Button/Button";

export const NoProduct = () => {
  return (
    <div className="no-product">
      <Image
        src="/images/no-product.png"
        width={600}
        height={600}
        alt="no-product"
        className="no-product-img"
      />

      <Button name="Go back" left={true} right={false} cart={false} href="/" />
    </div>
  );
};
