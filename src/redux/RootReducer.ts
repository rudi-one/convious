import AsyncStorage from '@react-native-async-storage/async-storage';
import {enableES5} from 'immer';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AppReducer from 'store/apps/reducer';
import LoadingReducer from 'store/ui/loading/reducer';

enableES5();

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const uiReducer = combineReducers({
  loadingState: LoadingReducer,
});

export const rootReducer = combineReducers({
  appsState: AppReducer,
  uiState: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
