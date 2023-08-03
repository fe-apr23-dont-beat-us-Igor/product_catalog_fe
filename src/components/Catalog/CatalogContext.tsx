import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getSomeProducts } from '../../api/api';
import { ProductCollection } from './Catalog_Types';
import { useLocation, useSearchParams } from 'react-router-dom';

interface Context {
  products: ProductCollection | null;
}

const initialContext: Context = {
  products: null,
};

const CatalogContext = createContext<Context>(initialContext);

type Props = {
  children: React.ReactNode;
};

export const CatalogProvider: FC<Props> = ({ children }) => {
  const [productList, setProductList] = useState<ProductCollection | null>(null);
  // const [currentPageList, setCurrentPageList] = useState<any[]>([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);


  // useEffect(() => {
  //   try {
  //     getSomeProducts(1, 16, searchParams.toString()).then((data) => {
  //       setProductList(data);
  //     });
  //     console.log(productList);
  //   } catch {
  //     console.log('error');
  //   }
  // }, []);

  const value: Context = {
    products: productList,
  };

  return (
    <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
  );
};

export const useCatalogContext = () => useContext<Context>(CatalogContext);
