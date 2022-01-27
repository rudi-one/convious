import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  NavigationProp,
  NavigationPropsList,
  RouteNames,
} from 'navigation/types';
import React, {useEffect} from 'react';
import {FlatList, Image, Linking, ScrollView, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {Loading} from 'src/components/Loading';
import {ScreenShotImage} from 'src/components/ScreenShotImage';
import {ScreenShotProp} from 'src/components/ScreenShotImage/types';
import {getScreenShotUrlsObject} from 'src/screens/AppScreen/helpers';
import styles from './styles';

const AppScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProp<NavigationPropsList, RouteNames.app>>();
  const app = route.params?.app;
  const screenShotsUrls = getScreenShotUrlsObject(app);

  useEffect(() => {
    navigation.setOptions({title: app?.trackName});
  }, [app?.trackName, navigation]);

  const renderImage = ({item}: {item: ScreenShotProp}) => {
    return <ScreenShotImage item={item} />;
  };

  return (
    <ScrollView style={styles.scrollView}>
      {!app && <Loading mode={'absolute'} />}
      <View style={styles.box}>
        <Image
          source={{
            uri: app?.artworkUrl512,
          }}
          style={styles.image}
        />
        <View style={styles.information}>
          <Text style={styles.genre}>{app?.primaryGenreName}</Text>
          <Text style={styles.title}>{app?.trackCensoredName}</Text>
          <Text style={styles.seller}>{app?.sellerName}</Text>
          <Text style={styles.version}>Version: {app?.version}</Text>
          <Text style={styles.contentRating}>
            Content rating: {app?.contentAdvisoryRating}
          </Text>
          <Text style={styles.rating}>
            Rating: {app?.averageUserRating.toFixed(1)}
          </Text>
        </View>
      </View>
      <View>
        <FlatList
          data={screenShotsUrls}
          renderItem={renderImage}
          style={{width: '100%'}}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `${index}-${item.url}`}
        />
      </View>
      {app?.sellerUrl && (
        <Button
          icon={'apple'}
          onPress={() => {
            Linking.openURL(app.sellerUrl);
          }}>
          Go to {app?.sellerName}
        </Button>
      )}
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{app?.description}</Text>
      </View>
    </ScrollView>
  );
};

export default AppScreen;
