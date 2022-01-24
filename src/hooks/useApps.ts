import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {
  clearAppsCollection,
  fetchApps,
  setOffset,
  setTerm,
} from 'store/apps/actions';

const useApps = () => {
  const dispatch = useDispatch();

  const getApps = useCallback(() => {
    dispatch(fetchApps());
  }, [dispatch]);

  const search = useCallback(
    (text: string) => {
      if (text?.length > 3) {
        dispatch(clearAppsCollection());
        dispatch(setOffset(0));
        dispatch(setTerm(text));
        dispatch(fetchApps());
      }
    },
    [dispatch],
  );

  return {getApps, search};
};

export default useApps;
