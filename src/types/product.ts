export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  comparePrice?: number;
  category: string;
  image: string;
  featured: boolean;
  stock: number;
  rating: number;
}