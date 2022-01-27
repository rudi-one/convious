import {CommonCollection} from 'src/common/types';
import {Filter} from 'src/components/Filters/types';

export interface MusicState {
  musicCollection: MusicCollection[];
  offset: number;
  query: string;
  filters: Filter[];
}

export interface MusicCollection extends CommonCollection {
  artworkUrl30: string;
  collectionCensoredName: string;
  collectionExplicitness: string;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  collectionViewUrl: string;
  country: string;
  discCount: number;
  discNumber: number;
  isStreamable: boolean;
  previewUrl: string;
  trackCensoredName: string;
  trackCount: number;
  trackExplicitness: string;
  trackId: number;
  trackName: string;
  trackNumber: number;
  trackPrice: string;
  trackTimeMillis: number;
  trackViewUrl: string;
}
