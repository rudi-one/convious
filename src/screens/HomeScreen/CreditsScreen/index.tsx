import React from 'react';
import {Text, View} from 'react-native';
import stylesCommon from 'src/common/style';
import styles from './styles';

export const CreditsScreen = () => {
  return (
    <View style={stylesCommon.container}>
      <Text style={styles.quote}>Developer: Michal Rudzinski</Text>
      <Text style={styles.text}>Application: Convious</Text>
      <Text style={styles.text}>
        For position: React Native Mobile Developer
      </Text>
      <Text style={styles.quote}>
        “The journey of a thousand miles begins with one step.”
      </Text>
      <Text>Lao Tzu</Text>
    </View>
  );
};

export default CreditsScreen;
