import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppsCollection} from 'store/apps/types';

export enum RouteNames {
  home = 'home',
  movies = 'movies',
  music = 'music',
  albums = 'albums',
  apps = 'apps',
  app = 'app',
}

export type NavigationPropsList = {
  [RouteNames.home]: undefined;
  [RouteNames.movies]: undefined;
  [RouteNames.music]: undefined;
  [RouteNames.albums]: undefined;
  [RouteNames.apps]: undefined;
  [RouteNames.app]:
    | {
        app: AppsCollection;
      }
    | undefined;
};

export type NavigationProp = NativeStackNavigationProp<NavigationPropsList>;
