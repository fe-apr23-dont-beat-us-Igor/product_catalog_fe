import React, { FC } from 'react';

type Props = {
  isActive: boolean;
};

const Dot: FC<Props> = ({ isActive }) => {
  return (
    <button
      className={`slider__dot ${isActive && 'slider__dot--active'}`}
    ></button>
  );
};

export default Dot;
