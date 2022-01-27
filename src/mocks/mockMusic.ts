import {MusicState} from 'store/music/types';

export const mockMusicCollection1 = {
  artistId: 398128,
  artistName:
    'Justin Timberlake, Anna Kendrick, Gwen Stefani, James Corden, Zooey Deschanel, Ron Funches, Caroline Hjelt, Aino Jawo, Christopher Mintz-Plasse & Kunal Nayyar',
  artistViewUrl:
    'https://music.apple.com/us/artist/justin-timberlake/398128?uo=4',
  artworkUrl30:
    'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/56/a5/be/56a5be25-a9d3-2bcf-dd88-aa5d99280cb5/source/30x30bb.jpg',
  artworkUrl60:
    'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/56/a5/be/56a5be25-a9d3-2bcf-dd88-aa5d99280cb5/source/60x60bb.jpg',
  artworkUrl100:
    'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/56/a5/be/56a5be25-a9d3-2bcf-dd88-aa5d99280cb5/source/100x100bb.jpg',
  collectionArtistId: 80204262,
  collectionArtistName: 'Various Artists',
  collectionCensoredName: 'Trolls (Original Motion Picture Soundtrack)',
  collectionExplicitness: 'notExplicit',
  collectionId: 1154238159,
  collectionName: 'Trolls (Original Motion Picture Soundtrack)',
  collectionPrice: 9.99,
  collectionViewUrl:
    'https://music.apple.com/us/album/cant-stop-the-feeling-film-version/1154238159?i=1154239655&uo=4',
  country: 'USA',
  currency: 'USD',
  discCount: 1,
  discNumber: 1,
  isStreamable: true,
  kind: 'song',
  previewUrl:
    'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/49/73/96/4973965c-4911-3a43-8a3a-186ccba65487/mzaf_12855775909541471572.plus.aac.p.m4a',
  primaryGenreName: 'Soundtrack',
  releaseDate: '2016-09-23T07:00:00Z',
  trackCensoredName: "Can't Stop the Feeling! (Film Version)",
  trackCount: 12,
  trackExplicitness: 'notExplicit',
  trackId: 1154239655,
  trackName: "Can't Stop the Feeling!",
  trackNumber: 10,
  trackPrice: 1.29,
  trackTimeMillis: 237400,
  trackViewUrl:
    'https://music.apple.com/us/album/cant-stop-the-feeling-film-version/1154238159?i=1154239655&uo=4',
};

export const mockMusicCollection2 = {
  artistId: 398128,
  artistName: 'Justin Timberlake',
  artistViewUrl:
    'https://music.apple.com/us/artist/justin-timberlake/398128?uo=4',
  artworkUrl30:
    'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/1c/a4/12/1ca4122d-d9d1-e437-502b-7c408f7d8451/source/30x30bb.jpg',
  artworkUrl60:
    'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/1c/a4/12/1ca4122d-d9d1-e437-502b-7c408f7d8451/source/60x60bb.jpg',
  artworkUrl100:
    'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/1c/a4/12/1ca4122d-d9d1-e437-502b-7c408f7d8451/source/100x100bb.jpg',
  collectionCensoredName: 'The 20/20 Experience (Deluxe Version)',
  collectionExplicitness: 'explicit',
  collectionId: 1441493446,
  collectionName: 'The 20/20 Experience (Deluxe Version)',
  collectionPrice: 9.99,
  collectionViewUrl:
    'https://music.apple.com/us/album/suit-tie-feat-jay-z/1441493446?i=1441493469&uo=4',
  contentAdvisoryRating: 'Explicit',
  country: 'USA',
  currency: 'USD',
  discCount: 1,
  discNumber: 1,
  isStreamable: true,
  kind: 'song',
  previewUrl:
    'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/d0/2f/a7/d02fa7ac-b751-009b-9357-5ead1df3e081/mzaf_16546134282981501781.plus.aac.p.m4a',
  primaryGenreName: 'Pop',
  releaseDate: '2013-01-15T12:00:00Z',
  trackCensoredName: 'Suit & Tie (feat. JAY-Z)',
  trackCount: 12,
  trackExplicitness: 'explicit',
  trackId: 1441493469,
  trackName: 'Suit & Tie (feat. JAY-Z)',
  trackNumber: 2,
  trackPrice: 1.29,
  trackTimeMillis: 326272,
  trackViewUrl:
    'https://music.apple.com/us/album/suit-tie-feat-jay-z/1441493446?i=1441493469&uo=4',
};

export const mockMusicCollection = [mockMusicCollection1, mockMusicCollection2];

export const mockMusicFiltersChecked = [
  {checked: true, name: 'Artist'},
  {
    checked: true,
    name: 'Musicals',
  },
  {checked: true, name: 'Pop'},
  {checked: true, name: 'Rock'},
  {
    checked: true,
    name: 'Holiday',
  },
  {checked: true, name: 'Dance'},
  {checked: true, name: 'Alternative'},
  {
    checked: true,
    name: 'Hard Rock',
  },
  {checked: true, name: 'Metal'},
  {checked: true, name: 'New Wave'},
  {
    checked: true,
    name: 'Dubstep',
  },
  {checked: true, name: 'Electronic'},
  {checked: true, name: 'Hip-Hop/Rap'},
  {
    checked: true,
    name: 'R&B/Soul',
  },
  {checked: true, name: 'Contemporary Jazz'},
  {checked: true, name: 'Worldwide'},
  {
    checked: true,
    name: 'House',
  },
  {checked: true, name: 'Latin'},
  {checked: true, name: 'Pop Latino'},
  {checked: true, name: 'Techno'},
  {checked: true, name: 'Soundtrack'},
];

export const mockMusicFiltersUnchecked = [
  {checked: false, name: 'Artist'},
  {
    checked: false,
    name: 'Musicals',
  },
  {checked: false, name: 'Pop'},
  {checked: false, name: 'Rock'},
  {
    checked: false,
    name: 'Holiday',
  },
  {checked: false, name: 'Dance'},
  {checked: false, name: 'Alternative'},
  {
    checked: false,
    name: 'Hard Rock',
  },
  {checked: false, name: 'Metal'},
  {checked: false, name: 'New Wave'},
  {
    checked: false,
    name: 'Dubstep',
  },
  {checked: false, name: 'Electronic'},
  {checked: false, name: 'Hip-Hop/Rap'},
  {
    checked: false,
    name: 'R&B/Soul',
  },
  {checked: false, name: 'Contemporary Jazz'},
  {checked: false, name: 'Worldwide'},
  {
    checked: false,
    name: 'House',
  },
  {checked: false, name: 'Latin'},
  {checked: false, name: 'Pop Latino'},
  {checked: false, name: 'Techno'},
  {checked: false, name: 'Soundtrack'},
];

export const mockMusicState: MusicState = {
  musicCollection: mockMusicCollection,
  offset: 0,
  query: 'lopez',
  filters: mockMusicFiltersChecked,
};

export const mockEmptyMusicState: MusicState = {
  musicCollection: [],
  offset: 0,
  query: '',
  filters: [],
};
