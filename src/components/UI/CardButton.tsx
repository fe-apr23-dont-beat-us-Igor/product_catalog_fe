import classNames from 'classnames';
import { FC, ButtonHTMLAttributes, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
  itemId: string,
}

const Button: FC<Props> = ({ selected, itemId, ...atributes }) => {
  const cartContext = useContext(CartContext);

  const isAdded = cartContext.isAdded(itemId);

  const handleClickAdded = (): void => {
    if (isAdded) {
      cartContext.removeOne(itemId);

      return;
    }

    cartContext.addOne(itemId);
  };

  const className = classNames('button-primary', {
    'button-primary--selected': selected,
  });

  return (
    <button className={className} {...atributes} onClick={handleClickAdded}>
      <p className="button-primary__text text">
        {isAdded ? 'Added' : 'Add to card'}
      </p>
    </button>
  );
};

export default Button;
