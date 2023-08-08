import { FC } from "react";

export const SkeletonCartCheckout: FC = () => {
  return (
    <div className="checkout__container skeleton">
      <div className="checkout__info skeleton__sum-info"></div>
      <div className="checkout__line"></div>
      <div className="checkout__button skeleton__button"></div>
    </div>
  );
};
