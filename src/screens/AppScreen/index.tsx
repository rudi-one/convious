import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  NavigationProp,
  NavigationPropsList,
  RouteNames,
} from 'navigation/types';
import React, {useEffect} from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import Loading from 'src/components/Loading';
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
          <Text>Seller: {app?.sellerName}</Text>
          <Text>Version: {app?.version}</Text>
          <Text>Min OS Version: {app?.minimumOsVersion}</Text>
          <Text>Content rating: {app?.contentAdvisoryRating}</Text>
          <Text>Rating: {app?.averageUserRating.toFixed(1)}</Text>
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
      <View style={styles.description}>
        <Text>{app?.description}</Text>
        {/*<Text>{app?.supportedDevices}</Text>*/}
      </View>
    </ScrollView>
  );
};

export default AppScreen;
