import {
  mockMusicCollection,
  mockMusicFiltersChecked,
} from 'src/mocks/mockMusic';
import {mockState} from 'src/mocks/mockState';
import {
  selectFilteredMusic,
  selectMusic,
  selectMusicFilters,
  selectMusicOffset,
  selectMusicQuery,
} from 'store/music/selectors';

describe('Store music', () => {
  it('should match selectMusic selector', () => {
    const musicCollection = selectMusic(mockState);

    expect(musicCollection).toStrictEqual(mockMusicCollection);
  });
  it('should match selectMusicOffset selector', () => {
    const offet = selectMusicOffset(mockState);

    expect(offet).toStrictEqual(0);
  });
  it('should match selectMusicQuery selector', () => {
    const query = selectMusicQuery(mockState);

    expect(query).toStrictEqual(mockState.musicState.query);
  });
  it('should match selectMusicFilters selector', () => {
    const filters = selectMusicFilters(mockState);

    expect(filters).toStrictEqual(mockMusicFiltersChecked);
  });
  it('should match selectFilteredMusic selector', () => {
    const filters = selectFilteredMusic(mockState);

    expect(filters).toStrictEqual(mockMusicCollection);
  });
});
