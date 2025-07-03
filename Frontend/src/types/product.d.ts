export interface Product {
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  discount?: number;
  description: string;
  images: string[];
  colors: string[];
  gender: string,
  image: string, 
  hoverImage: string
}

export interface ProductCardProps {
  product: Product;
  categoryLabel: Product["category"];
}
