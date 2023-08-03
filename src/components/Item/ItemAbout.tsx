import { FC } from "react";
import ItemAboutArticle from "./ItemAboutArticle";

const ItemAbout: FC = () => {
  return (
    <section className="about">
      <h3 className="about__title">About</h3>
      <div className="about__articles">
        <ItemAboutArticle/>
        <ItemAboutArticle/>
        <ItemAboutArticle/>
      </div>

    </section>
  );
}

export default ItemAbout;