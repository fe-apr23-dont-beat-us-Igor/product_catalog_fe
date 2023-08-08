import { useSearchParams } from "react-router-dom";

export type SearchParams = {
  [key: string]: string | string[] | null;
};

export function getSearchWith(
  paramsToUpdate: SearchParams | null,
): string {

  if (!paramsToUpdate) return ''
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentParams] = useSearchParams();

  const newParams = new URLSearchParams(currentParams.toString());

  Object.entries(paramsToUpdate).forEach(([key, value]) => {
    if (value === null) {
      newParams.delete(key);
    } else if (Array.isArray(value)) {
      newParams.delete(key);

      value.forEach((part) => {
        newParams.append(key, part);
      });
    } else {
      newParams.set(key, value);
    }
  });

  return newParams.toString();
}
