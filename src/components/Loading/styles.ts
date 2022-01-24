import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';
import {verticalScale} from 'src/utils/helpers';

const styles = StyleSheet.create({
  text: {
    paddingVertical: verticalScale(30),
    fontSize: 24,
  },
  absolute: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.grey100,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
