import Link from "next/link";
import Image from "next/image";
import classes from "./Header.module.css";
import { SocialLink } from "@/models/SocialProps";
import { JSX } from "react";

const HeaderBottom = (): JSX.Element => {
  const bottomSocials: SocialLink[] = [
    {
      src: "/images/ShoppingCartSimple.svg",
      alt: "Cart",
      href: "/cart",
    },
    {
      src: "/images/Heart.svg",
      alt: "Heart",
      href: "/favourites",
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
            {bottomSocials.map(({ src, alt, href }) => (
              <Link href={href} key={alt}>
                <Image src={src} alt={alt} width={32} height={32} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
