import axios from 'axios';
import {
  FullProductInformation,
  Product,
  ProductCollection,
  ProductID,
  ProductImgId,
  ProductLinks,
} from '../Types/products.types';
import { AuthToken } from '../components/Auth/AuthForm';
import {
  AuthCredentials,
  RegistrationCredentials,
} from '../components/Auth/RegistrationForm';
import { UsersData } from '../context/AppContext';
import { client } from './axiosClient';
import { getAuthTokenFromCookie } from '../hooks/useAuthToken';

interface Phone {
  id: number;
}

export const getProductImg = (imgId: string) => {
  return client.get(`/images/${imgId}`);
};

export const setImgUrl = (imgEndpoint: string) =>
  `https://product-catalog-be-1l77.onrender.com/images/${imgEndpoint}`;

export const getProducts = async (params: string = '') => {
  try {
    const products = await client.get<ProductCollection>(`/products?${params}`);

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

    return products;
  } catch {
    throw Error();
  }
};

export const getDiscountProducts = async (params: string = '') => {
  try {
    const products = await client.get<ProductCollection>(`/discount?${params}`);

    return products;
  } catch {
    throw Error();
  }
};
export const getRecommendedProducts = async (id: string) => {
  try {
    const products = await client.get<ProductCollection>(
      `/products/${id}/recommended`,
    );

    return products;
  } catch {
    throw Error();
  }
};

export const getProductsById = async (id: string = '') => {
  if (!id) throw Error();

  try {
    const { product, productLinks } = await client.get<FullProductInformation>(
      `/products/${id}`,
    );

    product.image_catalog = setImgUrl(product.image_catalog);

    const updatedProductLinks: ProductLinks = {};

    Object.entries(productLinks)
      .filter(([ket, value]) => value !== 'null')
      .forEach(([key, value]) => {
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

export const getProductCollectionByIds = async (ids: string[]) => {
  return client.post<Product[]>('/cart-items', { ids });
};

export const getInfo = async () => {
  type Info = { [key: string]: number };

  const data = await client.get<Info>(
    'https://product-catalog-be-1l77.onrender.com/info',
  );

  return data;
};

export const sendRegistrationCred = (data: AuthCredentials) => {
  return client.post('/registration', data);
};

export const sendAuthCred = (data: AuthCredentials) => {
  return client.post<AuthToken>('/login', data);
};

export const getUsersData = () => {
  const username = window.localStorage.getItem('username');

  return client.get<UsersData>(`/data/${username}`);
};

export const setUsersData = (key: keyof UsersData, ids: string[]) => {
  const username = window.localStorage.getItem('username');
  const authToken = getAuthTokenFromCookie();

  // return client.patch(`/data/${username}`, {
  return axios.patch(
    `https://product-catalog-be-1l77.onrender.com/data/${username}`,
    { [key]: ids },
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    },
  );
};
// export const setUsersData = (favourites: string[], cart: string[]) => {
//   const username = window.localStorage.getItem('username');

//   // return client.patch(`/data/${username}`, {
//   return client.patch(`/data/newUser@gmail.com`, {
//     favourites: favourites,
//     cart: cart,
//   });
// };
