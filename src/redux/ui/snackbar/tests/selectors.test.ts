import {mockState} from 'src/mocks/mockState';
import {mockUIState} from 'src/mocks/mockUI';
import {selectSnackbarMessage} from 'store/ui/snackbar/selectors';

describe('Store UI Snackbar', () => {
  it('should match selectSnackbarMessage selector', () => {
    const message = selectSnackbarMessage(mockState);

    expect(message).toStrictEqual(mockUIState.snackbarState.message);
  });
});
