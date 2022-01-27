import React, {memo, useCallback, useState} from 'react';
import {View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {SearchBarProps} from 'src/components/SearchBar/types';
import styles from './styles';

const SearchBarComponent = ({onSearch}: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  // TODO add debouncing
  const onChangeSearch = useCallback(
    (query: string) => {
      setSearchQuery(query);
      onSearch(query);
    },
    [onSearch],
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search / type 4 chars"
        onChangeText={onChangeSearch}
        value={searchQuery}
        testID=" searchbar"
      />
    </View>
  );
};

export const SearchBar = memo(SearchBarComponent);
