import React, { FunctionComponent } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Place } from '../../store/model';
import { ListItem } from '../ListItem/ListItem';

export interface PlaceListProps {
  items: Place[];
  onItemPressed: (placeId: Place) => void;
}

export const PlaceList: FunctionComponent<PlaceListProps> = (
  props: PlaceListProps
) => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.items}
      keyExtractor={(item) => item.key}
      renderItem={(info) => (
        <ListItem
          place={info.item}
          onPress={() => props.onItemPressed(info.item)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
});
