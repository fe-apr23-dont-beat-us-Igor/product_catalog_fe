import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getSomeProducts } from '../../api/api';
import { ProductCollection } from './Catalog_Types';

interface Context {
  products: any[];
  sortType: string;
  setSortType: (value: string) => void;
  itemsPerPage: string;
  setItemsPerPage: (value: string) => void;
}

const initialContext: Context = {
  products: [],
  sortType: '',
  setSortType: () => {},
  itemsPerPage: '16',
  setItemsPerPage: () => {},
};

const CatalogContext = createContext<Context>(initialContext);

type Props = {
  children: React.ReactNode;
};

export const CatalogProvider: FC<Props> = ({ children }) => {
  const [productList, setProductList] = useState<ProductCollection>([]);
  const [currentPageList, setCurrentPageList] = useState<any[]>([]);

  const [sortType, setSortType] = useState<string>('');
  const [itemsPerPage, setItemsPerPage] = useState<string>('16');

  useEffect(() => {
    try {
      getSomeProducts(1, 16).then((data) => {
        setProductList(data.rows);
      });
      console.log(productList);
    } catch {
      console.log('error');
    }
  }, []);

  const value: Context = {
    products: productList,
    sortType,
    setSortType,
    itemsPerPage,
    setItemsPerPage,
  };

  return (
    <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
  );
};

export const useCatalogContext = () => useContext<Context>(CatalogContext);

