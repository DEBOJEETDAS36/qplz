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

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "project" | "product" | "student";
}