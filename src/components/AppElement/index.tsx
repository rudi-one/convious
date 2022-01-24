import {useNavigation} from '@react-navigation/native';
import {NavigationProp, RouteNames} from 'navigation/types';
import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import AppProps from 'src/components/AppElement/types';
import styles from './styles';

const AppElementComponent = ({app}: AppProps) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate(RouteNames.app, {app: app});
      }}>
      <View style={styles.imageWrapper}>
        <Image
          source={{
            uri: app.artworkUrl512,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.information}>
        <Text style={styles.genre}>{app.primaryGenreName}</Text>
        <Text style={styles.title}>{app.trackName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const AppElement = memo(AppElementComponent);
