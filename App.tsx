/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, { useState, FunctionComponent } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { PlaceList } from './src/components/PlaceList/PlaceList';
import { PlaceInput } from './src/components/PlaceInput/PlaceInput';

interface Props { }

const App: FunctionComponent<Props> = (props: Props) => {
  const [places, setPlaces] = useState([] as string[]);

  const handlePlaceSubmit = (placeName: string) => {
    setPlaces([...places, placeName]);
  };

  const handleItemDeleted = (placeIndex: number) => {
    setPlaces(places.filter((place: string, idx: number) => idx !== placeIndex));
  };

  return (
    <View style={styles.container}>
      <PlaceInput onPlaceSubmit={handlePlaceSubmit} />
      <PlaceList items={places} onItemDeleted={handleItemDeleted} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20
  } as ViewStyle,
});