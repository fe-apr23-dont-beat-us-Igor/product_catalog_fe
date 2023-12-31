import { FC } from 'react';

import { img } from '../../images/images';
import { CategoryType } from './Categories';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../styles/components/animation.scss';

interface Category {
  title: string;
  counter: string;
  img: string;
}

type Props = {
  category: CategoryType;
};

const Category: FC<Props> = ({ category }) => {
  const { title, counter, img, link } = category;

  return (
    <Link to={link}>
      <article 
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="500" 
        className="category"
      >
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
