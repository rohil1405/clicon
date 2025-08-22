import Image from "next/image";
import Button from "@/components/Button/Button";
import SeoHead from "@/components/SeoHead/SeoHead";
import SeoDataProps from "@/models/SeoDataProps";
import { JSX } from "react";

export default function NotFoundPage(): JSX.Element {
  const seoData: SeoDataProps["seoData"] = {
    title: "404 - Page Not Found | Clicon Store",
    description:
      "The page you are looking for does not exist. It may have been removed or the link is broken.",
    keywords: "404, page not found, error, missing page, Clicon",
    og: {
      title: "404 - Page Not Found",
      description:
        "Oops! The page you are looking for doesn’t exist. Go back to the homepage.",
      image: "/images/404.png",
    },
  };

  return (
    <>
      <SeoHead seoData={seoData} />

      <div className="not-found-wrap">
        <div className="container">
          <div className="not-found">
            <Image
              src="/images/404.png"
              width={500}
              height={327}
              alt="404 page"
            />
            <div className="not-found-content">
              <h1 className="h3">404, Page not found</h1>
              <p>
                Something went wrong. It looks like your requested page could
                not be found. The link may be broken or the page has been
                removed.
              </p>
              <Button
                name="Go Back"
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
}
