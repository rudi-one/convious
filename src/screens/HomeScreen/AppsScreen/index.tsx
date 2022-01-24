import React, {useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import stylesCommon from 'src/common/style';
import {AppElement} from 'src/components/AppElement';
import Loading from 'src/components/Loading';
import SearchBar from 'src/components/SearchBar';
import useApps from 'src/hooks/useApps';
import styles from 'src/screens/HomeScreen/AppsScreen/styles';
import {selectApps} from 'store/apps/selectors';
import {AppsCollection} from 'store/apps/types';
import {selectLoading} from 'store/ui/loading/selectors';

export const AppsScreen = () => {
  const isLoading = useSelector(selectLoading);
  const {getApps, search} = useApps();
  const apps = useSelector(selectApps);
  const ref = useRef<FlatList>(null);
  const [scrollOffset, setScrollOffset] = useState<number>(0);
  //
  //  useEffect(() => {
  //    getApps();
  //  }, [getApps]);

  const renderApp = ({item}: {item: AppsCollection}) => {
    return <AppElement app={item} />;
  };

  const ListFooter = () => {
    return (
      <Button
        icon="dots-horizontal"
        mode={'contained'}
        onPress={() => getApps()}>
        Load more
      </Button>
    );
  };

  return (
    <View style={stylesCommon.container}>
      <SearchBar onSearch={search} />
      <View style={styles.listWrapper}>
        {isLoading ? <Loading mode={'absolute'} /> : null}
        {apps.length ? (
          <FlatList
            style={styles.list}
            data={apps}
            renderItem={renderApp}
            keyExtractor={(item, index) => `${index}-${item.trackCensoredName}`}
            ListFooterComponent={ListFooter}
            maintainVisibleContentPosition={{
              minIndexForVisible: 0,
            }}
            ref={ref}
            onContentSizeChange={() => {
              ref?.current?.scrollToOffset({
                animated: true,
                offset: scrollOffset,
              });
            }}
            onScrollEndDrag={event => {
              setScrollOffset(event.nativeEvent.contentOffset.y);
            }}
            scrollEventThrottle={160}
          />
        ) : (
          <Text style={styles.noresults}>No results</Text>
        )}
      </View>
    </View>
  );
};
