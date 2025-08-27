import Banner from "@/components/Banner/Banner";
import ProductListing from "@/components/Product/ProductListing";
import ProductFeature from "@/components/ProductFeature/ProductFeature";
import Section from "@/components/Section/Section";
import SeoHead from "@/components/SeoHead/SeoHead";
import ProductProps from "@/models/ProductProps";

interface ProductPageProps {
  data: {
    products: ProductProps[];
    topRatedProducts: ProductProps[];
    premiumProducts: ProductProps[];
  };
}

export default function ProductsPage({ data }: ProductPageProps) {
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

      {/* product-slider start */}
      <Banner products={data.products}></Banner>
      {/* product-slider end */}

      {/* product feature start */}
      <Section
        title="Product Features"
        description="Explore the key benefits and unique qualities that make our products stand out.
     "
      >
        <ProductFeature />
      </Section>
      {/* product feature end */}

      {/* premium-product start */}
      <Section
        title="Premium Product"
        description="Handpicked premium selections crafted with superior materials and exceptional attention to detail."
      >
        <ProductListing products={data.topRatedProducts} />
      </Section>
      {/* premium-product end */}

      {/* top-rated section start */}
      <Section
        title="Top Rated Products"
        description=" Discover the most loved products, highly rated by our customers
              for their quality and value."
      >
        <ProductListing products={data.topRatedProducts} />
      </Section>
      {/* top-rated section end */}
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch(
      `${process.env.CLICON_PRODUCT_WEBSITE_URL}?limit=100`
    );
    const data = await response.json();
    const topRatedProducts = data.products
      .filter((p: { rating: number }) => p.rating > 4.5)
      .slice(0, 9);

    const premiumProducts = data.products
      .filter((p: { price: number }) => p.price > 800)
      .slice(0, 9);
    return {
      props: {
        data: {
          products: data.products,
          topRatedProducts,
          premiumProducts,
        },
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        data: { products: [], topRatedProducts: [], premiumProducts: [] },
      },
    };
  }
}
