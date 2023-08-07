import { Product } from "./products.types";

// export interface CartProduct {
// id: number,
// name: string,
// capacity: string,
// priceRegular: number,
// priceDiscount: number,
// count: number,
// }

export interface ProductInCart {
    quantity: number;
    product: Product;
  }
  