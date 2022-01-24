import React, {memo} from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import {ScreenShotProp} from './types';

const ScreenShotImageComponent = ({item}: {item: ScreenShotProp}) => {
  return (
    <View style={styles.screenshotContainer}>
      <Image
        source={{
          uri: item.url,
        }}
        style={styles.screenshot}
      />
    </View>
  );
};

export const ScreenShotImage = memo(ScreenShotImageComponent);
