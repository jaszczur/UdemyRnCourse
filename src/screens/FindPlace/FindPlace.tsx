import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { PlaceList } from '../../components/PlaceList/PlaceList';
import { ApplicationState, Place } from '../../store/model';
import { useNavigation } from '../../utils/navigation';
import { PlaceDetailsScreenNavigationParams } from '../PlaceDetails/PlaceDetails';
import { StackActions } from 'react-navigation';

export const FindPlaceScreen = () => {
  const places = useSelector((state: ApplicationState) => state.places.places);
  const navigation = useNavigation();

  const handlePlacePressed = (place: Place) => {
    navigation(
      StackActions.push({
        routeName: 'PlaceDetails',
        params: {
          placeId: place.key,
          placeName: place.name,
        } as PlaceDetailsScreenNavigationParams,
      })
    );
  };

  return (
    <View>
      <PlaceList items={places} onItemPressed={handlePlacePressed} />
    </View>
  );
};
