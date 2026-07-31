export interface Product {
  _id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  stock?: number;
}