import { FC, MouseEventHandler, useState, SelectHTMLAttributes } from 'react';
import classnames from 'classnames';
import { Link, useSearchParams } from 'react-router-dom';
import { SearchLink } from '../SearchLink';
import { SortOption } from '../Catalog/Catalog';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SortOption[];
}

export const Dropdown: FC<Props> = ({ label, options }) => {
  const [currentOption, setcurrentOption] = useState<SortOption>(options[0]);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [title] = currentOption;

  const handleOptionChange = (event: any, option: SortOption) => {
    event.preventDefault();
    setcurrentOption(option);
    setIsActive(false);
  };

  const openDropDown: MouseEventHandler<HTMLDivElement> = (event): void => {
    event.preventDefault();
    setIsActive((value) => !value);
  };

  return (
    <div style={{ display: 'inline-block' }}>
      <p className="small-text dropdown__label">{label}</p>
      <article
        className={classnames('dropdown', {
          'dropdown--opened': isActive,
        })}
      >
        <div className="dropdown__title" onClick={openDropDown}>
          {title}
        </div>
        <div
          className={classnames(`dropdown__content`, {
            'dropdown__content--active': isActive,
            'dropdown__content--hidden': !isActive,
          })}
        >
          {options.map(([title, params]) => (
            <div
              className="dropdown--link dropdown__item"
              onClick={(event) => handleOptionChange(event, [title, params])}
            >
              <SearchLink
                params={params}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div className="dropdown__inner-option">{title}</div>
              </SearchLink>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default Dropdown;
