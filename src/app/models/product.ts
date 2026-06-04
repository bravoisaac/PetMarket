export type PetCategory = 'Perros' | 'Gatos' | 'Aves' | 'Roedores' | 'Cuidado';

export interface Product {
  id: number;
  name: string;
  category: PetCategory;
  description: string;
  price: number;
  previousPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge: string;
  stock: number;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
