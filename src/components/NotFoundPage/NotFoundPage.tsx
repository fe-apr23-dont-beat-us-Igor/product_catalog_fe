import { FC } from "react";
import './NotFoundPage.scss';

export const NotFoundPage: FC = () => {
  return (
    <article className="not-found section">
      <h1 className="not-found__text">Page not found</h1>
      <img 
        className='not-found__pic'
        src="https://media.tenor.com/hImJU1lihyIAAAAC/quiet-mjc.gif"
      />
    </article>
  );
};
