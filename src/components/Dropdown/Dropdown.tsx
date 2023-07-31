import { FC, MouseEventHandler, useState, SelectHTMLAttributes } from 'react';
import classnames from 'classnames';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
}

export const Dropdown: FC<Props> = ({ label, options }) => {
  const [dropdownedOption, setdropdownedOption] = useState('Option 0');
  const [isActive, setIsActive] = useState<boolean>(false);
  const [perPage, setPerPage] = useState(16);

  const handleOptionChange = (event: any, option: string) => {
    event.preventDefault();
    setdropdownedOption(option);
    setIsActive(false);
  };

  const openDropDown: MouseEventHandler<HTMLAnchorElement> = (event): void => {
    event.preventDefault();
    setIsActive((value) => !value);
  };

  return (
    <div>
      <p className="small-text dropdown__label">{label}</p>
      <article
        className={classnames('dropdown', {
          'dropdown--opened': isActive,
        })}
      >
        <div className="dropdown__title">
          <a
            className="dropdown__title--link"
            data-default="Option 0"
            onClick={openDropDown}
          >
            <p>{dropdownedOption}</p>
          </a>
        </div>
        <div
          className={classnames(`dropdown__content`, {
            'dropdown__content--active': isActive,
            'dropdown__content--hidden': !isActive,
          })}
        >
          {options.map((option) => (
            <a
              href=""
              className="dropdown--link dropdown__item"
              onClick={(event) => handleOptionChange(event, option)}
            >
              {option}
            </a>
          ))}
        </div>
      </article>
    </div>
  );
};

export default Dropdown;
