import { FC } from "react";
import { img } from '../../images/images';

export const NotFoundPage: FC = () => {
  return (
    <section className="not-found section">
      <img 
        alt='not-found-404'
        className='not-found__pic'
        src={img.notFound}
      />
      <article className="not-found__info">
        <h1 className="not-found__info--h1">Sorry,</h1>
        <h4 className="not-found__info--h4">Please check URL and try again.</h4>
        <a 
          href="#/home" 
          className="button-primary not-found__info--button"
        >
          Back to Home
        </a>
      </article>
    </section>
  );
};
