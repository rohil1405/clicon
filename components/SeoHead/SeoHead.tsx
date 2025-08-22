import Head from "next/head";
import SeoDataProps from "@/models/SeoDataProps";
import { useRouter } from "next/router";
import { JSX } from "react";

const SeoHead = ({ seoData }: SeoDataProps):JSX.Element => {
  const router = useRouter();

  const base = process.env.CLICON_WEBSITE_URL || "";
  const canonical = `${base}${router.asPath.split("?")[0]}`;

  return (
    <Head>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords} />

      {seoData.canonical && <link rel="canonical" href={canonical} />}
      {seoData.robots && <meta name="robots" content={seoData.robots} />}

      <meta property="og:title" content={seoData.og.title} />
      <meta property="og:description" content={seoData.og.description} />
      {seoData.og.image && (
        <meta property="og:image" content={seoData.og.image} />
      )}

      {seoData.twitter && (
        <>
          <meta
            name="twitter:card"
            content={seoData.twitter.card || "summary"}
          />
          {seoData.twitter.site && (
            <meta name="twitter:site" content={seoData.twitter.site} />
          )}
          {seoData.twitter.image && (
            <meta name="twitter:image" content={seoData.twitter.image} />
          )}
        </>
      )}
      {/* {seoData.googleSiteVerification && (
        <meta
          name="google-site-verification"
          content={seoData.googleSiteVerification}
        />
      )} */}
    </Head>
  );
}

export default SeoHead;
