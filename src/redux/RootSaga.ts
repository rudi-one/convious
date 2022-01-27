import {REHYDRATE} from 'redux-persist/lib/constants';
import {all, take} from 'redux-saga/effects';
import {appsSaga} from 'store/apps/sagas';
import {musicSaga} from 'store/music/sagas';

export default function* rootSaga() {
  yield take(REHYDRATE);
  yield all([appsSaga(), musicSaga()]);
}
