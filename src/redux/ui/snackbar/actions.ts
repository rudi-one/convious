import {ActionType, createAction} from 'typesafe-actions';

export const setSnackbar = createAction('SET_SNACKBAR', (message: string) => ({
  message,
}))();

export const resetSnackbar = createAction('RESET_SNACKBAR')();

export type SnackbarActionTypes = ActionType<
  typeof setSnackbar | typeof resetSnackbar
>;
