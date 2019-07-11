import { useMemo } from 'react';
import useReactRouter from 'use-react-router';
import queryString from 'query-string';

export function useRouter() {
  const routes = useReactRouter();
  const { location, history } = routes;

  const query = useMemo(() => {
    return queryString.parse(location.search);
  }, [location.search]);

  const handlePush = (url, { query }) => {
    const urlParams = new URLSearchParams();
    const queryKeys = Object.keys(query);

    let finalUrl = url;

    if (queryKeys.length) {
      queryKeys.forEach(key => {
        const value = query[key];
        if (value) urlParams.append(key, value);
      });

      const stringParams = urlParams.toString();
      if (stringParams) finalUrl += `?${stringParams}`;
    }

    history.push(finalUrl);
  };

  return {
    ...routes,
    query,
    push: handlePush
  };
}
