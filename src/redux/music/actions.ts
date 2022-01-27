import {Filter} from 'src/components/Filters/types';
import {MusicCollection} from 'store/music/types';
import {ActionType, createAction} from 'typesafe-actions';

export const setMusicCollection = createAction(
  'SET_MUSIC_COLLECTION',
  (musicCollection: MusicCollection[]) => ({
    musicCollection,
  }),
)();

export const clearMusicCollection = createAction('CLEAR_MUSIC_COLLECTION')();

export const fetchMusic = createAction('FETCH_MUSIC')();

export const setMusicOffset = createAction(
  'SET_MUSIC_OFFSET',
  (offset: number) => ({
    offset,
  }),
)();

export const setMusicQuery = createAction(
  'SET_MUSIC_QUERY',
  (query: string) => ({
    query,
  }),
)();

export const setMusicFilters = createAction(
  'SET_MUSIC_FILTERS',
  (filters: Filter[]) => ({
    filters,
  }),
)();

export const updateMusicFilters = createAction(
  'UPDATE_MUSIC_FILTERS',
  (filter: Filter) => ({
    filter,
  }),
)();

export const clearMusicFilters = createAction(
  'CLEAR_MUSIC_FILTERS',
  (checked?: boolean) => ({
    checked,
  }),
)();

export type MusicActionTypes = ActionType<
  | typeof setMusicCollection
  | typeof clearMusicCollection
  | typeof setMusicOffset
  | typeof setMusicQuery
  | typeof fetchMusic
  | typeof setMusicFilters
  | typeof updateMusicFilters
  | typeof clearMusicFilters
>;
