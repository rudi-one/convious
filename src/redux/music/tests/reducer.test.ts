import {
  mockMusicCollection,
  mockMusicFiltersChecked,
  mockMusicFiltersUnchecked,
  mockMusicState,
} from 'src/mocks/mockMusic';
import {
  clearMusicCollection,
  clearMusicFilters,
  setMusicCollection,
  setMusicFilters,
  setMusicOffset,
  setMusicQuery,
  updateMusicFilters,
} from 'store/music/actions';
import {store} from 'store/store';

describe('Music reducer tests', () => {
  it('should set correct music collection', () => {
    store.dispatch(setMusicCollection(mockMusicCollection));
    expect(store.getState().musicState.musicCollection).toEqual(
      mockMusicCollection,
    );
    store.dispatch(setMusicCollection(mockMusicCollection));
    expect(store.getState().musicState.musicCollection).toEqual([
      ...mockMusicCollection,
      ...mockMusicCollection,
    ]);
  });
  it('should clear music collection', () => {
    store.dispatch(clearMusicCollection());
    expect(store.getState().musicState.musicCollection).toEqual([]);
  });
  it('should set offset', () => {
    store.dispatch(setMusicOffset(mockMusicState.offset));
    expect(store.getState().musicState.offset).toEqual(mockMusicState.offset);
  });
  it('should set search query term', () => {
    const mockQuery = 'lopez';
    store.dispatch(setMusicQuery(mockQuery));
    expect(store.getState().musicState.query).toEqual(mockQuery);
  });
  it('should set filters', () => {
    store.dispatch(setMusicFilters(mockMusicFiltersChecked));
    expect(store.getState().musicState.filters).toEqual(
      mockMusicFiltersChecked,
    );
  });
  it('should update filters', () => {
    const filterToUpdate = {...mockMusicFiltersChecked[0], checked: false};
    const updatedFilters = mockMusicFiltersChecked.map(filter => ({
      ...filter,
      checked:
        filterToUpdate.name === filter.name
          ? filterToUpdate.checked
          : filter.checked,
    }));
    store.dispatch(updateMusicFilters(filterToUpdate));
    expect(store.getState().musicState.filters).toEqual(updatedFilters);
  });
  it('should clear filters with all checked', () => {
    store.dispatch(clearMusicFilters(true));
    expect(store.getState().musicState.filters).toEqual(
      mockMusicFiltersChecked,
    );
  });
  it('should clear filters with all unchecked', () => {
    store.dispatch(clearMusicFilters(false));
    expect(store.getState().musicState.filters).toEqual(
      mockMusicFiltersUnchecked,
    );
  });
});
