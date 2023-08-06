// export interface Product {
//   id: number;
//   itemId: string;
//   category: string;
//   name: string;
//   capacity: string;
//   fullPrice: number;
//   color: string;
//   price: number;
//   screen: string;
//   ram: string;
//   year: string;
//   image_id: number;
// }
export interface Product {
  id: number;
  itemId: string;
  name: string;
  category: string;
  price: number;
  fullPrice: number;
  screen: string;
  capacity: string;
  ram: string;
  color: string;

  image_id: number;
  image_catalog: string;

  year: number;
  description: string;
}

export type ProductID = Pick<Product, 'itemId'>;
export type ProductImgId = Pick<Product, 'image_id'>;

export interface ProductCollection {
  count: number;
  rows: Product[];
}
