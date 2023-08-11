import { FC } from "react";
import { Product } from "../../Types/products.types";

interface Props {
  tech: Product; 
};

const ItemTechSpecs: FC<Props> = ({ tech }) => {
  const {
    screen,
    ram,
  } = tech;

  return (
    <section
      data-aos="fade-up-right"
      data-aos-easing="linear"
      data-aos-duration="500"  
      className="tech"
    >
      <h3 className="tech__title">Tech specs</h3>
      <div className="tech__characteristics">
        <div className="tech__char">
          <p className="tech__char-text ">Screen</p>

          <p className="tech__char-number">{screen}</p>
        </div>

        <div className="tech__char">
          <p className="tech__char-text ">Resolution</p>

          <p className="tech__char-number">2688x1242</p>
        </div>

        <div className="tech__char">
          <p className="tech__char-text ">Processor</p>

          <p className="tech__char-number">Apple A12 Bionic</p>
        </div>

        <div className="tech__char">
          <p className="tech__char-text ">RAM</p>

          <p className="tech__char-number">{ram}</p>
        </div>

        <div className="tech__char">
          <p className="tech__char-text ">Built in memory</p>

          <p className="tech__char-number">64 GB</p>
        </div>

        <div className="tech__char">
          <p className="tech__char-text ">Camera</p>

          <p className="tech__char-number">12 Mp + 12 Mp + 12 Mp (Triple)</p>
        </div>

        <div className="tech__char">
          <p className="tech__char-text ">Zoom</p>

          <p className="tech__char-number">Optical, 2x</p>
        </div>

        <div className="tech__char">
          <p className="tech__char-text ">Cell</p>

          <p className="tech__char-number">GSM, LTE, UMTS</p>
        </div>

      </div>

    </section>
  );
}

export default ItemTechSpecs;