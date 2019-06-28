/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, { FunctionComponent } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { PlaceList } from './components/PlaceList/PlaceList';
import { PlaceInput } from './components/PlaceInput/PlaceInput';
import { Place,  ApplicationState } from './store/model';
import placeImage from './assets/amazing04.jpg';
import { PlaceDetails } from './components/PlaceDetails/PlaceDetails';
import { useSelector, useDispatch } from "react-redux";
import { ApplicationActionType, addPlace, selectPlace, deleteSelectedPlace, deselectPlace } from './store/actions';
import { Dispatch } from 'redux';

interface Props { }

const App: FunctionComponent<Props> = (props: Props) => {
  const dispatch: Dispatch<ApplicationActionType> = useDispatch();
  const { places, selectedPlace } = useSelector((state: ApplicationState) => state.places);

  const handlePlaceSubmit = (placeName: string) => {
    const newPlace = {
      key: Math.random().toString(),
      name: placeName,
      image: placeImage
    };
    dispatch(addPlace(newPlace));
  };

  const handleItemPressed = (place: Place) => {
    dispatch(selectPlace(place.key));
  };

  const handleItemDeleted = () => {
    dispatch(deleteSelectedPlace());
  };

  const closeDetailsModal = () => {
    dispatch(deselectPlace());
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
