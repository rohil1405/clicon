import classes from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function FooterTop() {
  return (
    <div className={classes["footer-top"]}>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.left}>
            <div>
              <div className="footer-logo">
                <Link href="/">
                  <Image
                    src="/images/footer-logo.svg"
                    alt="footer-logo"
                    width={177}
                    height={48}
                  />
                </Link>

                <ul>
                  <li>
                    <Link href="tel:6295550129">(629) 555-0129</Link>
                  </li>
                  <li>
                    <Link href="" target="_blank">
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info@kinbo.com">info@kinbo.com</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className={classes["footer-text"]}>Quick Links</div>
              <ul>
                <li>
                  <Link href="/products">Shop</Link>
                </li>
                <li>
                  <Link href="/favourites">Favourites</Link>
                </li>

                <li>
                  <Link href="/cart">Add to cart</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes["footer-text"]}>Download App</div>
            <ul>
              <li>
                <Link href="https://play.google.com" target="_blank">
                  <Image
                    alt="play-store"
                    src="/images/icon.svg"
                    width={32}
                    height={32}
                  />

                  <div>
                    <div className={classes["get-it"]}>Get it now</div>
                    <p>Google Play</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="https://play.google.com" target="_blank">
                  <Image
                    alt="play-store"
                    src="/images/apple.svg"
                    width={32}
                    height={32}
                  />

                  <div>
                    <div className={classes["get-it"]}>Get it now</div>
                    <p>App Store</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
