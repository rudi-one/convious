import {mockAppsCollection, mockAppsState} from 'src/mocks/mockApps';
import {
  clearAppsCollection,
  setAppsCollection,
  setOffset,
  setTerm,
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
});
