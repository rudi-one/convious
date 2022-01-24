import {ActionType, createAction} from 'typesafe-actions';

export const setLoading = createAction('SET_LOADING', (loading: boolean) => ({
  loading,
}))();

export type LoadingActionTypes = ActionType<typeof setLoading>;
