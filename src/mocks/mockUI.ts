import {LoadingState} from 'store/ui/loading/types';
import {SnackbarState} from 'store/ui/snackbar/types';

const mockLoading: LoadingState = {
  loading: true,
};

const mockSnackbar: SnackbarState = {
  message: 'Fetch error',
};

export const mockUIState = {
  loadingState: mockLoading,
  snackbarState: mockSnackbar,
};
