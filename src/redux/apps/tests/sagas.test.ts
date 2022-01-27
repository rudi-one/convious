import {testSaga} from 'redux-saga-test-plan';
import Api from 'src/api';
import {mockAppsCollection} from 'src/mocks/mockApps';
import {FETCH_LIMIT} from 'src/utils/consts';
import {fetchAppsSaga} from 'store/apps/sagas';
import {selectOffset, selectTerm} from 'store/apps/selectors';
import util from 'util';

describe('Apps sagas tests', () => {
  it('fetchAppsSaga test', () => {
    util.inspect.defaultOptions.depth = null;

    const api = new Api();
    const offset = 0;
    const term = '';
    const appsCollection = mockAppsCollection;

    testSaga(fetchAppsSaga)
      .next()
      .put({type: 'SET_LOADING', payload: {loading: true}})
      .next()
      .select(selectTerm)
      .next(term)
      .select(selectOffset)
      .next(offset)
      .getContext('api')
      .next(api)
      .call([api, api.get], 'search', {
        limit: FETCH_LIMIT,
        offset: offset,
        term: term,
        media: 'software',
      })
      .next({
        data: {
          results: appsCollection,
        },
      })
      .put({
        type: 'SET_OFFSET',
        payload: {
          offset: FETCH_LIMIT,
        },
      })
      .next()
      .put({
        type: 'SET_APPS_COLLECTION',
        payload: {
          appsCollection: appsCollection,
        },
      })
      .next()
      .put({type: 'SET_LOADING', payload: {loading: false}})
      .next()
      .isDone();
  });
});
