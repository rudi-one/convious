import {renderHook} from '@testing-library/react-hooks';
import {useDispatch} from 'react-redux';
import useApps from 'src/hooks/useApps';
import {APPS_CATEGORIES} from 'src/utils/consts';

describe('useApps hook test', () => {
  it('getApps function should dispatch fetching apps', () => {
    const dispatchSpy = jest.fn();
    jest.mocked(useDispatch).mockReturnValue(dispatchSpy);

    const {result} = renderHook(() => useApps());

    result.current.getApps();

    expect(dispatchSpy).toBeCalledTimes(2);
    expect(dispatchSpy).toBeCalledWith({
      type: 'FETCH_APPS',
    });
    expect(dispatchSpy).toBeCalledWith({
      type: 'SET_FILTERS',
      payload: {
        filters: APPS_CATEGORIES.map(category => ({
          name: category,
          checked: true,
        })),
      },
    });
  });
  it('search function should dispatch proper actions when queryText length > 3', () => {
    const dispatchSpy = jest.fn();
    jest.mocked(useDispatch).mockReturnValue(dispatchSpy);

    const queryText = 'uber';
    const {result} = renderHook(() => useApps());

    result.current.search(queryText);

    expect(dispatchSpy).toBeCalledTimes(6);
    expect(dispatchSpy).toBeCalledWith({
      type: 'SET_FILTERS',
      payload: {
        filters: APPS_CATEGORIES.map(category => ({
          name: category,
          checked: true,
        })),
      },
    });
    expect(dispatchSpy).toBeCalledWith({
      type: 'CLEAR_APPS_COLLECTION',
    });
    expect(dispatchSpy).toBeCalledWith({
      type: 'SET_OFFSET',
      payload: {
        offset: 0,
      },
    });
    expect(dispatchSpy).toBeCalledWith({
      type: 'SET_TERM',
      payload: {
        term: queryText,
      },
    });
    expect(dispatchSpy).toBeCalledWith({
      type: 'FETCH_APPS',
    });
  });
  it('search function should not dispatch any actions when queryText length < 4', () => {
    const dispatchSpy = jest.fn();
    jest.mocked(useDispatch).mockReturnValue(dispatchSpy);

    const queryText = 'ube';
    const {result} = renderHook(() => useApps());

    result.current.search(queryText);

    expect(dispatchSpy).toBeCalledTimes(1);
    expect(dispatchSpy).toBeCalledWith({
      type: 'SET_FILTERS',
      payload: {
        filters: APPS_CATEGORIES.map(category => ({
          name: category,
          checked: true,
        })),
      },
    });
  });
  it('filter function should dispatch action update filters', () => {
    const dispatchSpy = jest.fn();
    jest.mocked(useDispatch).mockReturnValue(dispatchSpy);

    const {result} = renderHook(() => useApps());

    const filter = {
      name: APPS_CATEGORIES[0],
      checked: true,
    };

    result.current.filter(filter);

    expect(dispatchSpy).toBeCalledTimes(2);
    expect(dispatchSpy).toBeCalledWith({
      type: 'SET_FILTERS',
      payload: {
        filters: APPS_CATEGORIES.map(category => ({
          name: category,
          checked: true,
        })),
      },
    });
    expect(dispatchSpy).toBeCalledWith({
      type: 'UPDATE_FILTERS',
      payload: {
        filter: filter,
      },
    });
  });
  it('clear function should dispatch action set filters', () => {
    const dispatchSpy = jest.fn();
    jest.mocked(useDispatch).mockReturnValue(dispatchSpy);

    const {result} = renderHook(() => useApps());

    result.current.clear();

    expect(dispatchSpy).toBeCalledTimes(2);
    expect(dispatchSpy).toBeCalledWith({
      type: 'SET_FILTERS',
      payload: {
        filters: APPS_CATEGORIES.map(category => ({
          name: category,
          checked: true,
        })),
      },
    });
    expect(dispatchSpy).toBeCalledWith({
      type: 'SET_FILTERS',
      payload: {
        filters: APPS_CATEGORIES.map(category => ({
          name: category,
          checked: true,
        })),
      },
    });
  });
});
