import {mockUIState} from 'src/mocks/mockUI';
import {store} from 'store/store';
import {setLoading} from 'store/ui/loading/actions';

describe('Loading reducer tests', () => {
  it('should set correct apps collection', async () => {
    const loading = mockUIState.loadingState.loading;
    store.dispatch(setLoading(loading));
    expect(store.getState().uiState.loadingState.loading).toEqual(loading);
  });
});
