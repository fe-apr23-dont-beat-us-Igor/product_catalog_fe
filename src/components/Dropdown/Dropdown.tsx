import { FC, MouseEventHandler, useState, SelectHTMLAttributes } from 'react';
import classnames from 'classnames';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  setValue: (value: string) => void;
}

export const Dropdown: FC<Props> = ({ label, options, setValue }) => {
  const [currentOptionId, setcurrentOptionId] = useState(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [perPage, setPerPage] = useState(16);

  const controleDropdownValue = (value: string) => {
    setValue(value);
  };

  const handleOptionChange = (event: any, option: number) => {
    event.preventDefault();
    setcurrentOptionId(option);
    controleDropdownValue(options[option]);
    setIsActive(false);
  };

  const openDropDown: MouseEventHandler<HTMLAnchorElement> = (event): void => {
    event.preventDefault();
    setIsActive((value) => !value);
  };

  return (
    <div style={{ display: 'inline-block' }} >
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
            <p>{options[currentOptionId]}</p>
          </a>
        </div>
        <div
          className={classnames(`dropdown__content`, {
            'dropdown__content--active': isActive,
            'dropdown__content--hidden': !isActive,
          })}
        >
          {options.map((option, index) => (
            <a
              href=""
              className="dropdown--link dropdown__item"
              onClick={(event) => handleOptionChange(event, index)}
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
