import ProductFeature from "@/components/ProductFeature/ProductFeature";
import SeoHead from "@/components/SeoHead/SeoHead";

const Home = () => {
  return (
    <>
      <SeoHead
        seoData={{
          title: "Home - Clicon",
          description:
            "Welcome to Clicon homepage built with Next.js + TypeScript.",
          keywords: "Clicon, Next.js, SEO, TypeScript",
          canonical: "home",
          robots: "index, follow",
          og: {
            title: "Clicon - Home",
            description:
              "Welcome to Clicon homepage built with Next.js + TypeScript.",
            image: "/images/seo-img.png",
          },
        }}
      />
      <ProductFeature />
    </>
  );
};

export default Home;
