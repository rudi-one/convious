import {StyleSheet} from 'react-native';
import {verticalScale} from 'src/utils/helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    maxWidth: verticalScale(250),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  input: {},
});

export default styles;
