import React, { FC, createContext, useContext } from 'react';

interface Context {}

const initialContext: Context = {};

const CatalogContext = createContext<Context>(initialContext);

type Props = {
  children: React.ReactNode;
};

const CatalogProvider: FC<Props> = ({ children }) => {
  return (
    <CatalogContext.Provider value={''}>{children}</CatalogContext.Provider>
  );
};

export const useCatalogContext = () => useContext<Context>(CatalogContext);

export default CatalogProvider;
