import ProductListing from "@/components/Product/ProductListing";
import ProductFeature from "@/components/ProductFeature/ProductFeature";
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

      <ProductFeature />

      <div className="product">
        <div className="container">
          <h2>Top Rated ⭐</h2>
          <ProductListing products={data.topRatedProducts} />
        </div>
      </div>

      <section>
        <div className="container">
          <h2>Premium Product 💰</h2>
          <ProductListing products={data.topRatedProducts} />
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch(
      `${process.env.CLICON_PRODUCT_WEBSITE_URL}?limit=50`
    );
    const data = await response.json();
    const topRatedProducts = data.products.filter(
      (p: { rating: number }) => p.rating > 4.5
    );
    const premiumProducts = data.products.filter(
      (p: { price: number }) => p.price > 800
    );
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
