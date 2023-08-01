import { FC } from "react";
import './NotFoundPage.scss';
import { img } from '../../images/images';

export const NotFoundPage: FC = () => {
  return (
    <article className="not-found section">
      <img 
        alt='not-found-404'
        className='not-found__pic'
        src={img.notFound}
      />
    </article>
  );
};
