import {mockUIState} from 'src/mocks/mockUI';
import {store} from 'store/store';
import {resetSnackbar, setSnackbar} from 'store/ui/snackbar/actions';

describe('Snackbar reducer tests', () => {
  it('should set correct Snackbar message', async () => {
    const message = mockUIState.snackbarState.message;
    store.dispatch(setSnackbar(message));
    expect(store.getState().uiState.snackbarState.message).toEqual(message);
  });
  it('should reset Snackbar message', async () => {
    store.dispatch(resetSnackbar());
    expect(store.getState().uiState.snackbarState.message).toEqual(undefined);
  });
});
