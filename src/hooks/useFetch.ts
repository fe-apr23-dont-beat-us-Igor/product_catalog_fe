import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SearchParams, getSearchWith } from '../servises/searchParam.servise';

export const useProductsAPI = <T>(
  searchParams: SearchParams,
  callback: <T>(params: string) => Promise<T>,
): [T | null, boolean, boolean] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);

  const [currentParams] = useSearchParams();
  const params = getSearchWith(currentParams, searchParams);

  const loadData = async () => {
    try {
      setLoading(true);
      callback<T>(params).then(setData);
      setLoading(false);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    loadData();
  }, [params]);

  return [data, loading, error];
};
