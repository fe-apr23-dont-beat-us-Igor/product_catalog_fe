import { Product } from "./products.types";

export interface Cart {
  products: Product[];
  add: () => {};
  remove: () => {};
  getSum: () => {};
}

export interface CartProduct {
id: number,
name: string,
capacity: string,
priceRegular: number,
priceDiscount: number,
count: number,
}