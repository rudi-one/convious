import {mockAppsCollection} from 'src/mocks/mockApps';
import {mockState} from 'src/mocks/mockState';
import {selectApps, selectOffset, selectTerm} from 'store/apps/selectors';

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
});
