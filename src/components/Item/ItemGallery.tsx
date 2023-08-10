import classNames from "classnames";
import { FC, useEffect, useState } from "react";
import { ProductLinks } from "../../Types/products.types";

interface Props {
  itemName: string,
  photos: ProductLinks; 
};

const ItemGallery: FC<Props> = ({ itemName, photos }) => {
  const photosLinks = Object.values(photos).slice(1);

  const [currentPhotoIndex, setcurrentPhotoIndex] = useState<number>(0);
  const [autoScroll, setAutoScroll] = useState<boolean>(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (autoScroll) {
      interval = setInterval(() => 
      setcurrentPhotoIndex(current => 
        current === photosLinks.length - 1 ? 0 : current + 1), 4000);
    };

    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  });

  return (
    <section
      data-aos="fade-down-right"
      data-aos-easing="linear"
      data-aos-duration="500"   
      className="gallery"
    >
      <div className="gallery__item-photos">
        {photosLinks.map(photoLink => 
          <img 
            src={photoLink}
            className={classNames(
              "gallery__item-photo",
              {"gallery__item-photo--selected": 
              currentPhotoIndex === photosLinks.indexOf(photoLink)
            })} 
            alt={itemName}
            onClick={() => setcurrentPhotoIndex(photosLinks.indexOf(photoLink))}
            />
            )}
      </div>
      <img 
        src={photosLinks[currentPhotoIndex]} 
        className="gallery__current-photo" 
        alt={itemName} 
      />
    </section>
  );
};

export default ItemGallery;