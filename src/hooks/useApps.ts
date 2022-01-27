import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Filter} from 'src/components/Filters/types';
import {
  clearAppsCollection,
  clearFiters,
  fetchApps,
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
      dispatch(clearFiters(checked));
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
        dispatch(clearFiters(true));
      }
    },
    [dispatch],
  );

  return {apps, getApps, search, filters, filter, clear};
};

export default useApps;
