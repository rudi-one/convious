import {RootState} from 'store/RootReducer';

export const selectLoading = (state: RootState) =>
  state.uiState.loadingState.loading;
