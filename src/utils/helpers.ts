import {Alert, BackHandler, Dimensions, PixelRatio} from 'react-native';

export const logJsError = () => {
  return async (e: Error) => {
    const title = 'Unexpected error occurred';
    const message = `${e.name} ${e.message}.
    Please close the app and start again!`;
    const closeButton = {
      text: 'Close',
      onPress: () => {
        BackHandler.exitApp();
      },
    };

    Alert.alert(title, message, [closeButton]);
  };
};

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

// Scale based on width
export const horizontalScale = (size: number) => {
  return PixelRatio.roundToNearestPixel(
    (windowWidth / guidelineBaseWidth) * size,
  );
};

// Scale based on height
export const verticalScale = (size: number) => {
  return PixelRatio.roundToNearestPixel(
    (windowHeight / guidelineBaseHeight) * size,
  );
};

// Scale with both axis
export const moderateScale = (size: number, factor = 1.5) => {
  return PixelRatio.roundToNearestPixel(
    size + (horizontalScale(size) - size) * factor,
  );
};
