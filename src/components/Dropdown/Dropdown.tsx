import { FC, MouseEventHandler, useState } from 'react';
import classnames from 'classnames';

import './dropdown.scss';

const options = [
  'option1',
  'option2',
  'option3',
  'option4',
  'option5',
  'option6',
];

// type Props = {
//   options: string[];
// };

export const Dropdown: FC = (/*{ options = mockOptions } */) => {
  const [selectedOption, setSelectedOption] = useState('Option 0');
  const [isActive, setIsActive] = useState<boolean>(false);
  const [perPage, setPerPage] = useState(16);

  const handleOptionChange = (event: any, option: string) => {
    event.preventDefault();
    setSelectedOption(option);
    setIsActive(false);
  };

  const openDropDown: MouseEventHandler<HTMLAnchorElement> = (event): void => {
    event.preventDefault();
    setIsActive((value) => !value);
  };

  return (
    <div
      className={classnames('select', {
        'select--opened': isActive,
      })}
    >
      <div className="select__title">
        <a
          className="select__title--link"
          data-default="Option 0"
          onClick={openDropDown}
        >
          <p>{selectedOption}</p>
        </a>
      </div>
      <div
        className={classnames(`select__content`, {
          'select__content--active': isActive,
          'select__content--hidden': !isActive,
        })}
      >
        {options.map((option) => (
          <a
            href=""
            className="select--link select__item"
            onClick={(event) => handleOptionChange(event, option)}
          >
            {option}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
