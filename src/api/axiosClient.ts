import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const BASE_URL = 'https://product-catalog-be-1l77.onrender.com';

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null,
): Promise<T> {
  const config: AxiosRequestConfig = {
    url: BASE_URL + url,
    method,
    // withCredentials: true,
  };

  if (data) {
    config.data = data;
    config.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
    
  }

  return axios(config).then((response: AxiosResponse) => response.data);
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
  patch: <T>(url: string, data: any) => request<T>(url, 'PATCH', data),
  delete: (url: string) => request<void>(url, 'DELETE'),
};
