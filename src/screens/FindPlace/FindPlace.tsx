import React from "react";
import { View } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { useSelector } from "react-redux";
import { PlaceList } from "../../components/PlaceList/PlaceList";
import { ApplicationState, Place } from "../../store/model";
import { useNavigation } from "../../utils/navigation";
import { PlaceDetailsScreenNavigationParams } from "../PlaceDetails/PlaceDetails";

export const FindPlaceScreen = ({ navigation }: NavigationScreenProps) => {
    const places = useSelector((state: ApplicationState) => state.places.places);

    const handlePlacePressed = (place: Place) => {
        navigation.push("PlaceDetails", {
            placeId: place.key,
            placeName: place.name
        } as PlaceDetailsScreenNavigationParams);
    };

    return (
        <View>
            <PlaceList items={places} onItemPressed={handlePlacePressed} />
        </View>
    );
};
