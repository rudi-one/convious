import {RootState} from 'store/RootReducer';

export const selectApps = (state: RootState) => state.appsState.appsCollection;

export const selectOffset = (state: RootState) => state.appsState.offset;

export const selectTerm = (state: RootState) => state.appsState.term;
