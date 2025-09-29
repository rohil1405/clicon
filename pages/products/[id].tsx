import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import SeoHead from "@/components/SeoHead/SeoHead";
import ProductDetail from "@/components/ProductDetails/ProductDetails";
import { NoProduct } from "@/components/NoProduct/NoProduct";
import Request from "@/utils/Request";
import { ProductDetailProps } from "@/models/ProductDetailProps";

interface ProductPageProps {
  product: ProductDetailProps | null;
}

const DetailPage = ({ product }: ProductPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p className="loader">Loading...</p>;
  }

  if (!product) {
    return <NoProduct />;
  }

  return (
    <>
      <SeoHead
        seoData={{
          title: `${product.title} - Clicon`,
          description: product.description ?? "Explore product details on Clicon.",
          keywords: `${product.title}, ${product.brand}, ${product.category}`,
          canonical: `/products/${product.id}`,
          robots: "index, follow",
          og: {
            title: product.title ?? "Clicon Product",
            description: product.description ?? "Explore product details on Clicon.",
            image: product.thumbnail ?? "/images/seo-img.png",
          },
        }}
      />

      <ProductDetail product={product} />
    </>
  );
}

export default DetailPage;

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async (
  context
) => {
  const { id } = context.params as { id: string };

  try {
    const response = await Request({
      url: `${process.env.CLICON_PRODUCT_WEBSITE_URL}/${id}`,
      configuration: { method: "GET" },
    });

    if (!response?.data) {
      return { props: { product: null } };
    }

    return {
      props: {
        product: response.data as ProductDetailProps,
      },
    };
  } catch (error) {
    return {
      props: { product: null },
    };
  }
};
