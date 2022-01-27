import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Filter} from 'src/components/Filters/types';
import {
  clearMusicCollection,
  clearMusicFilters,
  fetchMusic,
  setMusicOffset,
  setMusicQuery,
  updateMusicFilters,
} from 'store/music/actions';
import {selectFilteredMusic, selectMusicFilters} from 'store/music/selectors';

const useMusic = () => {
  const dispatch = useDispatch();
  const music = useSelector(selectFilteredMusic);
  const filters = useSelector(selectMusicFilters);

  const getMusic = useCallback(() => {
    dispatch(fetchMusic());
  }, [dispatch]);

  const clear = useCallback(
    (checked?: boolean) => {
      dispatch(clearMusicFilters(checked));
    },
    [dispatch],
  );

  const filter = useCallback(
    (filter: Filter) => {
      dispatch(updateMusicFilters(filter));
    },
    [dispatch],
  );

  const search = useCallback(
    (text: string) => {
      if (text?.length > 3) {
        dispatch(clearMusicCollection());
        dispatch(setMusicOffset(0));
        dispatch(setMusicQuery(text));
        dispatch(fetchMusic());
        dispatch(clearMusicFilters(true));
      }
    },
    [dispatch],
  );

  return {music, getMusic, search, filters, filter, clear};
};

export default useMusic;
