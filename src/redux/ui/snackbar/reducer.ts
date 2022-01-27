import {produce} from 'immer';
import {getType} from 'typesafe-actions';
import {resetSnackbar, setSnackbar, SnackbarActionTypes} from './actions';
import {SnackbarState} from './types';

const initalState: SnackbarState = {
  message: '',
};

const SnackbarReducer = (state = initalState, action: SnackbarActionTypes) => {
  return produce(state, (draft: Partial<SnackbarState>) => {
    switch (action.type) {
      case getType(setSnackbar):
        draft.message = action.payload.message;
        break;
      case getType(resetSnackbar):
        draft.message = undefined;
        break;
    }
  });
};

export default SnackbarReducer;
