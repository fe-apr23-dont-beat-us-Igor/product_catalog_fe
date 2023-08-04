import { useState, useEffect } from 'react';
import { getSomeProducts } from '../api/api';
import { useLocation } from 'react-router-dom';

export const useProducts = <T>(limit: number, page: number) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<T>();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const params = searchParams.toString();


  // const params = `?limit=${limit}&page=${page}`;

  useEffect(() => {

  }, []);

  return [data, loading, error];
};
