import {produce} from 'immer';
import {getType} from 'typesafe-actions';
import {
  clearMusicCollection,
  MusicActionTypes,
  setMusicCollection,
  setMusicFilters,
  setMusicOffset,
  setMusicQuery,
  updateMusicFilters,
} from './actions';
import {MusicState} from './types';

const initalState: MusicState = {
  musicCollection: [],
  offset: 0,
  query: '',
  filters: [],
};

const MusicReducer = (state = initalState, action: MusicActionTypes) => {
  return produce(state, (state: Partial<MusicState>) => {
    switch (action.type) {
      case getType(setMusicCollection): {
        const {musicCollection} = action.payload;
        if (!state.musicCollection?.length) {
          state.musicCollection = musicCollection;

          break;
        }

        state.musicCollection = state.musicCollection?.concat(musicCollection);
        break;
      }
      case getType(clearMusicCollection): {
        state.musicCollection = [];
        break;
      }
      case getType(setMusicOffset): {
        state.offset = action.payload.offset;
        break;
      }
      case getType(setMusicQuery): {
        state.query = action.payload.query;
        break;
      }
      case getType(setMusicFilters): {
        state.filters = action.payload.filters;
        break;
      }
      case getType(updateMusicFilters): {
        const filterToUpdate = action.payload.filter;

        state.filters = state.filters?.map(filter => ({
          ...filter,
          checked:
            filterToUpdate.name === filter.name
              ? filterToUpdate.checked
              : filter.checked,
        }));
        break;
      }
    }
  });
};

export default MusicReducer;
