import { Product } from 'src/products/Products';

/* eslint-disable prettier/prettier */
export interface Dish {
  id: number;
  name: string;
  servings: number;
  description?: string;
  products: Product[];
}
