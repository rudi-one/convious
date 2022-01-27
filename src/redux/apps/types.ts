import {CommonCollection} from 'src/common/types';
import {Filter} from 'src/components/Filters/types';

export type AppsState = {
  appsCollection: AppCollection[];
  offset: number;
  term: string;
  filters: Filter[];
};

export interface AppCollection extends CommonCollection {
  artworkUrl512: string;
  screenshotUrls: string[];
  ipadScreenshotUrls: string[];
  appletvScreenshotUrls: [];
  isGameCenterEnabled: false;
  features: string[];
  supportedDevices: string[];
  advisories: string[];
  minimumOsVersion: string;
  languageCodesISO2A: string[];
  fileSizeBytes: string;
  sellerUrl: string;
  formattedPrice: string;
  contentAdvisoryRating: string;
  averageUserRatingForCurrentVersion: number;
  userRatingCountForCurrentVersion: number;
  averageUserRating: number;
  trackContentRating: string;
  bundleId: string;
  primaryGenreId: number;
  genreIds: string[];
  isVppDeviceBasedLicensingEnabled: boolean;
  currentVersionReleaseDate: string;
  sellerName: string;
  releaseNotes: string;
  description: string;
  genres: string[];
  price: number;
  version: string;
  userRatingCount: number;
}
