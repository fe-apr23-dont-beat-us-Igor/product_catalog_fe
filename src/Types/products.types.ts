export interface Product {
  id: number;
  itemId: string;
  name: string;
  category: string;
  price: number;
  fullPrice: number;
  screen: string;
  capacity: string;
  available_capacity: string,
  ram: string;
  color: string;
  available_colors: string,

  image_id: number;
  image_catalog: string;
  year: number;
  description: string;
}

export interface ProductLinks {
  [key: string]: string | undefined;
  // [key: string]: string | null | number;
}
export interface FullProductInformation {
  product: Product;
  productLinks: ProductLinks;
}

export type ProductID = Pick<Product, 'itemId'>;
export type ProductImgId = Pick<Product, 'image_id'>;

export interface ProductCollection {
  count: number;
  rows: Product[];
}
