import { FC } from 'react';

import { img } from '../../images/images';
import '../../styles/components/animations.scss';

interface Category {
  title: string;
  counter: string;
  img: string;
}

type Props = {
  category: Category;
};

const Category: FC<Props> = ({ category }) => {
  const { title, counter, img } = category;

  return (
    <article className="category">
      <img className="category__img" src={img} alt="" />

      <div className="category__text-container">
        <h4 className="category__heading">{title}</h4>
        <p className="category__text">{counter}</p>
      </div>

    </article>
  );
};

export default Category;
