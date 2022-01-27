import {mockAppsCollection, mockAppsFiltersChecked} from 'src/mocks/mockApps';
import {mockState} from 'src/mocks/mockState';
import {
  selectApps,
  selectFilteredApps,
  selectFilters,
  selectOffset,
  selectTerm,
} from 'store/apps/selectors';

describe('Store apps', () => {
  it('should match selectApps selector', () => {
    const appsCollection = selectApps(mockState);

    expect(appsCollection).toStrictEqual(mockAppsCollection);
  });
  it('should match selectOffset selector', () => {
    const offet = selectOffset(mockState);

    expect(offet).toStrictEqual(0);
  });
  it('should match selectTerm selector', () => {
    const term = selectTerm(mockState);

    expect(term).toStrictEqual(mockState.appsState.term);
  });
  it('should match selectFilters selector', () => {
    const filters = selectFilters(mockState);

    expect(filters).toStrictEqual(mockAppsFiltersChecked);
  });
  it('should match selectFilteredApps selector', () => {
    const filters = selectFilteredApps(mockState);

    expect(filters).toStrictEqual(mockAppsCollection);
  });
});
