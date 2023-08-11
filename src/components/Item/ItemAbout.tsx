import { FC } from "react";

interface Props {
  description: string;
}

const ItemAbout: FC<Props> = ({ description }) => {
  const firstPoint = description.indexOf('.');
  const title = description.slice(0, firstPoint);

  return (
    <section 
      data-aos="fade-up-right"
      data-aos-easing="linear"
      data-aos-duration="500"  
      className="about"
    >
      <h3 className="about__title">About</h3>
      <div className="about__articles">
        <article className="article">
          <h4 className="article__title">
            {title}
          </h4>
          <p className="article__text">
            {description.slice(firstPoint + 1)}
          </p>
        </article>
      </div>

    </section>
  );
}

export default ItemAbout;