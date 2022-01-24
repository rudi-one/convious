import {produce} from 'immer';
import {LoadingActionTypes, setLoading} from 'store/ui/loading/actions';
import {getType} from 'typesafe-actions';
import {LoadingState} from './types';

const initalState: LoadingState = {
  loading: false,
};

const LoadingReducer = (state = initalState, action: LoadingActionTypes) => {
  return produce(state, (state: Partial<LoadingState>) => {
    switch (action.type) {
      case getType(setLoading): {
        state.loading = action.payload.loading;
        break;
      }
    }
  });
};

export default LoadingReducer;
