export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating?: number;
  reviewerName?: string;
  comment?: string;
  date?: string;
}

export interface Meta {
  qrCode?: string;
}

export interface ProductDetailProps {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  thumbnail?: string;
  images?: string[];
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  minimumOrderQuantity?: number;
  returnPolicy?: string;
  meta?: Meta;
  reviews?: Review[];
}


