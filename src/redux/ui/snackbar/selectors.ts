import {RootState} from 'store/RootReducer';

export const selectSnackbarMessage = (state: RootState) =>
  state.uiState.snackbarState.message;
