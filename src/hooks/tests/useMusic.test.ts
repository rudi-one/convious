import {renderHook} from '@testing-library/react-hooks';
import {useDispatch} from 'react-redux';
import useMusic from 'src/hooks/useMusic';
import {MUSIC_CATEGORIES} from 'src/utils/consts';

describe('useMusic hook test', () => {
  it('getMusic function should dispatch fetching music', () => {
    const dispatchSpy = jest.fn();
    jest.mocked(useDispatch).mockReturnValue(dispatchSpy);

    const {result} = renderHook(() => useMusic());

    result.current.getMusic();

    expect(dispatchSpy).toBeCalledTimes(1);
    expect(dispatchSpy).toBeCalledWith({
      type: 'FETCH_MUSIC',
    });
  });
  it('search function should dispatch proper actions when queryText length > 3', () => {
    const dispatchSpy = jest.fn();
    jest.mocked(useDispatch).mockReturnValue(dispatchSpy);

    const queryText = 'lopez';
    const {result} = renderHook(() => useMusic());

    result.current.search(queryText);

    expect(dispatchSpy).toBeCalledTimes(5);
    expect(dispatchSpy).toBeCalledWith({
      type: 'CLEAR_MUSIC_COLLECTION',
    });
    expect(dispatchSpy).toBeCalledWith({
      type: 'SET_MUSIC_OFFSET',
      payload: {
        offset: 0,
      },
    });
    expect(dispatchSpy).toBeCalledWith({
      type: 'SET_MUSIC_QUERY',
      payload: {
        query: queryText,
      },
    });
    expect(dispatchSpy).toBeCalledWith({
      type: 'FETCH_MUSIC',
    });
    expect(dispatchSpy).toBeCalledWith({
      type: 'CLEAR_MUSIC_FILTERS',
      payload: {
        checked: true,
      },
    });
  });
  it('search function should not dispatch any actions when queryText length < 4', () => {
    const dispatchSpy = jest.fn();
    jest.mocked(useDispatch).mockReturnValue(dispatchSpy);

    const queryText = 'lop';
    const {result} = renderHook(() => useMusic());

    result.current.search(queryText);

    expect(dispatchSpy).toBeCalledTimes(0);
  });
  it('filter function should dispatch action update filters', () => {
    const dispatchSpy = jest.fn();
    jest.mocked(useDispatch).mockReturnValue(dispatchSpy);

    const {result} = renderHook(() => useMusic());

    const filter = {
      name: MUSIC_CATEGORIES[0],
      checked: true,
    };

    result.current.filter(filter);

    expect(dispatchSpy).toBeCalledTimes(1);
    expect(dispatchSpy).toBeCalledWith({
      type: 'UPDATE_MUSIC_FILTERS',
      payload: {
        filter: filter,
      },
    });
  });
  it('clear function should dispatch action clear filters with check parameter true', () => {
    const dispatchSpy = jest.fn();
    jest.mocked(useDispatch).mockReturnValue(dispatchSpy);

    const {result} = renderHook(() => useMusic());

    result.current.clear(true);

    expect(dispatchSpy).toBeCalledTimes(1);
    expect(dispatchSpy).toBeCalledWith({
      type: 'CLEAR_MUSIC_FILTERS',
      payload: {
        checked: true,
      },
    });
  });
  it('clear function should dispatch action clear filters with check parameter false', () => {
    const dispatchSpy = jest.fn();
    jest.mocked(useDispatch).mockReturnValue(dispatchSpy);

    const {result} = renderHook(() => useMusic());

    result.current.clear(false);

    expect(dispatchSpy).toBeCalledTimes(1);
    expect(dispatchSpy).toBeCalledWith({
      type: 'CLEAR_MUSIC_FILTERS',
      payload: {
        checked: false,
      },
    });
  });
});
