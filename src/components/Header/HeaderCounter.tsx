import React from 'react';

interface Props {
  productsCount: number;  
}

export const HeaderCounter: React.FC<Props> = ({ productsCount }) => {
    return (
        <div className="icon__counter">
        <span className="icon__counter-text" >
          {productsCount < 100 ? productsCount : '99+'}
        </span>
      </div>
    );
};