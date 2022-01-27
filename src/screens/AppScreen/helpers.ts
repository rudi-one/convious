import {ScreenShotProp} from 'src/components/ScreenShotImage/types';
import {AppCollection} from 'store/apps/types';

export const getScreenShotUrlsObject = (
  app?: AppCollection,
): ScreenShotProp[] => {
  const urls = app?.screenshotUrls.length
    ? app?.screenshotUrls
    : app?.ipadScreenshotUrls.length
    ? app?.ipadScreenshotUrls
    : [];

  return urls.map(item => ({url: item}));
};
