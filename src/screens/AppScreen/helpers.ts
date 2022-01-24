import {ScreenShotProp} from 'src/screens/AppScreen/type';
import {AppsCollection} from 'store/apps/types';

export const getScreenShotUrlsObject = (
  app?: AppsCollection,
): ScreenShotProp[] => {
  const urls = app?.ipadScreenshotUrls.length
    ? app?.ipadScreenshotUrls
    : app?.screenshotUrls.length
    ? app?.screenshotUrls
    : [];

  return urls.map(item => ({url: item}));
};
