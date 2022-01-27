import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';
import {horizontalScale, moderateScale, verticalScale} from 'src/utils/helpers';

const styles = StyleSheet.create({
  image: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: 10,
  },
  imageWrapper: {
    padding: moderateScale(5),
    borderRadius: 10,
    borderColor: Colors.grey400,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 8,
    margin: moderateScale(10),
    padding: moderateScale(12),
    width: '100%',
  },
  information: {
    flex: 1,
    paddingHorizontal: horizontalScale(16),
    flexGrow: 1,
  },
  genre: {
    fontSize: 14,
    color: Colors.cyan800,
  },
  title: {
    fontSize: 22,
    color: Colors.black,
    paddingVertical: verticalScale(5),
  },
  track: {
    fontSize: 18,
    paddingBottom: verticalScale(5),
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
});

export default styles;
