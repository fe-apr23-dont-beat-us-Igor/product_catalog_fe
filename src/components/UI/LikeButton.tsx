import classNames from 'classnames';
import { FC, ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  // implement your logic in parent component
  selected: boolean;
}

const LikeButton: FC<Props> = ({ selected, ...atributes }) => {
  const className = classNames('likeButton', {
    'likeButton--selected': selected,
  });

  return <button className={className} {...atributes}></button>;
};

export default LikeButton;
