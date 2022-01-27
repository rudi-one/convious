import {useNavigation} from '@react-navigation/native';
import {NavigationProp, RouteNames} from 'navigation/types';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {Button, Colors, Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import stylesCommon from 'src/common/style';
import {Filters} from 'src/components/Filters';
import {ListElement} from 'src/components/ListElement';
import {Loading} from 'src/components/Loading';
import {SearchBar} from 'src/components/SearchBar';
import useMusic from 'src/hooks/useMusic';
import {MusicCollection} from 'store/music/types';
import {selectLoading} from 'store/ui/loading/selectors';

export const MusicScreen = () => {
  const isLoading = useSelector(selectLoading);
  const {music, getMusic, search, filters, filter, clear} = useMusic();
  const [visible, setVisible] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    clear(true);
  }, [clear]);

  const renderApp = useCallback(
    ({item}: {item: MusicCollection}) => {
      return (
        <ListElement
          item={item}
          showArtist={true}
          imageUrl={item.artworkUrl100}
          navigate={() => navigation.navigate(RouteNames.nute, {item: item})}
        />
      );
    },
    [navigation],
  );

  const ListFooter = () => {
    return (
      <Button icon="dots-horizontal" onPress={() => getMusic()}>
        Load more
      </Button>
    );
  };

  return (
    <View style={stylesCommon.container}>
      <SearchBar onSearch={search} />
      <View style={stylesCommon.listWrapper}>
        {isLoading && <Loading mode={'absolute'} />}
        {music.length ? (
          <FlatList
            style={stylesCommon.list}
            data={music}
            renderItem={renderApp}
            keyExtractor={(item, index) => `${index}-${item.trackCensoredName}`}
            ListFooterComponent={ListFooter}
            maintainVisibleContentPosition={{
              minIndexForVisible: 0,
            }}
            scrollEventThrottle={20}
          />
        ) : (
          <>
            <Text style={stylesCommon.noresults}>No music results</Text>
            <Text style={stylesCommon.noresults}>Have you set filters?</Text>
          </>
        )}
      </View>
      <Button
        icon={'filter'}
        color={Colors.white}
        style={stylesCommon.filterButton}
        onPress={() => setVisible(true)}>
        Filter
      </Button>
      <Filters
        visible={visible}
        setVisible={setVisible}
        filters={filters}
        filter={filter}
        clear={clear}
      />
    </View>
  );
};
