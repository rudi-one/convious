import {useNavigation} from '@react-navigation/native';
import {NavigationProp, RouteNames} from 'navigation/types';
import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {Button, Colors, Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import stylesCommon from 'src/common/style';
import {Filters} from 'src/components/Filters';
import {ListElement} from 'src/components/ListElement';
import {Loading} from 'src/components/Loading';
import {SearchBar} from 'src/components/SearchBar';
import useApps from 'src/hooks/useApps';
import {AppCollection} from 'store/apps/types';
import {selectLoading} from 'store/ui/loading/selectors';

export const AppsScreen = () => {
  const isLoading = useSelector(selectLoading);
  const {apps, getApps, search, filters, filter, clear} = useApps();
  const [visible, setVisible] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProp>();

  const renderApp = ({item}: {item: AppCollection}) => {
    return (
      <ListElement
        item={item}
        imageUrl={item.artworkUrl512}
        navigate={() => navigation.navigate(RouteNames.app, {app: item})}
      />
    );
  };

  const ListFooter = () => {
    return (
      <Button icon="dots-horizontal" onPress={() => getApps()}>
        Load more
      </Button>
    );
  };

  return (
    <View style={stylesCommon.container}>
      <SearchBar onSearch={search} />
      <View style={stylesCommon.listWrapper}>
        {isLoading && <Loading mode={'absolute'} />}
        {apps.length ? (
          <FlatList
            style={stylesCommon.list}
            data={apps}
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
            <Text style={stylesCommon.noresults}>No results</Text>
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
