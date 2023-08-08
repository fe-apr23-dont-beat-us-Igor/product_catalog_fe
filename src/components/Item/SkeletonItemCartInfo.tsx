import { FC } from "react";

const SkeletonItemCartInfo: FC = () => {
  return (
    <section className="cart-info">
      <div className="cart-info__param">
        <div className="cart-info__text">
          <p className="cart-info__title">Available colors</p>
        </div>
        <div className="cart-info__options">
          <div className="skeleton-item__color-button"></div>
          <div className="skeleton-item__color-button"></div>
          <div className="skeleton-item__color-button"></div>
          <div className="skeleton-item__color-button"></div>
        </div>
      </div>
      <div className="cart-info__param">
        <p className="cart-info__title">Select capacity</p>
        <div className="cart-info__options">
          <div className="skeleton-item__capacity-button"></div>
          <div className="skeleton-item__capacity-button"></div>
          <div className="skeleton-item__capacity-button"></div>
        </div>
      </div>

      <div className="cart-info__price-info">
        <div className="cart-info__price skeleton-item__price"></div>

        <div className="cart-info__buttons">
          <div className="skeleton-item__card-button"></div>
          <div className="skeleton-item__like-button"></div>
        </div>
      </div>

      <div className="cart-info__characteristics">
        <div className="cart-info__char skeleton-item__char"></div>
        <div className="cart-info__char skeleton-item__char"></div>
        <div className="cart-info__char skeleton-item__char"></div>
        <div className="cart-info__char skeleton-item__char"></div>
      </div>
    </section>
  );
};

export default SkeletonItemCartInfo;