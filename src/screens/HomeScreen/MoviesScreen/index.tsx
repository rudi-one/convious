import {useNavigation} from '@react-navigation/native';
import {NavigationProp, RouteNames} from 'navigation/types';
import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import stylesCommon from 'src/common/style';

export const MoviesScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={stylesCommon.container}>
      <Text>Movies</Text>
      <Button
        icon="camera"
        onPress={() => navigation.navigate(RouteNames.albums)}>
        Press me
      </Button>
    </View>
  );
};
