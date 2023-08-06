import {
  Product,
  ProductCollection,
  ProductID,
  ProductImgId,
} from '../Types/products.types';
import { client } from './axiosClient';

interface Phone {
  id: number;
}

export const getProductImg = (imgId: string) => {
  return client.get(`/images/${imgId}`);
};

const setImgUrl = (imgEndpoint: string) =>
  `https://product-catalog-be-1l77.onrender.com/images/${imgEndpoint}`;

export const getProducts = async (params: string = '') => {
  try {
    const products = await client.get<ProductCollection>(`/products?${params}`);

    products.rows.map(
      (product) => (product.image_catalog = setImgUrl(product.image_catalog)),
    );

    return products;
  } catch {
    throw Error();
  }
};

export const getNewProducts = async (params: string = '') => {
  try {
    const products = await client.get<ProductCollection>(
      `/products/new?${params}`,
    );

    products.rows.map(
      (product) => (product.image_catalog = setImgUrl(product.image_catalog)),
    );
    console.log(products);

    return products;
  } catch {
    throw Error();
  }
};

// export const getProducts = <T>(params: string = '') => {
//   return client.get<T>(`/products?${params}`);
// };

export const getProductsById = <T>(id: ProductID) => {
  return client.get<T>(`/products/${id}`);
};
