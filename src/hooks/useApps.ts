import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Filter} from 'src/components/Filters/types';
import {APPS_CATEGORIES} from 'src/utils/consts';
import {
  clearAppsCollection,
  fetchApps,
  setFilters,
  setOffset,
  setTerm,
  updateFilters,
} from 'store/apps/actions';
import {selectFilteredApps, selectFilters} from 'store/apps/selectors';

const useApps = () => {
  const dispatch = useDispatch();
  const apps = useSelector(selectFilteredApps);
  const filters = useSelector(selectFilters);

  const getApps = useCallback(() => {
    dispatch(fetchApps());
  }, [dispatch]);

  const clear = useCallback(
    (checked?: boolean) => {
      const filters: Filter[] = APPS_CATEGORIES.map(category => ({
        name: category,
        checked: !!checked,
      }));
      dispatch(setFilters(filters));
    },
    [dispatch],
  );

  const filter = useCallback(
    (filter: Filter) => {
      dispatch(updateFilters(filter));
    },
    [dispatch],
  );

  const search = useCallback(
    (text: string) => {
      if (text?.length > 3) {
        dispatch(clearAppsCollection());
        dispatch(setOffset(0));
        dispatch(setTerm(text));
        dispatch(fetchApps());
        clear(true);
      }
    },
    [clear, dispatch],
  );

  useEffect(() => {
    clear(true);
  }, [clear]);

  return {apps, getApps, search, filters, filter, clear};
};

export default useApps;
