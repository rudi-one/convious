import React from 'react';
import {Text, View} from 'react-native';
import stylesCommon from 'src/common/style';

const FatalError: React.FC = () => {
  return (
    <View style={stylesCommon.container}>
      <Text>Critical error</Text>
      <Text>'Please reload the application'</Text>
    </View>
  );
};

export default FatalError;
