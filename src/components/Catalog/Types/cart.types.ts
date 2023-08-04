import { Product } from '../Catalog_Types';

export interface Cart {
  products: Product[];
  add: () => {};
  remove: () => {};
  getSum: () => {};
}
