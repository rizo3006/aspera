export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Playera Built To Glorify",
    slug: "playera-built-to-glorify",
    price: 499,
    image: "/products/shirt1.jpg",
    category: "Playeras",
    featured: true,
  },
  {
    id: 2,
    name: "Cadena Cross",
    slug: "cadena-cross",
    price: 599,
    image: "/products/chain1.jpg",
    category: "Cadenas",
    featured: true,
  },
  {
    id: 3,
    name: "Pulsera Premium",
    slug: "pulsera-premium",
    price: 349,
    image: "/products/bracelet1.jpg",
    category: "Pulseras",
    featured: true,
  },
  {
    id: 4,
    name: "Gorra Aspera",
    slug: "gorra-aspera",
    price: 449,
    image: "/products/cap1.jpg",
    category: "Accesorios",
    featured: true,
  },
];