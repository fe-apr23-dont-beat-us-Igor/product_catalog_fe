import { useEffect, useState } from 'react';

import { img } from '../../images/images';
import Category from './Category';
import { getInfo } from '../../api/api';

export interface CategoryType {
  title: string;
  counter: number;
  img: string;
  link: string;
}

const categoriesList: CategoryType[] = [
  {
    title: 'Tablets',
    counter: 36,
    img: img.tablets,
    link: 'products?category=tablets&page=1',
  },
  {
    title: 'Mobile phones',
    counter: 54,
    img: img.phones,
    link: 'products?category=phones&page=1',
  },
  {
    title: 'Accessories',
    counter: 34,
    img: img.accessories,
    link: 'products?category=accessories&page=1',
  },
];

const Categories = () => {
  const [categories, setCategories] = useState<CategoryType[]>(categoriesList);

  return (
    <section className="container section right-modal categories">
      <h2 className="categories__title">Shop by category</h2>
      <div className="categories__content">
        {categories.map((categoryItem, id) => (
          <Category key={id} category={categoryItem} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
