export default interface SeoDataProps {
  seoData: {
    title: string;
    description: string;
    keywords: string;
    og: {
      title: string;
      description: string;
      image?: string;
    };
    canonical?: string;
    robots?: string; 
    twitter?: {
      card?: "summary" | "summary_large_image";
      site?: string; 
      image?: string;
    };
  };
}
