import {testSaga} from 'redux-saga-test-plan';
import Api from 'src/api';
import {mockMusicCollection} from 'src/mocks/mockMusic';
import {FETCH_LIMIT} from 'src/utils/consts';
import {fetchMusicSaga} from 'store/music/sagas';
import {selectMusicOffset, selectMusicQuery} from 'store/music/selectors';
import util from 'util';

describe('Music sagas tests', () => {
  it('fetchMusicSaga test', () => {
    util.inspect.defaultOptions.depth = null;

    const api = new Api();
    const offset = 0;
    const query = '';
    const musicCollection = mockMusicCollection;

    testSaga(fetchMusicSaga)
      .next()
      .put({type: 'SET_LOADING', payload: {loading: true}})
      .next()
      .select(selectMusicQuery)
      .next(query)
      .select(selectMusicOffset)
      .next(offset)
      .getContext('api')
      .next(api)
      .call([api, api.get], 'search', {
        limit: FETCH_LIMIT,
        offset: offset,
        term: query,
        media: 'music',
      })
      .next({
        data: {
          results: musicCollection,
        },
      })
      .put({
        type: 'SET_MUSIC_OFFSET',
        payload: {
          offset: FETCH_LIMIT,
        },
      })
      .next()
      .put({
        type: 'SET_MUSIC_COLLECTION',
        payload: {
          musicCollection: musicCollection,
        },
      })
      .next()
      .put({type: 'SET_LOADING', payload: {loading: false}})
      .next()
      .isDone();
  });
});
