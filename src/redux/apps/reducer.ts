import {produce} from 'immer';
import {getType} from 'typesafe-actions';
import {
  AppsActionTypes,
  clearAppsCollection,
  setAppsCollection,
  setOffset,
  setTerm,
} from './actions';
import {AppsState} from './types';

const initalState: AppsState = {
  appsCollection: [],
  offset: 0,
  term: '',
};

const AppReducer = (state = initalState, action: AppsActionTypes) => {
  return produce(state, (state: Partial<AppsState>) => {
    switch (action.type) {
      case getType(setAppsCollection): {
        const {appsCollection} = action.payload;
        if (!state.appsCollection?.length) {
          state.appsCollection = appsCollection;

          break;
        }

        state.appsCollection = state.appsCollection?.concat(appsCollection);
        break;
      }
      case getType(clearAppsCollection): {
        state.appsCollection = [];
        break;
      }
      case getType(setOffset): {
        state.offset = action.payload.offset;
        break;
      }
      case getType(setTerm): {
        state.term = action.payload.term;
        break;
      }
    }
  });
};

export default AppReducer;
