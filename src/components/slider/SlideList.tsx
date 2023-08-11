import React from 'react';
import { bannerAccets } from '../../images/images';

export const SlideList = React.memo(() => {
  console.log('render');
  return (
    <>
      {bannerAccets.map((img) => (
        <div
          key={img}
          className="slider__slide"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
          }}
        >
          {/* <img src={img} alt="" style={{ backgroundSize: 'cover' }} /> */}
        </div>
      ))}
    </>
  );
});
