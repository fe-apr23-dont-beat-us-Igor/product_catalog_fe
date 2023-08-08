import { FC } from "react";
import LoaderWhite from "../UI/LoaderWhite";

const SkeletonItemAbout: FC = () => {
  return (
    <section className="about">
      <div className="about__title skeleton-item__additional-title"></div>
      <div className="about__articles">
        <div className="article skeleton-item__additional-article">
          <LoaderWhite/>
        </div>
      </div>
    </section>
  );
};

export default SkeletonItemAbout;