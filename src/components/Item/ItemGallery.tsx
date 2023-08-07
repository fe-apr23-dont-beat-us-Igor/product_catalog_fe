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
  const [autoScroll, setAutoScroll] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (autoScroll) {
      interval = setInterval(() => 
      setcurrentPhotoIndex(current => 
        current === photosLinks.length - 1 ? 0 : current + 1), 3000);
    };

    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  });

  return (
    <section className="gallery">
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