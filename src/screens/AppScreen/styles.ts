import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';
import {horizontalScale, moderateScale, verticalScale} from 'src/utils/helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(20),
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
  scrollView: {
    flex: 1,
  },
  ScrollViewContainer: {
    flex: 1,
    flexGrow: 1,
  },
  installButton: {
    position: 'absolute',
    right: moderateScale(10),
    bottom: 0,
  },
  description: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    margin: moderateScale(10),
    padding: moderateScale(12),
  },
});

export default styles;
