import classNames from 'classnames';
import { FC, ButtonHTMLAttributes} from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
}

const Button: FC<Props> = ({ selected, ...atributes }) => {
 

  const className = classNames('button-primary', {
    'button-primary--selected': selected,
  });

  return (
    <button className={className} {...atributes} >
      <p className="button-primary__text text">{selected ? 'Added to card' : 'Add to card'} </p>
    </button>
  );
};

export default Button;
