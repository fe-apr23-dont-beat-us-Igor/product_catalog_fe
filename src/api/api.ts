import { client } from './axiosClient';

interface Phone {
  id: number;
}

export const getPhones = (page: number) => {
  return client.get<Phone[]>(`/phones?page=${page}`);
};

type Category = string | '';

export const getPhonesByCategory = (page: number, category: Category) => {
  return client.get<Phone[]>(`/phones?page=${page}&category${category}`);
};

export const getPhoneById = (id: number) => {
  return client.get<Phone[]>(`/phones/${id}`);
};
