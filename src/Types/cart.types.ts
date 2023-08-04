import { Product } from '../components/Catalog/Catalog_Types';

export interface Cart {
  products: Product[];
  add: () => {};
  remove: () => {};
  getSum: () => {};
}
