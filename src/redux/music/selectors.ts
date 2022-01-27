import {RootState} from 'store/RootReducer';

export const selectMusic = (state: RootState) => {
  return state.musicState.musicCollection;
};

export const selectFilteredMusic = (state: RootState) => {
  const music = selectMusic(state);
  const filters = selectMusicFilters(state);

  return music.filter(
    item =>
      filters.find(filter => filter.name === item.primaryGenreName)?.checked,
  );
};

export const selectMusicOffset = (state: RootState) => {
  return state.musicState.offset;
};

export const selectMusicQuery = (state: RootState) => {
  return state.musicState.query;
};

export const selectMusicFilters = (state: RootState) =>
  state.musicState.filters;
