import React from 'react';

import { img } from '../../images/images';
import Category from './Category';

const categories = [
  { title: 'Mobile phones', counter: '95 models', img: img.phones },
  { title: 'Tablets', counter: '24 models', img: img.tablets },
  { title: 'Accessories', counter: '100 models', img: img.accessories },
];

const Categories = () => {
  return (
    <section className="container section categories">
      <h2 className="categories__title">Shop by category</h2>
      <div className="categories__content">
        {categories.map((category) => (
          <Category category={category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
