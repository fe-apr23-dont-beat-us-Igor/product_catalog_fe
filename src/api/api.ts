import { ProductCollection } from '../Types/products.types';
import { client } from './axiosClient';

interface Phone {
  id: number;
}

export const getPhones = () => {
  return client.get<any[]>(`/products`);
};

export const getProducts = <T>(params: string = '') => {
  console.log(`/products?${params}`);
  return client.get<T>(`/products?${params}`);
};
