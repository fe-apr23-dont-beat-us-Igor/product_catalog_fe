import { Link, LinkProps, useSearchParams } from 'react-router-dom';
import { SearchParams, getSearchWith } from '../servises/searchParam.servise';

type Props = Omit<LinkProps, 'to'> & {
  params: SearchParams;
  title?: string;
};



export const SearchLink: React.FC<Props> = ({
  children,
  params,
  title,
  ...props
}) => {

  return (
    <Link
      to={{
        search: getSearchWith( params),
      }}
      {...props}
    >
      {title}

      {children}
    </Link>
  );
};
