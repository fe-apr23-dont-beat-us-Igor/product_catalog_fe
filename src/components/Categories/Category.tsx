import { FC } from 'react';

import { img } from '../../images/images';
import { CategoryType } from './Categories';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

type Props = {
  category: CategoryType;
};

const Category: FC<Props> = ({ category }) => {
  const { title, counter, img, link } = category;

  return (
    <Link to={link}>
      <article className="category">
        <img className="category__img" src={img} alt="" />

        <div className="category__text-container">
          <h4 className="category__heading">{title}</h4>
          <p className="category__text">{counter} models</p>
        </div>
      </article>
    </Link>
  );
};

export default Category;
