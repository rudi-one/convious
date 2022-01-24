import {StyleSheet} from 'react-native';
import {moderateScale} from 'src/utils/helpers';

const stylesCommon = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(10),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default stylesCommon;
