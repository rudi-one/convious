import * as React from 'react';
import {Dispatch, memo, SetStateAction, useEffect, useRef} from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import {Button, Colors, Dialog, IconButton, Text} from 'react-native-paper';
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
  const ref = useRef<ScrollView | null>(null);

  useEffect(() => {
    if (visible) {
      ref.current?.flashScrollIndicators();
    }
  }, [visible]);

  return (
    <Dialog visible={visible} onDismiss={hideDialog} style={styles.dialog}>
      <Dialog.Title>Filters (click to filter)</Dialog.Title>
      <Dialog.ScrollArea>
        <ScrollView
          contentContainerStyle={{paddingHorizontal: 14}}
          showsVerticalScrollIndicator={true}
          ref={ref}>
          {filters?.map(item => (
            <Pressable
              onPress={() => filter({name: item.name, checked: !item.checked})}
              key={item.name}>
              <View style={styles.checkboxWrapper}>
                <Text style={styles.checkboxLabel}>{item.name}</Text>
                <IconButton
                  icon={
                    item.checked ? 'checkbox-marked' : 'checkbox-blank-outline'
                  }
                  size={24}
                  color={Colors.greenA700}
                  style={styles.checkbox}
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
