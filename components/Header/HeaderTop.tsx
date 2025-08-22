import Link from "next/link";
import Image from "next/image";
import classes from "./Header.module.css";
import { JSX } from "react";
import { SocialLink } from "@/models/SocialProps";

const HeaderTop = (): JSX.Element => {
  const socials: SocialLink[] = [
    {
      href: "https://www.twitter.com",
      src: "/images/Twitter.svg",
      alt: "Twitter",
    },
    {
      href: "https://www.facebook.com",
      src: "/images/Facebook.svg",
      alt: "Facebook",
    },
    {
      href: "https://www.pinterest.com",
      src: "/images/Pinterest.svg",
      alt: "Pinterest",
    },
    {
      href: "https://www.reddit.com",
      src: "/images/Reddit.svg",
      alt: "Reddit",
    },
    {
      href: "https://www.youtube.com",
      src: "/images/Youtube.svg",
      alt: "Youtube",
    },
    {
      href: "https://www.instagram.com",
      src: "/images/Instagram.svg",
      alt: "Instagram",
    },
  ];

  return (
    <div className={classes["header-top"]}>
      <div className="container">
        <div
          className={`${classes["header-top-content"]} ${classes["header-content"]}`}
        >
          <div>
            <p>Welcome to Clicon online eCommerce store.</p>
          </div>
          <div
            className={`${classes["header-right"]} ${classes["header-right-top"]}`}
          >
            <div className={classes["header-list"]}>
              <p>Follow us:</p>
              <div className={classes["header-follow"]}>
                {socials.map(({ href, alt, src }) => (
                  <Link href={href} key={alt} target="_blank">
                    <Image src={src} alt={alt} width={20} height={20} />
                  </Link>
                ))}
              </div>
            </div>
            <Link href="tel:+12025550104" className={classes["header-contact"]}>
              <Image
                src="/images/PhoneCall.svg"
                alt="PhoneCall"
                width={28}
                height={28}
              />
              <span>+1-202-555-0104</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
