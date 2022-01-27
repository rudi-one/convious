import {RootState} from 'store/RootReducer';

export const selectApps = (state: RootState) => state.appsState.appsCollection;

export const selectFilteredApps = (state: RootState) => {
  const apps = selectApps(state);
  const filters = selectFilters(state);

  return apps.filter(
    app =>
      filters.find(filter => filter.name === app.primaryGenreName)?.checked,
  );
};

export const selectOffset = (state: RootState) => state.appsState.offset;

export const selectTerm = (state: RootState) => state.appsState.term;

export const selectFilters = (state: RootState) => state.appsState.filters;
