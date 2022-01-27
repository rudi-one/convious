import {
  mockAppsCollection,
  mockAppsFiltersChecked,
  mockAppsFiltersUnchecked,
  mockAppsState,
} from 'src/mocks/mockApps';
import {
  clearAppsCollection,
  clearFiters,
  setAppsCollection,
  setFilters,
  setOffset,
  setTerm,
  updateFilters,
} from 'store/apps/actions';
import {store} from 'store/store';

describe('Apps reducer tests', () => {
  it('should set correct apps collection', () => {
    store.dispatch(setAppsCollection(mockAppsCollection));
    expect(store.getState().appsState.appsCollection).toEqual(
      mockAppsCollection,
    );
    store.dispatch(setAppsCollection(mockAppsCollection));
    expect(store.getState().appsState.appsCollection).toEqual([
      ...mockAppsCollection,
      ...mockAppsCollection,
    ]);
  });
  it('should clear apps collection', () => {
    store.dispatch(clearAppsCollection());
    expect(store.getState().appsState.appsCollection).toEqual([]);
  });
  it('should set offset', () => {
    store.dispatch(setOffset(mockAppsState.offset));
    expect(store.getState().appsState.offset).toEqual(mockAppsState.offset);
  });
  it('should set search query term', () => {
    const mockTerm = 'uber';
    store.dispatch(setTerm(mockTerm));
    expect(store.getState().appsState.term).toEqual(mockTerm);
  });
  it('should set filters', () => {
    store.dispatch(setFilters(mockAppsFiltersChecked));
    expect(store.getState().appsState.filters).toEqual(mockAppsFiltersChecked);
  });
  it('should update filters', () => {
    const filterToUpdate = {...mockAppsFiltersChecked[0], checked: false};
    const updatedFilters = mockAppsFiltersChecked.map(filter => ({
      ...filter,
      checked:
        filterToUpdate.name === filter.name
          ? filterToUpdate.checked
          : filter.checked,
    }));
    store.dispatch(updateFilters(filterToUpdate));
    expect(store.getState().appsState.filters).toEqual(updatedFilters);
  });
  it('should clear filters with all checked', () => {
    store.dispatch(clearFiters(true));
    expect(store.getState().appsState.filters).toEqual(mockAppsFiltersChecked);
  });
  it('should clear filters with all unchecked', () => {
    store.dispatch(clearFiters(false));
    expect(store.getState().appsState.filters).toEqual(
      mockAppsFiltersUnchecked,
    );
  });
});
