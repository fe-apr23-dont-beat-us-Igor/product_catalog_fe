import { FC } from "react";
import Button from "../UI/Button";
import LikeButton from "../UI/LikeButton";

const ItemCartInfo: FC = () => {
  return (
    <section className="cart-info">
      <div className="cart-info__param">
        <div className="cart-info__text">
          <p className="cart-info__title">Available colors</p>
          <p className="cart-info__id">ID: 802390</p>
        </div>
        <div className="cart-info__options">
          <button className="colorButton--selected"></button>
          <button className="colorButton"></button>
          <button className="colorButton"></button>
          <button className="colorButton"></button>
        </div>
      </div>
      <div className="cart-info__param">
        <p className="cart-info__title">Select capacity</p>
        <div className="cart-info__options">
          <button className="capacityButton--selected">64 GB</button>
          <button className="capacityButton">256 GB</button>
          <button className="capacityButton">512 GB</button>
        </div>
      </div>

      <div className="cart-info__price-info">
        <div className="cart-info__price">
          <h2 className="cart-info__price-new">
            $799
          </h2>

          <p className="cart-info__price-old">
            $1199
          </p>
        </div>
        
        <div className="cart-info__buttons">
          <div className="cart-info__add-to-cart">
            <Button selected={false} />
          </div>
          <LikeButton selected={false} />
        </div>
      </div>
      
      <div className="cart-info__characteristics">
        <div className="cart-info__char">
          <p className="cart-info__char-text ">Screen</p>

          <p className="cart-info__char-number">6.5” OLED</p>
        </div>

        <div className="cart-info__char">
          <p className="cart-info__char-text ">Resolution</p>

          <p className="cart-info__char-number">2688x1242</p>
        </div>

        <div className="cart-info__char">
          <p className="cart-info__char-text ">Processor</p>

          <p className="cart-info__char-number">Apple A12 Bionic</p>
        </div>

        <div className="cart-info__char">
          <p className="cart-info__char-text ">RAM</p>

          <p className="cart-info__char-number">3 GB</p>
        </div>
      </div>
    </section>
  );
};

export default ItemCartInfo;