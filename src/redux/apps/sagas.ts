import {AxiosResponse} from 'axios';
import {call, getContext, put, select, takeEvery} from 'redux-saga/effects';
import Api from 'src/api';
import {FETCH_LIMIT} from 'src/utils/consts';
import {fetchApps, setAppsCollection, setOffset} from 'store/apps/actions';
import {selectOffset, selectTerm} from 'store/apps/selectors';
import {setLoading} from 'store/ui/loading/actions';
import {getType} from 'typesafe-actions';

export function* fetchAppsSaga() {
  try {
    yield put(setLoading(true));
    const term: string = yield select(selectTerm);
    const offset: number = yield select(selectOffset);

    const api: Api = yield getContext('api');

    const results: AxiosResponse = yield call([api, api.get], 'search', {
      limit: FETCH_LIMIT,
      offset: offset,
      term: term,
      media: 'software',
    });

    const appsData: [] = results.data.results;

    yield put(setOffset(offset + FETCH_LIMIT));
    yield put(setAppsCollection(appsData));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(setLoading(false));
  }
}

export function* appsSaga() {
  yield takeEvery(getType(fetchApps), fetchAppsSaga);
}
