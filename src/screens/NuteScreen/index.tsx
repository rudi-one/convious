import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  NavigationProp,
  NavigationPropsList,
  RouteNames,
} from 'navigation/types';
import React, {useCallback, useEffect} from 'react';
import {Image, Linking, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import SoundPlayer from 'react-native-sound-player';
import {Loading} from 'src/components/Loading';
import {isIOS} from 'src/utils/consts';
import styles from './styles';

const NuteScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProp<NavigationPropsList, RouteNames.nute>>();
  const item = route.params?.item;

  useEffect(() => {
    navigation.setOptions({title: item?.trackName});
  }, [item?.trackName, navigation]);

  const play = useCallback((url: string | undefined) => {
    if (!url) {
      return;
    }

    try {
      SoundPlayer.playUrl(url);
    } catch (e) {}
  }, []);

  const stop = useCallback(() => {
    try {
      SoundPlayer.stop();
    } catch (e) {}
  }, []);

  return (
    <View style={styles.content}>
      {!item && <Loading mode={'absolute'} />}
      <View style={styles.box}>
        <Image
          source={{
            uri: item?.artworkUrl100,
          }}
          style={styles.image}
        />
        <View style={styles.information}>
          <Text style={styles.genre}>{item?.primaryGenreName}</Text>
          <Text style={styles.title}>{item?.artistName}</Text>
          <Text style={styles.track}>{item?.trackName}</Text>
          <Text style={styles.genre}>{item?.collectionName}</Text>
        </View>
      </View>
      <View>
        {item?.collectionViewUrl && (
          <Button
            icon={'music-note-outline'}
            onPress={() => {
              Linking.openURL(item.collectionViewUrl);
            }}>
            Go to {item?.collectionName}
          </Button>
        )}
      </View>
      {isIOS && (
        <View style={styles.buttons}>
          <Button
            mode="contained"
            icon={'play'}
            onPress={() => play(item?.previewUrl)}>
            Play
          </Button>
          <Button mode="contained" icon={'stop'} onPress={() => stop()}>
            Stop
          </Button>
        </View>
      )}
    </View>
  );
};

export default NuteScreen;
