// src/types/App.tsx
export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export interface Order {
  id: number;
  customer: string;
  total: number;
  status: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}