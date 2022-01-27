import React, {memo} from 'react';
import {Text, View} from 'react-native';
import stylesCommon from 'src/common/style';
import SafeArea from 'src/components/SafeArea';

const FatalErrorComponent: React.FC = () => {
  return (
    <SafeArea>
      <View style={stylesCommon.container}>
        <Text>Critical error</Text>
        <Text>Please reload the application</Text>
        <Text style={{paddingVertical: 20}}>
          “Big things have small beginnings.” ~ Promethus
        </Text>
      </View>
    </SafeArea>
  );
};

export const FatalError = memo(FatalErrorComponent);
