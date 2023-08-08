import { FC } from "react";
import LoaderWhite from "../UI/LoaderWhite";

const SkeletonCartItem: FC = () => {
  return (
    <div className="cartItem skeleton">
      <div className="cartItem__info skeleton__info">
        <div className="skeleton__loader">
          <LoaderWhite/>
        </div>
      </div>

      <div className="skeleton__quantity_and_price">
        <div className="skeleton__quantity"></div>
        <div className="skeleton__total-price"></div>
      </div>
    </div>
  );
};

export default SkeletonCartItem;