import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';
import {horizontalScale, moderateScale, verticalScale} from 'src/utils/helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: moderateScale(5),
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginBottom: verticalScale(10),
  },
  image: {
    width: horizontalScale(80),
    height: verticalScale(80),
    borderRadius: 10,
  },
  imageWrapper: {
    padding: moderateScale(5),
    borderRadius: 10,
    borderColor: Colors.grey400,
  },
  information: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: verticalScale(10),
  },
  genre: {
    fontSize: 15,
    color: Colors.cyan800,
  },
  title: {
    fontSize: 20,
    paddingVertical: verticalScale(5),
  },
});

export default styles;
