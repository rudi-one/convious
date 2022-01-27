import {mockState} from 'src/mocks/mockState';
import {selectLoading} from 'store/ui/loading/selectors';

describe('Store UI Loader', () => {
  it('should match selectLoading selector', () => {
    const isLoading = selectLoading(mockState);

    expect(isLoading).toStrictEqual(true);
  });
});
