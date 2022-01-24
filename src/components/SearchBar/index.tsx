import React, {useState} from 'react';
import {View} from 'react-native';
import {Searchbar as PaperSearchbar} from 'react-native-paper';
import {SearchBarProps} from 'src/components/SearchBar/types';
import styles from './styles';

const SearchBar = ({onSearch}: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <View style={styles.container}>
      <PaperSearchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
};

export default SearchBar;
