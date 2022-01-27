import {AxiosResponse} from 'axios';
import {call, getContext, put, select, takeEvery} from 'redux-saga/effects';
import Api from 'src/api';
import {FETCH_LIMIT} from 'src/utils/consts';
import {
  fetchMusic,
  setMusicCollection,
  setMusicOffset,
} from 'store/music/actions';
import {selectMusicOffset, selectMusicQuery} from 'store/music/selectors';
import {MusicCollection} from 'store/music/types';
import {setLoading} from 'store/ui/loading/actions';
import {setSnackbar} from 'store/ui/snackbar/actions';
import {getType} from 'typesafe-actions';

export function* fetchMusicSaga() {
  try {
    yield put(setLoading(true));
    const term: string = yield select(selectMusicQuery);
    const offset: number = yield select(selectMusicOffset);

    const api: Api = yield getContext('api');

    const results: AxiosResponse = yield call([api, api.get], 'search', {
      limit: FETCH_LIMIT,
      offset: offset,
      term: term,
      media: 'music',
    });

    const musicData: MusicCollection[] = results.data.results;

    yield put(setMusicOffset(offset + FETCH_LIMIT));
    yield put(setMusicCollection(musicData));
  } catch (e) {
    yield put(setSnackbar((e as Error).message));
  } finally {
    yield put(setLoading(false));
  }
}

export function* musicSaga() {
  yield takeEvery(getType(fetchMusic), fetchMusicSaga);
}
