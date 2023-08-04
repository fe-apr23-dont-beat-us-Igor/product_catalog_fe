import classNames from "classnames";
import { FC, useEffect, useState } from "react";

const photos = [
  'https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/a/p/apple_iphone_11_64gb_red_0_4.jpg/w_600',
  'https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/a/p/apple_iphone_11_64gb_red_1_1.jpg/w_600',
  'https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/a/p/apple_iphone_11_64gb_red_3_1.jpg/w_600',
  'https://files.foxtrot.com.ua/PhotoNew/img_0_60_7766_5.webp',
  'https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/a/p/apple_iphone_11_64gb_green_0_4.jpg/w_600',
];

const ItemGallery: FC = () => {
  const [currentPhotoIndex, setcurrentPhotoIndex] = useState<number>(0);
  const [autoScroll, setAutoScroll] = useState<boolean>(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (autoScroll) {
      interval = setInterval(() => 
      setcurrentPhotoIndex(current => 
        current === photos.length - 1 ? 0 : current + 1), 3000);
    };

    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  });

  return (
    <section className="gallery">
      <img 
        src={photos[currentPhotoIndex]} 
        className="gallery__current-photo" 
        alt="Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)" 
      />
      <div className="gallery__item-photos">
        {photos.map(photo => 
          <img 
            src={photo} 
            className={classNames(
              "gallery__item-photo",
              {"gallery__item-photo--selected": 
                currentPhotoIndex === photos.indexOf(photo)
            })} 
            alt="pic"
            onClick={() => setcurrentPhotoIndex(photos.indexOf(photo))}
          />
        )}
      </div>
    </section>
  );
};

export default ItemGallery;