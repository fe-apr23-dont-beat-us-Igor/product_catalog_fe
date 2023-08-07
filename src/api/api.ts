import {
  FullProductInformation,
  Product,
  ProductCollection,
  ProductID,
  ProductImgId,
  ProductLinks,
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

export const getProductsById = async (id: string | undefined) => {
  if (!id) throw Error();

  try {
    const { product, productLinks } = await client.get<FullProductInformation>(
      `/products/${id}`,
    );

    product.image_catalog = setImgUrl(product.image_catalog);

    const updatedProductLinks: ProductLinks = {};

    Object.entries(productLinks).forEach(([key, value]) => {
      console.log(typeof value);
      if (typeof value === 'string' && value !== 'null') {
        updatedProductLinks[key] = setImgUrl(value);
      } else {
        updatedProductLinks[key] = value;
      }
    });

    return { product, productLinks: updatedProductLinks };
  } catch {
    throw Error();
  }
};

export const getProductCollectionByIds = (ids: string[]) => {
  return client.post<Product[]>('/cart-items', { ids });
};
