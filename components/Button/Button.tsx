import Link from "next/link";
import Image from "next/image";
import { ButtonProps } from "@/models/ButtonProps";

const Button: React.FC<ButtonProps> = ({
  name,
  left,
  right,
  cart,
  href,
  isActive,
  ...rest
}) => {
  return (
   <div className="cta">
  <Link
    href={href}
    className="btn"
    tabIndex={isActive ? 0 : -1} 
    aria-label={`${left ? "Arrow left, " : ""}${name}${
      right ? ", Arrow right" : ""
    }${cart ? ", Add to cart" : ""}`} 
    {...rest}
  >
    {left && (
      <Image
        width={20}
        height={20}
        alt="Arrow left"
        src="/images/ArrowLeft.svg"
      />
    )}

    {name}

    {right && (
      <Image
        width={20}
        height={20}
        alt="Arrow right"
        src="/images/ArrowRight.svg"
      />
    )}

    {cart && (
      <Image
        src="/images/ShoppingCartSimple.svg"
        width={24}
        height={24}
        alt="Add to cart"
      />
    )}
  </Link>
</div>
  );
};

export default Button;
