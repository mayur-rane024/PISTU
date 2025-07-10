import { Timestamp } from "firebase/firestore";

export type UserDetails = {
  displayName: string;
  email: string;
  emailVerified: boolean;
  phoneNumber: number;
  photoURL: string;
  uid: string;
};

export type Theme = "light" | "dark" | "system";

export interface CartItemProps {
  item: {
    bookId: string;
    title: string;
    imageUrl: string;
    price: number;
    discountedPrice: number;
    quantity: number;
  };
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export interface CartProduct {
  bookId: string;
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;
  HSNcode: string;
  author: string;
  createdAt: Timestamp;
  description: string;
  discount: number;
  discountedPrice: number;
  inStock: boolean;
}

export interface OrdersProps {
  address: string;
  grandTotal: number;
  mobile: number;
  orderDate: Timestamp;
  orderId: string;
  paymentStatus: boolean;
  totalQuantity: number;
  userEmail: string;
  userId: string;
  username: String;
}

export type orders = {
  IsShipped: boolean;
  ShippingCompany: string;
  TrackingNumber: string;
  address: string;
  author: string;
  bookId: string;
  imageUrl: string;
  mobile: number;
  orderId: string;
  price: number;
  quantity: number;
  title: string;
  totalPrice: number;
  userEmail: string;
  userId: string;
  username: string;
};
