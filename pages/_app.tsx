import "../styles/globals.css";
import Layout from "@/layouts/Layout";
import SeoHead from "@/components/SeoHead/SeoHead";
import type { AppProps } from "next/app";
import { JSX } from "react";
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const defaultMeta = {
    seoData: {
      title: "Clicon - Next.js eCommerce",
      description: "Clicon online store. Browse a wide variety of products.",
      keywords: "Clicon, eCommerce, products, online store",
      og: {
        title: "Clicon Store",
        description: "Shop the latest products at Clicon online store.",
        image: "/images/main-logo.svg",
      },
    },
  };

  return (
    <Layout>
      <SeoHead seoData={defaultMeta.seoData} />
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
