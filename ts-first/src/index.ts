const message: string = "Середовище TypeScript успішно налаштовано!";
console.log(message);
console.log(message);
import { calculateTotal } from './order.js';
import type { Product } from './types.js';

const cart: Product[] = [
  { id: 1, title: 'Ноутбук', price: 35000 },
  { id: 2, title: 'Мишка', price: 1200 },
];

console.log('Загальна сума:', calculateTotal(cart));