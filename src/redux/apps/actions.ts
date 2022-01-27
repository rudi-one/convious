import {Filter} from 'src/components/Filters/types';
import {AppCollection} from 'store/apps/types';
import {ActionType, createAction} from 'typesafe-actions';

export const setAppsCollection = createAction(
  'SET_APPS_COLLECTION',
  (appsCollection: AppCollection[]) => ({
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

export const setFilters = createAction('SET_FILTERS', (filters: Filter[]) => ({
  filters,
}))();

export const updateFilters = createAction(
  'UPDATE_FILTERS',
  (filter: Filter) => ({
    filter,
  }),
)();

export const clearFiters = createAction(
  'CLEAR_FILTERS',
  (checked?: boolean) => ({
    checked,
  }),
)();

export type AppsActionTypes = ActionType<
  | typeof setAppsCollection
  | typeof clearAppsCollection
  | typeof setOffset
  | typeof setTerm
  | typeof fetchApps
  | typeof setFilters
  | typeof updateFilters
  | typeof clearFiters
>;
