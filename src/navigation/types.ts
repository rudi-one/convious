import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppCollection} from 'store/apps/types';
import {MusicCollection} from 'store/music/types';

export enum RouteNames {
  home = 'home',
  apps = 'apps',
  app = 'app',
  music = 'music',
  nute = 'nute',
  credits = 'credits',
}

export type NavigationPropsList = {
  [RouteNames.home]: undefined;
  [RouteNames.apps]: undefined;
  [RouteNames.app]:
    | {
        app: AppCollection;
      }
    | undefined;
  [RouteNames.music]: undefined;
  [RouteNames.nute]:
    | {
        item: MusicCollection;
      }
    | undefined;
  [RouteNames.credits]: undefined;
};

export type NavigationProp = NativeStackNavigationProp<NavigationPropsList>;
