import classNames from 'classnames';
import { FC, ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  // implement your logic in parent component
  pageNumber: number;
  selected: boolean;
}

const PuginationButton: FC<Props> = ({
  pageNumber,
  selected,
  ...atributes
}) => {
  const className = classNames('puginationButton ', {
    'puginationButton--selected': selected,
  });
  return (
    <button className={className} { ...atributes}>
      <p className="text">{pageNumber}</p>
    </button>
  );
};

export default PuginationButton;
