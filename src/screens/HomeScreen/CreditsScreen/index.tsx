import React from 'react';
import {Text, View} from 'react-native';
import stylesCommon from 'src/common/style';

export const CreditsScreen = () => {
  return (
    <View style={stylesCommon.container}>
      <Text>Developer: Michal Rudzinski</Text>
      <Text>Application: Convious</Text>
      <Text>For position: Mobile Developer</Text>
      <Text
        style={{
          padding: 40,
          paddingBottom: 10,
          textAlign: 'center',
          fontSize: 20,
        }}>
        “The journey of a thousand miles begins with one step.”
      </Text>
      <Text>Lao Tzu</Text>
    </View>
  );
};

export default CreditsScreen;
