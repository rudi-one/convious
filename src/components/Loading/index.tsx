import React, {memo} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Colors} from 'react-native-paper';
import stylesCommon from 'src/common/style';
import {LoadingProps} from 'src/components/Loading/types';
import styles from './styles';

const LoadingComponent = ({mode}: LoadingProps) => {
  return (
    <View
      style={[
        stylesCommon.container,
        mode === 'absolute' ? styles.absolute : null,
      ]}>
      <ActivityIndicator
        animating={true}
        color={Colors.red800}
        size={'large'}
      />
    </View>
  );
};
export const Loading = memo(LoadingComponent);
