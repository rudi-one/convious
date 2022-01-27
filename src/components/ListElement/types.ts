import {AppCollection} from 'store/apps/types';
import {MusicCollection} from 'store/music/types';

interface ElementProps {
  imageUrl: string;
  item: AppCollection | MusicCollection;
  showArtist?: boolean;
  navigate: () => void;
}

export default ElementProps;
