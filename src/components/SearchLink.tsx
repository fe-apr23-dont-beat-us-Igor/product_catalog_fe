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
  const [searchParams] = useSearchParams();

  return (
    <Link
      to={{
        search: getSearchWith(searchParams, params),
      }}
      {...props}
    >
      {title}

      {children}
    </Link>
  );
};