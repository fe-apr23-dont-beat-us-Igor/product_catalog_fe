import classNames from 'classnames';
import { FC, ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  // implement your logic in parent component
  left: boolean;
}

const SliderButton: FC<Props> = ({ left, ...atributes }) => {
  const className = classNames('sliderButton ', {
    'sliderButton--left': left,
  });

  return <button className={className} {...atributes}></button>;
};

export default SliderButton;

// export default SliderButton;
