import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from 'src/utils/helpers';

const styles = StyleSheet.create({
  screenshot: {
    width: horizontalScale(200),
    height: verticalScale(320),
  },
  screenshotContainer: {
    width: horizontalScale(205),
    height: verticalScale(320),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
