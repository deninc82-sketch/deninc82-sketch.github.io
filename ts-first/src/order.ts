import type { Product } from './types.js';

export function calculateTotal(products: Product[]): number {
  return products.reduce((sum, item) => sum + item.price, 0);
}
