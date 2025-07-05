export interface Product {
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  discount?: number;
  description: string;
  detailedDescription: string;
  images: string[];
  colors: string[];
  gender: string,
  image: string, 
  hoverImage: string
  in_out_stock: string;
}

export interface ProductCardProps {
  product: Product;
  categoryLabel: Product["category"];
}
export type ProductWithId = Product & { id: string };
