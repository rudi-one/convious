import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ElementProps from 'src/components/ListElement/types';
import styles from './styles';

const ListElementComponent = ({
  item,
  imageUrl,
  showArtist,
  navigate,
}: ElementProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={navigate}>
      <View style={styles.imageWrapper}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.information}>
        <Text style={styles.genre}>{item.primaryGenreName}</Text>
        <Text style={styles.title}>
          {showArtist
            ? `${item.artistName}: ${item.trackName}`
            : item.trackName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const ListElement = memo(ListElementComponent);
