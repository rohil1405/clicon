import Image from "next/image";
import Button from "@/components/Button/Button";
import SeoHead from "@/components/SeoHead/SeoHead";
import SeoDataProps from "@/models/SeoDataProps";
import { JSX } from "react";

const ThankYouPage = (): JSX.Element => {
  const seoData: SeoDataProps["seoData"] = {
    title: "Thank You | Clicon Store",
    description:
      "Thank you for your purchase at Clicon Store. Your order has been placed successfully.",
    keywords: "thank you, order success, Clicon",
    og: {
      title: "Thank You - Clicon Store",
      description:
        "Your order was placed successfully. Thank you for shopping with Clicon!",
      image: "/images/thankyou.png",
    },
  };

  return (
    <>
      <SeoHead seoData={seoData} />

      <div className="not-found-thank-wrap">
        <div className="container">
          <div className="not-found-thank">
            <Image
              src="/images/thankyou.png"
              width={612}
              height={408}
              alt="thank-you"
            />
            <div className="not-found-thank-content">
              <h1 className="h3">Thank You!</h1>
              <p>
                Your order has been placed successfully. We’ll send you an
                update once it’s shipped. Meanwhile, feel free to continue
                shopping.
              </p>
              <Button
                name="Shop Now"
                left={true}
                right={false}
                cart={false}
                href="/"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
