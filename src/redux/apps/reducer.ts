import {produce} from 'immer';
import {APPS_CATEGORIES} from 'src/utils/consts';
import {getType} from 'typesafe-actions';
import {
  AppsActionTypes,
  clearAppsCollection,
  clearFiters,
  setAppsCollection,
  setFilters,
  setOffset,
  setTerm,
  updateFilters,
} from './actions';
import {AppsState} from './types';

const initalState: AppsState = {
  appsCollection: [],
  offset: 0,
  term: '',
  filters: [],
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
      case getType(setFilters): {
        state.filters = action.payload.filters;
        break;
      }
      case getType(updateFilters): {
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
      case getType(clearFiters): {
        const checked = action.payload.checked;

        state.filters = APPS_CATEGORIES.map(category => ({
          name: category,
          checked: !!checked,
        }));
        break;
      }
    }
  });
};

export default AppReducer;
