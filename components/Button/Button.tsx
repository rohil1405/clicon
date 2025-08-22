import Link from "next/link";
import Image from "next/image";
import { ButtonProps } from "@/models/ButtonProps";

const Button: React.FC<ButtonProps> = ({
  name,
  left,
  right,
  cart,
  href,
  ...rest
}) => {
  return (
    <div className="cta">
      <Link href={href} className="btn" {...rest}>
        {left && (
          <Image
            width={20}
            height={20}
            alt="arrow-left"
            src="/images/ArrowLeft.svg"
          />
        )}

        {name}

        {right && (
          <Image
            width={20}
            height={20}
            alt="arrow-right"
            src="/images/ArrowRight.svg"
          />
        )}

        {cart && (
          <Image
            src="/images/ShoppingCartSimple.svg"
            width={24}
            height={24}
            alt="add-to-cart"
          />
        )}
      </Link>
    </div>
  );
};

export default Button;
