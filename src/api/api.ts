import { ProductCollection } from '../components/Catalog/Catalog_Types';
import { client } from './axiosClient';

interface Phone {
  id: number;
}

export const getPhones = () => {
  return client.get<any[]>(`/products`);
};

export const getSomeProducts = <T>(params: string = '?limit=16&page=1') => {
  console.log(`/products?${params}`);
  return client.get<T>(`/products?${params}`);
};

type Category = string | '';

export const getPhonesByCategory = (page: number, category: Category) => {
  return client.get<Phone[]>(`/phones?page=${page}&category${category}`);
};

export const getPhoneById = (id: number) => {
  return client.get<Phone[]>(`/phones/${id}`);
};
