import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card/Card';
import { Phone } from '../components/Catalog/Catalog';
import '../styles/components/Favourites.scss';

export const Favourites: React.FC = () => {
  //const [favPhones, setFavPhones] = useState<Phone[]>([]);
  
//   useEffect(() => {
//     async function getProductsFromServer(ids: number[]) {
//         if (ids.length === 0) {
//             setFavPhones([]);

//             return;
//         }

//         try {
//             const phonesFromServer = await getPhonesByIds(
//                 ids.map((id) => String(id)),
//             );
    
//             setFavPhones(phonesFromServer);
//         } catch {
//             throw new Error('Unable to load data');
//         }
//     }
 
//     getProductsFromServer(phoneIdsFavourites);
//     }, [phoneIdsFavourites]);

//   useEffect(() => {
//     localStorage.setItem('phoneIdsFavourites', 
//     JSON.stringify(phoneIdsFavourites));
//   }, [phoneIdsFavourites]);
const phoneIdsFavourites: number[] = [2,3, 1, 5];
const favPhones = [{
    id: 1,
    name: 'Apple iPhone 11 128GB Black',
    capacity: '128GB',
    priceRegular: '1100',
    priceDiscount: '1050',
  },
  {
    id: 2,
    name: 'Apple iPhone 11 128GB Black',
    capacity: '128GB',
    priceRegular: '1100',
    priceDiscount: '1050',
  },
  {
    id: 3,
    name: 'Apple iPhone 11 128GB Black',
    capacity: '128GB',
    priceRegular: '1100',
    priceDiscount: '1050',
  },
  {
    id: 4,
    name: 'Apple iPhone 11 128GB Black',
    capacity: '128GB',
    priceRegular: '1100',
    priceDiscount: '1050',
  },]

  return (
    <div className="favourites container section">
      <h1 className="favourites__title">Favourites</h1>
      {phoneIdsFavourites ? (
        <p className="favourites__count">{phoneIdsFavourites.length} models</p>
      ) : (
        <p className="favourites__count">0 models</p>
      )}
      <div className="favourites__filters">
      </div>
      {favPhones.length > 0 && (
        <div className="favourites__item-list">
          {favPhones.map((phone) => (
            <Card 
              key={phone.id} 
              phone={phone} 
            />
          ))}
        </div>
      )}

    </div>
  );
};