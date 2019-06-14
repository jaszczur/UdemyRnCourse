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
import { Place } from './src/model';
import placeImage from './src/assets/amazing04.jpg';
import { PlaceDetails, OptionalPlace } from './src/components/PlaceDetails/PlaceDetails';

interface Props { }

const App: FunctionComponent<Props> = (props: Props) => {
  const [places, setPlaces] = useState([] as Place[]);
  const [selectedPlace, setSelectedPlace] = useState(null as OptionalPlace);

  const handlePlaceSubmit = (placeName: string) => {
    setPlaces([...places, {
      key: Math.random().toString(), 
      name: placeName,
      image: placeImage
    }]);
  };

  const handleItemPressed = (place: Place) => {
    setSelectedPlace(place);
  };

  const handleItemDeleted = (place: Place) => {
    setPlaces(places.filter(p => place.key !== p.key));
    setSelectedPlace(null);
  };

  const closeDetailsModal = () => {
    setSelectedPlace(null);
  };

  return (
    <View style={styles.container}>
      <PlaceDetails place={selectedPlace} onClose={closeDetailsModal} onDelete={handleItemDeleted} />
      <PlaceInput onPlaceSubmit={handlePlaceSubmit} />
      <PlaceList items={places} onItemPressed={handleItemPressed} />
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