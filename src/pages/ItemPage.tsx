import { FC } from "react";
import GoodsSliderCollection from "../components/GoodsSliderCollection/GoodsSliderCollection";
import ItemAbout from "../components/Item/ItemAbout";
import ItemTechSpecs from "../components/Item/ItemTechSpecs";

const ItemPage: FC = () => {
  return (
    <main className="item">
      <h2 className="item__name">
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h2>
      {/* <ItemGallery/>
      <ItemCartInfo/> */}
      <div className="item__about container section">
        <ItemAbout />
      </div>
      <div className="item__tech container section">
        <ItemTechSpecs />
      </div>
      
      <GoodsSliderCollection/>

    </main>
  );
};

export default ItemPage;