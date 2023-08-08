import { FC } from "react";
import Loader from "../UI/Loader";

export const SkeletonCard: FC = () => {
  return (
    <div className="card skeleton" data-qa="card">
      <div className="card__image skeleton__loader"><Loader /></div>
      <div className="card__name skeleton__name"></div>

      <div className="card__price skeleton__price">
      </div>

      <div className="card__line"></div>

      <div className="card__characteristics small-text">
        <div className="card__char skeleton__char"></div>
        <div className="card__char skeleton__char"></div>
        <div className="card__char skeleton__char"></div>
      </div>

      <div className="card__buttons">
        <div className="skeleton__card-button"></div>
        <div className="skeleton__like-button"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
