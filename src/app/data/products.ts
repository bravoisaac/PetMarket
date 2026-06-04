import { Product } from '../models/product';

export const categories = ['Todos', 'Perros', 'Gatos', 'Aves', 'Roedores', 'Cuidado'] as const;

export const products: Product[] = [
  {
    id: 1,
    name: 'Alimento premium adulto 10 kg',
    category: 'Perros',
    description: 'Croquetas con proteina de pollo, prebioticos y omega 3 para pelaje sano.',
    price: 42990,
    previousPrice: 48990,
    rating: 4.8,
    reviews: 128,
    image: 'assets/products/dog-food.png',
    badge: 'Mas vendido',
    stock: 24,
    featured: true
  },
  {
    id: 2,
    name: 'Arena sanitaria aglomerante 8 kg',
    category: 'Gatos',
    description: 'Control de olor por 14 dias, bajo polvo y granulos suaves para patas sensibles.',
    price: 14990,
    rating: 4.7,
    reviews: 96,
    image: 'assets/products/cat-litter.png',
    badge: 'Control olor',
    stock: 38,
    featured: true
  },
  {
    id: 3,
    name: 'Cama ortopedica lavable M',
    category: 'Perros',
    description: 'Espuma de soporte medio, funda desmontable y base antideslizante.',
    price: 31990,
    previousPrice: 35990,
    rating: 4.9,
    reviews: 74,
    image: 'assets/products/pet-bed.png',
    badge: 'Nuevo',
    stock: 11
  },
  {
    id: 4,
    name: 'Rascador modular con cueva',
    category: 'Gatos',
    description: 'Postes de sisal natural, plataforma superior y refugio acolchado.',
    price: 54990,
    rating: 4.6,
    reviews: 52,
    image: 'assets/products/cat-tree.png',
    badge: 'En oferta',
    stock: 7,
    featured: true
  },
  {
    id: 5,
    name: 'Shampoo hipoalergenico 500 ml',
    category: 'Cuidado',
    description: 'Formula suave para piel sensible con avena, aloe y aroma limpio.',
    price: 8990,
    rating: 4.5,
    reviews: 41,
    image: 'assets/products/shampoo.png',
    badge: 'Piel sensible',
    stock: 45
  },
  {
    id: 6,
    name: 'Mezcla nutritiva para aves 1 kg',
    category: 'Aves',
    description: 'Semillas seleccionadas, vitaminas y minerales para aves domesticas.',
    price: 6990,
    rating: 4.4,
    reviews: 36,
    image: 'assets/products/bird-food.png',
    badge: 'Vitaminas',
    stock: 30
  },
  {
    id: 7,
    name: 'Heno timothy premium 700 g',
    category: 'Roedores',
    description: 'Fibra larga y aromatica para conejos, cobayos y chinchillas.',
    price: 5990,
    rating: 4.8,
    reviews: 63,
    image: 'assets/products/hay.png',
    badge: 'Fibra alta',
    stock: 28
  },
  {
    id: 8,
    name: 'Juguete interactivo dispensador',
    category: 'Perros',
    description: 'Estimula olfato y juego lento con apertura ajustable para snacks.',
    price: 12990,
    rating: 4.6,
    reviews: 89,
    image: 'assets/products/toy.png',
    badge: 'Enriquecimiento',
    stock: 18
  }
];
