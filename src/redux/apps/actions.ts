import {ActionType, createAction} from 'typesafe-actions';

export const setAppsCollection = createAction(
  'SET_APPS_COLLECTION',
  (appsCollection: any) => ({
    appsCollection,
  }),
)();

export const clearAppsCollection = createAction('CLEAR_APPS_COLLECTION')();

export const fetchApps = createAction('FETCH_APPS')();

export const setOffset = createAction('SET_OFFSET', (offset: number) => ({
  offset,
}))();

export const setTerm = createAction('SET_TERM', (term: string) => ({
  term,
}))();

export type AppsActionTypes = ActionType<
  | typeof setAppsCollection
  | typeof clearAppsCollection
  | typeof setOffset
  | typeof setTerm
  | typeof fetchApps
>;
