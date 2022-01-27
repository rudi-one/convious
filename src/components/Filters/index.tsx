import * as React from 'react';
import {Dispatch, memo, SetStateAction} from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import {Button, Checkbox, Colors, Dialog, Text} from 'react-native-paper';
import {Filter} from 'src/components/Filters/types';
import styles from './styles';

interface FiltersProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  filters: Filter[];
  filter: (item: Filter) => void;
  clear: (checked: boolean) => void;
}

const FiltersComponent = ({
  visible,
  setVisible,
  filters,
  filter,
  clear,
}: FiltersProps) => {
  const hideDialog = () => setVisible(false);

  return (
    <Dialog visible={visible} onDismiss={hideDialog} style={styles.dialog}>
      <Dialog.Title>Filters (click to filter)</Dialog.Title>
      <Dialog.ScrollArea>
        <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
          {filters?.map(item => (
            <Pressable
              onPress={() => filter({name: item.name, checked: !item.checked})}
              key={item.name}>
              <View style={styles.checkboxWrapper}>
                <Text style={styles.checkboxLabel}>{item.name}</Text>
                <Checkbox
                  status={item.checked ? 'checked' : 'unchecked'}
                  color={Colors.greenA700}
                  uncheckedColor={Colors.red500}
                />
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </Dialog.ScrollArea>
      <Dialog.Actions>
        <Button onPress={() => clear(false)}>Clear</Button>
        <Button onPress={() => clear(true)}>Select all</Button>
        <Button onPress={hideDialog}>Done</Button>
      </Dialog.Actions>
    </Dialog>
  );
};

export const Filters = memo(FiltersComponent);
