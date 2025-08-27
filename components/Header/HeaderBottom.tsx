import Link from "next/link";
import Image from "next/image";
import classes from "./Header.module.css";
import { SocialLink } from "@/models/SocialProps";
import { JSX } from "react";
import useHeaderCount from "@/hooks/useHeaderCount";

const HeaderBottom = (): JSX.Element => {
  const { favCount, cartCount } = useHeaderCount();
  const bottomSocials: SocialLink[] = [
    {
      src: "/images/ShoppingCartSimple.svg",
      alt: "Cart",
      href: "/cart",
      count: cartCount,
    },
    {
      src: "/images/Heart.svg",
      alt: "Heart",
      href: "/favourites",
      count: favCount,
    },
  ];

  return (
    <div className={classes["header-bottom"]}>
      <div className="container">
        <div className={classes["header-content"]}>
          <Link href="/" className={classes["header-logo"]}>
            <Image
              src="/images/main-logo.svg"
              alt="main-logo"
              width={177}
              height={48}
              priority
            />
          </Link>
          <div className={classes["header-right"]}>
            {bottomSocials.map(({ src, alt, href, count }) => (
              <Link href={href} key={alt}>
                <Image src={src} alt={alt} width={32} height={32} />
                {count > 0 && <span className={classes.badge}>{count}</span>}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
