import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';
import {moderateScale} from 'src/utils/helpers';

const stylesCommon = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  listWrapper: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  list: {
    width: '100%',
  },
  noresults: {fontSize: 20},
  filterButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: Colors.lightBlue600,
  },
});

export default stylesCommon;
