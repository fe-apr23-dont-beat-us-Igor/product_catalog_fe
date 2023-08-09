import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SearchParams, getSearchWith } from '../servises/searchParam.servise';
import { getProductImg } from '../api/api';
import { ProductImgId } from '../Types/products.types';

export const useProductsAPI = <T, R>(
  args: R,
  callback: (params: string) => Promise<T>,
): [T | null, boolean, boolean] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);

  const loadData = async () => {
    try {
      setLoading(true);
      // @ts-ignore
      const result: T = await callback(args);

      console.log(result);

      setData(result);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [args]);

  return [data, loading, error];
};
