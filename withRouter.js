import { useMemo } from 'react';
import useReactRouter from 'use-react-router';

export function useRouter() {
  const routes = useReactRouter();
  const { location, history } = routes;

  const query = useMemo(() => {
    const params = {};
    const urlParams = new URLSearchParams(location.search);
    if (!urlParams.toString()) return {};

    const entries = urlParams.entries();
    for (const pair of entries) {
      const [key, value] = pair;
      params[key] = value;
    }

    return params;
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
